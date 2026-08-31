import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Seo from "../components/Seo";
import TechnologyIcon from "../components/TechnologyIcon";

const categories = [
  ["laptop", "Laptops", "Portable performance for study, work, and business travel."],
  ["desktop", "Desktop PCs", "Reliable everyday systems for homes, offices, and institutions."],
  ["gaming", "Gaming Systems", "Custom-tuned rigs focused on graphics, cooling, and speed."],
  ["monitor", "Monitors", "Sharp displays for office productivity, design, and gaming."],
  ["printer", "Printers", "Home and office printing setups with installation guidance."],
  ["keyboard", "Accessories", "Keyboards, mouse devices, cables, audio, and daily essentials."],
  ["storage", "Storage Devices", "SSD, HDD, and backup solutions for secure file management."],
  ["router", "Networking", "Routers, switches, structured cabling, and Wi-Fi solutions."],
  ["cctv", "CCTV", "Surveillance setups designed for homes, shops, and workplaces."],
  ["shield", "UPS and Power", "Power backup and protection for critical devices and networks."],
];

const featuredSolutions = [
  {
    icon: "gaming",
    label: "Gaming PC Setup",
    title: "High airflow builds ready for streaming, esports, and demanding titles.",
    chips: ["Custom build", "GPU-ready", "Cooling options"],
  },
  {
    icon: "laptop",
    label: "Business Laptop",
    title: "Portable productivity systems for professionals, sales teams, and executives.",
    chips: ["Lightweight", "Battery focused", "Office ready"],
  },
  {
    icon: "desktop",
    label: "Office Desktop",
    title: "Dependable desktop packages for reception, operations, and admin teams.",
    chips: ["Bundle support", "Upgrade friendly", "Business stable"],
  },
  {
    icon: "router",
    label: "High-Speed Router",
    title: "Secure networking gear for better coverage, speed, and reliability.",
    chips: ["Dual band", "Work from home", "Office Wi-Fi"],
  },
  {
    icon: "monitor",
    label: "Display Solutions",
    title: "Monitors for office workstations, study desks, and creator setups.",
    chips: ["IPS options", "Multiple sizes", "Mount support"],
  },
  {
    icon: "cctv",
    label: "CCTV Package",
    title: "Integrated surveillance systems with installation and support guidance.",
    chips: ["Site survey", "Remote view", "Service support"],
  },
];

const serviceHighlights = [
  {
    icon: "repair",
    title: "Repair and Hardware Care",
    text: "Fast troubleshooting, laptop repair, desktop servicing, and upgrade recommendations that focus on long-term reliability.",
  },
  {
    icon: "network",
    title: "Networking and Installations",
    text: "Wi-Fi planning, router setup, structured cabling, CCTV deployment, and office-ready infrastructure assistance.",
  },
  {
    icon: "support",
    title: "Sales Guidance and IT Support",
    text: "We help customers choose the right system, compare options, and get the practical support they need after purchase.",
  },
];

const buildSteps = [
  "Tell us your performance goal",
  "Select the right budget and use case",
  "We recommend components",
  "Professional assembly and tuning",
  "Testing, handover, and support",
];

