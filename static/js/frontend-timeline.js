(self["webpackChunk"] = self["webpackChunk"] || []).push([["frontend-timeline"],{

/***/ "./assets/js/frontend/timeline.js":
/*!****************************************!*\
  !*** ./assets/js/frontend/timeline.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../scss/frontend/timeline.scss */ "./assets/scss/frontend/timeline.scss");
document.addEventListener("DOMContentLoaded", function (event) {
  const wrapperElement = document.querySelector('#dcs-timeline-wrapper');

  // Function to determine timeline orientation based on viewport height
  function setTimelineOrientation() {
    const verticalTimeline = document.querySelector('#dcs-timeline.vertical');
    const horizontalTimeline = document.querySelector('#dcs-timeline.horizontal');

    // Check if viewport height is less than 850px
    if (window.innerHeight >= 850 && verticalTimeline) {
      // Convert vertical to horizontal
      verticalTimeline.classList.remove('vertical');
      verticalTimeline.classList.add('horizontal');
      console.log('Switched to horizontal timeline due to small viewport height');
      initHorizontalTimeline();
    } else if (window.innerHeight < 850 && horizontalTimeline) {
      // If viewport height is restored, convert back to vertical
      horizontalTimeline.classList.remove('horizontal');
      horizontalTimeline.classList.add('vertical');
      console.log('Switched to vertical timeline due to sufficient viewport height');
      initVerticalTimeline();
    } else {
      // Initial setup based on current classes
      if (document.querySelector('#dcs-timeline.horizontal')) {
        initHorizontalTimeline();
      } else if (document.querySelector('#dcs-timeline.vertical')) {
        initVerticalTimeline();
      }
    }
  }

  // Initialize horizontal timeline functionality
  function initHorizontalTimeline() {
    const containerElement = document.querySelector('#dcs-timeline.horizontal');
    const scrollableElement = document.querySelector('#dcs-timeline.horizontal > div');
    if (!containerElement || !scrollableElement) return;
    console.log('Initializing horizontal timeline');
    const containerWidth = containerElement.scrollWidth;
    wrapperElement.style.height = containerWidth - window.innerWidth + containerElement.getBoundingClientRect().height + 'px';
    const minScroll = 0;
    const maxScroll = containerWidth - window.innerWidth;
    window.onscroll = e => {
      const position = 120 - wrapperElement.getBoundingClientRect().y;
      const containerSticky = position < minScroll ? 'top' : position < maxScroll ? 'fixed' : 'bottom';
      const scrollablePosition = -(position < minScroll ? minScroll : position < maxScroll ? position : maxScroll);
      switch (containerSticky) {
        case 'top':
          containerElement.style.position = 'relative';
          containerElement.style.top = 'unset';
          break;
        case 'fixed':
          containerElement.style.position = 'fixed';
          containerElement.style.top = '120px';
          break;
        case 'bottom':
          containerElement.style.position = 'relative';
          containerElement.style.top = `${maxScroll}px`;
          break;
      }
      scrollableElement.style.transform = `translateX(${scrollablePosition}px)`;
    };
  }

  // Initialize vertical timeline functionality
  function initVerticalTimeline() {
    const containerElement = document.querySelector('#dcs-timeline.vertical');
    const scrollableElement = document.querySelector('#dcs-timeline.vertical > div');
    const floorElement = document.querySelector('#floor');
    const subfloorElement = document.querySelector('#subfloor');
    if (!containerElement || !scrollableElement) return;
    console.log('Initializing vertical timeline');
    if (floorElement && subfloorElement) {
      floorElement.style.position = 'fixed';
      subfloorElement.style.marginTop = floorElement.getBoundingClientRect().height + 'px';
    }
    const containerHeight = containerElement.scrollHeight;
    wrapperElement.style.height = containerHeight - window.innerHeight + 100 + containerElement.getBoundingClientRect().height + 'px';
    const minScroll = 0;
    const maxScroll = containerHeight - window.innerHeight + 150;
    window.onscroll = e => {
      const position = 120 - wrapperElement.getBoundingClientRect().y;
      const containerSticky = position < minScroll ? 'top' : position < maxScroll ? 'fixed' : 'bottom';
      const scrollablePosition = -(position < minScroll ? minScroll : position < maxScroll ? position : maxScroll);
      switch (containerSticky) {
        case 'top':
          containerElement.style.position = 'relative';
          containerElement.style.top = 'unset';
          break;
        case 'fixed':
          containerElement.style.position = 'fixed';
          containerElement.style.top = '120px';
          break;
        case 'bottom':
          containerElement.style.position = 'relative';
          containerElement.style.top = `${maxScroll}px`;
          break;
      }
      if (floorElement) {
        floorElement.style.top = containerElement.getBoundingClientRect().top + containerElement.getBoundingClientRect().height + 'px';
      }
      scrollableElement.style.transform = `translateY(${scrollablePosition}px)`;
    };
  }

  // Initial setup
  setTimelineOrientation();

  // Also check when window resizes
  window.addEventListener('resize', setTimelineOrientation);
});

/***/ }),

