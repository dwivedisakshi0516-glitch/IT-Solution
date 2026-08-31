import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Seo from "../components/Seo";
import TechnologyIcon from "../components/TechnologyIcon";

const services = [
  {
    icon: "repair",
    title: "Computer Repair",
    description: "Diagnosis, part replacement guidance, internal cleaning, and day-to-day performance troubleshooting.",
    benefits: ["Desktop troubleshooting", "Hardware fault checks", "Performance recovery"],
  },
  {
    icon: "laptop",
    title: "Laptop Repair",
    description: "Support for slow systems, thermal issues, keyboard concerns, display trouble, and storage upgrades.",
    benefits: ["Thermal servicing", "SSD upgrades", "Practical repair guidance"],
  },
  {
    icon: "processor",
    title: "PC Upgrades",
    description: "Memory, storage, graphics, and platform upgrade planning for better performance and longevity.",
    benefits: ["Upgrade path planning", "Compatibility checks", "Budget-conscious recommendations"],
  },
  {
    icon: "gaming",
    title: "Custom PC Building",
    description: "Build planning for gaming, editing, design, engineering, and other performance-heavy needs.",
    benefits: ["Use-case matched parts", "Assembly support", "Testing and tuning"],
  },
  {
    icon: "tools",
    title: "OS and Software Installation",
    description: "Fresh OS setup, driver configuration, software installation, and usability cleanup for new or repaired systems.",
    benefits: ["Setup assistance", "Driver stability", "Device readiness"],
  },
  {
    icon: "shield",
    title: "Virus and Malware Support",
    description: "Safety-focused assistance for suspicious behavior, system cleanup, and preventive improvement.",
    benefits: ["Threat cleanup", "System checks", "Safer usage guidance"],
  },
  {
    icon: "storage",
    title: "Data Backup Assistance",
    description: "Basic backup planning and storage advice to reduce the risk of losing important personal or business data.",
    benefits: ["Backup options", "Storage advice", "Migration support"],
  },
  {
    icon: "printer",
    title: "Printer Setup",
    description: "Printer connection, setup, driver support, and office printing readiness for single or shared usage.",
    benefits: ["Driver setup", "Network printing", "Device pairing"],
  },
  {
    icon: "network",
    title: "Networking Installation",
    description: "Router, switch, cabling, and office network setup for more reliable business and home connectivity.",
    benefits: ["Structured wiring", "Coverage planning", "Device stability"],
  },
  {
    icon: "wifi",
    title: "Wi-Fi Setup",
    description: "Coverage improvement, router placement guidance, and performance tuning for better daily usage.",
    benefits: ["Signal optimization", "Coverage improvement", "Better device experience"],
  },
  {
    icon: "cctv",
    title: "CCTV Installation",
    description: "Surveillance planning and installation support for homes, shops, and office environments.",
    benefits: ["Placement guidance", "Security setup", "Usage walkthrough"],
  },
  {
    icon: "support",
    title: "Corporate IT Support",
    description: "Support-oriented assistance for teams needing device setup, upgrades, networking, or coordinated rollout help.",
    benefits: ["Business support", "Device planning", "Scalable assistance"],
  },
];

const supportTracks = [
  {
    title: "For Homes and Students",
    text: "Everyday laptop help, upgrades, accessories, and repair support with straightforward communication.",
  },
  {
    title: "For Gamers and Creators",
    text: "Custom build planning, graphics upgrades, thermal improvements, and performance-focused setup advice.",
  },
  {
    title: "For Offices and Institutions",
    text: "Device standardization, networking support, printer readiness, CCTV, and broader IT rollout guidance.",
  },
];

export default function Services() {
  return (
    <>
      <Seo
        title="Computer Repair and IT Services | Rama IT Solutions"
        description="Discover repair, upgrade, networking, CCTV, software, and support services from Rama IT Solutions."
      />
      <PageHero
        label="Services"
        title="Professional IT and electronics support for setup, repair, upgrades, and installation."
        actions={[
          { label: "Service Inquiry", href: "/contact", variant: "btn-primary" },
          { label: "Explore Products", href: "/products", variant: "btn-secondary" },
        ]}
      >
        The service experience is designed to feel premium and clear, whether you need a single repair or a wider business deployment.
      </PageHero>

      <section className="section surface-section">
        <div className="container">
          <SectionHeading
            eyebrow="Core Services"
            title="From quick fixes to bigger infrastructure support, the service mix is built for practical outcomes."
            description="We use a more varied section flow instead of repeating the same card pattern everywhere, so the page stays easier to scan."
          />
          <div className="service-list-modern">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 35}>
                <article className={`service-row ${index % 2 ? "reverse" : ""}`}>
                  <div className="service-row-visual">
                    <TechnologyIcon name={service.icon} className="service-row-icon" />
                  </div>
                  <div className="service-row-copy">
                    <span className="eyebrow">{service.title}</span>
                    <h3>{service.description}</h3>
                    <div className="benefit-row">
                      {service.benefits.map(item => (
                        <span key={item} className="benefit-pill">
                          {item}
                        </span>
                      ))}
                    </div>
                    <Link className="text-link" to="/contact">
                      Service Inquiry
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <SectionHeading
            eyebrow="Support Tracks"
            title="The same service capability can be tailored differently for different customers."
            description="That is why the site positions support by audience and outcome, not just by a flat list of tasks."
          />
          <div className="three-up-grid">
            {supportTracks.map((track, index) => (
              <Reveal key={track.title} delay={index * 70}>
                <article className="support-track-card">
                  <h3>{track.title}</h3>
                  <p>{track.text}</p>
                  <Link className="text-link" to="/contact">
                    Talk to Us
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
