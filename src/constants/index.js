import {
  mobile,
  backend,
  creator,
  web,
  wanderlust_loop,
  veni_vidi_disceres,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Credentials",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
    link: "https://drive.google.com/file/d/1sIEZiwRniWOGZtiy5-qDpwaZYmlC5Flg/view?usp=sharing",
  },
  {
    title: "Backend Engineer",
    icon: backend,
    link: "https://drive.google.com/file/d/1sIEZiwRniWOGZtiy5-qDpwaZYmlC5Flg/view?usp=sharing",
  },
  {
    title: "AI/ML Integrations",
    icon: creator,
  },
  {
    title: "Software Engineer",
    icon: mobile,
    link: "https://drive.google.com/file/d/1QIpyvnUqjXxK4E2PEJWD8HWWUeVnD2KA/view?usp=sharing",
  },
];

const technologies = [
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "React JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    name: "git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

export const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C++", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "C", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "JavaScript", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Python", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
    ]
  },
  {
    title: "Frontend Stack",
    skills: [
      { name: "React.js", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind CSS", level: 92, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
      { name: "HTML5", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Bootstrap", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" }
    ]
  },
  {
    title: "Backend & DB",
    skills: [
      { name: "Node.js", level: 92, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", level: 88, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MongoDB", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "SQL", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
    ]
  },
  {
    title: "AI / ML Concepts",
    skills: [
      { name: "Recommendation Systems", level: 85, icon: "🎯" },
      { name: "Thompson Sampling", level: 85, icon: "🧠" },
      { name: "UCB Bandit Algorithms", level: 80, icon: "📈" },
      { name: "NLP", level: 75, icon: "💬" }
    ]
  },
  {
    title: "Tools & Clouds",
    skills: [
      { name: "Git & GitHub", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Cloudinary", level: 85, icon: "☁️" },
      { name: "VS Code", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Ubuntu / Linux", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" }
    ]
  },
  {
    title: "Core Computer Science",
    skills: [
      { name: "Data Structures & Algorithms", level: 95, icon: "💻" },
      { name: "Object Oriented Programming", level: 90, icon: "🧱" },
      { name: "DBMS", level: 85, icon: "🗄️" },
      { name: "Operating Systems", level: 80, icon: "⚙️" },
      { name: "Computer Networks", level: 80, icon: "🌐" }
    ]
  }
];

const experiences = [
  {
    title: "Software Development Intern",
    company_name: "Zenix Automotive Pvt. Ltd.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", // Node/JS Tech logo fallback
    iconBg: "#1d1836",
    date: "Jan 2026 – Apr 2026",
    points: [
      "Optimized critical dashboard rendering, boosting visual responsiveness and metrics computation speed by 40%.",
      "Reduced system API latency by 35% through query refactoring, indexing pipelines, and payload size reduction.",
      "Built and deployed interactive telemetry visualization modules for real-time diagnostic reporting.",
      "Refactored legacy application codebase into a clean, scalable, modular architecture aligned with solid backend design practices.",
      "Recognized with the prestigious Best Intern Award for delivering exceptional engineering contributions."
    ],
    link: "https://drive.google.com/file/d/1QIpyvnUqjXxK4E2PEJWD8HWWUeVnD2KA/view?usp=sharing"
  },
  {
    title: "Research Intern (AI/ML)",
    company_name: "Indian Institute of Technology (IIT), BHU",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", // Python logo fallback
    iconBg: "#383E56",
    date: "May 2025 – Jul 2025",
    points: [
      "Designed and developed a reinforcement learning experimentation framework to evaluate multi-armed bandit scenarios.",
      "Implemented and simulated Policy Gradient, Upper Confidence Bound (UCB), and Thompson Sampling decision-making pipelines.",
      "Boosted experimental reproducibility by 50% through simulated environment tracking and parameter serialization.",
      "Improved reinforcement learning algorithm convergence speeds by 30% via reward-shaping functions and learning-rate tuning.",
      "Engineered an intelligent recommendation system displaying highly tailored agent-driven content recommendation."
    ],
    link: "https://drive.google.com/file/d/135JdUhYzsYqqGz72WE2S_ig9HFBgR0uA/view?usp=sharing"
  }
];

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Indian Institute of Information Technology (IIIT), Manipur",
    date: "2022 - 2026",
    grade: "CGPA: 8.25 / 10.0",
    gradeLabel: "CGPA",
    details: "Focus on Algorithms, Systems Engineering, Data Structures, OOPs, DBMS, Operating Systems, and Computer Networks. Solved 400+ DSA problems in C++ as part of academic and competitive practice.",
    icon: "🎓",
    type: "college"
  },
  {
    degree: "Class XII (Intermediate — Science Stream)",
    institution: "Little Flower School",
    date: "2020 - 2021",
    grade: "85%",
    gradeLabel: "Percentage",
    details: "Completed Higher Secondary education with Science stream (PCM + Computer Science). Developed strong analytical and problem-solving foundations in Physics, Chemistry, and Mathematics.",
    icon: "📘",
    type: "school"
  },
  {
    degree: "Class X (Matriculation)",
    institution: "Sunbeam School, Varuna",
    date: "2018 - 2019",
    grade: "91.1%",
    gradeLabel: "Percentage",
    details: "Achieved outstanding academic performance with distinction in key subjects. Demonstrated exceptional aptitude in Mathematics and Science from an early age.",
    highlights: [
      { subject: "Mathematics", score: "96/100" },
      { subject: "Science", score: "95/100" }
    ],
    icon: "📗",
    type: "school"
  }
];

