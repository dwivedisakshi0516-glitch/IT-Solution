import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import FloatingContact from "./FloatingContact";
import TechnologyIcon from "./TechnologyIcon";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/why-choose-us", label: "Why Choose Us" },
  { to: "/contact", label: "Contact" },
  { to: "/registration", label: "Registration" },
];

const contactInfo = {
  phone: "Business phone here",
  whatsapp: "WhatsApp contact here",
  email: "Business email here",
  address: "Store address here",
  hours: "Mon-Sat, 10:00 AM - 7:00 PM",
};

function Logo() {
  return (
    <Link className="brand" to="/" aria-label="Rama IT Solutions home">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 64 64" fill="none">
          <rect x="6" y="6" width="52" height="52" rx="16" />
          <path d="M20 44V20h13c7 0 11 3.6 11 9.2 0 4.2-2 7-5.8 8.2L46 44h-8.8l-6.5-5.9h-2.9V44H20z" />
          <path d="M27.8 31.9h4.4c2.6 0 4-1 4-3 0-1.9-1.4-3-4-3h-4.4v6z" />
          <path d="M47 18h4M47 26h7M47 34h5" />
        </svg>
      </span>
      <span className="brand-copy">
        <span className="brand-title">Rama IT Solutions</span>
        <span className="brand-subtitle">Computers, Electronics and IT Support</span>
      </span>
    </Link>
  );
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="top-strip">
          <div className="container top-strip-inner">
            <span className="top-strip-item">
              <TechnologyIcon name="support" className="top-strip-icon" />
              {/* Replace with actual business phone number */}
              Call: {contactInfo.phone}
            </span>
            <span className="top-strip-item">
              <TechnologyIcon name="network" className="top-strip-icon" />
              Corporate IT supply, repairs and networking support
            </span>
          </div>
        </div>

        <div className="container nav-shell">
          <Logo />

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen(value => !value)}
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>

          <nav id="site-nav" className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary">
            {navItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`}
              >
                {item.label}
              </NavLink>
            ))}
            <Link className="btn btn-primary nav-cta" to="/contact">
              Get a Quote
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <section className="cta-band">
        <div className="container cta-band-inner">
          <div>
            <span className="eyebrow">Need the right setup?</span>
            <h2>From home upgrades to full office deployments, we help you choose with confidence.</h2>
            <p className="lead">
              Tell us what you need and we will recommend the right computers, accessories, networking, or service package.
            </p>
          </div>
          <div className="cta-band-actions">
            <Link className="btn btn-primary" to="/contact">
              Request a Quote
            </Link>
            <Link className="btn btn-secondary" to="/services">
              Get Technical Support
            </Link>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand-column">
            <Logo />
            <p>
              Premium computers, electronics, networking gear, repair services, and IT support for individuals, businesses,
              institutions, and growing teams.
            </p>
          </div>

          <div>
            <div className="footer-title">Explore</div>
            <div className="footer-links">
              <Link to="/products">Products</Link>
              <Link to="/services">Services</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <div className="footer-title">Support</div>
            <div className="footer-links">
              <Link to="/registration">Registration</Link>
              <Link to="/contact">Request Quote</Link>
              <Link to="/contact">Service Inquiry</Link>
              <Link to="/admin">Admin Login</Link>
            </div>
          </div>

          <div>
            <div className="footer-title">Contact Info</div>
            <div className="contact-list">
              <div>
                <span>Call Us</span>
                <strong>{contactInfo.phone}</strong>
              </div>
              <div>
                <span>WhatsApp</span>
                <strong>{contactInfo.whatsapp}</strong>
              </div>
              <div>
                <span>Email</span>
                <strong>{contactInfo.email}</strong>
              </div>
              <div>
                <span>Visit Store</span>
                <strong>{contactInfo.address}</strong>
              </div>
              <div>
                <span>Business Hours</span>
                <strong>{contactInfo.hours}</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>Original frontend design for Rama IT Solutions.</span>
          <span>Replace placeholder contact details before production.</span>
        </div>
      </footer>

      <FloatingContact />
    </div>
  );
}
