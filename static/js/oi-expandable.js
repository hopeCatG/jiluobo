(self["webpackChunk"] = self["webpackChunk"] || []).push([["oi-expandable"],{

/***/ "./assets/vendor/oi-expandable/index.js":
/*!**********************************************!*\
  !*** ./assets/vendor/oi-expandable/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js");
__webpack_require__(/*! ./index.scss */ "./assets/vendor/oi-expandable/index.scss");

// Custom jQuery plugin for initializing the expandable.
(function ($) {
  // Detects touch devices:
  // https://stackoverflow.com/a/63666289/10197327
  const touch = matchMedia('(hover: none)').matches;
  $.fn.oiExpandable = function () {
    // "this" is the wrapper. Initializing every item below it.
    this.find('.oi-expandable-item').each(function () {
      const $item = $(this);
      const $title = $item.find('.oi-expandable-title');
      const backgroundUrl = $item.attr('data-oi-expandable-background');
      const iconUrl = $item.attr('data-oi-expandable-icon');

      // Setting the background with a gradient.
      if (backgroundUrl) {
        $item.css({
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.50) 65.03%), url(' + backgroundUrl + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        });
      }

      // If an icon is defined, setting it above the title.
      if (iconUrl) {
        const $iconDiv = $('<div class="oi-expandable-icon" aria-hidden="true"/>');
        $iconDiv.css({
          background: 'url(' + iconUrl + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        });
        $iconDiv.insertBefore($title);
      }
      if (!touch) {
        // Adding the proper class on interaction.
        $item.on('mouseover', function () {
          expand($item, false);
          // Doing nothing in responsive mode.
        });

        $item.on('click', function (e) {
          if ($item.parent().css('flex-direction') === 'row' && !$item.hasClass('expanded')) {
            expand($item, true);
            e.preventDefault();
            return false;
          }
        });
      }
      function expand($item, checkClick) {
        if ($item.parent().css('flex-direction') === 'row') {
          if (!$item.hasClass('expanded') && (checkClick || !$item.hasClass('shrunk'))) {
            // All items in the same row must be shrunk.
            $('.oi-expandable-item').removeClass('expanded');
            $('.oi-expandable-item').removeClass('shrunk');
            $item.siblings().addClass('shrunk');
            $item.addClass('expanded');
          }
        }
      }
    });
    if (!touch) {
      // Putting a listener on the body, to close expanded
      // elements when another spot is clicked.
      $('body').on('click', function (event) {
        // Checking if the target is inside the expanded
        // element. If not, closing every expanded element.
        if ($(event.target).closest('.oi-expandable-item.expanded').length === 0) {
          $('.oi-expandable-item.expanded, .oi-expandable-item.shrunk').each(function () {
            $(this).removeClass('expanded');
            $(this).removeClass('shrunk');
          });
        }
      });
    }
  };
})(jQuery);

// When the document loads, initializing every existing expandable.
$(document).ready(function () {
  $('.oi-expandable-wrapper').oiExpandable();
});

/***/ }),

/***/ "./assets/vendor/oi-expandable/index.scss":
/*!************************************************!*\
  !*** ./assets/vendor/oi-expandable/index.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_src_exports_global_js-node_modules_jquery_src_jquery_js"], () => (__webpack_exec__("./assets/vendor/oi-expandable/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ktZXhwYW5kYWJsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUFBLG1CQUFPLENBQUMsOERBQWMsQ0FBQzs7QUFFdkI7QUFDQyxXQUFVQyxDQUFDLEVBQUU7RUFDVjtFQUNBO0VBQ0EsTUFBTUMsS0FBSyxHQUFHQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUNDLE9BQU87RUFFakRILENBQUMsQ0FBQ0ksRUFBRSxDQUFDQyxZQUFZLEdBQUcsWUFBWTtJQUM1QjtJQUNBLElBQUksQ0FBQ0MsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUNDLElBQUksQ0FBQyxZQUFZO01BQzlDLE1BQU1DLEtBQUssR0FBR1IsQ0FBQyxDQUFDLElBQUksQ0FBQztNQUVyQixNQUFNUyxNQUFNLEdBQUdELEtBQUssQ0FBQ0YsSUFBSSxDQUFDLHNCQUFzQixDQUFDO01BRWpELE1BQU1JLGFBQWEsR0FBR0YsS0FBSyxDQUFDRyxJQUFJLENBQUMsK0JBQStCLENBQUM7TUFDakUsTUFBTUMsT0FBTyxHQUFHSixLQUFLLENBQUNHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQzs7TUFFckQ7TUFDQSxJQUFJRCxhQUFhLEVBQUU7UUFDZkYsS0FBSyxDQUFDSyxHQUFHLENBQUM7VUFDTkMsVUFBVSxFQUFFLG1GQUFtRixHQUFHSixhQUFhLEdBQUcsR0FBRztVQUNySEssY0FBYyxFQUFFLE9BQU87VUFDdkJDLGtCQUFrQixFQUFFO1FBQ3hCLENBQUMsQ0FBQztNQUNOOztNQUVBO01BQ0EsSUFBSUosT0FBTyxFQUFFO1FBQ1QsTUFBTUssUUFBUSxHQUFHakIsQ0FBQyxDQUFDLHNEQUFzRCxDQUFDO1FBRTFFaUIsUUFBUSxDQUFDSixHQUFHLENBQUM7VUFDVEMsVUFBVSxFQUFFLE1BQU0sR0FBR0YsT0FBTyxHQUFHLEdBQUc7VUFDbENHLGNBQWMsRUFBRSxPQUFPO1VBQ3ZCQyxrQkFBa0IsRUFBRTtRQUN4QixDQUFDLENBQUM7UUFFRkMsUUFBUSxDQUFDQyxZQUFZLENBQUNULE1BQU0sQ0FBQztNQUNqQztNQUVBLElBQUksQ0FBQ1IsS0FBSyxFQUFFO1FBQ1I7UUFDQU8sS0FBSyxDQUFDVyxFQUFFLENBQUMsV0FBVyxFQUFFLFlBQVk7VUFDOUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztVQUN4QkMsTUFBTSxDQUFDZCxLQUFLLEVBQUUsS0FBSyxDQUFDO1VBQ3BCO1FBQ0osQ0FBQyxDQUFDOztRQUNGQSxLQUFLLENBQUNXLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBU0ksQ0FBQyxFQUFFO1VBQzFCSCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7VUFDcEIsSUFBSWIsS0FBSyxDQUFDZ0IsTUFBTSxDQUFDLENBQUMsQ0FBQ1gsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEtBQUssS0FBSyxJQUFJLENBQUNMLEtBQUssQ0FBQ2lCLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUMvRUgsTUFBTSxDQUFDZCxLQUFLLEVBQUUsSUFBSSxDQUFDO1lBQ25CZSxDQUFDLENBQUNHLGNBQWMsQ0FBQyxDQUFDO1lBQ2xCLE9BQU8sS0FBSztVQUNoQjtRQUNKLENBQUMsQ0FBQztNQUNOO01BRUEsU0FBU0osTUFBTUEsQ0FBQ2QsS0FBSyxFQUFFbUIsVUFBVSxFQUFFO1FBQy9CUCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFDckIsSUFBSWIsS0FBSyxDQUFDZ0IsTUFBTSxDQUFDLENBQUMsQ0FBQ1gsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEtBQUssS0FBSyxFQUFFO1VBQ2hELElBQUksQ0FBQ0wsS0FBSyxDQUFDaUIsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLRSxVQUFVLElBQUksQ0FBQ25CLEtBQUssQ0FBQ2lCLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFO1lBQzFFO1lBQ0F6QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQzRCLFdBQVcsQ0FBQyxVQUFVLENBQUM7WUFDaEQ1QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQzRCLFdBQVcsQ0FBQyxRQUFRLENBQUM7WUFDOUNwQixLQUFLLENBQUNxQixRQUFRLENBQUMsQ0FBQyxDQUFDQyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBQ25DdEIsS0FBSyxDQUFDc0IsUUFBUSxDQUFDLFVBQVUsQ0FBQztVQUM5QjtRQUNKO01BQ0o7SUFDSixDQUFDLENBQUM7SUFFRixJQUFJLENBQUM3QixLQUFLLEVBQUU7TUFDUjtNQUNBO01BQ0FELENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ21CLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVVksS0FBSyxFQUFFO1FBQ25DO1FBQ0E7UUFDQSxJQUFJL0IsQ0FBQyxDQUFDK0IsS0FBSyxDQUFDQyxNQUFNLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUNDLE1BQU0sS0FBSyxDQUFDLEVBQUU7VUFDdEVsQyxDQUFDLENBQUMsMERBQTBELENBQUMsQ0FDeERPLElBQUksQ0FBQyxZQUFZO1lBQ2RQLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzRCLFdBQVcsQ0FBQyxVQUFVLENBQUM7WUFDL0I1QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM0QixXQUFXLENBQUMsUUFBUSxDQUFDO1VBQ2pDLENBQUMsQ0FBQztRQUNWO01BQ0osQ0FBQyxDQUFDO0lBQ047RUFDSixDQUFDO0FBQ0wsQ0FBQyxFQUFDTyxNQUFNLENBQUM7O0FBRVQ7QUFDQW5DLENBQUMsQ0FBQ29DLFFBQVEsQ0FBQyxDQUFDQyxLQUFLLENBQUMsWUFBWTtFQUMxQmpCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztFQUM1QnJCLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDSyxZQUFZLENBQUMsQ0FBQztBQUM5QyxDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQzdGRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy92ZW5kb3Ivb2ktZXhwYW5kYWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdmVuZG9yL29pLWV4cGFuZGFibGUvaW5kZXguc2Nzcz9hZTZmIl0sInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJy4vaW5kZXguc2NzcycpO1xuXG4vLyBDdXN0b20galF1ZXJ5IHBsdWdpbiBmb3IgaW5pdGlhbGl6aW5nIHRoZSBleHBhbmRhYmxlLlxuKGZ1bmN0aW9uICgkKSB7XG4gICAgLy8gRGV0ZWN0cyB0b3VjaCBkZXZpY2VzOlxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS82MzY2NjI4OS8xMDE5NzMyN1xuICAgIGNvbnN0IHRvdWNoID0gbWF0Y2hNZWRpYSgnKGhvdmVyOiBub25lKScpLm1hdGNoZXM7XG5cbiAgICAkLmZuLm9pRXhwYW5kYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gXCJ0aGlzXCIgaXMgdGhlIHdyYXBwZXIuIEluaXRpYWxpemluZyBldmVyeSBpdGVtIGJlbG93IGl0LlxuICAgICAgICB0aGlzLmZpbmQoJy5vaS1leHBhbmRhYmxlLWl0ZW0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0ICRpdGVtID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgY29uc3QgJHRpdGxlID0gJGl0ZW0uZmluZCgnLm9pLWV4cGFuZGFibGUtdGl0bGUnKTtcblxuICAgICAgICAgICAgY29uc3QgYmFja2dyb3VuZFVybCA9ICRpdGVtLmF0dHIoJ2RhdGEtb2ktZXhwYW5kYWJsZS1iYWNrZ3JvdW5kJyk7XG4gICAgICAgICAgICBjb25zdCBpY29uVXJsID0gJGl0ZW0uYXR0cignZGF0YS1vaS1leHBhbmRhYmxlLWljb24nKTtcblxuICAgICAgICAgICAgLy8gU2V0dGluZyB0aGUgYmFja2dyb3VuZCB3aXRoIGEgZ3JhZGllbnQuXG4gICAgICAgICAgICBpZiAoYmFja2dyb3VuZFVybCkge1xuICAgICAgICAgICAgICAgICRpdGVtLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuMDApIDAlLCByZ2JhKDAsIDAsIDAsIDAuNTApIDY1LjAzJSksIHVybCgnICsgYmFja2dyb3VuZFVybCArICcpJyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIGFuIGljb24gaXMgZGVmaW5lZCwgc2V0dGluZyBpdCBhYm92ZSB0aGUgdGl0bGUuXG4gICAgICAgICAgICBpZiAoaWNvblVybCkge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRpY29uRGl2ID0gJCgnPGRpdiBjbGFzcz1cIm9pLWV4cGFuZGFibGUtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz4nKTtcblxuICAgICAgICAgICAgICAgICRpY29uRGl2LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd1cmwoJyArIGljb25VcmwgKyAnKScsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJGljb25EaXYuaW5zZXJ0QmVmb3JlKCR0aXRsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgICAgICAgICAvLyBBZGRpbmcgdGhlIHByb3BlciBjbGFzcyBvbiBpbnRlcmFjdGlvbi5cbiAgICAgICAgICAgICAgICAkaXRlbS5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbW91c2VvdmVyJyk7XG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZCgkaXRlbSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAvLyBEb2luZyBub3RoaW5nIGluIHJlc3BvbnNpdmUgbW9kZS5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkaXRlbS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGljaycpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGl0ZW0ucGFyZW50KCkuY3NzKCdmbGV4LWRpcmVjdGlvbicpID09PSAncm93JyAmJiAhJGl0ZW0uaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZCgkaXRlbSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBleHBhbmQoJGl0ZW0sIGNoZWNrQ2xpY2spIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXhwYW5kJyk7XG4gICAgICAgICAgICAgICAgaWYgKCRpdGVtLnBhcmVudCgpLmNzcygnZmxleC1kaXJlY3Rpb24nKSA9PT0gJ3JvdycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkaXRlbS5oYXNDbGFzcygnZXhwYW5kZWQnKSAmJiAoY2hlY2tDbGljayB8fCAhJGl0ZW0uaGFzQ2xhc3MoJ3NocnVuaycpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWxsIGl0ZW1zIGluIHRoZSBzYW1lIHJvdyBtdXN0IGJlIHNocnVuay5cbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5vaS1leHBhbmRhYmxlLWl0ZW0nKS5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5vaS1leHBhbmRhYmxlLWl0ZW0nKS5yZW1vdmVDbGFzcygnc2hydW5rJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkaXRlbS5zaWJsaW5ncygpLmFkZENsYXNzKCdzaHJ1bmsnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRpdGVtLmFkZENsYXNzKCdleHBhbmRlZCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXRvdWNoKSB7XG4gICAgICAgICAgICAvLyBQdXR0aW5nIGEgbGlzdGVuZXIgb24gdGhlIGJvZHksIHRvIGNsb3NlIGV4cGFuZGVkXG4gICAgICAgICAgICAvLyBlbGVtZW50cyB3aGVuIGFub3RoZXIgc3BvdCBpcyBjbGlja2VkLlxuICAgICAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIC8vIENoZWNraW5nIGlmIHRoZSB0YXJnZXQgaXMgaW5zaWRlIHRoZSBleHBhbmRlZFxuICAgICAgICAgICAgICAgIC8vIGVsZW1lbnQuIElmIG5vdCwgY2xvc2luZyBldmVyeSBleHBhbmRlZCBlbGVtZW50LlxuICAgICAgICAgICAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLm9pLWV4cGFuZGFibGUtaXRlbS5leHBhbmRlZCcpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAkKCcub2ktZXhwYW5kYWJsZS1pdGVtLmV4cGFuZGVkLCAub2ktZXhwYW5kYWJsZS1pdGVtLnNocnVuaycpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdzaHJ1bmsnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufShqUXVlcnkpKTtcblxuLy8gV2hlbiB0aGUgZG9jdW1lbnQgbG9hZHMsIGluaXRpYWxpemluZyBldmVyeSBleGlzdGluZyBleHBhbmRhYmxlLlxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKCdvaS1leHBhbmRhYmxlJyk7XG4gICAgJCgnLm9pLWV4cGFuZGFibGUtd3JhcHBlcicpLm9pRXhwYW5kYWJsZSgpO1xufSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsicmVxdWlyZSIsIiQiLCJ0b3VjaCIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiZm4iLCJvaUV4cGFuZGFibGUiLCJmaW5kIiwiZWFjaCIsIiRpdGVtIiwiJHRpdGxlIiwiYmFja2dyb3VuZFVybCIsImF0dHIiLCJpY29uVXJsIiwiY3NzIiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiJGljb25EaXYiLCJpbnNlcnRCZWZvcmUiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJleHBhbmQiLCJlIiwicGFyZW50IiwiaGFzQ2xhc3MiLCJwcmV2ZW50RGVmYXVsdCIsImNoZWNrQ2xpY2siLCJyZW1vdmVDbGFzcyIsInNpYmxpbmdzIiwiYWRkQ2xhc3MiLCJldmVudCIsInRhcmdldCIsImNsb3Nlc3QiLCJsZW5ndGgiLCJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5Il0sInNvdXJjZVJvb3QiOiIifQ==