import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import cvFile from "./assets/CV_Rahma_BEN_ATTIA.pdf";
import {
  ArrowUpRight, Github, Linkedin, Mail, MapPin, Menu, X, Download,
  Code2, Database, Server, Layers3, ExternalLink, ChevronDown
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Rahma Ben Attia",
  role: "Développeuse Full Stack — PHP / Symfony",
  location: "Tunis, Tunisie",
  phone: "+216 25 17 30 27",
  email: "benattiarahma0@gmail.com",
   cv:cvFile,
  github: "https://github.com/rahmabaa",
  linkedin: "https://www.linkedin.com/in/rahma-ben-attia",
 
};

const skills = [
  { name: "PHP", level: "Bonne maîtrise", icon: Code2 },
  { name: "Symfony 6", level: "Bonne maîtrise", icon: Server },
  { name: "Twig", level: "Bonne maîtrise", icon: Layers3 },
  { name: "JavaScript", level: "Intermédiaire", icon: Code2 },
  { name: "React.js", level: "Bases", icon: Code2 },
  { name: "Node.js / Express", level: "Bases", icon: Server },
  { name: "PostgreSQL / MySQL", level: "Maîtrise", icon: Database },
  { name: "MongoDB", level: "Bases", icon: Database },
  { name: "Tailwind / Bootstrap", level: "Bonne maîtrise", icon: Layers3 },
  { name: "GitHub / Bitbucket", level: "Bonne maîtrise", icon: Github },
  { name: "Jira / Scrum", level: "Bonne pratique", icon: Layers3 },
  { name: "UML / Draw.io / Lucidchart", level: "Bonne pratique", icon: Layers3 }
];

const projects = [
  {
    featured: true,
    title: "Application de gestion intégrée — TRANSTU",
    category: "Projet de fin d’études · TRANSTU",
    description:
      "Application web multi-modules pour la gestion du stock des produits de nettoyage, des tickets d’intervention et du suivi des dépenses par type d’intervention.",
    tech: ["Symfony 6", "Twig", "Tailwind CSS", "PostgreSQL", "pgAdmin4", "GitHub", "Scrum"],
    details: [
      "Gestion du stock des produits de nettoyage",
      "Création et suivi des tickets d’intervention",
      "Suivi des dépenses par type d’intervention",
      "Gestion des rôles et des accès",
      "Analyse des tickets avec une solution basée sur l’IA"
    ],
    link: "#contact"
  },
  {
    title: "Site web professionnel — Infradev",
    category: "Expérience professionnelle · 2023–2024",
    description:
      "Conception et développement d’un site web vitrine professionnel pour une société de domiciliation d’entreprises, avec mise en ligne et maintenance.",
    tech: ["Symfony 6", "Twig", "CSS3", "GitHub"],
    details: [
      "Conception et développement full stack",
      "Hébergement et mise en ligne via Ooredoo",
      "Suivi et maintenance après lancement",
      "Suivi de la disponibilité et du bon fonctionnement"
    ],
    link: "https://domiciliation-sertun97.com.tn/"
  },
  {
    title: "Collecte et suivi des graines — Inspark",
    category: "Stage · 07/2024–08/2024",
    description:
      "Solution web pour l’intégration sécurisée et la validation de fichiers Excel contenant les données relatives à la collecte des graines.",
    tech: ["Symfony 6", "Twig", "Bootstrap 5", "MySQL", "Bitbucket", "Jira", "Scrum"],
    details: [
      "Import et validation sécurisée des fichiers Excel",
      "Notifications par email",
      "Visualisation des statistiques de collecte en temps réel",
      "Modélisation et suivi du projet"
    ],
    link: "#contact"
  },
  {
    title: "Gestion des utilisateurs et des droits — SONEDE",
    category: "Stage · 08/2021–09/2021",
    description:
      "Application de gestion des menus de navigation et des autorisations utilisateurs avec administration des rôles, groupes et droits d’accès.",
    tech: ["PHP", "HTML", "CSS", "Bootstrap", "MySQL", "Lucidchart"],
    details: [
      "Authentification et accès sécurisé",
      "Gestion des menus de navigation",
      "Gestion des rôles et groupes",
      "Administration des profils et droits"
    ],
    link: "#contact"
  },
  {
    title: "Gestion des risques SI — AGIL",
    category: "Stage · 02/2021–04/2021",
    description:
      "Application web de gestion et de suivi des risques liés au système d’information, de leur identification jusqu’au suivi des actions de traitement.",
    tech: ["React.js", "CSS", "Node.js", "Express.js", "MongoDB"],
    details: [
      "Identification et enregistrement des risques",
      "Évaluation et suivi des risques",
      "Suivi des actions de traitement",
      "Conception UML et modélisation",
      "Réalisation des maquettes et de l’interface"
    ],
    link: "#contact"
  }
];

