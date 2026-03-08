import { useState, useEffect, useRef } from "react";

// ── Intersection Observer Hook ─────────────────────────────────────────────
function useFadeIn(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12, ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}


// ── Resume Download ────────────────────────────────────────────────────────
const RESUME_URL = "https://drive.google.com/uc?export=download&id=1wIs4EuAod7kXwF5rlSQ5TmUdr4cXMXN-";

function downloadResume() {
  const link = document.createElement("a");
  link.href = RESUME_URL;
  link.download = "Nirav_Asher_Resume.pdf";
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// ── Icons ──────────────────────────────────────────────────────────────────
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);
const TrendingUp = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
  </svg>
);
const BuildingIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>
  </svg>
);
const CodeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);
const ServerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/>
    <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
  </svg>
);
const DatabaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);
const WrenchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);
const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const MapPinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

// ── Data ───────────────────────────────────────────────────────────────────
const experiences = [
  {
    company: "Deutsche Telekom Digital Labs",
    role: "SDE 2",
    period: "2023 — Present",
    location: "Remote",
    tags: ["React", "SSR/CSR", "Performance Optimization", "AI Tools", "Design Systems"],
    bullets: [
      "Developing conversion-focused React applications used by millions of telecom customers.",
      "Creating new digital customer journeys (such as contract prolongation) with a strong focus on performance, scalability, and user experience.",
      "Created a comprehensive internal knowledge base of the codebase, enabling AI-assisted development and improving developer productivity.",
      "Improved Lighthouse performance scores through frontend optimizations including bundle optimization, lazy loading, and efficient rendering strategies.",
      "Optimized the SSR/CSR architecture, simplifying rendering flows and significantly reducing development complexity and iteration time.",
      "Reduced technical debt by resolving HMR issues, standardizing code quality through ESLint and Prettier cleanup, and improving overall maintainability of the codebase.",
      "Building an AI-powered developer enablement system (Scotty Engine) that allows coding assistants to access design system documentation, search components semantically, resolve design tokens, and automate Figma-to-code workflows.",
      "Creating and maintaining a large internal knowledge base of the codebase to improve developer productivity and AI-assisted development.",
      "Working on design system tooling and automation to streamline the design-to-development workflow across multiple platforms.",
    ],
    impact: "Improved developer productivity, accelerated feature delivery, and enhanced the digital experience for telecom customers.",
  },
  {
    company: "Wishlink",
    role: "Software Engineer",
    period: "2022 — 2023",
    location: "Bangalore, India",
    tags: ["React", "Dashboard Development", "Authentication", "Analytics", "UI Architecture"],
    bullets: [
      "Built the Creator Dashboard (creator.wishlink.com) from scratch, enabling creators to manage storefronts, content, and monetization workflows in a single platform.",
      "Implemented Instagram, YouTube, and manual email authentication, allowing creators to securely sign up, log in, and connect their social accounts to the platform.",
      "Developed scalable UI architecture using the Wishlink UI component library, including theme implementation to support customizable creator storefronts.",
      "Built the complete self-serve (DIY) creator workflow enabling creators to independently add and manage posts, product collections, and individual products.",
      "Implemented pagination, filtering, and sorting for large datasets across posts, collections, and products to improve usability and performance.",
      "Developed the Creator Analytics Dashboard UI, allowing creators to track earnings, campaign performance, and brand collaborations with advanced date and brand-based filters.",
      "Built the Rewards System (frontend with backend integration) enabling brands to launch reward campaigns and automatically distribute incentives to high-performing creators.",
      "Contributed to Wishlink Engage, enabling creators to automatically send product links to users who comment specific keywords on Instagram posts, improving engagement and conversions.",
      "Integrated Lead Management Software, enabling users to create, bulk update, and track leads directly within the creator dashboard.",
    ],
    impact: "Empowered thousands of creators to monetize their content and manage their digital storefronts efficiently.",
  },
  {
    company: "Goldcast",
    role: "Software Engineer",
    period: "2021 — 2022",
    location: "Remote",
    tags: ["React", "Third-party Integrations", "SEO", "Event Management", "Performance"],
    bullets: [
      "As part of the frontend development team, worked to build various apps including studio for customers, custom page builder, branding panel, integration of several third party apps like marketo, hubspot, google analytics, drift and salesforce.",
      "Built bulk and manual registration panel for customers to register their attendees.",
      "Enhanced performance of the app by upgrading the frontend architecture leading to improved search engine optimisation.",
      "Allowed users to create breakout rooms, bulk registration of users through csv file, toast notifications on API calls.",
    ],
    impact: "Enhanced event management capabilities and improved platform performance for enterprise customers.",
  },
  {
    company: "Public Lab Inc",
    role: "Open Source Contributor",
    period: "2020 — 2021",
    location: "Remote",
    tags: ["JavaScript", "Image Processing", "Open Source", "NPM Packages"],
    bullets: [
      "Open Source Contribution at Public Labs Image Sequencer. Built a sequence of modules as well as meta-modules available for processing an uploaded image.",
      "Performed pixel by pixel manipulation of image to create linear and circular gradients around the image, and introduction of noise reduction in image.",
      "Added npm packages for face and edge detection.",
      "Designed and developed dark theme enabling option for users.",
    ],
    impact: "Contributed to open-source image processing tools used by environmental researchers and scientists worldwide.",
  },
];

