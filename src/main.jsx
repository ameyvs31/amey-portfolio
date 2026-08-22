import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowDown, ArrowUpRight, MapPin, Mail } from "lucide-react";
import "./styles.css";

import privateChatShot from "./assets/privatechat.png";
import resumeAiShot from "./assets/resumeai.png";
import climaViewShot from "./assets/climaview.png";
import pulseNewsShot from "./assets/pulsenews.png";

const PROJECTS = [
  {
    number: "01",
    title: "PrivateChat",
    type: "Full-stack application",
    year: "2025",
    role: "Full-stack development",
    image: privateChatShot,
    description:
      "Invite-based real-time communication platform built around private connections. Users connect through unique Chat Keys and communicate instantly.",
    details:
      "Implemented authentication, REST APIs, MongoDB data management and Socket.io real-time messaging.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "JWT",
    ],
    github: "https://github.com/ameyvs31",
    live: "https://chat-app-ashen-six.vercel.app/",
    imagePosition: "center",
  },
  {
    number: "02",
    title: "ResumeAI",
    type: "AI / Web application",
    year: "2025",
    role: "Product development",
    image: resumeAiShot,
    description:
      "AI-assisted resume analysis platform designed to extract information from resumes and evaluate relevance against specific job requirements.",
    details:
      "Combines a React frontend, Node.js backend, REST APIs, document processing and MongoDB.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "AI API",
    ],
    github: "https://github.com/ameyvs31",
    live: "https://ai-resume-analyzer-khaki-tau.vercel.app/",
    imagePosition: "center",
  },
];

const MINI_PROJECTS = [
  {
    number: "03",
    title: "ClimaView",
    type: "Weather dashboard",
    year: "2026",
    image: climaViewShot,
    description:
      "Real-time weather dashboard with city search, geolocation, current conditions, hourly trends and multi-day forecasts.",
    stack: ["React", "Vite", "REST API", "CSS"],
    github: "https://github.com/ameyvs31/climaview",
    live: "https://climaview-teal.vercel.app/",
  },
  {
    number: "04",
    title: "PulseNews",
    type: "News intelligence platform",
    year: "2026",
    image: pulseNewsShot,
    description:
      "Editorial-style news platform with category browsing, search, live headlines, responsive cards and a polished reading experience.",
    stack: ["React", "Vite", "News API", "CSS"],
    github: "https://github.com/ameyvs31/pulsenews",
    live: "https://pulsenews-five.vercel.app/",
  },
];

