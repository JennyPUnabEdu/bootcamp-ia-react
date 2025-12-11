# 🤖 AI Generative Bootcamp Platform

A comprehensive educational web platform built with React and Vite designed to teach Generative AI tools (ChatGPT & Gemini) to students entering university.

- Note: This project was developed as part of my internship (Práctica) at Universidad Andrés Bello (UNAB), specifically for the Faculty of Engineering.

I built this project to modernize the way academic tools are taught to high school students (3rd & 4th Medio), moving away from static slides to an interactive, gamified web experience that simulates real AI environments.

## 📦 Technologies

- `Vite`
- `React.js`
- `Tailwind CSS`
- `Lucide React`
- `JavaScript (ES6+)`
- `HTML5 / CSS3`
- `AWS (APACHE2)`

## 🚀 Features

Here's what students can do with the platform:

- **Modular Navigation**: Access a central Portal that distributes content into 4 distinct modules (Fundamentals, Synthesis, Evaluation, and Final Project).

- **Interactive Simulations**: Experience simulated chat interfaces that mimic real AI interactions to teach Prompt Engineering without needing external accounts.

- **Dynamic Checklists**: Users can track their progress through "Flight Checklists" and "Rubrics" to ensure their prompts meet quality standards.

- **Resource Hub**: One-click access to download synthesized PDF summaries (Papers) generated specifically for print and digital study.

- **Responsive Design**: Fully optimized for classroom projectors and students' mobile devices.

### 🎯 Key Components:

- **The Landing Portal**: A central hub to route users between different courses.
- **The Slides Engine**: A custom-built presentation engine using React state to navigate through lessons.
- **The Art Challenge**: An interactive "Real vs AI" image comparison tool.
- **Safety Protocols**: Visual guides on AI Hallucinations and ethical use.

## 👩🏽‍🍳 The Process

I started by designing a modular architecture. Instead of a single giant app, I decided to build independent Single Page Applications (SPAs) for each day of the bootcamp. This allowed for better organization and scalability.

First, I built the **Landing Page** to serve as the main entry point. Then, I focused on the **Presentation Engine**, creating reusable layouts like 'Hero', 'Split-Screen', and 'Interactive-Quiz' to avoid rewriting code for every slide.

Next, I tackled the challenge of deployment. Since I needed to host multiple apps on a single AWS server, I had to configure Vite to use relative paths (`base: './'`) so the modules could live inside subfolders without breaking.

To enhance the learning experience, I implemented interactive elements like the "Vs Mode" (ChatGPT vs Gemini) and the "Art Challenge". I also focused heavily on the UI, using Tailwind CSS to create a modern "Dark Mode" aesthetic that keeps students engaged.

Finally, I optimized the project for production, generating static builds for each module and organizing them into a coherent file structure for the Apache server.

Along the way, I documented every technical hurdle, especially the routing issues between modules and the CSS adjustments needed for printing the PDF summaries correctly.

## 📚 What I Learned

During this project, I've picked up important skills in frontend architecture and cloud deployment.

### 🧠 Monorepo Structure:
- **Architecture**: I learned how to manage a project that contains multiple independent applications under one repository, keeping the code clean and organized.

### 🛤️ Routing & Deployment:
- **Vite Configuration**: I mastered the `vite.config.js` settings, specifically how `base` paths work when deploying apps to subdirectories on a web server.
- **Relative Linking**: I understood the importance of relative linking (`./`) versus absolute linking in production environments.

### 🎨 Component Reusability:
- **DRY Principle**: Instead of hardcoding every slide, I created a data-driven approach where the content is stored in arrays and rendered by a single `Presentation` component. This made updating content incredibly fast.

### 💅 Tailwind CSS Mastery:
- **Advanced Styling**: I dove deep into gradients, animations (`animate-pulse`, `animate-scan`), and backdrop filters to create a high-end, futuristic look.

### ☁️ AWS & Apache2:
- **Server Management**: I learned the basics of setting up an EC2 instance, configuring Apache2 to serve static files, and managing permissions for file uploads.

### 📈 Overall Growth:
This project bridged the gap between code and education. It wasn't just about React; it was about creating a product that solves a real communication problem in the classroom.

## 💭 How can it be improved?

- Add a backend to store student progress and attendance.
- Implement real-time API connections to OpenAI/Google Gemini (currently simulated).
- Add a Dark/Light mode toggle.
- Create an admin panel to edit slide content without touching the code.

## 🚦 Running the Project

To run any module locally:

1. Clone the repository.
2. Navigate to the specific folder (e.g., `cd landing-page` or `cd modulo1`).
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the local server.
5. Open the localhost link in your browser.

## 🍿 Demo


Live project hosted at: **[aibootcampunabtest.netlify.app]**