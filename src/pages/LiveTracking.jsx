import { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import { useBooking } from "../context/BookingContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getRouteCoords, cityCoords } from "../data/routeCoords";

// Fix leaflet default marker icon bug in Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const busIcon = L.divIcon({
  html: `<div style="font-size:28px;line-height:1;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3))">🚌</div>`,
  className: "",
  iconSize: [32, 32],
  iconAnchor: [16, 16],
});

const pinIcon = (emoji) =>
  L.divIcon({
    html: `<div style="font-size:22px;line-height:1">${emoji}</div>`,
    className: "",
    iconSize: [24, 24],
    iconAnchor: [12, 24],
  });

// Interpolate between two coords
function interpolate(a, b, t) {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
}

// Expand waypoints into smooth steps
function buildSteps(coords, stepsPerSegment = 30) {
  const steps = [];
  for (let i = 0; i < coords.length - 1; i++) {
    for (let t = 0; t < stepsPerSegment; t++) {
      steps.push(interpolate(coords[i], coords[i + 1], t / stepsPerSegment));
    }
  }
  steps.push(coords[coords.length - 1]);
  return steps;
}

function MapFlyTo({ position }) {
  const map = useMap();
  useEffect(() => {
    if (position) map.panTo(position, { animate: true, duration: 1 });
  }, [position, map]);
  return null;
}

const STATUS_LABELS = ["Boarding", "Departed", "On Route", "Approaching", "Arrived"];

export default function LiveTracking() {
  const { bookings } = useBooking();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const bookingId = searchParams.get("id");

  // Pick booking from URL param or latest
  const booking = bookingId
    ? bookings.find((b) => String(b.id) === bookingId)
    : bookings[bookings.length - 1];

  const from = booking?.busData?.from || "Delhi";
  const to = booking?.busData?.to || "Agra";

  const routeCoords = getRouteCoords(from, to);
  const steps = useRef(buildSteps(routeCoords, 40)).current;

  const [stepIndex, setStepIndex] = useState(0);
  const [running, setRunning] = useState(true);
  const intervalRef = useRef(null);

  const progress = Math.round((stepIndex / (steps.length - 1)) * 100);
  const statusIndex = Math.floor(progress / 20);
  const status = STATUS_LABELS[Math.min(statusIndex, 4)];
  const eta = Math.max(0, Math.round(((steps.length - 1 - stepIndex) / steps.length) * 60));

  useEffect(() => {
    if (!running) return;
    intervalRef.current = setInterval(() => {
      setStepIndex((prev) => {
        if (prev >= steps.length - 1) { setRunning(false); return prev; }
        return prev + 1;
      });
    }, 150);
    return () => clearInterval(intervalRef.current);
  }, [running, steps.length]);

  const busPos = steps[stepIndex];
  const mapCenter = cityCoords[from] || [22, 79];

  const statusColor = {
    Boarding: "bg-yellow-100 text-yellow-700",
    Departed: "bg-blue-100 text-blue-700",
    "On Route": "bg-[#2887ff] text-white",
    Approaching: "bg-orange-100 text-orange-700",
    Arrived: "bg-green-100 text-green-700",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2887ff] to-[#1a5fcc] text-white py-5 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <button onClick={() => navigate(-1)} className="text-blue-200 text-sm mb-1 hover:text-white transition flex items-center gap-1">
              ← Back
            </button>
            <h1 className="text-xl font-extrabold">🗺️ Live Bus Tracking</h1>
            {booking && (
              <p className="text-blue-200 text-xs mt-0.5">
                Booking #{booking.id} · {booking.busData?.operator}
              </p>
            )}
          </div>
          <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${statusColor[status]}`}>
            {status === "On Route" ? "🟢 " : ""}{status}
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 space-y-5">
        {/* Route + ETA bar */}
        <div className="bg-white rounded-2xl shadow-md p-5">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="text-center">
                <p className="text-xs text-gray-400 uppercase font-bold">From</p>
                <p className="font-extrabold text-gray-800">{from}</p>
              </div>
              <div className="flex-1 flex items-center gap-1 px-2">
                <div className="h-0.5 flex-1 bg-gray-200 relative">
                  <div className="h-0.5 bg-[#2887ff] transition-all duration-300" style={{ width: `${progress}%` }} />
                </div>
                <span className="text-base">🚌</span>
                <div className="h-0.5 flex-1 bg-gray-200" />
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-400 uppercase font-bold">To</p>
                <p className="font-extrabold text-gray-800">{to}</p>
              </div>
            </div>
            <div className="flex gap-4 text-center">
              <div>
                <p className="text-2xl font-extrabold text-[#2887ff]">{progress}%</p>
                <p className="text-xs text-gray-400">Completed</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-gray-800">{eta} min</p>
                <p className="text-xs text-gray-400">ETA</p>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div className="h-2 bg-[#2887ff] rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>

          {/* Milestone dots */}
          <div className="flex justify-between mt-2">
            {STATUS_LABELS.map((s, i) => (
              <span key={s} className={`text-xs font-semibold ${statusIndex >= i ? "text-[#2887ff]" : "text-gray-300"}`}>
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <MapContainer center={mapCenter} zoom={7} style={{ height: "420px", width: "100%" }} scrollWheelZoom={false}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='© <a href="https://openstreetmap.org">OpenStreetMap</a>'
            />
            {/* Full route (grey) */}
            <Polyline positions={routeCoords} color="#d1d5db" weight={4} dashArray="6" />
            {/* Completed path (blue) */}
            <Polyline positions={steps.slice(0, stepIndex + 1)} color="#2887ff" weight={4} />
            {/* Start marker */}
            <Marker position={routeCoords[0]} icon={pinIcon("🟢")}>
              <Popup>{from} (Start)</Popup>
            </Marker>
            {/* End marker */}
            <Marker position={routeCoords[routeCoords.length - 1]} icon={pinIcon("🔴")}>
              <Popup>{to} (Destination)</Popup>
            </Marker>
            {/* Bus marker */}
            <Marker position={busPos} icon={busIcon}>
              <Popup>
                <strong>{booking?.busData?.operator || "Your Bus"}</strong><br />
                {from} → {to}<br />
                ETA: {eta} min
              </Popup>
            </Marker>
            <MapFlyTo position={busPos} />
          </MapContainer>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            ["🚌", "Operator", booking?.busData?.operator || "—"],
            ["🕐", "Departure", booking?.busData?.departure || "—"],
            ["💺", "Seats", booking?.seats?.join(", ") || "—"],
            ["📅", "Date", booking?.search?.date || "—"],
          ].map(([icon, label, val]) => (
            <div key={label} className="bg-white rounded-xl shadow-sm p-4 text-center">
              <div className="text-2xl mb-1">{icon}</div>
              <p className="text-xs text-gray-400 uppercase font-bold">{label}</p>
              <p className="font-semibold text-gray-800 text-sm mt-0.5">{val}</p>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex gap-3">
          <button
            onClick={() => setRunning((r) => !r)}
            className="flex-1 bg-[#2887ff] text-white py-3 rounded-full font-bold hover:bg-[#2476da] transition"
          >
            {running ? "⏸ Pause" : "▶ Resume"}
          </button>
          <button
            onClick={() => { setStepIndex(0); setRunning(true); }}
            className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-full font-semibold hover:border-[#2887ff] transition"
          >
            🔄 Restart
          </button>
        </div>
      </div>
    </div>
  );
}
