---
layout: post
title: "People 65 and Older Who are Living Alone"
date:   2019-11-06 1:15:02 -0400
categories: jekyll update
tags: [ data-vis ]
---

<div>
	<div>
		<meta charset="utf-8">
		<link rel="stylesheet" href="/styles/my-css-file.css">
		<title>65+ Living Alone</title>
		<meta name="Test" content="stuff" author="Nathan Sheppard" version="20191102">
		<script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.46.0/mapbox-gl.js'></script>
		<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.46.0/mapbox-gl.css' rel='stylesheet' />
	</div>
	<div class="map-container">
		<script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v2.2.0/mapbox-gl-geocoder.min.js'></script>
		<link rel='stylesheet' href='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v2.2.0/mapbox-gl-geocoder.css' type='text/css' />
		<div id='map-ui'>
		</div>
		<div id='map'></div>
		<div class='map-overlay' id='features'><h2>People Over 64 Who are Living Alone</h2><div id='pd'><p>Hover over a tract!</p></div></div>
		<div class='map-overlay' id='legend'></div>
		<script src='/scripts/over-64-living-alone/map.js'></script>
	</div>
</div>