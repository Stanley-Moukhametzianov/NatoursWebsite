/* eslint-disable prettier/prettier */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable prefer-destructuring */

export const displayMap = (locations) => {
    mapboxgl.accessToken =
    'pk.eyJ1Ijoic3RhbmxleW1vdWtoIiwiYSI6ImNrdmVraDJpbTB1cmgydm1sb2tvbTE4YXgifQ.RjHmTFKKP6drEqYXU22q2w';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/stanleymoukh/ckveklhw2029r14p60saxnjhv',
    
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach(loc => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
        element: el,
        anchor: 'bottom'
    }).setLngLat(loc.coordinates).addTo(map);

    new mapboxgl.Popup({
        offset: 30
    }).setLngLat(loc.coordinates).setHTML(`<p>${loc.day}: ${loc.description}</p>`)
        .addTo(map);

    bounds.extend(loc.coordinates)
})

map.fitBounds(bounds,
    {
        padding: {
            top: 200,
            bottom: 150,
            left: 100,
            right: 100,
        }
    });
}

