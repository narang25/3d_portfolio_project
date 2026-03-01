# Nikhil Narang — 3D Developer Portfolio

A modern, interactive 3D developer portfolio built with React, Three.js, and Tailwind CSS. Features immersive 3D models, smooth animations, a working contact form, and sections for experience, projects, leadership, and testimonials.

🌐 **Live:** [nikhilfolio25.netlify.app](https://nikhilfolio25.netlify.app)

---

## Tech Stack

- **React 18** — UI framework
- **Three.js + React Three Fiber** — 3D rendering (desktop PC model, Earth model, stars)
- **Framer Motion** — animations and transitions
- **Tailwind CSS** — styling
- **EmailJS** — contact form email delivery
- **React Vertical Timeline** — experience section
- **Vite** — build tool

---

## Features

- 🖥️ Interactive 3D desktop PC model on hero (desktop only)
- 🌍 Rotating 3D Earth on contact section
- ✨ Animated starfield background
- 📬 Working contact form via EmailJS
- 📱 Fully responsive (mobile-friendly)
- 🏆 Leadership & Achievements section
- 📄 Resume download button

---

## Sections

| Section | Description |
|---|---|
| Hero | 3D intro with name and tagline |
| About | Overview + service cards |
| Work Experience | Timeline of professional experience |
| Tech | Technology stack icons |
| Projects | Real-world projects with GitHub + live links |
| Leadership | AWS Cloud Club Captain, Amazon ML Summer School |
| Testimonials | Feedback from peers and mentors |
| Contact | EmailJS-powered contact form + social links |

---

## Getting Started

### Prerequisites
- Node.js >= 16
- npm

### Installation

```bash
git clone https://github.com/narang25/3d_portfolio_project.git
cd 3d_portfolio_project
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these from [emailjs.com](https://emailjs.com) after setting up your email service and template.

### Run Locally

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## Deployment

Deployed on **Netlify** with continuous deployment from the `main` branch.

For the contact form to work on the live site, add the three `VITE_APP_EMAILJS_*` environment variables in your Netlify dashboard under **Site Settings → Environment Variables**.

---

## License

MIT — feel free to use this as a template. A credit or star ⭐ is appreciated!
