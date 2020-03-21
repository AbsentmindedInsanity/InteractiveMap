// Create a map object with the id of "mapid"
// Set up the coordinate reference system, Simple makes it so that it uses a basic square grid
var map = L.map('mapid', {
    crs: L.CRS.Simple,
    minZoom: -3
});
//poodle

//Set the "bounds" of the map, this needs to be in the same aspect ratio as the image (.68/1) Note, leaflet uses a (y,x) coord system instead of (x,y)
var bounds = [[0,0], [8467,5775]]
//Grab the map file and give it bounds, add it to the map object
var image = L.imageOverlay('Umbra_Main.png', bounds).addTo(map);
// Show the whole map at once at start (this might be a bit off due to min zoom, can be fixed)
map.fitBounds(bounds);

var yx = L.latLng;

var xy = function(x, y) {
    if (L.Util.isArray(x)) {    // When doing xy([x, y]);
        return yx(x[1], x[0]);
    }
    return yx(y, x);  // When doing xy(x, y);
};

//Set the locations of markers for the map
var Vostograd = xy(2495,6428);

//L.latLng([ 6428, 2495 ]);

//describe and place markers
L.marker(Vostograd).addTo(map).bindPopup('The great city of Vostograd, largest city in the world of Umbra, Built on the coast of the mirror sea this sprawling city of narrow streets and bridges is the capitol of the Merchants Kingdom of Daceya');;