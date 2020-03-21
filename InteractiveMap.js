var map = L.map('mapid', {
    crs: L.CRS.Simple
});

var bounds = [[0,0], [1000,1000]];
var image = L.imageOverlay('Umbra_Main.png', bounds).addTo(map);

map.fitBounds(bounds);