function createMapMarker() {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoicmd1aW5uMTIwNyIsImEiOiJja29pd2YydGMwMXNoMnBzOGNleWlxaTV2In0.5c8GxAC0GHJe_q5ka2OzLA';

  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.091542, 42.358862],
    zoom: 12,
  });

  let marker = new mapboxgl.Marker().setLngLat([-71.091542, 42.358862]).addTo(map);
}

window.onload = () => {
  createMapMarker();
};