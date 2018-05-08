
var map;
var hidden_markers = [];

function initMap() {
  var mapDiv = document.getElementById('map');
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.7380243, lng: -73.989487},
    zoom: 12,
    mapTypeId: 'terrain'
  });
          

	var ESB = new google.maps.Marker({
    position: {lat: 40.748441, lng: -73.985664},
    map: map,
    title: 'Empire State Building'
  });

  ESB.addListener('click', function() {
    map.setZoom(15);
    map.setCenter(ESB.getPosition());
  });

  google.maps.event.addDomListener(mapDiv, 'click', function() {

  var home = new google.maps.Marker({
      postition: {lat: 40.748449, lng: -73.985669},
      map: map,
      title: 'My House'
      })
          //window.alert('Map was clicked!');
    });
	}

	

      	
       


// As a User
// When I view the site
// I see a map

// As a User
// When I view the site
// I expect to only see NYC

// As a User
// When I view the site
// I want to see a marker on NYC

// Bonus:

// As a User
// When I view the map
// I want to see the terrain view

// More Bonus:

// As a User
// When I press a button
// I see 3 markers appear on the map

// Unbelievable, Seriously???? Bonus

// As a User
// When I view the site
// All the CitiBike NYC stations appear on the map as markers

// Hint: Make sure to use this URL: https://api.citybik.es/v2/networks/citi-bike-nyc