const skillCategories = [
  { icon: <CodeIcon />, title: "Frontend", skills: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS", "Next.js", "Redux"] },
  { icon: <ServerIcon />, title: "Backend", skills: ["Node.js", "FastAPI", "Python", "REST APIs"] },
  { icon: <WrenchIcon />, title: "Tools & DevOps", skills: ["Git", "Webpack", "Vite", "ESLint", "Prettier", "Figma"] },
  { icon: <DatabaseIcon />, title: "Databases", skills: ["MongoDB", "PostgreSQL"] },
  { icon: <StarIcon />, title: "Specializations", skills: ["Performance Optimization", "SSR/CSR", "Design Systems", "AI Tools Integration"] },
];

// ── Styles ─────────────────────────────────────────────────────────────────
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #0a0e13;
    --card: #131b26;
    --border: rgba(255,255,255,0.07);
    --accent: #2de8b5;
    --text: #e8edf3;
    --muted: #6b7a8d;
    --tag-bg: rgba(45,232,181,0.1);
    --tag-border: rgba(45,232,181,0.25);
  }

  body { background: var(--bg); color: var(--text); font-family: 'IBM Plex Sans', sans-serif; line-height: 1.6; }

  /* ── KEYFRAMES ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeDown {
    from { opacity: 0; transform: translateY(-16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes glowPulse {
    0%, 100% { opacity: 0.5; transform: translateY(-50%) scale(1); }
    50%       { opacity: 0.8; transform: translateY(-50%) scale(1.05); }
  }

  /* ── SCROLL REVEAL ── */
  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.65s cubic-bezier(0.22,1,0.36,1),
                transform 0.65s cubic-bezier(0.22,1,0.36,1);
  }
  .reveal.visible { opacity: 1; transform: translateY(0); }

  .reveal-scale {
    opacity: 0;
    transform: scale(0.94) translateY(16px);
    transition: opacity 0.55s cubic-bezier(0.22,1,0.36,1),
                transform 0.55s cubic-bezier(0.22,1,0.36,1);
  }
  .reveal-scale.visible { opacity: 1; transform: scale(1) translateY(0); }

  /* NAV */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 48px; height: 56px;
    background: rgba(10,14,19,0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
    animation: fadeDown 0.5s 0.05s cubic-bezier(0.22,1,0.36,1) both;
  }
  .nav-logo { font-size: 15px; font-weight: 600; color: var(--text); cursor: pointer; }
  .nav-links { display: flex; align-items: center; gap: 32px; }
  .nav-link {
    font-size: 14px; font-weight: 500; color: var(--muted);
    cursor: pointer; background: none; border: none;
    transition: color 0.2s; font-family: inherit;
  }
  .nav-link:hover, .nav-link.active { color: var(--text); }
  .nav-link.active { color: var(--accent); }
  .btn-resume {
    display: flex; align-items: center; gap: 7px;
    padding: 7px 16px; border-radius: 8px;
    background: var(--accent); color: #0a0e13;
    font-size: 13px; font-weight: 600; cursor: pointer;
    border: none; font-family: inherit;
    transition: background 0.2s, transform 0.15s;
  }
  .btn-resume:hover { background: #3fffc9; transform: translateY(-1px); }

  /* NAV HAMBURGER */
  .nav-hamburger {
    display: none; background: none; border: none; color: var(--text);
    cursor: pointer; padding: 4px;
  }
  @media (max-width: 700px) {
    .nav { padding: 0 20px; }
    .nav-hamburger { display: flex; align-items: center; }
    .nav-links {
      display: none; position: absolute; top: 56px; left: 0; right: 0;
      flex-direction: column; gap: 0; background: rgba(10,14,19,0.97);
      backdrop-filter: blur(12px); border-bottom: 1px solid var(--border);
      padding: 12px 0;
    }
    .nav-links.open { display: flex; }
    .nav-link { padding: 12px 24px; width: 100%; text-align: left; }
    .btn-resume { margin: 8px 24px 4px; width: calc(100% - 48px); justify-content: center; }
  }

  /* HOME */
  .home {
    min-height: 100vh; display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
  }
  .home-glow {
    position: absolute; width: 700px; height: 700px; border-radius: 50%;
    background: radial-gradient(circle, rgba(45,232,181,0.07) 0%, transparent 70%);
    pointer-events: none;
    animation: glowPulse 6s ease-in-out infinite;
  }
  .home-glow-left  { left: -200px;  top: 50%; animation-delay: 0s; }
  .home-glow-right { right: -200px; top: 50%; animation-delay: 3s; }

  .home-content { text-align: center; position: relative; z-index: 1; max-width: 780px; padding: 0 24px; }

  /* staggered hero elements */
  .home-sup  {
    font-family: 'IBM Plex Mono', monospace; font-size: clamp(13px, 1.2vw, 17px); color: var(--accent);
    margin-bottom: 20px; letter-spacing: 0.05em;
    animation: fadeUp 0.65s 0.2s cubic-bezier(0.22,1,0.36,1) both;
  }
  .home-name {
    font-size: clamp(44px, 7vw, 80px); font-weight: 700; line-height: 1.1; margin-bottom: 16px;
    animation: fadeUp 0.65s 0.35s cubic-bezier(0.22,1,0.36,1) both;
  }
  .home-name span { color: var(--accent); }
  .home-role {
    font-size: clamp(18px, 2vw, 24px); font-weight: 600; color: var(--text); margin-bottom: 24px; letter-spacing: 0.02em;
    animation: fadeUp 0.65s 0.48s cubic-bezier(0.22,1,0.36,1) both;
  }
  .home-bio {
    font-size: clamp(15px, 1.3vw, 18px); color: var(--muted); line-height: 1.75; margin-bottom: 40px;
    animation: fadeUp 0.65s 0.6s cubic-bezier(0.22,1,0.36,1) both;
  }
  .home-socials {
    display: flex; justify-content: center; gap: 12px; margin-bottom: 36px;
    animation: fadeUp 0.65s 0.72s cubic-bezier(0.22,1,0.36,1) both;
  }
  .home-ctas {
    display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;
    animation: fadeUp 0.65s 0.84s cubic-bezier(0.22,1,0.36,1) both;
  }

  .social-btn {
    width: 40px; height: 40px; border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    background: var(--card); border: 1px solid var(--border);
    color: var(--muted); cursor: pointer; text-decoration: none;
    transition: color 0.2s, border-color 0.2s, transform 0.15s;
  }
  .social-btn:hover { color: var(--accent); border-color: var(--tag-border); transform: translateY(-2px); }

  .btn-primary {
    display: flex; align-items: center; gap: 8px;
    padding: 11px 24px; border-radius: 8px;
    background: var(--accent); color: #0a0e13;
    font-size: 14px; font-weight: 600; cursor: pointer;
    border: none; font-family: inherit;
    transition: background 0.2s, transform 0.15s;
  }
  .btn-primary:hover { background: #3fffc9; transform: translateY(-1px); }
  .btn-outline {
    display: flex; align-items: center; gap: 8px;
    padding: 11px 24px; border-radius: 8px;
    background: transparent; color: var(--text);
    font-size: 14px; font-weight: 500; cursor: pointer;
    border: 1px solid var(--border); font-family: inherit;
    transition: border-color 0.2s, color 0.2s, transform 0.15s;
  }
  .btn-outline:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-1px); }

  /* PAGE HEADER */
  .page-header { padding: 100px 48px 48px; text-align: center; }
  .page-title { font-size: clamp(32px, 5vw, 52px); font-weight: 700; margin-bottom: 12px; }
  .page-title span { color: var(--accent); }
  .page-sub { font-size: 15px; color: var(--muted); }
  @media (max-width: 700px) {
    .page-header { padding: 80px 20px 28px; }
  }

  /* EXPERIENCE */
  .exp-list { max-width: 860px; margin: 0 auto; padding: 0 24px 80px; display: flex; flex-direction: column; gap: 24px; }
  .exp-card {
    background: var(--card); border: 1px solid var(--border);
    border-radius: 16px; padding: 32px;
    transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
  }
  @media (max-width: 700px) {
    .exp-list { padding: 0 12px 48px; gap: 16px; }
    .exp-card { padding: 20px 16px; border-radius: 12px; }
  }
  .exp-card:hover { border-color: rgba(45,232,181,0.22); transform: translateY(-3px); box-shadow: 0 12px 40px rgba(0,0,0,0.35); }
  .exp-header { display: flex; align-items: center; gap: 12px; margin-bottom: 6px; }
  .exp-icon { color: var(--accent); display: flex; }
  .exp-company { font-size: 20px; font-weight: 700; color: var(--text); }
  .exp-role { font-size: 15px; font-weight: 600; color: var(--text); margin-bottom: 6px; }
  .exp-meta { display: flex; align-items: center; gap: 16px; font-size: 13px; color: var(--muted); margin-bottom: 14px; font-family: 'IBM Plex Mono', monospace; }
  .exp-meta-loc { display: flex; align-items: center; gap: 4px; }
  .exp-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
  .tag {
    font-size: 12px; font-weight: 500; padding: 3px 10px; border-radius: 5px;
    background: var(--tag-bg); color: var(--accent); border: 1px solid var(--tag-border);
    font-family: 'IBM Plex Mono', monospace;
  }
  .exp-divider { border: none; border-top: 1px solid var(--border); margin: 0 0 20px; }
  .exp-bullets { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; }
  .exp-bullet { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: #c0cad6; line-height: 1.65; }
  .bullet-arrow { color: var(--accent); flex-shrink: 0; margin-top: 4px; }
  .bullet-arrow svg { width: 10px; height: 10px; }
  .impact-box {
    background: rgba(45,232,181,0.05); border-left: 3px solid var(--accent);
    border-radius: 0 8px 8px 0; padding: 14px 18px;
    display: flex; align-items: flex-start; gap: 10px;
  }
  .impact-icon { color: var(--accent); flex-shrink: 0; margin-top: 2px; }
  .impact-label { font-size: 13px; font-weight: 600; color: var(--accent); margin-bottom: 4px; font-family: 'IBM Plex Mono', monospace; }
  .impact-text { font-size: 13px; color: var(--muted); line-height: 1.6; }

  /* SKILLS */
  .skills-grid {
    max-width: 1100px; margin: 0 auto; padding: 0 24px 80px;
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
  }
  @media (max-width: 900px) { .skills-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 600px) { .skills-grid { grid-template-columns: 1fr; } }
  .skill-card {
    background: var(--card); border: 1px solid var(--border);
    border-radius: 14px; padding: 24px;
    transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
  }
  .skill-card:hover { border-color: rgba(45,232,181,0.22); transform: translateY(-4px); box-shadow: 0 10px 32px rgba(0,0,0,0.28); }
  .skill-card-header { display: flex; align-items: center; gap: 10px; margin-bottom: 18px; }
  .skill-card-icon { color: var(--accent); display: flex; }
  .skill-card-title { font-size: 16px; font-weight: 600; }
  .skill-tags { display: flex; flex-wrap: wrap; gap: 8px; }

  /* FOOTER */
  .footer {
    padding: 48px;
    display: grid; grid-template-columns: 1fr 1fr 1fr;
    gap: 32px; max-width: 1100px; margin: 0 auto;
  }
  @media (max-width: 700px) { .footer { grid-template-columns: 1fr; padding: 32px 24px; } }
  .footer-name { font-size: 17px; font-weight: 700; margin-bottom: 4px; }
  .footer-role { font-size: 14px; color: var(--muted); margin-bottom: 8px; }
  .footer-desc { font-size: 13px; color: var(--muted); line-height: 1.6; }
  .footer-section-title { font-size: 14px; font-weight: 600; margin-bottom: 14px; }
  .footer-link { display: block; font-size: 14px; color: var(--muted); cursor: pointer; margin-bottom: 8px; transition: color 0.2s; }
  .footer-link:hover { color: var(--accent); }
  .footer-socials { display: flex; gap: 10px; }
  .footer-bottom {
    border-top: 1px solid var(--border);
    padding: 16px 48px;
    display: flex; align-items: center; justify-content: space-between;
    font-size: 12px; color: var(--muted);
    max-width: 1100px; margin: 0 auto;
  }
  @media (max-width: 700px) { .footer-bottom { flex-direction: column; gap: 8px; padding: 16px 24px; text-align: center; } }
  .heart { color: var(--accent); }
`;

// ── FadeReveal (scroll-triggered) ─────────────────────────────────────────
function FadeReveal({ children, delay = 0, scale = false, style = {} }) {
  const [ref, visible] = useFadeIn();
  return (
    <div
      ref={ref}
      className={`${scale ? "reveal-scale" : "reveal"} ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}

