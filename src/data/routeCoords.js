// City center coordinates
export const cityCoords = {
  Delhi:      [28.6139, 77.2090],
  Mumbai:     [19.0760, 72.8777],
  Bangalore:  [12.9716, 77.5946],
  Chennai:    [13.0827, 80.2707],
  Kolkata:    [22.5726, 88.3639],
  Hyderabad:  [17.3850, 78.4867],
  Pune:       [18.5204, 73.8567],
  Jaipur:     [26.9124, 75.7873],
  Agra:       [27.1767, 78.0081],
  Varanasi:   [25.3176, 82.9739],
  Ahmedabad:  [23.0225, 72.5714],
  Lucknow:    [26.8467, 80.9462],
  Chandigarh: [30.7333, 76.7794],
  Dehradun:   [30.3165, 78.0322],
  Haridwar:   [29.9457, 78.1642],
};

// Intermediate waypoints for smoother routes between city pairs
const midpoints = {
  "Delhi-Agra":      [[28.4595, 77.0266], [28.0, 77.5], [27.5, 77.9]],
  "Delhi-Dehradun":  [[28.9, 77.1], [29.4, 77.7], [29.9, 78.0]],
  "Mumbai-Pune":     [[19.0, 73.1], [18.8, 73.4], [18.6, 73.7]],
  "Bangalore-Chennai":[[13.0, 77.8], [12.5, 78.5], [12.9, 79.5]],
  "Varanasi-Lucknow":[[25.5, 82.5], [26.0, 81.8], [26.5, 81.2]],
  "Jaipur-Delhi":    [[27.5, 76.5], [28.0, 76.8], [28.4, 77.0]],
};

export function getRouteCoords(from, to) {
  const start = cityCoords[from];
  const end = cityCoords[to];
  if (!start || !end) return [start || [20, 78], end || [20, 78]];
  const key1 = `${from}-${to}`;
  const key2 = `${to}-${from}`;
  const mid = midpoints[key1] || midpoints[key2] || [];
  return midpoints[key2] ? [start, ...mid.slice().reverse(), end] : [start, ...mid, end];
}
