function initMap() {
var longBeach = {lat: 33.766485, lng: -118.189613};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: longBeach
  });


  var markerImage = 'images/marker.png';

  var marker = new google.maps.Marker({
  position: longBeach,
  map: map,
  icon: markerImage
  });

  var styles = [
{"featureType": "all", "stylers": [{"saturation": -100}]},
{"featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#cdcec7" }]},
{"featureType": "landscape", "elementType": "labels", "stylers": [{ "visibility": "on" }]}
]
  map.set('styles', styles);

}
