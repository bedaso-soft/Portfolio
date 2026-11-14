# Bedaso Dersu — Developer Portfolio

<div align="center">

### A Modern Developer Portfolio with an AI-Powered Assistant

A personal portfolio showcasing my software engineering journey, technical skills, projects, and experience.

[![Live Website](https://img.shields.io/badge/Live%20Website-Visit%20Portfolio-2563EB?style=for-the-badge&logo=vercel&logoColor=white)](https://bedaso-portfolio.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/bedaso-soft/Portfolio)

</div>

---

## Overview

This is my personal developer portfolio, built to present my technical background, software projects, and development interests in one place.

The application combines a modern web frontend with a Python-based AI assistant, demonstrating how machine learning can be integrated into a full-stack web application.

**Live Demo:** [bedaso-portfolio.vercel.app](https://bedaso-portfolio.vercel.app)

---

## Features

- **Personal Introduction:** Information about my background and development journey.
- **Technical Skills:** Overview of my programming languages, frameworks, and tools.
- **Project Showcase:** Presentation of selected software development projects.
- **AI-Powered Assistant:** An interactive assistant connected to a Python machine-learning backend.
- **Multilingual Content:** Support for English, Afaan Oromoo, and Amharic.
- **Contact:** Ways to connect and get in touch.

---

## Technology Stack

### Frontend

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)

### AI Backend

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![Scikit Learn](https://img.shields.io/badge/Scikit--learn-F7931E?style=flat-square&logo=scikitlearn&logoColor=white)

### Development Tools

![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

---

## System Architecture

The application uses two main components:

```text
              USER
                |
                v
       NEXT.JS FRONTEND
                |
                v
        CHAT API ROUTE
                |
                v
       PYTHON FASTAPI
                |
                v
       MACHINE LEARNING
        CLASSIFICATION
                |
                v
        ASSISTANT RESPONSE
                |
                v
       NEXT.JS FRONTEND
                |
                v
              USER
```

### Frontend

The Next.js application handles the user interface, portfolio content, and communication with the AI backend.

### AI Backend

The Python backend uses FastAPI and a machine-learning pipeline based on TF-IDF and Logistic Regression to classify incoming messages and support assistant responses.

---

## Getting Started

### Prerequisites

- Node.js
- npm
- Python 3
- Git

### 1. Clone the repository

```bash
git clone https://github.com/bedaso-soft/Portfolio.git
```

```bash
cd Portfolio
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root.

```env
AI_BACKEND_URL=http://127.0.0.1:8000
```

Configure any additional environment variables required by your local application. Never commit real API keys or credentials.

### 4. Start the frontend

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### 5. Start the AI backend

The Python backend is located in:

```text
ai-backend/
```

Install its Python dependencies using its dependency file and start its FastAPI application using its configured entry point.

The frontend AI assistant requires the backend to be running and accessible at the configured `AI_BACKEND_URL`.

---

## Project Structure

```text
Portfolio/
│
├── ai-backend/       # Python AI backend
│
├── public/           # Static assets
│
├── src/              # Next.js application
│
├── package.json      # Frontend dependencies
│
├── next.config.mjs   # Next.js configuration
│
└── README.md         # Project documentation
```

---

## Future Improvements

- Expand the AI assistant's capabilities.
- Improve machine-learning classification.
- Add more projects and technical demonstrations.
- Continue improving accessibility and user experience.

---

## Developer

**Bedaso Dersu**

Full-Stack Developer | AI & Machine Learning Enthusiast

Computer Science student at Jimma University.

- GitHub: [@bedaso-soft](https://github.com/bedaso-soft)
- Portfolio: [bedaso-portfolio.vercel.app](https://bedaso-portfolio.vercel.app)
- Email: [bedasodersu2@gmail.com](mailto:bedasodersu2@gmail.com)

---

<div align="center">

**Built with curiosity, dedication, and a passion for technology.**

</div>
