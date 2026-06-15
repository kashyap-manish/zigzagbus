import { buses } from "../data/mockData";

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
  request("/auth/login/customer", { method: "POST", body: JSON.stringify({ email, password }) });

export const registerUser = (name, email, password) =>
  request("/auth/register/customer", { method: "POST", body: JSON.stringify({ name, email, password }) });

// Buses
export const searchBuses = (from, to) => {
  const result = buses.filter((b) => b.from === from && b.to === to);
  return Promise.resolve(result);
};

// Bookings — mock only (no backend)
const getStoredBookings = () => JSON.parse(localStorage.getItem("bookings") || "[]");

export const createBooking = (payload) => {
  const booking = { ...payload, id: Date.now(), bus: payload.busData };
  const bookings = getStoredBookings();
  bookings.push(booking);
  localStorage.setItem("bookings", JSON.stringify(bookings));
  return Promise.resolve(booking);
};

export const getMyBookings = () => Promise.resolve(getStoredBookings());
