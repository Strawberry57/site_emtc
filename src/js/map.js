document.addEventListener("DOMContentLoaded", function () {
  const map = L.map("map").setView([21.0054765, 105.8227413], 15);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    minZoom: 0,
    maxZoom: 22,
  }).addTo(map);
  const leafletMarkers = L.layerGroup([
    new L.marker([21.0054765, 105.8227413])
      .addTo(map)
      .bindTooltip("thông tin muốn show")
      .openTooltip(),
    new L.marker([21.1928174, 105.763444]),
    // new L.marker([21.003303, 105.859207]),
  ]);
  leafletMarkers.addTo(map);
});
