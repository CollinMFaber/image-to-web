import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Instagram,
  Linkedin,
  Menu,
  Play,
  X,
  Youtube,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import aboutTagline from "@/assets/reference/about-handwritten-tagline-transparent.png";
import faberStudiosLogo from "@/assets/faber-studios-stacked.svg";
import featureImage from "@/assets/featured-main-clean.png";
const penguinoPilotUrl = "/video/Penguino_Pilot.mp4";
const penguinoPilotWebmUrl = "/video/Penguino_Pilot.webm";
const penguinoPosterUrl = "/video/penguino-poster.jpg";
import coastImage from "@/assets/reference/featured-thumb-coast.png";
import mapImage from "@/assets/reference/featured-thumb-map.png";
import scooterImage from "@/assets/reference/featured-thumb-scooter.png";
import heroImage from "@/assets/hero-header-recreated.png";
import projectWordmark from "@/assets/project-wordmark-transparent.png";
import brandIcon from "@/assets/reference/service-brand-icon-transparent.png";
import collaborationIcon from "@/assets/reference/service-collaboration-icon-transparent.png";
import developmentIcon from "@/assets/reference/service-development-icon-transparent.png";
import productionIcon from "@/assets/reference/service-production-icon-transparent.png";
import studioImage from "@/assets/reference/studio-workspace.png";

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
    icon: developmentIcon,
    title: "Development",
    copy: "Original IP and creative development",
  },
  {
    icon: productionIcon,
    title: "Production",
    copy: "2D, 3D, and hybrid animation",
  },
  {
    icon: brandIcon,
    title: "Brand & Commercial",
    copy: "Animated content for brands and agencies",
  },
  {
    icon: collaborationIcon,
    title: "Collaboration",
    copy: "Partnering with creators, studios, and visionaries",
  },
];

function Brand({ inverted = false }: { inverted?: boolean }) {
  return (
    <a href="#home" className={inverted ? "brand brand-inverted" : "brand"} aria-label="Faber Studios home">
      <img className="brand-logo" src={faberStudiosLogo} alt="" aria-hidden="true" />
    </a>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openVideo = () => setVideoOpen(true);

  useEffect(() => {
    if (!videoOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setVideoOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    const video = videoRef.current;
    if (video) {
      video.load();
      void video.play().catch(() => undefined);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [videoOpen]);

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
        <img src={heroImage} alt="Penguino overlooking a colorful Italian coastal village" width={1024} height={426} />
        <div className="hero-shade" />
        <div className="page-shell hero-content">
          <h1>Stories<br />Bring Us<br />Together</h1>
          <p>Faber Studios is an animation company in Los Angeles, CA, creating original stories, memorable characters, and content that inspires, entertains, and connects.</p>
          <div className="hero-actions">
            <a className="button button-light" href="#our-work">Watch Our Reel <Play size={15} fill="currentColor" /></a>
            <a className="button button-outline" href="#our-work">Our Work</a>
          </div>
        </div>
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
            {services.map(({ icon, title, copy }) => (
              <article key={title} className="service-item">
                <img className="service-icon" src={icon} alt="" width={69} height={67} loading="lazy" />
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
            <img className="film-title" src={projectWordmark} alt="Penguino" width={322} height={93} loading="lazy" />
            <span className="film-kicker">A bigger world awaits</span>
            <p>Penguino is an upcoming animated feature from Faber Studios, following a curious and courageous penguin on a heartwarming journey through Italy. With breathtaking locations, unforgettable characters, and a story about friendship, discovery, and belonging, Penguino is an adventure for audiences of all ages.</p>
            <a className="button button-gold" href="#about">View Project <ArrowRight size={17} /></a>
          </div>
          <div className="feature-video">
            <img src={featureImage} alt="Penguino beside a Venetian canal" width={400} height={315} loading="lazy" />
            <button className="play-button" aria-label="Play Penguino teaser" onClick={openVideo}><Play fill="currentColor" /></button>
            <span>Watch Teaser</span>
          </div>
          <div className="triptych">
            <img src={scooterImage} alt="Penguino riding a scooter" width={188} height={99} loading="lazy" />
            <img src={coastImage} alt="Penguino overlooking the Italian coast" width={188} height={95} loading="lazy" />
            <img src={mapImage} alt="Penguino reading a map in Rome" width={188} height={111} loading="lazy" />
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="page-shell about-grid">
          <img src={studioImage} alt="The warm, art-filled Faber Studios workspace" width={387} height={228} loading="lazy" />
          <div className="about-copy">
            <span className="eyebrow">About Faber Studios</span>
            <h2>Animation for a<br />More Connected World</h2>
            <p>Based in Los Angeles, CA, Faber Studios is a creative-driven animation company dedicated to storytelling that crosses cultures, generations, and borders. We believe animation has the power to spark imagination, build empathy, and bring people together.</p>
            <a className="button button-dark" href="#contact">Our Story</a>
            <img className="about-note" src={aboutTagline} alt="Different perspectives. Brighter stories." width={120} height={102} loading="lazy" />
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

      {videoOpen && (
        <div className="video-modal" role="dialog" aria-modal="true" aria-label="Penguino teaser" onClick={() => setVideoOpen(false)}>
          <div className="video-modal-inner" onClick={(event) => event.stopPropagation()}>
            <button className="video-close" autoFocus onClick={() => setVideoOpen(false)} aria-label="Close video">
              <X />
            </button>
            <video ref={videoRef} controls autoPlay playsInline preload="auto" poster={penguinoPosterUrl}>
              <source src={penguinoPilotUrl} type="video/mp4" />
              <source src={penguinoPilotWebmUrl} type="video/webm" />
              Your browser does not support video playback.
            </video>
          </div>
        </div>
      )}
    </main>
  );
}