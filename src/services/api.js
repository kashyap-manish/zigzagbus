const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

async function request(path, options = {}) {
  const token = localStorage.getItem("token");
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    ...options,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Request failed");
  return data;
}

// Auth
export const loginUser = (email, password) =>
  request("/auth/login", { method: "POST", body: JSON.stringify({ username: email, password, stype: "operator" }) });

export const registerUser = (name, email, password) =>
  request("/auth/register", { method: "POST", body: JSON.stringify({ bus_name: name, email, password }) });

// Buses
export const searchBuses = (from, to, date) =>
  request(`/buses/search?fromCity=${encodeURIComponent(from)}&toCity=${encodeURIComponent(to)}&date=${encodeURIComponent(date)}`);

// Bookings
export const createBooking = (payload) =>
  request("/bookings", { method: "POST", body: JSON.stringify(payload) });

export const getMyBookings = () =>
  request("/bookings/me");
