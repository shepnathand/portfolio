mapboxgl.accessToken = 'pk.eyJ1Ijoic2hlcG5hdGhhbmQiLCJhIjoiY2pmNDk3dnkxMTUzcDJ3cTd3aG5oNXMzbSJ9.5MiTBrWApBeTRXv4Wb4WYQ';

var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/shepnathand/cjjoh45zo8gkk2ss50099bdrb',
  center: [-85.21,35.225],
  minZoom: 8,
  maxZoom: 22,
  zoom: 9,
  zoomControl: false
});

var nav = new mapboxgl.NavigationControl();

///////////////////////////////////////

map.on('load', function() {
	var layers = ['0', 			'1-9', 		'10-26', 	'27-53', 	'54-80', 	'81+'];
	var colors = ['#FED976',	'#FEB24C',	'#FD8D3C', 	'#FC4E2A', 	'#E31A1C', 	'#BD0026'];

	map.getCanvas().style.cursor = 'default';

	for (i = 0; i < layers.length; i++) {
	  	var layer = layers[i];
	  	var color = colors[i];
	  	var item = document.createElement('div');
	  	var key = document.createElement('span');
	  	key.className = 'legend-key';
	  	key.style.backgroundColor = color;
		
		var value = document.createElement('span');
		value.innerHTML = layer;
		item.appendChild(key);
		item.appendChild(value);
	  	legend.appendChild(item);
	}

    map.on('mousemove', function(e) {
	  var tracts = map.queryRenderedFeatures(e.point, {
	    layers: ['hamilton-projection']
	  });
	
	  if (tracts.length > 0) {
	    document.getElementById('pd').innerHTML =
	    	'<h3><strong>'
	    	+ tracts[0].properties.name
	    	+ '</strong></h3><p><strong><em>' 
	    	+ tracts[0].properties.sites 
	    	+ '</strong> EPA Sites</em></p>'
	    	;
	  } else {
	    document.getElementById('pd').innerHTML = '<p>Hover over a tract!</p>';
	  }
	});

    ///////////////////////////////////////

    // var brown = document.getElementById('filter-brown');
    // var all = document.getElementById('filter-all');

    // brown.onclick = function(e) {
    //     var locations = map.queryRenderedFeatures(e.point, {
    //         layers: ['locations']
    //     });
    //     all.className = '';
    //     this.className = 'active';
    //     // The setFilter function takes a GeoJSON feature object
    //     // and returns true to show it or false to hide it.
    //     locations.setFilter(function(f) {
    //         return f.properties['propertytype'] === 'brownfield properties';z
    //     });
    //     return false;
    // };

    // all.onclick = function() {
    //     var locations = map.queryRenderedFeatures(e.point, {
    //         layers: ['locations']
    //     });
    //     brown.className = '';
    //     this.className = 'active';
    //     locations.setFilter(function(f) {
    //         // Returning true for all markers shows everything.
    //         return true;
    //     });
    //     return false;
    // };

    ///////////////////////////////////////////////////////

	var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false 
    });

	map.on('mouseenter', 'locations', function(f) {
		map.getCanvas().style.cursor = 'pointer';

		var coordinates = f.features[0].geometry.coordinates.slice();
        var description =
        	'<p><strong>Business: </strong>'
        	+ f.features[0].properties.name
        	+ '</p><p><strong>Type: </strong>'
        	+ f.features[0].properties.propertytype
        	+ '</p>'
        	;

        while (Math.abs(f.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += f.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        // Populate the popup and set its coordinates
        // based on the feature found.
        popup.setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });

    map.on('mouseleave', 'locations', function() {
        map.getCanvas().style.cursor = 'default';
        popup.remove();
    });

    ///////////////////////////////////////////////////////
});