# SK SOLUTION - Digital Services Website

Hi! This is a simple, modern, and minimalist dark-themed static website built for **SK SOLUTION**. It is designed to look clean, fast, and professional.

I built this project to learn and practice modern web development workflows using the latest tools.

## Tech Stack Used
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS v4
- **Package Manager:** pnpm

---

## What I Did in This Project

Here is a step-by-step breakdown of what I created and configured in this project:

### 1. Project Setup with pnpm
- Set up a clean Next.js project using `pnpm` instead of standard npm to save disk space and internet data.
- Handled advanced configurations like allowing custom development origins (`allowedDevOrigins`) in `next.config.js`.

### 2. Multi-Page Structure (File-based Routing)
Created a modern, multi-page layout by utilizing Next.js folder structures:
- **Home Page (`/`)**: A premium landing page featuring a Hero section, responsive services grid, and footer.
- **About Page (`/about`)**: A page explaining the vision and background of SK SOLUTION.
- **Contact Page (`/contact`)**: A clean, modern user contact form designed with custom inputs.

### 3. Modern Design with Tailwind CSS v4
- Styled everything with a **Minimalist Dark Theme** using deep charcoal backgrounds and gold/amber highlights.
- Built a beautiful **Navigation Bar (Navbar)** inside `layout.js` that stays sticky at the top and allows instant page switching without full page reloads.
- Created smooth hover animations for buttons and service cards.

### 4. Code Architecture & Configuration
- Learned how `package.json` manages all the project dependencies.
- Configured `postcss.config.mjs` to successfully transform Tailwind code into production-ready CSS.
- Maintained a clean workflow by keeping heavy temporary folders out of GitHub using `.gitignore`.

---

## 🛠️ How to Run This Project Locally

If you want to run this project on your machine, follow these simple steps:

1. **Install Dependencies:**
   Open your terminal in the project folder and run:
   ```bash
   pnpm install