import React, { useState } from "react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import TechnologyIcon from "../components/TechnologyIcon";
import { api } from "../api";

const contactCards = [
  {
    icon: "support",
    title: "Call Us",
    value: "Business phone here",
    note: "Replace with actual business phone number",
  },
  {
    icon: "network",
    title: "WhatsApp",
    value: "WhatsApp contact here",
    note: "Replace with actual WhatsApp number",
  },
  {
    icon: "quote",
    title: "Email",
    value: "Business email here",
    note: "Replace with actual business email",
  },
  {
    icon: "desktop",
    title: "Visit Store",
    value: "Store address here",
    note: "Replace with actual store address",
  },
  {
    icon: "shield",
    title: "Business Hours",
    value: "Mon-Sat, 10:00 AM - 7:00 PM",
    note: "Update based on actual operating hours",
  },
];

export default function Contact() {
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    setStatus("");
    setError("");

    const form = event.currentTarget;
    const payload = {
      full_name: form.full_name.value.trim(),
      company: form.company.value.trim() || "Individual Customer",
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      requirement_type: form.requirement_type.value,
      message: [
        form.product_name.value.trim() ? `Product or service: ${form.product_name.value.trim()}` : "",
        `Preferred contact method: ${form.contact_method.value}`,
        form.message.value.trim(),
      ]
        .filter(Boolean)
        .join("\n"),
    };

    try {
      await api("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus("Your inquiry has been submitted successfully.");
      form.reset();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Seo
        title="Contact Rama IT Solutions"
        description="Send a product, service, repair, networking, CCTV, or business inquiry to Rama IT Solutions."
      />
      <PageHero
        label="Contact"
        title="Tell us what you need and we will help you plan the right solution."
        actions={[
          { label: "Explore Products", href: "/products", variant: "btn-primary" },
          { label: "Register Interest", href: "/registration", variant: "btn-secondary" },
        ]}
      >
        Use the inquiry form for products, upgrades, repairs, networking, CCTV, corporate supply, or general IT support.
      </PageHero>

      <section className="section surface-section">
        <div className="container">
          <div className="contact-card-grid">
            {contactCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 40}>
                <article className="contact-card">
                  <TechnologyIcon name={card.icon} className="contact-card-icon" />
                  <h3>{card.title}</h3>
                  <strong>{card.value}</strong>
                  <p>{card.note}</p>
                  <span className="contact-card-helper">Use the inquiry form below or update this card with real contact details.</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry-form" className="section layered-section">
        <div className="container inquiry-layout">
          <Reveal>
            <div className="info-panel">
              <span className="eyebrow">Tell Us What You Need</span>
              <h2>Use the form to request product guidance, service support, or a quote.</h2>
              <p className="lead">
                The form stays simple, but still captures the context we need to give useful next steps.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="form-shell modern-form-shell">
              <h2>Submit Inquiry</h2>
              <p>We will review your message and get back through your preferred contact method.</p>
              <form className="form-grid" onSubmit={submit}>
                <div className="form-group">
                  <label htmlFor="contact-full-name">Full Name</label>
                  <input id="contact-full-name" name="full_name" required minLength="2" placeholder="Your full name" />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input id="contact-phone" name="phone" required minLength="5" placeholder="Your phone number" />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input id="contact-email" name="email" type="email" required placeholder="name@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-company">Business / Organization Name</label>
                  <input id="contact-company" name="company" placeholder="Optional for individual customers" />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-requirement">Requirement Type</label>
                  <select id="contact-requirement" name="requirement_type" required defaultValue="">
                    <option value="" disabled>Select requirement type</option>
                    <option>Laptop / Computer</option>
                    <option>Gaming PC</option>
                    <option>Accessories</option>
                    <option>Repair Service</option>
                    <option>Networking</option>
                    <option>CCTV</option>
                    <option>Corporate / Bulk Order</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-product-name">Product / Service Name</label>
                  <input id="contact-product-name" name="product_name" placeholder="Optional" />
                </div>
                <div className="form-group full">
                  <label htmlFor="contact-method">Preferred Contact Method</label>
                  <select id="contact-method" name="contact_method" required defaultValue="Phone">
                    <option>Phone</option>
                    <option>WhatsApp</option>
                    <option>Email</option>
                  </select>
                </div>
                <div className="form-group full">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    minLength="5"
                    placeholder="Tell us what you need, your preferred setup, quantity, service issue, or expected timeline."
                  />
                </div>
                <div className="form-group full">
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Submitting..." : "Submit Inquiry"}
                  </button>
                </div>
              </form>
              {status && <div className="notice success">{status}</div>}
              {error && <div className="notice error">{error}</div>}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