// ── Sub-components ─────────────────────────────────────────────────────────
function Tag({ label }) {
  return <span className="tag">{label}</span>;
}

function SocialBtn({ icon, href }) {
  return (
    <a href={href || "#"} target="_blank" rel="noreferrer" className="social-btn">
      {icon}
    </a>
  );
}

function Nav({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = (p) => { setPage(p); setMenuOpen(false); };

  return (
    <nav className="nav">
      <span className="nav-logo" onClick={() => navigate("home")}>Nirav Asher</span>
      <button className="nav-hamburger" onClick={() => setMenuOpen((o) => !o)} aria-label="Menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {menuOpen
            ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
            : <><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></>
          }
        </svg>
      </button>
      <div className={`nav-links${menuOpen ? " open" : ""}`}>
        {["home", "experience", "skills"].map((p) => (
          <button key={p} className={`nav-link${page === p ? " active" : ""}`} onClick={() => navigate(p)}>
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </button>
        ))}
        <button className="btn-resume" onClick={() => { downloadResume(); setMenuOpen(false); }}><DownloadIcon /> Resume</button>
      </div>
    </nav>
  );
}

// ── Pages ──────────────────────────────────────────────────────────────────
function HomePage({ setPage }) {
  return (
    <section className="home">
      <div className="home-glow home-glow-left" />
      <div className="home-glow home-glow-right" />
      <div className="home-content">
        {/* Each child has its own CSS animation-delay for stagger */}
        <p className="home-sup">Hi, I'm</p>
        <h1 className="home-name">Nirav <span>Asher</span></h1>
        <p className="home-role">Software Engineer</p>
        <p className="home-bio">
          Frontend Engineer with 4+ years of experience building scalable, high-performance React,
          Typescript applications. Strong expertise in conversion optimisation, frontend architecture,
          performance engineering, and developer productivity tooling
        </p>
        <div className="home-socials">
          <SocialBtn icon={<GithubIcon />} href="#" />
          <SocialBtn icon={<LinkedinIcon />} href="#" />
          <SocialBtn icon={<MailIcon />} href="mailto:nirav@example.com" />
        </div>
        <div className="home-ctas">
          <button className="btn-primary" onClick={downloadResume}><DownloadIcon /> Download Resume</button>
          <button className="btn-outline" onClick={() => setPage("experience")}>View Experience <ArrowRight /></button>
          <button className="btn-outline" onClick={() => setPage("skills")}>View Skills <ArrowRight /></button>
        </div>
      </div>
    </section>
  );
}