export const achievements = [
  {
    title: "400+ DSA Problems Solved",
    description: "Demonstrated advanced problem-solving skill sets in C++ by solving 400+ analytical challenges across competitive platforms.",
    icon: "🏆"
  },
  {
    title: "Best Intern Award",
    description: "Granted at Zenix Automotive Pvt. Ltd. for significant contributions to system latency reduction and rendering optimizations.",
    icon: "🥇"
  },
  {
    title: "Full Stack Development Certification",
    description: "Verified training and project building in responsive frontends, backend systems, database schemas, and RESTful APIs.",
    icon: "📜"
  },
  {
    title: "C++ DSA Certification",
    description: "Certified proficiency in advanced C++ topics including memory management, graph algorithms, dynamic programming, and systems design.",
    icon: "🎓"
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  {
    name: "Wanderlust Loop",
    description:
      "A production-ready travel discovery platform featuring secure user authentication, responsive design, Cloudinary media storage, and a machine learning recommendation pipeline using the Thompson Sampling bandit algorithm.",
    achievements: [
      "Deployed travel portal on Render utilizing a scalable MERN stack with EJS templates.",
      "Reduced server latency by 35% through indexing MongoDB queries and utilizing caching layers.",
      "Reduced front-end load times by 40% by compressing media assets and async chunk loading.",
      "Integrated a customized Thompson Sampling reinforcement learning model for automated recommendation loops."
    ],
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "orange-text-gradient",
      },
      {
        name: "Cloudinary",
        color: "blue-text-gradient",
      }
    ],
    image: wanderlust_loop,
    source_code_link: "https://github.com/yaduvanshi07",
    live_link: "https://wanderlust-loop.onrender.com/listings",
    category: "Full Stack"
  },
  {
    name: "Veni Vidi Disceres",
    description:
      "An AI-powered document analysis platform that extracts unstructured text from PDFs/images, generates highly accurate semantic answers using NLP models, and presents details through a responsive React dashboard.",
    achievements: [
      "Developed robust OCR and NLP microservices to parse, index, and process documents.",
      "Achieved a 85% relevant answer accuracy for semantic questions based on custom parsed texts.",
      "Built a seamless, fully responsive glassmorphism UI for file uploads and analytical insights.",
      "Bridged a Python AI core with an Express/Node API backend for smooth real-time requests."
    ],
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Python AI",
        color: "orange-text-gradient",
      },
      {
        name: "NLP / OCR",
        color: "pink-text-gradient",
      }
    ],
    image: veni_vidi_disceres,
    source_code_link: "https://github.com/yaduvanshi07",
    live_link: "",
    category: "AI / ML"
  },
];

