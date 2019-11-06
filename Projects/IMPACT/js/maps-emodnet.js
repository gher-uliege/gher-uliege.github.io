function formatFunction(fn, codeDiv) {
	codeDiv.innerText = fn.toString()
	.replace(/^            \}$/gm, '')
	.replace(/                (\S)/gm, '$1')
	.replace(/^function \(\) \{$/gm, '')
	.replace(/^(.{75}).+$/gm, '$1 ...')
	.trim();
	hljs.highlightBlock(codeDiv);
}

L.Map.addInitHook(function() {
	var slides = document.querySelector('.slides'),
	zoom = Number(slides.style.zoom);

	if (!zoom) {
		zoom = Number(slides.style.transform.replace(/.*scale\(([0-9\.]+)\).*/, '$1'));
	}

	this._container.style.zoom = 1/zoom;
	this.invalidateSize();
});


window.emodnetBioMap = (function() {
	var map;

	return {
		start: function() {
			var map = L.map('emodnet-bio-map', {fullscreenControl: true})

			CartoDB.addTo(map);

			var baseMaps = {
				"CartoDB": CartoDB,
				"CartoDB Dark": CartoDB_DarkMatter,
				"Ocean Basemap (ESRI)": Esri_OceanBasemap,
			};

			var dataStyle = {
				radius: 1,
				fillColor: 'red',
				weight: 1,
				opacity: 1,
				color: 'black',
				fillOpacity: 0.7
			}

			var contourStyle = {
				weight: 3,
				opacity: 1,
				color : 'black',
				fillOpacity: 0.
			}

			function getFieldColor(d) {
				return d > 22  ? '#d73027' :
				d > 21  ? '#f46d43' :
				d > 20  ? '#fdae61' :
				d > 19  ? '#fee090' :
				d > 18  ? '#e0f3f8' :
				d > 17  ? '#abd9e9' :
				d > 16  ? '#74add1' :
				'#4575b4' ;
			}


			function fieldStyle(feature) {
				return {
					radius: 5,
					fillColor: getFieldColor(feature.properties.field),
					color: 'k',
					weight: 2,
					opacity: 0.9,
					fillOpacity: 0.8
				};
			}

			latlon = [];

			var bathymetry = L.tileLayer.wms('http://ows.emodnet-bathymetry.eu/wms', {
				layers: 'emodnet:mean_atlas_land,coastlines,world:sea_names'
			});

			//var divacontours = new L.GeoJSON(contours, {style: contourStyle});
			//var divamesh = new L.GeoJSON(medmesh, {style: meshStyle});
			//var divafield = new L.GeoJSON(temperature5m, {style: fieldStyle});

			var gridStyle = {
				"color": "#ff7800",
				"weight": 1,
				"opacity": 0.5
			};

			var finegridStyle = {
				"color": "#F43C3C",
				"weight": 0.5,
				"opacity": 0.5
			};

			var domain = [[36, -10.],[75., -10.],[75., 35.],[36., 35.]];
			var polygon = L.polygon(domain, {color: '#0B8E40', fillOpacity: 0.04});

			var grid1 = L.geoJSON(coarsegrid, {
				style: gridStyle
			});

			var grid2 = L.geoJSON(finegrid, {
				style: finegridStyle
			});

			map.createPane("pane250").style.zIndex = 250; // between tiles and overlays
			map.createPane("pane450").style.zIndex = 450; // between overlays and shadows
			map.createPane("pane620").style.zIndex = 620; // between markers and tooltips
			map.createPane("pane800").style.zIndex = 800; // above popups

			var coarseMaskImg = 'images/EMODnet-Bio/coarsemask.png';
			imageBounds = [[36., -10.], [75., 35.]];
			imageBoundsFields = [[36., -10.], [73., 35.]];
			var coarseMask = L.imageOverlay(coarseMaskImg, imageBounds, {"opacity": 0.8, pane: "pane800"});

			var fineMaskImg = 'images/EMODnet-Bio/finemask.png';
			var fineMask = L.imageOverlay(fineMaskImg, imageBounds, {"opacity": 0.8, pane: "pane800"});

			var benthosG1img = 'images/EMODnet-Bio/benthos_g1.png';
			var benthosG1 = L.imageOverlay(benthosG1img, imageBoundsFields, {"opacity": 0.9, pane: "pane800"});
			var benthosG2img = 'images/EMODnet-Bio/benthos_g2.png';
			var benthosG2 = L.imageOverlay(benthosG2img, imageBoundsFields, {"opacity": 0.9, pane: "pane800"});
			var benthosG3img = 'images/EMODnet-Bio/benthos_g3.png';
			var benthosG3 = L.imageOverlay(benthosG3img, imageBoundsFields, {"opacity": 0.9, pane: "pane800"});


			// Create a canvas to manage a lot of points

			function getFieldColor(d) {
				return d > 10000  ? 	'#7f0000' :
				d > 1000  ? '#b30000' :
				d > 500  ? '#d7301f' :
				d > 200  ? '#ef6548' :
				d > 100  ? '#fc8d59' :
				d > 50  ? '#fdbb84' :
				d > 10  ? '#fdd49e' :
				d > 1  ? '#fee8c8' :
				'#fff7ec' ;
			}

			function makeScatter(dataRenderer, datavalues, datascatter){
				for (var i = 0; i < datavalues.length; i += 1) {
					var pointcolor = getFieldColor(datavalues[i]["vmin"]);
					for (var j = 0; j < data_g1[i]["coords"].length; j += 1) {
						var circ = L.circleMarker(datavalues[i]["coords"][j], {
							renderer: dataRenderer,
							radius: 1,
							fillOpacity: 1,
							color: pointcolor
						});
						datascatter.addLayer(circ);
					}
				}
				return datascatter
			}

			var dataRenderer1 = L.canvas({ padding: 0.5 });
			var datascatter1 = L.layerGroup();
			makeScatter(dataRenderer1, data_g1, datascatter1);
			var dataRenderer2 = L.canvas({ padding: 0.5 });
			var datascatter2 = L.layerGroup();
			makeScatter(dataRenderer2, data_g2, datascatter2);
			var dataRenderer3 = L.canvas({ padding: 0.5 });
			var datascatter3 = L.layerGroup();
			makeScatter(dataRenderer3, data_g3, datascatter3);

			var legend = L.control({position: 'bottomleft'});

			legend.onAdd = function (map) {

				var div = L.DomUtil.create('div', 'info legend'),
				grades = [0, 10, 50, 100, 200, 500, 1000, 10000],
				labels = ["Counts"],
				from, to;
				// loop through our density intervals and generate a label with a colored square for each interval
				for (var i = grades.length; i>1 ; i--) {
					div.innerHTML +=
					'<i style="background:' + getFieldColor(grades[i-1] + 1) + '"></i> ' +
					grades[i-1] + (grades[i] ? '&ndash;' + grades[i] + '<br>' : '+ <br>');
				}

				return div;
			};

			legend.addTo(map);

			var overlayers = {
				"Domain": polygon,
				"Coarse grid": grid1,
				"Fine grid": grid2,
				"Bathymetry": bathymetry,
				"Coarse mask": coarseMask,
				"Fine mask": fineMask,
				"g1 (resistant)": datascatter1,
				"g2 (resilient)": datascatter2,
				"g3 (vulnerable)": datascatter3,
				"Interpolated g1 (relative)": benthosG1,
				"Interpolated g2 (relative)": benthosG2,
				"Interpolated g3 (relative)": benthosG3,
			};

			map.setView([60.,15], 3);
			L.control.scale().addTo(map);

			L.control.layers(baseMaps, overlayers,
				{autoZIndex:true, collapsed:true}).addTo(map);

			},
			stop: function() {
				map.remove();
			}
		};
	})();
