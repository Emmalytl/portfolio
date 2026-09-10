// =============================================================
// THIS IS THE MAIN FILE YOU'LL EDIT THE MOST.
// Everything on your portfolio page is controlled from here.
// =============================================================

// -------------------------------------------------------------
// STEP 1: YOUR INFO
// Edit these values below to be about YOU. This is the only
// part of the file most people ever need to touch.
// -------------------------------------------------------------
const YOUR_NAME = "Emmanuel Peprah Boateng"
const YOUR_TAGLINE = "Masters student · Cybersecurity & IT support · Software builder"

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
  "PHP",
  "HTML",
  "MYSQL",
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
// To remove a project, delete its whole { ... } block.
// -------------------------------------------------------------
const PROJECTS = [
  {
    title: "IT Ticketing System",
    description:
      "A Zendesk-style support platform for IT teams. Customers report issues " +
      "across software, hardware, networking, and cybersecurity — and staff get " +
      "assigned tickets based on their specialties, not a generic technician role.",
    tech: "HTML, CSS, JavaScript, Supabase (Auth + Row-Level Security)",
    link: "", // <-- replace with your real repo link
  },
  {
    title: "Tidyline",
    description:
      "A booking app where clients can schedule cleaning services online, " +
      "without back-and-forth phone calls or messages.",
    tech: "React",
    link: "https://tidyline-ghana.vercel.app/", // live demo
  },
  {
    title: "Literary Lounge",
    description:
      "A digital literary clubhouse — a space for readers to meet, discuss " +
      "books, and connect with each other.",
    tech: "React",
    link: "https://literary-lounge-iota.vercel.app/", // live demo
  },
  {
    title: "Home Lab",
    description:
      "A self-built cybersecurity and IT-support training environment on " +
      "repurposed low-spec hardware — practicing penetration testing " +
      "(TryHackMe / HackTheBox) and security monitoring (Splunk) from scratch.",
    tech: "Kali Linux, Splunk, TryHackMe, HackTheBox",
    link: "", // leave blank if there's no repo/link for this one yet
  },
]

// Your contact links. Delete a line if you don't want to show it.
const CONTACT = {
  email: "you@example.com",
  github: "https://github.com/emmalytl", // double-check this is your actual GitHub username
  linkedin: "https://linkedin.com/in/your-profile",
}

// =============================================================
// EVERYTHING BELOW THIS LINE IS THE PAGE LAYOUT / STRUCTURE.
// You don't need to touch this to update your content —
// but feel free to look through it to learn how it works.
// =============================================================

// A small reusable component for one project entry.
// "props" here means the data passed INTO this component
// (title, description, tech, link) from the PROJECTS list above.
function ProjectItem({ title, description, tech, link }) {
  return (
    <div className="project-item">
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
  )
}

// The main App component. This is what actually gets rendered
// on the page (see src/main.jsx).
function App() {
  return (
    <div className="page">
      {/* ---------- HEADER SECTION ---------- */}
      <header className="header">
        <h1 className="name">{YOUR_NAME}</h1>
        <p className="tagline">{YOUR_TAGLINE}</p>
      </header>

      {/* ---------- ABOUT SECTION ---------- */}
      <section className="about">
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
      <section className="projects">
        <h2 className="section-heading">Projects</h2>
        {/* .map() loops through PROJECTS and renders one
            ProjectItem component per project */}
        {PROJECTS.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </section>

      {/* ---------- CONTACT SECTION ---------- */}
      <footer className="contact">
        <h2 className="section-heading">Contact</h2>
        <div className="contact-links">
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <a href={CONTACT.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
