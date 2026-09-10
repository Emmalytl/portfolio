import { useState } from 'react'
import profilePhoto from './assets/profile.jpg'
import tidylineImg from './assets/tidyline.png'
import ticketingImg from './assets/ticketing.png'
import literaryLoungeImg from './assets/literary-lounge.png'

const RESUME_URL = '/Emmanuel_Peprah_Boateng_CV.pdf'

const SKILL_GROUPS = [
  { label: 'IT & Support', items: ['IT Support', 'Helpdesk', 'Remote Support', 'Windows & Linux', 'Hardware Troubleshooting'] },
  { label: 'Networking', items: ['TCP/IP', 'DNS', 'DHCP', 'LAN/WAN', 'Wi-Fi & Ethernet', 'Cisco Fundamentals'] },
  { label: 'Security', items: ['Cybersecurity', 'Vulnerability Assessment', 'Incident Response', 'Security Monitoring', 'Splunk', 'Security Awareness'] },
  { label: 'Build & Cloud', items: ['React', 'JavaScript', 'Supabase', 'GitHub', 'Vercel', 'VirtualBox / VMware'] },
]

const PROJECTS = [
  {
    title: 'Tidyline',
    type: 'Business Operations Platform',
    description: 'A modern booking and operations platform designed to turn a real cleaning business into a smoother digital workflow — from customer booking to admin operations.',
    tech: ['React', 'Supabase', 'Vercel'],
    link: 'https://tidyline-ghana.vercel.app/',
    image: tidylineImg,
  },
  {
    title: 'Literary Lounge',
    type: 'Community Web App',
    description: 'A digital clubhouse for readers to discover books, connect with members, follow events and build an active reading community.',
    tech: ['React', 'Supabase', 'Vercel'],
    link: 'https://literary-lounge-iota.vercel.app/',
    image: literaryLoungeImg,
  },
  {
    title: 'IT Ticketing System',
    type: 'IT Service Management',
    description: 'A support platform concept for structured issue reporting, ticket assignment and technical resolution across software, hardware, networking and security.',
    tech: ['JavaScript', 'Supabase', 'RLS'],
    link: '',
    image: ticketingImg,
  },
  {
    title: 'Cybersecurity Home Lab',
    type: 'Hands-on Security Lab',
    description: 'A practical lab environment used to build skills in security monitoring, troubleshooting, virtual machines and ethical security testing.',
    tech: ['Kali Linux', 'Splunk', 'TryHackMe', 'HackTheBox'],
    link: '',
    image: null,
  },
]

const EXPERIENCE = [
  {
    role: 'IT Support Specialist & Customer Service Agent',
    company: 'Concentrix — Accra',
    period: 'Jan 2024 – Present',
    description: 'Provide specialized technical support to business owners on Google Business Profile, resolving access, verification, accuracy and security-related issues across phone, chat and email.',
  },
  {
    role: 'System & Data Entry Clerk',
    company: 'Ghana Cocoa Board — Accra',
    period: 'Jan 2021 – Dec 2023',
    description: 'Managed farmers’ biodata, issued cocoa cards, maintained confidentiality and supported operational decision-making through accurate data analysis and reporting.',
  },
  {
    role: 'Information Security & Support Technician',
    company: 'I-AKROTECH Company Ltd — Kumasi',
    period: 'Mar 2019 – Apr 2023',
    description: 'Supported system security through vulnerability assessments, penetration testing, security policy work, incident response and staff cybersecurity awareness training.',
  },
  {
    role: 'IT Support & Data Entry Clerk',
    company: 'National Identification Authority — Accra',
    period: 'May 2019 – Dec 2020',
    description: 'Operated biometric enrollment systems, verified identification documents and maintained mobile workstations while supporting users and data-security requirements.',
  },
  {
    role: 'National Service — IT Technician & Security Support',
    company: 'Inspired Technology Consult — Sunyani',
    period: 'Sep 2017 – Aug 2018',
    description: 'Provided first-line support across Windows and Linux systems, installed and maintained hardware, and troubleshot LAN/WAN, IP, DNS and DHCP issues.',
  },
]

const CERTIFICATIONS = [
  'Microsoft Certified: Security Operations Analyst',
  'Certified Security Awareness 1 — Mile2',
  'Diploma in Project Management — IBMI Berlin',
  'Information Systems Security — Alison',
  'Diploma in IT Support Technician — Alison',
  'IT Management — Software & Databases — Alison',
  'Google IT Support — In progress',
  'CompTIA A+ — In progress',
]

