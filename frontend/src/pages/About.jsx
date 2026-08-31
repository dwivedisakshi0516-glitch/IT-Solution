import React from "react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Seo from "../components/Seo";
import TechnologyIcon from "../components/TechnologyIcon";

const pillars = [
  ["shield", "Our Mission", "To make technology selection, setup, repair, and support more dependable for homes, offices, and institutions."],
  ["network", "Our Vision", "To be the local technology partner people trust for products, upgrades, networking, and service guidance."],
  ["support", "What We Do", "We combine electronics supply, computer solutions, technical support, and on-site installation help."],
];

const audiences = [
  ["desktop", "Home Users"],
  ["laptop", "Students"],
  ["gaming", "Gamers"],
  ["server", "Businesses"],
  ["monitor", "Educational Institutions"],
  ["router", "Offices"],
];

const strengths = [
  "Computers and laptop guidance",
  "Repair and maintenance support",
  "Networking and Wi-Fi setup",
  "CCTV and security installation",
  "Accessory and peripheral sourcing",
  "Corporate and bulk supply assistance",
];

export default function About() {
  return (
    <>
      <Seo
        title="About Rama IT Solutions | Technology Partner for Products and Support"
        description="Learn how Rama IT Solutions supports home users, businesses, institutions, and professionals with computers, electronics, and IT services."
      />
      <PageHero
        label="About Rama IT Solutions"
        title="A modern technology partner for products, repairs, networking, and business support."
        actions={[
          { label: "Explore Products", href: "/products", variant: "btn-primary" },
          { label: "Contact Us", href: "/contact", variant: "btn-secondary" },
        ]}
      >
        We are building a customer-first electronics and IT solutions brand that blends premium presentation with dependable technical service.
      </PageHero>

      <section className="section surface-section">
        <div className="container story-grid">
          <Reveal>
            <SectionHeading
              eyebrow="Company Introduction"
              title="We help people choose, install, repair, and support the technology they rely on every day."
              description="Whether the need is a home laptop, a custom gaming setup, office desktops, printer setup, networking, or CCTV deployment, the experience should feel clear, professional, and trustworthy."
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="info-panel tech-panel">
              <div className="info-panel-lines" />
              <p>
                Rama IT Solutions is positioned as a showroom-quality computer and electronics business backed by practical
                service capability, not just product listing.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container three-up-grid">
          {pillars.map(([icon, title, text], index) => (
            <Reveal key={title} delay={index * 70}>
              <article className="pillar-card">
                <TechnologyIcon name={icon} className="pillar-icon" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section surface-section">
        <div className="container">
          <SectionHeading
            eyebrow="Who We Serve"
            title="Technology support for individual buyers and organizational clients alike."
            description="The business is designed to serve everyday consumers while also supporting repeat, bulk, and business-oriented requirements."
            align="center"
          />
          <div className="audience-grid">
            {audiences.map(([icon, title], index) => (
              <Reveal key={title} delay={index * 55}>
                <article className="audience-card">
                  <TechnologyIcon name={icon} className="audience-icon" />
                  <h3>{title}</h3>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section layered-section">
        <div className="container about-strength-grid">
          <Reveal>
            <div>
              <span className="eyebrow">How We Work</span>
              <h2>Consultative selling, practical recommendations, and real support after the sale.</h2>
            </div>
          </Reveal>
          <div className="strength-list">
            {strengths.map((item, index) => (
              <Reveal key={item} delay={index * 60}>
                <div className="strength-item">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
