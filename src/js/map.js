document.addEventListener("DOMContentLoaded", function () {
  const map = L.map("map").setView([21.006737, 105.843394], 15);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    minZoom: 0,
    maxZoom: 22,
  }).addTo(map);
  const leafletMarkers = L.layerGroup([
    new L.marker([21.009788, 105.847262]),
    new L.marker([21.006737, 105.843394]),
    new L.marker([21.003303, 105.859207]),
  ]);
  leafletMarkers.addTo(map);
});
