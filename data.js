// User authentication data
const users = {
    "learner": {
        password: "learn1234",
        name: "Learner",
        role: "student"
    }
};

// Learning paths and skills data
const learningPaths = {
    "web-development": {
        title: "Web Development",
        description: "Complete roadmap for becoming a web developer",
        skills: [
            {
                id: "html-basics",
                title: "HTML Basics",
                description: "Learn the fundamentals of HTML markup language",
                level: "beginner",
                estimatedTime: "1 day",
                prerequisites: [],
                resources: [
                    "https://developer.mozilla.org/en-US/docs/Web/HTML",
                    "https://www.w3schools.com/html/",

                ]
            },
            {
                id: "css-fundamentals",
                title: "CSS Fundamentals",
                description: "Master styling and layout with CSS",
                level: "beginner",
                estimatedTime: "2 days",
                prerequisites: ["html-basics"],
                resources: [
                    "https://developer.mozilla.org/en-US/docs/Web/CSS",
                    "https://css-tricks.com/"
                ]
            },
            {
                id: "javascript-basics",
                title: "JavaScript Basics",
                description: "Learn programming fundamentals with JavaScript",
                level: "beginner",
                estimatedTime: "4 days",
                prerequisites: ["html-basics", "css-fundamentals"],
                resources: [
                    "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                    "https://javascript.info/",
                    "https://youtu.be/EerdGm-ehJQ?si=9mMl46jOEpeetxWV"

                ]
            },
            {
                id: "responsive-design",
                title: "Responsive Web Design",
                description: "Create websites that work on all devices",
                level: "intermediate",
                estimatedTime: "2 days",
                prerequisites: ["css-fundamentals"],
                resources: [
                    "https://web.dev/responsive-web-design-basics/",
                    "https://developers.google.com/web/fundamentals/design-and-ux/responsive",
                    "https://youtu.be/jwCmIBJ8Jtc?si=DuB-ZC93Giv2Fzt8"
                ]
            },
            {
                id: "dom-manipulation",
                title: "DOM Manipulation",
                description: "Learn to interact with web pages using JavaScript",
                level: "intermediate",
                estimatedTime: "3 days",
                prerequisites: ["javascript-basics"],
                resources: [
                    "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
                    "https://eloquentjavascript.net/14_dom.html"
                ]
            },
            {
                id: "git-version-control",
                title: "Git & Version Control",
                description: "Learn version control with Git and GitHub",
                level: "intermediate",
                estimatedTime: "2 days",
                prerequisites: ["javascript-basics"],
                resources: [
                    "https://git-scm.com/doc",
                    "https://github.com/git-guides"
                ]
            },
            {
                id: "react-basics",
                title: "React Fundamentals",
                description: "Build dynamic user interfaces with React",
                level: "advanced",
                estimatedTime: "6 days",
                prerequisites: ["dom-manipulation", "git-version-control"],
                resources: [
                    "https://reactjs.org/docs/getting-started.html",
                    "https://react.dev/",
                    "https://youtu.be/bMknfKXIFA8?si=0IiKj0F_RKH492Fw"
                ]
            },
            {
                id: "node-backend",
                title: "Node.js Backend",
                description: "Create server-side applications with Node.js",
                level: "advanced",
                estimatedTime: "4 days",
                prerequisites: ["react-basics"],
                resources: [
                    "https://nodejs.org/en/docs/",
                    "https://expressjs.com/"
                ]
            }
        ]
    },
    // "data-science": {
    //     title: "Data Science",
    //     description: "Complete roadmap for becoming a data scientist",
    //     skills: [
    //         {
    //             id: "python-basics",
    //             title: "Python Programming",
    //             description: "Learn Python programming fundamentals",
    //             level: "beginner",
    //             estimatedTime: "4 weeks",
    //             prerequisites: [],
    //             resources: [
    //                 "https://docs.python.org/3/tutorial/",
    //                 "https://www.python.org/about/gettingstarted/"
    //             ]
    //         },
    //         {
    //             id: "statistics-math",
    //             title: "Statistics & Mathematics",
    //             description: "Essential math and statistics for data science",
    //             level: "beginner",
    //             estimatedTime: "6 weeks",
    //             prerequisites: [],
    //             resources: [
    //                 "https://www.khanacademy.org/math/statistics-probability",
    //                 "https://www.coursera.org/learn/basic-statistics"
    //             ]
    //         },
    //         {
    //             id: "numpy-pandas",
    //             title: "NumPy & Pandas",
    //             description: "Data manipulation and analysis with Python libraries",
    //             level: "intermediate",
    //             estimatedTime: "4 weeks",
    //             prerequisites: ["python-basics"],
    //             resources: [
    //                 "https://numpy.org/doc/stable/user/",
    //                 "https://pandas.pydata.org/docs/"
    //             ]
    //         },
    //         {
    //             id: "data-visualization",
    //             title: "Data Visualization",
    //             description: "Create compelling visualizations with Matplotlib & Seaborn",
    //             level: "intermediate",
    //             estimatedTime: "3 weeks",
    //             prerequisites: ["numpy-pandas"],
    //             resources: [
    //                 "https://matplotlib.org/stable/tutorials/index.html",
    //                 "https://seaborn.pydata.org/tutorial.html"
    //             ]
    //         },
    //         {
    //             id: "machine-learning",
    //             title: "Machine Learning",
    //             description: "Build predictive models with scikit-learn",
    //             level: "advanced",
    //             estimatedTime: "8 weeks",
    //             prerequisites: ["statistics-math", "data-visualization"],
    //             resources: [
    //                 "https://scikit-learn.org/stable/tutorial/index.html",
    //                 "https://www.coursera.org/learn/machine-learning"
    //             ]
    //         },
    //         {
    //             id: "deep-learning",
    //             title: "Deep Learning",
    //             description: "Neural networks and deep learning with TensorFlow",
    //             level: "advanced",
    //             estimatedTime: "10 weeks",
    //             prerequisites: ["machine-learning"],
    //             resources: [
    //                 "https://www.tensorflow.org/tutorials",
    //                 "https://www.deeplearning.ai/"
    //             ]
    //         }
    //     ]
    // },
    // "ui-ux-design": {
    //     title: "UI/UX Design",
    //     description: "Complete roadmap for becoming a UI/UX designer",
    //     skills: [
    //         {
    //             id: "design-principles",
    //             title: "Design Principles",
    //             description: "Learn fundamental design principles and theory",
    //             level: "beginner",
    //             estimatedTime: "3 weeks",
    //             prerequisites: [],
    //             resources: [
    //                 "https://www.interaction-design.org/literature/topics/design-principles",
    //                 "https://material.io/design/introduction"
    //             ]
    //         },
    //         {
    //             id: "color-typography",
    //             title: "Color Theory & Typography",
    //             description: "Master color usage and typography in design",
    //             level: "beginner",
    //             estimatedTime: "2 weeks",
    //             prerequisites: ["design-principles"],
    //             resources: [
    //                 "https://color.adobe.com/create/color-wheel",
    //                 "https://fonts.google.com/"
    //             ]
    //         },
    //         {
    //             id: "figma-basics",
    //             title: "Figma Fundamentals",
    //             description: "Learn to use Figma for design and prototyping",
    //             level: "intermediate",
    //             estimatedTime: "3 weeks",
    //             prerequisites: ["color-typography"],
    //             resources: [
    //                 "https://help.figma.com/hc/en-us",
    //                 "https://www.figma.com/academy/"
    //             ]
    //         },
    //         {
    //             id: "user-research",
    //             title: "User Research",
    //             description: "Understand user needs through research methods",
    //             level: "intermediate",
    //             estimatedTime: "4 weeks",
    //             prerequisites: ["figma-basics"],
    //             resources: [
    //                 "https://www.nngroup.com/articles/which-ux-research-methods/",
    //                 "https://www.usability.gov/how-to-and-tools/methods/"
    //             ]
    //         },
    //         {
    //             id: "wireframing-prototyping",
    //             title: "Wireframing & Prototyping",
    //             description: "Create wireframes and interactive prototypes",
    //             level: "advanced",
    //             estimatedTime: "4 weeks",
    //             prerequisites: ["user-research"],
    //             resources: [
    //                 "https://balsamiq.com/learn/articles/what-are-wireframes/",
    //                 "https://www.figma.com/prototyping/"
    //             ]
    //         },
    //         {
    //             id: "usability-testing",
    //             title: "Usability Testing",
    //             description: "Test and validate your designs with users",
    //             level: "advanced",
    //             estimatedTime: "3 weeks",
    //             prerequisites: ["wireframing-prototyping"],
    //             resources: [
    //                 "https://www.nngroup.com/articles/usability-testing-101/",
    //                 "https://maze.co/guides/usability-testing/"
    //             ]
    //         }
        // ]
    // }
};
