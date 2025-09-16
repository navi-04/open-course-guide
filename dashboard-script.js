// Global variables
let currentUser = null;
let userProgress = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    checkAuthentication();
});

// Authentication check
function checkAuthentication() {
    const savedUser = localStorage.getItem('currentUser');
    if (!savedUser) {
        // Not logged in, redirect to login
        window.location.href = 'login.html';
        return;
    }
    
    currentUser = JSON.parse(savedUser);
    loadUserProgress();
    initializeDashboard();
}

function logout() {
    currentUser = null;
    userProgress = {};
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}

// Dashboard functions
function initializeDashboard() {
    document.getElementById('welcomeUser').textContent = `Welcome, ${currentUser.name}!`;
    loadLearningPaths();
    updateProgressStats();
}

function loadLearningPaths() {
    const container = document.getElementById('pathsContainer');
    container.innerHTML = '';

    Object.entries(learningPaths).forEach(([pathId, path]) => {
        const pathCard = createPathCard(pathId, path);
        container.appendChild(pathCard);
    });
}

function createPathCard(pathId, path) {
    const card = document.createElement('div');
    card.className = 'path-card';
    
    const progress = calculatePathProgress(pathId);
    
    card.innerHTML = `
        <h3>${path.title}</h3>
        <p>${path.description}</p>
        <div class="path-progress">
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progress}%"></div>
            </div>
            <span class="progress-text">${progress}% Complete</span>
        </div>
        <button onclick="showRoadmap('${pathId}')" class="view-roadmap-btn">View Roadmap</button>
    `;
    
    return card;
}

function showRoadmap(pathId) {
    const path = learningPaths[pathId];
    const container = document.getElementById('skillsRoadmap');
    const titleElement = document.getElementById('currentPathTitle');
    
    titleElement.textContent = `${path.title} Roadmap`;
    container.innerHTML = '';
    
    path.skills.forEach((skill, index) => {
        const skillCard = createSkillCard(pathId, skill, index);
        container.appendChild(skillCard);
        
        // Add connection line if not the last skill
        if (index < path.skills.length - 1) {
            const connector = document.createElement('div');
            connector.className = 'skill-connector';
            container.appendChild(connector);
        }
    });
}

function createSkillCard(pathId, skill, index) {
    const card = document.createElement('div');
    const isCompleted = isSkillCompleted(pathId, skill.id);
    const isAvailable = isSkillAvailable(pathId, skill);
    
    card.className = `skill-card ${skill.level} ${isCompleted ? 'completed' : ''} ${!isAvailable ? 'locked' : ''}`;
    
    const statusIcon = isCompleted ? '✅' : (isAvailable ? '🎯' : '🔒');
    
    card.innerHTML = `
        <div class="skill-header">
            <span class="skill-status">${statusIcon}</span>
            <h4>${skill.title}</h4>
            <span class="skill-level">${skill.level}</span>
        </div>
        <p>${skill.description}</p>
        <div class="skill-meta">
            <span class="estimated-time">⏱️ ${skill.estimatedTime}</span>
            ${skill.prerequisites.length > 0 ? `<span class="prerequisites">📋 Prerequisites: ${skill.prerequisites.length}</span>` : ''}
        </div>
        <div class="skill-actions">
            ${isAvailable ? `
                <button onclick="toggleSkillCompletion('${pathId}', '${skill.id}')" 
                        class="toggle-btn ${isCompleted ? 'completed' : ''}">
                    ${isCompleted ? 'Mark Incomplete' : 'Mark Complete'}
                </button>
            ` : ''}
            <button onclick="showSkillDetails('${pathId}', '${skill.id}')" class="details-btn">View Details</button>
        </div>
    `;
    
    return card;
}

function isSkillAvailable(pathId, skill) {
    if (skill.prerequisites.length === 0) return true;
    
    return skill.prerequisites.every(prereqId => 
        isSkillCompleted(pathId, prereqId)
    );
}

