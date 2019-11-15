mapboxgl.accessToken = 'pk.eyJ1Ijoic2hlcG5hdGhhbmQiLCJhIjoiY2pmNDk3dnkxMTUzcDJ3cTd3aG5oNXMzbSJ9.5MiTBrWApBeTRXv4Wb4WYQ';

var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/shepnathand/ck2gtu7sv1e061ctexel1njbc',
  center: [-85.15,35.225],
  minZoom: 9,
  maxZoom: 9,
  zoom: 9,
  zoomControl: false
});

var nav = new mapboxgl.NavigationControl();

///////////////////////////////////////

map.on('load', function() {
	var layers = ['0','1-112','113-207','208-303','304-443','444+'];
	var colors = ['#fCE29C', '#FEB24C', '#FD8D3C', '#FC4E2A', '#E31A1C',"#BD0026"];

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
	    	'<h3><strong> Tract: '
	    	+ tracts[0].properties.id.substring(2,tracts[0].properties.id.length-1)
	    	+ '</strong></h3><p><strong><em>' 
	    	+ tracts[0].properties.over_64_and_living_alone 
	    	+ '</strong> people</em></p>'
	    	;
	  } else {
	    document.getElementById('pd').innerHTML = '<p>Hover over a tract!</p>';
	  }
	});
});