const experiences = [
  {
    date: "06/2025 — 11/2025",
    company: "TRANSTU",
    role: "Stagiaire — Projet de fin d’études",
    text:
      "Conception et développement d’une application web multi-modules pour la gestion du stock des produits de nettoyage, des tickets d’intervention et du suivi des dépenses. Intégration d’une solution basée sur l’IA pour estimer le temps nécessaire et le nombre de techniciens requis."
  },
  {
    date: "06/2023 — 11/2024",
    company: "Infradev",
    role: "Développeuse Web Full Stack",
    text:
      "Conception et développement d’un site web vitrine professionnel pour une société de domiciliation d’entreprises. Hébergement et mise en ligne via Ooredoo, puis suivi et maintenance du site."
  },
  {
    date: "07/2024 — 08/2024",
    company: "Inspark",
    role: "Stagiaire",
    text:
      "Développement d’une solution web pour l’intégration sécurisée et la validation de fichiers Excel, avec notifications par email et visualisation des statistiques de collecte en temps réel."
  },
  {
    date: "08/2021 — 09/2021",
    company: "SONEDE",
    role: "Stagiaire",
    text:
      "Développement d’une application PHP/MySQL de gestion des menus de navigation et des droits d’accès, avec authentification, rôles, groupes et interface d’administration."
  },
  {
    date: "02/2021 — 04/2021",
    company: "AGIL",
    role: "Stagiaire",
    text:
      "Développement d’une application web de gestion et de suivi des risques SI avec React.js, Node.js, Express.js et MongoDB, accompagnée de la modélisation UML et de la conception des maquettes."
  }
];

