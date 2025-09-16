// Login page script
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is already logged in
    checkExistingLogin();
    
    // Set up form submission
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    
    // Set up enter key for login
    document.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            handleLogin(event);
        }
    });
});

function checkExistingLogin() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        // User is already logged in, redirect to dashboard
        window.location.href = 'dashboard.html';
    }
}

function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('loginError');
    const loginBtn = document.querySelector('.login-btn');
    
    // Clear previous errors
    clearError();
    
    // Validation
    if (!username || !password) {
        showError('Please enter both username and password.');
        return;
    }
    
    // Show loading state
    loginBtn.textContent = 'Logging in...';
    loginBtn.classList.add('loading');
    loginBtn.disabled = true;
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        // Check credentials
        if (users[username] && users[username].password === password) {
            // Success
            const currentUser = {
                username: username,
                ...users[username]
            };
            
            // Save user session
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            
            // Show success state
            loginBtn.textContent = 'Login Successful!';
            loginBtn.classList.remove('loading');
            loginBtn.classList.add('success');
            
            // Redirect to dashboard after short delay
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1000);
            
        } else {
            // Failed login
            showError('Invalid username or password. Please try again.');
            resetLoginButton(loginBtn);
        }
    }, 800);
}

function showError(message) {
    const errorElement = document.getElementById('loginError');
    errorElement.textContent = message;
    errorElement.style.animation = 'shake 0.5s ease-in-out';
    
    // Remove animation class after animation completes
    setTimeout(() => {
        errorElement.style.animation = '';
    }, 500);
}

function clearError() {
    document.getElementById('loginError').textContent = '';
}

function resetLoginButton(loginBtn) {
    loginBtn.textContent = 'Login';
    loginBtn.classList.remove('loading', 'success');
    loginBtn.disabled = false;
}

// Add shake animation for errors
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);
