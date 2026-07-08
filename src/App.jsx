import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Gauge,
  GitBranch,
  Mail,
  Map,
  MapPin,
  Network,
  Radio,
  Rocket,
  Server,
  ShieldCheck,
  Terminal,
  Users,
} from "lucide-react";

const metrics = [
  { value: "7+", label: "years building production systems" },
  { value: "4", label: "engineers led across platform work" },
  { value: "500k+", label: "embedded systems validated annually" },
  { value: "15", label: "technicians led in manufacturing ops" },
];

const focusAreas = [
  {
    icon: Server,
    title: "Operator platforms",
    copy:
      "React and TypeScript tooling for telecom operators, deployment visibility, venue management, and day-to-day infrastructure operations.",
  },
  {
    icon: GitBranch,
    title: "Backend workflows",
    copy:
      "Node.js microservice APIs for device onboarding, authentication, venue workflows, and reliable operational handoffs.",
  },
  {
    icon: Database,
    title: "Data systems",
    copy:
      "PostgreSQL, Kafka, ClickHouse, and Superset pipelines that turn infrastructure events into analytics and reporting.",
  },
  {
    icon: Map,
    title: "Geospatial deployment",
    copy:
      "Mapbox planning tools for venue mapping, coverage analysis, resource visibility, and field deployment strategy.",
  },
];

const leadershipSignals = [
  {
    icon: Users,
    title: "Team leverage",
    detail:
      "Leads engineers with ownership, mentorship, and clear execution paths across ambiguous product and infrastructure problems.",
  },
  {
    icon: ShieldCheck,
    title: "Production judgment",
    detail:
      "Balances architecture, delivery, reliability, and operational reality across software, networking, and hardware-connected systems.",
  },
  {
    icon: Gauge,
    title: "Business alignment",
    detail:
      "Builds tooling that improves operator visibility, support workflows, deployment readiness, and measurable field outcomes.",
  },
];

const skillGroups = [
  {
    title: "Leadership",
    skills: ["Team leadership", "Product ownership", "Mentorship", "Cross-functional execution"],
  },
  {
    title: "Software and infrastructure",
    skills: ["Node.js", "TypeScript", "React", "Python", "REST APIs", "Docker", "Linux", "CI/CD"],
  },
  {
    title: "Data platforms",
    skills: ["PostgreSQL", "Kafka", "ClickHouse", "Superset", "Analytics", "Operational reporting"],
  },
  {
    title: "Systems and networks",
    skills: ["AAA/RADIUS", "RadSec", "CBRS", "LAN/WAN", "VLANs", "Embedded validation"],
  },
];

const experience = [
  {
    role: "Engineering Lead, Platform and Infrastructure",
    company: "XNET Inc.",
    period: "May 2024 - Present",
    icon: Radio,
    bullets: [
      "Lead four engineers building telecommunications infrastructure platforms across operator tooling, APIs, analytics, and deployment workflows.",
      "Designed Node.js and TypeScript APIs for device onboarding, venue management, authentication, and operator workflows.",
      "Built React, Mapbox, PostgreSQL, Kafka, and ClickHouse systems for operational intelligence and deployment planning.",
    ],
  },
  {
    role: "Lead Software Application Engineer",
    company: "Bobcat Miner",
    period: "Oct 2021 - May 2023",
    icon: Network,
    bullets: [
      "Led engineers supporting Linux-based IoT products with Docker, Bash, and network troubleshooting workflows.",
      "Resolved CBRS, WAN/LAN, and device connectivity issues while building dashboards for product and support trends.",
    ],
  },
  {
    role: "Test Engineer",
    company: "Jabil",
    period: "Feb 2019 - Sep 2021",
    icon: Cpu,
    bullets: [
      "Led 15 technicians testing, troubleshooting, and validating more than 500,000 embedded and automation systems annually.",
      "Built custom hardware/software test stations, C++ firmware workflows, and sensor validation systems for production readiness.",
    ],
  },
];

