import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Clapperboard,
  Code2,
  Instagram,
  Linkedin,
  Menu,
  MonitorPlay,
  Play,
  UsersRound,
  X,
  Youtube,
} from "lucide-react";
import { useState } from "react";

import heroImage from "@/assets/puffin-hero.jpg";
import featureImage from "@/assets/puffin-feature.jpg";
import triptychImage from "@/assets/puffin-triptych.jpg";
import studioImage from "@/assets/studio-workspace.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Faber Studios | Stories Bring Us Together" },
      {
        name: "description",
        content:
          "Faber Studios is an animation company creating original stories, memorable characters, and meaningful entertainment.",
      },
      { property: "og:title", content: "Faber Studios | Stories Bring Us Together" },
      {
        property: "og:description",
        content: "Original animation, memorable characters, and a world of stories.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = ["Home", "About", "Our Work", "Services", "Careers", "Contact"];

const services = [
  {
    icon: Code2,
    title: "Development",
    copy: "Original IP and creative development",
    tone: "bg-service-coral",
  },
  {
    icon: Clapperboard,
    title: "Production",
    copy: "2D, 3D, and hybrid animation",
    tone: "bg-service-blue",
  },
  {
    icon: MonitorPlay,
    title: "Brand & Commercial",
    copy: "Animated content for brands and agencies",
    tone: "bg-service-mint",
  },
  {
    icon: UsersRound,
    title: "Collaboration",
    copy: "Partnering with creators, studios, and visionaries",
    tone: "bg-service-lilac",
  },
];

function Brand({ inverted = false }: { inverted?: boolean }) {
  return (
    <a href="#home" className={inverted ? "brand brand-inverted" : "brand"} aria-label="Faber Studios home">
      <span>FABER</span>
      <small>STUDIOS</small>
    </a>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="site-header">
        <div className="page-shell header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item} href={item === "Home" ? "#home" : `#${item.toLowerCase().replace(" ", "-")}`} className={item === "Home" ? "active" : ""}>
                {item}
              </a>
            ))}
          </nav>
          <a className="nav-cta" href="#contact">Let's Create</a>
          <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a key={item} onClick={() => setMenuOpen(false)} href={item === "Home" ? "#home" : `#${item.toLowerCase().replace(" ", "-")}`}>
                {item}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section id="home" className="hero">
        <img src={heroImage} alt="Penguino overlooking a colorful Mediterranean village" width={1920} height={1080} />
        <div className="hero-shade" />
        <div className="page-shell hero-content">
          <h1>Stories<br />Bring Us<br />Together</h1>
          <p>Faber Studios is an animation company in Los Angeles, CA, creating original stories, memorable characters, and content that inspires, entertains, and connects.</p>
          <div className="hero-actions">
            <a className="button button-light" href="#our-work">Watch Our Reel <Play size={15} fill="currentColor" /></a>
            <a className="button button-outline" href="#our-work">Our Work</a>
          </div>
          <span className="script-note hero-note">Different perspectives.<br />Brighter stories.</span>
        </div>
        <span className="script-note sky-note">A small penguin.<br />A big adventure.</span>
      </section>

      <section id="services" className="services-section">
        <div className="page-shell">
          <div className="section-intro">
            <div>
              <span className="eyebrow">What we do</span>
              <h2>From Imagination<br />to Impact</h2>
            </div>
            <p>We develop and produce animation for film, television, streaming, commercials, and branded content. Our team combines artistry, storytelling, and technology to bring bold ideas to life.</p>
          </div>
          <div className="service-grid">
            {services.map(({ icon: Icon, title, copy, tone }) => (
              <article key={title} className="service-item">
                <div className={`service-icon ${tone}`}><Icon strokeWidth={1.6} /></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="our-work" className="feature-section">
        <div className="page-shell feature-grid">
          <div className="feature-copy">
            <span className="eyebrow eyebrow-light">Featured project</span>
            <h2 className="film-title">Penguino</h2>
            <span className="film-kicker">A bigger world awaits</span>
            <p>Penguino is an upcoming animated feature from Faber Studios, following a curious and courageous penguin on a heartwarming journey through Italy. With breathtaking locations, unforgettable characters, and a story about friendship, discovery, and belonging, Penguino is an adventure for audiences of all ages.</p>
            <a className="button button-gold" href="#about">View Project <ArrowRight size={17} /></a>
          </div>
          <div className="feature-video">
            <img src={featureImage} alt="Penguino beside a Venetian canal" width={1536} height={864} loading="lazy" />
            <button className="play-button" aria-label="Play Penguino teaser"><Play fill="currentColor" /></button>
            <span>Watch Teaser</span>
          </div>
          <div className="triptych">
            <img src={triptychImage} alt="Scenes from Penguino's Italian adventure" width={1024} height={1536} loading="lazy" />
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="page-shell about-grid">
          <img src={studioImage} alt="The warm, art-filled Faber Studios workspace" width={1408} height={960} loading="lazy" />
          <div className="about-copy">
            <span className="eyebrow">About Faber Studios</span>
            <h2>Animation for a<br />More Connected World</h2>
            <p>Based in Los Angeles, CA, Faber Studios is a creative-driven animation company dedicated to storytelling that crosses cultures, generations, and borders. We believe animation has the power to spark imagination, build empathy, and bring people together.</p>
            <a className="button button-dark" href="#contact">Our Story</a>
            <span className="script-note about-note">Different<br />perspectives.<br />Brighter stories.</span>
          </div>
        </div>
      </section>

      <footer id="contact" className="site-footer">
        <div className="page-shell footer-main">
          <Brand inverted />
          <nav aria-label="Footer navigation">
            {navItems.map((item) => <a key={item} href={item === "Home" ? "#home" : `#${item.toLowerCase().replace(" ", "-")}`}>{item}</a>)}
          </nav>
          <div className="socials">
            <a href="#contact" aria-label="Instagram"><Instagram /></a>
            <a href="#contact" aria-label="YouTube"><Youtube /></a>
            <a href="#contact" aria-label="LinkedIn"><Linkedin /></a>
            <a href="#contact" aria-label="X social network">𝕏</a>
          </div>
        </div>
        <div className="page-shell footer-bottom"><span>© 2026 Faber Studios. All rights reserved.</span><span>Los Angeles, CA</span></div>
      </footer>
    </main>
  );
}