"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["frontend-officePage"],{

/***/ "./assets/js/frontend/officePage.js":
/*!******************************************!*\
  !*** ./assets/js/frontend/officePage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mapbox_gl_dist_mapbox_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mapbox-gl/dist/mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl_dist_mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl_dist_mapbox_gl__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js");
__webpack_require__(/*! ../../scss/frontend/officePage.scss */ "./assets/scss/frontend/officePage.scss");

__webpack_require__(/*! mapbox-gl/dist/mapbox-gl.css */ "./node_modules/mapbox-gl/dist/mapbox-gl.css");
$(document).ready(function () {
  (mapbox_gl_dist_mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default().accessToken) = 'pk.eyJ1Ijoib2ltbWVpIiwiYSI6ImNsd2l6N2RydjBwdTIya293aTkyMmgxNmsifQ.n9BMEe1VINjZWpDBthzWSA';
  $('#contact_requestType').change(function () {
    $('#contact_requestType option[value=""]').remove();
  });
  const office = $('#office-page-map').data('office');
  const officePageMap = new (mapbox_gl_dist_mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default().Map)({
    container: 'office-page-map',
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    // style: 'mapbox://styles/mapbox/outdoors-v12',
    zoom: 16,
    center: [office.latLng.coordinates[0], office.latLng.coordinates[1]],
    projection: 'globe',
    scrollZoom: false
  });
  const el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new (mapbox_gl_dist_mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default().Marker)(el).setLngLat([office.latLng.coordinates[0], office.latLng.coordinates[1]]).addTo(officePageMap);
});

/***/ }),

