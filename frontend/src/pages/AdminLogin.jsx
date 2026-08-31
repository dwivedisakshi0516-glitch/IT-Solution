import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../api";
import Seo from "../components/Seo";

export default function AdminLogin() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(event.currentTarget);

    try {
      const data = await api("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form.entries())),
      });
      sessionStorage.setItem("rama_admin_token", data.access_token);
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="admin-auth-page">
      <Seo title="Admin Login | Rama IT Solutions" description="Admin login for managing inquiries and registrations." />
      <div className="admin-auth-card">
        <Link className="logo admin-logo" to="/">
          <span className="logo-mark">R</span>
          <span>
            <span className="logo-title">Rama IT Solutions</span>
            <span className="logo-sub">Administration</span>
          </span>
        </Link>
        <h1>Admin Login</h1>
        <p>Sign in to review customer inquiries, registrations, and follow-up activity.</p>
        <form onSubmit={submit} className="admin-login-form">
          <div>
            <label htmlFor="admin-email">Email</label>
            <input id="admin-email" name="email" type="email" required />
          </div>
          <div>
            <label htmlFor="admin-password">Password</label>
            <input id="admin-password" name="password" type="password" required />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
        {error && <div className="notice error">{error}</div>}
        <Link to="/" className="back-link">
          {"<-"} Back to website
        </Link>
      </div>
    </div>
  );
}
