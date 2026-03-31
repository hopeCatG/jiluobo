"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["frontend-globe"],{

/***/ "./assets/js/frontend/globe.js":
/*!*************************************!*\
  !*** ./assets/js/frontend/globe.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mapbox_gl_dist_mapbox_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mapbox-gl/dist/mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl_dist_mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl_dist_mapbox_gl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var openrouteservice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openrouteservice-js */ "./node_modules/openrouteservice-js/dist/ors-js-client.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js");


const searouteOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'x-api-key': 'qBOJSLOVSQ9fkRRWBMfzTuzBiGeF5b6q6PQmmC10'
  }
};
const orsClient = new openrouteservice_js__WEBPACK_IMPORTED_MODULE_1__["default"].Directions({
  api_key: '5b3ce3597851110001cf6248d1ad95c7b0fc4ec08175da04bd49b34a'
});
__webpack_require__(/*! mapbox-gl/dist/mapbox-gl.css */ "./node_modules/mapbox-gl/dist/mapbox-gl.css");
__webpack_require__(/*! ../../scss/frontend/network.scss */ "./assets/scss/frontend/network.scss");
__webpack_require__(/*! ../../scss/commons/network_globe.scss */ "./assets/scss/commons/network_globe.scss");
$(document).ready(function () {
  (mapbox_gl_dist_mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default().accessToken) = 'pk.eyJ1Ijoib2ltbWVpIiwiYSI6ImNsd2l6N2RydjBwdTIya293aTkyMmgxNmsifQ.n9BMEe1VINjZWpDBthzWSA';
  let map_center = centerOffice.latLng.coordinates;
  let map_zoom = 2;
  let map_scroll_zoom = true;
  if ($('#network-map').data('map-center')) {
    map_center = $('#network-map').data('map-center');
  }
  if ($('#network-map').data('map-zoom')) {
    map_zoom = $('#network-map').data('map-zoom');
  }
  if ($('#network-map').data('map-scroll-zoom') !== undefined) {
    map_scroll_zoom = $('#network-map').data('map-scroll-zoom');
  }
  const map = new (mapbox_gl_dist_mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default().Map)({
    container: 'network-map',
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    // style: 'mapbox://styles/mapbox/outdoors-v12',
    zoom: map_zoom,
    center: map_center,
    projection: 'globe',
    scrollZoom: map_scroll_zoom
  });
  for (const routeA of routes) {
    for (const routeR of routes) {
      if (routeA.originName == routeR.destinationName && routeR.originName == routeA.destinationName) {
        routeA.returnRoute = routeR.id;
      }
    }
  }
  map.on('load', () => {
    var scrollTo = null;
    var scrollTime = 0;

    // Slow down zoom of mouse wheel
    map.scrollZoom.setWheelZoomRate(5);

    // Set the default atmosphere style
    map.setFog({
      'range': [-1, 10],
      'horizon-blend': 0.05,
      'color': '#53679f',
      'high-color': '#063d7a',
      'space-color': '#022f5e',
      'star-intensity': 0.25
    });
    map.addSource('mapbox-dem', {
      'type': 'raster-dem',
      'url': 'mapbox://mapbox.terrain-rgb'
    });
    map.setTerrain({
      'source': 'mapbox-dem',
      'exaggeration': 1.5
    });

    // Load an image from path.
    const icons = {
      airplane: '/build/map/airplane.png',
      truck: '/build/map/truck.png',
      ship: '/build/map/ship.png'
    };
    map.loadImage(icons['ship'], (error, image) => {
      if (error) {
        console.error('ship', error);
        throw error;
      }

      // Add the image to the map style.
      map.addImage('ship', image);
    });
    map.loadImage(icons['airplane'], (error, image) => {
      if (error) {
        console.error('airplane', error);
        throw error;
      }

      // Add the image to the map style.
      map.addImage('airplane', image);
    });
    map.loadImage(icons['truck'], (error, image) => {
      if (error) {
        console.error('truck', error);
        throw error;
      }

      // Add the image to the map style.
      map.addImage('truck', image);
    });
    let n = 0;
    const isMobile = window.innerWidth <= 768;
    const maxIterations = isMobile ? 5 : 10;
    const intervalId = setInterval(function () {
      startAnimation(n === 1 || n === 4 || n === 7 || n === 9 ? 'airplane' : 'ship');
      n++;
      if (n === maxIterations) {
        clearInterval(intervalId);
      }
    }, 25);
    let countries = {};
    const geojsonOffice = {
      type: 'FeatureCollection',
      features: []
    };
    let countriesLength = 0;
    let officesLength = 0;
    for (const office of offices) {
      // create a HTML element for each feature
      const el = document.createElement('div');
      // el.className = 'marker-dcs-small office ' + office.country.toLowerCase();
      // el.dataset.office = office.id;

      // make a marker for each feature and add to the map
      // new mapboxgl.Marker(el)
      //     .setLngLat(office.latLng.coordinates)
      //     .addTo(map);

      geojsonOffice.features.push({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: office.latLng.coordinates
        },
        properties: {
          office_id: office.id,
          office_icon: office.country + '_pin'
        }
      });
      if (!countries[office.country]) {
        countries[office.country] = {
          lng: 0,
          lat: 0,
          offices: 0,
          center: [office.lng, office.lat]
        };
        countriesLength++;
      }
      countries[office.country].lng += office.latLng.coordinates[0];
      countries[office.country].lat += office.latLng.coordinates[1];
      countries[office.country].offices++;
      officesLength++;
    }
    const geojsonGlobe = {
      type: 'FeatureCollection',
      features: []
    };
    let counter = 0;
    jQuery.each(countries, function (country, obj) {
      map.loadImage('/markers/pills/' + country.toLowerCase() + '.png', function (error, image) {
        if (error) {
          throw error;
        }
        map.addImage(country + '_pill', image);
        geojsonGlobe.features.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [obj.lng / obj.offices, obj.lat / obj.offices]
          },
          properties: {
            office_count: obj.offices.toString(),
            office_icon: country + '_pill',
            office_country: country
          }
        });
        counter++;
      });
      map.loadImage('/markers/pins/' + country.toLowerCase() + '.png', function (error, image) {
        if (error) {
          throw error;
        }
        map.addImage(country + '_pin', image);
        counter++;
      });
    });
    const countriesInterval = setInterval(function () {
      if (counter >= countriesLength) {
        clearInterval(countriesInterval);
        console.log('geojsonGlobe', geojsonGlobe);

        // Adding and showing globe markers.
        map.addSource('marker-dcs-pill-globe', {
          type: 'geojson',
          data: geojsonGlobe
        });
        map.addLayer({
          'id': 'marker-dcs-pill-globe-layer',
          'type': 'symbol',
          'source': 'marker-dcs-pill-globe',
          'layout': {
            "icon-image": ['get', 'office_icon'],
            "icon-allow-overlap": true,
            'icon-size': 0.33,
            "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
            "text-size": 14,
            "text-transform": "uppercase",
            "text-letter-spacing": 0.05,
            "text-offset": [1, 0],
            'text-field': ['format', ['upcase', ['get', 'office_count']], {
              'font-scale': 0.8
            }]
          },
          "paint": {
            "text-color": "#fff"
          },
          'filter': ['==', '$type', 'Point']
        });
        map.on('click', 'marker-dcs-pill-globe-layer', e => {
          let value = e.features[0].properties.office_country;
          $('#map-offices > div').hide();
          const markers = [];
          const llb = new (mapbox_gl_dist_mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default().LngLatBounds)();
          for (const office of offices) {
            // create a HTML element for each feature
            if (office['country'] == value) {
              markers.push(office.latLng.coordinates);
              llb.extend(office.latLng.coordinates);
            }
          }
          if ($('#map-offices > div[data-show="country"][data-value="' + value + '"]').length > 0) {
            $('#map-offices > div[data-show="country"][data-value="' + value + '"]').show();
            $('.network-map-overlay.office').show();
          } else {
            $('.network-map-overlay.office').hide();
          }
          mode = 'country';
          onFly = true;
          if (markers.length > 0) {
            if (markers.length > 1) {
              map.fitBounds(llb, {
                padding: {
                  top: 20,
                  bottom: 20,
                  left: 30,
                  right: 30
                }
              }, {
                mode: 'fitBounds'
              });
            } else {
              map.flyTo({
                center: markers[0],
                zoom: 10
              }, {
                mode: 'flyTo'
              });
            }
          }
        });
      }
    }, 100);
    const officesInterval = setInterval(function () {
      if (officesLength >= offices.length) {
        clearInterval(officesInterval);

        // Adding and showing globe markers.
        map.addSource('marker-dcs-pin-globe', {
          type: 'geojson',
          data: geojsonOffice
        });
        map.addLayer({
          'id': 'marker-dcs-pin-globe-layer',
          'type': 'symbol',
          'source': 'marker-dcs-pin-globe',
          'layout': {
            "icon-image": ['get', 'office_icon'],
            "icon-allow-overlap": true,
            'icon-size': 0.33
          },
          'filter': ['==', '$type', 'Point']
        });
      }
      map.on('click', 'marker-dcs-pin-globe-layer', e => {
        let value = e.features[0].properties.office_id;
        $('#map-offices > div').hide();
        const markers = [];
        const llb = new (mapbox_gl_dist_mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default().LngLatBounds)();
        for (const office of offices) {
          // create a HTML element for each feature
          if (office['id'] == value) {
            markers.push(office.latLng.coordinates);
            llb.extend(office.latLng.coordinates);
          }
        }
        if ($('#map-offices > div[data-office-id="' + value + '"]').length > 0) {
          $('#map-offices > div[data-office-id="' + value + '"]').show();
          $('.network-map-overlay.office').show();
        } else {
          $('.network-map-overlay.office').hide();
        }
        mode = 'country';
      });
      map.setLayoutProperty('marker-dcs-pin-globe-layer', 'visibility', 'none');
    }, 100);
    $('*[data-filter]').click(function (e) {
      let $filter = $(this);
      let filter = $filter.data('filter');
      let value = $filter.data('value');
      let bound = $filter.data('bound');
      scrollTo = $filter.data('scroll');
      $('#map-offices > div').hide();
      const markers = [];
      const llb = new (mapbox_gl_dist_mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default().LngLatBounds)();
      for (const office of offices) {
        // create a HTML element for each feature
        if (office[filter] == value) {
          markers.push(office.latLng.coordinates);
          llb.extend(office.latLng.coordinates);
        }
      }
      if ($('#map-offices > div[data-show="' + filter + '"][data-value="' + value + '"]').length > 0) {
        $('#map-offices > div[data-show="' + filter + '"][data-value="' + value + '"]').show();
        $('.network-map-overlay.office').show();
      } else {
        $('.network-map-overlay.office').hide();
      }
      if (filter == 'continent') {
        const $tab = $('#' + value + '-tab');
        $tab.tab('show');
        const $accordionCollapse = $('#' + value + '-collapse');
        $accordionCollapse.collapse('show');
      }
      mode = filter;
      onFly = true;
      if (markers.length > 0) {
        if (markers.length > 1) {
          let center = [(llb._ne.lng + llb._sw.lng) / 2, (llb._ne.lat + llb._sw.lat) / 2];
          map.fitBounds(llb, {
            padding: {
              top: 20,
              bottom: 20,
              left: 30,
              right: 30
            }
          }, {
            mode: 'fitBounds'
          });
        } else {
          map.flyTo({
            center: markers[0],
            zoom: 10
          }, {
            mode: 'flyTo'
          });
        }
      } else {
        map.fitBounds(bound, {
          padding: {
            top: 20,
            bottom: 20,
            left: 30,
            right: 30
          }
        }, {
          mode: 'fitBounds'
        });
      }
    });
    $('#map-offices').on('click', '.btn-office', function () {
      let officeId = $(this).data('office-id');
      let link = $(this).data('href');
      for (const office of offices) {
        // create a HTML element for each feature
        if (office.id == officeId) {
          map.flyTo({
            center: office.latLng.coordinates,
            zoom: 18,
            bearing: 30,
            pitch: 75
          }, {
            mode: 'flyTo'
          }).on('moveend', function () {
            window.location = link;
          });
        }
      }
    });
    let k = 0;
    function startAnimation(type, excludeId) {
      const n = k++;
      let lineDistance = 0;
      if (excludeId === undefined) {
        excludeId = 0;
      }
      let routeStart = null;
      do {
        routeStart = routes[Math.floor(Math.random() * routes.length)];
      } while (routeStart.run || routeStart.type !== type || routeStart.id === excludeId);
      routeStart.run = true;
      for (const returnRoute of routes) {
        if (routeStart.returnRoute === returnRoute.id) {
          returnRoute.run = true;
        }
      }
      const route_id = routeStart.id;
      const icon = routeStart.type;
      const geojson = routeStart.geojson;
      const origin = [routeStart.origin.lon, routeStart.origin.lat];

      // A single point that animates along the route.
      // Coordinates are initially set to origin.
      const point = {
        'type': 'FeatureCollection',
        'features': [{
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'Point',
            'coordinates': origin
          }
        }]
      };

      // console.log(n + ") FROM " + routeStart.originName + " TO " + routeStart.destinationName + " VIA " + icon);

      if (routeStart.api) {
        lineDistance = turf.length(geojson.features[0]);
        routing(geojson, icon);
      } else {
        const destinationA = [routeStart.destination.lon, routeStart.destination.lat];

        // A simple line from origin to destination.
        const routeA = {
          'type': 'FeatureCollection',
          'features': [{
            'type': 'Feature',
            'geometry': {
              'type': 'LineString',
              'coordinates': [origin, destinationA]
            }
          }]
        };
        let destinationB = [destinationA[0] + 360, destinationA[1]];
        const routeB = {
          'type': 'FeatureCollection',
          'features': [{
            'type': 'Feature',
            'geometry': {
              'type': 'LineString',
              'coordinates': [origin, destinationB]
            }
          }]
        };
        let destinationC = [destinationA[0] - 360, destinationA[1]];
        const routeC = {
          'type': 'FeatureCollection',
          'features': [{
            'type': 'Feature',
            'geometry': {
              'type': 'LineString',
              'coordinates': [origin, destinationC]
            }
          }]
        };
        const deltaLng = {
          A: Math.abs(origin[0] - destinationA[0]),
          B: Math.abs(origin[0] - destinationB[0]),
          C: Math.abs(origin[0] - destinationC[0])
        };
        let route = deltaLng.A < deltaLng.B && deltaLng.A < deltaLng.C ? routeA : deltaLng.B < deltaLng.C ? routeB : routeC;

        // Calculate the distance in kilometers between route start/end point.
        lineDistance = turf.length(route.features[0]);
        if (icon === 'ship') {
          // Effettua una richiesta alla API di SeaRoutes

          fetch(`https://api.searoutes.com/route/v2/sea/${origin[0]}%2C${origin[1]}%3B${destinationA[0]}%2C${destinationA[1]}`, searouteOptions).then(res => res.json()).then(function (res) {
            // Usa i dati della rotta per visualizzarla sulla mappa
            if (res.features) {
              lineDistance = turf.length(res.features[0]);
              addRoute(route_id, res);
              routing(res, icon);
            } else {
              console.error(res);
              lineDistance = turf.length(geojson.features[0]);
              routing(geojson, icon);
            }
          }).catch(function (err) {
            console.error(err);
            lineDistance = turf.length(geojson.features[0]);
            routing(geojson, icon);
          });
        } else if (icon === 'truck') {
          let response = orsClient.calculate({
            coordinates: [origin, destinationA],
            profile: 'driving-hgv',
            avoidables: ['fords'],
            format: 'geojson'
          }).then(function (res) {
            lineDistance = turf.length(res.features[0]);
            addRoute(route_id, res);
            routing(res, icon);
          }).catch(function (err) {
            console.error(err);
            lineDistance = turf.length(geojson.features[0]);
            routing(geojson, icon);
          });
        } else {
          addRoute(route_id, route);
          // console.log("Route type (" + deltaLng.A < deltaLng.B && deltaLng.A < deltaLng.C ? "A" : (
          //     deltaLng.B < deltaLng.C ? "B" : "C"
          // ) + ")")
          routing(route, icon);
        }
      }
      function routing(route, icon) {
        // Number of steps to use in the arc and animation, more steps means
        // a smoother arc and animation, but too many steps will result in a
        // low frame rate

        // let steps = Math.floor(lineDistance / (icon === 'ship' ? 1.5 : (icon === 'truck' ? 100 : 12)));
        let steps = Math.floor(lineDistance / (icon === 'truck' ? 200 : 2));
        const arc = [];

        // Draw an arc between the `origin` & `destination` of the two points
        for (let i = 0; i < lineDistance; i += lineDistance / steps) {
          const segment = turf.along(route.features[0], i);
          arc.push(segment.geometry.coordinates);
        }

        // Update the route with calculated arc coordinates
        route.features[0].geometry.coordinates = arc;
        if (icon === 'truck') {
          const arc2 = [];
          steps = steps * 100;
          for (let i = 0; i < lineDistance; i += lineDistance / steps) {
            const segment = turf.along(route.features[0], i);
            arc2.push(segment.geometry.coordinates);
          }
          route.features[0].geometry.coordinates = arc2;
        }

        // Used to increment the value of the point measurement against the route.
        let counter = 0;

        //// map.on('load', () => {
        // Add a source and layer displaying a point which will be animated in a circle.
        map.addSource('route_' + n, {
          'type': 'geojson',
          'data': route
        });
        map.addSource('point_' + n, {
          'type': 'geojson',
          'data': point
        });
        map.addLayer({
          'id': 'route_' + n,
          'source': 'route_' + n,
          'type': 'line',
          'paint': {
            'line-width': 1,
            'line-color': '#007cbf',
            'line-dasharray': [2, 2]
          }
        });
        map.addLayer({
          'id': 'point_' + n,
          'source': 'point_' + n,
          'type': 'symbol',
          'layout': {
            // This icon is a part of the Mapbox Streets style.
            // To view all images available in a Mapbox style, open
            // the style in Mapbox Studio and click the "Images" tab.
            // To add a new image to the style at runtime see
            // https://docs.mapbox.com/mapbox-gl-js/example/add-image/
            'icon-image': icon,
            'icon-size': 0.66,
            'icon-rotate': ['get', 'bearing'],
            'icon-rotation-alignment': 'map',
            'icon-allow-overlap': true,
            'icon-ignore-placement': true
          }
        });
        let running = false;
        function animate() {
          running = true;
          const start = route.features[0].geometry.coordinates[counter >= steps ? counter - 1 : counter];
          const end = route.features[0].geometry.coordinates[counter >= steps ? counter : counter + 1];
          if (!start || !end) {
            running = false;

            // console.log(n + ') Rimuovi A ');
            startAnimation(routeStart.type, routeStart.returnRoute);
            map.removeLayer('route_' + n);
            map.removeLayer('point_' + n);
            routeStart.run = false;
            for (const returnRoute of routes) {
              if (routeStart.returnRoute === returnRoute.id) {
                returnRoute.run = false;
              }
            }
            return;
          }
          // Update point geometry to a new position based on counter denoting
          // the index to access the arc
          point.features[0].geometry.coordinates = route.features[0].geometry.coordinates[counter];

          // Calculate the bearing to ensure the icon is rotated to match the route arc
          // The bearing is calculated between the current point and the next point, except
          // at the end of the arc, which uses the previous point and the current point
          point.features[0].properties.bearing = turf.bearing(turf.point(start), turf.point(end));

          // Update the source with this new data
          map.getSource('point_' + n).setData(point);

          // Request the next frame of animation as long as the end has not been reached
          if (counter < steps) {
            requestAnimationFrame(animate);
          } else {
            // console.log(n + ') Rimuovi B');
            startAnimation(routeStart.type, routeStart.returnRoute);
            map.removeLayer('route_' + n);
            map.removeLayer('point_' + n);
            routeStart.run = false;
            for (const returnRoute of routes) {
              if (routeStart.returnRoute === returnRoute.id) {
                returnRoute.run = false;
              }
            }
            return;
          }
          counter = counter + 1;
        }

        // Start the animation
        animate(counter);
      }
    }
    function addRoute(route_id, geojson) {
      // routes[route_id].geojson = geojson;
      // routes[route_id].api = true;
      geojson.features[0].properties = null;
      $.post(Routing.generate('office_add_route'), {
        'route_id': route_id,
        'geojson': geojson
      }, function (json) {});
    }

    // At low zooms, complete a revolution every two minutes.
    const secondsPerRevolution = 90;
    // Above zoom level 5, do not rotate.
    const maxSpinZoom = 5;
    // Rotate at intermediate speeds between zoom levels 3 and 5.
    const slowSpinZoom = 2;
    let userInteracting = false;
    let spinEnabled = true;
    let mode = 'free';
    let onFly = false;
    let sign = -1;
    function spinGlobe() {
      const zoom = map.getZoom();
      if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
        let distancePerSecond = 360 / secondsPerRevolution;
        // let latPerSecond = sign * 360 / (secondsPerRevolution * 5);
        const center = map.getCenter();
        switch (mode) {
          case 'continent':
            distancePerSecond = distancePerSecond / 10;
            // latPerSecond = 0;
            if (zoom > slowSpinZoom * 1.5) {
              // Slow spinning at higher zooms
              const zoomDif = (10 - zoom) / (10 - slowSpinZoom * 2);
              distancePerSecond *= zoomDif;
            }
            break;
          case 'country':
            distancePerSecond = distancePerSecond / 30;
            // latPerSecond = 0;
            if (zoom > slowSpinZoom * 1.75) {
              // Slow spinning at higher zooms
              const zoomDif = (10 - zoom) / (10 - slowSpinZoom * 2.5);
              distancePerSecond *= zoomDif;
            }
            break;
          default:
            if (zoom > slowSpinZoom) {
              // Slow spinning at higher zooms
              const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
              distancePerSecond *= zoomDif;
            }
            break;
        }
        center.lng -= distancePerSecond;
        // center.lat += latPerSecond;
        // if (center.lat >= 45) {
        //     sign = -1;
        // }
        // if (center.lat <= -15) {
        //     sign = 1;
        // }
        // Smoothly animate the map over one second.
        // When this animation is complete, it calls a 'moveend' event.
        map.easeTo({
          center,
          duration: 1000,
          easing: n => n
        }, {
          mode: 'spinGlobe'
        });
      }
    }

    // Pause spinning on interaction
    map.on('mousedown', () => {
      userInteracting = true;
    });

    // Restart spinning the globe when interaction is complete
    map.on('mouseup', () => {
      userInteracting = false;
      spinGlobe();
    });

    // These events account for cases where the mouse has moved
    // off the map, so 'mouseup' will not be fired.
    map.on('dragend', () => {
      userInteracting = false;
      mode = 'free';
      spinGlobe();
    });
    map.on('zoomend', e => {
      const zoom = map.getZoom();
      if (zoom < 3) {
        map.setLayoutProperty('marker-dcs-pill-globe-layer', 'visibility', 'visible');
        map.setLayoutProperty('marker-dcs-pin-globe-layer', 'visibility', 'none');
      } else {
        map.setLayoutProperty('marker-dcs-pill-globe-layer', 'visibility', 'none');
        map.setLayoutProperty('marker-dcs-pin-globe-layer', 'visibility', 'visible');
      }
      if (!e.mode) {
        mode = 'free';
      }
      onFly = false;
      spinGlobe();
    });

    // When animation is complete, start spinning if there is no ongoing interaction
    map.on('moveend', e => {
      if (e.mode && e.mode === 'spinGlobe') {
        spinGlobe();
      } else {
        if (scrollTo) {
          $([document.documentElement, document.body]).animate({
            scrollTop: $("#" + scrollTo).offset().top - 150
          }, 0, 'swing', function () {
            scrollTo = null;
            scrollTime = 0;
            spinGlobe();
          });
        }
      }
    });
    spinGlobe();

    /**
     * Guessing the continent to display based on the country code.
     *
     * AF: Africa
     * AN: Antartide
     * AS: Asia
     * EU: Europa
     * NA: Nord America
     * OC: Oceania
     * SA: Sud America
     */
    let startingContinent = 'EU';
    const continentByCountryCode = {
      AF: 'AS',
      AL: 'EU',
      AQ: 'AN',
      DZ: 'AF',
      AS: 'OC',
      AD: 'EU',
      AO: 'AF',
      AG: 'NA',
      AZ: 'AS',
      AR: 'SA',
      AU: 'OC',
      AT: 'EU',
      BS: 'NA',
      BH: 'AS',
      BD: 'AS',
      AM: 'AS',
      BB: 'NA',
      BE: 'EU',
      BM: 'NA',
      BT: 'AS',
      BO: 'SA',
      BA: 'EU',
      BW: 'AF',
      BV: 'AN',
      BR: 'SA',
      BZ: 'NA',
      IO: 'AF',
      SB: 'OC',
      VG: 'NA',
      BN: 'AS',
      BG: 'EU',
      MM: 'AS',
      BI: 'AF',
      BY: 'EU',
      KH: 'AS',
      CM: 'AF',
      CA: 'NA',
      CV: 'AF',
      KY: 'NA',
      CF: 'AF',
      LK: 'AS',
      TD: 'AF',
      CL: 'SA',
      CN: 'AS',
      TW: 'AS',
      CX: 'AS',
      CC: 'AS',
      CO: 'SA',
      KM: 'AF',
      YT: 'AF',
      CG: 'AF',
      CD: 'AF',
      CK: 'OC',
      CR: 'NA',
      HR: 'EU',
      CU: 'NA',
      CY: 'EU',
      CZ: 'EU',
      BJ: 'AF',
      DK: 'EU',
      DM: 'NA',
      DO: 'NA',
      EC: 'SA',
      SV: 'NA',
      GQ: 'AF',
      ET: 'AF',
      ER: 'AF',
      EE: 'EU',
      FO: 'EU',
      FK: 'SA',
      GS: 'AN',
      FJ: 'OC',
      FI: 'EU',
      AX: 'EU',
      FR: 'EU',
      GF: 'SA',
      PF: 'OC',
      TF: 'AF',
      DJ: 'AF',
      GA: 'AF',
      GE: 'AS',
      GM: 'AF',
      DE: 'EU',
      GH: 'AF',
      GI: 'EU',
      KI: 'OC',
      GR: 'EU',
      GL: 'NA',
      GD: 'NA',
      GP: 'NA',
      GU: 'OC',
      GT: 'NA',
      GN: 'AF',
      GY: 'SA',
      HT: 'NA',
      HM: 'AN',
      VA: 'EU',
      HN: 'NA',
      HK: 'AS',
      HU: 'EU',
      IS: 'EU',
      IN: 'AS',
      ID: 'AS',
      IR: 'AS',
      IQ: 'AS',
      IE: 'EU',
      IL: 'AS',
      IT: 'EU',
      CI: 'AF',
      JM: 'NA',
      JP: 'AS',
      KZ: 'AS',
      JO: 'AS',
      KE: 'AF',
      KP: 'AS',
      KR: 'AS',
      XK: 'EU',
      KW: 'AS',
      KG: 'AS',
      LA: 'AS',
      LB: 'AS',
      LS: 'AF',
      LV: 'EU',
      LR: 'AF',
      LY: 'AF',
      LI: 'EU',
      LT: 'EU',
      LU: 'EU',
      MO: 'AS',
      MG: 'AF',
      MW: 'AF',
      MY: 'AS',
      MV: 'AS',
      ML: 'AF',
      MT: 'EU',
      MQ: 'NA',
      MR: 'AF',
      MU: 'AF',
      MX: 'NA',
      MC: 'EU',
      MN: 'AS',
      MD: 'EU',
      ME: 'EU',
      MS: 'NA',
      MA: 'AF',
      MZ: 'AF',
      OM: 'AS',
      NA: 'AF',
      NR: 'OC',
      NP: 'AS',
      NL: 'EU',
      CW: 'NA',
      AW: 'NA',
      SX: 'NA',
      BQ: 'NA',
      NC: 'OC',
      VU: 'OC',
      NZ: 'OC',
      NI: 'NA',
      NE: 'AF',
      NG: 'AF',
      NU: 'OC',
      NF: 'OC',
      NO: 'EU',
      MP: 'OC',
      UM: 'NA',
      FM: 'OC',
      MH: 'OC',
      PW: 'OC',
      PK: 'AS',
      PS: 'AS',
      PA: 'NA',
      PG: 'OC',
      PY: 'SA',
      PE: 'SA',
      PH: 'AS',
      PN: 'OC',
      PL: 'EU',
      PT: 'EU',
      GW: 'AF',
      TL: 'AS',
      PR: 'NA',
      QA: 'AS',
      RE: 'AF',
      RO: 'EU',
      RU: 'EU',
      RW: 'AF',
      BL: 'NA',
      SH: 'AF',
      KN: 'NA',
      AI: 'NA',
      LC: 'NA',
      MF: 'NA',
      PM: 'NA',
      VC: 'NA',
      SM: 'EU',
      ST: 'AF',
      SA: 'AS',
      SN: 'AF',
      RS: 'EU',
      SC: 'AF',
      SL: 'AF',
      SG: 'AS',
      SK: 'EU',
      VN: 'AS',
      SI: 'EU',
      SO: 'AF',
      ZA: 'AF',
      ZW: 'AF',
      ES: 'EU',
      SS: 'AF',
      SD: 'AF',
      EH: 'AF',
      SR: 'SA',
      SJ: 'EU',
      SZ: 'AF',
      SE: 'EU',
      CH: 'EU',
      SY: 'AS',
      TJ: 'AS',
      TH: 'AS',
      TG: 'AF',
      TK: 'OC',
      TO: 'OC',
      TT: 'NA',
      AE: 'AS',
      TN: 'AF',
      TR: 'EU',
      TM: 'AS',
      TC: 'NA',
      TV: 'OC',
      UG: 'AF',
      UA: 'EU',
      MK: 'EU',
      EG: 'AF',
      GB: 'EU',
      GG: 'EU',
      JE: 'EU',
      IM: 'EU',
      TZ: 'AF',
      US: 'NA',
      VI: 'NA',
      BF: 'AF',
      UY: 'SA',
      UZ: 'AS',
      VE: 'SA',
      WF: 'OC',
      WS: 'OC',
      YE: 'AS',
      ZM: 'AF',
      XD: 'AS',
      XS: 'AS',
      XX: 'OC'
    };

    // Getting the locales and looking for the region.
    console.log(location.hash);
    if (location.hash) {
      startingContinent = location.hash.replace('#', '');
    } else {
      if (navigator.languages) {
        let languageCode = null;
        for (let j = 0; j < navigator.languages.length; j++) {
          if (navigator.languages[j].length > 2) {
            languageCode = navigator.languages[j];
            break;
          }
        }
        if (languageCode !== null) {
          const region = languageCode.split('-')[1];
          if (region && continentByCountryCode[region.toUpperCase()]) {
            startingContinent = continentByCountryCode[region.toUpperCase()];
          }
        }
      }
      startingContinent = 'EU';
    }

    // Selecting the first tab/accordion.
    const $tab = $('#' + startingContinent + '-tab');
    $tab.tab('show');
    const $accordionCollapse = $('#' + startingContinent + '-collapse');
    $accordionCollapse.collapse('show');
  });
});

