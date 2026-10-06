import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme === 'dark'
  })

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [activeSkill, setActiveSkill] = useState('Backend')
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Navbar scroll + scroll-to-top
  useEffect(() => {
    const navbar = document.querySelector('.navbar')

    const handleScroll = () => {
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.add('scrolled')
        } else {
          navbar.classList.remove('scrolled')
        }
      }

    const shouldShowScrollTop = window.scrollY > 500

setShowScrollTop((previousValue) => {
  if (previousValue === shouldShowScrollTop) {
    return previousValue
  }

  return shouldShowScrollTop
})
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Save theme preference
  useEffect(() => {
    localStorage.setItem(
      'theme',
      darkMode ? 'dark' : 'light'
    )
  }, [darkMode])

  // Scroll animations
  useEffect(() => {
    const animatedElements = document.querySelectorAll(
      '.animate-on-scroll'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
      }
    )

    animatedElements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  // Active navigation section
  useEffect(() => {
    const sections = document.querySelectorAll(
      'main section'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0px -60% 0px',
      }
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      {/* Navbar */}
      <header className="navbar">
        <div className="container navbar-content">
          <a
            href="#home"
            className="logo"
            aria-label="Ashish Sonkaria - Home"
          >
            AS
          </a>

          <nav
            id="main-navigation"
            className={
              isMenuOpen
                ? 'nav-links mobile-open'
                : 'nav-links'
            }
            aria-label="Main navigation"
          >
            <a
              href="#about"
              className={
                activeSection === 'about' ? 'active' : ''
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>

            <a
              href="#skills"
              className={
                activeSection === 'skills' ? 'active' : ''
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>

            <a
              href="#experience"
              className={
                activeSection === 'experience'
                  ? 'active'
                  : ''
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </a>

            <a
              href="#projects"
              className={
                activeSection === 'projects'
                  ? 'active'
                  : ''
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>

            <a
              href="#education"
              className={
                activeSection === 'education'
                  ? 'active'
                  : ''
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Education
            </a>

            <a
              href="#certifications"
              className={
                activeSection === 'certifications'
                  ? 'active'
                  : ''
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Certifications
            </a>

            <a
              href="#contact"
              className={
                activeSection === 'contact' ? 'active' : ''
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>

          <a
            href="https://github.com/ashish2024"
            target="_blank"
            rel="noreferrer"
            className="nav-github"
          >
            GitHub
          </a>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={
              isMenuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>

          <button
            type="button"
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={
              darkMode
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="hero-section">
          <div className="container hero-content">
            <p className="hero-intro">
              Hi, I'm Ashish Sonkaria
            </p>

            <h1>
              Java Backend
              <span>Developer</span>
            </h1>

            <p className="hero-description">
              I build backend applications and REST APIs using
              Java, Spring Boot, Spring Security, JPA/Hibernate,
              and MySQL.
            </p>

            <div className="hero-actions">
              <a
                href="#projects"
                className="button button-primary"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="button button-secondary"
              >
                Contact Me
              </a>

              <a
                href="/ashcv.pdf"
                className="button button-secondary"
                download
              >
                Download Resume
              </a>
            </div>

            <div className="hero-tech">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>REST APIs</span>
              <span>MySQL</span>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="about-section">
          <div className="container about-content animate-on-scroll">
            <p className="section-label">About Me</p>

            <h2>
              Building reliable backend applications with Java.
            </h2>

            <p>
              I'm a Software Engineer at Wipro with a focus on
              Java backend development. I work with Java, Spring
              Boot, REST APIs, Spring Security, JPA/Hibernate,
              and MySQL.
            </p>

            <p>
              I'm currently strengthening my backend engineering
              skills by building and improving practical projects
              that I can run, test, explain, and demonstrate.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="skills-section">
          <div className="container">
            <p className="section-label">Skills</p>

            <h2>Technologies I work with.</h2>

            <div className="skills-grid animate-on-scroll">
              <button
                type="button"
                className={`skill-card ${
                  activeSkill === 'Backend' ? 'active' : ''
                }`}
                onClick={() => setActiveSkill('Backend')}
              >
                <h3>Backend</h3>
                <p>
                  Java, Spring Boot, Spring Security, REST APIs
                </p>
              </button>

              <button
                type="button"
                className={`skill-card ${
                  activeSkill === 'Database' ? 'active' : ''
                }`}
                onClick={() => setActiveSkill('Database')}
              >
                <h3>Database</h3>
                <p>MySQL, SQL, JPA, Hibernate</p>
              </button>

              <button
                type="button"
                className={`skill-card ${
                  activeSkill === 'Messaging & Tools'
                    ? 'active'
                    : ''
                }`}
                onClick={() =>
                  setActiveSkill('Messaging & Tools')
                }
              >
                <h3>Messaging & Tools</h3>
                <p>
                  RabbitMQ, Postman, Git, GitHub, Docker
                </p>
              </button>

              <button
                type="button"
                className={`skill-card ${
                  activeSkill === 'Other' ? 'active' : ''
                }`}
                onClick={() => setActiveSkill('Other')}
              >
                <h3>Other</h3>
                <p>
                  Python, CI/CD, IBM App Connect Enterprise
                </p>
              </button>
            </div>

            <div className="skills-selected animate-on-scroll">
              <p className="skills-selected-label">
                Selected category
              </p>

              <h3>{activeSkill}</h3>

              <p>
                Click another category to explore my technical
                skills.
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="experience-section"
        >
          <div className="container experience-content">
            <p className="section-label">Experience</p>

            <h2>Professional experience.</h2>

            <div className="experience-card animate-on-scroll">
              <div className="experience-header">
                <div>
                  <h3>Software Engineer</h3>

                  <p className="experience-company">
                    Wipro
                  </p>
                </div>

                <p className="experience-date">
                  Mar 2025 – Present
                </p>
              </div>

              <p className="experience-description">
                Working as a Software Engineer while developing
                and strengthening my backend engineering skills
                with Java, Spring Boot, REST APIs, Spring
                Security, JPA/Hibernate, and MySQL.
              </p>

              <div className="experience-tech">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>REST APIs</span>
                <span>Spring Security</span>
                <span>JPA / Hibernate</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="projects-section">
          <div className="container">
            <p className="section-label">Projects</p>

            <h2>Projects I've been building.</h2>

            <div className="projects-grid animate-on-scroll">
              {/* Blog Application */}
              <article className="project-card">
                <div className="project-content">
                  <p className="project-status">
                    Backend Project
                  </p>

                  <h3>Blog Application</h3>

                  <p>
                    A backend-focused blog application built with
                    Java and Spring Boot, featuring REST APIs,
                    authentication and authorization, database
                    persistence, and backend security.
                  </p>

                  <div className="project-tech">
                    <span>Java</span>
                    <span>Spring Boot</span>
                    <span>Spring Security</span>
                    <span>JWT</span>
                    <span>JPA / Hibernate</span>
                    <span>MySQL</span>
                    <span>REST APIs</span>
                    <span>RabbitMQ</span>
                  </div>
                </div>

                <div className="project-links">
                  <a
                    href="https://github.com/ashish2024"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub →
                  </a>
                </div>
              </article>

              {/* FitAI */}
              <article className="project-card">
                <div className="project-content">
                  <p className="project-status">
                    In Progress
                  </p>

                  <h3>FitAI</h3>

                  <p>
                    A fitness and nutrition platform combining a
                    Java Spring Boot backend with AI-powered
                    recommendations and a personalized user
                    experience.
                  </p>

                  <div className="project-tech">
                    <span>Java</span>
                    <span>Spring Boot</span>
                    <span>Spring Security</span>
                    <span>MySQL</span>
                    <span>React</span>
                    <span>Python</span>
                    <span>FastAPI</span>
                    <span>AI / LLM</span>
                  </div>
                </div>

                <div className="project-links">
                  <span className="project-link-disabled">
                    In Development
                  </span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Education */}
        <section
          id="education"
          className="education-section"
        >
          <div className="container education-content">
            <p className="section-label">Education</p>

            <h2>Academic background.</h2>

            <article className="education-card animate-on-scroll">
              <div className="education-header">
                <div>
                  <h3>
                    B.Tech in Computer Science Engineering
                  </h3>

                  <p className="education-institute">
                    Vel Tech Rangarajan Dr. Sagunthala R&D
                    Institute of Science & Technology
                  </p>
                </div>

                <p className="education-date">
                  2020 – 2024
                </p>
              </div>

              <div className="education-details">
                <span>CGPA: 8.62</span>
                <span>
                  Computer Science Engineering
                </span>
              </div>
            </article>
          </div>
        </section>

        {/* Certifications */}
        <section
          id="certifications"
          className="certifications-section"
        >
          <div className="container">
            <p className="section-label">
              Certifications
            </p>

            <h2>Certifications & learning.</h2>

            <div className="certifications-grid animate-on-scroll">
              <div className="certification-card">
                <h3>
                  Microsoft 365 Copilot Chat Explorer
                </h3>
                <p>Microsoft · Nov 2025</p>
              </div>

              <div className="certification-card">
                <h3>
                  IBM App Connect Enterprise v12.0
                </h3>
                <p>IBM · May 2025</p>
              </div>

              <div className="certification-card">
                <h3>Problem Solving Basic</h3>
                <p>HackerRank</p>
              </div>

              <div className="certification-card">
                <h3>Python Basic</h3>
                <p>HackerRank</p>
              </div>

              <div className="certification-card">
                <h3>SQL Basic</h3>
                <p>HackerRank</p>
              </div>

              <div className="certification-card">
                <h3>Cybersecurity Essentials</h3>
                <p>Cisco · May 2022</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="contact-section">
          <div className="container contact-content animate-on-scroll">
            <p className="section-label">Contact</p>

            <h2>Let's connect.</h2>

            <p>
              I'm open to Java backend development, Spring Boot,
              and software engineering opportunities.
            </p>

            <div className="contact-links">
              <a
                href="mailto:ashish21152@gmail.com"
                className="contact-link"
              >
                Email Me
              </a>

              <a
                href="https://www.linkedin.com/in/ashish-sonkaria2511/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/ashish2024"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <p>
            © 2026 Ashish Sonkaria. All rights reserved.
          </p>

          <a href="#home">Back to top</a>
        </div>
      </footer>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          type="button"
          className="scroll-top-button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  )
}

export default App