function ExperiencePage() {
  return (
    <section style={{ paddingTop: 56 }}>
      <FadeReveal>
        <div className="page-header">
          <h1 className="page-title">Work <span>Experience</span></h1>
          <p className="page-sub">Building impactful solutions across diverse domains and technologies</p>
        </div>
      </FadeReveal>

      <div className="exp-list">
        {experiences.map((exp, i) => (
          <FadeReveal key={exp.company} delay={i * 90}>
            <div className="exp-card">
              <div className="exp-header">
                <span className="exp-icon"><BuildingIcon /></span>
                <h2 className="exp-company">{exp.company}</h2>
              </div>
              <p className="exp-role">{exp.role}</p>
              <div className="exp-meta">
                <span>{exp.period}</span>
                <span className="exp-meta-loc"><MapPinIcon /> {exp.location}</span>
              </div>
              <div className="exp-tags">
                {exp.tags.map((t) => <Tag key={t} label={t} />)}
              </div>
              <hr className="exp-divider" />
              <ul className="exp-bullets">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="exp-bullet">
                    <span className="bullet-arrow">
                      <svg viewBox="0 0 10 10" fill="currentColor"><polygon points="0,0 10,5 0,10"/></svg>
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="impact-box">
                <span className="impact-icon"><TrendingUp /></span>
                <div>
                  <p className="impact-label">Impact:</p>
                  <p className="impact-text">{exp.impact}</p>
                </div>
              </div>
            </div>
          </FadeReveal>
        ))}
      </div>
    </section>
  );
}

