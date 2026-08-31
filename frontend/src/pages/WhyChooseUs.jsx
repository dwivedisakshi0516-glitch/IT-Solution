import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Seo from "../components/Seo";
import TechnologyIcon from "../components/TechnologyIcon";

const trustPoints = [
  ["shield", "Quality Products", "Well-matched devices and components chosen around actual use cases."],
  ["support", "Expert Technical Support", "Practical guidance before and after the sale."],
  ["quote", "Competitive Pricing", "Quote-based recommendations without pushing unnecessary extras."],
  ["repair", "Reliable Service", "Repair and maintenance support that respects your time."],
  ["desktop", "Corporate Solutions", "Business-friendly procurement and deployment assistance."],
  ["wifi", "Fast Response", "Quick communication for urgent troubleshooting and inquiries."],
  ["tools", "Professional Installation", "Clean setup for networking, CCTV, and office technology."],
  ["network", "After-Sales Support", "Ongoing help when upgrades, maintenance, or expansion are needed."],
];

const highlights = [
  "Clear recommendations without unnecessary upselling",
  "Support across products, repairs, networking, and setup",
  "A business-friendly approach for bulk and office requirements",
  "Original branded experience with fast contact options",
];

export default function WhyChooseUs() {
  return (
    <>
      <Seo
        title="Why Choose Us | Rama IT Solutions"
        description="See why customers choose Rama IT Solutions for computers, electronics, repairs, networking, and ongoing IT support."
      />
      <PageHero
        label="Why Choose Us"
        title="A premium technology partner experience built on clarity, support, and dependable service."
        actions={[
          { label: "Request a Quote", href: "/contact", variant: "btn-primary" },
          { label: "View Services", href: "/services", variant: "btn-secondary" },
        ]}
      >
        We focus on helping customers choose the right solution, get it set up properly, and feel supported after the initial purchase or installation.
      </PageHero>

      <section className="section trust-section">
        <div className="container">
          <SectionHeading
            eyebrow="Why Customers Choose Rama IT"
            title="Practical support, cleaner recommendations, and better follow-through."
            description="The website is multi-page by design, and this page stands on its own to explain the value behind the products and service experience."
          />
          <div className="trust-grid">
            {trustPoints.map(([icon, title, text], index) => (
              <Reveal key={title} delay={index * 45}>
                <article className="trust-card">
                  <TechnologyIcon name={icon} className="trust-icon" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-section">
        <div className="container story-grid">
          <Reveal>
            <div className="build-panel">
              <span className="eyebrow">What Makes the Difference</span>
              <h2>We aim to make technology decisions easier, not more confusing.</h2>
              <p className="lead">
                That means honest product guidance, better explanation of options, and support that feels approachable whether you are an individual buyer or a business client.
              </p>
              <Link className="btn btn-primary" to="/contact">
                Talk to Our Team
              </Link>
            </div>
          </Reveal>
          <div className="strength-list">
            {highlights.map((item, index) => (
              <Reveal key={item} delay={index * 70}>
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
