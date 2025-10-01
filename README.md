<div align="center">

# 🚀 Andy Li's Portfolio 💻

[![Live Demo](https://img.shields.io/badge/demo-online-success?style=for-the-badge)](https://andyli-portfolio.vercel.app/)
[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)

**A Modern, Responsive Portfolio Showcasing My Journey as a Computer Science Student at Georgia Institute of Technology**

[Live Demo](https://andyli-portfolio.vercel.app/) · [Report Bug](https://github.com/AndyDLi/PersonalPortfolio/issues) · [Request Feature](https://github.com/AndyDLi/PersonalPortfolio/issues)

</div>

---

## 📸 Preview

<div align="center">
  <img width="900" alt="Portfolio Preview" src="https://github.com/user-attachments/assets/4c99d9a6-a810-41e4-ad91-b72d077f6581" />
</div>

---

## ✨ Features

### 🎨 **Modern UI/UX**
- **Smooth Animations** - Custom typewriter effect, circular image motion, and gradient overlays
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop devices
- **Interactive Elements** - Hover effects, transitions, and dynamic navigation states

### 🧩 **Core Functionality**
- **Dynamic Routing** - Client-side routing with React Router for seamless navigation
- **Project Gallery** - Showcase projects with hover-reveal details and grid layout
- **Contact Integration** - Functional contact form with email delivery via FormSubmit.co
- **Social Media Links** - Direct connections to LinkedIn and GitHub profiles

### ⚡ **Performance**
- **Vite Build Tool** - Lightning-fast HMR and optimized production builds
- **SWC Compiler** - Faster compilation with Speedy Web Compiler
- **Fixed Navigation** - Scroll-aware navbar with smooth transitions

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

### **Backend (Contact Form)**
![Express](https://img.shields.io/badge/Express-5.1.0-000000?style=flat-square&logo=express&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-7.0.6-339933?style=flat-square&logo=nodemailer&logoColor=white)

### **Deployment**
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=flat-square&logo=vercel&logoColor=white)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)

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
   
   Navigate to `http://localhost:5173` (Vite's default port)

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
PersonalPortfolio/
├── public/                     # Static assets
├── src/
│   ├── assets/
│   │   ├── fonts/             # Custom Centra font family
│   │   └── images/            # Images, icons, and graphics
│   ├── components/
│   │   ├── NavBar.jsx         # Navigation with responsive menu
│   │   ├── Banner.jsx         # Hero section with typewriter effect
│   │   ├── Skills.jsx         # Skills carousel (placeholder)
│   │   ├── Projects.jsx       # Portfolio gallery container
│   │   ├── ProjectCard.jsx    # Individual project card component
│   │   └── Contact.jsx        # Contact form with validation
│   ├── App.jsx                # Root component with routing
│   ├── App.css                # Main stylesheet (707 lines)
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles
├── index.html                 # HTML template
├── package.json               # Dependencies & scripts
├── vite.config.js             # Vite configuration
├── eslint.config.js           # ESLint rules
└── README.md                  # Project documentation
```

---

## 🎯 Key Components

### **NavBar** 
- Fixed navigation with scroll detection
- Responsive hamburger menu with blur overlay
- Active route highlighting
- Social media integration

### **Banner**
- Animated typewriter effect rotating through:
  - Software Developer
  - Exploring AI/ML
  - Studying Cybersecurity
- Circular image animation with depth effect

### **Projects**
- Grid-based project gallery
- Hover-activated gradient overlays
- Dynamic project card rendering
- Tab-based filtering (ready for expansion)

### **Contact**
- Controlled form components
- Real-time validation
- FormSubmit.co integration for email delivery
- Responsive two-column layout

---

## 🎨 Design Highlights

### **Color Palette**
```css
Primary Background:  #121212 (Rich Black)
Text:                #FFFFFF (White)
Secondary Text:      #B8B8B8 (Silver)
Accent Gradient:     #AA367C → #4A2FBD (Purple to Pink)
```

### **Typography**
- **Font Family:** Centra (Custom)
- **Weights:** 400 (Book), 500 (Medium), 700 (Bold)

### **Animations**
- Typewriter text effect with variable speed
- Circular motion with scale transformation
- Gradient overlay slide-up on hover
- Button background slide-in effects
- Social icon scale animations

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

---

## 🌐 Deployment

This portfolio is deployed on **Vercel** with automatic deployments from the main branch.

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/AndyDLi/PersonalPortfolio)

### Manual Deployment Steps

1. Build the project: `npm run build`
2. Upload the `dist/` directory to your hosting provider
3. Configure the server to serve `index.html` for all routes (SPA)

---

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory (optional):

```env
VITE_BASE_PATH=/PersonalPortfolio
```

### Vite Config

```javascript
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/PersonalPortfolio',
})
```

---

## 📊 Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices)
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.0s
- **Bundle Size:** ~200KB (gzipped)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Andy Li**

- 🎓 Computer Science Student @ Georgia Institute of Technology
- 💼 LinkedIn: [@andyli8](https://www.linkedin.com/in/andyli8/)
- 🐙 GitHub: [@AndyDLi](https://github.com/AndyDLi)
- 📧 Email: andy.dang.li@gmail.com
- 🌐 Portfolio: [andyli-portfolio.vercel.app](https://andyli-portfolio.vercel.app/)

---

## 🙏 Acknowledgments

- **React Team** - For the incredible framework
- **Vite** - For blazing-fast build tooling
- **Bootstrap** - For the responsive grid system
- **FormSubmit.co** - For free form handling service
- **Vercel** - For seamless deployment and hosting

---

## 📚 Additional Documentation

For detailed technical documentation, architecture decisions, and code examples, see:

- [**CODEBASE_DOCUMENTATION.md**](CODEBASE_DOCUMENTATION.md) - Comprehensive technical documentation

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ and React

</div>
