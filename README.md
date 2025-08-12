<div align="center">
  <img src="public/website-logo.png" alt="aiNarabic Logo" width="150">
  <h1><b>aiNarabic Website</b></h1>
  <p>
    <b>A state-of-the-art, animated, and production-ready platform for AI innovation, built with a modern React stack.</b>
  </p>

  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/badge/React-18+-blue?logo=react" alt="React">
    <img src="https://img.shields.io/badge/Vite-Fast-yellow?logo=vite" alt="Vite">
    <img src="https://img.shields.io/badge/Tailwind_CSS-3-blueviolet?logo=tailwind-css" alt="Tailwind CSS">
    <img src="https://img.shields.io/badge/Framer_Motion-Animated-black?logo=framer" alt="Framer Motion">
    <a href="https://github.com/MohammedNasserAhmed/ainarabic-website/actions">
      <img src="public/website-screenshot.png" alt="CI/CD Status">
    </a>
  </p>
</div>

![aiNarabic Website Screenshot](https://placehold.co/1200x600/1F2937/FFFFFF?text=aiNarabic+Website+Preview)

---

## ✨ Features

-   **🚀 Modern Tech Stack**: Built with **React 18**, **Vite**, and **Tailwind CSS** for a high-performance, maintainable, and scalable application.
-   **🎬 State-of-the-Art Animations**: Fluid page transitions and interactive UI elements powered by **Framer Motion**.
-   **📱 Fully Responsive Design**: A pixel-perfect, mobile-first layout that looks stunning on any device, from phones to desktops.
-   **🎨 Dual-Theme Mode**: A seamless, animated toggle between **Light & Dark modes** that persists across sessions.
-   **⚡ Blazing Fast Performance**: Optimized for speed with Vite's efficient bundling and code-splitting.
-   **📝 SEO Optimized**: Dynamic meta tags for each page using `react-helmet-async` to ensure maximum search engine visibility.
-   **🤖 CI/CD Ready**: Automated build and deployment pipeline to **Vercel** via **GitHub Actions**.

---

## 🛠️ Tech Stack

| Technology         | Description                                          |
| ------------------ | ---------------------------------------------------- |
| **React 18** | Core UI library with functional components and hooks. |
| **Vite** | Next-generation frontend tooling for fast development. |
| **Tailwind CSS** | A utility-first CSS framework for rapid UI development.|
| **Framer Motion** | A production-ready motion library for React.         |
| **Lucide Icons** | Beautiful and consistent open-source icons.          |
| **React Helmet** | Manages document head changes for SEO.               |
| **GitHub Actions** | Automates the CI/CD pipeline.                        |
| **Vercel** | Hosting platform for seamless deployment.            |

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v18 or later)
-   `pnpm` (recommended package manager)

### Installation & Setup

1.  **Clone the repository**:
    ```bash
    git clone [https://github.com/MohammedNasserAhmed/ainarabic-website.git](https://github.com/MohammedNasserAhmed/ainarabic-website.git)
    cd ainarabic-website
    ```

2.  **Install dependencies**:
    ```bash
    pnpm install
    ```

3.  **Run the development server**:
    ```bash
    pnpm dev
    ```
    Your project will be running at `http://localhost:5173`.

---

## ⚙️ Deployment & CI/CD

This project is configured for automated, continuous deployment to **Vercel** whenever changes are pushed to the `main` branch.

### How It Works

The workflow, defined in `.github/workflows/deploy.yml`, automates the following:
1.  **Code Checkout**: Clones the latest version of the repository.
2.  **Environment Setup**: Sets up Node.js and `pnpm`.
3.  **Dependency Installation**: Installs all necessary packages.
4.  **Production Build**: Creates an optimized build of the site in the `dist` folder.
5.  **Deployment**: Pushes the build to Vercel for production.

### Vercel Configuration

To enable this workflow in your own fork:
1.  **Create a Vercel Project**: Link your GitHub repository to a new project on Vercel.
2.  **Add Repository Secrets**: In your GitHub repository settings under `Secrets and variables` > `Actions`, add the following secrets obtained from your Vercel project:
    -   `VERCEL_TOKEN`
    -   `VERCEL_ORG_ID`
    -   `VERCEL_PROJECT_ID`

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

