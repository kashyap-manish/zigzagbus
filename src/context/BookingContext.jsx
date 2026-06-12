import { createContext, useContext, useState, useEffect } from "react";
import { loginUser, registerUser, createBooking, getMyBookings } from "../services/api";

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [search, setSearch] = useState({ from: "", to: "", date: "", passengers: 1 });
  const [selectedBus, setSelectedBus] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (user) fetchBookings();
  }, [user]);

  async function fetchBookings() {
    try {
      const data = await getMyBookings();
      setBookings(data);
    } catch {
      setBookings([]);
    }
  }

  async function login(email, password) {
    const data = await loginUser(email, password);
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    setUser(data.user);
  }

  async function register(name, email, password) {
    await registerUser(name, email, password);
    await login(email, password);
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setBookings([]);
  }

  async function confirmBooking(passengerDetails) {
    const payload = {
      busData: selectedBus,
      busId: selectedBus.id,
      seats: selectedSeats,
      passengers: passengerDetails,
      search: { from: search.from, to: search.to, date: search.date },
      total: selectedBus.price * selectedSeats.length,
    };
    const booking = await createBooking(payload);
    setBookings((prev) => [...prev, booking]);
    return booking;
  }

  return (
    <BookingContext.Provider value={{
      search, setSearch,
      selectedBus, setSelectedBus,
      selectedSeats, setSelectedSeats,
      user, login, register, logout,
      bookings,
      confirmBooking,
    }}>
      {children}
    </BookingContext.Provider>
  );
}

export const useBooking = () => useContext(BookingContext);