function isSkillCompleted(pathId, skillId) {
    return userProgress[pathId] && userProgress[pathId][skillId] === true;
}

function toggleSkillCompletion(pathId, skillId) {
    if (!userProgress[pathId]) {
        userProgress[pathId] = {};
    }
    
    userProgress[pathId][skillId] = !userProgress[pathId][skillId];
    saveUserProgress();
    updateProgressStats();
    
    // Refresh the roadmap to update UI
    showRoadmap(pathId);
}

function showSkillDetails(pathId, skillId) {
    const path = learningPaths[pathId];
    const skill = path.skills.find(s => s.id === skillId);
    
    // Populate modal content
    document.getElementById('modalSkillTitle').textContent = skill.title;
    document.getElementById('modalSkillDescription').textContent = skill.description;
    document.getElementById('modalSkillLevel').textContent = skill.level;
    document.getElementById('modalSkillLevel').className = `level-badge ${skill.level}`;
    document.getElementById('modalSkillTime').textContent = skill.estimatedTime;
    
    // Handle prerequisites
    const prerequisitesSection = document.getElementById('prerequisitesSection');
    const prerequisitesContainer = document.getElementById('modalPrerequisites');
    
    if (skill.prerequisites.length > 0) {
        prerequisitesSection.style.display = 'block';
        prerequisitesContainer.innerHTML = skill.prerequisites.map(prereqId => {
            // Find the prerequisite skill name
            const prereqSkill = path.skills.find(s => s.id === prereqId);
            const prereqName = prereqSkill ? prereqSkill.title : prereqId;
            return `<span class="prerequisite-tag">${prereqName}</span>`;
        }).join('');
    } else {
        prerequisitesSection.style.display = 'none';
    }
    
    // Handle resources
    const resourcesContainer = document.getElementById('modalResources');
    resourcesContainer.innerHTML = skill.resources.map(resource => {
        const domain = new URL(resource).hostname.replace('www.', '');
        return `
            <a href="${resource}" target="_blank" class="resource-link">
                <span class="resource-icon">🔗</span>
                <span class="resource-text">${domain}</span>
                <span class="resource-icon">↗</span>
            </a>
        `;
    }).join('');
    
    // Show modal
    document.getElementById('skillModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeSkillModal() {
    document.getElementById('skillModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('skillModal');
    if (event.target === modal) {
        closeSkillModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeSkillModal();
    }
});

// Progress tracking functions
function calculatePathProgress(pathId) {
    const path = learningPaths[pathId];
    if (!path || !userProgress[pathId]) return 0;
    
    const completedSkills = Object.values(userProgress[pathId]).filter(completed => completed).length;
    const totalSkills = path.skills.length;
    
    return Math.round((completedSkills / totalSkills) * 100);
}

function updateProgressStats() {
    let totalSkills = 0;
    let completedSkills = 0;
    
    Object.entries(learningPaths).forEach(([pathId, path]) => {
        totalSkills += path.skills.length;
        if (userProgress[pathId]) {
            completedSkills += Object.values(userProgress[pathId]).filter(completed => completed).length;
        }
    });
    
    const progressPercentage = totalSkills > 0 ? Math.round((completedSkills / totalSkills) * 100) : 0;
    
    document.getElementById('completedSkills').textContent = completedSkills;
    document.getElementById('totalSkills').textContent = totalSkills;
    document.getElementById('progressPercentage').textContent = `${progressPercentage}%`;
}

// Local storage functions
function saveUserProgress() {
    const storageKey = `progress_${currentUser.username}`;
    localStorage.setItem(storageKey, JSON.stringify(userProgress));
}

function loadUserProgress() {
    const storageKey = `progress_${currentUser.username}`;
    const savedProgress = localStorage.getItem(storageKey);
    
    if (savedProgress) {
        userProgress = JSON.parse(savedProgress);
    } else {
        userProgress = {};
    }
}