function App() {
  const [open, setOpen] = useState(false);

  const nav = [
    ["Accueil", "home"],
    ["À propos", "about"],
    ["Compétences", "skills"],
    ["Projets", "projects"],
    ["Expérience", "experience"],
    ["Contact", "contact"]
  ];

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="site">
      <header className="header">
        <a className="brand" href="#home" onClick={() => go("home")}>
          <span className="brand-mark">RB</span>
          <span>Rahma<span className="dot">.</span></span>
        </a>

        <nav className={`nav ${open ? "nav-open" : ""}`}>
          {nav.map(([label, id]) => (
            <button key={id} onClick={() => go(id)}>{label}</button>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => go("contact")}>Me contacter <ArrowUpRight size={16}/></a>
        </nav>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow"><span></span> Disponible pour de nouvelles opportunités</div>
              <h1>
                Je transforme des idées
                <em> en applications web.</em>
              </h1>
              <p className="hero-text">
                Je suis <strong>Rahma Ben Attia</strong>, développeuse Full Stack
                spécialisée en <strong>PHP / Symfony</strong>, avec des bases en
                JavaScript et React.js, et une expérience en bases relationnelles et NoSQL.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects" onClick={() => go("projects")}>
                  Voir mes projets <ArrowUpRight size={18}/>
                </a>
                <a className="btn btn-ghost" href="#contact" onClick={() => go("contact")}>
                  Parlons de votre projet
                </a>
              </div>
              <div className="quick-links">
                <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
                <a href={`mailto:${profile.email}`}><Mail size={17}/> Email</a>
              </div>
            </div>

            <div className="hero-visual reveal">
              <div className="code-card">
                <div className="window-bar"><span></span><span></span><span></span><b>portfolio.jsx</b></div>
                <pre><code>{`const developer = {
  name: "Rahma Ben Attia",
  role: "Full Stack Developer",
  stack: [
    "PHP", "Symfony",
    "PostgreSQL", "React"
  ],
  mindset: "Build & improve"
};`}</code></pre>
                <div className="code-status"><span className="pulse"></span> ready_to_build()</div>
              </div>
              <div className="floating-card card-one"><span>01</span><b>Clean code</b><small>Architecture & qualité</small></div>
              <div className="floating-card card-two"><span>02</span><b>Full Stack</b><small>Frontend + Backend</small></div>
            </div>
          </div>
          
        </section>

        <section id="about" className="section about">
          <div className="section-label">01 — À PROPOS</div>
          <div className="about-grid">
            <div>
              <h2>Une développeuse orientée <span>solution.</span></h2>
            </div>
            <div className="about-copy">
              <p>
                Mon parcours m’a permis de travailler sur des applications web
                concrètes, de la modélisation jusqu’au déploiement. J’aime
                comprendre un besoin, construire une solution claire et
                continuer à l’améliorer.
              </p>
              <p>
                Mon cœur de compétence est <strong>PHP / Symfony</strong>. J’ai également travaillé
                avec JavaScript, React.js, Node.js, Express.js, PostgreSQL, MySQL et MongoDB.
                Je suis à l’aise avec Agile/Scrum et la conception UML, et je continue à
                développer mes compétences en React et dans les technologies liées à l’IA.
              </p>
              <div className="about-meta">
                <div><MapPin size={17}/><span>Tunis, Tunisie</span></div>
                <div><Code2 size={17}/><span>PHP · Symfony · JavaScript · React.js</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills">
          <div className="section-label">02 — COMPÉTENCES</div>
          <div className="section-heading">
            <h2>Les outils que j’utilise<br/><span>pour construire.</span></h2>
            <p>Une stack orientée développement web, bases de données, conception UML et interfaces modernes.</p>
          </div>
          <div className="skills-grid">
            {skills.map(({name, level, icon: Icon}) => (
              <div className="skill-card" key={name}>
                <div className="skill-icon"><Icon size={21}/></div>
                <div><h3>{name}</h3><p>{level}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-label">03 — PROJETS</div>
          <div className="section-heading projects-heading">
            <div>
              <h2>Des projets qui<br/><span>racontent mon parcours.</span></h2>
            </div>
            <p>Du projet académique à la mise en production, chaque réalisation répond à un besoin concret.</p>
          </div>

          <div className="projects-list">
            {projects.map((p, i) => (
              <article className={`project ${p.featured ? "featured" : ""}`} key={p.title}>
                <div className="project-number">0{i + 1}</div>
                <div className="project-main">
                  <div className="project-top">
                    <div>
                      <span className="project-category">{p.category}</span>
                      <h3>{p.title}</h3>
                    </div>
                    {p.link.startsWith("http") && (
                      <a className="circle-link" href={p.link} target="_blank" rel="noreferrer"><ExternalLink size={18}/></a>
                    )}
                  </div>
                  <p className="project-desc">{p.description}</p>
                  <ul className="details">
                    {p.details.map(d => <li key={d}>{d}</li>)}
                  </ul>
                  <div className="tech-list">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience">
          <div className="section-label">04 — EXPÉRIENCE</div>
          <div className="experience-grid">
            <div>
              <h2>Mon parcours<br/><span>en quelques étapes.</span></h2>
              <p className="muted">Formation en informatique, expérience professionnelle et stages dans plusieurs environnements techniques.</p>
              <a className="btn btn-ghost" href={profile.cv}
  download="CV_Rahma_BEN_ATTIA.pdf"> 
                <Download size={17}/> Télécharger mon CV
              </a>
            </div>
            <div className="timeline">
              {experiences.map((e) => (
                <div className="timeline-item" key={`${e.company}-${e.role}`}>
                  <div className="timeline-dot"></div>
                  <span className="timeline-date">{e.date}</span>
                  <h3>{e.role}</h3>
                  <h4>{e.company}</h4>
                  <p>{e.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="education section">
          <div className="education-card">
            <div className="section-label">FORMATION</div>
            <div className="education-row">
              <div>
                <span>2022 — 2025</span>
                <h3>Mastère Professionnel — Infotronique</h3>
                <p>ISTIC Borj Cedria · Mention Très Bien</p>
              </div>
              <div>
                <span>2017 — 2021</span>
                <h3>Licence fondamentale — Sciences de l’Informatique</h3>
                <p>ISTIC Borj Cedria</p>
              </div>
            </div>
          </div>
        </section>

        <section className="languages section">
          <div className="languages-card">
            <div className="section-label">LANGUES</div>
            <div className="languages-grid">
              <div><strong>Arabe</strong><span>Langue maternelle</span></div>
              <div><strong>Français</strong><span>Intermédiaire</span></div>
              <div><strong>Anglais</strong><span>Technique</span></div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-box">
            <div className="section-label">05 — CONTACT</div>
            <h2>Un projet, une opportunité<br/><span>ou simplement une idée ?</span></h2>
            <p>Je suis ouverte aux opportunités de développement Full Stack et aux projets web.</p>
            <div className="contact-actions">
              <a className="btn btn-light" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={18}/></a>
            </div>
            <div className="contact-email">{profile.email} · {profile.phone}</div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <div className="brand"><span className="brand-mark">RB</span><span>Rahma<span className="dot">.</span></span></div>
          <p>© 2026 Rahma Ben Attia. Tous droits réservés.</p>
          <div className="footer-social">
            <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18}/></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18}/></a>
           
          </div>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);