function Reveal({ children, className = "" }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function ProjectCard({ project }) {
  const disabled = !project.live;

  return (
    <article className="project-card">
      <a
        className="project-shot"
        href={disabled ? undefined : project.live}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${project.title} live demo`}
      >
        <img
          src={project.image}
          alt={`${project.title} live project screenshot`}
          style={{ objectPosition: project.imagePosition }}
        />

        <div className="shot-overlay" />

        <span className="project-index">
          PROJECT / {project.number}
        </span>

        <span className="shot-action">
          <ArrowUpRight size={18} />
        </span>

        <span className="shot-caption">
          Live interface
        </span>
      </a>

      <div className="project-info">
        <div>
          <div className="project-meta">
            <span>{project.type}</span>
            <span>{project.year}</span>
          </div>

          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <p className="details">
            {project.details}
          </p>

          <div className="stack-list">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="project-footer">
          <span>{project.role}</span>

          <div className="project-links">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight size={13} />
            </a>

            {!disabled ? (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="live-link"
              >
                Live Demo <ArrowUpRight size={13} />
              </a>
            ) : (
              <span className="pending-link">
                Live URL <span>add link</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function MiniProject({ project }) {
  const disabled = !project.live;

  return (
    <article className="mini-card">
      <a
        className="mini-shot"
        href={disabled ? undefined : project.live}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${project.title} live demo`}
      >
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
        />

        <div className="shot-overlay" />

        <span className="mini-number">
          {project.number}
        </span>

        <span className="mini-view">
          {disabled ? "Live URL needed" : "View live"}
          <ArrowUpRight size={15} />
        </span>
      </a>

      <div className="mini-body">
        <div className="project-meta">
          <span>{project.type}</span>
          <span>{project.year}</span>
        </div>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="stack-list">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="mini-links">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          {!disabled && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function App() {
  React.useEffect(() => {
    const items = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <a href="#top" className="brand">
            <span className="brand-mark">AS</span>
            <span>Amey Shrivastav</span>
          </a>

          <nav className="nav-links">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>

            <a href="#contact" className="nav-cta">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="container hero-grid">
            <Reveal>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Available for software opportunities
              </div>

              <h1>
                Software developer building{" "}
                <span>useful</span> digital products.
              </h1>

              <p className="hero-description">
                I'm Amey Vikram Shrivastav, a Computer Science
                graduate focused on full-stack web development,
                frontend engineering, backend systems and
                real-time applications.
              </p>

              <div className="hero-actions">
                <a
                  href="#work"
                  className="button button-primary"
                >
                  View selected work
                  <ArrowDown size={15} />
                </a>

                <a
                  href="https://github.com/ameyvs31"
                  target="_blank"
                  rel="noreferrer"
                  className="button button-secondary"
                >
                  GitHub
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </Reveal>

            <Reveal className="hero-side">
              <aside className="hero-side-card">
                <div className="side-label">
                  Currently focused on
                </div>

                <div className="side-value">
                  React · JavaScript · Node.js · REST APIs ·
                  MongoDB · Real-time systems
                </div>

                <div className="side-line" />

                <div className="side-location">
                  <MapPin size={13} />
                  India
                </div>
              </aside>
            </Reveal>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section" id="work">
          <div className="container">
            <Reveal className="section-header">
              <div className="section-label">
                01 — Selected work
              </div>

              <div>
                <h2 className="section-title">
                  Projects that demonstrate how I think and
                  build.
                </h2>

                <p className="section-subtitle">
                  Four applications covering frontend
                  engineering, APIs, authentication, databases,
                  real-time communication and live data
                  integrations.
                </p>
              </div>
            </Reveal>

            <div className="projects">
              {PROJECTS.map((project) => (
                <Reveal key={project.number}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* MINI PROJECTS */}
        <section className="section split-project-section">
          <div className="container">
            <Reveal className="section-header">
              <div className="section-label">
                02 — Live web apps
              </div>

              <div>
                <h2 className="section-title">
                  Two focused products, built to feel like
                  real software.
                </h2>

                <p className="section-subtitle">
                  ClimaView and PulseNews get their own visual
                  treatment so the actual interfaces are
                  immediately visible to recruiters.
                </p>
              </div>
            </Reveal>

            <div className="mini-grid">
              {MINI_PROJECTS.map((project) => (
                <Reveal key={project.number}>
                  <MiniProject project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section" id="about">
          <div className="container about-grid">
            <Reveal>
              <div className="section-label">
                03 — About
              </div>

              <h2 className="about-title">
                Building a strong foundation in{" "}
                <span>software.</span>
              </h2>
            </Reveal>

            <Reveal className="about-copy">
              <p>
                I'm a Computer Science & Business Systems
                graduate with hands-on experience building web
                applications across the frontend and backend.
              </p>

              <p>
                My primary development stack is React,
                Node.js, Express and MongoDB. I've also worked
                with REST APIs, JWT authentication, Socket.io
                and third-party API integrations.
              </p>

              <p>
                I enjoy understanding how systems work behind
                the interface — from authentication and API
                design to database operations and real-time
                communication.
              </p>

              <div className="about-highlight">
                Currently working as a Frontend Engineer at
                Titli Foundation while continuing to build and
                improve full-stack applications.
              </div>
            </Reveal>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section">
          <div className="container">
            <Reveal className="section-header">
              <div className="section-label">
                04 — Technical skills
              </div>

              <div>
                <h2 className="section-title">
                  Tools I use to turn ideas into software.
                </h2>
              </div>
            </Reveal>

            <div className="skills-grid">
              {[
                [
                  "Languages",
                  [
                    "JavaScript",
                    "C++",
                    "C",
                    "SQL",
                    "HTML",
                    "CSS",
                  ],
                ],
                [
                  "Frontend",
                  [
                    "React",
                    "Vite",
                    "Tailwind CSS",
                    "Bootstrap",
                    "Responsive UI",
                  ],
                ],
                [
                  "Backend & Data",
                  [
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "MongoDB Atlas",
                    "REST APIs",
                    "JWT",
                    "Socket.io",
                  ],
                ],
                [
                  "Tools & Platforms",
                  [
                    "Git",
                    "GitHub",
                    "Vercel",
                    "Render",
                    "Postman",
                    "VS Code",
                  ],
                ],
              ].map(([name, skills]) => (
                <Reveal
                  className="skill-group"
                  key={name}
                >
                  <h3>{name}</h3>

                  <div className="skill-items">
                    {skills.map((skill) => (
                      <span
                        className="skill"
                        key={skill}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section" id="experience">
          <div className="container">
            <Reveal className="section-header">
              <div className="section-label">
                05 — Experience
              </div>

              <div>
                <h2 className="section-title">
                  Professional experience.
                </h2>

                <p className="section-subtitle">
                  Experience across frontend engineering,
                  software development and professional
                  technical operations.
                </p>
              </div>
            </Reveal>

            <div className="experience">
              {[
                [
                  "AUG 2026 — PRESENT",
                  "Frontend Engineer",
                  "Titli Foundation",
                  "Working on responsive web interfaces and frontend features using modern frontend technologies.",
                  "Remote",
                ],
                [
                  "AUG 2025 — PRESENT",
                  "Computer Operator",
                  "Kumud Finance · Rajnandgaon",
                  "Responsible for digital documentation, data entry, records and day-to-day computer operations.",
                  "Rajnandgaon",
                ],
                [
                  "JUL 2024 — AUG 2024",
                  "Frontend Developer Intern",
                  "Zidio Development",
                  "Contributed to practical web application interfaces, responsive layouts and reusable component development.",
                  "Remote",
                ],
                [
                  "MAY 2024 — JUN 2024",
                  "Frontend Developer Intern",
                  "Zidio Development",
                  "Worked on web application interfaces, responsive layouts and component-based UI development.",
                  "Remote",
                ],
              ].map(
                ([
                  date,
                  role,
                  company,
                  description,
                  location,
                ]) => (
                  <Reveal
                    className="experience-row"
                    key={`${company}-${date}`}
                  >
                    <div className="experience-date">
                      {date}
                    </div>

                    <div>
                      <h3>{role}</h3>

                      <div className="experience-company">
                        {company}
                      </div>

                      <p>{description}</p>
                    </div>

                    <div className="experience-location">
                      {location}
                    </div>
                  </Reveal>
                )
              )}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section">
          <div className="container">
            <Reveal className="section-header">
              <div className="section-label">
                06 — Education
              </div>

              <div>
                <h2 className="section-title">
                  Academic background.
                </h2>
              </div>
            </Reveal>

            <Reveal className="education-card">
              <div className="education-year">
                2021 — 2025
              </div>

              <div>
                <h3>
                  B.Tech — Computer Science & Business
                  Systems
                </h3>

                <p>
                  Shri Shankracharya Technical Campus,
                  Bhilai
                </p>
              </div>

              <div className="education-score">
                8.0 / 10 CGPA
              </div>
            </Reveal>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact" id="contact">
          <div className="container contact-inner">
            <div className="contact-grid">
              <Reveal>
                <div className="contact-label">
                  07 — Contact
                </div>

                <h2 className="contact-title">
                  Let's build something{" "}
                  <span>useful.</span>
                </h2>

                <p className="contact-description">
                  I'm open to software development roles,
                  frontend engineering opportunities,
                  freelance work and interesting technical
                  projects.
                </p>
              </Reveal>

              <Reveal className="contact-links">
                <a
                  href="mailto:ameyvs31@gmail.com"
                  className="contact-link"
                >
                  <span>
                    <Mail size={15} />
                    Email
                  </span>

                  <span>
                    ameyvs31@gmail.com
                  </span>
                </a>

                <a
                  href="https://github.com/ameyvs31"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <span>GitHub</span>
                  <span>@ameyvs31 ↗</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/amey-shrivastav-b23203210/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <span>LinkedIn</span>
                  <span>Profile ↗</span>
                </a>

                <a
                  href="#"
                  className="contact-link"
                  onClick={(event) => event.preventDefault()}
                >
                  <span>Resume</span>
                  <span>View / Download ↗</span>
                </a>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer">
          <span>
            © 2026 Amey Vikram Shrivastav
          </span>

          <span>Software Developer</span>

          <span>India</span>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <App />
);