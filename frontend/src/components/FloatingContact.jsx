import React from "react";
import { Link } from "react-router-dom";
import TechnologyIcon from "./TechnologyIcon";

const QUICK_CONTACT = {
  label: "Quick Inquiry",
  href: "/contact",
  tooltip: "Chat with us",
  kind: "internal",
  // Replace with actual WhatsApp or contact URL when available.
};

export default function FloatingContact() {
  if (QUICK_CONTACT.kind === "external") {
    return (
      <a
        className="floating-contact"
        href={QUICK_CONTACT.href}
        target="_blank"
        rel="noreferrer"
        aria-label={QUICK_CONTACT.tooltip}
        title={QUICK_CONTACT.tooltip}
      >
        <TechnologyIcon name="support" className="floating-contact-icon" />
        <span>{QUICK_CONTACT.label}</span>
      </a>
    );
  }

  return (
    <Link
      className="floating-contact"
      to={QUICK_CONTACT.href}
      aria-label={QUICK_CONTACT.tooltip}
      title={QUICK_CONTACT.tooltip}
    >
      <TechnologyIcon name="support" className="floating-contact-icon" />
      <span>{QUICK_CONTACT.label}</span>
    </Link>
  );
}