function HeroVisual() {
  return (
    <div className="hero-device-cluster" aria-hidden="true">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="hero-monitor">
        <div className="hero-monitor-screen">
          <div className="hero-screen-line" />
          <div className="hero-screen-line short" />
          <div className="hero-screen-grid" />
        </div>
        <div className="hero-monitor-stand" />
      </div>
      <div className="hero-tower">
        <span />
        <span />
        <span />
      </div>
      <div className="hero-chip">
        <TechnologyIcon name="processor" className="hero-chip-icon" />
      </div>
      <svg className="hero-circuit" viewBox="0 0 320 240" fill="none">
        <path d="M18 188h78l30-30h54l24-24h52" />
        <path d="M36 52h66l26 28h92l36 36h34" />
        <path d="M72 112h54l24-24h64l24 24h44" />
        <circle cx="18" cy="188" r="5" />
        <circle cx="256" cy="158" r="6" />
        <circle cx="36" cy="52" r="5" />
        <circle cx="290" cy="116" r="6" />
        <circle cx="72" cy="112" r="5" />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Seo
        title="Rama IT Solutions | Computers, Electronics and IT Services"
        description="Explore computers, electronics, networking, CCTV, repair services, and IT support from Rama IT Solutions."
      />

      <section className="hero">
        <div className="container hero-grid">
          <Reveal className="hero-copy">
            <span className="eyebrow eyebrow-dark">Premium Computer and Electronics Partner</span>
            <h1>Powering Your Digital World with systems, accessories, and support that perform.</h1>
            <p className="lead">
              From high-performance computers and accessories to professional repair, networking, CCTV, and IT solutions,
              everything your digital world needs under one roof.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/products">
                Explore Products
              </Link>
              <Link className="btn btn-secondary hero-secondary" to="/contact">
                Request a Quote
              </Link>
              <Link className="btn btn-ghost" to="/services">
                Get Technical Support
              </Link>
            </div>
            <div className="hero-badges">
              <span>Custom PC Builds</span>
              <span>Repair and Upgrades</span>
              <span>Networking and CCTV</span>
            </div>
          </Reveal>

          <Reveal className="hero-visual-wrap" delay={120}>
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      <section className="section surface-section">
        <div className="container">
          <SectionHeading
            eyebrow="Explore Our Technology Range"
            title="Technology categories shaped around real customer needs."
            description="Browse the kinds of systems and electronics we help customers evaluate, source, configure, and support."
          />
          <div className="category-grid">
            {categories.map(([icon, title, text], index) => (
              <Reveal key={title} delay={index * 45}>
                <article className="category-card">
                  <div className="category-icon-wrap">
                    <TechnologyIcon name={icon} className="category-icon" />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <Link to="/products" className="text-link">
                    View Products
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <SectionHeading
            eyebrow="Popular Technology Solutions"
            title="Promotional solutions for work, gaming, security, and connectivity."
            description="These are example solution categories we can guide, configure, and quote based on your exact requirement."
          />
          <div className="featured-grid">
            {featuredSolutions.map((item, index) => (
              <Reveal key={item.label} delay={index * 60}>
                <article className="featured-card">
                  <div className="featured-card-top">
                    <span className="featured-label">{item.label}</span>
                    <TechnologyIcon name={item.icon} className="featured-icon" />
                  </div>
                  <h3>{item.title}</h3>
                  <div className="chip-row">
                    {item.chips.map(chip => (
                      <span key={chip} className="chip">
                        {chip}
                      </span>
                    ))}
                  </div>
                  <div className="featured-card-bottom">
                    <strong>Contact for best price</strong>
                    <Link className="btn btn-secondary" to="/contact">
                      Enquire Now
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section layered-section">
        <div className="container story-grid">
          <Reveal>
            <SectionHeading
              eyebrow="Solutions and Services"
              title="We combine product guidance with practical technical support."
              description="The goal is not only to help you choose the right technology, but to make sure it is installed, upgraded, or maintained the right way."
            />
          </Reveal>
          <div className="service-highlight-stack">
            {serviceHighlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <article className="service-highlight">
                  <TechnologyIcon name={item.icon} className="service-highlight-icon" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-section">
        <div className="container build-grid">
          <Reveal>
            <div className="build-panel">
              <span className="eyebrow">Build Your Dream PC</span>
              <h2>Custom performance planning from component choice to final testing.</h2>
              <p className="lead">
                We help you plan the right CPU, GPU, memory, storage, cooling, and power strategy based on gaming,
                design, editing, engineering, or office needs.
              </p>
              <div className="component-chips">
                {["CPU", "GPU", "RAM", "SSD", "Cooling", "Power Supply"].map(item => (
                  <span key={item} className="component-chip">
                    {item}
                  </span>
                ))}
              </div>
              <Link className="btn btn-primary" to="/contact">
                Request Custom PC Quote
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="build-flow">
              {buildSteps.map((step, index) => (
                <div key={step} className="build-step">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section trust-section">
        <div className="container story-grid">
          <Reveal>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="A dedicated page now explains the value behind our products and support."
              description="This keeps the site properly multi-page instead of turning Home into a long one-page experience."
            />
            <Link className="btn btn-primary" to="/why-choose-us">
              Explore Why Choose Us
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <div className="info-panel trust-preview-panel">
              <div className="registration-point-list">
                <div><TechnologyIcon name="shield" className="inline-icon" /> Quality products and cleaner recommendations</div>
                <div><TechnologyIcon name="support" className="inline-icon" /> Real support before and after purchase</div>
                <div><TechnologyIcon name="network" className="inline-icon" /> Installation and expansion guidance</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
