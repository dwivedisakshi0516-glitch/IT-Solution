export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export async function api(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, options);
  let data = null;
  try { data = await response.json(); } catch {}
  if (!response.ok) {
    throw new Error(data?.detail || "Request failed");
  }
  return data;
}

export function authHeaders() {
  const token = sessionStorage.getItem("rama_admin_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}
