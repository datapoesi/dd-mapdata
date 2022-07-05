import METADATA from './places-metadata.js';

for (let place in METADATA) {
    let option = document.createElement('option');
    option.value = METADATA[place].value;
    option.textContent = METADATA[place].name;
    document.querySelector(".places-dropdown").appendChild(option);
}

if (!mapboxgl.supported()) alert('Your browser does not support Mapbox GL');

mapboxgl.accessToken = 'pk.eyJ1IjoiZGlnaHQiLCJhIjoiY2p4ZW5nanRjMG9wMzNvczhxOXprMXl4NiJ9.fmrU8kIKNnTnb6KyJ9Y1Hw';

const MAP_SETTINGS = {
    container: 'map',
    style: 'mapbox://styles/dight/ckj41nuc91m7j19nztxq3vzp6',
    //style: 'mapbox://styles/mapbox/streets-v11',
    center: [14.650297690342082, 59.112382521764154],
    zoom: 3,
}

const map = new mapboxgl.Map(MAP_SETTINGS);

map.addControl(new mapboxgl.NavigationControl());

map.on('load', function() {
    create_map_pin('averageAll', [15.636830766913004, 59.26063787090151], 'This pin represents the average coordinate of ALL places.').addTo(map);
    create_map_pin('centerPop', [15.436389, 58.895833], 'This pin represents the center of population.').addTo(map)//.togglePopup();;
    map.flyTo({
        center: [14.650297690342082, 59.112382521764154],
        zoom: 4.8,
        bearing: 0,
        speed: 0.2,
        curve: 0.7,
        easing: (t) => t,
        essential: true
    });
})

function create_map_pin(name, xy_coords, popupText) {
    const div = document.createElement('div');
    div.className = `${name} map-pin`;
    const popup = new mapboxgl.Popup({ offset: 25 }).setText(popupText);//.setHTML("<h1>Hello World!</h1>")
    const marker = new mapboxgl.Marker(div).setLngLat(xy_coords).setPopup(popup)
    return marker
}


let previousLayer = "";
let previousPin = null;

document.querySelector(".places-dropdown").addEventListener('change', updateMap);

function updateMap() {
  const selectedPlace = document.querySelector(".places-dropdown").value;

  let locationCount = document.querySelector(".location-count span:nth-child(2)")
  locationCount.textContent = METADATA[selectedPlace].count;

  let placeDescription = document.querySelector(".place-description span:nth-child(2)")
  placeDescription.innerHTML = METADATA[selectedPlace].description;

  const averagePin = create_map_pin('averageSelected', METADATA[selectedPlace].averageCoord, 'This pin represents the average coordinate of the selected place.')
  averagePin.addTo(map);
  
  if (previousPin) {
    previousPin.remove();
    previousPin = null;
  }
  previousPin = averagePin;
  
  if (map.getLayer(previousLayer)) map.removeLayer(previousLayer);
  if (map.getSource(previousLayer)) map.removeSource(previousLayer);
  previousLayer = selectedPlace;
  
  map.addLayer({
    id: `${selectedPlace}`,
    type: 'circle',
    source: {
      type: 'geojson',
      data: `locations-geojson/${selectedPlace}.geojson`
    },
    paint: {
      'circle-radius': [
        'interpolate',
        ['linear'],
        ['number', 3.5],
        3, 4
      ],
      'circle-opacity': 0.8
    }
  });
}


/*
When adding markers/points with Mapbox, there are two main ways.
The simplest, and the one to use for a small amount of markers, is to just add an HTML element to the map for each marker: https://docs.mapbox.com/help/tutorials/custom-markers-gl-js/#load-geojson-data
But for a larger amount of markers, it is better, performance-wise, to use layers and/or tilesets, either client-side or server-side.
https://docs.mapbox.com/help/tutorials/show-changes-over-time/#load-your-data
https://docs.mapbox.com/mapbox-gl-js/example/toggle-layers/
https://docs.mapbox.com/mapbox-gl-js/example/data-driven-circle-colors/
https://docs.mapbox.com/help/tutorials/mapbox-gl-js-expressions/#upload-data
https://docs.mapbox.com/help/tutorials/tilequery-healthy-food-finder/
https://docs.mapbox.com/help/tutorials/add-points-pt-1/
*/