/***/ "./assets/scss/frontend/timeline.scss":
/*!********************************************!*\
  !*** ./assets/scss/frontend/timeline.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/js/frontend/timeline.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsT0FBTztVQUNwQztRQUNKLEtBQUssUUFBUTtVQUNUaEIsZ0JBQWdCLENBQUNJLEtBQUssQ0FBQ1EsUUFBUSxHQUFHLFVBQVU7VUFDNUNaLGdCQUFnQixDQUFDSSxLQUFLLENBQUNZLEdBQUcsR0FBSSxHQUFFUCxTQUFVLElBQUc7VUFDN0M7TUFDUjtNQUVBLElBQUlTLFlBQVksRUFBRTtRQUNkQSxZQUFZLENBQUNkLEtBQUssQ0FBQ1ksR0FBRyxHQUFJaEIsZ0JBQWdCLENBQUNPLHFCQUFxQixDQUFDLENBQUMsQ0FBQ1MsR0FBRyxHQUFHaEIsZ0JBQWdCLENBQUNPLHFCQUFxQixDQUFDLENBQUMsQ0FBQ0YsTUFBTSxHQUFJLElBQUk7TUFDcEk7TUFDQUosaUJBQWlCLENBQUNHLEtBQUssQ0FBQ2EsU0FBUyxHQUFJLGNBQWFGLGtCQUFtQixLQUFJO0lBQzdFLENBQUM7RUFDTDs7RUFFQTtFQUNBM0Isc0JBQXNCLENBQUMsQ0FBQzs7RUFFeEI7RUFDQUcsTUFBTSxDQUFDUCxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVJLHNCQUFzQixDQUFDO0FBQzdELENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDN0hGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2Zyb250ZW5kL3RpbWVsaW5lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2Zyb250ZW5kL3RpbWVsaW5lLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnLi4vLi4vc2Nzcy9mcm9udGVuZC90aW1lbGluZS5zY3NzJyk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnN0IHdyYXBwZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rjcy10aW1lbGluZS13cmFwcGVyJyk7XG5cbiAgICAvLyBGdW5jdGlvbiB0byBkZXRlcm1pbmUgdGltZWxpbmUgb3JpZW50YXRpb24gYmFzZWQgb24gdmlld3BvcnQgaGVpZ2h0XG4gICAgZnVuY3Rpb24gc2V0VGltZWxpbmVPcmllbnRhdGlvbigpIHtcbiAgICAgICAgY29uc3QgdmVydGljYWxUaW1lbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkY3MtdGltZWxpbmUudmVydGljYWwnKTtcbiAgICAgICAgY29uc3QgaG9yaXpvbnRhbFRpbWVsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rjcy10aW1lbGluZS5ob3Jpem9udGFsJyk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdmlld3BvcnQgaGVpZ2h0IGlzIGxlc3MgdGhhbiA4NTBweFxuICAgICAgICBpZiAod2luZG93LmlubmVySGVpZ2h0ID49IDg1MCAmJiB2ZXJ0aWNhbFRpbWVsaW5lKSB7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IHZlcnRpY2FsIHRvIGhvcml6b250YWxcbiAgICAgICAgICAgIHZlcnRpY2FsVGltZWxpbmUuY2xhc3NMaXN0LnJlbW92ZSgndmVydGljYWwnKTtcbiAgICAgICAgICAgIHZlcnRpY2FsVGltZWxpbmUuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1N3aXRjaGVkIHRvIGhvcml6b250YWwgdGltZWxpbmUgZHVlIHRvIHNtYWxsIHZpZXdwb3J0IGhlaWdodCcpO1xuICAgICAgICAgICAgaW5pdEhvcml6b250YWxUaW1lbGluZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5pbm5lckhlaWdodCA8IDg1MCAmJiBob3Jpem9udGFsVGltZWxpbmUpIHtcbiAgICAgICAgICAgIC8vIElmIHZpZXdwb3J0IGhlaWdodCBpcyByZXN0b3JlZCwgY29udmVydCBiYWNrIHRvIHZlcnRpY2FsXG4gICAgICAgICAgICBob3Jpem9udGFsVGltZWxpbmUuY2xhc3NMaXN0LnJlbW92ZSgnaG9yaXpvbnRhbCcpO1xuICAgICAgICAgICAgaG9yaXpvbnRhbFRpbWVsaW5lLmNsYXNzTGlzdC5hZGQoJ3ZlcnRpY2FsJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU3dpdGNoZWQgdG8gdmVydGljYWwgdGltZWxpbmUgZHVlIHRvIHN1ZmZpY2llbnQgdmlld3BvcnQgaGVpZ2h0Jyk7XG4gICAgICAgICAgICBpbml0VmVydGljYWxUaW1lbGluZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSW5pdGlhbCBzZXR1cCBiYXNlZCBvbiBjdXJyZW50IGNsYXNzZXNcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGNzLXRpbWVsaW5lLmhvcml6b250YWwnKSkge1xuICAgICAgICAgICAgICAgIGluaXRIb3Jpem9udGFsVGltZWxpbmUoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rjcy10aW1lbGluZS52ZXJ0aWNhbCcpKSB7XG4gICAgICAgICAgICAgICAgaW5pdFZlcnRpY2FsVGltZWxpbmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgaG9yaXpvbnRhbCB0aW1lbGluZSBmdW5jdGlvbmFsaXR5XG4gICAgZnVuY3Rpb24gaW5pdEhvcml6b250YWxUaW1lbGluZSgpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkY3MtdGltZWxpbmUuaG9yaXpvbnRhbCcpO1xuICAgICAgICBjb25zdCBzY3JvbGxhYmxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkY3MtdGltZWxpbmUuaG9yaXpvbnRhbCA+IGRpdicpO1xuXG4gICAgICAgIGlmICghY29udGFpbmVyRWxlbWVudCB8fCAhc2Nyb2xsYWJsZUVsZW1lbnQpIHJldHVybjtcblxuICAgICAgICBjb25zb2xlLmxvZygnSW5pdGlhbGl6aW5nIGhvcml6b250YWwgdGltZWxpbmUnKTtcblxuICAgICAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IGNvbnRhaW5lckVsZW1lbnQuc2Nyb2xsV2lkdGg7XG5cbiAgICAgICAgd3JhcHBlckVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gKGNvbnRhaW5lcldpZHRoIC0gd2luZG93LmlubmVyV2lkdGggKyBjb250YWluZXJFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCkgKyAncHgnO1xuICAgICAgICBjb25zdCBtaW5TY3JvbGwgPSAwO1xuICAgICAgICBjb25zdCBtYXhTY3JvbGwgPSBjb250YWluZXJXaWR0aCAtIHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgICAgIHdpbmRvdy5vbnNjcm9sbCA9IChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IDEyMCAtIHdyYXBwZXJFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnk7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXJTdGlja3kgPSBwb3NpdGlvbiA8IG1pblNjcm9sbCA/ICd0b3AnIDogKHBvc2l0aW9uIDwgbWF4U2Nyb2xsID8gJ2ZpeGVkJyA6ICdib3R0b20nKTtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGFibGVQb3NpdGlvbiA9IC0ocG9zaXRpb24gPCBtaW5TY3JvbGwgPyBtaW5TY3JvbGwgOiAocG9zaXRpb24gPCBtYXhTY3JvbGwgPyBwb3NpdGlvbiA6IG1heFNjcm9sbCkpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGNvbnRhaW5lclN0aWNreSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLnRvcCA9ICd1bnNldCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2ZpeGVkJzpcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUudG9wID0gJzEyMHB4JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUudG9wID0gYCR7bWF4U2Nyb2xsfXB4YDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzY3JvbGxhYmxlRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Njcm9sbGFibGVQb3NpdGlvbn1weClgO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgdmVydGljYWwgdGltZWxpbmUgZnVuY3Rpb25hbGl0eVxuICAgIGZ1bmN0aW9uIGluaXRWZXJ0aWNhbFRpbWVsaW5lKCkge1xuICAgICAgICBjb25zdCBjb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rjcy10aW1lbGluZS52ZXJ0aWNhbCcpO1xuICAgICAgICBjb25zdCBzY3JvbGxhYmxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkY3MtdGltZWxpbmUudmVydGljYWwgPiBkaXYnKTtcbiAgICAgICAgY29uc3QgZmxvb3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zsb29yJyk7XG4gICAgICAgIGNvbnN0IHN1YmZsb29yRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJmbG9vcicpO1xuXG4gICAgICAgIGlmICghY29udGFpbmVyRWxlbWVudCB8fCAhc2Nyb2xsYWJsZUVsZW1lbnQpIHJldHVybjtcblxuICAgICAgICBjb25zb2xlLmxvZygnSW5pdGlhbGl6aW5nIHZlcnRpY2FsIHRpbWVsaW5lJyk7XG5cbiAgICAgICAgaWYgKGZsb29yRWxlbWVudCAmJiBzdWJmbG9vckVsZW1lbnQpIHtcbiAgICAgICAgICAgIGZsb29yRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgICAgICBzdWJmbG9vckVsZW1lbnQuc3R5bGUubWFyZ2luVG9wID0gZmxvb3JFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCArICdweCc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSBjb250YWluZXJFbGVtZW50LnNjcm9sbEhlaWdodDtcblxuICAgICAgICB3cmFwcGVyRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAoY29udGFpbmVySGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0ICsgMTAwICsgY29udGFpbmVyRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQpICsgJ3B4JztcbiAgICAgICAgY29uc3QgbWluU2Nyb2xsID0gMDtcbiAgICAgICAgY29uc3QgbWF4U2Nyb2xsID0gY29udGFpbmVySGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0ICsgMTUwO1xuXG4gICAgICAgIHdpbmRvdy5vbnNjcm9sbCA9IChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IDEyMCAtIHdyYXBwZXJFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnk7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXJTdGlja3kgPSBwb3NpdGlvbiA8IG1pblNjcm9sbCA/ICd0b3AnIDogKHBvc2l0aW9uIDwgbWF4U2Nyb2xsID8gJ2ZpeGVkJyA6ICdib3R0b20nKTtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGFibGVQb3NpdGlvbiA9IC0ocG9zaXRpb24gPCBtaW5TY3JvbGwgPyBtaW5TY3JvbGwgOiAocG9zaXRpb24gPCBtYXhTY3JvbGwgPyBwb3NpdGlvbiA6IG1heFNjcm9sbCkpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGNvbnRhaW5lclN0aWNreSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLnRvcCA9ICd1bnNldCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2ZpeGVkJzpcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUudG9wID0gJzEyMHB4JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUudG9wID0gYCR7bWF4U2Nyb2xsfXB4YDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmbG9vckVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBmbG9vckVsZW1lbnQuc3R5bGUudG9wID0gKGNvbnRhaW5lckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgY29udGFpbmVyRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQpICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNjcm9sbGFibGVFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7c2Nyb2xsYWJsZVBvc2l0aW9ufXB4KWA7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbCBzZXR1cFxuICAgIHNldFRpbWVsaW5lT3JpZW50YXRpb24oKTtcblxuICAgIC8vIEFsc28gY2hlY2sgd2hlbiB3aW5kb3cgcmVzaXplc1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzZXRUaW1lbGluZU9yaWVudGF0aW9uKTtcbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ3cmFwcGVyRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRUaW1lbGluZU9yaWVudGF0aW9uIiwidmVydGljYWxUaW1lbGluZSIsImhvcml6b250YWxUaW1lbGluZSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiY29uc29sZSIsImxvZyIsImluaXRIb3Jpem9udGFsVGltZWxpbmUiLCJpbml0VmVydGljYWxUaW1lbGluZSIsImNvbnRhaW5lckVsZW1lbnQiLCJzY3JvbGxhYmxlRWxlbWVudCIsImNvbnRhaW5lcldpZHRoIiwic2Nyb2xsV2lkdGgiLCJzdHlsZSIsImhlaWdodCIsImlubmVyV2lkdGgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJtaW5TY3JvbGwiLCJtYXhTY3JvbGwiLCJvbnNjcm9sbCIsImUiLCJwb3NpdGlvbiIsInkiLCJjb250YWluZXJTdGlja3kiLCJzY3JvbGxhYmxlUG9zaXRpb24iLCJ0b3AiLCJ0cmFuc2Zvcm0iLCJmbG9vckVsZW1lbnQiLCJzdWJmbG9vckVsZW1lbnQiLCJtYXJnaW5Ub3AiLCJjb250YWluZXJIZWlnaHQiLCJzY3JvbGxIZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9