const CONTACT = {
  email: 'emmanuelpeprahboateng@gmail.com',
  github: 'https://github.com/Emmalytl',
  linkedin: 'https://www.linkedin.com/in/emmanuel-peprah-boateng-12bb83133',
  phone: '+233 24 063 9070',
  whatsapp: 'https://wa.me/233203735372',
  location: 'Accra, Ghana',
}

function Icon({ name }) {
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    download: <><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></>,
    external: <><path d="M14 3h7v7"/><path d="M10 14 21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.2-.4 6.5-1.6 6.5-7A5.5 5.5 0 0 0 19 3.7 5.1 5.1 0 0 0 18.9 0S17.7-.4 15 1.4a13.4 13.4 0 0 0-6 0C6.3-.4 5.1 0 5.1 0A5.1 5.1 0 0 0 5 3.7 5.5 5.5 0 0 0 3.5 7.5c0 5.4 3.3 6.6 6.5 7A4.8 4.8 0 0 0 9 18v4"/><path d="M9 18c-4.5 2-5-2-7-2"/></>,
    map: <><path d="M9 18V5l6-3v13l-6 3Z"/><path d="M3 7v13l6-2"/><path d="m15 15 6 2V4l-6-2"/></>,
    menu: <><path d="M4 6h16M4 12h16M4 18h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
  }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-visual">
        {project.image ? <img src={project.image} alt={`${project.title} project preview`} /> : <div className="lab-visual"><span>SECURITY</span><strong>LAB</strong><small>KALI · SPLUNK · VM</small></div>}
        <span className="project-type">{project.type}</span>
      </div>
      <div className="project-content">
        <div className="project-title-row">
          <h3>{project.title}</h3>
          {project.link && <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><Icon name="external" /></a>}
        </div>
        <p>{project.description}</p>
        <div className="tech-row">{project.tech.map(t => <span key={t}>{t}</span>)}</div>
        {project.link && <a className="text-link" href={project.link} target="_blank" rel="noreferrer">View live project <Icon name="arrow" /></a>}
      </div>
    </article>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <nav className="nav">
        <div className="nav-inner">
          <a className="brand" href="#top" onClick={closeMenu}><span>EPB</span><i>TECH</i></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle navigation"><Icon name={menuOpen ? 'close' : 'menu'} /></button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#cv" onClick={closeMenu}>CV</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Hire me <Icon name="arrow" /></a>
          </div>
        </div>
      </nav>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="availability"><span /> Open to IT & Cybersecurity opportunities</div>
            <p className="eyebrow">IT SUPPORT · CYBERSECURITY · SYSTEMS</p>
            <h1>Technology that <em>solves problems.</em></h1>
            <p className="hero-lead">I’m <strong>Emmanuel Peprah Boateng</strong>, an IT Support Specialist and cybersecurity-focused technology professional based in Accra. I troubleshoot, secure, support and build practical digital solutions that help people and businesses work better.</p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">Let’s work together <Icon name="arrow" /></a>
              <a className="button secondary" href={RESUME_URL} target="_blank" rel="noreferrer"><Icon name="download" /> View my CV</a>
            </div>
            <div className="quick-proof">
              <span><b>IT</b> Support & troubleshooting</span><span><b>SEC</b> Security mindset</span><span><b>BUILD</b> Real projects</span>
            </div>
          </div>
          <div className="hero-card">
            <div className="grid-lines" />
            <div className="profile-frame">
              <img src={profilePhoto} alt="Emmanuel Peprah Boateng" />
              <span className="scan-line" />
            </div>
            <div className="profile-caption"><span>BASED IN</span><strong>Accra, Ghana</strong></div>
            <div className="status-orbit"><span /><small>AVAILABLE</small></div>
            <div className="code-chip">&lt;build<br />&nbsp;&nbsp;impact /&gt;</div>
          </div>
        </section>

        <section className="trust-strip"><div className="section-wrap trust-inner"><span>FOCUS</span><b>Technical Support</b><i /> <b>Cybersecurity</b><i /> <b>Networking</b><i /> <b>Systems</b><i /> <b>Digital Solutions</b></div></section>

        <section className="section-wrap content-section" id="about">
          <div className="section-label"><span>01</span><b>ABOUT ME</b></div>
          <div className="about-grid">
            <div><h2>Not just an IT professional.<br /><em>I’m a problem solver.</em></h2></div>
            <div><p>I enjoy getting to the root of technical problems, explaining solutions clearly and making systems more reliable. My experience spans technical support, customer-facing troubleshooting, networking, data systems and information security.</p><p>I’m continuously strengthening my cybersecurity and systems engineering skills through hands-on labs and real projects — because the best way to learn technology is to build and troubleshoot it.</p></div>
          </div>
        </section>

        <section className="section-wrap content-section" id="skills">
          <div className="section-label"><span>02</span><b>TECHNICAL TOOLKIT</b></div>
          <div className="skills-grid">
            {SKILL_GROUPS.map(group => <div className="skill-card" key={group.label}><span className="skill-index">0{SKILL_GROUPS.indexOf(group)+1}</span><h3>{group.label}</h3><div>{group.items.map(item => <span key={item}><Icon name="check" />{item}</span>)}</div></div>)}
          </div>
        </section>

        <section className="section-wrap content-section" id="experience">
          <div className="section-label"><span>03</span><b>EXPERIENCE</b></div>
          <div className="experience-list">
            {EXPERIENCE.map((job, i) => <article className="experience-card" key={job.role}><div className="experience-number">0{i+1}</div><div className="experience-main"><div className="experience-top"><div><h3>{job.role}</h3><span>{job.company}</span></div><time>{job.period}</time></div><p>{job.description}</p></div></article>)}
          </div>
        </section>

        <section className="section-wrap content-section" id="projects">
          <div className="section-label"><span>04</span><b>SELECTED WORK</b></div>
          <div className="section-intro"><div><h2>Things I’ve <em>built.</em></h2></div><p>Practical projects where technology meets a real need — from business operations to community platforms and security labs.</p></div>
          <div className="projects-grid">{PROJECTS.map(project => <ProjectCard key={project.title} project={project} />)}</div>
        </section>

        <section className="section-wrap cv-section" id="cv">
          <div className="cv-card">
            <div><span className="cv-kicker">READY FOR THE NEXT CHALLENGE?</span><h2>Let’s put my skills<br /><em>to work.</em></h2><p>Explore my full CV for my professional experience, education, technical skills and certifications.</p></div>
            <div className="cv-actions"><a className="button light" href={RESUME_URL} target="_blank" rel="noreferrer"><Icon name="download" /> View full CV</a><a className="cv-email" href={`mailto:${CONTACT.email}`}>Email me <Icon name="arrow" /></a></div>
          </div>
        </section>

        <section className="section-wrap content-section education-section">
          <div className="section-label"><span>05</span><b>EDUCATION & CERTIFICATIONS</b></div>
          <div className="education-grid">
            <div className="education-card"><span>EDUCATION</span><h3>BSc Computer Science</h3><p>Christian Service University College</p><small>2017</small></div>
            <div className="cert-card"><span>CERTIFICATIONS & LEARNING</span><div>{CERTIFICATIONS.map(c => <p key={c}><Icon name="check" />{c}</p>)}</div></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div className="section-label light-label"><span>06</span><b>CONTACT</b></div>
            <h2>Have a technical problem<br />or an opportunity? <em>Let’s talk.</em></h2>
            <p>I’m open to IT support, cybersecurity, systems and technology opportunities where I can contribute, learn and create measurable value.</p>
            <div className="contact-actions"><a className="button primary" href={`mailto:${CONTACT.email}`}><Icon name="mail" /> {CONTACT.email}</a><a className="button whatsapp" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">WhatsApp me <Icon name="arrow" /></a></div>
            <div className="contact-meta"><span><Icon name="map" /> {CONTACT.location}</span><a href={CONTACT.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" /> LinkedIn</a><a href={CONTACT.github} target="_blank" rel="noreferrer"><Icon name="github" /> GitHub</a><span>{CONTACT.phone}</span></div>
          </div>
        </section>
      </main>

      <footer><div className="section-wrap footer-inner"><span>© {new Date().getFullYear()} Emmanuel Peprah Boateng</span><span>Built with React · Designed for impact</span></div></footer>
    </div>
  )
}

export default App