export { services, technologies, experiences, testimonials, projects };

export const certifications = [
  {
    title: "Full Stack Development",
    issuer: "Professional Certification Program",
    date: "2025",
    description: "Comprehensive training covering end-to-end web application development — from responsive frontend design with React.js to scalable backend architecture with Node.js, Express.js, and MongoDB. Includes hands-on projects deploying RESTful APIs, authentication systems, and cloud-hosted full-stack applications.",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication"],
    icon: "💻",
    color: "#00cea8",
    pdf: "https://drive.google.com/file/d/1sIEZiwRniWOGZtiy5-qDpwaZYmlC5Flg/view?usp=sharing"
  },
  {
    title: "C++ and Data Structures & Algorithms",
    issuer: "Professional Certification Program",
    date: "2024",
    description: "Intensive certification in advanced C++ programming and algorithmic problem-solving. Covers memory management, STL mastery, graph algorithms, dynamic programming, greedy strategies, and systems-level design patterns — validated by solving 400+ competitive programming challenges.",
    skills: ["C++", "STL", "Dynamic Programming", "Graph Algorithms", "Greedy", "Recursion"],
    icon: "🧠",
    color: "#915eff",
    pdf: "/C++ and DSA.pdf"
  },
  {
    title: "Software Testing",
    issuer: "Professional Certification Program",
    date: "2025",
    description: "End-to-end software quality assurance training covering manual testing methodologies, test case design, defect lifecycle management, regression testing strategies, and an introduction to automation testing frameworks. Emphasizes real-world QA workflows and industry-standard testing tools.",
    skills: ["Manual Testing", "Test Case Design", "Defect Tracking", "Regression Testing", "QA Workflows"],
    icon: "🧪",
    color: "#bf61ff",
    pdf: "https://drive.google.com/file/d/1VFBaI08j5D7jCTbq0FGFuk17px94ZJ87/view?usp=sharing"
  },
  {
    title: "Industrial Internet of Things (IIoT) 4.0",
    issuer: "NPTEL / Academic Certification",
    date: "2024",
    description: "In-depth exploration of Industry 4.0 concepts including Industrial IoT architectures, smart manufacturing, sensor networks, edge computing, cyber-physical systems, and real-time data analytics for industrial automation. Covers protocols like MQTT, CoAP, and industrial communication standards.",
    skills: ["IoT Architecture", "Smart Manufacturing", "Edge Computing", "MQTT", "Sensor Networks"],
    icon: "🏭",
    color: "#00cea8",
    pdf: "https://drive.google.com/file/d/1tVA-1SEKtTAAoY67vrYRftIZ1MMZ7gon/view?usp=sharing"
  },
  {
    title: "Human Computer Interaction & Interface Design",
    issuer: "NPTEL / Academic Certification",
    date: "2024",
    description: "Comprehensive study of HCI principles including user-centered design, interaction paradigms, usability engineering, accessibility standards, cognitive psychology in UI/UX, wireframing, prototyping, and heuristic evaluation methods. Bridges the gap between human cognition and computational interfaces.",
    skills: ["UI/UX Design", "Usability Engineering", "Prototyping", "Accessibility", "Cognitive Design"],
    icon: "🖥️",
    color: "#915eff",
    pdf: "https://drive.google.com/file/d/1mjJKBL8wKdfcrHoafImY_cw42UrHfEDA/view?usp=sharing"
  }
];
