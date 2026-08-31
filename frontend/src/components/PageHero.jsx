import React from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

export default function PageHero({ label, title, children, accent = "technology", actions = [] }) {
  return (
    <section className={`page-hero page-hero-${accent}`}>
      <div className="container page-hero-inner">
        <Reveal className="page-hero-copy">
          <span className="eyebrow eyebrow-dark">{label}</span>
          <h1>{title}</h1>
          {children && <p className="lead">{children}</p>}
          {!!actions.length && (
            <div className="page-hero-actions">
              {actions.map(action =>
                action.href?.startsWith("http") ? (
                  <a key={action.label} className={`btn ${action.variant || "btn-primary"}`} href={action.href}>
                    {action.label}
                  </a>
                ) : (
                  <Link key={action.label} className={`btn ${action.variant || "btn-primary"}`} to={action.href}>
                    {action.label}
                  </Link>
                )
              )}
            </div>
          )}
        </Reveal>
        <Reveal className="page-hero-art" delay={120}>
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="hero-panel">
            <div className="hero-panel-line" />
            <div className="hero-panel-line short" />
            <div className="hero-panel-grid" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
