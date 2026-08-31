import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Seo from "../components/Seo";
import TechnologyIcon from "../components/TechnologyIcon";

const productGroups = [
  ["laptop", "Laptop Range", "Portable systems for students, professionals, creators, and businesses."],
  ["desktop", "Desktop Range", "Daily-use desktops, office systems, and expandable workstation options."],
  ["gaming", "Gaming Builds", "Performance-first builds for high refresh gameplay and streaming setups."],
  ["monitor", "Display Solutions", "Monitors for productivity, dual-screen setups, and immersive visual work."],
  ["printer", "Printer and Output", "Printers and setup support for homes, shops, and office operations."],
  ["storage", "Backup and Storage", "Internal and external storage options for speed, capacity, and protection."],
  ["router", "Networking Equipment", "Routers, switches, access points, and structured network accessories."],
  ["cctv", "Security Systems", "CCTV devices and installation-ready surveillance planning."],
];

const showroomCards = [
  {
    icon: "laptop",
    title: "Professional laptops with balanced performance and battery life.",
    copy: "Suitable for office work, hybrid teams, study, and mobile professionals.",
  },
  {
    icon: "desktop",
    title: "Business desktops configured for reliability and easier maintenance.",
    copy: "Great for front office, billing counters, school labs, and admin teams.",
  },
  {
    icon: "gaming",
    title: "Gaming and creator systems planned around cooling, graphics, and upgrade paths.",
    copy: "Designed for people who want performance without confusion.",
  },
  {
    icon: "router",
    title: "Networking bundles for homes, shops, and growing office spaces.",
    copy: "From one-room Wi-Fi issues to multi-point deployments.",
  },
];

export default function Products() {
  return (
    <>
      <Seo
        title="Computers, Laptops and Electronics | Rama IT Solutions"
        description="Explore laptops, desktops, gaming PCs, monitors, accessories, networking equipment, CCTV, and power solutions from Rama IT Solutions."
      />
      <PageHero
        label="Products"
        title="Explore systems, accessories, and technology solutions built around how you actually use them."
        actions={[
          { label: "Request a Quote", href: "/contact", variant: "btn-primary" },
          { label: "See Services", href: "/services", variant: "btn-secondary" },
        ]}
      >
        We do not push a checkout flow here. Instead, we help customers compare, understand, and enquire about the right setup.
      </PageHero>

      <section className="section surface-section">
        <div className="container">
          <SectionHeading
            eyebrow="Technology Range"
            title="A curated product experience for performance, practicality, and support."
            description="Every category is presented as a solution area so customers can move from browsing to inquiry without friction."
          />
          <div className="product-grid">
            {productGroups.map(([icon, title, text], index) => (
              <Reveal key={title} delay={index * 45}>
                <article className="product-card">
                  <TechnologyIcon name={icon} className="product-card-icon" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <Link className="text-link" to="/contact">
                    Request Details
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container showroom-grid">
          <Reveal>
            <div>
              <span className="eyebrow">Popular Technology Solutions</span>
              <h2>Showroom-style highlights for customers who want quick direction.</h2>
              <p className="lead">
                The goal is to make the product mix feel premium and easy to understand even before a direct conversation starts.
              </p>
            </div>
          </Reveal>
          <div className="showroom-card-stack">
            {showroomCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 60}>
                <article className="showroom-card">
                  <TechnologyIcon name={card.icon} className="showroom-icon" />
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                  <span>Contact for best price</span>
                  <Link className="text-link showroom-link" to="/contact">
                    Enquire Now
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-section">
        <div className="container split-spotlight">
          <Reveal>
            <div className="spotlight-panel">
              <span className="eyebrow">Corporate and Bulk Supply</span>
              <h2>Office and institutional procurement support without the guesswork.</h2>
              <p className="lead">
                If you need multiple systems, networking hardware, monitors, CCTV, or accessories, we can help structure the requirement and recommend a cleaner rollout plan.
              </p>
              <Link className="btn btn-primary" to="/contact">
                Request Business Quote
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="business-checklist">
              <div>Desktop and laptop bundles</div>
              <div>Networking and Wi-Fi hardware</div>
              <div>Monitors and peripherals</div>
              <div>CCTV and installation planning</div>
              <div>Support for upgrades and expansion</div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