function SkillsPage() {
  return (
    <section style={{ paddingTop: 56 }}>
      <FadeReveal>
        <div className="page-header">
          <h1 className="page-title">Skills & <span>Technologies</span></h1>
          <p className="page-sub">A comprehensive toolkit for building modern web applications</p>
        </div>
      </FadeReveal>

      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <FadeReveal key={cat.title} delay={i * 75} scale>
            <div className="skill-card" style={{ height: "100%" }}>
              <div className="skill-card-header">
                <span className="skill-card-icon">{cat.icon}</span>
                <h3 className="skill-card-title">{cat.title}</h3>
              </div>
              <div className="skill-tags">
                {cat.skills.map((s) => <Tag key={s} label={s} />)}
              </div>
            </div>
          </FadeReveal>
        ))}
      </div>
    </section>
  );
}

function Footer({ setPage }) {
  return (
    <FadeReveal>
      <footer style={{ borderTop: "1px solid var(--border)", background: "var(--bg)" }}>
        <div className="footer">
          <div>
            <p className="footer-name">Nirav Asher</p>
            <p className="footer-role">Software Engineer</p>
            <p className="footer-desc">Building scalable solutions and contributing to the tech community.</p>
          </div>
          <div>
            <p className="footer-section-title">Quick Links</p>
            <span className="footer-link" onClick={() => setPage("experience")}>Experience</span>
            <span className="footer-link" onClick={() => setPage("skills")}>Skills</span>
          </div>
          <div>
            <p className="footer-section-title">Connect</p>
            <div className="footer-socials">
              <SocialBtn icon={<GithubIcon />} href="#" />
              <SocialBtn icon={<LinkedinIcon />} href="#" />
              <SocialBtn icon={<MailIcon />} href="mailto:nirav@example.com" />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Nirav Asher. All rights reserved.</span>
          <span>Built with <span className="heart">♥</span> using React & FastAPI</span>
        </div>
      </footer>
    </FadeReveal>
  );
}

// ── App ────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("home");
  useEffect(() => { window.scrollTo(0, 0); }, [page]);

  return (
    <>
      <style>{styles}</style>
      <Nav page={page} setPage={setPage} />
      {page === "home"       && <HomePage setPage={setPage} />}
      {page === "experience" && <ExperiencePage />}
      {page === "skills"     && <SkillsPage />}
      {page !== "home"       && <Footer setPage={setPage} />}
    </>
  );
}
