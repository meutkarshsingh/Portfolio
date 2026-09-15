export const projects = [
  {
    id: 1,
    title: "Diabetes Prediction System",
    description: "A machine learning-based web application that predicts diabetes risk based on relevant health parameters.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Healthcare professional reviewing medical data on a tablet",
    technologies: ["Python", "Machine Learning", "Flask", "Scikit-learn"],
    github: "https://github.com/meutkarshsingh/Diabetes-Prediction-System/",
    liveDemo: null,
    problem: "Diabetes is a growing health concern worldwide. Early detection and risk assessment can help individuals take preventive measures.",
    solution: "Built a predictive model using machine learning algorithms that analyzes health parameters to assess diabetes risk.",
    features: [
      "Data preprocessing and missing-value handling",
      "Feature scaling for optimal model performance",
      "Model training with multiple algorithms",
      "Flask web application for user interaction",
      "Real-time prediction interface"
    ],
    architecture: "The system uses a supervised learning approach with scikit-learn, deployed through a Flask web framework for easy accessibility."
  },
  {
    id: 2,
    title: "Face Recognition Attendance System",
    description: "An automated attendance system using computer vision and face recognition technology.",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Developer working with a computer vision interface",
    technologies: ["Python", "Computer Vision", "Face Recognition", "Flask"],
    github: "https://github.com/meutkarshsingh/Face-Recognition-Attendance-System",
    liveDemo: null,
    problem: "Traditional attendance systems are time-consuming and prone to errors. Manual tracking is inefficient for large groups.",
    solution: "Developed an automated system that uses face recognition to mark attendance quickly and accurately.",
    features: [
      "Real-time face detection",
      "Face recognition and matching",
      "Automated attendance logging",
      "User management interface",
      "Attendance reports generation"
    ],
    architecture: "Uses computer vision libraries for face detection and recognition, with Flask providing the web interface for management."
  },
  {
    id: 3,
    title: "Expense Tracker for Students",
    description: "A student-focused expense management application for tracking and analyzing spending.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Notebook, calculator, and financial planning notes",
    technologies: ["Java", "Desktop Application", "SQL"],
    github: "https://github.com/meutkarshsingh/Expense-Tracker-for-Students",
    liveDemo: null,
    problem: "Students often struggle with budget management and tracking their expenses effectively.",
    solution: "Created a desktop application that helps students track expenses, manage budgets, and analyze spending patterns.",
    features: [
      "Expense tracking and categorization",
      "Budget management and alerts",
      "Spending analysis and reports",
      "Financial insights and trends",
      "Data persistence with SQL database"
    ],
    architecture: "Java-based desktop application with SQL database backend for data storage and retrieval."
  },
  {
    id: 4,
    title: "Garbage Collection Algorithm Visualizer",
    description: "An interactive visualization of garbage collection algorithms to understand memory management.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Close-up of a computer circuit board representing system architecture",
    technologies: ["Java", "Data Structures", "Algorithms"],
    github: "https://github.com/meutkarshsingh/Garbage-Collection-Algorithm-Visualizer",
    liveDemo: null,
    problem: "Understanding garbage collection algorithms can be challenging without visual representation.",
    solution: "Built an interactive visualizer that demonstrates how different garbage collection algorithms work.",
    features: [
      "Visual representation of memory blocks",
      "Object allocation and deallocation",
      "Multiple garbage collection algorithms",
      "Step-by-step animation",
      "Interactive learning experience"
    ],
    architecture: "Java application with custom visualization components to demonstrate memory management concepts."
  }
];
