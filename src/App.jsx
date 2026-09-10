// =============================================================
// THIS IS THE MAIN FILE YOU'LL EDIT THE MOST.
// Everything on your portfolio page is controlled from here.
// =============================================================

// Import your images. Vite bundles these automatically - after
// "npm run build" they get copied into the final output with
// unique filenames, so you never need to worry about file paths.
import profilePhoto from './assets/profile.jpg'
import tidylineImg from './assets/tidyline.png'
import ticketingImg from './assets/ticketing.png'
import literaryLoungeImg from './assets/literary-lounge.png'

// -------------------------------------------------------------
// STEP 1: YOUR INFO
// Edit these values below to be about YOU. This is the only
// part of the file most people ever need to touch.
// -------------------------------------------------------------
const YOUR_NAME = "Emmanuel Peprah Boateng"
const YOUR_TAGLINE = "Masters student · Cybersecurity & IT support · Software builder"

// Shown as a small colored dot + label near your name.
// Change the text, or set SHOW_STATUS_BADGE to false to hide it entirely.
const SHOW_STATUS_BADGE = true
const STATUS_TEXT = "Open to opportunities"

// Link to your resume/CV file. If you don't have one hosted yet,
// leave this as an empty string "" and the button will hide itself.
// Easiest option: upload a PDF to your GitHub repo (e.g. as
// "resume.pdf" in the public/ folder) and link to it, or use a
// Google Drive "anyone with the link can view" share link.
const RESUME_URL = ""

// Short intro paragraph shown under your name.
// Keep it to 2-3 sentences. Write like you're introducing
// yourself to someone at a career fair.
const ABOUT_ME =
  "I'm a masters student getting hands-on in tech — building real software, " +
  "practicing cybersecurity from the ground up, and working in technical support. " +
  "I like solving real problems, not just theory."

// A simple list of skill "tags" shown as small pills.
// Add or remove strings from this list freely.
const SKILLS = [
  "Cybersecurity",
  "IT Support",
  "React",
  "JavaScript",
  "Supabase",
  "Splunk",
  "Networking (DNS/DHCP/AD)",
]

// -------------------------------------------------------------
// STEP 2: YOUR PROJECTS
// This is an "array" (a list) of project objects.
// To add a new project, copy one of the { ... } blocks below,
// paste it, and change the text inside.
// "image" is optional - import a screenshot at the top of this
// file (like the ones above) and reference it here, or leave it
// as null if you don't have one yet.
// -------------------------------------------------------------
const PROJECTS = [
  {
    title: "IT Ticketing System",
    description:
      "A Zendesk-style support platform for IT teams. Customers report issues " +
      "across software, hardware, networking, and cybersecurity — and staff get " +
      "assigned tickets based on their specialties, not a generic technician role.",
    tech: "HTML, CSS, JavaScript, Supabase (Auth + Row-Level Security)",
    link: "https://github.com/your-username/your-repo-name", // <-- replace with your real repo link
    image: ticketingImg,
  },
  {
    title: "Tidyline",
    description:
      "A booking app where clients can schedule cleaning services online, " +
      "without back-and-forth phone calls or messages.",
    tech: "React",
    link: "https://tidyline-ghana.vercel.app/", // live demo
    image: tidylineImg,
  },
  {
    title: "Literary Lounge",
    description:
      "A digital literary clubhouse — a space for readers to meet, discuss " +
      "books, and connect with each other.",
    tech: "React",
    link: "https://literary-lounge-iota.vercel.app/", // live demo
    image: literaryLoungeImg,
  },
  {
    title: "Home Lab",
    description:
      "A self-built cybersecurity and IT-support training environment on " +
      "repurposed low-spec hardware — practicing penetration testing " +
      "(TryHackMe / HackTheBox) and security monitoring (Splunk) from scratch.",
    tech: "Kali Linux, Splunk, TryHackMe, HackTheBox",
    link: "", // leave blank if there's no repo/link for this one yet
    image: null, // no screenshot for this one - it's a physical lab, not a website
  },
]

