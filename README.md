# Learning Path Guide

A comprehensive learning path website that provides personalized roadmaps for different skills with user authentication and progress tracking.

## Features

### 🔐 User Authentication
- Secure login system with username and password
- Multiple user accounts supported
- Session persistence using localStorage
- Demo accounts for testing

### 📚 Learning Paths
- **Web Development**: Complete roadmap from HTML basics to full-stack development
- **Data Science**: Comprehensive path from Python programming to deep learning
- **UI/UX Design**: Design fundamentals to advanced user experience concepts

### 🎯 Skill Management
- Visual roadmap with skill dependencies
- Progress tracking for each skill
- Skill prerequisites system
- Difficulty levels (Beginner, Intermediate, Advanced)
- Estimated time for completion
- External learning resources

### 💾 Data Persistence
- Individual user progress stored locally
- Progress persists across browser sessions
- User-specific data isolation

## Getting Started

### Prerequisites
- Any modern web browser
- No server setup required - runs completely client-side

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/navi-04/open-course-guide.git
   cd open-course-guide
   ```

2. Open `index.html` in your web browser
   - This will automatically redirect you to the login page
   - Or directly open `login.html` to go straight to login


## Usage

### Logging In
1. Open the application in your browser (it will redirect to login automatically)
2. Use one of the available accounts (naveen/1234 or raj/1234) or add your own in `data.js`
3. Click "Login" to access the dashboard
4. You can also click on any account card to auto-fill credentials

### Navigating Learning Paths
1. View available learning paths on the dashboard
2. Click "View Roadmap" on any learning path
3. See your progress and available skills
4. Mark skills as complete when finished

### Tracking Progress
- Dashboard shows overall progress statistics
- Each learning path displays completion percentage
- Skills are color-coded by difficulty level
- Prerequisites must be completed before unlocking new skills

## File Structure

```
open-course-guide/
├── index.html              # Main entry point (redirects to login/dashboard)
├── login.html              # Dedicated login page
├── dashboard.html          # Main dashboard with learning paths
├── login-styles.css        # Styling for login page
├── styles.css              # CSS styling for dashboard
├── login-script.js         # JavaScript for login functionality
├── dashboard-script.js     # JavaScript for dashboard logic
├── data.js                 # User accounts and learning path data
└── README.md               # Documentation
```

## Customization

### Adding New Users
Edit the `users` object in `data.js`:

```javascript
const users = {
    "newuser": {
        password: "userpassword",
        name: "New User Name",
        role: "student"
    }
    // ... existing users
};
```

### Adding Learning Paths
Add new paths to the `learningPaths` object in `data.js`:

```javascript
const learningPaths = {
    "new-path": {
        title: "New Learning Path",
        description: "Description of the learning path",
        skills: [
            {
                id: "skill-1",
                title: "Skill Title",
                description: "Skill description",
                level: "beginner", // beginner, intermediate, advanced
                estimatedTime: "2 weeks",
                prerequisites: [], // Array of skill IDs
                resources: [
                    "https://example.com/resource1",
                    "https://example.com/resource2"
                ]
            }
            // ... more skills
        ]
    }
    // ... existing paths
};
```

### Modifying Skills
Each skill can have the following properties:
- `id`: Unique identifier
- `title`: Display name
- `description`: What the skill covers
- `level`: Difficulty (beginner/intermediate/advanced)
- `estimatedTime`: Time needed to complete
- `prerequisites`: Array of required skill IDs
- `resources`: Array of learning resource URLs

## Technical Details

### Data Storage
- User authentication data stored in `data.js`
- User progress stored in browser's localStorage
- Key format: `progress_{username}`
- Data persists across browser sessions

### Progress Tracking
- Boolean completion status per skill
- Automatic prerequisite checking
- Real-time progress statistics
- Visual progress indicators

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interface
- Cross-browser compatibility

## Browser Support
- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License
This project is open source and available under the [MIT License](LICENSE).

## Support
For questions or issues, please open a GitHub issue or contact the maintainers.