export const en = {
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    resume: "CV / Resume",
  },
  hero: {
    badge: "FULL-STACK DEVELOPER / AI ENTHUSIAST",
    headlinePart1: "I design and develop",
    headlineHighlight1: "digital experiences",
    headlinePart2: "that solve",
    headlineHighlight2: "real problems.",
    subheadline:
      "I'm Bedaso Dersu, a Software Engineer passionate about modern full-stack web architectures, Python, and artificial intelligence. I bridge creative design with robust engineering to build solutions with purpose.",
    ctaPrimary: "EXPLORE MY PROJECTS",
    ctaSecondary: "CONTACT ME",
    scrollPrompt: "SCROLL TO EXPLORE",
    statusBadge: "Available for Software Engineering Roles & Projects",
    location: "Jimma / Bishoftu, Ethiopia",
  },
  about: {
    label: "01 // ABOUT BEDASO",
    titlePart1: "Curiosity drives the ideas.",
    titleHighlight: "Engineering",
    titlePart2: "turns them into reality.",
    paragraph1:
      "I am a Software Engineer driven by a deep fascination with how elegant code and thoughtful design converge to solve practical challenges. My focus spans full-stack web engineering, resilient backend systems, and applied artificial intelligence.",
    paragraph2:
      "Whether developing a high-concurrency digital publishing system, architecting hotel management workflows, or integrating machine learning pipelines in Python, I adhere to principles of clean architecture, accessibility, and high performance.",
    paragraph3:
      "Beyond the code, I believe in technology that serves communities—creating digital experiences that are intuitive, scalable, and built for lasting impact.",
    stats: [
      { number: "08+", label: "Projects Built & Published" },
      { number: "Full-Stack", label: "End-to-End Capabilities" },
      { number: "Software Engineer", label: "Product & Platform Builder" },
      { number: "100%", label: "Commitment to Clean Code" },
    ],
  },
  projects: {
    label: "02 // SELECTED WORK",
    titlePart1: "Cinematic Showcase of",
    titleHighlight: "Featured Projects",
    titlePart2: "built with purpose.",
    counterTotal: "08+",
    viewProject: "VIEW REPOSITORY / DEMO",
    projectScope: "SCOPE & FOCUS",
    techStack: "CORE TECHNOLOGIES",
    problemSolved: "THE CHALLENGE & SOLUTION",
    items: [
      {
        id: "bishoftu-news",
        number: "01",
        title: "Bishoftu News",
        tagline: "Digital News, Media & Publishing Ecosystem",
        category: "Full-Stack Web Application / Media",
        image: "/projects/bishoftu.jpeg",
        description:
          "A high-performance digital news and editorial platform tailored for regional journalism, community storytelling, and high-readership publishing.",
        problem:
          "Traditional local journalism lacked an optimized, fast-loading modern publishing architecture with dynamic editorial workflows, categorization, and secure authentication.",
        solution:
          "Engineered with Next.js, MongoDB/Mongoose, Better-Auth, and Tailwind CSS. Features editorial article management, multimedia galleries, secure session handling, and optimized responsive layouts.",
        technologies: ["Next.js", "MongoDB", "Mongoose", "Better-Auth", "Tailwind CSS"],
        link: "https://bishoftu-news.vercel.app/",
      },
      {
        id: "hms",
        number: "02",
        title: "Hotel Management System",
        tagline: "Enterprise Hospitality Operations & Reservation Engine",
        category: "Hospitality Management Platform",
        image: "/projects/hms.jpeg",
        description:
          "A comprehensive web application unifying room inventory management, guest check-in/check-out cycles, automated billing, and live reservation tracking.",
        problem:
          "Disjointed hotel front-desk operations resulted in double bookings, lost guest histories, and friction during check-in/check-out peaks.",
        solution:
          "Built using Next.js, Prisma ORM, and database-backed booking state machines. Designed intuitive dashboards for staff, room tier configurations, and real-time availability sync.",
        technologies: ["Next.js", "Prisma ORM", "PostgreSQL", "NextAuth", "Tailwind CSS"],
        link: "https://yadenhotel-portal-git-main-bedaso-softs-projects.vercel.app/dashboard",
      },
      {
        id: "projecthub",
        number: "03",
        title: "ProjectHub",
        tagline: "Agile Workspace & Team Collaboration Platform",
        category: "Full-Stack Productivity Platform",
        image: "/projects/projecthub.png",
        description:
          "A full-stack collaborative project management platform allowing teams to coordinate tasks, sprint boards, and project lifecycle milestones.",
        problem:
          "Distributed student and developer teams needed a lightweight yet structured workspace with granular project ownership and task tracking.",
        solution:
          "Architected a robust Laravel REST API backend paired with a high-reactivity React frontend. Features workspace hierarchies, task assignments, and relational data integrity.",
        technologies: ["React", "Laravel REST API", "MySQL", "Tailwind CSS", "Vite"],
        link: "https://projecthub-frontend-nfnm.vercel.app/",
      },
      {
        id: "yaden-hotel",
        number: "04",
        title: "Yaden Hotel Showcase",
        tagline: "Premium Digital Brand Presence & Guest Experience",
        category: "Hospitality Web Experience",
        image: "/projects/yaden.jpeg",
        description:
          "An editorial hotel presentation website designed to immerse prospective visitors in luxury accommodation, dining, and event spaces.",
        problem:
          "The hotel required a refined digital first impression that reflected its physical ambience and facilitated direct room inquiries.",
        solution:
          "Developed with Vite/React and modern CSS styling. Implemented responsive photo galleries, amenities showcases, and direct reservation inquiry workflows.",
        technologies: ["React", "Vite", "Node.js", "Express", "Tailwind CSS"],
        link: "https://yaden-hotel.vercel.app/",
      },
    ],
  },
  skills: {
    label: "03 // EXPERTISE & TOOLING",
    titlePart1: "Disciplines, Frameworks, and",
    titleHighlight: "Engineering Stack",
    titlePart2: "I build with.",
    categories: [
      {
        name: "Frontend Development",
        desc: "Creating responsive, accessible, and cinematic web interfaces.",
        skills: ["React", "Next.js", "JavaScript (ES6+)", "HTML5 & Semantic Web", "Tailwind CSS", "CSS Modules & UI Design"],
      },
      {
        name: "Backend Architecture",
        desc: "Building reliable APIs, server logic, and authentication flows.",
        skills: ["Node.js", "Express.js", "Laravel (PHP)", "RESTful APIs", "Better-Auth / NextAuth", "Middleware Architecture"],
      },
      {
        name: "Databases & Data Modeling",
        desc: "Designing relational and document-based data structures.",
        skills: ["MongoDB & Mongoose", "Prisma ORM", "MySQL", "PostgreSQL", "Data Validation & Sanitization"],
      },
      {
        name: "Python & Machine Learning",
        desc: "Harnessing data science fundamentals and intelligent automation.",
        skills: ["Python 3", "NumPy", "Pandas", "Scikit-Learn Fundamentals", "AI Model Integration", "Data Analysis"],
      },
      {
        name: "Dev Tools & Environment",
        desc: "Maintaining efficient developer workflows and version control.",
        skills: ["Git & GitHub", "Linux CLI", "Vite & Turbopack", "Postman / API Testing", "npm / package management"],
      },
    ],
  },
  contact: {
    label: "04 // GET IN TOUCH",
    titlePart1: "Have an idea worth building?",
    titleHighlight: "Let's collaborate.",
    titlePart2: "and engineer it together.",
    description:
      "Whether you are looking to hire a dedicated full-stack engineer, collaborate on an innovative project, or discuss software opportunities, my inbox is always open.",
    emailLabel: "DIRECT EMAIL",
    email: "bedasodersu2@gmail.com",
    githubLabel: "GITHUB PROFILE",
    github: "github.com/bedaso-soft",
    locationLabel: "LOCATION",
    location: "Jimma & Bishoftu, Ethiopia",
    form: {
      namePlaceholder: "Your Full Name *",
      emailPlaceholder: "Your Email Address *",
      subjectPlaceholder: "Project / Topic *",
      messagePlaceholder: "Write your message here... *",
      submitButton: "SEND MESSAGE",
      sendingButton: "DISPATCHING...",
      successTitle: "Message Dispatched Successfully!",
      successMessage: "Thank you for reaching out, Bedaso will review your note and respond promptly.",
      errorMessage: "Please fill out all required fields with a valid email address.",
    },
  },
  footer: {
    rights: "All rights reserved.",
    tagline: "Designed & Engineered by Bedaso Dersu.",
    backToTop: "BACK TO TOP",
  },
};
