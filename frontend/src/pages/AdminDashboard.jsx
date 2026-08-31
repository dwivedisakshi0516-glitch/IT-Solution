import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL, api, authHeaders } from "../api";
import Seo from "../components/Seo";

const STATUSES = ["new", "reviewing", "contacted", "approved", "rejected", "closed"];

export default function AdminDashboard() {
  const [inquiries, setInquiries] = useState([]);
  const [registrations, setRegistrations] = useState([]);
  const [tab, setTab] = useState("inquiries");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function load() {
    setLoading(true);
    setError("");

    try {
      const headers = authHeaders();
      const [inq, reg] = await Promise.all([
        api("/api/admin/inquiries", { headers }),
        api("/api/admin/registrations", { headers }),
      ]);
      setInquiries(inq);
      setRegistrations(reg);
    } catch (err) {
      setError(err.message);
      if (/token|401|expired|invalid/i.test(err.message)) {
        sessionStorage.removeItem("rama_admin_token");
        navigate("/admin");
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!sessionStorage.getItem("rama_admin_token")) {
      navigate("/admin");
      return;
    }
    load();
  }, []);

  async function changeStatus(kind, id, status) {
    await api(`/api/admin/${kind}/${id}/status`, {
      method: "PATCH",
      headers: { ...authHeaders(), "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    load();
  }

  async function remove(kind, id) {
    if (!window.confirm("Delete this record permanently?")) return;
    await api(`/api/admin/${kind}/${id}`, {
      method: "DELETE",
      headers: authHeaders(),
    });
    load();
  }

  const counts = useMemo(
    () => ({
      inquiries: inquiries.length,
      registrations: registrations.length,
      newItems:
        inquiries.filter(item => item.status === "new").length +
        registrations.filter(item => item.status === "new").length,
      approved: registrations.filter(item => item.status === "approved").length,
    }),
    [inquiries, registrations]
  );

  function logout() {
    sessionStorage.removeItem("rama_admin_token");
    navigate("/admin");
  }

  return (
    <div className="admin-page">
      <Seo title="Admin Dashboard | Rama IT Solutions" description="Admin dashboard for inquiries and registrations." />
      <aside className="admin-sidebar">
        <div className="logo">
          <span className="logo-mark">R</span>
          <span>
            <span className="logo-title">Rama IT</span>
            <span className="logo-sub">Admin Portal</span>
          </span>
        </div>
        <nav>
          <button type="button" className={tab === "inquiries" ? "active" : ""} onClick={() => setTab("inquiries")}>
            Client Inquiries
          </button>
          <button type="button" className={tab === "registrations" ? "active" : ""} onClick={() => setTab("registrations")}>
            Registrations
          </button>
        </nav>
        <button type="button" className="btn btn-outline admin-logout" onClick={logout}>
          Log out
        </button>
      </aside>

      <main className="admin-main">
        <div className="admin-topbar">
          <div>
            <span className="eyebrow">Administration</span>
            <h1>Operations Dashboard</h1>
            <p>Manage customer inquiries and registration follow-ups.</p>
          </div>
          <button type="button" className="btn btn-outline" onClick={load}>
            Refresh
          </button>
        </div>

        <div className="admin-stats">
          <div className="admin-stat-card"><span>Inquiries</span><strong>{counts.inquiries}</strong></div>
          <div className="admin-stat-card"><span>Registrations</span><strong>{counts.registrations}</strong></div>
          <div className="admin-stat-card"><span>New Items</span><strong>{counts.newItems}</strong></div>
          <div className="admin-stat-card"><span>Approved</span><strong>{counts.approved}</strong></div>
        </div>

        {error && <div className="notice error">{error}</div>}
        {loading ? (
          <div className="loading-box">Loading dashboard...</div>
        ) : (
          <div className="admin-table-card">
            <div className="admin-table-header">
              <h2>{tab === "inquiries" ? "Client Inquiries" : "Customer / Business Registrations"}</h2>
              <span>{tab === "inquiries" ? inquiries.length : registrations.length} records</span>
            </div>
            <div className="table-scroll">
              {tab === "inquiries" ? (
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Company</th>
                      <th>Contact</th>
                      <th>Requirement</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inquiries.map(item => (
                      <tr key={item.id}>
                        <td><strong>{item.full_name}</strong><small>{new Date(item.created_at).toLocaleString()}</small></td>
                        <td>{item.company}</td>
                        <td>{item.email}<small>{item.phone}</small></td>
                        <td>{item.requirement_type}<small>{item.message}</small></td>
                        <td>
                          <select value={item.status} onChange={event => changeStatus("inquiries", item.id, event.target.value)}>
                            {STATUSES.map(status => <option key={status}>{status}</option>)}
                          </select>
                        </td>
                        <td><button type="button" className="danger-link" onClick={() => remove("inquiries", item.id)}>Delete</button></td>
                      </tr>
                    ))}
                    {!inquiries.length && <tr><td colSpan="6">No inquiries yet.</td></tr>}
                  </tbody>
                </table>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Role</th>
                      <th>Contact</th>
                      <th>Location</th>
                      <th>Resume</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registrations.map(item => (
                      <tr key={item.id}>
                        <td><strong>{item.full_name}</strong><small>{new Date(item.created_at).toLocaleString()}</small></td>
                        <td>{item.role}</td>
                        <td>{item.contact}</td>
                        <td>{item.location}<small>{item.message}</small></td>
                        <td>
                          {item.resume_filename ? (
                            <a className="download-link" target="_blank" rel="noreferrer" href={`${API_URL}/uploads/${item.resume_filename}`}>
                              Open Resume
                            </a>
                          ) : (
                            "-"
                          )}
                        </td>
                        <td>
                          <select value={item.status} onChange={event => changeStatus("registrations", item.id, event.target.value)}>
                            {STATUSES.map(status => <option key={status}>{status}</option>)}
                          </select>
                        </td>
                        <td><button type="button" className="danger-link" onClick={() => remove("registrations", item.id)}>Delete</button></td>
                      </tr>
                    ))}
                    {!registrations.length && <tr><td colSpan="7">No registrations yet.</td></tr>}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
