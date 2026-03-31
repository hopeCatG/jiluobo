(self["webpackChunk"] = self["webpackChunk"] || []).push([["frontend"],{

/***/ "./assets/js/frontend.js":
/*!*******************************!*\
  !*** ./assets/js/frontend.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
__webpack_require__(/*! ../../vendor/oi/ux/assets/scss/spacing.scss */ "./vendor/oi/ux/assets/scss/spacing.scss");
__webpack_require__(/*! ../../vendor/oi/ux/assets/scss/border.scss */ "./vendor/oi/ux/assets/scss/border.scss");
__webpack_require__(/*! ../../vendor/oi/ux/assets/scss/square.scss */ "./vendor/oi/ux/assets/scss/square.scss");
__webpack_require__(/*! ../scss/frontend.scss */ "./assets/scss/frontend.scss");
$(document).ready(function () {
  // reveal section on scroll function. Add class "reveal-section" to activate it on a particular section
  function reveal() {
    var reveals = document.querySelectorAll(".reveal-section");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  reveal();
  window.addEventListener("scroll", reveal);
  $("div.image-1").mouseover(function () {
    $("div.div-principale").removeClass('one two three').addClass('one');
  });
  $("div.image-2").mouseover(function () {
    $("div.div-principale").removeClass('one two three').addClass('two');
  });
  $("div.image-3").mouseover(function () {
    $("div.div-principale").removeClass('one two three').addClass('three');
  });
  $("svg .marker-map").mousemove(function (evt) {
    let country = $(this).data('country');
    let tooltip = $('.map-tooltip[data-tooltip-country="' + country + '"]');
    tooltip.show();
    tooltip.css({
      'left': evt.pageX,
      'top': evt.pageY
    });
  });
  $("svg .marker-map").mouseenter(function (evt) {
    let country = $(this).data('country');
    let tooltip = $('.map-tooltip[data-tooltip-country="' + country + '"]');
    tooltip.show();
    tooltip.css({
      'left': evt.pageX,
      'top': evt.pageY
    });
  });
  $("svg .marker-map").mouseout(function () {
    $('.map-tooltip').hide();
  });
});

/***/ }),

/***/ "./assets/scss/frontend.scss":
/*!***********************************!*\
  !*** ./assets/scss/frontend.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./vendor/oi/ux/assets/scss/border.scss":
/*!**********************************************!*\
  !*** ./vendor/oi/ux/assets/scss/border.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./vendor/oi/ux/assets/scss/spacing.scss":
/*!***********************************************!*\
  !*** ./vendor/oi/ux/assets/scss/spacing.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./vendor/oi/ux/assets/scss/square.scss":
/*!**********************************************!*\
  !*** ./vendor/oi/ux/assets/scss/square.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_src_exports_global_js-node_modules_jquery_src_jquery_js","vendor_oi_ux_assets_scss_spacing_scss"], () => (__webpack_exec__("./assets/js/frontend.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMscUNBQXFDLEdBQUd3QixPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3ZFRSxPQUFPLENBQUNDLElBQUksQ0FBQyxDQUFDO0lBQ2RELE9BQU8sQ0FBQ0UsR0FBRyxDQUFDO01BQ1IsTUFBTSxFQUFFTCxHQUFHLENBQUNNLEtBQUs7TUFDakIsS0FBSyxFQUFFTixHQUFHLENBQUNPO0lBQ2YsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0VBRUY5QixDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ2dDLFFBQVEsQ0FBQyxZQUFZO0lBQ3RDaEMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDaUMsSUFBSSxDQUFDLENBQUM7RUFDNUIsQ0FBQyxDQUFDO0FBR1YsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUN4RUY7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnJvbnRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Njc3MvZnJvbnRlbmQuc2Nzcz9hZjQ5Iiwid2VicGFjazovLy8uL3ZlbmRvci9vaS91eC9hc3NldHMvc2Nzcy9ib3JkZXIuc2Nzcz8xNzI5Iiwid2VicGFjazovLy8uL3ZlbmRvci9vaS91eC9hc3NldHMvc2Nzcy9zcGFjaW5nLnNjc3M/NGU2OCIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivb2kvdXgvYXNzZXRzL3Njc3Mvc3F1YXJlLnNjc3M/YWZjZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgcmVxdWlyZSB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbnJlcXVpcmUoJy4uLy4uL3ZlbmRvci9vaS91eC9hc3NldHMvc2Nzcy9zcGFjaW5nLnNjc3MnKTtcbnJlcXVpcmUoJy4uLy4uL3ZlbmRvci9vaS91eC9hc3NldHMvc2Nzcy9ib3JkZXIuc2NzcycpO1xucmVxdWlyZSgnLi4vLi4vdmVuZG9yL29pL3V4L2Fzc2V0cy9zY3NzL3NxdWFyZS5zY3NzJyk7XG5yZXF1aXJlKCcuLi9zY3NzL2Zyb250ZW5kLnNjc3MnKTtcblxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgLy8gcmV2ZWFsIHNlY3Rpb24gb24gc2Nyb2xsIGZ1bmN0aW9uLiBBZGQgY2xhc3MgXCJyZXZlYWwtc2VjdGlvblwiIHRvIGFjdGl2YXRlIGl0IG9uIGEgcGFydGljdWxhciBzZWN0aW9uXG4gICAgZnVuY3Rpb24gcmV2ZWFsKCkge1xuICAgICAgICB2YXIgcmV2ZWFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmV2ZWFsLXNlY3Rpb25cIik7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXZlYWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgdmFyIGVsZW1lbnRUb3AgPSByZXZlYWxzW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICAgICAgICAgIHZhciBlbGVtZW50VmlzaWJsZSA9IDE1MDtcbiAgICAgICAgICAgIGlmIChlbGVtZW50VG9wIDwgd2luZG93SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcmV2ZWFsc1tpXS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXZlYWxzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXZlYWwoKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHJldmVhbCk7XG5cbiAgICAgICAgJChcImRpdi5pbWFnZS0xXCIpLm1vdXNlb3ZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKFwiZGl2LmRpdi1wcmluY2lwYWxlXCIpLnJlbW92ZUNsYXNzKCdvbmUgdHdvIHRocmVlJykuYWRkQ2xhc3MoJ29uZScpO1xuICAgICAgICB9KVxuICAgICAgICAkKFwiZGl2LmltYWdlLTJcIikubW91c2VvdmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoXCJkaXYuZGl2LXByaW5jaXBhbGVcIikucmVtb3ZlQ2xhc3MoJ29uZSB0d28gdGhyZWUnKS5hZGRDbGFzcygndHdvJyk7XG4gICAgICAgIH0pXG4gICAgICAgICQoXCJkaXYuaW1hZ2UtM1wiKS5tb3VzZW92ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJChcImRpdi5kaXYtcHJpbmNpcGFsZVwiKS5yZW1vdmVDbGFzcygnb25lIHR3byB0aHJlZScpLmFkZENsYXNzKCd0aHJlZScpO1xuICAgICAgICB9KVxuXG4gICAgICAgICQoXCJzdmcgLm1hcmtlci1tYXBcIikubW91c2Vtb3ZlKGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgIGxldCBjb3VudHJ5ID0gJCh0aGlzKS5kYXRhKCdjb3VudHJ5Jyk7XG5cbiAgICAgICAgICAgIGxldCB0b29sdGlwID0gJCgnLm1hcC10b29sdGlwW2RhdGEtdG9vbHRpcC1jb3VudHJ5PVwiJyArIGNvdW50cnkgKyAnXCJdJylcbiAgICAgICAgICAgIHRvb2x0aXAuc2hvdygpO1xuICAgICAgICAgICAgdG9vbHRpcC5jc3Moe1xuICAgICAgICAgICAgICAgICdsZWZ0JzogZXZ0LnBhZ2VYLFxuICAgICAgICAgICAgICAgICd0b3AnOiBldnQucGFnZVlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuXG4gICAgICAgICQoXCJzdmcgLm1hcmtlci1tYXBcIikubW91c2VlbnRlcihmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICBsZXQgY291bnRyeSA9ICQodGhpcykuZGF0YSgnY291bnRyeScpO1xuXG4gICAgICAgICAgICBsZXQgdG9vbHRpcCA9ICQoJy5tYXAtdG9vbHRpcFtkYXRhLXRvb2x0aXAtY291bnRyeT1cIicgKyBjb3VudHJ5ICsgJ1wiXScpXG4gICAgICAgICAgICB0b29sdGlwLnNob3coKTtcbiAgICAgICAgICAgIHRvb2x0aXAuY3NzKHtcbiAgICAgICAgICAgICAgICAnbGVmdCc6IGV2dC5wYWdlWCxcbiAgICAgICAgICAgICAgICAndG9wJzogZXZ0LnBhZ2VZXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcblxuICAgICAgICAkKFwic3ZnIC5tYXJrZXItbWFwXCIpLm1vdXNlb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJy5tYXAtdG9vbHRpcCcpLmhpZGUoKTtcbiAgICAgICAgfSlcblxuXG59KTtcblxuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJyZXZlYWwiLCJyZXZlYWxzIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImVsZW1lbnRUb3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJlbGVtZW50VmlzaWJsZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb3VzZW92ZXIiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwibW91c2Vtb3ZlIiwiZXZ0IiwiY291bnRyeSIsImRhdGEiLCJ0b29sdGlwIiwic2hvdyIsImNzcyIsInBhZ2VYIiwicGFnZVkiLCJtb3VzZWVudGVyIiwibW91c2VvdXQiLCJoaWRlIl0sInNvdXJjZVJvb3QiOiIifQ==