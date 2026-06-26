<div align="center">

# 🚀 Andy Li's Portfolio 💻

[![Live Demo](https://img.shields.io/badge/demo-online-success?style=for-the-badge)](https://andyli-portfolio.vercel.app/)
[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

**A responsive portfolio for my work and background as a Computer Science student at Georgia Institute of Technology**

[Live Demo](https://andyli-portfolio.vercel.app/) · [Report Bug](https://github.com/AndyDLi/PersonalPortfolio/issues) · [Request Feature](https://github.com/AndyDLi/PersonalPortfolio/issues)

</div>

---

<div align="center">
  <img width="900" alt="Portfolio Preview" src="https://github.com/user-attachments/assets/4c99d9a6-a810-41e4-ad91-b72d077f6581" />
</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📜 Available Scripts](#-available-scripts)
- [📁 Project Structure](#-project-structure)
- [👤 Author](#-author)

---

## ✨ Features

### 🎨 **Interface**
- **Responsive Layout** - Adapts to desktop, tablet, and mobile screens.
- **Page Transitions** - Uses subtle animation and hover states for navigation and cards.
- **Home Banner** - Includes a typewriter-style role headline and portrait section.

### 🧩 **Core Functionality**
- **Client-Side Routing** - Uses React Router for home, projects, and contact pages.
- **Project Gallery** - Displays project cards with preview images and short descriptions.
- **Contact Form** - Submits messages through FormSubmit.co.
- **Social Links** - Provides LinkedIn and GitHub profile links.

### ⚡ **Build & Navigation**
- **Vite Tooling** - Provides local development, production builds, and preview support.
- **Fixed Navigation** - Includes active route styling and responsive menu behavior.

---

## 🛠️ Tech Stack

### **Frontend Framework**
![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat-square&logo=react&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.8.2-CA4245?style=flat-square&logo=react-router&logoColor=white)
![React DOM](https://img.shields.io/badge/React_DOM-19.1.1-61DAFB?style=flat-square&logo=react&logoColor=white)

### **UI & Styling**
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?style=flat-square&logo=bootstrap&logoColor=white)
![React Bootstrap](https://img.shields.io/badge/React_Bootstrap-2.10.10-7952B3?style=flat-square&logo=bootstrap&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Custom-1572B6?style=flat-square&logo=css3&logoColor=white)

### **Build & Development Tools**
![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=flat-square&logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9.33.0-4B32C3?style=flat-square&logo=eslint&logoColor=white)
![npm](https://img.shields.io/badge/npm-Package_Manager-CB3837?style=flat-square&logo=npm&logoColor=white)

### **Contact Form**
![FormSubmit](https://img.shields.io/badge/FormSubmit.co-Contact_Form-2f6f4e?style=flat-square)

### **Deployment**
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=flat-square&logo=vercel&logoColor=white)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (`^20.19.0` or `>=22.12.0`)
- **npm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AndyDLi/PersonalPortfolio.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd PersonalPortfolio
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**

   Vite prints the local URL in the terminal. The default is usually `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

Output is written to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## 📁 Project Structure

```
PersonalPortfolio/
├── public/                     # Static assets
├── src/
│   ├── assets/
│   │   ├── fonts/             # Custom Centra font family
│   │   └── images/            # Images and icons used by the app
│   ├── components/
│   │   ├── NavBar.jsx         # Navigation with responsive menu
│   │   ├── Banner.jsx         # Home banner with typewriter effect
│   │   ├── Projects.jsx       # Portfolio gallery container
│   │   ├── ProjectCard.jsx    # Individual project card component
│   │   └── Contact.jsx        # Contact form page
│   ├── App.jsx                # Root component with routing
│   ├── App.css                # Main stylesheet
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite configuration
├── eslint.config.js           # ESLint configuration
└── README.md                  # Project documentation
```

---

## 👤 Author

**Andy Li**

- 🎓 Computer Science Student @ Georgia Institute of Technology
- 💼 LinkedIn: [@andyli8](https://www.linkedin.com/in/andyli8/)
- 🐙 GitHub: [@AndyDLi](https://github.com/AndyDLi)
- 📧 Email: andy.dang.li@gmail.com
- 🌐 Portfolio: [andyli-portfolio.vercel.app](https://andyli-portfolio.vercel.app/)

---
