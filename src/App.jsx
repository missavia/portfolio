import { useEffect, useState } from 'react'

const projects = [
  {
    number: '01',
    title: 'Summer Menu & Recipes',
    description: 'A seasonal collection of light, considered dishes — written for warm evenings and quiet mornings.',
    status: 'In progress',
    tag: 'Culinary',
  },
  {
    number: '02',
    title: 'Miracoland Dashboard',
    description: 'An analytics view of an e-commerce business in growth — orders, products, channels, and what the numbers quietly say.',
    status: 'Building',
    tag: 'Data & Analytics',
  },
  {
    number: '03',
    title: 'Bible Study',
    description: 'A year-long reading plan made visible — notes from Luke, Deuteronomy, Joshua, Psalms, Proverbs, and Matthew.',
    status: 'Ongoing',
    tag: 'Scripture',
  },
  {
    number: '04',
    title: 'Forthcoming',
    description: 'Something in the making. Returning soon.',
    status: 'Reserved',
    tag: '—',
  },
]

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 50)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`page ${loaded ? 'loaded' : ''}`}>
      <div className="grain" aria-hidden="true" />

      <header className="nav">
        <div className="nav-mark">AT</div>
        <nav className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <p className="eyebrow">Portfolio — Two Thousand Twenty-Six</p>
        <h1 className="hero-title">
          <span className="line">Avia</span>
          <span className="line italic">Tan</span>
        </h1>
        <p className="hero-sub">
          A small archive of projects in data, faith, and good living —
          made slowly, with care.
        </p>
        <div className="hero-meta">
          <span>Austin, Texas</span>
          <span className="dot">·</span>
          <span>Est. 2026</span>
        </div>
      </section>

      <section id="work" className="section">
        <div className="section-head">
          <p className="section-num">I.</p>
          <h2 className="section-title">Selected Work</h2>
          <p className="section-rule" />
        </div>

        <ul className="projects">
          {projects.map((p) => (
            <li key={p.number} className="project">
              <div className="project-num">{p.number}</div>
              <div className="project-body">
                <div className="project-tag">{p.tag}</div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
              </div>
              <div className="project-status">{p.status}</div>
            </li>
          ))}
        </ul>
      </section>

      <section id="about" className="section about">
        <div className="section-head">
          <p className="section-num">II.</p>
          <h2 className="section-title">About</h2>
          <p className="section-rule" />
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p className="lede">
              I'm a fraud investigator by trade and a builder by inclination —
              moving toward data analytics, growing a small e-commerce business,
              and learning to live more deliberately along the way.
            </p>
            <p>
              My work sits at the intersection of curiosity and craft: SQL and
              Python on the analytical side, Scripture and slow living on the
              personal one. I prefer simple things done well — clean tables,
              clear sentences, well-made garments, faithful prayer.
            </p>
            <p>
              This space gathers the projects I'm building in the open. Some
              technical, some written, some quietly devotional. All in motion.
            </p>
          </div>

          <aside className="about-meta">
            <div className="meta-row">
              <span className="meta-label">Currently</span>
              <span className="meta-value">Apple — Fraud Investigation</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Studying</span>
              <span className="meta-value">SQL, Python, Tableau</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Building</span>
              <span className="meta-value">Miracoland</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Reading</span>
              <span className="meta-value">The Bible, in a year</span>
            </div>
          </aside>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="section-head">
          <p className="section-num">III.</p>
          <h2 className="section-title">Contact</h2>
          <p className="section-rule" />
        </div>

        <div className="contact-body">
          <p className="contact-lede">
            For collaborations, conversations, or a quiet hello.
          </p>
          <div className="contact-links">
            <a href="mailto:aviatanbusiness@gmail.com" className="contact-link">
              <span className="contact-link-label">Email</span>
              <span className="contact-link-value">aviatanbusiness@gmail.com</span>
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="contact-link">
              <span className="contact-link-label">GitHub</span>
              <span className="contact-link-value">@missavia</span>
            </a>
            <a href="https://www.etsy.com/" target="_blank" rel="noreferrer" className="contact-link">
              <span className="contact-link-label">Shop</span>
              <span className="contact-link-value">Miracoland</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© Avia Tan · MMXXVI</p>
        <p className="footer-verse">
          "She seeketh wool, and flax, and worketh willingly with her hands." — Proverbs 31:13
        </p>
      </footer>
    </div>
  )
}