/***/ }),

/***/ "./assets/scss/commons/network_globe.scss":
/*!************************************************!*\
  !*** ./assets/scss/commons/network_globe.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/scss/frontend/network.scss":
/*!*******************************************!*\
  !*** ./assets/scss/frontend/network.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_src_exports_global_js-node_modules_jquery_src_jquery_js","vendors-node_modules_mapbox-gl_dist_mapbox-gl_js-node_modules_mapbox-gl_dist_mapbox-gl_css","vendors-node_modules_openrouteservice-js_dist_ors-js-client_js","assets_scss_commons_network_globe_scss-assets_scss_frontend_network_scss"], () => (__webpack_exec__("./assets/js/frontend/globe.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFLElBQUk7TUFDUkMsRUFBRSxFQUFFO0lBQ1IsQ0FBQzs7SUFFRDtJQUNBdFosT0FBTyxDQUFDdUMsR0FBRyxDQUFDb0MsUUFBUSxDQUFDNFUsSUFBSSxDQUFDO0lBRTFCLElBQUk1VSxRQUFRLENBQUM0VSxJQUFJLEVBQUU7TUFDZi9QLGlCQUFpQixHQUFHN0UsUUFBUSxDQUFDNFUsSUFBSSxDQUFDQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztJQUN0RCxDQUFDLE1BQU07TUFDSCxJQUFJQyxTQUFTLENBQUNDLFNBQVMsRUFBRTtRQUNyQixJQUFJQyxZQUFZLEdBQUcsSUFBSTtRQUN2QixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0gsU0FBUyxDQUFDQyxTQUFTLENBQUMxVyxNQUFNLEVBQUU0VyxDQUFDLEVBQUUsRUFBRTtVQUNqRCxJQUFJSCxTQUFTLENBQUNDLFNBQVMsQ0FBQ0UsQ0FBQyxDQUFDLENBQUM1VyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ25DMlcsWUFBWSxHQUFHRixTQUFTLENBQUNDLFNBQVMsQ0FBQ0UsQ0FBQyxDQUFDO1lBQ3JDO1VBQ0o7UUFDSjtRQUVBLElBQUlELFlBQVksS0FBSyxJQUFJLEVBQUU7VUFDdkIsTUFBTUUsTUFBTSxHQUFHRixZQUFZLENBQUNHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFFekMsSUFBSUQsTUFBTSxJQUFJcFEsc0JBQXNCLENBQUNvUSxNQUFNLENBQUNFLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN4RHZRLGlCQUFpQixHQUFHQyxzQkFBc0IsQ0FBQ29RLE1BQU0sQ0FBQ0UsV0FBVyxDQUFDLENBQUMsQ0FBQztVQUNwRTtRQUNKO01BQ0o7TUFFQXZRLGlCQUFpQixHQUFHLElBQUk7SUFDNUI7O0lBRUE7SUFDQSxNQUFNdkYsSUFBSSxHQUFHekcsQ0FBQyxDQUFDLEdBQUcsR0FBR2dNLGlCQUFpQixHQUFHLE1BQU0sQ0FBQztJQUNoRHZGLElBQUksQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNoQixNQUFNQyxrQkFBa0IsR0FBRzNHLENBQUMsQ0FBQyxHQUFHLEdBQUdnTSxpQkFBaUIsR0FBRyxXQUFXLENBQUM7SUFDbkVyRixrQkFBa0IsQ0FBQ0MsUUFBUSxDQUFDLE1BQU0sQ0FBQztFQUN2QyxDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7Ozs7Ozs7Ozs7O0FDOW9DRjs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnJvbnRlbmQvZ2xvYmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Njc3MvY29tbW9ucy9uZXR3b3JrX2dsb2JlLnNjc3M/OWJlYSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9mcm9udGVuZC9uZXR3b3JrLnNjc3M/OWFhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWFwYm94Z2wgZnJvbSAnbWFwYm94LWdsL2Rpc3QvbWFwYm94LWdsJztcbmltcG9ydCBPcGVucm91dGVzZXJ2aWNlIGZyb20gJ29wZW5yb3V0ZXNlcnZpY2UtanMnXG5cbmNvbnN0IHNlYXJvdXRlT3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICAgYWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFwaS1rZXknOiAncUJPSlNMT1ZTUTlma1JSV0JNZnpUdXpCaUdlRjViNnE2UFFtbUMxMCdcbiAgICB9XG59O1xuXG5jb25zdCBvcnNDbGllbnQgPSBuZXcgT3BlbnJvdXRlc2VydmljZS5EaXJlY3Rpb25zKHtcbiAgICBhcGlfa2V5OiAnNWIzY2UzNTk3ODUxMTEwMDAxY2Y2MjQ4ZDFhZDk1YzdiMGZjNGVjMDgxNzVkYTA0YmQ0OWIzNGEnXG59KTtcblxucmVxdWlyZSgnbWFwYm94LWdsL2Rpc3QvbWFwYm94LWdsLmNzcycpO1xucmVxdWlyZSgnLi4vLi4vc2Nzcy9mcm9udGVuZC9uZXR3b3JrLnNjc3MnKTtcbnJlcXVpcmUoJy4uLy4uL3Njc3MvY29tbW9ucy9uZXR3b3JrX2dsb2JlLnNjc3MnKTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIG1hcGJveGdsLmFjY2Vzc1Rva2VuID0gJ3BrLmV5SjFJam9pYjJsdGJXVnBJaXdpWVNJNkltTnNkMmw2TjJSeWRqQndkVEl5YTI5M2FUa3lNbWd4Tm1zaWZRLm45Qk1FZTFWSU5qWldwREJ0aHpXU0EnO1xuXG4gICAgbGV0IG1hcF9jZW50ZXIgPSBjZW50ZXJPZmZpY2UubGF0TG5nLmNvb3JkaW5hdGVzO1xuICAgIGxldCBtYXBfem9vbSA9IDI7XG4gICAgbGV0IG1hcF9zY3JvbGxfem9vbSA9IHRydWU7XG5cbiAgICBpZiAoJCgnI25ldHdvcmstbWFwJykuZGF0YSgnbWFwLWNlbnRlcicpKSB7XG4gICAgICAgIG1hcF9jZW50ZXIgPSAkKCcjbmV0d29yay1tYXAnKS5kYXRhKCdtYXAtY2VudGVyJyk7XG4gICAgfVxuICAgIGlmICgkKCcjbmV0d29yay1tYXAnKS5kYXRhKCdtYXAtem9vbScpKSB7XG4gICAgICAgIG1hcF96b29tID0gJCgnI25ldHdvcmstbWFwJykuZGF0YSgnbWFwLXpvb20nKTtcbiAgICB9XG4gICAgaWYgKCQoJyNuZXR3b3JrLW1hcCcpLmRhdGEoJ21hcC1zY3JvbGwtem9vbScpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWFwX3Njcm9sbF96b29tID0gJCgnI25ldHdvcmstbWFwJykuZGF0YSgnbWFwLXNjcm9sbC16b29tJyk7XG4gICAgfVxuXG4gICAgY29uc3QgbWFwID0gbmV3IG1hcGJveGdsLk1hcCh7XG4gICAgICAgIGNvbnRhaW5lcjogJ25ldHdvcmstbWFwJyxcbiAgICAgICAgLy8gQ2hvb3NlIGZyb20gTWFwYm94J3MgY29yZSBzdHlsZXMsIG9yIG1ha2UgeW91ciBvd24gc3R5bGUgd2l0aCBNYXBib3ggU3R1ZGlvXG4gICAgICAgIC8vIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9vdXRkb29ycy12MTInLFxuICAgICAgICB6b29tOiBtYXBfem9vbSxcbiAgICAgICAgY2VudGVyOiBtYXBfY2VudGVyLFxuICAgICAgICBwcm9qZWN0aW9uOiAnZ2xvYmUnLFxuICAgICAgICBzY3JvbGxab29tOiBtYXBfc2Nyb2xsX3pvb20sXG4gICAgfSk7XG5cbiAgICBmb3IgKGNvbnN0IHJvdXRlQSBvZiByb3V0ZXMpIHtcbiAgICAgICAgZm9yIChjb25zdCByb3V0ZVIgb2Ygcm91dGVzKSB7XG4gICAgICAgICAgICBpZiAocm91dGVBLm9yaWdpbk5hbWUgPT0gcm91dGVSLmRlc3RpbmF0aW9uTmFtZSAmJiByb3V0ZVIub3JpZ2luTmFtZSA9PSByb3V0ZUEuZGVzdGluYXRpb25OYW1lKSB7XG4gICAgICAgICAgICAgICAgcm91dGVBLnJldHVyblJvdXRlID0gcm91dGVSLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFwLm9uKCdsb2FkJywgKCkgPT4ge1xuXG4gICAgICAgIHZhciBzY3JvbGxUbyA9IG51bGw7XG4gICAgICAgIHZhciBzY3JvbGxUaW1lID0gMDtcblxuICAgICAgICAvLyBTbG93IGRvd24gem9vbSBvZiBtb3VzZSB3aGVlbFxuICAgICAgICBtYXAuc2Nyb2xsWm9vbS5zZXRXaGVlbFpvb21SYXRlKDUpO1xuXG4vLyBTZXQgdGhlIGRlZmF1bHQgYXRtb3NwaGVyZSBzdHlsZVxuICAgICAgICBtYXAuc2V0Rm9nKHtcbiAgICAgICAgICAgICdyYW5nZSc6IFstMSwgMTBdLFxuICAgICAgICAgICAgJ2hvcml6b24tYmxlbmQnOiAwLjA1LFxuICAgICAgICAgICAgJ2NvbG9yJzogJyM1MzY3OWYnLFxuICAgICAgICAgICAgJ2hpZ2gtY29sb3InOiAnIzA2M2Q3YScsXG4gICAgICAgICAgICAnc3BhY2UtY29sb3InOiAnIzAyMmY1ZScsXG4gICAgICAgICAgICAnc3Rhci1pbnRlbnNpdHknOiAwLjI1XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1hcC5hZGRTb3VyY2UoJ21hcGJveC1kZW0nLCB7XG4gICAgICAgICAgICAndHlwZSc6ICdyYXN0ZXItZGVtJyxcbiAgICAgICAgICAgICd1cmwnOiAnbWFwYm94Oi8vbWFwYm94LnRlcnJhaW4tcmdiJ1xuICAgICAgICB9KTtcblxuICAgICAgICBtYXAuc2V0VGVycmFpbih7XG4gICAgICAgICAgICAnc291cmNlJzogJ21hcGJveC1kZW0nLFxuICAgICAgICAgICAgJ2V4YWdnZXJhdGlvbic6IDEuNVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBMb2FkIGFuIGltYWdlIGZyb20gcGF0aC5cbiAgICAgICAgY29uc3QgaWNvbnMgPSB7XG4gICAgICAgICAgICBhaXJwbGFuZTogJy9idWlsZC9tYXAvYWlycGxhbmUucG5nJyxcbiAgICAgICAgICAgIHRydWNrOiAnL2J1aWxkL21hcC90cnVjay5wbmcnLFxuICAgICAgICAgICAgc2hpcDogJy9idWlsZC9tYXAvc2hpcC5wbmcnLFxuICAgICAgICB9O1xuXG4gICAgICAgIG1hcC5sb2FkSW1hZ2UoXG4gICAgICAgICAgICBpY29uc1snc2hpcCddLFxuICAgICAgICAgICAgKGVycm9yLCBpbWFnZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdzaGlwJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIGltYWdlIHRvIHRoZSBtYXAgc3R5bGUuXG4gICAgICAgICAgICAgICAgbWFwLmFkZEltYWdlKCdzaGlwJywgaW1hZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIG1hcC5sb2FkSW1hZ2UoXG4gICAgICAgICAgICBpY29uc1snYWlycGxhbmUnXSxcbiAgICAgICAgICAgIChlcnJvciwgaW1hZ2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignYWlycGxhbmUnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgaW1hZ2UgdG8gdGhlIG1hcCBzdHlsZS5cbiAgICAgICAgICAgICAgICBtYXAuYWRkSW1hZ2UoJ2FpcnBsYW5lJywgaW1hZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIG1hcC5sb2FkSW1hZ2UoXG4gICAgICAgICAgICBpY29uc1sndHJ1Y2snXSxcbiAgICAgICAgICAgIChlcnJvciwgaW1hZ2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcigndHJ1Y2snLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgaW1hZ2UgdG8gdGhlIG1hcCBzdHlsZS5cbiAgICAgICAgICAgICAgICBtYXAuYWRkSW1hZ2UoJ3RydWNrJywgaW1hZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBuID0gMDtcbiAgICAgICAgY29uc3QgaXNNb2JpbGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8PSA3Njg7XG4gICAgICAgIGNvbnN0IG1heEl0ZXJhdGlvbnMgPSBpc01vYmlsZSA/IDUgOiAxMDtcblxuICAgICAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3RhcnRBbmltYXRpb24obiA9PT0gMSB8fCBuID09PSA0IHx8IG4gPT09IDcgfHwgbiA9PT0gOSA/ICdhaXJwbGFuZScgOiAnc2hpcCcpO1xuICAgICAgICAgICAgbisrO1xuICAgICAgICAgICAgaWYgKG4gPT09IG1heEl0ZXJhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAyNSk7XG5cbiAgICAgICAgbGV0IGNvdW50cmllcyA9IHt9O1xuICAgICAgICBjb25zdCBnZW9qc29uT2ZmaWNlID0ge1xuICAgICAgICAgICAgdHlwZTogJ0ZlYXR1cmVDb2xsZWN0aW9uJyxcbiAgICAgICAgICAgIGZlYXR1cmVzOiBbXVxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBjb3VudHJpZXNMZW5ndGggPSAwO1xuICAgICAgICBsZXQgb2ZmaWNlc0xlbmd0aCA9IDA7XG4gICAgICAgIGZvciAoY29uc3Qgb2ZmaWNlIG9mIG9mZmljZXMpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIEhUTUwgZWxlbWVudCBmb3IgZWFjaCBmZWF0dXJlXG4gICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgLy8gZWwuY2xhc3NOYW1lID0gJ21hcmtlci1kY3Mtc21hbGwgb2ZmaWNlICcgKyBvZmZpY2UuY291bnRyeS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgLy8gZWwuZGF0YXNldC5vZmZpY2UgPSBvZmZpY2UuaWQ7XG5cbiAgICAgICAgICAgIC8vIG1ha2UgYSBtYXJrZXIgZm9yIGVhY2ggZmVhdHVyZSBhbmQgYWRkIHRvIHRoZSBtYXBcbiAgICAgICAgICAgIC8vIG5ldyBtYXBib3hnbC5NYXJrZXIoZWwpXG4gICAgICAgICAgICAvLyAgICAgLnNldExuZ0xhdChvZmZpY2UubGF0TG5nLmNvb3JkaW5hdGVzKVxuICAgICAgICAgICAgLy8gICAgIC5hZGRUbyhtYXApO1xuXG4gICAgICAgICAgICBnZW9qc29uT2ZmaWNlLmZlYXR1cmVzLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdGZWF0dXJlJyxcbiAgICAgICAgICAgICAgICBnZW9tZXRyeToge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUG9pbnQnLFxuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlczogb2ZmaWNlLmxhdExuZy5jb29yZGluYXRlcyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgb2ZmaWNlX2lkOiBvZmZpY2UuaWQsXG4gICAgICAgICAgICAgICAgICAgIG9mZmljZV9pY29uOiBvZmZpY2UuY291bnRyeSArICdfcGluJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghY291bnRyaWVzW29mZmljZS5jb3VudHJ5XSkge1xuICAgICAgICAgICAgICAgIGNvdW50cmllc1tvZmZpY2UuY291bnRyeV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGxuZzogMCxcbiAgICAgICAgICAgICAgICAgICAgbGF0OiAwLFxuICAgICAgICAgICAgICAgICAgICBvZmZpY2VzOiAwLFxuICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IFtvZmZpY2UubG5nLCBvZmZpY2UubGF0XSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY291bnRyaWVzTGVuZ3RoKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudHJpZXNbb2ZmaWNlLmNvdW50cnldLmxuZyArPSBvZmZpY2UubGF0TG5nLmNvb3JkaW5hdGVzWzBdO1xuICAgICAgICAgICAgY291bnRyaWVzW29mZmljZS5jb3VudHJ5XS5sYXQgKz0gb2ZmaWNlLmxhdExuZy5jb29yZGluYXRlc1sxXTtcbiAgICAgICAgICAgIGNvdW50cmllc1tvZmZpY2UuY291bnRyeV0ub2ZmaWNlcysrO1xuICAgICAgICAgICAgb2ZmaWNlc0xlbmd0aCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ2VvanNvbkdsb2JlID0ge1xuICAgICAgICAgICAgdHlwZTogJ0ZlYXR1cmVDb2xsZWN0aW9uJyxcbiAgICAgICAgICAgIGZlYXR1cmVzOiBbXVxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgalF1ZXJ5LmVhY2goY291bnRyaWVzLCBmdW5jdGlvbiAoY291bnRyeSwgb2JqKSB7XG4gICAgICAgICAgICBtYXAubG9hZEltYWdlKCcvbWFya2Vycy9waWxscy8nICsgY291bnRyeS50b0xvd2VyQ2FzZSgpICsgJy5wbmcnLCBmdW5jdGlvbiAoZXJyb3IsIGltYWdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1hcC5hZGRJbWFnZShjb3VudHJ5ICsgJ19waWxsJywgaW1hZ2UpO1xuXG4gICAgICAgICAgICAgICAgZ2VvanNvbkdsb2JlLmZlYXR1cmVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnRmVhdHVyZScsXG4gICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUG9pbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IFtvYmoubG5nIC8gb2JqLm9mZmljZXMsIG9iai5sYXQgLyBvYmoub2ZmaWNlc10sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZmljZV9jb3VudDogb2JqLm9mZmljZXMudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZmljZV9pY29uOiBjb3VudHJ5ICsgJ19waWxsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZmljZV9jb3VudHJ5OiBjb3VudHJ5LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1hcC5sb2FkSW1hZ2UoJy9tYXJrZXJzL3BpbnMvJyArIGNvdW50cnkudG9Mb3dlckNhc2UoKSArICcucG5nJywgZnVuY3Rpb24gKGVycm9yLCBpbWFnZSkge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtYXAuYWRkSW1hZ2UoY291bnRyeSArICdfcGluJywgaW1hZ2UpO1xuXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNvdW50cmllc0ludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGNvdW50ZXIgPj0gY291bnRyaWVzTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChjb3VudHJpZXNJbnRlcnZhbCk7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2VvanNvbkdsb2JlJywgZ2VvanNvbkdsb2JlKVxuXG4gICAgICAgICAgICAgICAgLy8gQWRkaW5nIGFuZCBzaG93aW5nIGdsb2JlIG1hcmtlcnMuXG4gICAgICAgICAgICAgICAgbWFwLmFkZFNvdXJjZSgnbWFya2VyLWRjcy1waWxsLWdsb2JlJywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZ2VvanNvbicsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGdlb2pzb25HbG9iZSxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIG1hcC5hZGRMYXllcih7XG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdtYXJrZXItZGNzLXBpbGwtZ2xvYmUtbGF5ZXInLFxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdzeW1ib2wnLFxuICAgICAgICAgICAgICAgICAgICAnc291cmNlJzogJ21hcmtlci1kY3MtcGlsbC1nbG9iZScsXG4gICAgICAgICAgICAgICAgICAgICdsYXlvdXQnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImljb24taW1hZ2VcIjogWydnZXQnLCAnb2ZmaWNlX2ljb24nXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvbi1hbGxvdy1vdmVybGFwXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAnaWNvbi1zaXplJzogMC4zMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1mb250XCI6IFtcIk9wZW4gU2FucyBCb2xkXCIsIFwiQXJpYWwgVW5pY29kZSBNUyBCb2xkXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXNpemVcIjogMTQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtdHJhbnNmb3JtXCI6IFwidXBwZXJjYXNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtbGV0dGVyLXNwYWNpbmdcIjogMC4wNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1vZmZzZXRcIjogWzEsIDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtZmllbGQnOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Zvcm1hdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyd1cGNhc2UnLCBbJ2dldCcsICdvZmZpY2VfY291bnQnXV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeydmb250LXNjYWxlJzogMC44fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwicGFpbnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWNvbG9yXCI6IFwiI2ZmZlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICdmaWx0ZXInOiBbJz09JywgJyR0eXBlJywgJ1BvaW50J11cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIG1hcC5vbignY2xpY2snLCAnbWFya2VyLWRjcy1waWxsLWdsb2JlLWxheWVyJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZS5mZWF0dXJlc1swXS5wcm9wZXJ0aWVzLm9mZmljZV9jb3VudHJ5O1xuXG4gICAgICAgICAgICAgICAgICAgICQoJyNtYXAtb2ZmaWNlcyA+IGRpdicpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFya2VycyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsbGIgPSBuZXcgbWFwYm94Z2wuTG5nTGF0Qm91bmRzKCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb2ZmaWNlIG9mIG9mZmljZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIEhUTUwgZWxlbWVudCBmb3IgZWFjaCBmZWF0dXJlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2ZmaWNlWydjb3VudHJ5J10gPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXJzLnB1c2gob2ZmaWNlLmxhdExuZy5jb29yZGluYXRlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGxiLmV4dGVuZChvZmZpY2UubGF0TG5nLmNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKCcjbWFwLW9mZmljZXMgPiBkaXZbZGF0YS1zaG93PVwiY291bnRyeVwiXVtkYXRhLXZhbHVlPVwiJyArIHZhbHVlICsgJ1wiXScpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNtYXAtb2ZmaWNlcyA+IGRpdltkYXRhLXNob3c9XCJjb3VudHJ5XCJdW2RhdGEtdmFsdWU9XCInICsgdmFsdWUgKyAnXCJdJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLm5ldHdvcmstbWFwLW92ZXJsYXkub2ZmaWNlJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLm5ldHdvcmstbWFwLW92ZXJsYXkub2ZmaWNlJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbW9kZSA9ICdjb3VudHJ5JztcbiAgICAgICAgICAgICAgICAgICAgb25GbHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWFya2Vycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFya2Vycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwLmZpdEJvdW5kcyhsbGIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoge3RvcDogMjAsIGJvdHRvbTogMjAsIGxlZnQ6IDMwLCByaWdodDogMzB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiAnZml0Qm91bmRzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAuZmx5VG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IG1hcmtlcnNbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpvb206IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogJ2ZseVRvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICBjb25zdCBvZmZpY2VzSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAob2ZmaWNlc0xlbmd0aCA+PSBvZmZpY2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwob2ZmaWNlc0ludGVydmFsKTtcblxuICAgICAgICAgICAgICAgIC8vIEFkZGluZyBhbmQgc2hvd2luZyBnbG9iZSBtYXJrZXJzLlxuICAgICAgICAgICAgICAgIG1hcC5hZGRTb3VyY2UoJ21hcmtlci1kY3MtcGluLWdsb2JlJywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZ2VvanNvbicsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGdlb2pzb25PZmZpY2UsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBtYXAuYWRkTGF5ZXIoe1xuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnbWFya2VyLWRjcy1waW4tZ2xvYmUtbGF5ZXInLFxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdzeW1ib2wnLFxuICAgICAgICAgICAgICAgICAgICAnc291cmNlJzogJ21hcmtlci1kY3MtcGluLWdsb2JlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2xheW91dCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvbi1pbWFnZVwiOiBbJ2dldCcsICdvZmZpY2VfaWNvbiddLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpY29uLWFsbG93LW92ZXJsYXBcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdpY29uLXNpemUnOiAwLjMzLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAnZmlsdGVyJzogWyc9PScsICckdHlwZScsICdQb2ludCddXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hcC5vbignY2xpY2snLCAnbWFya2VyLWRjcy1waW4tZ2xvYmUtbGF5ZXInLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGUuZmVhdHVyZXNbMF0ucHJvcGVydGllcy5vZmZpY2VfaWQ7XG5cbiAgICAgICAgICAgICAgICAkKCcjbWFwLW9mZmljZXMgPiBkaXYnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWFya2VycyA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxsYiA9IG5ldyBtYXBib3hnbC5MbmdMYXRCb3VuZHMoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG9mZmljZSBvZiBvZmZpY2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIEhUTUwgZWxlbWVudCBmb3IgZWFjaCBmZWF0dXJlXG4gICAgICAgICAgICAgICAgICAgIGlmIChvZmZpY2VbJ2lkJ10gPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlcnMucHVzaChvZmZpY2UubGF0TG5nLmNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxsYi5leHRlbmQob2ZmaWNlLmxhdExuZy5jb29yZGluYXRlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJCgnI21hcC1vZmZpY2VzID4gZGl2W2RhdGEtb2ZmaWNlLWlkPVwiJyArIHZhbHVlICsgJ1wiXScpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI21hcC1vZmZpY2VzID4gZGl2W2RhdGEtb2ZmaWNlLWlkPVwiJyArIHZhbHVlICsgJ1wiXScpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLm5ldHdvcmstbWFwLW92ZXJsYXkub2ZmaWNlJykuc2hvdygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5uZXR3b3JrLW1hcC1vdmVybGF5Lm9mZmljZScpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtb2RlID0gJ2NvdW50cnknO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1hcC5zZXRMYXlvdXRQcm9wZXJ0eSgnbWFya2VyLWRjcy1waW4tZ2xvYmUtbGF5ZXInLCAndmlzaWJpbGl0eScsICdub25lJyk7XG5cbiAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICAkKCcqW2RhdGEtZmlsdGVyXScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBsZXQgJGZpbHRlciA9ICQodGhpcyk7XG4gICAgICAgICAgICBsZXQgZmlsdGVyID0gJGZpbHRlci5kYXRhKCdmaWx0ZXInKTtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9ICRmaWx0ZXIuZGF0YSgndmFsdWUnKTtcbiAgICAgICAgICAgIGxldCBib3VuZCA9ICRmaWx0ZXIuZGF0YSgnYm91bmQnKTtcbiAgICAgICAgICAgIHNjcm9sbFRvID0gJGZpbHRlci5kYXRhKCdzY3JvbGwnKTtcblxuICAgICAgICAgICAgJCgnI21hcC1vZmZpY2VzID4gZGl2JykuaGlkZSgpO1xuICAgICAgICAgICAgY29uc3QgbWFya2VycyA9IFtdO1xuICAgICAgICAgICAgY29uc3QgbGxiID0gbmV3IG1hcGJveGdsLkxuZ0xhdEJvdW5kcygpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBvZmZpY2Ugb2Ygb2ZmaWNlcykge1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIEhUTUwgZWxlbWVudCBmb3IgZWFjaCBmZWF0dXJlXG4gICAgICAgICAgICAgICAgaWYgKG9mZmljZVtmaWx0ZXJdID09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtlcnMucHVzaChvZmZpY2UubGF0TG5nLmNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICAgICAgbGxiLmV4dGVuZChvZmZpY2UubGF0TG5nLmNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkKCcjbWFwLW9mZmljZXMgPiBkaXZbZGF0YS1zaG93PVwiJyArIGZpbHRlciArICdcIl1bZGF0YS12YWx1ZT1cIicgKyB2YWx1ZSArICdcIl0nKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgJCgnI21hcC1vZmZpY2VzID4gZGl2W2RhdGEtc2hvdz1cIicgKyBmaWx0ZXIgKyAnXCJdW2RhdGEtdmFsdWU9XCInICsgdmFsdWUgKyAnXCJdJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICQoJy5uZXR3b3JrLW1hcC1vdmVybGF5Lm9mZmljZScpLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnLm5ldHdvcmstbWFwLW92ZXJsYXkub2ZmaWNlJykuaGlkZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZmlsdGVyID09ICdjb250aW5lbnQnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgJHRhYiA9ICQoJyMnICsgdmFsdWUgKyAnLXRhYicpO1xuICAgICAgICAgICAgICAgICR0YWIudGFiKCdzaG93Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvbkNvbGxhcHNlID0gJCgnIycgKyB2YWx1ZSArICctY29sbGFwc2UnKTtcbiAgICAgICAgICAgICAgICAkYWNjb3JkaW9uQ29sbGFwc2UuY29sbGFwc2UoJ3Nob3cnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW9kZSA9IGZpbHRlcjtcbiAgICAgICAgICAgIG9uRmx5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChtYXJrZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAobWFya2Vycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjZW50ZXIgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAobGxiLl9uZS5sbmcgKyBsbGIuX3N3LmxuZykgLyAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgKGxsYi5fbmUubGF0ICsgbGxiLl9zdy5sYXQpIC8gMixcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgbWFwLmZpdEJvdW5kcyhsbGIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHt0b3A6IDIwLCBib3R0b206IDIwLCBsZWZ0OiAzMCwgcmlnaHQ6IDMwfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiAnZml0Qm91bmRzJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtYXAuZmx5VG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyOiBtYXJrZXJzWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgem9vbTogMTAsXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6ICdmbHlUbydcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1hcC5maXRCb3VuZHMoYm91bmQsIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoge3RvcDogMjAsIGJvdHRvbTogMjAsIGxlZnQ6IDMwLCByaWdodDogMzB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBtb2RlOiAnZml0Qm91bmRzJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcjbWFwLW9mZmljZXMnKS5vbignY2xpY2snLCAnLmJ0bi1vZmZpY2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgb2ZmaWNlSWQgPSAkKHRoaXMpLmRhdGEoJ29mZmljZS1pZCcpO1xuICAgICAgICAgICAgbGV0IGxpbmsgPSAkKHRoaXMpLmRhdGEoJ2hyZWYnKTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBvZmZpY2Ugb2Ygb2ZmaWNlcykge1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIEhUTUwgZWxlbWVudCBmb3IgZWFjaCBmZWF0dXJlXG4gICAgICAgICAgICAgICAgaWYgKG9mZmljZS5pZCA9PSBvZmZpY2VJZCkge1xuICAgICAgICAgICAgICAgICAgICBtYXAuZmx5VG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyOiBvZmZpY2UubGF0TG5nLmNvb3JkaW5hdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgem9vbTogMTgsXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWFyaW5nOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpdGNoOiA3NVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiAnZmx5VG8nXG4gICAgICAgICAgICAgICAgICAgIH0pLm9uKCdtb3ZlZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gbGluaztcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBrID0gMDtcblxuICAgICAgICBmdW5jdGlvbiBzdGFydEFuaW1hdGlvbih0eXBlLCBleGNsdWRlSWQpIHtcbiAgICAgICAgICAgIGNvbnN0IG4gPSBrKys7XG4gICAgICAgICAgICBsZXQgbGluZURpc3RhbmNlID0gMDtcbiAgICAgICAgICAgIGlmIChleGNsdWRlSWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVJZCA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCByb3V0ZVN0YXJ0ID0gbnVsbDtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICByb3V0ZVN0YXJ0ID0gcm91dGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJvdXRlcy5sZW5ndGgpXTtcbiAgICAgICAgICAgIH0gd2hpbGUgKHJvdXRlU3RhcnQucnVuIHx8IHJvdXRlU3RhcnQudHlwZSAhPT0gdHlwZSB8fCByb3V0ZVN0YXJ0LmlkID09PSBleGNsdWRlSWQpO1xuICAgICAgICAgICAgcm91dGVTdGFydC5ydW4gPSB0cnVlO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJldHVyblJvdXRlIG9mIHJvdXRlcykge1xuICAgICAgICAgICAgICAgIGlmIChyb3V0ZVN0YXJ0LnJldHVyblJvdXRlID09PSByZXR1cm5Sb3V0ZS5pZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5Sb3V0ZS5ydW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgcm91dGVfaWQgPSByb3V0ZVN0YXJ0LmlkO1xuICAgICAgICAgICAgY29uc3QgaWNvbiA9IHJvdXRlU3RhcnQudHlwZTtcbiAgICAgICAgICAgIGNvbnN0IGdlb2pzb24gPSByb3V0ZVN0YXJ0Lmdlb2pzb247XG4gICAgICAgICAgICBjb25zdCBvcmlnaW4gPSBbcm91dGVTdGFydC5vcmlnaW4ubG9uLCByb3V0ZVN0YXJ0Lm9yaWdpbi5sYXRdO1xuXG4gICAgICAgICAgICAvLyBBIHNpbmdsZSBwb2ludCB0aGF0IGFuaW1hdGVzIGFsb25nIHRoZSByb3V0ZS5cbiAgICAgICAgICAgIC8vIENvb3JkaW5hdGVzIGFyZSBpbml0aWFsbHkgc2V0IHRvIG9yaWdpbi5cbiAgICAgICAgICAgIGNvbnN0IHBvaW50ID0ge1xuICAgICAgICAgICAgICAgICd0eXBlJzogJ0ZlYXR1cmVDb2xsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAnZmVhdHVyZXMnOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ0ZlYXR1cmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Byb3BlcnRpZXMnOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdnZW9tZXRyeSc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdQb2ludCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Nvb3JkaW5hdGVzJzogb3JpZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuICsgXCIpIEZST00gXCIgKyByb3V0ZVN0YXJ0Lm9yaWdpbk5hbWUgKyBcIiBUTyBcIiArIHJvdXRlU3RhcnQuZGVzdGluYXRpb25OYW1lICsgXCIgVklBIFwiICsgaWNvbik7XG5cbiAgICAgICAgICAgIGlmIChyb3V0ZVN0YXJ0LmFwaSkge1xuICAgICAgICAgICAgICAgIGxpbmVEaXN0YW5jZSA9IHR1cmYubGVuZ3RoKGdlb2pzb24uZmVhdHVyZXNbMF0pO1xuICAgICAgICAgICAgICAgIHJvdXRpbmcoZ2VvanNvbiwgaWNvbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uQSA9IFtyb3V0ZVN0YXJ0LmRlc3RpbmF0aW9uLmxvbiwgcm91dGVTdGFydC5kZXN0aW5hdGlvbi5sYXRdO1xuXG4gICAgICAgICAgICAgICAgLy8gQSBzaW1wbGUgbGluZSBmcm9tIG9yaWdpbiB0byBkZXN0aW5hdGlvbi5cbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUEgPSB7XG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ0ZlYXR1cmVDb2xsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgJ2ZlYXR1cmVzJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ0ZlYXR1cmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdnZW9tZXRyeSc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnTGluZVN0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjb29yZGluYXRlcyc6IFtvcmlnaW4sIGRlc3RpbmF0aW9uQV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGxldCBkZXN0aW5hdGlvbkIgPSBbZGVzdGluYXRpb25BWzBdICsgMzYwLCBkZXN0aW5hdGlvbkFbMV1dO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlQiA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnRmVhdHVyZUNvbGxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICAnZmVhdHVyZXMnOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnRmVhdHVyZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2dlb21ldHJ5Jzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdMaW5lU3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Nvb3JkaW5hdGVzJzogW29yaWdpbiwgZGVzdGluYXRpb25CXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbGV0IGRlc3RpbmF0aW9uQyA9IFtkZXN0aW5hdGlvbkFbMF0gLSAzNjAsIGRlc3RpbmF0aW9uQVsxXV07XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVDID0ge1xuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdGZWF0dXJlQ29sbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICdmZWF0dXJlcyc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdGZWF0dXJlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZ2VvbWV0cnknOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ0xpbmVTdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY29vcmRpbmF0ZXMnOiBbb3JpZ2luLCBkZXN0aW5hdGlvbkNdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhTG5nID0ge1xuICAgICAgICAgICAgICAgICAgICBBOiBNYXRoLmFicyhvcmlnaW5bMF0gLSBkZXN0aW5hdGlvbkFbMF0pLFxuICAgICAgICAgICAgICAgICAgICBCOiBNYXRoLmFicyhvcmlnaW5bMF0gLSBkZXN0aW5hdGlvbkJbMF0pLFxuICAgICAgICAgICAgICAgICAgICBDOiBNYXRoLmFicyhvcmlnaW5bMF0gLSBkZXN0aW5hdGlvbkNbMF0pLFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBsZXQgcm91dGUgPSBkZWx0YUxuZy5BIDwgZGVsdGFMbmcuQiAmJiBkZWx0YUxuZy5BIDwgZGVsdGFMbmcuQyA/IHJvdXRlQSA6IChcbiAgICAgICAgICAgICAgICAgICAgZGVsdGFMbmcuQiA8IGRlbHRhTG5nLkMgPyByb3V0ZUIgOiByb3V0ZUNcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBpbiBraWxvbWV0ZXJzIGJldHdlZW4gcm91dGUgc3RhcnQvZW5kIHBvaW50LlxuICAgICAgICAgICAgICAgIGxpbmVEaXN0YW5jZSA9IHR1cmYubGVuZ3RoKHJvdXRlLmZlYXR1cmVzWzBdKTtcblxuICAgICAgICAgICAgICAgIGlmIChpY29uID09PSAnc2hpcCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRWZmZXR0dWEgdW5hIHJpY2hpZXN0YSBhbGxhIEFQSSBkaSBTZWFSb3V0ZXNcblxuICAgICAgICAgICAgICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuc2Vhcm91dGVzLmNvbS9yb3V0ZS92Mi9zZWEvJHtvcmlnaW5bMF19JTJDJHtvcmlnaW5bMV19JTNCJHtkZXN0aW5hdGlvbkFbMF19JTJDJHtkZXN0aW5hdGlvbkFbMV19YCwgc2Vhcm91dGVPcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXNhIGkgZGF0aSBkZWxsYSByb3R0YSBwZXIgdmlzdWFsaXp6YXJsYSBzdWxsYSBtYXBwYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZmVhdHVyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZURpc3RhbmNlID0gdHVyZi5sZW5ndGgocmVzLmZlYXR1cmVzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkUm91dGUocm91dGVfaWQsIHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRpbmcocmVzLCBpY29uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVEaXN0YW5jZSA9IHR1cmYubGVuZ3RoKGdlb2pzb24uZmVhdHVyZXNbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0aW5nKGdlb2pzb24sIGljb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVEaXN0YW5jZSA9IHR1cmYubGVuZ3RoKGdlb2pzb24uZmVhdHVyZXNbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRpbmcoZ2VvanNvbiwgaWNvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGljb24gPT09ICd0cnVjaycpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gb3JzQ2xpZW50LmNhbGN1bGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlczogW29yaWdpbiwgZGVzdGluYXRpb25BXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGU6ICdkcml2aW5nLWhndicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdm9pZGFibGVzOiBbJ2ZvcmRzJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6ICdnZW9qc29uJ1xuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVEaXN0YW5jZSA9IHR1cmYubGVuZ3RoKHJlcy5mZWF0dXJlc1swXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRSb3V0ZShyb3V0ZV9pZCwgcmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRpbmcocmVzLCBpY29uKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lRGlzdGFuY2UgPSB0dXJmLmxlbmd0aChnZW9qc29uLmZlYXR1cmVzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRpbmcoZ2VvanNvbiwgaWNvbik7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkUm91dGUocm91dGVfaWQsIHJvdXRlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJSb3V0ZSB0eXBlIChcIiArIGRlbHRhTG5nLkEgPCBkZWx0YUxuZy5CICYmIGRlbHRhTG5nLkEgPCBkZWx0YUxuZy5DID8gXCJBXCIgOiAoXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBkZWx0YUxuZy5CIDwgZGVsdGFMbmcuQyA/IFwiQlwiIDogXCJDXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gKSArIFwiKVwiKVxuICAgICAgICAgICAgICAgICAgICByb3V0aW5nKHJvdXRlLCBpY29uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJvdXRpbmcocm91dGUsIGljb24pIHtcbiAgICAgICAgICAgICAgICAvLyBOdW1iZXIgb2Ygc3RlcHMgdG8gdXNlIGluIHRoZSBhcmMgYW5kIGFuaW1hdGlvbiwgbW9yZSBzdGVwcyBtZWFuc1xuICAgICAgICAgICAgICAgIC8vIGEgc21vb3RoZXIgYXJjIGFuZCBhbmltYXRpb24sIGJ1dCB0b28gbWFueSBzdGVwcyB3aWxsIHJlc3VsdCBpbiBhXG4gICAgICAgICAgICAgICAgLy8gbG93IGZyYW1lIHJhdGVcblxuICAgICAgICAgICAgICAgIC8vIGxldCBzdGVwcyA9IE1hdGguZmxvb3IobGluZURpc3RhbmNlIC8gKGljb24gPT09ICdzaGlwJyA/IDEuNSA6IChpY29uID09PSAndHJ1Y2snID8gMTAwIDogMTIpKSk7XG4gICAgICAgICAgICAgICAgbGV0IHN0ZXBzID0gTWF0aC5mbG9vcihsaW5lRGlzdGFuY2UgLyAoaWNvbiA9PT0gJ3RydWNrJyA/IDIwMCA6IDIpKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGFyYyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgLy8gRHJhdyBhbiBhcmMgYmV0d2VlbiB0aGUgYG9yaWdpbmAgJiBgZGVzdGluYXRpb25gIG9mIHRoZSB0d28gcG9pbnRzXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lRGlzdGFuY2U7IGkgKz0gbGluZURpc3RhbmNlIC8gc3RlcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VnbWVudCA9IHR1cmYuYWxvbmcocm91dGUuZmVhdHVyZXNbMF0sIGkpO1xuICAgICAgICAgICAgICAgICAgICBhcmMucHVzaChzZWdtZW50Lmdlb21ldHJ5LmNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHJvdXRlIHdpdGggY2FsY3VsYXRlZCBhcmMgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgICAgICByb3V0ZS5mZWF0dXJlc1swXS5nZW9tZXRyeS5jb29yZGluYXRlcyA9IGFyYztcblxuICAgICAgICAgICAgICAgIGlmIChpY29uID09PSAndHJ1Y2snKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFyYzIgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgc3RlcHMgPSBzdGVwcyAqIDEwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lRGlzdGFuY2U7IGkgKz0gbGluZURpc3RhbmNlIC8gc3RlcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlZ21lbnQgPSB0dXJmLmFsb25nKHJvdXRlLmZlYXR1cmVzWzBdLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyYzIucHVzaChzZWdtZW50Lmdlb21ldHJ5LmNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlLmZlYXR1cmVzWzBdLmdlb21ldHJ5LmNvb3JkaW5hdGVzID0gYXJjMjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBVc2VkIHRvIGluY3JlbWVudCB0aGUgdmFsdWUgb2YgdGhlIHBvaW50IG1lYXN1cmVtZW50IGFnYWluc3QgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIGxldCBjb3VudGVyID0gMDtcblxuICAgICAgICAgICAgICAgIC8vLy8gbWFwLm9uKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEFkZCBhIHNvdXJjZSBhbmQgbGF5ZXIgZGlzcGxheWluZyBhIHBvaW50IHdoaWNoIHdpbGwgYmUgYW5pbWF0ZWQgaW4gYSBjaXJjbGUuXG4gICAgICAgICAgICAgICAgbWFwLmFkZFNvdXJjZSgncm91dGVfJyArIG4sIHtcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnZ2VvanNvbicsXG4gICAgICAgICAgICAgICAgICAgICdkYXRhJzogcm91dGVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIG1hcC5hZGRTb3VyY2UoJ3BvaW50XycgKyBuLCB7XG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ2dlb2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnZGF0YSc6IHBvaW50XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBtYXAuYWRkTGF5ZXIoe1xuICAgICAgICAgICAgICAgICAgICAnaWQnOiAncm91dGVfJyArIG4sXG4gICAgICAgICAgICAgICAgICAgICdzb3VyY2UnOiAncm91dGVfJyArIG4sXG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ2xpbmUnLFxuICAgICAgICAgICAgICAgICAgICAncGFpbnQnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnbGluZS13aWR0aCc6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAnbGluZS1jb2xvcic6ICcjMDA3Y2JmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdsaW5lLWRhc2hhcnJheSc6IFsyLCAyXSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbWFwLmFkZExheWVyKHtcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ3BvaW50XycgKyBuLFxuICAgICAgICAgICAgICAgICAgICAnc291cmNlJzogJ3BvaW50XycgKyBuLFxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdzeW1ib2wnLFxuICAgICAgICAgICAgICAgICAgICAnbGF5b3V0Jzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpY29uIGlzIGEgcGFydCBvZiB0aGUgTWFwYm94IFN0cmVldHMgc3R5bGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUbyB2aWV3IGFsbCBpbWFnZXMgYXZhaWxhYmxlIGluIGEgTWFwYm94IHN0eWxlLCBvcGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgc3R5bGUgaW4gTWFwYm94IFN0dWRpbyBhbmQgY2xpY2sgdGhlIFwiSW1hZ2VzXCIgdGFiLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVG8gYWRkIGEgbmV3IGltYWdlIHRvIHRoZSBzdHlsZSBhdCBydW50aW1lIHNlZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9kb2NzLm1hcGJveC5jb20vbWFwYm94LWdsLWpzL2V4YW1wbGUvYWRkLWltYWdlL1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2ljb24taW1hZ2UnOiBpY29uLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ljb24tc2l6ZSc6IDAuNjYsXG4gICAgICAgICAgICAgICAgICAgICAgICAnaWNvbi1yb3RhdGUnOiBbJ2dldCcsICdiZWFyaW5nJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAnaWNvbi1yb3RhdGlvbi1hbGlnbm1lbnQnOiAnbWFwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdpY29uLWFsbG93LW92ZXJsYXAnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ljb24taWdub3JlLXBsYWNlbWVudCc6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgICAgICBsZXQgcnVubmluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlLmZlYXR1cmVzWzBdLmdlb21ldHJ5LmNvb3JkaW5hdGVzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXIgPj0gc3RlcHMgPyBjb3VudGVyIC0gMSA6IGNvdW50ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUuZmVhdHVyZXNbMF0uZ2VvbWV0cnkuY29vcmRpbmF0ZXNbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlciA+PSBzdGVwcyA/IGNvdW50ZXIgOiBjb3VudGVyICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIGlmICghc3RhcnQgfHwgIWVuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuICsgJykgUmltdW92aSBBICcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmltYXRpb24ocm91dGVTdGFydC50eXBlLCByb3V0ZVN0YXJ0LnJldHVyblJvdXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcC5yZW1vdmVMYXllcigncm91dGVfJyArIG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwLnJlbW92ZUxheWVyKCdwb2ludF8nICsgbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZVN0YXJ0LnJ1biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCByZXR1cm5Sb3V0ZSBvZiByb3V0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91dGVTdGFydC5yZXR1cm5Sb3V0ZSA9PT0gcmV0dXJuUm91dGUuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuUm91dGUucnVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBwb2ludCBnZW9tZXRyeSB0byBhIG5ldyBwb3NpdGlvbiBiYXNlZCBvbiBjb3VudGVyIGRlbm90aW5nXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBpbmRleCB0byBhY2Nlc3MgdGhlIGFyY1xuICAgICAgICAgICAgICAgICAgICBwb2ludC5mZWF0dXJlc1swXS5nZW9tZXRyeS5jb29yZGluYXRlcyA9XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZS5mZWF0dXJlc1swXS5nZW9tZXRyeS5jb29yZGluYXRlc1tjb3VudGVyXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGJlYXJpbmcgdG8gZW5zdXJlIHRoZSBpY29uIGlzIHJvdGF0ZWQgdG8gbWF0Y2ggdGhlIHJvdXRlIGFyY1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgYmVhcmluZyBpcyBjYWxjdWxhdGVkIGJldHdlZW4gdGhlIGN1cnJlbnQgcG9pbnQgYW5kIHRoZSBuZXh0IHBvaW50LCBleGNlcHRcbiAgICAgICAgICAgICAgICAgICAgLy8gYXQgdGhlIGVuZCBvZiB0aGUgYXJjLCB3aGljaCB1c2VzIHRoZSBwcmV2aW91cyBwb2ludCBhbmQgdGhlIGN1cnJlbnQgcG9pbnRcbiAgICAgICAgICAgICAgICAgICAgcG9pbnQuZmVhdHVyZXNbMF0ucHJvcGVydGllcy5iZWFyaW5nID0gdHVyZi5iZWFyaW5nKFxuICAgICAgICAgICAgICAgICAgICAgICAgdHVyZi5wb2ludChzdGFydCksXG4gICAgICAgICAgICAgICAgICAgICAgICB0dXJmLnBvaW50KGVuZClcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHNvdXJjZSB3aXRoIHRoaXMgbmV3IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgbWFwLmdldFNvdXJjZSgncG9pbnRfJyArIG4pLnNldERhdGEocG9pbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlcXVlc3QgdGhlIG5leHQgZnJhbWUgb2YgYW5pbWF0aW9uIGFzIGxvbmcgYXMgdGhlIGVuZCBoYXMgbm90IGJlZW4gcmVhY2hlZFxuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRlciA8IHN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuICsgJykgUmltdW92aSBCJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFuaW1hdGlvbihyb3V0ZVN0YXJ0LnR5cGUsIHJvdXRlU3RhcnQucmV0dXJuUm91dGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwLnJlbW92ZUxheWVyKCdyb3V0ZV8nICsgbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXAucmVtb3ZlTGF5ZXIoJ3BvaW50XycgKyBuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlU3RhcnQucnVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHJldHVyblJvdXRlIG9mIHJvdXRlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3V0ZVN0YXJ0LnJldHVyblJvdXRlID09PSByZXR1cm5Sb3V0ZS5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5Sb3V0ZS5ydW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb3VudGVyID0gY291bnRlciArIDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gU3RhcnQgdGhlIGFuaW1hdGlvblxuICAgICAgICAgICAgICAgIGFuaW1hdGUoY291bnRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBhZGRSb3V0ZShyb3V0ZV9pZCwgZ2VvanNvbikge1xuICAgICAgICAgICAgLy8gcm91dGVzW3JvdXRlX2lkXS5nZW9qc29uID0gZ2VvanNvbjtcbiAgICAgICAgICAgIC8vIHJvdXRlc1tyb3V0ZV9pZF0uYXBpID0gdHJ1ZTtcbiAgICAgICAgICAgIGdlb2pzb24uZmVhdHVyZXNbMF0ucHJvcGVydGllcyA9IG51bGw7XG4gICAgICAgICAgICAkLnBvc3QoUm91dGluZy5nZW5lcmF0ZSgnb2ZmaWNlX2FkZF9yb3V0ZScpLCB7XG4gICAgICAgICAgICAgICAgJ3JvdXRlX2lkJzogcm91dGVfaWQsXG4gICAgICAgICAgICAgICAgJ2dlb2pzb24nOiBnZW9qc29uLFxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXQgbG93IHpvb21zLCBjb21wbGV0ZSBhIHJldm9sdXRpb24gZXZlcnkgdHdvIG1pbnV0ZXMuXG4gICAgICAgIGNvbnN0IHNlY29uZHNQZXJSZXZvbHV0aW9uID0gOTA7XG4gICAgICAgIC8vIEFib3ZlIHpvb20gbGV2ZWwgNSwgZG8gbm90IHJvdGF0ZS5cbiAgICAgICAgY29uc3QgbWF4U3Bpblpvb20gPSA1O1xuICAgICAgICAvLyBSb3RhdGUgYXQgaW50ZXJtZWRpYXRlIHNwZWVkcyBiZXR3ZWVuIHpvb20gbGV2ZWxzIDMgYW5kIDUuXG4gICAgICAgIGNvbnN0IHNsb3dTcGluWm9vbSA9IDI7XG5cbiAgICAgICAgbGV0IHVzZXJJbnRlcmFjdGluZyA9IGZhbHNlO1xuICAgICAgICBsZXQgc3BpbkVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBsZXQgbW9kZSA9ICdmcmVlJztcbiAgICAgICAgbGV0IG9uRmx5ID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IHNpZ24gPSAtMTtcblxuICAgICAgICBmdW5jdGlvbiBzcGluR2xvYmUoKSB7XG4gICAgICAgICAgICBjb25zdCB6b29tID0gbWFwLmdldFpvb20oKTtcblxuICAgICAgICAgICAgaWYgKHNwaW5FbmFibGVkICYmICF1c2VySW50ZXJhY3RpbmcgJiYgem9vbSA8IG1heFNwaW5ab29tKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRpc3RhbmNlUGVyU2Vjb25kID0gMzYwIC8gc2Vjb25kc1BlclJldm9sdXRpb247XG4gICAgICAgICAgICAgICAgLy8gbGV0IGxhdFBlclNlY29uZCA9IHNpZ24gKiAzNjAgLyAoc2Vjb25kc1BlclJldm9sdXRpb24gKiA1KTtcbiAgICAgICAgICAgICAgICBjb25zdCBjZW50ZXIgPSBtYXAuZ2V0Q2VudGVyKCk7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NvbnRpbmVudCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZVBlclNlY29uZCA9IGRpc3RhbmNlUGVyU2Vjb25kIC8gMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsYXRQZXJTZWNvbmQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHpvb20gPiBzbG93U3Bpblpvb20gKiAxLjUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTbG93IHNwaW5uaW5nIGF0IGhpZ2hlciB6b29tc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHpvb21EaWYgPSAoMTAgLSB6b29tKSAvICgxMCAtIHNsb3dTcGluWm9vbSAqIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlUGVyU2Vjb25kICo9IHpvb21EaWY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY291bnRyeSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZVBlclNlY29uZCA9IGRpc3RhbmNlUGVyU2Vjb25kIC8gMzA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsYXRQZXJTZWNvbmQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHpvb20gPiBzbG93U3Bpblpvb20gKiAxLjc1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2xvdyBzcGlubmluZyBhdCBoaWdoZXIgem9vbXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB6b29tRGlmID0gKDEwIC0gem9vbSkgLyAoMTAgLSBzbG93U3Bpblpvb20gKiAyLjUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlUGVyU2Vjb25kICo9IHpvb21EaWY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh6b29tID4gc2xvd1NwaW5ab29tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2xvdyBzcGlubmluZyBhdCBoaWdoZXIgem9vbXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB6b29tRGlmID0gKG1heFNwaW5ab29tIC0gem9vbSkgLyAobWF4U3Bpblpvb20gLSBzbG93U3Bpblpvb20pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlUGVyU2Vjb25kICo9IHpvb21EaWY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2VudGVyLmxuZyAtPSBkaXN0YW5jZVBlclNlY29uZDtcbiAgICAgICAgICAgICAgICAvLyBjZW50ZXIubGF0ICs9IGxhdFBlclNlY29uZDtcbiAgICAgICAgICAgICAgICAvLyBpZiAoY2VudGVyLmxhdCA+PSA0NSkge1xuICAgICAgICAgICAgICAgIC8vICAgICBzaWduID0gLTE7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIC8vIGlmIChjZW50ZXIubGF0IDw9IC0xNSkge1xuICAgICAgICAgICAgICAgIC8vICAgICBzaWduID0gMTtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgLy8gU21vb3RobHkgYW5pbWF0ZSB0aGUgbWFwIG92ZXIgb25lIHNlY29uZC5cbiAgICAgICAgICAgICAgICAvLyBXaGVuIHRoaXMgYW5pbWF0aW9uIGlzIGNvbXBsZXRlLCBpdCBjYWxscyBhICdtb3ZlZW5kJyBldmVudC5cbiAgICAgICAgICAgICAgICBtYXAuZWFzZVRvKHtjZW50ZXIsIGR1cmF0aW9uOiAxMDAwLCBlYXNpbmc6IChuKSA9PiBufSwge1xuICAgICAgICAgICAgICAgICAgICBtb2RlOiAnc3Bpbkdsb2JlJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBhdXNlIHNwaW5uaW5nIG9uIGludGVyYWN0aW9uXG4gICAgICAgIG1hcC5vbignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgdXNlckludGVyYWN0aW5nID0gdHJ1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUmVzdGFydCBzcGlubmluZyB0aGUgZ2xvYmUgd2hlbiBpbnRlcmFjdGlvbiBpcyBjb21wbGV0ZVxuICAgICAgICBtYXAub24oJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgICAgICAgICB1c2VySW50ZXJhY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHNwaW5HbG9iZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUaGVzZSBldmVudHMgYWNjb3VudCBmb3IgY2FzZXMgd2hlcmUgdGhlIG1vdXNlIGhhcyBtb3ZlZFxuICAgICAgICAvLyBvZmYgdGhlIG1hcCwgc28gJ21vdXNldXAnIHdpbGwgbm90IGJlIGZpcmVkLlxuICAgICAgICBtYXAub24oJ2RyYWdlbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICB1c2VySW50ZXJhY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIG1vZGUgPSAnZnJlZSc7XG4gICAgICAgICAgICBzcGluR2xvYmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG1hcC5vbignem9vbWVuZCcsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB6b29tID0gbWFwLmdldFpvb20oKTtcbiAgICAgICAgICAgIGlmICh6b29tIDwgMykge1xuICAgICAgICAgICAgICAgIG1hcC5zZXRMYXlvdXRQcm9wZXJ0eSgnbWFya2VyLWRjcy1waWxsLWdsb2JlLWxheWVyJywgJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuICAgICAgICAgICAgICAgIG1hcC5zZXRMYXlvdXRQcm9wZXJ0eSgnbWFya2VyLWRjcy1waW4tZ2xvYmUtbGF5ZXInLCAndmlzaWJpbGl0eScsICdub25lJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWFwLnNldExheW91dFByb3BlcnR5KCdtYXJrZXItZGNzLXBpbGwtZ2xvYmUtbGF5ZXInLCAndmlzaWJpbGl0eScsICdub25lJyk7XG4gICAgICAgICAgICAgICAgbWFwLnNldExheW91dFByb3BlcnR5KCdtYXJrZXItZGNzLXBpbi1nbG9iZS1sYXllcicsICd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZS5tb2RlKSB7XG4gICAgICAgICAgICAgICAgbW9kZSA9ICdmcmVlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uRmx5ID0gZmFsc2U7XG4gICAgICAgICAgICBzcGluR2xvYmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gV2hlbiBhbmltYXRpb24gaXMgY29tcGxldGUsIHN0YXJ0IHNwaW5uaW5nIGlmIHRoZXJlIGlzIG5vIG9uZ29pbmcgaW50ZXJhY3Rpb25cbiAgICAgICAgbWFwLm9uKCdtb3ZlZW5kJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLm1vZGUgJiYgZS5tb2RlID09PSAnc3Bpbkdsb2JlJykge1xuICAgICAgICAgICAgICAgIHNwaW5HbG9iZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG8pIHtcbiAgICAgICAgICAgICAgICAgICAgJChbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIjXCIgKyBzY3JvbGxUbykub2Zmc2V0KCkudG9wIC0gMTUwLFxuICAgICAgICAgICAgICAgICAgICB9LCAwLCAnc3dpbmcnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUbyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUaW1lID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwaW5HbG9iZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3Bpbkdsb2JlKCk7XG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogR3Vlc3NpbmcgdGhlIGNvbnRpbmVudCB0byBkaXNwbGF5IGJhc2VkIG9uIHRoZSBjb3VudHJ5IGNvZGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEFGOiBBZnJpY2FcbiAgICAgICAgICogQU46IEFudGFydGlkZVxuICAgICAgICAgKiBBUzogQXNpYVxuICAgICAgICAgKiBFVTogRXVyb3BhXG4gICAgICAgICAqIE5BOiBOb3JkIEFtZXJpY2FcbiAgICAgICAgICogT0M6IE9jZWFuaWFcbiAgICAgICAgICogU0E6IFN1ZCBBbWVyaWNhXG4gICAgICAgICAqL1xuICAgICAgICBsZXQgc3RhcnRpbmdDb250aW5lbnQgPSAnRVUnO1xuICAgICAgICBjb25zdCBjb250aW5lbnRCeUNvdW50cnlDb2RlID0ge1xuICAgICAgICAgICAgQUY6ICdBUycsXG4gICAgICAgICAgICBBTDogJ0VVJyxcbiAgICAgICAgICAgIEFROiAnQU4nLFxuICAgICAgICAgICAgRFo6ICdBRicsXG4gICAgICAgICAgICBBUzogJ09DJyxcbiAgICAgICAgICAgIEFEOiAnRVUnLFxuICAgICAgICAgICAgQU86ICdBRicsXG4gICAgICAgICAgICBBRzogJ05BJyxcbiAgICAgICAgICAgIEFaOiAnQVMnLFxuICAgICAgICAgICAgQVI6ICdTQScsXG4gICAgICAgICAgICBBVTogJ09DJyxcbiAgICAgICAgICAgIEFUOiAnRVUnLFxuICAgICAgICAgICAgQlM6ICdOQScsXG4gICAgICAgICAgICBCSDogJ0FTJyxcbiAgICAgICAgICAgIEJEOiAnQVMnLFxuICAgICAgICAgICAgQU06ICdBUycsXG4gICAgICAgICAgICBCQjogJ05BJyxcbiAgICAgICAgICAgIEJFOiAnRVUnLFxuICAgICAgICAgICAgQk06ICdOQScsXG4gICAgICAgICAgICBCVDogJ0FTJyxcbiAgICAgICAgICAgIEJPOiAnU0EnLFxuICAgICAgICAgICAgQkE6ICdFVScsXG4gICAgICAgICAgICBCVzogJ0FGJyxcbiAgICAgICAgICAgIEJWOiAnQU4nLFxuICAgICAgICAgICAgQlI6ICdTQScsXG4gICAgICAgICAgICBCWjogJ05BJyxcbiAgICAgICAgICAgIElPOiAnQUYnLFxuICAgICAgICAgICAgU0I6ICdPQycsXG4gICAgICAgICAgICBWRzogJ05BJyxcbiAgICAgICAgICAgIEJOOiAnQVMnLFxuICAgICAgICAgICAgQkc6ICdFVScsXG4gICAgICAgICAgICBNTTogJ0FTJyxcbiAgICAgICAgICAgIEJJOiAnQUYnLFxuICAgICAgICAgICAgQlk6ICdFVScsXG4gICAgICAgICAgICBLSDogJ0FTJyxcbiAgICAgICAgICAgIENNOiAnQUYnLFxuICAgICAgICAgICAgQ0E6ICdOQScsXG4gICAgICAgICAgICBDVjogJ0FGJyxcbiAgICAgICAgICAgIEtZOiAnTkEnLFxuICAgICAgICAgICAgQ0Y6ICdBRicsXG4gICAgICAgICAgICBMSzogJ0FTJyxcbiAgICAgICAgICAgIFREOiAnQUYnLFxuICAgICAgICAgICAgQ0w6ICdTQScsXG4gICAgICAgICAgICBDTjogJ0FTJyxcbiAgICAgICAgICAgIFRXOiAnQVMnLFxuICAgICAgICAgICAgQ1g6ICdBUycsXG4gICAgICAgICAgICBDQzogJ0FTJyxcbiAgICAgICAgICAgIENPOiAnU0EnLFxuICAgICAgICAgICAgS006ICdBRicsXG4gICAgICAgICAgICBZVDogJ0FGJyxcbiAgICAgICAgICAgIENHOiAnQUYnLFxuICAgICAgICAgICAgQ0Q6ICdBRicsXG4gICAgICAgICAgICBDSzogJ09DJyxcbiAgICAgICAgICAgIENSOiAnTkEnLFxuICAgICAgICAgICAgSFI6ICdFVScsXG4gICAgICAgICAgICBDVTogJ05BJyxcbiAgICAgICAgICAgIENZOiAnRVUnLFxuICAgICAgICAgICAgQ1o6ICdFVScsXG4gICAgICAgICAgICBCSjogJ0FGJyxcbiAgICAgICAgICAgIERLOiAnRVUnLFxuICAgICAgICAgICAgRE06ICdOQScsXG4gICAgICAgICAgICBETzogJ05BJyxcbiAgICAgICAgICAgIEVDOiAnU0EnLFxuICAgICAgICAgICAgU1Y6ICdOQScsXG4gICAgICAgICAgICBHUTogJ0FGJyxcbiAgICAgICAgICAgIEVUOiAnQUYnLFxuICAgICAgICAgICAgRVI6ICdBRicsXG4gICAgICAgICAgICBFRTogJ0VVJyxcbiAgICAgICAgICAgIEZPOiAnRVUnLFxuICAgICAgICAgICAgRks6ICdTQScsXG4gICAgICAgICAgICBHUzogJ0FOJyxcbiAgICAgICAgICAgIEZKOiAnT0MnLFxuICAgICAgICAgICAgRkk6ICdFVScsXG4gICAgICAgICAgICBBWDogJ0VVJyxcbiAgICAgICAgICAgIEZSOiAnRVUnLFxuICAgICAgICAgICAgR0Y6ICdTQScsXG4gICAgICAgICAgICBQRjogJ09DJyxcbiAgICAgICAgICAgIFRGOiAnQUYnLFxuICAgICAgICAgICAgREo6ICdBRicsXG4gICAgICAgICAgICBHQTogJ0FGJyxcbiAgICAgICAgICAgIEdFOiAnQVMnLFxuICAgICAgICAgICAgR006ICdBRicsXG4gICAgICAgICAgICBERTogJ0VVJyxcbiAgICAgICAgICAgIEdIOiAnQUYnLFxuICAgICAgICAgICAgR0k6ICdFVScsXG4gICAgICAgICAgICBLSTogJ09DJyxcbiAgICAgICAgICAgIEdSOiAnRVUnLFxuICAgICAgICAgICAgR0w6ICdOQScsXG4gICAgICAgICAgICBHRDogJ05BJyxcbiAgICAgICAgICAgIEdQOiAnTkEnLFxuICAgICAgICAgICAgR1U6ICdPQycsXG4gICAgICAgICAgICBHVDogJ05BJyxcbiAgICAgICAgICAgIEdOOiAnQUYnLFxuICAgICAgICAgICAgR1k6ICdTQScsXG4gICAgICAgICAgICBIVDogJ05BJyxcbiAgICAgICAgICAgIEhNOiAnQU4nLFxuICAgICAgICAgICAgVkE6ICdFVScsXG4gICAgICAgICAgICBITjogJ05BJyxcbiAgICAgICAgICAgIEhLOiAnQVMnLFxuICAgICAgICAgICAgSFU6ICdFVScsXG4gICAgICAgICAgICBJUzogJ0VVJyxcbiAgICAgICAgICAgIElOOiAnQVMnLFxuICAgICAgICAgICAgSUQ6ICdBUycsXG4gICAgICAgICAgICBJUjogJ0FTJyxcbiAgICAgICAgICAgIElROiAnQVMnLFxuICAgICAgICAgICAgSUU6ICdFVScsXG4gICAgICAgICAgICBJTDogJ0FTJyxcbiAgICAgICAgICAgIElUOiAnRVUnLFxuICAgICAgICAgICAgQ0k6ICdBRicsXG4gICAgICAgICAgICBKTTogJ05BJyxcbiAgICAgICAgICAgIEpQOiAnQVMnLFxuICAgICAgICAgICAgS1o6ICdBUycsXG4gICAgICAgICAgICBKTzogJ0FTJyxcbiAgICAgICAgICAgIEtFOiAnQUYnLFxuICAgICAgICAgICAgS1A6ICdBUycsXG4gICAgICAgICAgICBLUjogJ0FTJyxcbiAgICAgICAgICAgIFhLOiAnRVUnLFxuICAgICAgICAgICAgS1c6ICdBUycsXG4gICAgICAgICAgICBLRzogJ0FTJyxcbiAgICAgICAgICAgIExBOiAnQVMnLFxuICAgICAgICAgICAgTEI6ICdBUycsXG4gICAgICAgICAgICBMUzogJ0FGJyxcbiAgICAgICAgICAgIExWOiAnRVUnLFxuICAgICAgICAgICAgTFI6ICdBRicsXG4gICAgICAgICAgICBMWTogJ0FGJyxcbiAgICAgICAgICAgIExJOiAnRVUnLFxuICAgICAgICAgICAgTFQ6ICdFVScsXG4gICAgICAgICAgICBMVTogJ0VVJyxcbiAgICAgICAgICAgIE1POiAnQVMnLFxuICAgICAgICAgICAgTUc6ICdBRicsXG4gICAgICAgICAgICBNVzogJ0FGJyxcbiAgICAgICAgICAgIE1ZOiAnQVMnLFxuICAgICAgICAgICAgTVY6ICdBUycsXG4gICAgICAgICAgICBNTDogJ0FGJyxcbiAgICAgICAgICAgIE1UOiAnRVUnLFxuICAgICAgICAgICAgTVE6ICdOQScsXG4gICAgICAgICAgICBNUjogJ0FGJyxcbiAgICAgICAgICAgIE1VOiAnQUYnLFxuICAgICAgICAgICAgTVg6ICdOQScsXG4gICAgICAgICAgICBNQzogJ0VVJyxcbiAgICAgICAgICAgIE1OOiAnQVMnLFxuICAgICAgICAgICAgTUQ6ICdFVScsXG4gICAgICAgICAgICBNRTogJ0VVJyxcbiAgICAgICAgICAgIE1TOiAnTkEnLFxuICAgICAgICAgICAgTUE6ICdBRicsXG4gICAgICAgICAgICBNWjogJ0FGJyxcbiAgICAgICAgICAgIE9NOiAnQVMnLFxuICAgICAgICAgICAgTkE6ICdBRicsXG4gICAgICAgICAgICBOUjogJ09DJyxcbiAgICAgICAgICAgIE5QOiAnQVMnLFxuICAgICAgICAgICAgTkw6ICdFVScsXG4gICAgICAgICAgICBDVzogJ05BJyxcbiAgICAgICAgICAgIEFXOiAnTkEnLFxuICAgICAgICAgICAgU1g6ICdOQScsXG4gICAgICAgICAgICBCUTogJ05BJyxcbiAgICAgICAgICAgIE5DOiAnT0MnLFxuICAgICAgICAgICAgVlU6ICdPQycsXG4gICAgICAgICAgICBOWjogJ09DJyxcbiAgICAgICAgICAgIE5JOiAnTkEnLFxuICAgICAgICAgICAgTkU6ICdBRicsXG4gICAgICAgICAgICBORzogJ0FGJyxcbiAgICAgICAgICAgIE5VOiAnT0MnLFxuICAgICAgICAgICAgTkY6ICdPQycsXG4gICAgICAgICAgICBOTzogJ0VVJyxcbiAgICAgICAgICAgIE1QOiAnT0MnLFxuICAgICAgICAgICAgVU06ICdOQScsXG4gICAgICAgICAgICBGTTogJ09DJyxcbiAgICAgICAgICAgIE1IOiAnT0MnLFxuICAgICAgICAgICAgUFc6ICdPQycsXG4gICAgICAgICAgICBQSzogJ0FTJyxcbiAgICAgICAgICAgIFBTOiAnQVMnLFxuICAgICAgICAgICAgUEE6ICdOQScsXG4gICAgICAgICAgICBQRzogJ09DJyxcbiAgICAgICAgICAgIFBZOiAnU0EnLFxuICAgICAgICAgICAgUEU6ICdTQScsXG4gICAgICAgICAgICBQSDogJ0FTJyxcbiAgICAgICAgICAgIFBOOiAnT0MnLFxuICAgICAgICAgICAgUEw6ICdFVScsXG4gICAgICAgICAgICBQVDogJ0VVJyxcbiAgICAgICAgICAgIEdXOiAnQUYnLFxuICAgICAgICAgICAgVEw6ICdBUycsXG4gICAgICAgICAgICBQUjogJ05BJyxcbiAgICAgICAgICAgIFFBOiAnQVMnLFxuICAgICAgICAgICAgUkU6ICdBRicsXG4gICAgICAgICAgICBSTzogJ0VVJyxcbiAgICAgICAgICAgIFJVOiAnRVUnLFxuICAgICAgICAgICAgUlc6ICdBRicsXG4gICAgICAgICAgICBCTDogJ05BJyxcbiAgICAgICAgICAgIFNIOiAnQUYnLFxuICAgICAgICAgICAgS046ICdOQScsXG4gICAgICAgICAgICBBSTogJ05BJyxcbiAgICAgICAgICAgIExDOiAnTkEnLFxuICAgICAgICAgICAgTUY6ICdOQScsXG4gICAgICAgICAgICBQTTogJ05BJyxcbiAgICAgICAgICAgIFZDOiAnTkEnLFxuICAgICAgICAgICAgU006ICdFVScsXG4gICAgICAgICAgICBTVDogJ0FGJyxcbiAgICAgICAgICAgIFNBOiAnQVMnLFxuICAgICAgICAgICAgU046ICdBRicsXG4gICAgICAgICAgICBSUzogJ0VVJyxcbiAgICAgICAgICAgIFNDOiAnQUYnLFxuICAgICAgICAgICAgU0w6ICdBRicsXG4gICAgICAgICAgICBTRzogJ0FTJyxcbiAgICAgICAgICAgIFNLOiAnRVUnLFxuICAgICAgICAgICAgVk46ICdBUycsXG4gICAgICAgICAgICBTSTogJ0VVJyxcbiAgICAgICAgICAgIFNPOiAnQUYnLFxuICAgICAgICAgICAgWkE6ICdBRicsXG4gICAgICAgICAgICBaVzogJ0FGJyxcbiAgICAgICAgICAgIEVTOiAnRVUnLFxuICAgICAgICAgICAgU1M6ICdBRicsXG4gICAgICAgICAgICBTRDogJ0FGJyxcbiAgICAgICAgICAgIEVIOiAnQUYnLFxuICAgICAgICAgICAgU1I6ICdTQScsXG4gICAgICAgICAgICBTSjogJ0VVJyxcbiAgICAgICAgICAgIFNaOiAnQUYnLFxuICAgICAgICAgICAgU0U6ICdFVScsXG4gICAgICAgICAgICBDSDogJ0VVJyxcbiAgICAgICAgICAgIFNZOiAnQVMnLFxuICAgICAgICAgICAgVEo6ICdBUycsXG4gICAgICAgICAgICBUSDogJ0FTJyxcbiAgICAgICAgICAgIFRHOiAnQUYnLFxuICAgICAgICAgICAgVEs6ICdPQycsXG4gICAgICAgICAgICBUTzogJ09DJyxcbiAgICAgICAgICAgIFRUOiAnTkEnLFxuICAgICAgICAgICAgQUU6ICdBUycsXG4gICAgICAgICAgICBUTjogJ0FGJyxcbiAgICAgICAgICAgIFRSOiAnRVUnLFxuICAgICAgICAgICAgVE06ICdBUycsXG4gICAgICAgICAgICBUQzogJ05BJyxcbiAgICAgICAgICAgIFRWOiAnT0MnLFxuICAgICAgICAgICAgVUc6ICdBRicsXG4gICAgICAgICAgICBVQTogJ0VVJyxcbiAgICAgICAgICAgIE1LOiAnRVUnLFxuICAgICAgICAgICAgRUc6ICdBRicsXG4gICAgICAgICAgICBHQjogJ0VVJyxcbiAgICAgICAgICAgIEdHOiAnRVUnLFxuICAgICAgICAgICAgSkU6ICdFVScsXG4gICAgICAgICAgICBJTTogJ0VVJyxcbiAgICAgICAgICAgIFRaOiAnQUYnLFxuICAgICAgICAgICAgVVM6ICdOQScsXG4gICAgICAgICAgICBWSTogJ05BJyxcbiAgICAgICAgICAgIEJGOiAnQUYnLFxuICAgICAgICAgICAgVVk6ICdTQScsXG4gICAgICAgICAgICBVWjogJ0FTJyxcbiAgICAgICAgICAgIFZFOiAnU0EnLFxuICAgICAgICAgICAgV0Y6ICdPQycsXG4gICAgICAgICAgICBXUzogJ09DJyxcbiAgICAgICAgICAgIFlFOiAnQVMnLFxuICAgICAgICAgICAgWk06ICdBRicsXG4gICAgICAgICAgICBYRDogJ0FTJyxcbiAgICAgICAgICAgIFhTOiAnQVMnLFxuICAgICAgICAgICAgWFg6ICdPQycsXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gR2V0dGluZyB0aGUgbG9jYWxlcyBhbmQgbG9va2luZyBmb3IgdGhlIHJlZ2lvbi5cbiAgICAgICAgY29uc29sZS5sb2cobG9jYXRpb24uaGFzaCk7XG5cbiAgICAgICAgaWYgKGxvY2F0aW9uLmhhc2gpIHtcbiAgICAgICAgICAgIHN0YXJ0aW5nQ29udGluZW50ID0gbG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5sYW5ndWFnZXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgbGFuZ3VhZ2VDb2RlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5hdmlnYXRvci5sYW5ndWFnZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5sYW5ndWFnZXNbal0ubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2VDb2RlID0gbmF2aWdhdG9yLmxhbmd1YWdlc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGxhbmd1YWdlQ29kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdpb24gPSBsYW5ndWFnZUNvZGUuc3BsaXQoJy0nKVsxXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVnaW9uICYmIGNvbnRpbmVudEJ5Q291bnRyeUNvZGVbcmVnaW9uLnRvVXBwZXJDYXNlKCldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydGluZ0NvbnRpbmVudCA9IGNvbnRpbmVudEJ5Q291bnRyeUNvZGVbcmVnaW9uLnRvVXBwZXJDYXNlKCldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGFydGluZ0NvbnRpbmVudCA9ICdFVSc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZWxlY3RpbmcgdGhlIGZpcnN0IHRhYi9hY2NvcmRpb24uXG4gICAgICAgIGNvbnN0ICR0YWIgPSAkKCcjJyArIHN0YXJ0aW5nQ29udGluZW50ICsgJy10YWInKTtcbiAgICAgICAgJHRhYi50YWIoJ3Nob3cnKTtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvbkNvbGxhcHNlID0gJCgnIycgKyBzdGFydGluZ0NvbnRpbmVudCArICctY29sbGFwc2UnKTtcbiAgICAgICAgJGFjY29yZGlvbkNvbGxhcHNlLmNvbGxhcHNlKCdzaG93Jyk7XG4gICAgfSk7XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJtYXBib3hnbCIsIk9wZW5yb3V0ZXNlcnZpY2UiLCJzZWFyb3V0ZU9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYWNjZXB0Iiwib3JzQ2xpZW50IiwiRGlyZWN0aW9ucyIsImFwaV9rZXkiLCJyZXF1aXJlIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJhY2Nlc3NUb2tlbiIsIm1hcF9jZW50ZXIiLCJjZW50ZXJPZmZpY2UiLCJsYXRMbmciLCJjb29yZGluYXRlcyIsIm1hcF96b29tIiwibWFwX3Njcm9sbF96b29tIiwiZGF0YSIsInVuZGVmaW5lZCIsIm1hcCIsIk1hcCIsImNvbnRhaW5lciIsInpvb20iLCJjZW50ZXIiLCJwcm9qZWN0aW9uIiwic2Nyb2xsWm9vbSIsInJvdXRlQSIsInJvdXRlcyIsInJvdXRlUiIsIm9yaWdpbk5hbWUiLCJkZXN0aW5hdGlvbk5hbWUiLCJyZXR1cm5Sb3V0ZSIsImlkIiwib24iLCJzY3JvbGxUbyIsInNjcm9sbFRpbWUiLCJzZXRXaGVlbFpvb21SYXRlIiwic2V0Rm9nIiwiYWRkU291cmNlIiwic2V0VGVycmFpbiIsImljb25zIiwiYWlycGxhbmUiLCJ0cnVjayIsInNoaXAiLCJsb2FkSW1hZ2UiLCJlcnJvciIsImltYWdlIiwiY29uc29sZSIsImFkZEltYWdlIiwibiIsImlzTW9iaWxlIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm1heEl0ZXJhdGlvbnMiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJzdGFydEFuaW1hdGlvbiIsImNsZWFySW50ZXJ2YWwiLCJjb3VudHJpZXMiLCJnZW9qc29uT2ZmaWNlIiwidHlwZSIsImZlYXR1cmVzIiwiY291bnRyaWVzTGVuZ3RoIiwib2ZmaWNlc0xlbmd0aCIsIm9mZmljZSIsIm9mZmljZXMiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJwdXNoIiwiZ2VvbWV0cnkiLCJwcm9wZXJ0aWVzIiwib2ZmaWNlX2lkIiwib2ZmaWNlX2ljb24iLCJjb3VudHJ5IiwibG5nIiwibGF0IiwiZ2VvanNvbkdsb2JlIiwiY291bnRlciIsImpRdWVyeSIsImVhY2giLCJvYmoiLCJ0b0xvd2VyQ2FzZSIsIm9mZmljZV9jb3VudCIsInRvU3RyaW5nIiwib2ZmaWNlX2NvdW50cnkiLCJjb3VudHJpZXNJbnRlcnZhbCIsImxvZyIsImFkZExheWVyIiwiZSIsInZhbHVlIiwiaGlkZSIsIm1hcmtlcnMiLCJsbGIiLCJMbmdMYXRCb3VuZHMiLCJleHRlbmQiLCJsZW5ndGgiLCJzaG93IiwibW9kZSIsIm9uRmx5IiwiZml0Qm91bmRzIiwicGFkZGluZyIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsImZseVRvIiwib2ZmaWNlc0ludGVydmFsIiwic2V0TGF5b3V0UHJvcGVydHkiLCJjbGljayIsIiRmaWx0ZXIiLCJmaWx0ZXIiLCJib3VuZCIsIiR0YWIiLCJ0YWIiLCIkYWNjb3JkaW9uQ29sbGFwc2UiLCJjb2xsYXBzZSIsIl9uZSIsIl9zdyIsIm9mZmljZUlkIiwibGluayIsImJlYXJpbmciLCJwaXRjaCIsImxvY2F0aW9uIiwiayIsImV4Y2x1ZGVJZCIsImxpbmVEaXN0YW5jZSIsInJvdXRlU3RhcnQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJydW4iLCJyb3V0ZV9pZCIsImljb24iLCJnZW9qc29uIiwib3JpZ2luIiwibG9uIiwicG9pbnQiLCJhcGkiLCJ0dXJmIiwicm91dGluZyIsImRlc3RpbmF0aW9uQSIsImRlc3RpbmF0aW9uIiwiZGVzdGluYXRpb25CIiwicm91dGVCIiwiZGVzdGluYXRpb25DIiwicm91dGVDIiwiZGVsdGFMbmciLCJBIiwiYWJzIiwiQiIsIkMiLCJyb3V0ZSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJhZGRSb3V0ZSIsImNhdGNoIiwiZXJyIiwicmVzcG9uc2UiLCJjYWxjdWxhdGUiLCJwcm9maWxlIiwiYXZvaWRhYmxlcyIsImZvcm1hdCIsInN0ZXBzIiwiYXJjIiwiaSIsInNlZ21lbnQiLCJhbG9uZyIsImFyYzIiLCJydW5uaW5nIiwiYW5pbWF0ZSIsInN0YXJ0IiwiZW5kIiwicmVtb3ZlTGF5ZXIiLCJnZXRTb3VyY2UiLCJzZXREYXRhIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicG9zdCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsInNlY29uZHNQZXJSZXZvbHV0aW9uIiwibWF4U3Bpblpvb20iLCJzbG93U3Bpblpvb20iLCJ1c2VySW50ZXJhY3RpbmciLCJzcGluRW5hYmxlZCIsInNpZ24iLCJzcGluR2xvYmUiLCJnZXRab29tIiwiZGlzdGFuY2VQZXJTZWNvbmQiLCJnZXRDZW50ZXIiLCJ6b29tRGlmIiwiZWFzZVRvIiwiZHVyYXRpb24iLCJlYXNpbmciLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5Iiwic2Nyb2xsVG9wIiwib2Zmc2V0Iiwic3RhcnRpbmdDb250aW5lbnQiLCJjb250aW5lbnRCeUNvdW50cnlDb2RlIiwiQUYiLCJBTCIsIkFRIiwiRFoiLCJBUyIsIkFEIiwiQU8iLCJBRyIsIkFaIiwiQVIiLCJBVSIsIkFUIiwiQlMiLCJCSCIsIkJEIiwiQU0iLCJCQiIsIkJFIiwiQk0iLCJCVCIsIkJPIiwiQkEiLCJCVyIsIkJWIiwiQlIiLCJCWiIsIklPIiwiU0IiLCJWRyIsIkJOIiwiQkciLCJNTSIsIkJJIiwiQlkiLCJLSCIsIkNNIiwiQ0EiLCJDViIsIktZIiwiQ0YiLCJMSyIsIlREIiwiQ0wiLCJDTiIsIlRXIiwiQ1giLCJDQyIsIkNPIiwiS00iLCJZVCIsIkNHIiwiQ0QiLCJDSyIsIkNSIiwiSFIiLCJDVSIsIkNZIiwiQ1oiLCJCSiIsIkRLIiwiRE0iLCJETyIsIkVDIiwiU1YiLCJHUSIsIkVUIiwiRVIiLCJFRSIsIkZPIiwiRksiLCJHUyIsIkZKIiwiRkkiLCJBWCIsIkZSIiwiR0YiLCJQRiIsIlRGIiwiREoiLCJHQSIsIkdFIiwiR00iLCJERSIsIkdIIiwiR0kiLCJLSSIsIkdSIiwiR0wiLCJHRCIsIkdQIiwiR1UiLCJHVCIsIkdOIiwiR1kiLCJIVCIsIkhNIiwiVkEiLCJITiIsIkhLIiwiSFUiLCJJUyIsIklOIiwiSUQiLCJJUiIsIklRIiwiSUUiLCJJTCIsIklUIiwiQ0kiLCJKTSIsIkpQIiwiS1oiLCJKTyIsIktFIiwiS1AiLCJLUiIsIlhLIiwiS1ciLCJLRyIsIkxBIiwiTEIiLCJMUyIsIkxWIiwiTFIiLCJMWSIsIkxJIiwiTFQiLCJMVSIsIk1PIiwiTUciLCJNVyIsIk1ZIiwiTVYiLCJNTCIsIk1UIiwiTVEiLCJNUiIsIk1VIiwiTVgiLCJNQyIsIk1OIiwiTUQiLCJNRSIsIk1TIiwiTUEiLCJNWiIsIk9NIiwiTkEiLCJOUiIsIk5QIiwiTkwiLCJDVyIsIkFXIiwiU1giLCJCUSIsIk5DIiwiVlUiLCJOWiIsIk5JIiwiTkUiLCJORyIsIk5VIiwiTkYiLCJOTyIsIk1QIiwiVU0iLCJGTSIsIk1IIiwiUFciLCJQSyIsIlBTIiwiUEEiLCJQRyIsIlBZIiwiUEUiLCJQSCIsIlBOIiwiUEwiLCJQVCIsIkdXIiwiVEwiLCJQUiIsIlFBIiwiUkUiLCJSTyIsIlJVIiwiUlciLCJCTCIsIlNIIiwiS04iLCJBSSIsIkxDIiwiTUYiLCJQTSIsIlZDIiwiU00iLCJTVCIsIlNBIiwiU04iLCJSUyIsIlNDIiwiU0wiLCJTRyIsIlNLIiwiVk4iLCJTSSIsIlNPIiwiWkEiLCJaVyIsIkVTIiwiU1MiLCJTRCIsIkVIIiwiU1IiLCJTSiIsIlNaIiwiU0UiLCJDSCIsIlNZIiwiVEoiLCJUSCIsIlRHIiwiVEsiLCJUTyIsIlRUIiwiQUUiLCJUTiIsIlRSIiwiVE0iLCJUQyIsIlRWIiwiVUciLCJVQSIsIk1LIiwiRUciLCJHQiIsIkdHIiwiSkUiLCJJTSIsIlRaIiwiVVMiLCJWSSIsIkJGIiwiVVkiLCJVWiIsIlZFIiwiV0YiLCJXUyIsIllFIiwiWk0iLCJYRCIsIlhTIiwiWFgiLCJoYXNoIiwicmVwbGFjZSIsIm5hdmlnYXRvciIsImxhbmd1YWdlcyIsImxhbmd1YWdlQ29kZSIsImoiLCJyZWdpb24iLCJzcGxpdCIsInRvVXBwZXJDYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==