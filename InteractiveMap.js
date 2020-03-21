// Create a map object with the id of "mapid"
// Set up the coordinate reference system, Simple makes it so that it uses a basic square grid
var map = L.map('mapid', {
    crs: L.CRS.Simple
    //minZoom: -1
});

//Set the "bounds" of the map, this needs to be in the same aspect ratio as the image (.68/1) Note, leaflet uses a (y,x) coord system instead of (x,y)
var bounds = [[0,0], [1000,680]];
//Grab the map file and give it bounds, add it to the map object
var image = L.imageOverlay('Umbra_Main.png', bounds).addTo(map);
// Show the whole map at once at start (this might be a bit off due to min zoom, can be fixed)
map.fitBounds(bounds);