/***/ "./assets/scss/frontend/officePage.scss":
/*!**********************************************!*\
  !*** ./assets/scss/frontend/officePage.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_src_exports_global_js-node_modules_jquery_src_jquery_js","vendors-node_modules_mapbox-gl_dist_mapbox-gl_js-node_modules_mapbox-gl_dist_mapbox-gl_css"], () => (__webpack_exec__("./assets/js/frontend/officePage.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQtb2ZmaWNlUGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUFBLG1CQUFPLENBQUMsbUZBQXFDLENBQUM7QUFFRTtBQUNoREEsbUJBQU8sQ0FBQyxpRkFBOEIsQ0FBQztBQUV2Q0UsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLFlBQVk7RUFDMUJILDZFQUFvQixHQUFHLDBGQUEwRjtFQUVqSEMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNJLE1BQU0sQ0FBQyxZQUFZO0lBQ3pDSixDQUFDLENBQUMsdUNBQXVDLENBQUMsQ0FBQ0ssTUFBTSxDQUFDLENBQUM7RUFDdkQsQ0FBQyxDQUFDO0VBRUYsTUFBTUMsTUFBTSxHQUFHTixDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQ08sSUFBSSxDQUFDLFFBQVEsQ0FBQztFQUVuRCxNQUFNQyxhQUFhLEdBQUcsSUFBSVQscUVBQVksQ0FBQztJQUNuQ1csU0FBUyxFQUFFLGlCQUFpQjtJQUM1QjtJQUNBO0lBQ0FDLElBQUksRUFBRSxFQUFFO0lBQ1JDLE1BQU0sRUFBRSxDQUFDTixNQUFNLENBQUNPLE1BQU0sQ0FBQ0MsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFUixNQUFNLENBQUNPLE1BQU0sQ0FBQ0MsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFQyxVQUFVLEVBQUUsT0FBTztJQUNuQkMsVUFBVSxFQUFFO0VBQ2hCLENBQUMsQ0FBQztFQUVGLE1BQU1DLEVBQUUsR0FBR2hCLFFBQVEsQ0FBQ2lCLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDeENELEVBQUUsQ0FBQ0UsU0FBUyxHQUFHLFFBQVE7O0VBRXZCO0VBQ0EsSUFBSXBCLHdFQUFlLENBQUNrQixFQUFFLENBQUMsQ0FBQ0ksU0FBUyxDQUFDLENBQUNmLE1BQU0sQ0FBQ08sTUFBTSxDQUFDQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUVSLE1BQU0sQ0FBQ08sTUFBTSxDQUFDQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDUSxLQUFLLENBQUNkLGFBQWEsQ0FBQztBQUN4SCxDQUFDLENBQUM7Ozs7Ozs7Ozs7O0FDN0JGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2Zyb250ZW5kL29mZmljZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Njc3MvZnJvbnRlbmQvb2ZmaWNlUGFnZS5zY3NzPzhmMTAiXSwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnLi4vLi4vc2Nzcy9mcm9udGVuZC9vZmZpY2VQYWdlLnNjc3MnKTtcblxuaW1wb3J0IG1hcGJveGdsIGZyb20gJ21hcGJveC1nbC9kaXN0L21hcGJveC1nbCc7XG5yZXF1aXJlKCdtYXBib3gtZ2wvZGlzdC9tYXBib3gtZ2wuY3NzJyk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICBtYXBib3hnbC5hY2Nlc3NUb2tlbiA9ICdway5leUoxSWpvaWIybHRiV1ZwSWl3aVlTSTZJbU5zZDJsNk4yUnlkakJ3ZFRJeWEyOTNhVGt5TW1neE5tc2lmUS5uOUJNRWUxVklOalpXcERCdGh6V1NBJztcblxuICAgICQoJyNjb250YWN0X3JlcXVlc3RUeXBlJykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnI2NvbnRhY3RfcmVxdWVzdFR5cGUgb3B0aW9uW3ZhbHVlPVwiXCJdJykucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBvZmZpY2UgPSAkKCcjb2ZmaWNlLXBhZ2UtbWFwJykuZGF0YSgnb2ZmaWNlJyk7XG5cbiAgICBjb25zdCBvZmZpY2VQYWdlTWFwID0gbmV3IG1hcGJveGdsLk1hcCh7XG4gICAgICAgIGNvbnRhaW5lcjogJ29mZmljZS1wYWdlLW1hcCcsXG4gICAgICAgIC8vIENob29zZSBmcm9tIE1hcGJveCdzIGNvcmUgc3R5bGVzLCBvciBtYWtlIHlvdXIgb3duIHN0eWxlIHdpdGggTWFwYm94IFN0dWRpb1xuICAgICAgICAvLyBzdHlsZTogJ21hcGJveDovL3N0eWxlcy9tYXBib3gvb3V0ZG9vcnMtdjEyJyxcbiAgICAgICAgem9vbTogMTYsXG4gICAgICAgIGNlbnRlcjogW29mZmljZS5sYXRMbmcuY29vcmRpbmF0ZXNbMF0sIG9mZmljZS5sYXRMbmcuY29vcmRpbmF0ZXNbMV1dLFxuICAgICAgICBwcm9qZWN0aW9uOiAnZ2xvYmUnLFxuICAgICAgICBzY3JvbGxab29tOiBmYWxzZSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWwuY2xhc3NOYW1lID0gJ21hcmtlcic7XG5cbiAgICAvLyBtYWtlIGEgbWFya2VyIGZvciBlYWNoIGZlYXR1cmUgYW5kIGFkZCB0byB0aGUgbWFwXG4gICAgbmV3IG1hcGJveGdsLk1hcmtlcihlbCkuc2V0TG5nTGF0KFtvZmZpY2UubGF0TG5nLmNvb3JkaW5hdGVzWzBdLCBvZmZpY2UubGF0TG5nLmNvb3JkaW5hdGVzWzFdXSkuYWRkVG8ob2ZmaWNlUGFnZU1hcClcbn0pO1xuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsicmVxdWlyZSIsIm1hcGJveGdsIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJhY2Nlc3NUb2tlbiIsImNoYW5nZSIsInJlbW92ZSIsIm9mZmljZSIsImRhdGEiLCJvZmZpY2VQYWdlTWFwIiwiTWFwIiwiY29udGFpbmVyIiwiem9vbSIsImNlbnRlciIsImxhdExuZyIsImNvb3JkaW5hdGVzIiwicHJvamVjdGlvbiIsInNjcm9sbFpvb20iLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJNYXJrZXIiLCJzZXRMbmdMYXQiLCJhZGRUbyJdLCJzb3VyY2VSb290IjoiIn0=