// Your contact links. Delete a line if you don't want to show it.
const CONTACT = {
  email: "emmanuelpeprahboateng@gmail.com",
  github: "https://github.com/Emmalytl",
  linkedin: "https://www.linkedin.com/in/emmanuel-peprah-boateng-12bb83133",
  // Two phone numbers - shown as plain text, not clickable links.
  phone: "+233 24 063 9070 / +233 20 373 5372",
}

// -------------------------------------------------------------
// STEP 3: NAVIGATION LINKS
// Shown in the sticky top bar. Each "href" points to a section
// id further down in this file (e.g. #projects matches the
// <section id="projects"> tag below).
// -------------------------------------------------------------
const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

// =============================================================
// EVERYTHING BELOW THIS LINE IS THE PAGE LAYOUT / STRUCTURE.
// You don't need to touch this to update your content —
// but feel free to look through it to learn how it works.
// =============================================================

// A small reusable component for one project entry.
// "props" here means the data passed INTO this component
// (title, description, tech, link, image) from the PROJECTS list above.
function ProjectItem({ title, description, tech, link, image }) {
  return (
    <div className="project-item">
      {/* Only render the screenshot block if an image was provided */}
      {image && (
        <div className="project-image-wrap">
          <img src={image} alt={`Screenshot of ${title}`} className="project-image" />
        </div>
      )}
      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <p className="project-tech">{tech}</p>
        {/* Only show the "View project" link if a link was actually provided */}
        {link && (
          <a href={link} target="_blank" rel="noreferrer" className="project-link">
            View project
          </a>
        )}
      </div>
    </div>
  )
}

// The main App component. This is what actually gets rendered
// on the page (see src/main.jsx).
function App() {
  return (
    <>
      {/* ---------- STICKY NAV BAR ---------- */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#top" className="nav-brand">{YOUR_NAME.split(" ")[0]}</a>
          <div className="nav-links">
            {NAV_LINKS.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
            {/* The resume button only shows up if you filled in RESUME_URL above */}
            {RESUME_URL && (
              <a href={RESUME_URL} target="_blank" rel="noreferrer" className="nav-resume-btn">
                Resume
              </a>
            )}
          </div>
        </div>
      </nav>

      <div className="page" id="top">
        {/* ---------- HEADER SECTION ---------- */}
        <header className="header">
          {/* Your real photo, cropped into a circle */}
          <img src={profilePhoto} alt={YOUR_NAME} className="avatar-photo" />
          <h1 className="name">{YOUR_NAME}</h1>
          <p className="tagline">{YOUR_TAGLINE}</p>
          {SHOW_STATUS_BADGE && (
            <div className="status-badge">
              <span className="status-dot" />
              {STATUS_TEXT}
            </div>
          )}
        </header>

        {/* ---------- ABOUT SECTION ---------- */}
        <section className="about" id="about">
          <p>{ABOUT_ME}</p>
        </section>

        {/* ---------- SKILLS SECTION ---------- */}
        <section className="skills">
          {/* .map() loops through the SKILLS array and turns each
              string into a small pill element on the page */}
          {SKILLS.map((skill) => (
            <span key={skill} className="skill-pill">
              {skill}
            </span>
          ))}
        </section>

        {/* ---------- PROJECTS SECTION ---------- */}
        <section className="projects" id="projects">
          <h2 className="section-heading">Projects</h2>
          {/* .map() loops through PROJECTS and renders one
              ProjectItem component per project */}
          {PROJECTS.map((project) => (
            <ProjectItem key={project.title} {...project} />
          ))}
        </section>

        {/* ---------- CONTACT SECTION ---------- */}
        <footer className="contact" id="contact">
          <h2 className="section-heading">Contact</h2>
          <div className="contact-links">
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a href={CONTACT.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            {/* Phone numbers as plain text - not a clickable link */}
            <span className="contact-text">{CONTACT.phone}</span>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