const trajectory = [
  "Lead larger engineering organizations without losing technical depth.",
  "Turn ambiguous infrastructure needs into shipped platforms and accountable roadmaps.",
  "Connect customer operations, product strategy, data, and execution into one engineering system.",
];

const emailAddress = "javierruizjr15@gmail.com";
const emailSubject = "Engineering leadership opportunity";
const emailHref = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}`;

function App() {
  const [contactStatus, setContactStatus] = useState("");

  useEffect(() => {
    if (!contactStatus) {
      return undefined;
    }

    const timer = window.setTimeout(() => setContactStatus(""), 4200);
    return () => window.clearTimeout(timer);
  }, [contactStatus]);

  const fallbackCopyEmailAddress = () => {
    const textarea = document.createElement("textarea");
    textarea.value = emailAddress;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    let copied = false;

    try {
      copied = document.execCommand("copy");
    } catch {
      copied = false;
    } finally {
      document.body.removeChild(textarea);
    }

    return copied;
  };

  const copyEmailAddress = () => {
    const copied = fallbackCopyEmailAddress();

    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(emailAddress).catch(fallbackCopyEmailAddress);
    }

    return copied;
  };

  const handleEmailClick = (event) => {
    event.preventDefault();
    const copied = copyEmailAddress();
    setContactStatus(
      copied ? "Email copied: javierruizjr15@gmail.com" : "Email ready: javierruizjr15@gmail.com",
    );
    window.setTimeout(() => {
      window.location.href = emailHref;
    }, 80);
  };

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Javier Ruiz home">
          <span className="brand-mark" aria-hidden="true">
            <img src="/dc_white_lines_transparent_background.svg" alt="" />
          </span>
          <span>
            <strong>Javier Ruiz</strong>
            <small>Engineering Lead</small>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#leadership">Leadership</a>
          <a href="#systems">Systems</a>
          <a href="#experience">Experience</a>
          <a className="nav-cta" href={emailHref} onClick={handleEmailClick}>
            <Mail aria-hidden="true" />
            Contact
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src="/engineering-command-center.png"
            alt=""
            aria-hidden="true"
          />
          <div className="hero-shade" aria-hidden="true" />

          <div className="hero-inner">
            <div className="hero-content">
              <p className="eyebrow">Engineering Lead | Full-Stack Platform and Infrastructure</p>
              <h1 id="hero-title">Javier Ruiz</h1>
              <p className="hero-copy">
                I lead engineers through hard platform work: telecom operator tooling, backend
                services, React products, deployment workflows, and data systems that make
                real-world infrastructure easier to run.
              </p>

              <div className="hero-actions" aria-label="Contact links">
                <a className="button button-primary" href={emailHref} onClick={handleEmailClick}>
                  <Mail aria-hidden="true" />
                  Hire Javier
                  <ArrowRight aria-hidden="true" />
                </a>
                <a
                  className="button button-secondary"
                  href="https://www.linkedin.com/in/javier-ruiz-jr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Briefcase aria-hidden="true" />
                  LinkedIn
                  <ExternalLink aria-hidden="true" />
                </a>
                <a
                  className="button button-quiet"
                  href="https://github.com/javierruizjr15"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Code2 aria-hidden="true" />
                  GitHub
                </a>
              </div>
            </div>

            <aside className="hero-profile" aria-label="Javier Ruiz profile">
              <img
                src="/Javier.jpg"
                alt="Javier Ruiz smiling in a blazer"
                className="profile-photo"
              />
              <div className="profile-caption">
                <span>Meet Javier</span>
                <strong>Engineering leader with hands-on systems depth.</strong>
              </div>
            </aside>
          </div>

          <div className="hero-metrics" aria-label="Career highlights">
            {metrics.map((metric) => (
              <div className="hero-metric" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section intro-band" id="leadership" aria-labelledby="leadership-title">
          <div className="section-heading">
            <p className="eyebrow">Manager-ready signal</p>
            <h2 id="leadership-title">Technical depth with organizational leverage.</h2>
          </div>

          <div className="intro-grid">
            <p className="intro-copy">
              My strongest work sits where software, infrastructure, and field operations collide.
              I can write the platform code, design the data path, unblock the network issue, and
              still keep a team aligned around the business outcome.
            </p>

            <div className="signal-grid">
              {leadershipSignals.map(({ icon: Icon, title, detail }) => (
                <article className="signal-card" key={title}>
                  <Icon aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section focus-band" id="systems" aria-labelledby="systems-title">
          <div className="section-heading">
            <p className="eyebrow">What I build</p>
            <h2 id="systems-title">Platforms that make infrastructure visible and manageable.</h2>
          </div>

          <div className="focus-grid">
            {focusAreas.map(({ icon: Icon, title, copy }) => (
              <article className="focus-card" key={title}>
                <div className="icon-box">
                  <Icon aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section cto-band" aria-labelledby="cto-title">
          <div className="cto-layout">
            <div className="section-heading">
              <p className="eyebrow">CTO trajectory</p>
              <h2 id="cto-title">I am building the range to lead beyond the codebase.</h2>
              <p>
                The long-term goal is executive technical leadership: building strong teams,
                choosing the right systems, and making technology decisions that compound for the
                company.
              </p>
            </div>

            <div className="trajectory-panel" aria-label="CTO trajectory focus areas">
              {trajectory.map((item) => (
                <div className="trajectory-row" key={item}>
                  <CheckCircle2 aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section skills-band" aria-labelledby="skills-title">
          <div className="section-heading">
            <p className="eyebrow">Proof of range</p>
            <h2 id="skills-title">The stack spans product, platform, data, hardware, and networks.</h2>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="tag-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-band" id="experience" aria-labelledby="experience-title">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2 id="experience-title">A career built across software, systems, and operational scale.</h2>
          </div>

          <div className="timeline">
            {experience.map(({ role, company, period, icon: Icon, bullets }) => (
              <article className="timeline-item" key={`${role}-${company}`}>
                <div className="timeline-icon">
                  <Icon aria-hidden="true" />
                </div>
                <div className="timeline-content">
                  <div className="timeline-kicker">
                    <span>{company}</span>
                    <span>{period}</span>
                  </div>
                  <h3>{role}</h3>
                  <ul>
                    {bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section principles-band" aria-labelledby="principles-title">
          <div className="principles-layout">
            <div className="section-heading">
              <p className="eyebrow">Leadership operating model</p>
              <h2 id="principles-title">Calm execution, clear systems, accountable teams.</h2>
            </div>

            <div className="terminal-panel" aria-label="Leadership operating principles">
              <div className="terminal-bar">
                <Terminal aria-hidden="true" />
                <span>leadership-os</span>
              </div>
              <div className="terminal-lines">
                <p>
                  <span>01</span> Turn ambiguity into architecture, milestones, and ownership.
                </p>
                <p>
                  <span>02</span> Build tools that reduce support drag and expose operational truth.
                </p>
                <p>
                  <span>03</span> Mentor engineers toward better judgment, not just more output.
                </p>
                <p>
                  <span>04</span> Use data, field feedback, and customer reality to prioritize work.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-band" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">Available for the right role</p>
            <h2 id="contact-title">Engineering lead today. Software engineering manager next.</h2>
            <p>
              Based in California and ready to help teams build durable platforms, stronger delivery
              habits, and the engineering foundation for future scale.
            </p>
          </div>

          <div className="contact-actions">
            <a className="button button-primary" href={emailHref} onClick={handleEmailClick}>
              <Mail aria-hidden="true" />
              javierruizjr15@gmail.com
            </a>
            <a className="button button-secondary" href="https://www.linkedin.com/in/javier-ruiz-jr">
              <Briefcase aria-hidden="true" />
              View LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Javier Ruiz</span>
        <span>
          <MapPin aria-hidden="true" />
          California, USA
        </span>
        <span>
          <Code2 aria-hidden="true" />
          Platform, infrastructure, and engineering leadership
        </span>
      </footer>

      <div className={`contact-toast${contactStatus ? " is-visible" : ""}`} role="status">
        {contactStatus}
      </div>
    </>
  );
}

export default App;
