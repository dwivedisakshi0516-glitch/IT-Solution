import React, { useState } from "react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import TechnologyIcon from "../components/TechnologyIcon";
import { api } from "../api";

const interestOptions = [
  "Computer / Laptop",
  "Accessories",
  "Repair",
  "Networking",
  "CCTV",
  "Bulk Supply",
  "IT Support",
];

export default function Registration() {
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    setStatus("");
    setError("");

    const form = event.currentTarget;
    const data = new FormData();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const city = form.city.value.trim();
    const customerType = form.customer_type.value;
    const interestedIn = form.interested_in.value;
    const message = form.message.value.trim();

    data.append("full_name", form.full_name.value.trim());
    data.append("contact", `Phone: ${phone} | Email: ${email}`);
    data.append("role", `${customerType} - ${interestedIn}`);
    data.append("location", city);
    data.append("message", message);

    try {
      await api("/api/registrations", { method: "POST", body: data });
      setStatus("Registration submitted successfully. We will reach out soon.");
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
        title="Customer Inquiry Registration | Rama IT Solutions"
        description="Register your interest for computers, accessories, repair, networking, CCTV, bulk supply, or IT support."
      />
      <PageHero
        label="Registration"
        title="Customer and business inquiry registration designed to be simple and fast."
        actions={[
          { label: "View Services", href: "/services", variant: "btn-primary" },
          { label: "Talk to Us", href: "/contact", variant: "btn-secondary" },
        ]}
      >
        This form helps us understand who you are, what you are interested in, and how best to contact you.
      </PageHero>

      <section id="registration-form" className="section surface-section">
        <div className="container inquiry-layout">
          <Reveal>
            <div className="info-panel registration-side-panel">
              <span className="eyebrow">What this is for</span>
              <h2>Use this when you want product guidance, service help, or a business follow-up.</h2>
              <div className="registration-point-list">
                <div><TechnologyIcon name="quote" className="inline-icon" /> Quote or requirement registration</div>
                <div><TechnologyIcon name="desktop" className="inline-icon" /> Product and solution interest</div>
                <div><TechnologyIcon name="support" className="inline-icon" /> Follow-up for service support</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="form-shell modern-form-shell">
              <h2>Customer / Business Inquiry Registration</h2>
              <p>We keep this short so you can register interest without unnecessary friction.</p>
              <form className="form-grid" onSubmit={submit}>
                <div className="form-group">
                  <label htmlFor="reg-full-name">Name</label>
                  <input id="reg-full-name" name="full_name" required minLength="2" placeholder="Your full name" />
                </div>
                <div className="form-group">
                  <label htmlFor="reg-phone">Phone</label>
                  <input id="reg-phone" name="phone" required minLength="5" placeholder="Your phone number" />
                </div>
                <div className="form-group">
                  <label htmlFor="reg-email">Email</label>
                  <input id="reg-email" name="email" type="email" required placeholder="name@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="reg-city">City</label>
                  <input id="reg-city" name="city" required minLength="2" placeholder="Your city" />
                </div>
                <div className="form-group">
                  <label htmlFor="reg-customer-type">Customer Type</label>
                  <select id="reg-customer-type" name="customer_type" required defaultValue="">
                    <option value="" disabled>Select customer type</option>
                    <option>Individual</option>
                    <option>Business</option>
                    <option>Institution</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="reg-interest">Interested In</label>
                  <select id="reg-interest" name="interested_in" required defaultValue="">
                    <option value="" disabled>Select your interest</option>
                    {interestOptions.map(item => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group full">
                  <label htmlFor="reg-message">Message</label>
                  <textarea
                    id="reg-message"
                    name="message"
                    placeholder="Tell us about your requirement, expected quantity, preferred device type, or support need."
                  />
                </div>
                <div className="form-group full">
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Submitting..." : "Submit Registration"}
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
