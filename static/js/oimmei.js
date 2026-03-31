(self["webpackChunk"] = self["webpackChunk"] || []).push([["oimmei"],{

/***/ "./vendor/oi-layout/polo/assets/js/app.js":
/*!************************************************!*\
  !*** ./vendor/oi-layout/polo/assets/js/app.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js");
const $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js");

// Global jQuery import.
__webpack_require__.g.$ = __webpack_require__.g.jQuery = window.$ = __webpack_provided_window_dot_jQuery = $;

// Plugin from Polo, imported as Yarn deps.
// (not everything is imported, only the potentially relevant ones)
__webpack_require__(/*! @oimmei/pololight/@popperjs/core */ "./node_modules/@popperjs/core/lib/index.js");
__webpack_require__(/*! @oimmei/pololight/bootstrap/dist/js/bootstrap */ "./node_modules/@oimmei/pololight/node_modules/bootstrap/dist/js/bootstrap.js");
__webpack_require__(/*! @oimmei/pololight/animate.css/animate.min.css */ "./node_modules/animate.css/animate.min.css");
__webpack_require__(/*! @oimmei/pololight/bootstrap-switch/dist/js/bootstrap-switch.min */ "./node_modules/bootstrap-switch/dist/js/bootstrap-switch.min.js");
__webpack_require__(/*! @oimmei/pololight/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.min.css */ "./node_modules/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.min.css");
__webpack_require__(/*! @oimmei/pololight/@fortawesome/fontawesome-free/scss/brands.scss */ "./node_modules/@fortawesome/fontawesome-free/scss/brands.scss");
__webpack_require__(/*! @oimmei/pololight/@fortawesome/fontawesome-free/scss/regular.scss */ "./node_modules/@fortawesome/fontawesome-free/scss/regular.scss");
__webpack_require__(/*! @oimmei/pololight/@fortawesome/fontawesome-free/scss/solid.scss */ "./node_modules/@fortawesome/fontawesome-free/scss/solid.scss");
__webpack_require__(/*! @oimmei/pololight/@fortawesome/fontawesome-free/scss/fontawesome.scss */ "./node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss");
__webpack_require__(/*! @oimmei/pololight/list.js */ "./node_modules/list.js/src/index.js");
__webpack_require__(/*! @oimmei/pololight/magnific-popup */ "./node_modules/magnific-popup/dist/jquery.magnific-popup.js");
__webpack_require__(/*! @oimmei/pololight/infinite-scroll */ "./node_modules/@oimmei/pololight/node_modules/infinite-scroll/js/index.js");
__webpack_require__(/*! ./notify.min */ "./vendor/oi-layout/polo/assets/js/notify.min.js");

// https://www.npmjs.com/package/jquery.easing
__webpack_require__(/*! @oimmei/pololight/jquery.easing */ "./node_modules/jquery.easing/jquery.easing.js");
const jQueryBridget = __webpack_require__(/*! @oimmei/pololight/jquery-bridget */ "./node_modules/jquery-bridget/jquery-bridget.js");
const Flickity = __webpack_require__(/*! @oimmei/pololight/flickity */ "./node_modules/flickity/js/index.js");
// This has to be required separately:
// https://flickity.metafizzy.co/options#imagesloaded
__webpack_require__(/*! @oimmei/pololight/flickity-imagesloaded */ "./node_modules/flickity-imagesloaded/flickity-imagesloaded.js");

// make Flickity a jQuery plugin
Flickity.setJQuery($);
jQueryBridget('flickity', Flickity, $);

// Added plugins from old versions.
__webpack_require__(/*! @oimmei/pololight/easy-pie-chart */ "./node_modules/easy-pie-chart/dist/easypiechart.js");
__webpack_require__(/*! @oimmei/pololight/ion-rangeslider/css/ion.rangeSlider.css */ "./node_modules/ion-rangeslider/css/ion.rangeSlider.css");
__webpack_require__(/*! @oimmei/pololight/jquery-breakpoints */ "./node_modules/jquery-breakpoints/jquery.breakpoints.js");
__webpack_require__(/*! @oimmei/pololight/isotope-layout/dist/isotope.pkgd.min */ "./node_modules/isotope-layout/dist/isotope.pkgd.min.js");
__webpack_require__(/*! @oimmei/pololight/owl-carousel-2/owl.carousel.min */ "./node_modules/owl-carousel-2/owl.carousel.min.js");
__webpack_require__(/*! @oimmei/pololight/owl-carousel-2/assets/owl.carousel.css */ "./node_modules/owl-carousel-2/assets/owl.carousel.css");
__webpack_require__(/*! ./owl.fix */ "./vendor/oi-layout/polo/assets/js/owl.fix.js");
__webpack_require__(/*! @oimmei/pololight/fitvids */ "./node_modules/fitvids/index.js");
__webpack_require__(/*! @oimmei/pololight/vide */ "./node_modules/vide/dist/jquery.vide.js");
__webpack_require__(/*! @oimmei/pololight/scrolly */ "./node_modules/scrolly/public/js/scrolly.js");
__webpack_require__(/*! @oimmei/pololight/js-cookie */ "./node_modules/@oimmei/pololight/node_modules/js-cookie/dist/js.cookie.js");
__webpack_require__(/*! @oimmei/pololight/jquery-form */ "./node_modules/jquery-form/dist/jquery.form.min.js");
__webpack_require__(/*! @oimmei/pololight/scrollify */ "./node_modules/scrollify/scrollify.js");
__webpack_require__(/*! @oimmei/pololight/jquery-countto */ "./node_modules/jquery-countto/jquery.countTo.js");
__webpack_require__(/*! @oimmei/pololight/morphext/dist/morphext.min */ "./node_modules/morphext/dist/morphext.min.js");
__webpack_require__(/*! @oimmei/pololight/sticky-sidebar */ "./node_modules/sticky-sidebar/src/sticky-sidebar.js");
__webpack_require__(/*! @oimmei/pololight/jquery-lazy */ "./node_modules/jquery-lazy/jquery.lazy.js");
__webpack_require__(/*! @oimmei/pololight/theia-sticky-sidebar */ "./node_modules/theia-sticky-sidebar/dist/theia-sticky-sidebar.js");
__webpack_require__(/*! @oimmei/pololight/waypoints/lib/noframework.waypoints.js */ "./node_modules/waypoints/lib/noframework.waypoints.js");
__webpack_require__(/*! @oimmei/pololight/waypoints/lib/jquery.waypoints.js */ "./node_modules/waypoints/lib/jquery.waypoints.js");

// Local files import.
__webpack_require__(/*! ./functions.js */ "./vendor/oi-layout/polo/assets/js/functions.js");
__webpack_require__(/*! ../scss/app.scss */ "./vendor/oi-layout/polo/assets/scss/app.scss");
// require('../css/inspiro.css');
__webpack_require__(/*! ../scss/style.scss */ "./vendor/oi-layout/polo/assets/scss/style.scss");

// Initializing everything.
var Cookies = __webpack_require__(/*! @oimmei/pololight/js-cookie */ "./node_modules/@oimmei/pololight/node_modules/js-cookie/dist/js.cookie.js");
__webpack_require__.g.Cookies = Cookies;
$(document).ready(function () {
  console.log('OIMMEI START SCRIPT');
});

/***/ }),

/***/ "./vendor/oi-layout/polo/assets/js/functions.js":
/*!******************************************************!*\
  !*** ./vendor/oi-layout/polo/assets/js/functions.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js");
/*

Polo - Multipurpose HTML5 Template
Version: 5.9.9
Website: https://inspirothemes.com/themes/polo
License: https://inspirothemes.com/themes/polo/license.html
Inspiro Themes (https://inspirothemes.com)
Author: INSPIRO - Ardian Berisha
Copyright 2021

*/
const LazyLoad = __webpack_require__(/*! @oimmei/pololight/lazyload */ "./node_modules/lazyload/lazyload.js");

// Oimmei: wrapping everything in a content loaded handler.
//INSPIRO Global var
document.addEventListener("DOMContentLoaded", function (event) {
  var INSPIRO = {}; //,
  // $ = jQuery.noConflict(); // Oimmei: commented because it destroyed the global $ variable in the page.
  (function ($) {
    "use strict";

    // Predefined Global Variables
    var $window = $(window),
      $theme_color = "#2250fc",
      //Main
      $body = $("body"),
      $bodyInner = $(".body-inner"),
      $section = $("section"),
      //Header
      $topbar = $("#topbar"),
      $header = $("#header"),
      $headerCurrentClasses = $header.attr("class"),
      //Logo
      headerLogo = $("#logo"),
      //Menu
      $mainMenu = $("#mainMenu"),
      $mainMenuTriggerBtn = $("#mainMenu-trigger a, #mainMenu-trigger button"),
      //Slider
      $slider = $("#slider"),
      $inspiroSlider = $(".inspiro-slider"),
      $carousel = $(".carousel"),
      /*Grid Layout*/
      $gridLayout = $(".grid-layout"),
      $gridFilter = $(".grid-filter, .page-grid-filter"),
      windowWidth = $window.width();

    //Check if header exist
    if ($header.length > 0) {
      var $headerOffsetTop = $header.offset().top;
    }
    var Events = {
      browser: {
        isMobile: function () {
          if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
            return true;
          } else {
            return false;
          }
        }
      }
    };
    //Settings
    var Settings = {
      isMobile: Events.browser.isMobile,
      submenuLight: $header.hasClass("submenu-light") == true ? true : false,
      headerHasDarkClass: $header.hasClass("dark") == true ? true : false,
      headerDarkClassRemoved: false,
      sliderDarkClass: false,
      menuIsOpen: false,
      menuOverlayOpened: false
    };
    //Window breakpoints
    $(window).breakpoints({
      triggerOnInit: true,
      breakpoints: [{
        name: "xs",
        width: 0
      }, {
        name: "sm",
        width: 576
      }, {
        name: "md",
        width: 768
      }, {
        name: "lg",
        width: 1025
      }, {
        name: "xl",
        width: 1200
      }]
    });
    var currentBreakpoint = $(window).breakpoints("getBreakpoint");
    $body.addClass("breakpoint-" + currentBreakpoint);
    $(window).bind("breakpoint-change", function (breakpoint) {
      $body.removeClass("breakpoint-" + breakpoint.from);
      $body.addClass("breakpoint-" + breakpoint.to);
    });
    $(window).bind("breakpoint-change", function (event) {
      $(window).breakpoints("greaterEqualTo", "lg", function () {
        $body.addClass("b--desktop");
        $body.removeClass("b--responsive");
      });
      $(window).breakpoints("lessThan", "lg", function () {
        $body.removeClass("b--desktop");
        $body.addClass("b--responsive");
      });
    });
    INSPIRO.core = {
      functions: function () {
        INSPIRO.core.scrollTop();
        INSPIRO.core.rtlStatus();
        INSPIRO.core.equalize();
        INSPIRO.core.customHeight();
        INSPIRO.core.darkTheme();
      },
      scrollTop: function () {
        var $scrollTop = $("#scrollTop");
        if ($scrollTop.length > 0) {
          var scrollOffset = $body.attr("data-offset") || 400;
          if ($window.scrollTop() > scrollOffset) {
            if ($body.hasClass("frame")) {
              $scrollTop.css({
                bottom: "46px",
                opacity: 1,
                "z-index": 199
              });
            } else {
              $scrollTop.css({
                bottom: "26px",
                opacity: 1,
                "z-index": 199
              });
            }
          } else {
            $scrollTop.css({
              bottom: "16px",
              opacity: 0
            });
          }
          $scrollTop.off("click").on("click", function () {
            $("body,html").stop(true).animate({
              scrollTop: 0
            }, 1000, "easeInOutExpo");
            return false;
          });
        }
      },
      rtlStatus: function () {
        var $rtlStatusCheck = $("html").attr("dir");
        if ($rtlStatusCheck == "rtl") {
          return true;
        }
        return false;
      },
      equalize: function () {
        var $equalize = $(".equalize");
        if ($equalize.length > 0) {
          $equalize.each(function () {
            var elem = $(this),
              selectorItem = elem.find(elem.attr("data-equalize-item")) || "> div",
              maxHeight = 0;
            selectorItem.each(function () {
              if ($(this).outerHeight(true) > maxHeight) {
                maxHeight = $(this).outerHeight(true);
              }
            });
            selectorItem.height(maxHeight);
          });
        }
      },
      customHeight: function (setHeight) {
        var $customHeight = $(".custom-height");
        if ($customHeight.length > 0) {
          $customHeight.each(function () {
            var elem = $(this),
              elemHeight = elem.attr("data-height") || 400,
              elemHeightLg = elem.attr("data-height-lg") || elemHeight,
              elemHeightMd = elem.attr("data-height-md") || elemHeightLg,
              elemHeightSm = elem.attr("data-height-sm") || elemHeightMd,
              elemHeightXs = elem.attr("data-height-xs") || elemHeightSm;
            function customHeightBreakpoint(setHeight) {
              if (setHeight) {
                elem = setHeight;
              }
              switch ($(window).breakpoints("getBreakpoint")) {
                case "xs":
                  elem.height(elemHeightXs);
                  break;
                case "sm":
                  elem.height(elemHeightSm);
                  break;
                case "md":
                  elem.height(elemHeightMd);
                  break;
                case "lg":
                  elem.height(elemHeightLg);
                  break;
                case "xl":
                  elem.height(elemHeight);
                  break;
              }
            }
            customHeightBreakpoint(setHeight);
            $(window).resize(function () {
              setTimeout(function () {
                customHeightBreakpoint(setHeight);
              }, 100);
            });
          });
        }
      },
      darkTheme: function () {
        var $darkElement = $("[data-dark-src]"),
          $lightBtnTrigger = $("#light-mode"),
          $darkBtnTrigger = $("#dark-mode"),
          darkColorScheme = "darkColorScheme",
          defaultDark = $body.hasClass("dark");
        if (typeof Cookies.get(darkColorScheme) !== "undefined") {
          // $body.addClass("dark");
        }
        $darkBtnTrigger.on("click", function (e) {
          darkElemSrc();
          $body.addClass("dark");
          INSPIRO.elements.shapeDivider();
          Cookies.set(darkColorScheme, true, {
            expires: Number(365)
          });
        });
        $lightBtnTrigger.on("click", function (e) {
          lightElemSrc();
          $body.removeClass("dark");
          INSPIRO.elements.shapeDivider();
          Cookies.remove(darkColorScheme);
        });
        if ($body.hasClass("dark")) {
          darkElemSrc();
        }
        function darkElemSrc() {
          $darkElement.each(function () {
            var elem = $(this),
              elemOriginalSrc = elem.attr("src"),
              elemDarkSrc = elem.attr("data-dark-src");
            if (elemDarkSrc) {
              elem.attr("data-original-src", elemOriginalSrc);
              elem.attr("src", elemDarkSrc);
            }
          });
        }
        function lightElemSrc() {
          $darkElement.each(function () {
            var elem = $(this),
              elemLightSrc = elem.attr("data-original-src");
            if (elemLightSrc) {
              elem.attr("src", elemLightSrc);
            }
          });
        }
      }
    };
    INSPIRO.header = {
      functions: function () {
        INSPIRO.header.logoStatus();
        INSPIRO.header.stickyHeader();
        INSPIRO.header.topBar();
        INSPIRO.header.search();
        INSPIRO.header.mainMenu();
        INSPIRO.header.mainMenuResponsiveShow();
        INSPIRO.header.mainMenuOverlay();
        INSPIRO.header.pageMenu();
        INSPIRO.header.sidebarOverlay();
        INSPIRO.header.dotsMenu();
        INSPIRO.header.onepageMenu();
      },
      logoStatus: function (status) {
        var headerLogoDefault = headerLogo.find($(".logo-default")),
          headerLogoDark = headerLogo.find($(".logo-dark")),
          headerLogoFixed = headerLogo.find(".logo-fixed"),
          headerLogoResponsive = headerLogo.find(".logo-responsive");
        if ($header.hasClass("header-sticky") && headerLogoFixed.length > 0) {
          headerLogoDefault.css("display", "none");
          headerLogoDark.css("display", "none");
          headerLogoResponsive.css("display", "none");
          headerLogoFixed.css("display", "block");
        } else {
          headerLogoDefault.removeAttr("style");
          headerLogoDark.removeAttr("style");
          headerLogoResponsive.removeAttr("style");
          headerLogoFixed.removeAttr("style");
        }
        $(window).breakpoints("lessThan", "lg", function () {
          if (headerLogoResponsive.length > 0) {
            headerLogoDefault.css("display", "none");
            headerLogoDark.css("display", "none");
            headerLogoFixed.css("display", "none");
            headerLogoResponsive.css("display", "block");
          }
        });
      },
      stickyHeader: function () {
        var shrinkHeader = $header.attr("data-shrink") || 0,
          shrinkHeaderActive = $header.attr("data-sticky-active") || 200,
          scrollOnTop = $window.scrollTop();
        if ($header.hasClass("header-modern")) {
          shrinkHeader = 300;
        }
        $(window).breakpoints("greaterEqualTo", "lg", function () {
          if (!$header.is(".header-disable-fixed")) {
            if (scrollOnTop > $headerOffsetTop + shrinkHeader) {
              $header.addClass("header-sticky");
              if (scrollOnTop > $headerOffsetTop + shrinkHeaderActive) {
                $header.addClass("sticky-active");
                if (Settings.submenuLight && Settings.headerHasDarkClass) {
                  $header.removeClass("dark");
                  Settings.headerDarkClassRemoved = true;
                }
                INSPIRO.header.logoStatus();
              }
            } else {
              $header.removeClass().addClass($headerCurrentClasses);
              if (Settings.sliderDarkClass && Settings.headerHasDarkClass) {
                $header.removeClass("dark");
                Settings.headerDarkClassRemoved = true;
              }
              INSPIRO.header.logoStatus();
            }
          }
        });
        $(window).breakpoints("lessThan", "lg", function () {
          if ($header.attr("data-responsive-fixed") == "true") {
            if (scrollOnTop > $headerOffsetTop + shrinkHeader) {
              $header.addClass("header-sticky");
              if (scrollOnTop > $headerOffsetTop + shrinkHeaderActive) {
                $header.addClass("sticky-active");
                if (Settings.submenuLight) {
                  $header.removeClass("dark");
                  Settings.headerDarkClassRemoved = true;
                }
                INSPIRO.header.logoStatus();
              }
            } else {
              $header.removeClass().addClass($headerCurrentClasses);
              if (Settings.headerDarkClassRemoved == true && $body.hasClass("mainMenu-open")) {
                $header.removeClass("dark");
              }
              INSPIRO.header.logoStatus();
            }
          }
        });
      },
      //chkd
      topBar: function () {
        if ($topbar.length > 0) {
          $("#topbar .topbar-dropdown .topbar-form").each(function (index, element) {
            if ($window.width() - ($(element).width() + $(element).offset().left) < 0) {
              $(element).addClass("dropdown-invert");
            }
          });
        }
      },
      search: function () {
        var $search = $("#search");
        if ($search.length > 0) {
          var searchBtn = $("#btn-search"),
            searchBtnClose = $("#btn-search-close"),
            searchInput = $search.find(".form-control");
          function openSearch() {
            $body.addClass("search-open");
            searchInput.focus();
          }
          function closeSearch() {
            $body.removeClass("search-open");
            searchInput.value = "";
          }
          searchBtn.on("click", function () {
            openSearch();
            return false;
          });
          searchBtnClose.on("click", function () {
            closeSearch();
            return false;
          });
          document.addEventListener("keyup", function (ev) {
            if (ev.keyCode == 27) {
              closeSearch();
            }
          });
        }
      },
      mainMenu: function () {
        if ($mainMenu.length > 0) {
          $mainMenu.find(".dropdown, .dropdown-submenu").prepend('<span class="dropdown-arrow"></span>');
          var $menuItemLinks = $('#mainMenu nav > ul > li.dropdown > a[href="#"], #mainMenu nav > ul > li.dropdown > .dropdown-arrow, .dropdown-submenu > a[href="#"], .dropdown-submenu > .dropdown-arrow, .dropdown-submenu > span, .page-menu nav > ul > li.dropdown > a'),
            $triggerButton = $("#mainMenu-trigger a, #mainMenu-trigger button"),
            processing = false,
            triggerEvent;
          $triggerButton.on("click", function (e) {
            var elem = $(this);
            e.preventDefault();
            $(window).breakpoints("lessThan", "lg", function () {
              var openMenu = function () {
                if (!processing) {
                  processing = true;
                  Settings.menuIsOpen = true;
                  if (Settings.submenuLight && Settings.headerHasDarkClass) {
                    $header.removeClass("dark");
                    Settings.headerDarkClassRemoved = true;
                  } else {
                    if (Settings.headerHasDarkClass && Settings.headerDarkClassRemoved) {
                      $header.addClass("dark");
                    }
                  }
                  elem.addClass("toggle-active");
                  $body.addClass("mainMenu-open");
                  INSPIRO.header.logoStatus();
                  $mainMenu.animate({
                    // OIMMEI: subtracting the header height to fix an issue in the theme.
                    "min-height": $window.height() - $mainMenu.parent().outerHeight()
                  }, {
                    duration: 500,
                    easing: "easeInOutQuart",
                    start: function () {
                      setTimeout(function () {
                        $mainMenu.addClass("menu-animate");
                      }, 300);
                    },
                    complete: function () {
                      processing = false;
                    }
                  });
                }
              };
              var closeMenu = function () {
                if (!processing) {
                  processing = true;
                  Settings.menuIsOpen = false;
                  INSPIRO.header.logoStatus();
                  $mainMenu.animate({
                    "min-height": 0
                  }, {
                    start: function () {
                      $mainMenu.removeClass("menu-animate");
                    },
                    done: function () {
                      $body.removeClass("mainMenu-open");
                      elem.removeClass("toggle-active");
                      if (Settings.submenuLight && Settings.headerHasDarkClass && Settings.headerDarkClassRemoved && !$header.hasClass("header-sticky")) {
                        $header.addClass("dark");
                      }
                      if (Settings.sliderDarkClass && Settings.headerHasDarkClass && Settings.headerDarkClassRemoved) {
                        $header.removeClass("dark");
                        Settings.headerDarkClassRemoved = true;
                      }
                    },
                    duration: 500,
                    easing: "easeInOutQuart",
                    complete: function () {
                      processing = false;
                    }
                  });
                }
              };
              if (!Settings.menuIsOpen) {
                triggerEvent = openMenu();
              } else {
                triggerEvent = closeMenu();
              }
            });
          });
          $menuItemLinks.on("click", function (e) {
            $(this).parent("li").siblings().removeClass("hover-active");
            if ($body.hasClass("b--responsive") || $mainMenu.hasClass("menu-onclick")) {
              $(this).parent("li").toggleClass("hover-active");
            }
            e.stopPropagation();
            e.preventDefault();
          });
          $body.on("click", function (e) {
            $mainMenu.find(".hover-active").removeClass("hover-active");
          });
          $(window).on("resize", function () {
            if ($body.hasClass("mainMenu-open")) {
              if (Settings.menuIsOpen) {
                $mainMenuTriggerBtn.trigger("click");
                $mainMenu.find(".hover-active").removeClass("hover-active");
              }
            }
          });

          /*invert menu fix*/
          $(window).breakpoints("greaterEqualTo", "lg", function () {
            var $menuLastItem = $("nav > ul > li:last-child"),
              $menuLastItemUl = $("nav > ul > li:last-child > ul"),
              $menuLastInvert = $menuLastItemUl.width() - $menuLastItem.width(),
              $menuItems = $("nav > ul > li").find(".dropdown-menu");
            $menuItems.css("display", "block");
            $(".dropdown:not(.mega-menu-item) ul ul").each(function (index, element) {
              if ($window.width() - ($(element).width() + $(element).offset().left) < 0) {
                $(element).addClass("menu-invert");
              }
            });
            if ($menuLastItemUl.length > 0) {
              if ($window.width() - ($menuLastItemUl.width() + $menuLastItem.offset().left) < 0) {
                $menuLastItemUl.addClass("menu-last");
              }
            }
            $menuItems.css("display", "");
          });
        }
      },
      mainMenuResponsiveShow: function () {},
      mainMenuOverlay: function () {},
      pageMenu: function () {
        var $pageMenu = $(".page-menu");
        if ($pageMenu.length > 0) {
          $(window).breakpoints("greaterEqualTo", "lg", function () {
            var shrinkPageMenu = $pageMenu.attr("data-shrink") || $pageMenu.offset().top + 200;
            if ($pageMenu.attr("data-sticky") == "true") {
              $window.scroll(function () {
                if ($window.scrollTop() > shrinkPageMenu) {
                  $pageMenu.addClass("sticky-active");
                  $header.addClass("pageMenu-sticky");
                } else {
                  $pageMenu.removeClass("sticky-active");
                  $header.removeClass("pageMenu-sticky");
                }
              });
            }
          });
          $pageMenu.each(function () {
            $(this).find("#pageMenu-trigger").on("click", function () {
              $pageMenu.toggleClass("page-menu-active");
              $pageMenu.toggleClass("items-visible");
            });
          });
        }
      },
      sidebarOverlay: function () {
        var sidebarOverlay = $("#side-panel");
        if (sidebarOverlay.length > 0) {
          sidebarOverlay.css("opacity", 1);
          $("#close-panel").on("click", function () {
            $body.removeClass("side-panel-active");
            $("#side-panel-trigger").removeClass("toggle-active");
          });
        }
        var $sidepanel = $("#sidepanel"),
          $sidepanelTrigger = $(".panel-trigger"),
          sidepanelProcessing = false,
          sidepanelEvent;
        $sidepanelTrigger.on("click", function (e) {
          e.preventDefault();
          var panelOpen = function () {
            if (!sidepanelProcessing) {
              sidepanelProcessing = true;
              Settings.panelIsOpen = true;
              $sidepanel.addClass("panel-open");
              sidepanelProcessing = false;
            }
          };
          var panelClose = function () {
            if (!sidepanelProcessing) {
              sidepanelProcessing = true;
              Settings.panelIsOpen = false;
              $sidepanel.removeClass("panel-open");
              sidepanelProcessing = false;
            }
          };
          if (!Settings.panelIsOpen) {
            sidepanelEvent = panelOpen();
          } else {
            sidepanelEvent = panelClose();
          }
        });
      },
      dotsMenu: function () {
        var $dotsMenu = $("#dotsMenu"),
          $dotsMenuItems = $dotsMenu.find("ul > li > a");
        if ($dotsMenu.length > 0) {
          $dotsMenuItems.on("click", function () {
            $dotsMenuItems.parent("li").removeClass("current");
            $(this).parent("li").addClass("current");
            $("html, body").stop(true, false).animate({
              scrollTop: $($(this).attr("href")).offset().top
            }, elem.options.speed, "easeInOutExpo");
            return false;
          });
          $dotsMenuItems.parents("li").removeClass("current");
          $dotsMenu.find('a[href="#' + INSPIRO.header.currentSection() + '"]').parent("li").addClass("current");
        }
      },
      onepageMenu: function () {
        if ($mainMenu.hasClass("menu-one-page")) {
          var $currentMenuItem = "current";
          $(window).on("scroll", function () {
            var $currentSection = INSPIRO.header.currentSection();
            $mainMenu.find("nav > ul > li > a").parents("li").removeClass($currentMenuItem);
            $mainMenu.find('nav > ul > li > a[href="#' + $currentSection + '"]').parent("li").addClass($currentMenuItem);
          });
        }
      },
      currentSection: function () {
        var elemCurrent = "body";
        $section.each(function () {
          var elem = $(this),
            elemeId = elem.attr("id");
          if (elem.offset().top - $window.height() / 3 < $window.scrollTop() && elem.offset().top + elem.height() - $window.height() / 3 > $window.scrollTop()) {
            elemCurrent = elemeId;
          }
        });
        return elemCurrent;
      }
    };
    INSPIRO.slider = {
      functions: function () {
        INSPIRO.slider.inspiroSlider();
        INSPIRO.slider.carousel();
      },
      inspiroSlider: function () {
        if ($inspiroSlider.length > 0) {
          //Check if flickity plugin is loaded
          if (typeof $.fn.flickity === "undefined") {
            INSPIRO.elements.notification("Warning", "jQuery flickity slider plugin is missing in plugins.js file.", "danger");
            return true;
          }
          var defaultAnimation = "animate__fadeInUp";
          function animate_captions($elem) {
            var $captions = $elem;
            $captions.each(function () {
              var $captionElem = $(this),
                animationDuration = "600ms";
              if ($(this).attr("data-animate-duration")) {
                animationDuration = $(this).attr("data-animate-duration") + "ms";
              }
              $captionElem.css({
                opacity: 0
              });
              $(this).css("animation-duration", animationDuration);
            });
            $captions.each(function (index) {
              var $captionElem = $(this),
                captionDelay = $captionElem.attr("data-caption-delay") || index * 350 + 1000,
                captionAnimation = $captionElem.attr("data-caption-animate") || defaultAnimation;
              var t = setTimeout(function () {
                $captionElem.css({
                  opacity: 1
                });
                $captionElem.addClass(captionAnimation);
              }, captionDelay);
            });
          }
          function hide_captions($elem) {
            var $captions = $elem;
            $captions.each(function (caption) {
              var caption = $(this),
                captionAnimation = caption.attr("data-caption-animate") || defaultAnimation;
              caption.removeClass(captionAnimation);
              caption.removeAttr("style");
            });
          }
          function start_kenburn(elem) {
            var currentSlide = elem.find(".slide.is-selected"),
              currentSlideKenburns = currentSlide.hasClass("kenburns");
            if (currentSlideKenburns) {
              setTimeout(function () {
                currentSlide.find(".kenburns-bg").addClass("kenburns-bg-animate");
              }, 500);
            }
          }
          function stop_kenburn(elem) {
            var notCurrentSlide = elem.find(".slide:not(.is-selected)");
            notCurrentSlide.find(".kenburns-bg").removeClass("kenburns-bg-animate");
          }
          function slide_dark(elem) {
            var $sliderClassSlide = elem.find(".slide.is-selected");
            if ($sliderClassSlide.hasClass("slide-dark") && Settings.headerHasDarkClass) {
              $header.removeClass("dark");
              Settings.sliderDarkClass = true;
              Settings.headerDarkClassRemoved = true;
            } else {
              Settings.sliderDarkClass = false;
              if (Settings.headerDarkClassRemoved && Settings.headerHasDarkClass && !$body.hasClass("mainMenu-open") && !$header.hasClass("sticky-active")) {
                $header.addClass("dark");
              }
            }
          }
          function sliderHeight(elem, state) {
            var elem,
              headerHeight = $header.outerHeight(),
              topbarHeight = $topbar.outerHeight() || 0,
              windowHeight = $window.height(),
              sliderCurrentHeight = elem.height(),
              screenHeightExtra = headerHeight + topbarHeight,
              $sliderClassSlide = elem.find(".slide"),
              sliderFullscreen = elem.hasClass("slider-fullscreen"),
              screenRatio = elem.hasClass("slider-halfscreen") ? 1 : 1.2,
              transparentHeader = $header.attr("data-transparent"),
              customHeight = elem.attr("data-height"),
              responsiveHeightXs = elem.attr("data-height-xs"),
              containerFullscreen = elem.find(".container").first().outerHeight(),
              contentCrop;
            if (containerFullscreen >= windowHeight) {
              contentCrop = true;
              var sliderMinHeight = containerFullscreen;
              elem.css("min-height", sliderMinHeight + 100);
              $sliderClassSlide.css("min-height", sliderMinHeight + 100);
              elem.find(".flickity-viewport").css("min-height", sliderMinHeight + 100);
            }
            sliderElementsHeight("null");
            function sliderElementsHeight(height) {
              if (height == "null") {
                elem.css("height", "");
                $sliderClassSlide.css("height", "");
                elem.find(".flickity-viewport").css("height", "");
              } else {
                elem.css("height", height);
                $sliderClassSlide.css("height", height);
                elem.find(".flickity-viewport").css("height", height);
              }
            }
            if (customHeight) {
              $(window).breakpoints("greaterEqualTo", "lg", function () {
                sliderElementsHeight(customHeight + "px");
              });
            }
            if (responsiveHeightXs) {
              $(window).breakpoints("lessThan", "md", function () {
                sliderElementsHeight(responsiveHeightXs + "px");
              });
            }
          }
          $inspiroSlider.each(function () {
            var elem = $(this);
            //Plugin Options
            elem.options = {
              cellSelector: elem.attr("data-item") || ".slide",
              prevNextButtons: elem.data("arrows") == false ? false : true,
              pageDots: elem.data("dots") == false ? false : true,
              fade: elem.data("fade") == true ? true : false,
              draggable: elem.data("drag") == true ? true : false,
              freeScroll: elem.data("free-scroll") == true ? true : false,
              wrapAround: elem.data("loop") == false ? false : true,
              groupCells: elem.data("group-cells") == true ? true : false,
              autoPlay: elem.attr("data-autoplay") || 7000,
              pauseAutoPlayOnHover: elem.data("hoverpause") == true ? true : false,
              adaptiveHeight: elem.data("adaptive-height") == false ? false : false,
              asNavFor: elem.attr("data-navigation") || false,
              selectedAttraction: elem.attr("data-attraction") || 0.07,
              friction: elem.attr("data-friction") || 0.9,
              initialIndex: elem.attr("data-initial-index") || 0,
              accessibility: elem.data("accessibility") == true ? true : false,
              setGallerySize: elem.data("gallery-size") == false ? false : false,
              resize: elem.data("resize") == false ? false : false,
              cellAlign: elem.attr("data-align") || "left",
              playWholeVideo: elem.attr("data-play-whole-video") == false ? false : true
            };

            //Kenburns effect
            elem.find(".slide").each(function () {
              if ($(this).hasClass("kenburns")) {
                var elemChild = $(this),
                  elemChildImage = elemChild.css("background-image").replace(/.*\s?url\([\'\"]?/, "").replace(/[\'\"]?\).*/, "");
                if (elemChild.attr("data-bg-image")) {
                  elemChildImage = elemChild.attr("data-bg-image");
                }
                elemChild.prepend('<div class="kenburns-bg" style="background-image:url(' + elemChildImage + ')"></div>');
              }
            });
            elem.find(".slide video").each(function () {
              this.pause();
            });
            $(window).breakpoints("lessThan", "lg", function () {
              elem.options.draggable = true;
            });
            if (elem.find(".slide").length <= 1) {
              elem.options.prevNextButtons = false;
              elem.options.pageDots = false;
              elem.options.autoPlay = false;
              elem.options.draggable = false;
            }
            if (!$.isNumeric(elem.options.autoPlay) && elem.options.autoPlay != false) {
              elem.options.autoPlay = Number(7000);
            }
            if (INSPIRO.core.rtlStatus() == true) {
              elem.options.resize = true;
            }
            sliderHeight(elem);
            var inspiroSliderData = elem.flickity({
              cellSelector: elem.options.cellSelector,
              prevNextButtons: elem.options.prevNextButtons,
              pageDots: elem.options.pageDots,
              fade: elem.options.fade,
              draggable: elem.options.draggable,
              freeScroll: elem.options.freeScroll,
              wrapAround: elem.options.wrapAround,
              groupCells: elem.options.groupCells,
              autoPlay: Number(elem.options.autoPlay),
              pauseAutoPlayOnHover: elem.options.pauseAutoPlayOnHover,
              adaptiveHeight: elem.options.adaptiveHeight,
              asNavFor: elem.options.asNavFor,
              selectedAttraction: Number(elem.options.selectedAttraction),
              friction: elem.options.friction,
              initialIndex: elem.options.initialIndex,
              accessibility: elem.options.accessibility,
              setGallerySize: elem.options.setGallerySize,
              resize: elem.options.resize,
              cellAlign: elem.options.cellAlign,
              rightToLeft: INSPIRO.core.rtlStatus(),
              on: {
                ready: function (index) {
                  var $captions = elem.find(".slide.is-selected .slide-captions > *");
                  slide_dark(elem);
                  sliderHeight(elem);
                  start_kenburn(elem);
                  animate_captions($captions);
                  setTimeout(function () {
                    elem.find(".slide:not(.is-selected) video").each(function (i, video) {
                      video.pause();
                      video.currentTime = 0;
                    });
                  }, 700);
                }
              }
            });
            var flkty = inspiroSliderData.data("flickity");
            function wrapAroundStop() {
              if (flkty.player.state != 'playing') {
                disableAutoplay();
                return;
              }
              var isAtLast = flkty.selectedIndex == flkty.slides.length - 1;
              if (isAtLast) {
                disableAutoplay();
              }
            }
            function disableAutoplay() {
              elem.flickity('stopPlayer');
              elem.off('select.flickity', wrapAroundStop);
            }
            inspiroSliderData.on("change.flickity", function () {
              var $captions = elem.find(".slide.is-selected .slide-captions > *");
              hide_captions($captions);
              setTimeout(function () {
                stop_kenburn(elem);
              }, 1000);
              start_kenburn(elem);
              animate_captions($captions);
              elem.find(".slide video").each(function (i, video) {
                video.currentTime = 0;
              });
            });
            inspiroSliderData.on("select.flickity", function () {
              //  INSPIRO.elements.backgroundImage();
              var $captions = elem.find(".slide.is-selected .slide-captions > *");
              slide_dark(elem);
              sliderHeight(elem);
              start_kenburn(elem);
              animate_captions($captions);
              var video = flkty.selectedElement.querySelector("video");
              if (video) {
                video.play();
                flkty.options.autoPlay = Number(video.duration * 1000);
              } else {
                flkty.options.autoPlay = Number(elem.options.autoPlay);
              }
              if (elem.options.wrapAround == false) {
                wrapAroundStop();
              }
            });
            inspiroSliderData.on("dragStart.flickity", function () {
              var $captions = elem.find(".slide:not(.is-selected) .slide-captions > *");
              hide_captions($captions);
            });
            $(window).resize(function () {
              sliderHeight(elem);
              elem.flickity("reposition");
            });
          });
        }
      },
      carousel: function (elem) {
        if (elem) {
          $carousel = elem;
        }
        if ($carousel.length > 0) {
          //Check if flickity plugin is loaded
          if (typeof $.fn.flickity === "undefined") {
            INSPIRO.elements.notification("Warning", "jQuery flickity plugin is missing in plugins.js file.", "danger");
            return true;
          }
          $carousel.each(function () {
            var elem = $(this);
            //Plugin Options
            elem.options = {
              containerWidth: elem.width(),
              items: elem.attr("data-items") || 4,
              itemsLg: elem.attr("data-items-lg"),
              itemsMd: elem.attr("data-items-md"),
              itemsSm: elem.attr("data-items-sm"),
              itemsXs: elem.attr("data-items-xs"),
              margin: elem.attr("data-margin") || 10,
              cellSelector: elem.attr("data-item") || false,
              prevNextButtons: elem.data("arrows") == false ? false : true,
              pageDots: elem.data("dots") == false ? false : true,
              fade: elem.data("fade") == true ? true : false,
              draggable: elem.data("drag") == false ? false : true,
              freeScroll: elem.data("free-scroll") == true ? true : false,
              wrapAround: elem.data("loop") == false ? false : true,
              groupCells: elem.data("group-cells") == true ? true : false,
              autoPlay: elem.attr("data-autoplay") || 7000,
              pauseAutoPlayOnHover: elem.data("hover-pause") == false ? false : true,
              asNavFor: elem.attr("data-navigation") || false,
              lazyLoad: elem.data("lazy-load") == true ? true : false,
              initialIndex: elem.attr("data-initial-index") || 0,
              accessibility: elem.data("accessibility") == true ? true : false,
              adaptiveHeight: elem.data("adaptive-height") == true ? true : false,
              autoWidth: elem.data("auto-width") == true ? true : false,
              setGallerySize: elem.data("gallery-size") == false ? false : true,
              resize: elem.data("resize") == false ? false : true,
              cellAlign: elem.attr("data-align") || "left",
              contain: elem.data("contain") == false ? false : true,
              rightToLeft: INSPIRO.core.rtlStatus()
            };

            //Calculate min/max on responsive breakpoints
            elem.options.itemsLg = elem.options.itemsLg || Math.min(Number(elem.options.items), Number(4));
            elem.options.itemsMd = elem.options.itemsMd || Math.min(Number(elem.options.itemsLg), Number(3));
            elem.options.itemsSm = elem.options.itemsSm || Math.min(Number(elem.options.itemsMd), Number(2));
            elem.options.itemsXs = elem.options.itemsXs || Math.min(Number(elem.options.itemsSm), Number(1));
            var setResponsiveColumns;
            function getCarouselColumns() {
              switch ($(window).breakpoints("getBreakpoint")) {
                case "xs":
                  setResponsiveColumns = Number(elem.options.itemsXs);
                  break;
                case "sm":
                  setResponsiveColumns = Number(elem.options.itemsSm);
                  break;
                case "md":
                  setResponsiveColumns = Number(elem.options.itemsMd);
                  break;
                case "lg":
                  setResponsiveColumns = Number(elem.options.itemsLg);
                  break;
                case "xl":
                  setResponsiveColumns = Number(elem.options.items);
                  break;
              }
            }
            getCarouselColumns();
            var itemWidth;
            elem.find("> *").wrap('<div class="polo-carousel-item">');
            if (elem.hasClass("custom-height")) {
              elem.options.setGallerySize = false;
              INSPIRO.core.customHeight(elem);
              INSPIRO.core.customHeight(elem.find(".polo-carousel-item"));
              var carouselCustomHeightStatus = true;
            }
            if (Number(elem.options.items) !== 1) {
              if (elem.options.autoWidth || carouselCustomHeightStatus) {
                elem.find(".polo-carousel-item").css({
                  "padding-right": elem.options.margin + "px"
                });
              } else {
                itemWidth = (elem.options.containerWidth + Number(elem.options.margin)) / setResponsiveColumns;
                elem.find(".polo-carousel-item").css({
                  width: itemWidth,
                  "padding-right": elem.options.margin + "px"
                });
              }
            } else {
              elem.find(".polo-carousel-item").css({
                width: "100%",
                "padding-right": "0 !important;"
              });
            }
            if (elem.options.autoWidth || carouselCustomHeightStatus) {
              elem.options.cellAlign = "center";
            }
            if (elem.options.autoPlay == "false") {
              elem.options.autoPlay = false;
            }
            if (!$.isNumeric(elem.options.autoPlay) && elem.options.autoPlay != false) {
              elem.options.autoPlay = Number(7000);
            }

            //Initializing plugin and passing the options
            var $carouselElem = $(elem);
            $carouselElem.imagesLoaded(function () {
              // init Isotope after all images have loaded
              $carouselElem.flickity({
                cellSelector: elem.options.cellSelector,
                prevNextButtons: elem.options.prevNextButtons,
                pageDots: elem.options.pageDots,
                fade: elem.options.fade,
                draggable: elem.options.draggable,
                freeScroll: elem.options.freeScroll,
                wrapAround: elem.options.wrapAround,
                groupCells: elem.options.groupCells,
                autoPlay: Number(elem.options.autoPlay),
                pauseAutoPlayOnHover: elem.options.pauseAutoPlayOnHover,
                adaptiveHeight: elem.options.adaptiveHeight,
                asNavFor: elem.options.asNavFor,
                initialIndex: elem.options.initialIndex,
                accessibility: elem.options.accessibility,
                setGallerySize: elem.options.setGallerySize,
                resize: elem.options.resize,
                cellAlign: elem.options.cellAlign,
                rightToLeft: elem.options.rightToLeft,
                contain: elem.options.contain
              });
              elem.addClass("carousel-loaded");
            });
            if (elem.hasClass("custom-height")) {
              INSPIRO.core.customHeight(elem);
            }
            if (Number(elem.options.items) !== 1) {
              $(window).on("resize", function () {
                setTimeout(function () {
                  getCarouselColumns();
                  itemWidth = (elem.width() + Number(elem.options.margin)) / setResponsiveColumns;
                  if (elem.options.autoWidth || carouselCustomHeightStatus) {
                    elem.find(".polo-carousel-item").css({
                      "padding-right": elem.options.margin + "px"
                    });
                  } else {
                    if (!elem.hasClass("custom-height")) {
                      elem.find(".polo-carousel-item").css({
                        width: itemWidth,
                        "padding-right": elem.options.margin + "px"
                      });
                    } else {
                      INSPIRO.core.customHeight(elem.find(".polo-carousel-item"));
                      elem.find(".polo-carousel-item").css({
                        width: itemWidth,
                        "padding-right": elem.options.margin + "px"
                      });
                    }
                  }
                  elem.find(".flickity-slider").css({
                    "margin-right": -elem.options.margin / setResponsiveColumns + "px"
                  });
                  elem.flickity('resize');
                  elem.flickity("reposition");
                }, 300);
              });
            }
          });
        }
      }
    };
    INSPIRO.elements = {
      functions: function () {
        INSPIRO.elements.shapeDivider();
        INSPIRO.elements.naTo();
        INSPIRO.elements.morphext();
        INSPIRO.elements.buttons();
        INSPIRO.elements.accordion();
        INSPIRO.elements.animations();
        INSPIRO.elements.parallax();
        INSPIRO.elements.backgroundImage();
        INSPIRO.elements.responsiveVideos();
        INSPIRO.elements.countdownTimer();
        INSPIRO.elements.progressBar();
        INSPIRO.elements.pieChart();
        // INSPIRO.elements.maps();
        INSPIRO.elements.gridLayout();
        INSPIRO.elements.tooltip();
        INSPIRO.elements.popover();
        INSPIRO.elements.magnificPopup();
        INSPIRO.elements.yTPlayer();
        INSPIRO.elements.vimeoPlayer();
        INSPIRO.elements.modal();
        INSPIRO.elements.sidebarFixed();
        INSPIRO.elements.clipboard();
        INSPIRO.elements.bootstrapSwitch();
        INSPIRO.elements.countdown();
        INSPIRO.elements.other();
        INSPIRO.elements.videoBackground();
        INSPIRO.elements.forms();
        INSPIRO.elements.formValidation();
        INSPIRO.elements.formAjaxProcessing();
        INSPIRO.elements.floatingDiv();
        INSPIRO.elements.wizard();
        INSPIRO.elements.counters();
      },
      forms: function () {
        //Show hide password
        var $showHidePassword = $(".show-hide-password");
        if ($showHidePassword.length > 0) {
          $showHidePassword.each(function () {
            var elem = $(this),
              $iconEye = "icon-eye",
              $iconClosedEye = "icon-eye-off",
              elemShowHideIcon = elem.find(".input-group-text i"),
              elemInput = elem.children("input");
            elem.find(".input-group-text i").css({
              cursor: "pointer"
            });
            elemShowHideIcon.on("click", function (event) {
              event.preventDefault();
              if (elem.children("input").attr("type") == "text") {
                elemInput.attr("type", "password");
                elemShowHideIcon.removeClass($iconEye);
                elemShowHideIcon.addClass($iconClosedEye);
              } else if (elem.children("input").attr("type") == "password") {
                elemInput.attr("type", "text");
                elemShowHideIcon.addClass($iconEye);
                elemShowHideIcon.removeClass($iconClosedEye);
              }
            });
          });
        }

        /*   if($('#pwd-container').length > 0) {
          var pwdOptions = {};
            pwdOptions.ui = {
                container: "#pwd-container",
                viewports: {
                    progress: ".pwstrength_viewport_progress",
                    verdict: ".pwstrength_viewport_verdict"
                }
            };
            pwdOptions.common = {
                onLoad: function () {
                    $('#messages').text('Start typing password');
                },
                zxcvbn: true,
                zxcvbnTerms: ['samurai', 'shogun', 'bushido', 'daisho', 'seppuku'],
                userInputs: ['#year', '#familyname']
            };
            $(':password').pwstrength(pwdOptions);
          } */
      },

      formValidation: function () {
        var forms = document.getElementsByClassName("needs-validation");
        var validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener("submit", function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          }, false);
        });
      },
      formAjaxProcessing: function () {
        var $ajaxForm = $(".widget-contact-form:not(.custom-js), .ajax-form:not(.custom-js)");
        if ($ajaxForm.length > 0) {
          $ajaxForm.each(function () {
            var elem = $(this),
              elemCustomRedirectPage = elem.attr("data-success-page");
            var button = elem.find("button#form-submit"),
              buttonText = button.html();
            var validation = Array.prototype.filter.call(elem, function (form) {
              form.addEventListener("submit", function (event) {
                if (form[0].checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
                }
                form.classList.add("was-validated");
                return false;
              }, false);
            });
            elem.submit(function (event) {
              event.preventDefault();
              var post_url = $(this).attr("action");
              var request_method = $(this).attr("method");
              if (elem[0].checkValidity() === false) {
                event.stopPropagation();
                elem.addClass("was-validated");
              } else {
                $(elem).removeClass("was-validated");
                button.html('<i class="icon-loader fa-spin"> </i> Sending...');
                $.ajax({
                  url: post_url,
                  type: request_method,
                  data: new FormData(this),
                  cache: false,
                  contentType: false,
                  processData: false,
                  success: function (text) {
                    if (text.response == "success") {
                      if (elem.find(".g-recaptcha").children("div").length > 0) {
                        grecaptcha.reset();
                      }
                      $(elem)[0].reset();
                      button.html(buttonText);
                      if (elemCustomRedirectPage) {
                        window.location.href = elemCustomRedirectPage;
                      } else {
                        $.notify({
                          message: text.message
                        }, {
                          type: "success",
                          delay: elem.attr("data-success-message-delay") || 20000
                        });
                      }
                    } else {
                      if (elem.find(".g-recaptcha").children("div").length > 0) {
                        grecaptcha.reset();
                      }
                      $.notify({
                        message: elem.attr("data-error-message") || text.message
                      }, {
                        type: "danger",
                        delay: elem.attr("data-error-message-delay") || 20000
                      });
                      var t = setTimeout(function () {
                        button.html(buttonText);
                      }, 1000);
                    }
                  }
                });
              }
            });
          });
        }
      },
      wizard: function () {
        //Show hide password
      },
      floatingDiv: function () {
        var $floatingDiv = $(".floating-div");
        if ($floatingDiv.length > 0) {
          $floatingDiv.each(function () {
            var elem = $(this),
              elemAlign = elem.attr("data-placement") || "bottom",
              elemScrollOffset = elem.attr("data-offset") || 50,
              elemVisible = elem.attr("data-visibile") || "all",
              elemHeight = elem.outerHeight(),
              elemWidth = elem.outerWidth();

            /* if(elemVisible !== "all") {
              }else {
              if ($body.hasClass("b--desktop")) {
                }
            } */
            $window.scroll(function () {
              var scrollOffset = $body.attr("data-offset") || 80;
              if ($window.scrollTop() > scrollOffset) {
                elem.css(elemAlign, "20px");
              } else {
                elem.css(elemAlign, -elemHeight + "px");
              }
            });
          });
        }
      },
      other: function (context) {
        //Lazy Load
        var myLazyLoad = new LazyLoad({
          elements_selector: ".lazy",
          class_loaded: "img-loaded"
        });
        if ($(".toggle-item").length > 0) {
          $(".toggle-item").each(function () {
            var elem = $(this),
              toggleItemClass = elem.attr("data-class"),
              toggleItemClassTarget = elem.attr("data-target");
            elem.on("click", function () {
              if (toggleItemClass) {
                if (toggleItemClassTarget) {
                  $(toggleItemClassTarget).toggleClass(toggleItemClass);
                } else {
                  elem.toggleClass(toggleItemClass);
                }
              }
              elem.toggleClass("toggle-active");
              return false;
            });
          });
        }
        /*Dropdown popup invert*/
        var $pDropdown = $(".p-dropdown");
        if ($pDropdown.length > 0) {
          $pDropdown.each(function () {
            var elem = $(this);
            elem.find("> a").on("click", function () {
              elem.toggleClass("dropdown-active");
              return false;
            });
            if ($window.width() / 2 > elem.offset().left) {
              elem.addClass("p-dropdown-invert");
            }
          });
        }

        // Show/hide div
        var $showHide = $(".show-hide");
        if ($showHide.length > 0) {
          $showHide.each(function () {
            var elem = $(this),
              elemHide = elem.attr("data-hide"),
              elemShow = elem.attr("data-show");
            elem.on("click", function () {
              $(elemHide).hide();
              $(elemShow).show();
              return false;
            });
          });
        }
      },
      naTo: function () {
        var elem = $("a.scroll-to, #dotsMenu > ul > li > a, .menu-one-page nav > ul > li > a:not([data-lightbox])");
        ;
        elem.on("click", function () {
          //Plugin Options
          elem.options = {
            offsetTop: elem.attr("data-offset") || 30,
            headerHeight: elem.attr("data-header-height") || 0,
            speed: elem.attr("data-speed") || 1500,
            height: elem.height()
          };
          $(window).breakpoints("lessThan", "lg", function () {
            if (Settings.menuIsOpen) {
              $mainMenuTriggerBtn.trigger("click");
            }
            if ($header.attr("data-responsive-fixed") === true) {
              elem.options.headerHeight = $header.height();
            }
          });
          $(window).breakpoints("greaterEqualTo", "lg", function () {
            if ($header.length > 0) {
              elem.options.headerHeight = $header.height();
            }
          });
          if ($(".dashboard").length > 0) {
            elem.options.offsetTop = 30;
          }
          $("html, body").stop(true, false).animate({
            scrollTop: $($(this).attr("href")).offset().top - (elem.options.headerHeight + elem.options.offsetTop)
          }, elem.options.speed, "easeInOutExpo");
          return false;
        });
      },
      morphext: function () {
        var $textRotator = $(".text-rotator");
        if ($textRotator.length > 0) {
          //Check if Morphext plugin is loaded
          if (typeof $.fn.Morphext === "undefined") {
            INSPIRO.elements.notification("Warning", "jQuery Morphext plugin is missing in plugins.js file.", "danger");
            return true;
          }
          $textRotator.each(function () {
            var elem = $(this);
            //Plugin Options
            elem.options = {
              animate_prefix: "animate__",
              animation: elem.attr("data-animate") || "fadeIn",
              separator: elem.attr("data-separator") || ",",
              speed: elem.attr("data-speed") || 2000,
              height: elem.height()
            };
            elem.css({
              "min-height": elem.options.height
            });
            //Initializing Morphext plugin and passing the options
            elem.Morphext({
              animation: elem.options.animate_prefix + elem.options.animation,
              separator: elem.options.separator,
              speed: Number(elem.options.speed)
            });
          });
        }
      },
      buttons: function () {
        //Button slide width
        if ($(".btn-slide[data-width]")) {
          $(".btn.btn-slide[data-width]").each(function () {
            var elem = $(this),
              elemWidth = elem.attr("data-width"),
              elemDefaultWidth;
            switch (true) {
              case elem.hasClass("btn-lg"):
                elemDefaultWidth = "60";
                break;
              case elem.hasClass("btn-sm"):
                elemDefaultWidth = "36";
                break;
              case elem.hasClass("btn-xs"):
                elemDefaultWidth = "28";
                break;
              default:
                elemDefaultWidth = "48";
                break;
            }
            elem.hover(function () {
              $(this).css("width", elemWidth + "px");
            }, function () {
              $(this).css("width", elemDefaultWidth + "px");
            });
          });
        }
      },
      accordion: function () {
        var accordionType = "accordion",
          toogleType = "toggle",
          accordionItem = "ac-item",
          itemActive = "ac-active",
          itemTitle = "ac-title",
          itemContent = "ac-content",
          $accs = $("." + accordionItem);
        $accs.length && ($accs.each(function () {
          var $item = $(this);
          $item.hasClass(itemActive) ? $item.addClass(itemActive) : $item.find("." + itemContent).hide();
        }), $("." + itemTitle).on("click", function (e) {
          var $link = $(this),
            $item = $link.parents("." + accordionItem),
            $acc = $item.parents("." + accordionType);
          $item.hasClass(itemActive) ? $acc.hasClass(toogleType) ? ($item.removeClass(itemActive), $link.next("." + itemContent).slideUp()) : ($acc.find("." + accordionItem).removeClass(itemActive), $acc.find("." + itemContent).slideUp()) : ($acc.hasClass(toogleType) || ($acc.find("." + accordionItem).removeClass(itemActive), $acc.find("." + itemContent).slideUp("fast")), $item.addClass(itemActive), $link.next("." + itemContent).slideToggle("fast")), e.preventDefault();
          if ($link.find(".custom-radio").length > 0) {
            $link.find(".custom-radio .custom-control-input").prop("checked", true);
            return false;
          }
          return false;
        }));
      },
      animations: function () {
        var $animate = $("[data-animate]");
        if ($animate.length > 0) {
          //Check if jQuery Waypoint plugin is loaded
          if (typeof Waypoint === "undefined") {
            INSPIRO.elements.notification("Warning", "jQuery Waypoint plugin is missing in plugins.js file.", "danger");
            return true;
          }
          $animate.each(function () {
            var elem = $(this);
            elem.addClass("animate__animated");
            //Plugin Options
            elem.options = {
              animate_prefix: "animate__",
              animation: elem.attr("data-animate") || "fadeIn",
              delay: elem.attr("data-animate-delay") || 200,
              direction: ~elem.attr("data-animate").indexOf("Out") ? "back" : "forward",
              offsetX: elem.attr("data-animate-offsetX") || 0,
              offsetY: elem.attr("data-animate-offsetY") || -100
            };
            //Initializing jQuery Waypoint plugin and passing the options from data animations attributes
            if (elem.options.direction == "forward") {
              new Waypoint({
                element: elem,
                handler: function () {
                  var t = setTimeout(function () {
                    elem.addClass(elem.options.animate_prefix + elem.options.animation + " visible");
                  }, elem.options.delay);
                  this.destroy();
                },
                offset: "100%"
              });
            } else {
              elem.addClass("visible");
              elem.on("click", function () {
                elem.addClass(elem.options.animate_prefix + elem.options.animation);
                return false;
              });
            }
            //Demo play
            if (elem.parents(".demo-play-animations").length) {
              elem.on("click", function () {
                elem.removeClass(elem.options.animate_prefix + elem.options.animation);
                var t = setTimeout(function () {
                  elem.addClass(elem.options.animate_prefix + elem.options.animation);
                }, 50);
                return false;
              });
            }
          });
        }
      },
      parallax: function () {
        var $parallax = $("[data-bg-parallax]");
        if ($parallax.length > 0) {
          //Check if scrolly plugin is loaded
          if (typeof $.fn.scrolly === "undefined") {
            INSPIRO.elements.notification("Warning", "jQuery scrolly plugin is missing in plugins.js file.", "danger");
            return true;
          }
          $parallax.each(function () {
            var $elem = $(this),
              elemImageSrc = $elem.attr("data-bg-parallax"),
              elemImageVelocity = $elem.attr("data-velocity") || "-.140";
            $elem.prepend('<div class="parallax-container" data-bg="' + elemImageSrc + '"  data-velocity="' + elemImageVelocity + '" style="background: url(' + elemImageSrc + ')"></div>');
            var parallaxLazy = new LazyLoad({
              elements_selector: ".parallax-container",
              class_loaded: "img-loaded"
            });
            $elem.find(".parallax-container").scrolly({
              bgParallax: true
            });
          });
        }
      },
      backgroundImage: function () {
        var $backgroundImage = $("[data-bg-image]");
        if ($backgroundImage.length > 0) {
          $backgroundImage.each(function () {
            var $elem = $(this),
              elemImageSrc = $elem.attr("data-bg-image");
            $elem.addClass("lazy-bg");
            $elem.attr("data-bg", elemImageSrc);
          });
          var laazybg = new LazyLoad({
            elements_selector: ".lazy-bg",
            class_loaded: "bg-loaded"
          });
        }
      },
      shapeDivider: function () {
        var $shape_divider = $(".shape-divider");
        $shape_divider.each(function () {
          var elem = $(this);
          elem.options = {
            style: elem.attr("data-style") || 1,
            color: elem.attr("data-color") || "#ffffff",
            opacity: elem.attr("data-opacity") || "1",
            zIndex: elem.attr("data-zIndex") || "0",
            height: elem.attr("data-height") || 210,
            prefix: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MzAg"
          };
          if ($body.hasClass("dark") && elem.options.color === "#ffffff") {
            elem.options.color = "#181818";
          }
          switch (elem.options.style) {
            case "1":
              elem.options.style = elem.options.prefix + "MTI1LjcyIj48dGl0bGU+QXNzZXQgMTc0PC90aXRsZT48cGF0aCBkPSJNMzk1LDk5LjM3Yy01Ny40MywxMC4xNy0xMjQuMjctOC4wNi0xNzYuOC0xMS43MnEzLjkzLjY0LDgsMS40MWM1MC44MSw2LDExMy4zLDI0LjA4LDE2OC43NiwxNC4yNkM0NjgsOTAuNDIsNTE5LjYsMTEuODgsNjMwLDguOVYwQzUwNS40Miw0LDQ2OCw4Ni40NywzOTUsOTkuMzdaIiBzdHlsZT0iZmlsbDojZmZmO29wYWNpdHk6MC4zMDAwMDAwMDAwMDAwMDAwNCIvPjxwYXRoIGQ9Ik0yMjYuMjUsODlDMjczLjg4LDk4LDMzOC4xNCwxMTkuMjksMzk1LDEwOS4yM2M3Mi45My0xMi45MSwxMjYuNjEtNzcuNDYsMjM1LTczLjQ4VjguODZjLTExMC40LDMtMTYyLDgxLjUxLTIzNSw5NC40MkMzMzkuNTUsMTEzLjEsMjc3LjA2LDk1LjA3LDIyNi4yNSw4OVoiIHN0eWxlPSJmaWxsOiNmZmY7b3BhY2l0eTowLjYzIi8+PHBhdGggZD0iTTYwLjgyLDEyMi44OCw2MiwxMjNhMzEuNDksMzEuNDksMCwwLDAsOS4zNC0uNjRBMTAxLjI2LDEwMS4yNiwwLDAsMSw2MC44MiwxMjIuODhaIiBzdHlsZT0iZmlsbDojZmZmIi8+PHBhdGggZD0iTTYwLjgyLDEyMi44OCw2MiwxMjNhMzEuNDksMzEuNDksMCwwLDAsOS4zNC0uNjRBMTAxLjI2LDEwMS4yNiwwLDAsMSw2MC44MiwxMjIuODhaIiBzdHlsZT0iZmlsbDojZmZmO29wYWNpdHk6MC4zNTAwMDAwMDAwMDAwMDAwMyIvPjxwYXRoIGQ9Ik0zOTgsMTA3Ljg0Yy01Ni4xNSwxMC4wNy0xMTkuNTktMTEuMjYtMTY2LjYyLTIwLjItMi43MS0uNTItNS4zNS0xLTcuOTQtMS40MUExNTkuNTQsMTU5LjU0LDAsMCwwLDIwMiw4NHEtMy4wOS0uMDktNiwwYy0uNzEsMC0xLjM5LjA4LTIuMDkuMTItNTIuOCwyLjkzLTgwLjM0LDI4Ljc4LTExMi45MSwzNi42MmE3Mi42Myw3Mi42MywwLDAsMS05LjY2LDEuNjJBMzEuNDksMzEuNDksMCwwLDEsNjIsMTIzbC0xLjE4LS4xM0MzMS4zNywxMjIuODUsMCwxMTEuODIsMCwxMTEuODJ2MTMuOUg2MzBWMzQuMzZDNTIzLDMwLjM5LDQ3MCw5NC45NCwzOTgsMTA3Ljg0WiIgc3R5bGU9ImZpbGw6I2ZmZiIvPjxwYXRoIGQ9Ik0wLDEwMi4xNHYxMGM4MywzNCwxMjYuODMtMTQsMTkwLTI0bDEtNGMtNDQuNCw2LjI2LTQ1LDIyLTkzLDMxQzU0Ljc4LDEyMy4yNSwzMCwxMTMuMTQsMCwxMDIuMTRaIiBzdHlsZT0iZmlsbDojZmZmO29wYWNpdHk6MC4zMDAwMDAwMDAwMDAwMDAwNCIvPjxwYXRoIGQ9Ik0wLDEwNC4xNHYxMGMyMiw5LDQxLjIzLDEwLjI2LDU4LjgsMTAsNDguNzgtLjc2LDg0Ljc2LTI2LjY1LDEzMS4yLTM0bDEtNGMtNDQuNCw2LjI2LTQ1LDIyLTkzLDMxQzU0Ljc4LDEyNS4yNSwzMCwxMTUuMTQsMCwxMDQuMTRaIiBzdHlsZT0iZmlsbDojZmZmO29wYWNpdHk6MC4zMDAwMDAwMDAwMDAwMDAwNCIvPjwvc3ZnPg==";
              break;
            case "2":
              elem.options.style = elem.options.prefix + "MTIwIj48dGl0bGU+QXNzZXQgMTY0PC90aXRsZT48cGF0aCBkPSJNNTY3LjY3LDMxLjE0Yy0yNi4yMiwxNy4zNi01MCwzNi41NS04MS44LDUwQzQzNy41MiwxMDEuNDgsMzc1LjUyLDEwNi4yMSwzMTcsMTAzLjIzcy0xMTUuNDItMTMtMTczLjE1LTE5LjU2Qzk2LjQ3LDc4LjI1LDQ3LjE4LDc1LjE4LDAsODAuMDd2MzIuNDFINjMwVjBDNjA2LjQ0LDcuNTIsNTg1Ljg5LDE5LjA5LDU2Ny42NywzMS4xNFoiIHN0eWxlPSJmaWxsOiNmZmY7b3BhY2l0eTowLjY0Ii8+PHBhdGggZD0iTTU2Ny42NywzOC42N2MtMjYuMjIsMTcuMzUtNTAsMzYuNTUtODEuOCw1MEM0MzcuNTIsMTA5LDM3NS41MiwxMTMuNzMsMzE3LDExMC43NXMtMTE1LjQyLTEzLTE3My4xNS0xOS41NkM5Ni40Nyw4NS43Nyw0Ny4xOCw4Mi43LDAsODcuNTlWMTIwSDYzMFY3LjUyQzYwNi40NCwxNSw1ODUuODksMjYuNjEsNTY3LjY3LDM4LjY3WiIgc3R5bGU9ImZpbGw6I2ZmZiIvPjwvc3ZnPg==";
              break;
            case "3":
              elem.options.style = elem.options.prefix + "NjAiPjx0aXRsZT5Bc3NldCAxNzI8L3RpdGxlPjxwYXRoIGQ9Ik0wLDAsNDAwLDUzLjIzLDYzMCwwVjYwSDBaIiBzdHlsZT0iZmlsbDojZmZmIi8+PC9zdmc+";
              break;
            case "4":
              elem.options.style = elem.options.prefix + "ODAiPjx0aXRsZT40PC90aXRsZT48cGF0aCBkPSJNMjYxLjIsNjQuOUMzNjcuNiw1NC43LDQ5OS42LDM5LjcsNjMwLDE4LjVWMEM0OTcuOCwzMS40LDM2My43LDUyLDI2MS4yLDY0LjlaIiBzdHlsZT0iZmlsbDojZmZmO29wYWNpdHk6MC4zMDAwMDAwMDAwMDAwMDAwNCIvPjxwYXRoIGQ9Ik0yNjEuMiw2NC45Yy00MSwzLjktNzguMiw3LjEtMTEwLDkuNiwxMy4yLS40LDI3LS45LDQxLjUtMS42QzMxNSw2Ny43LDQ3OC40LDU5LjQsNjMwLDM0LjhWMTguNUM0OTkuMSwzOS44LDM2Ny4zLDU0LjgsMjYxLjIsNjQuOVoiIHN0eWxlPSJmaWxsOiNmZmY7b3BhY2l0eTowLjYwMDAwMDAwMDAwMDAwMDEiLz48cGF0aCBkPSJNMTkyLjcsNzIuOWMtMTQuNS43LTI4LjMsMS4yLTQxLjUsMS42QzU5LjksNzcuNywwLDc3LjQsMCw3Ny40VjgwSDYzMFYzMy44QzQ3OC40LDU4LjQsMzE1LDY3LjcsMTkyLjcsNzIuOVoiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=";
              break;
            case "5":
              elem.options.style = elem.options.prefix + "MTAwIj48dGl0bGU+QXNzZXQgMTczPC90aXRsZT48cGF0aCBkPSJNMCw1Ni44NGwxMDgsMzlMNDY4LDAsNjMwLDY4LjQyVjEwMEgwWiIgc3R5bGU9ImZpbGw6I2ZmZiIvPjwvc3ZnPg==";
              break;
            case "6":
              elem.options.style = elem.options.prefix + "MTIwIj48dGl0bGU+NjwvdGl0bGU+PHBhdGggZD0iTTYxNS41LDIuNWMtNDEuMyw1LjgtNzcuNCwxMi43LTExNiwxMy43LTIyLjIuNi00NC44LTMuMy02Ny4yLjQtNDguOCw4LjEtMTA3LjgsNDMuNS0xNTcuNyw2Mi42LTQyLjQsMTYuMi02OS45LDE2LTk4LjcsMy44LTIxLjEtOS00Mi4xLTIyLjktNjUuMi0zMy4xLTI5LjQtMTMtNjIuNC0yNC4yLTk4LjktMTIuM2wtMS4xLjNMMCw0MS42VjUzLjhsMTAuNy0zLjYsMS4xLS40YzQyLjEtMTMuNyw2My4xLTUuNiw5OC45LDUuNiwyMi43LDcsNDQuMSwyMCw2NS4yLDI4LjksMzAuOSwxMy4xLDU1LjgsMTMsOTguNy0xLDQ5LjktMTYuNCwxMDguOS01MS44LDE1Ny43LTU5LjksMjIuNC0zLjcsNDUuMi00LjUsNjcuMi0uNCwzNy44LDcuMiw3NC43LDcuMSwxMTYsMS4zLDUtLjcsOS44LTEuNSwxNC41LTIuNVYwQzYyNS4zLDEsNjIwLjUsMS45LDYxNS41LDIuNVoiIHN0eWxlPSJmaWxsOiNmZmY7b3BhY2l0eTowLjM1MDAwMDAwMDAwMDAwMDAzIi8+PHBhdGggZD0iTTQ5OS41LDIzYy0yMi00LjEtNDQuOC0zLjMtNjcuMi40LTQ4LjgsOC4xLTEwNy44LDQzLjUtMTU3LjcsNTkuOS00Mi45LDE0LTY3LjgsMTQuMS05OC43LDEtMjEuMS04LjktNDIuNS0yMS45LTY1LjItMjguOUM3NC45LDQ0LjIsNTMuOSwzNi4xLDExLjgsNDkuOGwtMS4xLjRMMCw1My44VjYybDEwLjctMy42LDEuMS0uNGMzNi41LTExLjksNjguOC04LDk4LjksMS40LDIyLjcsNy4xLDQ0LjEsMTcuMyw2NS4yLDI2LjMsMjguOCwxMi4yLDU1LjcsMTIuOSw5OS4xLDIuOSw1Mi41LTEyLjEsMTA3LjEtNTEuNywxNTUuOS01OS44LDIyLjMtMy44LDQ2LjYtMS44LDY4LjYsMi40LDM3LjgsNy4xLDc0LjcsMjIsMTE2LDE2LjMsNS0uNyw5LjgtMS42LDE0LjUtMi42VjIxLjhjLTQuNywxLTkuNSwxLjgtMTQuNSwyLjVDNTc0LjIsMzAuMSw1MzcuMywzMC4yLDQ5OS41LDIzWiIgc3R5bGU9ImZpbGw6I2ZmZjtvcGFjaXR5OjAuNSIvPjxwYXRoIGQ9Ik00OTkuNSwzMS4yYy0yMi00LjItNDYuMy02LjItNjguNi0yLjRDMzgyLjEsMzYuOSwzMjcuNSw3Ni41LDI3NSw4OC42Yy00My40LDEwLTcwLjMsOS4zLTk5LjEtMi45LTIxLjEtOS00Mi41LTE5LjItNjUuMi0yNi4zQzgwLjYsNTAsNDguMyw0Ni4xLDExLjgsNThsLTEuMS40TDAsNjJ2NThINjMwVjQ0LjljLTQuNywxLTkuNSwxLjktMTQuNSwyLjZDNTc0LjIsNTMuMiw1MzcuMywzOC4zLDQ5OS41LDMxLjJaIiBzdHlsZT0iZmlsbDojZmZmIi8+PC9zdmc+";
              break;
            case "7":
              elem.options.style = elem.options.prefix + "MTIwIj48dGl0bGU+QXNzZXQgMTc0PC90aXRsZT48cGF0aCBkPSJNMCwwLDYzMCwxMjBIMFoiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=";
              break;
            case "8":
              elem.options.style = elem.options.prefix + "MTIwIj48dGl0bGU+ODwvdGl0bGU+PHBhdGggZD0iTTQ1Ni43LDUzLjZDNDM5LjgsNDIuOSwzOTYuOSwxLjgsMzQzLjIsMzAuMWMtMzUuNywxOC43LTg0LDcxLjUtMTI3LjgsNzEuOS0zNi4xLjMtNTcuOC0yMC4yLTgxLjQtMzUuMS0xNy4zLTExLTM1LTIzLjUtNTMuNi0zMi4yQzU1LjYsMjMuMiwzMCwxMS44LjEsMjYuNGMtLjMuMSwwLDkzLjYsMCw5My42SDYzMFYzMS44Yy0zLjksMS4zLTEzLDE3LjMtNjUuMiwzMi44QzUzMy4zLDc2LjQsNDkyLjQsNzYuNCw0NTYuNyw1My42WiIgc3R5bGU9ImZpbGw6I2ZmZiIvPjxnIHN0eWxlPSJvcGFjaXR5OjAuMzgiPjxwYXRoIGQ9Ik02MTEsNjMuNmwtMiw0Mi44LTUyNy45LDUtODEtMS4xVjYxLjhhMTk0LjcsMTk0LjcsMCwwLDAsMjQuNyw5LjQsMTQ2LjgsMTQ2LjgsMCwwLDAsNDMuOSw2LjJDOTQuNiw3Ny4zLDEyMC41LDY1LDE0Niw1MC41YzE4LjctMTAuNiwzNy4xLTIyLjMsNTUuMi0zMS4zQzIxMy43LDEyLjksMjI2LDgsMjM4LjEsNS43YzI0LjMtNC42LDUxLjQtMy4yLDcyLjUsNy45bDM2LjcsMTkuNmMzNy4zLDE5LjksNzMuMSwzOC45LDEwNC4yLDUxLjdDNDY1LjQsOTAuNiw0NzguMyw5NS4yLDQ5MCw5OGMxMy4zLDMuMywyNS4xLDQuNSwzNSwyLjlhNzUuNSw3NS41LDAsMCwwLDkuMy0zLjdsNy40LTMuM2MxNS40LTcuMSwzOC44LTE5LjEsNTkuNi0zMy4yLDUuNS0zLjcuNi40LDUuNy0zLjRDNjE5LDQ4LjIsNjA4LjcsNjQuMiw2MTEsNjMuNloiIHN0eWxlPSJmaWxsOiNmZmYiLz48L2c+PHBhdGggZD0iTTU4MS44LDExLjRDNTUyLC4yLDUzMS41LDMuOSw1MDcuMiw4LjQsNDcyLjEsMTUsNDM0LjcsNDQuMSwzOTYuNiw2My4yYy0xNi4zLDguMS0zMi44LDE0LjQtNDkuMiwxNi4zLTE1LjgtNS40LTMyLTEyLjItNDcuNi0xOS4yLTM3LjktMTcuMS03Mi42LTM1LjctOTEuOS0zOS44bC02LjctMS4zYy0yMi4yLTQuMi00NS45LTUuOC02Ny45LTEuNy0xMC40LDItMjEsNS45LTMxLjgsMTFDNzYuNiw0MC4yLDUwLjksNTcuOSwyNC44LDcxLjJBMjEzLjYsMjEzLjYsMCwwLDEsLjEsODIuMXYzMC44bDgxLTEuNSwzMTIuMy01LjcsMS40LjNMNjMwLDExMS44di04MEM2MTMsMjYuNCw2MTkuMywyNS41LDU4MS44LDExLjRaIiBzdHlsZT0iZmlsbDojZmZmO29wYWNpdHk6MC40OSIvPjxnIHN0eWxlPSJvcGFjaXR5OjAuMzgiPjxwYXRoIGQ9Ik01NDUuNCw5N2wtMTEuMS4yTDQ5MCw5OCwuMSwxMDcuMVYwQzIxLjMtLjQsNDEuMyw0LjEsNjAuNCwxMC44YTQwMy43LDQwMy43LDAsMCwxLDQxLjEsMTcuN2MxMCw0LjksMTkuOSw5LjksMjkuNywxNC42LDUsMi4zLDkuOSw0LjksMTQuOCw3LjQsMjYuMSwxMy41LDUyLjcsMjgsOTIuOSwyNy44LDIwLjMtLjEsNDAuNy03LjcsNjAuOS0xOCwxNi04LjIsMzEuOS0xOCw0Ny41LTI3LjEsMjAuOS0xMi4xLDQxLjMtMjIuOSw2MC45LTI2LjZDNDMyLjUsMiw0ODEuMSw4LjYsNTA0LDE4czQ5LjYsMjMuNiw5Ny4zLDQyLjdDNjIwLjIsNjguNCw1NDUuNCw5Nyw1NDUuNCw5N1oiIHN0eWxlPSJmaWxsOiNmZmYiLz48L2c+PC9zdmc+";
              break;
            case "9":
              elem.options.style = elem.options.prefix + "MTAwIj48dGl0bGU+QXNzZXQgMTgyPC90aXRsZT48cGF0aCBkPSJNMCw0NS42NVMxNTksMCwzMjIsMCw2MzAsNDUuNjUsNjMwLDQ1LjY1VjEwMEgwWiIgc3R5bGU9ImZpbGw6I2ZmZiIvPjwvc3ZnPg==";
              break;
            case "10":
              elem.options.style = elem.options.prefix + "MTIwIj48dGl0bGU+MTA8L3RpdGxlPjxwYXRoIGQ9Ik0wLDEwOC4xSDYzMFYwUzQ3NSwxMDQuNiwzMTQsMTA0LjYsMCwwLDAsMFoiIHN0eWxlPSJmaWxsOiNmZmY7b3BhY2l0eTowLjIyIi8+PHBhdGggZD0iTTAsMTA2LjlINjMwVjE3LjhzLTE1NSw4Ny45LTMxNiw4Ny45UzAsMTksMCwxOVoiIHN0eWxlPSJmaWxsOiNmZmY7b3BhY2l0eTowLjM2Ii8+PHBhdGggZD0iTTAsMTIwSDYzMFY0NS4xcy0xNTUsNjEuOC0zMTYsNjEuOFMwLDQ1LjEsMCw0NS4xWiIgc3R5bGU9ImZpbGw6I2ZmZiIvPjwvc3ZnPg==";
              break;
            case "11":
              elem.options.style = elem.options.prefix + "MTIwIj48dGl0bGU+MTE8L3RpdGxlPjxwYXRoIGQ9Ik01MTAuNywyLjljLTk4LjksMjEuOS0yMjIuMyw4NS41LTMyMiw4NS41QzgwLjEsODguNCwyNC4xLDU2LjEsMCwzNi40VjEyMEg2MzBWMTUuMkM2MDIuNCw2LjksNTUwLjEtNS44LDUxMC43LDIuOVoiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=";
              break;
            case "12":
              elem.options.style = elem.options.prefix + "MTIwIj48dGl0bGU+MTI8L3RpdGxlPjxwYXRoIGQ9Ik02MzAsMzQuNWE1NCw1NCwwLDAsMS05LDIuM0M1NzguMyw0Ni4xLDU1Ni4xLDI0LDUxNy4yLDEyLjVjLTIyLjktNi43LTQ3LjktOS44LTcxLTMuOUMzOTUuOCwyMS43LDM0MC4zLDEwMiwyODUuMSwxMDIuNGMtNDUuNC4zLTcyLjYtMjYuNS0xMDIuMy00Ni4xLTIxLjgtMTQuNC00NC0zMC44LTY3LjQtNDIuMUM4NC4yLS45LDUwLjktNy4yLDEzLjIsMTEuOGwtMS4yLjZjLTMuNSwxLjktOC4yLDMuOS0xMiw1LjlWMTIwSDYzMFoiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=";
              break;
            case "13":
              elem.options.style = elem.options.prefix + "OTAiPjx0aXRsZT4xMzwvdGl0bGU+PHBhdGggZD0iTTYzMCw5MEgxTDAsMFMxMzEsNzYuNiwzNjYsMzQuMmMxMjAtMjEuNywyNjQsNC41LDI2NCw0LjVaIiBzdHlsZT0iZmlsbDojZmZmO29wYWNpdHk6MC4xNiIvPjxwYXRoIGQ9Ik0xLDkwSDYzMFYwUzQ4OSw3NC4zLDI1NCwzMS45QzEzNCwxMC4zLDAsMzMsMCwzM1oiIHN0eWxlPSJmaWxsOiNmZmY7b3BhY2l0eTowLjIiLz48cGF0aCBkPSJNMCw5MEg2MzBWMTguMlM0NzUsNzcuNSwzMTQsNzcuNSwwLDE4LjIsMCwxOC4yWiIgc3R5bGU9ImZpbGw6I2ZmZiIvPjwvc3ZnPg==";
              break;
            case "14":
              elem.options.style = elem.options.prefix + "NjAiPjx0aXRsZT5Bc3NldCAxNzg8L3RpdGxlPjxwYXRoIGQ9Ik0wLDAsMTEzLDE5LDU4MiwyOS40Nyw2MzAsMFY2MEgwWiIgc3R5bGU9ImZpbGw6I2ZmZiIvPjwvc3ZnPg==";
              break;
            case "15":
              elem.options.style = elem.options.prefix + "ODAiPjx0aXRsZT5Bc3NldCAxNzc8L3RpdGxlPjxwYXRoIGQ9Ik0zMTUsMCw2MzAsODBIMFoiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=";
              break;
            case "16":
              elem.options.style = elem.options.prefix + "ODAiPjx0aXRsZT4xNjwvdGl0bGU+PHBhdGggZD0iTTAsODBTMjA4LDAsMzE1LDAsNjMwLDgwLDYzMCw4MFoiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=";
              break;
            case "17":
              elem.options.style = elem.options.prefix + "MTIwIj48dGl0bGU+MTc8L3RpdGxlPjxwYXRoIGQ9Ik0zMjAsMTZjODguNCwyLDMxMCwxMDQsMzEwLDEwNFM1NjkuNiw4Ny4zLDQ5OS41LDU2Yy0xOS43LTguOC00MC4xLTE3LjUtNjAuMi0yNS4zQzM5NS4yLDEzLjYsMzUyLjcuNywzMjQsMCwyMzUtMiwwLDEyMCwwLDEyMGwxNC4xLTUuNUM2Mi41LDkyLjgsMjQzLjMsMTQuMywzMjAsMTZaIiBzdHlsZT0iZmlsbDojZmZmO29wYWNpdHk6MC4zMSIvPjxwYXRoIGQ9Ik0xNC4xLDExNC41QzY0LjksOTUsMjM5LjQsMzAuMywzMTUsMzJjODguNCwyLDMxNSw4OCwzMTUsODhTNDA4LjQsMTgsMzIwLDE2QzI0My4zLDE0LjMsNjIuNSw5Mi44LDE0LjEsMTE0LjVaIiBzdHlsZT0iZmlsbDojZmZmO29wYWNpdHk6MC40MyIvPjxwYXRoIGQ9Ik0xNC4xLDExNC41QzY0LjksOTUsMjM5LjQsMzAuMywzMTUsMzJjODguNCwyLDMxNSw4OCwzMTUsODhTNDA4LjQsMTgsMzIwLDE2QzI0My4zLDE0LjMsNjIuNSw5Mi44LDE0LjEsMTE0LjVaIiBzdHlsZT0iZmlsbDojZmZmO29wYWNpdHk6MC4zMSIvPjxwYXRoIGQ9Ik0zMTUsMzJDMjM5LjQsMzAuMyw2NC45LDk1LDE0LjEsMTE0LjVMMiwxMjBINjMwUzQwMy40LDM0LDMxNSwzMloiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=";
              break;
            case "18":
              elem.options.style = elem.options.prefix + "NDAiPjx0aXRsZT5Bc3NldCAxNzk8L3RpdGxlPjxwYXRoIGQ9Ik0wLDE4LjEsNTMsMS45LDEwMywyMGw1OS05LjUyLDU2LDE1LjIzLDcyLTcuNjEsNDYsNC43NiwzNC00Ljc2LDM2LDguNTcsNzYtMTksODUsMTUuMjRMNjMwLDBWMzcuMTRIMFoiIHN0eWxlPSJmaWxsOiNmZmY7b3BhY2l0eTowLjQ3MDAwMDAwMDAwMDAwMDAzIi8+PHBhdGggZD0iTTAsMjAsNTMsMy44MSwxMDMsMjEuOWw1OS05LjUyLDU2LDE1LjI0TDI5MCwyMGw0Niw0Ljc2TDM3MCwyMGwzNiw5LjUyLDc2LTE3LjE0LDg1LDE2LjE5LDYzLTE2LjE5VjQwSDBaIiBzdHlsZT0iZmlsbDojZmZmIi8+PC9zdmc+";
              break;
            case "19":
              elem.options.style = elem.options.prefix + "ODAiPjx0aXRsZT4xOTwvdGl0bGU+PHBhdGggZD0iTTYzMCwzNi45YTM0LjYsMzQuNiwwLDAsMC0xNi41LTQuMmMtMTcuMiwwLTMxLjgsMTIuNy0zNi43LDMwLjNhMjEuMiwyMS4yLDAsMCwwLTkuMy0yLjIsMjEuOCwyMS44LDAsMCwwLTEzLjksNS4xLDM4LjcsMzguNywwLDAsMC00MC40LTQuOGMtNS4yLTcuNy0xMy40LTEyLjYtMjIuNy0xMi42YTI1LjcsMjUuNywwLDAsMC04LjcsMS41QzQ3Mi45LDI3LjgsNDUzLDEyLjQsNDMwLDEyLjRzLTQyLjcsMTUuMy01MS43LDM3LjJjLTcuMi0xMC45LTE4LjgtMTguMS0zMS44LTE4LjFhMzcsMzcsMCwwLDAtMjQsOS4yYy02LTEwLjMtMTYuMy0xNy0yOC0xNy0xMy44LDAtMjUuNiw5LjMtMzAuNywyMi43QTI2LjUsMjYuNSwwLDAsMCwyNDQsMzcuMmEyMiwyMiwwLDAsMC01LjguN2MtNC0xMS42LTE0LTE5LjktMjUuNy0xOS45YTI0LjcsMjQuNywwLDAsMC05LjQsMS45QzE4OS4yLDcuNCwxNzEuNiwwLDE1Mi41LDAsMTI0LjYsMCwxMDAsMTUuOCw4NS4zLDM5LjlBMjcuNiwyNy42LDAsMCwwLDYzLDI4LjJhMjMuOSwyMy45LDAsMCwwLTcuMSwxQzQ3LjIsMTMsMzEuNSwyLjMsMTMuNSwyLjNBNDMuMyw0My4zLDAsMCwwLDAsNC40VjgwSDYzMFoiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=";
              break;
            case "20":
              elem.options.style = elem.options.prefix + "MTAwIj48dGl0bGU+QXNzZXQgMTgwPC90aXRsZT48cGF0aCBkPSJNNjMwLDYwLjgyVjEwMEgwVjk1Ljg4bDExLjkxLTYuNDlMODQsNDMuMzRsMzYuNDksMjQuNDVMMTYwLDQ2LDIzMi4wNSwwbDQ5LjA3LDMyLjg5LDM0LjA3LDI5LjU5LDY4LjI5LDI3Ljc1TDQyMyw2NWw0Mi4yLDI4LjI5LDE4LjM5LTE2LDQ5LjA3LTMyLjg5TDU5NCw4My42MSw2MjgsNjEuOVoiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=";
              break;
          }
          var decodeSvg = atob(elem.options.style);
          var wrapper = document.createElement("div");
          wrapper.innerHTML = decodeSvg;
          var svg = wrapper.firstChild;
          var paths = svg.getElementsByTagName("path");
          [].forEach.call(paths, function (path) {
            path.style.fill = elem.options.color;
          });
          svg.setAttribute("preserveAspectRatio", "none");
          if ($body.hasClass("b--desktop")) {
            if (elem.options.height) {
              svg.setAttribute("style", "height:" + Number(elem.options.height).toFixed() + "px");
            } else {
              svg.setAttribute("style", "height:" + Number(svg.height.baseVal.value).toFixed() + "px");
            }
          } else {
            if (elem.options.height) {
              svg.setAttribute("style", "height:" + Number(elem.options.height).toFixed() / 2 + "px");
            } else {
              svg.setAttribute("style", "height:" + Number(svg.height.baseVal.value).toFixed() / 2 + "px");
            }
          }
          $(".shape-divider svg title").remove();
          elem.css({
            "z-index": elem.options.zIndex,
            opacity: elem.options.opacity
          });
          elem.append(svg);
        });
      },
      responsiveVideos: function () {
        //selecting elements
        /* var selectors = [
          'iframe[src*="player.vimeo.com"]',
          'iframe[src*="youtube.com"]',
          'iframe[src*="youtube-nocookie.com"]',
          'iframe[src*="kickstarter.com"][src*="video.html"]',
          "object",
          "embed",
        ];
        var videoContainers = $(
          "section, .content, .post-content, .video-js, .post-video, .video-wrap, .ajax-quick-view,#slider:not(.revslider-wrap)"
        );
        var elem = videoContainers.find(selectors.join(","));
        if (elem) {
          elem.each(function () {
            $(this).wrap(
              '<div class="embed-responsive embed-responsive-16by9"></div>'
            );
            setTimeout(function(){
              $(".embed-responsive-16by9").find($("iframe")).addClass("embed-responsive-item");
            },500);
          });
        } */
      },
      counters: function () {
        var $counter = $(".counter");
        if ($counter.length > 0) {
          //Check if countTo plugin is loaded
          if (typeof $.fn.countTo === "undefined") {
            INSPIRO.elements.notification("Warning", "jQuery countTo plugin is missing in plugins.js file.", "danger");
            return true;
          }
          //Initializing countTo plugin
          $counter.each(function () {
            var elem = $(this),
              prefix = elem.find("span").attr("data-prefix") || "",
              suffix = elem.find("span").attr("data-suffix") || "";
            setTimeout(function () {
              new Waypoint({
                element: elem,
                handler: function () {
                  elem.find("span").countTo({
                    refreshInterval: 2,
                    formatter: function (value, options) {
                      return String(prefix) + value.toFixed(options.decimals) + String(suffix);
                    }
                  });
                  this.destroy();
                },
                offset: "104%"
              });
            }, 100);
          });
        }
      },
      countdownTimer: function () {
        var $countdownTimer = $(".countdown");
        if ($countdownTimer.length > 0) {
          //Check if countdown plugin is loaded
          if (typeof $.fn.countdown === "undefined") {
            INSPIRO.elements.notification("Warning", "jQuery countdown plugin is missing in plugins.js file.", "danger");
            return true;
          }
          $(".countdown").each(function (index, element) {
            var elem = $(element),
              finalDate = elem.attr("data-countdown");
            elem.countdown(finalDate, function (event) {
              elem.html(event.strftime('<div class="countdown-container"><div class="countdown-box"><div class="number">%-D</div><span>Days</span></div>' + '<div class="countdown-box"><div class="number">%H</div><span>Hours</span></div>' + '<div class="countdown-box"><div class="number">%M</div><span>Minutes</span></div>' + '<div class="countdown-box"><div class="number">%S</div><span>Seconds</span></div></div>'));
            });
          });
        }
      },
      progressBar: function () {
        var $progressBar = $(".p-progress-bar") || $(".progress-bar");
        if ($progressBar.length > 0) {
          $progressBar.each(function (i, elem) {
            var $elem = $(this),
              percent = $elem.attr("data-percent") || "100",
              delay = $elem.attr("data-delay") || "60",
              type = $elem.attr("data-type") || "%";
            if (!$elem.hasClass("progress-animated")) {
              $elem.css({
                width: "0%"
              });
            }
            var progressBarRun = function () {
              $elem.animate({
                width: percent + "%"
              }, "easeInOutCirc").addClass("progress-animated");
              $elem.delay(delay).append('<span class="progress-type">' + type + '</span><span class="progress-number animate__animated animate__fadeIn">' + percent + "</span>");
            };
            if ($body.hasClass("breakpoint-lg") || $body.hasClass("breakpoint-xl")) {
              new Waypoint({
                element: $(elem),
                handler: function () {
                  var t = setTimeout(function () {
                    progressBarRun();
                  }, delay);
                  this.destroy();
                },
                offset: "100%"
              });
            } else {
              progressBarRun();
            }
          });
        }
      },
      pieChart: function () {
        var $pieChart = $(".pie-chart");
        if ($pieChart.length > 0) {
          //Check if easyPieChart plugin is loaded
          if (typeof $.fn.easyPieChart === "undefined") {
            INSPIRO.elements.notification("Warning", "jQuery easyPieChart plugin is missing in plugins.js file.", "danger");
            return true;
          }
          $pieChart.each(function () {
            var elem = $(this);
            //Plugin Options
            elem.options = {
              barColor: elem.attr("data-color") || $theme_color,
              trackColor: elem.attr("data-trackcolor") || "rgba(0,0,0,0.10)",
              scaleColor: elem.attr("data-scaleColor") || false,
              scaleLength: elem.attr("data-scaleLength") || 5,
              lineCap: elem.attr("data-lineCap") || "square",
              lineWidth: elem.attr("data-lineWidth") || 6,
              size: elem.attr("data-size") || 160,
              rotate: elem.attr("data-rotate") || 0,
              animate: elem.attr("data-animate") || 2600,
              elemEasing: elem.attr("data-easing") || "easeInOutExpo"
            };
            elem.find("span, i").css({
              width: elem.options.size + "px",
              height: elem.options.size + "px",
              "line-height": elem.options.size + "px"
            });
            //Initializing jQuery easyPieChart plugin and passing the options

            setTimeout(function () {
              new Waypoint({
                element: elem,
                handler: function () {
                  elem.easyPieChart({
                    barColor: elem.options.barColor,
                    trackColor: elem.options.trackColor,
                    scaleColor: elem.options.scaleColor,
                    scaleLength: elem.options.scaleLength,
                    lineCap: elem.options.lineCap,
                    lineWidth: Number(elem.options.lineWidth),
                    size: Number(elem.options.size),
                    rotate: Number(elem.options.rotate),
                    animate: Number(elem.options.animate),
                    elemEasing: elem.options.elemEasing,
                    onStep: function (from, to, percent) {
                      elem.find("span.percent").text(Math.round(percent));
                    }
                  });
                  this.destroy();
                },
                offset: "100%"
              });
            }, 200);
          });
        }
      },
      maps: function () {
        var $map = $(".map");
        if ($map.length > 0) {
          //Check if gMap plugin is loaded
          if (typeof $.fn.gmap3 === "undefined") {
            INSPIRO.elements.notification("Warning", "jQuery gmap3 plugin is missing, please go to this <a href='//support.inspirothemes.com/help-center/articles/8/14/65/google-maps'>help article</a> and follow instructions on how to configure google maps.", "danger");
            return true;
          }
          $map.each(function () {
            var elem = $(this);
            //Plugin Options
            elem.options = {
              latitude: elem.attr("data-latitude") || "-37.817240",
              longitude: elem.attr("data-longitude") || "144.955820",
              info: elem.attr("data-info"),
              maptype: elem.attr("data-type") || "ROADMAP",
              zoom: elem.attr("data-zoom") || 14,
              fullscreen: elem.data("fullscreen") == false ? false : true,
              icon: elem.attr("data-icon"),
              mapColor: elem.attr("data-style") || null
            };
            var mapsStyle;
            if (window.MAPS) {
              if (elem.options.mapColor) {
                mapsStyle = MAPS[elem.options.mapColor];
              } else {
                mapsStyle = null;
              }
            }
            //Initialize google maps plugin and passing the options
            elem.gmap3({
              center: [Number(elem.options.latitude), Number(elem.options.longitude)],
              zoom: Number(elem.options.zoom),
              mapTypeId: google.maps.MapTypeId[elem.options.maptype],
              scrollwheel: false,
              zoomControl: true,
              mapTypeControl: false,
              streetViewControl: true,
              fullscreenControl: elem.options.fullscreen,
              styles: mapsStyle
            });
            if (elem.options.icon) {
              elem.gmap3().marker({
                position: [Number(elem.options.latitude), Number(elem.options.longitude)],
                icon: elem.options.icon
              });
            } else {
              elem.gmap3().marker({
                position: [Number(elem.options.latitude), Number(elem.options.longitude)],
                icon: " "
              }).overlay({
                position: [Number(elem.options.latitude), Number(elem.options.longitude)],
                content: '<div class="animated-dot"></div>'
              });
            }
            if (elem.options.info) {
              elem.gmap3().infowindow({
                position: [Number(elem.options.latitude), Number(elem.options.longitude)],
                content: elem.options.info,
                pixelOffset: new google.maps.Size(0, -10)
              }).then(function (infowindow) {
                var map = this.get(0);
                var marker = this.get(1);
                marker.addListener("click", function () {
                  infowindow.open(map);
                });
              });
            }
          });
        }
      },
      gridLayout: function () {
        if ($gridLayout.length > 0) {
          //Check if isotope plugin is loaded
          if (typeof $.fn.isotope === "undefined") {
            INSPIRO.elements.notification("Warning", "jQuery isotope plugin is missing in plugins.js file.", "danger");
            return true;
          }
          var isotopeRTL;
          if (INSPIRO.core.rtlStatus() == true) {
            isotopeRTL = false;
          } else {
            isotopeRTL = true;
          }
          $gridLayout.each(function () {
            var elem = $(this);
            elem.options = {
              itemSelector: elem.attr("data-item") || "portfolio-item",
              layoutMode: elem.attr("data-layout") || "masonry",
              filter: elem.attr("data-default-filter") || "*",
              stagger: elem.attr("data-stagger") || 0,
              autoHeight: elem.data("auto-height") == false ? false : true,
              gridMargin: elem.attr("data-margin") || 20,
              gridMarginXs: elem.attr("data-margin-xs"),
              transitionDuration: elem.attr("data-transition") || "0.45s",
              isOriginLeft: isotopeRTL
            };
            $(window).breakpoints("lessThan", "lg", function () {
              elem.options.gridMargin = elem.options.gridMarginXs || elem.options.gridMargin;
            });
            elem.css("margin", "0 -" + elem.options.gridMargin + "px -" + elem.options.gridMargin + "px 0");
            elem.find("." + elem.options.itemSelector).css("padding", "0 " + elem.options.gridMargin + "px " + elem.options.gridMargin + "px 0");
            if (elem.attr("data-default-filter")) {
              var elemDefaultFilter = elem.options.filter;
              elem.options.filter = "." + elem.options.filter;
            }
            elem.append('<div class="grid-loader"></div>');
            var $isotopelayout = $(elem).imagesLoaded(function () {
              // init Isotope after all images have loaded
              $isotopelayout.isotope({
                layoutMode: elem.options.layoutMode,
                transitionDuration: elem.options.transitionDuration,
                stagger: Number(elem.options.stagger),
                resize: true,
                itemSelector: "." + elem.options.itemSelector + ":not(.grid-loader)",
                isOriginLeft: elem.options.isOriginLeft,
                autoHeight: elem.options.autoHeight,
                masonry: {
                  columnWidth: elem.find("." + elem.options.itemSelector + ":not(.large-width)")[0]
                },
                filter: elem.options.filter
              });
              elem.remove(".grid-loader").addClass("grid-loaded");
            });

            //Infinity Scroll
            if (elem.next().hasClass("infinite-scroll")) {
              INSPIRO.elements.gridLayoutInfinite(elem, elem.options.itemSelector, elem.options.gridMargin);
            }
            if ($gridFilter.length > 0) {
              $gridFilter.each(function () {
                var elemFilter = $(this),
                  $filterItem = elemFilter.find("a"),
                  elemFilterLayout = elemFilter.attr("data-layout"),
                  $filterItemActiveClass = "active";
                $filterItem.on("click", function () {
                  elemFilter.find("li").removeClass($filterItemActiveClass);
                  $(this).parent("li").addClass($filterItemActiveClass);
                  var filterValue = $(this).attr("data-category");
                  $(elemFilterLayout).isotope({
                    filter: filterValue
                  }).on("layoutComplete", function () {
                    $window.trigger("scroll");
                    INSPIRO.elements.naTo();
                  });
                  if ($(".grid-active-title").length > 0) {
                    $(".grid-active-title").empty().append($(this).text());
                  }
                  return false;
                });
                if (elemDefaultFilter) {
                  var filterDefaultValue = elemFilter.find($('[data-category="' + elem.options.filter + '"]'));
                  elemFilter.find("li").removeClass($filterItemActiveClass);
                  filterDefaultValue.parent("li").addClass($filterItemActiveClass);
                } else {
                  var filterDefaultValue = elemFilter.find($('[data-category="*"]'));
                  filterDefaultValue.parent("li").addClass($filterItemActiveClass);
                }
              });
            }
          });
        }
      },
      gridLayoutInfinite: function (element, elementSelector, elemGridMargin) {
        //Check if infiniteScroll plugin is loaded
        if (typeof $.fn.infiniteScroll === "undefined") {
          INSPIRO.elements.notification("Warning", "jQuery infiniteScroll plugin is missing, please add this code line <b> &lt;script src=&quot;plugins/metafizzy/infinite-scroll.min.js&quot;&gt;&lt;/script&gt;</b>, before <b>plugins.js</b>", "danger");
          return true;
        }
        var elem = element,
          gridItem = elementSelector,
          gridMargin = elemGridMargin,
          loadOnScroll = true,
          threshold = 500,
          prefilli = true,
          pathSelector,
          loadMoreElem = $("#showMore"),
          loadMoreBtn = $("#showMore a.btn"),
          loadMoreBtnText = $("#showMore a.btn").html(),
          loadMoreMessage = $('<div class="infinite-scroll-message"><p class="animate__animated visible animate__fadeIn">No more posts to show</p></div>');
        pathSelector = $(".infinite-scroll > a").attr("href");
        if (pathSelector.indexOf(".html") > -1) {
          pathSelector = pathSelector.replace(/(-\d+)/g, "-{{#}}");
        } else {
          pathSelector = ".infinite-scroll > a";
        }
        if (loadMoreElem.length > 0) {
          loadOnScroll = false;
          threshold = false;
          prefilli = false;
        }
        elem.infiniteScroll({
          path: pathSelector,
          append: "." + gridItem,
          history: false,
          button: "#showMore a",
          scrollThreshold: threshold,
          loadOnScroll: loadOnScroll,
          prefill: prefilli
        });
        elem.on("load.infiniteScroll", function (event, response, path, items) {
          var $items = $(response).find("." + gridItem);
          $items.imagesLoaded(function () {
            elem.append($items);
            elem.isotope("insert", $items);
          });
        });
        elem.on("error.infiniteScroll", function (event, error, path) {
          loadMoreElem.addClass("animate__animated visible animate__fadeOut");
          var t = setTimeout(function () {
            loadMoreElem.hide();
            elem.after(loadMoreMessage);
          }, 500);
          var t = setTimeout(function () {
            $(".infinite-scroll-message").addClass("animate__animated visible animate__fadeOut");
          }, 3000);
        });
        elem.on("append.infiniteScroll", function (event, response, path, items) {
          INSPIRO.slider.carousel($(items).find(".carousel"));
          loadMoreBtn.html(loadMoreBtnText);
          element.css("margin", "0 -" + gridMargin + "px -" + gridMargin + "px 0");
          element.find("." + gridItem).css("padding", "0 " + gridMargin + "px " + gridMargin + "px 0");
        });
      },
      tooltip: function () {
        var $tooltip = $('[data-bs-toggle="tooltip"]');
        if ($tooltip.length > 0) {
          //Check if tooltip plugin is loaded
          if (typeof $.fn.tooltip === "undefined") {
            INSPIRO.elements.notification("Warning: jQuery tooltip plugin is missing in plugins.js file.", "warning");
            return true;
          }
          //Initialize Tooltip plugin function
          $tooltip.tooltip();
        }
      },
      popover: function () {
        var $popover = $('[data-toggle="popover"]');
        if ($popover.length > 0) {
          //Check if popover plugin is loaded
          if (typeof $.fn.popover === "undefined") {
            INSPIRO.elements.notification("Warning: jQuery popover plugin is missing in plugins.js file.", "warning");
            return true;
          }
          //Initialize Tooltip plugin function
          $popover.popover({
            container: "body",
            html: true
          });
        }
      },
      magnificPopup: function () {
        var $lightbox = $("[data-lightbox]");
        if ($lightbox.length > 0) {
          //Check if magnificPopup plugin is loaded
          if (typeof $.fn.magnificPopup === "undefined") {
            INSPIRO.elements.notification("Warning", "jQuery magnificPopup plugin is missing in plugins.js file.", "danger");
            return true;
          }
          //Get lightbox data type
          var getType = {
            image: {
              type: "image",
              closeOnContentClick: true,
              removalDelay: 500,
              image: {
                verticalFit: true
              },
              callbacks: {
                beforeOpen: function () {
                  this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim");
                  this.st.mainClass = "mfp-zoom-out";
                }
              }
            },
            gallery: {
              delegate: 'a[data-lightbox="gallery-image"], a[data-lightbox="image"]',
              type: "image",
              image: {
                verticalFit: true
              },
              gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
              },
              removalDelay: 500,
              callbacks: {
                beforeOpen: function () {
                  this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim");
                  this.st.mainClass = "mfp-zoom-out";
                }
              }
            },
            iframe: {
              type: "iframe",
              removalDelay: 500,
              callbacks: {
                beforeOpen: function () {
                  this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim");
                  this.st.mainClass = "mfp-zoom-out";
                }
              }
            },
            ajax: {
              type: "ajax",
              removalDelay: 500,
              callbacks: {
                ajaxContentAdded: function (mfpResponse) {
                  // INSPIRO.elements.functions();

                  //Reinitialize carousel function
                  if ($(".mfp-content").find(".carousel").length > 0) {
                    INSPIRO.slider.carousel($(".mfp-content").find(".carousel"));
                  }
                }
              }
            },
            inline: {
              type: "inline",
              removalDelay: 500,
              closeBtnInside: true,
              midClick: true,
              callbacks: {
                beforeOpen: function () {
                  this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim");
                  this.st.mainClass = "mfp-zoom-out";
                },
                open: function () {
                  if ($(this.content).find("video").length > 0) {
                    $(this.content).find("video").get(0).play();
                  }
                },
                close: function () {
                  if ($(this.content).find("video").length > 0) {
                    $(this.content).find("video").get(0).load();
                  }
                }
              },
              fixedContentPos: true,
              overflowY: "scroll"
            }
          };
          //Initializing jQuery magnificPopup plugin and passing the options
          $lightbox.each(function () {
            var elem = $(this),
              elemType = elem.attr("data-lightbox");
            switch (elemType) {
              case "image":
                elem.magnificPopup(getType.image);
                break;
              case "gallery":
                elem.magnificPopup(getType.gallery);
                break;
              case "iframe":
                elem.magnificPopup(getType.iframe);
                break;
              case "ajax":
                elem.magnificPopup(getType.ajax);
                break;
              case "inline":
                elem.magnificPopup(getType.inline);
                break;
            }
          });
        }
      },
      yTPlayer: function () {
        var $ytPlayer = $(".youtube-background");
        if ($ytPlayer.length > 0) {
          //Check if YTPlayer plugin is loaded
          if (typeof $.fn.YTPlayer === "undefined") {
            INSPIRO.elements.notification("Warning", "jQuery YTPlayer plugin is missing, please add this code line <b> &lt;script src=&quot;plugins/youtube-player/jquery.mb.YTPlayer.min.js&quot;&gt;&lt;/script&gt;</b>, before <b><--Template functions--></b>", "danger", 10000);
            return true;
          }
          $ytPlayer.each(function () {
            var elem = $(this);
            //Plugin Options
            elem.options = {
              videoURL: elem.attr("data-youtube-url"),
              autoPlay: elem.data("youtube-autoplay") == false ? 0 : 1,
              mute: elem.data("youtube-mute") == false ? false : true,
              pauseOnScroll: elem.data("youtube-pauseOnScroll") == false ? false : true,
              loop: elem.data("youtube-loop") == false ? false : true,
              vol: elem.attr("data-youtube-volume") || 50,
              startAt: elem.attr("data-youtube-start") || 0,
              stopAt: elem.attr("data-youtube-stop") || 0,
              controls: elem.data("youtube-controls") == true ? 1 : 0
            };
            var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            var match = elem.options.videoURL.match(regExp);
            if (match && match[2].length == 11) {
              elem.options.videoURL = match[2];
            } else {
              elem.options.videoURL = elem.options.videoURL;
            }
            elem.YTPlayer({
              fitToBackground: true,
              videoId: elem.options.videoURL,
              repeat: elem.options.loop,
              playerVars: {
                start: elem.options.start,
                end: elem.options.end,
                autoplay: elem.options.autoPlay,
                modestbranding: elem.options.logo,
                controls: elem.options.controls,
                origin: window.location.origin,
                branding: 0,
                rel: 0,
                showinfo: 0
              },
              events: {
                onReady: onPlayerReady
              }
            });
            function onPlayerReady(event) {
              if (elem.options.vol) {
                event.target.setVolume(elem.options.vol);
              }
              if (elem.options.mute) {
                event.target.mute();
              }
              if (elem.options.pauseOnScroll) {
                var waypoint = new Waypoint({
                  element: elem,
                  handler: function (direction) {
                    event.target.pauseVideo();
                    if (elem.options.autoPlay == true && direction == "up") {
                      event.target.playVideo();
                    }
                  }
                });
              }
              if (Settings.isMobile) {
                elem.on("click", function (ev) {
                  event.target.playVideo();
                  ev.preventDefault();
                });
              }
            }
          });
        }
      },
      vimeoPlayer: function () {
        var $vmPlayer = $(".vimeo-background");
        if ($vmPlayer.length > 0) {
          //Check if vimeo_player plugin is loaded
          if (typeof $.fn.vimeo_player === "undefined") {
            INSPIRO.elements.notification("Warning", "jQuery vimeo_player plugin is missing, please add this code line <b> &lt;script src=&quot;plugins/vimeo-player/jquery.mb.vimeo_player.min.js&quot;&gt;&lt;/script&gt;</b>, before <b><--Template functions--></b>", "danger", 10000);
            return true;
          }
          $vmPlayer.each(function () {
            var elem = $(this),
              elemVideo = elem.attr("data-vimeo-url") || null,
              elemMute = elem.attr("data-vimeo-mute") || false,
              elemRatio = elem.attr("data-vimeo-ratio") || "16/9",
              elemQuality = elem.attr("data-vimeo-quality") || "hd720",
              elemOpacity = elem.attr("data-vimeo-opacity") || 1,
              elemContainer = elem.attr("data-vimeo-container") || "self",
              elemOptimize = elem.attr("data-vimeo-optimize") || true,
              elemLoop = elem.attr("data-vimeo-loop") || true,
              elemVolume = elem.attr("data-vimeo-volume") || 70,
              elemStart = elem.attr("data-vimeo-start") || 0,
              elemStop = elem.attr("data-vimeo-stop") || 0,
              elemAutoPlay = elem.attr("data-vimeo-autoplay") || true,
              elemFullScreen = elem.attr("data-vimeo-fullscreen") || true,
              elemControls = elem.attr("data-vimeo-controls") || false,
              elemLogo = elem.attr("data-vimeo-logo") || false,
              elemAutoPause = elem.attr("data-vimeo-autopause") || false;
            elem.vimeo_player({
              videoURL: elemVideo,
              mute: elemMute,
              ratio: elemRatio,
              quality: elemQuality,
              opacity: elemOpacity,
              containment: elemContainer,
              optimizeDisplay: elemOptimize,
              loop: elemLoop,
              vol: elemVolume,
              startAt: elemStart,
              stopAt: elemStop,
              autoPlay: elemAutoPlay,
              realfullscreen: elemFullScreen,
              showvmLogo: elemLogo,
              showControls: elemControls
            });
          });
        }
      },
      modal: function () {
        //Check if magnificPopup plugin is loaded
        if (typeof $.fn.magnificPopup === "undefined") {
          INSPIRO.elements.notification("Warning", "jQuery magnificPopup plugin is missing in plugins.js file.", "danger");
          return true;
        }
        var $modal = $(".modal"),
          $modalStrip = $(".modal-strip"),
          $btnModal = $(".btn-modal"),
          modalShow = "modal-auto-open",
          modalShowClass = "modal-active",
          modalDecline = $(".modal-close"),
          cookieNotify = $(".cookie-notify"),
          cookieConfirm = cookieNotify.find(".modal-confirm, .mfp-close");

        /*Modal*/
        if ($modal.length > 0) {
          $modal.each(function () {
            var elem = $(this),
              elemDelay = elem.attr("data-delay") || 3000,
              elemCookieExpire = elem.attr("data-cookie-expire") || 365,
              elemCookieName = elem.attr("data-cookie-name") || "cookieModalName2020_3",
              elemCookieEnabled = elem.data("cookie-enabled") == true ? true : false,
              elemModalDismissDelay = elem.attr("data-delay-dismiss");
            /*Modal Auto Show*/
            if (elem.hasClass(modalShow)) {
              var modalElem = $(this);
              var timeout = setTimeout(function () {
                modalElem.addClass(modalShowClass);
              }, elemDelay);
            }
            /*Modal Dissmis Button*/
            elem.find(modalDecline).click(function () {
              elem.removeClass(modalShowClass);
              return false;
            });
            /*Modal Auto Show*/
            if (elem.hasClass(modalShow)) {
              if (elemCookieEnabled != true) {
                /*Cookie Notify*/
                var t = setTimeout(function () {
                  $.magnificPopup.open({
                    items: {
                      src: elem
                    },
                    type: "inline",
                    closeBtnInside: true,
                    midClick: true,
                    callbacks: {
                      beforeOpen: function () {
                        this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim");
                        this.st.mainClass = "mfp-zoom-out";
                      },
                      open: function () {
                        if ($(this.content).find("video").length > 0) {
                          $(this.content).find("video").get(0).play();
                        }
                      },
                      close: function () {
                        if ($(this.content).find("video").length > 0) {
                          $(this.content).find("video").get(0).load();
                        }
                      }
                    }
                  }, 0);
                }, elemDelay);
              } else {
                if (typeof Cookies.get(elemCookieName) == "undefined") {
                  /*Cookie Notify*/
                  var t = setTimeout(function () {
                    $.magnificPopup.open({
                      items: {
                        src: elem
                      },
                      type: "inline",
                      closeBtnInside: true,
                      midClick: true,
                      callbacks: {
                        beforeOpen: function () {
                          this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim");
                          this.st.mainClass = "mfp-zoom-out";
                        },
                        open: function () {
                          if ($(this.content).find("video").length > 0) {
                            $(this.content).find("video").get(0).play();
                          }
                          cookieConfirm.click(function () {
                            Cookies.set(elemCookieName, true, {
                              expires: Number(elemCookieExpire)
                            });
                            $.magnificPopup.close();
                            cookieNotify.removeClass(modalShowClass);
                            return false;
                          });
                        },
                        close: function () {
                          if ($(this.content).find("video").length > 0) {
                            $(this.content).find("video").get(0).load();
                          }
                          Cookies.set(elemCookieName, true, {
                            expires: Number(elemCookieExpire)
                          });
                        }
                      }
                    }, 0);
                  }, elemDelay);
                }
              }
            }
            /*Modal Dissmis Button*/
            elem.find(modalDecline).click(function () {
              $.magnificPopup.close();
              return false;
            });
            if (elemModalDismissDelay) {}
          });
        }
        /*Modal Strip*/
        if ($modalStrip.length > 0) {
          $modalStrip.each(function () {
            var elem = $(this),
              elemDelay = elem.attr("data-delay") || 3000,
              elemCookieExpire = elem.attr("data-cookie-expire") || 365,
              elemCookieName = elem.attr("data-cookie-name") || "cookieName2013",
              elemCookieEnabled = elem.data("cookie-enabled") == true ? true : false,
              elemModalDismissDelay = elem.attr("data-delay-dismiss");
            /*Modal Auto Show*/
            if (elem.hasClass(modalShow)) {
              var modalElem = $(this);
              var timeout = setTimeout(function () {
                modalElem.addClass(modalShowClass);
                if (elemModalDismissDelay) {
                  var t = setTimeout(function () {
                    elem.removeClass(modalShowClass);
                  }, elemModalDismissDelay);
                }
              }, elemDelay);
            }
            /*Modal Dissmis Button*/
            elem.find(modalDecline).click(function () {
              elem.removeClass(modalShowClass);
              return false;
            });
            /*Cookie Notify*/
            if (elem.hasClass("cookie-notify")) {
              var timeout = setTimeout(function () {
                if (elemCookieEnabled != true) {
                  cookieNotify.addClass(modalShowClass);
                } else {
                  if (typeof Cookies.get(elemCookieName) == "undefined") {
                    cookieNotify.addClass(modalShowClass);
                  }
                }
              }, elemDelay);
              cookieConfirm.click(function () {
                Cookies.set(elemCookieName, true, {
                  expires: Number(elemCookieExpire)
                });
                $.magnificPopup.close();
                cookieNotify.removeClass(modalShowClass);
                return false;
              });
            }
          });
        }
        /*Modal toggles*/
        if ($btnModal.length > 0) {
          $btnModal.each(function () {
            var elem = $(this),
              modalTarget = elem.attr("data-modal");
            elem.click(function () {
              $(modalTarget).toggleClass(modalShowClass, 1000);
              return false;
            });
          });
        }
      },
      notification: function ($title, $message, $type, $element, $delay, $placement, $animateEnter, $animateExit, $backgroundImage, $timeout) {
        var $element,
          $elementContainer,
          $animateEnter = "animate__" + $animateEnter || 0,
          $animateExit = "animate__" + $animateExit || 0,
          $placement,
          $backgroundImage,
          $backgroundImageContainer,
          $timeout;
        if ($placement) {
          $placement = $placement;
        } else {
          $placement = "top";
        }
        if ($element) {
          $elementContainer = "element-container";
          $animateEnter = "animate__fadeIn", $animateExit = "animate__fadeOut";
        } else {
          $elementContainer = "col-11 col-md-4";
        }
        if ($backgroundImage) {
          $backgroundImageContainer = 'style="background-image:url(' + $backgroundImage + '); background-repeat: no-repeat; background-position: 50% 20%; height:120px !important; width:430px !important; border:0px;" ';
        }
        if (!$message) {
          $message = "";
        }
        $element = "body";
        var notify = function () {
          $.notify({
            title: $title,
            message: $message
          }, {
            element: $element,
            type: $type || "warning",
            delay: $delay || 10000,
            template: '<div data-notify="container" ' + $backgroundImageContainer + ' class="bootstrap-notify ' + $elementContainer + ' alert alert-{0}" role="alert">' + '<button type="button" aria-hidden="true" class="btn-close" data-notify="dismiss"></button>' + '<span data-notify="icon"></span> ' + '<span data-notify="title">{1}</span> ' + '<span data-notify="message">{2}</span>' + "</div>",
            mouse_over: true,
            allow_dismiss: true,
            placement: {
              from: $placement
            },
            animate: {
              enter: "animate__animated " + $animateEnter,
              exit: "animate__animated " + $animateExit
            }
          });
        };
        if ($timeout) {
          setTimeout(function () {
            notify();
          }, 2000);
        } else {
          notify();
        }
      },
      sidebarFixed: function () {
        if (INSPIRO.core.rtlStatus()) {
          return true;
        }
        var $sidebarFixed = $(".sticky-sidebar");
        if ($sidebarFixed.length > 0) {
          //Check if theiaStickySidebar plugin is loaded
          if (typeof $.fn.theiaStickySidebar === "undefined") {
            INSPIRO.elements.notification("Warning", "jQuery theiaStickySidebar plugin is missing in plugins.js file.", "danger");
            return true;
          }
          $sidebarFixed.each(function () {
            var elem = $(this);
            elem.options = {
              additionalMarginTop: elem.attr("data-margin-top") || 120,
              additionalMarginBottom: elem.attr("data-margin-bottom") || 50
            };
            //Initialize theiaStickySidebar plugin and passing the options
            elem.theiaStickySidebar({
              additionalMarginTop: Number(elem.options.additionalMarginTop),
              additionalMarginBottom: Number(elem.options.additionalMarginBottom),
              disableOnResponsiveLayouts: true
            });
          });
        }
      },
      bootstrapSwitch: function () {
        var $bootstrapSwitch = $("[data-switch=true]");
        if ($bootstrapSwitch.length > 0) {
          //Check if bootstrapSwitch plugin is loaded
          if (typeof $.fn.bootstrapSwitch === "undefined") {
            INSPIRO.elements.notification("Warning", "jQuery bootstrapSwitch plugin is missing in plugins.js file.", "danger");
            return true;
          }
          //Initialize jQuery BootstrapSwitch plugin
          $bootstrapSwitch.bootstrapSwitch();
        }
      },
      clipboard: function () {
        var $clipboardTarget = $("[data-clipboard-target]"),
          $clipboardText = $("[data-clipboard-text]");
        if ($clipboardTarget.length > 0) {
          //Check if ClipboardJS plugin is loaded
          if (typeof ClipboardJS === "undefined") {
            INSPIRO.elements.notification("Warning", "jQuery ClipboardJS plugin is missing in plugins.js file.", "danger");
            return true;
          }
          if ($clipboardTarget) {
            new ClipboardJS("[data-clipboard-target]");
            clipboardInit($clipboardTarget);
          }
          if ($clipboardText) {
            new ClipboardJS("[data-clipboard-text]");
            clipboardInit($clipboardText);
          }
          function clipboardInit(clipboardType) {
            clipboardType.each(function () {
              var elem = $(this),
                title = elem.attr("data-bs-original-title") || "Copy to clipboard",
                titleSuccess = elem.attr("data-bs-original-title-success") || "Copied!";
              elem.tooltip({
                placement: "top",
                title: title
              });
              elem.on("click", function () {
                elem.attr("data-bs-original-title", titleSuccess).tooltip("show");
              }).on("mouseleave", function () {
                elem.tooltip("hide").attr("data-bs-original-title", title);
                return false;
              });
            });
          }
        }
      },
      countdown: function () {
        var $countdown = $(".p-countdown");
        if ($countdown.length > 0) {
          $countdown.each(function () {
            var $elem = $(this),
              $elemCount = $elem.find(".p-countdown-count"),
              $elemShow = $elem.find(".p-countdown-show"),
              $elemSeconds = $elem.attr("data-delay") || 5;
            $elemCount.find(".count-number").html($elemSeconds);
            new Waypoint({
              element: $elem,
              handler: function () {
                var interval = setInterval(function () {
                  $elemSeconds--;
                  if ($elemSeconds == 0) {
                    clearInterval(interval);
                    $elemCount.fadeOut("slow");
                    setTimeout(function () {
                      $elemShow.fadeIn("show");
                    }, 1000);
                  } else {
                    $elemCount.find(".count-number").html($elemSeconds);
                  }
                }, 1000);
                this.destroy();
              },
              offset: "100%"
            });
          });
        }
      },
      videoBackground: function () {
        var $videoBackground = $("[data-bg-video]");
        if ($videoBackground.length > 0) {
          $videoBackground.each(function () {
            var elem = $(this);
            elem.options = {
              autoplay: elem.data("autoplay") == false ? false : true,
              controls: elem.attr("data-controls"),
              loop: elem.data("loop") == true ? true : false,
              muted: elem.data("muted") == false ? false : true,
              poster: elem.attr("data-poster") || "",
              preload: elem.attr("data-preload") || "auto",
              src: elem.attr("data-bg-video"),
              randomId: Math.random().toString(36).substr(2, 5)
            };
            if (elem.options.controls) {
              elem.options.controls = ' controls="' + elem.options.controls + '" ';
            } else {
              elem.options.controls = "";
            }
            elem.prepend('<div class="html5vid" id="video-' + elem.options.randomId + '">' + "<video playsinline " + elem.options.controls + ' loop="' + elem.options.loop + '" muted="' + elem.options.muted + '" poster="' + elem.options.poster + '" preload="' + elem.options.preload + '">' + '<source src="' + elem.options.src + '" type="video/mp4">' + "</video>" + "</div>");
            if (elem.options.autoplay) {
              setTimeout(function () {
                $("#video-" + elem.options.randomId).waypoint(function (direction) {
                  if (direction === "down") {
                    $("#video-" + elem.options.randomId).find("video").get(0).play();
                  } else {
                    $("#video-" + elem.options.randomId).find("video").get(0).pause();
                  }
                }, {
                  offset: "50%"
                });
              }, 100);
            }
            setTimeout(function () {
              $("#video-" + elem.options.randomId).addClass("video-loaded");
            }, 300);
          });
        }
      }
    };
    INSPIRO.widgets = {
      functions: function () {
        INSPIRO.widgets.twitter();
        INSPIRO.widgets.flickr();
        INSPIRO.widgets.instagram();
        INSPIRO.widgets.subscribeForm();
      },
      twitter: function () {
        var $widget_twitter = $(".widget-tweeter") || $(".widget-twitter");
        if ($widget_twitter.length > 0) {
          //Check if twittie plugin is loaded
          if (typeof $.fn.twittie === "undefined") {
            INSPIRO.elements.notification("Warning", "jQuery twittie plugin is missing in plugins.js file.", "danger");
            return true;
          }
          var t = setTimeout(function () {
            $widget_twitter.each(function () {
              var elem = $(this),
                twitterUsername = elem.attr("data-username") || "ardianmusliu",
                twitterLimit = elem.attr("data-limit") || 2,
                twitterDateFormat = elem.attr("data-format") || "%b/%d/%Y",
                twitterLoadingText = elem.attr("data-loading-text") || "Loading...",
                twitterApiPAth = elem.attr("data-loader") || "include/twitter/tweet.php",
                twitterAvatar = elem.attr("data-avatar") || false;
              if (twitterAvatar == "true") {
                twitterAvatar = "{{avatar}}";
              } else {
                twitterAvatar = "";
              }
              elem.append('<div id="twitter-cnt"></div>');
              elem.find("#twitter-cnt").twittie({
                username: twitterUsername,
                count: twitterLimit,
                dateFormat: twitterDateFormat,
                template: twitterAvatar + "{{tweet}}<small>{{date}}</small>",
                apiPath: twitterApiPAth,
                loadingText: twitterLoadingText
              }, function () {
                if (elem.parents(".grid-layout").length > 0) {
                  elem.parents(".grid-layout").isotope("layout");
                }
              });
            });
          }, 2000);
        }
      },
      flickr: function () {
        var $flickr_widget = $(".flickr-widget");
        if ($flickr_widget.length > 0) {
          //Check if jflickrfeed plugin is loaded
          if (typeof $.fn.jflickrfeed === "undefined") {
            INSPIRO.elements.notification("Warning", "jQuery jflickrfeed plugin is missing in plugins.js file.", "danger");
            return true;
          }
          $flickr_widget.each(function () {
            var elem = $(this);
            elem.options = {
              id: elem.attr("data-flickr-id") || "52617155@N08",
              limit: elem.attr("data-flickr-images") || "9",
              itemTemplate: '<a href="{{image}}" title="{{title}}"><img src="{{image_s}}" alt="{{title}}" /></a>'
            };
            //Initializing jflickrfeed plugin and passing the options
            $flickr_widget.jflickrfeed({
              limit: elem.options.limit,
              qstrings: {
                id: elem.options.id
              },
              itemTemplate: elem.options.itemTemplate
            }, function () {
              var t = setTimeout(function () {
                elem.addClass("flickr-widget-loaded");
              }, 1000);
              elem.magnificPopup({
                delegate: "a",
                type: "image",
                gallery: {
                  enabled: true
                }
              }, function () {
                if (elem.parents(".grid-layout").length > 0) {
                  elem.parents(".grid-layout").isotope("layout");
                }
              });
            });
          });
        }
      },
      instagram: function () {
        var $widget_instagram = $(".widget-instagram");
        if ($widget_instagram.length > 0) {
          //Check if spectragram plugin is loaded
          if (typeof $.fn.spectragram === "undefined") {
            INSPIRO.elements.notification("Warning", "jQuery spectragram plugin is missing in plugins.js file.", "danger");
            return true;
          }
          $widget_instagram.each(function () {
            var elem = $(this),
              instagramLimit = elem.attr("data-limit") || 12,
              instagramColumns = elem.attr("data-col") || 3,
              instagramAccessToken = elem.attr("data-token") || "IGQVJYMjdIb3lOZAlBpTDZApY1lOakNVTk1xWVdWVk42Y0RWMFNDSUE4TDRad3M5d2JNZAUZAiLXBhY0ZAfWVZAYUEctMDF0R1QwZA2lTalRQWC1kMi1zd2pQc3U0V3lkMEE0Tk8wZAUlzQW55d3h3THFjRU94TgZDZD",
              instagramItems = "#instagram-cnt",
              instagramSize = elem.attr("data-size") || "small",
              //The size of the photos. 'small', 'medium' or 'big'. Default: 'medium'
              instagramGridColumns = "grid-" + instagramColumns;
            elem.append('<div id="instagram-cnt" class="' + instagramGridColumns + '"></div>');
            jQuery.fn.spectragram.accessData = {
              accessToken: instagramAccessToken
            };
            elem.find($(instagramItems)).spectragram({
              complete: myCallbackFunc(),
              max: instagramLimit,
              size: instagramSize,
              wrapEachWith: ""
            });
            function myCallbackFunc() {
              elem.addClass("widget-instagram-loaded");
              /*   setTimeout(function () {
                  if (elem.parents(".grid-layout").length > 0) {
                    elem.parents(".grid-layout").isotope("layout");
                  }
                }, 100); */
            }
          });
        }
      },

      subscribeForm: function () {
        var $subscribeForm = $(".widget-subscribe-form");
        if ($subscribeForm.length > 0) {
          $subscribeForm.each(function () {
            var elem = $(this),
              elemSuccessMessage = elem.attr("data-success-message") || "You have successfully subscribed to our mailing list.";
            var addonIcon = elem.find('button[type="submit"]'),
              addonIconText = addonIcon.html();
            elem.submit(function (event) {
              event.preventDefault();
              var post_url = $(this).attr("action");
              var request_method = $(this).attr("method");
              var form_data = $(this).serialize();
              if (elem[0].checkValidity() === false) {
                event.stopPropagation();
                elem.addClass("was-validated");
              } else {
                $(elem).removeClass("was-validated");
                addonIcon.html('<i class="icon-loader fa-spin"></i>');
                $.ajax({
                  url: post_url,
                  type: request_method,
                  data: form_data,
                  dataType: "json",
                  success: function (text) {
                    if (text.response == "success") {
                      $.notify({
                        message: elemSuccessMessage
                      }, {
                        type: "success"
                      });
                      $(elem)[0].reset();
                      $(elem).removeClass("was-validated");
                      addonIcon.html(addonIconText);
                    } else {
                      $.notify({
                        message: text.message
                      }, {
                        type: "warning"
                      });
                      $(elem)[0].reset();
                      $(elem).removeClass("was-validated");
                      addonIcon.html(addonIconText);
                    }
                  },
                  done: function () {
                    addonIcon.html(addonIconText);
                  }
                });
              }
            });
          });
        }
      }
    };
    //Load Functions on document ready
    $(document).ready(function () {
      INSPIRO.core.functions();
      INSPIRO.header.functions();
      INSPIRO.slider.functions();
      INSPIRO.widgets.functions();
      INSPIRO.elements.functions();
    });
    //Recall Functions on window scroll
    $window.on("scroll", function () {
      INSPIRO.header.stickyHeader();
      INSPIRO.core.scrollTop();
      INSPIRO.header.dotsMenu();
    });
    //Recall Functions on window resize
    $window.on("resize", function () {
      INSPIRO.header.logoStatus();
      INSPIRO.header.stickyHeader();
      INSPIRO.header.mainMenuResponsiveShow();
    });
  })(jQuery);
});

/***/ }),

/***/ "./vendor/oi-layout/polo/assets/js/notify.min.js":
/*!*******************************************************!*\
  !*** ./vendor/oi-layout/polo/assets/js/notify.min.js ***!
  \*******************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
})(function (e) {
  function A(t, n, i) {
    typeof i == "string" && (i = {
      className: i
    }), this.options = E(w, e.isPlainObject(i) ? i : {}), this.loadHTML(), this.wrapper = e(h.html), this.options.clickToHide && this.wrapper.addClass(r + "-hidable"), this.wrapper.data(r, this), this.arrow = this.wrapper.find("." + r + "-arrow"), this.container = this.wrapper.find("." + r + "-container"), this.container.append(this.userContainer), t && t.length && (this.elementType = t.attr("type"), this.originalElement = t, this.elem = N(t), this.elem.data(r, this), this.elem.before(this.wrapper)), this.container.hide(), this.run(n);
  }
  var t = [].indexOf || function (e) {
      for (var t = 0, n = this.length; t < n; t++) if (t in this && this[t] === e) return t;
      return -1;
    },
    n = "notify",
    r = n + "js",
    i = n + "!blank",
    s = {
      t: "top",
      m: "middle",
      b: "bottom",
      l: "left",
      c: "center",
      r: "right"
    },
    o = ["l", "c", "r"],
    u = ["t", "m", "b"],
    a = ["t", "b", "l", "r"],
    f = {
      t: "b",
      m: null,
      b: "t",
      l: "r",
      c: null,
      r: "l"
    },
    l = function (t) {
      var n;
      return n = [], e.each(t.split(/\W+/), function (e, t) {
        var r;
        r = t.toLowerCase().charAt(0);
        if (s[r]) return n.push(r);
      }), n;
    },
    c = {},
    h = {
      name: "core",
      html: '<div class="' + r + '-wrapper">\n	<div class="' + r + '-arrow"></div>\n	<div class="' + r + '-container"></div>\n</div>',
      css: "." + r + "-corner {\n	position: fixed;\n	margin: 5px;\n	z-index: 1050;\n}\n\n." + r + "-corner ." + r + "-wrapper,\n." + r + "-corner ." + r + "-container {\n	position: relative;\n	display: block;\n	height: inherit;\n	width: inherit;\n	margin: 3px;\n}\n\n." + r + "-wrapper {\n	z-index: 1;\n	position: absolute;\n	display: inline-block;\n	height: 0;\n	width: 0;\n}\n\n." + r + "-container {\n	display: none;\n	z-index: 1;\n	position: absolute;\n}\n\n." + r + "-hidable {\n	cursor: pointer;\n}\n\n[data-notify-text],[data-notify-html] {\n	position: relative;\n}\n\n." + r + "-arrow {\n	position: absolute;\n	z-index: 2;\n	width: 0;\n	height: 0;\n}"
    },
    p = {
      "border-radius": ["-webkit-", "-moz-"]
    },
    d = function (e) {
      return c[e];
    },
    v = function (e) {
      if (!e) throw "Missing Style name";
      c[e] && delete c[e];
    },
    m = function (t, i) {
      if (!t) throw "Missing Style name";
      if (!i) throw "Missing Style definition";
      if (!i.html) throw "Missing Style HTML";
      var s = c[t];
      s && s.cssElem && (window.console && console.warn(n + ": overwriting style '" + t + "'"), c[t].cssElem.remove()), i.name = t, c[t] = i;
      var o = "";
      i.classes && e.each(i.classes, function (t, n) {
        return o += "." + r + "-" + i.name + "-" + t + " {\n", e.each(n, function (t, n) {
          return p[t] && e.each(p[t], function (e, r) {
            return o += "	" + r + t + ": " + n + ";\n";
          }), o += "	" + t + ": " + n + ";\n";
        }), o += "}\n";
      }), i.css && (o += "/* styles for " + i.name + " */\n" + i.css), o && (i.cssElem = g(o), i.cssElem.attr("id", "notify-" + i.name));
      var u = {},
        a = e(i.html);
      y("html", a, u), y("text", a, u), i.fields = u;
    },
    g = function (t) {
      var n, r, i;
      r = x("style"), r.attr("type", "text/css"), e("head").append(r);
      try {
        r.html(t);
      } catch (s) {
        r[0].styleSheet.cssText = t;
      }
      return r;
    },
    y = function (t, n, r) {
      var s;
      return t !== "html" && (t = "text"), s = "data-notify-" + t, b(n, "[" + s + "]").each(function () {
        var n;
        n = e(this).attr(s), n || (n = i), r[n] = t;
      });
    },
    b = function (e, t) {
      return e.is(t) ? e : e.find(t);
    },
    w = {
      clickToHide: !0,
      autoHide: !0,
      autoHideDelay: 5e3,
      arrowShow: !0,
      arrowSize: 5,
      breakNewLines: !0,
      elementPosition: "bottom",
      globalPosition: "top right",
      style: "bootstrap",
      className: "error",
      showAnimation: "slideDown",
      showDuration: 400,
      hideAnimation: "slideUp",
      hideDuration: 200,
      gap: 5
    },
    E = function (t, n) {
      var r;
      return r = function () {}, r.prototype = t, e.extend(!0, new r(), n);
    },
    S = function (t) {
      return e.extend(w, t);
    },
    x = function (t) {
      return e("<" + t + "></" + t + ">");
    },
    T = {},
    N = function (t) {
      var n;
      return t.is("[type=radio]") && (n = t.parents("form:first").find("[type=radio]").filter(function (n, r) {
        return e(r).attr("name") === t.attr("name");
      }), t = n.first()), t;
    },
    C = function (e, t, n) {
      var r, i;
      if (typeof n == "string") n = parseInt(n, 10);else if (typeof n != "number") return;
      if (isNaN(n)) return;
      return r = s[f[t.charAt(0)]], i = t, e[r] !== undefined && (t = s[r.charAt(0)], n = -n), e[t] === undefined ? e[t] = n : e[t] += n, null;
    },
    k = function (e, t, n) {
      if (e === "l" || e === "t") return 0;
      if (e === "c" || e === "m") return n / 2 - t / 2;
      if (e === "r" || e === "b") return n - t;
      throw "Invalid alignment";
    },
    L = function (e) {
      return L.e = L.e || x("div"), L.e.text(e).html();
    };
  A.prototype.loadHTML = function () {
    var t;
    t = this.getStyle(), this.userContainer = e(t.html), this.userFields = t.fields;
  }, A.prototype.show = function (e, t) {
    var n, r, i, s, o;
    r = function (n) {
      return function () {
        !e && !n.elem && n.destroy();
        if (t) return t();
      };
    }(this), o = this.container.parent().parents(":hidden").length > 0, i = this.container.add(this.arrow), n = [];
    if (o && e) s = "show";else if (o && !e) s = "hide";else if (!o && e) s = this.options.showAnimation, n.push(this.options.showDuration);else {
      if (!!o || !!e) return r();
      s = this.options.hideAnimation, n.push(this.options.hideDuration);
    }
    return n.push(r), i[s].apply(i, n);
  }, A.prototype.setGlobalPosition = function () {
    var t = this.getPosition(),
      n = t[0],
      i = t[1],
      o = s[n],
      u = s[i],
      a = n + "|" + i,
      f = T[a];
    if (!f || !document.body.contains(f[0])) {
      f = T[a] = x("div");
      var l = {};
      l[o] = 0, u === "middle" ? l.top = "45%" : u === "center" ? l.left = "45%" : l[u] = 0, f.css(l).addClass(r + "-corner"), e("body").append(f);
    }
    return f.prepend(this.wrapper);
  }, A.prototype.setElementPosition = function () {
    var n, r, i, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, L, A, O, M, _, D, P, H, B, j;
    H = this.getPosition(), _ = H[0], O = H[1], M = H[2], g = this.elem.position(), d = this.elem.outerHeight(), y = this.elem.outerWidth(), v = this.elem.innerHeight(), m = this.elem.innerWidth(), j = this.wrapper.position(), c = this.container.height(), h = this.container.width(), T = s[_], L = f[_], A = s[L], p = {}, p[A] = _ === "b" ? d : _ === "r" ? y : 0, C(p, "top", g.top - j.top), C(p, "left", g.left - j.left), B = ["top", "left"];
    for (w = 0, S = B.length; w < S; w++) D = B[w], N = parseInt(this.elem.css("margin-" + D), 10), N && C(p, D, N);
    b = Math.max(0, this.options.gap - (this.options.arrowShow ? i : 0)), C(p, A, b);
    if (!this.options.arrowShow) this.arrow.hide();else {
      i = this.options.arrowSize, r = e.extend({}, p), n = this.userContainer.css("border-color") || this.userContainer.css("border-top-color") || this.userContainer.css("background-color") || "white";
      for (E = 0, x = a.length; E < x; E++) {
        D = a[E], P = s[D];
        if (D === L) continue;
        l = P === T ? n : "transparent", r["border-" + P] = i + "px solid " + l;
      }
      C(p, s[L], i), t.call(a, O) >= 0 && C(r, s[O], i * 2);
    }
    t.call(u, _) >= 0 ? (C(p, "left", k(O, h, y)), r && C(r, "left", k(O, i, m))) : t.call(o, _) >= 0 && (C(p, "top", k(O, c, d)), r && C(r, "top", k(O, i, v))), this.container.is(":visible") && (p.display = "block"), this.container.removeAttr("style").css(p);
    if (r) return this.arrow.removeAttr("style").css(r);
  }, A.prototype.getPosition = function () {
    var e, n, r, i, s, f, c, h;
    h = this.options.position || (this.elem ? this.options.elementPosition : this.options.globalPosition), e = l(h), e.length === 0 && (e[0] = "b");
    if (n = e[0], t.call(a, n) < 0) throw "Must be one of [" + a + "]";
    if (e.length === 1 || (r = e[0], t.call(u, r) >= 0) && (i = e[1], t.call(o, i) < 0) || (s = e[0], t.call(o, s) >= 0) && (f = e[1], t.call(u, f) < 0)) e[1] = (c = e[0], t.call(o, c) >= 0) ? "m" : "l";
    return e.length === 2 && (e[2] = e[1]), e;
  }, A.prototype.getStyle = function (e) {
    var t;
    e || (e = this.options.style), e || (e = "default"), t = c[e];
    if (!t) throw "Missing style: " + e;
    return t;
  }, A.prototype.updateClasses = function () {
    var t, n;
    return t = ["base"], e.isArray(this.options.className) ? t = t.concat(this.options.className) : this.options.className && t.push(this.options.className), n = this.getStyle(), t = e.map(t, function (e) {
      return r + "-" + n.name + "-" + e;
    }).join(" "), this.userContainer.attr("class", t);
  }, A.prototype.run = function (t, n) {
    var r, s, o, u, a;
    e.isPlainObject(n) ? e.extend(this.options, n) : e.type(n) === "string" && (this.options.className = n);
    if (this.container && !t) {
      this.show(!1);
      return;
    }
    if (!this.container && !t) return;
    s = {}, e.isPlainObject(t) ? s = t : s[i] = t;
    for (o in s) {
      r = s[o], u = this.userFields[o];
      if (!u) continue;
      u === "text" && (r = L(r), this.options.breakNewLines && (r = r.replace(/\n/g, "<br/>"))), a = o === i ? "" : "=" + o, b(this.userContainer, "[data-notify-" + u + a + "]").html(r);
    }
    this.updateClasses(), this.elem ? this.setElementPosition() : this.setGlobalPosition(), this.show(!0), this.options.autoHide && (clearTimeout(this.autohideTimer), this.autohideTimer = setTimeout(this.show.bind(this, !1), this.options.autoHideDelay));
  }, A.prototype.destroy = function () {
    this.wrapper.data(r, null), this.wrapper.remove();
  }, e[n] = function (t, r, i) {
    return t && t.nodeName || t.jquery ? e(t)[n](r, i) : (i = r, r = t, new A(null, r, i)), t;
  }, e.fn[n] = function (t, n) {
    return e(this).each(function () {
      var i = N(e(this)).data(r);
      i && i.destroy();
      var s = new A(e(this), t, n);
    }), this;
  }, e.extend(e[n], {
    defaults: S,
    addStyle: m,
    removeStyle: v,
    pluginOptions: w,
    getStyle: d,
    insertCSS: g
  }), m("bootstrap", {
    html: "<div>\n<span data-notify-text></span>\n</div>",
    classes: {
      base: {
        "font-weight": "bold",
        padding: "8px 15px 8px 14px",
        "text-shadow": "0 1px 0 rgba(255, 255, 255, 0.5)",
        "background-color": "#fcf8e3",
        border: "1px solid #fbeed5",
        "border-radius": "4px",
        "white-space": "nowrap",
        "padding-left": "25px",
        "background-repeat": "no-repeat",
        "background-position": "3px 7px"
      },
      error: {
        color: "#B94A48",
        "background-color": "#F2DEDE",
        "border-color": "#EED3D7",
        "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtRJREFUeNqkVc1u00AQHq+dOD+0poIQfkIjalW0SEGqRMuRnHos3DjwAH0ArlyQeANOOSMeAA5VjyBxKBQhgSpVUKKQNGloFdw4cWw2jtfMOna6JOUArDTazXi/b3dm55socPqQhFka++aHBsI8GsopRJERNFlY88FCEk9Yiwf8RhgRyaHFQpPHCDmZG5oX2ui2yilkcTT1AcDsbYC1NMAyOi7zTX2Agx7A9luAl88BauiiQ/cJaZQfIpAlngDcvZZMrl8vFPK5+XktrWlx3/ehZ5r9+t6e+WVnp1pxnNIjgBe4/6dAysQc8dsmHwPcW9C0h3fW1hans1ltwJhy0GxK7XZbUlMp5Ww2eyan6+ft/f2FAqXGK4CvQk5HueFz7D6GOZtIrK+srupdx1GRBBqNBtzc2AiMr7nPplRdKhb1q6q6zjFhrklEFOUutoQ50xcX86ZlqaZpQrfbBdu2R6/G19zX6XSgh6RX5ubyHCM8nqSID6ICrGiZjGYYxojEsiw4PDwMSL5VKsC8Yf4VRYFzMzMaxwjlJSlCyAQ9l0CW44PBADzXhe7xMdi9HtTrdYjFYkDQL0cn4Xdq2/EAE+InCnvADTf2eah4Sx9vExQjkqXT6aAERICMewd/UAp/IeYANM2joxt+q5VI+ieq2i0Wg3l6DNzHwTERPgo1ko7XBXj3vdlsT2F+UuhIhYkp7u7CarkcrFOCtR3H5JiwbAIeImjT/YQKKBtGjRFCU5IUgFRe7fF4cCNVIPMYo3VKqxwjyNAXNepuopyqnld602qVsfRpEkkz+GFL1wPj6ySXBpJtWVa5xlhpcyhBNwpZHmtX8AGgfIExo0ZpzkWVTBGiXCSEaHh62/PoR0p/vHaczxXGnj4bSo+G78lELU80h1uogBwWLf5YlsPmgDEd4M236xjm+8nm4IuE/9u+/PH2JXZfbwz4zw1WbO+SQPpXfwG/BBgAhCNZiSb/pOQAAAAASUVORK5CYII=)"
      },
      success: {
        color: "#468847",
        "background-color": "#DFF0D8",
        "border-color": "#D6E9C6",
        "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAutJREFUeNq0lctPE0Ecx38zu/RFS1EryqtgJFA08YCiMZIAQQ4eRG8eDGdPJiYeTIwHTfwPiAcvXIwXLwoXPaDxkWgQ6islKlJLSQWLUraPLTv7Gme32zoF9KSTfLO7v53vZ3d/M7/fIth+IO6INt2jjoA7bjHCJoAlzCRw59YwHYjBnfMPqAKWQYKjGkfCJqAF0xwZjipQtA3MxeSG87VhOOYegVrUCy7UZM9S6TLIdAamySTclZdYhFhRHloGYg7mgZv1Zzztvgud7V1tbQ2twYA34LJmF4p5dXF1KTufnE+SxeJtuCZNsLDCQU0+RyKTF27Unw101l8e6hns3u0PBalORVVVkcaEKBJDgV3+cGM4tKKmI+ohlIGnygKX00rSBfszz/n2uXv81wd6+rt1orsZCHRdr1Imk2F2Kob3hutSxW8thsd8AXNaln9D7CTfA6O+0UgkMuwVvEFFUbbAcrkcTA8+AtOk8E6KiQiDmMFSDqZItAzEVQviRkdDdaFgPp8HSZKAEAL5Qh7Sq2lIJBJwv2scUqkUnKoZgNhcDKhKg5aH+1IkcouCAdFGAQsuWZYhOjwFHQ96oagWgRoUov1T9kRBEODAwxM2QtEUl+Wp+Ln9VRo6BcMw4ErHRYjH4/B26AlQoQQTRdHWwcd9AH57+UAXddvDD37DmrBBV34WfqiXPl61g+vr6xA9zsGeM9gOdsNXkgpEtTwVvwOklXLKm6+/p5ezwk4B+j6droBs2CsGa/gNs6RIxazl4Tc25mpTgw/apPR1LYlNRFAzgsOxkyXYLIM1V8NMwyAkJSctD1eGVKiq5wWjSPdjmeTkiKvVW4f2YPHWl3GAVq6ymcyCTgovM3FzyRiDe2TaKcEKsLpJvNHjZgPNqEtyi6mZIm4SRFyLMUsONSSdkPeFtY1n0mczoY3BHTLhwPRy9/lzcziCw9ACI+yql0VLzcGAZbYSM5CCSZg1/9oc/nn7+i8N9p/8An4JMADxhH+xHfuiKwAAAABJRU5ErkJggg==)"
      },
      info: {
        color: "#3A87AD",
        "background-color": "#D9EDF7",
        "border-color": "#BCE8F1",
        "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QYFAhkSsdes/QAAA8dJREFUOMvVlGtMW2UYx//POaWHXg6lLaW0ypAtw1UCgbniNOLcVOLmAjHZolOYlxmTGXVZdAnRfXQm+7SoU4mXaOaiZsEpC9FkiQs6Z6bdCnNYruM6KNBw6YWewzl9z+sHImEWv+vz7XmT95f/+3/+7wP814v+efDOV3/SoX3lHAA+6ODeUFfMfjOWMADgdk+eEKz0pF7aQdMAcOKLLjrcVMVX3xdWN29/GhYP7SvnP0cWfS8caSkfHZsPE9Fgnt02JNutQ0QYHB2dDz9/pKX8QjjuO9xUxd/66HdxTeCHZ3rojQObGQBcuNjfplkD3b19Y/6MrimSaKgSMmpGU5WevmE/swa6Oy73tQHA0Rdr2Mmv/6A1n9w9suQ7097Z9lM4FlTgTDrzZTu4StXVfpiI48rVcUDM5cmEksrFnHxfpTtU/3BFQzCQF/2bYVoNbH7zmItbSoMj40JSzmMyX5qDvriA7QdrIIpA+3cdsMpu0nXI8cV0MtKXCPZev+gCEM1S2NHPvWfP/hL+7FSr3+0p5RBEyhEN5JCKYr8XnASMT0xBNyzQGQeI8fjsGD39RMPk7se2bd5ZtTyoFYXftF6y37gx7NeUtJJOTFlAHDZLDuILU3j3+H5oOrD3yWbIztugaAzgnBKJuBLpGfQrS8wO4FZgV+c1IxaLgWVU0tMLEETCos4xMzEIv9cJXQcyagIwigDGwJgOAtHAwAhisQUjy0ORGERiELgG4iakkzo4MYAxcM5hAMi1WWG1yYCJIcMUaBkVRLdGeSU2995TLWzcUAzONJ7J6FBVBYIggMzmFbvdBV44Corg8vjhzC+EJEl8U1kJtgYrhCzgc/vvTwXKSib1paRFVRVORDAJAsw5FuTaJEhWM2SHB3mOAlhkNxwuLzeJsGwqWzf5TFNdKgtY5qHp6ZFf67Y/sAVadCaVY5YACDDb3Oi4NIjLnWMw2QthCBIsVhsUTU9tvXsjeq9+X1d75/KEs4LNOfcdf/+HthMnvwxOD0wmHaXr7ZItn2wuH2SnBzbZAbPJwpPx+VQuzcm7dgRCB57a1uBzUDRL4bfnI0RE0eaXd9W89mpjqHZnUI5Hh2l2dkZZUhOqpi2qSmpOmZ64Tuu9qlz/SEXo6MEHa3wOip46F1n7633eekV8ds8Wxjn37Wl63VVa+ej5oeEZ/82ZBETJjpJ1Rbij2D3Z/1trXUvLsblCK0XfOx0SX2kMsn9dX+d+7Kf6h8o4AIykuffjT8L20LU+w4AZd5VvEPY+XpWqLV327HR7DzXuDnD8r+ovkBehJ8i+y8YAAAAASUVORK5CYII=)"
      },
      warn: {
        color: "#C09853",
        "background-color": "#FCF8E3",
        "border-color": "#FBEED5",
        "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAABJlBMVEXr6eb/2oD/wi7/xjr/0mP/ykf/tQD/vBj/3o7/uQ//vyL/twebhgD/4pzX1K3z8e349vK6tHCilCWbiQymn0jGworr6dXQza3HxcKkn1vWvV/5uRfk4dXZ1bD18+/52YebiAmyr5S9mhCzrWq5t6ufjRH54aLs0oS+qD751XqPhAybhwXsujG3sm+Zk0PTwG6Shg+PhhObhwOPgQL4zV2nlyrf27uLfgCPhRHu7OmLgAafkyiWkD3l49ibiAfTs0C+lgCniwD4sgDJxqOilzDWowWFfAH08uebig6qpFHBvH/aw26FfQTQzsvy8OyEfz20r3jAvaKbhgG9q0nc2LbZxXanoUu/u5WSggCtp1anpJKdmFz/zlX/1nGJiYmuq5Dx7+sAAADoPUZSAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfdBgUBGhh4aah5AAAAlklEQVQY02NgoBIIE8EUcwn1FkIXM1Tj5dDUQhPU502Mi7XXQxGz5uVIjGOJUUUW81HnYEyMi2HVcUOICQZzMMYmxrEyMylJwgUt5BljWRLjmJm4pI1hYp5SQLGYxDgmLnZOVxuooClIDKgXKMbN5ggV1ACLJcaBxNgcoiGCBiZwdWxOETBDrTyEFey0jYJ4eHjMGWgEAIpRFRCUt08qAAAAAElFTkSuQmCC)"
      }
    }
  }), e(function () {
    g(h.css).attr("id", "core-notify"), e(document).on("click", "." + r + "-hidable", function (t) {
      e(this).trigger("notify-hide");
    }), e(document).on("notify-hide", "." + r + "-wrapper", function (t) {
      var n = e(this).data(r);
      n && n.show(!1);
    });
  });
});

/***/ }),

/***/ "./vendor/oi-layout/polo/assets/js/owl.fix.js":
/*!****************************************************!*\
  !*** ./vendor/oi-layout/polo/assets/js/owl.fix.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js");
/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js");
/**
 * Owl carousel
 * @version 2.0.0-beta.3
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;
(function ($, window, document, undefined) {
  /**
   * Creates a carousel.
   * @class The Owl Carousel.
   * @public
   * @param {HTMLElement|jQuery} element - The element to create the carousel for.
   * @param {Object} [options] - The options
   */
  function Owl(element, options) {
    /**
     * Current settings for the carousel.
     * @public
     */
    this.settings = null;

    /**
     * Current options set by the caller including defaults.
     * @public
     */
    this.options = $.extend({}, Owl.Defaults, options);

    /**
     * Plugin element.
     * @public
     */
    this.$element = $(element);

    /**
     * Proxied event handlers.
     * @protected
     */
    this._handlers = {};

    /**
     * References to the running plugins of this carousel.
     * @protected
     */
    this._plugins = {};

    /**
     * Currently suppressed events to prevent them from beeing retriggered.
     * @protected
     */
    this._supress = {};

    /**
     * Absolute current position.
     * @protected
     */
    this._current = null;

    /**
     * Animation speed in milliseconds.
     * @protected
     */
    this._speed = null;

    /**
     * Coordinates of all items in pixel.
     * @todo The name of this member is missleading.
     * @protected
     */
    this._coordinates = [];

    /**
     * Current breakpoint.
     * @todo Real media queries would be nice.
     * @protected
     */
    this._breakpoint = null;

    /**
     * Current width of the plugin element.
     */
    this._width = null;

    /**
     * All real items.
     * @protected
     */
    this._items = [];

    /**
     * All cloned items.
     * @protected
     */
    this._clones = [];

    /**
     * Merge values of all items.
     * @todo Maybe this could be part of a plugin.
     * @protected
     */
    this._mergers = [];

    /**
     * Widths of all items.
     */
    this._widths = [];

    /**
     * Invalidated parts within the update process.
     * @protected
     */
    this._invalidated = {};

    /**
     * Ordered list of workers for the update process.
     * @protected
     */
    this._pipe = [];

    /**
     * Current state information for the drag operation.
     * @todo #261
     * @protected
     */
    this._drag = {
      time: null,
      target: null,
      pointer: null,
      stage: {
        start: null,
        current: null
      },
      direction: null
    };

    /**
     * Current state information and their tags.
     * @type {Object}
     * @protected
     */
    this._states = {
      current: {},
      tags: {
        'initializing': ['busy'],
        'animating': ['busy'],
        'dragging': ['interacting']
      }
    };
    $.each(['onResize', 'onThrottledResize'], $.proxy(function (i, handler) {
      this._handlers[handler] = $.proxy(this[handler], this);
    }, this));
    $.each(Owl.Plugins, $.proxy(function (key, plugin) {
      this._plugins[key.charAt(0).toLowerCase() + key.slice(1)] = new plugin(this);
    }, this));
    $.each(Owl.Workers, $.proxy(function (priority, worker) {
      this._pipe.push({
        'filter': worker.filter,
        'run': $.proxy(worker.run, this)
      });
    }, this));
    this.setup();
    this.initialize();
  }

  /**
   * Default options for the carousel.
   * @public
   */
  Owl.Defaults = {
    items: 3,
    loop: false,
    center: false,
    rewind: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    freeDrag: false,
    margin: 0,
    stagePadding: 0,
    merge: false,
    mergeFit: true,
    autoWidth: false,
    startPosition: 0,
    rtl: false,
    smartSpeed: 250,
    fluidSpeed: false,
    dragEndSpeed: false,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: window,
    fallbackEasing: 'swing',
    info: false,
    nestedItemSelector: false,
    itemElement: 'div',
    stageElement: 'div',
    refreshClass: 'owl-refresh',
    loadedClass: 'owl-loaded',
    loadingClass: 'owl-loading',
    rtlClass: 'owl-rtl',
    responsiveClass: 'owl-responsive',
    dragClass: 'owl-drag',
    itemClass: 'owl-item',
    stageClass: 'owl-stage',
    stageOuterClass: 'owl-stage-outer',
    grabClass: 'owl-grab'
  };

  /**
   * Enumeration for width.
   * @public
   * @readonly
   * @enum {String}
   */
  Owl.Width = {
    Default: 'default',
    Inner: 'inner',
    Outer: 'outer'
  };

  /**
   * Enumeration for types.
   * @public
   * @readonly
   * @enum {String}
   */
  Owl.Type = {
    Event: 'event',
    State: 'state'
  };

  /**
   * Contains all registered plugins.
   * @public
   */
  Owl.Plugins = {};

  /**
   * List of workers involved in the update process.
   */
  Owl.Workers = [{
    filter: ['width', 'settings'],
    run: function () {
      this._width = this.$element.width();
    }
  }, {
    filter: ['width', 'items', 'settings'],
    run: function (cache) {
      cache.current = this._items && this._items[this.relative(this._current)];
    }
  }, {
    filter: ['items', 'settings'],
    run: function () {
      this.$stage.children('.cloned').remove();
    }
  }, {
    filter: ['width', 'items', 'settings'],
    run: function (cache) {
      var margin = this.settings.margin || '',
        grid = !this.settings.autoWidth,
        rtl = this.settings.rtl,
        css = {
          'width': 'auto',
          'margin-left': rtl ? margin : '',
          'margin-right': rtl ? '' : margin
        };
      !grid && this.$stage.children().css(css);
      cache.css = css;
    }
  }, {
    filter: ['width', 'items', 'settings'],
    run: function (cache) {
      var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
        merge = null,
        iterator = this._items.length,
        grid = !this.settings.autoWidth,
        widths = [];
      cache.items = {
        merge: false,
        width: width
      };
      while (iterator--) {
        merge = this._mergers[iterator];
        merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;
        cache.items.merge = merge > 1 || cache.items.merge;
        widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
      }
      this._widths = widths;
    }
  }, {
    filter: ['items', 'settings'],
    run: function () {
      var clones = [],
        items = this._items,
        settings = this.settings,
        view = Math.max(settings.items * 2, 4),
        size = Math.ceil(items.length / 2) * 2,
        repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
        append = '',
        prepend = '';
      repeat /= 2;
      while (repeat--) {
        clones.push(this.normalize(clones.length / 2, true));
        append = append + items[clones[clones.length - 1]][0].outerHTML;
        clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
        prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
      }
      this._clones = clones;
      $(append).addClass('cloned').appendTo(this.$stage);
      $(prepend).addClass('cloned').prependTo(this.$stage);
    }
  }, {
    filter: ['width', 'items', 'settings'],
    run: function () {
      var rtl = this.settings.rtl ? 1 : -1,
        size = this._clones.length + this._items.length,
        iterator = -1,
        previous = 0,
        current = 0,
        coordinates = [];
      while (++iterator < size) {
        previous = coordinates[iterator - 1] || 0;
        current = this._widths[this.relative(iterator)] + this.settings.margin;
        coordinates.push(previous + current * rtl);
      }
      this._coordinates = coordinates;
    }
  }, {
    filter: ['width', 'items', 'settings'],
    run: function () {
      var padding = this.settings.stagePadding,
        coordinates = this._coordinates,
        css = {
          'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
          'padding-left': padding || '',
          'padding-right': padding || ''
        };
      this.$stage.css(css);
    }
  }, {
    filter: ['width', 'items', 'settings'],
    run: function (cache) {
      var iterator = this._coordinates.length,
        grid = !this.settings.autoWidth,
        items = this.$stage.children();
      if (grid && cache.items.merge) {
        while (iterator--) {
          cache.css.width = this._widths[this.relative(iterator)];
          items.eq(iterator).css(cache.css);
        }
      } else if (grid) {
        cache.css.width = cache.items.width;
        items.css(cache.css);
      }
    }
  }, {
    filter: ['items'],
    run: function () {
      this._coordinates.length < 1 && this.$stage.removeAttr('style');
    }
  }, {
    filter: ['width', 'items', 'settings'],
    run: function (cache) {
      cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
      cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
      this.reset(cache.current);
    }
  }, {
    filter: ['position'],
    run: function () {
      this.animate(this.coordinates(this._current));
    }
  }, {
    filter: ['width', 'position', 'items', 'settings'],
    run: function () {
      var rtl = this.settings.rtl ? 1 : -1,
        padding = this.settings.stagePadding * 2,
        begin = this.coordinates(this.current()) + padding,
        end = begin + this.width() * rtl,
        inner,
        outer,
        matches = [],
        i,
        n;
      for (i = 0, n = this._coordinates.length; i < n; i++) {
        inner = this._coordinates[i - 1] || 0;
        outer = Math.abs(this._coordinates[i]) + padding * rtl;
        if (this.op(inner, '<=', begin) && this.op(inner, '>', end) || this.op(outer, '<', begin) && this.op(outer, '>', end)) {
          matches.push(i);
        }
      }
      this.$stage.children('.active').removeClass('active');
      this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');
      if (this.settings.center) {
        this.$stage.children('.center').removeClass('center');
        this.$stage.children().eq(this.current()).addClass('center');
      }
    }
  }];

  /**
   * Initializes the carousel.
   * @protected
   */
  Owl.prototype.initialize = function () {
    this.enter('initializing');
    this.trigger('initialize');
    this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);
    if (this.settings.autoWidth && !this.is('pre-loading')) {
      var imgs, nestedSelector, width;
      imgs = this.$element.find('img');
      nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
      width = this.$element.children(nestedSelector).width();
      if (imgs.length && width <= 0) {
        this.preloadAutoWidthImages(imgs);
      }
    }
    this.$element.addClass(this.options.loadingClass);

    // create stage
    this.$stage = $('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>');

    // append stage
    this.$element.append(this.$stage.parent());

    // append content
    this.replace(this.$element.children().not(this.$stage.parent()));

    // check visibility
    if (this.$element.is(':visible')) {
      // update view
      this.refresh();
    } else {
      // invalidate width
      this.invalidate('width');
    }
    this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);

    // register event handlers
    this.registerEventHandlers();
    this.leave('initializing');
    this.trigger('initialized');
  };

  /**
   * Setups the current settings.
   * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
   * @todo Support for media queries by using `matchMedia` would be nice.
   * @public
   */
  Owl.prototype.setup = function () {
    var viewport = this.viewport(),
      overwrites = this.options.responsive,
      match = -1,
      settings = null;
    if (!overwrites) {
      settings = $.extend({}, this.options);
    } else {
      $.each(overwrites, function (breakpoint) {
        if (breakpoint <= viewport && breakpoint > match) {
          match = Number(breakpoint);
        }
      });
      settings = $.extend({}, this.options, overwrites[match]);
      delete settings.responsive;

      // responsive class
      if (settings.responsiveClass) {
        this.$element.attr('class', this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match));
      }
    }
    if (this.settings === null || this._breakpoint !== match) {
      this.trigger('change', {
        property: {
          name: 'settings',
          value: settings
        }
      });
      this._breakpoint = match;
      this.settings = settings;
      this.invalidate('settings');
      this.trigger('changed', {
        property: {
          name: 'settings',
          value: this.settings
        }
      });
    }
  };

  /**
   * Updates option logic if necessery.
   * @protected
   */
  Owl.prototype.optionsLogic = function () {
    if (this.settings.autoWidth) {
      this.settings.stagePadding = false;
      this.settings.merge = false;
    }
  };

  /**
   * Prepares an item before add.
   * @todo Rename event parameter `content` to `item`.
   * @protected
   * @returns {jQuery|HTMLElement} - The item container.
   */
  Owl.prototype.prepare = function (item) {
    var event = this.trigger('prepare', {
      content: item
    });
    if (!event.data) {
      event.data = $('<' + this.settings.itemElement + '/>').addClass(this.options.itemClass).append(item);
    }
    this.trigger('prepared', {
      content: event.data
    });
    return event.data;
  };

  /**
   * Updates the view.
   * @public
   */
  Owl.prototype.update = function () {
    var i = 0,
      n = this._pipe.length,
      filter = $.proxy(function (p) {
        return this[p];
      }, this._invalidated),
      cache = {};
    while (i < n) {
      if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
        this._pipe[i].run(cache);
      }
      i++;
    }
    this._invalidated = {};
    !this.is('valid') && this.enter('valid');
  };

  /**
   * Gets the width of the view.
   * @public
   * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
   * @returns {Number} - The width of the view in pixel.
   */
  Owl.prototype.width = function (dimension) {
    dimension = dimension || Owl.Width.Default;
    switch (dimension) {
      case Owl.Width.Inner:
      case Owl.Width.Outer:
        return this._width;
      default:
        return this._width - this.settings.stagePadding * 2 + this.settings.margin;
    }
  };

  /**
   * Refreshes the carousel primarily for adaptive purposes.
   * @public
   */
  Owl.prototype.refresh = function () {
    this.enter('refreshing');
    this.trigger('refresh');
    this.setup();
    this.optionsLogic();
    this.$element.addClass(this.options.refreshClass);
    this.update();
    this.$element.removeClass(this.options.refreshClass);
    this.leave('refreshing');
    this.trigger('refreshed');
  };

  /**
   * Checks window `resize` event.
   * @protected
   */
  Owl.prototype.onThrottledResize = function () {
    window.clearTimeout(this.resizeTimer);
    this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
  };

  /**
   * Checks window `resize` event.
   * @protected
   */
  Owl.prototype.onResize = function () {
    if (!this._items.length) {
      return false;
    }
    if (this._width === this.$element.width()) {
      return false;
    }
    if (!this.$element.is(':visible')) {
      return false;
    }
    this.enter('resizing');
    if (this.trigger('resize').isDefaultPrevented()) {
      this.leave('resizing');
      return false;
    }
    this.invalidate('width');
    this.refresh();
    this.leave('resizing');
    this.trigger('resized');
  };

  /**
   * Registers event handlers.
   * @todo Check `msPointerEnabled`
   * @todo #261
   * @protected
   */
  Owl.prototype.registerEventHandlers = function () {
    if ($.support.transition) {
      this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
    }
    if (this.settings.responsive !== false) {
      this.on(window, 'resize', this._handlers.onThrottledResize);
    }
    if (this.settings.mouseDrag) {
      this.$element.addClass(this.options.dragClass);
      this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
      this.$stage.on('dragstart.owl.core selectstart.owl.core', function () {
        return false;
      });
    }
    if (this.settings.touchDrag) {
      this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
      this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
    }
  };

  /**
   * Handles `touchstart` and `mousedown` events.
   * @todo Horizontal swipe threshold as option
   * @todo #261
   * @protected
   * @param {Event} event - The event arguments.
   */
  Owl.prototype.onDragStart = function (event) {
    var stage = null;
    if (event.which === 3) {
      return;
    }
    if ($.support.transform) {
      stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
      stage = {
        x: stage[stage.length === 16 ? 12 : 4],
        y: stage[stage.length === 16 ? 13 : 5]
      };
    } else {
      stage = this.$stage.position();
      stage = {
        x: this.settings.rtl ? stage.left + this.$stage.width() - this.width() + this.settings.margin : stage.left,
        y: stage.top
      };
    }
    if (this.is('animating')) {
      $.support.transform ? this.animate(stage.x) : this.$stage.stop();
      this.invalidate('position');
    }
    this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');
    this.speed(0);
    this._drag.time = new Date().getTime();
    this._drag.target = $(event.target);
    this._drag.stage.start = stage;
    this._drag.stage.current = stage;
    this._drag.pointer = this.pointer(event);
    $(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));
    $(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function (event) {
      var delta = this.difference(this._drag.pointer, this.pointer(event));
      $(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));
      if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
        return;
      }
      event.preventDefault();
      this.enter('dragging');
      this.trigger('drag');
    }, this));
  };

  /**
   * Handles the `touchmove` and `mousemove` events.
   * @todo #261
   * @protected
   * @param {Event} event - The event arguments.
   */
  Owl.prototype.onDragMove = function (event) {
    var minimum = null,
      maximum = null,
      pull = null,
      delta = this.difference(this._drag.pointer, this.pointer(event)),
      stage = this.difference(this._drag.stage.start, delta);
    if (!this.is('dragging')) {
      return;
    }
    event.preventDefault();
    if (this.settings.loop) {
      minimum = this.coordinates(this.minimum());
      maximum = this.coordinates(this.maximum() + 1) - minimum;
      stage.x = ((stage.x - minimum) % maximum + maximum) % maximum + minimum;
    } else {
      minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
      maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
      pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
      stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
    }
    this._drag.stage.current = stage;
    this.animate(stage.x);
  };

  /**
   * Handles the `touchend` and `mouseup` events.
   * @todo #261
   * @todo Threshold for click event
   * @protected
   * @param {Event} event - The event arguments.
   */
  Owl.prototype.onDragEnd = function (event) {
    var delta = this.difference(this._drag.pointer, this.pointer(event)),
      stage = this._drag.stage.current,
      direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';
    $(document).off('.owl.core');
    this.$element.removeClass(this.options.grabClass);
    if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
      this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
      this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
      this.invalidate('position');
      this.update();
      this._drag.direction = direction;
      if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
        this._drag.target.one('click.owl.core', function () {
          return false;
        });
      }
    }
    if (!this.is('dragging')) {
      return;
    }
    this.leave('dragging');
    this.trigger('dragged');
  };

  /**
   * Gets absolute position of the closest item for a coordinate.
   * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
   * @protected
   * @param {Number} coordinate - The coordinate in pixel.
   * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
   * @return {Number} - The absolute position of the closest item.
   */
  Owl.prototype.closest = function (coordinate, direction) {
    var position = -1,
      pull = 30,
      width = this.width(),
      coordinates = this.coordinates();
    if (!this.settings.freeDrag) {
      // check closest item
      $.each(coordinates, $.proxy(function (index, value) {
        if (coordinate > value - pull && coordinate < value + pull) {
          position = index;
        } else if (this.op(coordinate, '<', value) && this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
          position = direction === 'left' ? index + 1 : index;
        }
        return position === -1;
      }, this));
    }
    if (!this.settings.loop) {
      // non loop boundries
      if (this.op(coordinate, '>', coordinates[this.minimum()])) {
        position = coordinate = this.minimum();
      } else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
        position = coordinate = this.maximum();
      }
    }
    return position;
  };

  /**
   * Animates the stage.
   * @todo #270
   * @public
   * @param {Number} coordinate - The coordinate in pixels.
   */
  Owl.prototype.animate = function (coordinate) {
    var animate = this.speed() > 0;
    this.is('animating') && this.onTransitionEnd();
    if (animate) {
      this.enter('animating');
      this.trigger('translate');
    }
    if ($.support.transform3d && $.support.transition) {
      this.$stage.css({
        transform: 'translate3d(' + coordinate + 'px,0px,0px)',
        transition: this.speed() / 1000 + 's'
      });
    } else if (animate) {
      this.$stage.animate({
        left: coordinate + 'px'
      }, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
    } else {
      this.$stage.css({
        left: coordinate + 'px'
      });
    }
  };

  /**
   * Checks whether the carousel is in a specific state or not.
   * @param {String} state - The state to check.
   * @returns {Boolean} - The flag which indicates if the carousel is busy.
   */
  Owl.prototype.is = function (state) {
    return this._states.current[state] && this._states.current[state] > 0;
  };

  /**
   * Sets the absolute position of the current item.
   * @public
   * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
   * @returns {Number} - The absolute position of the current item.
   */
  Owl.prototype.current = function (position) {
    if (position === undefined) {
      return this._current;
    }
    if (this._items.length === 0) {
      return undefined;
    }
    position = this.normalize(position);
    if (this._current !== position) {
      var event = this.trigger('change', {
        property: {
          name: 'position',
          value: position
        }
      });
      if (event.data !== undefined) {
        position = this.normalize(event.data);
      }
      this._current = position;
      this.invalidate('position');
      this.trigger('changed', {
        property: {
          name: 'position',
          value: this._current
        }
      });
    }
    return this._current;
  };

  /**
   * Invalidates the given part of the update routine.
   * @param {String} [part] - The part to invalidate.
   * @returns {Array.<String>} - The invalidated parts.
   */
  Owl.prototype.invalidate = function (part) {
    if ($.type(part) === 'string') {
      this._invalidated[part] = true;
      this.is('valid') && this.leave('valid');
    }
    return $.map(this._invalidated, function (v, i) {
      return i;
    });
  };

  /**
   * Resets the absolute position of the current item.
   * @public
   * @param {Number} position - The absolute position of the new item.
   */
  Owl.prototype.reset = function (position) {
    position = this.normalize(position);
    if (position === undefined) {
      return;
    }
    this._speed = 0;
    this._current = position;
    this.suppress(['translate', 'translated']);
    this.animate(this.coordinates(position));
    this.release(['translate', 'translated']);
  };

  /**
   * Normalizes an absolute or a relative position of an item.
   * @public
   * @param {Number} position - The absolute or relative position to normalize.
   * @param {Boolean} [relative=false] - Whether the given position is relative or not.
   * @returns {Number} - The normalized position.
   */
  Owl.prototype.normalize = function (position, relative) {
    var n = this._items.length,
      m = relative ? 0 : this._clones.length;
    if (!$.isNumeric(position) || n < 1) {
      position = undefined;
    } else if (position < 0 || position >= n + m) {
      position = ((position - m / 2) % n + n) % n + m / 2;
    }
    return position;
  };

  /**
   * Converts an absolute position of an item into a relative one.
   * @public
   * @param {Number} position - The absolute position to convert.
   * @returns {Number} - The converted position.
   */
  Owl.prototype.relative = function (position) {
    position -= this._clones.length / 2;
    return this.normalize(position, true);
  };

  /**
   * Gets the maximum position for the current item.
   * @public
   * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
   * @returns {Number}
   */
  Owl.prototype.maximum = function (relative) {
    var settings = this.settings,
      maximum = this._coordinates.length,
      boundary = Math.abs(this._coordinates[maximum - 1]) - this._width,
      i = -1,
      j;
    if (settings.loop) {
      maximum = this._clones.length / 2 + this._items.length - 1;
    } else if (settings.autoWidth || settings.merge) {
      // binary search
      while (maximum - i > 1) {
        Math.abs(this._coordinates[j = maximum + i >> 1]) < boundary ? i = j : maximum = j;
      }
    } else if (settings.center) {
      maximum = this._items.length - 1;
    } else {
      maximum = this._items.length - settings.items;
    }
    if (relative) {
      maximum -= this._clones.length / 2;
    }
    return Math.max(maximum, 0);
  };

  /**
   * Gets the minimum position for the current item.
   * @public
   * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
   * @returns {Number}
   */
  Owl.prototype.minimum = function (relative) {
    return relative ? 0 : this._clones.length / 2;
  };

  /**
   * Gets an item at the specified relative position.
   * @public
   * @param {Number} [position] - The relative position of the item.
   * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
   */
  Owl.prototype.items = function (position) {
    if (position === undefined) {
      return this._items.slice();
    }
    position = this.normalize(position, true);
    return this._items[position];
  };

  /**
   * Gets an item at the specified relative position.
   * @public
   * @param {Number} [position] - The relative position of the item.
   * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
   */
  Owl.prototype.mergers = function (position) {
    if (position === undefined) {
      return this._mergers.slice();
    }
    position = this.normalize(position, true);
    return this._mergers[position];
  };

  /**
   * Gets the absolute positions of clones for an item.
   * @public
   * @param {Number} [position] - The relative position of the item.
   * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
   */
  Owl.prototype.clones = function (position) {
    var odd = this._clones.length / 2,
      even = odd + this._items.length,
      map = function (index) {
        return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2;
      };
    if (position === undefined) {
      return $.map(this._clones, function (v, i) {
        return map(i);
      });
    }
    return $.map(this._clones, function (v, i) {
      return v === position ? map(i) : null;
    });
  };

  /**
   * Sets the current animation speed.
   * @public
   * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
   * @returns {Number} - The current animation speed in milliseconds.
   */
  Owl.prototype.speed = function (speed) {
    if (speed !== undefined) {
      this._speed = speed;
    }
    return this._speed;
  };

  /**
   * Gets the coordinate of an item.
   * @todo The name of this method is missleanding.
   * @public
   * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
   * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
   */
  Owl.prototype.coordinates = function (position) {
    var coordinate = null;
    if (position === undefined) {
      return $.map(this._coordinates, $.proxy(function (coordinate, index) {
        return this.coordinates(index);
      }, this));
    }
    if (this.settings.center) {
      coordinate = this._coordinates[position];
      coordinate += (this.width() - coordinate + (this._coordinates[position - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1);
    } else {
      coordinate = this._coordinates[position - 1] || 0;
    }
    return coordinate;
  };

  /**
   * Calculates the speed for a translation.
   * @protected
   * @param {Number} from - The absolute position of the start item.
   * @param {Number} to - The absolute position of the target item.
   * @param {Number} [factor=undefined] - The time factor in milliseconds.
   * @returns {Number} - The time in milliseconds for the translation.
   */
  Owl.prototype.duration = function (from, to, factor) {
    return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs(factor || this.settings.smartSpeed);
  };

  /**
   * Slides to the specified item.
   * @public
   * @param {Number} position - The position of the item.
   * @param {Number} [speed] - The time in milliseconds for the transition.
   */
  Owl.prototype.to = function (position, speed) {
    var current = this.current(),
      revert = null,
      distance = position - this.relative(current),
      direction = (distance > 0) - (distance < 0),
      items = this._items.length,
      minimum = this.minimum(),
      maximum = this.maximum();
    if (this.settings.loop) {
      if (!this.settings.rewind && Math.abs(distance) > items / 2) {
        distance += direction * -1 * items;
      }
      position = current + distance;
      revert = ((position - minimum) % items + items) % items + minimum;
      if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
        current = revert - distance;
        position = revert;
        this.reset(current);
      }
    } else if (this.settings.rewind) {
      maximum += 1;
      position = (position % maximum + maximum) % maximum;
    } else {
      position = Math.max(minimum, Math.min(maximum, position));
    }
    this.speed(this.duration(current, position, speed));
    this.current(position);
    if (this.$element.is(':visible')) {
      this.update();
    }
  };

  /**
   * Slides to the next item.
   * @public
   * @param {Number} [speed] - The time in milliseconds for the transition.
   */
  Owl.prototype.next = function (speed) {
    speed = speed || false;
    this.to(this.relative(this.current()) + 1, speed);
  };

  /**
   * Slides to the previous item.
   * @public
   * @param {Number} [speed] - The time in milliseconds for the transition.
   */
  Owl.prototype.prev = function (speed) {
    speed = speed || false;
    this.to(this.relative(this.current()) - 1, speed);
  };

  /**
   * Handles the end of an animation.
   * @protected
   * @param {Event} event - The event arguments.
   */
  Owl.prototype.onTransitionEnd = function (event) {
    // if css2 animation then event object is undefined
    if (event !== undefined) {
      event.stopPropagation();

      // Catch only owl-stage transitionEnd event
      if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
        return false;
      }
    }
    this.leave('animating');
    this.trigger('translated');
  };

  /**
   * Gets viewport width.
   * @protected
   * @return {Number} - The width in pixel.
   */
  Owl.prototype.viewport = function () {
    var width;
    if (this.options.responsiveBaseElement !== window) {
      width = $(this.options.responsiveBaseElement).width();
    } else if (window.innerWidth) {
      width = window.innerWidth;
    } else if (document.documentElement && document.documentElement.clientWidth) {
      width = document.documentElement.clientWidth;
    } else {
      throw 'Can not detect viewport width.';
    }
    return width;
  };

  /**
   * Replaces the current content.
   * @public
   * @param {HTMLElement|jQuery|String} content - The new content.
   */
  Owl.prototype.replace = function (content) {
    this.$stage.empty();
    this._items = [];
    if (content) {
      content = content instanceof jQuery ? content : $(content);
    }
    if (this.settings.nestedItemSelector) {
      content = content.find('.' + this.settings.nestedItemSelector);
    }
    content.filter(function () {
      return this.nodeType === 1;
    }).each($.proxy(function (index, item) {
      item = this.prepare(item);
      this.$stage.append(item);
      this._items.push(item);
      this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
    }, this));
    this.reset($.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
    this.invalidate('items');
  };

  /**
   * Adds an item.
   * @todo Use `item` instead of `content` for the event arguments.
   * @public
   * @param {HTMLElement|jQuery|String} content - The item content to add.
   * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
   */
  Owl.prototype.add = function (content, position) {
    var current = this.relative(this._current);
    position = position === undefined ? this._items.length : this.normalize(position, true);
    content = content instanceof jQuery ? content : $(content);
    this.trigger('add', {
      content: content,
      position: position
    });
    content = this.prepare(content);
    if (this._items.length === 0 || position === this._items.length) {
      this._items.length === 0 && this.$stage.append(content);
      this._items.length !== 0 && this._items[position - 1].after(content);
      this._items.push(content);
      this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
    } else {
      this._items[position].before(content);
      this._items.splice(position, 0, content);
      this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
    }
    this._items[current] && this.reset(this._items[current].index());
    this.invalidate('items');
    this.trigger('added', {
      content: content,
      position: position
    });
  };

  /**
   * Removes an item by its position.
   * @todo Use `item` instead of `content` for the event arguments.
   * @public
   * @param {Number} position - The relative position of the item to remove.
   */
  Owl.prototype.remove = function (position) {
    position = this.normalize(position, true);
    if (position === undefined) {
      return;
    }
    this.trigger('remove', {
      content: this._items[position],
      position: position
    });
    this._items[position].remove();
    this._items.splice(position, 1);
    this._mergers.splice(position, 1);
    this.invalidate('items');
    this.trigger('removed', {
      content: null,
      position: position
    });
  };

  /**
   * Preloads images with auto width.
   * @todo Replace by a more generic approach
   * @protected
   */
  Owl.prototype.preloadAutoWidthImages = function (images) {
    images.each($.proxy(function (i, element) {
      this.enter('pre-loading');
      element = $(element);
      $(new Image()).one('load', $.proxy(function (e) {
        element.attr('src', e.target.src);
        element.css('opacity', 1);
        this.leave('pre-loading');
        !this.is('pre-loading') && !this.is('initializing') && this.refresh();
      }, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
    }, this));
  };

  /**
   * Destroys the carousel.
   * @public
   */
  Owl.prototype.destroy = function () {
    this.$element.off('.owl.core');
    this.$stage.off('.owl.core');
    $(document).off('.owl.core');
    if (this.settings.responsive !== false) {
      window.clearTimeout(this.resizeTimer);
      this.off(window, 'resize', this._handlers.onThrottledResize);
    }
    for (var i in this._plugins) {
      this._plugins[i].destroy();
    }
    this.$stage.children('.cloned').remove();
    this.$stage.unwrap();
    this.$stage.children().contents().unwrap();
    this.$stage.children().unwrap();
    this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), '')).removeData('owl.carousel');
  };

  /**
   * Operators to calculate right-to-left and left-to-right.
   * @protected
   * @param {Number} [a] - The left side operand.
   * @param {String} [o] - The operator.
   * @param {Number} [b] - The right side operand.
   */
  Owl.prototype.op = function (a, o, b) {
    var rtl = this.settings.rtl;
    switch (o) {
      case '<':
        return rtl ? a > b : a < b;
      case '>':
        return rtl ? a < b : a > b;
      case '>=':
        return rtl ? a <= b : a >= b;
      case '<=':
        return rtl ? a >= b : a <= b;
      default:
        break;
    }
  };

  /**
   * Attaches to an internal event.
   * @protected
   * @param {HTMLElement} element - The event source.
   * @param {String} event - The event name.
   * @param {Function} listener - The event handler to attach.
   * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
   */
  Owl.prototype.on = function (element, event, listener, capture) {
    if (element.addEventListener) {
      element.addEventListener(event, listener, capture);
    } else if (element.attachEvent) {
      element.attachEvent('on' + event, listener);
    }
  };

  /**
   * Detaches from an internal event.
   * @protected
   * @param {HTMLElement} element - The event source.
   * @param {String} event - The event name.
   * @param {Function} listener - The attached event handler to detach.
   * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
   */
  Owl.prototype.off = function (element, event, listener, capture) {
    if (element.removeEventListener) {
      element.removeEventListener(event, listener, capture);
    } else if (element.detachEvent) {
      element.detachEvent('on' + event, listener);
    }
  };

  /**
   * Triggers a public event.
   * @todo Remove `status`, `relatedTarget` should be used instead.
   * @protected
   * @param {String} name - The event name.
   * @param {*} [data=null] - The event data.
   * @param {String} [namespace=carousel] - The event namespace.
   * @param {String} [state] - The state which is associated with the event.
   * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
   * @returns {Event} - The event arguments.
   */
  Owl.prototype.trigger = function (name, data, namespace, state, enter) {
    var status = {
        item: {
          count: this._items.length,
          index: this.current()
        }
      },
      handler = $.camelCase($.grep(['on', name, namespace], function (v) {
        return v;
      }).join('-').toLowerCase()),
      event = $.Event([name, 'owl', namespace || 'carousel'].join('.').toLowerCase(), $.extend({
        relatedTarget: this
      }, status, data));
    if (!this._supress[name]) {
      $.each(this._plugins, function (name, plugin) {
        if (plugin.onTrigger) {
          plugin.onTrigger(event);
        }
      });
      this.register({
        type: Owl.Type.Event,
        name: name
      });
      this.$element.trigger(event);
      if (this.settings && typeof this.settings[handler] === 'function') {
        this.settings[handler].call(this, event);
      }
    }
    return event;
  };

  /**
   * Enters a state.
   * @param name - The state name.
   */
  Owl.prototype.enter = function (name) {
    $.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {
      if (this._states.current[name] === undefined) {
        this._states.current[name] = 0;
      }
      this._states.current[name]++;
    }, this));
  };

  /**
   * Leaves a state.
   * @param name - The state name.
   */
  Owl.prototype.leave = function (name) {
    $.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {
      this._states.current[name]--;
    }, this));
  };

  /**
   * Registers an event or state.
   * @public
   * @param {Object} object - The event or state to register.
   */
  Owl.prototype.register = function (object) {
    if (object.type === Owl.Type.Event) {
      if (!$.event.special[object.name]) {
        $.event.special[object.name] = {};
      }
      if (!$.event.special[object.name].owl) {
        var _default = $.event.special[object.name]._default;
        $.event.special[object.name]._default = function (e) {
          if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
            return _default.apply(this, arguments);
          }
          return e.namespace && e.namespace.indexOf('owl') > -1;
        };
        $.event.special[object.name].owl = true;
      }
    } else if (object.type === Owl.Type.State) {
      if (!this._states.tags[object.name]) {
        this._states.tags[object.name] = object.tags;
      } else {
        this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
      }
      this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function (tag, i) {
        return $.inArray(tag, this._states.tags[object.name]) === i;
      }, this));
    }
  };

  /**
   * Suppresses events.
   * @protected
   * @param {Array.<String>} events - The events to suppress.
   */
  Owl.prototype.suppress = function (events) {
    $.each(events, $.proxy(function (index, event) {
      this._supress[event] = true;
    }, this));
  };

  /**
   * Releases suppressed events.
   * @protected
   * @param {Array.<String>} events - The events to release.
   */
  Owl.prototype.release = function (events) {
    $.each(events, $.proxy(function (index, event) {
      delete this._supress[event];
    }, this));
  };

  /**
   * Gets unified pointer coordinates from event.
   * @todo #261
   * @protected
   * @param {Event} - The `mousedown` or `touchstart` event.
   * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
   */
  Owl.prototype.pointer = function (event) {
    var result = {
      x: null,
      y: null
    };
    event = event.originalEvent || event || window.event;
    event = event.touches && event.touches.length ? event.touches[0] : event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : event;
    if (event.pageX) {
      result.x = event.pageX;
      result.y = event.pageY;
    } else {
      result.x = event.clientX;
      result.y = event.clientY;
    }
    return result;
  };

  /**
   * Gets the difference of two vectors.
   * @todo #261
   * @protected
   * @param {Object} - The first vector.
   * @param {Object} - The second vector.
   * @returns {Object} - The difference.
   */
  Owl.prototype.difference = function (first, second) {
    return {
      x: first.x - second.x,
      y: first.y - second.y
    };
  };

  /**
   * The jQuery Plugin for the Owl Carousel
   * @todo Navigation plugin `next` and `prev`
   * @public
   */
  $.fn.owlCarousel = function (option) {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.each(function () {
      var $this = $(this),
        data = $this.data('owl.carousel');
      if (!data) {
        data = new Owl(this, typeof option == 'object' && option);
        $this.data('owl.carousel', data);
        $.each(['next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'], function (i, event) {
          data.register({
            type: Owl.Type.Event,
            name: event
          });
          data.$element.on(event + '.owl.carousel.core', $.proxy(function (e) {
            if (e.namespace && e.relatedTarget !== this) {
              this.suppress([event]);
              data[event].apply(this, [].slice.call(arguments, 1));
              this.release([event]);
            }
          }, data));
        });
      }
      if (typeof option == 'string' && option.charAt(0) !== '_') {
        data[option].apply(data, args);
      }
    });
  };

  /**
   * The constructor for the jQuery Plugin
   * @public
   */
  $.fn.owlCarousel.Constructor = Owl;
})(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.0.0-beta.3
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
;
(function ($, window, document, undefined) {
  /**
   * Creates the auto refresh plugin.
   * @class The Auto Refresh Plugin
   * @param {Owl} carousel - The Owl Carousel
   */
  var AutoRefresh = function (carousel) {
    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;

    /**
     * Refresh interval.
     * @protected
     * @type {number}
     */
    this._interval = null;

    /**
     * Whether the element is currently visible or not.
     * @protected
     * @type {Boolean}
     */
    this._visible = null;

    /**
     * All event handlers.
     * @protected
     * @type {Object}
     */
    this._handlers = {
      'initialized.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._core.settings.autoRefresh) {
          this.watch();
        }
      }, this)
    };

    // set default options
    this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

    // register event handlers
    this._core.$element.on(this._handlers);
  };

  /**
   * Default options.
   * @public
   */
  AutoRefresh.Defaults = {
    autoRefresh: true,
    autoRefreshInterval: 500
  };

  /**
   * Watches the element.
   */
  AutoRefresh.prototype.watch = function () {
    if (this._interval) {
      return;
    }
    this._visible = this._core.$element.is(':visible');
    this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
  };

  /**
   * Refreshes the element.
   */
  AutoRefresh.prototype.refresh = function () {
    if (this._core.$element.is(':visible') === this._visible) {
      return;
    }
    this._visible = !this._visible;
    this._core.$element.toggleClass('owl-hidden', !this._visible);
    this._visible && this._core.invalidate('width') && this._core.refresh();
  };

  /**
   * Destroys the plugin.
   */
  AutoRefresh.prototype.destroy = function () {
    var handler, property;
    window.clearInterval(this._interval);
    for (handler in this._handlers) {
      this._core.$element.off(handler, this._handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };
  $.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;
})(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.0.0-beta.3
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;
(function ($, window, document, undefined) {
  /**
   * Creates the lazy plugin.
   * @class The Lazy Plugin
   * @param {Owl} carousel - The Owl Carousel
   */
  var Lazy = function (carousel) {
    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;

    /**
     * Already loaded items.
     * @protected
     * @type {Array.<jQuery>}
     */
    this._loaded = [];

    /**
     * Event handlers.
     * @protected
     * @type {Object}
     */
    this._handlers = {
      'initialized.owl.carousel change.owl.carousel': $.proxy(function (e) {
        if (!e.namespace) {
          return;
        }
        if (!this._core.settings || !this._core.settings.lazyLoad) {
          return;
        }
        if (e.property && e.property.name == 'position' || e.type == 'initialized') {
          var settings = this._core.settings,
            n = settings.center && Math.ceil(settings.items / 2) || settings.items,
            i = settings.center && n * -1 || 0,
            position = (e.property && e.property.value || this._core.current()) + i,
            clones = this._core.clones().length,
            load = $.proxy(function (i, v) {
              this.load(v);
            }, this);
          while (i++ < n) {
            this.load(clones / 2 + this._core.relative(position));
            clones && $.each(this._core.clones(this._core.relative(position)), load);
            position++;
          }
        }
      }, this)
    };

    // set the default options
    this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

    // register event handler
    this._core.$element.on(this._handlers);
  };

  /**
   * Default options.
   * @public
   */
  Lazy.Defaults = {
    lazyLoad: false
  };

  /**
   * Loads all resources of an item at the specified position.
   * @param {Number} position - The absolute position of the item.
   * @protected
   */
  Lazy.prototype.load = function (position) {
    var $item = this._core.$stage.children().eq(position),
      $elements = $item && $item.find('.owl-lazy');
    if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
      return;
    }
    $elements.each($.proxy(function (index, element) {
      var $element = $(element),
        image,
        url = window.devicePixelRatio > 1 && $element.attr('data-src-retina') || $element.attr('data-src');
      this._core.trigger('load', {
        element: $element,
        url: url
      }, 'lazy');
      if ($element.is('img')) {
        $element.one('load.owl.lazy', $.proxy(function () {
          $element.css('opacity', 1);
          this._core.trigger('loaded', {
            element: $element,
            url: url
          }, 'lazy');
        }, this)).attr('src', url);
      } else {
        image = new Image();
        image.onload = $.proxy(function () {
          $element.css({
            'background-image': 'url(' + url + ')',
            'opacity': '1'
          });
          this._core.trigger('loaded', {
            element: $element,
            url: url
          }, 'lazy');
        }, this);
        image.src = url;
      }
    }, this));
    this._loaded.push($item.get(0));
  };

  /**
   * Destroys the plugin.
   * @public
   */
  Lazy.prototype.destroy = function () {
    var handler, property;
    for (handler in this.handlers) {
      this._core.$element.off(handler, this.handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };
  $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
})(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.0.0-beta.3
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;
(function ($, window, document, undefined) {
  /**
   * Creates the auto height plugin.
   * @class The Auto Height Plugin
   * @param {Owl} carousel - The Owl Carousel
   */
  var AutoHeight = function (carousel) {
    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;

    /**
     * All event handlers.
     * @protected
     * @type {Object}
     */
    this._handlers = {
      'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._core.settings.autoHeight) {
          this.update();
        }
      }, this),
      'changed.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position') {
          this.update();
        }
      }, this),
      'loaded.owl.lazy': $.proxy(function (e) {
        if (e.namespace && this._core.settings.autoHeight && e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
          this.update();
        }
      }, this)
    };

    // set default options
    this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

    // register event handlers
    this._core.$element.on(this._handlers);
  };

  /**
   * Default options.
   * @public
   */
  AutoHeight.Defaults = {
    autoHeight: false,
    autoHeightClass: 'owl-height'
  };

  /**
   * Updates the view.
   */
  AutoHeight.prototype.update = function () {
    var start = this._core._current,
      end = start + this._core.settings.items,
      visible = this._core.$stage.children().toArray().slice(start, end);
    heights = [], maxheight = 0;
    $.each(visible, function (index, item) {
      heights.push($(item).height());
    });
    maxheight = Math.max.apply(null, heights);
    this._core.$stage.parent().height(maxheight).addClass(this._core.settings.autoHeightClass);
  };
  AutoHeight.prototype.destroy = function () {
    var handler, property;
    for (handler in this._handlers) {
      this._core.$element.off(handler, this._handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };
  $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
})(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);

/**
 * Video Plugin
 * @version 2.0.0-beta.3
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;
(function ($, window, document, undefined) {
  /**
   * Creates the video plugin.
   * @class The Video Plugin
   * @param {Owl} carousel - The Owl Carousel
   */
  var Video = function (carousel) {
    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;

    /**
     * Cache all video URLs.
     * @protected
     * @type {Object}
     */
    this._videos = {};

    /**
     * Current playing item.
     * @protected
     * @type {jQuery}
     */
    this._playing = null;

    /**
     * All event handlers.
     * @todo The cloned content removale is too late
     * @protected
     * @type {Object}
     */
    this._handlers = {
      'initialized.owl.carousel': $.proxy(function (e) {
        if (e.namespace) {
          this._core.register({
            type: 'state',
            name: 'playing',
            tags: ['interacting']
          });
        }
      }, this),
      'resize.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
          e.preventDefault();
        }
      }, this),
      'refreshed.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._core.is('resizing')) {
          this._core.$stage.find('.cloned .owl-video-frame').remove();
        }
      }, this),
      'changed.owl.carousel': $.proxy(function (e) {
        if (e.namespace && e.property.name === 'position' && this._playing) {
          this.stop();
        }
      }, this),
      'prepared.owl.carousel': $.proxy(function (e) {
        if (!e.namespace) {
          return;
        }
        var $element = $(e.content).find('.owl-video');
        if ($element.length) {
          $element.css('display', 'none');
          this.fetch($element, $(e.content));
        }
      }, this)
    };

    // set default options
    this._core.options = $.extend({}, Video.Defaults, this._core.options);

    // register event handlers
    this._core.$element.on(this._handlers);
    this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function (e) {
      this.play(e);
    }, this));
  };

  /**
   * Default options.
   * @public
   */
  Video.Defaults = {
    video: false,
    videoHeight: false,
    videoWidth: false
  };

  /**
   * Gets the video ID and the type (YouTube/Vimeo only).
   * @protected
   * @param {jQuery} target - The target containing the video data.
   * @param {jQuery} item - The item containing the video.
   */
  Video.prototype.fetch = function (target, item) {
    var type = target.attr('data-vimeo-id') ? 'vimeo' : 'youtube',
      id = target.attr('data-vimeo-id') || target.attr('data-youtube-id'),
      width = target.attr('data-width') || this._core.settings.videoWidth,
      height = target.attr('data-height') || this._core.settings.videoHeight,
      url = target.attr('href');
    if (url) {
      id = url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
      if (id[3].indexOf('youtu') > -1) {
        type = 'youtube';
      } else if (id[3].indexOf('vimeo') > -1) {
        type = 'vimeo';
      } else {
        throw new Error('Video URL not supported.');
      }
      id = id[6];
    } else {
      throw new Error('Missing video URL.');
    }
    this._videos[url] = {
      type: type,
      id: id,
      width: width,
      height: height
    };
    item.attr('data-video', url);
    this.thumbnail(target, this._videos[url]);
  };

  /**
   * Creates video thumbnail.
   * @protected
   * @param {jQuery} target - The target containing the video data.
   * @param {Object} info - The video info object.
   * @see `fetch`
   */
  Video.prototype.thumbnail = function (target, video) {
    var tnLink,
      icon,
      path,
      dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
      customTn = target.find('img'),
      srcType = 'src',
      lazyClass = '',
      settings = this._core.settings,
      create = function (path) {
        icon = '<div class="owl-video-play-icon"></div>';
        if (settings.lazyLoad) {
          tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
        } else {
          tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
        }
        target.after(tnLink);
        target.after(icon);
      };

    // wrap video content into owl-video-wrapper div
    target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');
    if (this._core.settings.lazyLoad) {
      srcType = 'data-src';
      lazyClass = 'owl-lazy';
    }

    // custom thumbnail
    if (customTn.length) {
      create(customTn.attr(srcType));
      customTn.remove();
      return false;
    }
    if (video.type === 'youtube') {
      path = "http://img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
      create(path);
    } else if (video.type === 'vimeo') {
      $.ajax({
        type: 'GET',
        url: 'http://vimeo.com/api/v2/video/' + video.id + '.json',
        jsonp: 'callback',
        dataType: 'jsonp',
        success: function (data) {
          path = data[0].thumbnail_large;
          create(path);
        }
      });
    }
  };

  /**
   * Stops the current video.
   * @public
   */
  Video.prototype.stop = function () {
    this._core.trigger('stop', null, 'video');
    this._playing.find('.owl-video-frame').remove();
    this._playing.removeClass('owl-video-playing');
    this._playing = null;
    this._core.leave('playing');
    this._core.trigger('stopped', null, 'video');
  };

  /**
   * Starts the current video.
   * @public
   * @param {Event} event - The event arguments.
   */
  Video.prototype.play = function (event) {
    var target = $(event.target),
      item = target.closest('.' + this._core.settings.itemClass),
      video = this._videos[item.attr('data-video')],
      width = video.width || '100%',
      height = video.height || this._core.$stage.height(),
      html;
    if (this._playing) {
      return;
    }
    this._core.enter('playing');
    this._core.trigger('play', null, 'video');
    item = this._core.items(this._core.relative(item.index()));
    this._core.reset(item.index());
    if (video.type === 'youtube') {
      html = '<iframe width="' + width + '" height="' + height + '" src="http://www.youtube.com/embed/' + video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
    } else if (video.type === 'vimeo') {
      html = '<iframe src="http://player.vimeo.com/video/' + video.id + '?autoplay=1" width="' + width + '" height="' + height + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
    }
    $('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));
    this._playing = item.addClass('owl-video-playing');
  };

  /**
   * Checks whether an video is currently in full screen mode or not.
   * @todo Bad style because looks like a readonly method but changes members.
   * @protected
   * @returns {Boolean}
   */
  Video.prototype.isInFullScreen = function () {
    var element = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
    return element && $(element).parent().hasClass('owl-video-frame');
  };

  /**
   * Destroys the plugin.
   */
  Video.prototype.destroy = function () {
    var handler, property;
    this._core.$element.off('click.owl.video');
    for (handler in this._handlers) {
      this._core.$element.off(handler, this._handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };
  $.fn.owlCarousel.Constructor.Plugins.Video = Video;
})(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.0.0-beta.3
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;
(function ($, window, document, undefined) {
  /**
   * Creates the animate plugin.
   * @class The Navigation Plugin
   * @param {Owl} scope - The Owl Carousel
   */
  var Animate = function (scope) {
    this.core = scope;
    this.core.options = $.extend({}, Animate.Defaults, this.core.options);
    this.swapping = true;
    this.previous = undefined;
    this.next = undefined;
    this.handlers = {
      'change.owl.carousel': $.proxy(function (e) {
        if (e.namespace && e.property.name == 'position') {
          this.previous = this.core.current();
          this.next = e.property.value;
        }
      }, this),
      'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function (e) {
        if (e.namespace) {
          this.swapping = e.type == 'translated';
        }
      }, this),
      'translate.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
          this.swap();
        }
      }, this)
    };
    this.core.$element.on(this.handlers);
  };

  /**
   * Default options.
   * @public
   */
  Animate.Defaults = {
    animateOut: false,
    animateIn: false
  };

  /**
   * Toggles the animation classes whenever an translations starts.
   * @protected
   * @returns {Boolean|undefined}
   */
  Animate.prototype.swap = function () {
    if (this.core.settings.items !== 1) {
      return;
    }
    if (!$.support.animation || !$.support.transition) {
      return;
    }
    this.core.speed(0);
    var left,
      clear = $.proxy(this.clear, this),
      previous = this.core.$stage.children().eq(this.previous),
      next = this.core.$stage.children().eq(this.next),
      incoming = this.core.settings.animateIn,
      outgoing = this.core.settings.animateOut;
    if (this.core.current() === this.previous) {
      return;
    }
    if (outgoing) {
      left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
      previous.one($.support.animation.end, clear).css({
        'left': left + 'px'
      }).addClass('animated owl-animated-out').addClass(outgoing);
    }
    if (incoming) {
      next.one($.support.animation.end, clear).addClass('animated owl-animated-in').addClass(incoming);
    }
  };
  Animate.prototype.clear = function (e) {
    $(e.target).css({
      'left': ''
    }).removeClass('animated owl-animated-out owl-animated-in').removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
    this.core.onTransitionEnd();
  };

  /**
   * Destroys the plugin.
   * @public
   */
  Animate.prototype.destroy = function () {
    var handler, property;
    for (handler in this.handlers) {
      this.core.$element.off(handler, this.handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };
  $.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
})(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.0.0-beta.3
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
;
(function ($, window, document, undefined) {
  /**
   * Creates the autoplay plugin.
   * @class The Autoplay Plugin
   * @param {Owl} scope - The Owl Carousel
   */
  var Autoplay = function (carousel) {
    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;

    /**
     * The autoplay interval.
     * @type {Number}
     */
    this._interval = null;

    /**
     * Indicates whenever the autoplay is paused.
     * @type {Boolean}
     */
    this._paused = false;

    /**
     * All event handlers.
     * @protected
     * @type {Object}
     */
    this._handlers = {
      'changed.owl.carousel': $.proxy(function (e) {
        if (e.namespace && e.property.name === 'settings') {
          if (this._core.settings.autoplay) {
            this.play();
          } else {
            this.stop();
          }
        }
      }, this),
      'initialized.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._core.settings.autoplay) {
          this.play();
        }
      }, this),
      'play.owl.autoplay': $.proxy(function (e, t, s) {
        if (e.namespace) {
          this.play(t, s);
        }
      }, this),
      'stop.owl.autoplay': $.proxy(function (e) {
        if (e.namespace) {
          this.stop();
        }
      }, this),
      'mouseover.owl.autoplay': $.proxy(function () {
        if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
          this.pause();
        }
      }, this),
      'mouseleave.owl.autoplay': $.proxy(function () {
        if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
          this.play();
        }
      }, this)
    };

    // register event handlers
    this._core.$element.on(this._handlers);

    // set default options
    this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
  };

  /**
   * Default options.
   * @public
   */
  Autoplay.Defaults = {
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    autoplaySpeed: false
  };

  /**
   * Starts the autoplay.
   * @public
   * @param {Number} [timeout] - The interval before the next animation starts.
   * @param {Number} [speed] - The animation speed for the animations.
   */
  Autoplay.prototype.play = function (timeout, speed) {
    this._paused = false;
    if (this._core.is('rotating')) {
      return;
    }
    this._core.enter('rotating');
    this._interval = window.setInterval($.proxy(function () {
      if (this._paused || this._core.is('busy') || this._core.is('interacting') || document.hidden) {
        return;
      }
      this._core.next(speed || this._core.settings.autoplaySpeed);
    }, this), timeout || this._core.settings.autoplayTimeout);
  };

  /**
   * Stops the autoplay.
   * @public
   */
  Autoplay.prototype.stop = function () {
    if (!this._core.is('rotating')) {
      return;
    }
    window.clearInterval(this._interval);
    this._core.leave('rotating');
  };

  /**
   * Stops the autoplay.
   * @public
   */
  Autoplay.prototype.pause = function () {
    if (!this._core.is('rotating')) {
      return;
    }
    this._paused = true;
  };

  /**
   * Destroys the plugin.
   */
  Autoplay.prototype.destroy = function () {
    var handler, property;
    this.stop();
    for (handler in this._handlers) {
      this._core.$element.off(handler, this._handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };
  $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
})(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.0.0-beta.3
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
;
(function ($, window, document, undefined) {
  'use strict';

  /**
   * Creates the navigation plugin.
   * @class The Navigation Plugin
   * @param {Owl} carousel - The Owl Carousel.
   */
  var Navigation = function (carousel) {
    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;

    /**
     * Indicates whether the plugin is initialized or not.
     * @protected
     * @type {Boolean}
     */
    this._initialized = false;

    /**
     * The current paging indexes.
     * @protected
     * @type {Array}
     */
    this._pages = [];

    /**
     * All DOM elements of the user interface.
     * @protected
     * @type {Object}
     */
    this._controls = {};

    /**
     * Markup for an indicator.
     * @protected
     * @type {Array.<String>}
     */
    this._templates = [];

    /**
     * The carousel element.
     * @type {jQuery}
     */
    this.$element = this._core.$element;

    /**
     * Overridden methods of the carousel.
     * @protected
     * @type {Object}
     */
    this._overrides = {
      next: this._core.next,
      prev: this._core.prev,
      to: this._core.to
    };

    /**
     * All event handlers.
     * @protected
     * @type {Object}
     */
    this._handlers = {
      'prepared.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._core.settings.dotsData) {
          this._templates.push('<div class="' + this._core.settings.dotClass + '">' + $(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
        }
      }, this),
      'added.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._core.settings.dotsData) {
          this._templates.splice(e.position, 0, this._templates.pop());
        }
      }, this),
      'remove.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._core.settings.dotsData) {
          this._templates.splice(e.position, 1);
        }
      }, this),
      'changed.owl.carousel': $.proxy(function (e) {
        if (e.namespace && e.property.name == 'position') {
          this.draw();
        }
      }, this),
      'initialized.owl.carousel': $.proxy(function (e) {
        if (e.namespace && !this._initialized) {
          this._core.trigger('initialize', null, 'navigation');
          this.initialize();
          this.update();
          this.draw();
          this._initialized = true;
          this._core.trigger('initialized', null, 'navigation');
        }
      }, this),
      'refreshed.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._initialized) {
          this._core.trigger('refresh', null, 'navigation');
          this.update();
          this.draw();
          this._core.trigger('refreshed', null, 'navigation');
        }
      }, this)
    };

    // set default options
    this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

    // register event handlers
    this.$element.on(this._handlers);
  };

  /**
   * Default options.
   * @public
   * @todo Rename `slideBy` to `navBy`
   */
  Navigation.Defaults = {
    nav: false,
    navText: ['prev', 'next'],
    navSpeed: false,
    navElement: 'div',
    navContainer: false,
    navContainerClass: 'owl-nav',
    navClass: ['owl-prev', 'owl-next'],
    slideBy: 1,
    dotClass: 'owl-dot',
    dotsClass: 'owl-dots',
    dots: true,
    dotsEach: false,
    dotsData: false,
    dotsSpeed: false,
    dotsContainer: false
  };

  /**
   * Initializes the layout of the plugin and extends the carousel.
   * @protected
   */
  Navigation.prototype.initialize = function () {
    var override,
      settings = this._core.settings;

    // create DOM structure for relative navigation
    this._controls.$relative = (settings.navContainer ? $(settings.navContainer) : $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');
    this._controls.$previous = $('<' + settings.navElement + '>').addClass(settings.navClass[0]).html(settings.navText[0]).prependTo(this._controls.$relative).on('click', $.proxy(function (e) {
      this.prev(settings.navSpeed);
    }, this));
    this._controls.$next = $('<' + settings.navElement + '>').addClass(settings.navClass[1]).html(settings.navText[1]).appendTo(this._controls.$relative).on('click', $.proxy(function (e) {
      this.next(settings.navSpeed);
    }, this));

    // create DOM structure for absolute navigation
    if (!settings.dotsData) {
      this._templates = [$('<div>').addClass(settings.dotClass).append($('<span>')).prop('outerHTML')];
    }
    this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer) : $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');
    this._controls.$absolute.on('click', 'div', $.proxy(function (e) {
      var index = $(e.target).parent().is(this._controls.$absolute) ? $(e.target).index() : $(e.target).parent().index();
      e.preventDefault();
      this.to(index, settings.dotsSpeed);
    }, this));

    // override public methods of the carousel
    for (override in this._overrides) {
      this._core[override] = $.proxy(this[override], this);
    }
  };

  /**
   * Destroys the plugin.
   * @protected
   */
  Navigation.prototype.destroy = function () {
    var handler, control, property, override;
    for (handler in this._handlers) {
      this.$element.off(handler, this._handlers[handler]);
    }
    for (control in this._controls) {
      this._controls[control].remove();
    }
    for (override in this.overides) {
      this._core[override] = this._overrides[override];
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };

  /**
   * Updates the internal state.
   * @protected
   */
  Navigation.prototype.update = function () {
    var i,
      j,
      k,
      lower = this._core.clones().length / 2,
      upper = lower + this._core.items().length,
      maximum = this._core.maximum(true),
      settings = this._core.settings,
      size = settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items;
    if (settings.slideBy !== 'page') {
      settings.slideBy = Math.min(settings.slideBy, settings.items);
    }
    if (settings.dots || settings.slideBy == 'page') {
      this._pages = [];
      for (i = lower, j = 0, k = 0; i < upper; i++) {
        if (j >= size || j === 0) {
          this._pages.push({
            start: Math.min(maximum, i - lower),
            end: i - lower + size - 1
          });
          if (Math.min(maximum, i - lower) === maximum) {
            break;
          }
          j = 0, ++k;
        }
        j += this._core.mergers(this._core.relative(i));
      }
    }
  };

  /**
   * Draws the user interface.
   * @todo The option `dotsData` wont work.
   * @protected
   */
  Navigation.prototype.draw = function () {
    var difference,
      settings = this._core.settings,
      disabled = this._core.items().length <= settings.items,
      index = this._core.relative(this._core.current()),
      loop = settings.loop || settings.rewind;
    this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);
    if (settings.nav) {
      this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
      this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
    }
    this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);
    if (settings.dots) {
      difference = this._pages.length - this._controls.$absolute.children().length;
      if (settings.dotsData && difference !== 0) {
        this._controls.$absolute.html(this._templates.join(''));
      } else if (difference > 0) {
        this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
      } else if (difference < 0) {
        this._controls.$absolute.children().slice(difference).remove();
      }
      this._controls.$absolute.find('.active').removeClass('active');
      this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
    }
  };

  /**
   * Extends event data.
   * @protected
   * @param {Event} event - The event object which gets thrown.
   */
  Navigation.prototype.onTrigger = function (event) {
    var settings = this._core.settings;
    event.page = {
      index: $.inArray(this.current(), this._pages),
      count: this._pages.length,
      size: settings && (settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items)
    };
  };

  /**
   * Gets the current page position of the carousel.
   * @protected
   * @returns {Number}
   */
  Navigation.prototype.current = function () {
    var current = this._core.relative(this._core.current());
    return $.grep(this._pages, $.proxy(function (page, index) {
      return page.start <= current && page.end >= current;
    }, this)).pop();
  };

  /**
   * Gets the current succesor/predecessor position.
   * @protected
   * @returns {Number}
   */
  Navigation.prototype.getPosition = function (successor) {
    var position,
      length,
      settings = this._core.settings;
    if (settings.slideBy == 'page') {
      position = $.inArray(this.current(), this._pages);
      length = this._pages.length;
      successor ? ++position : --position;
      position = this._pages[(position % length + length) % length].start;
    } else {
      position = this._core.relative(this._core.current());
      length = this._core.items().length;
      successor ? position += settings.slideBy : position -= settings.slideBy;
    }
    return position;
  };

  /**
   * Slides to the next item or page.
   * @public
   * @param {Number} [speed=false] - The time in milliseconds for the transition.
   */
  Navigation.prototype.next = function (speed) {
    $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
  };

  /**
   * Slides to the previous item or page.
   * @public
   * @param {Number} [speed=false] - The time in milliseconds for the transition.
   */
  Navigation.prototype.prev = function (speed) {
    $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
  };

  /**
   * Slides to the specified item or page.
   * @public
   * @param {Number} position - The position of the item or page.
   * @param {Number} [speed] - The time in milliseconds for the transition.
   * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
   */
  Navigation.prototype.to = function (position, speed, standard) {
    var length;
    if (!standard) {
      length = this._pages.length;
      $.proxy(this._overrides.to, this._core)(this._pages[(position % length + length) % length].start, speed);
    } else {
      $.proxy(this._overrides.to, this._core)(position, speed);
    }
  };
  $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
})(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.0.0-beta.3
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
;
(function ($, window, document, undefined) {
  'use strict';

  /**
   * Creates the hash plugin.
   * @class The Hash Plugin
   * @param {Owl} carousel - The Owl Carousel
   */
  var Hash = function (carousel) {
    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;

    /**
     * Hash index for the items.
     * @protected
     * @type {Object}
     */
    this._hashes = {};

    /**
     * The carousel element.
     * @type {jQuery}
     */
    this.$element = this._core.$element;

    /**
     * All event handlers.
     * @protected
     * @type {Object}
     */
    this._handlers = {
      'initialized.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._core.settings.startPosition === 'URLHash') {
          $(window).trigger('hashchange.owl.navigation');
        }
      }, this),
      'prepared.owl.carousel': $.proxy(function (e) {
        if (e.namespace) {
          var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');
          if (!hash) {
            return;
          }
          this._hashes[hash] = e.content;
        }
      }, this),
      'changed.owl.carousel': $.proxy(function (e) {
        if (e.namespace && e.property.name === 'position') {
          var current = this._core.items(this._core.relative(this._core.current())),
            hash = $.map(this._hashes, function (item, hash) {
              return item === current ? hash : null;
            }).join();
          if (!hash || window.location.hash.slice(1) === hash) {
            return;
          }
          window.location.hash = hash;
        }
      }, this)
    };

    // set default options
    this._core.options = $.extend({}, Hash.Defaults, this._core.options);

    // register the event handlers
    this.$element.on(this._handlers);

    // register event listener for hash navigation
    $(window).on('hashchange.owl.navigation', $.proxy(function (e) {
      var hash = window.location.hash.substring(1),
        items = this._core.$stage.children(),
        position = this._hashes[hash] && items.index(this._hashes[hash]);
      if (position === undefined || position === this._core.current()) {
        return;
      }
      this._core.to(this._core.relative(position), false, true);
    }, this));
  };

  /**
   * Default options.
   * @public
   */
  Hash.Defaults = {
    URLhashListener: false
  };

  /**
   * Destroys the plugin.
   * @public
   */
  Hash.prototype.destroy = function () {
    var handler, property;
    $(window).off('hashchange.owl.navigation');
    for (handler in this._handlers) {
      this._core.$element.off(handler, this._handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };
  $.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
})(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.0.0-beta.3
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
;
(function ($, window, document, undefined) {
  var style = $('<support>').get(0).style,
    prefixes = 'Webkit Moz O ms'.split(' '),
    events = {
      transition: {
        end: {
          WebkitTransition: 'webkitTransitionEnd',
          MozTransition: 'transitionend',
          OTransition: 'oTransitionEnd',
          transition: 'transitionend'
        }
      },
      animation: {
        end: {
          WebkitAnimation: 'webkitAnimationEnd',
          MozAnimation: 'animationend',
          OAnimation: 'oAnimationEnd',
          animation: 'animationend'
        }
      }
    },
    tests = {
      csstransforms: function () {
        return !!test('transform');
      },
      csstransforms3d: function () {
        return !!test('perspective');
      },
      csstransitions: function () {
        return !!test('transition');
      },
      cssanimations: function () {
        return !!test('animation');
      }
    };
  function test(property, prefixed) {
    var result = false,
      upper = property.charAt(0).toUpperCase() + property.slice(1);
    $.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function (i, property) {
      if (style[property] !== undefined) {
        result = prefixed ? property : true;
        return false;
      }
    });
    return result;
  }
  function prefixed(property) {
    return test(property, true);
  }
  if (tests.csstransitions()) {
    /* jshint -W053 */
    $.support.transition = new String(prefixed('transition'));
    $.support.transition.end = events.transition.end[$.support.transition];
  }
  if (tests.cssanimations()) {
    /* jshint -W053 */
    $.support.animation = new String(prefixed('animation'));
    $.support.animation.end = events.animation.end[$.support.animation];
  }
  if (tests.csstransforms()) {
    /* jshint -W053 */
    $.support.transform = new String(prefixed('transform'));
    $.support.transform3d = tests.csstransforms3d();
  }
})(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);

/***/ }),

/***/ "./vendor/oi-layout/polo/assets/scss/app.scss":
/*!****************************************************!*\
  !*** ./vendor/oi-layout/polo/assets/scss/app.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./vendor/oi-layout/polo/assets/scss/style.scss":
/*!******************************************************!*\
  !*** ./vendor/oi-layout/polo/assets/scss/style.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_src_exports_global_js-node_modules_jquery_src_jquery_js","vendors-node_modules_fortawesome_fontawesome-free_scss_brands_scss-node_modules_fortawesome_f-c14189","vendors-node_modules_oimmei_pololight_node_modules_bootstrap_dist_js_bootstrap_js-node_module-5d45ac"], () => (__webpack_exec__("./vendor/oi-layout/polo/assets/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ltbWVpLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE1BQU1BLENBQUMsR0FBR0MsbUJBQU8sQ0FBQyxtREFBUSxDQUFDOztBQUUzQjtBQUNBQyxxQkFBTSxDQUFDRixDQUFDLEdBQUdFLHFCQUFNLENBQUNDLE1BQU0sR0FBR0MsTUFBTSxDQUFDSixDQUFDLEdBQUdJLG9DQUFhLEdBQUdKLENBQUM7O0FBRXZEO0FBQ0E7QUFDQUMsbUJBQU8sQ0FBQyxvRkFBa0MsQ0FBQztBQUMzQ0EsbUJBQU8sQ0FBQyxtSUFBK0MsQ0FBQztBQUN4REEsbUJBQU8sQ0FBQyxpR0FBK0MsQ0FBQztBQUN4REEsbUJBQU8sQ0FBQyx3SUFBaUUsQ0FBQztBQUMxRUEsbUJBQU8sQ0FBQyxxS0FBaUYsQ0FBQztBQUMxRkEsbUJBQU8sQ0FBQyx1SUFBa0UsQ0FBQztBQUMzRUEsbUJBQU8sQ0FBQyx5SUFBbUUsQ0FBQztBQUM1RUEsbUJBQU8sQ0FBQyxxSUFBaUUsQ0FBQztBQUMxRUEsbUJBQU8sQ0FBQyxpSkFBdUUsQ0FBQztBQUNoRkEsbUJBQU8sQ0FBQyxzRUFBMkIsQ0FBQztBQUNwQ0EsbUJBQU8sQ0FBQyxxR0FBa0MsQ0FBQztBQUMzQ0EsbUJBQU8sQ0FBQyxvSEFBbUMsQ0FBQztBQUM1Q0EsbUJBQU8sQ0FBQyxxRUFBYyxDQUFDOztBQUV2QjtBQUNBQSxtQkFBTyxDQUFDLHNGQUFpQyxDQUFDO0FBRTFDLE1BQU1JLGFBQWEsR0FBR0osbUJBQU8sQ0FBQyx5RkFBa0MsQ0FBQztBQUNqRSxNQUFNSyxRQUFRLEdBQUdMLG1CQUFPLENBQUMsdUVBQTRCLENBQUM7QUFDdEQ7QUFDQTtBQUNBQSxtQkFBTyxDQUFDLDhHQUF5QyxDQUFDOztBQUVsRDtBQUNBSyxRQUFRLENBQUNDLFNBQVMsQ0FBQ1AsQ0FBQyxDQUFDO0FBQ3JCSyxhQUFhLENBQUMsVUFBVSxFQUFFQyxRQUFRLEVBQUVOLENBQUMsQ0FBQzs7QUFFdEM7QUFDQUMsbUJBQU8sQ0FBQyw0RkFBa0MsQ0FBQztBQUMzQ0EsbUJBQU8sQ0FBQyx5SEFBMkQsQ0FBQztBQUNwRUEsbUJBQU8sQ0FBQyxxR0FBc0MsQ0FBQztBQUMvQ0EsbUJBQU8sQ0FBQyxzSEFBd0QsQ0FBQztBQUNqRUEsbUJBQU8sQ0FBQyw0R0FBbUQsQ0FBQztBQUM1REEsbUJBQU8sQ0FBQyx1SEFBMEQsQ0FBQztBQUNuRUEsbUJBQU8sQ0FBQywrREFBVyxDQUFDO0FBQ3BCQSxtQkFBTyxDQUFDLGtFQUEyQixDQUFDO0FBQ3BDQSxtQkFBTyxDQUFDLHVFQUF3QixDQUFDO0FBQ2pDQSxtQkFBTyxDQUFDLDhFQUEyQixDQUFDO0FBQ3BDQSxtQkFBTyxDQUFDLDhHQUE2QixDQUFDO0FBQ3RDQSxtQkFBTyxDQUFDLHlGQUErQixDQUFDO0FBQ3hDQSxtQkFBTyxDQUFDLDBFQUE2QixDQUFDO0FBQ3RDQSxtQkFBTyxDQUFDLHlGQUFrQyxDQUFDO0FBQzNDQSxtQkFBTyxDQUFDLGtHQUE4QyxDQUFDO0FBQ3ZEQSxtQkFBTyxDQUFDLDZGQUFrQyxDQUFDO0FBQzNDQSxtQkFBTyxDQUFDLGdGQUErQixDQUFDO0FBQ3hDQSxtQkFBTyxDQUFDLGdIQUF3QyxDQUFDO0FBQ2pEQSxtQkFBTyxDQUFDLHVIQUEwRCxDQUFDO0FBQ25FQSxtQkFBTyxDQUFDLDZHQUFxRCxDQUFDOztBQUU5RDtBQUNBQSxtQkFBTyxDQUFDLHNFQUFnQixDQUFDO0FBQ3pCQSxtQkFBTyxDQUFDLHNFQUFrQixDQUFDO0FBQzNCO0FBQ0FBLG1CQUFPLENBQUMsMEVBQW9CLENBQUM7O0FBRTdCO0FBQ0EsSUFBSU8sT0FBTyxHQUFHUCxtQkFBTyxDQUFDLDhHQUE2QixDQUFDO0FBQ3BEQyxxQkFBTSxDQUFDTSxPQUFPLEdBQUdBLE9BQU87QUFFeEJSLENBQUMsQ0FBQ1MsUUFBUSxDQUFDLENBQUNDLEtBQUssQ0FBQyxZQUFZO0VBQzFCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztBQUN0QyxDQUFDLENBQUM7Ozs7Ozs7Ozs7O0FDcEVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQyxRQUFRLEdBQUdaLG1CQUFPLENBQUMsdUVBQTRCLENBQUM7O0FBRXREO0FBQ0E7QUFDQVEsUUFBUSxDQUFDSyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxVQUFVQyxLQUFLLEVBQUU7RUFDM0QsSUFBSUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDZDtFQUNKLENBQUMsVUFBU2hCLENBQUMsRUFBRTtJQUNULFlBQVk7O0lBQ1o7SUFDQSxJQUFJaUIsT0FBTyxHQUFHakIsQ0FBQyxDQUFDSSxNQUFNLENBQUM7TUFDbkJjLFlBQVksR0FBRyxTQUFTO01BQ3hCO01BQ0FDLEtBQUssR0FBR25CLENBQUMsQ0FBQyxNQUFNLENBQUM7TUFDakJvQixVQUFVLEdBQUdwQixDQUFDLENBQUMsYUFBYSxDQUFDO01BQzdCcUIsUUFBUSxHQUFHckIsQ0FBQyxDQUFDLFNBQVMsQ0FBQztNQUN2QjtNQUNBc0IsT0FBTyxHQUFHdEIsQ0FBQyxDQUFDLFNBQVMsQ0FBQztNQUN0QnVCLE9BQU8sR0FBR3ZCLENBQUMsQ0FBQyxTQUFTLENBQUM7TUFDdEJ3QixxQkFBcUIsR0FBR0QsT0FBTyxDQUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDO01BQzdDO01BQ0FDLFVBQVUsR0FBRzFCLENBQUMsQ0FBQyxPQUFPLENBQUM7TUFDdkI7TUFDQTJCLFNBQVMsR0FBRzNCLENBQUMsQ0FBQyxXQUFXLENBQUM7TUFDMUI0QixtQkFBbUIsR0FBRzVCLENBQUMsQ0FBQywrQ0FBK0MsQ0FBQztNQUN4RTtNQUNBNkIsT0FBTyxHQUFHN0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQztNQUN0QjhCLGNBQWMsR0FBRzlCLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztNQUNyQytCLFNBQVMsR0FBRy9CLENBQUMsQ0FBQyxXQUFXLENBQUM7TUFDMUI7TUFDQWdDLFdBQVcsR0FBR2hDLENBQUMsQ0FBQyxjQUFjLENBQUM7TUFDL0JpQyxXQUFXLEdBQUdqQyxDQUFDLENBQUMsaUNBQWlDLENBQUM7TUFDbERrQyxXQUFXLEdBQUdqQixPQUFPLENBQUNrQixLQUFLLENBQUMsQ0FBQzs7SUFFakM7SUFDQSxJQUFJWixPQUFPLENBQUNhLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDcEIsSUFBSUMsZ0JBQWdCLEdBQUdkLE9BQU8sQ0FBQ2UsTUFBTSxDQUFDLENBQUMsQ0FBQ0MsR0FBRztJQUMvQztJQUNBLElBQUlDLE1BQU0sR0FBRztNQUNUQyxPQUFPLEVBQUU7UUFDTEMsUUFBUSxFQUFFLFNBQUFBLENBQUEsRUFBVztVQUNqQixJQUNJQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDLHVDQUF1QyxDQUFDLEVBQ3BFO1lBQ0UsT0FBTyxJQUFJO1VBQ2YsQ0FBQyxNQUFNO1lBQ0gsT0FBTyxLQUFLO1VBQ2hCO1FBQ0o7TUFDSjtJQUNKLENBQUM7SUFDRDtJQUNBLElBQUlDLFFBQVEsR0FBRztNQUNYSixRQUFRLEVBQUVGLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxRQUFRO01BQ2pDSyxZQUFZLEVBQUV4QixPQUFPLENBQUN5QixRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO01BQ3RFQyxrQkFBa0IsRUFBRTFCLE9BQU8sQ0FBQ3lCLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7TUFDbkVFLHNCQUFzQixFQUFFLEtBQUs7TUFDN0JDLGVBQWUsRUFBRSxLQUFLO01BQ3RCQyxVQUFVLEVBQUUsS0FBSztNQUNqQkMsaUJBQWlCLEVBQUU7SUFDdkIsQ0FBQztJQUNEO0lBQ0FyRCxDQUFDLENBQUNJLE1BQU0sQ0FBQyxDQUFDa0QsV0FBVyxDQUFDO01BQ2xCQyxhQUFhLEVBQUUsSUFBSTtNQUNuQkQsV0FBVyxFQUFFLENBQUM7UUFDTkUsSUFBSSxFQUFFLElBQUk7UUFDVnJCLEtBQUssRUFBRTtNQUNYLENBQUMsRUFDRDtRQUNJcUIsSUFBSSxFQUFFLElBQUk7UUFDVnJCLEtBQUssRUFBRTtNQUNYLENBQUMsRUFDRDtRQUNJcUIsSUFBSSxFQUFFLElBQUk7UUFDVnJCLEtBQUssRUFBRTtNQUNYLENBQUMsRUFDRDtRQUNJcUIsSUFBSSxFQUFFLElBQUk7UUFDVnJCLEtBQUssRUFBRTtNQUNYLENBQUMsRUFDRDtRQUNJcUIsSUFBSSxFQUFFLElBQUk7UUFDVnJCLEtBQUssRUFBRTtNQUNYLENBQUM7SUFFVCxDQUFDLENBQUM7SUFDRixJQUFJc0IsaUJBQWlCLEdBQUd6RCxDQUFDLENBQUNJLE1BQU0sQ0FBQyxDQUFDa0QsV0FBVyxDQUFDLGVBQWUsQ0FBQztJQUM5RG5DLEtBQUssQ0FBQ3VDLFFBQVEsQ0FBQyxhQUFhLEdBQUdELGlCQUFpQixDQUFDO0lBQ2pEekQsQ0FBQyxDQUFDSSxNQUFNLENBQUMsQ0FBQ3VELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxVQUFTQyxVQUFVLEVBQUU7TUFDckR6QyxLQUFLLENBQUMwQyxXQUFXLENBQUMsYUFBYSxHQUFHRCxVQUFVLENBQUNFLElBQUksQ0FBQztNQUNsRDNDLEtBQUssQ0FBQ3VDLFFBQVEsQ0FBQyxhQUFhLEdBQUdFLFVBQVUsQ0FBQ0csRUFBRSxDQUFDO0lBQ2pELENBQUMsQ0FBQztJQUVGL0QsQ0FBQyxDQUFDSSxNQUFNLENBQUMsQ0FBQ3VELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxVQUFTNUMsS0FBSyxFQUFFO01BQ2hEZixDQUFDLENBQUNJLE1BQU0sQ0FBQyxDQUFDa0QsV0FBVyxDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxZQUFXO1FBQ3JEbkMsS0FBSyxDQUFDdUMsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUM1QnZDLEtBQUssQ0FBQzBDLFdBQVcsQ0FBQyxlQUFlLENBQUM7TUFDdEMsQ0FBQyxDQUFDO01BQ0Y3RCxDQUFDLENBQUNJLE1BQU0sQ0FBQyxDQUFDa0QsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsWUFBVztRQUMvQ25DLEtBQUssQ0FBQzBDLFdBQVcsQ0FBQyxZQUFZLENBQUM7UUFDL0IxQyxLQUFLLENBQUN1QyxRQUFRLENBQUMsZUFBZSxDQUFDO01BQ25DLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztJQUVGMUMsT0FBTyxDQUFDZ0QsSUFBSSxHQUFHO01BQ1hDLFNBQVMsRUFBRSxTQUFBQSxDQUFBLEVBQVc7UUFDbEJqRCxPQUFPLENBQUNnRCxJQUFJLENBQUNFLFNBQVMsQ0FBQyxDQUFDO1FBQ3hCbEQsT0FBTyxDQUFDZ0QsSUFBSSxDQUFDRyxTQUFTLENBQUMsQ0FBQztRQUN4Qm5ELE9BQU8sQ0FBQ2dELElBQUksQ0FBQ0ksUUFBUSxDQUFDLENBQUM7UUFDdkJwRCxPQUFPLENBQUNnRCxJQUFJLENBQUNLLFlBQVksQ0FBQyxDQUFDO1FBQzNCckQsT0FBTyxDQUFDZ0QsSUFBSSxDQUFDTSxTQUFTLENBQUMsQ0FBQztNQUM1QixDQUFDO01BQ0RKLFNBQVMsRUFBRSxTQUFBQSxDQUFBLEVBQVc7UUFDbEIsSUFBSUssVUFBVSxHQUFHdkUsQ0FBQyxDQUFDLFlBQVksQ0FBQztRQUNoQyxJQUFJdUUsVUFBVSxDQUFDbkMsTUFBTSxHQUFHLENBQUMsRUFBRTtVQUN2QixJQUFJb0MsWUFBWSxHQUFHckQsS0FBSyxDQUFDTSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRztVQUNuRCxJQUFJUixPQUFPLENBQUNpRCxTQUFTLENBQUMsQ0FBQyxHQUFHTSxZQUFZLEVBQUU7WUFDcEMsSUFBSXJELEtBQUssQ0FBQzZCLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtjQUN6QnVCLFVBQVUsQ0FBQ0UsR0FBRyxDQUFDO2dCQUNYQyxNQUFNLEVBQUUsTUFBTTtnQkFDZEMsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsU0FBUyxFQUFFO2NBQ2YsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxNQUFNO2NBQ0hKLFVBQVUsQ0FBQ0UsR0FBRyxDQUFDO2dCQUNYQyxNQUFNLEVBQUUsTUFBTTtnQkFDZEMsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsU0FBUyxFQUFFO2NBQ2YsQ0FBQyxDQUFDO1lBQ047VUFDSixDQUFDLE1BQU07WUFDSEosVUFBVSxDQUFDRSxHQUFHLENBQUM7Y0FDWEMsTUFBTSxFQUFFLE1BQU07Y0FDZEMsT0FBTyxFQUFFO1lBQ2IsQ0FBQyxDQUFDO1VBQ047VUFDQUosVUFBVSxDQUFDSyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUNDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBVztZQUMzQzdFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQzhFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQ0MsT0FBTyxDQUFDO2NBQzFCYixTQUFTLEVBQUU7WUFDZixDQUFDLEVBQ0QsSUFBSSxFQUNKLGVBQ0osQ0FBQztZQUNELE9BQU8sS0FBSztVQUNoQixDQUFDLENBQUM7UUFDTjtNQUNKLENBQUM7TUFDREMsU0FBUyxFQUFFLFNBQUFBLENBQUEsRUFBVztRQUNsQixJQUFJYSxlQUFlLEdBQUdoRixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUN5QixJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzNDLElBQUl1RCxlQUFlLElBQUksS0FBSyxFQUFFO1VBQzFCLE9BQU8sSUFBSTtRQUNmO1FBQ0EsT0FBTyxLQUFLO01BQ2hCLENBQUM7TUFDRFosUUFBUSxFQUFFLFNBQUFBLENBQUEsRUFBVztRQUNqQixJQUFJYSxTQUFTLEdBQUdqRixDQUFDLENBQUMsV0FBVyxDQUFDO1FBQzlCLElBQUlpRixTQUFTLENBQUM3QyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQ3RCNkMsU0FBUyxDQUFDQyxJQUFJLENBQUMsWUFBVztZQUN0QixJQUFJQyxJQUFJLEdBQUduRixDQUFDLENBQUMsSUFBSSxDQUFDO2NBQ2RvRixZQUFZLEdBQ1pELElBQUksQ0FBQ0UsSUFBSSxDQUFDRixJQUFJLENBQUMxRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLE9BQU87Y0FDckQ2RCxTQUFTLEdBQUcsQ0FBQztZQUNqQkYsWUFBWSxDQUFDRixJQUFJLENBQUMsWUFBVztjQUN6QixJQUFJbEYsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDdUYsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHRCxTQUFTLEVBQUU7Z0JBQ3ZDQSxTQUFTLEdBQUd0RixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN1RixXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ3pDO1lBQ0osQ0FBQyxDQUFDO1lBQ0ZILFlBQVksQ0FBQ0ksTUFBTSxDQUFDRixTQUFTLENBQUM7VUFDbEMsQ0FBQyxDQUFDO1FBQ047TUFDSixDQUFDO01BQ0RqQixZQUFZLEVBQUUsU0FBQUEsQ0FBU29CLFNBQVMsRUFBRTtRQUM5QixJQUFJQyxhQUFhLEdBQUcxRixDQUFDLENBQUMsZ0JBQWdCLENBQUM7UUFDdkMsSUFBSTBGLGFBQWEsQ0FBQ3RELE1BQU0sR0FBRyxDQUFDLEVBQUU7VUFDMUJzRCxhQUFhLENBQUNSLElBQUksQ0FBQyxZQUFXO1lBQzFCLElBQUlDLElBQUksR0FBR25GLENBQUMsQ0FBQyxJQUFJLENBQUM7Y0FDZDJGLFVBQVUsR0FBR1IsSUFBSSxDQUFDMUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUc7Y0FDNUNtRSxZQUFZLEdBQUdULElBQUksQ0FBQzFELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJa0UsVUFBVTtjQUN4REUsWUFBWSxHQUFHVixJQUFJLENBQUMxRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSW1FLFlBQVk7Y0FDMURFLFlBQVksR0FBR1gsSUFBSSxDQUFDMUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUlvRSxZQUFZO2NBQzFERSxZQUFZLEdBQUdaLElBQUksQ0FBQzFELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJcUUsWUFBWTtZQUU5RCxTQUFTRSxzQkFBc0JBLENBQUNQLFNBQVMsRUFBRTtjQUN2QyxJQUFJQSxTQUFTLEVBQUU7Z0JBQ1hOLElBQUksR0FBR00sU0FBUztjQUNwQjtjQUNBLFFBQVF6RixDQUFDLENBQUNJLE1BQU0sQ0FBQyxDQUFDa0QsV0FBVyxDQUFDLGVBQWUsQ0FBQztnQkFDMUMsS0FBSyxJQUFJO2tCQUNMNkIsSUFBSSxDQUFDSyxNQUFNLENBQUNPLFlBQVksQ0FBQztrQkFDekI7Z0JBQ0osS0FBSyxJQUFJO2tCQUNMWixJQUFJLENBQUNLLE1BQU0sQ0FBQ00sWUFBWSxDQUFDO2tCQUN6QjtnQkFDSixLQUFLLElBQUk7a0JBQ0xYLElBQUksQ0FBQ0ssTUFBTSxDQUFDSyxZQUFZLENBQUM7a0JBQ3pCO2dCQUNKLEtBQUssSUFBSTtrQkFDTFYsSUFBSSxDQUFDSyxNQUFNLENBQUNJLFlBQVksQ0FBQztrQkFDekI7Z0JBQ0osS0FBSyxJQUFJO2tCQUNMVCxJQUFJLENBQUNLLE1BQU0sQ0FBQ0csVUFBVSxDQUFDO2tCQUN2QjtjQUNSO1lBQ0o7WUFDQUssc0JBQXNCLENBQUNQLFNBQVMsQ0FBQztZQUNqQ3pGLENBQUMsQ0FBQ0ksTUFBTSxDQUFDLENBQUM2RixNQUFNLENBQUMsWUFBVztjQUN4QkMsVUFBVSxDQUFDLFlBQVc7Z0JBQ2xCRixzQkFBc0IsQ0FBQ1AsU0FBUyxDQUFDO2NBQ3JDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDWCxDQUFDLENBQUM7VUFDTixDQUFDLENBQUM7UUFDTjtNQUNKLENBQUM7TUFDRG5CLFNBQVMsRUFBRSxTQUFBQSxDQUFBLEVBQVc7UUFDbEIsSUFBSTZCLFlBQVksR0FBR25HLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztVQUNuQ29HLGdCQUFnQixHQUFHcEcsQ0FBQyxDQUFDLGFBQWEsQ0FBQztVQUNuQ3FHLGVBQWUsR0FBR3JHLENBQUMsQ0FBQyxZQUFZLENBQUM7VUFDakNzRyxlQUFlLEdBQUcsaUJBQWlCO1VBQ25DQyxXQUFXLEdBQUdwRixLQUFLLENBQUM2QixRQUFRLENBQUMsTUFBTSxDQUFDO1FBRXhDLElBQUksT0FBT3hDLE9BQU8sQ0FBQ2dHLEdBQUcsQ0FBQ0YsZUFBZSxDQUFDLEtBQUssV0FBVyxFQUFFO1VBQ3JEO1FBQUE7UUFHSkQsZUFBZSxDQUFDeEIsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFTNEIsQ0FBQyxFQUFFO1VBQ3BDQyxXQUFXLENBQUMsQ0FBQztVQUNidkYsS0FBSyxDQUFDdUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztVQUN0QjFDLE9BQU8sQ0FBQzJGLFFBQVEsQ0FBQ0MsWUFBWSxDQUFDLENBQUM7VUFDL0JwRyxPQUFPLENBQUNxRyxHQUFHLENBQUNQLGVBQWUsRUFBRSxJQUFJLEVBQUU7WUFDL0JRLE9BQU8sRUFBRUMsTUFBTSxDQUFDLEdBQUc7VUFDdkIsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDO1FBRUZYLGdCQUFnQixDQUFDdkIsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFTNEIsQ0FBQyxFQUFFO1VBQ3JDTyxZQUFZLENBQUMsQ0FBQztVQUNkN0YsS0FBSyxDQUFDMEMsV0FBVyxDQUFDLE1BQU0sQ0FBQztVQUN6QjdDLE9BQU8sQ0FBQzJGLFFBQVEsQ0FBQ0MsWUFBWSxDQUFDLENBQUM7VUFDL0JwRyxPQUFPLENBQUN5RyxNQUFNLENBQUNYLGVBQWUsQ0FBQztRQUNuQyxDQUFDLENBQUM7UUFFRixJQUFJbkYsS0FBSyxDQUFDNkIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1VBQ3hCMEQsV0FBVyxDQUFDLENBQUM7UUFDakI7UUFFQSxTQUFTQSxXQUFXQSxDQUFBLEVBQUc7VUFDbkJQLFlBQVksQ0FBQ2pCLElBQUksQ0FBQyxZQUFXO1lBQ3pCLElBQUlDLElBQUksR0FBR25GLENBQUMsQ0FBQyxJQUFJLENBQUM7Y0FDZGtILGVBQWUsR0FBRy9CLElBQUksQ0FBQzFELElBQUksQ0FBQyxLQUFLLENBQUM7Y0FDbEMwRixXQUFXLEdBQUdoQyxJQUFJLENBQUMxRCxJQUFJLENBQUMsZUFBZSxDQUFDO1lBRTVDLElBQUkwRixXQUFXLEVBQUU7Y0FDYmhDLElBQUksQ0FBQzFELElBQUksQ0FBQyxtQkFBbUIsRUFBRXlGLGVBQWUsQ0FBQztjQUMvQy9CLElBQUksQ0FBQzFELElBQUksQ0FBQyxLQUFLLEVBQUUwRixXQUFXLENBQUM7WUFDakM7VUFDSixDQUFDLENBQUM7UUFDTjtRQUVBLFNBQVNILFlBQVlBLENBQUEsRUFBRztVQUNwQmIsWUFBWSxDQUFDakIsSUFBSSxDQUFDLFlBQVc7WUFDekIsSUFBSUMsSUFBSSxHQUFHbkYsQ0FBQyxDQUFDLElBQUksQ0FBQztjQUNkb0gsWUFBWSxHQUFHakMsSUFBSSxDQUFDMUQsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1lBRWpELElBQUkyRixZQUFZLEVBQUU7Y0FDZGpDLElBQUksQ0FBQzFELElBQUksQ0FBQyxLQUFLLEVBQUUyRixZQUFZLENBQUM7WUFDbEM7VUFDSixDQUFDLENBQUM7UUFDTjtNQUNKO0lBQ0osQ0FBQztJQUNEcEcsT0FBTyxDQUFDcUcsTUFBTSxHQUFHO01BQ2JwRCxTQUFTLEVBQUUsU0FBQUEsQ0FBQSxFQUFXO1FBQ2xCakQsT0FBTyxDQUFDcUcsTUFBTSxDQUFDQyxVQUFVLENBQUMsQ0FBQztRQUMzQnRHLE9BQU8sQ0FBQ3FHLE1BQU0sQ0FBQ0UsWUFBWSxDQUFDLENBQUM7UUFDN0J2RyxPQUFPLENBQUNxRyxNQUFNLENBQUNHLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCeEcsT0FBTyxDQUFDcUcsTUFBTSxDQUFDSSxNQUFNLENBQUMsQ0FBQztRQUN2QnpHLE9BQU8sQ0FBQ3FHLE1BQU0sQ0FBQ0ssUUFBUSxDQUFDLENBQUM7UUFDekIxRyxPQUFPLENBQUNxRyxNQUFNLENBQUNNLHNCQUFzQixDQUFDLENBQUM7UUFDdkMzRyxPQUFPLENBQUNxRyxNQUFNLENBQUNPLGVBQWUsQ0FBQyxDQUFDO1FBQ2hDNUcsT0FBTyxDQUFDcUcsTUFBTSxDQUFDUSxRQUFRLENBQUMsQ0FBQztRQUN6QjdHLE9BQU8sQ0FBQ3FHLE1BQU0sQ0FBQ1MsY0FBYyxDQUFDLENBQUM7UUFDL0I5RyxPQUFPLENBQUNxRyxNQUFNLENBQUNVLFFBQVEsQ0FBQyxDQUFDO1FBQ3pCL0csT0FBTyxDQUFDcUcsTUFBTSxDQUFDVyxXQUFXLENBQUMsQ0FBQztNQUNoQyxDQUFDO01BQ0RWLFVBQVUsRUFBRSxTQUFBQSxDQUFTVyxNQUFNLEVBQUU7UUFDekIsSUFBSUMsaUJBQWlCLEdBQUd4RyxVQUFVLENBQUMyRCxJQUFJLENBQUNyRixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7VUFDdkRtSSxjQUFjLEdBQUd6RyxVQUFVLENBQUMyRCxJQUFJLENBQUNyRixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7VUFDakRvSSxlQUFlLEdBQUcxRyxVQUFVLENBQUMyRCxJQUFJLENBQUMsYUFBYSxDQUFDO1VBQ2hEZ0Qsb0JBQW9CLEdBQUczRyxVQUFVLENBQUMyRCxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFFOUQsSUFBSTlELE9BQU8sQ0FBQ3lCLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSW9GLGVBQWUsQ0FBQ2hHLE1BQU0sR0FBRyxDQUFDLEVBQUU7VUFDakU4RixpQkFBaUIsQ0FBQ3pELEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDO1VBQ3hDMEQsY0FBYyxDQUFDMUQsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUM7VUFDckM0RCxvQkFBb0IsQ0FBQzVELEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDO1VBQzNDMkQsZUFBZSxDQUFDM0QsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUM7UUFDM0MsQ0FBQyxNQUFNO1VBQ0h5RCxpQkFBaUIsQ0FBQ0ksVUFBVSxDQUFDLE9BQU8sQ0FBQztVQUNyQ0gsY0FBYyxDQUFDRyxVQUFVLENBQUMsT0FBTyxDQUFDO1VBQ2xDRCxvQkFBb0IsQ0FBQ0MsVUFBVSxDQUFDLE9BQU8sQ0FBQztVQUN4Q0YsZUFBZSxDQUFDRSxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQ3ZDO1FBQ0F0SSxDQUFDLENBQUNJLE1BQU0sQ0FBQyxDQUFDa0QsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsWUFBVztVQUMvQyxJQUFJK0Usb0JBQW9CLENBQUNqRyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2pDOEYsaUJBQWlCLENBQUN6RCxHQUFHLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQztZQUN4QzBELGNBQWMsQ0FBQzFELEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDO1lBQ3JDMkQsZUFBZSxDQUFDM0QsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUM7WUFDdEM0RCxvQkFBb0IsQ0FBQzVELEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDO1VBQ2hEO1FBQ0osQ0FBQyxDQUFDO01BQ04sQ0FBQztNQUNEOEMsWUFBWSxFQUFFLFNBQUFBLENBQUEsRUFBVztRQUNyQixJQUFJZ0IsWUFBWSxHQUFHaEgsT0FBTyxDQUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztVQUMvQytHLGtCQUFrQixHQUFHakgsT0FBTyxDQUFDRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxHQUFHO1VBQzlEZ0gsV0FBVyxHQUFHeEgsT0FBTyxDQUFDaUQsU0FBUyxDQUFDLENBQUM7UUFDckMsSUFBSTNDLE9BQU8sQ0FBQ3lCLFFBQVEsQ0FBQyxlQUFlLENBQUMsRUFBRTtVQUNuQ3VGLFlBQVksR0FBRyxHQUFHO1FBQ3RCO1FBRUF2SSxDQUFDLENBQUNJLE1BQU0sQ0FBQyxDQUFDa0QsV0FBVyxDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxZQUFXO1VBQ3JELElBQUksQ0FBQy9CLE9BQU8sQ0FBQ21ILEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFO1lBQ3RDLElBQUlELFdBQVcsR0FBR3BHLGdCQUFnQixHQUFHa0csWUFBWSxFQUFFO2NBQy9DaEgsT0FBTyxDQUFDbUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztjQUNqQyxJQUFJK0UsV0FBVyxHQUFHcEcsZ0JBQWdCLEdBQUdtRyxrQkFBa0IsRUFBRTtnQkFDckRqSCxPQUFPLENBQUNtQyxRQUFRLENBQUMsZUFBZSxDQUFDO2dCQUNqQyxJQUFJWixRQUFRLENBQUNDLFlBQVksSUFBSUQsUUFBUSxDQUFDRyxrQkFBa0IsRUFBRTtrQkFDdEQxQixPQUFPLENBQUNzQyxXQUFXLENBQUMsTUFBTSxDQUFDO2tCQUMzQmYsUUFBUSxDQUFDSSxzQkFBc0IsR0FBRyxJQUFJO2dCQUMxQztnQkFDQWxDLE9BQU8sQ0FBQ3FHLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDLENBQUM7Y0FDL0I7WUFDSixDQUFDLE1BQU07Y0FDSC9GLE9BQU8sQ0FBQ3NDLFdBQVcsQ0FBQyxDQUFDLENBQUNILFFBQVEsQ0FBQ2xDLHFCQUFxQixDQUFDO2NBQ3JELElBQUlzQixRQUFRLENBQUNLLGVBQWUsSUFBSUwsUUFBUSxDQUFDRyxrQkFBa0IsRUFBRTtnQkFDekQxQixPQUFPLENBQUNzQyxXQUFXLENBQUMsTUFBTSxDQUFDO2dCQUMzQmYsUUFBUSxDQUFDSSxzQkFBc0IsR0FBRyxJQUFJO2NBQzFDO2NBQ0FsQyxPQUFPLENBQUNxRyxNQUFNLENBQUNDLFVBQVUsQ0FBQyxDQUFDO1lBQy9CO1VBQ0o7UUFDSixDQUFDLENBQUM7UUFDRnRILENBQUMsQ0FBQ0ksTUFBTSxDQUFDLENBQUNrRCxXQUFXLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxZQUFXO1VBQy9DLElBQUkvQixPQUFPLENBQUNFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLE1BQU0sRUFBRTtZQUNqRCxJQUFJZ0gsV0FBVyxHQUFHcEcsZ0JBQWdCLEdBQUdrRyxZQUFZLEVBQUU7Y0FDL0NoSCxPQUFPLENBQUNtQyxRQUFRLENBQUMsZUFBZSxDQUFDO2NBQ2pDLElBQUkrRSxXQUFXLEdBQUdwRyxnQkFBZ0IsR0FBR21HLGtCQUFrQixFQUFFO2dCQUNyRGpILE9BQU8sQ0FBQ21DLFFBQVEsQ0FBQyxlQUFlLENBQUM7Z0JBQ2pDLElBQUlaLFFBQVEsQ0FBQ0MsWUFBWSxFQUFFO2tCQUN2QnhCLE9BQU8sQ0FBQ3NDLFdBQVcsQ0FBQyxNQUFNLENBQUM7a0JBQzNCZixRQUFRLENBQUNJLHNCQUFzQixHQUFHLElBQUk7Z0JBQzFDO2dCQUNBbEMsT0FBTyxDQUFDcUcsTUFBTSxDQUFDQyxVQUFVLENBQUMsQ0FBQztjQUMvQjtZQUNKLENBQUMsTUFBTTtjQUNIL0YsT0FBTyxDQUFDc0MsV0FBVyxDQUFDLENBQUMsQ0FBQ0gsUUFBUSxDQUFDbEMscUJBQXFCLENBQUM7Y0FDckQsSUFDSXNCLFFBQVEsQ0FBQ0ksc0JBQXNCLElBQUksSUFBSSxJQUN2Qy9CLEtBQUssQ0FBQzZCLFFBQVEsQ0FBQyxlQUFlLENBQUMsRUFDakM7Z0JBQ0V6QixPQUFPLENBQUNzQyxXQUFXLENBQUMsTUFBTSxDQUFDO2NBQy9CO2NBQ0E3QyxPQUFPLENBQUNxRyxNQUFNLENBQUNDLFVBQVUsQ0FBQyxDQUFDO1lBQy9CO1VBQ0o7UUFDSixDQUFDLENBQUM7TUFDTixDQUFDO01BQ0Q7TUFDQUUsTUFBTSxFQUFFLFNBQUFBLENBQUEsRUFBVztRQUNmLElBQUlsRyxPQUFPLENBQUNjLE1BQU0sR0FBRyxDQUFDLEVBQUU7VUFDcEJwQyxDQUFDLENBQUMsdUNBQXVDLENBQUMsQ0FBQ2tGLElBQUksQ0FBQyxVQUM1Q3lELEtBQUssRUFDTEMsT0FBTyxFQUNUO1lBQ0UsSUFDSTNILE9BQU8sQ0FBQ2tCLEtBQUssQ0FBQyxDQUFDLElBQUluQyxDQUFDLENBQUM0SSxPQUFPLENBQUMsQ0FBQ3pHLEtBQUssQ0FBQyxDQUFDLEdBQUduQyxDQUFDLENBQUM0SSxPQUFPLENBQUMsQ0FBQ3RHLE1BQU0sQ0FBQyxDQUFDLENBQUN1RyxJQUFJLENBQUMsR0FDakUsQ0FBQyxFQUNIO2NBQ0U3SSxDQUFDLENBQUM0SSxPQUFPLENBQUMsQ0FBQ2xGLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQztZQUMxQztVQUNKLENBQUMsQ0FBQztRQUNOO01BQ0osQ0FBQztNQUNEK0QsTUFBTSxFQUFFLFNBQUFBLENBQUEsRUFBVztRQUNmLElBQUlxQixPQUFPLEdBQUc5SSxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzFCLElBQUk4SSxPQUFPLENBQUMxRyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQ3BCLElBQUkyRyxTQUFTLEdBQUcvSSxDQUFDLENBQUMsYUFBYSxDQUFDO1lBQzVCZ0osY0FBYyxHQUFHaEosQ0FBQyxDQUFDLG1CQUFtQixDQUFDO1lBQ3ZDaUosV0FBVyxHQUFHSCxPQUFPLENBQUN6RCxJQUFJLENBQUMsZUFBZSxDQUFDO1VBRS9DLFNBQVM2RCxVQUFVQSxDQUFBLEVBQUc7WUFDbEIvSCxLQUFLLENBQUN1QyxRQUFRLENBQUMsYUFBYSxDQUFDO1lBQzdCdUYsV0FBVyxDQUFDRSxLQUFLLENBQUMsQ0FBQztVQUN2QjtVQUVBLFNBQVNDLFdBQVdBLENBQUEsRUFBRztZQUNuQmpJLEtBQUssQ0FBQzBDLFdBQVcsQ0FBQyxhQUFhLENBQUM7WUFDaENvRixXQUFXLENBQUNJLEtBQUssR0FBRyxFQUFFO1VBQzFCO1VBQ0FOLFNBQVMsQ0FBQ2xFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBVztZQUM3QnFFLFVBQVUsQ0FBQyxDQUFDO1lBQ1osT0FBTyxLQUFLO1VBQ2hCLENBQUMsQ0FBQztVQUNGRixjQUFjLENBQUNuRSxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVc7WUFDbEN1RSxXQUFXLENBQUMsQ0FBQztZQUNiLE9BQU8sS0FBSztVQUNoQixDQUFDLENBQUM7VUFDRjNJLFFBQVEsQ0FBQ0ssZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVN3SSxFQUFFLEVBQUU7WUFDNUMsSUFBSUEsRUFBRSxDQUFDQyxPQUFPLElBQUksRUFBRSxFQUFFO2NBQ2xCSCxXQUFXLENBQUMsQ0FBQztZQUNqQjtVQUNKLENBQUMsQ0FBQztRQUNOO01BQ0osQ0FBQztNQUNEMUIsUUFBUSxFQUFFLFNBQUFBLENBQUEsRUFBVztRQUNqQixJQUFJL0YsU0FBUyxDQUFDUyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQ3RCVCxTQUFTLENBQ0owRCxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FDcENtRSxPQUFPLENBQUMsc0NBQXNDLENBQUM7VUFFcEQsSUFBSUMsY0FBYyxHQUFHekosQ0FBQyxDQUNkLDJPQUNKLENBQUM7WUFDRDBKLGNBQWMsR0FBRzFKLENBQUMsQ0FBQywrQ0FBK0MsQ0FBQztZQUNuRTJKLFVBQVUsR0FBRyxLQUFLO1lBQ2xCQyxZQUFZO1VBRWhCRixjQUFjLENBQUM3RSxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVM0QixDQUFDLEVBQUU7WUFDbkMsSUFBSXRCLElBQUksR0FBR25GLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbEJ5RyxDQUFDLENBQUNvRCxjQUFjLENBQUMsQ0FBQztZQUNsQjdKLENBQUMsQ0FBQ0ksTUFBTSxDQUFDLENBQUNrRCxXQUFXLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxZQUFXO2NBQy9DLElBQUl3RyxRQUFRLEdBQUcsU0FBQUEsQ0FBQSxFQUFXO2dCQUN0QixJQUFJLENBQUNILFVBQVUsRUFBRTtrQkFDYkEsVUFBVSxHQUFHLElBQUk7a0JBQ2pCN0csUUFBUSxDQUFDTSxVQUFVLEdBQUcsSUFBSTtrQkFDMUIsSUFBSU4sUUFBUSxDQUFDQyxZQUFZLElBQUlELFFBQVEsQ0FBQ0csa0JBQWtCLEVBQUU7b0JBQ3REMUIsT0FBTyxDQUFDc0MsV0FBVyxDQUFDLE1BQU0sQ0FBQztvQkFDM0JmLFFBQVEsQ0FBQ0ksc0JBQXNCLEdBQUcsSUFBSTtrQkFDMUMsQ0FBQyxNQUFNO29CQUNILElBQ0lKLFFBQVEsQ0FBQ0csa0JBQWtCLElBQzNCSCxRQUFRLENBQUNJLHNCQUFzQixFQUNqQztzQkFDRTNCLE9BQU8sQ0FBQ21DLFFBQVEsQ0FBQyxNQUFNLENBQUM7b0JBQzVCO2tCQUNKO2tCQUNBeUIsSUFBSSxDQUFDekIsUUFBUSxDQUFDLGVBQWUsQ0FBQztrQkFDOUJ2QyxLQUFLLENBQUN1QyxRQUFRLENBQUMsZUFBZSxDQUFDO2tCQUMvQjFDLE9BQU8sQ0FBQ3FHLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDLENBQUM7a0JBQzNCM0YsU0FBUyxDQUFDb0QsT0FBTyxDQUFDO29CQUNkO29CQUNBLFlBQVksRUFBRTlELE9BQU8sQ0FBQ3VFLE1BQU0sQ0FBQyxDQUFDLEdBQUc3RCxTQUFTLENBQUNvSSxNQUFNLENBQUMsQ0FBQyxDQUFDeEUsV0FBVyxDQUFDO2tCQUNwRSxDQUFDLEVBQUU7b0JBQ0N5RSxRQUFRLEVBQUUsR0FBRztvQkFDYkMsTUFBTSxFQUFFLGdCQUFnQjtvQkFDeEJDLEtBQUssRUFBRSxTQUFBQSxDQUFBLEVBQVc7c0JBQ2RoRSxVQUFVLENBQUMsWUFBVzt3QkFDbEJ2RSxTQUFTLENBQUMrQixRQUFRLENBQUMsY0FBYyxDQUFDO3NCQUN0QyxDQUFDLEVBQUUsR0FBRyxDQUFDO29CQUNYLENBQUM7b0JBQ0R5RyxRQUFRLEVBQUUsU0FBQUEsQ0FBQSxFQUFXO3NCQUNqQlIsVUFBVSxHQUFHLEtBQUs7b0JBQ3RCO2tCQUNKLENBQUMsQ0FBQztnQkFDTjtjQUNKLENBQUM7Y0FDRCxJQUFJUyxTQUFTLEdBQUcsU0FBQUEsQ0FBQSxFQUFXO2dCQUN2QixJQUFJLENBQUNULFVBQVUsRUFBRTtrQkFDYkEsVUFBVSxHQUFHLElBQUk7a0JBQ2pCN0csUUFBUSxDQUFDTSxVQUFVLEdBQUcsS0FBSztrQkFDM0JwQyxPQUFPLENBQUNxRyxNQUFNLENBQUNDLFVBQVUsQ0FBQyxDQUFDO2tCQUMzQjNGLFNBQVMsQ0FBQ29ELE9BQU8sQ0FBQztvQkFDZCxZQUFZLEVBQUU7a0JBQ2xCLENBQUMsRUFBRTtvQkFDQ21GLEtBQUssRUFBRSxTQUFBQSxDQUFBLEVBQVc7c0JBQ2R2SSxTQUFTLENBQUNrQyxXQUFXLENBQUMsY0FBYyxDQUFDO29CQUN6QyxDQUFDO29CQUNEd0csSUFBSSxFQUFFLFNBQUFBLENBQUEsRUFBVztzQkFDYmxKLEtBQUssQ0FBQzBDLFdBQVcsQ0FBQyxlQUFlLENBQUM7c0JBQ2xDc0IsSUFBSSxDQUFDdEIsV0FBVyxDQUFDLGVBQWUsQ0FBQztzQkFDakMsSUFDSWYsUUFBUSxDQUFDQyxZQUFZLElBQ3JCRCxRQUFRLENBQUNHLGtCQUFrQixJQUMzQkgsUUFBUSxDQUFDSSxzQkFBc0IsSUFDL0IsQ0FBQzNCLE9BQU8sQ0FBQ3lCLFFBQVEsQ0FBQyxlQUFlLENBQUMsRUFDcEM7d0JBQ0V6QixPQUFPLENBQUNtQyxRQUFRLENBQUMsTUFBTSxDQUFDO3NCQUM1QjtzQkFDQSxJQUNJWixRQUFRLENBQUNLLGVBQWUsSUFDeEJMLFFBQVEsQ0FBQ0csa0JBQWtCLElBQzNCSCxRQUFRLENBQUNJLHNCQUFzQixFQUNqQzt3QkFDRTNCLE9BQU8sQ0FBQ3NDLFdBQVcsQ0FBQyxNQUFNLENBQUM7d0JBQzNCZixRQUFRLENBQUNJLHNCQUFzQixHQUFHLElBQUk7c0JBQzFDO29CQUNKLENBQUM7b0JBQ0Q4RyxRQUFRLEVBQUUsR0FBRztvQkFDYkMsTUFBTSxFQUFFLGdCQUFnQjtvQkFDeEJFLFFBQVEsRUFBRSxTQUFBQSxDQUFBLEVBQVc7c0JBQ2pCUixVQUFVLEdBQUcsS0FBSztvQkFDdEI7a0JBQ0osQ0FBQyxDQUFDO2dCQUNOO2NBQ0osQ0FBQztjQUNELElBQUksQ0FBQzdHLFFBQVEsQ0FBQ00sVUFBVSxFQUFFO2dCQUN0QndHLFlBQVksR0FBR0UsUUFBUSxDQUFDLENBQUM7Y0FDN0IsQ0FBQyxNQUFNO2dCQUNIRixZQUFZLEdBQUdRLFNBQVMsQ0FBQyxDQUFDO2NBQzlCO1lBQ0osQ0FBQyxDQUFDO1VBQ04sQ0FBQyxDQUFDO1VBRUZYLGNBQWMsQ0FBQzVFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBUzRCLENBQUMsRUFBRTtZQUNuQ3pHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQytKLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQ08sUUFBUSxDQUFDLENBQUMsQ0FBQ3pHLFdBQVcsQ0FBQyxjQUFjLENBQUM7WUFDM0QsSUFDSTFDLEtBQUssQ0FBQzZCLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFDL0JyQixTQUFTLENBQUNxQixRQUFRLENBQUMsY0FBYyxDQUFDLEVBQ3BDO2NBQ0VoRCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMrSixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUNRLFdBQVcsQ0FBQyxjQUFjLENBQUM7WUFDcEQ7WUFDQTlELENBQUMsQ0FBQytELGVBQWUsQ0FBQyxDQUFDO1lBQ25CL0QsQ0FBQyxDQUFDb0QsY0FBYyxDQUFDLENBQUM7VUFDdEIsQ0FBQyxDQUFDO1VBRUYxSSxLQUFLLENBQUMwRCxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVM0QixDQUFDLEVBQUU7WUFDMUI5RSxTQUFTLENBQUMwRCxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUN4QixXQUFXLENBQUMsY0FBYyxDQUFDO1VBQy9ELENBQUMsQ0FBQztVQUVGN0QsQ0FBQyxDQUFDSSxNQUFNLENBQUMsQ0FBQ3lFLEVBQUUsQ0FBQyxRQUFRLEVBQUUsWUFBVztZQUM5QixJQUFJMUQsS0FBSyxDQUFDNkIsUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUFFO2NBQ2pDLElBQUlGLFFBQVEsQ0FBQ00sVUFBVSxFQUFFO2dCQUNyQnhCLG1CQUFtQixDQUFDNkksT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDcEM5SSxTQUFTLENBQUMwRCxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUN4QixXQUFXLENBQUMsY0FBYyxDQUFDO2NBQy9EO1lBQ0o7VUFDSixDQUFDLENBQUM7O1VBRUY7VUFDQTdELENBQUMsQ0FBQ0ksTUFBTSxDQUFDLENBQUNrRCxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLFlBQVc7WUFDckQsSUFBSW9ILGFBQWEsR0FBRzFLLENBQUMsQ0FBQywwQkFBMEIsQ0FBQztjQUM3QzJLLGVBQWUsR0FBRzNLLENBQUMsQ0FBQywrQkFBK0IsQ0FBQztjQUNwRDRLLGVBQWUsR0FBR0QsZUFBZSxDQUFDeEksS0FBSyxDQUFDLENBQUMsR0FBR3VJLGFBQWEsQ0FBQ3ZJLEtBQUssQ0FBQyxDQUFDO2NBQ2pFMEksVUFBVSxHQUFHN0ssQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDcUYsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBRTFEd0YsVUFBVSxDQUFDcEcsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUM7WUFFbEN6RSxDQUFDLENBQUMsc0NBQXNDLENBQUMsQ0FBQ2tGLElBQUksQ0FBQyxVQUMzQ3lELEtBQUssRUFDTEMsT0FBTyxFQUNUO2NBQ0UsSUFDSTNILE9BQU8sQ0FBQ2tCLEtBQUssQ0FBQyxDQUFDLElBQ2RuQyxDQUFDLENBQUM0SSxPQUFPLENBQUMsQ0FBQ3pHLEtBQUssQ0FBQyxDQUFDLEdBQUduQyxDQUFDLENBQUM0SSxPQUFPLENBQUMsQ0FBQ3RHLE1BQU0sQ0FBQyxDQUFDLENBQUN1RyxJQUFJLENBQUMsR0FDL0MsQ0FBQyxFQUNIO2dCQUNFN0ksQ0FBQyxDQUFDNEksT0FBTyxDQUFDLENBQUNsRixRQUFRLENBQUMsYUFBYSxDQUFDO2NBQ3RDO1lBQ0osQ0FBQyxDQUFDO1lBRUYsSUFBSWlILGVBQWUsQ0FBQ3ZJLE1BQU0sR0FBRyxDQUFDLEVBQUU7Y0FDNUIsSUFDSW5CLE9BQU8sQ0FBQ2tCLEtBQUssQ0FBQyxDQUFDLElBQ2R3SSxlQUFlLENBQUN4SSxLQUFLLENBQUMsQ0FBQyxHQUFHdUksYUFBYSxDQUFDcEksTUFBTSxDQUFDLENBQUMsQ0FBQ3VHLElBQUksQ0FBQyxHQUN2RCxDQUFDLEVBQ0g7Z0JBQ0U4QixlQUFlLENBQUNqSCxRQUFRLENBQUMsV0FBVyxDQUFDO2NBQ3pDO1lBQ0o7WUFDQW1ILFVBQVUsQ0FBQ3BHLEdBQUcsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO1VBQ2pDLENBQUMsQ0FBQztRQUNOO01BS0osQ0FBQztNQUNEa0Qsc0JBQXNCLEVBQUUsU0FBQUEsQ0FBQSxFQUFXLENBRW5DLENBQUM7TUFDREMsZUFBZSxFQUFFLFNBQUFBLENBQUEsRUFBVyxDQUFDLENBQUM7TUFDOUJDLFFBQVEsRUFBRSxTQUFBQSxDQUFBLEVBQVc7UUFDakIsSUFBSWlELFNBQVMsR0FBRzlLLENBQUMsQ0FBQyxZQUFZLENBQUM7UUFFL0IsSUFBSThLLFNBQVMsQ0FBQzFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7VUFDdEJwQyxDQUFDLENBQUNJLE1BQU0sQ0FBQyxDQUFDa0QsV0FBVyxDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxZQUFXO1lBQ3JELElBQUl5SCxjQUFjLEdBQ2RELFNBQVMsQ0FBQ3JKLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSXFKLFNBQVMsQ0FBQ3hJLE1BQU0sQ0FBQyxDQUFDLENBQUNDLEdBQUcsR0FBRyxHQUFHO1lBRWpFLElBQUl1SSxTQUFTLENBQUNySixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksTUFBTSxFQUFFO2NBQ3pDUixPQUFPLENBQUMrSixNQUFNLENBQUMsWUFBVztnQkFDdEIsSUFBSS9KLE9BQU8sQ0FBQ2lELFNBQVMsQ0FBQyxDQUFDLEdBQUc2RyxjQUFjLEVBQUU7a0JBQ3RDRCxTQUFTLENBQUNwSCxRQUFRLENBQUMsZUFBZSxDQUFDO2tCQUNuQ25DLE9BQU8sQ0FBQ21DLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDdkMsQ0FBQyxNQUFNO2tCQUNIb0gsU0FBUyxDQUFDakgsV0FBVyxDQUFDLGVBQWUsQ0FBQztrQkFDdEN0QyxPQUFPLENBQUNzQyxXQUFXLENBQUMsaUJBQWlCLENBQUM7Z0JBQzFDO2NBQ0osQ0FBQyxDQUFDO1lBQ047VUFDSixDQUFDLENBQUM7VUFFRmlILFNBQVMsQ0FBQzVGLElBQUksQ0FBQyxZQUFXO1lBQ3RCbEYsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUNGcUYsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQ3pCUixFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVc7Y0FDcEJpRyxTQUFTLENBQUNQLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQztjQUN6Q08sU0FBUyxDQUFDUCxXQUFXLENBQUMsZUFBZSxDQUFDO1lBQzFDLENBQUMsQ0FBQztVQUNWLENBQUMsQ0FBQztRQUNOO01BQ0osQ0FBQztNQUNEekMsY0FBYyxFQUFFLFNBQUFBLENBQUEsRUFBVztRQUN2QixJQUFJQSxjQUFjLEdBQUc5SCxDQUFDLENBQUMsYUFBYSxDQUFDO1FBQ3JDLElBQUk4SCxjQUFjLENBQUMxRixNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQzNCMEYsY0FBYyxDQUFDckQsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7VUFDaEN6RSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM2RSxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVc7WUFDckMxRCxLQUFLLENBQUMwQyxXQUFXLENBQUMsbUJBQW1CLENBQUM7WUFDdEM3RCxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQzZELFdBQVcsQ0FBQyxlQUFlLENBQUM7VUFDekQsQ0FBQyxDQUFDO1FBQ047UUFFQSxJQUFJb0gsVUFBVSxHQUFHakwsQ0FBQyxDQUFDLFlBQVksQ0FBQztVQUM1QmtMLGlCQUFpQixHQUFHbEwsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO1VBQ3ZDbUwsbUJBQW1CLEdBQUcsS0FBSztVQUMzQkMsY0FBYztRQUVsQkYsaUJBQWlCLENBQUNyRyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVM0QixDQUFDLEVBQUU7VUFDdENBLENBQUMsQ0FBQ29ELGNBQWMsQ0FBQyxDQUFDO1VBQ2xCLElBQUl3QixTQUFTLEdBQUcsU0FBQUEsQ0FBQSxFQUFXO1lBQ3ZCLElBQUksQ0FBQ0YsbUJBQW1CLEVBQUU7Y0FDdEJBLG1CQUFtQixHQUFHLElBQUk7Y0FDMUJySSxRQUFRLENBQUN3SSxXQUFXLEdBQUcsSUFBSTtjQUMzQkwsVUFBVSxDQUFDdkgsUUFBUSxDQUFDLFlBQVksQ0FBQztjQUNqQ3lILG1CQUFtQixHQUFHLEtBQUs7WUFDL0I7VUFDSixDQUFDO1VBQ0QsSUFBSUksVUFBVSxHQUFHLFNBQUFBLENBQUEsRUFBVztZQUN4QixJQUFJLENBQUNKLG1CQUFtQixFQUFFO2NBQ3RCQSxtQkFBbUIsR0FBRyxJQUFJO2NBQzFCckksUUFBUSxDQUFDd0ksV0FBVyxHQUFHLEtBQUs7Y0FDNUJMLFVBQVUsQ0FBQ3BILFdBQVcsQ0FBQyxZQUFZLENBQUM7Y0FDcENzSCxtQkFBbUIsR0FBRyxLQUFLO1lBQy9CO1VBQ0osQ0FBQztVQUNELElBQUksQ0FBQ3JJLFFBQVEsQ0FBQ3dJLFdBQVcsRUFBRTtZQUN2QkYsY0FBYyxHQUFHQyxTQUFTLENBQUMsQ0FBQztVQUNoQyxDQUFDLE1BQU07WUFDSEQsY0FBYyxHQUFHRyxVQUFVLENBQUMsQ0FBQztVQUNqQztRQUNKLENBQUMsQ0FBQztNQUNOLENBQUM7TUFDRHhELFFBQVEsRUFBRSxTQUFBQSxDQUFBLEVBQVc7UUFDakIsSUFBSXlELFNBQVMsR0FBR3hMLENBQUMsQ0FBQyxXQUFXLENBQUM7VUFDMUJ5TCxjQUFjLEdBQUdELFNBQVMsQ0FBQ25HLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDbEQsSUFBSW1HLFNBQVMsQ0FBQ3BKLE1BQU0sR0FBRyxDQUFDLEVBQUU7VUFDdEJxSixjQUFjLENBQUM1RyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVc7WUFDbEM0RyxjQUFjLENBQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUNsRyxXQUFXLENBQUMsU0FBUyxDQUFDO1lBQ2xEN0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDK0osTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDckcsUUFBUSxDQUFDLFNBQVMsQ0FBQztZQUN2QzFELENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQzhFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUNDLE9BQU8sQ0FBQztjQUFFYixTQUFTLEVBQUVsRSxDQUFDLENBQUNBLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3lCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDYSxNQUFNLENBQUMsQ0FBQyxDQUFDQztZQUFHLENBQUMsRUFBRTRDLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ0MsS0FBSyxFQUFFLGVBQWUsQ0FBQztZQUN2SSxPQUFPLEtBQUs7VUFDWixDQUFDLENBQUM7VUFDRkYsY0FBYyxDQUFDRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMvSCxXQUFXLENBQUMsU0FBUyxDQUFDO1VBQ25EMkgsU0FBUyxDQUNKbkcsSUFBSSxDQUFDLFdBQVcsR0FBR3JFLE9BQU8sQ0FBQ3FHLE1BQU0sQ0FBQ3dFLGNBQWMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQzFEOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUNackcsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUM1QjtNQUNKLENBQUM7TUFDRHNFLFdBQVcsRUFBRSxTQUFBQSxDQUFBLEVBQVc7UUFDcEIsSUFBSXJHLFNBQVMsQ0FBQ3FCLFFBQVEsQ0FBQyxlQUFlLENBQUMsRUFBRTtVQUNyQyxJQUFJOEksZ0JBQWdCLEdBQUcsU0FBUztVQUVoQzlMLENBQUMsQ0FBQ0ksTUFBTSxDQUFDLENBQUN5RSxFQUFFLENBQUMsUUFBUSxFQUFFLFlBQVc7WUFDOUIsSUFBSWtILGVBQWUsR0FBRy9LLE9BQU8sQ0FBQ3FHLE1BQU0sQ0FBQ3dFLGNBQWMsQ0FBQyxDQUFDO1lBQ3JEbEssU0FBUyxDQUNKMEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQ3pCdUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUNiL0gsV0FBVyxDQUFDaUksZ0JBQWdCLENBQUM7WUFDbENuSyxTQUFTLENBQ0owRCxJQUFJLENBQUMsMkJBQTJCLEdBQUcwRyxlQUFlLEdBQUcsSUFBSSxDQUFDLENBQzFEaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUNackcsUUFBUSxDQUFDb0ksZ0JBQWdCLENBQUM7VUFDbkMsQ0FBQyxDQUFDO1FBQ047TUFDSixDQUFDO01BQ0RELGNBQWMsRUFBRSxTQUFBQSxDQUFBLEVBQVc7UUFDdkIsSUFBSUcsV0FBVyxHQUFHLE1BQU07UUFDeEIzSyxRQUFRLENBQUM2RCxJQUFJLENBQUMsWUFBVztVQUNyQixJQUFJQyxJQUFJLEdBQUduRixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2RpTSxPQUFPLEdBQUc5RyxJQUFJLENBQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDO1VBQzdCLElBQ0kwRCxJQUFJLENBQUM3QyxNQUFNLENBQUMsQ0FBQyxDQUFDQyxHQUFHLEdBQUd0QixPQUFPLENBQUN1RSxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBR3ZFLE9BQU8sQ0FBQ2lELFNBQVMsQ0FBQyxDQUFDLElBQzlEaUIsSUFBSSxDQUFDN0MsTUFBTSxDQUFDLENBQUMsQ0FBQ0MsR0FBRyxHQUFHNEMsSUFBSSxDQUFDSyxNQUFNLENBQUMsQ0FBQyxHQUFHdkUsT0FBTyxDQUFDdUUsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQ3hEdkUsT0FBTyxDQUFDaUQsU0FBUyxDQUFDLENBQUMsRUFDckI7WUFDRThILFdBQVcsR0FBR0MsT0FBTztVQUN6QjtRQUNKLENBQUMsQ0FBQztRQUNGLE9BQU9ELFdBQVc7TUFDdEI7SUFDSixDQUFDO0lBQ0RoTCxPQUFPLENBQUNrTCxNQUFNLEdBQUc7TUFDYmpJLFNBQVMsRUFBRSxTQUFBQSxDQUFBLEVBQVc7UUFDbEJqRCxPQUFPLENBQUNrTCxNQUFNLENBQUNDLGFBQWEsQ0FBQyxDQUFDO1FBQzlCbkwsT0FBTyxDQUFDa0wsTUFBTSxDQUFDRSxRQUFRLENBQUMsQ0FBQztNQUM3QixDQUFDO01BQ0RELGFBQWEsRUFBRSxTQUFBQSxDQUFBLEVBQVc7UUFDdEIsSUFBSXJLLGNBQWMsQ0FBQ00sTUFBTSxHQUFHLENBQUMsRUFBRTtVQUMzQjtVQUNBLElBQUksT0FBT3BDLENBQUMsQ0FBQ3FNLEVBQUUsQ0FBQ0MsUUFBUSxLQUFLLFdBQVcsRUFBRTtZQUN0Q3RMLE9BQU8sQ0FBQzJGLFFBQVEsQ0FBQzRGLFlBQVksQ0FDekIsU0FBUyxFQUNULDhEQUE4RCxFQUM5RCxRQUNKLENBQUM7WUFDRCxPQUFPLElBQUk7VUFDZjtVQUNBLElBQUlDLGdCQUFnQixHQUFHLG1CQUFtQjtVQUUxQyxTQUFTQyxnQkFBZ0JBLENBQUNDLEtBQUssRUFBRTtZQUM3QixJQUFJQyxTQUFTLEdBQUdELEtBQUs7WUFDckJDLFNBQVMsQ0FBQ3pILElBQUksQ0FBQyxZQUFXO2NBQ3RCLElBQUkwSCxZQUFZLEdBQUc1TSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUN0QjZNLGlCQUFpQixHQUFHLE9BQU87Y0FDL0IsSUFBSTdNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3lCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFO2dCQUN2Q29MLGlCQUFpQixHQUFHN00sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDeUIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsSUFBSTtjQUNwRTtjQUNBbUwsWUFBWSxDQUFDbkksR0FBRyxDQUFDO2dCQUNiRSxPQUFPLEVBQUU7Y0FDYixDQUFDLENBQUM7Y0FDRjNFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3lFLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRW9JLGlCQUFpQixDQUFDO1lBQ3hELENBQUMsQ0FBQztZQUNGRixTQUFTLENBQUN6SCxJQUFJLENBQUMsVUFBU3lELEtBQUssRUFBRTtjQUMzQixJQUFJaUUsWUFBWSxHQUFHNU0sQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDdEI4TSxZQUFZLEdBQ1pGLFlBQVksQ0FBQ25MLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJa0gsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJO2dCQUM3RG9FLGdCQUFnQixHQUNoQkgsWUFBWSxDQUFDbkwsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUkrSyxnQkFBZ0I7Y0FDakUsSUFBSVEsQ0FBQyxHQUFHOUcsVUFBVSxDQUFDLFlBQVc7Z0JBQzFCMEcsWUFBWSxDQUFDbkksR0FBRyxDQUFDO2tCQUNiRSxPQUFPLEVBQUU7Z0JBQ2IsQ0FBQyxDQUFDO2dCQUNGaUksWUFBWSxDQUFDbEosUUFBUSxDQUFDcUosZ0JBQWdCLENBQUM7Y0FDM0MsQ0FBQyxFQUFFRCxZQUFZLENBQUM7WUFDcEIsQ0FBQyxDQUFDO1VBQ047VUFFQSxTQUFTRyxhQUFhQSxDQUFDUCxLQUFLLEVBQUU7WUFDMUIsSUFBSUMsU0FBUyxHQUFHRCxLQUFLO1lBQ3JCQyxTQUFTLENBQUN6SCxJQUFJLENBQUMsVUFBU2dJLE9BQU8sRUFBRTtjQUM3QixJQUFJQSxPQUFPLEdBQUdsTixDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNqQitNLGdCQUFnQixHQUNoQkcsT0FBTyxDQUFDekwsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUkrSyxnQkFBZ0I7Y0FDNURVLE9BQU8sQ0FBQ3JKLFdBQVcsQ0FBQ2tKLGdCQUFnQixDQUFDO2NBQ3JDRyxPQUFPLENBQUM1RSxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQy9CLENBQUMsQ0FBQztVQUNOO1VBRUEsU0FBUzZFLGFBQWFBLENBQUNoSSxJQUFJLEVBQUU7WUFDekIsSUFBSWlJLFlBQVksR0FBR2pJLElBQUksQ0FBQ0UsSUFBSSxDQUFDLG9CQUFvQixDQUFDO2NBQzlDZ0ksb0JBQW9CLEdBQUdELFlBQVksQ0FBQ3BLLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDNUQsSUFBSXFLLG9CQUFvQixFQUFFO2NBQ3RCbkgsVUFBVSxDQUFDLFlBQVc7Z0JBQ2xCa0gsWUFBWSxDQUFDL0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDM0IsUUFBUSxDQUFDLHFCQUFxQixDQUFDO2NBQ3JFLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDWDtVQUNKO1VBRUEsU0FBUzRKLFlBQVlBLENBQUNuSSxJQUFJLEVBQUU7WUFDeEIsSUFBSW9JLGVBQWUsR0FBR3BJLElBQUksQ0FBQ0UsSUFBSSxDQUFDLDBCQUEwQixDQUFDO1lBQzNEa0ksZUFBZSxDQUNWbEksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUNwQnhCLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQztVQUMzQztVQUVBLFNBQVMySixVQUFVQSxDQUFDckksSUFBSSxFQUFFO1lBQ3RCLElBQUlzSSxpQkFBaUIsR0FBR3RJLElBQUksQ0FBQ0UsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1lBQ3ZELElBQ0lvSSxpQkFBaUIsQ0FBQ3pLLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFDeENGLFFBQVEsQ0FBQ0csa0JBQWtCLEVBQzdCO2NBQ0UxQixPQUFPLENBQUNzQyxXQUFXLENBQUMsTUFBTSxDQUFDO2NBQzNCZixRQUFRLENBQUNLLGVBQWUsR0FBRyxJQUFJO2NBQy9CTCxRQUFRLENBQUNJLHNCQUFzQixHQUFHLElBQUk7WUFDMUMsQ0FBQyxNQUFNO2NBQ0hKLFFBQVEsQ0FBQ0ssZUFBZSxHQUFHLEtBQUs7Y0FDaEMsSUFDSUwsUUFBUSxDQUFDSSxzQkFBc0IsSUFDL0JKLFFBQVEsQ0FBQ0csa0JBQWtCLElBQzNCLENBQUM5QixLQUFLLENBQUM2QixRQUFRLENBQUMsZUFBZSxDQUFDLElBQ2hDLENBQUN6QixPQUFPLENBQUN5QixRQUFRLENBQUMsZUFBZSxDQUFDLEVBQ3BDO2dCQUNFekIsT0FBTyxDQUFDbUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztjQUM1QjtZQUNKO1VBQ0o7VUFFQSxTQUFTZ0ssWUFBWUEsQ0FBQ3ZJLElBQUksRUFBRXdJLEtBQUssRUFBRTtZQUMvQixJQUFJeEksSUFBSTtjQUNKeUksWUFBWSxHQUFHck0sT0FBTyxDQUFDZ0UsV0FBVyxDQUFDLENBQUM7Y0FDcENzSSxZQUFZLEdBQUd2TSxPQUFPLENBQUNpRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUM7Y0FDekN1SSxZQUFZLEdBQUc3TSxPQUFPLENBQUN1RSxNQUFNLENBQUMsQ0FBQztjQUMvQnVJLG1CQUFtQixHQUFHNUksSUFBSSxDQUFDSyxNQUFNLENBQUMsQ0FBQztjQUNuQ3dJLGlCQUFpQixHQUFHSixZQUFZLEdBQUdDLFlBQVk7Y0FDL0NKLGlCQUFpQixHQUFHdEksSUFBSSxDQUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDO2NBQ3ZDNEksZ0JBQWdCLEdBQUc5SSxJQUFJLENBQUNuQyxRQUFRLENBQUMsbUJBQW1CLENBQUM7Y0FDckRrTCxXQUFXLEdBQUcvSSxJQUFJLENBQUNuQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRztjQUMxRG1MLGlCQUFpQixHQUFHNU0sT0FBTyxDQUFDRSxJQUFJLENBQUMsa0JBQWtCLENBQUM7Y0FDcEQ0QyxZQUFZLEdBQUdjLElBQUksQ0FBQzFELElBQUksQ0FBQyxhQUFhLENBQUM7Y0FDdkMyTSxrQkFBa0IsR0FBR2pKLElBQUksQ0FBQzFELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztjQUNoRDRNLG1CQUFtQixHQUFHbEosSUFBSSxDQUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUNpSixLQUFLLENBQUMsQ0FBQyxDQUFDL0ksV0FBVyxDQUFDLENBQUM7Y0FDbkVnSixXQUFXO1lBRWYsSUFBSUYsbUJBQW1CLElBQUlQLFlBQVksRUFBRTtjQUNyQ1MsV0FBVyxHQUFHLElBQUk7Y0FDbEIsSUFBSUMsZUFBZSxHQUFHSCxtQkFBbUI7Y0FDekNsSixJQUFJLENBQUNWLEdBQUcsQ0FBQyxZQUFZLEVBQUUrSixlQUFlLEdBQUcsR0FBRyxDQUFDO2NBQzdDZixpQkFBaUIsQ0FBQ2hKLEdBQUcsQ0FBQyxZQUFZLEVBQUUrSixlQUFlLEdBQUcsR0FBRyxDQUFDO2NBQzFEckosSUFBSSxDQUNDRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FDMUJaLEdBQUcsQ0FBQyxZQUFZLEVBQUUrSixlQUFlLEdBQUcsR0FBRyxDQUFDO1lBQ2pEO1lBRUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQztZQUU1QixTQUFTQSxvQkFBb0JBLENBQUNqSixNQUFNLEVBQUU7Y0FDbEMsSUFBSUEsTUFBTSxJQUFJLE1BQU0sRUFBRTtnQkFDbEJMLElBQUksQ0FBQ1YsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7Z0JBQ3RCZ0osaUJBQWlCLENBQUNoSixHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztnQkFDbkNVLElBQUksQ0FBQ0UsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUNaLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDO2NBQ3JELENBQUMsTUFBTTtnQkFDSFUsSUFBSSxDQUFDVixHQUFHLENBQUMsUUFBUSxFQUFFZSxNQUFNLENBQUM7Z0JBQzFCaUksaUJBQWlCLENBQUNoSixHQUFHLENBQUMsUUFBUSxFQUFFZSxNQUFNLENBQUM7Z0JBQ3ZDTCxJQUFJLENBQUNFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDWixHQUFHLENBQUMsUUFBUSxFQUFFZSxNQUFNLENBQUM7Y0FDekQ7WUFDSjtZQUNBLElBQUluQixZQUFZLEVBQUU7Y0FDZHJFLENBQUMsQ0FBQ0ksTUFBTSxDQUFDLENBQUNrRCxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLFlBQVc7Z0JBQ3JEbUwsb0JBQW9CLENBQUNwSyxZQUFZLEdBQUcsSUFBSSxDQUFDO2NBQzdDLENBQUMsQ0FBQztZQUNOO1lBQ0EsSUFBSStKLGtCQUFrQixFQUFFO2NBQ3BCcE8sQ0FBQyxDQUFDSSxNQUFNLENBQUMsQ0FBQ2tELFdBQVcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLFlBQVc7Z0JBQy9DbUwsb0JBQW9CLENBQUNMLGtCQUFrQixHQUFHLElBQUksQ0FBQztjQUNuRCxDQUFDLENBQUM7WUFDTjtVQUNKO1VBQ0F0TSxjQUFjLENBQUNvRCxJQUFJLENBQUMsWUFBVztZQUMzQixJQUFJQyxJQUFJLEdBQUduRixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2xCO1lBQ0FtRixJQUFJLENBQUN1RyxPQUFPLEdBQUc7Y0FDWGdELFlBQVksRUFBRXZKLElBQUksQ0FBQzFELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxRQUFRO2NBQ2hEa04sZUFBZSxFQUFFeEosSUFBSSxDQUFDeUosSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssR0FBRyxLQUFLLEdBQUcsSUFBSTtjQUM1REMsUUFBUSxFQUFFMUosSUFBSSxDQUFDeUosSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssR0FBRyxLQUFLLEdBQUcsSUFBSTtjQUNuREUsSUFBSSxFQUFFM0osSUFBSSxDQUFDeUosSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztjQUM5Q0csU0FBUyxFQUFFNUosSUFBSSxDQUFDeUosSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztjQUNuREksVUFBVSxFQUFFN0osSUFBSSxDQUFDeUosSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztjQUMzREssVUFBVSxFQUFFOUosSUFBSSxDQUFDeUosSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssR0FBRyxLQUFLLEdBQUcsSUFBSTtjQUNyRE0sVUFBVSxFQUFFL0osSUFBSSxDQUFDeUosSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztjQUMzRE8sUUFBUSxFQUFFaEssSUFBSSxDQUFDMUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLElBQUk7Y0FDNUMyTixvQkFBb0IsRUFBRWpLLElBQUksQ0FBQ3lKLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7Y0FDcEVTLGNBQWMsRUFBRWxLLElBQUksQ0FBQ3lKLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSztjQUNyRVUsUUFBUSxFQUFFbkssSUFBSSxDQUFDMUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksS0FBSztjQUMvQzhOLGtCQUFrQixFQUFFcEssSUFBSSxDQUFDMUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksSUFBSTtjQUN4RCtOLFFBQVEsRUFBRXJLLElBQUksQ0FBQzFELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxHQUFHO2NBQzNDZ08sWUFBWSxFQUFFdEssSUFBSSxDQUFDMUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQztjQUNsRGlPLGFBQWEsRUFBRXZLLElBQUksQ0FBQ3lKLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7Y0FDaEVlLGNBQWMsRUFBRXhLLElBQUksQ0FBQ3lKLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUs7Y0FDbEUzSSxNQUFNLEVBQUVkLElBQUksQ0FBQ3lKLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUs7Y0FDcERnQixTQUFTLEVBQUV6SyxJQUFJLENBQUMxRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksTUFBTTtjQUM1Q29PLGNBQWMsRUFBRTFLLElBQUksQ0FBQzFELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEtBQUssR0FBRyxLQUFLLEdBQUc7WUFDMUUsQ0FBQzs7WUFJRDtZQUNBMEQsSUFBSSxDQUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUNILElBQUksQ0FBQyxZQUFXO2NBQ2hDLElBQUlsRixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNnRCxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQzlCLElBQUk4TSxTQUFTLEdBQUc5UCxDQUFDLENBQUMsSUFBSSxDQUFDO2tCQUNuQitQLGNBQWMsR0FBR0QsU0FBUyxDQUN6QnJMLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUN2QnVMLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLENBQUMsQ0FDaENBLE9BQU8sQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDO2dCQUUvQixJQUFJRixTQUFTLENBQUNyTyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUU7a0JBQ2pDc08sY0FBYyxHQUFHRCxTQUFTLENBQUNyTyxJQUFJLENBQUMsZUFBZSxDQUFDO2dCQUNwRDtnQkFDQXFPLFNBQVMsQ0FBQ3RHLE9BQU8sQ0FDYix1REFBdUQsR0FDdkR1RyxjQUFjLEdBQ2QsV0FDSixDQUFDO2NBQ0w7WUFDSixDQUFDLENBQUM7WUFDRjVLLElBQUksQ0FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDSCxJQUFJLENBQUMsWUFBVztjQUN0QyxJQUFJLENBQUMrSyxLQUFLLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUM7WUFDRmpRLENBQUMsQ0FBQ0ksTUFBTSxDQUFDLENBQUNrRCxXQUFXLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxZQUFXO2NBQy9DNkIsSUFBSSxDQUFDdUcsT0FBTyxDQUFDcUQsU0FBUyxHQUFHLElBQUk7WUFDakMsQ0FBQyxDQUFDO1lBRUYsSUFBSTVKLElBQUksQ0FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDakQsTUFBTSxJQUFJLENBQUMsRUFBRTtjQUNqQytDLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ2lELGVBQWUsR0FBRyxLQUFLO2NBQ3BDeEosSUFBSSxDQUFDdUcsT0FBTyxDQUFDbUQsUUFBUSxHQUFHLEtBQUs7Y0FDN0IxSixJQUFJLENBQUN1RyxPQUFPLENBQUN5RCxRQUFRLEdBQUcsS0FBSztjQUM3QmhLLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ3FELFNBQVMsR0FBRyxLQUFLO1lBQ2xDO1lBRUEsSUFBSSxDQUFDL08sQ0FBQyxDQUFDa1EsU0FBUyxDQUFDL0ssSUFBSSxDQUFDdUcsT0FBTyxDQUFDeUQsUUFBUSxDQUFDLElBQ25DaEssSUFBSSxDQUFDdUcsT0FBTyxDQUFDeUQsUUFBUSxJQUFJLEtBQUssRUFDaEM7Y0FDRWhLLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ3lELFFBQVEsR0FBR3BJLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDeEM7WUFFQSxJQUFJL0YsT0FBTyxDQUFDZ0QsSUFBSSxDQUFDRyxTQUFTLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRTtjQUNsQ2dCLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ3pGLE1BQU0sR0FBRyxJQUFJO1lBQzlCO1lBRUF5SCxZQUFZLENBQUN2SSxJQUFJLENBQUM7WUFFbEIsSUFBSWdMLGlCQUFpQixHQUFHaEwsSUFBSSxDQUFDbUgsUUFBUSxDQUFDO2NBQ2xDb0MsWUFBWSxFQUFFdkosSUFBSSxDQUFDdUcsT0FBTyxDQUFDZ0QsWUFBWTtjQUN2Q0MsZUFBZSxFQUFFeEosSUFBSSxDQUFDdUcsT0FBTyxDQUFDaUQsZUFBZTtjQUM3Q0UsUUFBUSxFQUFFMUosSUFBSSxDQUFDdUcsT0FBTyxDQUFDbUQsUUFBUTtjQUMvQkMsSUFBSSxFQUFFM0osSUFBSSxDQUFDdUcsT0FBTyxDQUFDb0QsSUFBSTtjQUN2QkMsU0FBUyxFQUFFNUosSUFBSSxDQUFDdUcsT0FBTyxDQUFDcUQsU0FBUztjQUNqQ0MsVUFBVSxFQUFFN0osSUFBSSxDQUFDdUcsT0FBTyxDQUFDc0QsVUFBVTtjQUNuQ0MsVUFBVSxFQUFFOUosSUFBSSxDQUFDdUcsT0FBTyxDQUFDdUQsVUFBVTtjQUNuQ0MsVUFBVSxFQUFFL0osSUFBSSxDQUFDdUcsT0FBTyxDQUFDd0QsVUFBVTtjQUNuQ0MsUUFBUSxFQUFFcEksTUFBTSxDQUFDNUIsSUFBSSxDQUFDdUcsT0FBTyxDQUFDeUQsUUFBUSxDQUFDO2NBQ3ZDQyxvQkFBb0IsRUFBRWpLLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQzBELG9CQUFvQjtjQUN2REMsY0FBYyxFQUFFbEssSUFBSSxDQUFDdUcsT0FBTyxDQUFDMkQsY0FBYztjQUMzQ0MsUUFBUSxFQUFFbkssSUFBSSxDQUFDdUcsT0FBTyxDQUFDNEQsUUFBUTtjQUMvQkMsa0JBQWtCLEVBQUV4SSxNQUFNLENBQUM1QixJQUFJLENBQUN1RyxPQUFPLENBQUM2RCxrQkFBa0IsQ0FBQztjQUMzREMsUUFBUSxFQUFFckssSUFBSSxDQUFDdUcsT0FBTyxDQUFDOEQsUUFBUTtjQUMvQkMsWUFBWSxFQUFFdEssSUFBSSxDQUFDdUcsT0FBTyxDQUFDK0QsWUFBWTtjQUN2Q0MsYUFBYSxFQUFFdkssSUFBSSxDQUFDdUcsT0FBTyxDQUFDZ0UsYUFBYTtjQUN6Q0MsY0FBYyxFQUFFeEssSUFBSSxDQUFDdUcsT0FBTyxDQUFDaUUsY0FBYztjQUMzQzFKLE1BQU0sRUFBRWQsSUFBSSxDQUFDdUcsT0FBTyxDQUFDekYsTUFBTTtjQUMzQjJKLFNBQVMsRUFBRXpLLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ2tFLFNBQVM7Y0FDakNRLFdBQVcsRUFBRXBQLE9BQU8sQ0FBQ2dELElBQUksQ0FBQ0csU0FBUyxDQUFDLENBQUM7Y0FDckNVLEVBQUUsRUFBRTtnQkFDQW5FLEtBQUssRUFBRSxTQUFBQSxDQUFTaUksS0FBSyxFQUFFO2tCQUNuQixJQUFJZ0UsU0FBUyxHQUFHeEgsSUFBSSxDQUFDRSxJQUFJLENBQ3JCLHdDQUNKLENBQUM7a0JBQ0RtSSxVQUFVLENBQUNySSxJQUFJLENBQUM7a0JBQ2hCdUksWUFBWSxDQUFDdkksSUFBSSxDQUFDO2tCQUNsQmdJLGFBQWEsQ0FBQ2hJLElBQUksQ0FBQztrQkFDbkJzSCxnQkFBZ0IsQ0FBQ0UsU0FBUyxDQUFDO2tCQUMzQnpHLFVBQVUsQ0FBQyxZQUFXO29CQUNsQmYsSUFBSSxDQUNDRSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FDdENILElBQUksQ0FBQyxVQUFTbUwsQ0FBQyxFQUFFQyxLQUFLLEVBQUU7c0JBQ3JCQSxLQUFLLENBQUNMLEtBQUssQ0FBQyxDQUFDO3NCQUNiSyxLQUFLLENBQUNDLFdBQVcsR0FBRyxDQUFDO29CQUN6QixDQUFDLENBQUM7a0JBQ1YsQ0FBQyxFQUFFLEdBQUcsQ0FBQztnQkFDWDtjQUNKO1lBQ0osQ0FBQyxDQUFDO1lBRUYsSUFBSUMsS0FBSyxHQUFHTCxpQkFBaUIsQ0FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUM7WUFFOUMsU0FBUzZCLGNBQWNBLENBQUEsRUFBRztjQUN0QixJQUFJRCxLQUFLLENBQUNFLE1BQU0sQ0FBQy9DLEtBQUssSUFBSSxTQUFTLEVBQUU7Z0JBQ2pDZ0QsZUFBZSxDQUFDLENBQUM7Z0JBQ2pCO2NBQ0o7Y0FFQSxJQUFJQyxRQUFRLEdBQUdKLEtBQUssQ0FBQ0ssYUFBYSxJQUFJTCxLQUFLLENBQUNNLE1BQU0sQ0FBQzFPLE1BQU0sR0FBRyxDQUFDO2NBQzdELElBQUl3TyxRQUFRLEVBQUU7Z0JBQ1ZELGVBQWUsQ0FBQyxDQUFDO2NBQ3JCO1lBQ0o7WUFFQSxTQUFTQSxlQUFlQSxDQUFBLEVBQUc7Y0FDdkJ4TCxJQUFJLENBQUNtSCxRQUFRLENBQUMsWUFBWSxDQUFDO2NBQzNCbkgsSUFBSSxDQUFDUCxHQUFHLENBQUMsaUJBQWlCLEVBQUU2TCxjQUFjLENBQUM7WUFDL0M7WUFFQU4saUJBQWlCLENBQUN0TCxFQUFFLENBQUMsaUJBQWlCLEVBQUUsWUFBVztjQUMvQyxJQUFJOEgsU0FBUyxHQUFHeEgsSUFBSSxDQUFDRSxJQUFJLENBQUMsd0NBQXdDLENBQUM7Y0FDbkU0SCxhQUFhLENBQUNOLFNBQVMsQ0FBQztjQUN4QnpHLFVBQVUsQ0FBQyxZQUFXO2dCQUNsQm9ILFlBQVksQ0FBQ25JLElBQUksQ0FBQztjQUN0QixDQUFDLEVBQUUsSUFBSSxDQUFDO2NBQ1JnSSxhQUFhLENBQUNoSSxJQUFJLENBQUM7Y0FDbkJzSCxnQkFBZ0IsQ0FBQ0UsU0FBUyxDQUFDO2NBQzNCeEgsSUFBSSxDQUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUNILElBQUksQ0FBQyxVQUFTbUwsQ0FBQyxFQUFFQyxLQUFLLEVBQUU7Z0JBQzlDQSxLQUFLLENBQUNDLFdBQVcsR0FBRyxDQUFDO2NBQ3pCLENBQUMsQ0FBQztZQUNOLENBQUMsQ0FBQztZQUVGSixpQkFBaUIsQ0FBQ3RMLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxZQUFXO2NBQy9DO2NBQ0EsSUFBSThILFNBQVMsR0FBR3hILElBQUksQ0FBQ0UsSUFBSSxDQUFDLHdDQUF3QyxDQUFDO2NBQ25FbUksVUFBVSxDQUFDckksSUFBSSxDQUFDO2NBQ2hCdUksWUFBWSxDQUFDdkksSUFBSSxDQUFDO2NBQ2xCZ0ksYUFBYSxDQUFDaEksSUFBSSxDQUFDO2NBQ25Cc0gsZ0JBQWdCLENBQUNFLFNBQVMsQ0FBQztjQUMzQixJQUFJMkQsS0FBSyxHQUFHRSxLQUFLLENBQUNPLGVBQWUsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztjQUN4RCxJQUFJVixLQUFLLEVBQUU7Z0JBQ1BBLEtBQUssQ0FBQ1csSUFBSSxDQUFDLENBQUM7Z0JBQ1pULEtBQUssQ0FBQzlFLE9BQU8sQ0FBQ3lELFFBQVEsR0FBR3BJLE1BQU0sQ0FBQ3VKLEtBQUssQ0FBQ3RHLFFBQVEsR0FBRyxJQUFJLENBQUM7Y0FDMUQsQ0FBQyxNQUFNO2dCQUNId0csS0FBSyxDQUFDOUUsT0FBTyxDQUFDeUQsUUFBUSxHQUFHcEksTUFBTSxDQUFDNUIsSUFBSSxDQUFDdUcsT0FBTyxDQUFDeUQsUUFBUSxDQUFDO2NBQzFEO2NBRUEsSUFBSWhLLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ3VELFVBQVUsSUFBSSxLQUFLLEVBQUU7Z0JBQ2xDd0IsY0FBYyxDQUFDLENBQUM7Y0FDcEI7WUFFSixDQUFDLENBQUM7WUFDRk4saUJBQWlCLENBQUN0TCxFQUFFLENBQUMsb0JBQW9CLEVBQUUsWUFBVztjQUNsRCxJQUFJOEgsU0FBUyxHQUFHeEgsSUFBSSxDQUFDRSxJQUFJLENBQ3JCLDhDQUNKLENBQUM7Y0FDRDRILGFBQWEsQ0FBQ04sU0FBUyxDQUFDO1lBQzVCLENBQUMsQ0FBQztZQUNGM00sQ0FBQyxDQUFDSSxNQUFNLENBQUMsQ0FBQzZGLE1BQU0sQ0FBQyxZQUFXO2NBQ3hCeUgsWUFBWSxDQUFDdkksSUFBSSxDQUFDO2NBQ2xCQSxJQUFJLENBQUNtSCxRQUFRLENBQUMsWUFBWSxDQUFDO1lBQy9CLENBQUMsQ0FBQztVQUNOLENBQUMsQ0FBQztRQUNOO01BQ0osQ0FBQztNQUNERixRQUFRLEVBQUUsU0FBQUEsQ0FBU2pILElBQUksRUFBRTtRQUNyQixJQUFJQSxJQUFJLEVBQUU7VUFDTnBELFNBQVMsR0FBR29ELElBQUk7UUFDcEI7UUFFQSxJQUFJcEQsU0FBUyxDQUFDSyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQ3RCO1VBQ0EsSUFBSSxPQUFPcEMsQ0FBQyxDQUFDcU0sRUFBRSxDQUFDQyxRQUFRLEtBQUssV0FBVyxFQUFFO1lBQ3RDdEwsT0FBTyxDQUFDMkYsUUFBUSxDQUFDNEYsWUFBWSxDQUN6QixTQUFTLEVBQ1QsdURBQXVELEVBQ3ZELFFBQ0osQ0FBQztZQUNELE9BQU8sSUFBSTtVQUNmO1VBQ0F4SyxTQUFTLENBQUNtRCxJQUFJLENBQUMsWUFBVztZQUN0QixJQUFJQyxJQUFJLEdBQUduRixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2xCO1lBQ0FtRixJQUFJLENBQUN1RyxPQUFPLEdBQUc7Y0FDWHdGLGNBQWMsRUFBRS9MLElBQUksQ0FBQ2hELEtBQUssQ0FBQyxDQUFDO2NBQzVCZ1AsS0FBSyxFQUFFaE0sSUFBSSxDQUFDMUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7Y0FDbkMyUCxPQUFPLEVBQUVqTSxJQUFJLENBQUMxRCxJQUFJLENBQUMsZUFBZSxDQUFDO2NBQ25DNFAsT0FBTyxFQUFFbE0sSUFBSSxDQUFDMUQsSUFBSSxDQUFDLGVBQWUsQ0FBQztjQUNuQzZQLE9BQU8sRUFBRW5NLElBQUksQ0FBQzFELElBQUksQ0FBQyxlQUFlLENBQUM7Y0FDbkM4UCxPQUFPLEVBQUVwTSxJQUFJLENBQUMxRCxJQUFJLENBQUMsZUFBZSxDQUFDO2NBQ25DK1AsTUFBTSxFQUFFck0sSUFBSSxDQUFDMUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7Y0FDdENpTixZQUFZLEVBQUV2SixJQUFJLENBQUMxRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSztjQUM3Q2tOLGVBQWUsRUFBRXhKLElBQUksQ0FBQ3lKLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUk7Y0FDNURDLFFBQVEsRUFBRTFKLElBQUksQ0FBQ3lKLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUk7Y0FDbkRFLElBQUksRUFBRTNKLElBQUksQ0FBQ3lKLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7Y0FDOUNHLFNBQVMsRUFBRTVKLElBQUksQ0FBQ3lKLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUk7Y0FDcERJLFVBQVUsRUFBRTdKLElBQUksQ0FBQ3lKLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7Y0FDM0RLLFVBQVUsRUFBRTlKLElBQUksQ0FBQ3lKLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUk7Y0FDckRNLFVBQVUsRUFBRS9KLElBQUksQ0FBQ3lKLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7Y0FDM0RPLFFBQVEsRUFBRWhLLElBQUksQ0FBQzFELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxJQUFJO2NBQzVDMk4sb0JBQW9CLEVBQUVqSyxJQUFJLENBQUN5SixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJO2NBQ3RFVSxRQUFRLEVBQUVuSyxJQUFJLENBQUMxRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxLQUFLO2NBQy9DZ1EsUUFBUSxFQUFFdE0sSUFBSSxDQUFDeUosSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztjQUN2RGEsWUFBWSxFQUFFdEssSUFBSSxDQUFDMUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQztjQUNsRGlPLGFBQWEsRUFBRXZLLElBQUksQ0FBQ3lKLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7Y0FDaEVTLGNBQWMsRUFBRWxLLElBQUksQ0FBQ3lKLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztjQUNuRThDLFNBQVMsRUFBRXZNLElBQUksQ0FBQ3lKLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7Y0FDekRlLGNBQWMsRUFBRXhLLElBQUksQ0FBQ3lKLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUk7Y0FDakUzSSxNQUFNLEVBQUVkLElBQUksQ0FBQ3lKLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUk7Y0FDbkRnQixTQUFTLEVBQUV6SyxJQUFJLENBQUMxRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksTUFBTTtjQUM1Q2tRLE9BQU8sRUFBRXhNLElBQUksQ0FBQ3lKLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUk7Y0FDckR3QixXQUFXLEVBQUVwUCxPQUFPLENBQUNnRCxJQUFJLENBQUNHLFNBQVMsQ0FBQztZQUN4QyxDQUFDOztZQUVEO1lBQ0FnQixJQUFJLENBQUN1RyxPQUFPLENBQUMwRixPQUFPLEdBQ2hCak0sSUFBSSxDQUFDdUcsT0FBTyxDQUFDMEYsT0FBTyxJQUNwQlEsSUFBSSxDQUFDQyxHQUFHLENBQUM5SyxNQUFNLENBQUM1QixJQUFJLENBQUN1RyxPQUFPLENBQUN5RixLQUFLLENBQUMsRUFBRXBLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRDVCLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQzJGLE9BQU8sR0FDaEJsTSxJQUFJLENBQUN1RyxPQUFPLENBQUMyRixPQUFPLElBQ3BCTyxJQUFJLENBQUNDLEdBQUcsQ0FBQzlLLE1BQU0sQ0FBQzVCLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQzBGLE9BQU8sQ0FBQyxFQUFFckssTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JENUIsSUFBSSxDQUFDdUcsT0FBTyxDQUFDNEYsT0FBTyxHQUNoQm5NLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQzRGLE9BQU8sSUFDcEJNLElBQUksQ0FBQ0MsR0FBRyxDQUFDOUssTUFBTSxDQUFDNUIsSUFBSSxDQUFDdUcsT0FBTyxDQUFDMkYsT0FBTyxDQUFDLEVBQUV0SyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckQ1QixJQUFJLENBQUN1RyxPQUFPLENBQUM2RixPQUFPLEdBQ2hCcE0sSUFBSSxDQUFDdUcsT0FBTyxDQUFDNkYsT0FBTyxJQUNwQkssSUFBSSxDQUFDQyxHQUFHLENBQUM5SyxNQUFNLENBQUM1QixJQUFJLENBQUN1RyxPQUFPLENBQUM0RixPQUFPLENBQUMsRUFBRXZLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRCxJQUFJK0ssb0JBQW9CO1lBRXhCLFNBQVNDLGtCQUFrQkEsQ0FBQSxFQUFHO2NBQzFCLFFBQVEvUixDQUFDLENBQUNJLE1BQU0sQ0FBQyxDQUFDa0QsV0FBVyxDQUFDLGVBQWUsQ0FBQztnQkFDMUMsS0FBSyxJQUFJO2tCQUNMd08sb0JBQW9CLEdBQUcvSyxNQUFNLENBQUM1QixJQUFJLENBQUN1RyxPQUFPLENBQUM2RixPQUFPLENBQUM7a0JBQ25EO2dCQUNKLEtBQUssSUFBSTtrQkFDTE8sb0JBQW9CLEdBQUcvSyxNQUFNLENBQUM1QixJQUFJLENBQUN1RyxPQUFPLENBQUM0RixPQUFPLENBQUM7a0JBQ25EO2dCQUNKLEtBQUssSUFBSTtrQkFDTFEsb0JBQW9CLEdBQUcvSyxNQUFNLENBQUM1QixJQUFJLENBQUN1RyxPQUFPLENBQUMyRixPQUFPLENBQUM7a0JBQ25EO2dCQUNKLEtBQUssSUFBSTtrQkFDTFMsb0JBQW9CLEdBQUcvSyxNQUFNLENBQUM1QixJQUFJLENBQUN1RyxPQUFPLENBQUMwRixPQUFPLENBQUM7a0JBQ25EO2dCQUNKLEtBQUssSUFBSTtrQkFDTFUsb0JBQW9CLEdBQUcvSyxNQUFNLENBQUM1QixJQUFJLENBQUN1RyxPQUFPLENBQUN5RixLQUFLLENBQUM7a0JBQ2pEO2NBQ1I7WUFDSjtZQUNBWSxrQkFBa0IsQ0FBQyxDQUFDO1lBQ3BCLElBQUlDLFNBQVM7WUFDYjdNLElBQUksQ0FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDNE0sSUFBSSxDQUFDLGtDQUFrQyxDQUFDO1lBQ3pELElBQUk5TSxJQUFJLENBQUNuQyxRQUFRLENBQUMsZUFBZSxDQUFDLEVBQUU7Y0FDaENtQyxJQUFJLENBQUN1RyxPQUFPLENBQUNpRSxjQUFjLEdBQUcsS0FBSztjQUNuQzNPLE9BQU8sQ0FBQ2dELElBQUksQ0FBQ0ssWUFBWSxDQUFDYyxJQUFJLENBQUM7Y0FDL0JuRSxPQUFPLENBQUNnRCxJQUFJLENBQUNLLFlBQVksQ0FBQ2MsSUFBSSxDQUFDRSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztjQUMzRCxJQUFJNk0sMEJBQTBCLEdBQUcsSUFBSTtZQUN6QztZQUNBLElBQUluTCxNQUFNLENBQUM1QixJQUFJLENBQUN1RyxPQUFPLENBQUN5RixLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7Y0FDbEMsSUFBSWhNLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ2dHLFNBQVMsSUFBSVEsMEJBQTBCLEVBQUU7Z0JBQ3REL00sSUFBSSxDQUFDRSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQ1osR0FBRyxDQUFDO2tCQUNqQyxlQUFlLEVBQUVVLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQzhGLE1BQU0sR0FBRztnQkFDM0MsQ0FBQyxDQUFDO2NBQ04sQ0FBQyxNQUFNO2dCQUNIUSxTQUFTLEdBQ0wsQ0FBQzdNLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ3dGLGNBQWMsR0FBR25LLE1BQU0sQ0FBQzVCLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQzhGLE1BQU0sQ0FBQyxJQUMxRE0sb0JBQW9CO2dCQUN4QjNNLElBQUksQ0FBQ0UsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUNaLEdBQUcsQ0FBQztrQkFDakN0QyxLQUFLLEVBQUU2UCxTQUFTO2tCQUNoQixlQUFlLEVBQUU3TSxJQUFJLENBQUN1RyxPQUFPLENBQUM4RixNQUFNLEdBQUc7Z0JBQzNDLENBQUMsQ0FBQztjQUNOO1lBQ0osQ0FBQyxNQUFNO2NBQ0hyTSxJQUFJLENBQUNFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDWixHQUFHLENBQUM7Z0JBQ2pDdEMsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsZUFBZSxFQUFFO2NBQ3JCLENBQUMsQ0FBQztZQUNOO1lBQ0EsSUFBSWdELElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ2dHLFNBQVMsSUFBSVEsMEJBQTBCLEVBQUU7Y0FDdEQvTSxJQUFJLENBQUN1RyxPQUFPLENBQUNrRSxTQUFTLEdBQUcsUUFBUTtZQUNyQztZQUVBLElBQUl6SyxJQUFJLENBQUN1RyxPQUFPLENBQUN5RCxRQUFRLElBQUksT0FBTyxFQUFFO2NBQ2xDaEssSUFBSSxDQUFDdUcsT0FBTyxDQUFDeUQsUUFBUSxHQUFHLEtBQUs7WUFDakM7WUFFQSxJQUFJLENBQUNuUCxDQUFDLENBQUNrUSxTQUFTLENBQUMvSyxJQUFJLENBQUN1RyxPQUFPLENBQUN5RCxRQUFRLENBQUMsSUFDbkNoSyxJQUFJLENBQUN1RyxPQUFPLENBQUN5RCxRQUFRLElBQUksS0FBSyxFQUNoQztjQUNFaEssSUFBSSxDQUFDdUcsT0FBTyxDQUFDeUQsUUFBUSxHQUFHcEksTUFBTSxDQUFDLElBQUksQ0FBQztZQUN4Qzs7WUFFQTtZQUNBLElBQUlvTCxhQUFhLEdBQUduUyxDQUFDLENBQUNtRixJQUFJLENBQUM7WUFDM0JnTixhQUFhLENBQUNDLFlBQVksQ0FBQyxZQUFXO2NBQ2xDO2NBQ0FELGFBQWEsQ0FBQzdGLFFBQVEsQ0FBQztnQkFDbkJvQyxZQUFZLEVBQUV2SixJQUFJLENBQUN1RyxPQUFPLENBQUNnRCxZQUFZO2dCQUN2Q0MsZUFBZSxFQUFFeEosSUFBSSxDQUFDdUcsT0FBTyxDQUFDaUQsZUFBZTtnQkFDN0NFLFFBQVEsRUFBRTFKLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ21ELFFBQVE7Z0JBQy9CQyxJQUFJLEVBQUUzSixJQUFJLENBQUN1RyxPQUFPLENBQUNvRCxJQUFJO2dCQUN2QkMsU0FBUyxFQUFFNUosSUFBSSxDQUFDdUcsT0FBTyxDQUFDcUQsU0FBUztnQkFDakNDLFVBQVUsRUFBRTdKLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ3NELFVBQVU7Z0JBQ25DQyxVQUFVLEVBQUU5SixJQUFJLENBQUN1RyxPQUFPLENBQUN1RCxVQUFVO2dCQUNuQ0MsVUFBVSxFQUFFL0osSUFBSSxDQUFDdUcsT0FBTyxDQUFDd0QsVUFBVTtnQkFDbkNDLFFBQVEsRUFBRXBJLE1BQU0sQ0FBQzVCLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ3lELFFBQVEsQ0FBQztnQkFDdkNDLG9CQUFvQixFQUFFakssSUFBSSxDQUFDdUcsT0FBTyxDQUFDMEQsb0JBQW9CO2dCQUN2REMsY0FBYyxFQUFFbEssSUFBSSxDQUFDdUcsT0FBTyxDQUFDMkQsY0FBYztnQkFDM0NDLFFBQVEsRUFBRW5LLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQzRELFFBQVE7Z0JBQy9CRyxZQUFZLEVBQUV0SyxJQUFJLENBQUN1RyxPQUFPLENBQUMrRCxZQUFZO2dCQUN2Q0MsYUFBYSxFQUFFdkssSUFBSSxDQUFDdUcsT0FBTyxDQUFDZ0UsYUFBYTtnQkFDekNDLGNBQWMsRUFBRXhLLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ2lFLGNBQWM7Z0JBQzNDMUosTUFBTSxFQUFFZCxJQUFJLENBQUN1RyxPQUFPLENBQUN6RixNQUFNO2dCQUMzQjJKLFNBQVMsRUFBRXpLLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ2tFLFNBQVM7Z0JBQ2pDUSxXQUFXLEVBQUVqTCxJQUFJLENBQUN1RyxPQUFPLENBQUMwRSxXQUFXO2dCQUNyQ3VCLE9BQU8sRUFBRXhNLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ2lHO2NBQzFCLENBQUMsQ0FBQztjQUNGeE0sSUFBSSxDQUFDekIsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1lBQ3BDLENBQUMsQ0FBQztZQUNGLElBQUl5QixJQUFJLENBQUNuQyxRQUFRLENBQUMsZUFBZSxDQUFDLEVBQUU7Y0FDaENoQyxPQUFPLENBQUNnRCxJQUFJLENBQUNLLFlBQVksQ0FBQ2MsSUFBSSxDQUFDO1lBQ25DO1lBQ0EsSUFBSTRCLE1BQU0sQ0FBQzVCLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ3lGLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtjQUNsQ25SLENBQUMsQ0FBQ0ksTUFBTSxDQUFDLENBQUN5RSxFQUFFLENBQUMsUUFBUSxFQUFFLFlBQVc7Z0JBQzlCcUIsVUFBVSxDQUFDLFlBQVc7a0JBQ2xCNkwsa0JBQWtCLENBQUMsQ0FBQztrQkFDcEJDLFNBQVMsR0FDTCxDQUFDN00sSUFBSSxDQUFDaEQsS0FBSyxDQUFDLENBQUMsR0FBRzRFLE1BQU0sQ0FBQzVCLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQzhGLE1BQU0sQ0FBQyxJQUMzQ00sb0JBQW9CO2tCQUN4QixJQUFJM00sSUFBSSxDQUFDdUcsT0FBTyxDQUFDZ0csU0FBUyxJQUFJUSwwQkFBMEIsRUFBRTtvQkFDdEQvTSxJQUFJLENBQUNFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDWixHQUFHLENBQUM7c0JBQ2pDLGVBQWUsRUFBRVUsSUFBSSxDQUFDdUcsT0FBTyxDQUFDOEYsTUFBTSxHQUFHO29CQUMzQyxDQUFDLENBQUM7a0JBQ04sQ0FBQyxNQUFNO29CQUNILElBQUksQ0FBQ3JNLElBQUksQ0FBQ25DLFFBQVEsQ0FBQyxlQUFlLENBQUMsRUFBRTtzQkFDakNtQyxJQUFJLENBQUNFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDWixHQUFHLENBQUM7d0JBQ2pDdEMsS0FBSyxFQUFFNlAsU0FBUzt3QkFDaEIsZUFBZSxFQUFFN00sSUFBSSxDQUFDdUcsT0FBTyxDQUFDOEYsTUFBTSxHQUFHO3NCQUMzQyxDQUFDLENBQUM7b0JBQ04sQ0FBQyxNQUFNO3NCQUNIeFEsT0FBTyxDQUFDZ0QsSUFBSSxDQUFDSyxZQUFZLENBQUNjLElBQUksQ0FBQ0UsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7c0JBQzNERixJQUFJLENBQUNFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDWixHQUFHLENBQUM7d0JBQ2pDdEMsS0FBSyxFQUFFNlAsU0FBUzt3QkFDaEIsZUFBZSxFQUFFN00sSUFBSSxDQUFDdUcsT0FBTyxDQUFDOEYsTUFBTSxHQUFHO3NCQUMzQyxDQUFDLENBQUM7b0JBQ047a0JBQ0o7a0JBQ0FyTSxJQUFJLENBQUNFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDWixHQUFHLENBQUM7b0JBQzlCLGNBQWMsRUFDVixDQUFDVSxJQUFJLENBQUN1RyxPQUFPLENBQUM4RixNQUFNLEdBQUdNLG9CQUFvQixHQUFHO2tCQUN0RCxDQUFDLENBQUM7a0JBQ0YzTSxJQUFJLENBQUNtSCxRQUFRLENBQUMsUUFBUSxDQUFDO2tCQUN2Qm5ILElBQUksQ0FBQ21ILFFBQVEsQ0FBQyxZQUFZLENBQUM7Z0JBQy9CLENBQUMsRUFBRSxHQUFHLENBQUM7Y0FDWCxDQUFDLENBQUM7WUFDTjtVQUNKLENBQUMsQ0FBQztRQUNOO01BQ0o7SUFDSixDQUFDO0lBQ0R0TCxPQUFPLENBQUMyRixRQUFRLEdBQUc7TUFDZjFDLFNBQVMsRUFBRSxTQUFBQSxDQUFBLEVBQVc7UUFDbEJqRCxPQUFPLENBQUMyRixRQUFRLENBQUNDLFlBQVksQ0FBQyxDQUFDO1FBQy9CNUYsT0FBTyxDQUFDMkYsUUFBUSxDQUFDMEwsSUFBSSxDQUFDLENBQUM7UUFDdkJyUixPQUFPLENBQUMyRixRQUFRLENBQUMyTCxRQUFRLENBQUMsQ0FBQztRQUMzQnRSLE9BQU8sQ0FBQzJGLFFBQVEsQ0FBQzRMLE9BQU8sQ0FBQyxDQUFDO1FBQzFCdlIsT0FBTyxDQUFDMkYsUUFBUSxDQUFDNkwsU0FBUyxDQUFDLENBQUM7UUFDNUJ4UixPQUFPLENBQUMyRixRQUFRLENBQUM4TCxVQUFVLENBQUMsQ0FBQztRQUM3QnpSLE9BQU8sQ0FBQzJGLFFBQVEsQ0FBQytMLFFBQVEsQ0FBQyxDQUFDO1FBQzNCMVIsT0FBTyxDQUFDMkYsUUFBUSxDQUFDZ00sZUFBZSxDQUFDLENBQUM7UUFDbEMzUixPQUFPLENBQUMyRixRQUFRLENBQUNpTSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ25DNVIsT0FBTyxDQUFDMkYsUUFBUSxDQUFDa00sY0FBYyxDQUFDLENBQUM7UUFDakM3UixPQUFPLENBQUMyRixRQUFRLENBQUNtTSxXQUFXLENBQUMsQ0FBQztRQUM5QjlSLE9BQU8sQ0FBQzJGLFFBQVEsQ0FBQ29NLFFBQVEsQ0FBQyxDQUFDO1FBQzNCO1FBQ0EvUixPQUFPLENBQUMyRixRQUFRLENBQUNxTSxVQUFVLENBQUMsQ0FBQztRQUM3QmhTLE9BQU8sQ0FBQzJGLFFBQVEsQ0FBQ3NNLE9BQU8sQ0FBQyxDQUFDO1FBQzFCalMsT0FBTyxDQUFDMkYsUUFBUSxDQUFDdU0sT0FBTyxDQUFDLENBQUM7UUFDMUJsUyxPQUFPLENBQUMyRixRQUFRLENBQUN3TSxhQUFhLENBQUMsQ0FBQztRQUNoQ25TLE9BQU8sQ0FBQzJGLFFBQVEsQ0FBQ3lNLFFBQVEsQ0FBQyxDQUFDO1FBQzNCcFMsT0FBTyxDQUFDMkYsUUFBUSxDQUFDME0sV0FBVyxDQUFDLENBQUM7UUFDOUJyUyxPQUFPLENBQUMyRixRQUFRLENBQUMyTSxLQUFLLENBQUMsQ0FBQztRQUN4QnRTLE9BQU8sQ0FBQzJGLFFBQVEsQ0FBQzRNLFlBQVksQ0FBQyxDQUFDO1FBQy9CdlMsT0FBTyxDQUFDMkYsUUFBUSxDQUFDNk0sU0FBUyxDQUFDLENBQUM7UUFDNUJ4UyxPQUFPLENBQUMyRixRQUFRLENBQUM4TSxlQUFlLENBQUMsQ0FBQztRQUNsQ3pTLE9BQU8sQ0FBQzJGLFFBQVEsQ0FBQytNLFNBQVMsQ0FBQyxDQUFDO1FBQzVCMVMsT0FBTyxDQUFDMkYsUUFBUSxDQUFDZ04sS0FBSyxDQUFDLENBQUM7UUFDeEIzUyxPQUFPLENBQUMyRixRQUFRLENBQUNpTixlQUFlLENBQUMsQ0FBQztRQUNsQzVTLE9BQU8sQ0FBQzJGLFFBQVEsQ0FBQ2tOLEtBQUssQ0FBQyxDQUFDO1FBQ3hCN1MsT0FBTyxDQUFDMkYsUUFBUSxDQUFDbU4sY0FBYyxDQUFDLENBQUM7UUFDakM5UyxPQUFPLENBQUMyRixRQUFRLENBQUNvTixrQkFBa0IsQ0FBQyxDQUFDO1FBQ3JDL1MsT0FBTyxDQUFDMkYsUUFBUSxDQUFDcU4sV0FBVyxDQUFDLENBQUM7UUFDOUJoVCxPQUFPLENBQUMyRixRQUFRLENBQUNzTixNQUFNLENBQUMsQ0FBQztRQUN6QmpULE9BQU8sQ0FBQzJGLFFBQVEsQ0FBQ3VOLFFBQVEsQ0FBQyxDQUFDO01BQy9CLENBQUM7TUFDREwsS0FBSyxFQUFFLFNBQUFBLENBQUEsRUFBVztRQUNkO1FBQ0EsSUFBSU0saUJBQWlCLEdBQUduVSxDQUFDLENBQUMscUJBQXFCLENBQUM7UUFDaEQsSUFBSW1VLGlCQUFpQixDQUFDL1IsTUFBTSxHQUFHLENBQUMsRUFBRTtVQUM5QitSLGlCQUFpQixDQUFDalAsSUFBSSxDQUFDLFlBQVc7WUFDOUIsSUFBSUMsSUFBSSxHQUFHbkYsQ0FBQyxDQUFDLElBQUksQ0FBQztjQUNkb1UsUUFBUSxHQUFHLFVBQVU7Y0FDckJDLGNBQWMsR0FBRyxjQUFjO2NBQy9CQyxnQkFBZ0IsR0FBR25QLElBQUksQ0FBQ0UsSUFBSSxDQUFDLHFCQUFxQixDQUFDO2NBQ25Ea1AsU0FBUyxHQUFHcFAsSUFBSSxDQUFDcVAsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUN0Q3JQLElBQUksQ0FBQ0UsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUNaLEdBQUcsQ0FBQztjQUNqQ2dRLE1BQU0sRUFBRTtZQUNaLENBQUMsQ0FBQztZQUNGSCxnQkFBZ0IsQ0FBQ3pQLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBUzlELEtBQUssRUFBRTtjQUN6Q0EsS0FBSyxDQUFDOEksY0FBYyxDQUFDLENBQUM7Y0FDdEIsSUFBSTFFLElBQUksQ0FBQ3FQLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQy9TLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLEVBQUU7Z0JBQy9DOFMsU0FBUyxDQUFDOVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUM7Z0JBQ2xDNlMsZ0JBQWdCLENBQUN6USxXQUFXLENBQUN1USxRQUFRLENBQUM7Z0JBQ3RDRSxnQkFBZ0IsQ0FBQzVRLFFBQVEsQ0FBQzJRLGNBQWMsQ0FBQztjQUM3QyxDQUFDLE1BQU0sSUFBSWxQLElBQUksQ0FBQ3FQLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQy9TLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxVQUFVLEVBQUU7Z0JBQzFEOFMsU0FBUyxDQUFDOVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7Z0JBQzlCNlMsZ0JBQWdCLENBQUM1USxRQUFRLENBQUMwUSxRQUFRLENBQUM7Z0JBQ25DRSxnQkFBZ0IsQ0FBQ3pRLFdBQVcsQ0FBQ3dRLGNBQWMsQ0FBQztjQUNoRDtZQUNKLENBQUMsQ0FBQztVQUNOLENBQUMsQ0FBQztRQUNOOztRQUVBO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtNQUNZLENBQUM7O01BQ0RQLGNBQWMsRUFBRSxTQUFBQSxDQUFBLEVBQVc7UUFDdkIsSUFBSUQsS0FBSyxHQUFHcFQsUUFBUSxDQUFDaVUsc0JBQXNCLENBQUMsa0JBQWtCLENBQUM7UUFDL0QsSUFBSUMsVUFBVSxHQUFHQyxLQUFLLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNsQixLQUFLLEVBQUUsVUFBU21CLElBQUksRUFBRTtVQUMvREEsSUFBSSxDQUFDbFUsZ0JBQWdCLENBQ2pCLFFBQVEsRUFDUixVQUFTQyxLQUFLLEVBQUU7WUFDWixJQUFJaVUsSUFBSSxDQUFDQyxhQUFhLENBQUMsQ0FBQyxLQUFLLEtBQUssRUFBRTtjQUNoQ2xVLEtBQUssQ0FBQzhJLGNBQWMsQ0FBQyxDQUFDO2NBQ3RCOUksS0FBSyxDQUFDeUosZUFBZSxDQUFDLENBQUM7WUFDM0I7WUFDQXdLLElBQUksQ0FBQ0UsU0FBUyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO1VBQ3ZDLENBQUMsRUFDRCxLQUNKLENBQUM7UUFDTCxDQUFDLENBQUM7TUFDTixDQUFDO01BRURwQixrQkFBa0IsRUFBRSxTQUFBQSxDQUFBLEVBQVc7UUFDM0IsSUFBSXFCLFNBQVMsR0FBR3BWLENBQUMsQ0FDYixrRUFDSixDQUFDO1FBQ0QsSUFBSW9WLFNBQVMsQ0FBQ2hULE1BQU0sR0FBRyxDQUFDLEVBQUU7VUFDdEJnVCxTQUFTLENBQUNsUSxJQUFJLENBQUMsWUFBVztZQUN0QixJQUFJQyxJQUFJLEdBQUduRixDQUFDLENBQUMsSUFBSSxDQUFDO2NBQ2RxVixzQkFBc0IsR0FBR2xRLElBQUksQ0FBQzFELElBQUksQ0FBQyxtQkFBbUIsQ0FBQztZQUMzRCxJQUFJNlQsTUFBTSxHQUFHblEsSUFBSSxDQUFDRSxJQUFJLENBQUMsb0JBQW9CLENBQUM7Y0FDeENrUSxVQUFVLEdBQUdELE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLENBQUM7WUFFOUIsSUFBSWIsVUFBVSxHQUFHQyxLQUFLLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUM1UCxJQUFJLEVBQUUsVUFBUzZQLElBQUksRUFBRTtjQUM5REEsSUFBSSxDQUFDbFUsZ0JBQWdCLENBQ2pCLFFBQVEsRUFDUixVQUFTQyxLQUFLLEVBQUU7Z0JBQ1osSUFBSWlVLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsYUFBYSxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7a0JBQ25DbFUsS0FBSyxDQUFDOEksY0FBYyxDQUFDLENBQUM7a0JBQ3RCOUksS0FBSyxDQUFDeUosZUFBZSxDQUFDLENBQUM7Z0JBQzNCO2dCQUNBd0ssSUFBSSxDQUFDRSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7Z0JBQ25DLE9BQU8sS0FBSztjQUNoQixDQUFDLEVBQ0QsS0FDSixDQUFDO1lBQ0wsQ0FBQyxDQUFDO1lBRUZoUSxJQUFJLENBQUNzUSxNQUFNLENBQUMsVUFBUzFVLEtBQUssRUFBRTtjQUN4QkEsS0FBSyxDQUFDOEksY0FBYyxDQUFDLENBQUM7Y0FDdEIsSUFBSTZMLFFBQVEsR0FBRzFWLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3lCLElBQUksQ0FBQyxRQUFRLENBQUM7Y0FDckMsSUFBSWtVLGNBQWMsR0FBRzNWLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3lCLElBQUksQ0FBQyxRQUFRLENBQUM7Y0FFM0MsSUFBSTBELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzhQLGFBQWEsQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFFO2dCQUNuQ2xVLEtBQUssQ0FBQ3lKLGVBQWUsQ0FBQyxDQUFDO2dCQUN2QnJGLElBQUksQ0FBQ3pCLFFBQVEsQ0FBQyxlQUFlLENBQUM7Y0FDbEMsQ0FBQyxNQUFNO2dCQUNIMUQsQ0FBQyxDQUFDbUYsSUFBSSxDQUFDLENBQUN0QixXQUFXLENBQUMsZUFBZSxDQUFDO2dCQUNwQ3lSLE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLGlEQUFpRCxDQUFDO2dCQUM5RHhWLENBQUMsQ0FBQzRWLElBQUksQ0FBQztrQkFDSEMsR0FBRyxFQUFFSCxRQUFRO2tCQUNiSSxJQUFJLEVBQUVILGNBQWM7a0JBQ3BCL0csSUFBSSxFQUFFLElBQUltSCxRQUFRLENBQUMsSUFBSSxDQUFDO2tCQUN4QkMsS0FBSyxFQUFFLEtBQUs7a0JBQ1pDLFdBQVcsRUFBRSxLQUFLO2tCQUNsQkMsV0FBVyxFQUFFLEtBQUs7a0JBQ2xCQyxPQUFPLEVBQUUsU0FBQUEsQ0FBU0MsSUFBSSxFQUFFO29CQUNwQixJQUFJQSxJQUFJLENBQUNDLFFBQVEsSUFBSSxTQUFTLEVBQUU7c0JBQzVCLElBQUlsUixJQUFJLENBQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQ21QLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQ3BTLE1BQU0sR0FBRyxDQUFDLEVBQUU7d0JBQ3REa1UsVUFBVSxDQUFDQyxLQUFLLENBQUMsQ0FBQztzQkFDdEI7c0JBQ0F2VyxDQUFDLENBQUNtRixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ29SLEtBQUssQ0FBQyxDQUFDO3NCQUNsQmpCLE1BQU0sQ0FBQ0UsSUFBSSxDQUFDRCxVQUFVLENBQUM7c0JBQ3ZCLElBQUlGLHNCQUFzQixFQUFFO3dCQUN4QmpWLE1BQU0sQ0FBQ29XLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHcEIsc0JBQXNCO3NCQUNqRCxDQUFDLE1BQU07d0JBQ0hyVixDQUFDLENBQUMwVyxNQUFNLENBQUM7MEJBQ0xDLE9BQU8sRUFBRVAsSUFBSSxDQUFDTzt3QkFDbEIsQ0FBQyxFQUFFOzBCQUNDYixJQUFJLEVBQUUsU0FBUzswQkFDZmMsS0FBSyxFQUFFelIsSUFBSSxDQUFDMUQsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUk7d0JBQ3RELENBQUMsQ0FBQztzQkFDTjtvQkFDSixDQUFDLE1BQU07c0JBQ0gsSUFBSTBELElBQUksQ0FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDbVAsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDcFMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDdERrVSxVQUFVLENBQUNDLEtBQUssQ0FBQyxDQUFDO3NCQUN0QjtzQkFDQXZXLENBQUMsQ0FBQzBXLE1BQU0sQ0FBQzt3QkFDTEMsT0FBTyxFQUFFeFIsSUFBSSxDQUFDMUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUkyVSxJQUFJLENBQUNPO3NCQUNyRCxDQUFDLEVBQUU7d0JBQ0NiLElBQUksRUFBRSxRQUFRO3dCQUNkYyxLQUFLLEVBQUV6UixJQUFJLENBQUMxRCxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSTtzQkFDcEQsQ0FBQyxDQUFDO3NCQUNGLElBQUl1TCxDQUFDLEdBQUc5RyxVQUFVLENBQUMsWUFBVzt3QkFDMUJvUCxNQUFNLENBQUNFLElBQUksQ0FBQ0QsVUFBVSxDQUFDO3NCQUMzQixDQUFDLEVBQUUsSUFBSSxDQUFDO29CQUNaO2tCQUNKO2dCQUNKLENBQUMsQ0FBQztjQUNOO1lBQ0osQ0FBQyxDQUFDO1VBQ04sQ0FBQyxDQUFDO1FBQ047TUFDSixDQUFDO01BQ0R0QixNQUFNLEVBQUUsU0FBQUEsQ0FBQSxFQUFXO1FBQ2Y7TUFBQSxDQUNIO01BQ0RELFdBQVcsRUFBRSxTQUFBQSxDQUFBLEVBQVc7UUFDcEIsSUFBSTZDLFlBQVksR0FBRzdXLENBQUMsQ0FBQyxlQUFlLENBQUM7UUFDckMsSUFBSTZXLFlBQVksQ0FBQ3pVLE1BQU0sR0FBRyxDQUFDLEVBQUU7VUFDekJ5VSxZQUFZLENBQUMzUixJQUFJLENBQUMsWUFBVztZQUN6QixJQUFJQyxJQUFJLEdBQUduRixDQUFDLENBQUMsSUFBSSxDQUFDO2NBQ2Q4VyxTQUFTLEdBQUczUixJQUFJLENBQUMxRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxRQUFRO2NBQ25Ec1YsZ0JBQWdCLEdBQUc1UixJQUFJLENBQUMxRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRTtjQUNqRHVWLFdBQVcsR0FBRzdSLElBQUksQ0FBQzFELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxLQUFLO2NBQ2pEa0UsVUFBVSxHQUFHUixJQUFJLENBQUNJLFdBQVcsQ0FBQyxDQUFDO2NBQy9CMFIsU0FBUyxHQUFHOVIsSUFBSSxDQUFDK1IsVUFBVSxDQUFDLENBQUM7O1lBRWpDO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO1lBR3dCalcsT0FBTyxDQUFDK0osTUFBTSxDQUFDLFlBQVc7Y0FDdEIsSUFBSXhHLFlBQVksR0FBR3JELEtBQUssQ0FBQ00sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7Y0FDbEQsSUFBSVIsT0FBTyxDQUFDaUQsU0FBUyxDQUFDLENBQUMsR0FBR00sWUFBWSxFQUFFO2dCQUNwQ1csSUFBSSxDQUFDVixHQUFHLENBQUNxUyxTQUFTLEVBQUUsTUFBTSxDQUFDO2NBQy9CLENBQUMsTUFBTTtnQkFDSDNSLElBQUksQ0FBQ1YsR0FBRyxDQUFDcVMsU0FBUyxFQUFFLENBQUNuUixVQUFVLEdBQUcsSUFBSSxDQUFDO2NBQzNDO1lBQ0osQ0FBQyxDQUFDO1VBQ04sQ0FBQyxDQUFDO1FBQ047TUFDSixDQUFDO01BQ0RnTyxLQUFLLEVBQUUsU0FBQUEsQ0FBU3dELE9BQU8sRUFBRTtRQUNyQjtRQUNBLElBQUlDLFVBQVUsR0FBRyxJQUFJdlcsUUFBUSxDQUFDO1VBQzFCd1csaUJBQWlCLEVBQUUsT0FBTztVQUMxQkMsWUFBWSxFQUFFO1FBQ2xCLENBQUMsQ0FBQztRQUVGLElBQUl0WCxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUNvQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQzlCcEMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDa0YsSUFBSSxDQUFDLFlBQVc7WUFDOUIsSUFBSUMsSUFBSSxHQUFHbkYsQ0FBQyxDQUFDLElBQUksQ0FBQztjQUNkdVgsZUFBZSxHQUFHcFMsSUFBSSxDQUFDMUQsSUFBSSxDQUFDLFlBQVksQ0FBQztjQUN6QytWLHFCQUFxQixHQUFHclMsSUFBSSxDQUFDMUQsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUNwRDBELElBQUksQ0FBQ04sRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFXO2NBQ3hCLElBQUkwUyxlQUFlLEVBQUU7Z0JBQ2pCLElBQUlDLHFCQUFxQixFQUFFO2tCQUN2QnhYLENBQUMsQ0FBQ3dYLHFCQUFxQixDQUFDLENBQUNqTixXQUFXLENBQUNnTixlQUFlLENBQUM7Z0JBQ3pELENBQUMsTUFBTTtrQkFDSHBTLElBQUksQ0FBQ29GLFdBQVcsQ0FBQ2dOLGVBQWUsQ0FBQztnQkFDckM7Y0FDSjtjQUNBcFMsSUFBSSxDQUFDb0YsV0FBVyxDQUFDLGVBQWUsQ0FBQztjQUNqQyxPQUFPLEtBQUs7WUFDaEIsQ0FBQyxDQUFDO1VBQ04sQ0FBQyxDQUFDO1FBQ047UUFDQTtRQUNBLElBQUlrTixVQUFVLEdBQUd6WCxDQUFDLENBQUMsYUFBYSxDQUFDO1FBQ2pDLElBQUl5WCxVQUFVLENBQUNyVixNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQ3ZCcVYsVUFBVSxDQUFDdlMsSUFBSSxDQUFDLFlBQVc7WUFDdkIsSUFBSUMsSUFBSSxHQUFHbkYsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUVsQm1GLElBQUksQ0FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDUixFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVc7Y0FDcENNLElBQUksQ0FBQ29GLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQztjQUNuQyxPQUFPLEtBQUs7WUFDaEIsQ0FBQyxDQUFDO1lBRUYsSUFBSXRKLE9BQU8sQ0FBQ2tCLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHZ0QsSUFBSSxDQUFDN0MsTUFBTSxDQUFDLENBQUMsQ0FBQ3VHLElBQUksRUFBRTtjQUMxQzFELElBQUksQ0FBQ3pCLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQztZQUN0QztVQUNKLENBQUMsQ0FBQztRQUNOOztRQUVBO1FBQ0EsSUFBSWdVLFNBQVMsR0FBRzFYLENBQUMsQ0FBQyxZQUFZLENBQUM7UUFDL0IsSUFBSTBYLFNBQVMsQ0FBQ3RWLE1BQU0sR0FBRyxDQUFDLEVBQUU7VUFDdEJzVixTQUFTLENBQUN4UyxJQUFJLENBQUMsWUFBVztZQUN0QixJQUFJQyxJQUFJLEdBQUduRixDQUFDLENBQUMsSUFBSSxDQUFDO2NBQ2QyWCxRQUFRLEdBQUd4UyxJQUFJLENBQUMxRCxJQUFJLENBQUMsV0FBVyxDQUFDO2NBQ2pDbVcsUUFBUSxHQUFHelMsSUFBSSxDQUFDMUQsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUVyQzBELElBQUksQ0FBQ04sRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFXO2NBQ3hCN0UsQ0FBQyxDQUFDMlgsUUFBUSxDQUFDLENBQUNFLElBQUksQ0FBQyxDQUFDO2NBQ2xCN1gsQ0FBQyxDQUFDNFgsUUFBUSxDQUFDLENBQUNFLElBQUksQ0FBQyxDQUFDO2NBQ2xCLE9BQU8sS0FBSztZQUNoQixDQUFDLENBQUM7VUFDTixDQUFDLENBQUM7UUFDTjtNQUNKLENBQUM7TUFDRHpGLElBQUksRUFBRSxTQUFBQSxDQUFBLEVBQVc7UUFFYixJQUFJbE4sSUFBSSxHQUFHbkYsQ0FBQyxDQUFDLDZGQUE2RixDQUFDO1FBQUM7UUFFNUdtRixJQUFJLENBQUNOLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBVztVQUV4QjtVQUNBTSxJQUFJLENBQUN1RyxPQUFPLEdBQUc7WUFDWHFNLFNBQVMsRUFBRTVTLElBQUksQ0FBQzFELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFO1lBQ3pDbU0sWUFBWSxFQUFFekksSUFBSSxDQUFDMUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQztZQUNsRGtLLEtBQUssRUFBRXhHLElBQUksQ0FBQzFELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJO1lBQ3RDK0QsTUFBTSxFQUFFTCxJQUFJLENBQUNLLE1BQU0sQ0FBQztVQUN4QixDQUFDO1VBR0R4RixDQUFDLENBQUNJLE1BQU0sQ0FBQyxDQUFDa0QsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsWUFBVztZQUMvQyxJQUFJUixRQUFRLENBQUNNLFVBQVUsRUFBRTtjQUNyQnhCLG1CQUFtQixDQUFDNkksT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUN4QztZQUNBLElBQUlsSixPQUFPLENBQUNFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLElBQUksRUFBRTtjQUNoRDBELElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ2tDLFlBQVksR0FBR3JNLE9BQU8sQ0FBQ2lFLE1BQU0sQ0FBQyxDQUFDO1lBQ2hEO1VBQ0osQ0FBQyxDQUFDO1VBQ0Z4RixDQUFDLENBQUNJLE1BQU0sQ0FBQyxDQUFDa0QsV0FBVyxDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxZQUFXO1lBQ3JELElBQUkvQixPQUFPLENBQUNhLE1BQU0sR0FBRyxDQUFDLEVBQUU7Y0FDcEIrQyxJQUFJLENBQUN1RyxPQUFPLENBQUNrQyxZQUFZLEdBQUdyTSxPQUFPLENBQUNpRSxNQUFNLENBQUMsQ0FBQztZQUNoRDtVQUNKLENBQUMsQ0FBQztVQUNGLElBQUl4RixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUNvQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzVCK0MsSUFBSSxDQUFDdUcsT0FBTyxDQUFDcU0sU0FBUyxHQUFHLEVBQUU7VUFDL0I7VUFFQS9YLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQzhFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUNDLE9BQU8sQ0FBQztZQUFFYixTQUFTLEVBQUVsRSxDQUFDLENBQUNBLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3lCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDYSxNQUFNLENBQUMsQ0FBQyxDQUFDQyxHQUFHLElBQUk0QyxJQUFJLENBQUN1RyxPQUFPLENBQUNrQyxZQUFZLEdBQUd6SSxJQUFJLENBQUN1RyxPQUFPLENBQUNxTSxTQUFTO1VBQUcsQ0FBQyxFQUFFNVMsSUFBSSxDQUFDdUcsT0FBTyxDQUFDQyxLQUFLLEVBQUUsZUFBZSxDQUFDO1VBQzNMLE9BQU8sS0FBSztRQUNoQixDQUFDLENBQUM7TUFDTixDQUFDO01BQ0QyRyxRQUFRLEVBQUUsU0FBQUEsQ0FBQSxFQUFXO1FBQ2pCLElBQUkwRixZQUFZLEdBQUdoWSxDQUFDLENBQUMsZUFBZSxDQUFDO1FBQ3JDLElBQUlnWSxZQUFZLENBQUM1VixNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQ3pCO1VBQ0EsSUFBSSxPQUFPcEMsQ0FBQyxDQUFDcU0sRUFBRSxDQUFDNEwsUUFBUSxLQUFLLFdBQVcsRUFBRTtZQUN0Q2pYLE9BQU8sQ0FBQzJGLFFBQVEsQ0FBQzRGLFlBQVksQ0FDekIsU0FBUyxFQUNULHVEQUF1RCxFQUN2RCxRQUNKLENBQUM7WUFDRCxPQUFPLElBQUk7VUFDZjtVQUNBeUwsWUFBWSxDQUFDOVMsSUFBSSxDQUFDLFlBQVc7WUFDekIsSUFBSUMsSUFBSSxHQUFHbkYsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNsQjtZQUNBbUYsSUFBSSxDQUFDdUcsT0FBTyxHQUFHO2NBQ1h3TSxjQUFjLEVBQUUsV0FBVztjQUMzQkMsU0FBUyxFQUFFaFQsSUFBSSxDQUFDMUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLFFBQVE7Y0FDaEQyVyxTQUFTLEVBQUVqVCxJQUFJLENBQUMxRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxHQUFHO2NBQzdDa0ssS0FBSyxFQUFFeEcsSUFBSSxDQUFDMUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUk7Y0FDdEMrRCxNQUFNLEVBQUVMLElBQUksQ0FBQ0ssTUFBTSxDQUFDO1lBQ3hCLENBQUM7WUFDREwsSUFBSSxDQUFDVixHQUFHLENBQUM7Y0FDTCxZQUFZLEVBQUVVLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ2xHO1lBQy9CLENBQUMsQ0FBQztZQUNGO1lBQ0FMLElBQUksQ0FBQzhTLFFBQVEsQ0FBQztjQUNWRSxTQUFTLEVBQUVoVCxJQUFJLENBQUN1RyxPQUFPLENBQUN3TSxjQUFjLEdBQUcvUyxJQUFJLENBQUN1RyxPQUFPLENBQUN5TSxTQUFTO2NBQy9EQyxTQUFTLEVBQUVqVCxJQUFJLENBQUN1RyxPQUFPLENBQUMwTSxTQUFTO2NBQ2pDek0sS0FBSyxFQUFFNUUsTUFBTSxDQUFDNUIsSUFBSSxDQUFDdUcsT0FBTyxDQUFDQyxLQUFLO1lBQ3BDLENBQUMsQ0FBQztVQUNOLENBQUMsQ0FBQztRQUNOO01BQ0osQ0FBQztNQUNENEcsT0FBTyxFQUFFLFNBQUFBLENBQUEsRUFBVztRQUNoQjtRQUNBLElBQUl2UyxDQUFDLENBQUMsd0JBQXdCLENBQUMsRUFBRTtVQUM3QkEsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUNrRixJQUFJLENBQUMsWUFBVztZQUM1QyxJQUFJQyxJQUFJLEdBQUduRixDQUFDLENBQUMsSUFBSSxDQUFDO2NBQ2RpWCxTQUFTLEdBQUc5UixJQUFJLENBQUMxRCxJQUFJLENBQUMsWUFBWSxDQUFDO2NBQ25DNFcsZ0JBQWdCO1lBQ3BCLFFBQVEsSUFBSTtjQUNSLEtBQUtsVCxJQUFJLENBQUNuQyxRQUFRLENBQUMsUUFBUSxDQUFDO2dCQUN4QnFWLGdCQUFnQixHQUFHLElBQUk7Z0JBQ3ZCO2NBQ0osS0FBS2xULElBQUksQ0FBQ25DLFFBQVEsQ0FBQyxRQUFRLENBQUM7Z0JBQ3hCcVYsZ0JBQWdCLEdBQUcsSUFBSTtnQkFDdkI7Y0FDSixLQUFLbFQsSUFBSSxDQUFDbkMsUUFBUSxDQUFDLFFBQVEsQ0FBQztnQkFDeEJxVixnQkFBZ0IsR0FBRyxJQUFJO2dCQUN2QjtjQUNKO2dCQUNJQSxnQkFBZ0IsR0FBRyxJQUFJO2dCQUN2QjtZQUNSO1lBQ0FsVCxJQUFJLENBQUNtVCxLQUFLLENBQ04sWUFBVztjQUNQdFksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDeUUsR0FBRyxDQUFDLE9BQU8sRUFBRXdTLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDMUMsQ0FBQyxFQUNELFlBQVc7Y0FDUGpYLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3lFLEdBQUcsQ0FBQyxPQUFPLEVBQUU0VCxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7WUFDakQsQ0FDSixDQUFDO1VBQ0wsQ0FBQyxDQUFDO1FBQ047TUFDSixDQUFDO01BQ0Q3RixTQUFTLEVBQUUsU0FBQUEsQ0FBQSxFQUFXO1FBQ2xCLElBQUkrRixhQUFhLEdBQUcsV0FBVztVQUMzQkMsVUFBVSxHQUFHLFFBQVE7VUFDckJDLGFBQWEsR0FBRyxTQUFTO1VBQ3pCQyxVQUFVLEdBQUcsV0FBVztVQUN4QkMsU0FBUyxHQUFHLFVBQVU7VUFDdEJDLFdBQVcsR0FBRyxZQUFZO1VBQzFCQyxLQUFLLEdBQUc3WSxDQUFDLENBQUMsR0FBRyxHQUFHeVksYUFBYSxDQUFDO1FBQ2xDSSxLQUFLLENBQUN6VyxNQUFNLEtBQ1B5VyxLQUFLLENBQUMzVCxJQUFJLENBQUMsWUFBVztVQUNmLElBQUk0VCxLQUFLLEdBQUc5WSxDQUFDLENBQUMsSUFBSSxDQUFDO1VBQ25COFksS0FBSyxDQUFDOVYsUUFBUSxDQUFDMFYsVUFBVSxDQUFDLEdBQ3RCSSxLQUFLLENBQUNwVixRQUFRLENBQUNnVixVQUFVLENBQUMsR0FDMUJJLEtBQUssQ0FBQ3pULElBQUksQ0FBQyxHQUFHLEdBQUd1VCxXQUFXLENBQUMsQ0FBQ2YsSUFBSSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLEVBQ0Y3WCxDQUFDLENBQUMsR0FBRyxHQUFHMlksU0FBUyxDQUFDLENBQUM5VCxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVM0QixDQUFDLEVBQUU7VUFDdkMsSUFBSXNTLEtBQUssR0FBRy9ZLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDZjhZLEtBQUssR0FBR0MsS0FBSyxDQUFDbk4sT0FBTyxDQUFDLEdBQUcsR0FBRzZNLGFBQWEsQ0FBQztZQUMxQ08sSUFBSSxHQUFHRixLQUFLLENBQUNsTixPQUFPLENBQUMsR0FBRyxHQUFHMk0sYUFBYSxDQUFDO1VBQzdDTyxLQUFLLENBQUM5VixRQUFRLENBQUMwVixVQUFVLENBQUMsR0FDdEJNLElBQUksQ0FBQ2hXLFFBQVEsQ0FBQ3dWLFVBQVUsQ0FBQyxJQUN4Qk0sS0FBSyxDQUFDalYsV0FBVyxDQUFDNlUsVUFBVSxDQUFDLEVBQzFCSyxLQUFLLENBQUNFLElBQUksQ0FBQyxHQUFHLEdBQUdMLFdBQVcsQ0FBQyxDQUFDTSxPQUFPLENBQUMsQ0FBQyxLQUMxQ0YsSUFBSSxDQUFDM1QsSUFBSSxDQUFDLEdBQUcsR0FBR29ULGFBQWEsQ0FBQyxDQUFDNVUsV0FBVyxDQUFDNlUsVUFBVSxDQUFDLEVBQ25ETSxJQUFJLENBQUMzVCxJQUFJLENBQUMsR0FBRyxHQUFHdVQsV0FBVyxDQUFDLENBQUNNLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFDMUNGLElBQUksQ0FBQ2hXLFFBQVEsQ0FBQ3dWLFVBQVUsQ0FBQyxLQUNyQlEsSUFBSSxDQUFDM1QsSUFBSSxDQUFDLEdBQUcsR0FBR29ULGFBQWEsQ0FBQyxDQUFDNVUsV0FBVyxDQUFDNlUsVUFBVSxDQUFDLEVBQ25ETSxJQUFJLENBQUMzVCxJQUFJLENBQUMsR0FBRyxHQUFHdVQsV0FBVyxDQUFDLENBQUNNLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUNqREosS0FBSyxDQUFDcFYsUUFBUSxDQUFDZ1YsVUFBVSxDQUFDLEVBQzFCSyxLQUFLLENBQUNFLElBQUksQ0FBQyxHQUFHLEdBQUdMLFdBQVcsQ0FBQyxDQUFDTyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFDdEQxUyxDQUFDLENBQUNvRCxjQUFjLENBQUMsQ0FBQztVQUV0QixJQUFJa1AsS0FBSyxDQUFDMVQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDakQsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN4QzJXLEtBQUssQ0FDQTFULElBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxDQUMzQytULElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDO1lBQzFCLE9BQU8sS0FBSztVQUNoQjtVQUNBLE9BQU8sS0FBSztRQUNoQixDQUFDLENBQUMsQ0FBQztNQUNmLENBQUM7TUFDRDNHLFVBQVUsRUFBRSxTQUFBQSxDQUFBLEVBQVc7UUFDbkIsSUFBSTRHLFFBQVEsR0FBR3JaLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNsQyxJQUFJcVosUUFBUSxDQUFDalgsTUFBTSxHQUFHLENBQUMsRUFBRTtVQUNyQjtVQUNBLElBQUksT0FBT2tYLFFBQVEsS0FBSyxXQUFXLEVBQUU7WUFDakN0WSxPQUFPLENBQUMyRixRQUFRLENBQUM0RixZQUFZLENBQ3pCLFNBQVMsRUFDVCx1REFBdUQsRUFDdkQsUUFDSixDQUFDO1lBQ0QsT0FBTyxJQUFJO1VBQ2Y7VUFDQThNLFFBQVEsQ0FBQ25VLElBQUksQ0FBQyxZQUFXO1lBQ3JCLElBQUlDLElBQUksR0FBR25GLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbEJtRixJQUFJLENBQUN6QixRQUFRLENBQUMsbUJBQW1CLENBQUM7WUFDbEM7WUFDQXlCLElBQUksQ0FBQ3VHLE9BQU8sR0FBRztjQUNYd00sY0FBYyxFQUFFLFdBQVc7Y0FDM0JDLFNBQVMsRUFBRWhULElBQUksQ0FBQzFELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxRQUFRO2NBQ2hEbVYsS0FBSyxFQUFFelIsSUFBSSxDQUFDMUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksR0FBRztjQUM3QzhYLFNBQVMsRUFBRSxDQUFDcFUsSUFBSSxDQUFDMUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDK1gsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sR0FBRyxTQUFTO2NBQ3pFQyxPQUFPLEVBQUV0VSxJQUFJLENBQUMxRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDO2NBQy9DaVksT0FBTyxFQUFFdlUsSUFBSSxDQUFDMUQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQztZQUNuRCxDQUFDO1lBQ0Q7WUFDQSxJQUFJMEQsSUFBSSxDQUFDdUcsT0FBTyxDQUFDNk4sU0FBUyxJQUFJLFNBQVMsRUFBRTtjQUNyQyxJQUFJRCxRQUFRLENBQUM7Z0JBQ1QxUSxPQUFPLEVBQUV6RCxJQUFJO2dCQUNid1UsT0FBTyxFQUFFLFNBQUFBLENBQUEsRUFBVztrQkFDaEIsSUFBSTNNLENBQUMsR0FBRzlHLFVBQVUsQ0FBQyxZQUFXO29CQUMxQmYsSUFBSSxDQUFDekIsUUFBUSxDQUFDeUIsSUFBSSxDQUFDdUcsT0FBTyxDQUFDd00sY0FBYyxHQUFHL1MsSUFBSSxDQUFDdUcsT0FBTyxDQUFDeU0sU0FBUyxHQUFHLFVBQVUsQ0FBQztrQkFDcEYsQ0FBQyxFQUFFaFQsSUFBSSxDQUFDdUcsT0FBTyxDQUFDa0wsS0FBSyxDQUFDO2tCQUN0QixJQUFJLENBQUNnRCxPQUFPLENBQUMsQ0FBQztnQkFDbEIsQ0FBQztnQkFDRHRYLE1BQU0sRUFBRTtjQUNaLENBQUMsQ0FBQztZQUNOLENBQUMsTUFBTTtjQUNINkMsSUFBSSxDQUFDekIsUUFBUSxDQUFDLFNBQVMsQ0FBQztjQUN4QnlCLElBQUksQ0FBQ04sRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFXO2dCQUN4Qk0sSUFBSSxDQUFDekIsUUFBUSxDQUFDeUIsSUFBSSxDQUFDdUcsT0FBTyxDQUFDd00sY0FBYyxHQUFHL1MsSUFBSSxDQUFDdUcsT0FBTyxDQUFDeU0sU0FBUyxDQUFDO2dCQUNuRSxPQUFPLEtBQUs7Y0FDaEIsQ0FBQyxDQUFDO1lBQ047WUFDQTtZQUNBLElBQUloVCxJQUFJLENBQUN5RyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQ3hKLE1BQU0sRUFBRTtjQUM5QytDLElBQUksQ0FBQ04sRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFXO2dCQUN4Qk0sSUFBSSxDQUFDdEIsV0FBVyxDQUFDc0IsSUFBSSxDQUFDdUcsT0FBTyxDQUFDd00sY0FBYyxHQUFHL1MsSUFBSSxDQUFDdUcsT0FBTyxDQUFDeU0sU0FBUyxDQUFDO2dCQUN0RSxJQUFJbkwsQ0FBQyxHQUFHOUcsVUFBVSxDQUFDLFlBQVc7a0JBQzFCZixJQUFJLENBQUN6QixRQUFRLENBQUN5QixJQUFJLENBQUN1RyxPQUFPLENBQUN3TSxjQUFjLEdBQUcvUyxJQUFJLENBQUN1RyxPQUFPLENBQUN5TSxTQUFTLENBQUM7Z0JBQ3ZFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ04sT0FBTyxLQUFLO2NBQ2hCLENBQUMsQ0FBQztZQUNOO1VBQ0osQ0FBQyxDQUFDO1FBQ047TUFDSixDQUFDO01BQ0R6RixRQUFRLEVBQUUsU0FBQUEsQ0FBQSxFQUFXO1FBQ2pCLElBQUltSCxTQUFTLEdBQUc3WixDQUFDLENBQUMsb0JBQW9CLENBQUM7UUFDdkMsSUFBSTZaLFNBQVMsQ0FBQ3pYLE1BQU0sR0FBRyxDQUFDLEVBQUU7VUFDdEI7VUFDQSxJQUFJLE9BQU9wQyxDQUFDLENBQUNxTSxFQUFFLENBQUN5TixPQUFPLEtBQUssV0FBVyxFQUFFO1lBQ3JDOVksT0FBTyxDQUFDMkYsUUFBUSxDQUFDNEYsWUFBWSxDQUN6QixTQUFTLEVBQ1Qsc0RBQXNELEVBQ3RELFFBQ0osQ0FBQztZQUNELE9BQU8sSUFBSTtVQUNmO1VBQ0FzTixTQUFTLENBQUMzVSxJQUFJLENBQUMsWUFBVztZQUN0QixJQUFJd0gsS0FBSyxHQUFHMU0sQ0FBQyxDQUFDLElBQUksQ0FBQztjQUNmK1osWUFBWSxHQUFHck4sS0FBSyxDQUFDakwsSUFBSSxDQUFDLGtCQUFrQixDQUFDO2NBQzdDdVksaUJBQWlCLEdBQUd0TixLQUFLLENBQUNqTCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksT0FBTztZQUM5RGlMLEtBQUssQ0FBQ2xELE9BQU8sQ0FDVCwyQ0FBMkMsR0FDM0N1USxZQUFZLEdBQ1osb0JBQW9CLEdBQ3BCQyxpQkFBaUIsR0FDakIsMkJBQTJCLEdBQzNCRCxZQUFZLEdBQ1osV0FDSixDQUFDO1lBRUQsSUFBSUUsWUFBWSxHQUFHLElBQUlwWixRQUFRLENBQUM7Y0FDNUJ3VyxpQkFBaUIsRUFBRSxxQkFBcUI7Y0FDeENDLFlBQVksRUFBRTtZQUNsQixDQUFDLENBQUM7WUFFRjVLLEtBQUssQ0FBQ3JILElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDeVUsT0FBTyxDQUFDO2NBQ3RDSSxVQUFVLEVBQUU7WUFDaEIsQ0FBQyxDQUFDO1VBQ04sQ0FBQyxDQUFDO1FBQ047TUFDSixDQUFDO01BQ0R2SCxlQUFlLEVBQUUsU0FBQUEsQ0FBQSxFQUFXO1FBQ3hCLElBQUl3SCxnQkFBZ0IsR0FBR25hLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztRQUUzQyxJQUFJbWEsZ0JBQWdCLENBQUMvWCxNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQzdCK1gsZ0JBQWdCLENBQUNqVixJQUFJLENBQUMsWUFBVztZQUM3QixJQUFJd0gsS0FBSyxHQUFHMU0sQ0FBQyxDQUFDLElBQUksQ0FBQztjQUNmK1osWUFBWSxHQUFHck4sS0FBSyxDQUFDakwsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUM5Q2lMLEtBQUssQ0FBQ2hKLFFBQVEsQ0FBQyxTQUFTLENBQUM7WUFDekJnSixLQUFLLENBQUNqTCxJQUFJLENBQUMsU0FBUyxFQUFFc1ksWUFBWSxDQUFDO1VBQ3ZDLENBQUMsQ0FBQztVQUVGLElBQUlLLE9BQU8sR0FBRyxJQUFJdlosUUFBUSxDQUFDO1lBQ3ZCd1csaUJBQWlCLEVBQUUsVUFBVTtZQUM3QkMsWUFBWSxFQUFFO1VBQ2xCLENBQUMsQ0FBQztRQUNOO01BQ0osQ0FBQztNQUNEMVEsWUFBWSxFQUFFLFNBQUFBLENBQUEsRUFBVztRQUNyQixJQUFJeVQsY0FBYyxHQUFHcmEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO1FBQ3hDcWEsY0FBYyxDQUFDblYsSUFBSSxDQUFDLFlBQVc7VUFDM0IsSUFBSUMsSUFBSSxHQUFHbkYsQ0FBQyxDQUFDLElBQUksQ0FBQztVQUNsQm1GLElBQUksQ0FBQ3VHLE9BQU8sR0FBRztZQUNYNE8sS0FBSyxFQUFFblYsSUFBSSxDQUFDMUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDbkM4WSxLQUFLLEVBQUVwVixJQUFJLENBQUMxRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksU0FBUztZQUMzQ2tELE9BQU8sRUFBRVEsSUFBSSxDQUFDMUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEdBQUc7WUFDekMrWSxNQUFNLEVBQUVyVixJQUFJLENBQUMxRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRztZQUN2QytELE1BQU0sRUFBRUwsSUFBSSxDQUFDMUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUc7WUFDdkNnWixNQUFNLEVBQUU7VUFDWixDQUFDO1VBRUQsSUFBSXRaLEtBQUssQ0FBQzZCLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSW1DLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQzZPLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDNURwVixJQUFJLENBQUN1RyxPQUFPLENBQUM2TyxLQUFLLEdBQUcsU0FBUztVQUNsQztVQUNBLFFBQVFwVixJQUFJLENBQUN1RyxPQUFPLENBQUM0TyxLQUFLO1lBQ3RCLEtBQUssR0FBRztjQUNKblYsSUFBSSxDQUFDdUcsT0FBTyxDQUFDNE8sS0FBSyxHQUNkblYsSUFBSSxDQUFDdUcsT0FBTyxDQUFDK08sTUFBTSxHQUNuQixzekRBQXN6RDtjQUMxekQ7WUFDSixLQUFLLEdBQUc7Y0FDSnRWLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQzRPLEtBQUssR0FDZG5WLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQytPLE1BQU0sR0FDbkIsc29CQUFzb0I7Y0FDMW9CO1lBQ0osS0FBSyxHQUFHO2NBQ0p0VixJQUFJLENBQUN1RyxPQUFPLENBQUM0TyxLQUFLLEdBQ2RuVixJQUFJLENBQUN1RyxPQUFPLENBQUMrTyxNQUFNLEdBQ25CLDBIQUEwSDtjQUM5SDtZQUNKLEtBQUssR0FBRztjQUNKdFYsSUFBSSxDQUFDdUcsT0FBTyxDQUFDNE8sS0FBSyxHQUNkblYsSUFBSSxDQUFDdUcsT0FBTyxDQUFDK08sTUFBTSxHQUNuQixrb0JBQWtvQjtjQUN0b0I7WUFDSixLQUFLLEdBQUc7Y0FDSnRWLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQzRPLEtBQUssR0FDZG5WLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQytPLE1BQU0sR0FDbkIsOElBQThJO2NBQ2xKO1lBQ0osS0FBSyxHQUFHO2NBQ0p0VixJQUFJLENBQUN1RyxPQUFPLENBQUM0TyxLQUFLLEdBQ2RuVixJQUFJLENBQUN1RyxPQUFPLENBQUMrTyxNQUFNLEdBQ25CLDhuREFBOG5EO2NBQ2xvRDtZQUNKLEtBQUssR0FBRztjQUNKdFYsSUFBSSxDQUFDdUcsT0FBTyxDQUFDNE8sS0FBSyxHQUNkblYsSUFBSSxDQUFDdUcsT0FBTyxDQUFDK08sTUFBTSxHQUNuQiw4R0FBOEc7Y0FDbEg7WUFDSixLQUFLLEdBQUc7Y0FDSnRWLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQzRPLEtBQUssR0FDZG5WLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQytPLE1BQU0sR0FDbkIsOC9EQUE4L0Q7Y0FDbGdFO1lBQ0osS0FBSyxHQUFHO2NBQ0p0VixJQUFJLENBQUN1RyxPQUFPLENBQUM0TyxLQUFLLEdBQ2RuVixJQUFJLENBQUN1RyxPQUFPLENBQUMrTyxNQUFNLEdBQ25CLDBKQUEwSjtjQUM5SjtZQUNKLEtBQUssSUFBSTtjQUNMdFYsSUFBSSxDQUFDdUcsT0FBTyxDQUFDNE8sS0FBSyxHQUNkblYsSUFBSSxDQUFDdUcsT0FBTyxDQUFDK08sTUFBTSxHQUNuQiw4WEFBOFg7Y0FDbFk7WUFDSixLQUFLLElBQUk7Y0FDTHRWLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQzRPLEtBQUssR0FDZG5WLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQytPLE1BQU0sR0FDbkIsc09BQXNPO2NBQzFPO1lBQ0osS0FBSyxJQUFJO2NBQ0x0VixJQUFJLENBQUN1RyxPQUFPLENBQUM0TyxLQUFLLEdBQ2RuVixJQUFJLENBQUN1RyxPQUFPLENBQUMrTyxNQUFNLEdBQ25CLGtaQUFrWjtjQUN0WjtZQUNKLEtBQUssSUFBSTtjQUNMdFYsSUFBSSxDQUFDdUcsT0FBTyxDQUFDNE8sS0FBSyxHQUNkblYsSUFBSSxDQUFDdUcsT0FBTyxDQUFDK08sTUFBTSxHQUNuQiw4WUFBOFk7Y0FDbFo7WUFDSixLQUFLLElBQUk7Y0FDTHRWLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQzRPLEtBQUssR0FDZG5WLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQytPLE1BQU0sR0FDbkIsc0lBQXNJO2NBQzFJO1lBQ0osS0FBSyxJQUFJO2NBQ0x0VixJQUFJLENBQUN1RyxPQUFPLENBQUM0TyxLQUFLLEdBQ2RuVixJQUFJLENBQUN1RyxPQUFPLENBQUMrTyxNQUFNLEdBQ25CLDhHQUE4RztjQUNsSDtZQUNKLEtBQUssSUFBSTtjQUNMdFYsSUFBSSxDQUFDdUcsT0FBTyxDQUFDNE8sS0FBSyxHQUNkblYsSUFBSSxDQUFDdUcsT0FBTyxDQUFDK08sTUFBTSxHQUNuQiwwSEFBMEg7Y0FDOUg7WUFDSixLQUFLLElBQUk7Y0FDTHRWLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQzRPLEtBQUssR0FDZG5WLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQytPLE1BQU0sR0FDbkIsczBCQUFzMEI7Y0FDMTBCO1lBQ0osS0FBSyxJQUFJO2NBQ0x0VixJQUFJLENBQUN1RyxPQUFPLENBQUM0TyxLQUFLLEdBQ2RuVixJQUFJLENBQUN1RyxPQUFPLENBQUMrTyxNQUFNLEdBQ25CLGtiQUFrYjtjQUN0YjtZQUNKLEtBQUssSUFBSTtjQUNMdFYsSUFBSSxDQUFDdUcsT0FBTyxDQUFDNE8sS0FBSyxHQUNkblYsSUFBSSxDQUFDdUcsT0FBTyxDQUFDK08sTUFBTSxHQUNuQiwwMUJBQTAxQjtjQUM5MUI7WUFDSixLQUFLLElBQUk7Y0FDTHRWLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQzRPLEtBQUssR0FDZG5WLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQytPLE1BQU0sR0FDbkIsc1RBQXNUO2NBQzFUO1VBQ1I7VUFDQSxJQUFJQyxTQUFTLEdBQUdDLElBQUksQ0FBQ3hWLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQzRPLEtBQUssQ0FBQztVQUN4QyxJQUFJTSxPQUFPLEdBQUduYSxRQUFRLENBQUNvYSxhQUFhLENBQUMsS0FBSyxDQUFDO1VBQzNDRCxPQUFPLENBQUNFLFNBQVMsR0FBR0osU0FBUztVQUM3QixJQUFJSyxHQUFHLEdBQUdILE9BQU8sQ0FBQ0ksVUFBVTtVQUM1QixJQUFJQyxLQUFLLEdBQUdGLEdBQUcsQ0FBQ0csb0JBQW9CLENBQUMsTUFBTSxDQUFDO1VBQzVDLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDcEcsSUFBSSxDQUFDa0csS0FBSyxFQUFFLFVBQVNHLElBQUksRUFBRTtZQUNsQ0EsSUFBSSxDQUFDZCxLQUFLLENBQUNlLElBQUksR0FBR2xXLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQzZPLEtBQUs7VUFDeEMsQ0FBQyxDQUFDO1VBRUZRLEdBQUcsQ0FBQ08sWUFBWSxDQUFDLHFCQUFxQixFQUFFLE1BQU0sQ0FBQztVQUMvQyxJQUFJbmEsS0FBSyxDQUFDNkIsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQzlCLElBQUltQyxJQUFJLENBQUN1RyxPQUFPLENBQUNsRyxNQUFNLEVBQUU7Y0FDckJ1VixHQUFHLENBQUNPLFlBQVksQ0FDWixPQUFPLEVBQ1AsU0FBUyxHQUFHdlUsTUFBTSxDQUFDNUIsSUFBSSxDQUFDdUcsT0FBTyxDQUFDbEcsTUFBTSxDQUFDLENBQUMrVixPQUFPLENBQUMsQ0FBQyxHQUFHLElBQ3hELENBQUM7WUFDTCxDQUFDLE1BQU07Y0FDSFIsR0FBRyxDQUFDTyxZQUFZLENBQ1osT0FBTyxFQUNQLFNBQVMsR0FBR3ZVLE1BQU0sQ0FBQ2dVLEdBQUcsQ0FBQ3ZWLE1BQU0sQ0FBQ2dXLE9BQU8sQ0FBQ25TLEtBQUssQ0FBQyxDQUFDa1MsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUM3RCxDQUFDO1lBQ0w7VUFDSixDQUFDLE1BQU07WUFDSCxJQUFJcFcsSUFBSSxDQUFDdUcsT0FBTyxDQUFDbEcsTUFBTSxFQUFFO2NBQ3JCdVYsR0FBRyxDQUFDTyxZQUFZLENBQ1osT0FBTyxFQUNQLFNBQVMsR0FBR3ZVLE1BQU0sQ0FBQzVCLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ2xHLE1BQU0sQ0FBQyxDQUFDK1YsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFDNUQsQ0FBQztZQUNMLENBQUMsTUFBTTtjQUNIUixHQUFHLENBQUNPLFlBQVksQ0FDWixPQUFPLEVBQ1AsU0FBUyxHQUFHdlUsTUFBTSxDQUFDZ1UsR0FBRyxDQUFDdlYsTUFBTSxDQUFDZ1csT0FBTyxDQUFDblMsS0FBSyxDQUFDLENBQUNrUyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUNqRSxDQUFDO1lBQ0w7VUFDSjtVQUNBdmIsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUNpSCxNQUFNLENBQUMsQ0FBQztVQUN0QzlCLElBQUksQ0FBQ1YsR0FBRyxDQUFDO1lBQ0wsU0FBUyxFQUFFVSxJQUFJLENBQUN1RyxPQUFPLENBQUM4TyxNQUFNO1lBQzlCN1YsT0FBTyxFQUFFUSxJQUFJLENBQUN1RyxPQUFPLENBQUMvRztVQUMxQixDQUFDLENBQUM7VUFDRlEsSUFBSSxDQUFDc1csTUFBTSxDQUFDVixHQUFHLENBQUM7UUFDcEIsQ0FBQyxDQUFDO01BQ04sQ0FBQztNQUNEbkksZ0JBQWdCLEVBQUUsU0FBQUEsQ0FBQSxFQUFXO1FBQ3pCO1FBQ0E7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO01BckJnQixDQXNCSDtNQUNEc0IsUUFBUSxFQUFFLFNBQUFBLENBQUEsRUFBVztRQUNqQixJQUFJd0gsUUFBUSxHQUFHMWIsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUM1QixJQUFJMGIsUUFBUSxDQUFDdFosTUFBTSxHQUFHLENBQUMsRUFBRTtVQUNyQjtVQUNBLElBQUksT0FBT3BDLENBQUMsQ0FBQ3FNLEVBQUUsQ0FBQ3NQLE9BQU8sS0FBSyxXQUFXLEVBQUU7WUFDckMzYSxPQUFPLENBQUMyRixRQUFRLENBQUM0RixZQUFZLENBQ3pCLFNBQVMsRUFDVCxzREFBc0QsRUFDdEQsUUFDSixDQUFDO1lBQ0QsT0FBTyxJQUFJO1VBQ2Y7VUFDQTtVQUNBbVAsUUFBUSxDQUFDeFcsSUFBSSxDQUFDLFlBQVc7WUFDckIsSUFBSUMsSUFBSSxHQUFHbkYsQ0FBQyxDQUFDLElBQUksQ0FBQztjQUNkeWEsTUFBTSxHQUFHdFYsSUFBSSxDQUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM1RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRTtjQUNwRG1hLE1BQU0sR0FBR3pXLElBQUksQ0FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDNUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7WUFDeER5RSxVQUFVLENBQUMsWUFBVztjQUNsQixJQUFJb1QsUUFBUSxDQUFDO2dCQUNUMVEsT0FBTyxFQUFFekQsSUFBSTtnQkFDYndVLE9BQU8sRUFBRSxTQUFBQSxDQUFBLEVBQVc7a0JBQ2hCeFUsSUFBSSxDQUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUNzVyxPQUFPLENBQUM7b0JBQ3RCRSxlQUFlLEVBQUUsQ0FBQztvQkFDbEJDLFNBQVMsRUFBRSxTQUFBQSxDQUFTelMsS0FBSyxFQUFFcUMsT0FBTyxFQUFFO3NCQUNoQyxPQUNJcVEsTUFBTSxDQUFDdEIsTUFBTSxDQUFDLEdBQ2RwUixLQUFLLENBQUNrUyxPQUFPLENBQUM3UCxPQUFPLENBQUNzUSxRQUFRLENBQUMsR0FDL0JELE1BQU0sQ0FBQ0gsTUFBTSxDQUFDO29CQUV0QjtrQkFDSixDQUFDLENBQUM7a0JBQ0YsSUFBSSxDQUFDaEMsT0FBTyxDQUFDLENBQUM7Z0JBQ2xCLENBQUM7Z0JBQ0R0WCxNQUFNLEVBQUU7Y0FDWixDQUFDLENBQUM7WUFDTixDQUFDLEVBQUUsR0FBRyxDQUFDO1VBQ1gsQ0FBQyxDQUFDO1FBQ047TUFDSixDQUFDO01BQ0R1USxjQUFjLEVBQUUsU0FBQUEsQ0FBQSxFQUFXO1FBQ3ZCLElBQUlvSixlQUFlLEdBQUdqYyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ3JDLElBQUlpYyxlQUFlLENBQUM3WixNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQzVCO1VBQ0EsSUFBSSxPQUFPcEMsQ0FBQyxDQUFDcU0sRUFBRSxDQUFDcUgsU0FBUyxLQUFLLFdBQVcsRUFBRTtZQUN2QzFTLE9BQU8sQ0FBQzJGLFFBQVEsQ0FBQzRGLFlBQVksQ0FDekIsU0FBUyxFQUNULHdEQUF3RCxFQUN4RCxRQUNKLENBQUM7WUFDRCxPQUFPLElBQUk7VUFDZjtVQUNBdk0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDa0YsSUFBSSxDQUFDLFVBQVN5RCxLQUFLLEVBQUVDLE9BQU8sRUFBRTtZQUMxQyxJQUFJekQsSUFBSSxHQUFHbkYsQ0FBQyxDQUFDNEksT0FBTyxDQUFDO2NBQ2pCc1QsU0FBUyxHQUFHL1csSUFBSSxDQUFDMUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBRTNDMEQsSUFBSSxDQUFDdU8sU0FBUyxDQUFDd0ksU0FBUyxFQUFFLFVBQVNuYixLQUFLLEVBQUU7Y0FDdENvRSxJQUFJLENBQUNxUSxJQUFJLENBQ0x6VSxLQUFLLENBQUNvYixRQUFRLENBQ1Ysa0hBQWtILEdBQ2xILGlGQUFpRixHQUNqRixtRkFBbUYsR0FDbkYseUZBQ0osQ0FDSixDQUFDO1lBQ0wsQ0FBQyxDQUFDO1VBQ04sQ0FBQyxDQUFDO1FBQ047TUFDSixDQUFDO01BQ0RySixXQUFXLEVBQUUsU0FBQUEsQ0FBQSxFQUFXO1FBQ3BCLElBQUlzSixZQUFZLEdBQUdwYyxDQUFDLENBQUMsaUJBQWlCLENBQUMsSUFBSUEsQ0FBQyxDQUFDLGVBQWUsQ0FBQztRQUM3RCxJQUFJb2MsWUFBWSxDQUFDaGEsTUFBTSxHQUFHLENBQUMsRUFBRTtVQUN6QmdhLFlBQVksQ0FBQ2xYLElBQUksQ0FBQyxVQUFTbUwsQ0FBQyxFQUFFbEwsSUFBSSxFQUFFO1lBQ2hDLElBQUl1SCxLQUFLLEdBQUcxTSxDQUFDLENBQUMsSUFBSSxDQUFDO2NBQ2ZxYyxPQUFPLEdBQUczUCxLQUFLLENBQUNqTCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksS0FBSztjQUM3Q21WLEtBQUssR0FBR2xLLEtBQUssQ0FBQ2pMLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJO2NBQ3hDcVUsSUFBSSxHQUFHcEosS0FBSyxDQUFDakwsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUc7WUFDekMsSUFBSSxDQUFDaUwsS0FBSyxDQUFDMUosUUFBUSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7Y0FDdEMwSixLQUFLLENBQUNqSSxHQUFHLENBQUM7Z0JBQ050QyxLQUFLLEVBQUU7Y0FDWCxDQUFDLENBQUM7WUFDTjtZQUNBLElBQUltYSxjQUFjLEdBQUcsU0FBQUEsQ0FBQSxFQUFXO2NBQzVCNVAsS0FBSyxDQUNBM0gsT0FBTyxDQUFDO2dCQUNENUMsS0FBSyxFQUFFa2EsT0FBTyxHQUFHO2NBQ3JCLENBQUMsRUFDRCxlQUNKLENBQUMsQ0FDQTNZLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQztjQUNsQ2dKLEtBQUssQ0FDQWtLLEtBQUssQ0FBQ0EsS0FBSyxDQUFDLENBQ1o2RSxNQUFNLENBQ0gsOEJBQThCLEdBQzlCM0YsSUFBSSxHQUNKLHlFQUF5RSxHQUN6RXVHLE9BQU8sR0FDUCxTQUNKLENBQUM7WUFDVCxDQUFDO1lBQ0QsSUFDSWxiLEtBQUssQ0FBQzZCLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFDL0I3QixLQUFLLENBQUM2QixRQUFRLENBQUMsZUFBZSxDQUFDLEVBQ2pDO2NBQ0UsSUFBSXNXLFFBQVEsQ0FBQztnQkFDVDFRLE9BQU8sRUFBRTVJLENBQUMsQ0FBQ21GLElBQUksQ0FBQztnQkFDaEJ3VSxPQUFPLEVBQUUsU0FBQUEsQ0FBQSxFQUFXO2tCQUNoQixJQUFJM00sQ0FBQyxHQUFHOUcsVUFBVSxDQUFDLFlBQVc7b0JBQzFCb1csY0FBYyxDQUFDLENBQUM7a0JBQ3BCLENBQUMsRUFBRTFGLEtBQUssQ0FBQztrQkFDVCxJQUFJLENBQUNnRCxPQUFPLENBQUMsQ0FBQztnQkFDbEIsQ0FBQztnQkFDRHRYLE1BQU0sRUFBRTtjQUNaLENBQUMsQ0FBQztZQUNOLENBQUMsTUFBTTtjQUNIZ2EsY0FBYyxDQUFDLENBQUM7WUFDcEI7VUFDSixDQUFDLENBQUM7UUFDTjtNQUNKLENBQUM7TUFDRHZKLFFBQVEsRUFBRSxTQUFBQSxDQUFBLEVBQVc7UUFDakIsSUFBSXdKLFNBQVMsR0FBR3ZjLENBQUMsQ0FBQyxZQUFZLENBQUM7UUFDL0IsSUFBSXVjLFNBQVMsQ0FBQ25hLE1BQU0sR0FBRyxDQUFDLEVBQUU7VUFDdEI7VUFDQSxJQUFJLE9BQU9wQyxDQUFDLENBQUNxTSxFQUFFLENBQUNtUSxZQUFZLEtBQUssV0FBVyxFQUFFO1lBQzFDeGIsT0FBTyxDQUFDMkYsUUFBUSxDQUFDNEYsWUFBWSxDQUN6QixTQUFTLEVBQ1QsMkRBQTJELEVBQzNELFFBQ0osQ0FBQztZQUNELE9BQU8sSUFBSTtVQUNmO1VBQ0FnUSxTQUFTLENBQUNyWCxJQUFJLENBQUMsWUFBVztZQUN0QixJQUFJQyxJQUFJLEdBQUduRixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2xCO1lBQ0FtRixJQUFJLENBQUN1RyxPQUFPLEdBQUc7Y0FDWCtRLFFBQVEsRUFBRXRYLElBQUksQ0FBQzFELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSVAsWUFBWTtjQUNqRHdiLFVBQVUsRUFBRXZYLElBQUksQ0FBQzFELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLGtCQUFrQjtjQUM5RGtiLFVBQVUsRUFBRXhYLElBQUksQ0FBQzFELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEtBQUs7Y0FDakRtYixXQUFXLEVBQUV6WCxJQUFJLENBQUMxRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDO2NBQy9Db2IsT0FBTyxFQUFFMVgsSUFBSSxDQUFDMUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLFFBQVE7Y0FDOUNxYixTQUFTLEVBQUUzWCxJQUFJLENBQUMxRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2NBQzNDc2IsSUFBSSxFQUFFNVgsSUFBSSxDQUFDMUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUc7Y0FDbkN1YixNQUFNLEVBQUU3WCxJQUFJLENBQUMxRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztjQUNyQ3NELE9BQU8sRUFBRUksSUFBSSxDQUFDMUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLElBQUk7Y0FDMUN3YixVQUFVLEVBQUU5WCxJQUFJLENBQUMxRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUk7WUFDNUMsQ0FBQztZQUNEMEQsSUFBSSxDQUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUNaLEdBQUcsQ0FBQztjQUNyQnRDLEtBQUssRUFBRWdELElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ3FSLElBQUksR0FBRyxJQUFJO2NBQy9CdlgsTUFBTSxFQUFFTCxJQUFJLENBQUN1RyxPQUFPLENBQUNxUixJQUFJLEdBQUcsSUFBSTtjQUNoQyxhQUFhLEVBQUU1WCxJQUFJLENBQUN1RyxPQUFPLENBQUNxUixJQUFJLEdBQUc7WUFDdkMsQ0FBQyxDQUFDO1lBQ0Y7O1lBRUE3VyxVQUFVLENBQUMsWUFBVztjQUNsQixJQUFJb1QsUUFBUSxDQUFDO2dCQUNUMVEsT0FBTyxFQUFFekQsSUFBSTtnQkFDYndVLE9BQU8sRUFBRSxTQUFBQSxDQUFBLEVBQVc7a0JBQ2hCeFUsSUFBSSxDQUFDcVgsWUFBWSxDQUFDO29CQUNkQyxRQUFRLEVBQUV0WCxJQUFJLENBQUN1RyxPQUFPLENBQUMrUSxRQUFRO29CQUMvQkMsVUFBVSxFQUFFdlgsSUFBSSxDQUFDdUcsT0FBTyxDQUFDZ1IsVUFBVTtvQkFDbkNDLFVBQVUsRUFBRXhYLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ2lSLFVBQVU7b0JBQ25DQyxXQUFXLEVBQUV6WCxJQUFJLENBQUN1RyxPQUFPLENBQUNrUixXQUFXO29CQUNyQ0MsT0FBTyxFQUFFMVgsSUFBSSxDQUFDdUcsT0FBTyxDQUFDbVIsT0FBTztvQkFDN0JDLFNBQVMsRUFBRS9WLE1BQU0sQ0FBQzVCLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ29SLFNBQVMsQ0FBQztvQkFDekNDLElBQUksRUFBRWhXLE1BQU0sQ0FBQzVCLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ3FSLElBQUksQ0FBQztvQkFDL0JDLE1BQU0sRUFBRWpXLE1BQU0sQ0FBQzVCLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ3NSLE1BQU0sQ0FBQztvQkFDbkNqWSxPQUFPLEVBQUVnQyxNQUFNLENBQUM1QixJQUFJLENBQUN1RyxPQUFPLENBQUMzRyxPQUFPLENBQUM7b0JBQ3JDa1ksVUFBVSxFQUFFOVgsSUFBSSxDQUFDdUcsT0FBTyxDQUFDdVIsVUFBVTtvQkFDbkNDLE1BQU0sRUFBRSxTQUFBQSxDQUFTcFosSUFBSSxFQUFFQyxFQUFFLEVBQUVzWSxPQUFPLEVBQUU7c0JBQ2hDbFgsSUFBSSxDQUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMrUSxJQUFJLENBQUN4RSxJQUFJLENBQUN1TCxLQUFLLENBQUNkLE9BQU8sQ0FBQyxDQUFDO29CQUN2RDtrQkFDSixDQUFDLENBQUM7a0JBQ0YsSUFBSSxDQUFDekMsT0FBTyxDQUFDLENBQUM7Z0JBQ2xCLENBQUM7Z0JBQ0R0WCxNQUFNLEVBQUU7Y0FDWixDQUFDLENBQUM7WUFDTixDQUFDLEVBQUUsR0FBRyxDQUFDO1VBQ1gsQ0FBQyxDQUFDO1FBQ047TUFDSixDQUFDO01BQ0Q4YSxJQUFJLEVBQUUsU0FBQUEsQ0FBQSxFQUFXO1FBQ2IsSUFBSUMsSUFBSSxHQUFHcmQsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUVwQixJQUFJcWQsSUFBSSxDQUFDamIsTUFBTSxHQUFHLENBQUMsRUFBRTtVQUNqQjtVQUNBLElBQUksT0FBT3BDLENBQUMsQ0FBQ3FNLEVBQUUsQ0FBQ2lSLEtBQUssS0FBSyxXQUFXLEVBQUU7WUFDbkN0YyxPQUFPLENBQUMyRixRQUFRLENBQUM0RixZQUFZLENBQ3pCLFNBQVMsRUFDVCw0TUFBNE0sRUFDNU0sUUFDSixDQUFDO1lBQ0QsT0FBTyxJQUFJO1VBQ2Y7VUFDQThRLElBQUksQ0FBQ25ZLElBQUksQ0FBQyxZQUFXO1lBQ2pCLElBQUlDLElBQUksR0FBR25GLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbEI7WUFDQW1GLElBQUksQ0FBQ3VHLE9BQU8sR0FBRztjQUNYNlIsUUFBUSxFQUFFcFksSUFBSSxDQUFDMUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLFlBQVk7Y0FDcEQrYixTQUFTLEVBQUVyWSxJQUFJLENBQUMxRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxZQUFZO2NBQ3REZ2MsSUFBSSxFQUFFdFksSUFBSSxDQUFDMUQsSUFBSSxDQUFDLFdBQVcsQ0FBQztjQUM1QmljLE9BQU8sRUFBRXZZLElBQUksQ0FBQzFELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxTQUFTO2NBQzVDa2MsSUFBSSxFQUFFeFksSUFBSSxDQUFDMUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUU7Y0FDbENtYyxVQUFVLEVBQUV6WSxJQUFJLENBQUN5SixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJO2NBQzNEaVAsSUFBSSxFQUFFMVksSUFBSSxDQUFDMUQsSUFBSSxDQUFDLFdBQVcsQ0FBQztjQUM1QnFjLFFBQVEsRUFBRTNZLElBQUksQ0FBQzFELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSTtZQUN6QyxDQUFDO1lBQ0QsSUFBSXNjLFNBQVM7WUFDYixJQUFJM2QsTUFBTSxDQUFDNGQsSUFBSSxFQUFFO2NBQ2IsSUFBSTdZLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ29TLFFBQVEsRUFBRTtnQkFDdkJDLFNBQVMsR0FBR0MsSUFBSSxDQUFDN1ksSUFBSSxDQUFDdUcsT0FBTyxDQUFDb1MsUUFBUSxDQUFDO2NBQzNDLENBQUMsTUFBTTtnQkFDSEMsU0FBUyxHQUFHLElBQUk7Y0FDcEI7WUFDSjtZQUNBO1lBQ0E1WSxJQUFJLENBQUNtWSxLQUFLLENBQUM7Y0FDUFcsTUFBTSxFQUFFLENBQ0psWCxNQUFNLENBQUM1QixJQUFJLENBQUN1RyxPQUFPLENBQUM2UixRQUFRLENBQUMsRUFDN0J4VyxNQUFNLENBQUM1QixJQUFJLENBQUN1RyxPQUFPLENBQUM4UixTQUFTLENBQUMsQ0FDakM7Y0FDREcsSUFBSSxFQUFFNVcsTUFBTSxDQUFDNUIsSUFBSSxDQUFDdUcsT0FBTyxDQUFDaVMsSUFBSSxDQUFDO2NBQy9CTyxTQUFTLEVBQUVDLE1BQU0sQ0FBQ2YsSUFBSSxDQUFDZ0IsU0FBUyxDQUFDalosSUFBSSxDQUFDdUcsT0FBTyxDQUFDZ1MsT0FBTyxDQUFDO2NBQ3REVyxXQUFXLEVBQUUsS0FBSztjQUNsQkMsV0FBVyxFQUFFLElBQUk7Y0FDakJDLGNBQWMsRUFBRSxLQUFLO2NBQ3JCQyxpQkFBaUIsRUFBRSxJQUFJO2NBQ3ZCQyxpQkFBaUIsRUFBRXRaLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ2tTLFVBQVU7Y0FDMUNjLE1BQU0sRUFBRVg7WUFDWixDQUFDLENBQUM7WUFDRixJQUFJNVksSUFBSSxDQUFDdUcsT0FBTyxDQUFDbVMsSUFBSSxFQUFFO2NBQ25CMVksSUFBSSxDQUFDbVksS0FBSyxDQUFDLENBQUMsQ0FBQ3FCLE1BQU0sQ0FBQztnQkFDaEJDLFFBQVEsRUFBRSxDQUNON1gsTUFBTSxDQUFDNUIsSUFBSSxDQUFDdUcsT0FBTyxDQUFDNlIsUUFBUSxDQUFDLEVBQzdCeFcsTUFBTSxDQUFDNUIsSUFBSSxDQUFDdUcsT0FBTyxDQUFDOFIsU0FBUyxDQUFDLENBQ2pDO2dCQUNESyxJQUFJLEVBQUUxWSxJQUFJLENBQUN1RyxPQUFPLENBQUNtUztjQUN2QixDQUFDLENBQUM7WUFDTixDQUFDLE1BQU07Y0FDSDFZLElBQUksQ0FDQ21ZLEtBQUssQ0FBQyxDQUFDLENBQ1BxQixNQUFNLENBQUM7Z0JBQ0pDLFFBQVEsRUFBRSxDQUNON1gsTUFBTSxDQUFDNUIsSUFBSSxDQUFDdUcsT0FBTyxDQUFDNlIsUUFBUSxDQUFDLEVBQzdCeFcsTUFBTSxDQUFDNUIsSUFBSSxDQUFDdUcsT0FBTyxDQUFDOFIsU0FBUyxDQUFDLENBQ2pDO2dCQUNESyxJQUFJLEVBQUU7Y0FDVixDQUFDLENBQUMsQ0FDRGdCLE9BQU8sQ0FBQztnQkFDTEQsUUFBUSxFQUFFLENBQ043WCxNQUFNLENBQUM1QixJQUFJLENBQUN1RyxPQUFPLENBQUM2UixRQUFRLENBQUMsRUFDN0J4VyxNQUFNLENBQUM1QixJQUFJLENBQUN1RyxPQUFPLENBQUM4UixTQUFTLENBQUMsQ0FDakM7Z0JBQ0RzQixPQUFPLEVBQUU7Y0FDYixDQUFDLENBQUM7WUFDVjtZQUNBLElBQUkzWixJQUFJLENBQUN1RyxPQUFPLENBQUMrUixJQUFJLEVBQUU7Y0FDbkJ0WSxJQUFJLENBQ0NtWSxLQUFLLENBQUMsQ0FBQyxDQUNQeUIsVUFBVSxDQUFDO2dCQUNSSCxRQUFRLEVBQUUsQ0FDTjdYLE1BQU0sQ0FBQzVCLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQzZSLFFBQVEsQ0FBQyxFQUM3QnhXLE1BQU0sQ0FBQzVCLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQzhSLFNBQVMsQ0FBQyxDQUNqQztnQkFDRHNCLE9BQU8sRUFBRTNaLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQytSLElBQUk7Z0JBQzFCdUIsV0FBVyxFQUFFLElBQUliLE1BQU0sQ0FBQ2YsSUFBSSxDQUFDNkIsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7Y0FDNUMsQ0FBQyxDQUFDLENBQ0RDLElBQUksQ0FBQyxVQUFTSCxVQUFVLEVBQUU7Z0JBQ3ZCLElBQUlJLEdBQUcsR0FBRyxJQUFJLENBQUMzWSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixJQUFJbVksTUFBTSxHQUFHLElBQUksQ0FBQ25ZLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCbVksTUFBTSxDQUFDUyxXQUFXLENBQUMsT0FBTyxFQUFFLFlBQVc7a0JBQ25DTCxVQUFVLENBQUNNLElBQUksQ0FBQ0YsR0FBRyxDQUFDO2dCQUN4QixDQUFDLENBQUM7Y0FDTixDQUFDLENBQUM7WUFDVjtVQUNKLENBQUMsQ0FBQztRQUNOO01BQ0osQ0FBQztNQUNEbk0sVUFBVSxFQUFFLFNBQUFBLENBQUEsRUFBVztRQUNuQixJQUFJaFIsV0FBVyxDQUFDSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQ3hCO1VBQ0EsSUFBSSxPQUFPcEMsQ0FBQyxDQUFDcU0sRUFBRSxDQUFDaVQsT0FBTyxLQUFLLFdBQVcsRUFBRTtZQUNyQ3RlLE9BQU8sQ0FBQzJGLFFBQVEsQ0FBQzRGLFlBQVksQ0FDekIsU0FBUyxFQUNULHNEQUFzRCxFQUN0RCxRQUNKLENBQUM7WUFDRCxPQUFPLElBQUk7VUFDZjtVQUVBLElBQUlnVCxVQUFVO1VBRWQsSUFBSXZlLE9BQU8sQ0FBQ2dELElBQUksQ0FBQ0csU0FBUyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDbENvYixVQUFVLEdBQUcsS0FBSztVQUN0QixDQUFDLE1BQU07WUFDSEEsVUFBVSxHQUFHLElBQUk7VUFDckI7VUFFQXZkLFdBQVcsQ0FBQ2tELElBQUksQ0FBQyxZQUFXO1lBQ3hCLElBQUlDLElBQUksR0FBR25GLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbEJtRixJQUFJLENBQUN1RyxPQUFPLEdBQUc7Y0FDWDhULFlBQVksRUFBRXJhLElBQUksQ0FBQzFELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxnQkFBZ0I7Y0FDeERnZSxVQUFVLEVBQUV0YSxJQUFJLENBQUMxRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksU0FBUztjQUNqRHFULE1BQU0sRUFBRTNQLElBQUksQ0FBQzFELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLEdBQUc7Y0FDL0NpZSxPQUFPLEVBQUV2YSxJQUFJLENBQUMxRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztjQUN2Q2tlLFVBQVUsRUFBRXhhLElBQUksQ0FBQ3lKLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUk7Y0FDNURnUixVQUFVLEVBQUV6YSxJQUFJLENBQUMxRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRTtjQUMxQ29lLFlBQVksRUFBRTFhLElBQUksQ0FBQzFELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztjQUN6Q3FlLGtCQUFrQixFQUFFM2EsSUFBSSxDQUFDMUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksT0FBTztjQUMzRHNlLFlBQVksRUFBRVI7WUFDbEIsQ0FBQztZQUVEdmYsQ0FBQyxDQUFDSSxNQUFNLENBQUMsQ0FBQ2tELFdBQVcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLFlBQVc7Y0FDL0M2QixJQUFJLENBQUN1RyxPQUFPLENBQUNrVSxVQUFVLEdBQ25CemEsSUFBSSxDQUFDdUcsT0FBTyxDQUFDbVUsWUFBWSxJQUFJMWEsSUFBSSxDQUFDdUcsT0FBTyxDQUFDa1UsVUFBVTtZQUM1RCxDQUFDLENBQUM7WUFFRnphLElBQUksQ0FBQ1YsR0FBRyxDQUNKLFFBQVEsRUFDUixLQUFLLEdBQ0xVLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ2tVLFVBQVUsR0FDdkIsTUFBTSxHQUNOemEsSUFBSSxDQUFDdUcsT0FBTyxDQUFDa1UsVUFBVSxHQUN2QixNQUNKLENBQUM7WUFDRHphLElBQUksQ0FDQ0UsSUFBSSxDQUFDLEdBQUcsR0FBR0YsSUFBSSxDQUFDdUcsT0FBTyxDQUFDOFQsWUFBWSxDQUFDLENBQ3JDL2EsR0FBRyxDQUNBLFNBQVMsRUFDVCxJQUFJLEdBQ0pVLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ2tVLFVBQVUsR0FDdkIsS0FBSyxHQUNMemEsSUFBSSxDQUFDdUcsT0FBTyxDQUFDa1UsVUFBVSxHQUN2QixNQUNKLENBQUM7WUFFTCxJQUFJemEsSUFBSSxDQUFDMUQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUU7Y0FDbEMsSUFBSXVlLGlCQUFpQixHQUFHN2EsSUFBSSxDQUFDdUcsT0FBTyxDQUFDb0osTUFBTTtjQUMzQzNQLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ29KLE1BQU0sR0FBRyxHQUFHLEdBQUczUCxJQUFJLENBQUN1RyxPQUFPLENBQUNvSixNQUFNO1lBQ25EO1lBRUEzUCxJQUFJLENBQUNzVyxNQUFNLENBQUMsaUNBQWlDLENBQUM7WUFDOUMsSUFBSXdFLGNBQWMsR0FBR2pnQixDQUFDLENBQUNtRixJQUFJLENBQUMsQ0FBQ2lOLFlBQVksQ0FBQyxZQUFXO2NBQ2pEO2NBQ0E2TixjQUFjLENBQUNYLE9BQU8sQ0FBQztnQkFDbkJHLFVBQVUsRUFBRXRhLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQytULFVBQVU7Z0JBQ25DSyxrQkFBa0IsRUFBRTNhLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ29VLGtCQUFrQjtnQkFDbkRKLE9BQU8sRUFBRTNZLE1BQU0sQ0FBQzVCLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ2dVLE9BQU8sQ0FBQztnQkFDckN6WixNQUFNLEVBQUUsSUFBSTtnQkFDWnVaLFlBQVksRUFBRSxHQUFHLEdBQUdyYSxJQUFJLENBQUN1RyxPQUFPLENBQUM4VCxZQUFZLEdBQUcsb0JBQW9CO2dCQUNwRU8sWUFBWSxFQUFFNWEsSUFBSSxDQUFDdUcsT0FBTyxDQUFDcVUsWUFBWTtnQkFDdkNKLFVBQVUsRUFBRXhhLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ2lVLFVBQVU7Z0JBQ25DTyxPQUFPLEVBQUU7a0JBQ0xDLFdBQVcsRUFBRWhiLElBQUksQ0FBQ0UsSUFBSSxDQUNsQixHQUFHLEdBQUdGLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQzhULFlBQVksR0FBRyxvQkFDdEMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFDRDFLLE1BQU0sRUFBRTNQLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ29KO2NBQ3pCLENBQUMsQ0FBQztjQUNGM1AsSUFBSSxDQUFDOEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDdkQsUUFBUSxDQUFDLGFBQWEsQ0FBQztZQUN2RCxDQUFDLENBQUM7O1lBRUY7WUFDQSxJQUFJeUIsSUFBSSxDQUFDOFQsSUFBSSxDQUFDLENBQUMsQ0FBQ2pXLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO2NBQ3pDaEMsT0FBTyxDQUFDMkYsUUFBUSxDQUFDeVosa0JBQWtCLENBQy9CamIsSUFBSSxFQUNKQSxJQUFJLENBQUN1RyxPQUFPLENBQUM4VCxZQUFZLEVBQ3pCcmEsSUFBSSxDQUFDdUcsT0FBTyxDQUFDa1UsVUFDakIsQ0FBQztZQUNMO1lBQ0EsSUFBSTNkLFdBQVcsQ0FBQ0csTUFBTSxHQUFHLENBQUMsRUFBRTtjQUN4QkgsV0FBVyxDQUFDaUQsSUFBSSxDQUFDLFlBQVc7Z0JBQ3hCLElBQUltYixVQUFVLEdBQUdyZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQztrQkFDcEJzZ0IsV0FBVyxHQUFHRCxVQUFVLENBQUNoYixJQUFJLENBQUMsR0FBRyxDQUFDO2tCQUNsQ2tiLGdCQUFnQixHQUFHRixVQUFVLENBQUM1ZSxJQUFJLENBQUMsYUFBYSxDQUFDO2tCQUNqRCtlLHNCQUFzQixHQUFHLFFBQVE7Z0JBQ3JDRixXQUFXLENBQUN6YixFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVc7a0JBQy9Cd2IsVUFBVSxDQUFDaGIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDeEIsV0FBVyxDQUFDMmMsc0JBQXNCLENBQUM7a0JBQ3pEeGdCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQytKLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQ3JHLFFBQVEsQ0FBQzhjLHNCQUFzQixDQUFDO2tCQUVyRCxJQUFJQyxXQUFXLEdBQUd6Z0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDeUIsSUFBSSxDQUFDLGVBQWUsQ0FBQztrQkFDL0N6QixDQUFDLENBQUN1Z0IsZ0JBQWdCLENBQUMsQ0FDZGpCLE9BQU8sQ0FBQztvQkFDTHhLLE1BQU0sRUFBRTJMO2tCQUNaLENBQUMsQ0FBQyxDQUNENWIsRUFBRSxDQUFDLGdCQUFnQixFQUFFLFlBQVc7b0JBQzdCNUQsT0FBTyxDQUFDd0osT0FBTyxDQUFDLFFBQVEsQ0FBQztvQkFDekJ6SixPQUFPLENBQUMyRixRQUFRLENBQUMwTCxJQUFJLENBQUMsQ0FBQztrQkFDM0IsQ0FBQyxDQUFDO2tCQUNOLElBQUlyUyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQ29DLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3BDcEMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMwZ0IsS0FBSyxDQUFDLENBQUMsQ0FBQ2pGLE1BQU0sQ0FBQ3piLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ29XLElBQUksQ0FBQyxDQUFDLENBQUM7a0JBQzFEO2tCQUNBLE9BQU8sS0FBSztnQkFDaEIsQ0FBQyxDQUFDO2dCQUNGLElBQUk0SixpQkFBaUIsRUFBRTtrQkFDbkIsSUFBSVcsa0JBQWtCLEdBQUdOLFVBQVUsQ0FBQ2hiLElBQUksQ0FDcENyRixDQUFDLENBQUMsa0JBQWtCLEdBQUdtRixJQUFJLENBQUN1RyxPQUFPLENBQUNvSixNQUFNLEdBQUcsSUFBSSxDQUNyRCxDQUFDO2tCQUNEdUwsVUFBVSxDQUFDaGIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDeEIsV0FBVyxDQUFDMmMsc0JBQXNCLENBQUM7a0JBQ3pERyxrQkFBa0IsQ0FDYjVXLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FDWnJHLFFBQVEsQ0FBQzhjLHNCQUFzQixDQUFDO2dCQUN6QyxDQUFDLE1BQU07a0JBQ0gsSUFBSUcsa0JBQWtCLEdBQUdOLFVBQVUsQ0FBQ2hiLElBQUksQ0FDcENyRixDQUFDLENBQUMscUJBQXFCLENBQzNCLENBQUM7a0JBQ0QyZ0Isa0JBQWtCLENBQ2I1VyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQ1pyRyxRQUFRLENBQUM4YyxzQkFBc0IsQ0FBQztnQkFDekM7Y0FDSixDQUFDLENBQUM7WUFDTjtVQUNKLENBQUMsQ0FBQztRQUNOO01BQ0osQ0FBQztNQUNESixrQkFBa0IsRUFBRSxTQUFBQSxDQUFTeFgsT0FBTyxFQUFFZ1ksZUFBZSxFQUFFQyxjQUFjLEVBQUU7UUFDbkU7UUFDQSxJQUFJLE9BQU83Z0IsQ0FBQyxDQUFDcU0sRUFBRSxDQUFDeVUsY0FBYyxLQUFLLFdBQVcsRUFBRTtVQUM1QzlmLE9BQU8sQ0FBQzJGLFFBQVEsQ0FBQzRGLFlBQVksQ0FDekIsU0FBUyxFQUNULDZMQUE2TCxFQUM3TCxRQUNKLENBQUM7VUFDRCxPQUFPLElBQUk7UUFDZjtRQUNBLElBQUlwSCxJQUFJLEdBQUd5RCxPQUFPO1VBQ2RtWSxRQUFRLEdBQUdILGVBQWU7VUFDMUJoQixVQUFVLEdBQUdpQixjQUFjO1VBQzNCRyxZQUFZLEdBQUcsSUFBSTtVQUNuQkMsU0FBUyxHQUFHLEdBQUc7VUFDZkMsUUFBUSxHQUFHLElBQUk7VUFDZkMsWUFBWTtVQUNaQyxZQUFZLEdBQUdwaEIsQ0FBQyxDQUFDLFdBQVcsQ0FBQztVQUM3QnFoQixXQUFXLEdBQUdyaEIsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO1VBQ2xDc2hCLGVBQWUsR0FBR3RoQixDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ3dWLElBQUksQ0FBQyxDQUFDO1VBQzdDK0wsZUFBZSxHQUFHdmhCLENBQUMsQ0FDZiwySEFDSixDQUFDO1FBRUxtaEIsWUFBWSxHQUFHbmhCLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDeUIsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUVyRCxJQUFJMGYsWUFBWSxDQUFDM0gsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1VBQ3BDMkgsWUFBWSxHQUFHQSxZQUFZLENBQUNuUixPQUFPLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQztRQUM1RCxDQUFDLE1BQU07VUFDSG1SLFlBQVksR0FBRyxzQkFBc0I7UUFDekM7UUFFQSxJQUFJQyxZQUFZLENBQUNoZixNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQ3pCNGUsWUFBWSxHQUFHLEtBQUs7VUFDcEJDLFNBQVMsR0FBRyxLQUFLO1VBQ2pCQyxRQUFRLEdBQUcsS0FBSztRQUNwQjtRQUVBL2IsSUFBSSxDQUFDMmIsY0FBYyxDQUFDO1VBQ2hCMUYsSUFBSSxFQUFFK0YsWUFBWTtVQUNsQjFGLE1BQU0sRUFBRSxHQUFHLEdBQUdzRixRQUFRO1VBQ3RCUyxPQUFPLEVBQUUsS0FBSztVQUNkbE0sTUFBTSxFQUFFLGFBQWE7VUFDckJtTSxlQUFlLEVBQUVSLFNBQVM7VUFDMUJELFlBQVksRUFBRUEsWUFBWTtVQUMxQlUsT0FBTyxFQUFFUjtRQUNiLENBQUMsQ0FBQztRQUVGL2IsSUFBSSxDQUFDTixFQUFFLENBQUMscUJBQXFCLEVBQUUsVUFBUzlELEtBQUssRUFBRXNWLFFBQVEsRUFBRStFLElBQUksRUFBRWpLLEtBQUssRUFBRTtVQUNsRSxJQUFJd1EsTUFBTSxHQUFHM2hCLENBQUMsQ0FBQ3FXLFFBQVEsQ0FBQyxDQUFDaFIsSUFBSSxDQUFDLEdBQUcsR0FBRzBiLFFBQVEsQ0FBQztVQUM3Q1ksTUFBTSxDQUFDdlAsWUFBWSxDQUFDLFlBQVc7WUFDM0JqTixJQUFJLENBQUNzVyxNQUFNLENBQUNrRyxNQUFNLENBQUM7WUFDbkJ4YyxJQUFJLENBQUNtYSxPQUFPLENBQUMsUUFBUSxFQUFFcUMsTUFBTSxDQUFDO1VBQ2xDLENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQztRQUVGeGMsSUFBSSxDQUFDTixFQUFFLENBQUMsc0JBQXNCLEVBQUUsVUFBUzlELEtBQUssRUFBRTZnQixLQUFLLEVBQUV4RyxJQUFJLEVBQUU7VUFDekRnRyxZQUFZLENBQUMxZCxRQUFRLENBQUMsNENBQTRDLENBQUM7VUFDbkUsSUFBSXNKLENBQUMsR0FBRzlHLFVBQVUsQ0FBQyxZQUFXO1lBQzFCa2IsWUFBWSxDQUFDdkosSUFBSSxDQUFDLENBQUM7WUFDbkIxUyxJQUFJLENBQUMwYyxLQUFLLENBQUNOLGVBQWUsQ0FBQztVQUMvQixDQUFDLEVBQUUsR0FBRyxDQUFDO1VBQ1AsSUFBSXZVLENBQUMsR0FBRzlHLFVBQVUsQ0FBQyxZQUFXO1lBQzFCbEcsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMwRCxRQUFRLENBQUMsNENBQTRDLENBQUM7VUFDeEYsQ0FBQyxFQUFFLElBQUksQ0FBQztRQUNaLENBQUMsQ0FBQztRQUNGeUIsSUFBSSxDQUFDTixFQUFFLENBQUMsdUJBQXVCLEVBQUUsVUFBUzlELEtBQUssRUFBRXNWLFFBQVEsRUFBRStFLElBQUksRUFBRWpLLEtBQUssRUFBRTtVQUNwRW5RLE9BQU8sQ0FBQ2tMLE1BQU0sQ0FBQ0UsUUFBUSxDQUFDcE0sQ0FBQyxDQUFDbVIsS0FBSyxDQUFDLENBQUM5TCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7VUFDbkRnYyxXQUFXLENBQUM3TCxJQUFJLENBQUM4TCxlQUFlLENBQUM7VUFDakMxWSxPQUFPLENBQUNuRSxHQUFHLENBQ1AsUUFBUSxFQUNSLEtBQUssR0FBR21iLFVBQVUsR0FBRyxNQUFNLEdBQUdBLFVBQVUsR0FBRyxNQUMvQyxDQUFDO1VBQ0RoWCxPQUFPLENBQ0Z2RCxJQUFJLENBQUMsR0FBRyxHQUFHMGIsUUFBUSxDQUFDLENBQ3BCdGMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLEdBQUdtYixVQUFVLEdBQUcsS0FBSyxHQUFHQSxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3hFLENBQUMsQ0FBQztNQUNOLENBQUM7TUFFRDNNLE9BQU8sRUFBRSxTQUFBQSxDQUFBLEVBQVc7UUFDaEIsSUFBSTZPLFFBQVEsR0FBRzloQixDQUFDLENBQUMsNEJBQTRCLENBQUM7UUFDOUMsSUFBSThoQixRQUFRLENBQUMxZixNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQ3JCO1VBQ0EsSUFBSSxPQUFPcEMsQ0FBQyxDQUFDcU0sRUFBRSxDQUFDNEcsT0FBTyxLQUFLLFdBQVcsRUFBRTtZQUNyQ2pTLE9BQU8sQ0FBQzJGLFFBQVEsQ0FBQzRGLFlBQVksQ0FDekIsK0RBQStELEVBQy9ELFNBQ0osQ0FBQztZQUNELE9BQU8sSUFBSTtVQUNmO1VBQ0E7VUFDQXVWLFFBQVEsQ0FBQzdPLE9BQU8sQ0FBQyxDQUFDO1FBQ3RCO01BQ0osQ0FBQztNQUNEQyxPQUFPLEVBQUUsU0FBQUEsQ0FBQSxFQUFXO1FBQ2hCLElBQUk2TyxRQUFRLEdBQUcvaEIsQ0FBQyxDQUFDLHlCQUF5QixDQUFDO1FBQzNDLElBQUkraEIsUUFBUSxDQUFDM2YsTUFBTSxHQUFHLENBQUMsRUFBRTtVQUNyQjtVQUNBLElBQUksT0FBT3BDLENBQUMsQ0FBQ3FNLEVBQUUsQ0FBQzZHLE9BQU8sS0FBSyxXQUFXLEVBQUU7WUFDckNsUyxPQUFPLENBQUMyRixRQUFRLENBQUM0RixZQUFZLENBQ3pCLCtEQUErRCxFQUMvRCxTQUNKLENBQUM7WUFDRCxPQUFPLElBQUk7VUFDZjtVQUNBO1VBQ0F3VixRQUFRLENBQUM3TyxPQUFPLENBQUM7WUFDYjhPLFNBQVMsRUFBRSxNQUFNO1lBQ2pCeE0sSUFBSSxFQUFFO1VBQ1YsQ0FBQyxDQUFDO1FBQ047TUFDSixDQUFDO01BRURyQyxhQUFhLEVBQUUsU0FBQUEsQ0FBQSxFQUFXO1FBQ3RCLElBQUk4TyxTQUFTLEdBQUdqaUIsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO1FBQ3BDLElBQUlpaUIsU0FBUyxDQUFDN2YsTUFBTSxHQUFHLENBQUMsRUFBRTtVQUN0QjtVQUNBLElBQUksT0FBT3BDLENBQUMsQ0FBQ3FNLEVBQUUsQ0FBQzhHLGFBQWEsS0FBSyxXQUFXLEVBQUU7WUFDM0NuUyxPQUFPLENBQUMyRixRQUFRLENBQUM0RixZQUFZLENBQ3pCLFNBQVMsRUFDVCw0REFBNEQsRUFDNUQsUUFDSixDQUFDO1lBQ0QsT0FBTyxJQUFJO1VBQ2Y7VUFDQTtVQUNBLElBQUkyVixPQUFPLEdBQUc7WUFDVkMsS0FBSyxFQUFFO2NBQ0hyTSxJQUFJLEVBQUUsT0FBTztjQUNic00sbUJBQW1CLEVBQUUsSUFBSTtjQUN6QkMsWUFBWSxFQUFFLEdBQUc7Y0FDakJGLEtBQUssRUFBRTtnQkFDSEcsV0FBVyxFQUFFO2NBQ2pCLENBQUM7Y0FDREMsU0FBUyxFQUFFO2dCQUNQQyxVQUFVLEVBQUUsU0FBQUEsQ0FBQSxFQUFXO2tCQUNuQixJQUFJLENBQUNDLEVBQUUsQ0FBQ04sS0FBSyxDQUFDTyxNQUFNLEdBQUcsSUFBSSxDQUFDRCxFQUFFLENBQUNOLEtBQUssQ0FBQ08sTUFBTSxDQUFDMVMsT0FBTyxDQUMvQyxZQUFZLEVBQ1osMEJBQ0osQ0FBQztrQkFDRCxJQUFJLENBQUN5UyxFQUFFLENBQUNFLFNBQVMsR0FBRyxjQUFjO2dCQUN0QztjQUNKO1lBQ0osQ0FBQztZQUNEQyxPQUFPLEVBQUU7Y0FDTEMsUUFBUSxFQUFFLDREQUE0RDtjQUN0RS9NLElBQUksRUFBRSxPQUFPO2NBQ2JxTSxLQUFLLEVBQUU7Z0JBQ0hHLFdBQVcsRUFBRTtjQUNqQixDQUFDO2NBQ0RNLE9BQU8sRUFBRTtnQkFDTEUsT0FBTyxFQUFFLElBQUk7Z0JBQ2JDLGtCQUFrQixFQUFFLElBQUk7Z0JBQ3hCQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztjQUNsQixDQUFDO2NBQ0RYLFlBQVksRUFBRSxHQUFHO2NBQ2pCRSxTQUFTLEVBQUU7Z0JBQ1BDLFVBQVUsRUFBRSxTQUFBQSxDQUFBLEVBQVc7a0JBQ25CLElBQUksQ0FBQ0MsRUFBRSxDQUFDTixLQUFLLENBQUNPLE1BQU0sR0FBRyxJQUFJLENBQUNELEVBQUUsQ0FBQ04sS0FBSyxDQUFDTyxNQUFNLENBQUMxUyxPQUFPLENBQy9DLFlBQVksRUFDWiwwQkFDSixDQUFDO2tCQUNELElBQUksQ0FBQ3lTLEVBQUUsQ0FBQ0UsU0FBUyxHQUFHLGNBQWM7Z0JBQ3RDO2NBQ0o7WUFDSixDQUFDO1lBQ0RNLE1BQU0sRUFBRTtjQUNKbk4sSUFBSSxFQUFFLFFBQVE7Y0FDZHVNLFlBQVksRUFBRSxHQUFHO2NBQ2pCRSxTQUFTLEVBQUU7Z0JBQ1BDLFVBQVUsRUFBRSxTQUFBQSxDQUFBLEVBQVc7a0JBQ25CLElBQUksQ0FBQ0MsRUFBRSxDQUFDTixLQUFLLENBQUNPLE1BQU0sR0FBRyxJQUFJLENBQUNELEVBQUUsQ0FBQ04sS0FBSyxDQUFDTyxNQUFNLENBQUMxUyxPQUFPLENBQy9DLFlBQVksRUFDWiwwQkFDSixDQUFDO2tCQUNELElBQUksQ0FBQ3lTLEVBQUUsQ0FBQ0UsU0FBUyxHQUFHLGNBQWM7Z0JBQ3RDO2NBQ0o7WUFDSixDQUFDO1lBQ0QvTSxJQUFJLEVBQUU7Y0FDRkUsSUFBSSxFQUFFLE1BQU07Y0FDWnVNLFlBQVksRUFBRSxHQUFHO2NBQ2pCRSxTQUFTLEVBQUU7Z0JBQ1BXLGdCQUFnQixFQUFFLFNBQUFBLENBQVNDLFdBQVcsRUFBRTtrQkFDcEM7O2tCQUVBO2tCQUNBLElBQUluakIsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDcUYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDakQsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDaERwQixPQUFPLENBQUNrTCxNQUFNLENBQUNFLFFBQVEsQ0FBQ3BNLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQ3FGLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztrQkFDaEU7Z0JBQ0o7Y0FDSjtZQUNKLENBQUM7WUFDRCtkLE1BQU0sRUFBRTtjQUNKdE4sSUFBSSxFQUFFLFFBQVE7Y0FDZHVNLFlBQVksRUFBRSxHQUFHO2NBQ2pCZ0IsY0FBYyxFQUFFLElBQUk7Y0FDcEJDLFFBQVEsRUFBRSxJQUFJO2NBQ2RmLFNBQVMsRUFBRTtnQkFDUEMsVUFBVSxFQUFFLFNBQUFBLENBQUEsRUFBVztrQkFDbkIsSUFBSSxDQUFDQyxFQUFFLENBQUNOLEtBQUssQ0FBQ08sTUFBTSxHQUFHLElBQUksQ0FBQ0QsRUFBRSxDQUFDTixLQUFLLENBQUNPLE1BQU0sQ0FBQzFTLE9BQU8sQ0FDL0MsWUFBWSxFQUNaLDBCQUNKLENBQUM7a0JBQ0QsSUFBSSxDQUFDeVMsRUFBRSxDQUFDRSxTQUFTLEdBQUcsY0FBYztnQkFDdEMsQ0FBQztnQkFDRHRELElBQUksRUFBRSxTQUFBQSxDQUFBLEVBQVc7a0JBQ2IsSUFBSXJmLENBQUMsQ0FBQyxJQUFJLENBQUM4ZSxPQUFPLENBQUMsQ0FBQ3paLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQ2pELE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQzFDcEMsQ0FBQyxDQUFDLElBQUksQ0FBQzhlLE9BQU8sQ0FBQyxDQUFDelosSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDbUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDeUssSUFBSSxDQUFDLENBQUM7a0JBQy9DO2dCQUNKLENBQUM7Z0JBQ0RzUyxLQUFLLEVBQUUsU0FBQUEsQ0FBQSxFQUFXO2tCQUNkLElBQUl2akIsQ0FBQyxDQUFDLElBQUksQ0FBQzhlLE9BQU8sQ0FBQyxDQUFDelosSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDakQsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDMUNwQyxDQUFDLENBQUMsSUFBSSxDQUFDOGUsT0FBTyxDQUFDLENBQUN6WixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUNtQixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUNnZCxJQUFJLENBQUMsQ0FBQztrQkFDL0M7Z0JBQ0o7Y0FDSixDQUFDO2NBQ0RDLGVBQWUsRUFBRSxJQUFJO2NBQ3JCQyxTQUFTLEVBQUU7WUFDZjtVQUNKLENBQUM7VUFDRDtVQUNBekIsU0FBUyxDQUFDL2MsSUFBSSxDQUFDLFlBQVc7WUFDdEIsSUFBSUMsSUFBSSxHQUFHbkYsQ0FBQyxDQUFDLElBQUksQ0FBQztjQUNkMmpCLFFBQVEsR0FBR3hlLElBQUksQ0FBQzFELElBQUksQ0FBQyxlQUFlLENBQUM7WUFDekMsUUFBUWtpQixRQUFRO2NBQ1osS0FBSyxPQUFPO2dCQUNSeGUsSUFBSSxDQUFDZ08sYUFBYSxDQUFDK08sT0FBTyxDQUFDQyxLQUFLLENBQUM7Z0JBQ2pDO2NBQ0osS0FBSyxTQUFTO2dCQUNWaGQsSUFBSSxDQUFDZ08sYUFBYSxDQUFDK08sT0FBTyxDQUFDVSxPQUFPLENBQUM7Z0JBQ25DO2NBQ0osS0FBSyxRQUFRO2dCQUNUemQsSUFBSSxDQUFDZ08sYUFBYSxDQUFDK08sT0FBTyxDQUFDZSxNQUFNLENBQUM7Z0JBQ2xDO2NBQ0osS0FBSyxNQUFNO2dCQUNQOWQsSUFBSSxDQUFDZ08sYUFBYSxDQUFDK08sT0FBTyxDQUFDdE0sSUFBSSxDQUFDO2dCQUNoQztjQUNKLEtBQUssUUFBUTtnQkFDVHpRLElBQUksQ0FBQ2dPLGFBQWEsQ0FBQytPLE9BQU8sQ0FBQ2tCLE1BQU0sQ0FBQztnQkFDbEM7WUFDUjtVQUNKLENBQUMsQ0FBQztRQUNOO01BQ0osQ0FBQztNQUNEaFEsUUFBUSxFQUFFLFNBQUFBLENBQUEsRUFBVztRQUNqQixJQUFJd1EsU0FBUyxHQUFHNWpCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQztRQUN4QyxJQUFJNGpCLFNBQVMsQ0FBQ3hoQixNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQ3RCO1VBQ0EsSUFBSSxPQUFPcEMsQ0FBQyxDQUFDcU0sRUFBRSxDQUFDd1gsUUFBUSxLQUFLLFdBQVcsRUFBRTtZQUN0QzdpQixPQUFPLENBQUMyRixRQUFRLENBQUM0RixZQUFZLENBQ3pCLFNBQVMsRUFDVCw2TUFBNk0sRUFDN00sUUFBUSxFQUNSLEtBQ0osQ0FBQztZQUNELE9BQU8sSUFBSTtVQUNmO1VBQ0FxWCxTQUFTLENBQUMxZSxJQUFJLENBQUMsWUFBVztZQUN0QixJQUFJQyxJQUFJLEdBQUduRixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2xCO1lBQ0FtRixJQUFJLENBQUN1RyxPQUFPLEdBQUc7Y0FDWG9ZLFFBQVEsRUFBRTNlLElBQUksQ0FBQzFELElBQUksQ0FBQyxrQkFBa0IsQ0FBQztjQUN2QzBOLFFBQVEsRUFBRWhLLElBQUksQ0FBQ3lKLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQztjQUN4RG1WLElBQUksRUFBRTVlLElBQUksQ0FBQ3lKLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUk7Y0FDdkRvVixhQUFhLEVBQUU3ZSxJQUFJLENBQUN5SixJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUk7Y0FDekVxVixJQUFJLEVBQUU5ZSxJQUFJLENBQUN5SixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJO2NBQ3ZEc1YsR0FBRyxFQUFFL2UsSUFBSSxDQUFDMUQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksRUFBRTtjQUMzQzBpQixPQUFPLEVBQUVoZixJQUFJLENBQUMxRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDO2NBQzdDMmlCLE1BQU0sRUFBRWpmLElBQUksQ0FBQzFELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7Y0FDM0M0aUIsUUFBUSxFQUFFbGYsSUFBSSxDQUFDeUosSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsR0FBRztZQUMxRCxDQUFDO1lBQ0QsSUFBSTBWLE1BQU0sR0FBRyxrRUFBa0U7WUFDL0UsSUFBSXpoQixLQUFLLEdBQUdzQyxJQUFJLENBQUN1RyxPQUFPLENBQUNvWSxRQUFRLENBQUNqaEIsS0FBSyxDQUFDeWhCLE1BQU0sQ0FBQztZQUMvQyxJQUFJemhCLEtBQUssSUFBSUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDVCxNQUFNLElBQUksRUFBRSxFQUFFO2NBQ2hDK0MsSUFBSSxDQUFDdUcsT0FBTyxDQUFDb1ksUUFBUSxHQUFHamhCLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDcEMsQ0FBQyxNQUFNO2NBQ0hzQyxJQUFJLENBQUN1RyxPQUFPLENBQUNvWSxRQUFRLEdBQUczZSxJQUFJLENBQUN1RyxPQUFPLENBQUNvWSxRQUFRO1lBQ2pEO1lBQ0EzZSxJQUFJLENBQUMwZSxRQUFRLENBQUM7Y0FDVlUsZUFBZSxFQUFFLElBQUk7Y0FDckJDLE9BQU8sRUFBRXJmLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ29ZLFFBQVE7Y0FDOUJXLE1BQU0sRUFBRXRmLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ3VZLElBQUk7Y0FDekJTLFVBQVUsRUFBRTtnQkFDUnhhLEtBQUssRUFBRS9FLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ3hCLEtBQUs7Z0JBQ3pCeWEsR0FBRyxFQUFFeGYsSUFBSSxDQUFDdUcsT0FBTyxDQUFDaVosR0FBRztnQkFDckJDLFFBQVEsRUFBRXpmLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ3lELFFBQVE7Z0JBQy9CMFYsY0FBYyxFQUFFMWYsSUFBSSxDQUFDdUcsT0FBTyxDQUFDb1osSUFBSTtnQkFDakNULFFBQVEsRUFBRWxmLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQzJZLFFBQVE7Z0JBQy9CVSxNQUFNLEVBQUUza0IsTUFBTSxDQUFDb1csUUFBUSxDQUFDdU8sTUFBTTtnQkFDOUJDLFFBQVEsRUFBRSxDQUFDO2dCQUNYQyxHQUFHLEVBQUUsQ0FBQztnQkFDTkMsUUFBUSxFQUFFO2NBQ2QsQ0FBQztjQUNEQyxNQUFNLEVBQUU7Z0JBQ0pDLE9BQU8sRUFBRUM7Y0FDYjtZQUNKLENBQUMsQ0FBQztZQUVGLFNBQVNBLGFBQWFBLENBQUN0a0IsS0FBSyxFQUFFO2NBQzFCLElBQUlvRSxJQUFJLENBQUN1RyxPQUFPLENBQUN3WSxHQUFHLEVBQUU7Z0JBQ2xCbmpCLEtBQUssQ0FBQ3VrQixNQUFNLENBQUNDLFNBQVMsQ0FBQ3BnQixJQUFJLENBQUN1RyxPQUFPLENBQUN3WSxHQUFHLENBQUM7Y0FDNUM7Y0FDQSxJQUFJL2UsSUFBSSxDQUFDdUcsT0FBTyxDQUFDcVksSUFBSSxFQUFFO2dCQUNuQmhqQixLQUFLLENBQUN1a0IsTUFBTSxDQUFDdkIsSUFBSSxDQUFDLENBQUM7Y0FDdkI7Y0FDQSxJQUFJNWUsSUFBSSxDQUFDdUcsT0FBTyxDQUFDc1ksYUFBYSxFQUFFO2dCQUM1QixJQUFJd0IsUUFBUSxHQUFHLElBQUlsTSxRQUFRLENBQUM7a0JBQ3hCMVEsT0FBTyxFQUFFekQsSUFBSTtrQkFDYndVLE9BQU8sRUFBRSxTQUFBQSxDQUFTSixTQUFTLEVBQUU7b0JBQ3pCeFksS0FBSyxDQUFDdWtCLE1BQU0sQ0FBQ0csVUFBVSxDQUFDLENBQUM7b0JBQ3pCLElBQUl0Z0IsSUFBSSxDQUFDdUcsT0FBTyxDQUFDeUQsUUFBUSxJQUFJLElBQUksSUFBSW9LLFNBQVMsSUFBSSxJQUFJLEVBQUU7c0JBQ3BEeFksS0FBSyxDQUFDdWtCLE1BQU0sQ0FBQ0ksU0FBUyxDQUFDLENBQUM7b0JBQzVCO2tCQUNKO2dCQUNKLENBQUMsQ0FBQztjQUNOO2NBQ0EsSUFBSTVpQixRQUFRLENBQUNKLFFBQVEsRUFBRTtnQkFDbkJ5QyxJQUFJLENBQUNOLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBU3lFLEVBQUUsRUFBRTtrQkFDMUJ2SSxLQUFLLENBQUN1a0IsTUFBTSxDQUFDSSxTQUFTLENBQUMsQ0FBQztrQkFDeEJwYyxFQUFFLENBQUNPLGNBQWMsQ0FBQyxDQUFDO2dCQUN2QixDQUFDLENBQUM7Y0FDTjtZQUNKO1VBQ0osQ0FBQyxDQUFDO1FBQ047TUFDSixDQUFDO01BQ0R3SixXQUFXLEVBQUUsU0FBQUEsQ0FBQSxFQUFXO1FBQ3BCLElBQUlzUyxTQUFTLEdBQUczbEIsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO1FBQ3RDLElBQUkybEIsU0FBUyxDQUFDdmpCLE1BQU0sR0FBRyxDQUFDLEVBQUU7VUFDdEI7VUFDQSxJQUFJLE9BQU9wQyxDQUFDLENBQUNxTSxFQUFFLENBQUN1WixZQUFZLEtBQUssV0FBVyxFQUFFO1lBQzFDNWtCLE9BQU8sQ0FBQzJGLFFBQVEsQ0FBQzRGLFlBQVksQ0FDekIsU0FBUyxFQUNULG1OQUFtTixFQUNuTixRQUFRLEVBQ1IsS0FDSixDQUFDO1lBQ0QsT0FBTyxJQUFJO1VBQ2Y7VUFDQW9aLFNBQVMsQ0FBQ3pnQixJQUFJLENBQUMsWUFBVztZQUN0QixJQUFJQyxJQUFJLEdBQUduRixDQUFDLENBQUMsSUFBSSxDQUFDO2NBQ2Q2bEIsU0FBUyxHQUFHMWdCLElBQUksQ0FBQzFELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLElBQUk7Y0FDL0Nxa0IsUUFBUSxHQUFHM2dCLElBQUksQ0FBQzFELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEtBQUs7Y0FDaERza0IsU0FBUyxHQUFHNWdCLElBQUksQ0FBQzFELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLE1BQU07Y0FDbkR1a0IsV0FBVyxHQUFHN2dCLElBQUksQ0FBQzFELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLE9BQU87Y0FDeER3a0IsV0FBVyxHQUFHOWdCLElBQUksQ0FBQzFELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7Y0FDbER5a0IsYUFBYSxHQUFHL2dCLElBQUksQ0FBQzFELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLE1BQU07Y0FDM0Qwa0IsWUFBWSxHQUFHaGhCLElBQUksQ0FBQzFELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLElBQUk7Y0FDdkQya0IsUUFBUSxHQUFHamhCLElBQUksQ0FBQzFELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLElBQUk7Y0FDL0M0a0IsVUFBVSxHQUFHbGhCLElBQUksQ0FBQzFELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUU7Y0FDakQ2a0IsU0FBUyxHQUFHbmhCLElBQUksQ0FBQzFELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7Y0FDOUM4a0IsUUFBUSxHQUFHcGhCLElBQUksQ0FBQzFELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7Y0FDNUMra0IsWUFBWSxHQUFHcmhCLElBQUksQ0FBQzFELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLElBQUk7Y0FDdkRnbEIsY0FBYyxHQUFHdGhCLElBQUksQ0FBQzFELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLElBQUk7Y0FDM0RpbEIsWUFBWSxHQUFHdmhCLElBQUksQ0FBQzFELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLEtBQUs7Y0FDeERrbEIsUUFBUSxHQUFHeGhCLElBQUksQ0FBQzFELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEtBQUs7Y0FDaERtbEIsYUFBYSxHQUFHemhCLElBQUksQ0FBQzFELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLEtBQUs7WUFDOUQwRCxJQUFJLENBQUN5Z0IsWUFBWSxDQUFDO2NBQ2Q5QixRQUFRLEVBQUUrQixTQUFTO2NBQ25COUIsSUFBSSxFQUFFK0IsUUFBUTtjQUNkZSxLQUFLLEVBQUVkLFNBQVM7Y0FDaEJlLE9BQU8sRUFBRWQsV0FBVztjQUNwQnJoQixPQUFPLEVBQUVzaEIsV0FBVztjQUNwQmMsV0FBVyxFQUFFYixhQUFhO2NBQzFCYyxlQUFlLEVBQUViLFlBQVk7Y0FDN0JsQyxJQUFJLEVBQUVtQyxRQUFRO2NBQ2RsQyxHQUFHLEVBQUVtQyxVQUFVO2NBQ2ZsQyxPQUFPLEVBQUVtQyxTQUFTO2NBQ2xCbEMsTUFBTSxFQUFFbUMsUUFBUTtjQUNoQnBYLFFBQVEsRUFBRXFYLFlBQVk7Y0FDdEJTLGNBQWMsRUFBRVIsY0FBYztjQUM5QlMsVUFBVSxFQUFFUCxRQUFRO2NBQ3BCUSxZQUFZLEVBQUVUO1lBQ2xCLENBQUMsQ0FBQztVQUNOLENBQUMsQ0FBQztRQUNOO01BQ0osQ0FBQztNQUNEcFQsS0FBSyxFQUFFLFNBQUFBLENBQUEsRUFBVztRQUNkO1FBQ0EsSUFBSSxPQUFPdFQsQ0FBQyxDQUFDcU0sRUFBRSxDQUFDOEcsYUFBYSxLQUFLLFdBQVcsRUFBRTtVQUMzQ25TLE9BQU8sQ0FBQzJGLFFBQVEsQ0FBQzRGLFlBQVksQ0FDekIsU0FBUyxFQUNULDREQUE0RCxFQUM1RCxRQUNKLENBQUM7VUFDRCxPQUFPLElBQUk7UUFDZjtRQUNBLElBQUk2YSxNQUFNLEdBQUdwbkIsQ0FBQyxDQUFDLFFBQVEsQ0FBQztVQUNwQnFuQixXQUFXLEdBQUdybkIsQ0FBQyxDQUFDLGNBQWMsQ0FBQztVQUMvQnNuQixTQUFTLEdBQUd0bkIsQ0FBQyxDQUFDLFlBQVksQ0FBQztVQUMzQnVuQixTQUFTLEdBQUcsaUJBQWlCO1VBQzdCQyxjQUFjLEdBQUcsY0FBYztVQUMvQkMsWUFBWSxHQUFHem5CLENBQUMsQ0FBQyxjQUFjLENBQUM7VUFDaEMwbkIsWUFBWSxHQUFHMW5CLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztVQUNsQzJuQixhQUFhLEdBQUdELFlBQVksQ0FBQ3JpQixJQUFJLENBQUMsNEJBQTRCLENBQUM7O1FBRW5FO1FBQ0EsSUFBSStoQixNQUFNLENBQUNobEIsTUFBTSxHQUFHLENBQUMsRUFBRTtVQUNuQmdsQixNQUFNLENBQUNsaUIsSUFBSSxDQUFDLFlBQVc7WUFDbkIsSUFBSUMsSUFBSSxHQUFHbkYsQ0FBQyxDQUFDLElBQUksQ0FBQztjQUNkNG5CLFNBQVMsR0FBR3ppQixJQUFJLENBQUMxRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSTtjQUMzQ29tQixnQkFBZ0IsR0FBRzFpQixJQUFJLENBQUMxRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxHQUFHO2NBQ3pEcW1CLGNBQWMsR0FDZDNpQixJQUFJLENBQUMxRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSx1QkFBdUI7Y0FDeERzbUIsaUJBQWlCLEdBQ2pCNWlCLElBQUksQ0FBQ3lKLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztjQUNsRG9aLHFCQUFxQixHQUFHN2lCLElBQUksQ0FBQzFELElBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUMzRDtZQUNBLElBQUkwRCxJQUFJLENBQUNuQyxRQUFRLENBQUN1a0IsU0FBUyxDQUFDLEVBQUU7Y0FDMUIsSUFBSVUsU0FBUyxHQUFHam9CLENBQUMsQ0FBQyxJQUFJLENBQUM7Y0FDdkIsSUFBSWtvQixPQUFPLEdBQUdoaUIsVUFBVSxDQUFDLFlBQVc7Z0JBQ2hDK2hCLFNBQVMsQ0FBQ3ZrQixRQUFRLENBQUM4akIsY0FBYyxDQUFDO2NBQ3RDLENBQUMsRUFBRUksU0FBUyxDQUFDO1lBQ2pCO1lBQ0E7WUFDQXppQixJQUFJLENBQUNFLElBQUksQ0FBQ29pQixZQUFZLENBQUMsQ0FBQ1UsS0FBSyxDQUFDLFlBQVc7Y0FDckNoakIsSUFBSSxDQUFDdEIsV0FBVyxDQUFDMmpCLGNBQWMsQ0FBQztjQUNoQyxPQUFPLEtBQUs7WUFDaEIsQ0FBQyxDQUFDO1lBQ0Y7WUFDQSxJQUFJcmlCLElBQUksQ0FBQ25DLFFBQVEsQ0FBQ3VrQixTQUFTLENBQUMsRUFBRTtjQUMxQixJQUFJUSxpQkFBaUIsSUFBSSxJQUFJLEVBQUU7Z0JBQzNCO2dCQUNBLElBQUkvYSxDQUFDLEdBQUc5RyxVQUFVLENBQUMsWUFBVztrQkFDMUJsRyxDQUFDLENBQUNtVCxhQUFhLENBQUNrTSxJQUFJLENBQUM7b0JBQ2JsTyxLQUFLLEVBQUU7c0JBQ0hpWCxHQUFHLEVBQUVqakI7b0JBQ1QsQ0FBQztvQkFDRDJRLElBQUksRUFBRSxRQUFRO29CQUNkdU4sY0FBYyxFQUFFLElBQUk7b0JBQ3BCQyxRQUFRLEVBQUUsSUFBSTtvQkFDZGYsU0FBUyxFQUFFO3NCQUNQQyxVQUFVLEVBQUUsU0FBQUEsQ0FBQSxFQUFXO3dCQUNuQixJQUFJLENBQUNDLEVBQUUsQ0FBQ04sS0FBSyxDQUFDTyxNQUFNLEdBQUcsSUFBSSxDQUFDRCxFQUFFLENBQUNOLEtBQUssQ0FBQ08sTUFBTSxDQUFDMVMsT0FBTyxDQUMvQyxZQUFZLEVBQ1osMEJBQ0osQ0FBQzt3QkFDRCxJQUFJLENBQUN5UyxFQUFFLENBQUNFLFNBQVMsR0FBRyxjQUFjO3NCQUN0QyxDQUFDO3NCQUNEdEQsSUFBSSxFQUFFLFNBQUFBLENBQUEsRUFBVzt3QkFDYixJQUFJcmYsQ0FBQyxDQUFDLElBQUksQ0FBQzhlLE9BQU8sQ0FBQyxDQUFDelosSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDakQsTUFBTSxHQUFHLENBQUMsRUFBRTswQkFDMUNwQyxDQUFDLENBQUMsSUFBSSxDQUFDOGUsT0FBTyxDQUFDLENBQUN6WixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUNtQixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUN5SyxJQUFJLENBQUMsQ0FBQzt3QkFDL0M7c0JBQ0osQ0FBQztzQkFDRHNTLEtBQUssRUFBRSxTQUFBQSxDQUFBLEVBQVc7d0JBQ2QsSUFBSXZqQixDQUFDLENBQUMsSUFBSSxDQUFDOGUsT0FBTyxDQUFDLENBQUN6WixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUNqRCxNQUFNLEdBQUcsQ0FBQyxFQUFFOzBCQUMxQ3BDLENBQUMsQ0FBQyxJQUFJLENBQUM4ZSxPQUFPLENBQUMsQ0FBQ3paLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQ21CLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQ2dkLElBQUksQ0FBQyxDQUFDO3dCQUMvQztzQkFDSjtvQkFDSjtrQkFDSixDQUFDLEVBQ0QsQ0FDSixDQUFDO2dCQUNMLENBQUMsRUFBRW9FLFNBQVMsQ0FBQztjQUNqQixDQUFDLE1BQU07Z0JBQ0gsSUFBSSxPQUFPcG5CLE9BQU8sQ0FBQ2dHLEdBQUcsQ0FBQ3NoQixjQUFjLENBQUMsSUFBSSxXQUFXLEVBQUU7a0JBQ25EO2tCQUNBLElBQUk5YSxDQUFDLEdBQUc5RyxVQUFVLENBQUMsWUFBVztvQkFDMUJsRyxDQUFDLENBQUNtVCxhQUFhLENBQUNrTSxJQUFJLENBQUM7c0JBQ2JsTyxLQUFLLEVBQUU7d0JBQ0hpWCxHQUFHLEVBQUVqakI7c0JBQ1QsQ0FBQztzQkFDRDJRLElBQUksRUFBRSxRQUFRO3NCQUNkdU4sY0FBYyxFQUFFLElBQUk7c0JBQ3BCQyxRQUFRLEVBQUUsSUFBSTtzQkFDZGYsU0FBUyxFQUFFO3dCQUNQQyxVQUFVLEVBQUUsU0FBQUEsQ0FBQSxFQUFXOzBCQUNuQixJQUFJLENBQUNDLEVBQUUsQ0FBQ04sS0FBSyxDQUFDTyxNQUFNLEdBQUcsSUFBSSxDQUFDRCxFQUFFLENBQUNOLEtBQUssQ0FBQ08sTUFBTSxDQUFDMVMsT0FBTyxDQUMvQyxZQUFZLEVBQ1osMEJBQ0osQ0FBQzswQkFDRCxJQUFJLENBQUN5UyxFQUFFLENBQUNFLFNBQVMsR0FBRyxjQUFjO3dCQUN0QyxDQUFDO3dCQUNEdEQsSUFBSSxFQUFFLFNBQUFBLENBQUEsRUFBVzswQkFDYixJQUFJcmYsQ0FBQyxDQUFDLElBQUksQ0FBQzhlLE9BQU8sQ0FBQyxDQUFDelosSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDakQsTUFBTSxHQUFHLENBQUMsRUFBRTs0QkFDMUNwQyxDQUFDLENBQUMsSUFBSSxDQUFDOGUsT0FBTyxDQUFDLENBQUN6WixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUNtQixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUN5SyxJQUFJLENBQUMsQ0FBQzswQkFDL0M7MEJBQ0EwVyxhQUFhLENBQUNRLEtBQUssQ0FBQyxZQUFXOzRCQUMzQjNuQixPQUFPLENBQUNxRyxHQUFHLENBQUNpaEIsY0FBYyxFQUFFLElBQUksRUFBRTs4QkFDOUJoaEIsT0FBTyxFQUFFQyxNQUFNLENBQUM4Z0IsZ0JBQWdCOzRCQUNwQyxDQUFDLENBQUM7NEJBQ0Y3bkIsQ0FBQyxDQUFDbVQsYUFBYSxDQUFDb1EsS0FBSyxDQUFDLENBQUM7NEJBQ3ZCbUUsWUFBWSxDQUFDN2pCLFdBQVcsQ0FBQzJqQixjQUFjLENBQUM7NEJBQ3hDLE9BQU8sS0FBSzswQkFDaEIsQ0FBQyxDQUFDO3dCQUNOLENBQUM7d0JBQ0RqRSxLQUFLLEVBQUUsU0FBQUEsQ0FBQSxFQUFXOzBCQUNkLElBQUl2akIsQ0FBQyxDQUFDLElBQUksQ0FBQzhlLE9BQU8sQ0FBQyxDQUFDelosSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDakQsTUFBTSxHQUFHLENBQUMsRUFBRTs0QkFDMUNwQyxDQUFDLENBQUMsSUFBSSxDQUFDOGUsT0FBTyxDQUFDLENBQUN6WixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUNtQixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUNnZCxJQUFJLENBQUMsQ0FBQzswQkFDL0M7MEJBRUFoakIsT0FBTyxDQUFDcUcsR0FBRyxDQUFDaWhCLGNBQWMsRUFBRSxJQUFJLEVBQUU7NEJBQzlCaGhCLE9BQU8sRUFBRUMsTUFBTSxDQUFDOGdCLGdCQUFnQjswQkFDcEMsQ0FBQyxDQUFDO3dCQUNOO3NCQUNKO29CQUNKLENBQUMsRUFDRCxDQUNKLENBQUM7a0JBQ0wsQ0FBQyxFQUFFRCxTQUFTLENBQUM7Z0JBQ2pCO2NBQ0o7WUFDSjtZQUNBO1lBQ0F6aUIsSUFBSSxDQUFDRSxJQUFJLENBQUNvaUIsWUFBWSxDQUFDLENBQUNVLEtBQUssQ0FBQyxZQUFXO2NBQ3JDbm9CLENBQUMsQ0FBQ21ULGFBQWEsQ0FBQ29RLEtBQUssQ0FBQyxDQUFDO2NBQ3ZCLE9BQU8sS0FBSztZQUNoQixDQUFDLENBQUM7WUFFRixJQUFJeUUscUJBQXFCLEVBQUUsQ0FBQztVQUNoQyxDQUFDLENBQUM7UUFDTjtRQUNBO1FBQ0EsSUFBSVgsV0FBVyxDQUFDamxCLE1BQU0sR0FBRyxDQUFDLEVBQUU7VUFDeEJpbEIsV0FBVyxDQUFDbmlCLElBQUksQ0FBQyxZQUFXO1lBQ3hCLElBQUlDLElBQUksR0FBR25GLENBQUMsQ0FBQyxJQUFJLENBQUM7Y0FDZDRuQixTQUFTLEdBQUd6aUIsSUFBSSxDQUFDMUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUk7Y0FDM0NvbUIsZ0JBQWdCLEdBQUcxaUIsSUFBSSxDQUFDMUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksR0FBRztjQUN6RHFtQixjQUFjLEdBQUczaUIsSUFBSSxDQUFDMUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksZ0JBQWdCO2NBQ2xFc21CLGlCQUFpQixHQUNqQjVpQixJQUFJLENBQUN5SixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7Y0FDbERvWixxQkFBcUIsR0FBRzdpQixJQUFJLENBQUMxRCxJQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDM0Q7WUFDQSxJQUFJMEQsSUFBSSxDQUFDbkMsUUFBUSxDQUFDdWtCLFNBQVMsQ0FBQyxFQUFFO2NBQzFCLElBQUlVLFNBQVMsR0FBR2pvQixDQUFDLENBQUMsSUFBSSxDQUFDO2NBQ3ZCLElBQUlrb0IsT0FBTyxHQUFHaGlCLFVBQVUsQ0FBQyxZQUFXO2dCQUNoQytoQixTQUFTLENBQUN2a0IsUUFBUSxDQUFDOGpCLGNBQWMsQ0FBQztnQkFDbEMsSUFBSVEscUJBQXFCLEVBQUU7a0JBQ3ZCLElBQUloYixDQUFDLEdBQUc5RyxVQUFVLENBQUMsWUFBVztvQkFDMUJmLElBQUksQ0FBQ3RCLFdBQVcsQ0FBQzJqQixjQUFjLENBQUM7a0JBQ3BDLENBQUMsRUFBRVEscUJBQXFCLENBQUM7Z0JBQzdCO2NBQ0osQ0FBQyxFQUFFSixTQUFTLENBQUM7WUFDakI7WUFDQTtZQUNBemlCLElBQUksQ0FBQ0UsSUFBSSxDQUFDb2lCLFlBQVksQ0FBQyxDQUFDVSxLQUFLLENBQUMsWUFBVztjQUNyQ2hqQixJQUFJLENBQUN0QixXQUFXLENBQUMyakIsY0FBYyxDQUFDO2NBQ2hDLE9BQU8sS0FBSztZQUNoQixDQUFDLENBQUM7WUFDRjtZQUNBLElBQUlyaUIsSUFBSSxDQUFDbkMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUFFO2NBQ2hDLElBQUlrbEIsT0FBTyxHQUFHaGlCLFVBQVUsQ0FBQyxZQUFXO2dCQUNoQyxJQUFJNmhCLGlCQUFpQixJQUFJLElBQUksRUFBRTtrQkFDM0JMLFlBQVksQ0FBQ2hrQixRQUFRLENBQUM4akIsY0FBYyxDQUFDO2dCQUN6QyxDQUFDLE1BQU07a0JBQ0gsSUFBSSxPQUFPaG5CLE9BQU8sQ0FBQ2dHLEdBQUcsQ0FBQ3NoQixjQUFjLENBQUMsSUFBSSxXQUFXLEVBQUU7b0JBQ25ESixZQUFZLENBQUNoa0IsUUFBUSxDQUFDOGpCLGNBQWMsQ0FBQztrQkFDekM7Z0JBQ0o7Y0FDSixDQUFDLEVBQUVJLFNBQVMsQ0FBQztjQUNiRCxhQUFhLENBQUNRLEtBQUssQ0FBQyxZQUFXO2dCQUMzQjNuQixPQUFPLENBQUNxRyxHQUFHLENBQUNpaEIsY0FBYyxFQUFFLElBQUksRUFBRTtrQkFDOUJoaEIsT0FBTyxFQUFFQyxNQUFNLENBQUM4Z0IsZ0JBQWdCO2dCQUNwQyxDQUFDLENBQUM7Z0JBQ0Y3bkIsQ0FBQyxDQUFDbVQsYUFBYSxDQUFDb1EsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZCbUUsWUFBWSxDQUFDN2pCLFdBQVcsQ0FBQzJqQixjQUFjLENBQUM7Z0JBQ3hDLE9BQU8sS0FBSztjQUNoQixDQUFDLENBQUM7WUFDTjtVQUNKLENBQUMsQ0FBQztRQUNOO1FBQ0E7UUFDQSxJQUFJRixTQUFTLENBQUNsbEIsTUFBTSxHQUFHLENBQUMsRUFBRTtVQUN0QmtsQixTQUFTLENBQUNwaUIsSUFBSSxDQUFDLFlBQVc7WUFDdEIsSUFBSUMsSUFBSSxHQUFHbkYsQ0FBQyxDQUFDLElBQUksQ0FBQztjQUNkcW9CLFdBQVcsR0FBR2xqQixJQUFJLENBQUMxRCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3pDMEQsSUFBSSxDQUFDZ2pCLEtBQUssQ0FBQyxZQUFXO2NBQ2xCbm9CLENBQUMsQ0FBQ3FvQixXQUFXLENBQUMsQ0FBQzlkLFdBQVcsQ0FBQ2lkLGNBQWMsRUFBRSxJQUFJLENBQUM7Y0FDaEQsT0FBTyxLQUFLO1lBQ2hCLENBQUMsQ0FBQztVQUNOLENBQUMsQ0FBQztRQUNOO01BQ0osQ0FBQztNQUNEamIsWUFBWSxFQUFFLFNBQUFBLENBQ1YrYixNQUFNLEVBQ05DLFFBQVEsRUFDUkMsS0FBSyxFQUNMQyxRQUFRLEVBQ1JDLE1BQU0sRUFDTkMsVUFBVSxFQUNWQyxhQUFhLEVBQ2JDLFlBQVksRUFDWjFPLGdCQUFnQixFQUNoQjJPLFFBQVEsRUFDVjtRQUNFLElBQUlMLFFBQVE7VUFDUk0saUJBQWlCO1VBQ2pCSCxhQUFhLEdBQUcsV0FBVyxHQUFHQSxhQUFhLElBQUksQ0FBcUI7VUFDcEVDLFlBQVksR0FBRyxXQUFXLEdBQUdBLFlBQVksSUFBSSxDQUFzQjtVQUNuRUYsVUFBVTtVQUNWeE8sZ0JBQWdCO1VBQ2hCNk8seUJBQXlCO1VBQ3pCRixRQUFRO1FBRVosSUFBSUgsVUFBVSxFQUFFO1VBQ1pBLFVBQVUsR0FBR0EsVUFBVTtRQUMzQixDQUFDLE1BQU07VUFDSEEsVUFBVSxHQUFHLEtBQUs7UUFDdEI7UUFFQSxJQUFJRixRQUFRLEVBQUU7VUFDVk0saUJBQWlCLEdBQUcsbUJBQW1CO1VBQ3RDSCxhQUFhLEdBQUcsaUJBQWlCLEVBQUlDLFlBQVksR0FBRyxrQkFBbUI7UUFDNUUsQ0FBQyxNQUFNO1VBQ0hFLGlCQUFpQixHQUFHLGlCQUFpQjtRQUN6QztRQUVBLElBQUk1TyxnQkFBZ0IsRUFBRTtVQUNsQjZPLHlCQUF5QixHQUNyQiw4QkFBOEIsR0FDOUI3TyxnQkFBZ0IsR0FDaEIsK0hBQStIO1FBQ3ZJO1FBRUEsSUFBSSxDQUFDb08sUUFBUSxFQUFFO1VBQ1hBLFFBQVEsR0FBRyxFQUFFO1FBQ2pCO1FBRUFFLFFBQVEsR0FBRyxNQUFNO1FBRWpCLElBQUkvUixNQUFNLEdBQUcsU0FBQUEsQ0FBQSxFQUFXO1VBQ3BCMVcsQ0FBQyxDQUFDMFcsTUFBTSxDQUFDO1lBQ0x1UyxLQUFLLEVBQUVYLE1BQU07WUFDYjNSLE9BQU8sRUFBRTRSO1VBQ2IsQ0FBQyxFQUFFO1lBQ0MzZixPQUFPLEVBQUU2ZixRQUFRO1lBQ2pCM1MsSUFBSSxFQUFFMFMsS0FBSyxJQUFJLFNBQVM7WUFDeEI1UixLQUFLLEVBQUU4UixNQUFNLElBQUksS0FBSztZQUN0QlEsUUFBUSxFQUFFLCtCQUErQixHQUNyQ0YseUJBQXlCLEdBQ3pCLDJCQUEyQixHQUMzQkQsaUJBQWlCLEdBQ2pCLGlDQUFpQyxHQUNqQyw0RkFBNEYsR0FDNUYsbUNBQW1DLEdBQ25DLHVDQUF1QyxHQUN2Qyx3Q0FBd0MsR0FDeEMsUUFBUTtZQUNaSSxVQUFVLEVBQUUsSUFBSTtZQUNoQkMsYUFBYSxFQUFFLElBQUk7WUFDbkJDLFNBQVMsRUFBRTtjQUNQdmxCLElBQUksRUFBRTZrQjtZQUNWLENBQUM7WUFDRDVqQixPQUFPLEVBQUU7Y0FDTHVrQixLQUFLLEVBQUUsb0JBQW9CLEdBQUdWLGFBQWE7Y0FDM0NXLElBQUksRUFBRSxvQkFBb0IsR0FBR1Y7WUFDakM7VUFDSixDQUFDLENBQUM7UUFDTixDQUFDO1FBRUQsSUFBSUMsUUFBUSxFQUFFO1VBQ1Y1aUIsVUFBVSxDQUFDLFlBQVc7WUFDbEJ3USxNQUFNLENBQUMsQ0FBQztVQUNaLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDWixDQUFDLE1BQU07VUFDSEEsTUFBTSxDQUFDLENBQUM7UUFDWjtNQUNKLENBQUM7TUFDRG5ELFlBQVksRUFBRSxTQUFBQSxDQUFBLEVBQVc7UUFDckIsSUFBSXZTLE9BQU8sQ0FBQ2dELElBQUksQ0FBQ0csU0FBUyxDQUFDLENBQUMsRUFBRTtVQUMxQixPQUFPLElBQUk7UUFDZjtRQUNBLElBQUlxbEIsYUFBYSxHQUFHeHBCLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztRQUN4QyxJQUFJd3BCLGFBQWEsQ0FBQ3BuQixNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQzFCO1VBQ0EsSUFBSSxPQUFPcEMsQ0FBQyxDQUFDcU0sRUFBRSxDQUFDb2Qsa0JBQWtCLEtBQUssV0FBVyxFQUFFO1lBQ2hEem9CLE9BQU8sQ0FBQzJGLFFBQVEsQ0FBQzRGLFlBQVksQ0FDekIsU0FBUyxFQUNULGlFQUFpRSxFQUNqRSxRQUNKLENBQUM7WUFDRCxPQUFPLElBQUk7VUFDZjtVQUNBaWQsYUFBYSxDQUFDdGtCLElBQUksQ0FBQyxZQUFXO1lBQzFCLElBQUlDLElBQUksR0FBR25GLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbEJtRixJQUFJLENBQUN1RyxPQUFPLEdBQUc7Y0FDWGdlLG1CQUFtQixFQUFFdmtCLElBQUksQ0FBQzFELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEdBQUc7Y0FDeERrb0Isc0JBQXNCLEVBQUV4a0IsSUFBSSxDQUFDMUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUk7WUFDL0QsQ0FBQztZQUNEO1lBQ0EwRCxJQUFJLENBQUNza0Isa0JBQWtCLENBQUM7Y0FDcEJDLG1CQUFtQixFQUFFM2lCLE1BQU0sQ0FBQzVCLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ2dlLG1CQUFtQixDQUFDO2NBQzdEQyxzQkFBc0IsRUFBRTVpQixNQUFNLENBQUM1QixJQUFJLENBQUN1RyxPQUFPLENBQUNpZSxzQkFBc0IsQ0FBQztjQUNuRUMsMEJBQTBCLEVBQUU7WUFDaEMsQ0FBQyxDQUFDO1VBQ04sQ0FBQyxDQUFDO1FBQ047TUFDSixDQUFDO01BQ0RuVyxlQUFlLEVBQUUsU0FBQUEsQ0FBQSxFQUFXO1FBQ3hCLElBQUlvVyxnQkFBZ0IsR0FBRzdwQixDQUFDLENBQUMsb0JBQW9CLENBQUM7UUFDOUMsSUFBSTZwQixnQkFBZ0IsQ0FBQ3puQixNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQzdCO1VBQ0EsSUFBSSxPQUFPcEMsQ0FBQyxDQUFDcU0sRUFBRSxDQUFDb0gsZUFBZSxLQUFLLFdBQVcsRUFBRTtZQUM3Q3pTLE9BQU8sQ0FBQzJGLFFBQVEsQ0FBQzRGLFlBQVksQ0FDekIsU0FBUyxFQUNULDhEQUE4RCxFQUM5RCxRQUNKLENBQUM7WUFDRCxPQUFPLElBQUk7VUFDZjtVQUNBO1VBQ0FzZCxnQkFBZ0IsQ0FBQ3BXLGVBQWUsQ0FBQyxDQUFDO1FBQ3RDO01BQ0osQ0FBQztNQUNERCxTQUFTLEVBQUUsU0FBQUEsQ0FBQSxFQUFXO1FBQ2xCLElBQUlzVyxnQkFBZ0IsR0FBRzlwQixDQUFDLENBQUMseUJBQXlCLENBQUM7VUFDL0MrcEIsY0FBYyxHQUFHL3BCLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQztRQUMvQyxJQUFJOHBCLGdCQUFnQixDQUFDMW5CLE1BQU0sR0FBRyxDQUFDLEVBQUU7VUFDN0I7VUFDQSxJQUFJLE9BQU80bkIsV0FBVyxLQUFLLFdBQVcsRUFBRTtZQUNwQ2hwQixPQUFPLENBQUMyRixRQUFRLENBQUM0RixZQUFZLENBQ3pCLFNBQVMsRUFDVCwwREFBMEQsRUFDMUQsUUFDSixDQUFDO1lBQ0QsT0FBTyxJQUFJO1VBQ2Y7VUFDQSxJQUFJdWQsZ0JBQWdCLEVBQUU7WUFDbEIsSUFBSUUsV0FBVyxDQUFDLHlCQUF5QixDQUFDO1lBQzFDQyxhQUFhLENBQUNILGdCQUFnQixDQUFDO1VBQ25DO1VBQ0EsSUFBSUMsY0FBYyxFQUFFO1lBQ2hCLElBQUlDLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQztZQUN4Q0MsYUFBYSxDQUFDRixjQUFjLENBQUM7VUFDakM7VUFFQSxTQUFTRSxhQUFhQSxDQUFDQyxhQUFhLEVBQUU7WUFDbENBLGFBQWEsQ0FBQ2hsQixJQUFJLENBQUMsWUFBVztjQUMxQixJQUFJQyxJQUFJLEdBQUduRixDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNkaXBCLEtBQUssR0FBRzlqQixJQUFJLENBQUMxRCxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxtQkFBbUI7Z0JBQ2xFMG9CLFlBQVksR0FDWmhsQixJQUFJLENBQUMxRCxJQUFJLENBQUMsZ0NBQWdDLENBQUMsSUFBSSxTQUFTO2NBQzVEMEQsSUFBSSxDQUFDOE4sT0FBTyxDQUFDO2dCQUNUb1csU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCSixLQUFLLEVBQUVBO2NBQ1gsQ0FBQyxDQUFDO2NBQ0Y5akIsSUFBSSxDQUNDTixFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVc7Z0JBQ3BCTSxJQUFJLENBQUMxRCxJQUFJLENBQUMsd0JBQXdCLEVBQUUwb0IsWUFBWSxDQUFDLENBQUNsWCxPQUFPLENBQUMsTUFBTSxDQUFDO2NBQ3JFLENBQUMsQ0FBQyxDQUNEcE8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFXO2dCQUN6Qk0sSUFBSSxDQUFDOE4sT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDeFIsSUFBSSxDQUFDLHdCQUF3QixFQUFFd25CLEtBQUssQ0FBQztnQkFDMUQsT0FBTyxLQUFLO2NBQ2hCLENBQUMsQ0FBQztZQUNWLENBQUMsQ0FBQztVQUNOO1FBQ0o7TUFDSixDQUFDO01BQ0R2VixTQUFTLEVBQUUsU0FBQUEsQ0FBQSxFQUFXO1FBQ2xCLElBQUkwVyxVQUFVLEdBQUdwcUIsQ0FBQyxDQUFDLGNBQWMsQ0FBQztRQUNsQyxJQUFJb3FCLFVBQVUsQ0FBQ2hvQixNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQ3ZCZ29CLFVBQVUsQ0FBQ2xsQixJQUFJLENBQUMsWUFBVztZQUN2QixJQUFJd0gsS0FBSyxHQUFHMU0sQ0FBQyxDQUFDLElBQUksQ0FBQztjQUNmcXFCLFVBQVUsR0FBRzNkLEtBQUssQ0FBQ3JILElBQUksQ0FBQyxvQkFBb0IsQ0FBQztjQUM3Q2lsQixTQUFTLEdBQUc1ZCxLQUFLLENBQUNySCxJQUFJLENBQUMsbUJBQW1CLENBQUM7Y0FDM0NrbEIsWUFBWSxHQUFHN2QsS0FBSyxDQUFDakwsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDaEQ0b0IsVUFBVSxDQUFDaGxCLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQ21RLElBQUksQ0FBQytVLFlBQVksQ0FBQztZQUNuRCxJQUFJalIsUUFBUSxDQUFDO2NBQ1QxUSxPQUFPLEVBQUU4RCxLQUFLO2NBQ2RpTixPQUFPLEVBQUUsU0FBQUEsQ0FBQSxFQUFXO2dCQUNoQixJQUFJNlEsUUFBUSxHQUFHQyxXQUFXLENBQUMsWUFBVztrQkFDbENGLFlBQVksRUFBRTtrQkFDZCxJQUFJQSxZQUFZLElBQUksQ0FBQyxFQUFFO29CQUNuQkcsYUFBYSxDQUFDRixRQUFRLENBQUM7b0JBQ3ZCSCxVQUFVLENBQUNNLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQzFCemtCLFVBQVUsQ0FBQyxZQUFXO3NCQUNsQm9rQixTQUFTLENBQUNNLE1BQU0sQ0FBQyxNQUFNLENBQUM7b0JBQzVCLENBQUMsRUFBRSxJQUFJLENBQUM7a0JBQ1osQ0FBQyxNQUFNO29CQUNIUCxVQUFVLENBQUNobEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDbVEsSUFBSSxDQUFDK1UsWUFBWSxDQUFDO2tCQUN2RDtnQkFDSixDQUFDLEVBQUUsSUFBSSxDQUFDO2dCQUNSLElBQUksQ0FBQzNRLE9BQU8sQ0FBQyxDQUFDO2NBQ2xCLENBQUM7Y0FDRHRYLE1BQU0sRUFBRTtZQUNaLENBQUMsQ0FBQztVQUNOLENBQUMsQ0FBQztRQUNOO01BQ0osQ0FBQztNQUNEc1IsZUFBZSxFQUFFLFNBQUFBLENBQUEsRUFBVztRQUN4QixJQUFJaVgsZ0JBQWdCLEdBQUc3cUIsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO1FBQzNDLElBQUk2cUIsZ0JBQWdCLENBQUN6b0IsTUFBTSxHQUFHLENBQUMsRUFBRTtVQUM3QnlvQixnQkFBZ0IsQ0FBQzNsQixJQUFJLENBQUMsWUFBVztZQUM3QixJQUFJQyxJQUFJLEdBQUduRixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2xCbUYsSUFBSSxDQUFDdUcsT0FBTyxHQUFHO2NBQ1hrWixRQUFRLEVBQUV6ZixJQUFJLENBQUN5SixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJO2NBQ3ZEeVYsUUFBUSxFQUFFbGYsSUFBSSxDQUFDMUQsSUFBSSxDQUFDLGVBQWUsQ0FBQztjQUNwQ3dpQixJQUFJLEVBQUU5ZSxJQUFJLENBQUN5SixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO2NBQzlDa2MsS0FBSyxFQUFFM2xCLElBQUksQ0FBQ3lKLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUk7Y0FDakRtYyxNQUFNLEVBQUU1bEIsSUFBSSxDQUFDMUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7Y0FDdEN1aEIsT0FBTyxFQUFFN2QsSUFBSSxDQUFDMUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLE1BQU07Y0FDNUMybUIsR0FBRyxFQUFFampCLElBQUksQ0FBQzFELElBQUksQ0FBQyxlQUFlLENBQUM7Y0FDL0J1cEIsUUFBUSxFQUFFcFosSUFBSSxDQUFDcVosTUFBTSxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDcEQsQ0FBQztZQUVELElBQUlobUIsSUFBSSxDQUFDdUcsT0FBTyxDQUFDMlksUUFBUSxFQUFFO2NBQ3ZCbGYsSUFBSSxDQUFDdUcsT0FBTyxDQUFDMlksUUFBUSxHQUNqQixhQUFhLEdBQUdsZixJQUFJLENBQUN1RyxPQUFPLENBQUMyWSxRQUFRLEdBQUcsSUFBSTtZQUNwRCxDQUFDLE1BQU07Y0FDSGxmLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQzJZLFFBQVEsR0FBRyxFQUFFO1lBQzlCO1lBQ0FsZixJQUFJLENBQUNxRSxPQUFPLENBQ1Isa0NBQWtDLEdBQ2xDckUsSUFBSSxDQUFDdUcsT0FBTyxDQUFDc2YsUUFBUSxHQUNyQixJQUFJLEdBQ0oscUJBQXFCLEdBQ3JCN2xCLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQzJZLFFBQVEsR0FDckIsU0FBUyxHQUNUbGYsSUFBSSxDQUFDdUcsT0FBTyxDQUFDdVksSUFBSSxHQUNqQixXQUFXLEdBQ1g5ZSxJQUFJLENBQUN1RyxPQUFPLENBQUNvZixLQUFLLEdBQ2xCLFlBQVksR0FDWjNsQixJQUFJLENBQUN1RyxPQUFPLENBQUNxZixNQUFNLEdBQ25CLGFBQWEsR0FDYjVsQixJQUFJLENBQUN1RyxPQUFPLENBQUNzWCxPQUFPLEdBQ3BCLElBQUksR0FDSixlQUFlLEdBQ2Y3ZCxJQUFJLENBQUN1RyxPQUFPLENBQUMwYyxHQUFHLEdBQ2hCLHFCQUFxQixHQUNyQixVQUFVLEdBQ1YsUUFDSixDQUFDO1lBQ0QsSUFBSWpqQixJQUFJLENBQUN1RyxPQUFPLENBQUNrWixRQUFRLEVBQUU7Y0FDdkIxZSxVQUFVLENBQUMsWUFBVztnQkFDbEJsRyxDQUFDLENBQUMsU0FBUyxHQUFHbUYsSUFBSSxDQUFDdUcsT0FBTyxDQUFDc2YsUUFBUSxDQUFDLENBQUN4RixRQUFRLENBQ3pDLFVBQVNqTSxTQUFTLEVBQUU7a0JBQ2hCLElBQUlBLFNBQVMsS0FBSyxNQUFNLEVBQUU7b0JBQ3RCdlosQ0FBQyxDQUFDLFNBQVMsR0FBR21GLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQ3NmLFFBQVEsQ0FBQyxDQUMvQjNsQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQ2JtQixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQ055SyxJQUFJLENBQUMsQ0FBQztrQkFDZixDQUFDLE1BQU07b0JBQ0hqUixDQUFDLENBQUMsU0FBUyxHQUFHbUYsSUFBSSxDQUFDdUcsT0FBTyxDQUFDc2YsUUFBUSxDQUFDLENBQy9CM2xCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FDYm1CLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FDTnlKLEtBQUssQ0FBQyxDQUFDO2tCQUNoQjtnQkFDSixDQUFDLEVBQUU7a0JBQ0MzTixNQUFNLEVBQUU7Z0JBQ1osQ0FDSixDQUFDO2NBQ0wsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNYO1lBQ0E0RCxVQUFVLENBQUMsWUFBVztjQUNsQmxHLENBQUMsQ0FBQyxTQUFTLEdBQUdtRixJQUFJLENBQUN1RyxPQUFPLENBQUNzZixRQUFRLENBQUMsQ0FBQ3RuQixRQUFRLENBQUMsY0FBYyxDQUFDO1lBQ2pFLENBQUMsRUFBRSxHQUFHLENBQUM7VUFDWCxDQUFDLENBQUM7UUFDTjtNQUNKO0lBQ0osQ0FBQztJQUNEMUMsT0FBTyxDQUFDb3FCLE9BQU8sR0FBRztNQUNkbm5CLFNBQVMsRUFBRSxTQUFBQSxDQUFBLEVBQVc7UUFDbEJqRCxPQUFPLENBQUNvcUIsT0FBTyxDQUFDQyxPQUFPLENBQUMsQ0FBQztRQUN6QnJxQixPQUFPLENBQUNvcUIsT0FBTyxDQUFDRSxNQUFNLENBQUMsQ0FBQztRQUN4QnRxQixPQUFPLENBQUNvcUIsT0FBTyxDQUFDRyxTQUFTLENBQUMsQ0FBQztRQUMzQnZxQixPQUFPLENBQUNvcUIsT0FBTyxDQUFDSSxhQUFhLENBQUMsQ0FBQztNQUNuQyxDQUFDO01BQ0RILE9BQU8sRUFBRSxTQUFBQSxDQUFBLEVBQVc7UUFDaEIsSUFBSUksZUFBZSxHQUFHenJCLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJQSxDQUFDLENBQUMsaUJBQWlCLENBQUM7UUFDbEUsSUFBSXlyQixlQUFlLENBQUNycEIsTUFBTSxHQUFHLENBQUMsRUFBRTtVQUM1QjtVQUNBLElBQUksT0FBT3BDLENBQUMsQ0FBQ3FNLEVBQUUsQ0FBQ3FmLE9BQU8sS0FBSyxXQUFXLEVBQUU7WUFDckMxcUIsT0FBTyxDQUFDMkYsUUFBUSxDQUFDNEYsWUFBWSxDQUN6QixTQUFTLEVBQ1Qsc0RBQXNELEVBQ3RELFFBQ0osQ0FBQztZQUNELE9BQU8sSUFBSTtVQUNmO1VBQ0EsSUFBSVMsQ0FBQyxHQUFHOUcsVUFBVSxDQUFDLFlBQVc7WUFDMUJ1bEIsZUFBZSxDQUFDdm1CLElBQUksQ0FBQyxZQUFXO2NBQzVCLElBQUlDLElBQUksR0FBR25GLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2QyckIsZUFBZSxHQUFHeG1CLElBQUksQ0FBQzFELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxjQUFjO2dCQUM5RG1xQixZQUFZLEdBQUd6bUIsSUFBSSxDQUFDMUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7Z0JBQzNDb3FCLGlCQUFpQixHQUFHMW1CLElBQUksQ0FBQzFELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxVQUFVO2dCQUMxRHFxQixrQkFBa0IsR0FDbEIzbUIsSUFBSSxDQUFDMUQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksWUFBWTtnQkFDOUNzcUIsY0FBYyxHQUNkNW1CLElBQUksQ0FBQzFELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSwyQkFBMkI7Z0JBQ3ZEdXFCLGFBQWEsR0FBRzdtQixJQUFJLENBQUMxRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSztjQUNyRCxJQUFJdXFCLGFBQWEsSUFBSSxNQUFNLEVBQUU7Z0JBQ3pCQSxhQUFhLEdBQUcsWUFBWTtjQUNoQyxDQUFDLE1BQU07Z0JBQ0hBLGFBQWEsR0FBRyxFQUFFO2NBQ3RCO2NBQ0E3bUIsSUFBSSxDQUFDc1csTUFBTSxDQUFDLDhCQUE4QixDQUFDO2NBQzNDdFcsSUFBSSxDQUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUNxbUIsT0FBTyxDQUFDO2dCQUMxQk8sUUFBUSxFQUFFTixlQUFlO2dCQUN6Qk8sS0FBSyxFQUFFTixZQUFZO2dCQUNuQk8sVUFBVSxFQUFFTixpQkFBaUI7Z0JBQzdCM0MsUUFBUSxFQUFFOEMsYUFBYSxHQUFHLGtDQUFrQztnQkFDNURJLE9BQU8sRUFBRUwsY0FBYztnQkFDdkJNLFdBQVcsRUFBRVA7Y0FDakIsQ0FBQyxFQUNELFlBQVc7Z0JBQ1AsSUFBSTNtQixJQUFJLENBQUN5RyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUN4SixNQUFNLEdBQUcsQ0FBQyxFQUFFO2tCQUN6QytDLElBQUksQ0FBQ3lHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQzBULE9BQU8sQ0FBQyxRQUFRLENBQUM7Z0JBQ2xEO2NBQ0osQ0FDSixDQUFDO1lBQ0wsQ0FBQyxDQUFDO1VBQ04sQ0FBQyxFQUFFLElBQUksQ0FBQztRQUNaO01BQ0osQ0FBQztNQUNEZ00sTUFBTSxFQUFFLFNBQUFBLENBQUEsRUFBVztRQUNmLElBQUlnQixjQUFjLEdBQUd0c0IsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO1FBQ3hDLElBQUlzc0IsY0FBYyxDQUFDbHFCLE1BQU0sR0FBRyxDQUFDLEVBQUU7VUFDM0I7VUFDQSxJQUFJLE9BQU9wQyxDQUFDLENBQUNxTSxFQUFFLENBQUNrZ0IsV0FBVyxLQUFLLFdBQVcsRUFBRTtZQUN6Q3ZyQixPQUFPLENBQUMyRixRQUFRLENBQUM0RixZQUFZLENBQ3pCLFNBQVMsRUFDVCwwREFBMEQsRUFDMUQsUUFDSixDQUFDO1lBQ0QsT0FBTyxJQUFJO1VBQ2Y7VUFDQStmLGNBQWMsQ0FBQ3BuQixJQUFJLENBQUMsWUFBVztZQUMzQixJQUFJQyxJQUFJLEdBQUduRixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2xCbUYsSUFBSSxDQUFDdUcsT0FBTyxHQUFHO2NBQ1g4Z0IsRUFBRSxFQUFFcm5CLElBQUksQ0FBQzFELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLGNBQWM7Y0FDakRnckIsS0FBSyxFQUFFdG5CLElBQUksQ0FBQzFELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEdBQUc7Y0FDN0NpckIsWUFBWSxFQUFFO1lBQ2xCLENBQUM7WUFDRDtZQUNBSixjQUFjLENBQUNDLFdBQVcsQ0FBQztjQUNuQkUsS0FBSyxFQUFFdG5CLElBQUksQ0FBQ3VHLE9BQU8sQ0FBQytnQixLQUFLO2NBQ3pCRSxRQUFRLEVBQUU7Z0JBQ05ILEVBQUUsRUFBRXJuQixJQUFJLENBQUN1RyxPQUFPLENBQUM4Z0I7Y0FDckIsQ0FBQztjQUNERSxZQUFZLEVBQUV2bkIsSUFBSSxDQUFDdUcsT0FBTyxDQUFDZ2hCO1lBQy9CLENBQUMsRUFDRCxZQUFXO2NBQ1AsSUFBSTFmLENBQUMsR0FBRzlHLFVBQVUsQ0FBQyxZQUFXO2dCQUMxQmYsSUFBSSxDQUFDekIsUUFBUSxDQUFDLHNCQUFzQixDQUFDO2NBQ3pDLENBQUMsRUFBRSxJQUFJLENBQUM7Y0FDUnlCLElBQUksQ0FBQ2dPLGFBQWEsQ0FBQztnQkFDWDBQLFFBQVEsRUFBRSxHQUFHO2dCQUNiL00sSUFBSSxFQUFFLE9BQU87Z0JBQ2I4TSxPQUFPLEVBQUU7a0JBQ0xFLE9BQU8sRUFBRTtnQkFDYjtjQUNKLENBQUMsRUFDRCxZQUFXO2dCQUNQLElBQUkzZCxJQUFJLENBQUN5RyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUN4SixNQUFNLEdBQUcsQ0FBQyxFQUFFO2tCQUN6QytDLElBQUksQ0FBQ3lHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQzBULE9BQU8sQ0FBQyxRQUFRLENBQUM7Z0JBQ2xEO2NBQ0osQ0FDSixDQUFDO1lBQ0wsQ0FDSixDQUFDO1VBQ0wsQ0FBQyxDQUFDO1FBQ047TUFDSixDQUFDO01BQ0RpTSxTQUFTLEVBQUUsU0FBQUEsQ0FBQSxFQUFXO1FBQ2xCLElBQUlxQixpQkFBaUIsR0FBRzVzQixDQUFDLENBQUMsbUJBQW1CLENBQUM7UUFDOUMsSUFBSTRzQixpQkFBaUIsQ0FBQ3hxQixNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQzlCO1VBQ0EsSUFBSSxPQUFPcEMsQ0FBQyxDQUFDcU0sRUFBRSxDQUFDd2dCLFdBQVcsS0FBSyxXQUFXLEVBQUU7WUFDekM3ckIsT0FBTyxDQUFDMkYsUUFBUSxDQUFDNEYsWUFBWSxDQUN6QixTQUFTLEVBQ1QsMERBQTBELEVBQzFELFFBQ0osQ0FBQztZQUNELE9BQU8sSUFBSTtVQUNmO1VBRUFxZ0IsaUJBQWlCLENBQUMxbkIsSUFBSSxDQUFDLFlBQVc7WUFDOUIsSUFBSUMsSUFBSSxHQUFHbkYsQ0FBQyxDQUFDLElBQUksQ0FBQztjQUNkOHNCLGNBQWMsR0FBRzNuQixJQUFJLENBQUMxRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRTtjQUM5Q3NyQixnQkFBZ0IsR0FBRzVuQixJQUFJLENBQUMxRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztjQUM3Q3VyQixvQkFBb0IsR0FDcEI3bkIsSUFBSSxDQUFDMUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUN2QixzS0FBc0s7Y0FDdEt3ckIsY0FBYyxHQUFHLGdCQUFnQjtjQUNqQ0MsYUFBYSxHQUFHL25CLElBQUksQ0FBQzFELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxPQUFPO2NBQUU7Y0FDbkQwckIsb0JBQW9CLEdBQUcsT0FBTyxHQUFHSixnQkFBZ0I7WUFDckQ1bkIsSUFBSSxDQUFDc1csTUFBTSxDQUNQLGlDQUFpQyxHQUNqQzBSLG9CQUFvQixHQUNwQixVQUNKLENBQUM7WUFFRGh0QixNQUFNLENBQUNrTSxFQUFFLENBQUN3Z0IsV0FBVyxDQUFDTyxVQUFVLEdBQUc7Y0FDL0JDLFdBQVcsRUFBRUw7WUFDakIsQ0FBQztZQUVEN25CLElBQUksQ0FBQ0UsSUFBSSxDQUFDckYsQ0FBQyxDQUFDaXRCLGNBQWMsQ0FBQyxDQUFDLENBQUNKLFdBQVcsQ0FBQztjQUNyQzFpQixRQUFRLEVBQUVtakIsY0FBYyxDQUFDLENBQUM7Y0FDMUJDLEdBQUcsRUFBRVQsY0FBYztjQUNuQi9QLElBQUksRUFBRW1RLGFBQWE7Y0FDbkJNLFlBQVksRUFBRTtZQUNsQixDQUFDLENBQUM7WUFFRixTQUFTRixjQUFjQSxDQUFBLEVBQUc7Y0FDdEJub0IsSUFBSSxDQUFDekIsUUFBUSxDQUFDLHlCQUF5QixDQUFDO2NBQ3hDO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO1lBQ3dCO1VBQ0osQ0FBQyxDQUFDO1FBQ047TUFDSixDQUFDOztNQUNEOG5CLGFBQWEsRUFBRSxTQUFBQSxDQUFBLEVBQVc7UUFDdEIsSUFBSWlDLGNBQWMsR0FBR3p0QixDQUFDLENBQUMsd0JBQXdCLENBQUM7UUFDaEQsSUFBSXl0QixjQUFjLENBQUNyckIsTUFBTSxHQUFHLENBQUMsRUFBRTtVQUMzQnFyQixjQUFjLENBQUN2b0IsSUFBSSxDQUFDLFlBQVc7WUFDM0IsSUFBSUMsSUFBSSxHQUFHbkYsQ0FBQyxDQUFDLElBQUksQ0FBQztjQUNkMHRCLGtCQUFrQixHQUNsQnZvQixJQUFJLENBQUMxRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFDakMsdURBQXVEO1lBQzNELElBQUlrc0IsU0FBUyxHQUFHeG9CLElBQUksQ0FBQ0UsSUFBSSxDQUFDLHVCQUF1QixDQUFDO2NBQzlDdW9CLGFBQWEsR0FBR0QsU0FBUyxDQUFDblksSUFBSSxDQUFDLENBQUM7WUFDcENyUSxJQUFJLENBQUNzUSxNQUFNLENBQUMsVUFBUzFVLEtBQUssRUFBRTtjQUN4QkEsS0FBSyxDQUFDOEksY0FBYyxDQUFDLENBQUM7Y0FDdEIsSUFBSTZMLFFBQVEsR0FBRzFWLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3lCLElBQUksQ0FBQyxRQUFRLENBQUM7Y0FDckMsSUFBSWtVLGNBQWMsR0FBRzNWLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3lCLElBQUksQ0FBQyxRQUFRLENBQUM7Y0FDM0MsSUFBSW9zQixTQUFTLEdBQUc3dEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDOHRCLFNBQVMsQ0FBQyxDQUFDO2NBQ25DLElBQUkzb0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDOFAsYUFBYSxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7Z0JBQ25DbFUsS0FBSyxDQUFDeUosZUFBZSxDQUFDLENBQUM7Z0JBQ3ZCckYsSUFBSSxDQUFDekIsUUFBUSxDQUFDLGVBQWUsQ0FBQztjQUNsQyxDQUFDLE1BQU07Z0JBQ0gxRCxDQUFDLENBQUNtRixJQUFJLENBQUMsQ0FBQ3RCLFdBQVcsQ0FBQyxlQUFlLENBQUM7Z0JBQ3BDOHBCLFNBQVMsQ0FBQ25ZLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQztnQkFDckR4VixDQUFDLENBQUM0VixJQUFJLENBQUM7a0JBQ0hDLEdBQUcsRUFBRUgsUUFBUTtrQkFDYkksSUFBSSxFQUFFSCxjQUFjO2tCQUNwQi9HLElBQUksRUFBRWlmLFNBQVM7a0JBQ2ZFLFFBQVEsRUFBRSxNQUFNO2tCQUNoQjVYLE9BQU8sRUFBRSxTQUFBQSxDQUFTQyxJQUFJLEVBQUU7b0JBQ3BCLElBQUlBLElBQUksQ0FBQ0MsUUFBUSxJQUFJLFNBQVMsRUFBRTtzQkFDNUJyVyxDQUFDLENBQUMwVyxNQUFNLENBQUM7d0JBQ0xDLE9BQU8sRUFBRStXO3NCQUNiLENBQUMsRUFBRTt3QkFDQzVYLElBQUksRUFBRTtzQkFDVixDQUFDLENBQUM7c0JBQ0Y5VixDQUFDLENBQUNtRixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ29SLEtBQUssQ0FBQyxDQUFDO3NCQUNsQnZXLENBQUMsQ0FBQ21GLElBQUksQ0FBQyxDQUFDdEIsV0FBVyxDQUFDLGVBQWUsQ0FBQztzQkFDcEM4cEIsU0FBUyxDQUFDblksSUFBSSxDQUFDb1ksYUFBYSxDQUFDO29CQUNqQyxDQUFDLE1BQU07c0JBQ0g1dEIsQ0FBQyxDQUFDMFcsTUFBTSxDQUFDO3dCQUNMQyxPQUFPLEVBQUVQLElBQUksQ0FBQ087c0JBQ2xCLENBQUMsRUFBRTt3QkFDQ2IsSUFBSSxFQUFFO3NCQUNWLENBQUMsQ0FBQztzQkFDRjlWLENBQUMsQ0FBQ21GLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDb1IsS0FBSyxDQUFDLENBQUM7c0JBQ2xCdlcsQ0FBQyxDQUFDbUYsSUFBSSxDQUFDLENBQUN0QixXQUFXLENBQUMsZUFBZSxDQUFDO3NCQUNwQzhwQixTQUFTLENBQUNuWSxJQUFJLENBQUNvWSxhQUFhLENBQUM7b0JBQ2pDO2tCQUNKLENBQUM7a0JBQ0R2akIsSUFBSSxFQUFFLFNBQUFBLENBQUEsRUFBVztvQkFDYnNqQixTQUFTLENBQUNuWSxJQUFJLENBQUNvWSxhQUFhLENBQUM7a0JBQ2pDO2dCQUNKLENBQUMsQ0FBQztjQUNOO1lBQ0osQ0FBQyxDQUFDO1VBQ04sQ0FBQyxDQUFDO1FBQ047TUFDSjtJQUNKLENBQUM7SUFDRDtJQUNBNXRCLENBQUMsQ0FBQ1MsUUFBUSxDQUFDLENBQUNDLEtBQUssQ0FBQyxZQUFXO01BQ3pCTSxPQUFPLENBQUNnRCxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO01BQ3hCakQsT0FBTyxDQUFDcUcsTUFBTSxDQUFDcEQsU0FBUyxDQUFDLENBQUM7TUFDMUJqRCxPQUFPLENBQUNrTCxNQUFNLENBQUNqSSxTQUFTLENBQUMsQ0FBQztNQUMxQmpELE9BQU8sQ0FBQ29xQixPQUFPLENBQUNubkIsU0FBUyxDQUFDLENBQUM7TUFDM0JqRCxPQUFPLENBQUMyRixRQUFRLENBQUMxQyxTQUFTLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUM7SUFDRjtJQUNBaEQsT0FBTyxDQUFDNEQsRUFBRSxDQUFDLFFBQVEsRUFBRSxZQUFXO01BQzVCN0QsT0FBTyxDQUFDcUcsTUFBTSxDQUFDRSxZQUFZLENBQUMsQ0FBQztNQUM3QnZHLE9BQU8sQ0FBQ2dELElBQUksQ0FBQ0UsU0FBUyxDQUFDLENBQUM7TUFDeEJsRCxPQUFPLENBQUNxRyxNQUFNLENBQUNVLFFBQVEsQ0FBQyxDQUFDO0lBQzdCLENBQUMsQ0FBQztJQUNGO0lBQ0E5RyxPQUFPLENBQUM0RCxFQUFFLENBQUMsUUFBUSxFQUFFLFlBQVc7TUFDNUI3RCxPQUFPLENBQUNxRyxNQUFNLENBQUNDLFVBQVUsQ0FBQyxDQUFDO01BQzNCdEcsT0FBTyxDQUFDcUcsTUFBTSxDQUFDRSxZQUFZLENBQUMsQ0FBQztNQUM3QnZHLE9BQU8sQ0FBQ3FHLE1BQU0sQ0FBQ00sc0JBQXNCLENBQUMsQ0FBQztJQUMzQyxDQUFDLENBQUM7RUFDTixDQUFDLEVBQUV4SCxNQUFNLENBQUM7QUFDZCxDQUFDLENBQUM7Ozs7Ozs7Ozs7QUM5MkdGLGlHQUFDLFVBQVNzRyxDQUFDLEVBQUM7RUFBQyxLQUFxQyxHQUFDdW5CLGlDQUFPLENBQUMsd0VBQVEsQ0FBQyxvQ0FBQ3ZuQixDQUFDO0FBQUE7QUFBQTtBQUFBLGtHQUFDLEdBQUMsQ0FBb0w7QUFBQSxDQUFDLEVBQUUsVUFBU0EsQ0FBQyxFQUFDO0VBQUMsU0FBUzZuQixDQUFDQSxDQUFDdGhCLENBQUMsRUFBQ29oQixDQUFDLEVBQUMvZCxDQUFDLEVBQUM7SUFBQyxPQUFPQSxDQUFDLElBQUUsUUFBUSxLQUFHQSxDQUFDLEdBQUM7TUFBQ2tlLFNBQVMsRUFBQ2xlO0lBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDM0UsT0FBTyxHQUFDOGlCLENBQUMsQ0FBQ0MsQ0FBQyxFQUFDaG9CLENBQUMsQ0FBQ2lvQixhQUFhLENBQUNyZSxDQUFDLENBQUMsR0FBQ0EsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDc2UsUUFBUSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMvVCxPQUFPLEdBQUNuVSxDQUFDLENBQUNtb0IsQ0FBQyxDQUFDcFosSUFBSSxDQUFDLEVBQUMsSUFBSSxDQUFDOUosT0FBTyxDQUFDbWpCLFdBQVcsSUFBRSxJQUFJLENBQUNqVSxPQUFPLENBQUNsWCxRQUFRLENBQUNvckIsQ0FBQyxHQUFDLFVBQVUsQ0FBQyxFQUFDLElBQUksQ0FBQ2xVLE9BQU8sQ0FBQ2hNLElBQUksQ0FBQ2tnQixDQUFDLEVBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxDQUFDQyxLQUFLLEdBQUMsSUFBSSxDQUFDblUsT0FBTyxDQUFDdlYsSUFBSSxDQUFDLEdBQUcsR0FBQ3lwQixDQUFDLEdBQUMsUUFBUSxDQUFDLEVBQUMsSUFBSSxDQUFDOU0sU0FBUyxHQUFDLElBQUksQ0FBQ3BILE9BQU8sQ0FBQ3ZWLElBQUksQ0FBQyxHQUFHLEdBQUN5cEIsQ0FBQyxHQUFDLFlBQVksQ0FBQyxFQUFDLElBQUksQ0FBQzlNLFNBQVMsQ0FBQ3ZHLE1BQU0sQ0FBQyxJQUFJLENBQUN1VCxhQUFhLENBQUMsRUFBQ2hpQixDQUFDLElBQUVBLENBQUMsQ0FBQzVLLE1BQU0sS0FBRyxJQUFJLENBQUM2c0IsV0FBVyxHQUFDamlCLENBQUMsQ0FBQ3ZMLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBQyxJQUFJLENBQUN5dEIsZUFBZSxHQUFDbGlCLENBQUMsRUFBQyxJQUFJLENBQUM3SCxJQUFJLEdBQUNncUIsQ0FBQyxDQUFDbmlCLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQzdILElBQUksQ0FBQ3lKLElBQUksQ0FBQ2tnQixDQUFDLEVBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxDQUFDM3BCLElBQUksQ0FBQ2lxQixNQUFNLENBQUMsSUFBSSxDQUFDeFUsT0FBTyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUNvSCxTQUFTLENBQUNuSyxJQUFJLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ3dYLEdBQUcsQ0FBQ2pCLENBQUMsQ0FBQztFQUFBO0VBQUMsSUFBSXBoQixDQUFDLEdBQUMsRUFBRSxDQUFDd00sT0FBTyxJQUFFLFVBQVMvUyxDQUFDLEVBQUM7TUFBQyxLQUFJLElBQUl1RyxDQUFDLEdBQUMsQ0FBQyxFQUFDb2hCLENBQUMsR0FBQyxJQUFJLENBQUNoc0IsTUFBTSxFQUFDNEssQ0FBQyxHQUFDb2hCLENBQUMsRUFBQ3BoQixDQUFDLEVBQUUsRUFBQyxJQUFHQSxDQUFDLElBQUksSUFBSSxJQUFFLElBQUksQ0FBQ0EsQ0FBQyxDQUFDLEtBQUd2RyxDQUFDLEVBQUMsT0FBT3VHLENBQUM7TUFBQyxPQUFNLENBQUMsQ0FBQztJQUFBLENBQUM7SUFBQ29oQixDQUFDLEdBQUMsUUFBUTtJQUFDVSxDQUFDLEdBQUNWLENBQUMsR0FBQyxJQUFJO0lBQUMvZCxDQUFDLEdBQUMrZCxDQUFDLEdBQUMsUUFBUTtJQUFDa0IsQ0FBQyxHQUFDO01BQUN0aUIsQ0FBQyxFQUFDLEtBQUs7TUFBQ3VpQixDQUFDLEVBQUMsUUFBUTtNQUFDQyxDQUFDLEVBQUMsUUFBUTtNQUFDQyxDQUFDLEVBQUMsTUFBTTtNQUFDQyxDQUFDLEVBQUMsUUFBUTtNQUFDWixDQUFDLEVBQUM7SUFBTyxDQUFDO0lBQUNhLENBQUMsR0FBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDO0lBQUNDLENBQUMsR0FBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDO0lBQUNDLENBQUMsR0FBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQztJQUFDQyxDQUFDLEdBQUM7TUFBQzlpQixDQUFDLEVBQUMsR0FBRztNQUFDdWlCLENBQUMsRUFBQyxJQUFJO01BQUNDLENBQUMsRUFBQyxHQUFHO01BQUNDLENBQUMsRUFBQyxHQUFHO01BQUNDLENBQUMsRUFBQyxJQUFJO01BQUNaLENBQUMsRUFBQztJQUFHLENBQUM7SUFBQ1csQ0FBQyxHQUFDLFNBQUFBLENBQVN6aUIsQ0FBQyxFQUFDO01BQUMsSUFBSW9oQixDQUFDO01BQUMsT0FBT0EsQ0FBQyxHQUFDLEVBQUUsRUFBQzNuQixDQUFDLENBQUN2QixJQUFJLENBQUM4SCxDQUFDLENBQUMraUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFDLFVBQVN0cEIsQ0FBQyxFQUFDdUcsQ0FBQyxFQUFDO1FBQUMsSUFBSThoQixDQUFDO1FBQUNBLENBQUMsR0FBQzloQixDQUFDLENBQUNnakIsV0FBVyxDQUFDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUFDLElBQUdYLENBQUMsQ0FBQ1IsQ0FBQyxDQUFDLEVBQUMsT0FBT1YsQ0FBQyxDQUFDOEIsSUFBSSxDQUFDcEIsQ0FBQyxDQUFDO01BQUEsQ0FBQyxDQUFDLEVBQUNWLENBQUM7SUFBQSxDQUFDO0lBQUNzQixDQUFDLEdBQUMsQ0FBQyxDQUFDO0lBQUNkLENBQUMsR0FBQztNQUFDcHJCLElBQUksRUFBQyxNQUFNO01BQUNnUyxJQUFJLEVBQUMsY0FBYyxHQUFDc1osQ0FBQyxHQUFDLDJCQUEyQixHQUFDQSxDQUFDLEdBQUMsK0JBQStCLEdBQUNBLENBQUMsR0FBQyw0QkFBNEI7TUFBQ3JxQixHQUFHLEVBQUMsR0FBRyxHQUFDcXFCLENBQUMsR0FBQyxzRUFBc0UsR0FBQ0EsQ0FBQyxHQUFDLFdBQVcsR0FBQ0EsQ0FBQyxHQUFDLGNBQWMsR0FBQ0EsQ0FBQyxHQUFDLFdBQVcsR0FBQ0EsQ0FBQyxHQUFDLGtIQUFrSCxHQUFDQSxDQUFDLEdBQUMsMEdBQTBHLEdBQUNBLENBQUMsR0FBQywyRUFBMkUsR0FBQ0EsQ0FBQyxHQUFDLDJHQUEyRyxHQUFDQSxDQUFDLEdBQUM7SUFBMEUsQ0FBQztJQUFDcUIsQ0FBQyxHQUFDO01BQUMsZUFBZSxFQUFDLENBQUMsVUFBVSxFQUFDLE9BQU87SUFBQyxDQUFDO0lBQUNDLENBQUMsR0FBQyxTQUFBQSxDQUFTM3BCLENBQUMsRUFBQztNQUFDLE9BQU9pcEIsQ0FBQyxDQUFDanBCLENBQUMsQ0FBQztJQUFBLENBQUM7SUFBQzRwQixDQUFDLEdBQUMsU0FBQUEsQ0FBUzVwQixDQUFDLEVBQUM7TUFBQyxJQUFHLENBQUNBLENBQUMsRUFBQyxNQUFLLG9CQUFvQjtNQUFDaXBCLENBQUMsQ0FBQ2pwQixDQUFDLENBQUMsSUFBRSxPQUFPaXBCLENBQUMsQ0FBQ2pwQixDQUFDLENBQUM7SUFBQSxDQUFDO0lBQUM4b0IsQ0FBQyxHQUFDLFNBQUFBLENBQVN2aUIsQ0FBQyxFQUFDcUQsQ0FBQyxFQUFDO01BQUMsSUFBRyxDQUFDckQsQ0FBQyxFQUFDLE1BQUssb0JBQW9CO01BQUMsSUFBRyxDQUFDcUQsQ0FBQyxFQUFDLE1BQUssMEJBQTBCO01BQUMsSUFBRyxDQUFDQSxDQUFDLENBQUNtRixJQUFJLEVBQUMsTUFBSyxvQkFBb0I7TUFBQyxJQUFJOFosQ0FBQyxHQUFDSSxDQUFDLENBQUMxaUIsQ0FBQyxDQUFDO01BQUNzaUIsQ0FBQyxJQUFFQSxDQUFDLENBQUNnQixPQUFPLEtBQUdsd0IsTUFBTSxDQUFDTyxPQUFPLElBQUVBLE9BQU8sQ0FBQzR2QixJQUFJLENBQUNuQyxDQUFDLEdBQUMsdUJBQXVCLEdBQUNwaEIsQ0FBQyxHQUFDLEdBQUcsQ0FBQyxFQUFDMGlCLENBQUMsQ0FBQzFpQixDQUFDLENBQUMsQ0FBQ3NqQixPQUFPLENBQUNycEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFDb0osQ0FBQyxDQUFDN00sSUFBSSxHQUFDd0osQ0FBQyxFQUFDMGlCLENBQUMsQ0FBQzFpQixDQUFDLENBQUMsR0FBQ3FELENBQUM7TUFBQyxJQUFJc2YsQ0FBQyxHQUFDLEVBQUU7TUFBQ3RmLENBQUMsQ0FBQ21nQixPQUFPLElBQUUvcEIsQ0FBQyxDQUFDdkIsSUFBSSxDQUFDbUwsQ0FBQyxDQUFDbWdCLE9BQU8sRUFBQyxVQUFTeGpCLENBQUMsRUFBQ29oQixDQUFDLEVBQUM7UUFBQyxPQUFPdUIsQ0FBQyxJQUFFLEdBQUcsR0FBQ2IsQ0FBQyxHQUFDLEdBQUcsR0FBQ3plLENBQUMsQ0FBQzdNLElBQUksR0FBQyxHQUFHLEdBQUN3SixDQUFDLEdBQUMsTUFBTSxFQUFDdkcsQ0FBQyxDQUFDdkIsSUFBSSxDQUFDa3BCLENBQUMsRUFBQyxVQUFTcGhCLENBQUMsRUFBQ29oQixDQUFDLEVBQUM7VUFBQyxPQUFPK0IsQ0FBQyxDQUFDbmpCLENBQUMsQ0FBQyxJQUFFdkcsQ0FBQyxDQUFDdkIsSUFBSSxDQUFDaXJCLENBQUMsQ0FBQ25qQixDQUFDLENBQUMsRUFBQyxVQUFTdkcsQ0FBQyxFQUFDcW9CLENBQUMsRUFBQztZQUFDLE9BQU9hLENBQUMsSUFBRSxHQUFHLEdBQUNiLENBQUMsR0FBQzloQixDQUFDLEdBQUMsSUFBSSxHQUFDb2hCLENBQUMsR0FBQyxLQUFLO1VBQUEsQ0FBQyxDQUFDLEVBQUN1QixDQUFDLElBQUUsR0FBRyxHQUFDM2lCLENBQUMsR0FBQyxJQUFJLEdBQUNvaEIsQ0FBQyxHQUFDLEtBQUs7UUFBQSxDQUFDLENBQUMsRUFBQ3VCLENBQUMsSUFBRSxLQUFLO01BQUEsQ0FBQyxDQUFDLEVBQUN0ZixDQUFDLENBQUM1TCxHQUFHLEtBQUdrckIsQ0FBQyxJQUFFLGdCQUFnQixHQUFDdGYsQ0FBQyxDQUFDN00sSUFBSSxHQUFDLE9BQU8sR0FBQzZNLENBQUMsQ0FBQzVMLEdBQUcsQ0FBQyxFQUFDa3JCLENBQUMsS0FBR3RmLENBQUMsQ0FBQ2lnQixPQUFPLEdBQUNHLENBQUMsQ0FBQ2QsQ0FBQyxDQUFDLEVBQUN0ZixDQUFDLENBQUNpZ0IsT0FBTyxDQUFDN3VCLElBQUksQ0FBQyxJQUFJLEVBQUMsU0FBUyxHQUFDNE8sQ0FBQyxDQUFDN00sSUFBSSxDQUFDLENBQUM7TUFBQyxJQUFJb3NCLENBQUMsR0FBQyxDQUFDLENBQUM7UUFBQ0MsQ0FBQyxHQUFDcHBCLENBQUMsQ0FBQzRKLENBQUMsQ0FBQ21GLElBQUksQ0FBQztNQUFDa2IsQ0FBQyxDQUFDLE1BQU0sRUFBQ2IsQ0FBQyxFQUFDRCxDQUFDLENBQUMsRUFBQ2MsQ0FBQyxDQUFDLE1BQU0sRUFBQ2IsQ0FBQyxFQUFDRCxDQUFDLENBQUMsRUFBQ3ZmLENBQUMsQ0FBQ3NnQixNQUFNLEdBQUNmLENBQUM7SUFBQSxDQUFDO0lBQUNhLENBQUMsR0FBQyxTQUFBQSxDQUFTempCLENBQUMsRUFBQztNQUFDLElBQUlvaEIsQ0FBQyxFQUFDVSxDQUFDLEVBQUN6ZSxDQUFDO01BQUN5ZSxDQUFDLEdBQUM4QixDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUM5QixDQUFDLENBQUNydEIsSUFBSSxDQUFDLE1BQU0sRUFBQyxVQUFVLENBQUMsRUFBQ2dGLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ2dWLE1BQU0sQ0FBQ3FULENBQUMsQ0FBQztNQUFDLElBQUc7UUFBQ0EsQ0FBQyxDQUFDdFosSUFBSSxDQUFDeEksQ0FBQyxDQUFDO01BQUEsQ0FBQyxRQUFNc2lCLENBQUMsRUFBQztRQUFDUixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMrQixVQUFVLENBQUNDLE9BQU8sR0FBQzlqQixDQUFDO01BQUE7TUFBQyxPQUFPOGhCLENBQUM7SUFBQSxDQUFDO0lBQUM0QixDQUFDLEdBQUMsU0FBQUEsQ0FBUzFqQixDQUFDLEVBQUNvaEIsQ0FBQyxFQUFDVSxDQUFDLEVBQUM7TUFBQyxJQUFJUSxDQUFDO01BQUMsT0FBT3RpQixDQUFDLEtBQUcsTUFBTSxLQUFHQSxDQUFDLEdBQUMsTUFBTSxDQUFDLEVBQUNzaUIsQ0FBQyxHQUFDLGNBQWMsR0FBQ3RpQixDQUFDLEVBQUN3aUIsQ0FBQyxDQUFDcEIsQ0FBQyxFQUFDLEdBQUcsR0FBQ2tCLENBQUMsR0FBQyxHQUFHLENBQUMsQ0FBQ3BxQixJQUFJLENBQUMsWUFBVTtRQUFDLElBQUlrcEIsQ0FBQztRQUFDQSxDQUFDLEdBQUMzbkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDaEYsSUFBSSxDQUFDNnRCLENBQUMsQ0FBQyxFQUFDbEIsQ0FBQyxLQUFHQSxDQUFDLEdBQUMvZCxDQUFDLENBQUMsRUFBQ3llLENBQUMsQ0FBQ1YsQ0FBQyxDQUFDLEdBQUNwaEIsQ0FBQztNQUFBLENBQUMsQ0FBQztJQUFBLENBQUM7SUFBQ3dpQixDQUFDLEdBQUMsU0FBQUEsQ0FBUy9vQixDQUFDLEVBQUN1RyxDQUFDLEVBQUM7TUFBQyxPQUFPdkcsQ0FBQyxDQUFDaUMsRUFBRSxDQUFDc0UsQ0FBQyxDQUFDLEdBQUN2RyxDQUFDLEdBQUNBLENBQUMsQ0FBQ3BCLElBQUksQ0FBQzJILENBQUMsQ0FBQztJQUFBLENBQUM7SUFBQ3loQixDQUFDLEdBQUM7TUFBQ0ksV0FBVyxFQUFDLENBQUMsQ0FBQztNQUFDa0MsUUFBUSxFQUFDLENBQUMsQ0FBQztNQUFDQyxhQUFhLEVBQUMsR0FBRztNQUFDQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO01BQUNDLFNBQVMsRUFBQyxDQUFDO01BQUNDLGFBQWEsRUFBQyxDQUFDLENBQUM7TUFBQ0MsZUFBZSxFQUFDLFFBQVE7TUFBQ0MsY0FBYyxFQUFDLFdBQVc7TUFBQy9XLEtBQUssRUFBQyxXQUFXO01BQUNpVSxTQUFTLEVBQUMsT0FBTztNQUFDK0MsYUFBYSxFQUFDLFdBQVc7TUFBQ0MsWUFBWSxFQUFDLEdBQUc7TUFBQ0MsYUFBYSxFQUFDLFNBQVM7TUFBQ0MsWUFBWSxFQUFDLEdBQUc7TUFBQ0MsR0FBRyxFQUFDO0lBQUMsQ0FBQztJQUFDbEQsQ0FBQyxHQUFDLFNBQUFBLENBQVN4aEIsQ0FBQyxFQUFDb2hCLENBQUMsRUFBQztNQUFDLElBQUlVLENBQUM7TUFBQyxPQUFPQSxDQUFDLEdBQUMsU0FBQUEsQ0FBQSxFQUFVLENBQUMsQ0FBQyxFQUFDQSxDQUFDLENBQUNqYSxTQUFTLEdBQUM3SCxDQUFDLEVBQUN2RyxDQUFDLENBQUNrckIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUk3QyxDQUFDLENBQUQsQ0FBQyxFQUFDVixDQUFDLENBQUM7SUFBQSxDQUFDO0lBQUN3RCxDQUFDLEdBQUMsU0FBQUEsQ0FBUzVrQixDQUFDLEVBQUM7TUFBQyxPQUFPdkcsQ0FBQyxDQUFDa3JCLE1BQU0sQ0FBQ2xELENBQUMsRUFBQ3poQixDQUFDLENBQUM7SUFBQSxDQUFDO0lBQUM0akIsQ0FBQyxHQUFDLFNBQUFBLENBQVM1akIsQ0FBQyxFQUFDO01BQUMsT0FBT3ZHLENBQUMsQ0FBQyxHQUFHLEdBQUN1RyxDQUFDLEdBQUMsS0FBSyxHQUFDQSxDQUFDLEdBQUMsR0FBRyxDQUFDO0lBQUEsQ0FBQztJQUFDNmtCLENBQUMsR0FBQyxDQUFDLENBQUM7SUFBQzFDLENBQUMsR0FBQyxTQUFBQSxDQUFTbmlCLENBQUMsRUFBQztNQUFDLElBQUlvaEIsQ0FBQztNQUFDLE9BQU9waEIsQ0FBQyxDQUFDdEUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFHMGxCLENBQUMsR0FBQ3BoQixDQUFDLENBQUNwQixPQUFPLENBQUMsWUFBWSxDQUFDLENBQUN2RyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUN5UCxNQUFNLENBQUMsVUFBU3NaLENBQUMsRUFBQ1UsQ0FBQyxFQUFDO1FBQUMsT0FBT3JvQixDQUFDLENBQUNxb0IsQ0FBQyxDQUFDLENBQUNydEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFHdUwsQ0FBQyxDQUFDdkwsSUFBSSxDQUFDLE1BQU0sQ0FBQztNQUFBLENBQUMsQ0FBQyxFQUFDdUwsQ0FBQyxHQUFDb2hCLENBQUMsQ0FBQzlmLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBQ3RCLENBQUM7SUFBQSxDQUFDO0lBQUM4a0IsQ0FBQyxHQUFDLFNBQUFBLENBQVNyckIsQ0FBQyxFQUFDdUcsQ0FBQyxFQUFDb2hCLENBQUMsRUFBQztNQUFDLElBQUlVLENBQUMsRUFBQ3plLENBQUM7TUFBQyxJQUFHLE9BQU8rZCxDQUFDLElBQUUsUUFBUSxFQUFDQSxDQUFDLEdBQUMyRCxRQUFRLENBQUMzRCxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFHLE9BQU9BLENBQUMsSUFBRSxRQUFRLEVBQUM7TUFBTyxJQUFHNEQsS0FBSyxDQUFDNUQsQ0FBQyxDQUFDLEVBQUM7TUFBTyxPQUFPVSxDQUFDLEdBQUNRLENBQUMsQ0FBQ1EsQ0FBQyxDQUFDOWlCLENBQUMsQ0FBQ2lqQixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDNWYsQ0FBQyxHQUFDckQsQ0FBQyxFQUFDdkcsQ0FBQyxDQUFDcW9CLENBQUMsQ0FBQyxLQUFHVCxTQUFTLEtBQUdyaEIsQ0FBQyxHQUFDc2lCLENBQUMsQ0FBQ1IsQ0FBQyxDQUFDbUIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUM3QixDQUFDLEdBQUMsQ0FBQ0EsQ0FBQyxDQUFDLEVBQUMzbkIsQ0FBQyxDQUFDdUcsQ0FBQyxDQUFDLEtBQUdxaEIsU0FBUyxHQUFDNW5CLENBQUMsQ0FBQ3VHLENBQUMsQ0FBQyxHQUFDb2hCLENBQUMsR0FBQzNuQixDQUFDLENBQUN1RyxDQUFDLENBQUMsSUFBRW9oQixDQUFDLEVBQUMsSUFBSTtJQUFBLENBQUM7SUFBQzZELENBQUMsR0FBQyxTQUFBQSxDQUFTeHJCLENBQUMsRUFBQ3VHLENBQUMsRUFBQ29oQixDQUFDLEVBQUM7TUFBQyxJQUFHM25CLENBQUMsS0FBRyxHQUFHLElBQUVBLENBQUMsS0FBRyxHQUFHLEVBQUMsT0FBTyxDQUFDO01BQUMsSUFBR0EsQ0FBQyxLQUFHLEdBQUcsSUFBRUEsQ0FBQyxLQUFHLEdBQUcsRUFBQyxPQUFPMm5CLENBQUMsR0FBQyxDQUFDLEdBQUNwaEIsQ0FBQyxHQUFDLENBQUM7TUFBQyxJQUFHdkcsQ0FBQyxLQUFHLEdBQUcsSUFBRUEsQ0FBQyxLQUFHLEdBQUcsRUFBQyxPQUFPMm5CLENBQUMsR0FBQ3BoQixDQUFDO01BQUMsTUFBSyxtQkFBbUI7SUFBQSxDQUFDO0lBQUNrbEIsQ0FBQyxHQUFDLFNBQUFBLENBQVN6ckIsQ0FBQyxFQUFDO01BQUMsT0FBT3lyQixDQUFDLENBQUN6ckIsQ0FBQyxHQUFDeXJCLENBQUMsQ0FBQ3pyQixDQUFDLElBQUVtcUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFDc0IsQ0FBQyxDQUFDenJCLENBQUMsQ0FBQzJQLElBQUksQ0FBQzNQLENBQUMsQ0FBQyxDQUFDK08sSUFBSSxDQUFDLENBQUM7SUFBQSxDQUFDO0VBQUM4WSxDQUFDLENBQUN6WixTQUFTLENBQUM4WixRQUFRLEdBQUMsWUFBVTtJQUFDLElBQUkzaEIsQ0FBQztJQUFDQSxDQUFDLEdBQUMsSUFBSSxDQUFDbWxCLFFBQVEsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDbkQsYUFBYSxHQUFDdm9CLENBQUMsQ0FBQ3VHLENBQUMsQ0FBQ3dJLElBQUksQ0FBQyxFQUFDLElBQUksQ0FBQzRjLFVBQVUsR0FBQ3BsQixDQUFDLENBQUMyakIsTUFBTTtFQUFBLENBQUMsRUFBQ3JDLENBQUMsQ0FBQ3paLFNBQVMsQ0FBQ2lELElBQUksR0FBQyxVQUFTclIsQ0FBQyxFQUFDdUcsQ0FBQyxFQUFDO0lBQUMsSUFBSW9oQixDQUFDLEVBQUNVLENBQUMsRUFBQ3plLENBQUMsRUFBQ2lmLENBQUMsRUFBQ0ssQ0FBQztJQUFDYixDQUFDLEdBQUMsVUFBU1YsQ0FBQyxFQUFDO01BQUMsT0FBTyxZQUFVO1FBQUMsQ0FBQzNuQixDQUFDLElBQUUsQ0FBQzJuQixDQUFDLENBQUNqcEIsSUFBSSxJQUFFaXBCLENBQUMsQ0FBQ3hVLE9BQU8sQ0FBQyxDQUFDO1FBQUMsSUFBRzVNLENBQUMsRUFBQyxPQUFPQSxDQUFDLENBQUMsQ0FBQztNQUFBLENBQUM7SUFBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMyaUIsQ0FBQyxHQUFDLElBQUksQ0FBQzNOLFNBQVMsQ0FBQ2pZLE1BQU0sQ0FBQyxDQUFDLENBQUM2QixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUN4SixNQUFNLEdBQUMsQ0FBQyxFQUFDaU8sQ0FBQyxHQUFDLElBQUksQ0FBQzJSLFNBQVMsQ0FBQzdNLEdBQUcsQ0FBQyxJQUFJLENBQUM0WixLQUFLLENBQUMsRUFBQ1gsQ0FBQyxHQUFDLEVBQUU7SUFBQyxJQUFHdUIsQ0FBQyxJQUFFbHBCLENBQUMsRUFBQzZvQixDQUFDLEdBQUMsTUFBTSxDQUFDLEtBQUssSUFBR0ssQ0FBQyxJQUFFLENBQUNscEIsQ0FBQyxFQUFDNm9CLENBQUMsR0FBQyxNQUFNLENBQUMsS0FBSyxJQUFHLENBQUNLLENBQUMsSUFBRWxwQixDQUFDLEVBQUM2b0IsQ0FBQyxHQUFDLElBQUksQ0FBQzVqQixPQUFPLENBQUM0bEIsYUFBYSxFQUFDbEQsQ0FBQyxDQUFDOEIsSUFBSSxDQUFDLElBQUksQ0FBQ3hrQixPQUFPLENBQUM2bEIsWUFBWSxDQUFDLENBQUMsS0FBSTtNQUFDLElBQUcsQ0FBQyxDQUFDNUIsQ0FBQyxJQUFFLENBQUMsQ0FBQ2xwQixDQUFDLEVBQUMsT0FBT3FvQixDQUFDLENBQUMsQ0FBQztNQUFDUSxDQUFDLEdBQUMsSUFBSSxDQUFDNWpCLE9BQU8sQ0FBQzhsQixhQUFhLEVBQUNwRCxDQUFDLENBQUM4QixJQUFJLENBQUMsSUFBSSxDQUFDeGtCLE9BQU8sQ0FBQytsQixZQUFZLENBQUM7SUFBQTtJQUFDLE9BQU9yRCxDQUFDLENBQUM4QixJQUFJLENBQUNwQixDQUFDLENBQUMsRUFBQ3plLENBQUMsQ0FBQ2lmLENBQUMsQ0FBQyxDQUFDK0MsS0FBSyxDQUFDaGlCLENBQUMsRUFBQytkLENBQUMsQ0FBQztFQUFBLENBQUMsRUFBQ0UsQ0FBQyxDQUFDelosU0FBUyxDQUFDeWQsaUJBQWlCLEdBQUMsWUFBVTtJQUFDLElBQUl0bEIsQ0FBQyxHQUFDLElBQUksQ0FBQ3VsQixXQUFXLENBQUMsQ0FBQztNQUFDbkUsQ0FBQyxHQUFDcGhCLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFBQ3FELENBQUMsR0FBQ3JELENBQUMsQ0FBQyxDQUFDLENBQUM7TUFBQzJpQixDQUFDLEdBQUNMLENBQUMsQ0FBQ2xCLENBQUMsQ0FBQztNQUFDd0IsQ0FBQyxHQUFDTixDQUFDLENBQUNqZixDQUFDLENBQUM7TUFBQ3dmLENBQUMsR0FBQ3pCLENBQUMsR0FBQyxHQUFHLEdBQUMvZCxDQUFDO01BQUN5ZixDQUFDLEdBQUMrQixDQUFDLENBQUNoQyxDQUFDLENBQUM7SUFBQyxJQUFHLENBQUNDLENBQUMsSUFBRSxDQUFDcnZCLFFBQVEsQ0FBQyt4QixJQUFJLENBQUNDLFFBQVEsQ0FBQzNDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDO01BQUNBLENBQUMsR0FBQytCLENBQUMsQ0FBQ2hDLENBQUMsQ0FBQyxHQUFDZSxDQUFDLENBQUMsS0FBSyxDQUFDO01BQUMsSUFBSW5CLENBQUMsR0FBQyxDQUFDLENBQUM7TUFBQ0EsQ0FBQyxDQUFDRSxDQUFDLENBQUMsR0FBQyxDQUFDLEVBQUNDLENBQUMsS0FBRyxRQUFRLEdBQUNILENBQUMsQ0FBQ2x0QixHQUFHLEdBQUMsS0FBSyxHQUFDcXRCLENBQUMsS0FBRyxRQUFRLEdBQUNILENBQUMsQ0FBQzVtQixJQUFJLEdBQUMsS0FBSyxHQUFDNG1CLENBQUMsQ0FBQ0csQ0FBQyxDQUFDLEdBQUMsQ0FBQyxFQUFDRSxDQUFDLENBQUNyckIsR0FBRyxDQUFDZ3JCLENBQUMsQ0FBQyxDQUFDL3JCLFFBQVEsQ0FBQ29yQixDQUFDLEdBQUMsU0FBUyxDQUFDLEVBQUNyb0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDZ1YsTUFBTSxDQUFDcVUsQ0FBQyxDQUFDO0lBQUE7SUFBQyxPQUFPQSxDQUFDLENBQUN0bUIsT0FBTyxDQUFDLElBQUksQ0FBQ29SLE9BQU8sQ0FBQztFQUFBLENBQUMsRUFBQzBULENBQUMsQ0FBQ3paLFNBQVMsQ0FBQzZkLGtCQUFrQixHQUFDLFlBQVU7SUFBQyxJQUFJdEUsQ0FBQyxFQUFDVSxDQUFDLEVBQUN6ZSxDQUFDLEVBQUNvZixDQUFDLEVBQUNDLENBQUMsRUFBQ2QsQ0FBQyxFQUFDdUIsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBQ2QsQ0FBQyxFQUFDa0IsQ0FBQyxFQUFDQyxDQUFDLEVBQUNsQixDQUFDLEVBQUNmLENBQUMsRUFBQ0QsQ0FBQyxFQUFDb0QsQ0FBQyxFQUFDaEIsQ0FBQyxFQUFDaUIsQ0FBQyxFQUFDMUMsQ0FBQyxFQUFDK0MsQ0FBQyxFQUFDNUQsQ0FBQyxFQUFDcUUsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDO0lBQUNGLENBQUMsR0FBQyxJQUFJLENBQUNULFdBQVcsQ0FBQyxDQUFDLEVBQUNNLENBQUMsR0FBQ0csQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDTCxDQUFDLEdBQUNLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ0osQ0FBQyxHQUFDSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUN2QyxDQUFDLEdBQUMsSUFBSSxDQUFDdHJCLElBQUksQ0FBQ3laLFFBQVEsQ0FBQyxDQUFDLEVBQUN3UixDQUFDLEdBQUMsSUFBSSxDQUFDanJCLElBQUksQ0FBQ0ksV0FBVyxDQUFDLENBQUMsRUFBQ21yQixDQUFDLEdBQUMsSUFBSSxDQUFDdnJCLElBQUksQ0FBQytSLFVBQVUsQ0FBQyxDQUFDLEVBQUNtWixDQUFDLEdBQUMsSUFBSSxDQUFDbHJCLElBQUksQ0FBQ2d1QixXQUFXLENBQUMsQ0FBQyxFQUFDNUQsQ0FBQyxHQUFDLElBQUksQ0FBQ3BxQixJQUFJLENBQUNpdUIsVUFBVSxDQUFDLENBQUMsRUFBQ0YsQ0FBQyxHQUFDLElBQUksQ0FBQ3RZLE9BQU8sQ0FBQ2dFLFFBQVEsQ0FBQyxDQUFDLEVBQUM4USxDQUFDLEdBQUMsSUFBSSxDQUFDMU4sU0FBUyxDQUFDeGMsTUFBTSxDQUFDLENBQUMsRUFBQ29wQixDQUFDLEdBQUMsSUFBSSxDQUFDNU0sU0FBUyxDQUFDN2YsS0FBSyxDQUFDLENBQUMsRUFBQzB2QixDQUFDLEdBQUN2QyxDQUFDLENBQUN1RCxDQUFDLENBQUMsRUFBQ1gsQ0FBQyxHQUFDcEMsQ0FBQyxDQUFDK0MsQ0FBQyxDQUFDLEVBQUN2RSxDQUFDLEdBQUNnQixDQUFDLENBQUM0QyxDQUFDLENBQUMsRUFBQy9CLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBQ0EsQ0FBQyxDQUFDN0IsQ0FBQyxDQUFDLEdBQUN1RSxDQUFDLEtBQUcsR0FBRyxHQUFDekMsQ0FBQyxHQUFDeUMsQ0FBQyxLQUFHLEdBQUcsR0FBQ25DLENBQUMsR0FBQyxDQUFDLEVBQUNvQixDQUFDLENBQUMzQixDQUFDLEVBQUMsS0FBSyxFQUFDTSxDQUFDLENBQUNsdUIsR0FBRyxHQUFDMndCLENBQUMsQ0FBQzN3QixHQUFHLENBQUMsRUFBQ3V2QixDQUFDLENBQUMzQixDQUFDLEVBQUMsTUFBTSxFQUFDTSxDQUFDLENBQUM1bkIsSUFBSSxHQUFDcXFCLENBQUMsQ0FBQ3JxQixJQUFJLENBQUMsRUFBQ29xQixDQUFDLEdBQUMsQ0FBQyxLQUFLLEVBQUMsTUFBTSxDQUFDO0lBQUMsS0FBSXhFLENBQUMsR0FBQyxDQUFDLEVBQUNtRCxDQUFDLEdBQUNxQixDQUFDLENBQUM3d0IsTUFBTSxFQUFDcXNCLENBQUMsR0FBQ21ELENBQUMsRUFBQ25ELENBQUMsRUFBRSxFQUFDcUUsQ0FBQyxHQUFDRyxDQUFDLENBQUN4RSxDQUFDLENBQUMsRUFBQ1UsQ0FBQyxHQUFDNEMsUUFBUSxDQUFDLElBQUksQ0FBQzVzQixJQUFJLENBQUNWLEdBQUcsQ0FBQyxTQUFTLEdBQUNxdUIsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUMzRCxDQUFDLElBQUUyQyxDQUFDLENBQUMzQixDQUFDLEVBQUMyQyxDQUFDLEVBQUMzRCxDQUFDLENBQUM7SUFBQ0ssQ0FBQyxHQUFDNWQsSUFBSSxDQUFDMmIsR0FBRyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUM3aEIsT0FBTyxDQUFDZ21CLEdBQUcsSUFBRSxJQUFJLENBQUNobUIsT0FBTyxDQUFDdWxCLFNBQVMsR0FBQzVnQixDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ3loQixDQUFDLENBQUMzQixDQUFDLEVBQUM3QixDQUFDLEVBQUNrQixDQUFDLENBQUM7SUFBQyxJQUFHLENBQUMsSUFBSSxDQUFDOWpCLE9BQU8sQ0FBQ3VsQixTQUFTLEVBQUMsSUFBSSxDQUFDbEMsS0FBSyxDQUFDbFgsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFJO01BQUN4SCxDQUFDLEdBQUMsSUFBSSxDQUFDM0UsT0FBTyxDQUFDd2xCLFNBQVMsRUFBQ3BDLENBQUMsR0FBQ3JvQixDQUFDLENBQUNrckIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFDeEIsQ0FBQyxDQUFDLEVBQUMvQixDQUFDLEdBQUMsSUFBSSxDQUFDWSxhQUFhLENBQUN2cUIsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFFLElBQUksQ0FBQ3VxQixhQUFhLENBQUN2cUIsR0FBRyxDQUFDLGtCQUFrQixDQUFDLElBQUUsSUFBSSxDQUFDdXFCLGFBQWEsQ0FBQ3ZxQixHQUFHLENBQUMsa0JBQWtCLENBQUMsSUFBRSxPQUFPO01BQUMsS0FBSStwQixDQUFDLEdBQUMsQ0FBQyxFQUFDb0MsQ0FBQyxHQUFDZixDQUFDLENBQUN6dEIsTUFBTSxFQUFDb3NCLENBQUMsR0FBQ29DLENBQUMsRUFBQ3BDLENBQUMsRUFBRSxFQUFDO1FBQUNzRSxDQUFDLEdBQUNqRCxDQUFDLENBQUNyQixDQUFDLENBQUMsRUFBQ3VFLENBQUMsR0FBQ3pELENBQUMsQ0FBQ3dELENBQUMsQ0FBQztRQUFDLElBQUdBLENBQUMsS0FBR1osQ0FBQyxFQUFDO1FBQVN6QyxDQUFDLEdBQUNzRCxDQUFDLEtBQUdsQixDQUFDLEdBQUN6RCxDQUFDLEdBQUMsYUFBYSxFQUFDVSxDQUFDLENBQUMsU0FBUyxHQUFDaUUsQ0FBQyxDQUFDLEdBQUMxaUIsQ0FBQyxHQUFDLFdBQVcsR0FBQ29mLENBQUM7TUFBQTtNQUFDcUMsQ0FBQyxDQUFDM0IsQ0FBQyxFQUFDYixDQUFDLENBQUM0QyxDQUFDLENBQUMsRUFBQzdoQixDQUFDLENBQUMsRUFBQ3JELENBQUMsQ0FBQytILElBQUksQ0FBQzhhLENBQUMsRUFBQzhDLENBQUMsQ0FBQyxJQUFFLENBQUMsSUFBRWIsQ0FBQyxDQUFDaEQsQ0FBQyxFQUFDUSxDQUFDLENBQUNxRCxDQUFDLENBQUMsRUFBQ3RpQixDQUFDLEdBQUMsQ0FBQyxDQUFDO0lBQUE7SUFBQ3JELENBQUMsQ0FBQytILElBQUksQ0FBQzZhLENBQUMsRUFBQ2lELENBQUMsQ0FBQyxJQUFFLENBQUMsSUFBRWYsQ0FBQyxDQUFDM0IsQ0FBQyxFQUFDLE1BQU0sRUFBQzhCLENBQUMsQ0FBQ1UsQ0FBQyxFQUFDL0QsQ0FBQyxFQUFDOEIsQ0FBQyxDQUFDLENBQUMsRUFBQzVCLENBQUMsSUFBRWdELENBQUMsQ0FBQ2hELENBQUMsRUFBQyxNQUFNLEVBQUNtRCxDQUFDLENBQUNVLENBQUMsRUFBQ3RpQixDQUFDLEVBQUNrZixDQUFDLENBQUMsQ0FBQyxJQUFFdmlCLENBQUMsQ0FBQytILElBQUksQ0FBQzRhLENBQUMsRUFBQ2tELENBQUMsQ0FBQyxJQUFFLENBQUMsS0FBR2YsQ0FBQyxDQUFDM0IsQ0FBQyxFQUFDLEtBQUssRUFBQzhCLENBQUMsQ0FBQ1UsQ0FBQyxFQUFDakQsQ0FBQyxFQUFDVSxDQUFDLENBQUMsQ0FBQyxFQUFDdEIsQ0FBQyxJQUFFZ0QsQ0FBQyxDQUFDaEQsQ0FBQyxFQUFDLEtBQUssRUFBQ21ELENBQUMsQ0FBQ1UsQ0FBQyxFQUFDdGlCLENBQUMsRUFBQ2dnQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDck8sU0FBUyxDQUFDdFosRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFHeW5CLENBQUMsQ0FBQ2tELE9BQU8sR0FBQyxPQUFPLENBQUMsRUFBQyxJQUFJLENBQUNyUixTQUFTLENBQUMxWixVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM3RCxHQUFHLENBQUMwckIsQ0FBQyxDQUFDO0lBQUMsSUFBR3JCLENBQUMsRUFBQyxPQUFPLElBQUksQ0FBQ0MsS0FBSyxDQUFDem1CLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQzdELEdBQUcsQ0FBQ3FxQixDQUFDLENBQUM7RUFBQSxDQUFDLEVBQUNSLENBQUMsQ0FBQ3paLFNBQVMsQ0FBQzBkLFdBQVcsR0FBQyxZQUFVO0lBQUMsSUFBSTlyQixDQUFDLEVBQUMybkIsQ0FBQyxFQUFDVSxDQUFDLEVBQUN6ZSxDQUFDLEVBQUNpZixDQUFDLEVBQUNRLENBQUMsRUFBQ0osQ0FBQyxFQUFDZCxDQUFDO0lBQUNBLENBQUMsR0FBQyxJQUFJLENBQUNsakIsT0FBTyxDQUFDa1QsUUFBUSxLQUFHLElBQUksQ0FBQ3paLElBQUksR0FBQyxJQUFJLENBQUN1RyxPQUFPLENBQUMwbEIsZUFBZSxHQUFDLElBQUksQ0FBQzFsQixPQUFPLENBQUMybEIsY0FBYyxDQUFDLEVBQUM1cUIsQ0FBQyxHQUFDZ3BCLENBQUMsQ0FBQ2IsQ0FBQyxDQUFDLEVBQUNub0IsQ0FBQyxDQUFDckUsTUFBTSxLQUFHLENBQUMsS0FBR3FFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxHQUFHLENBQUM7SUFBQyxJQUFHMm5CLENBQUMsR0FBQzNuQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUN1RyxDQUFDLENBQUMrSCxJQUFJLENBQUM4YSxDQUFDLEVBQUN6QixDQUFDLENBQUMsR0FBQyxDQUFDLEVBQUMsTUFBSyxrQkFBa0IsR0FBQ3lCLENBQUMsR0FBQyxHQUFHO0lBQUMsSUFBR3BwQixDQUFDLENBQUNyRSxNQUFNLEtBQUcsQ0FBQyxJQUFFLENBQUMwc0IsQ0FBQyxHQUFDcm9CLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ3VHLENBQUMsQ0FBQytILElBQUksQ0FBQzZhLENBQUMsRUFBQ2QsQ0FBQyxDQUFDLElBQUUsQ0FBQyxNQUFJemUsQ0FBQyxHQUFDNUosQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDdUcsQ0FBQyxDQUFDK0gsSUFBSSxDQUFDNGEsQ0FBQyxFQUFDdGYsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLElBQUUsQ0FBQ2lmLENBQUMsR0FBQzdvQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUN1RyxDQUFDLENBQUMrSCxJQUFJLENBQUM0YSxDQUFDLEVBQUNMLENBQUMsQ0FBQyxJQUFFLENBQUMsTUFBSVEsQ0FBQyxHQUFDcnBCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ3VHLENBQUMsQ0FBQytILElBQUksQ0FBQzZhLENBQUMsRUFBQ0UsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUNycEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUNpcEIsQ0FBQyxHQUFDanBCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ3VHLENBQUMsQ0FBQytILElBQUksQ0FBQzRhLENBQUMsRUFBQ0QsQ0FBQyxDQUFDLElBQUUsQ0FBQyxJQUFFLEdBQUcsR0FBQyxHQUFHO0lBQUMsT0FBT2pwQixDQUFDLENBQUNyRSxNQUFNLEtBQUcsQ0FBQyxLQUFHcUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ0EsQ0FBQztFQUFBLENBQUMsRUFBQzZuQixDQUFDLENBQUN6WixTQUFTLENBQUNzZCxRQUFRLEdBQUMsVUFBUzFyQixDQUFDLEVBQUM7SUFBQyxJQUFJdUcsQ0FBQztJQUFDdkcsQ0FBQyxLQUFHQSxDQUFDLEdBQUMsSUFBSSxDQUFDaUYsT0FBTyxDQUFDNE8sS0FBSyxDQUFDLEVBQUM3VCxDQUFDLEtBQUdBLENBQUMsR0FBQyxTQUFTLENBQUMsRUFBQ3VHLENBQUMsR0FBQzBpQixDQUFDLENBQUNqcEIsQ0FBQyxDQUFDO0lBQUMsSUFBRyxDQUFDdUcsQ0FBQyxFQUFDLE1BQUssaUJBQWlCLEdBQUN2RyxDQUFDO0lBQUMsT0FBT3VHLENBQUM7RUFBQSxDQUFDLEVBQUNzaEIsQ0FBQyxDQUFDelosU0FBUyxDQUFDeWUsYUFBYSxHQUFDLFlBQVU7SUFBQyxJQUFJdG1CLENBQUMsRUFBQ29oQixDQUFDO0lBQUMsT0FBT3BoQixDQUFDLEdBQUMsQ0FBQyxNQUFNLENBQUMsRUFBQ3ZHLENBQUMsQ0FBQzhzQixPQUFPLENBQUMsSUFBSSxDQUFDN25CLE9BQU8sQ0FBQzZpQixTQUFTLENBQUMsR0FBQ3ZoQixDQUFDLEdBQUNBLENBQUMsQ0FBQ3dtQixNQUFNLENBQUMsSUFBSSxDQUFDOW5CLE9BQU8sQ0FBQzZpQixTQUFTLENBQUMsR0FBQyxJQUFJLENBQUM3aUIsT0FBTyxDQUFDNmlCLFNBQVMsSUFBRXZoQixDQUFDLENBQUNrakIsSUFBSSxDQUFDLElBQUksQ0FBQ3hrQixPQUFPLENBQUM2aUIsU0FBUyxDQUFDLEVBQUNILENBQUMsR0FBQyxJQUFJLENBQUMrRCxRQUFRLENBQUMsQ0FBQyxFQUFDbmxCLENBQUMsR0FBQ3ZHLENBQUMsQ0FBQzBZLEdBQUcsQ0FBQ25TLENBQUMsRUFBQyxVQUFTdkcsQ0FBQyxFQUFDO01BQUMsT0FBT3FvQixDQUFDLEdBQUMsR0FBRyxHQUFDVixDQUFDLENBQUM1cUIsSUFBSSxHQUFDLEdBQUcsR0FBQ2lELENBQUM7SUFBQSxDQUFDLENBQUMsQ0FBQ2d0QixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsSUFBSSxDQUFDekUsYUFBYSxDQUFDdnRCLElBQUksQ0FBQyxPQUFPLEVBQUN1TCxDQUFDLENBQUM7RUFBQSxDQUFDLEVBQUNzaEIsQ0FBQyxDQUFDelosU0FBUyxDQUFDd2EsR0FBRyxHQUFDLFVBQVNyaUIsQ0FBQyxFQUFDb2hCLENBQUMsRUFBQztJQUFDLElBQUlVLENBQUMsRUFBQ1EsQ0FBQyxFQUFDSyxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQztJQUFDcHBCLENBQUMsQ0FBQ2lvQixhQUFhLENBQUNOLENBQUMsQ0FBQyxHQUFDM25CLENBQUMsQ0FBQ2tyQixNQUFNLENBQUMsSUFBSSxDQUFDam1CLE9BQU8sRUFBQzBpQixDQUFDLENBQUMsR0FBQzNuQixDQUFDLENBQUNxUCxJQUFJLENBQUNzWSxDQUFDLENBQUMsS0FBRyxRQUFRLEtBQUcsSUFBSSxDQUFDMWlCLE9BQU8sQ0FBQzZpQixTQUFTLEdBQUNILENBQUMsQ0FBQztJQUFDLElBQUcsSUFBSSxDQUFDcE0sU0FBUyxJQUFFLENBQUNoVixDQUFDLEVBQUM7TUFBQyxJQUFJLENBQUM4SyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFBQztJQUFNO0lBQUMsSUFBRyxDQUFDLElBQUksQ0FBQ2tLLFNBQVMsSUFBRSxDQUFDaFYsQ0FBQyxFQUFDO0lBQU9zaUIsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFDN29CLENBQUMsQ0FBQ2lvQixhQUFhLENBQUMxaEIsQ0FBQyxDQUFDLEdBQUNzaUIsQ0FBQyxHQUFDdGlCLENBQUMsR0FBQ3NpQixDQUFDLENBQUNqZixDQUFDLENBQUMsR0FBQ3JELENBQUM7SUFBQyxLQUFJMmlCLENBQUMsSUFBSUwsQ0FBQyxFQUFDO01BQUNSLENBQUMsR0FBQ1EsQ0FBQyxDQUFDSyxDQUFDLENBQUMsRUFBQ0MsQ0FBQyxHQUFDLElBQUksQ0FBQ3dDLFVBQVUsQ0FBQ3pDLENBQUMsQ0FBQztNQUFDLElBQUcsQ0FBQ0MsQ0FBQyxFQUFDO01BQVNBLENBQUMsS0FBRyxNQUFNLEtBQUdkLENBQUMsR0FBQ29ELENBQUMsQ0FBQ3BELENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ3BqQixPQUFPLENBQUN5bEIsYUFBYSxLQUFHckMsQ0FBQyxHQUFDQSxDQUFDLENBQUM5ZSxPQUFPLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBQzZmLENBQUMsR0FBQ0YsQ0FBQyxLQUFHdGYsQ0FBQyxHQUFDLEVBQUUsR0FBQyxHQUFHLEdBQUNzZixDQUFDLEVBQUNILENBQUMsQ0FBQyxJQUFJLENBQUNSLGFBQWEsRUFBQyxlQUFlLEdBQUNZLENBQUMsR0FBQ0MsQ0FBQyxHQUFDLEdBQUcsQ0FBQyxDQUFDcmEsSUFBSSxDQUFDc1osQ0FBQyxDQUFDO0lBQUE7SUFBQyxJQUFJLENBQUN3RSxhQUFhLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ251QixJQUFJLEdBQUMsSUFBSSxDQUFDdXRCLGtCQUFrQixDQUFDLENBQUMsR0FBQyxJQUFJLENBQUNKLGlCQUFpQixDQUFDLENBQUMsRUFBQyxJQUFJLENBQUN4YSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUNwTSxPQUFPLENBQUNxbEIsUUFBUSxLQUFHMkMsWUFBWSxDQUFDLElBQUksQ0FBQ0MsYUFBYSxDQUFDLEVBQUMsSUFBSSxDQUFDQSxhQUFhLEdBQUN6dEIsVUFBVSxDQUFDLElBQUksQ0FBQzRSLElBQUksQ0FBQ25VLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMrSCxPQUFPLENBQUNzbEIsYUFBYSxDQUFDLENBQUM7RUFBQSxDQUFDLEVBQUMxQyxDQUFDLENBQUN6WixTQUFTLENBQUMrRSxPQUFPLEdBQUMsWUFBVTtJQUFDLElBQUksQ0FBQ2dCLE9BQU8sQ0FBQ2hNLElBQUksQ0FBQ2tnQixDQUFDLEVBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxDQUFDbFUsT0FBTyxDQUFDM1QsTUFBTSxDQUFDLENBQUM7RUFBQSxDQUFDLEVBQUNSLENBQUMsQ0FBQzJuQixDQUFDLENBQUMsR0FBQyxVQUFTcGhCLENBQUMsRUFBQzhoQixDQUFDLEVBQUN6ZSxDQUFDLEVBQUM7SUFBQyxPQUFPckQsQ0FBQyxJQUFFQSxDQUFDLENBQUM0bUIsUUFBUSxJQUFFNW1CLENBQUMsQ0FBQzZtQixNQUFNLEdBQUNwdEIsQ0FBQyxDQUFDdUcsQ0FBQyxDQUFDLENBQUNvaEIsQ0FBQyxDQUFDLENBQUNVLENBQUMsRUFBQ3plLENBQUMsQ0FBQyxJQUFFQSxDQUFDLEdBQUN5ZSxDQUFDLEVBQUNBLENBQUMsR0FBQzloQixDQUFDLEVBQUMsSUFBSXNoQixDQUFDLENBQUMsSUFBSSxFQUFDUSxDQUFDLEVBQUN6ZSxDQUFDLENBQUMsQ0FBQyxFQUFDckQsQ0FBQztFQUFBLENBQUMsRUFBQ3ZHLENBQUMsQ0FBQzRGLEVBQUUsQ0FBQytoQixDQUFDLENBQUMsR0FBQyxVQUFTcGhCLENBQUMsRUFBQ29oQixDQUFDLEVBQUM7SUFBQyxPQUFPM25CLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3ZCLElBQUksQ0FBQyxZQUFVO01BQUMsSUFBSW1MLENBQUMsR0FBQzhlLENBQUMsQ0FBQzFvQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQ21JLElBQUksQ0FBQ2tnQixDQUFDLENBQUM7TUFBQ3plLENBQUMsSUFBRUEsQ0FBQyxDQUFDdUosT0FBTyxDQUFDLENBQUM7TUFBQyxJQUFJMFYsQ0FBQyxHQUFDLElBQUloQixDQUFDLENBQUM3bkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDdUcsQ0FBQyxFQUFDb2hCLENBQUMsQ0FBQztJQUFBLENBQUMsQ0FBQyxFQUFDLElBQUk7RUFBQSxDQUFDLEVBQUMzbkIsQ0FBQyxDQUFDa3JCLE1BQU0sQ0FBQ2xyQixDQUFDLENBQUMybkIsQ0FBQyxDQUFDLEVBQUM7SUFBQzBGLFFBQVEsRUFBQ2xDLENBQUM7SUFBQ21DLFFBQVEsRUFBQ3hFLENBQUM7SUFBQ3lFLFdBQVcsRUFBQzNELENBQUM7SUFBQzRELGFBQWEsRUFBQ3hGLENBQUM7SUFBQzBELFFBQVEsRUFBQy9CLENBQUM7SUFBQzhELFNBQVMsRUFBQ3pEO0VBQUMsQ0FBQyxDQUFDLEVBQUNsQixDQUFDLENBQUMsV0FBVyxFQUFDO0lBQUMvWixJQUFJLEVBQUMsK0NBQStDO0lBQUNnYixPQUFPLEVBQUM7TUFBQzJELElBQUksRUFBQztRQUFDLGFBQWEsRUFBQyxNQUFNO1FBQUNDLE9BQU8sRUFBQyxtQkFBbUI7UUFBQyxhQUFhLEVBQUMsa0NBQWtDO1FBQUMsa0JBQWtCLEVBQUMsU0FBUztRQUFDQyxNQUFNLEVBQUMsbUJBQW1CO1FBQUMsZUFBZSxFQUFDLEtBQUs7UUFBQyxhQUFhLEVBQUMsUUFBUTtRQUFDLGNBQWMsRUFBQyxNQUFNO1FBQUMsbUJBQW1CLEVBQUMsV0FBVztRQUFDLHFCQUFxQixFQUFDO01BQVMsQ0FBQztNQUFDelMsS0FBSyxFQUFDO1FBQUNySCxLQUFLLEVBQUMsU0FBUztRQUFDLGtCQUFrQixFQUFDLFNBQVM7UUFBQyxjQUFjLEVBQUMsU0FBUztRQUFDLGtCQUFrQixFQUFDO01BQWltQyxDQUFDO01BQUNwRSxPQUFPLEVBQUM7UUFBQ29FLEtBQUssRUFBQyxTQUFTO1FBQUMsa0JBQWtCLEVBQUMsU0FBUztRQUFDLGNBQWMsRUFBQyxTQUFTO1FBQUMsa0JBQWtCLEVBQUM7TUFBaW9DLENBQUM7TUFBQ2tELElBQUksRUFBQztRQUFDbEQsS0FBSyxFQUFDLFNBQVM7UUFBQyxrQkFBa0IsRUFBQyxTQUFTO1FBQUMsY0FBYyxFQUFDLFNBQVM7UUFBQyxrQkFBa0IsRUFBQztNQUFpOEMsQ0FBQztNQUFDZ1csSUFBSSxFQUFDO1FBQUNoVyxLQUFLLEVBQUMsU0FBUztRQUFDLGtCQUFrQixFQUFDLFNBQVM7UUFBQyxjQUFjLEVBQUMsU0FBUztRQUFDLGtCQUFrQixFQUFDO01BQWl5QjtJQUFDO0VBQUMsQ0FBQyxDQUFDLEVBQUM5VCxDQUFDLENBQUMsWUFBVTtJQUFDZ3FCLENBQUMsQ0FBQzdCLENBQUMsQ0FBQ25xQixHQUFHLENBQUMsQ0FBQ2hELElBQUksQ0FBQyxJQUFJLEVBQUMsYUFBYSxDQUFDLEVBQUNnRixDQUFDLENBQUNoRyxRQUFRLENBQUMsQ0FBQ29FLEVBQUUsQ0FBQyxPQUFPLEVBQUMsR0FBRyxHQUFDaXFCLENBQUMsR0FBQyxVQUFVLEVBQUMsVUFBUzloQixDQUFDLEVBQUM7TUFBQ3ZHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2dFLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFBQSxDQUFDLENBQUMsRUFBQ2hFLENBQUMsQ0FBQ2hHLFFBQVEsQ0FBQyxDQUFDb0UsRUFBRSxDQUFDLGFBQWEsRUFBQyxHQUFHLEdBQUNpcUIsQ0FBQyxHQUFDLFVBQVUsRUFBQyxVQUFTOWhCLENBQUMsRUFBQztNQUFDLElBQUlvaEIsQ0FBQyxHQUFDM25CLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ21JLElBQUksQ0FBQ2tnQixDQUFDLENBQUM7TUFBQ1YsQ0FBQyxJQUFFQSxDQUFDLENBQUN0VyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFBQSxDQUFDLENBQUM7RUFBQSxDQUFDLENBQUM7QUFBQSxDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ0FwOWE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUMsQ0FBQyxVQUFTOVgsQ0FBQyxFQUFFSSxNQUFNLEVBQUVLLFFBQVEsRUFBRTR0QixTQUFTLEVBQUU7RUFFdkM7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSSxTQUFTaUcsR0FBR0EsQ0FBQzFyQixPQUFPLEVBQUU4QyxPQUFPLEVBQUU7SUFFM0I7QUFDUjtBQUNBO0FBQ0E7SUFDUSxJQUFJLENBQUM2b0IsUUFBUSxHQUFHLElBQUk7O0lBRXBCO0FBQ1I7QUFDQTtBQUNBO0lBQ1EsSUFBSSxDQUFDN29CLE9BQU8sR0FBRzFMLENBQUMsQ0FBQzJ4QixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUyQyxHQUFHLENBQUNFLFFBQVEsRUFBRTlvQixPQUFPLENBQUM7O0lBRWxEO0FBQ1I7QUFDQTtBQUNBO0lBQ1EsSUFBSSxDQUFDK2MsUUFBUSxHQUFHem9CLENBQUMsQ0FBQzRJLE9BQU8sQ0FBQzs7SUFFMUI7QUFDUjtBQUNBO0FBQ0E7SUFDUSxJQUFJLENBQUM2ckIsU0FBUyxHQUFHLENBQUMsQ0FBQzs7SUFFbkI7QUFDUjtBQUNBO0FBQ0E7SUFDUSxJQUFJLENBQUNDLFFBQVEsR0FBRyxDQUFDLENBQUM7O0lBRWxCO0FBQ1I7QUFDQTtBQUNBO0lBQ1EsSUFBSSxDQUFDQyxRQUFRLEdBQUcsQ0FBQyxDQUFDOztJQUVsQjtBQUNSO0FBQ0E7QUFDQTtJQUNRLElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUk7O0lBRXBCO0FBQ1I7QUFDQTtBQUNBO0lBQ1EsSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSTs7SUFFbEI7QUFDUjtBQUNBO0FBQ0E7QUFDQTtJQUNRLElBQUksQ0FBQ0MsWUFBWSxHQUFHLEVBQUU7O0lBRXRCO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7SUFDUSxJQUFJLENBQUNDLFdBQVcsR0FBRyxJQUFJOztJQUV2QjtBQUNSO0FBQ0E7SUFDUSxJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJOztJQUVsQjtBQUNSO0FBQ0E7QUFDQTtJQUNRLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEVBQUU7O0lBRWhCO0FBQ1I7QUFDQTtBQUNBO0lBQ1EsSUFBSSxDQUFDQyxPQUFPLEdBQUcsRUFBRTs7SUFFakI7QUFDUjtBQUNBO0FBQ0E7QUFDQTtJQUNRLElBQUksQ0FBQ0MsUUFBUSxHQUFHLEVBQUU7O0lBRWxCO0FBQ1I7QUFDQTtJQUNRLElBQUksQ0FBQ0MsT0FBTyxHQUFHLEVBQUU7O0lBRWpCO0FBQ1I7QUFDQTtBQUNBO0lBQ1EsSUFBSSxDQUFDQyxZQUFZLEdBQUcsQ0FBQyxDQUFDOztJQUV0QjtBQUNSO0FBQ0E7QUFDQTtJQUNRLElBQUksQ0FBQ0MsS0FBSyxHQUFHLEVBQUU7O0lBRWY7QUFDUjtBQUNBO0FBQ0E7QUFDQTtJQUNRLElBQUksQ0FBQ0MsS0FBSyxHQUFHO01BQ1RDLElBQUksRUFBRSxJQUFJO01BQ1ZsUSxNQUFNLEVBQUUsSUFBSTtNQUNabVEsT0FBTyxFQUFFLElBQUk7TUFDYkMsS0FBSyxFQUFFO1FBQ0h4ckIsS0FBSyxFQUFFLElBQUk7UUFDWHlyQixPQUFPLEVBQUU7TUFDYixDQUFDO01BQ0RwYyxTQUFTLEVBQUU7SUFDZixDQUFDOztJQUVEO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7SUFDUSxJQUFJLENBQUNxYyxPQUFPLEdBQUc7TUFDWEQsT0FBTyxFQUFFLENBQUMsQ0FBQztNQUNYRSxJQUFJLEVBQUU7UUFDRixjQUFjLEVBQUUsQ0FBRSxNQUFNLENBQUU7UUFDMUIsV0FBVyxFQUFFLENBQUUsTUFBTSxDQUFFO1FBQ3ZCLFVBQVUsRUFBRSxDQUFFLGFBQWE7TUFDL0I7SUFDSixDQUFDO0lBRUQ3MUIsQ0FBQyxDQUFDa0YsSUFBSSxDQUFDLENBQUUsVUFBVSxFQUFFLG1CQUFtQixDQUFFLEVBQUVsRixDQUFDLENBQUM4MUIsS0FBSyxDQUFDLFVBQVN6bEIsQ0FBQyxFQUFFc0osT0FBTyxFQUFFO01BQ3JFLElBQUksQ0FBQzhhLFNBQVMsQ0FBQzlhLE9BQU8sQ0FBQyxHQUFHM1osQ0FBQyxDQUFDODFCLEtBQUssQ0FBQyxJQUFJLENBQUNuYyxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUM7SUFDMUQsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRVQzWixDQUFDLENBQUNrRixJQUFJLENBQUNvdkIsR0FBRyxDQUFDeUIsT0FBTyxFQUFFLzFCLENBQUMsQ0FBQzgxQixLQUFLLENBQUMsVUFBU0UsR0FBRyxFQUFFQyxNQUFNLEVBQUU7TUFDOUMsSUFBSSxDQUFDdkIsUUFBUSxDQUFDc0IsR0FBRyxDQUFDL0YsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDRCxXQUFXLENBQUMsQ0FBQyxHQUFHZ0csR0FBRyxDQUFDRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FDbkQsSUFBSUQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUMxQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFVGoyQixDQUFDLENBQUNrRixJQUFJLENBQUNvdkIsR0FBRyxDQUFDNkIsT0FBTyxFQUFFbjJCLENBQUMsQ0FBQzgxQixLQUFLLENBQUMsVUFBU00sUUFBUSxFQUFFQyxNQUFNLEVBQUU7TUFDbkQsSUFBSSxDQUFDZixLQUFLLENBQUNwRixJQUFJLENBQUM7UUFDWixRQUFRLEVBQUVtRyxNQUFNLENBQUN2aEIsTUFBTTtRQUN2QixLQUFLLEVBQUU5VSxDQUFDLENBQUM4MUIsS0FBSyxDQUFDTyxNQUFNLENBQUNoSCxHQUFHLEVBQUUsSUFBSTtNQUNuQyxDQUFDLENBQUM7SUFDTixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFVCxJQUFJLENBQUNpSCxLQUFLLENBQUMsQ0FBQztJQUNaLElBQUksQ0FBQ0MsVUFBVSxDQUFDLENBQUM7RUFDckI7O0VBRUE7QUFDSjtBQUNBO0FBQ0E7RUFDSWpDLEdBQUcsQ0FBQ0UsUUFBUSxHQUFHO0lBQ1hyakIsS0FBSyxFQUFFLENBQUM7SUFDUjhTLElBQUksRUFBRSxLQUFLO0lBQ1hoRyxNQUFNLEVBQUUsS0FBSztJQUNidVksTUFBTSxFQUFFLEtBQUs7SUFFYkMsU0FBUyxFQUFFLElBQUk7SUFDZkMsU0FBUyxFQUFFLElBQUk7SUFDZkMsUUFBUSxFQUFFLElBQUk7SUFDZEMsUUFBUSxFQUFFLEtBQUs7SUFFZnBsQixNQUFNLEVBQUUsQ0FBQztJQUNUcWxCLFlBQVksRUFBRSxDQUFDO0lBRWZDLEtBQUssRUFBRSxLQUFLO0lBQ1pDLFFBQVEsRUFBRSxJQUFJO0lBQ2RybEIsU0FBUyxFQUFFLEtBQUs7SUFFaEJzbEIsYUFBYSxFQUFFLENBQUM7SUFDaEJDLEdBQUcsRUFBRSxLQUFLO0lBRVZDLFVBQVUsRUFBRSxHQUFHO0lBQ2ZDLFVBQVUsRUFBRSxLQUFLO0lBQ2pCQyxZQUFZLEVBQUUsS0FBSztJQUVuQkMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUNkQyxxQkFBcUIsRUFBRSxHQUFHO0lBQzFCQyxxQkFBcUIsRUFBRW4zQixNQUFNO0lBRTdCbzNCLGNBQWMsRUFBRSxPQUFPO0lBRXZCL1osSUFBSSxFQUFFLEtBQUs7SUFFWGdhLGtCQUFrQixFQUFFLEtBQUs7SUFDekJDLFdBQVcsRUFBRSxLQUFLO0lBQ2xCQyxZQUFZLEVBQUUsS0FBSztJQUVuQkMsWUFBWSxFQUFFLGFBQWE7SUFDM0JDLFdBQVcsRUFBRSxZQUFZO0lBQ3pCQyxZQUFZLEVBQUUsYUFBYTtJQUMzQkMsUUFBUSxFQUFFLFNBQVM7SUFDbkJDLGVBQWUsRUFBRSxnQkFBZ0I7SUFDakNDLFNBQVMsRUFBRSxVQUFVO0lBQ3JCQyxTQUFTLEVBQUUsVUFBVTtJQUNyQkMsVUFBVSxFQUFFLFdBQVc7SUFDdkJDLGVBQWUsRUFBRSxpQkFBaUI7SUFDbENDLFNBQVMsRUFBRTtFQUNmLENBQUM7O0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0kvRCxHQUFHLENBQUNnRSxLQUFLLEdBQUc7SUFDUkMsT0FBTyxFQUFFLFNBQVM7SUFDbEJDLEtBQUssRUFBRSxPQUFPO0lBQ2RDLEtBQUssRUFBRTtFQUNYLENBQUM7O0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0luRSxHQUFHLENBQUNvRSxJQUFJLEdBQUc7SUFDUEMsS0FBSyxFQUFFLE9BQU87SUFDZEMsS0FBSyxFQUFFO0VBQ1gsQ0FBQzs7RUFFRDtBQUNKO0FBQ0E7QUFDQTtFQUNJdEUsR0FBRyxDQUFDeUIsT0FBTyxHQUFHLENBQUMsQ0FBQzs7RUFFaEI7QUFDSjtBQUNBO0VBQ0l6QixHQUFHLENBQUM2QixPQUFPLEdBQUcsQ0FBRTtJQUNacmhCLE1BQU0sRUFBRSxDQUFFLE9BQU8sRUFBRSxVQUFVLENBQUU7SUFDL0J1YSxHQUFHLEVBQUUsU0FBQUEsQ0FBQSxFQUFXO01BQ1osSUFBSSxDQUFDMkYsTUFBTSxHQUFHLElBQUksQ0FBQ3ZNLFFBQVEsQ0FBQ3RtQixLQUFLLENBQUMsQ0FBQztJQUN2QztFQUNKLENBQUMsRUFBRTtJQUNDMlMsTUFBTSxFQUFFLENBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUU7SUFDeEN1YSxHQUFHLEVBQUUsU0FBQUEsQ0FBU3JaLEtBQUssRUFBRTtNQUNqQkEsS0FBSyxDQUFDMmYsT0FBTyxHQUFHLElBQUksQ0FBQ1YsTUFBTSxJQUFJLElBQUksQ0FBQ0EsTUFBTSxDQUFDLElBQUksQ0FBQzRELFFBQVEsQ0FBQyxJQUFJLENBQUNqRSxRQUFRLENBQUMsQ0FBQztJQUM1RTtFQUNKLENBQUMsRUFBRTtJQUNDOWYsTUFBTSxFQUFFLENBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBRTtJQUMvQnVhLEdBQUcsRUFBRSxTQUFBQSxDQUFBLEVBQVc7TUFDWixJQUFJLENBQUN5SixNQUFNLENBQUN0a0IsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDdk4sTUFBTSxDQUFDLENBQUM7SUFDNUM7RUFDSixDQUFDLEVBQUU7SUFDQzZOLE1BQU0sRUFBRSxDQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFFO0lBQ3hDdWEsR0FBRyxFQUFFLFNBQUFBLENBQVNyWixLQUFLLEVBQUU7TUFDakIsSUFBSXhFLE1BQU0sR0FBRyxJQUFJLENBQUMraUIsUUFBUSxDQUFDL2lCLE1BQU0sSUFBSSxFQUFFO1FBQ25DdW5CLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQ3hFLFFBQVEsQ0FBQzdpQixTQUFTO1FBQy9CdWxCLEdBQUcsR0FBRyxJQUFJLENBQUMxQyxRQUFRLENBQUMwQyxHQUFHO1FBQ3ZCeHlCLEdBQUcsR0FBRztVQUNGLE9BQU8sRUFBRSxNQUFNO1VBQ2YsYUFBYSxFQUFFd3lCLEdBQUcsR0FBR3psQixNQUFNLEdBQUcsRUFBRTtVQUNoQyxjQUFjLEVBQUV5bEIsR0FBRyxHQUFHLEVBQUUsR0FBR3psQjtRQUMvQixDQUFDO01BRUwsQ0FBQ3VuQixJQUFJLElBQUksSUFBSSxDQUFDRCxNQUFNLENBQUN0a0IsUUFBUSxDQUFDLENBQUMsQ0FBQy9QLEdBQUcsQ0FBQ0EsR0FBRyxDQUFDO01BRXhDdVIsS0FBSyxDQUFDdlIsR0FBRyxHQUFHQSxHQUFHO0lBQ25CO0VBQ0osQ0FBQyxFQUFFO0lBQ0NxUSxNQUFNLEVBQUUsQ0FBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBRTtJQUN4Q3VhLEdBQUcsRUFBRSxTQUFBQSxDQUFTclosS0FBSyxFQUFFO01BQ2pCLElBQUk3VCxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUNBLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDb3lCLFFBQVEsQ0FBQ3BqQixLQUFLLEVBQUVvSyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDZ1osUUFBUSxDQUFDL2lCLE1BQU07UUFDOUVzbEIsS0FBSyxHQUFHLElBQUk7UUFDWmtDLFFBQVEsR0FBRyxJQUFJLENBQUMvRCxNQUFNLENBQUM3eUIsTUFBTTtRQUM3QjIyQixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUN4RSxRQUFRLENBQUM3aUIsU0FBUztRQUMvQnVuQixNQUFNLEdBQUcsRUFBRTtNQUVmampCLEtBQUssQ0FBQzdFLEtBQUssR0FBRztRQUNWMmxCLEtBQUssRUFBRSxLQUFLO1FBQ1ozMEIsS0FBSyxFQUFFQTtNQUNYLENBQUM7TUFFRCxPQUFPNjJCLFFBQVEsRUFBRSxFQUFFO1FBQ2ZsQyxLQUFLLEdBQUcsSUFBSSxDQUFDM0IsUUFBUSxDQUFDNkQsUUFBUSxDQUFDO1FBQy9CbEMsS0FBSyxHQUFHLElBQUksQ0FBQ3ZDLFFBQVEsQ0FBQ3dDLFFBQVEsSUFBSW5sQixJQUFJLENBQUNDLEdBQUcsQ0FBQ2lsQixLQUFLLEVBQUUsSUFBSSxDQUFDdkMsUUFBUSxDQUFDcGpCLEtBQUssQ0FBQyxJQUFJMmxCLEtBQUs7UUFFL0U5Z0IsS0FBSyxDQUFDN0UsS0FBSyxDQUFDMmxCLEtBQUssR0FBR0EsS0FBSyxHQUFHLENBQUMsSUFBSTlnQixLQUFLLENBQUM3RSxLQUFLLENBQUMybEIsS0FBSztRQUVsRG1DLE1BQU0sQ0FBQ0QsUUFBUSxDQUFDLEdBQUcsQ0FBQ0QsSUFBSSxHQUFHLElBQUksQ0FBQzlELE1BQU0sQ0FBQytELFFBQVEsQ0FBQyxDQUFDNzJCLEtBQUssQ0FBQyxDQUFDLEdBQUdBLEtBQUssR0FBRzIwQixLQUFLO01BQzVFO01BRUEsSUFBSSxDQUFDMUIsT0FBTyxHQUFHNkQsTUFBTTtJQUN6QjtFQUNKLENBQUMsRUFBRTtJQUNDbmtCLE1BQU0sRUFBRSxDQUFFLE9BQU8sRUFBRSxVQUFVLENBQUU7SUFDL0J1YSxHQUFHLEVBQUUsU0FBQUEsQ0FBQSxFQUFXO01BQ1osSUFBSTZKLE1BQU0sR0FBRyxFQUFFO1FBQ1gvbkIsS0FBSyxHQUFHLElBQUksQ0FBQzhqQixNQUFNO1FBQ25CVixRQUFRLEdBQUcsSUFBSSxDQUFDQSxRQUFRO1FBQ3hCNEUsSUFBSSxHQUFHdm5CLElBQUksQ0FBQzJiLEdBQUcsQ0FBQ2dILFFBQVEsQ0FBQ3BqQixLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0QzRMLElBQUksR0FBR25MLElBQUksQ0FBQ3duQixJQUFJLENBQUNqb0IsS0FBSyxDQUFDL08sTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDdENxaUIsTUFBTSxHQUFHOFAsUUFBUSxDQUFDdFEsSUFBSSxJQUFJOVMsS0FBSyxDQUFDL08sTUFBTSxHQUFHbXlCLFFBQVEsQ0FBQ2lDLE1BQU0sR0FBRzJDLElBQUksR0FBR3ZuQixJQUFJLENBQUMyYixHQUFHLENBQUM0TCxJQUFJLEVBQUVwYyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzFGdEIsTUFBTSxHQUFHLEVBQUU7UUFDWGpTLE9BQU8sR0FBRyxFQUFFO01BRWhCaWIsTUFBTSxJQUFJLENBQUM7TUFFWCxPQUFPQSxNQUFNLEVBQUUsRUFBRTtRQUNieVUsTUFBTSxDQUFDaEosSUFBSSxDQUFDLElBQUksQ0FBQ21KLFNBQVMsQ0FBQ0gsTUFBTSxDQUFDOTJCLE1BQU0sR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcERxWixNQUFNLEdBQUdBLE1BQU0sR0FBR3RLLEtBQUssQ0FBQytuQixNQUFNLENBQUNBLE1BQU0sQ0FBQzkyQixNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ2szQixTQUFTO1FBQy9ESixNQUFNLENBQUNoSixJQUFJLENBQUMsSUFBSSxDQUFDbUosU0FBUyxDQUFDbG9CLEtBQUssQ0FBQy9PLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQzgyQixNQUFNLENBQUM5MkIsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0VvSCxPQUFPLEdBQUcySCxLQUFLLENBQUMrbkIsTUFBTSxDQUFDQSxNQUFNLENBQUM5MkIsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNrM0IsU0FBUyxHQUFHOXZCLE9BQU87TUFDckU7TUFFQSxJQUFJLENBQUMwckIsT0FBTyxHQUFHZ0UsTUFBTTtNQUVyQmw1QixDQUFDLENBQUN5YixNQUFNLENBQUMsQ0FBQy9YLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzYxQixRQUFRLENBQUMsSUFBSSxDQUFDVCxNQUFNLENBQUM7TUFDbEQ5NEIsQ0FBQyxDQUFDd0osT0FBTyxDQUFDLENBQUM5RixRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM4MUIsU0FBUyxDQUFDLElBQUksQ0FBQ1YsTUFBTSxDQUFDO0lBQ3hEO0VBQ0osQ0FBQyxFQUFFO0lBQ0Noa0IsTUFBTSxFQUFFLENBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUU7SUFDeEN1YSxHQUFHLEVBQUUsU0FBQUEsQ0FBQSxFQUFXO01BQ1osSUFBSTRILEdBQUcsR0FBRyxJQUFJLENBQUMxQyxRQUFRLENBQUMwQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQ2xhLElBQUksR0FBRyxJQUFJLENBQUNtWSxPQUFPLENBQUM5eUIsTUFBTSxHQUFHLElBQUksQ0FBQzZ5QixNQUFNLENBQUM3eUIsTUFBTTtRQUMvQzQyQixRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2JTLFFBQVEsR0FBRyxDQUFDO1FBQ1o5RCxPQUFPLEdBQUcsQ0FBQztRQUNYK0QsV0FBVyxHQUFHLEVBQUU7TUFFcEIsT0FBTyxFQUFFVixRQUFRLEdBQUdqYyxJQUFJLEVBQUU7UUFDdEIwYyxRQUFRLEdBQUdDLFdBQVcsQ0FBQ1YsUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDekNyRCxPQUFPLEdBQUcsSUFBSSxDQUFDUCxPQUFPLENBQUMsSUFBSSxDQUFDeUQsUUFBUSxDQUFDRyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ3pFLFFBQVEsQ0FBQy9pQixNQUFNO1FBQ3RFa29CLFdBQVcsQ0FBQ3hKLElBQUksQ0FBQ3VKLFFBQVEsR0FBRzlELE9BQU8sR0FBR3NCLEdBQUcsQ0FBQztNQUM5QztNQUVBLElBQUksQ0FBQ25DLFlBQVksR0FBRzRFLFdBQVc7SUFDbkM7RUFDSixDQUFDLEVBQUU7SUFDQzVrQixNQUFNLEVBQUUsQ0FBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBRTtJQUN4Q3VhLEdBQUcsRUFBRSxTQUFBQSxDQUFBLEVBQVc7TUFDWixJQUFJK0UsT0FBTyxHQUFHLElBQUksQ0FBQ0csUUFBUSxDQUFDc0MsWUFBWTtRQUNwQzZDLFdBQVcsR0FBRyxJQUFJLENBQUM1RSxZQUFZO1FBQy9CcndCLEdBQUcsR0FBRztVQUNGLE9BQU8sRUFBRW1OLElBQUksQ0FBQ3duQixJQUFJLENBQUN4bkIsSUFBSSxDQUFDK25CLEdBQUcsQ0FBQ0QsV0FBVyxDQUFDQSxXQUFXLENBQUN0M0IsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR2d5QixPQUFPLEdBQUcsQ0FBQztVQUMvRSxjQUFjLEVBQUVBLE9BQU8sSUFBSSxFQUFFO1VBQzdCLGVBQWUsRUFBRUEsT0FBTyxJQUFJO1FBQ2hDLENBQUM7TUFFTCxJQUFJLENBQUMwRSxNQUFNLENBQUNyMEIsR0FBRyxDQUFDQSxHQUFHLENBQUM7SUFDeEI7RUFDSixDQUFDLEVBQUU7SUFDQ3FRLE1BQU0sRUFBRSxDQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFFO0lBQ3hDdWEsR0FBRyxFQUFFLFNBQUFBLENBQVNyWixLQUFLLEVBQUU7TUFDakIsSUFBSWdqQixRQUFRLEdBQUcsSUFBSSxDQUFDbEUsWUFBWSxDQUFDMXlCLE1BQU07UUFDbkMyMkIsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDeEUsUUFBUSxDQUFDN2lCLFNBQVM7UUFDL0JQLEtBQUssR0FBRyxJQUFJLENBQUMybkIsTUFBTSxDQUFDdGtCLFFBQVEsQ0FBQyxDQUFDO01BRWxDLElBQUl1a0IsSUFBSSxJQUFJL2lCLEtBQUssQ0FBQzdFLEtBQUssQ0FBQzJsQixLQUFLLEVBQUU7UUFDM0IsT0FBT2tDLFFBQVEsRUFBRSxFQUFFO1VBQ2ZoakIsS0FBSyxDQUFDdlIsR0FBRyxDQUFDdEMsS0FBSyxHQUFHLElBQUksQ0FBQ2l6QixPQUFPLENBQUMsSUFBSSxDQUFDeUQsUUFBUSxDQUFDRyxRQUFRLENBQUMsQ0FBQztVQUN2RDduQixLQUFLLENBQUN5b0IsRUFBRSxDQUFDWixRQUFRLENBQUMsQ0FBQ3YwQixHQUFHLENBQUN1UixLQUFLLENBQUN2UixHQUFHLENBQUM7UUFDckM7TUFDSixDQUFDLE1BQU0sSUFBSXMwQixJQUFJLEVBQUU7UUFDYi9pQixLQUFLLENBQUN2UixHQUFHLENBQUN0QyxLQUFLLEdBQUc2VCxLQUFLLENBQUM3RSxLQUFLLENBQUNoUCxLQUFLO1FBQ25DZ1AsS0FBSyxDQUFDMU0sR0FBRyxDQUFDdVIsS0FBSyxDQUFDdlIsR0FBRyxDQUFDO01BQ3hCO0lBQ0o7RUFDSixDQUFDLEVBQUU7SUFDQ3FRLE1BQU0sRUFBRSxDQUFFLE9BQU8sQ0FBRTtJQUNuQnVhLEdBQUcsRUFBRSxTQUFBQSxDQUFBLEVBQVc7TUFDWixJQUFJLENBQUN5RixZQUFZLENBQUMxeUIsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMwMkIsTUFBTSxDQUFDeHdCLFVBQVUsQ0FBQyxPQUFPLENBQUM7SUFDbkU7RUFDSixDQUFDLEVBQUU7SUFDQ3dNLE1BQU0sRUFBRSxDQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFFO0lBQ3hDdWEsR0FBRyxFQUFFLFNBQUFBLENBQVNyWixLQUFLLEVBQUU7TUFDakJBLEtBQUssQ0FBQzJmLE9BQU8sR0FBRzNmLEtBQUssQ0FBQzJmLE9BQU8sR0FBRyxJQUFJLENBQUNtRCxNQUFNLENBQUN0a0IsUUFBUSxDQUFDLENBQUMsQ0FBQzdMLEtBQUssQ0FBQ3FOLEtBQUssQ0FBQzJmLE9BQU8sQ0FBQyxHQUFHLENBQUM7TUFDL0UzZixLQUFLLENBQUMyZixPQUFPLEdBQUcvakIsSUFBSSxDQUFDMmIsR0FBRyxDQUFDLElBQUksQ0FBQ3NNLE9BQU8sQ0FBQyxDQUFDLEVBQUVqb0IsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDaW9CLE9BQU8sQ0FBQyxDQUFDLEVBQUU5akIsS0FBSyxDQUFDMmYsT0FBTyxDQUFDLENBQUM7TUFDakYsSUFBSSxDQUFDcGYsS0FBSyxDQUFDUCxLQUFLLENBQUMyZixPQUFPLENBQUM7SUFDN0I7RUFDSixDQUFDLEVBQUU7SUFDQzdnQixNQUFNLEVBQUUsQ0FBRSxVQUFVLENBQUU7SUFDdEJ1YSxHQUFHLEVBQUUsU0FBQUEsQ0FBQSxFQUFXO01BQ1osSUFBSSxDQUFDdHFCLE9BQU8sQ0FBQyxJQUFJLENBQUMyMEIsV0FBVyxDQUFDLElBQUksQ0FBQzlFLFFBQVEsQ0FBQyxDQUFDO0lBQ2pEO0VBQ0osQ0FBQyxFQUFFO0lBQ0M5ZixNQUFNLEVBQUUsQ0FBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUU7SUFDcER1YSxHQUFHLEVBQUUsU0FBQUEsQ0FBQSxFQUFXO01BQ1osSUFBSTRILEdBQUcsR0FBRyxJQUFJLENBQUMxQyxRQUFRLENBQUMwQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQzdDLE9BQU8sR0FBRyxJQUFJLENBQUNHLFFBQVEsQ0FBQ3NDLFlBQVksR0FBRyxDQUFDO1FBQ3hDa0QsS0FBSyxHQUFHLElBQUksQ0FBQ0wsV0FBVyxDQUFDLElBQUksQ0FBQy9ELE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBR3ZCLE9BQU87UUFDbER6UCxHQUFHLEdBQUdvVixLQUFLLEdBQUcsSUFBSSxDQUFDNTNCLEtBQUssQ0FBQyxDQUFDLEdBQUc4MEIsR0FBRztRQUNoQytDLEtBQUs7UUFBRUMsS0FBSztRQUFFQyxPQUFPLEdBQUcsRUFBRTtRQUFFN3BCLENBQUM7UUFBRStkLENBQUM7TUFFcEMsS0FBSy9kLENBQUMsR0FBRyxDQUFDLEVBQUUrZCxDQUFDLEdBQUcsSUFBSSxDQUFDMEcsWUFBWSxDQUFDMXlCLE1BQU0sRUFBRWlPLENBQUMsR0FBRytkLENBQUMsRUFBRS9kLENBQUMsRUFBRSxFQUFFO1FBQ2xEMnBCLEtBQUssR0FBRyxJQUFJLENBQUNsRixZQUFZLENBQUN6a0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDckM0cEIsS0FBSyxHQUFHcm9CLElBQUksQ0FBQytuQixHQUFHLENBQUMsSUFBSSxDQUFDN0UsWUFBWSxDQUFDemtCLENBQUMsQ0FBQyxDQUFDLEdBQUcrakIsT0FBTyxHQUFHNkMsR0FBRztRQUV0RCxJQUFLLElBQUksQ0FBQ2tELEVBQUUsQ0FBQ0gsS0FBSyxFQUFFLElBQUksRUFBRUQsS0FBSyxDQUFDLElBQUssSUFBSSxDQUFDSSxFQUFFLENBQUNILEtBQUssRUFBRSxHQUFHLEVBQUVyVixHQUFHLENBQUUsSUFDdEQsSUFBSSxDQUFDd1YsRUFBRSxDQUFDRixLQUFLLEVBQUUsR0FBRyxFQUFFRixLQUFLLENBQUMsSUFBSSxJQUFJLENBQUNJLEVBQUUsQ0FBQ0YsS0FBSyxFQUFFLEdBQUcsRUFBRXRWLEdBQUcsQ0FBRSxFQUFFO1VBQzdEdVYsT0FBTyxDQUFDaEssSUFBSSxDQUFDN2YsQ0FBQyxDQUFDO1FBQ25CO01BQ0o7TUFFQSxJQUFJLENBQUN5b0IsTUFBTSxDQUFDdGtCLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQzNRLFdBQVcsQ0FBQyxRQUFRLENBQUM7TUFDckQsSUFBSSxDQUFDaTFCLE1BQU0sQ0FBQ3RrQixRQUFRLENBQUMsTUFBTSxHQUFHMGxCLE9BQU8sQ0FBQ3pHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQy92QixRQUFRLENBQUMsUUFBUSxDQUFDO01BRS9FLElBQUksSUFBSSxDQUFDNndCLFFBQVEsQ0FBQ3RXLE1BQU0sRUFBRTtRQUN0QixJQUFJLENBQUM2YSxNQUFNLENBQUN0a0IsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDM1EsV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUNyRCxJQUFJLENBQUNpMUIsTUFBTSxDQUFDdGtCLFFBQVEsQ0FBQyxDQUFDLENBQUNvbEIsRUFBRSxDQUFDLElBQUksQ0FBQ2pFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ2p5QixRQUFRLENBQUMsUUFBUSxDQUFDO01BQ2hFO0lBQ0o7RUFDSixDQUFDLENBQUU7O0VBRUg7QUFDSjtBQUNBO0FBQ0E7RUFDSTR3QixHQUFHLENBQUN6ZixTQUFTLENBQUMwaEIsVUFBVSxHQUFHLFlBQVc7SUFDbEMsSUFBSSxDQUFDak4sS0FBSyxDQUFDLGNBQWMsQ0FBQztJQUMxQixJQUFJLENBQUM3ZSxPQUFPLENBQUMsWUFBWSxDQUFDO0lBRTFCLElBQUksQ0FBQ2dlLFFBQVEsQ0FBQ2xlLFdBQVcsQ0FBQyxJQUFJLENBQUNncUIsUUFBUSxDQUFDd0QsUUFBUSxFQUFFLElBQUksQ0FBQ3hELFFBQVEsQ0FBQzBDLEdBQUcsQ0FBQztJQUVwRSxJQUFJLElBQUksQ0FBQzFDLFFBQVEsQ0FBQzdpQixTQUFTLElBQUksQ0FBQyxJQUFJLENBQUNoSixFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUU7TUFDcEQsSUFBSTB4QixJQUFJLEVBQUVDLGNBQWMsRUFBRWw0QixLQUFLO01BQy9CaTRCLElBQUksR0FBRyxJQUFJLENBQUMzUixRQUFRLENBQUNwakIsSUFBSSxDQUFDLEtBQUssQ0FBQztNQUNoQ2cxQixjQUFjLEdBQUcsSUFBSSxDQUFDOUYsUUFBUSxDQUFDa0Qsa0JBQWtCLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQ2xELFFBQVEsQ0FBQ2tELGtCQUFrQixHQUFHcEosU0FBUztNQUN0R2xzQixLQUFLLEdBQUcsSUFBSSxDQUFDc21CLFFBQVEsQ0FBQ2pVLFFBQVEsQ0FBQzZsQixjQUFjLENBQUMsQ0FBQ2w0QixLQUFLLENBQUMsQ0FBQztNQUV0RCxJQUFJaTRCLElBQUksQ0FBQ2g0QixNQUFNLElBQUlELEtBQUssSUFBSSxDQUFDLEVBQUU7UUFDM0IsSUFBSSxDQUFDbTRCLHNCQUFzQixDQUFDRixJQUFJLENBQUM7TUFDckM7SUFDSjtJQUVBLElBQUksQ0FBQzNSLFFBQVEsQ0FBQy9rQixRQUFRLENBQUMsSUFBSSxDQUFDZ0ksT0FBTyxDQUFDb3NCLFlBQVksQ0FBQzs7SUFFakQ7SUFDQSxJQUFJLENBQUNnQixNQUFNLEdBQUc5NEIsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUN1MEIsUUFBUSxDQUFDb0QsWUFBWSxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUNwRCxRQUFRLENBQUM0RCxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQzVGbG1CLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDc2lCLFFBQVEsQ0FBQzZELGVBQWUsR0FBRyxLQUFLLENBQUM7O0lBRWpFO0lBQ0EsSUFBSSxDQUFDM1AsUUFBUSxDQUFDaE4sTUFBTSxDQUFDLElBQUksQ0FBQ3FkLE1BQU0sQ0FBQy91QixNQUFNLENBQUMsQ0FBQyxDQUFDOztJQUUxQztJQUNBLElBQUksQ0FBQ2lHLE9BQU8sQ0FBQyxJQUFJLENBQUN5WSxRQUFRLENBQUNqVSxRQUFRLENBQUMsQ0FBQyxDQUFDK2xCLEdBQUcsQ0FBQyxJQUFJLENBQUN6QixNQUFNLENBQUMvdUIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOztJQUVoRTtJQUNBLElBQUksSUFBSSxDQUFDMGUsUUFBUSxDQUFDL2YsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFO01BQzlCO01BQ0EsSUFBSSxDQUFDOHhCLE9BQU8sQ0FBQyxDQUFDO0lBQ2xCLENBQUMsTUFBTTtNQUNIO01BQ0EsSUFBSSxDQUFDQyxVQUFVLENBQUMsT0FBTyxDQUFDO0lBQzVCO0lBRUEsSUFBSSxDQUFDaFMsUUFBUSxDQUNSNWtCLFdBQVcsQ0FBQyxJQUFJLENBQUM2SCxPQUFPLENBQUNvc0IsWUFBWSxDQUFDLENBQ3RDcDBCLFFBQVEsQ0FBQyxJQUFJLENBQUNnSSxPQUFPLENBQUNtc0IsV0FBVyxDQUFDOztJQUV2QztJQUNBLElBQUksQ0FBQzZDLHFCQUFxQixDQUFDLENBQUM7SUFFNUIsSUFBSSxDQUFDQyxLQUFLLENBQUMsY0FBYyxDQUFDO0lBQzFCLElBQUksQ0FBQ2x3QixPQUFPLENBQUMsYUFBYSxDQUFDO0VBQy9CLENBQUM7O0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0k2cEIsR0FBRyxDQUFDemYsU0FBUyxDQUFDeWhCLEtBQUssR0FBRyxZQUFXO0lBQzdCLElBQUlzRSxRQUFRLEdBQUcsSUFBSSxDQUFDQSxRQUFRLENBQUMsQ0FBQztNQUMxQkMsVUFBVSxHQUFHLElBQUksQ0FBQ252QixPQUFPLENBQUMyckIsVUFBVTtNQUNwQ3gwQixLQUFLLEdBQUcsQ0FBQyxDQUFDO01BQ1YweEIsUUFBUSxHQUFHLElBQUk7SUFFbkIsSUFBSSxDQUFDc0csVUFBVSxFQUFFO01BQ2J0RyxRQUFRLEdBQUd2MEIsQ0FBQyxDQUFDMnhCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNqbUIsT0FBTyxDQUFDO0lBQ3pDLENBQUMsTUFBTTtNQUNIMUwsQ0FBQyxDQUFDa0YsSUFBSSxDQUFDMjFCLFVBQVUsRUFBRSxVQUFTajNCLFVBQVUsRUFBRTtRQUNwQyxJQUFJQSxVQUFVLElBQUlnM0IsUUFBUSxJQUFJaDNCLFVBQVUsR0FBR2YsS0FBSyxFQUFFO1VBQzlDQSxLQUFLLEdBQUdrRSxNQUFNLENBQUNuRCxVQUFVLENBQUM7UUFDOUI7TUFDSixDQUFDLENBQUM7TUFFRjJ3QixRQUFRLEdBQUd2MEIsQ0FBQyxDQUFDMnhCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNqbUIsT0FBTyxFQUFFbXZCLFVBQVUsQ0FBQ2g0QixLQUFLLENBQUMsQ0FBQztNQUN4RCxPQUFPMHhCLFFBQVEsQ0FBQzhDLFVBQVU7O01BRTFCO01BQ0EsSUFBSTlDLFFBQVEsQ0FBQ3lELGVBQWUsRUFBRTtRQUMxQixJQUFJLENBQUN2UCxRQUFRLENBQUNobkIsSUFBSSxDQUFDLE9BQU8sRUFDdEIsSUFBSSxDQUFDZ25CLFFBQVEsQ0FBQ2huQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUN1TyxPQUFPLENBQUMsSUFBSThxQixNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQ3B2QixPQUFPLENBQUNzc0IsZUFBZSxHQUFHLFdBQVcsRUFBRSxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUduMUIsS0FBSyxDQUN2SCxDQUFDO01BQ0w7SUFDSjtJQUVBLElBQUksSUFBSSxDQUFDMHhCLFFBQVEsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDUSxXQUFXLEtBQUtseUIsS0FBSyxFQUFFO01BQ3RELElBQUksQ0FBQzRILE9BQU8sQ0FBQyxRQUFRLEVBQUU7UUFBRXN3QixRQUFRLEVBQUU7VUFBRXYzQixJQUFJLEVBQUUsVUFBVTtVQUFFNkYsS0FBSyxFQUFFa3JCO1FBQVM7TUFBRSxDQUFDLENBQUM7TUFDM0UsSUFBSSxDQUFDUSxXQUFXLEdBQUdseUIsS0FBSztNQUN4QixJQUFJLENBQUMweEIsUUFBUSxHQUFHQSxRQUFRO01BQ3hCLElBQUksQ0FBQ2tHLFVBQVUsQ0FBQyxVQUFVLENBQUM7TUFDM0IsSUFBSSxDQUFDaHdCLE9BQU8sQ0FBQyxTQUFTLEVBQUU7UUFBRXN3QixRQUFRLEVBQUU7VUFBRXYzQixJQUFJLEVBQUUsVUFBVTtVQUFFNkYsS0FBSyxFQUFFLElBQUksQ0FBQ2tyQjtRQUFTO01BQUUsQ0FBQyxDQUFDO0lBQ3JGO0VBQ0osQ0FBQzs7RUFFRDtBQUNKO0FBQ0E7QUFDQTtFQUNJRCxHQUFHLENBQUN6ZixTQUFTLENBQUNtbUIsWUFBWSxHQUFHLFlBQVc7SUFDcEMsSUFBSSxJQUFJLENBQUN6RyxRQUFRLENBQUM3aUIsU0FBUyxFQUFFO01BQ3pCLElBQUksQ0FBQzZpQixRQUFRLENBQUNzQyxZQUFZLEdBQUcsS0FBSztNQUNsQyxJQUFJLENBQUN0QyxRQUFRLENBQUN1QyxLQUFLLEdBQUcsS0FBSztJQUMvQjtFQUNKLENBQUM7O0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0l4QyxHQUFHLENBQUN6ZixTQUFTLENBQUNvbUIsT0FBTyxHQUFHLFVBQVNDLElBQUksRUFBRTtJQUNuQyxJQUFJbjZCLEtBQUssR0FBRyxJQUFJLENBQUMwSixPQUFPLENBQUMsU0FBUyxFQUFFO01BQUVxVSxPQUFPLEVBQUVvYztJQUFLLENBQUMsQ0FBQztJQUV0RCxJQUFJLENBQUNuNkIsS0FBSyxDQUFDNk4sSUFBSSxFQUFFO01BQ2I3TixLQUFLLENBQUM2TixJQUFJLEdBQUc1TyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQ3UwQixRQUFRLENBQUNtRCxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQ2pEaDBCLFFBQVEsQ0FBQyxJQUFJLENBQUNnSSxPQUFPLENBQUN3c0IsU0FBUyxDQUFDLENBQUN6YyxNQUFNLENBQUN5ZixJQUFJLENBQUM7SUFDdEQ7SUFFQSxJQUFJLENBQUN6d0IsT0FBTyxDQUFDLFVBQVUsRUFBRTtNQUFFcVUsT0FBTyxFQUFFL2QsS0FBSyxDQUFDNk47SUFBSyxDQUFDLENBQUM7SUFFakQsT0FBTzdOLEtBQUssQ0FBQzZOLElBQUk7RUFDckIsQ0FBQzs7RUFFRDtBQUNKO0FBQ0E7QUFDQTtFQUNJMGxCLEdBQUcsQ0FBQ3pmLFNBQVMsQ0FBQ3NtQixNQUFNLEdBQUcsWUFBVztJQUM5QixJQUFJOXFCLENBQUMsR0FBRyxDQUFDO01BQ0wrZCxDQUFDLEdBQUcsSUFBSSxDQUFDa0gsS0FBSyxDQUFDbHpCLE1BQU07TUFDckIwUyxNQUFNLEdBQUc5VSxDQUFDLENBQUM4MUIsS0FBSyxDQUFDLFVBQVMzRixDQUFDLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQ0EsQ0FBQyxDQUFDO01BQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ2tGLFlBQVksQ0FBQztNQUNuRXJmLEtBQUssR0FBRyxDQUFDLENBQUM7SUFFZCxPQUFPM0YsQ0FBQyxHQUFHK2QsQ0FBQyxFQUFFO01BQ1YsSUFBSSxJQUFJLENBQUNpSCxZQUFZLENBQUMrRixHQUFHLElBQUlwN0IsQ0FBQyxDQUFDcTdCLElBQUksQ0FBQyxJQUFJLENBQUMvRixLQUFLLENBQUNqbEIsQ0FBQyxDQUFDLENBQUN5RSxNQUFNLEVBQUVBLE1BQU0sQ0FBQyxDQUFDMVMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUMxRSxJQUFJLENBQUNrekIsS0FBSyxDQUFDamxCLENBQUMsQ0FBQyxDQUFDZ2YsR0FBRyxDQUFDclosS0FBSyxDQUFDO01BQzVCO01BQ0EzRixDQUFDLEVBQUU7SUFDUDtJQUVBLElBQUksQ0FBQ2dsQixZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBRXRCLENBQUMsSUFBSSxDQUFDM3NCLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUM0Z0IsS0FBSyxDQUFDLE9BQU8sQ0FBQztFQUM1QyxDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJZ0wsR0FBRyxDQUFDemYsU0FBUyxDQUFDMVMsS0FBSyxHQUFHLFVBQVNtNUIsU0FBUyxFQUFFO0lBQ3RDQSxTQUFTLEdBQUdBLFNBQVMsSUFBSWhILEdBQUcsQ0FBQ2dFLEtBQUssQ0FBQ0MsT0FBTztJQUMxQyxRQUFRK0MsU0FBUztNQUNiLEtBQUtoSCxHQUFHLENBQUNnRSxLQUFLLENBQUNFLEtBQUs7TUFDcEIsS0FBS2xFLEdBQUcsQ0FBQ2dFLEtBQUssQ0FBQ0csS0FBSztRQUNoQixPQUFPLElBQUksQ0FBQ3pELE1BQU07TUFDdEI7UUFDSSxPQUFPLElBQUksQ0FBQ0EsTUFBTSxHQUFHLElBQUksQ0FBQ1QsUUFBUSxDQUFDc0MsWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUN0QyxRQUFRLENBQUMvaUIsTUFBTTtJQUNsRjtFQUNKLENBQUM7O0VBRUQ7QUFDSjtBQUNBO0FBQ0E7RUFDSThpQixHQUFHLENBQUN6ZixTQUFTLENBQUMybEIsT0FBTyxHQUFHLFlBQVc7SUFDL0IsSUFBSSxDQUFDbFIsS0FBSyxDQUFDLFlBQVksQ0FBQztJQUN4QixJQUFJLENBQUM3ZSxPQUFPLENBQUMsU0FBUyxDQUFDO0lBRXZCLElBQUksQ0FBQzZyQixLQUFLLENBQUMsQ0FBQztJQUVaLElBQUksQ0FBQzBFLFlBQVksQ0FBQyxDQUFDO0lBRW5CLElBQUksQ0FBQ3ZTLFFBQVEsQ0FBQy9rQixRQUFRLENBQUMsSUFBSSxDQUFDZ0ksT0FBTyxDQUFDa3NCLFlBQVksQ0FBQztJQUVqRCxJQUFJLENBQUN1RCxNQUFNLENBQUMsQ0FBQztJQUViLElBQUksQ0FBQzFTLFFBQVEsQ0FBQzVrQixXQUFXLENBQUMsSUFBSSxDQUFDNkgsT0FBTyxDQUFDa3NCLFlBQVksQ0FBQztJQUVwRCxJQUFJLENBQUMrQyxLQUFLLENBQUMsWUFBWSxDQUFDO0lBQ3hCLElBQUksQ0FBQ2x3QixPQUFPLENBQUMsV0FBVyxDQUFDO0VBQzdCLENBQUM7O0VBRUQ7QUFDSjtBQUNBO0FBQ0E7RUFDSTZwQixHQUFHLENBQUN6ZixTQUFTLENBQUMwbUIsaUJBQWlCLEdBQUcsWUFBVztJQUN6Q243QixNQUFNLENBQUNzekIsWUFBWSxDQUFDLElBQUksQ0FBQzhILFdBQVcsQ0FBQztJQUNyQyxJQUFJLENBQUNBLFdBQVcsR0FBR3A3QixNQUFNLENBQUM4RixVQUFVLENBQUMsSUFBSSxDQUFDdXVCLFNBQVMsQ0FBQ2dILFFBQVEsRUFBRSxJQUFJLENBQUNsSCxRQUFRLENBQUMrQyxxQkFBcUIsQ0FBQztFQUN0RyxDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0VBQ0loRCxHQUFHLENBQUN6ZixTQUFTLENBQUM0bUIsUUFBUSxHQUFHLFlBQVc7SUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQ3hHLE1BQU0sQ0FBQzd5QixNQUFNLEVBQUU7TUFDckIsT0FBTyxLQUFLO0lBQ2hCO0lBRUEsSUFBSSxJQUFJLENBQUM0eUIsTUFBTSxLQUFLLElBQUksQ0FBQ3ZNLFFBQVEsQ0FBQ3RtQixLQUFLLENBQUMsQ0FBQyxFQUFFO01BQ3ZDLE9BQU8sS0FBSztJQUNoQjtJQUVBLElBQUksQ0FBQyxJQUFJLENBQUNzbUIsUUFBUSxDQUFDL2YsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFO01BQy9CLE9BQU8sS0FBSztJQUNoQjtJQUVBLElBQUksQ0FBQzRnQixLQUFLLENBQUMsVUFBVSxDQUFDO0lBRXRCLElBQUksSUFBSSxDQUFDN2UsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDaXhCLGtCQUFrQixDQUFDLENBQUMsRUFBRTtNQUM3QyxJQUFJLENBQUNmLEtBQUssQ0FBQyxVQUFVLENBQUM7TUFDdEIsT0FBTyxLQUFLO0lBQ2hCO0lBRUEsSUFBSSxDQUFDRixVQUFVLENBQUMsT0FBTyxDQUFDO0lBRXhCLElBQUksQ0FBQ0QsT0FBTyxDQUFDLENBQUM7SUFFZCxJQUFJLENBQUNHLEtBQUssQ0FBQyxVQUFVLENBQUM7SUFDdEIsSUFBSSxDQUFDbHdCLE9BQU8sQ0FBQyxTQUFTLENBQUM7RUFDM0IsQ0FBQzs7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSTZwQixHQUFHLENBQUN6ZixTQUFTLENBQUM2bEIscUJBQXFCLEdBQUcsWUFBVztJQUM3QyxJQUFJMTZCLENBQUMsQ0FBQzI3QixPQUFPLENBQUNDLFVBQVUsRUFBRTtNQUN0QixJQUFJLENBQUM5QyxNQUFNLENBQUNqMEIsRUFBRSxDQUFDN0UsQ0FBQyxDQUFDMjdCLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDalgsR0FBRyxHQUFHLFdBQVcsRUFBRTNrQixDQUFDLENBQUM4MUIsS0FBSyxDQUFDLElBQUksQ0FBQytGLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRjtJQUVBLElBQUksSUFBSSxDQUFDdEgsUUFBUSxDQUFDOEMsVUFBVSxLQUFLLEtBQUssRUFBRTtNQUNwQyxJQUFJLENBQUN4eUIsRUFBRSxDQUFDekUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUNxMEIsU0FBUyxDQUFDOEcsaUJBQWlCLENBQUM7SUFDL0Q7SUFFQSxJQUFJLElBQUksQ0FBQ2hILFFBQVEsQ0FBQ2tDLFNBQVMsRUFBRTtNQUN6QixJQUFJLENBQUNoTyxRQUFRLENBQUMva0IsUUFBUSxDQUFDLElBQUksQ0FBQ2dJLE9BQU8sQ0FBQ3VzQixTQUFTLENBQUM7TUFDOUMsSUFBSSxDQUFDYSxNQUFNLENBQUNqMEIsRUFBRSxDQUFDLG9CQUFvQixFQUFFN0UsQ0FBQyxDQUFDODFCLEtBQUssQ0FBQyxJQUFJLENBQUNnRyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7TUFDckUsSUFBSSxDQUFDaEQsTUFBTSxDQUFDajBCLEVBQUUsQ0FBQyx5Q0FBeUMsRUFBRSxZQUFXO1FBQUUsT0FBTyxLQUFLO01BQUMsQ0FBQyxDQUFDO0lBQzFGO0lBRUEsSUFBSSxJQUFJLENBQUMwdkIsUUFBUSxDQUFDbUMsU0FBUyxFQUFDO01BQ3hCLElBQUksQ0FBQ29DLE1BQU0sQ0FBQ2owQixFQUFFLENBQUMscUJBQXFCLEVBQUU3RSxDQUFDLENBQUM4MUIsS0FBSyxDQUFDLElBQUksQ0FBQ2dHLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztNQUN0RSxJQUFJLENBQUNoRCxNQUFNLENBQUNqMEIsRUFBRSxDQUFDLHNCQUFzQixFQUFFN0UsQ0FBQyxDQUFDODFCLEtBQUssQ0FBQyxJQUFJLENBQUNpRyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekU7RUFDSixDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0l6SCxHQUFHLENBQUN6ZixTQUFTLENBQUNpbkIsV0FBVyxHQUFHLFVBQVMvNkIsS0FBSyxFQUFFO0lBQ3hDLElBQUkyMEIsS0FBSyxHQUFHLElBQUk7SUFFaEIsSUFBSTMwQixLQUFLLENBQUNpN0IsS0FBSyxLQUFLLENBQUMsRUFBRTtNQUNuQjtJQUNKO0lBRUEsSUFBSWg4QixDQUFDLENBQUMyN0IsT0FBTyxDQUFDTSxTQUFTLEVBQUU7TUFDckJ2RyxLQUFLLEdBQUcsSUFBSSxDQUFDb0QsTUFBTSxDQUFDcjBCLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQ3VMLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUMrZixLQUFLLENBQUMsR0FBRyxDQUFDO01BQ3pFMkYsS0FBSyxHQUFHO1FBQ0o5RSxDQUFDLEVBQUU4RSxLQUFLLENBQUNBLEtBQUssQ0FBQ3R6QixNQUFNLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdENzdUIsQ0FBQyxFQUFFZ0YsS0FBSyxDQUFDQSxLQUFLLENBQUN0ekIsTUFBTSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztNQUN6QyxDQUFDO0lBQ0wsQ0FBQyxNQUFNO01BQ0hzekIsS0FBSyxHQUFHLElBQUksQ0FBQ29ELE1BQU0sQ0FBQ2xhLFFBQVEsQ0FBQyxDQUFDO01BQzlCOFcsS0FBSyxHQUFHO1FBQ0o5RSxDQUFDLEVBQUUsSUFBSSxDQUFDMkQsUUFBUSxDQUFDMEMsR0FBRyxHQUNoQnZCLEtBQUssQ0FBQzdzQixJQUFJLEdBQUcsSUFBSSxDQUFDaXdCLE1BQU0sQ0FBQzMyQixLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ0EsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNveUIsUUFBUSxDQUFDL2lCLE1BQU0sR0FDdEVra0IsS0FBSyxDQUFDN3NCLElBQUk7UUFDZDZuQixDQUFDLEVBQUVnRixLQUFLLENBQUNuekI7TUFDYixDQUFDO0lBQ0w7SUFFQSxJQUFJLElBQUksQ0FBQ21HLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRTtNQUN0QjFJLENBQUMsQ0FBQzI3QixPQUFPLENBQUNNLFNBQVMsR0FBRyxJQUFJLENBQUNsM0IsT0FBTyxDQUFDMndCLEtBQUssQ0FBQzlFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ2tJLE1BQU0sQ0FBQ2gwQixJQUFJLENBQUMsQ0FBQztNQUNoRSxJQUFJLENBQUMyMUIsVUFBVSxDQUFDLFVBQVUsQ0FBQztJQUMvQjtJQUVBLElBQUksQ0FBQ2hTLFFBQVEsQ0FBQ2xlLFdBQVcsQ0FBQyxJQUFJLENBQUNtQixPQUFPLENBQUMyc0IsU0FBUyxFQUFFdDNCLEtBQUssQ0FBQytVLElBQUksS0FBSyxXQUFXLENBQUM7SUFFN0UsSUFBSSxDQUFDbkssS0FBSyxDQUFDLENBQUMsQ0FBQztJQUViLElBQUksQ0FBQzRwQixLQUFLLENBQUNDLElBQUksR0FBRyxJQUFJMEcsSUFBSSxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLENBQUM7SUFDdEMsSUFBSSxDQUFDNUcsS0FBSyxDQUFDalEsTUFBTSxHQUFHdGxCLENBQUMsQ0FBQ2UsS0FBSyxDQUFDdWtCLE1BQU0sQ0FBQztJQUNuQyxJQUFJLENBQUNpUSxLQUFLLENBQUNHLEtBQUssQ0FBQ3hyQixLQUFLLEdBQUd3ckIsS0FBSztJQUM5QixJQUFJLENBQUNILEtBQUssQ0FBQ0csS0FBSyxDQUFDQyxPQUFPLEdBQUdELEtBQUs7SUFDaEMsSUFBSSxDQUFDSCxLQUFLLENBQUNFLE9BQU8sR0FBRyxJQUFJLENBQUNBLE9BQU8sQ0FBQzEwQixLQUFLLENBQUM7SUFFeENmLENBQUMsQ0FBQ1MsUUFBUSxDQUFDLENBQUNvRSxFQUFFLENBQUMsb0NBQW9DLEVBQUU3RSxDQUFDLENBQUM4MUIsS0FBSyxDQUFDLElBQUksQ0FBQ2lHLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVuRi83QixDQUFDLENBQUNTLFFBQVEsQ0FBQyxDQUFDMjdCLEdBQUcsQ0FBQyx1Q0FBdUMsRUFBRXA4QixDQUFDLENBQUM4MUIsS0FBSyxDQUFDLFVBQVMvMEIsS0FBSyxFQUFFO01BQzdFLElBQUlzN0IsS0FBSyxHQUFHLElBQUksQ0FBQ0MsVUFBVSxDQUFDLElBQUksQ0FBQy9HLEtBQUssQ0FBQ0UsT0FBTyxFQUFFLElBQUksQ0FBQ0EsT0FBTyxDQUFDMTBCLEtBQUssQ0FBQyxDQUFDO01BRXBFZixDQUFDLENBQUNTLFFBQVEsQ0FBQyxDQUFDb0UsRUFBRSxDQUFDLHVDQUF1QyxFQUFFN0UsQ0FBQyxDQUFDODFCLEtBQUssQ0FBQyxJQUFJLENBQUN5RyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7TUFFdkYsSUFBSTNxQixJQUFJLENBQUMrbkIsR0FBRyxDQUFDMEMsS0FBSyxDQUFDekwsQ0FBQyxDQUFDLEdBQUdoZixJQUFJLENBQUMrbkIsR0FBRyxDQUFDMEMsS0FBSyxDQUFDM0wsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDaG9CLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUMzRDtNQUNKO01BRUEzSCxLQUFLLENBQUM4SSxjQUFjLENBQUMsQ0FBQztNQUV0QixJQUFJLENBQUN5ZixLQUFLLENBQUMsVUFBVSxDQUFDO01BQ3RCLElBQUksQ0FBQzdlLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQ2IsQ0FBQzs7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSTZwQixHQUFHLENBQUN6ZixTQUFTLENBQUMwbkIsVUFBVSxHQUFHLFVBQVN4N0IsS0FBSyxFQUFFO0lBQ3ZDLElBQUk4NEIsT0FBTyxHQUFHLElBQUk7TUFDZEMsT0FBTyxHQUFHLElBQUk7TUFDZDBDLElBQUksR0FBRyxJQUFJO01BQ1hILEtBQUssR0FBRyxJQUFJLENBQUNDLFVBQVUsQ0FBQyxJQUFJLENBQUMvRyxLQUFLLENBQUNFLE9BQU8sRUFBRSxJQUFJLENBQUNBLE9BQU8sQ0FBQzEwQixLQUFLLENBQUMsQ0FBQztNQUNoRTIwQixLQUFLLEdBQUcsSUFBSSxDQUFDNEcsVUFBVSxDQUFDLElBQUksQ0FBQy9HLEtBQUssQ0FBQ0csS0FBSyxDQUFDeHJCLEtBQUssRUFBRW15QixLQUFLLENBQUM7SUFFMUQsSUFBSSxDQUFDLElBQUksQ0FBQzN6QixFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUU7TUFDdEI7SUFDSjtJQUVBM0gsS0FBSyxDQUFDOEksY0FBYyxDQUFDLENBQUM7SUFFdEIsSUFBSSxJQUFJLENBQUMwcUIsUUFBUSxDQUFDdFEsSUFBSSxFQUFFO01BQ3BCNFYsT0FBTyxHQUFHLElBQUksQ0FBQ0gsV0FBVyxDQUFDLElBQUksQ0FBQ0csT0FBTyxDQUFDLENBQUMsQ0FBQztNQUMxQ0MsT0FBTyxHQUFHLElBQUksQ0FBQ0osV0FBVyxDQUFDLElBQUksQ0FBQ0ksT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBR0QsT0FBTztNQUN4RG5FLEtBQUssQ0FBQzlFLENBQUMsR0FBSSxDQUFDLENBQUM4RSxLQUFLLENBQUM5RSxDQUFDLEdBQUdpSixPQUFPLElBQUlDLE9BQU8sR0FBR0EsT0FBTyxJQUFJQSxPQUFPLEdBQUlELE9BQU87SUFDN0UsQ0FBQyxNQUFNO01BQ0hBLE9BQU8sR0FBRyxJQUFJLENBQUN0RixRQUFRLENBQUMwQyxHQUFHLEdBQUcsSUFBSSxDQUFDeUMsV0FBVyxDQUFDLElBQUksQ0FBQ0ksT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ0osV0FBVyxDQUFDLElBQUksQ0FBQ0csT0FBTyxDQUFDLENBQUMsQ0FBQztNQUNqR0MsT0FBTyxHQUFHLElBQUksQ0FBQ3ZGLFFBQVEsQ0FBQzBDLEdBQUcsR0FBRyxJQUFJLENBQUN5QyxXQUFXLENBQUMsSUFBSSxDQUFDRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDSCxXQUFXLENBQUMsSUFBSSxDQUFDSSxPQUFPLENBQUMsQ0FBQyxDQUFDO01BQ2pHMEMsSUFBSSxHQUFHLElBQUksQ0FBQ2pJLFFBQVEsQ0FBQ29DLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRzBGLEtBQUssQ0FBQ3pMLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztNQUNwRDhFLEtBQUssQ0FBQzlFLENBQUMsR0FBR2hmLElBQUksQ0FBQzJiLEdBQUcsQ0FBQzNiLElBQUksQ0FBQ0MsR0FBRyxDQUFDNmpCLEtBQUssQ0FBQzlFLENBQUMsRUFBRWlKLE9BQU8sR0FBRzJDLElBQUksQ0FBQyxFQUFFMUMsT0FBTyxHQUFHMEMsSUFBSSxDQUFDO0lBQ3pFO0lBRUEsSUFBSSxDQUFDakgsS0FBSyxDQUFDRyxLQUFLLENBQUNDLE9BQU8sR0FBR0QsS0FBSztJQUVoQyxJQUFJLENBQUMzd0IsT0FBTyxDQUFDMndCLEtBQUssQ0FBQzlFLENBQUMsQ0FBQztFQUN6QixDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0kwRCxHQUFHLENBQUN6ZixTQUFTLENBQUNrbkIsU0FBUyxHQUFHLFVBQVNoN0IsS0FBSyxFQUFFO0lBQ3RDLElBQUlzN0IsS0FBSyxHQUFHLElBQUksQ0FBQ0MsVUFBVSxDQUFDLElBQUksQ0FBQy9HLEtBQUssQ0FBQ0UsT0FBTyxFQUFFLElBQUksQ0FBQ0EsT0FBTyxDQUFDMTBCLEtBQUssQ0FBQyxDQUFDO01BQ2hFMjBCLEtBQUssR0FBRyxJQUFJLENBQUNILEtBQUssQ0FBQ0csS0FBSyxDQUFDQyxPQUFPO01BQ2hDcGMsU0FBUyxHQUFHOGlCLEtBQUssQ0FBQ3pMLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDMkQsUUFBUSxDQUFDMEMsR0FBRyxHQUFHLE1BQU0sR0FBRyxPQUFPO0lBRWxFajNCLENBQUMsQ0FBQ1MsUUFBUSxDQUFDLENBQUNtRSxHQUFHLENBQUMsV0FBVyxDQUFDO0lBRTVCLElBQUksQ0FBQzZqQixRQUFRLENBQUM1a0IsV0FBVyxDQUFDLElBQUksQ0FBQzZILE9BQU8sQ0FBQzJzQixTQUFTLENBQUM7SUFFakQsSUFBSWdFLEtBQUssQ0FBQ3pMLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDbG9CLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQ0EsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFO01BQzNELElBQUksQ0FBQ2lELEtBQUssQ0FBQyxJQUFJLENBQUM0b0IsUUFBUSxDQUFDNkMsWUFBWSxJQUFJLElBQUksQ0FBQzdDLFFBQVEsQ0FBQzJDLFVBQVUsQ0FBQztNQUNsRSxJQUFJLENBQUN2QixPQUFPLENBQUMsSUFBSSxDQUFDOEcsT0FBTyxDQUFDL0csS0FBSyxDQUFDOUUsQ0FBQyxFQUFFeUwsS0FBSyxDQUFDekwsQ0FBQyxLQUFLLENBQUMsR0FBR3JYLFNBQVMsR0FBRyxJQUFJLENBQUNnYyxLQUFLLENBQUNoYyxTQUFTLENBQUMsQ0FBQztNQUNyRixJQUFJLENBQUNraEIsVUFBVSxDQUFDLFVBQVUsQ0FBQztNQUMzQixJQUFJLENBQUNVLE1BQU0sQ0FBQyxDQUFDO01BRWIsSUFBSSxDQUFDNUYsS0FBSyxDQUFDaGMsU0FBUyxHQUFHQSxTQUFTO01BRWhDLElBQUkzSCxJQUFJLENBQUMrbkIsR0FBRyxDQUFDMEMsS0FBSyxDQUFDekwsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUlzTCxJQUFJLENBQUMsQ0FBQyxDQUFDQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQzVHLEtBQUssQ0FBQ0MsSUFBSSxHQUFHLEdBQUcsRUFBRTtRQUN2RSxJQUFJLENBQUNELEtBQUssQ0FBQ2pRLE1BQU0sQ0FBQzhXLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxZQUFXO1VBQUUsT0FBTyxLQUFLO1FBQUUsQ0FBQyxDQUFDO01BQ3pFO0lBQ0o7SUFFQSxJQUFJLENBQUMsSUFBSSxDQUFDMXpCLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRTtNQUN0QjtJQUNKO0lBRUEsSUFBSSxDQUFDaXlCLEtBQUssQ0FBQyxVQUFVLENBQUM7SUFDdEIsSUFBSSxDQUFDbHdCLE9BQU8sQ0FBQyxTQUFTLENBQUM7RUFDM0IsQ0FBQzs7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0k2cEIsR0FBRyxDQUFDemYsU0FBUyxDQUFDNG5CLE9BQU8sR0FBRyxVQUFTQyxVQUFVLEVBQUVuakIsU0FBUyxFQUFFO0lBQ3BELElBQUlxRixRQUFRLEdBQUcsQ0FBQyxDQUFDO01BQ2I0ZCxJQUFJLEdBQUcsRUFBRTtNQUNUcjZCLEtBQUssR0FBRyxJQUFJLENBQUNBLEtBQUssQ0FBQyxDQUFDO01BQ3BCdTNCLFdBQVcsR0FBRyxJQUFJLENBQUNBLFdBQVcsQ0FBQyxDQUFDO0lBRXBDLElBQUksQ0FBQyxJQUFJLENBQUNuRixRQUFRLENBQUNxQyxRQUFRLEVBQUU7TUFDekI7TUFDQTUyQixDQUFDLENBQUNrRixJQUFJLENBQUN3MEIsV0FBVyxFQUFFMTVCLENBQUMsQ0FBQzgxQixLQUFLLENBQUMsVUFBU250QixLQUFLLEVBQUVVLEtBQUssRUFBRTtRQUMvQyxJQUFJcXpCLFVBQVUsR0FBR3J6QixLQUFLLEdBQUdtekIsSUFBSSxJQUFJRSxVQUFVLEdBQUdyekIsS0FBSyxHQUFHbXpCLElBQUksRUFBRTtVQUN4RDVkLFFBQVEsR0FBR2pXLEtBQUs7UUFDcEIsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDd3hCLEVBQUUsQ0FBQ3VDLFVBQVUsRUFBRSxHQUFHLEVBQUVyekIsS0FBSyxDQUFDLElBQ25DLElBQUksQ0FBQzh3QixFQUFFLENBQUN1QyxVQUFVLEVBQUUsR0FBRyxFQUFFaEQsV0FBVyxDQUFDL3dCLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSVUsS0FBSyxHQUFHbEgsS0FBSyxDQUFDLEVBQUU7VUFDdEV5YyxRQUFRLEdBQUdyRixTQUFTLEtBQUssTUFBTSxHQUFHNVEsS0FBSyxHQUFHLENBQUMsR0FBR0EsS0FBSztRQUN2RDtRQUNBLE9BQU9pVyxRQUFRLEtBQUssQ0FBQyxDQUFDO01BQzFCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiO0lBRUEsSUFBSSxDQUFDLElBQUksQ0FBQzJWLFFBQVEsQ0FBQ3RRLElBQUksRUFBRTtNQUNyQjtNQUNBLElBQUksSUFBSSxDQUFDa1csRUFBRSxDQUFDdUMsVUFBVSxFQUFFLEdBQUcsRUFBRWhELFdBQVcsQ0FBQyxJQUFJLENBQUNHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3ZEamIsUUFBUSxHQUFHOGQsVUFBVSxHQUFHLElBQUksQ0FBQzdDLE9BQU8sQ0FBQyxDQUFDO01BQzFDLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ00sRUFBRSxDQUFDdUMsVUFBVSxFQUFFLEdBQUcsRUFBRWhELFdBQVcsQ0FBQyxJQUFJLENBQUNJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQzlEbGIsUUFBUSxHQUFHOGQsVUFBVSxHQUFHLElBQUksQ0FBQzVDLE9BQU8sQ0FBQyxDQUFDO01BQzFDO0lBQ0o7SUFFQSxPQUFPbGIsUUFBUTtFQUNuQixDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJMFYsR0FBRyxDQUFDemYsU0FBUyxDQUFDOVAsT0FBTyxHQUFHLFVBQVMyM0IsVUFBVSxFQUFFO0lBQ3pDLElBQUkzM0IsT0FBTyxHQUFHLElBQUksQ0FBQzRHLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUU5QixJQUFJLENBQUNqRCxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDbXpCLGVBQWUsQ0FBQyxDQUFDO0lBRTlDLElBQUk5MkIsT0FBTyxFQUFFO01BQ1QsSUFBSSxDQUFDdWtCLEtBQUssQ0FBQyxXQUFXLENBQUM7TUFDdkIsSUFBSSxDQUFDN2UsT0FBTyxDQUFDLFdBQVcsQ0FBQztJQUM3QjtJQUVBLElBQUl6SyxDQUFDLENBQUMyN0IsT0FBTyxDQUFDZ0IsV0FBVyxJQUFJMzhCLENBQUMsQ0FBQzI3QixPQUFPLENBQUNDLFVBQVUsRUFBRTtNQUMvQyxJQUFJLENBQUM5QyxNQUFNLENBQUNyMEIsR0FBRyxDQUFDO1FBQ1p3M0IsU0FBUyxFQUFFLGNBQWMsR0FBR1MsVUFBVSxHQUFHLGFBQWE7UUFDdERkLFVBQVUsRUFBRyxJQUFJLENBQUNqd0IsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUk7TUFDeEMsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxNQUFNLElBQUk1RyxPQUFPLEVBQUU7TUFDaEIsSUFBSSxDQUFDK3pCLE1BQU0sQ0FBQy96QixPQUFPLENBQUM7UUFDaEI4RCxJQUFJLEVBQUU2ekIsVUFBVSxHQUFHO01BQ3ZCLENBQUMsRUFBRSxJQUFJLENBQUMvd0IsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM0b0IsUUFBUSxDQUFDaUQsY0FBYyxFQUFFeDNCLENBQUMsQ0FBQzgxQixLQUFLLENBQUMsSUFBSSxDQUFDK0YsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZGLENBQUMsTUFBTTtNQUNILElBQUksQ0FBQy9DLE1BQU0sQ0FBQ3IwQixHQUFHLENBQUM7UUFDWm9FLElBQUksRUFBRTZ6QixVQUFVLEdBQUc7TUFDdkIsQ0FBQyxDQUFDO0lBQ047RUFDSixDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSXBJLEdBQUcsQ0FBQ3pmLFNBQVMsQ0FBQ25NLEVBQUUsR0FBRyxVQUFTaUYsS0FBSyxFQUFFO0lBQy9CLE9BQU8sSUFBSSxDQUFDaW9CLE9BQU8sQ0FBQ0QsT0FBTyxDQUFDaG9CLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQ2lvQixPQUFPLENBQUNELE9BQU8sQ0FBQ2hvQixLQUFLLENBQUMsR0FBRyxDQUFDO0VBQ3pFLENBQUM7O0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0kybUIsR0FBRyxDQUFDemYsU0FBUyxDQUFDOGdCLE9BQU8sR0FBRyxVQUFTL1csUUFBUSxFQUFFO0lBQ3ZDLElBQUlBLFFBQVEsS0FBS3lQLFNBQVMsRUFBRTtNQUN4QixPQUFPLElBQUksQ0FBQ3VHLFFBQVE7SUFDeEI7SUFFQSxJQUFJLElBQUksQ0FBQ0ssTUFBTSxDQUFDN3lCLE1BQU0sS0FBSyxDQUFDLEVBQUU7TUFDMUIsT0FBT2lzQixTQUFTO0lBQ3BCO0lBRUF6UCxRQUFRLEdBQUcsSUFBSSxDQUFDeWEsU0FBUyxDQUFDemEsUUFBUSxDQUFDO0lBRW5DLElBQUksSUFBSSxDQUFDZ1csUUFBUSxLQUFLaFcsUUFBUSxFQUFFO01BQzVCLElBQUk3ZCxLQUFLLEdBQUcsSUFBSSxDQUFDMEosT0FBTyxDQUFDLFFBQVEsRUFBRTtRQUFFc3dCLFFBQVEsRUFBRTtVQUFFdjNCLElBQUksRUFBRSxVQUFVO1VBQUU2RixLQUFLLEVBQUV1VjtRQUFTO01BQUUsQ0FBQyxDQUFDO01BRXZGLElBQUk3ZCxLQUFLLENBQUM2TixJQUFJLEtBQUt5ZixTQUFTLEVBQUU7UUFDMUJ6UCxRQUFRLEdBQUcsSUFBSSxDQUFDeWEsU0FBUyxDQUFDdDRCLEtBQUssQ0FBQzZOLElBQUksQ0FBQztNQUN6QztNQUVBLElBQUksQ0FBQ2dtQixRQUFRLEdBQUdoVyxRQUFRO01BRXhCLElBQUksQ0FBQzZiLFVBQVUsQ0FBQyxVQUFVLENBQUM7TUFFM0IsSUFBSSxDQUFDaHdCLE9BQU8sQ0FBQyxTQUFTLEVBQUU7UUFBRXN3QixRQUFRLEVBQUU7VUFBRXYzQixJQUFJLEVBQUUsVUFBVTtVQUFFNkYsS0FBSyxFQUFFLElBQUksQ0FBQ3VyQjtRQUFTO01BQUUsQ0FBQyxDQUFDO0lBQ3JGO0lBRUEsT0FBTyxJQUFJLENBQUNBLFFBQVE7RUFDeEIsQ0FBQzs7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0lOLEdBQUcsQ0FBQ3pmLFNBQVMsQ0FBQzRsQixVQUFVLEdBQUcsVUFBU21DLElBQUksRUFBRTtJQUN0QyxJQUFJNThCLENBQUMsQ0FBQzhWLElBQUksQ0FBQzhtQixJQUFJLENBQUMsS0FBSyxRQUFRLEVBQUU7TUFDM0IsSUFBSSxDQUFDdkgsWUFBWSxDQUFDdUgsSUFBSSxDQUFDLEdBQUcsSUFBSTtNQUM5QixJQUFJLENBQUNsMEIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQ2l5QixLQUFLLENBQUMsT0FBTyxDQUFDO0lBQzNDO0lBQ0EsT0FBTzM2QixDQUFDLENBQUNtZixHQUFHLENBQUMsSUFBSSxDQUFDa1csWUFBWSxFQUFFLFVBQVNoRixDQUFDLEVBQUVoZ0IsQ0FBQyxFQUFFO01BQUUsT0FBT0EsQ0FBQztJQUFDLENBQUMsQ0FBQztFQUNoRSxDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSWlrQixHQUFHLENBQUN6ZixTQUFTLENBQUMwQixLQUFLLEdBQUcsVUFBU3FJLFFBQVEsRUFBRTtJQUNyQ0EsUUFBUSxHQUFHLElBQUksQ0FBQ3lhLFNBQVMsQ0FBQ3phLFFBQVEsQ0FBQztJQUVuQyxJQUFJQSxRQUFRLEtBQUt5UCxTQUFTLEVBQUU7TUFDeEI7SUFDSjtJQUVBLElBQUksQ0FBQ3dHLE1BQU0sR0FBRyxDQUFDO0lBQ2YsSUFBSSxDQUFDRCxRQUFRLEdBQUdoVyxRQUFRO0lBRXhCLElBQUksQ0FBQ2llLFFBQVEsQ0FBQyxDQUFFLFdBQVcsRUFBRSxZQUFZLENBQUUsQ0FBQztJQUU1QyxJQUFJLENBQUM5M0IsT0FBTyxDQUFDLElBQUksQ0FBQzIwQixXQUFXLENBQUM5YSxRQUFRLENBQUMsQ0FBQztJQUV4QyxJQUFJLENBQUNrZSxPQUFPLENBQUMsQ0FBRSxXQUFXLEVBQUUsWUFBWSxDQUFFLENBQUM7RUFDL0MsQ0FBQzs7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJeEksR0FBRyxDQUFDemYsU0FBUyxDQUFDd2tCLFNBQVMsR0FBRyxVQUFTemEsUUFBUSxFQUFFaWEsUUFBUSxFQUFFO0lBQ25ELElBQUl6SyxDQUFDLEdBQUcsSUFBSSxDQUFDNkcsTUFBTSxDQUFDN3lCLE1BQU07TUFDdEJtdEIsQ0FBQyxHQUFHc0osUUFBUSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMzRCxPQUFPLENBQUM5eUIsTUFBTTtJQUUxQyxJQUFJLENBQUNwQyxDQUFDLENBQUNrUSxTQUFTLENBQUMwTyxRQUFRLENBQUMsSUFBSXdQLENBQUMsR0FBRyxDQUFDLEVBQUU7TUFDakN4UCxRQUFRLEdBQUd5UCxTQUFTO0lBQ3hCLENBQUMsTUFBTSxJQUFJelAsUUFBUSxHQUFHLENBQUMsSUFBSUEsUUFBUSxJQUFJd1AsQ0FBQyxHQUFHbUIsQ0FBQyxFQUFFO01BQzFDM1EsUUFBUSxHQUFHLENBQUMsQ0FBQ0EsUUFBUSxHQUFHMlEsQ0FBQyxHQUFHLENBQUMsSUFBSW5CLENBQUMsR0FBR0EsQ0FBQyxJQUFJQSxDQUFDLEdBQUdtQixDQUFDLEdBQUcsQ0FBQztJQUN2RDtJQUVBLE9BQU8zUSxRQUFRO0VBQ25CLENBQUM7O0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0kwVixHQUFHLENBQUN6ZixTQUFTLENBQUNna0IsUUFBUSxHQUFHLFVBQVNqYSxRQUFRLEVBQUU7SUFDeENBLFFBQVEsSUFBSSxJQUFJLENBQUNzVyxPQUFPLENBQUM5eUIsTUFBTSxHQUFHLENBQUM7SUFDbkMsT0FBTyxJQUFJLENBQUNpM0IsU0FBUyxDQUFDemEsUUFBUSxFQUFFLElBQUksQ0FBQztFQUN6QyxDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJMFYsR0FBRyxDQUFDemYsU0FBUyxDQUFDaWxCLE9BQU8sR0FBRyxVQUFTakIsUUFBUSxFQUFFO0lBQ3ZDLElBQUl0RSxRQUFRLEdBQUcsSUFBSSxDQUFDQSxRQUFRO01BQ3hCdUYsT0FBTyxHQUFHLElBQUksQ0FBQ2hGLFlBQVksQ0FBQzF5QixNQUFNO01BQ2xDMjZCLFFBQVEsR0FBR25yQixJQUFJLENBQUMrbkIsR0FBRyxDQUFDLElBQUksQ0FBQzdFLFlBQVksQ0FBQ2dGLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQzlFLE1BQU07TUFDakUza0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUFFNmlCLENBQUM7SUFFYixJQUFJcUIsUUFBUSxDQUFDdFEsSUFBSSxFQUFFO01BQ2Y2VixPQUFPLEdBQUcsSUFBSSxDQUFDNUUsT0FBTyxDQUFDOXlCLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDNnlCLE1BQU0sQ0FBQzd5QixNQUFNLEdBQUcsQ0FBQztJQUM5RCxDQUFDLE1BQU0sSUFBSW15QixRQUFRLENBQUM3aUIsU0FBUyxJQUFJNmlCLFFBQVEsQ0FBQ3VDLEtBQUssRUFBRTtNQUM3QztNQUNBLE9BQU9nRCxPQUFPLEdBQUd6cEIsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNwQnVCLElBQUksQ0FBQytuQixHQUFHLENBQUMsSUFBSSxDQUFDN0UsWUFBWSxDQUFDNUIsQ0FBQyxHQUFHNEcsT0FBTyxHQUFHenBCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHMHNCLFFBQVEsR0FDdEQxc0IsQ0FBQyxHQUFHNmlCLENBQUMsR0FBRzRHLE9BQU8sR0FBRzVHLENBQUM7TUFDN0I7SUFDSixDQUFDLE1BQU0sSUFBSXFCLFFBQVEsQ0FBQ3RXLE1BQU0sRUFBRTtNQUN4QjZiLE9BQU8sR0FBRyxJQUFJLENBQUM3RSxNQUFNLENBQUM3eUIsTUFBTSxHQUFHLENBQUM7SUFDcEMsQ0FBQyxNQUFNO01BQ0gwM0IsT0FBTyxHQUFHLElBQUksQ0FBQzdFLE1BQU0sQ0FBQzd5QixNQUFNLEdBQUdteUIsUUFBUSxDQUFDcGpCLEtBQUs7SUFDakQ7SUFFQSxJQUFJMG5CLFFBQVEsRUFBRTtNQUNWaUIsT0FBTyxJQUFJLElBQUksQ0FBQzVFLE9BQU8sQ0FBQzl5QixNQUFNLEdBQUcsQ0FBQztJQUN0QztJQUVBLE9BQU93UCxJQUFJLENBQUMyYixHQUFHLENBQUN1TSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0VBQy9CLENBQUM7O0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0l4RixHQUFHLENBQUN6ZixTQUFTLENBQUNnbEIsT0FBTyxHQUFHLFVBQVNoQixRQUFRLEVBQUU7SUFDdkMsT0FBT0EsUUFBUSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMzRCxPQUFPLENBQUM5eUIsTUFBTSxHQUFHLENBQUM7RUFDakQsQ0FBQzs7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSWt5QixHQUFHLENBQUN6ZixTQUFTLENBQUMxRCxLQUFLLEdBQUcsVUFBU3lOLFFBQVEsRUFBRTtJQUNyQyxJQUFJQSxRQUFRLEtBQUt5UCxTQUFTLEVBQUU7TUFDeEIsT0FBTyxJQUFJLENBQUM0RyxNQUFNLENBQUNpQixLQUFLLENBQUMsQ0FBQztJQUM5QjtJQUVBdFgsUUFBUSxHQUFHLElBQUksQ0FBQ3lhLFNBQVMsQ0FBQ3phLFFBQVEsRUFBRSxJQUFJLENBQUM7SUFDekMsT0FBTyxJQUFJLENBQUNxVyxNQUFNLENBQUNyVyxRQUFRLENBQUM7RUFDaEMsQ0FBQzs7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSTBWLEdBQUcsQ0FBQ3pmLFNBQVMsQ0FBQ21vQixPQUFPLEdBQUcsVUFBU3BlLFFBQVEsRUFBRTtJQUN2QyxJQUFJQSxRQUFRLEtBQUt5UCxTQUFTLEVBQUU7TUFDeEIsT0FBTyxJQUFJLENBQUM4RyxRQUFRLENBQUNlLEtBQUssQ0FBQyxDQUFDO0lBQ2hDO0lBRUF0WCxRQUFRLEdBQUcsSUFBSSxDQUFDeWEsU0FBUyxDQUFDemEsUUFBUSxFQUFFLElBQUksQ0FBQztJQUN6QyxPQUFPLElBQUksQ0FBQ3VXLFFBQVEsQ0FBQ3ZXLFFBQVEsQ0FBQztFQUNsQyxDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJMFYsR0FBRyxDQUFDemYsU0FBUyxDQUFDcWtCLE1BQU0sR0FBRyxVQUFTdGEsUUFBUSxFQUFFO0lBQ3RDLElBQUlxZSxHQUFHLEdBQUcsSUFBSSxDQUFDL0gsT0FBTyxDQUFDOXlCLE1BQU0sR0FBRyxDQUFDO01BQzdCODZCLElBQUksR0FBR0QsR0FBRyxHQUFHLElBQUksQ0FBQ2hJLE1BQU0sQ0FBQzd5QixNQUFNO01BQy9CK2MsR0FBRyxHQUFHLFNBQUFBLENBQVN4VyxLQUFLLEVBQUU7UUFBRSxPQUFPQSxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBR3UwQixJQUFJLEdBQUd2MEIsS0FBSyxHQUFHLENBQUMsR0FBR3MwQixHQUFHLEdBQUcsQ0FBQ3QwQixLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUM7TUFBQyxDQUFDO0lBRS9GLElBQUlpVyxRQUFRLEtBQUt5UCxTQUFTLEVBQUU7TUFDeEIsT0FBT3J1QixDQUFDLENBQUNtZixHQUFHLENBQUMsSUFBSSxDQUFDK1YsT0FBTyxFQUFFLFVBQVM3RSxDQUFDLEVBQUVoZ0IsQ0FBQyxFQUFFO1FBQUUsT0FBTzhPLEdBQUcsQ0FBQzlPLENBQUMsQ0FBQztNQUFDLENBQUMsQ0FBQztJQUNoRTtJQUVBLE9BQU9yUSxDQUFDLENBQUNtZixHQUFHLENBQUMsSUFBSSxDQUFDK1YsT0FBTyxFQUFFLFVBQVM3RSxDQUFDLEVBQUVoZ0IsQ0FBQyxFQUFFO01BQUUsT0FBT2dnQixDQUFDLEtBQUt6UixRQUFRLEdBQUdPLEdBQUcsQ0FBQzlPLENBQUMsQ0FBQyxHQUFHLElBQUk7SUFBQyxDQUFDLENBQUM7RUFDeEYsQ0FBQzs7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSWlrQixHQUFHLENBQUN6ZixTQUFTLENBQUNsSixLQUFLLEdBQUcsVUFBU0EsS0FBSyxFQUFFO0lBQ2xDLElBQUlBLEtBQUssS0FBSzBpQixTQUFTLEVBQUU7TUFDckIsSUFBSSxDQUFDd0csTUFBTSxHQUFHbHBCLEtBQUs7SUFDdkI7SUFFQSxPQUFPLElBQUksQ0FBQ2twQixNQUFNO0VBQ3RCLENBQUM7O0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSVAsR0FBRyxDQUFDemYsU0FBUyxDQUFDNmtCLFdBQVcsR0FBRyxVQUFTOWEsUUFBUSxFQUFFO0lBQzNDLElBQUk4ZCxVQUFVLEdBQUcsSUFBSTtJQUVyQixJQUFJOWQsUUFBUSxLQUFLeVAsU0FBUyxFQUFFO01BQ3hCLE9BQU9ydUIsQ0FBQyxDQUFDbWYsR0FBRyxDQUFDLElBQUksQ0FBQzJWLFlBQVksRUFBRTkwQixDQUFDLENBQUM4MUIsS0FBSyxDQUFDLFVBQVM0RyxVQUFVLEVBQUUvekIsS0FBSyxFQUFFO1FBQ2hFLE9BQU8sSUFBSSxDQUFDK3dCLFdBQVcsQ0FBQy93QixLQUFLLENBQUM7TUFDbEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2I7SUFFQSxJQUFJLElBQUksQ0FBQzRyQixRQUFRLENBQUN0VyxNQUFNLEVBQUU7TUFDdEJ5ZSxVQUFVLEdBQUcsSUFBSSxDQUFDNUgsWUFBWSxDQUFDbFcsUUFBUSxDQUFDO01BQ3hDOGQsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDdjZCLEtBQUssQ0FBQyxDQUFDLEdBQUd1NkIsVUFBVSxJQUFJLElBQUksQ0FBQzVILFlBQVksQ0FBQ2xXLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDMlYsUUFBUSxDQUFDMEMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6SCxDQUFDLE1BQU07TUFDSHlGLFVBQVUsR0FBRyxJQUFJLENBQUM1SCxZQUFZLENBQUNsVyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNyRDtJQUVBLE9BQU84ZCxVQUFVO0VBQ3JCLENBQUM7O0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJcEksR0FBRyxDQUFDemYsU0FBUyxDQUFDN0ssUUFBUSxHQUFHLFVBQVNsRyxJQUFJLEVBQUVDLEVBQUUsRUFBRW81QixNQUFNLEVBQUU7SUFDaEQsT0FBT3ZyQixJQUFJLENBQUNDLEdBQUcsQ0FBQ0QsSUFBSSxDQUFDMmIsR0FBRyxDQUFDM2IsSUFBSSxDQUFDK25CLEdBQUcsQ0FBQzUxQixFQUFFLEdBQUdELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHOE4sSUFBSSxDQUFDK25CLEdBQUcsQ0FBRXdELE1BQU0sSUFBSSxJQUFJLENBQUM1SSxRQUFRLENBQUMyQyxVQUFXLENBQUM7RUFDekcsQ0FBQzs7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSTVDLEdBQUcsQ0FBQ3pmLFNBQVMsQ0FBQzlRLEVBQUUsR0FBRyxVQUFTNmEsUUFBUSxFQUFFalQsS0FBSyxFQUFFO0lBQ3pDLElBQUlncUIsT0FBTyxHQUFHLElBQUksQ0FBQ0EsT0FBTyxDQUFDLENBQUM7TUFDeEJ5SCxNQUFNLEdBQUcsSUFBSTtNQUNiQyxRQUFRLEdBQUd6ZSxRQUFRLEdBQUcsSUFBSSxDQUFDaWEsUUFBUSxDQUFDbEQsT0FBTyxDQUFDO01BQzVDcGMsU0FBUyxHQUFHLENBQUM4akIsUUFBUSxHQUFHLENBQUMsS0FBS0EsUUFBUSxHQUFHLENBQUMsQ0FBQztNQUMzQ2xzQixLQUFLLEdBQUcsSUFBSSxDQUFDOGpCLE1BQU0sQ0FBQzd5QixNQUFNO01BQzFCeTNCLE9BQU8sR0FBRyxJQUFJLENBQUNBLE9BQU8sQ0FBQyxDQUFDO01BQ3hCQyxPQUFPLEdBQUcsSUFBSSxDQUFDQSxPQUFPLENBQUMsQ0FBQztJQUU1QixJQUFJLElBQUksQ0FBQ3ZGLFFBQVEsQ0FBQ3RRLElBQUksRUFBRTtNQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDc1EsUUFBUSxDQUFDaUMsTUFBTSxJQUFJNWtCLElBQUksQ0FBQytuQixHQUFHLENBQUMwRCxRQUFRLENBQUMsR0FBR2xzQixLQUFLLEdBQUcsQ0FBQyxFQUFFO1FBQ3pEa3NCLFFBQVEsSUFBSTlqQixTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUdwSSxLQUFLO01BQ3RDO01BRUF5TixRQUFRLEdBQUcrVyxPQUFPLEdBQUcwSCxRQUFRO01BQzdCRCxNQUFNLEdBQUcsQ0FBQyxDQUFDeGUsUUFBUSxHQUFHaWIsT0FBTyxJQUFJMW9CLEtBQUssR0FBR0EsS0FBSyxJQUFJQSxLQUFLLEdBQUcwb0IsT0FBTztNQUVqRSxJQUFJdUQsTUFBTSxLQUFLeGUsUUFBUSxJQUFJd2UsTUFBTSxHQUFHQyxRQUFRLElBQUl2RCxPQUFPLElBQUlzRCxNQUFNLEdBQUdDLFFBQVEsR0FBRyxDQUFDLEVBQUU7UUFDOUUxSCxPQUFPLEdBQUd5SCxNQUFNLEdBQUdDLFFBQVE7UUFDM0J6ZSxRQUFRLEdBQUd3ZSxNQUFNO1FBQ2pCLElBQUksQ0FBQzdtQixLQUFLLENBQUNvZixPQUFPLENBQUM7TUFDdkI7SUFDSixDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNwQixRQUFRLENBQUNpQyxNQUFNLEVBQUU7TUFDN0JzRCxPQUFPLElBQUksQ0FBQztNQUNabGIsUUFBUSxHQUFHLENBQUNBLFFBQVEsR0FBR2tiLE9BQU8sR0FBR0EsT0FBTyxJQUFJQSxPQUFPO0lBQ3ZELENBQUMsTUFBTTtNQUNIbGIsUUFBUSxHQUFHaE4sSUFBSSxDQUFDMmIsR0FBRyxDQUFDc00sT0FBTyxFQUFFam9CLElBQUksQ0FBQ0MsR0FBRyxDQUFDaW9CLE9BQU8sRUFBRWxiLFFBQVEsQ0FBQyxDQUFDO0lBQzdEO0lBRUEsSUFBSSxDQUFDalQsS0FBSyxDQUFDLElBQUksQ0FBQzNCLFFBQVEsQ0FBQzJyQixPQUFPLEVBQUUvVyxRQUFRLEVBQUVqVCxLQUFLLENBQUMsQ0FBQztJQUNuRCxJQUFJLENBQUNncUIsT0FBTyxDQUFDL1csUUFBUSxDQUFDO0lBRXRCLElBQUksSUFBSSxDQUFDNkosUUFBUSxDQUFDL2YsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFO01BQzlCLElBQUksQ0FBQ3l5QixNQUFNLENBQUMsQ0FBQztJQUNqQjtFQUNKLENBQUM7O0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJN0csR0FBRyxDQUFDemYsU0FBUyxDQUFDb0UsSUFBSSxHQUFHLFVBQVN0TixLQUFLLEVBQUU7SUFDakNBLEtBQUssR0FBR0EsS0FBSyxJQUFJLEtBQUs7SUFDdEIsSUFBSSxDQUFDNUgsRUFBRSxDQUFDLElBQUksQ0FBQzgwQixRQUFRLENBQUMsSUFBSSxDQUFDbEQsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRWhxQixLQUFLLENBQUM7RUFDckQsQ0FBQzs7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0kyb0IsR0FBRyxDQUFDemYsU0FBUyxDQUFDeW9CLElBQUksR0FBRyxVQUFTM3hCLEtBQUssRUFBRTtJQUNqQ0EsS0FBSyxHQUFHQSxLQUFLLElBQUksS0FBSztJQUN0QixJQUFJLENBQUM1SCxFQUFFLENBQUMsSUFBSSxDQUFDODBCLFFBQVEsQ0FBQyxJQUFJLENBQUNsRCxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFaHFCLEtBQUssQ0FBQztFQUNyRCxDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSTJvQixHQUFHLENBQUN6ZixTQUFTLENBQUNnbkIsZUFBZSxHQUFHLFVBQVM5NkIsS0FBSyxFQUFFO0lBRTVDO0lBQ0EsSUFBSUEsS0FBSyxLQUFLc3RCLFNBQVMsRUFBRTtNQUNyQnR0QixLQUFLLENBQUN5SixlQUFlLENBQUMsQ0FBQzs7TUFFdkI7TUFDQSxJQUFJLENBQUN6SixLQUFLLENBQUN1a0IsTUFBTSxJQUFJdmtCLEtBQUssQ0FBQ3c4QixVQUFVLElBQUl4OEIsS0FBSyxDQUFDeThCLGNBQWMsTUFBTSxJQUFJLENBQUMxRSxNQUFNLENBQUN0eUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ25GLE9BQU8sS0FBSztNQUNoQjtJQUNKO0lBRUEsSUFBSSxDQUFDbTBCLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFDdkIsSUFBSSxDQUFDbHdCLE9BQU8sQ0FBQyxZQUFZLENBQUM7RUFDOUIsQ0FBQzs7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0k2cEIsR0FBRyxDQUFDemYsU0FBUyxDQUFDK2xCLFFBQVEsR0FBRyxZQUFXO0lBQ2hDLElBQUl6NEIsS0FBSztJQUNULElBQUksSUFBSSxDQUFDdUosT0FBTyxDQUFDNnJCLHFCQUFxQixLQUFLbjNCLE1BQU0sRUFBRTtNQUMvQytCLEtBQUssR0FBR25DLENBQUMsQ0FBQyxJQUFJLENBQUMwTCxPQUFPLENBQUM2ckIscUJBQXFCLENBQUMsQ0FBQ3AxQixLQUFLLENBQUMsQ0FBQztJQUN6RCxDQUFDLE1BQU0sSUFBSS9CLE1BQU0sQ0FBQ2d6QixVQUFVLEVBQUU7TUFDMUJqeEIsS0FBSyxHQUFHL0IsTUFBTSxDQUFDZ3pCLFVBQVU7SUFDN0IsQ0FBQyxNQUFNLElBQUkzeUIsUUFBUSxDQUFDZzlCLGVBQWUsSUFBSWg5QixRQUFRLENBQUNnOUIsZUFBZSxDQUFDQyxXQUFXLEVBQUU7TUFDekV2N0IsS0FBSyxHQUFHMUIsUUFBUSxDQUFDZzlCLGVBQWUsQ0FBQ0MsV0FBVztJQUNoRCxDQUFDLE1BQU07TUFDSCxNQUFNLGdDQUFnQztJQUMxQztJQUNBLE9BQU92N0IsS0FBSztFQUNoQixDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSW15QixHQUFHLENBQUN6ZixTQUFTLENBQUM3RSxPQUFPLEdBQUcsVUFBUzhPLE9BQU8sRUFBRTtJQUN0QyxJQUFJLENBQUNnYSxNQUFNLENBQUNwWSxLQUFLLENBQUMsQ0FBQztJQUNuQixJQUFJLENBQUN1VSxNQUFNLEdBQUcsRUFBRTtJQUVoQixJQUFJblcsT0FBTyxFQUFFO01BQ1RBLE9BQU8sR0FBSUEsT0FBTyxZQUFZM2UsTUFBTSxHQUFJMmUsT0FBTyxHQUFHOWUsQ0FBQyxDQUFDOGUsT0FBTyxDQUFDO0lBQ2hFO0lBRUEsSUFBSSxJQUFJLENBQUN5VixRQUFRLENBQUNrRCxrQkFBa0IsRUFBRTtNQUNsQzNZLE9BQU8sR0FBR0EsT0FBTyxDQUFDelosSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUNrdkIsUUFBUSxDQUFDa0Qsa0JBQWtCLENBQUM7SUFDbEU7SUFFQTNZLE9BQU8sQ0FBQ2hLLE1BQU0sQ0FBQyxZQUFXO01BQ3RCLE9BQU8sSUFBSSxDQUFDNm9CLFFBQVEsS0FBSyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxDQUFDejRCLElBQUksQ0FBQ2xGLENBQUMsQ0FBQzgxQixLQUFLLENBQUMsVUFBU250QixLQUFLLEVBQUV1eUIsSUFBSSxFQUFFO01BQ2xDQSxJQUFJLEdBQUcsSUFBSSxDQUFDRCxPQUFPLENBQUNDLElBQUksQ0FBQztNQUN6QixJQUFJLENBQUNwQyxNQUFNLENBQUNyZCxNQUFNLENBQUN5ZixJQUFJLENBQUM7TUFDeEIsSUFBSSxDQUFDakcsTUFBTSxDQUFDL0UsSUFBSSxDQUFDZ0wsSUFBSSxDQUFDO01BQ3RCLElBQUksQ0FBQy9GLFFBQVEsQ0FBQ2pGLElBQUksQ0FBQ2dMLElBQUksQ0FBQzcxQixJQUFJLENBQUMsY0FBYyxDQUFDLENBQUN1NEIsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDbjhCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVULElBQUksQ0FBQzhVLEtBQUssQ0FBQ3ZXLENBQUMsQ0FBQ2tRLFNBQVMsQ0FBQyxJQUFJLENBQUNxa0IsUUFBUSxDQUFDeUMsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDekMsUUFBUSxDQUFDeUMsYUFBYSxHQUFHLENBQUMsQ0FBQztJQUV0RixJQUFJLENBQUN5RCxVQUFVLENBQUMsT0FBTyxDQUFDO0VBQzVCLENBQUM7O0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSW5HLEdBQUcsQ0FBQ3pmLFNBQVMsQ0FBQ00sR0FBRyxHQUFHLFVBQVMySixPQUFPLEVBQUVGLFFBQVEsRUFBRTtJQUM1QyxJQUFJK1csT0FBTyxHQUFHLElBQUksQ0FBQ2tELFFBQVEsQ0FBQyxJQUFJLENBQUNqRSxRQUFRLENBQUM7SUFFMUNoVyxRQUFRLEdBQUdBLFFBQVEsS0FBS3lQLFNBQVMsR0FBRyxJQUFJLENBQUM0RyxNQUFNLENBQUM3eUIsTUFBTSxHQUFHLElBQUksQ0FBQ2kzQixTQUFTLENBQUN6YSxRQUFRLEVBQUUsSUFBSSxDQUFDO0lBQ3ZGRSxPQUFPLEdBQUdBLE9BQU8sWUFBWTNlLE1BQU0sR0FBRzJlLE9BQU8sR0FBRzllLENBQUMsQ0FBQzhlLE9BQU8sQ0FBQztJQUUxRCxJQUFJLENBQUNyVSxPQUFPLENBQUMsS0FBSyxFQUFFO01BQUVxVSxPQUFPLEVBQUVBLE9BQU87TUFBRUYsUUFBUSxFQUFFQTtJQUFTLENBQUMsQ0FBQztJQUU3REUsT0FBTyxHQUFHLElBQUksQ0FBQ21jLE9BQU8sQ0FBQ25jLE9BQU8sQ0FBQztJQUUvQixJQUFJLElBQUksQ0FBQ21XLE1BQU0sQ0FBQzd5QixNQUFNLEtBQUssQ0FBQyxJQUFJd2MsUUFBUSxLQUFLLElBQUksQ0FBQ3FXLE1BQU0sQ0FBQzd5QixNQUFNLEVBQUU7TUFDN0QsSUFBSSxDQUFDNnlCLE1BQU0sQ0FBQzd5QixNQUFNLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQzAyQixNQUFNLENBQUNyZCxNQUFNLENBQUNxRCxPQUFPLENBQUM7TUFDdkQsSUFBSSxDQUFDbVcsTUFBTSxDQUFDN3lCLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDNnlCLE1BQU0sQ0FBQ3JXLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQ2lELEtBQUssQ0FBQy9DLE9BQU8sQ0FBQztNQUNwRSxJQUFJLENBQUNtVyxNQUFNLENBQUMvRSxJQUFJLENBQUNwUixPQUFPLENBQUM7TUFDekIsSUFBSSxDQUFDcVcsUUFBUSxDQUFDakYsSUFBSSxDQUFDcFIsT0FBTyxDQUFDelosSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDdTRCLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQ244QixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RyxDQUFDLE1BQU07TUFDSCxJQUFJLENBQUN3ekIsTUFBTSxDQUFDclcsUUFBUSxDQUFDLENBQUN3USxNQUFNLENBQUN0USxPQUFPLENBQUM7TUFDckMsSUFBSSxDQUFDbVcsTUFBTSxDQUFDNEksTUFBTSxDQUFDamYsUUFBUSxFQUFFLENBQUMsRUFBRUUsT0FBTyxDQUFDO01BQ3hDLElBQUksQ0FBQ3FXLFFBQVEsQ0FBQzBJLE1BQU0sQ0FBQ2pmLFFBQVEsRUFBRSxDQUFDLEVBQUVFLE9BQU8sQ0FBQ3paLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQ3U0QixPQUFPLENBQUMsY0FBYyxDQUFDLENBQUNuOEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkg7SUFFQSxJQUFJLENBQUN3ekIsTUFBTSxDQUFDVSxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUNwZixLQUFLLENBQUMsSUFBSSxDQUFDMGUsTUFBTSxDQUFDVSxPQUFPLENBQUMsQ0FBQ2h0QixLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRWhFLElBQUksQ0FBQzh4QixVQUFVLENBQUMsT0FBTyxDQUFDO0lBRXhCLElBQUksQ0FBQ2h3QixPQUFPLENBQUMsT0FBTyxFQUFFO01BQUVxVSxPQUFPLEVBQUVBLE9BQU87TUFBRUYsUUFBUSxFQUFFQTtJQUFTLENBQUMsQ0FBQztFQUNuRSxDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJMFYsR0FBRyxDQUFDemYsU0FBUyxDQUFDNU4sTUFBTSxHQUFHLFVBQVMyWCxRQUFRLEVBQUU7SUFDdENBLFFBQVEsR0FBRyxJQUFJLENBQUN5YSxTQUFTLENBQUN6YSxRQUFRLEVBQUUsSUFBSSxDQUFDO0lBRXpDLElBQUlBLFFBQVEsS0FBS3lQLFNBQVMsRUFBRTtNQUN4QjtJQUNKO0lBRUEsSUFBSSxDQUFDNWpCLE9BQU8sQ0FBQyxRQUFRLEVBQUU7TUFBRXFVLE9BQU8sRUFBRSxJQUFJLENBQUNtVyxNQUFNLENBQUNyVyxRQUFRLENBQUM7TUFBRUEsUUFBUSxFQUFFQTtJQUFTLENBQUMsQ0FBQztJQUU5RSxJQUFJLENBQUNxVyxNQUFNLENBQUNyVyxRQUFRLENBQUMsQ0FBQzNYLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLElBQUksQ0FBQ2d1QixNQUFNLENBQUM0SSxNQUFNLENBQUNqZixRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLElBQUksQ0FBQ3VXLFFBQVEsQ0FBQzBJLE1BQU0sQ0FBQ2pmLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFFakMsSUFBSSxDQUFDNmIsVUFBVSxDQUFDLE9BQU8sQ0FBQztJQUV4QixJQUFJLENBQUNod0IsT0FBTyxDQUFDLFNBQVMsRUFBRTtNQUFFcVUsT0FBTyxFQUFFLElBQUk7TUFBRUYsUUFBUSxFQUFFQTtJQUFTLENBQUMsQ0FBQztFQUNsRSxDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSTBWLEdBQUcsQ0FBQ3pmLFNBQVMsQ0FBQ3lsQixzQkFBc0IsR0FBRyxVQUFTd0QsTUFBTSxFQUFFO0lBQ3BEQSxNQUFNLENBQUM1NEIsSUFBSSxDQUFDbEYsQ0FBQyxDQUFDODFCLEtBQUssQ0FBQyxVQUFTemxCLENBQUMsRUFBRXpILE9BQU8sRUFBRTtNQUNyQyxJQUFJLENBQUMwZ0IsS0FBSyxDQUFDLGFBQWEsQ0FBQztNQUN6QjFnQixPQUFPLEdBQUc1SSxDQUFDLENBQUM0SSxPQUFPLENBQUM7TUFDcEI1SSxDQUFDLENBQUMsSUFBSSs5QixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMzQixHQUFHLENBQUMsTUFBTSxFQUFFcDhCLENBQUMsQ0FBQzgxQixLQUFLLENBQUMsVUFBU3J2QixDQUFDLEVBQUU7UUFDM0NtQyxPQUFPLENBQUNuSCxJQUFJLENBQUMsS0FBSyxFQUFFZ0YsQ0FBQyxDQUFDNmUsTUFBTSxDQUFDOEMsR0FBRyxDQUFDO1FBQ2pDeGYsT0FBTyxDQUFDbkUsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDazJCLEtBQUssQ0FBQyxhQUFhLENBQUM7UUFDekIsQ0FBQyxJQUFJLENBQUNqeUIsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDQSxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksSUFBSSxDQUFDOHhCLE9BQU8sQ0FBQyxDQUFDO01BQ3pFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLzRCLElBQUksQ0FBQyxLQUFLLEVBQUVtSCxPQUFPLENBQUNuSCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUltSCxPQUFPLENBQUNuSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUltSCxPQUFPLENBQUNuSCxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM3RyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7RUFDYixDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0VBQ0k2eUIsR0FBRyxDQUFDemYsU0FBUyxDQUFDK0UsT0FBTyxHQUFHLFlBQVc7SUFFL0IsSUFBSSxDQUFDNk8sUUFBUSxDQUFDN2pCLEdBQUcsQ0FBQyxXQUFXLENBQUM7SUFDOUIsSUFBSSxDQUFDazBCLE1BQU0sQ0FBQ2wwQixHQUFHLENBQUMsV0FBVyxDQUFDO0lBQzVCNUUsQ0FBQyxDQUFDUyxRQUFRLENBQUMsQ0FBQ21FLEdBQUcsQ0FBQyxXQUFXLENBQUM7SUFFNUIsSUFBSSxJQUFJLENBQUMydkIsUUFBUSxDQUFDOEMsVUFBVSxLQUFLLEtBQUssRUFBRTtNQUNwQ2ozQixNQUFNLENBQUNzekIsWUFBWSxDQUFDLElBQUksQ0FBQzhILFdBQVcsQ0FBQztNQUNyQyxJQUFJLENBQUM1MkIsR0FBRyxDQUFDeEUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUNxMEIsU0FBUyxDQUFDOEcsaUJBQWlCLENBQUM7SUFDaEU7SUFFQSxLQUFLLElBQUlsckIsQ0FBQyxJQUFJLElBQUksQ0FBQ3FrQixRQUFRLEVBQUU7TUFDekIsSUFBSSxDQUFDQSxRQUFRLENBQUNya0IsQ0FBQyxDQUFDLENBQUN1SixPQUFPLENBQUMsQ0FBQztJQUM5QjtJQUVBLElBQUksQ0FBQ2tmLE1BQU0sQ0FBQ3RrQixRQUFRLENBQUMsU0FBUyxDQUFDLENBQUN2TixNQUFNLENBQUMsQ0FBQztJQUV4QyxJQUFJLENBQUM2eEIsTUFBTSxDQUFDa0YsTUFBTSxDQUFDLENBQUM7SUFDcEIsSUFBSSxDQUFDbEYsTUFBTSxDQUFDdGtCLFFBQVEsQ0FBQyxDQUFDLENBQUN5cEIsUUFBUSxDQUFDLENBQUMsQ0FBQ0QsTUFBTSxDQUFDLENBQUM7SUFDMUMsSUFBSSxDQUFDbEYsTUFBTSxDQUFDdGtCLFFBQVEsQ0FBQyxDQUFDLENBQUN3cEIsTUFBTSxDQUFDLENBQUM7SUFFL0IsSUFBSSxDQUFDdlYsUUFBUSxDQUNSNWtCLFdBQVcsQ0FBQyxJQUFJLENBQUM2SCxPQUFPLENBQUNrc0IsWUFBWSxDQUFDLENBQ3RDL3pCLFdBQVcsQ0FBQyxJQUFJLENBQUM2SCxPQUFPLENBQUNvc0IsWUFBWSxDQUFDLENBQ3RDajBCLFdBQVcsQ0FBQyxJQUFJLENBQUM2SCxPQUFPLENBQUNtc0IsV0FBVyxDQUFDLENBQ3JDaDBCLFdBQVcsQ0FBQyxJQUFJLENBQUM2SCxPQUFPLENBQUNxc0IsUUFBUSxDQUFDLENBQ2xDbDBCLFdBQVcsQ0FBQyxJQUFJLENBQUM2SCxPQUFPLENBQUN1c0IsU0FBUyxDQUFDLENBQ25DcDBCLFdBQVcsQ0FBQyxJQUFJLENBQUM2SCxPQUFPLENBQUMyc0IsU0FBUyxDQUFDLENBQ25DNTJCLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDZ25CLFFBQVEsQ0FBQ2huQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUN1TyxPQUFPLENBQUMsSUFBSThxQixNQUFNLENBQUMsSUFBSSxDQUFDcHZCLE9BQU8sQ0FBQ3NzQixlQUFlLEdBQUcsVUFBVSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQ2xIa0csVUFBVSxDQUFDLGNBQWMsQ0FBQztFQUNuQyxDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0k1SixHQUFHLENBQUN6ZixTQUFTLENBQUNzbEIsRUFBRSxHQUFHLFVBQVN0SyxDQUFDLEVBQUVGLENBQUMsRUFBRUgsQ0FBQyxFQUFFO0lBQ2pDLElBQUl5SCxHQUFHLEdBQUcsSUFBSSxDQUFDMUMsUUFBUSxDQUFDMEMsR0FBRztJQUMzQixRQUFRdEgsQ0FBQztNQUNMLEtBQUssR0FBRztRQUNKLE9BQU9zSCxHQUFHLEdBQUdwSCxDQUFDLEdBQUdMLENBQUMsR0FBR0ssQ0FBQyxHQUFHTCxDQUFDO01BQzlCLEtBQUssR0FBRztRQUNKLE9BQU95SCxHQUFHLEdBQUdwSCxDQUFDLEdBQUdMLENBQUMsR0FBR0ssQ0FBQyxHQUFHTCxDQUFDO01BQzlCLEtBQUssSUFBSTtRQUNMLE9BQU95SCxHQUFHLEdBQUdwSCxDQUFDLElBQUlMLENBQUMsR0FBR0ssQ0FBQyxJQUFJTCxDQUFDO01BQ2hDLEtBQUssSUFBSTtRQUNMLE9BQU95SCxHQUFHLEdBQUdwSCxDQUFDLElBQUlMLENBQUMsR0FBR0ssQ0FBQyxJQUFJTCxDQUFDO01BQ2hDO1FBQ0k7SUFDUjtFQUNKLENBQUM7O0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJOEUsR0FBRyxDQUFDemYsU0FBUyxDQUFDaFEsRUFBRSxHQUFHLFVBQVMrRCxPQUFPLEVBQUU3SCxLQUFLLEVBQUVvOUIsUUFBUSxFQUFFQyxPQUFPLEVBQUU7SUFDM0QsSUFBSXgxQixPQUFPLENBQUM5SCxnQkFBZ0IsRUFBRTtNQUMxQjhILE9BQU8sQ0FBQzlILGdCQUFnQixDQUFDQyxLQUFLLEVBQUVvOUIsUUFBUSxFQUFFQyxPQUFPLENBQUM7SUFDdEQsQ0FBQyxNQUFNLElBQUl4MUIsT0FBTyxDQUFDeTFCLFdBQVcsRUFBRTtNQUM1QnoxQixPQUFPLENBQUN5MUIsV0FBVyxDQUFDLElBQUksR0FBR3Q5QixLQUFLLEVBQUVvOUIsUUFBUSxDQUFDO0lBQy9DO0VBQ0osQ0FBQzs7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0k3SixHQUFHLENBQUN6ZixTQUFTLENBQUNqUSxHQUFHLEdBQUcsVUFBU2dFLE9BQU8sRUFBRTdILEtBQUssRUFBRW85QixRQUFRLEVBQUVDLE9BQU8sRUFBRTtJQUM1RCxJQUFJeDFCLE9BQU8sQ0FBQzAxQixtQkFBbUIsRUFBRTtNQUM3QjExQixPQUFPLENBQUMwMUIsbUJBQW1CLENBQUN2OUIsS0FBSyxFQUFFbzlCLFFBQVEsRUFBRUMsT0FBTyxDQUFDO0lBQ3pELENBQUMsTUFBTSxJQUFJeDFCLE9BQU8sQ0FBQzIxQixXQUFXLEVBQUU7TUFDNUIzMUIsT0FBTyxDQUFDMjFCLFdBQVcsQ0FBQyxJQUFJLEdBQUd4OUIsS0FBSyxFQUFFbzlCLFFBQVEsQ0FBQztJQUMvQztFQUNKLENBQUM7O0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJN0osR0FBRyxDQUFDemYsU0FBUyxDQUFDcEssT0FBTyxHQUFHLFVBQVNqSCxJQUFJLEVBQUVvTCxJQUFJLEVBQUU0dkIsU0FBUyxFQUFFN3dCLEtBQUssRUFBRTJiLEtBQUssRUFBRTtJQUNsRSxJQUFJcmhCLE1BQU0sR0FBRztRQUNUaXpCLElBQUksRUFBRTtVQUFFaFAsS0FBSyxFQUFFLElBQUksQ0FBQytJLE1BQU0sQ0FBQzd5QixNQUFNO1VBQUV1RyxLQUFLLEVBQUUsSUFBSSxDQUFDZ3RCLE9BQU8sQ0FBQztRQUFFO01BQzdELENBQUM7TUFBRWhjLE9BQU8sR0FBRzNaLENBQUMsQ0FBQ3krQixTQUFTLENBQ3BCeitCLENBQUMsQ0FBQ3E3QixJQUFJLENBQUMsQ0FBRSxJQUFJLEVBQUU3M0IsSUFBSSxFQUFFZzdCLFNBQVMsQ0FBRSxFQUFFLFVBQVNuTyxDQUFDLEVBQUU7UUFBRSxPQUFPQSxDQUFDO01BQUMsQ0FBQyxDQUFDLENBQ3REb0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDekQsV0FBVyxDQUFDLENBQy9CLENBQUM7TUFBRWp2QixLQUFLLEdBQUdmLENBQUMsQ0FBQzI0QixLQUFLLENBQ2QsQ0FBRW4xQixJQUFJLEVBQUUsS0FBSyxFQUFFZzdCLFNBQVMsSUFBSSxVQUFVLENBQUUsQ0FBQy9LLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQ3pELFdBQVcsQ0FBQyxDQUFDLEVBQ2hFaHdCLENBQUMsQ0FBQzJ4QixNQUFNLENBQUM7UUFBRStNLGFBQWEsRUFBRTtNQUFLLENBQUMsRUFBRXoyQixNQUFNLEVBQUUyRyxJQUFJLENBQ2xELENBQUM7SUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDK2xCLFFBQVEsQ0FBQ254QixJQUFJLENBQUMsRUFBRTtNQUN0QnhELENBQUMsQ0FBQ2tGLElBQUksQ0FBQyxJQUFJLENBQUN3dkIsUUFBUSxFQUFFLFVBQVNseEIsSUFBSSxFQUFFeXlCLE1BQU0sRUFBRTtRQUN6QyxJQUFJQSxNQUFNLENBQUMwSSxTQUFTLEVBQUU7VUFDbEIxSSxNQUFNLENBQUMwSSxTQUFTLENBQUM1OUIsS0FBSyxDQUFDO1FBQzNCO01BQ0osQ0FBQyxDQUFDO01BRUYsSUFBSSxDQUFDNjlCLFFBQVEsQ0FBQztRQUFFOW9CLElBQUksRUFBRXdlLEdBQUcsQ0FBQ29FLElBQUksQ0FBQ0MsS0FBSztRQUFFbjFCLElBQUksRUFBRUE7TUFBSyxDQUFDLENBQUM7TUFDbkQsSUFBSSxDQUFDaWxCLFFBQVEsQ0FBQ2hlLE9BQU8sQ0FBQzFKLEtBQUssQ0FBQztNQUU1QixJQUFJLElBQUksQ0FBQ3d6QixRQUFRLElBQUksT0FBTyxJQUFJLENBQUNBLFFBQVEsQ0FBQzVhLE9BQU8sQ0FBQyxLQUFLLFVBQVUsRUFBRTtRQUMvRCxJQUFJLENBQUM0YSxRQUFRLENBQUM1YSxPQUFPLENBQUMsQ0FBQzVFLElBQUksQ0FBQyxJQUFJLEVBQUVoVSxLQUFLLENBQUM7TUFDNUM7SUFDSjtJQUVBLE9BQU9BLEtBQUs7RUFDaEIsQ0FBQzs7RUFFRDtBQUNKO0FBQ0E7QUFDQTtFQUNJdXpCLEdBQUcsQ0FBQ3pmLFNBQVMsQ0FBQ3lVLEtBQUssR0FBRyxVQUFTOWxCLElBQUksRUFBRTtJQUNqQ3hELENBQUMsQ0FBQ2tGLElBQUksQ0FBQyxDQUFFMUIsSUFBSSxDQUFFLENBQUNnd0IsTUFBTSxDQUFDLElBQUksQ0FBQ29DLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDcnlCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFeEQsQ0FBQyxDQUFDODFCLEtBQUssQ0FBQyxVQUFTemxCLENBQUMsRUFBRTdNLElBQUksRUFBRTtNQUM3RSxJQUFJLElBQUksQ0FBQ295QixPQUFPLENBQUNELE9BQU8sQ0FBQ255QixJQUFJLENBQUMsS0FBSzZxQixTQUFTLEVBQUU7UUFDMUMsSUFBSSxDQUFDdUgsT0FBTyxDQUFDRCxPQUFPLENBQUNueUIsSUFBSSxDQUFDLEdBQUcsQ0FBQztNQUNsQztNQUVBLElBQUksQ0FBQ295QixPQUFPLENBQUNELE9BQU8sQ0FBQ255QixJQUFJLENBQUMsRUFBRTtJQUNoQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7RUFDYixDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0VBQ0k4d0IsR0FBRyxDQUFDemYsU0FBUyxDQUFDOGxCLEtBQUssR0FBRyxVQUFTbjNCLElBQUksRUFBRTtJQUNqQ3hELENBQUMsQ0FBQ2tGLElBQUksQ0FBQyxDQUFFMUIsSUFBSSxDQUFFLENBQUNnd0IsTUFBTSxDQUFDLElBQUksQ0FBQ29DLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDcnlCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFeEQsQ0FBQyxDQUFDODFCLEtBQUssQ0FBQyxVQUFTemxCLENBQUMsRUFBRTdNLElBQUksRUFBRTtNQUM3RSxJQUFJLENBQUNveUIsT0FBTyxDQUFDRCxPQUFPLENBQUNueUIsSUFBSSxDQUFDLEVBQUU7SUFDaEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQ2IsQ0FBQzs7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0k4d0IsR0FBRyxDQUFDemYsU0FBUyxDQUFDK3BCLFFBQVEsR0FBRyxVQUFTQyxNQUFNLEVBQUU7SUFDdEMsSUFBSUEsTUFBTSxDQUFDL29CLElBQUksS0FBS3dlLEdBQUcsQ0FBQ29FLElBQUksQ0FBQ0MsS0FBSyxFQUFFO01BQ2hDLElBQUksQ0FBQzM0QixDQUFDLENBQUNlLEtBQUssQ0FBQys5QixPQUFPLENBQUNELE1BQU0sQ0FBQ3I3QixJQUFJLENBQUMsRUFBRTtRQUMvQnhELENBQUMsQ0FBQ2UsS0FBSyxDQUFDKzlCLE9BQU8sQ0FBQ0QsTUFBTSxDQUFDcjdCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUNyQztNQUVBLElBQUksQ0FBQ3hELENBQUMsQ0FBQ2UsS0FBSyxDQUFDKzlCLE9BQU8sQ0FBQ0QsTUFBTSxDQUFDcjdCLElBQUksQ0FBQyxDQUFDdTdCLEdBQUcsRUFBRTtRQUNuQyxJQUFJQyxRQUFRLEdBQUdoL0IsQ0FBQyxDQUFDZSxLQUFLLENBQUMrOUIsT0FBTyxDQUFDRCxNQUFNLENBQUNyN0IsSUFBSSxDQUFDLENBQUN3N0IsUUFBUTtRQUNwRGgvQixDQUFDLENBQUNlLEtBQUssQ0FBQys5QixPQUFPLENBQUNELE1BQU0sQ0FBQ3I3QixJQUFJLENBQUMsQ0FBQ3c3QixRQUFRLEdBQUcsVUFBU3Y0QixDQUFDLEVBQUU7VUFDaEQsSUFBSXU0QixRQUFRLElBQUlBLFFBQVEsQ0FBQzNNLEtBQUssS0FBSyxDQUFDNXJCLENBQUMsQ0FBQyszQixTQUFTLElBQUkvM0IsQ0FBQyxDQUFDKzNCLFNBQVMsQ0FBQ2hsQixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNuRixPQUFPd2xCLFFBQVEsQ0FBQzNNLEtBQUssQ0FBQyxJQUFJLEVBQUU0TSxTQUFTLENBQUM7VUFDMUM7VUFDQSxPQUFPeDRCLENBQUMsQ0FBQyszQixTQUFTLElBQUkvM0IsQ0FBQyxDQUFDKzNCLFNBQVMsQ0FBQ2hsQixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELENBQUM7UUFDRHhaLENBQUMsQ0FBQ2UsS0FBSyxDQUFDKzlCLE9BQU8sQ0FBQ0QsTUFBTSxDQUFDcjdCLElBQUksQ0FBQyxDQUFDdTdCLEdBQUcsR0FBRyxJQUFJO01BQzNDO0lBQ0osQ0FBQyxNQUFNLElBQUlGLE1BQU0sQ0FBQy9vQixJQUFJLEtBQUt3ZSxHQUFHLENBQUNvRSxJQUFJLENBQUNFLEtBQUssRUFBRTtNQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDaEQsT0FBTyxDQUFDQyxJQUFJLENBQUNnSixNQUFNLENBQUNyN0IsSUFBSSxDQUFDLEVBQUU7UUFDakMsSUFBSSxDQUFDb3lCLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDZ0osTUFBTSxDQUFDcjdCLElBQUksQ0FBQyxHQUFHcTdCLE1BQU0sQ0FBQ2hKLElBQUk7TUFDaEQsQ0FBQyxNQUFNO1FBQ0gsSUFBSSxDQUFDRCxPQUFPLENBQUNDLElBQUksQ0FBQ2dKLE1BQU0sQ0FBQ3I3QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUNveUIsT0FBTyxDQUFDQyxJQUFJLENBQUNnSixNQUFNLENBQUNyN0IsSUFBSSxDQUFDLENBQUNnd0IsTUFBTSxDQUFDcUwsTUFBTSxDQUFDaEosSUFBSSxDQUFDO01BQ3ZGO01BRUEsSUFBSSxDQUFDRCxPQUFPLENBQUNDLElBQUksQ0FBQ2dKLE1BQU0sQ0FBQ3I3QixJQUFJLENBQUMsR0FBR3hELENBQUMsQ0FBQ3E3QixJQUFJLENBQUMsSUFBSSxDQUFDekYsT0FBTyxDQUFDQyxJQUFJLENBQUNnSixNQUFNLENBQUNyN0IsSUFBSSxDQUFDLEVBQUV4RCxDQUFDLENBQUM4MUIsS0FBSyxDQUFDLFVBQVNvSixHQUFHLEVBQUU3dUIsQ0FBQyxFQUFFO1FBQzdGLE9BQU9yUSxDQUFDLENBQUNtL0IsT0FBTyxDQUFDRCxHQUFHLEVBQUUsSUFBSSxDQUFDdEosT0FBTyxDQUFDQyxJQUFJLENBQUNnSixNQUFNLENBQUNyN0IsSUFBSSxDQUFDLENBQUMsS0FBSzZNLENBQUM7TUFDL0QsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2I7RUFDSixDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSWlrQixHQUFHLENBQUN6ZixTQUFTLENBQUNnb0IsUUFBUSxHQUFHLFVBQVMxWCxNQUFNLEVBQUU7SUFDdENubEIsQ0FBQyxDQUFDa0YsSUFBSSxDQUFDaWdCLE1BQU0sRUFBRW5sQixDQUFDLENBQUM4MUIsS0FBSyxDQUFDLFVBQVNudEIsS0FBSyxFQUFFNUgsS0FBSyxFQUFFO01BQzFDLElBQUksQ0FBQzR6QixRQUFRLENBQUM1ekIsS0FBSyxDQUFDLEdBQUcsSUFBSTtJQUMvQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7RUFDYixDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSXV6QixHQUFHLENBQUN6ZixTQUFTLENBQUNpb0IsT0FBTyxHQUFHLFVBQVMzWCxNQUFNLEVBQUU7SUFDckNubEIsQ0FBQyxDQUFDa0YsSUFBSSxDQUFDaWdCLE1BQU0sRUFBRW5sQixDQUFDLENBQUM4MUIsS0FBSyxDQUFDLFVBQVNudEIsS0FBSyxFQUFFNUgsS0FBSyxFQUFFO01BQzFDLE9BQU8sSUFBSSxDQUFDNHpCLFFBQVEsQ0FBQzV6QixLQUFLLENBQUM7SUFDL0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQ2IsQ0FBQzs7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJdXpCLEdBQUcsQ0FBQ3pmLFNBQVMsQ0FBQzRnQixPQUFPLEdBQUcsVUFBUzEwQixLQUFLLEVBQUU7SUFDcEMsSUFBSXErQixNQUFNLEdBQUc7TUFBRXhPLENBQUMsRUFBRSxJQUFJO01BQUVGLENBQUMsRUFBRTtJQUFLLENBQUM7SUFFakMzdkIsS0FBSyxHQUFHQSxLQUFLLENBQUNzK0IsYUFBYSxJQUFJdCtCLEtBQUssSUFBSVgsTUFBTSxDQUFDVyxLQUFLO0lBRXBEQSxLQUFLLEdBQUdBLEtBQUssQ0FBQ3UrQixPQUFPLElBQUl2K0IsS0FBSyxDQUFDdStCLE9BQU8sQ0FBQ2w5QixNQUFNLEdBQ3pDckIsS0FBSyxDQUFDdStCLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBR3YrQixLQUFLLENBQUN3K0IsY0FBYyxJQUFJeCtCLEtBQUssQ0FBQ3crQixjQUFjLENBQUNuOUIsTUFBTSxHQUNsRXJCLEtBQUssQ0FBQ3crQixjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUd4K0IsS0FBSztJQUV2QyxJQUFJQSxLQUFLLENBQUN5K0IsS0FBSyxFQUFFO01BQ2JKLE1BQU0sQ0FBQ3hPLENBQUMsR0FBRzd2QixLQUFLLENBQUN5K0IsS0FBSztNQUN0QkosTUFBTSxDQUFDMU8sQ0FBQyxHQUFHM3ZCLEtBQUssQ0FBQzArQixLQUFLO0lBQzFCLENBQUMsTUFBTTtNQUNITCxNQUFNLENBQUN4TyxDQUFDLEdBQUc3dkIsS0FBSyxDQUFDMitCLE9BQU87TUFDeEJOLE1BQU0sQ0FBQzFPLENBQUMsR0FBRzN2QixLQUFLLENBQUM0K0IsT0FBTztJQUM1QjtJQUVBLE9BQU9QLE1BQU07RUFDakIsQ0FBQzs7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0k5SyxHQUFHLENBQUN6ZixTQUFTLENBQUN5bkIsVUFBVSxHQUFHLFVBQVNodUIsS0FBSyxFQUFFc3hCLE1BQU0sRUFBRTtJQUMvQyxPQUFPO01BQ0hoUCxDQUFDLEVBQUV0aUIsS0FBSyxDQUFDc2lCLENBQUMsR0FBR2dQLE1BQU0sQ0FBQ2hQLENBQUM7TUFDckJGLENBQUMsRUFBRXBpQixLQUFLLENBQUNvaUIsQ0FBQyxHQUFHa1AsTUFBTSxDQUFDbFA7SUFDeEIsQ0FBQztFQUNMLENBQUM7O0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJMXdCLENBQUMsQ0FBQ3FNLEVBQUUsQ0FBQ3d6QixXQUFXLEdBQUcsVUFBU0MsTUFBTSxFQUFFO0lBQ2hDLElBQUlDLElBQUksR0FBR25yQixLQUFLLENBQUNDLFNBQVMsQ0FBQ3FoQixLQUFLLENBQUNuaEIsSUFBSSxDQUFDa3FCLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFFbkQsT0FBTyxJQUFJLENBQUMvNUIsSUFBSSxDQUFDLFlBQVc7TUFDeEIsSUFBSTg2QixLQUFLLEdBQUdoZ0MsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNmNE8sSUFBSSxHQUFHb3hCLEtBQUssQ0FBQ3B4QixJQUFJLENBQUMsY0FBYyxDQUFDO01BRXJDLElBQUksQ0FBQ0EsSUFBSSxFQUFFO1FBQ1BBLElBQUksR0FBRyxJQUFJMGxCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBT3dMLE1BQU0sSUFBSSxRQUFRLElBQUlBLE1BQU0sQ0FBQztRQUN6REUsS0FBSyxDQUFDcHhCLElBQUksQ0FBQyxjQUFjLEVBQUVBLElBQUksQ0FBQztRQUVoQzVPLENBQUMsQ0FBQ2tGLElBQUksQ0FBQyxDQUNILE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQ3pFLEVBQUUsVUFBU21MLENBQUMsRUFBRXRQLEtBQUssRUFBRTtVQUNsQjZOLElBQUksQ0FBQ2d3QixRQUFRLENBQUM7WUFBRTlvQixJQUFJLEVBQUV3ZSxHQUFHLENBQUNvRSxJQUFJLENBQUNDLEtBQUs7WUFBRW4xQixJQUFJLEVBQUV6QztVQUFNLENBQUMsQ0FBQztVQUNwRDZOLElBQUksQ0FBQzZaLFFBQVEsQ0FBQzVqQixFQUFFLENBQUM5RCxLQUFLLEdBQUcsb0JBQW9CLEVBQUVmLENBQUMsQ0FBQzgxQixLQUFLLENBQUMsVUFBU3J2QixDQUFDLEVBQUU7WUFDL0QsSUFBSUEsQ0FBQyxDQUFDKzNCLFNBQVMsSUFBSS8zQixDQUFDLENBQUNpNEIsYUFBYSxLQUFLLElBQUksRUFBRTtjQUN6QyxJQUFJLENBQUM3QixRQUFRLENBQUMsQ0FBRTk3QixLQUFLLENBQUUsQ0FBQztjQUN4QjZOLElBQUksQ0FBQzdOLEtBQUssQ0FBQyxDQUFDc3hCLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDNkQsS0FBSyxDQUFDbmhCLElBQUksQ0FBQ2txQixTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7Y0FDcEQsSUFBSSxDQUFDbkMsT0FBTyxDQUFDLENBQUUvN0IsS0FBSyxDQUFFLENBQUM7WUFDM0I7VUFDSixDQUFDLEVBQUU2TixJQUFJLENBQUMsQ0FBQztRQUNiLENBQUMsQ0FBQztNQUNOO01BRUEsSUFBSSxPQUFPa3hCLE1BQU0sSUFBSSxRQUFRLElBQUlBLE1BQU0sQ0FBQzdQLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7UUFDdkRyaEIsSUFBSSxDQUFDa3hCLE1BQU0sQ0FBQyxDQUFDek4sS0FBSyxDQUFDempCLElBQUksRUFBRW14QixJQUFJLENBQUM7TUFDbEM7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0VBQ0kvL0IsQ0FBQyxDQUFDcU0sRUFBRSxDQUFDd3pCLFdBQVcsQ0FBQ0ksV0FBVyxHQUFHM0wsR0FBRztBQUV0QyxDQUFDLEVBQUVsMEIsTUFBTSxDQUFDOC9CLEtBQUssSUFBSTkvQixvQ0FBYSxFQUFFQSxNQUFNLEVBQUVLLFFBQVEsQ0FBQzs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQyxDQUFDLFVBQVNULENBQUMsRUFBRUksTUFBTSxFQUFFSyxRQUFRLEVBQUU0dEIsU0FBUyxFQUFFO0VBRXZDO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSSxJQUFJOFIsV0FBVyxHQUFHLFNBQUFBLENBQVMvekIsUUFBUSxFQUFFO0lBQ2pDO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7SUFDUSxJQUFJLENBQUNnMEIsS0FBSyxHQUFHaDBCLFFBQVE7O0lBRXJCO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7SUFDUSxJQUFJLENBQUNpMEIsU0FBUyxHQUFHLElBQUk7O0lBRXJCO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7SUFDUSxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJOztJQUVwQjtBQUNSO0FBQ0E7QUFDQTtBQUNBO0lBQ1EsSUFBSSxDQUFDN0wsU0FBUyxHQUFHO01BQ2IsMEJBQTBCLEVBQUV6MEIsQ0FBQyxDQUFDODFCLEtBQUssQ0FBQyxVQUFTcnZCLENBQUMsRUFBRTtRQUM1QyxJQUFJQSxDQUFDLENBQUMrM0IsU0FBUyxJQUFJLElBQUksQ0FBQzRCLEtBQUssQ0FBQzdMLFFBQVEsQ0FBQ2dNLFdBQVcsRUFBRTtVQUNoRCxJQUFJLENBQUNDLEtBQUssQ0FBQyxDQUFDO1FBQ2hCO01BQ0osQ0FBQyxFQUFFLElBQUk7SUFDWCxDQUFDOztJQUVEO0lBQ0EsSUFBSSxDQUFDSixLQUFLLENBQUMxMEIsT0FBTyxHQUFHMUwsQ0FBQyxDQUFDMnhCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRXdPLFdBQVcsQ0FBQzNMLFFBQVEsRUFBRSxJQUFJLENBQUM0TCxLQUFLLENBQUMxMEIsT0FBTyxDQUFDOztJQUUzRTtJQUNBLElBQUksQ0FBQzAwQixLQUFLLENBQUMzWCxRQUFRLENBQUM1akIsRUFBRSxDQUFDLElBQUksQ0FBQzR2QixTQUFTLENBQUM7RUFDMUMsQ0FBQzs7RUFFRDtBQUNKO0FBQ0E7QUFDQTtFQUNJMEwsV0FBVyxDQUFDM0wsUUFBUSxHQUFHO0lBQ25CK0wsV0FBVyxFQUFFLElBQUk7SUFDakJFLG1CQUFtQixFQUFFO0VBQ3pCLENBQUM7O0VBRUQ7QUFDSjtBQUNBO0VBQ0lOLFdBQVcsQ0FBQ3RyQixTQUFTLENBQUMyckIsS0FBSyxHQUFHLFlBQVc7SUFDckMsSUFBSSxJQUFJLENBQUNILFNBQVMsRUFBRTtNQUNoQjtJQUNKO0lBRUEsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSSxDQUFDRixLQUFLLENBQUMzWCxRQUFRLENBQUMvZixFQUFFLENBQUMsVUFBVSxDQUFDO0lBQ2xELElBQUksQ0FBQzIzQixTQUFTLEdBQUdqZ0MsTUFBTSxDQUFDcXFCLFdBQVcsQ0FBQ3pxQixDQUFDLENBQUM4MUIsS0FBSyxDQUFDLElBQUksQ0FBQzBFLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUM0RixLQUFLLENBQUM3TCxRQUFRLENBQUNrTSxtQkFBbUIsQ0FBQztFQUM3RyxDQUFDOztFQUVEO0FBQ0o7QUFDQTtFQUNJTixXQUFXLENBQUN0ckIsU0FBUyxDQUFDMmxCLE9BQU8sR0FBRyxZQUFXO0lBQ3ZDLElBQUksSUFBSSxDQUFDNEYsS0FBSyxDQUFDM1gsUUFBUSxDQUFDL2YsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksQ0FBQzQzQixRQUFRLEVBQUU7TUFDdEQ7SUFDSjtJQUVBLElBQUksQ0FBQ0EsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDQSxRQUFRO0lBRTlCLElBQUksQ0FBQ0YsS0FBSyxDQUFDM1gsUUFBUSxDQUFDbGUsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQysxQixRQUFRLENBQUM7SUFFN0QsSUFBSSxDQUFDQSxRQUFRLElBQUssSUFBSSxDQUFDRixLQUFLLENBQUMzRixVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDMkYsS0FBSyxDQUFDNUYsT0FBTyxDQUFDLENBQUU7RUFDN0UsQ0FBQzs7RUFFRDtBQUNKO0FBQ0E7RUFDSTJGLFdBQVcsQ0FBQ3RyQixTQUFTLENBQUMrRSxPQUFPLEdBQUcsWUFBVztJQUN2QyxJQUFJRCxPQUFPLEVBQUVvaEIsUUFBUTtJQUVyQjM2QixNQUFNLENBQUNzcUIsYUFBYSxDQUFDLElBQUksQ0FBQzJWLFNBQVMsQ0FBQztJQUVwQyxLQUFLMW1CLE9BQU8sSUFBSSxJQUFJLENBQUM4YSxTQUFTLEVBQUU7TUFDNUIsSUFBSSxDQUFDMkwsS0FBSyxDQUFDM1gsUUFBUSxDQUFDN2pCLEdBQUcsQ0FBQytVLE9BQU8sRUFBRSxJQUFJLENBQUM4YSxTQUFTLENBQUM5YSxPQUFPLENBQUMsQ0FBQztJQUM3RDtJQUNBLEtBQUtvaEIsUUFBUSxJQUFJMkYsTUFBTSxDQUFDQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBRTtNQUMvQyxPQUFPLElBQUksQ0FBQzVGLFFBQVEsQ0FBQyxJQUFJLFVBQVUsS0FBSyxJQUFJLENBQUNBLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNsRTtFQUNKLENBQUM7RUFFRC82QixDQUFDLENBQUNxTSxFQUFFLENBQUN3ekIsV0FBVyxDQUFDSSxXQUFXLENBQUNsSyxPQUFPLENBQUNvSyxXQUFXLEdBQUdBLFdBQVc7QUFFbEUsQ0FBQyxFQUFFLy9CLE1BQU0sQ0FBQzgvQixLQUFLLElBQUk5L0Isb0NBQWEsRUFBRUEsTUFBTSxFQUFFSyxRQUFRLENBQUM7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUMsQ0FBQyxVQUFTVCxDQUFDLEVBQUVJLE1BQU0sRUFBRUssUUFBUSxFQUFFNHRCLFNBQVMsRUFBRTtFQUV2QztBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0ksSUFBSXVTLElBQUksR0FBRyxTQUFBQSxDQUFTeDBCLFFBQVEsRUFBRTtJQUUxQjtBQUNSO0FBQ0E7QUFDQTtBQUNBO0lBQ1EsSUFBSSxDQUFDZzBCLEtBQUssR0FBR2gwQixRQUFROztJQUVyQjtBQUNSO0FBQ0E7QUFDQTtBQUNBO0lBQ1EsSUFBSSxDQUFDeTBCLE9BQU8sR0FBRyxFQUFFOztJQUVqQjtBQUNSO0FBQ0E7QUFDQTtBQUNBO0lBQ1EsSUFBSSxDQUFDcE0sU0FBUyxHQUFHO01BQ2IsOENBQThDLEVBQUV6MEIsQ0FBQyxDQUFDODFCLEtBQUssQ0FBQyxVQUFTcnZCLENBQUMsRUFBRTtRQUNoRSxJQUFJLENBQUNBLENBQUMsQ0FBQyszQixTQUFTLEVBQUU7VUFDZDtRQUNKO1FBRUEsSUFBSSxDQUFDLElBQUksQ0FBQzRCLEtBQUssQ0FBQzdMLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQzZMLEtBQUssQ0FBQzdMLFFBQVEsQ0FBQzlpQixRQUFRLEVBQUU7VUFDdkQ7UUFDSjtRQUVBLElBQUtoTCxDQUFDLENBQUNzMEIsUUFBUSxJQUFJdDBCLENBQUMsQ0FBQ3MwQixRQUFRLENBQUN2M0IsSUFBSSxJQUFJLFVBQVUsSUFBS2lELENBQUMsQ0FBQ3FQLElBQUksSUFBSSxhQUFhLEVBQUU7VUFDMUUsSUFBSXllLFFBQVEsR0FBRyxJQUFJLENBQUM2TCxLQUFLLENBQUM3TCxRQUFRO1lBQzlCbkcsQ0FBQyxHQUFJbUcsUUFBUSxDQUFDdFcsTUFBTSxJQUFJck0sSUFBSSxDQUFDd25CLElBQUksQ0FBQzdFLFFBQVEsQ0FBQ3BqQixLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUlvakIsUUFBUSxDQUFDcGpCLEtBQU07WUFDeEVkLENBQUMsR0FBS2trQixRQUFRLENBQUN0VyxNQUFNLElBQUltUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUssQ0FBRTtZQUN0Q3hQLFFBQVEsR0FBRyxDQUFFblksQ0FBQyxDQUFDczBCLFFBQVEsSUFBSXQwQixDQUFDLENBQUNzMEIsUUFBUSxDQUFDMXhCLEtBQUssSUFBSyxJQUFJLENBQUMrMkIsS0FBSyxDQUFDekssT0FBTyxDQUFDLENBQUMsSUFBSXRsQixDQUFDO1lBQ3pFNm9CLE1BQU0sR0FBRyxJQUFJLENBQUNrSCxLQUFLLENBQUNsSCxNQUFNLENBQUMsQ0FBQyxDQUFDOTJCLE1BQU07WUFDbkNvaEIsSUFBSSxHQUFHeGpCLENBQUMsQ0FBQzgxQixLQUFLLENBQUMsVUFBU3psQixDQUFDLEVBQUVnZ0IsQ0FBQyxFQUFFO2NBQUUsSUFBSSxDQUFDN00sSUFBSSxDQUFDNk0sQ0FBQyxDQUFDO1lBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztVQUV6RCxPQUFPaGdCLENBQUMsRUFBRSxHQUFHK2QsQ0FBQyxFQUFFO1lBQ1osSUFBSSxDQUFDNUssSUFBSSxDQUFDMFYsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUNrSCxLQUFLLENBQUN2SCxRQUFRLENBQUNqYSxRQUFRLENBQUMsQ0FBQztZQUNyRHNhLE1BQU0sSUFBSWw1QixDQUFDLENBQUNrRixJQUFJLENBQUMsSUFBSSxDQUFDazdCLEtBQUssQ0FBQ2xILE1BQU0sQ0FBQyxJQUFJLENBQUNrSCxLQUFLLENBQUN2SCxRQUFRLENBQUNqYSxRQUFRLENBQUMsQ0FBQyxFQUFFNEUsSUFBSSxDQUFDO1lBQ3hFNUUsUUFBUSxFQUFFO1VBQ2Q7UUFDSjtNQUNKLENBQUMsRUFBRSxJQUFJO0lBQ1gsQ0FBQzs7SUFFRDtJQUNBLElBQUksQ0FBQ3doQixLQUFLLENBQUMxMEIsT0FBTyxHQUFHMUwsQ0FBQyxDQUFDMnhCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRWlQLElBQUksQ0FBQ3BNLFFBQVEsRUFBRSxJQUFJLENBQUM0TCxLQUFLLENBQUMxMEIsT0FBTyxDQUFDOztJQUVwRTtJQUNBLElBQUksQ0FBQzAwQixLQUFLLENBQUMzWCxRQUFRLENBQUM1akIsRUFBRSxDQUFDLElBQUksQ0FBQzR2QixTQUFTLENBQUM7RUFDMUMsQ0FBQzs7RUFFRDtBQUNKO0FBQ0E7QUFDQTtFQUNJbU0sSUFBSSxDQUFDcE0sUUFBUSxHQUFHO0lBQ1ovaUIsUUFBUSxFQUFFO0VBQ2QsQ0FBQzs7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0ltdkIsSUFBSSxDQUFDL3JCLFNBQVMsQ0FBQzJPLElBQUksR0FBRyxVQUFTNUUsUUFBUSxFQUFFO0lBQ3JDLElBQUk5RixLQUFLLEdBQUcsSUFBSSxDQUFDc25CLEtBQUssQ0FBQ3RILE1BQU0sQ0FBQ3RrQixRQUFRLENBQUMsQ0FBQyxDQUFDb2xCLEVBQUUsQ0FBQ2hiLFFBQVEsQ0FBQztNQUNqRGtpQixTQUFTLEdBQUdob0IsS0FBSyxJQUFJQSxLQUFLLENBQUN6VCxJQUFJLENBQUMsV0FBVyxDQUFDO0lBRWhELElBQUksQ0FBQ3k3QixTQUFTLElBQUk5Z0MsQ0FBQyxDQUFDbS9CLE9BQU8sQ0FBQ3JtQixLQUFLLENBQUN0UyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDcTZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO01BQzFEO0lBQ0o7SUFFQUMsU0FBUyxDQUFDNTdCLElBQUksQ0FBQ2xGLENBQUMsQ0FBQzgxQixLQUFLLENBQUMsVUFBU250QixLQUFLLEVBQUVDLE9BQU8sRUFBRTtNQUM1QyxJQUFJNmYsUUFBUSxHQUFHem9CLENBQUMsQ0FBQzRJLE9BQU8sQ0FBQztRQUFFdVosS0FBSztRQUM1QnRNLEdBQUcsR0FBSXpWLE1BQU0sQ0FBQzJnQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUl0WSxRQUFRLENBQUNobkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUtnbkIsUUFBUSxDQUFDaG5CLElBQUksQ0FBQyxVQUFVLENBQUM7TUFFeEcsSUFBSSxDQUFDMitCLEtBQUssQ0FBQzMxQixPQUFPLENBQUMsTUFBTSxFQUFFO1FBQUU3QixPQUFPLEVBQUU2ZixRQUFRO1FBQUU1UyxHQUFHLEVBQUVBO01BQUksQ0FBQyxFQUFFLE1BQU0sQ0FBQztNQUVuRSxJQUFJNFMsUUFBUSxDQUFDL2YsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3BCK2YsUUFBUSxDQUFDMlQsR0FBRyxDQUFDLGVBQWUsRUFBRXA4QixDQUFDLENBQUM4MUIsS0FBSyxDQUFDLFlBQVc7VUFDN0NyTixRQUFRLENBQUNoa0IsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7VUFDMUIsSUFBSSxDQUFDMjdCLEtBQUssQ0FBQzMxQixPQUFPLENBQUMsUUFBUSxFQUFFO1lBQUU3QixPQUFPLEVBQUU2ZixRQUFRO1lBQUU1UyxHQUFHLEVBQUVBO1VBQUksQ0FBQyxFQUFFLE1BQU0sQ0FBQztRQUN6RSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQ3BVLElBQUksQ0FBQyxLQUFLLEVBQUVvVSxHQUFHLENBQUM7TUFDOUIsQ0FBQyxNQUFNO1FBQ0hzTSxLQUFLLEdBQUcsSUFBSTRiLEtBQUssQ0FBQyxDQUFDO1FBQ25CNWIsS0FBSyxDQUFDNmUsTUFBTSxHQUFHaGhDLENBQUMsQ0FBQzgxQixLQUFLLENBQUMsWUFBVztVQUM5QnJOLFFBQVEsQ0FBQ2hrQixHQUFHLENBQUM7WUFDVCxrQkFBa0IsRUFBRSxNQUFNLEdBQUdvUixHQUFHLEdBQUcsR0FBRztZQUN0QyxTQUFTLEVBQUU7VUFDZixDQUFDLENBQUM7VUFDRixJQUFJLENBQUN1cUIsS0FBSyxDQUFDMzFCLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFBRTdCLE9BQU8sRUFBRTZmLFFBQVE7WUFBRTVTLEdBQUcsRUFBRUE7VUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDO1FBQ3pFLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDUnNNLEtBQUssQ0FBQ2lHLEdBQUcsR0FBR3ZTLEdBQUc7TUFDbkI7SUFDSixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFVCxJQUFJLENBQUNnckIsT0FBTyxDQUFDM1EsSUFBSSxDQUFDcFgsS0FBSyxDQUFDdFMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ25DLENBQUM7O0VBRUQ7QUFDSjtBQUNBO0FBQ0E7RUFDSW82QixJQUFJLENBQUMvckIsU0FBUyxDQUFDK0UsT0FBTyxHQUFHLFlBQVc7SUFDaEMsSUFBSUQsT0FBTyxFQUFFb2hCLFFBQVE7SUFFckIsS0FBS3BoQixPQUFPLElBQUksSUFBSSxDQUFDc25CLFFBQVEsRUFBRTtNQUMzQixJQUFJLENBQUNiLEtBQUssQ0FBQzNYLFFBQVEsQ0FBQzdqQixHQUFHLENBQUMrVSxPQUFPLEVBQUUsSUFBSSxDQUFDc25CLFFBQVEsQ0FBQ3RuQixPQUFPLENBQUMsQ0FBQztJQUM1RDtJQUNBLEtBQUtvaEIsUUFBUSxJQUFJMkYsTUFBTSxDQUFDQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBRTtNQUMvQyxPQUFPLElBQUksQ0FBQzVGLFFBQVEsQ0FBQyxJQUFJLFVBQVUsS0FBSyxJQUFJLENBQUNBLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNsRTtFQUNKLENBQUM7RUFFRC82QixDQUFDLENBQUNxTSxFQUFFLENBQUN3ekIsV0FBVyxDQUFDSSxXQUFXLENBQUNsSyxPQUFPLENBQUM2SyxJQUFJLEdBQUdBLElBQUk7QUFFcEQsQ0FBQyxFQUFFeGdDLE1BQU0sQ0FBQzgvQixLQUFLLElBQUk5L0Isb0NBQWEsRUFBRUEsTUFBTSxFQUFFSyxRQUFRLENBQUM7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUMsQ0FBQyxVQUFTVCxDQUFDLEVBQUVJLE1BQU0sRUFBRUssUUFBUSxFQUFFNHRCLFNBQVMsRUFBRTtFQUV2QztBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0ksSUFBSTZTLFVBQVUsR0FBRyxTQUFBQSxDQUFTOTBCLFFBQVEsRUFBRTtJQUNoQztBQUNSO0FBQ0E7QUFDQTtBQUNBO0lBQ1EsSUFBSSxDQUFDZzBCLEtBQUssR0FBR2gwQixRQUFROztJQUVyQjtBQUNSO0FBQ0E7QUFDQTtBQUNBO0lBQ1EsSUFBSSxDQUFDcW9CLFNBQVMsR0FBRztNQUNiLGlEQUFpRCxFQUFFejBCLENBQUMsQ0FBQzgxQixLQUFLLENBQUMsVUFBU3J2QixDQUFDLEVBQUU7UUFDbkUsSUFBSUEsQ0FBQyxDQUFDKzNCLFNBQVMsSUFBSSxJQUFJLENBQUM0QixLQUFLLENBQUM3TCxRQUFRLENBQUM1VSxVQUFVLEVBQUU7VUFDL0MsSUFBSSxDQUFDd2IsTUFBTSxDQUFDLENBQUM7UUFDakI7TUFDSixDQUFDLEVBQUUsSUFBSSxDQUFDO01BQ1Isc0JBQXNCLEVBQUVuN0IsQ0FBQyxDQUFDODFCLEtBQUssQ0FBQyxVQUFTcnZCLENBQUMsRUFBRTtRQUN4QyxJQUFJQSxDQUFDLENBQUMrM0IsU0FBUyxJQUFJLElBQUksQ0FBQzRCLEtBQUssQ0FBQzdMLFFBQVEsQ0FBQzVVLFVBQVUsSUFBSWxaLENBQUMsQ0FBQ3MwQixRQUFRLENBQUN2M0IsSUFBSSxJQUFJLFVBQVUsRUFBQztVQUMvRSxJQUFJLENBQUMyM0IsTUFBTSxDQUFDLENBQUM7UUFDakI7TUFDSixDQUFDLEVBQUUsSUFBSSxDQUFDO01BQ1IsaUJBQWlCLEVBQUVuN0IsQ0FBQyxDQUFDODFCLEtBQUssQ0FBQyxVQUFTcnZCLENBQUMsRUFBRTtRQUNuQyxJQUFJQSxDQUFDLENBQUMrM0IsU0FBUyxJQUFJLElBQUksQ0FBQzRCLEtBQUssQ0FBQzdMLFFBQVEsQ0FBQzVVLFVBQVUsSUFDMUNsWixDQUFDLENBQUNtQyxPQUFPLENBQUM2ekIsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMyRCxLQUFLLENBQUM3TCxRQUFRLENBQUMyRCxTQUFTLENBQUMsQ0FBQ3Z2QixLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQ3kzQixLQUFLLENBQUN6SyxPQUFPLENBQUMsQ0FBQyxFQUFFO1VBQzVGLElBQUksQ0FBQ3dGLE1BQU0sQ0FBQyxDQUFDO1FBQ2pCO01BQ0osQ0FBQyxFQUFFLElBQUk7SUFDWCxDQUFDOztJQUVEO0lBQ0EsSUFBSSxDQUFDaUYsS0FBSyxDQUFDMTBCLE9BQU8sR0FBRzFMLENBQUMsQ0FBQzJ4QixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUV1UCxVQUFVLENBQUMxTSxRQUFRLEVBQUUsSUFBSSxDQUFDNEwsS0FBSyxDQUFDMTBCLE9BQU8sQ0FBQzs7SUFFMUU7SUFDQSxJQUFJLENBQUMwMEIsS0FBSyxDQUFDM1gsUUFBUSxDQUFDNWpCLEVBQUUsQ0FBQyxJQUFJLENBQUM0dkIsU0FBUyxDQUFDO0VBQzFDLENBQUM7O0VBRUQ7QUFDSjtBQUNBO0FBQ0E7RUFDSXlNLFVBQVUsQ0FBQzFNLFFBQVEsR0FBRztJQUNsQjdVLFVBQVUsRUFBRSxLQUFLO0lBQ2pCd2hCLGVBQWUsRUFBRTtFQUNyQixDQUFDOztFQUVEO0FBQ0o7QUFDQTtFQUNJRCxVQUFVLENBQUNyc0IsU0FBUyxDQUFDc21CLE1BQU0sR0FBRyxZQUFXO0lBQ3JDLElBQUlqeEIsS0FBSyxHQUFHLElBQUksQ0FBQ2syQixLQUFLLENBQUN4TCxRQUFRO01BQzNCalEsR0FBRyxHQUFHemEsS0FBSyxHQUFHLElBQUksQ0FBQ2syQixLQUFLLENBQUM3TCxRQUFRLENBQUNwakIsS0FBSztNQUN2Q2l3QixPQUFPLEdBQUcsSUFBSSxDQUFDaEIsS0FBSyxDQUFDdEgsTUFBTSxDQUFDdGtCLFFBQVEsQ0FBQyxDQUFDLENBQUM2c0IsT0FBTyxDQUFDLENBQUMsQ0FBQ25MLEtBQUssQ0FBQ2hzQixLQUFLLEVBQUV5YSxHQUFHLENBQUM7SUFDdEUyYyxPQUFPLEdBQUcsRUFBRSxFQUNSQyxTQUFTLEdBQUcsQ0FBQztJQUVqQnZoQyxDQUFDLENBQUNrRixJQUFJLENBQUNrOEIsT0FBTyxFQUFFLFVBQVN6NEIsS0FBSyxFQUFFdXlCLElBQUksRUFBRTtNQUNsQ29HLE9BQU8sQ0FBQ3BSLElBQUksQ0FBQ2x3QixDQUFDLENBQUNrN0IsSUFBSSxDQUFDLENBQUMxMUIsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDLENBQUM7SUFFRis3QixTQUFTLEdBQUczdkIsSUFBSSxDQUFDMmIsR0FBRyxDQUFDOEUsS0FBSyxDQUFDLElBQUksRUFBRWlQLE9BQU8sQ0FBQztJQUV6QyxJQUFJLENBQUNsQixLQUFLLENBQUN0SCxNQUFNLENBQUMvdUIsTUFBTSxDQUFDLENBQUMsQ0FDckJ2RSxNQUFNLENBQUMrN0IsU0FBUyxDQUFDLENBQ2pCNzlCLFFBQVEsQ0FBQyxJQUFJLENBQUMwOEIsS0FBSyxDQUFDN0wsUUFBUSxDQUFDNE0sZUFBZSxDQUFDO0VBQ3RELENBQUM7RUFFREQsVUFBVSxDQUFDcnNCLFNBQVMsQ0FBQytFLE9BQU8sR0FBRyxZQUFXO0lBQ3RDLElBQUlELE9BQU8sRUFBRW9oQixRQUFRO0lBRXJCLEtBQUtwaEIsT0FBTyxJQUFJLElBQUksQ0FBQzhhLFNBQVMsRUFBRTtNQUM1QixJQUFJLENBQUMyTCxLQUFLLENBQUMzWCxRQUFRLENBQUM3akIsR0FBRyxDQUFDK1UsT0FBTyxFQUFFLElBQUksQ0FBQzhhLFNBQVMsQ0FBQzlhLE9BQU8sQ0FBQyxDQUFDO0lBQzdEO0lBQ0EsS0FBS29oQixRQUFRLElBQUkyRixNQUFNLENBQUNDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFFO01BQy9DLE9BQU8sSUFBSSxDQUFDNUYsUUFBUSxDQUFDLElBQUksVUFBVSxLQUFLLElBQUksQ0FBQ0EsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ2xFO0VBQ0osQ0FBQztFQUVELzZCLENBQUMsQ0FBQ3FNLEVBQUUsQ0FBQ3d6QixXQUFXLENBQUNJLFdBQVcsQ0FBQ2xLLE9BQU8sQ0FBQ21MLFVBQVUsR0FBR0EsVUFBVTtBQUVoRSxDQUFDLEVBQUU5Z0MsTUFBTSxDQUFDOC9CLEtBQUssSUFBSTkvQixvQ0FBYSxFQUFFQSxNQUFNLEVBQUVLLFFBQVEsQ0FBQzs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQyxDQUFDLFVBQVNULENBQUMsRUFBRUksTUFBTSxFQUFFSyxRQUFRLEVBQUU0dEIsU0FBUyxFQUFFO0VBRXZDO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSSxJQUFJbVQsS0FBSyxHQUFHLFNBQUFBLENBQVNwMUIsUUFBUSxFQUFFO0lBQzNCO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7SUFDUSxJQUFJLENBQUNnMEIsS0FBSyxHQUFHaDBCLFFBQVE7O0lBRXJCO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7SUFDUSxJQUFJLENBQUNxMUIsT0FBTyxHQUFHLENBQUMsQ0FBQzs7SUFFakI7QUFDUjtBQUNBO0FBQ0E7QUFDQTtJQUNRLElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUk7O0lBRXBCO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNRLElBQUksQ0FBQ2pOLFNBQVMsR0FBRztNQUNiLDBCQUEwQixFQUFFejBCLENBQUMsQ0FBQzgxQixLQUFLLENBQUMsVUFBU3J2QixDQUFDLEVBQUU7UUFDNUMsSUFBSUEsQ0FBQyxDQUFDKzNCLFNBQVMsRUFBRTtVQUNiLElBQUksQ0FBQzRCLEtBQUssQ0FBQ3hCLFFBQVEsQ0FBQztZQUFFOW9CLElBQUksRUFBRSxPQUFPO1lBQUV0UyxJQUFJLEVBQUUsU0FBUztZQUFFcXlCLElBQUksRUFBRSxDQUFFLGFBQWE7VUFBRyxDQUFDLENBQUM7UUFDcEY7TUFDSixDQUFDLEVBQUUsSUFBSSxDQUFDO01BQ1IscUJBQXFCLEVBQUU3MUIsQ0FBQyxDQUFDODFCLEtBQUssQ0FBQyxVQUFTcnZCLENBQUMsRUFBRTtRQUN2QyxJQUFJQSxDQUFDLENBQUMrM0IsU0FBUyxJQUFJLElBQUksQ0FBQzRCLEtBQUssQ0FBQzdMLFFBQVEsQ0FBQ2prQixLQUFLLElBQUksSUFBSSxDQUFDcXhCLGNBQWMsQ0FBQyxDQUFDLEVBQUU7VUFDbkVsN0IsQ0FBQyxDQUFDb0QsY0FBYyxDQUFDLENBQUM7UUFDdEI7TUFDSixDQUFDLEVBQUUsSUFBSSxDQUFDO01BQ1Isd0JBQXdCLEVBQUU3SixDQUFDLENBQUM4MUIsS0FBSyxDQUFDLFVBQVNydkIsQ0FBQyxFQUFFO1FBQzFDLElBQUlBLENBQUMsQ0FBQyszQixTQUFTLElBQUksSUFBSSxDQUFDNEIsS0FBSyxDQUFDMTNCLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRTtVQUMxQyxJQUFJLENBQUMwM0IsS0FBSyxDQUFDdEgsTUFBTSxDQUFDenpCLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDNEIsTUFBTSxDQUFDLENBQUM7UUFDL0Q7TUFDSixDQUFDLEVBQUUsSUFBSSxDQUFDO01BQ1Isc0JBQXNCLEVBQUVqSCxDQUFDLENBQUM4MUIsS0FBSyxDQUFDLFVBQVNydkIsQ0FBQyxFQUFFO1FBQ3hDLElBQUlBLENBQUMsQ0FBQyszQixTQUFTLElBQUkvM0IsQ0FBQyxDQUFDczBCLFFBQVEsQ0FBQ3YzQixJQUFJLEtBQUssVUFBVSxJQUFJLElBQUksQ0FBQ2srQixRQUFRLEVBQUU7VUFDaEUsSUFBSSxDQUFDNThCLElBQUksQ0FBQyxDQUFDO1FBQ2Y7TUFDSixDQUFDLEVBQUUsSUFBSSxDQUFDO01BQ1IsdUJBQXVCLEVBQUU5RSxDQUFDLENBQUM4MUIsS0FBSyxDQUFDLFVBQVNydkIsQ0FBQyxFQUFFO1FBQ3pDLElBQUksQ0FBQ0EsQ0FBQyxDQUFDKzNCLFNBQVMsRUFBRTtVQUNkO1FBQ0o7UUFFQSxJQUFJL1YsUUFBUSxHQUFHem9CLENBQUMsQ0FBQ3lHLENBQUMsQ0FBQ3FZLE9BQU8sQ0FBQyxDQUFDelosSUFBSSxDQUFDLFlBQVksQ0FBQztRQUU5QyxJQUFJb2pCLFFBQVEsQ0FBQ3JtQixNQUFNLEVBQUU7VUFDakJxbUIsUUFBUSxDQUFDaGtCLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDO1VBQy9CLElBQUksQ0FBQ205QixLQUFLLENBQUNuWixRQUFRLEVBQUV6b0IsQ0FBQyxDQUFDeUcsQ0FBQyxDQUFDcVksT0FBTyxDQUFDLENBQUM7UUFDdEM7TUFDSixDQUFDLEVBQUUsSUFBSTtJQUNYLENBQUM7O0lBRUQ7SUFDQSxJQUFJLENBQUNzaEIsS0FBSyxDQUFDMTBCLE9BQU8sR0FBRzFMLENBQUMsQ0FBQzJ4QixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU2UCxLQUFLLENBQUNoTixRQUFRLEVBQUUsSUFBSSxDQUFDNEwsS0FBSyxDQUFDMTBCLE9BQU8sQ0FBQzs7SUFFckU7SUFDQSxJQUFJLENBQUMwMEIsS0FBSyxDQUFDM1gsUUFBUSxDQUFDNWpCLEVBQUUsQ0FBQyxJQUFJLENBQUM0dkIsU0FBUyxDQUFDO0lBRXRDLElBQUksQ0FBQzJMLEtBQUssQ0FBQzNYLFFBQVEsQ0FBQzVqQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsc0JBQXNCLEVBQUU3RSxDQUFDLENBQUM4MUIsS0FBSyxDQUFDLFVBQVNydkIsQ0FBQyxFQUFFO01BQ2xGLElBQUksQ0FBQ3dLLElBQUksQ0FBQ3hLLENBQUMsQ0FBQztJQUNoQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7RUFDYixDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0VBQ0krNkIsS0FBSyxDQUFDaE4sUUFBUSxHQUFHO0lBQ2Jsa0IsS0FBSyxFQUFFLEtBQUs7SUFDWnV4QixXQUFXLEVBQUUsS0FBSztJQUNsQkMsVUFBVSxFQUFFO0VBQ2hCLENBQUM7O0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0lOLEtBQUssQ0FBQzNzQixTQUFTLENBQUMrc0IsS0FBSyxHQUFHLFVBQVN0YyxNQUFNLEVBQUU0VixJQUFJLEVBQUU7SUFDM0MsSUFBSXBsQixJQUFJLEdBQUd3UCxNQUFNLENBQUM3akIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLE9BQU8sR0FBRyxTQUFTO01BQ3pEK3FCLEVBQUUsR0FBR2xILE1BQU0sQ0FBQzdqQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUk2akIsTUFBTSxDQUFDN2pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztNQUNuRVUsS0FBSyxHQUFHbWpCLE1BQU0sQ0FBQzdqQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxDQUFDMitCLEtBQUssQ0FBQzdMLFFBQVEsQ0FBQ3VOLFVBQVU7TUFDbkV0OEIsTUFBTSxHQUFHOGYsTUFBTSxDQUFDN2pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLENBQUMyK0IsS0FBSyxDQUFDN0wsUUFBUSxDQUFDc04sV0FBVztNQUN0RWhzQixHQUFHLEdBQUd5UCxNQUFNLENBQUM3akIsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUU3QixJQUFJb1UsR0FBRyxFQUFFO01BQ0wyVyxFQUFFLEdBQUczVyxHQUFHLENBQUNoVCxLQUFLLENBQUMsb0pBQW9KLENBQUM7TUFFcEssSUFBSTJwQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUNoVCxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDN0IxRCxJQUFJLEdBQUcsU0FBUztNQUNwQixDQUFDLE1BQU0sSUFBSTBXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQ2hULE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUNwQzFELElBQUksR0FBRyxPQUFPO01BQ2xCLENBQUMsTUFBTTtRQUNILE1BQU0sSUFBSWlzQixLQUFLLENBQUMsMEJBQTBCLENBQUM7TUFDL0M7TUFDQXZWLEVBQUUsR0FBR0EsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNkLENBQUMsTUFBTTtNQUNILE1BQU0sSUFBSXVWLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztJQUN6QztJQUVBLElBQUksQ0FBQ04sT0FBTyxDQUFDNXJCLEdBQUcsQ0FBQyxHQUFHO01BQ2hCQyxJQUFJLEVBQUVBLElBQUk7TUFDVjBXLEVBQUUsRUFBRUEsRUFBRTtNQUNOcnFCLEtBQUssRUFBRUEsS0FBSztNQUNacUQsTUFBTSxFQUFFQTtJQUNaLENBQUM7SUFFRDAxQixJQUFJLENBQUN6NUIsSUFBSSxDQUFDLFlBQVksRUFBRW9VLEdBQUcsQ0FBQztJQUU1QixJQUFJLENBQUNtc0IsU0FBUyxDQUFDMWMsTUFBTSxFQUFFLElBQUksQ0FBQ21jLE9BQU8sQ0FBQzVyQixHQUFHLENBQUMsQ0FBQztFQUM3QyxDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0kyckIsS0FBSyxDQUFDM3NCLFNBQVMsQ0FBQ210QixTQUFTLEdBQUcsVUFBUzFjLE1BQU0sRUFBRWhWLEtBQUssRUFBRTtJQUNoRCxJQUFJMnhCLE1BQU07TUFDTnBrQixJQUFJO01BQ0p6QyxJQUFJO01BQ0o4bUIsVUFBVSxHQUFHNXhCLEtBQUssQ0FBQ25PLEtBQUssSUFBSW1PLEtBQUssQ0FBQzlLLE1BQU0sR0FBRyxlQUFlLEdBQUc4SyxLQUFLLENBQUNuTyxLQUFLLEdBQUcsWUFBWSxHQUFHbU8sS0FBSyxDQUFDOUssTUFBTSxHQUFHLE1BQU0sR0FBRyxFQUFFO01BQ3BIMjhCLFFBQVEsR0FBRzdjLE1BQU0sQ0FBQ2pnQixJQUFJLENBQUMsS0FBSyxDQUFDO01BQzdCKzhCLE9BQU8sR0FBRyxLQUFLO01BQ2ZDLFNBQVMsR0FBRyxFQUFFO01BQ2Q5TixRQUFRLEdBQUcsSUFBSSxDQUFDNkwsS0FBSyxDQUFDN0wsUUFBUTtNQUM5QitOLE1BQU0sR0FBRyxTQUFBQSxDQUFTbG5CLElBQUksRUFBRTtRQUNwQnlDLElBQUksR0FBRyx5Q0FBeUM7UUFFaEQsSUFBSTBXLFFBQVEsQ0FBQzlpQixRQUFRLEVBQUU7VUFDbkJ3d0IsTUFBTSxHQUFHLDJCQUEyQixHQUFHSSxTQUFTLEdBQUcsSUFBSSxHQUFHRCxPQUFPLEdBQUcsSUFBSSxHQUFHaG5CLElBQUksR0FBRyxVQUFVO1FBQ2hHLENBQUMsTUFBTTtVQUNINm1CLE1BQU0sR0FBRyxrRUFBa0UsR0FBRzdtQixJQUFJLEdBQUcsV0FBVztRQUNwRztRQUNBa0ssTUFBTSxDQUFDekQsS0FBSyxDQUFDb2dCLE1BQU0sQ0FBQztRQUNwQjNjLE1BQU0sQ0FBQ3pELEtBQUssQ0FBQ2hFLElBQUksQ0FBQztNQUN0QixDQUFDOztJQUVMO0lBQ0F5SCxNQUFNLENBQUNyVCxJQUFJLENBQUMsZ0NBQWdDLEdBQUdpd0IsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUV0RSxJQUFJLElBQUksQ0FBQzlCLEtBQUssQ0FBQzdMLFFBQVEsQ0FBQzlpQixRQUFRLEVBQUU7TUFDOUIyd0IsT0FBTyxHQUFHLFVBQVU7TUFDcEJDLFNBQVMsR0FBRyxVQUFVO0lBQzFCOztJQUVBO0lBQ0EsSUFBSUYsUUFBUSxDQUFDLy9CLE1BQU0sRUFBRTtNQUNqQmtnQyxNQUFNLENBQUNILFFBQVEsQ0FBQzFnQyxJQUFJLENBQUMyZ0MsT0FBTyxDQUFDLENBQUM7TUFDOUJELFFBQVEsQ0FBQ2w3QixNQUFNLENBQUMsQ0FBQztNQUNqQixPQUFPLEtBQUs7SUFDaEI7SUFFQSxJQUFJcUosS0FBSyxDQUFDd0YsSUFBSSxLQUFLLFNBQVMsRUFBRTtNQUMxQnNGLElBQUksR0FBRyw0QkFBNEIsR0FBRzlLLEtBQUssQ0FBQ2tjLEVBQUUsR0FBRyxnQkFBZ0I7TUFDakU4VixNQUFNLENBQUNsbkIsSUFBSSxDQUFDO0lBQ2hCLENBQUMsTUFBTSxJQUFJOUssS0FBSyxDQUFDd0YsSUFBSSxLQUFLLE9BQU8sRUFBRTtNQUMvQjlWLENBQUMsQ0FBQzRWLElBQUksQ0FBQztRQUNIRSxJQUFJLEVBQUUsS0FBSztRQUNYRCxHQUFHLEVBQUUsZ0NBQWdDLEdBQUd2RixLQUFLLENBQUNrYyxFQUFFLEdBQUcsT0FBTztRQUMxRCtWLEtBQUssRUFBRSxVQUFVO1FBQ2pCeFUsUUFBUSxFQUFFLE9BQU87UUFDakI1WCxPQUFPLEVBQUUsU0FBQUEsQ0FBU3ZILElBQUksRUFBRTtVQUNwQndNLElBQUksR0FBR3hNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzR6QixlQUFlO1VBQzlCRixNQUFNLENBQUNsbkIsSUFBSSxDQUFDO1FBQ2hCO01BQ0osQ0FBQyxDQUFDO0lBQ047RUFDSixDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0VBQ0lvbUIsS0FBSyxDQUFDM3NCLFNBQVMsQ0FBQy9QLElBQUksR0FBRyxZQUFXO0lBQzlCLElBQUksQ0FBQ3M3QixLQUFLLENBQUMzMUIsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO0lBQ3pDLElBQUksQ0FBQ2kzQixRQUFRLENBQUNyOEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM0QixNQUFNLENBQUMsQ0FBQztJQUMvQyxJQUFJLENBQUN5NkIsUUFBUSxDQUFDNzlCLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQztJQUM5QyxJQUFJLENBQUM2OUIsUUFBUSxHQUFHLElBQUk7SUFDcEIsSUFBSSxDQUFDdEIsS0FBSyxDQUFDekYsS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUMzQixJQUFJLENBQUN5RixLQUFLLENBQUMzMUIsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO0VBQ2hELENBQUM7O0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJKzJCLEtBQUssQ0FBQzNzQixTQUFTLENBQUM1RCxJQUFJLEdBQUcsVUFBU2xRLEtBQUssRUFBRTtJQUNuQyxJQUFJdWtCLE1BQU0sR0FBR3RsQixDQUFDLENBQUNlLEtBQUssQ0FBQ3VrQixNQUFNLENBQUM7TUFDeEI0VixJQUFJLEdBQUc1VixNQUFNLENBQUNtWCxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQzJELEtBQUssQ0FBQzdMLFFBQVEsQ0FBQzJELFNBQVMsQ0FBQztNQUMxRDVuQixLQUFLLEdBQUcsSUFBSSxDQUFDbXhCLE9BQU8sQ0FBQ3ZHLElBQUksQ0FBQ3o1QixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7TUFDN0NVLEtBQUssR0FBR21PLEtBQUssQ0FBQ25PLEtBQUssSUFBSSxNQUFNO01BQzdCcUQsTUFBTSxHQUFHOEssS0FBSyxDQUFDOUssTUFBTSxJQUFJLElBQUksQ0FBQzQ2QixLQUFLLENBQUN0SCxNQUFNLENBQUN0ekIsTUFBTSxDQUFDLENBQUM7TUFDbkRnUSxJQUFJO0lBRVIsSUFBSSxJQUFJLENBQUNrc0IsUUFBUSxFQUFFO01BQ2Y7SUFDSjtJQUVBLElBQUksQ0FBQ3RCLEtBQUssQ0FBQzlXLEtBQUssQ0FBQyxTQUFTLENBQUM7SUFDM0IsSUFBSSxDQUFDOFcsS0FBSyxDQUFDMzFCLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQztJQUV6Q3l3QixJQUFJLEdBQUcsSUFBSSxDQUFDa0YsS0FBSyxDQUFDanZCLEtBQUssQ0FBQyxJQUFJLENBQUNpdkIsS0FBSyxDQUFDdkgsUUFBUSxDQUFDcUMsSUFBSSxDQUFDdnlCLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUxRCxJQUFJLENBQUN5M0IsS0FBSyxDQUFDN3BCLEtBQUssQ0FBQzJrQixJQUFJLENBQUN2eUIsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUU5QixJQUFJMkgsS0FBSyxDQUFDd0YsSUFBSSxLQUFLLFNBQVMsRUFBRTtNQUMxQk4sSUFBSSxHQUFHLGlCQUFpQixHQUFHclQsS0FBSyxHQUFHLFlBQVksR0FBR3FELE1BQU0sR0FBRyxzQ0FBc0MsR0FDN0Y4SyxLQUFLLENBQUNrYyxFQUFFLEdBQUcsZ0JBQWdCLEdBQUdsYyxLQUFLLENBQUNrYyxFQUFFLEdBQUcsNkNBQTZDO0lBQzlGLENBQUMsTUFBTSxJQUFJbGMsS0FBSyxDQUFDd0YsSUFBSSxLQUFLLE9BQU8sRUFBRTtNQUMvQk4sSUFBSSxHQUFHLDZDQUE2QyxHQUFHbEYsS0FBSyxDQUFDa2MsRUFBRSxHQUMzRCxzQkFBc0IsR0FBR3JxQixLQUFLLEdBQUcsWUFBWSxHQUFHcUQsTUFBTSxHQUN0RCxzRkFBc0Y7SUFDOUY7SUFFQXhGLENBQUMsQ0FBQywrQkFBK0IsR0FBR3dWLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQ2l0QixXQUFXLENBQUN2SCxJQUFJLENBQUM3MUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRXpGLElBQUksQ0FBQ3E4QixRQUFRLEdBQUd4RyxJQUFJLENBQUN4M0IsUUFBUSxDQUFDLG1CQUFtQixDQUFDO0VBQ3RELENBQUM7O0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0k4OUIsS0FBSyxDQUFDM3NCLFNBQVMsQ0FBQzhzQixjQUFjLEdBQUcsWUFBVztJQUN4QyxJQUFJLzRCLE9BQU8sR0FBR25JLFFBQVEsQ0FBQ2lpQyxpQkFBaUIsSUFBSWppQyxRQUFRLENBQUNraUMsb0JBQW9CLElBQ3JFbGlDLFFBQVEsQ0FBQ21pQyx1QkFBdUI7SUFFcEMsT0FBT2g2QixPQUFPLElBQUk1SSxDQUFDLENBQUM0SSxPQUFPLENBQUMsQ0FBQ21CLE1BQU0sQ0FBQyxDQUFDLENBQUMvRyxRQUFRLENBQUMsaUJBQWlCLENBQUM7RUFDckUsQ0FBQzs7RUFFRDtBQUNKO0FBQ0E7RUFDSXcrQixLQUFLLENBQUMzc0IsU0FBUyxDQUFDK0UsT0FBTyxHQUFHLFlBQVc7SUFDakMsSUFBSUQsT0FBTyxFQUFFb2hCLFFBQVE7SUFFckIsSUFBSSxDQUFDcUYsS0FBSyxDQUFDM1gsUUFBUSxDQUFDN2pCLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztJQUUxQyxLQUFLK1UsT0FBTyxJQUFJLElBQUksQ0FBQzhhLFNBQVMsRUFBRTtNQUM1QixJQUFJLENBQUMyTCxLQUFLLENBQUMzWCxRQUFRLENBQUM3akIsR0FBRyxDQUFDK1UsT0FBTyxFQUFFLElBQUksQ0FBQzhhLFNBQVMsQ0FBQzlhLE9BQU8sQ0FBQyxDQUFDO0lBQzdEO0lBQ0EsS0FBS29oQixRQUFRLElBQUkyRixNQUFNLENBQUNDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFFO01BQy9DLE9BQU8sSUFBSSxDQUFDNUYsUUFBUSxDQUFDLElBQUksVUFBVSxLQUFLLElBQUksQ0FBQ0EsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ2xFO0VBQ0osQ0FBQztFQUVELzZCLENBQUMsQ0FBQ3FNLEVBQUUsQ0FBQ3d6QixXQUFXLENBQUNJLFdBQVcsQ0FBQ2xLLE9BQU8sQ0FBQ3lMLEtBQUssR0FBR0EsS0FBSztBQUV0RCxDQUFDLEVBQUVwaEMsTUFBTSxDQUFDOC9CLEtBQUssSUFBSTkvQixvQ0FBYSxFQUFFQSxNQUFNLEVBQUVLLFFBQVEsQ0FBQzs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQyxDQUFDLFVBQVNULENBQUMsRUFBRUksTUFBTSxFQUFFSyxRQUFRLEVBQUU0dEIsU0FBUyxFQUFFO0VBRXZDO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSSxJQUFJd1UsT0FBTyxHQUFHLFNBQUFBLENBQVNDLEtBQUssRUFBRTtJQUMxQixJQUFJLENBQUM5K0IsSUFBSSxHQUFHOCtCLEtBQUs7SUFDakIsSUFBSSxDQUFDOStCLElBQUksQ0FBQzBILE9BQU8sR0FBRzFMLENBQUMsQ0FBQzJ4QixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUVrUixPQUFPLENBQUNyTyxRQUFRLEVBQUUsSUFBSSxDQUFDeHdCLElBQUksQ0FBQzBILE9BQU8sQ0FBQztJQUNyRSxJQUFJLENBQUNxM0IsUUFBUSxHQUFHLElBQUk7SUFDcEIsSUFBSSxDQUFDdEosUUFBUSxHQUFHcEwsU0FBUztJQUN6QixJQUFJLENBQUNwVixJQUFJLEdBQUdvVixTQUFTO0lBRXJCLElBQUksQ0FBQzRTLFFBQVEsR0FBRztNQUNaLHFCQUFxQixFQUFFamhDLENBQUMsQ0FBQzgxQixLQUFLLENBQUMsVUFBU3J2QixDQUFDLEVBQUU7UUFDdkMsSUFBSUEsQ0FBQyxDQUFDKzNCLFNBQVMsSUFBSS8zQixDQUFDLENBQUNzMEIsUUFBUSxDQUFDdjNCLElBQUksSUFBSSxVQUFVLEVBQUU7VUFDOUMsSUFBSSxDQUFDaTJCLFFBQVEsR0FBRyxJQUFJLENBQUN6MUIsSUFBSSxDQUFDMnhCLE9BQU8sQ0FBQyxDQUFDO1VBQ25DLElBQUksQ0FBQzFjLElBQUksR0FBR3hTLENBQUMsQ0FBQ3MwQixRQUFRLENBQUMxeEIsS0FBSztRQUNoQztNQUNKLENBQUMsRUFBRSxJQUFJLENBQUM7TUFDUixnRUFBZ0UsRUFBRXJKLENBQUMsQ0FBQzgxQixLQUFLLENBQUMsVUFBU3J2QixDQUFDLEVBQUU7UUFDbEYsSUFBSUEsQ0FBQyxDQUFDKzNCLFNBQVMsRUFBRTtVQUNiLElBQUksQ0FBQ3VFLFFBQVEsR0FBR3Q4QixDQUFDLENBQUNxUCxJQUFJLElBQUksWUFBWTtRQUMxQztNQUNKLENBQUMsRUFBRSxJQUFJLENBQUM7TUFDUix3QkFBd0IsRUFBRTlWLENBQUMsQ0FBQzgxQixLQUFLLENBQUMsVUFBU3J2QixDQUFDLEVBQUU7UUFDMUMsSUFBSUEsQ0FBQyxDQUFDKzNCLFNBQVMsSUFBSSxJQUFJLENBQUN1RSxRQUFRLEtBQUssSUFBSSxDQUFDLytCLElBQUksQ0FBQzBILE9BQU8sQ0FBQ3MzQixVQUFVLElBQUksSUFBSSxDQUFDaC9CLElBQUksQ0FBQzBILE9BQU8sQ0FBQ3UzQixTQUFTLENBQUMsRUFBRTtVQUMvRixJQUFJLENBQUNDLElBQUksQ0FBQyxDQUFDO1FBQ2Y7TUFDSixDQUFDLEVBQUUsSUFBSTtJQUNYLENBQUM7SUFFRCxJQUFJLENBQUNsL0IsSUFBSSxDQUFDeWtCLFFBQVEsQ0FBQzVqQixFQUFFLENBQUMsSUFBSSxDQUFDbzhCLFFBQVEsQ0FBQztFQUN4QyxDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0VBQ0k0QixPQUFPLENBQUNyTyxRQUFRLEdBQUc7SUFDZndPLFVBQVUsRUFBRSxLQUFLO0lBQ2pCQyxTQUFTLEVBQUU7RUFDZixDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSUosT0FBTyxDQUFDaHVCLFNBQVMsQ0FBQ3F1QixJQUFJLEdBQUcsWUFBVztJQUVoQyxJQUFJLElBQUksQ0FBQ2wvQixJQUFJLENBQUN1d0IsUUFBUSxDQUFDcGpCLEtBQUssS0FBSyxDQUFDLEVBQUU7TUFDaEM7SUFDSjtJQUVBLElBQUksQ0FBQ25SLENBQUMsQ0FBQzI3QixPQUFPLENBQUN4akIsU0FBUyxJQUFJLENBQUNuWSxDQUFDLENBQUMyN0IsT0FBTyxDQUFDQyxVQUFVLEVBQUU7TUFDL0M7SUFDSjtJQUVBLElBQUksQ0FBQzUzQixJQUFJLENBQUMySCxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRWxCLElBQUk5QyxJQUFJO01BQ0pzNkIsS0FBSyxHQUFHbmpDLENBQUMsQ0FBQzgxQixLQUFLLENBQUMsSUFBSSxDQUFDcU4sS0FBSyxFQUFFLElBQUksQ0FBQztNQUNqQzFKLFFBQVEsR0FBRyxJQUFJLENBQUN6MUIsSUFBSSxDQUFDODBCLE1BQU0sQ0FBQ3RrQixRQUFRLENBQUMsQ0FBQyxDQUFDb2xCLEVBQUUsQ0FBQyxJQUFJLENBQUNILFFBQVEsQ0FBQztNQUN4RHhnQixJQUFJLEdBQUcsSUFBSSxDQUFDalYsSUFBSSxDQUFDODBCLE1BQU0sQ0FBQ3RrQixRQUFRLENBQUMsQ0FBQyxDQUFDb2xCLEVBQUUsQ0FBQyxJQUFJLENBQUMzZ0IsSUFBSSxDQUFDO01BQ2hEbXFCLFFBQVEsR0FBRyxJQUFJLENBQUNwL0IsSUFBSSxDQUFDdXdCLFFBQVEsQ0FBQzBPLFNBQVM7TUFDdkNJLFFBQVEsR0FBRyxJQUFJLENBQUNyL0IsSUFBSSxDQUFDdXdCLFFBQVEsQ0FBQ3lPLFVBQVU7SUFFNUMsSUFBSSxJQUFJLENBQUNoL0IsSUFBSSxDQUFDMnhCLE9BQU8sQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDOEQsUUFBUSxFQUFFO01BQ3ZDO0lBQ0o7SUFFQSxJQUFJNEosUUFBUSxFQUFFO01BQ1Z4NkIsSUFBSSxHQUFHLElBQUksQ0FBQzdFLElBQUksQ0FBQzAxQixXQUFXLENBQUMsSUFBSSxDQUFDRCxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUN6MUIsSUFBSSxDQUFDMDFCLFdBQVcsQ0FBQyxJQUFJLENBQUN6Z0IsSUFBSSxDQUFDO01BQzlFd2dCLFFBQVEsQ0FBQzJDLEdBQUcsQ0FBQ3A4QixDQUFDLENBQUMyN0IsT0FBTyxDQUFDeGpCLFNBQVMsQ0FBQ3dNLEdBQUcsRUFBRXdlLEtBQUssQ0FBQyxDQUN2QzErQixHQUFHLENBQUU7UUFBRSxNQUFNLEVBQUVvRSxJQUFJLEdBQUc7TUFBSyxDQUFFLENBQUMsQ0FDOUJuRixRQUFRLENBQUMsMkJBQTJCLENBQUMsQ0FDckNBLFFBQVEsQ0FBQzIvQixRQUFRLENBQUM7SUFDM0I7SUFFQSxJQUFJRCxRQUFRLEVBQUU7TUFDVm5xQixJQUFJLENBQUNtakIsR0FBRyxDQUFDcDhCLENBQUMsQ0FBQzI3QixPQUFPLENBQUN4akIsU0FBUyxDQUFDd00sR0FBRyxFQUFFd2UsS0FBSyxDQUFDLENBQ25Dei9CLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUNwQ0EsUUFBUSxDQUFDMC9CLFFBQVEsQ0FBQztJQUMzQjtFQUNKLENBQUM7RUFFRFAsT0FBTyxDQUFDaHVCLFNBQVMsQ0FBQ3N1QixLQUFLLEdBQUcsVUFBUzE4QixDQUFDLEVBQUU7SUFDbEN6RyxDQUFDLENBQUN5RyxDQUFDLENBQUM2ZSxNQUFNLENBQUMsQ0FBQzdnQixHQUFHLENBQUU7TUFBRSxNQUFNLEVBQUU7SUFBRyxDQUFFLENBQUMsQ0FDNUJaLFdBQVcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUN4REEsV0FBVyxDQUFDLElBQUksQ0FBQ0csSUFBSSxDQUFDdXdCLFFBQVEsQ0FBQzBPLFNBQVMsQ0FBQyxDQUN6Q3AvQixXQUFXLENBQUMsSUFBSSxDQUFDRyxJQUFJLENBQUN1d0IsUUFBUSxDQUFDeU8sVUFBVSxDQUFDO0lBQy9DLElBQUksQ0FBQ2gvQixJQUFJLENBQUM2M0IsZUFBZSxDQUFDLENBQUM7RUFDL0IsQ0FBQzs7RUFFRDtBQUNKO0FBQ0E7QUFDQTtFQUNJZ0gsT0FBTyxDQUFDaHVCLFNBQVMsQ0FBQytFLE9BQU8sR0FBRyxZQUFXO0lBQ25DLElBQUlELE9BQU8sRUFBRW9oQixRQUFRO0lBRXJCLEtBQUtwaEIsT0FBTyxJQUFJLElBQUksQ0FBQ3NuQixRQUFRLEVBQUU7TUFDM0IsSUFBSSxDQUFDajlCLElBQUksQ0FBQ3lrQixRQUFRLENBQUM3akIsR0FBRyxDQUFDK1UsT0FBTyxFQUFFLElBQUksQ0FBQ3NuQixRQUFRLENBQUN0bkIsT0FBTyxDQUFDLENBQUM7SUFDM0Q7SUFDQSxLQUFLb2hCLFFBQVEsSUFBSTJGLE1BQU0sQ0FBQ0MsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUU7TUFDL0MsT0FBTyxJQUFJLENBQUM1RixRQUFRLENBQUMsSUFBSSxVQUFVLEtBQUssSUFBSSxDQUFDQSxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDbEU7RUFDSixDQUFDO0VBRUQvNkIsQ0FBQyxDQUFDcU0sRUFBRSxDQUFDd3pCLFdBQVcsQ0FBQ0ksV0FBVyxDQUFDbEssT0FBTyxDQUFDOE0sT0FBTyxHQUFHQSxPQUFPO0FBRTFELENBQUMsRUFBRXppQyxNQUFNLENBQUM4L0IsS0FBSyxJQUFJOS9CLG9DQUFhLEVBQUVBLE1BQU0sRUFBRUssUUFBUSxDQUFDOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUMsQ0FBQyxVQUFTVCxDQUFDLEVBQUVJLE1BQU0sRUFBRUssUUFBUSxFQUFFNHRCLFNBQVMsRUFBRTtFQUV2QztBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0ksSUFBSWlWLFFBQVEsR0FBRyxTQUFBQSxDQUFTbDNCLFFBQVEsRUFBRTtJQUM5QjtBQUNSO0FBQ0E7QUFDQTtBQUNBO0lBQ1EsSUFBSSxDQUFDZzBCLEtBQUssR0FBR2gwQixRQUFROztJQUVyQjtBQUNSO0FBQ0E7QUFDQTtJQUNRLElBQUksQ0FBQ2kwQixTQUFTLEdBQUcsSUFBSTs7SUFFckI7QUFDUjtBQUNBO0FBQ0E7SUFDUSxJQUFJLENBQUNrRCxPQUFPLEdBQUcsS0FBSzs7SUFFcEI7QUFDUjtBQUNBO0FBQ0E7QUFDQTtJQUNRLElBQUksQ0FBQzlPLFNBQVMsR0FBRztNQUNiLHNCQUFzQixFQUFFejBCLENBQUMsQ0FBQzgxQixLQUFLLENBQUMsVUFBU3J2QixDQUFDLEVBQUU7UUFDeEMsSUFBSUEsQ0FBQyxDQUFDKzNCLFNBQVMsSUFBSS8zQixDQUFDLENBQUNzMEIsUUFBUSxDQUFDdjNCLElBQUksS0FBSyxVQUFVLEVBQUU7VUFDL0MsSUFBSSxJQUFJLENBQUM0OEIsS0FBSyxDQUFDN0wsUUFBUSxDQUFDM1AsUUFBUSxFQUFFO1lBQzlCLElBQUksQ0FBQzNULElBQUksQ0FBQyxDQUFDO1VBQ2YsQ0FBQyxNQUFNO1lBQ0gsSUFBSSxDQUFDbk0sSUFBSSxDQUFDLENBQUM7VUFDZjtRQUNKO01BQ0osQ0FBQyxFQUFFLElBQUksQ0FBQztNQUNSLDBCQUEwQixFQUFFOUUsQ0FBQyxDQUFDODFCLEtBQUssQ0FBQyxVQUFTcnZCLENBQUMsRUFBRTtRQUM1QyxJQUFJQSxDQUFDLENBQUMrM0IsU0FBUyxJQUFJLElBQUksQ0FBQzRCLEtBQUssQ0FBQzdMLFFBQVEsQ0FBQzNQLFFBQVEsRUFBRTtVQUM3QyxJQUFJLENBQUMzVCxJQUFJLENBQUMsQ0FBQztRQUNmO01BQ0osQ0FBQyxFQUFFLElBQUksQ0FBQztNQUNSLG1CQUFtQixFQUFFalIsQ0FBQyxDQUFDODFCLEtBQUssQ0FBQyxVQUFTcnZCLENBQUMsRUFBRXVHLENBQUMsRUFBRXNpQixDQUFDLEVBQUU7UUFDM0MsSUFBSTdvQixDQUFDLENBQUMrM0IsU0FBUyxFQUFFO1VBQ2IsSUFBSSxDQUFDdnRCLElBQUksQ0FBQ2pFLENBQUMsRUFBRXNpQixDQUFDLENBQUM7UUFDbkI7TUFDSixDQUFDLEVBQUUsSUFBSSxDQUFDO01BQ1IsbUJBQW1CLEVBQUV0dkIsQ0FBQyxDQUFDODFCLEtBQUssQ0FBQyxVQUFTcnZCLENBQUMsRUFBRTtRQUNyQyxJQUFJQSxDQUFDLENBQUMrM0IsU0FBUyxFQUFFO1VBQ2IsSUFBSSxDQUFDMTVCLElBQUksQ0FBQyxDQUFDO1FBQ2Y7TUFDSixDQUFDLEVBQUUsSUFBSSxDQUFDO01BQ1Isd0JBQXdCLEVBQUU5RSxDQUFDLENBQUM4MUIsS0FBSyxDQUFDLFlBQVc7UUFDekMsSUFBSSxJQUFJLENBQUNzSyxLQUFLLENBQUM3TCxRQUFRLENBQUNpUCxrQkFBa0IsSUFBSSxJQUFJLENBQUNwRCxLQUFLLENBQUMxM0IsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1VBQ3JFLElBQUksQ0FBQ3VILEtBQUssQ0FBQyxDQUFDO1FBQ2hCO01BQ0osQ0FBQyxFQUFFLElBQUksQ0FBQztNQUNSLHlCQUF5QixFQUFFalEsQ0FBQyxDQUFDODFCLEtBQUssQ0FBQyxZQUFXO1FBQzFDLElBQUksSUFBSSxDQUFDc0ssS0FBSyxDQUFDN0wsUUFBUSxDQUFDaVAsa0JBQWtCLElBQUksSUFBSSxDQUFDcEQsS0FBSyxDQUFDMTNCLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRTtVQUNyRSxJQUFJLENBQUN1SSxJQUFJLENBQUMsQ0FBQztRQUNmO01BQ0osQ0FBQyxFQUFFLElBQUk7SUFDWCxDQUFDOztJQUVEO0lBQ0EsSUFBSSxDQUFDbXZCLEtBQUssQ0FBQzNYLFFBQVEsQ0FBQzVqQixFQUFFLENBQUMsSUFBSSxDQUFDNHZCLFNBQVMsQ0FBQzs7SUFFdEM7SUFDQSxJQUFJLENBQUMyTCxLQUFLLENBQUMxMEIsT0FBTyxHQUFHMUwsQ0FBQyxDQUFDMnhCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTJSLFFBQVEsQ0FBQzlPLFFBQVEsRUFBRSxJQUFJLENBQUM0TCxLQUFLLENBQUMxMEIsT0FBTyxDQUFDO0VBQzVFLENBQUM7O0VBRUQ7QUFDSjtBQUNBO0FBQ0E7RUFDSTQzQixRQUFRLENBQUM5TyxRQUFRLEdBQUc7SUFDaEI1UCxRQUFRLEVBQUUsS0FBSztJQUNmNmUsZUFBZSxFQUFFLElBQUk7SUFDckJELGtCQUFrQixFQUFFLEtBQUs7SUFDekJFLGFBQWEsRUFBRTtFQUNuQixDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJSixRQUFRLENBQUN6dUIsU0FBUyxDQUFDNUQsSUFBSSxHQUFHLFVBQVNpWCxPQUFPLEVBQUV2YyxLQUFLLEVBQUU7SUFDL0MsSUFBSSxDQUFDNDNCLE9BQU8sR0FBRyxLQUFLO0lBRXBCLElBQUksSUFBSSxDQUFDbkQsS0FBSyxDQUFDMTNCLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRTtNQUMzQjtJQUNKO0lBRUEsSUFBSSxDQUFDMDNCLEtBQUssQ0FBQzlXLEtBQUssQ0FBQyxVQUFVLENBQUM7SUFFNUIsSUFBSSxDQUFDK1csU0FBUyxHQUFHamdDLE1BQU0sQ0FBQ3FxQixXQUFXLENBQUN6cUIsQ0FBQyxDQUFDODFCLEtBQUssQ0FBQyxZQUFXO01BQ25ELElBQUksSUFBSSxDQUFDeU4sT0FBTyxJQUFJLElBQUksQ0FBQ25ELEtBQUssQ0FBQzEzQixFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDMDNCLEtBQUssQ0FBQzEzQixFQUFFLENBQUMsYUFBYSxDQUFDLElBQUlqSSxRQUFRLENBQUNrakMsTUFBTSxFQUFFO1FBQzFGO01BQ0o7TUFDQSxJQUFJLENBQUN2RCxLQUFLLENBQUNubkIsSUFBSSxDQUFDdE4sS0FBSyxJQUFJLElBQUksQ0FBQ3kwQixLQUFLLENBQUM3TCxRQUFRLENBQUNtUCxhQUFhLENBQUM7SUFDL0QsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFeGIsT0FBTyxJQUFJLElBQUksQ0FBQ2tZLEtBQUssQ0FBQzdMLFFBQVEsQ0FBQ2tQLGVBQWUsQ0FBQztFQUM3RCxDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0VBQ0lILFFBQVEsQ0FBQ3p1QixTQUFTLENBQUMvUCxJQUFJLEdBQUcsWUFBVztJQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDczdCLEtBQUssQ0FBQzEzQixFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUU7TUFDNUI7SUFDSjtJQUVBdEksTUFBTSxDQUFDc3FCLGFBQWEsQ0FBQyxJQUFJLENBQUMyVixTQUFTLENBQUM7SUFDcEMsSUFBSSxDQUFDRCxLQUFLLENBQUN6RixLQUFLLENBQUMsVUFBVSxDQUFDO0VBQ2hDLENBQUM7O0VBRUQ7QUFDSjtBQUNBO0FBQ0E7RUFDSTJJLFFBQVEsQ0FBQ3p1QixTQUFTLENBQUM1RSxLQUFLLEdBQUcsWUFBVztJQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDbXdCLEtBQUssQ0FBQzEzQixFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUU7TUFDNUI7SUFDSjtJQUVBLElBQUksQ0FBQzY2QixPQUFPLEdBQUcsSUFBSTtFQUN2QixDQUFDOztFQUVEO0FBQ0o7QUFDQTtFQUNJRCxRQUFRLENBQUN6dUIsU0FBUyxDQUFDK0UsT0FBTyxHQUFHLFlBQVc7SUFDcEMsSUFBSUQsT0FBTyxFQUFFb2hCLFFBQVE7SUFFckIsSUFBSSxDQUFDajJCLElBQUksQ0FBQyxDQUFDO0lBRVgsS0FBSzZVLE9BQU8sSUFBSSxJQUFJLENBQUM4YSxTQUFTLEVBQUU7TUFDNUIsSUFBSSxDQUFDMkwsS0FBSyxDQUFDM1gsUUFBUSxDQUFDN2pCLEdBQUcsQ0FBQytVLE9BQU8sRUFBRSxJQUFJLENBQUM4YSxTQUFTLENBQUM5YSxPQUFPLENBQUMsQ0FBQztJQUM3RDtJQUNBLEtBQUtvaEIsUUFBUSxJQUFJMkYsTUFBTSxDQUFDQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBRTtNQUMvQyxPQUFPLElBQUksQ0FBQzVGLFFBQVEsQ0FBQyxJQUFJLFVBQVUsS0FBSyxJQUFJLENBQUNBLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNsRTtFQUNKLENBQUM7RUFFRC82QixDQUFDLENBQUNxTSxFQUFFLENBQUN3ekIsV0FBVyxDQUFDSSxXQUFXLENBQUNsSyxPQUFPLENBQUNuUixRQUFRLEdBQUcwZSxRQUFRO0FBRTVELENBQUMsRUFBRWxqQyxNQUFNLENBQUM4L0IsS0FBSyxJQUFJOS9CLG9DQUFhLEVBQUVBLE1BQU0sRUFBRUssUUFBUSxDQUFDOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFDLENBQUMsVUFBU1QsQ0FBQyxFQUFFSSxNQUFNLEVBQUVLLFFBQVEsRUFBRTR0QixTQUFTLEVBQUU7RUFDdkMsWUFBWTs7RUFFWjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0ksSUFBSXVWLFVBQVUsR0FBRyxTQUFBQSxDQUFTeDNCLFFBQVEsRUFBRTtJQUNoQztBQUNSO0FBQ0E7QUFDQTtBQUNBO0lBQ1EsSUFBSSxDQUFDZzBCLEtBQUssR0FBR2gwQixRQUFROztJQUVyQjtBQUNSO0FBQ0E7QUFDQTtBQUNBO0lBQ1EsSUFBSSxDQUFDeTNCLFlBQVksR0FBRyxLQUFLOztJQUV6QjtBQUNSO0FBQ0E7QUFDQTtBQUNBO0lBQ1EsSUFBSSxDQUFDQyxNQUFNLEdBQUcsRUFBRTs7SUFFaEI7QUFDUjtBQUNBO0FBQ0E7QUFDQTtJQUNRLElBQUksQ0FBQ0MsU0FBUyxHQUFHLENBQUMsQ0FBQzs7SUFFbkI7QUFDUjtBQUNBO0FBQ0E7QUFDQTtJQUNRLElBQUksQ0FBQ0MsVUFBVSxHQUFHLEVBQUU7O0lBRXBCO0FBQ1I7QUFDQTtBQUNBO0lBQ1EsSUFBSSxDQUFDdmIsUUFBUSxHQUFHLElBQUksQ0FBQzJYLEtBQUssQ0FBQzNYLFFBQVE7O0lBRW5DO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7SUFDUSxJQUFJLENBQUN3YixVQUFVLEdBQUc7TUFDZGhyQixJQUFJLEVBQUUsSUFBSSxDQUFDbW5CLEtBQUssQ0FBQ25uQixJQUFJO01BQ3JCcWtCLElBQUksRUFBRSxJQUFJLENBQUM4QyxLQUFLLENBQUM5QyxJQUFJO01BQ3JCdjVCLEVBQUUsRUFBRSxJQUFJLENBQUNxOEIsS0FBSyxDQUFDcjhCO0lBQ25CLENBQUM7O0lBRUQ7QUFDUjtBQUNBO0FBQ0E7QUFDQTtJQUNRLElBQUksQ0FBQzB3QixTQUFTLEdBQUc7TUFDYix1QkFBdUIsRUFBRXowQixDQUFDLENBQUM4MUIsS0FBSyxDQUFDLFVBQVNydkIsQ0FBQyxFQUFFO1FBQ3pDLElBQUlBLENBQUMsQ0FBQyszQixTQUFTLElBQUksSUFBSSxDQUFDNEIsS0FBSyxDQUFDN0wsUUFBUSxDQUFDMlAsUUFBUSxFQUFFO1VBQzdDLElBQUksQ0FBQ0YsVUFBVSxDQUFDOVQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUNrUSxLQUFLLENBQUM3TCxRQUFRLENBQUM0UCxRQUFRLEdBQUcsSUFBSSxHQUNyRW5rQyxDQUFDLENBQUN5RyxDQUFDLENBQUNxWSxPQUFPLENBQUMsQ0FBQ3paLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQ3U0QixPQUFPLENBQUMsWUFBWSxDQUFDLENBQUNuOEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUMxRjtNQUNKLENBQUMsRUFBRSxJQUFJLENBQUM7TUFDUixvQkFBb0IsRUFBRXpCLENBQUMsQ0FBQzgxQixLQUFLLENBQUMsVUFBU3J2QixDQUFDLEVBQUU7UUFDdEMsSUFBSUEsQ0FBQyxDQUFDKzNCLFNBQVMsSUFBSSxJQUFJLENBQUM0QixLQUFLLENBQUM3TCxRQUFRLENBQUMyUCxRQUFRLEVBQUU7VUFDN0MsSUFBSSxDQUFDRixVQUFVLENBQUNuRyxNQUFNLENBQUNwM0IsQ0FBQyxDQUFDbVksUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUNvbEIsVUFBVSxDQUFDSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hFO01BQ0osQ0FBQyxFQUFFLElBQUksQ0FBQztNQUNSLHFCQUFxQixFQUFFcGtDLENBQUMsQ0FBQzgxQixLQUFLLENBQUMsVUFBU3J2QixDQUFDLEVBQUU7UUFDdkMsSUFBSUEsQ0FBQyxDQUFDKzNCLFNBQVMsSUFBSSxJQUFJLENBQUM0QixLQUFLLENBQUM3TCxRQUFRLENBQUMyUCxRQUFRLEVBQUU7VUFDN0MsSUFBSSxDQUFDRixVQUFVLENBQUNuRyxNQUFNLENBQUNwM0IsQ0FBQyxDQUFDbVksUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN6QztNQUNKLENBQUMsRUFBRSxJQUFJLENBQUM7TUFDUixzQkFBc0IsRUFBRTVlLENBQUMsQ0FBQzgxQixLQUFLLENBQUMsVUFBU3J2QixDQUFDLEVBQUU7UUFDeEMsSUFBSUEsQ0FBQyxDQUFDKzNCLFNBQVMsSUFBSS8zQixDQUFDLENBQUNzMEIsUUFBUSxDQUFDdjNCLElBQUksSUFBSSxVQUFVLEVBQUU7VUFDOUMsSUFBSSxDQUFDNmdDLElBQUksQ0FBQyxDQUFDO1FBQ2Y7TUFDSixDQUFDLEVBQUUsSUFBSSxDQUFDO01BQ1IsMEJBQTBCLEVBQUVya0MsQ0FBQyxDQUFDODFCLEtBQUssQ0FBQyxVQUFTcnZCLENBQUMsRUFBRTtRQUM1QyxJQUFJQSxDQUFDLENBQUMrM0IsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDcUYsWUFBWSxFQUFFO1VBQ25DLElBQUksQ0FBQ3pELEtBQUssQ0FBQzMxQixPQUFPLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLENBQUM7VUFDcEQsSUFBSSxDQUFDOHJCLFVBQVUsQ0FBQyxDQUFDO1VBQ2pCLElBQUksQ0FBQzRFLE1BQU0sQ0FBQyxDQUFDO1VBQ2IsSUFBSSxDQUFDa0osSUFBSSxDQUFDLENBQUM7VUFDWCxJQUFJLENBQUNSLFlBQVksR0FBRyxJQUFJO1VBQ3hCLElBQUksQ0FBQ3pELEtBQUssQ0FBQzMxQixPQUFPLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxZQUFZLENBQUM7UUFDekQ7TUFDSixDQUFDLEVBQUUsSUFBSSxDQUFDO01BQ1Isd0JBQXdCLEVBQUV6SyxDQUFDLENBQUM4MUIsS0FBSyxDQUFDLFVBQVNydkIsQ0FBQyxFQUFFO1FBQzFDLElBQUlBLENBQUMsQ0FBQyszQixTQUFTLElBQUksSUFBSSxDQUFDcUYsWUFBWSxFQUFFO1VBQ2xDLElBQUksQ0FBQ3pELEtBQUssQ0FBQzMxQixPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxZQUFZLENBQUM7VUFDakQsSUFBSSxDQUFDMHdCLE1BQU0sQ0FBQyxDQUFDO1VBQ2IsSUFBSSxDQUFDa0osSUFBSSxDQUFDLENBQUM7VUFDWCxJQUFJLENBQUNqRSxLQUFLLENBQUMzMUIsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsWUFBWSxDQUFDO1FBQ3ZEO01BQ0osQ0FBQyxFQUFFLElBQUk7SUFDWCxDQUFDOztJQUVEO0lBQ0EsSUFBSSxDQUFDMjFCLEtBQUssQ0FBQzEwQixPQUFPLEdBQUcxTCxDQUFDLENBQUMyeEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFaVMsVUFBVSxDQUFDcFAsUUFBUSxFQUFFLElBQUksQ0FBQzRMLEtBQUssQ0FBQzEwQixPQUFPLENBQUM7O0lBRTFFO0lBQ0EsSUFBSSxDQUFDK2MsUUFBUSxDQUFDNWpCLEVBQUUsQ0FBQyxJQUFJLENBQUM0dkIsU0FBUyxDQUFDO0VBQ3BDLENBQUM7O0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJbVAsVUFBVSxDQUFDcFAsUUFBUSxHQUFHO0lBQ2xCOFAsR0FBRyxFQUFFLEtBQUs7SUFDVkMsT0FBTyxFQUFFLENBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBRTtJQUMzQkMsUUFBUSxFQUFFLEtBQUs7SUFDZkMsVUFBVSxFQUFFLEtBQUs7SUFDakJDLFlBQVksRUFBRSxLQUFLO0lBQ25CQyxpQkFBaUIsRUFBRSxTQUFTO0lBQzVCQyxRQUFRLEVBQUUsQ0FBRSxVQUFVLEVBQUUsVUFBVSxDQUFFO0lBQ3BDQyxPQUFPLEVBQUUsQ0FBQztJQUNWVixRQUFRLEVBQUUsU0FBUztJQUNuQlcsU0FBUyxFQUFFLFVBQVU7SUFDckJDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLFFBQVEsRUFBRSxLQUFLO0lBQ2ZkLFFBQVEsRUFBRSxLQUFLO0lBQ2ZlLFNBQVMsRUFBRSxLQUFLO0lBQ2hCQyxhQUFhLEVBQUU7RUFDbkIsQ0FBQzs7RUFFRDtBQUNKO0FBQ0E7QUFDQTtFQUNJdEIsVUFBVSxDQUFDL3VCLFNBQVMsQ0FBQzBoQixVQUFVLEdBQUcsWUFBVztJQUN6QyxJQUFJNE8sUUFBUTtNQUNSNVEsUUFBUSxHQUFHLElBQUksQ0FBQzZMLEtBQUssQ0FBQzdMLFFBQVE7O0lBRWxDO0lBQ0EsSUFBSSxDQUFDd1AsU0FBUyxDQUFDcUIsU0FBUyxHQUFHLENBQUM3USxRQUFRLENBQUNtUSxZQUFZLEdBQUcxa0MsQ0FBQyxDQUFDdTBCLFFBQVEsQ0FBQ21RLFlBQVksQ0FBQyxHQUN0RTFrQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMwRCxRQUFRLENBQUM2d0IsUUFBUSxDQUFDb1EsaUJBQWlCLENBQUMsQ0FBQ3BMLFFBQVEsQ0FBQyxJQUFJLENBQUM5USxRQUFRLENBQUMsRUFBRS9rQixRQUFRLENBQUMsVUFBVSxDQUFDO0lBRW5HLElBQUksQ0FBQ3FnQyxTQUFTLENBQUNzQixTQUFTLEdBQUdybEMsQ0FBQyxDQUFDLEdBQUcsR0FBR3UwQixRQUFRLENBQUNrUSxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQ3hEL2dDLFFBQVEsQ0FBQzZ3QixRQUFRLENBQUNxUSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDOUJwdkIsSUFBSSxDQUFDK2UsUUFBUSxDQUFDZ1EsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3pCL0ssU0FBUyxDQUFDLElBQUksQ0FBQ3VLLFNBQVMsQ0FBQ3FCLFNBQVMsQ0FBQyxDQUNuQ3ZnQyxFQUFFLENBQUMsT0FBTyxFQUFFN0UsQ0FBQyxDQUFDODFCLEtBQUssQ0FBQyxVQUFTcnZCLENBQUMsRUFBRTtNQUM3QixJQUFJLENBQUM2MkIsSUFBSSxDQUFDL0ksUUFBUSxDQUFDaVEsUUFBUSxDQUFDO0lBQ2hDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLElBQUksQ0FBQ1QsU0FBUyxDQUFDdUIsS0FBSyxHQUFHdGxDLENBQUMsQ0FBQyxHQUFHLEdBQUd1MEIsUUFBUSxDQUFDa1EsVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUNwRC9nQyxRQUFRLENBQUM2d0IsUUFBUSxDQUFDcVEsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQzlCcHZCLElBQUksQ0FBQytlLFFBQVEsQ0FBQ2dRLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUN6QmhMLFFBQVEsQ0FBQyxJQUFJLENBQUN3SyxTQUFTLENBQUNxQixTQUFTLENBQUMsQ0FDbEN2Z0MsRUFBRSxDQUFDLE9BQU8sRUFBRTdFLENBQUMsQ0FBQzgxQixLQUFLLENBQUMsVUFBU3J2QixDQUFDLEVBQUU7TUFDN0IsSUFBSSxDQUFDd1MsSUFBSSxDQUFDc2IsUUFBUSxDQUFDaVEsUUFBUSxDQUFDO0lBQ2hDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzs7SUFFYjtJQUNBLElBQUksQ0FBQ2pRLFFBQVEsQ0FBQzJQLFFBQVEsRUFBRTtNQUNwQixJQUFJLENBQUNGLFVBQVUsR0FBRyxDQUFFaGtDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FDekIwRCxRQUFRLENBQUM2d0IsUUFBUSxDQUFDNFAsUUFBUSxDQUFDLENBQzNCMW9CLE1BQU0sQ0FBQ3piLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUNuQm9aLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBRTtJQUM1QjtJQUVBLElBQUksQ0FBQzJxQixTQUFTLENBQUN3QixTQUFTLEdBQUcsQ0FBQ2hSLFFBQVEsQ0FBQzJRLGFBQWEsR0FBR2xsQyxDQUFDLENBQUN1MEIsUUFBUSxDQUFDMlEsYUFBYSxDQUFDLEdBQ3hFbGxDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQzBELFFBQVEsQ0FBQzZ3QixRQUFRLENBQUN1USxTQUFTLENBQUMsQ0FBQ3ZMLFFBQVEsQ0FBQyxJQUFJLENBQUM5USxRQUFRLENBQUMsRUFBRS9rQixRQUFRLENBQUMsVUFBVSxDQUFDO0lBRTNGLElBQUksQ0FBQ3FnQyxTQUFTLENBQUN3QixTQUFTLENBQUMxZ0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUU3RSxDQUFDLENBQUM4MUIsS0FBSyxDQUFDLFVBQVNydkIsQ0FBQyxFQUFFO01BQzVELElBQUlrQyxLQUFLLEdBQUczSSxDQUFDLENBQUN5RyxDQUFDLENBQUM2ZSxNQUFNLENBQUMsQ0FBQ3ZiLE1BQU0sQ0FBQyxDQUFDLENBQUNyQixFQUFFLENBQUMsSUFBSSxDQUFDcTdCLFNBQVMsQ0FBQ3dCLFNBQVMsQ0FBQyxHQUN2RHZsQyxDQUFDLENBQUN5RyxDQUFDLENBQUM2ZSxNQUFNLENBQUMsQ0FBQzNjLEtBQUssQ0FBQyxDQUFDLEdBQUczSSxDQUFDLENBQUN5RyxDQUFDLENBQUM2ZSxNQUFNLENBQUMsQ0FBQ3ZiLE1BQU0sQ0FBQyxDQUFDLENBQUNwQixLQUFLLENBQUMsQ0FBQztNQUV4RGxDLENBQUMsQ0FBQ29ELGNBQWMsQ0FBQyxDQUFDO01BRWxCLElBQUksQ0FBQzlGLEVBQUUsQ0FBQzRFLEtBQUssRUFBRTRyQixRQUFRLENBQUMwUSxTQUFTLENBQUM7SUFDdEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDOztJQUVUO0lBQ0EsS0FBS0UsUUFBUSxJQUFJLElBQUksQ0FBQ2xCLFVBQVUsRUFBRTtNQUM5QixJQUFJLENBQUM3RCxLQUFLLENBQUMrRSxRQUFRLENBQUMsR0FBR25sQyxDQUFDLENBQUM4MUIsS0FBSyxDQUFDLElBQUksQ0FBQ3FQLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQztJQUN4RDtFQUNKLENBQUM7O0VBRUQ7QUFDSjtBQUNBO0FBQ0E7RUFDSXZCLFVBQVUsQ0FBQy91QixTQUFTLENBQUMrRSxPQUFPLEdBQUcsWUFBVztJQUN0QyxJQUFJRCxPQUFPLEVBQUU2ckIsT0FBTyxFQUFFekssUUFBUSxFQUFFb0ssUUFBUTtJQUV4QyxLQUFLeHJCLE9BQU8sSUFBSSxJQUFJLENBQUM4YSxTQUFTLEVBQUU7TUFDNUIsSUFBSSxDQUFDaE0sUUFBUSxDQUFDN2pCLEdBQUcsQ0FBQytVLE9BQU8sRUFBRSxJQUFJLENBQUM4YSxTQUFTLENBQUM5YSxPQUFPLENBQUMsQ0FBQztJQUN2RDtJQUNBLEtBQUs2ckIsT0FBTyxJQUFJLElBQUksQ0FBQ3pCLFNBQVMsRUFBRTtNQUM1QixJQUFJLENBQUNBLFNBQVMsQ0FBQ3lCLE9BQU8sQ0FBQyxDQUFDditCLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDO0lBQ0EsS0FBS2srQixRQUFRLElBQUksSUFBSSxDQUFDTSxRQUFRLEVBQUU7TUFDNUIsSUFBSSxDQUFDckYsS0FBSyxDQUFDK0UsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDbEIsVUFBVSxDQUFDa0IsUUFBUSxDQUFDO0lBQ3BEO0lBQ0EsS0FBS3BLLFFBQVEsSUFBSTJGLE1BQU0sQ0FBQ0MsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUU7TUFDL0MsT0FBTyxJQUFJLENBQUM1RixRQUFRLENBQUMsSUFBSSxVQUFVLEtBQUssSUFBSSxDQUFDQSxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDbEU7RUFDSixDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0VBQ0k2SSxVQUFVLENBQUMvdUIsU0FBUyxDQUFDc21CLE1BQU0sR0FBRyxZQUFXO0lBQ3JDLElBQUk5cUIsQ0FBQztNQUFFNmlCLENBQUM7TUFBRWpCLENBQUM7TUFDUHlULEtBQUssR0FBRyxJQUFJLENBQUN0RixLQUFLLENBQUNsSCxNQUFNLENBQUMsQ0FBQyxDQUFDOTJCLE1BQU0sR0FBRyxDQUFDO01BQ3RDdWpDLEtBQUssR0FBR0QsS0FBSyxHQUFHLElBQUksQ0FBQ3RGLEtBQUssQ0FBQ2p2QixLQUFLLENBQUMsQ0FBQyxDQUFDL08sTUFBTTtNQUN6QzAzQixPQUFPLEdBQUcsSUFBSSxDQUFDc0csS0FBSyxDQUFDdEcsT0FBTyxDQUFDLElBQUksQ0FBQztNQUNsQ3ZGLFFBQVEsR0FBRyxJQUFJLENBQUM2TCxLQUFLLENBQUM3TCxRQUFRO01BQzlCeFgsSUFBSSxHQUFHd1gsUUFBUSxDQUFDdFcsTUFBTSxJQUFJc1csUUFBUSxDQUFDN2lCLFNBQVMsSUFBSTZpQixRQUFRLENBQUMyUCxRQUFRLEdBQzNELENBQUMsR0FBRzNQLFFBQVEsQ0FBQ3lRLFFBQVEsSUFBSXpRLFFBQVEsQ0FBQ3BqQixLQUFLO0lBRWpELElBQUlvakIsUUFBUSxDQUFDc1EsT0FBTyxLQUFLLE1BQU0sRUFBRTtNQUM3QnRRLFFBQVEsQ0FBQ3NRLE9BQU8sR0FBR2p6QixJQUFJLENBQUNDLEdBQUcsQ0FBQzBpQixRQUFRLENBQUNzUSxPQUFPLEVBQUV0USxRQUFRLENBQUNwakIsS0FBSyxDQUFDO0lBQ2pFO0lBRUEsSUFBSW9qQixRQUFRLENBQUN3USxJQUFJLElBQUl4USxRQUFRLENBQUNzUSxPQUFPLElBQUksTUFBTSxFQUFFO01BQzdDLElBQUksQ0FBQ2YsTUFBTSxHQUFHLEVBQUU7TUFFaEIsS0FBS3p6QixDQUFDLEdBQUdxMUIsS0FBSyxFQUFFeFMsQ0FBQyxHQUFHLENBQUMsRUFBRWpCLENBQUMsR0FBRyxDQUFDLEVBQUU1aEIsQ0FBQyxHQUFHczFCLEtBQUssRUFBRXQxQixDQUFDLEVBQUUsRUFBRTtRQUMxQyxJQUFJNmlCLENBQUMsSUFBSW5XLElBQUksSUFBSW1XLENBQUMsS0FBSyxDQUFDLEVBQUU7VUFDdEIsSUFBSSxDQUFDNFEsTUFBTSxDQUFDNVQsSUFBSSxDQUFDO1lBQ2JobUIsS0FBSyxFQUFFMEgsSUFBSSxDQUFDQyxHQUFHLENBQUNpb0IsT0FBTyxFQUFFenBCLENBQUMsR0FBR3ExQixLQUFLLENBQUM7WUFDbkMvZ0IsR0FBRyxFQUFFdFUsQ0FBQyxHQUFHcTFCLEtBQUssR0FBRzNvQixJQUFJLEdBQUc7VUFDNUIsQ0FBQyxDQUFDO1VBQ0YsSUFBSW5MLElBQUksQ0FBQ0MsR0FBRyxDQUFDaW9CLE9BQU8sRUFBRXpwQixDQUFDLEdBQUdxMUIsS0FBSyxDQUFDLEtBQUs1TCxPQUFPLEVBQUU7WUFDMUM7VUFDSjtVQUNBNUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFakIsQ0FBQztRQUNkO1FBQ0FpQixDQUFDLElBQUksSUFBSSxDQUFDa04sS0FBSyxDQUFDcEQsT0FBTyxDQUFDLElBQUksQ0FBQ29ELEtBQUssQ0FBQ3ZILFFBQVEsQ0FBQ3hvQixDQUFDLENBQUMsQ0FBQztNQUNuRDtJQUNKO0VBQ0osQ0FBQzs7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0l1ekIsVUFBVSxDQUFDL3VCLFNBQVMsQ0FBQ3d2QixJQUFJLEdBQUcsWUFBVztJQUNuQyxJQUFJL0gsVUFBVTtNQUNWL0gsUUFBUSxHQUFHLElBQUksQ0FBQzZMLEtBQUssQ0FBQzdMLFFBQVE7TUFDOUJxUixRQUFRLEdBQUcsSUFBSSxDQUFDeEYsS0FBSyxDQUFDanZCLEtBQUssQ0FBQyxDQUFDLENBQUMvTyxNQUFNLElBQUlteUIsUUFBUSxDQUFDcGpCLEtBQUs7TUFDdER4SSxLQUFLLEdBQUcsSUFBSSxDQUFDeTNCLEtBQUssQ0FBQ3ZILFFBQVEsQ0FBQyxJQUFJLENBQUN1SCxLQUFLLENBQUN6SyxPQUFPLENBQUMsQ0FBQyxDQUFDO01BQ2pEMVIsSUFBSSxHQUFHc1EsUUFBUSxDQUFDdFEsSUFBSSxJQUFJc1EsUUFBUSxDQUFDaUMsTUFBTTtJQUUzQyxJQUFJLENBQUN1TixTQUFTLENBQUNxQixTQUFTLENBQUM3NkIsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDZ3FCLFFBQVEsQ0FBQytQLEdBQUcsSUFBSXNCLFFBQVEsQ0FBQztJQUUzRSxJQUFJclIsUUFBUSxDQUFDK1AsR0FBRyxFQUFFO01BQ2QsSUFBSSxDQUFDUCxTQUFTLENBQUNzQixTQUFTLENBQUM5NkIsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDMFosSUFBSSxJQUFJdGIsS0FBSyxJQUFJLElBQUksQ0FBQ3kzQixLQUFLLENBQUN2RyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7TUFDNUYsSUFBSSxDQUFDa0ssU0FBUyxDQUFDdUIsS0FBSyxDQUFDLzZCLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQzBaLElBQUksSUFBSXRiLEtBQUssSUFBSSxJQUFJLENBQUN5M0IsS0FBSyxDQUFDdEcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVGO0lBRUEsSUFBSSxDQUFDaUssU0FBUyxDQUFDd0IsU0FBUyxDQUFDaDdCLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQ2dxQixRQUFRLENBQUN3USxJQUFJLElBQUlhLFFBQVEsQ0FBQztJQUU1RSxJQUFJclIsUUFBUSxDQUFDd1EsSUFBSSxFQUFFO01BQ2Z6SSxVQUFVLEdBQUcsSUFBSSxDQUFDd0gsTUFBTSxDQUFDMWhDLE1BQU0sR0FBRyxJQUFJLENBQUMyaEMsU0FBUyxDQUFDd0IsU0FBUyxDQUFDL3dCLFFBQVEsQ0FBQyxDQUFDLENBQUNwUyxNQUFNO01BRTVFLElBQUlteUIsUUFBUSxDQUFDMlAsUUFBUSxJQUFJNUgsVUFBVSxLQUFLLENBQUMsRUFBRTtRQUN2QyxJQUFJLENBQUN5SCxTQUFTLENBQUN3QixTQUFTLENBQUMvdkIsSUFBSSxDQUFDLElBQUksQ0FBQ3d1QixVQUFVLENBQUN2USxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7TUFDM0QsQ0FBQyxNQUFNLElBQUk2SSxVQUFVLEdBQUcsQ0FBQyxFQUFFO1FBQ3ZCLElBQUksQ0FBQ3lILFNBQVMsQ0FBQ3dCLFNBQVMsQ0FBQzlwQixNQUFNLENBQUMsSUFBSTdHLEtBQUssQ0FBQzBuQixVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM3SSxJQUFJLENBQUMsSUFBSSxDQUFDdVEsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDdkYsQ0FBQyxNQUFNLElBQUkxSCxVQUFVLEdBQUcsQ0FBQyxFQUFFO1FBQ3ZCLElBQUksQ0FBQ3lILFNBQVMsQ0FBQ3dCLFNBQVMsQ0FBQy93QixRQUFRLENBQUMsQ0FBQyxDQUFDMGhCLEtBQUssQ0FBQ29HLFVBQVUsQ0FBQyxDQUFDcjFCLE1BQU0sQ0FBQyxDQUFDO01BQ2xFO01BRUEsSUFBSSxDQUFDODhCLFNBQVMsQ0FBQ3dCLFNBQVMsQ0FBQ2xnQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUN4QixXQUFXLENBQUMsUUFBUSxDQUFDO01BQzlELElBQUksQ0FBQ2tnQyxTQUFTLENBQUN3QixTQUFTLENBQUMvd0IsUUFBUSxDQUFDLENBQUMsQ0FBQ29sQixFQUFFLENBQUM1NUIsQ0FBQyxDQUFDbS9CLE9BQU8sQ0FBQyxJQUFJLENBQUN4SixPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ21PLE1BQU0sQ0FBQyxDQUFDLENBQUNwZ0MsUUFBUSxDQUFDLFFBQVEsQ0FBQztJQUNyRztFQUNKLENBQUM7O0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJa2dDLFVBQVUsQ0FBQy91QixTQUFTLENBQUM4cEIsU0FBUyxHQUFHLFVBQVM1OUIsS0FBSyxFQUFFO0lBQzdDLElBQUl3ekIsUUFBUSxHQUFHLElBQUksQ0FBQzZMLEtBQUssQ0FBQzdMLFFBQVE7SUFFbEN4ekIsS0FBSyxDQUFDOGtDLElBQUksR0FBRztNQUNUbDlCLEtBQUssRUFBRTNJLENBQUMsQ0FBQ20vQixPQUFPLENBQUMsSUFBSSxDQUFDeEosT0FBTyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNtTyxNQUFNLENBQUM7TUFDN0M1WCxLQUFLLEVBQUUsSUFBSSxDQUFDNFgsTUFBTSxDQUFDMWhDLE1BQU07TUFDekIyYSxJQUFJLEVBQUV3WCxRQUFRLEtBQUtBLFFBQVEsQ0FBQ3RXLE1BQU0sSUFBSXNXLFFBQVEsQ0FBQzdpQixTQUFTLElBQUk2aUIsUUFBUSxDQUFDMlAsUUFBUSxHQUN2RSxDQUFDLEdBQUczUCxRQUFRLENBQUN5USxRQUFRLElBQUl6USxRQUFRLENBQUNwakIsS0FBSztJQUNqRCxDQUFDO0VBQ0wsQ0FBQzs7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0l5eUIsVUFBVSxDQUFDL3VCLFNBQVMsQ0FBQzhnQixPQUFPLEdBQUcsWUFBVztJQUN0QyxJQUFJQSxPQUFPLEdBQUcsSUFBSSxDQUFDeUssS0FBSyxDQUFDdkgsUUFBUSxDQUFDLElBQUksQ0FBQ3VILEtBQUssQ0FBQ3pLLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdkQsT0FBTzMxQixDQUFDLENBQUNxN0IsSUFBSSxDQUFDLElBQUksQ0FBQ3lJLE1BQU0sRUFBRTlqQyxDQUFDLENBQUM4MUIsS0FBSyxDQUFDLFVBQVMrUCxJQUFJLEVBQUVsOUIsS0FBSyxFQUFFO01BQ3JELE9BQU9rOUIsSUFBSSxDQUFDMzdCLEtBQUssSUFBSXlyQixPQUFPLElBQUlrUSxJQUFJLENBQUNsaEIsR0FBRyxJQUFJZ1IsT0FBTztJQUN2RCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQ3lPLEdBQUcsQ0FBQyxDQUFDO0VBQ25CLENBQUM7O0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJUixVQUFVLENBQUMvdUIsU0FBUyxDQUFDMGQsV0FBVyxHQUFHLFVBQVN1VCxTQUFTLEVBQUU7SUFDbkQsSUFBSWxuQixRQUFRO01BQUV4YyxNQUFNO01BQ2hCbXlCLFFBQVEsR0FBRyxJQUFJLENBQUM2TCxLQUFLLENBQUM3TCxRQUFRO0lBRWxDLElBQUlBLFFBQVEsQ0FBQ3NRLE9BQU8sSUFBSSxNQUFNLEVBQUU7TUFDNUJqbUIsUUFBUSxHQUFHNWUsQ0FBQyxDQUFDbS9CLE9BQU8sQ0FBQyxJQUFJLENBQUN4SixPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ21PLE1BQU0sQ0FBQztNQUNqRDFoQyxNQUFNLEdBQUcsSUFBSSxDQUFDMGhDLE1BQU0sQ0FBQzFoQyxNQUFNO01BQzNCMGpDLFNBQVMsR0FBRyxFQUFFbG5CLFFBQVEsR0FBRyxFQUFFQSxRQUFRO01BQ25DQSxRQUFRLEdBQUcsSUFBSSxDQUFDa2xCLE1BQU0sQ0FBQyxDQUFFbGxCLFFBQVEsR0FBR3hjLE1BQU0sR0FBSUEsTUFBTSxJQUFJQSxNQUFNLENBQUMsQ0FBQzhILEtBQUs7SUFDekUsQ0FBQyxNQUFNO01BQ0gwVSxRQUFRLEdBQUcsSUFBSSxDQUFDd2hCLEtBQUssQ0FBQ3ZILFFBQVEsQ0FBQyxJQUFJLENBQUN1SCxLQUFLLENBQUN6SyxPQUFPLENBQUMsQ0FBQyxDQUFDO01BQ3BEdnpCLE1BQU0sR0FBRyxJQUFJLENBQUNnK0IsS0FBSyxDQUFDanZCLEtBQUssQ0FBQyxDQUFDLENBQUMvTyxNQUFNO01BQ2xDMGpDLFNBQVMsR0FBR2xuQixRQUFRLElBQUkyVixRQUFRLENBQUNzUSxPQUFPLEdBQUdqbUIsUUFBUSxJQUFJMlYsUUFBUSxDQUFDc1EsT0FBTztJQUMzRTtJQUVBLE9BQU9qbUIsUUFBUTtFQUNuQixDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSWdsQixVQUFVLENBQUMvdUIsU0FBUyxDQUFDb0UsSUFBSSxHQUFHLFVBQVN0TixLQUFLLEVBQUU7SUFDeEMzTCxDQUFDLENBQUM4MUIsS0FBSyxDQUFDLElBQUksQ0FBQ21PLFVBQVUsQ0FBQ2xnQyxFQUFFLEVBQUUsSUFBSSxDQUFDcThCLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQzdOLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTVtQixLQUFLLENBQUM7RUFDMUUsQ0FBQzs7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0lpNEIsVUFBVSxDQUFDL3VCLFNBQVMsQ0FBQ3lvQixJQUFJLEdBQUcsVUFBUzN4QixLQUFLLEVBQUU7SUFDeEMzTCxDQUFDLENBQUM4MUIsS0FBSyxDQUFDLElBQUksQ0FBQ21PLFVBQVUsQ0FBQ2xnQyxFQUFFLEVBQUUsSUFBSSxDQUFDcThCLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQzdOLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRTVtQixLQUFLLENBQUM7RUFDM0UsQ0FBQzs7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJaTRCLFVBQVUsQ0FBQy91QixTQUFTLENBQUM5USxFQUFFLEdBQUcsVUFBUzZhLFFBQVEsRUFBRWpULEtBQUssRUFBRW82QixRQUFRLEVBQUU7SUFDMUQsSUFBSTNqQyxNQUFNO0lBRVYsSUFBSSxDQUFDMmpDLFFBQVEsRUFBRTtNQUNYM2pDLE1BQU0sR0FBRyxJQUFJLENBQUMwaEMsTUFBTSxDQUFDMWhDLE1BQU07TUFDM0JwQyxDQUFDLENBQUM4MUIsS0FBSyxDQUFDLElBQUksQ0FBQ21PLFVBQVUsQ0FBQ2xnQyxFQUFFLEVBQUUsSUFBSSxDQUFDcThCLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQzBELE1BQU0sQ0FBQyxDQUFFbGxCLFFBQVEsR0FBR3hjLE1BQU0sR0FBSUEsTUFBTSxJQUFJQSxNQUFNLENBQUMsQ0FBQzhILEtBQUssRUFBRXlCLEtBQUssQ0FBQztJQUM5RyxDQUFDLE1BQU07TUFDSDNMLENBQUMsQ0FBQzgxQixLQUFLLENBQUMsSUFBSSxDQUFDbU8sVUFBVSxDQUFDbGdDLEVBQUUsRUFBRSxJQUFJLENBQUNxOEIsS0FBSyxDQUFDLENBQUN4aEIsUUFBUSxFQUFFalQsS0FBSyxDQUFDO0lBQzVEO0VBQ0osQ0FBQztFQUVEM0wsQ0FBQyxDQUFDcU0sRUFBRSxDQUFDd3pCLFdBQVcsQ0FBQ0ksV0FBVyxDQUFDbEssT0FBTyxDQUFDNk4sVUFBVSxHQUFHQSxVQUFVO0FBRWhFLENBQUMsRUFBRXhqQyxNQUFNLENBQUM4L0IsS0FBSyxJQUFJOS9CLG9DQUFhLEVBQUVBLE1BQU0sRUFBRUssUUFBUSxDQUFDOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFDLENBQUMsVUFBU1QsQ0FBQyxFQUFFSSxNQUFNLEVBQUVLLFFBQVEsRUFBRTR0QixTQUFTLEVBQUU7RUFDdkMsWUFBWTs7RUFFWjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0ksSUFBSTJYLElBQUksR0FBRyxTQUFBQSxDQUFTNTVCLFFBQVEsRUFBRTtJQUMxQjtBQUNSO0FBQ0E7QUFDQTtBQUNBO0lBQ1EsSUFBSSxDQUFDZzBCLEtBQUssR0FBR2gwQixRQUFROztJQUVyQjtBQUNSO0FBQ0E7QUFDQTtBQUNBO0lBQ1EsSUFBSSxDQUFDNjVCLE9BQU8sR0FBRyxDQUFDLENBQUM7O0lBRWpCO0FBQ1I7QUFDQTtBQUNBO0lBQ1EsSUFBSSxDQUFDeGQsUUFBUSxHQUFHLElBQUksQ0FBQzJYLEtBQUssQ0FBQzNYLFFBQVE7O0lBRW5DO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7SUFDUSxJQUFJLENBQUNnTSxTQUFTLEdBQUc7TUFDYiwwQkFBMEIsRUFBRXowQixDQUFDLENBQUM4MUIsS0FBSyxDQUFDLFVBQVNydkIsQ0FBQyxFQUFFO1FBQzVDLElBQUlBLENBQUMsQ0FBQyszQixTQUFTLElBQUksSUFBSSxDQUFDNEIsS0FBSyxDQUFDN0wsUUFBUSxDQUFDeUMsYUFBYSxLQUFLLFNBQVMsRUFBRTtVQUNoRWgzQixDQUFDLENBQUNJLE1BQU0sQ0FBQyxDQUFDcUssT0FBTyxDQUFDLDJCQUEyQixDQUFDO1FBQ2xEO01BQ0osQ0FBQyxFQUFFLElBQUksQ0FBQztNQUNSLHVCQUF1QixFQUFFekssQ0FBQyxDQUFDODFCLEtBQUssQ0FBQyxVQUFTcnZCLENBQUMsRUFBRTtRQUN6QyxJQUFJQSxDQUFDLENBQUMrM0IsU0FBUyxFQUFFO1VBQ2IsSUFBSTBILElBQUksR0FBR2xtQyxDQUFDLENBQUN5RyxDQUFDLENBQUNxWSxPQUFPLENBQUMsQ0FBQ3paLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQ3U0QixPQUFPLENBQUMsYUFBYSxDQUFDLENBQUNuOEIsSUFBSSxDQUFDLFdBQVcsQ0FBQztVQUVwRixJQUFJLENBQUN5a0MsSUFBSSxFQUFFO1lBQ1A7VUFDSjtVQUVBLElBQUksQ0FBQ0QsT0FBTyxDQUFDQyxJQUFJLENBQUMsR0FBR3ovQixDQUFDLENBQUNxWSxPQUFPO1FBQ2xDO01BQ0osQ0FBQyxFQUFFLElBQUksQ0FBQztNQUNSLHNCQUFzQixFQUFFOWUsQ0FBQyxDQUFDODFCLEtBQUssQ0FBQyxVQUFTcnZCLENBQUMsRUFBRTtRQUN4QyxJQUFJQSxDQUFDLENBQUMrM0IsU0FBUyxJQUFJLzNCLENBQUMsQ0FBQ3MwQixRQUFRLENBQUN2M0IsSUFBSSxLQUFLLFVBQVUsRUFBRTtVQUMvQyxJQUFJbXlCLE9BQU8sR0FBRyxJQUFJLENBQUN5SyxLQUFLLENBQUNqdkIsS0FBSyxDQUFDLElBQUksQ0FBQ2l2QixLQUFLLENBQUN2SCxRQUFRLENBQUMsSUFBSSxDQUFDdUgsS0FBSyxDQUFDekssT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JFdVEsSUFBSSxHQUFHbG1DLENBQUMsQ0FBQ21mLEdBQUcsQ0FBQyxJQUFJLENBQUM4bUIsT0FBTyxFQUFFLFVBQVMvSyxJQUFJLEVBQUVnTCxJQUFJLEVBQUU7Y0FDNUMsT0FBT2hMLElBQUksS0FBS3ZGLE9BQU8sR0FBR3VRLElBQUksR0FBRyxJQUFJO1lBQ3pDLENBQUMsQ0FBQyxDQUFDelMsSUFBSSxDQUFDLENBQUM7VUFFYixJQUFJLENBQUN5UyxJQUFJLElBQUk5bEMsTUFBTSxDQUFDb1csUUFBUSxDQUFDMHZCLElBQUksQ0FBQ2hRLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBS2dRLElBQUksRUFBRTtZQUNqRDtVQUNKO1VBRUE5bEMsTUFBTSxDQUFDb1csUUFBUSxDQUFDMHZCLElBQUksR0FBR0EsSUFBSTtRQUMvQjtNQUNKLENBQUMsRUFBRSxJQUFJO0lBQ1gsQ0FBQzs7SUFFRDtJQUNBLElBQUksQ0FBQzlGLEtBQUssQ0FBQzEwQixPQUFPLEdBQUcxTCxDQUFDLENBQUMyeEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFcVUsSUFBSSxDQUFDeFIsUUFBUSxFQUFFLElBQUksQ0FBQzRMLEtBQUssQ0FBQzEwQixPQUFPLENBQUM7O0lBRXBFO0lBQ0EsSUFBSSxDQUFDK2MsUUFBUSxDQUFDNWpCLEVBQUUsQ0FBQyxJQUFJLENBQUM0dkIsU0FBUyxDQUFDOztJQUVoQztJQUNBejBCLENBQUMsQ0FBQ0ksTUFBTSxDQUFDLENBQUN5RSxFQUFFLENBQUMsMkJBQTJCLEVBQUU3RSxDQUFDLENBQUM4MUIsS0FBSyxDQUFDLFVBQVNydkIsQ0FBQyxFQUFFO01BQzFELElBQUl5L0IsSUFBSSxHQUFHOWxDLE1BQU0sQ0FBQ29XLFFBQVEsQ0FBQzB2QixJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDeENoMUIsS0FBSyxHQUFHLElBQUksQ0FBQ2l2QixLQUFLLENBQUN0SCxNQUFNLENBQUN0a0IsUUFBUSxDQUFDLENBQUM7UUFDcENvSyxRQUFRLEdBQUcsSUFBSSxDQUFDcW5CLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLElBQUkvMEIsS0FBSyxDQUFDeEksS0FBSyxDQUFDLElBQUksQ0FBQ3M5QixPQUFPLENBQUNDLElBQUksQ0FBQyxDQUFDO01BRXBFLElBQUl0bkIsUUFBUSxLQUFLeVAsU0FBUyxJQUFJelAsUUFBUSxLQUFLLElBQUksQ0FBQ3doQixLQUFLLENBQUN6SyxPQUFPLENBQUMsQ0FBQyxFQUFFO1FBQzdEO01BQ0o7TUFFQSxJQUFJLENBQUN5SyxLQUFLLENBQUNyOEIsRUFBRSxDQUFDLElBQUksQ0FBQ3E4QixLQUFLLENBQUN2SCxRQUFRLENBQUNqYSxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDO0lBQzdELENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztFQUNiLENBQUM7O0VBRUQ7QUFDSjtBQUNBO0FBQ0E7RUFDSW9uQixJQUFJLENBQUN4UixRQUFRLEdBQUc7SUFDWjRSLGVBQWUsRUFBRTtFQUNyQixDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0VBQ0lKLElBQUksQ0FBQ254QixTQUFTLENBQUMrRSxPQUFPLEdBQUcsWUFBVztJQUNoQyxJQUFJRCxPQUFPLEVBQUVvaEIsUUFBUTtJQUVyQi82QixDQUFDLENBQUNJLE1BQU0sQ0FBQyxDQUFDd0UsR0FBRyxDQUFDLDJCQUEyQixDQUFDO0lBRTFDLEtBQUsrVSxPQUFPLElBQUksSUFBSSxDQUFDOGEsU0FBUyxFQUFFO01BQzVCLElBQUksQ0FBQzJMLEtBQUssQ0FBQzNYLFFBQVEsQ0FBQzdqQixHQUFHLENBQUMrVSxPQUFPLEVBQUUsSUFBSSxDQUFDOGEsU0FBUyxDQUFDOWEsT0FBTyxDQUFDLENBQUM7SUFDN0Q7SUFDQSxLQUFLb2hCLFFBQVEsSUFBSTJGLE1BQU0sQ0FBQ0MsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUU7TUFDL0MsT0FBTyxJQUFJLENBQUM1RixRQUFRLENBQUMsSUFBSSxVQUFVLEtBQUssSUFBSSxDQUFDQSxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDbEU7RUFDSixDQUFDO0VBRUQvNkIsQ0FBQyxDQUFDcU0sRUFBRSxDQUFDd3pCLFdBQVcsQ0FBQ0ksV0FBVyxDQUFDbEssT0FBTyxDQUFDaVEsSUFBSSxHQUFHQSxJQUFJO0FBRXBELENBQUMsRUFBRTVsQyxNQUFNLENBQUM4L0IsS0FBSyxJQUFJOS9CLG9DQUFhLEVBQUVBLE1BQU0sRUFBRUssUUFBUSxDQUFDOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQyxDQUFDLFVBQVNULENBQUMsRUFBRUksTUFBTSxFQUFFSyxRQUFRLEVBQUU0dEIsU0FBUyxFQUFFO0VBRXZDLElBQUkvVCxLQUFLLEdBQUd0YSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUN3RyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM4VCxLQUFLO0lBQ25DK3JCLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQ3RXLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDdkM1SyxNQUFNLEdBQUc7TUFDTHlXLFVBQVUsRUFBRTtRQUNSalgsR0FBRyxFQUFFO1VBQ0QyaEIsZ0JBQWdCLEVBQUUscUJBQXFCO1VBQ3ZDQyxhQUFhLEVBQUUsZUFBZTtVQUM5QkMsV0FBVyxFQUFFLGdCQUFnQjtVQUM3QjVLLFVBQVUsRUFBRTtRQUNoQjtNQUNKLENBQUM7TUFDRHpqQixTQUFTLEVBQUU7UUFDUHdNLEdBQUcsRUFBRTtVQUNEOGhCLGVBQWUsRUFBRSxvQkFBb0I7VUFDckNDLFlBQVksRUFBRSxjQUFjO1VBQzVCQyxVQUFVLEVBQUUsZUFBZTtVQUMzQnh1QixTQUFTLEVBQUU7UUFDZjtNQUNKO0lBQ0osQ0FBQztJQUNEeXVCLEtBQUssR0FBRztNQUNKQyxhQUFhLEVBQUUsU0FBQUEsQ0FBQSxFQUFXO1FBQ3RCLE9BQU8sQ0FBQyxDQUFDQyxJQUFJLENBQUMsV0FBVyxDQUFDO01BQzlCLENBQUM7TUFDREMsZUFBZSxFQUFFLFNBQUFBLENBQUEsRUFBVztRQUN4QixPQUFPLENBQUMsQ0FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQztNQUNoQyxDQUFDO01BQ0RFLGNBQWMsRUFBRSxTQUFBQSxDQUFBLEVBQVc7UUFDdkIsT0FBTyxDQUFDLENBQUNGLElBQUksQ0FBQyxZQUFZLENBQUM7TUFDL0IsQ0FBQztNQUNERyxhQUFhLEVBQUUsU0FBQUEsQ0FBQSxFQUFXO1FBQ3RCLE9BQU8sQ0FBQyxDQUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDO01BQzlCO0lBQ0osQ0FBQztFQUVMLFNBQVNBLElBQUlBLENBQUMvTCxRQUFRLEVBQUVtTSxRQUFRLEVBQUU7SUFDOUIsSUFBSTlILE1BQU0sR0FBRyxLQUFLO01BQ2R1RyxLQUFLLEdBQUc1SyxRQUFRLENBQUM5SyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNrWCxXQUFXLENBQUMsQ0FBQyxHQUFHcE0sUUFBUSxDQUFDN0UsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUVoRWwyQixDQUFDLENBQUNrRixJQUFJLENBQUMsQ0FBQzYxQixRQUFRLEdBQUcsR0FBRyxHQUFHc0wsUUFBUSxDQUFDNVMsSUFBSSxDQUFDa1MsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHQSxLQUFLLEVBQUU1VixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsVUFBUzFmLENBQUMsRUFBRTBxQixRQUFRLEVBQUU7TUFDM0YsSUFBSXpnQixLQUFLLENBQUN5Z0IsUUFBUSxDQUFDLEtBQUsxTSxTQUFTLEVBQUU7UUFDL0IrUSxNQUFNLEdBQUc4SCxRQUFRLEdBQUduTSxRQUFRLEdBQUcsSUFBSTtRQUNuQyxPQUFPLEtBQUs7TUFDaEI7SUFDSixDQUFDLENBQUM7SUFFRixPQUFPcUUsTUFBTTtFQUNqQjtFQUVBLFNBQVM4SCxRQUFRQSxDQUFDbk0sUUFBUSxFQUFFO0lBQ3hCLE9BQU8rTCxJQUFJLENBQUMvTCxRQUFRLEVBQUUsSUFBSSxDQUFDO0VBQy9CO0VBRUEsSUFBSTZMLEtBQUssQ0FBQ0ksY0FBYyxDQUFDLENBQUMsRUFBRTtJQUN4QjtJQUNBaG5DLENBQUMsQ0FBQzI3QixPQUFPLENBQUNDLFVBQVUsR0FBRyxJQUFJN2YsTUFBTSxDQUFDbXJCLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6RGxuQyxDQUFDLENBQUMyN0IsT0FBTyxDQUFDQyxVQUFVLENBQUNqWCxHQUFHLEdBQUdRLE1BQU0sQ0FBQ3lXLFVBQVUsQ0FBQ2pYLEdBQUcsQ0FBRTNrQixDQUFDLENBQUMyN0IsT0FBTyxDQUFDQyxVQUFVLENBQUU7RUFDNUU7RUFFQSxJQUFJZ0wsS0FBSyxDQUFDSyxhQUFhLENBQUMsQ0FBQyxFQUFFO0lBQ3ZCO0lBQ0FqbkMsQ0FBQyxDQUFDMjdCLE9BQU8sQ0FBQ3hqQixTQUFTLEdBQUcsSUFBSTRELE1BQU0sQ0FBQ21yQixRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkRsbkMsQ0FBQyxDQUFDMjdCLE9BQU8sQ0FBQ3hqQixTQUFTLENBQUN3TSxHQUFHLEdBQUdRLE1BQU0sQ0FBQ2hOLFNBQVMsQ0FBQ3dNLEdBQUcsQ0FBRTNrQixDQUFDLENBQUMyN0IsT0FBTyxDQUFDeGpCLFNBQVMsQ0FBRTtFQUN6RTtFQUVBLElBQUl5dUIsS0FBSyxDQUFDQyxhQUFhLENBQUMsQ0FBQyxFQUFFO0lBQ3ZCO0lBQ0E3bUMsQ0FBQyxDQUFDMjdCLE9BQU8sQ0FBQ00sU0FBUyxHQUFHLElBQUlsZ0IsTUFBTSxDQUFDbXJCLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2RGxuQyxDQUFDLENBQUMyN0IsT0FBTyxDQUFDZ0IsV0FBVyxHQUFHaUssS0FBSyxDQUFDRyxlQUFlLENBQUMsQ0FBQztFQUNuRDtBQUVKLENBQUMsRUFBRTNtQyxNQUFNLENBQUM4L0IsS0FBSyxJQUFJOS9CLG9DQUFhLEVBQUVBLE1BQU0sRUFBRUssUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7QUMza0duRDs7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdmVuZG9yL29pLWxheW91dC9wb2xvL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL29pLWxheW91dC9wb2xvL2Fzc2V0cy9qcy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL29pLWxheW91dC9wb2xvL2Fzc2V0cy9qcy9ub3RpZnkubWluLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9vaS1sYXlvdXQvcG9sby9hc3NldHMvanMvb3dsLmZpeC5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivb2ktbGF5b3V0L3BvbG8vYXNzZXRzL3Njc3MvYXBwLnNjc3M/OGRlMyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivb2ktbGF5b3V0L3BvbG8vYXNzZXRzL3Njc3Mvc3R5bGUuc2Nzcz82NWJjIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxuLy8gR2xvYmFsIGpRdWVyeSBpbXBvcnQuXG5nbG9iYWwuJCA9IGdsb2JhbC5qUXVlcnkgPSB3aW5kb3cuJCA9IHdpbmRvdy5qUXVlcnkgPSAkO1xuXG4vLyBQbHVnaW4gZnJvbSBQb2xvLCBpbXBvcnRlZCBhcyBZYXJuIGRlcHMuXG4vLyAobm90IGV2ZXJ5dGhpbmcgaXMgaW1wb3J0ZWQsIG9ubHkgdGhlIHBvdGVudGlhbGx5IHJlbGV2YW50IG9uZXMpXG5yZXF1aXJlKCdAb2ltbWVpL3BvbG9saWdodC9AcG9wcGVyanMvY29yZScpO1xucmVxdWlyZSgnQG9pbW1laS9wb2xvbGlnaHQvYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwJyk7XG5yZXF1aXJlKCdAb2ltbWVpL3BvbG9saWdodC9hbmltYXRlLmNzcy9hbmltYXRlLm1pbi5jc3MnKTtcbnJlcXVpcmUoJ0BvaW1tZWkvcG9sb2xpZ2h0L2Jvb3RzdHJhcC1zd2l0Y2gvZGlzdC9qcy9ib290c3RyYXAtc3dpdGNoLm1pbicpO1xucmVxdWlyZSgnQG9pbW1laS9wb2xvbGlnaHQvYm9vdHN0cmFwLXN3aXRjaC9kaXN0L2Nzcy9ib290c3RyYXAzL2Jvb3RzdHJhcC1zd2l0Y2gubWluLmNzcycpO1xucmVxdWlyZSgnQG9pbW1laS9wb2xvbGlnaHQvQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvc2Nzcy9icmFuZHMuc2NzcycpO1xucmVxdWlyZSgnQG9pbW1laS9wb2xvbGlnaHQvQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvc2Nzcy9yZWd1bGFyLnNjc3MnKTtcbnJlcXVpcmUoJ0BvaW1tZWkvcG9sb2xpZ2h0L0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3Njc3Mvc29saWQuc2NzcycpO1xucmVxdWlyZSgnQG9pbW1laS9wb2xvbGlnaHQvQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvc2Nzcy9mb250YXdlc29tZS5zY3NzJyk7XG5yZXF1aXJlKCdAb2ltbWVpL3BvbG9saWdodC9saXN0LmpzJyk7XG5yZXF1aXJlKCdAb2ltbWVpL3BvbG9saWdodC9tYWduaWZpYy1wb3B1cCcpO1xucmVxdWlyZSgnQG9pbW1laS9wb2xvbGlnaHQvaW5maW5pdGUtc2Nyb2xsJyk7XG5yZXF1aXJlKCcuL25vdGlmeS5taW4nKTtcblxuLy8gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvanF1ZXJ5LmVhc2luZ1xucmVxdWlyZSgnQG9pbW1laS9wb2xvbGlnaHQvanF1ZXJ5LmVhc2luZycpO1xuXG5jb25zdCBqUXVlcnlCcmlkZ2V0ID0gcmVxdWlyZSgnQG9pbW1laS9wb2xvbGlnaHQvanF1ZXJ5LWJyaWRnZXQnKTtcbmNvbnN0IEZsaWNraXR5ID0gcmVxdWlyZSgnQG9pbW1laS9wb2xvbGlnaHQvZmxpY2tpdHknKTtcbi8vIFRoaXMgaGFzIHRvIGJlIHJlcXVpcmVkIHNlcGFyYXRlbHk6XG4vLyBodHRwczovL2ZsaWNraXR5Lm1ldGFmaXp6eS5jby9vcHRpb25zI2ltYWdlc2xvYWRlZFxucmVxdWlyZSgnQG9pbW1laS9wb2xvbGlnaHQvZmxpY2tpdHktaW1hZ2VzbG9hZGVkJyk7XG5cbi8vIG1ha2UgRmxpY2tpdHkgYSBqUXVlcnkgcGx1Z2luXG5GbGlja2l0eS5zZXRKUXVlcnkoJCk7XG5qUXVlcnlCcmlkZ2V0KCdmbGlja2l0eScsIEZsaWNraXR5LCAkKTtcblxuLy8gQWRkZWQgcGx1Z2lucyBmcm9tIG9sZCB2ZXJzaW9ucy5cbnJlcXVpcmUoJ0BvaW1tZWkvcG9sb2xpZ2h0L2Vhc3ktcGllLWNoYXJ0Jyk7XG5yZXF1aXJlKCdAb2ltbWVpL3BvbG9saWdodC9pb24tcmFuZ2VzbGlkZXIvY3NzL2lvbi5yYW5nZVNsaWRlci5jc3MnKTtcbnJlcXVpcmUoJ0BvaW1tZWkvcG9sb2xpZ2h0L2pxdWVyeS1icmVha3BvaW50cycpO1xucmVxdWlyZSgnQG9pbW1laS9wb2xvbGlnaHQvaXNvdG9wZS1sYXlvdXQvZGlzdC9pc290b3BlLnBrZ2QubWluJyk7XG5yZXF1aXJlKCdAb2ltbWVpL3BvbG9saWdodC9vd2wtY2Fyb3VzZWwtMi9vd2wuY2Fyb3VzZWwubWluJyk7XG5yZXF1aXJlKCdAb2ltbWVpL3BvbG9saWdodC9vd2wtY2Fyb3VzZWwtMi9hc3NldHMvb3dsLmNhcm91c2VsLmNzcycpO1xucmVxdWlyZSgnLi9vd2wuZml4Jyk7XG5yZXF1aXJlKCdAb2ltbWVpL3BvbG9saWdodC9maXR2aWRzJyk7XG5yZXF1aXJlKCdAb2ltbWVpL3BvbG9saWdodC92aWRlJyk7XG5yZXF1aXJlKCdAb2ltbWVpL3BvbG9saWdodC9zY3JvbGx5Jyk7XG5yZXF1aXJlKCdAb2ltbWVpL3BvbG9saWdodC9qcy1jb29raWUnKTtcbnJlcXVpcmUoJ0BvaW1tZWkvcG9sb2xpZ2h0L2pxdWVyeS1mb3JtJyk7XG5yZXF1aXJlKCdAb2ltbWVpL3BvbG9saWdodC9zY3JvbGxpZnknKTtcbnJlcXVpcmUoJ0BvaW1tZWkvcG9sb2xpZ2h0L2pxdWVyeS1jb3VudHRvJyk7XG5yZXF1aXJlKCdAb2ltbWVpL3BvbG9saWdodC9tb3JwaGV4dC9kaXN0L21vcnBoZXh0Lm1pbicpO1xucmVxdWlyZSgnQG9pbW1laS9wb2xvbGlnaHQvc3RpY2t5LXNpZGViYXInKTtcbnJlcXVpcmUoJ0BvaW1tZWkvcG9sb2xpZ2h0L2pxdWVyeS1sYXp5Jyk7XG5yZXF1aXJlKCdAb2ltbWVpL3BvbG9saWdodC90aGVpYS1zdGlja3ktc2lkZWJhcicpO1xucmVxdWlyZSgnQG9pbW1laS9wb2xvbGlnaHQvd2F5cG9pbnRzL2xpYi9ub2ZyYW1ld29yay53YXlwb2ludHMuanMnKTtcbnJlcXVpcmUoJ0BvaW1tZWkvcG9sb2xpZ2h0L3dheXBvaW50cy9saWIvanF1ZXJ5LndheXBvaW50cy5qcycpO1xuXG4vLyBMb2NhbCBmaWxlcyBpbXBvcnQuXG5yZXF1aXJlKCcuL2Z1bmN0aW9ucy5qcycpO1xucmVxdWlyZSgnLi4vc2Nzcy9hcHAuc2NzcycpO1xuLy8gcmVxdWlyZSgnLi4vY3NzL2luc3Bpcm8uY3NzJyk7XG5yZXF1aXJlKCcuLi9zY3NzL3N0eWxlLnNjc3MnKTtcblxuLy8gSW5pdGlhbGl6aW5nIGV2ZXJ5dGhpbmcuXG52YXIgQ29va2llcyA9IHJlcXVpcmUoJ0BvaW1tZWkvcG9sb2xpZ2h0L2pzLWNvb2tpZScpO1xuZ2xvYmFsLkNvb2tpZXMgPSBDb29raWVzO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJ09JTU1FSSBTVEFSVCBTQ1JJUFQnKTtcbn0pO1xuIiwiLypcclxuXHJcblBvbG8gLSBNdWx0aXB1cnBvc2UgSFRNTDUgVGVtcGxhdGVcclxuVmVyc2lvbjogNS45LjlcclxuV2Vic2l0ZTogaHR0cHM6Ly9pbnNwaXJvdGhlbWVzLmNvbS90aGVtZXMvcG9sb1xyXG5MaWNlbnNlOiBodHRwczovL2luc3Bpcm90aGVtZXMuY29tL3RoZW1lcy9wb2xvL2xpY2Vuc2UuaHRtbFxyXG5JbnNwaXJvIFRoZW1lcyAoaHR0cHM6Ly9pbnNwaXJvdGhlbWVzLmNvbSlcclxuQXV0aG9yOiBJTlNQSVJPIC0gQXJkaWFuIEJlcmlzaGFcclxuQ29weXJpZ2h0IDIwMjFcclxuXHJcbiovXHJcbmNvbnN0IExhenlMb2FkID0gcmVxdWlyZSgnQG9pbW1laS9wb2xvbGlnaHQvbGF6eWxvYWQnKTtcclxuXHJcbi8vIE9pbW1laTogd3JhcHBpbmcgZXZlcnl0aGluZyBpbiBhIGNvbnRlbnQgbG9hZGVkIGhhbmRsZXIuXHJcbi8vSU5TUElSTyBHbG9iYWwgdmFyXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgdmFyIElOU1BJUk8gPSB7fTsgLy8sXHJcbiAgICAgICAgLy8gJCA9IGpRdWVyeS5ub0NvbmZsaWN0KCk7IC8vIE9pbW1laTogY29tbWVudGVkIGJlY2F1c2UgaXQgZGVzdHJveWVkIHRoZSBnbG9iYWwgJCB2YXJpYWJsZSBpbiB0aGUgcGFnZS5cclxuICAgIChmdW5jdGlvbigkKSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgLy8gUHJlZGVmaW5lZCBHbG9iYWwgVmFyaWFibGVzXHJcbiAgICAgICAgdmFyICR3aW5kb3cgPSAkKHdpbmRvdyksXHJcbiAgICAgICAgICAgICR0aGVtZV9jb2xvciA9IFwiIzIyNTBmY1wiLFxyXG4gICAgICAgICAgICAvL01haW5cclxuICAgICAgICAgICAgJGJvZHkgPSAkKFwiYm9keVwiKSxcclxuICAgICAgICAgICAgJGJvZHlJbm5lciA9ICQoXCIuYm9keS1pbm5lclwiKSxcclxuICAgICAgICAgICAgJHNlY3Rpb24gPSAkKFwic2VjdGlvblwiKSxcclxuICAgICAgICAgICAgLy9IZWFkZXJcclxuICAgICAgICAgICAgJHRvcGJhciA9ICQoXCIjdG9wYmFyXCIpLFxyXG4gICAgICAgICAgICAkaGVhZGVyID0gJChcIiNoZWFkZXJcIiksXHJcbiAgICAgICAgICAgICRoZWFkZXJDdXJyZW50Q2xhc3NlcyA9ICRoZWFkZXIuYXR0cihcImNsYXNzXCIpLFxyXG4gICAgICAgICAgICAvL0xvZ29cclxuICAgICAgICAgICAgaGVhZGVyTG9nbyA9ICQoXCIjbG9nb1wiKSxcclxuICAgICAgICAgICAgLy9NZW51XHJcbiAgICAgICAgICAgICRtYWluTWVudSA9ICQoXCIjbWFpbk1lbnVcIiksXHJcbiAgICAgICAgICAgICRtYWluTWVudVRyaWdnZXJCdG4gPSAkKFwiI21haW5NZW51LXRyaWdnZXIgYSwgI21haW5NZW51LXRyaWdnZXIgYnV0dG9uXCIpLFxyXG4gICAgICAgICAgICAvL1NsaWRlclxyXG4gICAgICAgICAgICAkc2xpZGVyID0gJChcIiNzbGlkZXJcIiksXHJcbiAgICAgICAgICAgICRpbnNwaXJvU2xpZGVyID0gJChcIi5pbnNwaXJvLXNsaWRlclwiKSxcclxuICAgICAgICAgICAgJGNhcm91c2VsID0gJChcIi5jYXJvdXNlbFwiKSxcclxuICAgICAgICAgICAgLypHcmlkIExheW91dCovXHJcbiAgICAgICAgICAgICRncmlkTGF5b3V0ID0gJChcIi5ncmlkLWxheW91dFwiKSxcclxuICAgICAgICAgICAgJGdyaWRGaWx0ZXIgPSAkKFwiLmdyaWQtZmlsdGVyLCAucGFnZS1ncmlkLWZpbHRlclwiKSxcclxuICAgICAgICAgICAgd2luZG93V2lkdGggPSAkd2luZG93LndpZHRoKCk7XHJcblxyXG4gICAgICAgIC8vQ2hlY2sgaWYgaGVhZGVyIGV4aXN0XHJcbiAgICAgICAgaWYgKCRoZWFkZXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB2YXIgJGhlYWRlck9mZnNldFRvcCA9ICRoZWFkZXIub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgRXZlbnRzID0ge1xyXG4gICAgICAgICAgICBicm93c2VyOiB7XHJcbiAgICAgICAgICAgICAgICBpc01vYmlsZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oaVBob25lfGlQb2R8aVBhZHxBbmRyb2lkfEJsYWNrQmVycnkpLylcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL1NldHRpbmdzXHJcbiAgICAgICAgdmFyIFNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBpc01vYmlsZTogRXZlbnRzLmJyb3dzZXIuaXNNb2JpbGUsXHJcbiAgICAgICAgICAgIHN1Ym1lbnVMaWdodDogJGhlYWRlci5oYXNDbGFzcyhcInN1Ym1lbnUtbGlnaHRcIikgPT0gdHJ1ZSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgaGVhZGVySGFzRGFya0NsYXNzOiAkaGVhZGVyLmhhc0NsYXNzKFwiZGFya1wiKSA9PSB0cnVlID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICBoZWFkZXJEYXJrQ2xhc3NSZW1vdmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgc2xpZGVyRGFya0NsYXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgbWVudUlzT3BlbjogZmFsc2UsXHJcbiAgICAgICAgICAgIG1lbnVPdmVybGF5T3BlbmVkOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vV2luZG93IGJyZWFrcG9pbnRzXHJcbiAgICAgICAgJCh3aW5kb3cpLmJyZWFrcG9pbnRzKHtcclxuICAgICAgICAgICAgdHJpZ2dlck9uSW5pdDogdHJ1ZSxcclxuICAgICAgICAgICAgYnJlYWtwb2ludHM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ4c1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDU3NixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NjgsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibGdcIixcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAyNSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ4bFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgY3VycmVudEJyZWFrcG9pbnQgPSAkKHdpbmRvdykuYnJlYWtwb2ludHMoXCJnZXRCcmVha3BvaW50XCIpO1xyXG4gICAgICAgICRib2R5LmFkZENsYXNzKFwiYnJlYWtwb2ludC1cIiArIGN1cnJlbnRCcmVha3BvaW50KTtcclxuICAgICAgICAkKHdpbmRvdykuYmluZChcImJyZWFrcG9pbnQtY2hhbmdlXCIsIGZ1bmN0aW9uKGJyZWFrcG9pbnQpIHtcclxuICAgICAgICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoXCJicmVha3BvaW50LVwiICsgYnJlYWtwb2ludC5mcm9tKTtcclxuICAgICAgICAgICAgJGJvZHkuYWRkQ2xhc3MoXCJicmVha3BvaW50LVwiICsgYnJlYWtwb2ludC50byk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQod2luZG93KS5iaW5kKFwiYnJlYWtwb2ludC1jaGFuZ2VcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgJCh3aW5kb3cpLmJyZWFrcG9pbnRzKFwiZ3JlYXRlckVxdWFsVG9cIiwgXCJsZ1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICRib2R5LmFkZENsYXNzKFwiYi0tZGVza3RvcFwiKTtcclxuICAgICAgICAgICAgICAgICRib2R5LnJlbW92ZUNsYXNzKFwiYi0tcmVzcG9uc2l2ZVwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQod2luZG93KS5icmVha3BvaW50cyhcImxlc3NUaGFuXCIsIFwibGdcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkYm9keS5yZW1vdmVDbGFzcyhcImItLWRlc2t0b3BcIik7XHJcbiAgICAgICAgICAgICAgICAkYm9keS5hZGRDbGFzcyhcImItLXJlc3BvbnNpdmVcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBJTlNQSVJPLmNvcmUgPSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uczogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBJTlNQSVJPLmNvcmUuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgICAgICAgICBJTlNQSVJPLmNvcmUucnRsU3RhdHVzKCk7XHJcbiAgICAgICAgICAgICAgICBJTlNQSVJPLmNvcmUuZXF1YWxpemUoKTtcclxuICAgICAgICAgICAgICAgIElOU1BJUk8uY29yZS5jdXN0b21IZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgIElOU1BJUk8uY29yZS5kYXJrVGhlbWUoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciAkc2Nyb2xsVG9wID0gJChcIiNzY3JvbGxUb3BcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjcm9sbFRvcC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbE9mZnNldCA9ICRib2R5LmF0dHIoXCJkYXRhLW9mZnNldFwiKSB8fCA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCR3aW5kb3cuc2Nyb2xsVG9wKCkgPiBzY3JvbGxPZmZzZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRib2R5Lmhhc0NsYXNzKFwiZnJhbWVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY3JvbGxUb3AuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IFwiNDZweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ6LWluZGV4XCI6IDE5OSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjcm9sbFRvcC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogXCIyNnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInotaW5kZXhcIjogMTk5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2Nyb2xsVG9wLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IFwiMTZweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICRzY3JvbGxUb3Aub2ZmKFwiY2xpY2tcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcImJvZHksaHRtbFwiKS5zdG9wKHRydWUpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlYXNlSW5PdXRFeHBvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBydGxTdGF0dXM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyICRydGxTdGF0dXNDaGVjayA9ICQoXCJodG1sXCIpLmF0dHIoXCJkaXJcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoJHJ0bFN0YXR1c0NoZWNrID09IFwicnRsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXF1YWxpemU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyICRlcXVhbGl6ZSA9ICQoXCIuZXF1YWxpemVcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoJGVxdWFsaXplLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkZXF1YWxpemUuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW0gPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3JJdGVtID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uZmluZChlbGVtLmF0dHIoXCJkYXRhLWVxdWFsaXplLWl0ZW1cIikpIHx8IFwiPiBkaXZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9ySXRlbS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykub3V0ZXJIZWlnaHQodHJ1ZSkgPiBtYXhIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQgPSAkKHRoaXMpLm91dGVySGVpZ2h0KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3JJdGVtLmhlaWdodChtYXhIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjdXN0b21IZWlnaHQ6IGZ1bmN0aW9uKHNldEhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgdmFyICRjdXN0b21IZWlnaHQgPSAkKFwiLmN1c3RvbS1oZWlnaHRcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoJGN1c3RvbUhlaWdodC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGN1c3RvbUhlaWdodC5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbSA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtSGVpZ2h0ID0gZWxlbS5hdHRyKFwiZGF0YS1oZWlnaHRcIikgfHwgNDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbUhlaWdodExnID0gZWxlbS5hdHRyKFwiZGF0YS1oZWlnaHQtbGdcIikgfHwgZWxlbUhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1IZWlnaHRNZCA9IGVsZW0uYXR0cihcImRhdGEtaGVpZ2h0LW1kXCIpIHx8IGVsZW1IZWlnaHRMZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1IZWlnaHRTbSA9IGVsZW0uYXR0cihcImRhdGEtaGVpZ2h0LXNtXCIpIHx8IGVsZW1IZWlnaHRNZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1IZWlnaHRYcyA9IGVsZW0uYXR0cihcImRhdGEtaGVpZ2h0LXhzXCIpIHx8IGVsZW1IZWlnaHRTbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGN1c3RvbUhlaWdodEJyZWFrcG9pbnQoc2V0SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2V0SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbSA9IHNldEhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoJCh3aW5kb3cpLmJyZWFrcG9pbnRzKFwiZ2V0QnJlYWtwb2ludFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ4c1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLmhlaWdodChlbGVtSGVpZ2h0WHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic21cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5oZWlnaHQoZWxlbUhlaWdodFNtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm1kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uaGVpZ2h0KGVsZW1IZWlnaHRNZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJsZ1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLmhlaWdodChlbGVtSGVpZ2h0TGcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwieGxcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5oZWlnaHQoZWxlbUhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUhlaWdodEJyZWFrcG9pbnQoc2V0SGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tSGVpZ2h0QnJlYWtwb2ludChzZXRIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhcmtUaGVtZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJGRhcmtFbGVtZW50ID0gJChcIltkYXRhLWRhcmstc3JjXVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAkbGlnaHRCdG5UcmlnZ2VyID0gJChcIiNsaWdodC1tb2RlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICRkYXJrQnRuVHJpZ2dlciA9ICQoXCIjZGFyay1tb2RlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhcmtDb2xvclNjaGVtZSA9IFwiZGFya0NvbG9yU2NoZW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdERhcmsgPSAkYm9keS5oYXNDbGFzcyhcImRhcmtcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBDb29raWVzLmdldChkYXJrQ29sb3JTY2hlbWUpICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gJGJvZHkuYWRkQ2xhc3MoXCJkYXJrXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICRkYXJrQnRuVHJpZ2dlci5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXJrRWxlbVNyYygpO1xyXG4gICAgICAgICAgICAgICAgICAgICRib2R5LmFkZENsYXNzKFwiZGFya1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBJTlNQSVJPLmVsZW1lbnRzLnNoYXBlRGl2aWRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIENvb2tpZXMuc2V0KGRhcmtDb2xvclNjaGVtZSwgdHJ1ZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBpcmVzOiBOdW1iZXIoMzY1KSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICRsaWdodEJ0blRyaWdnZXIub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlnaHRFbGVtU3JjKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoXCJkYXJrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIElOU1BJUk8uZWxlbWVudHMuc2hhcGVEaXZpZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoZGFya0NvbG9yU2NoZW1lKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkYm9keS5oYXNDbGFzcyhcImRhcmtcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXJrRWxlbVNyYygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRhcmtFbGVtU3JjKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRkYXJrRWxlbWVudC5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbSA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtT3JpZ2luYWxTcmMgPSBlbGVtLmF0dHIoXCJzcmNcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtRGFya1NyYyA9IGVsZW0uYXR0cihcImRhdGEtZGFyay1zcmNcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbURhcmtTcmMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uYXR0cihcImRhdGEtb3JpZ2luYWwtc3JjXCIsIGVsZW1PcmlnaW5hbFNyYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLmF0dHIoXCJzcmNcIiwgZWxlbURhcmtTcmMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbGlnaHRFbGVtU3JjKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRkYXJrRWxlbWVudC5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbSA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtTGlnaHRTcmMgPSBlbGVtLmF0dHIoXCJkYXRhLW9yaWdpbmFsLXNyY1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtTGlnaHRTcmMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uYXR0cihcInNyY1wiLCBlbGVtTGlnaHRTcmMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBJTlNQSVJPLmhlYWRlciA9IHtcclxuICAgICAgICAgICAgZnVuY3Rpb25zOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIElOU1BJUk8uaGVhZGVyLmxvZ29TdGF0dXMoKTtcclxuICAgICAgICAgICAgICAgIElOU1BJUk8uaGVhZGVyLnN0aWNreUhlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgSU5TUElSTy5oZWFkZXIudG9wQmFyKCk7XHJcbiAgICAgICAgICAgICAgICBJTlNQSVJPLmhlYWRlci5zZWFyY2goKTtcclxuICAgICAgICAgICAgICAgIElOU1BJUk8uaGVhZGVyLm1haW5NZW51KCk7XHJcbiAgICAgICAgICAgICAgICBJTlNQSVJPLmhlYWRlci5tYWluTWVudVJlc3BvbnNpdmVTaG93KCk7XHJcbiAgICAgICAgICAgICAgICBJTlNQSVJPLmhlYWRlci5tYWluTWVudU92ZXJsYXkoKTtcclxuICAgICAgICAgICAgICAgIElOU1BJUk8uaGVhZGVyLnBhZ2VNZW51KCk7XHJcbiAgICAgICAgICAgICAgICBJTlNQSVJPLmhlYWRlci5zaWRlYmFyT3ZlcmxheSgpO1xyXG4gICAgICAgICAgICAgICAgSU5TUElSTy5oZWFkZXIuZG90c01lbnUoKTtcclxuICAgICAgICAgICAgICAgIElOU1BJUk8uaGVhZGVyLm9uZXBhZ2VNZW51KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvZ29TdGF0dXM6IGZ1bmN0aW9uKHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGhlYWRlckxvZ29EZWZhdWx0ID0gaGVhZGVyTG9nby5maW5kKCQoXCIubG9nby1kZWZhdWx0XCIpKSxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJMb2dvRGFyayA9IGhlYWRlckxvZ28uZmluZCgkKFwiLmxvZ28tZGFya1wiKSksXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyTG9nb0ZpeGVkID0gaGVhZGVyTG9nby5maW5kKFwiLmxvZ28tZml4ZWRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyTG9nb1Jlc3BvbnNpdmUgPSBoZWFkZXJMb2dvLmZpbmQoXCIubG9nby1yZXNwb25zaXZlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkaGVhZGVyLmhhc0NsYXNzKFwiaGVhZGVyLXN0aWNreVwiKSAmJiBoZWFkZXJMb2dvRml4ZWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlckxvZ29EZWZhdWx0LmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlckxvZ29EYXJrLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlckxvZ29SZXNwb25zaXZlLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlckxvZ29GaXhlZC5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlckxvZ29EZWZhdWx0LnJlbW92ZUF0dHIoXCJzdHlsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJMb2dvRGFyay5yZW1vdmVBdHRyKFwic3R5bGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyTG9nb1Jlc3BvbnNpdmUucmVtb3ZlQXR0cihcInN0eWxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlckxvZ29GaXhlZC5yZW1vdmVBdHRyKFwic3R5bGVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkKHdpbmRvdykuYnJlYWtwb2ludHMoXCJsZXNzVGhhblwiLCBcImxnXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoZWFkZXJMb2dvUmVzcG9uc2l2ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlckxvZ29EZWZhdWx0LmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJMb2dvRGFyay5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyTG9nb0ZpeGVkLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJMb2dvUmVzcG9uc2l2ZS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0aWNreUhlYWRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2hyaW5rSGVhZGVyID0gJGhlYWRlci5hdHRyKFwiZGF0YS1zaHJpbmtcIikgfHwgMCxcclxuICAgICAgICAgICAgICAgICAgICBzaHJpbmtIZWFkZXJBY3RpdmUgPSAkaGVhZGVyLmF0dHIoXCJkYXRhLXN0aWNreS1hY3RpdmVcIikgfHwgMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbE9uVG9wID0gJHdpbmRvdy5zY3JvbGxUb3AoKTtcclxuICAgICAgICAgICAgICAgIGlmICgkaGVhZGVyLmhhc0NsYXNzKFwiaGVhZGVyLW1vZGVyblwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNocmlua0hlYWRlciA9IDMwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkKHdpbmRvdykuYnJlYWtwb2ludHMoXCJncmVhdGVyRXF1YWxUb1wiLCBcImxnXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJGhlYWRlci5pcyhcIi5oZWFkZXItZGlzYWJsZS1maXhlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsT25Ub3AgPiAkaGVhZGVyT2Zmc2V0VG9wICsgc2hyaW5rSGVhZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaGVhZGVyLmFkZENsYXNzKFwiaGVhZGVyLXN0aWNreVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxPblRvcCA+ICRoZWFkZXJPZmZzZXRUb3AgKyBzaHJpbmtIZWFkZXJBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaGVhZGVyLmFkZENsYXNzKFwic3RpY2t5LWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoU2V0dGluZ3Muc3VibWVudUxpZ2h0ICYmIFNldHRpbmdzLmhlYWRlckhhc0RhcmtDbGFzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaGVhZGVyLnJlbW92ZUNsYXNzKFwiZGFya1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3MuaGVhZGVyRGFya0NsYXNzUmVtb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElOU1BJUk8uaGVhZGVyLmxvZ29TdGF0dXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRoZWFkZXIucmVtb3ZlQ2xhc3MoKS5hZGRDbGFzcygkaGVhZGVyQ3VycmVudENsYXNzZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFNldHRpbmdzLnNsaWRlckRhcmtDbGFzcyAmJiBTZXR0aW5ncy5oZWFkZXJIYXNEYXJrQ2xhc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaGVhZGVyLnJlbW92ZUNsYXNzKFwiZGFya1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXR0aW5ncy5oZWFkZXJEYXJrQ2xhc3NSZW1vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIElOU1BJUk8uaGVhZGVyLmxvZ29TdGF0dXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgJCh3aW5kb3cpLmJyZWFrcG9pbnRzKFwibGVzc1RoYW5cIiwgXCJsZ1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJGhlYWRlci5hdHRyKFwiZGF0YS1yZXNwb25zaXZlLWZpeGVkXCIpID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxPblRvcCA+ICRoZWFkZXJPZmZzZXRUb3AgKyBzaHJpbmtIZWFkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRoZWFkZXIuYWRkQ2xhc3MoXCJoZWFkZXItc3RpY2t5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbE9uVG9wID4gJGhlYWRlck9mZnNldFRvcCArIHNocmlua0hlYWRlckFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRoZWFkZXIuYWRkQ2xhc3MoXCJzdGlja3ktYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChTZXR0aW5ncy5zdWJtZW51TGlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGhlYWRlci5yZW1vdmVDbGFzcyhcImRhcmtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzLmhlYWRlckRhcmtDbGFzc1JlbW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJTlNQSVJPLmhlYWRlci5sb2dvU3RhdHVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaGVhZGVyLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoJGhlYWRlckN1cnJlbnRDbGFzc2VzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXR0aW5ncy5oZWFkZXJEYXJrQ2xhc3NSZW1vdmVkID09IHRydWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYm9keS5oYXNDbGFzcyhcIm1haW5NZW51LW9wZW5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRoZWFkZXIucmVtb3ZlQ2xhc3MoXCJkYXJrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSU5TUElSTy5oZWFkZXIubG9nb1N0YXR1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vY2hrZFxyXG4gICAgICAgICAgICB0b3BCYXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCR0b3BiYXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjdG9wYmFyIC50b3BiYXItZHJvcGRvd24gLnRvcGJhci1mb3JtXCIpLmVhY2goZnVuY3Rpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aW5kb3cud2lkdGgoKSAtICgkKGVsZW1lbnQpLndpZHRoKCkgKyAkKGVsZW1lbnQpLm9mZnNldCgpLmxlZnQpIDxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmFkZENsYXNzKFwiZHJvcGRvd24taW52ZXJ0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlYXJjaDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJHNlYXJjaCA9ICQoXCIjc2VhcmNoXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCRzZWFyY2gubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWFyY2hCdG4gPSAkKFwiI2J0bi1zZWFyY2hcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaEJ0bkNsb3NlID0gJChcIiNidG4tc2VhcmNoLWNsb3NlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hJbnB1dCA9ICRzZWFyY2guZmluZChcIi5mb3JtLWNvbnRyb2xcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG9wZW5TZWFyY2goKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRib2R5LmFkZENsYXNzKFwic2VhcmNoLW9wZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaElucHV0LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjbG9zZVNlYXJjaCgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoXCJzZWFyY2gtb3BlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoSW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hCdG4ub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlblNlYXJjaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoQnRuQ2xvc2Uub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VTZWFyY2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihldikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXYua2V5Q29kZSA9PSAyNykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VTZWFyY2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtYWluTWVudTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJG1haW5NZW51Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkbWFpbk1lbnVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoXCIuZHJvcGRvd24sIC5kcm9wZG93bi1zdWJtZW51XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcmVwZW5kKCc8c3BhbiBjbGFzcz1cImRyb3Bkb3duLWFycm93XCI+PC9zcGFuPicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgJG1lbnVJdGVtTGlua3MgPSAkKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyNtYWluTWVudSBuYXYgPiB1bCA+IGxpLmRyb3Bkb3duID4gYVtocmVmPVwiI1wiXSwgI21haW5NZW51IG5hdiA+IHVsID4gbGkuZHJvcGRvd24gPiAuZHJvcGRvd24tYXJyb3csIC5kcm9wZG93bi1zdWJtZW51ID4gYVtocmVmPVwiI1wiXSwgLmRyb3Bkb3duLXN1Ym1lbnUgPiAuZHJvcGRvd24tYXJyb3csIC5kcm9wZG93bi1zdWJtZW51ID4gc3BhbiwgLnBhZ2UtbWVudSBuYXYgPiB1bCA+IGxpLmRyb3Bkb3duID4gYSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHRyaWdnZXJCdXR0b24gPSAkKFwiI21haW5NZW51LXRyaWdnZXIgYSwgI21haW5NZW51LXRyaWdnZXIgYnV0dG9uXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzaW5nID0gZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJFdmVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHRyaWdnZXJCdXR0b24ub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykuYnJlYWtwb2ludHMoXCJsZXNzVGhhblwiLCBcImxnXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wZW5NZW51ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwcm9jZXNzaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXR0aW5ncy5tZW51SXNPcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFNldHRpbmdzLnN1Ym1lbnVMaWdodCAmJiBTZXR0aW5ncy5oZWFkZXJIYXNEYXJrQ2xhc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRoZWFkZXIucmVtb3ZlQ2xhc3MoXCJkYXJrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3MuaGVhZGVyRGFya0NsYXNzUmVtb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3MuaGVhZGVySGFzRGFya0NsYXNzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3MuaGVhZGVyRGFya0NsYXNzUmVtb3ZlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGhlYWRlci5hZGRDbGFzcyhcImRhcmtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5hZGRDbGFzcyhcInRvZ2dsZS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRib2R5LmFkZENsYXNzKFwibWFpbk1lbnUtb3BlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSU5TUElSTy5oZWFkZXIubG9nb1N0YXR1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbWFpbk1lbnUuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPSU1NRUk6IHN1YnRyYWN0aW5nIHRoZSBoZWFkZXIgaGVpZ2h0IHRvIGZpeCBhbiBpc3N1ZSBpbiB0aGUgdGhlbWUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1pbi1oZWlnaHRcIjogJHdpbmRvdy5oZWlnaHQoKSAtICRtYWluTWVudS5wYXJlbnQoKS5vdXRlckhlaWdodCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiBcImVhc2VJbk91dFF1YXJ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJG1haW5NZW51LmFkZENsYXNzKFwibWVudS1hbmltYXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2xvc2VNZW51ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwcm9jZXNzaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXR0aW5ncy5tZW51SXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElOU1BJUk8uaGVhZGVyLmxvZ29TdGF0dXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJG1haW5NZW51LmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtaW4taGVpZ2h0XCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbWFpbk1lbnUucmVtb3ZlQ2xhc3MoXCJtZW51LWFuaW1hdGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoXCJtYWluTWVudS1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQ2xhc3MoXCJ0b2dnbGUtYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3Muc3VibWVudUxpZ2h0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzLmhlYWRlckhhc0RhcmtDbGFzcyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXR0aW5ncy5oZWFkZXJEYXJrQ2xhc3NSZW1vdmVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEkaGVhZGVyLmhhc0NsYXNzKFwiaGVhZGVyLXN0aWNreVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaGVhZGVyLmFkZENsYXNzKFwiZGFya1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXR0aW5ncy5zbGlkZXJEYXJrQ2xhc3MgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3MuaGVhZGVySGFzRGFya0NsYXNzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzLmhlYWRlckRhcmtDbGFzc1JlbW92ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGhlYWRlci5yZW1vdmVDbGFzcyhcImRhcmtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzLmhlYWRlckRhcmtDbGFzc1JlbW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiBcImVhc2VJbk91dFF1YXJ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghU2V0dGluZ3MubWVudUlzT3Blbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJFdmVudCA9IG9wZW5NZW51KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJFdmVudCA9IGNsb3NlTWVudSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJG1lbnVJdGVtTGlua3Mub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KFwibGlcIikuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhcImhvdmVyLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGJvZHkuaGFzQ2xhc3MoXCJiLS1yZXNwb25zaXZlXCIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbWFpbk1lbnUuaGFzQ2xhc3MoXCJtZW51LW9uY2xpY2tcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudChcImxpXCIpLnRvZ2dsZUNsYXNzKFwiaG92ZXItYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJGJvZHkub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRtYWluTWVudS5maW5kKFwiLmhvdmVyLWFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImhvdmVyLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLm9uKFwicmVzaXplXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGJvZHkuaGFzQ2xhc3MoXCJtYWluTWVudS1vcGVuXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoU2V0dGluZ3MubWVudUlzT3Blbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRtYWluTWVudVRyaWdnZXJCdG4udHJpZ2dlcihcImNsaWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRtYWluTWVudS5maW5kKFwiLmhvdmVyLWFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImhvdmVyLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKmludmVydCBtZW51IGZpeCovXHJcbiAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLmJyZWFrcG9pbnRzKFwiZ3JlYXRlckVxdWFsVG9cIiwgXCJsZ1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRtZW51TGFzdEl0ZW0gPSAkKFwibmF2ID4gdWwgPiBsaTpsYXN0LWNoaWxkXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJG1lbnVMYXN0SXRlbVVsID0gJChcIm5hdiA+IHVsID4gbGk6bGFzdC1jaGlsZCA+IHVsXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJG1lbnVMYXN0SW52ZXJ0ID0gJG1lbnVMYXN0SXRlbVVsLndpZHRoKCkgLSAkbWVudUxhc3RJdGVtLndpZHRoKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbWVudUl0ZW1zID0gJChcIm5hdiA+IHVsID4gbGlcIikuZmluZChcIi5kcm9wZG93bi1tZW51XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJG1lbnVJdGVtcy5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmRyb3Bkb3duOm5vdCgubWVnYS1tZW51LWl0ZW0pIHVsIHVsXCIpLmVhY2goZnVuY3Rpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdpbmRvdy53aWR0aCgpIC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoJChlbGVtZW50KS53aWR0aCgpICsgJChlbGVtZW50KS5vZmZzZXQoKS5sZWZ0KSA8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5hZGRDbGFzcyhcIm1lbnUtaW52ZXJ0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkbWVudUxhc3RJdGVtVWwubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aW5kb3cud2lkdGgoKSAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCRtZW51TGFzdEl0ZW1VbC53aWR0aCgpICsgJG1lbnVMYXN0SXRlbS5vZmZzZXQoKS5sZWZ0KSA8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJG1lbnVMYXN0SXRlbVVsLmFkZENsYXNzKFwibWVudS1sYXN0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRtZW51SXRlbXMuY3NzKFwiZGlzcGxheVwiLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1haW5NZW51UmVzcG9uc2l2ZVNob3c6IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWFpbk1lbnVPdmVybGF5OiBmdW5jdGlvbigpIHt9LFxyXG4gICAgICAgICAgICBwYWdlTWVudTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJHBhZ2VNZW51ID0gJChcIi5wYWdlLW1lbnVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRwYWdlTWVudS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLmJyZWFrcG9pbnRzKFwiZ3JlYXRlckVxdWFsVG9cIiwgXCJsZ1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNocmlua1BhZ2VNZW51ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwYWdlTWVudS5hdHRyKFwiZGF0YS1zaHJpbmtcIikgfHwgJHBhZ2VNZW51Lm9mZnNldCgpLnRvcCArIDIwMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkcGFnZU1lbnUuYXR0cihcImRhdGEtc3RpY2t5XCIpID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd2luZG93LnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHdpbmRvdy5zY3JvbGxUb3AoKSA+IHNocmlua1BhZ2VNZW51KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwYWdlTWVudS5hZGRDbGFzcyhcInN0aWNreS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRoZWFkZXIuYWRkQ2xhc3MoXCJwYWdlTWVudS1zdGlja3lcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBhZ2VNZW51LnJlbW92ZUNsYXNzKFwic3RpY2t5LWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGhlYWRlci5yZW1vdmVDbGFzcyhcInBhZ2VNZW51LXN0aWNreVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkcGFnZU1lbnUuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoXCIjcGFnZU1lbnUtdHJpZ2dlclwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBhZ2VNZW51LnRvZ2dsZUNsYXNzKFwicGFnZS1tZW51LWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcGFnZU1lbnUudG9nZ2xlQ2xhc3MoXCJpdGVtcy12aXNpYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNpZGViYXJPdmVybGF5OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzaWRlYmFyT3ZlcmxheSA9ICQoXCIjc2lkZS1wYW5lbFwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChzaWRlYmFyT3ZlcmxheS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhck92ZXJsYXkuY3NzKFwib3BhY2l0eVwiLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2Nsb3NlLXBhbmVsXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRib2R5LnJlbW92ZUNsYXNzKFwic2lkZS1wYW5lbC1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjc2lkZS1wYW5lbC10cmlnZ2VyXCIpLnJlbW92ZUNsYXNzKFwidG9nZ2xlLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgJHNpZGVwYW5lbCA9ICQoXCIjc2lkZXBhbmVsXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICRzaWRlcGFuZWxUcmlnZ2VyID0gJChcIi5wYW5lbC10cmlnZ2VyXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpZGVwYW5lbFByb2Nlc3NpbmcgPSBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzaWRlcGFuZWxFdmVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2lkZXBhbmVsVHJpZ2dlci5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhbmVsT3BlbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNpZGVwYW5lbFByb2Nlc3NpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGVwYW5lbFByb2Nlc3NpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3MucGFuZWxJc09wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNpZGVwYW5lbC5hZGRDbGFzcyhcInBhbmVsLW9wZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWRlcGFuZWxQcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYW5lbENsb3NlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2lkZXBhbmVsUHJvY2Vzc2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkZXBhbmVsUHJvY2Vzc2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXR0aW5ncy5wYW5lbElzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNpZGVwYW5lbC5yZW1vdmVDbGFzcyhcInBhbmVsLW9wZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWRlcGFuZWxQcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghU2V0dGluZ3MucGFuZWxJc09wZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZXBhbmVsRXZlbnQgPSBwYW5lbE9wZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWRlcGFuZWxFdmVudCA9IHBhbmVsQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZG90c01lbnU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyICRkb3RzTWVudSA9ICQoXCIjZG90c01lbnVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgJGRvdHNNZW51SXRlbXMgPSAkZG90c01lbnUuZmluZChcInVsID4gbGkgPiBhXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCRkb3RzTWVudS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGRvdHNNZW51SXRlbXMub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGRvdHNNZW51SXRlbXMucGFyZW50KFwibGlcIikucmVtb3ZlQ2xhc3MoXCJjdXJyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudChcImxpXCIpLmFkZENsYXNzKFwiY3VycmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLnN0b3AodHJ1ZSwgZmFsc2UpLmFuaW1hdGUoeyBzY3JvbGxUb3A6ICQoJCh0aGlzKS5hdHRyKFwiaHJlZlwiKSkub2Zmc2V0KCkudG9wfSwgZWxlbS5vcHRpb25zLnNwZWVkLCBcImVhc2VJbk91dEV4cG9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICRkb3RzTWVudUl0ZW1zLnBhcmVudHMoXCJsaVwiKS5yZW1vdmVDbGFzcyhcImN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJGRvdHNNZW51XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKCdhW2hyZWY9XCIjJyArIElOU1BJUk8uaGVhZGVyLmN1cnJlbnRTZWN0aW9uKCkgKyAnXCJdJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnBhcmVudChcImxpXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uZXBhZ2VNZW51OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkbWFpbk1lbnUuaGFzQ2xhc3MoXCJtZW51LW9uZS1wYWdlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICRjdXJyZW50TWVudUl0ZW0gPSBcImN1cnJlbnRcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGN1cnJlbnRTZWN0aW9uID0gSU5TUElSTy5oZWFkZXIuY3VycmVudFNlY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJG1haW5NZW51XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmluZChcIm5hdiA+IHVsID4gbGkgPiBhXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGFyZW50cyhcImxpXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJGN1cnJlbnRNZW51SXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRtYWluTWVudVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoJ25hdiA+IHVsID4gbGkgPiBhW2hyZWY9XCIjJyArICRjdXJyZW50U2VjdGlvbiArICdcIl0nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBhcmVudChcImxpXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJGN1cnJlbnRNZW51SXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGN1cnJlbnRTZWN0aW9uOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbGVtQ3VycmVudCA9IFwiYm9keVwiO1xyXG4gICAgICAgICAgICAgICAgJHNlY3Rpb24uZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbSA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lSWQgPSBlbGVtLmF0dHIoXCJpZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub2Zmc2V0KCkudG9wIC0gJHdpbmRvdy5oZWlnaHQoKSAvIDMgPCAkd2luZG93LnNjcm9sbFRvcCgpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub2Zmc2V0KCkudG9wICsgZWxlbS5oZWlnaHQoKSAtICR3aW5kb3cuaGVpZ2h0KCkgLyAzID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHdpbmRvdy5zY3JvbGxUb3AoKVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtQ3VycmVudCA9IGVsZW1lSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbUN1cnJlbnQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBJTlNQSVJPLnNsaWRlciA9IHtcclxuICAgICAgICAgICAgZnVuY3Rpb25zOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIElOU1BJUk8uc2xpZGVyLmluc3Bpcm9TbGlkZXIoKTtcclxuICAgICAgICAgICAgICAgIElOU1BJUk8uc2xpZGVyLmNhcm91c2VsKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluc3Bpcm9TbGlkZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCRpbnNwaXJvU2xpZGVyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvL0NoZWNrIGlmIGZsaWNraXR5IHBsdWdpbiBpcyBsb2FkZWRcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICQuZm4uZmxpY2tpdHkgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSU5TUElSTy5lbGVtZW50cy5ub3RpZmljYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIldhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwialF1ZXJ5IGZsaWNraXR5IHNsaWRlciBwbHVnaW4gaXMgbWlzc2luZyBpbiBwbHVnaW5zLmpzIGZpbGUuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVmYXVsdEFuaW1hdGlvbiA9IFwiYW5pbWF0ZV9fZmFkZUluVXBcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZV9jYXB0aW9ucygkZWxlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGNhcHRpb25zID0gJGVsZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRjYXB0aW9ucy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRjYXB0aW9uRWxlbSA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb24gPSBcIjYwMG1zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwiZGF0YS1hbmltYXRlLWR1cmF0aW9uXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb24gPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWFuaW1hdGUtZHVyYXRpb25cIikgKyBcIm1zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2FwdGlvbkVsZW0uY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcyhcImFuaW1hdGlvbi1kdXJhdGlvblwiLCBhbmltYXRpb25EdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkY2FwdGlvbnMuZWFjaChmdW5jdGlvbihpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRjYXB0aW9uRWxlbSA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdGlvbkRlbGF5ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2FwdGlvbkVsZW0uYXR0cihcImRhdGEtY2FwdGlvbi1kZWxheVwiKSB8fCBpbmRleCAqIDM1MCArIDEwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdGlvbkFuaW1hdGlvbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhcHRpb25FbGVtLmF0dHIoXCJkYXRhLWNhcHRpb24tYW5pbWF0ZVwiKSB8fCBkZWZhdWx0QW5pbWF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjYXB0aW9uRWxlbS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjYXB0aW9uRWxlbS5hZGRDbGFzcyhjYXB0aW9uQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGNhcHRpb25EZWxheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaGlkZV9jYXB0aW9ucygkZWxlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGNhcHRpb25zID0gJGVsZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRjYXB0aW9ucy5lYWNoKGZ1bmN0aW9uKGNhcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYXB0aW9uID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0aW9uQW5pbWF0aW9uID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0aW9uLmF0dHIoXCJkYXRhLWNhcHRpb24tYW5pbWF0ZVwiKSB8fCBkZWZhdWx0QW5pbWF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdGlvbi5yZW1vdmVDbGFzcyhjYXB0aW9uQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHRpb24ucmVtb3ZlQXR0cihcInN0eWxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHN0YXJ0X2tlbmJ1cm4oZWxlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFNsaWRlID0gZWxlbS5maW5kKFwiLnNsaWRlLmlzLXNlbGVjdGVkXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNsaWRlS2VuYnVybnMgPSBjdXJyZW50U2xpZGUuaGFzQ2xhc3MoXCJrZW5idXJuc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTbGlkZUtlbmJ1cm5zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZS5maW5kKFwiLmtlbmJ1cm5zLWJnXCIpLmFkZENsYXNzKFwia2VuYnVybnMtYmctYW5pbWF0ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHN0b3Bfa2VuYnVybihlbGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3RDdXJyZW50U2xpZGUgPSBlbGVtLmZpbmQoXCIuc2xpZGU6bm90KC5pcy1zZWxlY3RlZClcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEN1cnJlbnRTbGlkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoXCIua2VuYnVybnMtYmdcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImtlbmJ1cm5zLWJnLWFuaW1hdGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBzbGlkZV9kYXJrKGVsZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRzbGlkZXJDbGFzc1NsaWRlID0gZWxlbS5maW5kKFwiLnNsaWRlLmlzLXNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2xpZGVyQ2xhc3NTbGlkZS5oYXNDbGFzcyhcInNsaWRlLWRhcmtcIikgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzLmhlYWRlckhhc0RhcmtDbGFzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRoZWFkZXIucmVtb3ZlQ2xhc3MoXCJkYXJrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3Muc2xpZGVyRGFya0NsYXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzLmhlYWRlckRhcmtDbGFzc1JlbW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3Muc2xpZGVyRGFya0NsYXNzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3MuaGVhZGVyRGFya0NsYXNzUmVtb3ZlZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzLmhlYWRlckhhc0RhcmtDbGFzcyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEkYm9keS5oYXNDbGFzcyhcIm1haW5NZW51LW9wZW5cIikgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhJGhlYWRlci5oYXNDbGFzcyhcInN0aWNreS1hY3RpdmVcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRoZWFkZXIuYWRkQ2xhc3MoXCJkYXJrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBzbGlkZXJIZWlnaHQoZWxlbSwgc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJIZWlnaHQgPSAkaGVhZGVyLm91dGVySGVpZ2h0KCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3BiYXJIZWlnaHQgPSAkdG9wYmFyLm91dGVySGVpZ2h0KCkgfHwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd0hlaWdodCA9ICR3aW5kb3cuaGVpZ2h0KCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXJDdXJyZW50SGVpZ2h0ID0gZWxlbS5oZWlnaHQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmVlbkhlaWdodEV4dHJhID0gaGVhZGVySGVpZ2h0ICsgdG9wYmFySGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNsaWRlckNsYXNzU2xpZGUgPSBlbGVtLmZpbmQoXCIuc2xpZGVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXJGdWxsc2NyZWVuID0gZWxlbS5oYXNDbGFzcyhcInNsaWRlci1mdWxsc2NyZWVuXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NyZWVuUmF0aW8gPSBlbGVtLmhhc0NsYXNzKFwic2xpZGVyLWhhbGZzY3JlZW5cIikgPyAxIDogMS4yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnRIZWFkZXIgPSAkaGVhZGVyLmF0dHIoXCJkYXRhLXRyYW5zcGFyZW50XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tSGVpZ2h0ID0gZWxlbS5hdHRyKFwiZGF0YS1oZWlnaHRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlSGVpZ2h0WHMgPSBlbGVtLmF0dHIoXCJkYXRhLWhlaWdodC14c1wiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckZ1bGxzY3JlZW4gPSBlbGVtLmZpbmQoXCIuY29udGFpbmVyXCIpLmZpcnN0KCkub3V0ZXJIZWlnaHQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRDcm9wO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lckZ1bGxzY3JlZW4gPj0gd2luZG93SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50Q3JvcCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVyTWluSGVpZ2h0ID0gY29udGFpbmVyRnVsbHNjcmVlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uY3NzKFwibWluLWhlaWdodFwiLCBzbGlkZXJNaW5IZWlnaHQgKyAxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNsaWRlckNsYXNzU2xpZGUuY3NzKFwibWluLWhlaWdodFwiLCBzbGlkZXJNaW5IZWlnaHQgKyAxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKFwiLmZsaWNraXR5LXZpZXdwb3J0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyhcIm1pbi1oZWlnaHRcIiwgc2xpZGVyTWluSGVpZ2h0ICsgMTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVyRWxlbWVudHNIZWlnaHQoXCJudWxsXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gc2xpZGVyRWxlbWVudHNIZWlnaHQoaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGVpZ2h0ID09IFwibnVsbFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5jc3MoXCJoZWlnaHRcIiwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNsaWRlckNsYXNzU2xpZGUuY3NzKFwiaGVpZ2h0XCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uZmluZChcIi5mbGlja2l0eS12aWV3cG9ydFwiKS5jc3MoXCJoZWlnaHRcIiwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uY3NzKFwiaGVpZ2h0XCIsIGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNsaWRlckNsYXNzU2xpZGUuY3NzKFwiaGVpZ2h0XCIsIGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5maW5kKFwiLmZsaWNraXR5LXZpZXdwb3J0XCIpLmNzcyhcImhlaWdodFwiLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXN0b21IZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQod2luZG93KS5icmVha3BvaW50cyhcImdyZWF0ZXJFcXVhbFRvXCIsIFwibGdcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVyRWxlbWVudHNIZWlnaHQoY3VzdG9tSGVpZ2h0ICsgXCJweFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zaXZlSGVpZ2h0WHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQod2luZG93KS5icmVha3BvaW50cyhcImxlc3NUaGFuXCIsIFwibWRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVyRWxlbWVudHNIZWlnaHQocmVzcG9uc2l2ZUhlaWdodFhzICsgXCJweFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICRpbnNwaXJvU2xpZGVyLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9QbHVnaW4gT3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsU2VsZWN0b3I6IGVsZW0uYXR0cihcImRhdGEtaXRlbVwiKSB8fCBcIi5zbGlkZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldk5leHRCdXR0b25zOiBlbGVtLmRhdGEoXCJhcnJvd3NcIikgPT0gZmFsc2UgPyBmYWxzZSA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlRG90czogZWxlbS5kYXRhKFwiZG90c1wiKSA9PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhZGU6IGVsZW0uZGF0YShcImZhZGVcIikgPT0gdHJ1ZSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogZWxlbS5kYXRhKFwiZHJhZ1wiKSA9PSB0cnVlID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJlZVNjcm9sbDogZWxlbS5kYXRhKFwiZnJlZS1zY3JvbGxcIikgPT0gdHJ1ZSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBBcm91bmQ6IGVsZW0uZGF0YShcImxvb3BcIikgPT0gZmFsc2UgPyBmYWxzZSA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cENlbGxzOiBlbGVtLmRhdGEoXCJncm91cC1jZWxsc1wiKSA9PSB0cnVlID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b1BsYXk6IGVsZW0uYXR0cihcImRhdGEtYXV0b3BsYXlcIikgfHwgNzAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdXNlQXV0b1BsYXlPbkhvdmVyOiBlbGVtLmRhdGEoXCJob3ZlcnBhdXNlXCIpID09IHRydWUgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogZWxlbS5kYXRhKFwiYWRhcHRpdmUtaGVpZ2h0XCIpID09IGZhbHNlID8gZmFsc2UgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzTmF2Rm9yOiBlbGVtLmF0dHIoXCJkYXRhLW5hdmlnYXRpb25cIikgfHwgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEF0dHJhY3Rpb246IGVsZW0uYXR0cihcImRhdGEtYXR0cmFjdGlvblwiKSB8fCAwLjA3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJpY3Rpb246IGVsZW0uYXR0cihcImRhdGEtZnJpY3Rpb25cIikgfHwgMC45LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbEluZGV4OiBlbGVtLmF0dHIoXCJkYXRhLWluaXRpYWwtaW5kZXhcIikgfHwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHk6IGVsZW0uZGF0YShcImFjY2Vzc2liaWxpdHlcIikgPT0gdHJ1ZSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEdhbGxlcnlTaXplOiBlbGVtLmRhdGEoXCJnYWxsZXJ5LXNpemVcIikgPT0gZmFsc2UgPyBmYWxzZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplOiBlbGVtLmRhdGEoXCJyZXNpemVcIikgPT0gZmFsc2UgPyBmYWxzZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbEFsaWduOiBlbGVtLmF0dHIoXCJkYXRhLWFsaWduXCIpIHx8IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheVdob2xlVmlkZW86IGVsZW0uYXR0cihcImRhdGEtcGxheS13aG9sZS12aWRlb1wiKSA9PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9LZW5idXJucyBlZmZlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5maW5kKFwiLnNsaWRlXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImtlbmJ1cm5zXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1DaGlsZCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1DaGlsZEltYWdlID0gZWxlbUNoaWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8uKlxccz91cmxcXChbXFwnXFxcIl0/LywgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1tcXCdcXFwiXT9cXCkuKi8sIFwiXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbUNoaWxkLmF0dHIoXCJkYXRhLWJnLWltYWdlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1DaGlsZEltYWdlID0gZWxlbUNoaWxkLmF0dHIoXCJkYXRhLWJnLWltYWdlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtQ2hpbGQucHJlcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJrZW5idXJucy1iZ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTp1cmwoJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1DaGlsZEltYWdlICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJylcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uZmluZChcIi5zbGlkZSB2aWRlb1wiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLmJyZWFrcG9pbnRzKFwibGVzc1RoYW5cIiwgXCJsZ1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub3B0aW9ucy5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtLmZpbmQoXCIuc2xpZGVcIikubGVuZ3RoIDw9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub3B0aW9ucy5wcmV2TmV4dEJ1dHRvbnMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub3B0aW9ucy5wYWdlRG90cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLmF1dG9QbGF5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm9wdGlvbnMuZHJhZ2dhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghJC5pc051bWVyaWMoZWxlbS5vcHRpb25zLmF1dG9QbGF5KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLmF1dG9QbGF5ICE9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLmF1dG9QbGF5ID0gTnVtYmVyKDcwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoSU5TUElSTy5jb3JlLnJ0bFN0YXR1cygpID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub3B0aW9ucy5yZXNpemUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXJIZWlnaHQoZWxlbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5zcGlyb1NsaWRlckRhdGEgPSBlbGVtLmZsaWNraXR5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxTZWxlY3RvcjogZWxlbS5vcHRpb25zLmNlbGxTZWxlY3RvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZOZXh0QnV0dG9uczogZWxlbS5vcHRpb25zLnByZXZOZXh0QnV0dG9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VEb3RzOiBlbGVtLm9wdGlvbnMucGFnZURvdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWRlOiBlbGVtLm9wdGlvbnMuZmFkZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogZWxlbS5vcHRpb25zLmRyYWdnYWJsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyZWVTY3JvbGw6IGVsZW0ub3B0aW9ucy5mcmVlU2Nyb2xsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcEFyb3VuZDogZWxlbS5vcHRpb25zLndyYXBBcm91bmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cENlbGxzOiBlbGVtLm9wdGlvbnMuZ3JvdXBDZWxscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9QbGF5OiBOdW1iZXIoZWxlbS5vcHRpb25zLmF1dG9QbGF5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdXNlQXV0b1BsYXlPbkhvdmVyOiBlbGVtLm9wdGlvbnMucGF1c2VBdXRvUGxheU9uSG92ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogZWxlbS5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNOYXZGb3I6IGVsZW0ub3B0aW9ucy5hc05hdkZvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQXR0cmFjdGlvbjogTnVtYmVyKGVsZW0ub3B0aW9ucy5zZWxlY3RlZEF0dHJhY3Rpb24pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJpY3Rpb246IGVsZW0ub3B0aW9ucy5mcmljdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxJbmRleDogZWxlbS5vcHRpb25zLmluaXRpYWxJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHk6IGVsZW0ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FsbGVyeVNpemU6IGVsZW0ub3B0aW9ucy5zZXRHYWxsZXJ5U2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogZWxlbS5vcHRpb25zLnJlc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxBbGlnbjogZWxlbS5vcHRpb25zLmNlbGxBbGlnbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0VG9MZWZ0OiBJTlNQSVJPLmNvcmUucnRsU3RhdHVzKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5OiBmdW5jdGlvbihpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGNhcHRpb25zID0gZWxlbS5maW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIuc2xpZGUuaXMtc2VsZWN0ZWQgLnNsaWRlLWNhcHRpb25zID4gKlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlX2RhcmsoZWxlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlckhlaWdodChlbGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRfa2VuYnVybihlbGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZV9jYXB0aW9ucygkY2FwdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKFwiLnNsaWRlOm5vdCguaXMtc2VsZWN0ZWQpIHZpZGVvXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24oaSwgdmlkZW8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW8ucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW8uY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCA3MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmbGt0eSA9IGluc3Bpcm9TbGlkZXJEYXRhLmRhdGEoXCJmbGlja2l0eVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHdyYXBBcm91bmRTdG9wKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZsa3R5LnBsYXllci5zdGF0ZSAhPSAncGxheWluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQXV0b3BsYXkoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNBdExhc3QgPSBmbGt0eS5zZWxlY3RlZEluZGV4ID09IGZsa3R5LnNsaWRlcy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQXRMYXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUF1dG9wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRpc2FibGVBdXRvcGxheSgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uZmxpY2tpdHkoJ3N0b3BQbGF5ZXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub2ZmKCdzZWxlY3QuZmxpY2tpdHknLCB3cmFwQXJvdW5kU3RvcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3Bpcm9TbGlkZXJEYXRhLm9uKFwiY2hhbmdlLmZsaWNraXR5XCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRjYXB0aW9ucyA9IGVsZW0uZmluZChcIi5zbGlkZS5pcy1zZWxlY3RlZCAuc2xpZGUtY2FwdGlvbnMgPiAqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9jYXB0aW9ucygkY2FwdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wX2tlbmJ1cm4oZWxlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0X2tlbmJ1cm4oZWxlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlX2NhcHRpb25zKCRjYXB0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLmZpbmQoXCIuc2xpZGUgdmlkZW9cIikuZWFjaChmdW5jdGlvbihpLCB2aWRlbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3Bpcm9TbGlkZXJEYXRhLm9uKFwic2VsZWN0LmZsaWNraXR5XCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIElOU1BJUk8uZWxlbWVudHMuYmFja2dyb3VuZEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGNhcHRpb25zID0gZWxlbS5maW5kKFwiLnNsaWRlLmlzLXNlbGVjdGVkIC5zbGlkZS1jYXB0aW9ucyA+ICpcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZV9kYXJrKGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVySGVpZ2h0KGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRfa2VuYnVybihlbGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVfY2FwdGlvbnMoJGNhcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2aWRlbyA9IGZsa3R5LnNlbGVjdGVkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwidmlkZW9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmlkZW8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlby5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxrdHkub3B0aW9ucy5hdXRvUGxheSA9IE51bWJlcih2aWRlby5kdXJhdGlvbiAqIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGt0eS5vcHRpb25zLmF1dG9QbGF5ID0gTnVtYmVyKGVsZW0ub3B0aW9ucy5hdXRvUGxheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW0ub3B0aW9ucy53cmFwQXJvdW5kID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcEFyb3VuZFN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNwaXJvU2xpZGVyRGF0YS5vbihcImRyYWdTdGFydC5mbGlja2l0eVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkY2FwdGlvbnMgPSBlbGVtLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIuc2xpZGU6bm90KC5pcy1zZWxlY3RlZCkgLnNsaWRlLWNhcHRpb25zID4gKlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9jYXB0aW9ucygkY2FwdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlckhlaWdodChlbGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uZmxpY2tpdHkoXCJyZXBvc2l0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2Fyb3VzZWw6IGZ1bmN0aW9uKGVsZW0pIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNhcm91c2VsID0gZWxlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGNhcm91c2VsLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvL0NoZWNrIGlmIGZsaWNraXR5IHBsdWdpbiBpcyBsb2FkZWRcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICQuZm4uZmxpY2tpdHkgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSU5TUElSTy5lbGVtZW50cy5ub3RpZmljYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIldhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwialF1ZXJ5IGZsaWNraXR5IHBsdWdpbiBpcyBtaXNzaW5nIGluIHBsdWdpbnMuanMgZmlsZS5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICRjYXJvdXNlbC5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbSA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vUGx1Z2luIE9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyV2lkdGg6IGVsZW0ud2lkdGgoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBlbGVtLmF0dHIoXCJkYXRhLWl0ZW1zXCIpIHx8IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtc0xnOiBlbGVtLmF0dHIoXCJkYXRhLWl0ZW1zLWxnXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNNZDogZWxlbS5hdHRyKFwiZGF0YS1pdGVtcy1tZFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zU206IGVsZW0uYXR0cihcImRhdGEtaXRlbXMtc21cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1hzOiBlbGVtLmF0dHIoXCJkYXRhLWl0ZW1zLXhzXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBlbGVtLmF0dHIoXCJkYXRhLW1hcmdpblwiKSB8fCAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxTZWxlY3RvcjogZWxlbS5hdHRyKFwiZGF0YS1pdGVtXCIpIHx8IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldk5leHRCdXR0b25zOiBlbGVtLmRhdGEoXCJhcnJvd3NcIikgPT0gZmFsc2UgPyBmYWxzZSA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlRG90czogZWxlbS5kYXRhKFwiZG90c1wiKSA9PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhZGU6IGVsZW0uZGF0YShcImZhZGVcIikgPT0gdHJ1ZSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogZWxlbS5kYXRhKFwiZHJhZ1wiKSA9PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyZWVTY3JvbGw6IGVsZW0uZGF0YShcImZyZWUtc2Nyb2xsXCIpID09IHRydWUgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwQXJvdW5kOiBlbGVtLmRhdGEoXCJsb29wXCIpID09IGZhbHNlID8gZmFsc2UgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBDZWxsczogZWxlbS5kYXRhKFwiZ3JvdXAtY2VsbHNcIikgPT0gdHJ1ZSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9QbGF5OiBlbGVtLmF0dHIoXCJkYXRhLWF1dG9wbGF5XCIpIHx8IDcwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXVzZUF1dG9QbGF5T25Ib3ZlcjogZWxlbS5kYXRhKFwiaG92ZXItcGF1c2VcIikgPT0gZmFsc2UgPyBmYWxzZSA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc05hdkZvcjogZWxlbS5hdHRyKFwiZGF0YS1uYXZpZ2F0aW9uXCIpIHx8IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF6eUxvYWQ6IGVsZW0uZGF0YShcImxhenktbG9hZFwiKSA9PSB0cnVlID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbEluZGV4OiBlbGVtLmF0dHIoXCJkYXRhLWluaXRpYWwtaW5kZXhcIikgfHwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHk6IGVsZW0uZGF0YShcImFjY2Vzc2liaWxpdHlcIikgPT0gdHJ1ZSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiBlbGVtLmRhdGEoXCJhZGFwdGl2ZS1oZWlnaHRcIikgPT0gdHJ1ZSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9XaWR0aDogZWxlbS5kYXRhKFwiYXV0by13aWR0aFwiKSA9PSB0cnVlID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FsbGVyeVNpemU6IGVsZW0uZGF0YShcImdhbGxlcnktc2l6ZVwiKSA9PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogZWxlbS5kYXRhKFwicmVzaXplXCIpID09IGZhbHNlID8gZmFsc2UgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbEFsaWduOiBlbGVtLmF0dHIoXCJkYXRhLWFsaWduXCIpIHx8IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbjogZWxlbS5kYXRhKFwiY29udGFpblwiKSA9PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0VG9MZWZ0OiBJTlNQSVJPLmNvcmUucnRsU3RhdHVzKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0NhbGN1bGF0ZSBtaW4vbWF4IG9uIHJlc3BvbnNpdmUgYnJlYWtwb2ludHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLml0ZW1zTGcgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLml0ZW1zTGcgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWluKE51bWJlcihlbGVtLm9wdGlvbnMuaXRlbXMpLCBOdW1iZXIoNCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm9wdGlvbnMuaXRlbXNNZCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm9wdGlvbnMuaXRlbXNNZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5taW4oTnVtYmVyKGVsZW0ub3B0aW9ucy5pdGVtc0xnKSwgTnVtYmVyKDMpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLml0ZW1zU20gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLml0ZW1zU20gfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWluKE51bWJlcihlbGVtLm9wdGlvbnMuaXRlbXNNZCksIE51bWJlcigyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub3B0aW9ucy5pdGVtc1hzID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub3B0aW9ucy5pdGVtc1hzIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbihOdW1iZXIoZWxlbS5vcHRpb25zLml0ZW1zU20pLCBOdW1iZXIoMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2V0UmVzcG9uc2l2ZUNvbHVtbnM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRDYXJvdXNlbENvbHVtbnMoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKCQod2luZG93KS5icmVha3BvaW50cyhcImdldEJyZWFrcG9pbnRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwieHNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVzcG9uc2l2ZUNvbHVtbnMgPSBOdW1iZXIoZWxlbS5vcHRpb25zLml0ZW1zWHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic21cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVzcG9uc2l2ZUNvbHVtbnMgPSBOdW1iZXIoZWxlbS5vcHRpb25zLml0ZW1zU20pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibWRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVzcG9uc2l2ZUNvbHVtbnMgPSBOdW1iZXIoZWxlbS5vcHRpb25zLml0ZW1zTWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibGdcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVzcG9uc2l2ZUNvbHVtbnMgPSBOdW1iZXIoZWxlbS5vcHRpb25zLml0ZW1zTGcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwieGxcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVzcG9uc2l2ZUNvbHVtbnMgPSBOdW1iZXIoZWxlbS5vcHRpb25zLml0ZW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Q2Fyb3VzZWxDb2x1bW5zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtV2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uZmluZChcIj4gKlwiKS53cmFwKCc8ZGl2IGNsYXNzPVwicG9sby1jYXJvdXNlbC1pdGVtXCI+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtLmhhc0NsYXNzKFwiY3VzdG9tLWhlaWdodFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLnNldEdhbGxlcnlTaXplID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJTlNQSVJPLmNvcmUuY3VzdG9tSGVpZ2h0KGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSU5TUElSTy5jb3JlLmN1c3RvbUhlaWdodChlbGVtLmZpbmQoXCIucG9sby1jYXJvdXNlbC1pdGVtXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYXJvdXNlbEN1c3RvbUhlaWdodFN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE51bWJlcihlbGVtLm9wdGlvbnMuaXRlbXMpICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5vcHRpb25zLmF1dG9XaWR0aCB8fCBjYXJvdXNlbEN1c3RvbUhlaWdodFN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uZmluZChcIi5wb2xvLWNhcm91c2VsLWl0ZW1cIikuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWRkaW5nLXJpZ2h0XCI6IGVsZW0ub3B0aW9ucy5tYXJnaW4gKyBcInB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1XaWR0aCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlbGVtLm9wdGlvbnMuY29udGFpbmVyV2lkdGggKyBOdW1iZXIoZWxlbS5vcHRpb25zLm1hcmdpbikpIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVzcG9uc2l2ZUNvbHVtbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5maW5kKFwiLnBvbG8tY2Fyb3VzZWwtaXRlbVwiKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogaXRlbVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmctcmlnaHRcIjogZWxlbS5vcHRpb25zLm1hcmdpbiArIFwicHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uZmluZChcIi5wb2xvLWNhcm91c2VsLWl0ZW1cIikuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWRkaW5nLXJpZ2h0XCI6IFwiMCAhaW1wb3J0YW50O1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW0ub3B0aW9ucy5hdXRvV2lkdGggfHwgY2Fyb3VzZWxDdXN0b21IZWlnaHRTdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub3B0aW9ucy5jZWxsQWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5vcHRpb25zLmF1dG9QbGF5ID09IFwiZmFsc2VcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLmF1dG9QbGF5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghJC5pc051bWVyaWMoZWxlbS5vcHRpb25zLmF1dG9QbGF5KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLmF1dG9QbGF5ICE9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLmF1dG9QbGF5ID0gTnVtYmVyKDcwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0luaXRpYWxpemluZyBwbHVnaW4gYW5kIHBhc3NpbmcgdGhlIG9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRjYXJvdXNlbEVsZW0gPSAkKGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkY2Fyb3VzZWxFbGVtLmltYWdlc0xvYWRlZChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluaXQgSXNvdG9wZSBhZnRlciBhbGwgaW1hZ2VzIGhhdmUgbG9hZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2Fyb3VzZWxFbGVtLmZsaWNraXR5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsU2VsZWN0b3I6IGVsZW0ub3B0aW9ucy5jZWxsU2VsZWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldk5leHRCdXR0b25zOiBlbGVtLm9wdGlvbnMucHJldk5leHRCdXR0b25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VEb3RzOiBlbGVtLm9wdGlvbnMucGFnZURvdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFkZTogZWxlbS5vcHRpb25zLmZhZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiBlbGVtLm9wdGlvbnMuZHJhZ2dhYmxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyZWVTY3JvbGw6IGVsZW0ub3B0aW9ucy5mcmVlU2Nyb2xsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBBcm91bmQ6IGVsZW0ub3B0aW9ucy53cmFwQXJvdW5kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwQ2VsbHM6IGVsZW0ub3B0aW9ucy5ncm91cENlbGxzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9QbGF5OiBOdW1iZXIoZWxlbS5vcHRpb25zLmF1dG9QbGF5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXVzZUF1dG9QbGF5T25Ib3ZlcjogZWxlbS5vcHRpb25zLnBhdXNlQXV0b1BsYXlPbkhvdmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiBlbGVtLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNOYXZGb3I6IGVsZW0ub3B0aW9ucy5hc05hdkZvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsSW5kZXg6IGVsZW0ub3B0aW9ucy5pbml0aWFsSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzaWJpbGl0eTogZWxlbS5vcHRpb25zLmFjY2Vzc2liaWxpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2FsbGVyeVNpemU6IGVsZW0ub3B0aW9ucy5zZXRHYWxsZXJ5U2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemU6IGVsZW0ub3B0aW9ucy5yZXNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbEFsaWduOiBlbGVtLm9wdGlvbnMuY2VsbEFsaWduLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0VG9MZWZ0OiBlbGVtLm9wdGlvbnMucmlnaHRUb0xlZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbjogZWxlbS5vcHRpb25zLmNvbnRhaW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uYWRkQ2xhc3MoXCJjYXJvdXNlbC1sb2FkZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5oYXNDbGFzcyhcImN1c3RvbS1oZWlnaHRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIElOU1BJUk8uY29yZS5jdXN0b21IZWlnaHQoZWxlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE51bWJlcihlbGVtLm9wdGlvbnMuaXRlbXMpICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykub24oXCJyZXNpemVcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Q2Fyb3VzZWxDb2x1bW5zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1XaWR0aCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZWxlbS53aWR0aCgpICsgTnVtYmVyKGVsZW0ub3B0aW9ucy5tYXJnaW4pKSAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSZXNwb25zaXZlQ29sdW1ucztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW0ub3B0aW9ucy5hdXRvV2lkdGggfHwgY2Fyb3VzZWxDdXN0b21IZWlnaHRTdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uZmluZChcIi5wb2xvLWNhcm91c2VsLWl0ZW1cIikuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmctcmlnaHRcIjogZWxlbS5vcHRpb25zLm1hcmdpbiArIFwicHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlbGVtLmhhc0NsYXNzKFwiY3VzdG9tLWhlaWdodFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uZmluZChcIi5wb2xvLWNhcm91c2VsLWl0ZW1cIikuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGl0ZW1XaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWRkaW5nLXJpZ2h0XCI6IGVsZW0ub3B0aW9ucy5tYXJnaW4gKyBcInB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElOU1BJUk8uY29yZS5jdXN0b21IZWlnaHQoZWxlbS5maW5kKFwiLnBvbG8tY2Fyb3VzZWwtaXRlbVwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5maW5kKFwiLnBvbG8tY2Fyb3VzZWwtaXRlbVwiKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogaXRlbVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmctcmlnaHRcIjogZWxlbS5vcHRpb25zLm1hcmdpbiArIFwicHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLmZpbmQoXCIuZmxpY2tpdHktc2xpZGVyXCIpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbi1yaWdodFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1lbGVtLm9wdGlvbnMubWFyZ2luIC8gc2V0UmVzcG9uc2l2ZUNvbHVtbnMgKyBcInB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLmZsaWNraXR5KCdyZXNpemUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5mbGlja2l0eShcInJlcG9zaXRpb25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBJTlNQSVJPLmVsZW1lbnRzID0ge1xyXG4gICAgICAgICAgICBmdW5jdGlvbnM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgSU5TUElSTy5lbGVtZW50cy5zaGFwZURpdmlkZXIoKTtcclxuICAgICAgICAgICAgICAgIElOU1BJUk8uZWxlbWVudHMubmFUbygpO1xyXG4gICAgICAgICAgICAgICAgSU5TUElSTy5lbGVtZW50cy5tb3JwaGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgSU5TUElSTy5lbGVtZW50cy5idXR0b25zKCk7XHJcbiAgICAgICAgICAgICAgICBJTlNQSVJPLmVsZW1lbnRzLmFjY29yZGlvbigpO1xyXG4gICAgICAgICAgICAgICAgSU5TUElSTy5lbGVtZW50cy5hbmltYXRpb25zKCk7XHJcbiAgICAgICAgICAgICAgICBJTlNQSVJPLmVsZW1lbnRzLnBhcmFsbGF4KCk7XHJcbiAgICAgICAgICAgICAgICBJTlNQSVJPLmVsZW1lbnRzLmJhY2tncm91bmRJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgSU5TUElSTy5lbGVtZW50cy5yZXNwb25zaXZlVmlkZW9zKCk7XHJcbiAgICAgICAgICAgICAgICBJTlNQSVJPLmVsZW1lbnRzLmNvdW50ZG93blRpbWVyKCk7XHJcbiAgICAgICAgICAgICAgICBJTlNQSVJPLmVsZW1lbnRzLnByb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgICAgICAgICBJTlNQSVJPLmVsZW1lbnRzLnBpZUNoYXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAvLyBJTlNQSVJPLmVsZW1lbnRzLm1hcHMoKTtcclxuICAgICAgICAgICAgICAgIElOU1BJUk8uZWxlbWVudHMuZ3JpZExheW91dCgpO1xyXG4gICAgICAgICAgICAgICAgSU5TUElSTy5lbGVtZW50cy50b29sdGlwKCk7XHJcbiAgICAgICAgICAgICAgICBJTlNQSVJPLmVsZW1lbnRzLnBvcG92ZXIoKTtcclxuICAgICAgICAgICAgICAgIElOU1BJUk8uZWxlbWVudHMubWFnbmlmaWNQb3B1cCgpO1xyXG4gICAgICAgICAgICAgICAgSU5TUElSTy5lbGVtZW50cy55VFBsYXllcigpO1xyXG4gICAgICAgICAgICAgICAgSU5TUElSTy5lbGVtZW50cy52aW1lb1BsYXllcigpO1xyXG4gICAgICAgICAgICAgICAgSU5TUElSTy5lbGVtZW50cy5tb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgSU5TUElSTy5lbGVtZW50cy5zaWRlYmFyRml4ZWQoKTtcclxuICAgICAgICAgICAgICAgIElOU1BJUk8uZWxlbWVudHMuY2xpcGJvYXJkKCk7XHJcbiAgICAgICAgICAgICAgICBJTlNQSVJPLmVsZW1lbnRzLmJvb3RzdHJhcFN3aXRjaCgpO1xyXG4gICAgICAgICAgICAgICAgSU5TUElSTy5lbGVtZW50cy5jb3VudGRvd24oKTtcclxuICAgICAgICAgICAgICAgIElOU1BJUk8uZWxlbWVudHMub3RoZXIoKTtcclxuICAgICAgICAgICAgICAgIElOU1BJUk8uZWxlbWVudHMudmlkZW9CYWNrZ3JvdW5kKCk7XHJcbiAgICAgICAgICAgICAgICBJTlNQSVJPLmVsZW1lbnRzLmZvcm1zKCk7XHJcbiAgICAgICAgICAgICAgICBJTlNQSVJPLmVsZW1lbnRzLmZvcm1WYWxpZGF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBJTlNQSVJPLmVsZW1lbnRzLmZvcm1BamF4UHJvY2Vzc2luZygpO1xyXG4gICAgICAgICAgICAgICAgSU5TUElSTy5lbGVtZW50cy5mbG9hdGluZ0RpdigpO1xyXG4gICAgICAgICAgICAgICAgSU5TUElSTy5lbGVtZW50cy53aXphcmQoKTtcclxuICAgICAgICAgICAgICAgIElOU1BJUk8uZWxlbWVudHMuY291bnRlcnMoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZm9ybXM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgLy9TaG93IGhpZGUgcGFzc3dvcmRcclxuICAgICAgICAgICAgICAgIHZhciAkc2hvd0hpZGVQYXNzd29yZCA9ICQoXCIuc2hvdy1oaWRlLXBhc3N3b3JkXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCRzaG93SGlkZVBhc3N3b3JkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2hvd0hpZGVQYXNzd29yZC5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbSA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaWNvbkV5ZSA9IFwiaWNvbi1leWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRpY29uQ2xvc2VkRXllID0gXCJpY29uLWV5ZS1vZmZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1TaG93SGlkZUljb24gPSBlbGVtLmZpbmQoXCIuaW5wdXQtZ3JvdXAtdGV4dCBpXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbUlucHV0ID0gZWxlbS5jaGlsZHJlbihcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLmZpbmQoXCIuaW5wdXQtZ3JvdXAtdGV4dCBpXCIpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbVNob3dIaWRlSWNvbi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW0uY2hpbGRyZW4oXCJpbnB1dFwiKS5hdHRyKFwidHlwZVwiKSA9PSBcInRleHRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1JbnB1dC5hdHRyKFwidHlwZVwiLCBcInBhc3N3b3JkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1TaG93SGlkZUljb24ucmVtb3ZlQ2xhc3MoJGljb25FeWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1TaG93SGlkZUljb24uYWRkQ2xhc3MoJGljb25DbG9zZWRFeWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtLmNoaWxkcmVuKFwiaW5wdXRcIikuYXR0cihcInR5cGVcIikgPT0gXCJwYXNzd29yZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbUlucHV0LmF0dHIoXCJ0eXBlXCIsIFwidGV4dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtU2hvd0hpZGVJY29uLmFkZENsYXNzKCRpY29uRXllKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtU2hvd0hpZGVJY29uLnJlbW92ZUNsYXNzKCRpY29uQ2xvc2VkRXllKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLyogICBpZigkKCcjcHdkLWNvbnRhaW5lcicpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgdmFyIHB3ZE9wdGlvbnMgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBwd2RPcHRpb25zLnVpID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXI6IFwiI3B3ZC1jb250YWluZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld3BvcnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzczogXCIucHdzdHJlbmd0aF92aWV3cG9ydF9wcm9ncmVzc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVyZGljdDogXCIucHdzdHJlbmd0aF92aWV3cG9ydF92ZXJkaWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgcHdkT3B0aW9ucy5jb21tb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI21lc3NhZ2VzJykudGV4dCgnU3RhcnQgdHlwaW5nIHBhc3N3b3JkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHp4Y3ZibjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgenhjdmJuVGVybXM6IFsnc2FtdXJhaScsICdzaG9ndW4nLCAnYnVzaGlkbycsICdkYWlzaG8nLCAnc2VwcHVrdSddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySW5wdXRzOiBbJyN5ZWFyJywgJyNmYW1pbHluYW1lJ11cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICQoJzpwYXNzd29yZCcpLnB3c3RyZW5ndGgocHdkT3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgIH0gKi9cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZm9ybVZhbGlkYXRpb246IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZvcm1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5lZWRzLXZhbGlkYXRpb25cIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsaWRhdGlvbiA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChmb3JtcywgZnVuY3Rpb24oZm9ybSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWJtaXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwid2FzLXZhbGlkYXRlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBmb3JtQWpheFByb2Nlc3Npbmc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyICRhamF4Rm9ybSA9ICQoXHJcbiAgICAgICAgICAgICAgICAgICAgXCIud2lkZ2V0LWNvbnRhY3QtZm9ybTpub3QoLmN1c3RvbS1qcyksIC5hamF4LWZvcm06bm90KC5jdXN0b20tanMpXCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJGFqYXhGb3JtLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkYWpheEZvcm0uZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW0gPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbUN1c3RvbVJlZGlyZWN0UGFnZSA9IGVsZW0uYXR0cihcImRhdGEtc3VjY2Vzcy1wYWdlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYnV0dG9uID0gZWxlbS5maW5kKFwiYnV0dG9uI2Zvcm0tc3VibWl0XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uVGV4dCA9IGJ1dHRvbi5odG1sKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWRhdGlvbiA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChlbGVtLCBmdW5jdGlvbihmb3JtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWJtaXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybVswXS5jaGVja1ZhbGlkaXR5KCkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwid2FzLXZhbGlkYXRlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5zdWJtaXQoZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zdF91cmwgPSAkKHRoaXMpLmF0dHIoXCJhY3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdF9tZXRob2QgPSAkKHRoaXMpLmF0dHIoXCJtZXRob2RcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1bMF0uY2hlY2tWYWxpZGl0eSgpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uYWRkQ2xhc3MoXCJ3YXMtdmFsaWRhdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGVsZW0pLnJlbW92ZUNsYXNzKFwid2FzLXZhbGlkYXRlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uaHRtbCgnPGkgY2xhc3M9XCJpY29uLWxvYWRlciBmYS1zcGluXCI+IDwvaT4gU2VuZGluZy4uLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcG9zdF91cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHJlcXVlc3RfbWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBuZXcgRm9ybURhdGEodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0LnJlc3BvbnNlID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW0uZmluZChcIi5nLXJlY2FwdGNoYVwiKS5jaGlsZHJlbihcImRpdlwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyZWNhcHRjaGEucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChlbGVtKVswXS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5odG1sKGJ1dHRvblRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtQ3VzdG9tUmVkaXJlY3RQYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZWxlbUN1c3RvbVJlZGlyZWN0UGFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLm5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB0ZXh0Lm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IGVsZW0uYXR0cihcImRhdGEtc3VjY2Vzcy1tZXNzYWdlLWRlbGF5XCIpIHx8IDIwMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtLmZpbmQoXCIuZy1yZWNhcHRjaGFcIikuY2hpbGRyZW4oXCJkaXZcIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmVjYXB0Y2hhLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQubm90aWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZWxlbS5hdHRyKFwiZGF0YS1lcnJvci1tZXNzYWdlXCIpIHx8IHRleHQubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGFuZ2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiBlbGVtLmF0dHIoXCJkYXRhLWVycm9yLW1lc3NhZ2UtZGVsYXlcIikgfHwgMjAwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uaHRtbChidXR0b25UZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHdpemFyZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAvL1Nob3cgaGlkZSBwYXNzd29yZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmbG9hdGluZ0RpdjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJGZsb2F0aW5nRGl2ID0gJChcIi5mbG9hdGluZy1kaXZcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoJGZsb2F0aW5nRGl2Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkZmxvYXRpbmdEaXYuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW0gPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbUFsaWduID0gZWxlbS5hdHRyKFwiZGF0YS1wbGFjZW1lbnRcIikgfHwgXCJib3R0b21cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1TY3JvbGxPZmZzZXQgPSBlbGVtLmF0dHIoXCJkYXRhLW9mZnNldFwiKSB8fCA1MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1WaXNpYmxlID0gZWxlbS5hdHRyKFwiZGF0YS12aXNpYmlsZVwiKSB8fCBcImFsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbUhlaWdodCA9IGVsZW0ub3V0ZXJIZWlnaHQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1XaWR0aCA9IGVsZW0ub3V0ZXJXaWR0aCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLyogaWYoZWxlbVZpc2libGUgIT09IFwiYWxsXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGJvZHkuaGFzQ2xhc3MoXCJiLS1kZXNrdG9wXCIpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkd2luZG93LnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzY3JvbGxPZmZzZXQgPSAkYm9keS5hdHRyKFwiZGF0YS1vZmZzZXRcIikgfHwgODA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHdpbmRvdy5zY3JvbGxUb3AoKSA+IHNjcm9sbE9mZnNldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uY3NzKGVsZW1BbGlnbiwgXCIyMHB4XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLmNzcyhlbGVtQWxpZ24sIC1lbGVtSGVpZ2h0ICsgXCJweFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG90aGVyOiBmdW5jdGlvbihjb250ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAvL0xhenkgTG9hZFxyXG4gICAgICAgICAgICAgICAgdmFyIG15TGF6eUxvYWQgPSBuZXcgTGF6eUxvYWQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzX3NlbGVjdG9yOiBcIi5sYXp5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NfbG9hZGVkOiBcImltZy1sb2FkZWRcIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkKFwiLnRvZ2dsZS1pdGVtXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLnRvZ2dsZS1pdGVtXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUl0ZW1DbGFzcyA9IGVsZW0uYXR0cihcImRhdGEtY2xhc3NcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVJdGVtQ2xhc3NUYXJnZXQgPSBlbGVtLmF0dHIoXCJkYXRhLXRhcmdldFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZ2dsZUl0ZW1DbGFzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2dnbGVJdGVtQ2xhc3NUYXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0b2dnbGVJdGVtQ2xhc3NUYXJnZXQpLnRvZ2dsZUNsYXNzKHRvZ2dsZUl0ZW1DbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS50b2dnbGVDbGFzcyh0b2dnbGVJdGVtQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0udG9nZ2xlQ2xhc3MoXCJ0b2dnbGUtYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8qRHJvcGRvd24gcG9wdXAgaW52ZXJ0Ki9cclxuICAgICAgICAgICAgICAgIHZhciAkcERyb3Bkb3duID0gJChcIi5wLWRyb3Bkb3duXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCRwRHJvcGRvd24ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRwRHJvcGRvd24uZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW0gPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5maW5kKFwiPiBhXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnRvZ2dsZUNsYXNzKFwiZHJvcGRvd24tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkd2luZG93LndpZHRoKCkgLyAyID4gZWxlbS5vZmZzZXQoKS5sZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLmFkZENsYXNzKFwicC1kcm9wZG93bi1pbnZlcnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTaG93L2hpZGUgZGl2XHJcbiAgICAgICAgICAgICAgICB2YXIgJHNob3dIaWRlID0gJChcIi5zaG93LWhpZGVcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoJHNob3dIaWRlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2hvd0hpZGUuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW0gPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbUhpZGUgPSBlbGVtLmF0dHIoXCJkYXRhLWhpZGVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtU2hvdyA9IGVsZW0uYXR0cihcImRhdGEtc2hvd1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZWxlbUhpZGUpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZWxlbVNob3cpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG5hVG86IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBlbGVtID0gJChcImEuc2Nyb2xsLXRvLCAjZG90c01lbnUgPiB1bCA+IGxpID4gYSwgLm1lbnUtb25lLXBhZ2UgbmF2ID4gdWwgPiBsaSA+IGE6bm90KFtkYXRhLWxpZ2h0Ym94XSlcIik7O1xyXG5cclxuICAgICAgICAgICAgICAgIGVsZW0ub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9QbHVnaW4gT3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW0ub3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0VG9wOiBlbGVtLmF0dHIoXCJkYXRhLW9mZnNldFwiKSB8fCAzMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVySGVpZ2h0OiBlbGVtLmF0dHIoXCJkYXRhLWhlYWRlci1oZWlnaHRcIikgfHwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IGVsZW0uYXR0cihcImRhdGEtc3BlZWRcIikgfHwgMTUwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBlbGVtLmhlaWdodCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykuYnJlYWtwb2ludHMoXCJsZXNzVGhhblwiLCBcImxnXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoU2V0dGluZ3MubWVudUlzT3Blbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJG1haW5NZW51VHJpZ2dlckJ0bi50cmlnZ2VyKFwiY2xpY2tcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRoZWFkZXIuYXR0cihcImRhdGEtcmVzcG9uc2l2ZS1maXhlZFwiKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLmhlYWRlckhlaWdodCA9ICRoZWFkZXIuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykuYnJlYWtwb2ludHMoXCJncmVhdGVyRXF1YWxUb1wiLCBcImxnXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGhlYWRlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm9wdGlvbnMuaGVhZGVySGVpZ2h0ID0gJGhlYWRlci5oZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKFwiLmRhc2hib2FyZFwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub3B0aW9ucy5vZmZzZXRUb3AgPSAzMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLnN0b3AodHJ1ZSwgZmFsc2UpLmFuaW1hdGUoeyBzY3JvbGxUb3A6ICQoJCh0aGlzKS5hdHRyKFwiaHJlZlwiKSkub2Zmc2V0KCkudG9wIC0gKGVsZW0ub3B0aW9ucy5oZWFkZXJIZWlnaHQgKyBlbGVtLm9wdGlvbnMub2Zmc2V0VG9wKSwgfSwgZWxlbS5vcHRpb25zLnNwZWVkLCBcImVhc2VJbk91dEV4cG9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vcnBoZXh0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciAkdGV4dFJvdGF0b3IgPSAkKFwiLnRleHQtcm90YXRvclwiKTtcclxuICAgICAgICAgICAgICAgIGlmICgkdGV4dFJvdGF0b3IubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vQ2hlY2sgaWYgTW9ycGhleHQgcGx1Z2luIGlzIGxvYWRlZFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgJC5mbi5Nb3JwaGV4dCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBJTlNQSVJPLmVsZW1lbnRzLm5vdGlmaWNhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiV2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJqUXVlcnkgTW9ycGhleHQgcGx1Z2luIGlzIG1pc3NpbmcgaW4gcGx1Z2lucy5qcyBmaWxlLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJHRleHRSb3RhdG9yLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9QbHVnaW4gT3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlX3ByZWZpeDogXCJhbmltYXRlX19cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZWxlbS5hdHRyKFwiZGF0YS1hbmltYXRlXCIpIHx8IFwiZmFkZUluXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXBhcmF0b3I6IGVsZW0uYXR0cihcImRhdGEtc2VwYXJhdG9yXCIpIHx8IFwiLFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IGVsZW0uYXR0cihcImRhdGEtc3BlZWRcIikgfHwgMjAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogZWxlbS5oZWlnaHQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtaW4taGVpZ2h0XCI6IGVsZW0ub3B0aW9ucy5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0luaXRpYWxpemluZyBNb3JwaGV4dCBwbHVnaW4gYW5kIHBhc3NpbmcgdGhlIG9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5Nb3JwaGV4dCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGVsZW0ub3B0aW9ucy5hbmltYXRlX3ByZWZpeCArIGVsZW0ub3B0aW9ucy5hbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXBhcmF0b3I6IGVsZW0ub3B0aW9ucy5zZXBhcmF0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVlZDogTnVtYmVyKGVsZW0ub3B0aW9ucy5zcGVlZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBidXR0b25zOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIC8vQnV0dG9uIHNsaWRlIHdpZHRoXHJcbiAgICAgICAgICAgICAgICBpZiAoJChcIi5idG4tc2xpZGVbZGF0YS13aWR0aF1cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLmJ0bi5idG4tc2xpZGVbZGF0YS13aWR0aF1cIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW0gPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbVdpZHRoID0gZWxlbS5hdHRyKFwiZGF0YS13aWR0aFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1EZWZhdWx0V2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBlbGVtLmhhc0NsYXNzKFwiYnRuLWxnXCIpOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1EZWZhdWx0V2lkdGggPSBcIjYwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGVsZW0uaGFzQ2xhc3MoXCJidG4tc21cIik6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbURlZmF1bHRXaWR0aCA9IFwiMzZcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgZWxlbS5oYXNDbGFzcyhcImJ0bi14c1wiKTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtRGVmYXVsdFdpZHRoID0gXCIyOFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtRGVmYXVsdFdpZHRoID0gXCI0OFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uaG92ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcyhcIndpZHRoXCIsIGVsZW1XaWR0aCArIFwicHhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoXCJ3aWR0aFwiLCBlbGVtRGVmYXVsdFdpZHRoICsgXCJweFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWNjb3JkaW9uOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhY2NvcmRpb25UeXBlID0gXCJhY2NvcmRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICB0b29nbGVUeXBlID0gXCJ0b2dnbGVcIixcclxuICAgICAgICAgICAgICAgICAgICBhY2NvcmRpb25JdGVtID0gXCJhYy1pdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbUFjdGl2ZSA9IFwiYWMtYWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVRpdGxlID0gXCJhYy10aXRsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1Db250ZW50ID0gXCJhYy1jb250ZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJGFjY3MgPSAkKFwiLlwiICsgYWNjb3JkaW9uSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAkYWNjcy5sZW5ndGggJiZcclxuICAgICAgICAgICAgICAgICAgICAoJGFjY3MuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkaXRlbSA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaXRlbS5oYXNDbGFzcyhpdGVtQWN0aXZlKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGl0ZW0uYWRkQ2xhc3MoaXRlbUFjdGl2ZSkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRpdGVtLmZpbmQoXCIuXCIgKyBpdGVtQ29udGVudCkuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5cIiArIGl0ZW1UaXRsZSkub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGxpbmsgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRpdGVtID0gJGxpbmsucGFyZW50cyhcIi5cIiArIGFjY29yZGlvbkl0ZW0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRhY2MgPSAkaXRlbS5wYXJlbnRzKFwiLlwiICsgYWNjb3JkaW9uVHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaXRlbS5oYXNDbGFzcyhpdGVtQWN0aXZlKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGFjYy5oYXNDbGFzcyh0b29nbGVUeXBlKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCRpdGVtLnJlbW92ZUNsYXNzKGl0ZW1BY3RpdmUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGluay5uZXh0KFwiLlwiICsgaXRlbUNvbnRlbnQpLnNsaWRlVXAoKSkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgkYWNjLmZpbmQoXCIuXCIgKyBhY2NvcmRpb25JdGVtKS5yZW1vdmVDbGFzcyhpdGVtQWN0aXZlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGFjYy5maW5kKFwiLlwiICsgaXRlbUNvbnRlbnQpLnNsaWRlVXAoKSkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgkYWNjLmhhc0NsYXNzKHRvb2dsZVR5cGUpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgkYWNjLmZpbmQoXCIuXCIgKyBhY2NvcmRpb25JdGVtKS5yZW1vdmVDbGFzcyhpdGVtQWN0aXZlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRhY2MuZmluZChcIi5cIiArIGl0ZW1Db250ZW50KS5zbGlkZVVwKFwiZmFzdFwiKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRpdGVtLmFkZENsYXNzKGl0ZW1BY3RpdmUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGluay5uZXh0KFwiLlwiICsgaXRlbUNvbnRlbnQpLnNsaWRlVG9nZ2xlKFwiZmFzdFwiKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkbGluay5maW5kKFwiLmN1c3RvbS1yYWRpb1wiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoXCIuY3VzdG9tLXJhZGlvIC5jdXN0b20tY29udHJvbC1pbnB1dFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbnM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyICRhbmltYXRlID0gJChcIltkYXRhLWFuaW1hdGVdXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCRhbmltYXRlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvL0NoZWNrIGlmIGpRdWVyeSBXYXlwb2ludCBwbHVnaW4gaXMgbG9hZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBXYXlwb2ludCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBJTlNQSVJPLmVsZW1lbnRzLm5vdGlmaWNhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiV2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJqUXVlcnkgV2F5cG9pbnQgcGx1Z2luIGlzIG1pc3NpbmcgaW4gcGx1Z2lucy5qcyBmaWxlLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJGFuaW1hdGUuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW0gPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLmFkZENsYXNzKFwiYW5pbWF0ZV9fYW5pbWF0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vUGx1Z2luIE9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZV9wcmVmaXg6IFwiYW5pbWF0ZV9fXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGVsZW0uYXR0cihcImRhdGEtYW5pbWF0ZVwiKSB8fCBcImZhZGVJblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IGVsZW0uYXR0cihcImRhdGEtYW5pbWF0ZS1kZWxheVwiKSB8fCAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IH5lbGVtLmF0dHIoXCJkYXRhLWFuaW1hdGVcIikuaW5kZXhPZihcIk91dFwiKSA/IFwiYmFja1wiIDogXCJmb3J3YXJkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiBlbGVtLmF0dHIoXCJkYXRhLWFuaW1hdGUtb2Zmc2V0WFwiKSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogZWxlbS5hdHRyKFwiZGF0YS1hbmltYXRlLW9mZnNldFlcIikgfHwgLTEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9Jbml0aWFsaXppbmcgalF1ZXJ5IFdheXBvaW50IHBsdWdpbiBhbmQgcGFzc2luZyB0aGUgb3B0aW9ucyBmcm9tIGRhdGEgYW5pbWF0aW9ucyBhdHRyaWJ1dGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtLm9wdGlvbnMuZGlyZWN0aW9uID09IFwiZm9yd2FyZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgV2F5cG9pbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uYWRkQ2xhc3MoZWxlbS5vcHRpb25zLmFuaW1hdGVfcHJlZml4ICsgZWxlbS5vcHRpb25zLmFuaW1hdGlvbiArIFwiIHZpc2libGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGVsZW0ub3B0aW9ucy5kZWxheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5hZGRDbGFzcyhcInZpc2libGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5hZGRDbGFzcyhlbGVtLm9wdGlvbnMuYW5pbWF0ZV9wcmVmaXggKyBlbGVtLm9wdGlvbnMuYW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0RlbW8gcGxheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5wYXJlbnRzKFwiLmRlbW8tcGxheS1hbmltYXRpb25zXCIpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQ2xhc3MoZWxlbS5vcHRpb25zLmFuaW1hdGVfcHJlZml4ICsgZWxlbS5vcHRpb25zLmFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLmFkZENsYXNzKGVsZW0ub3B0aW9ucy5hbmltYXRlX3ByZWZpeCArIGVsZW0ub3B0aW9ucy5hbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYXJhbGxheDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJHBhcmFsbGF4ID0gJChcIltkYXRhLWJnLXBhcmFsbGF4XVwiKTtcclxuICAgICAgICAgICAgICAgIGlmICgkcGFyYWxsYXgubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vQ2hlY2sgaWYgc2Nyb2xseSBwbHVnaW4gaXMgbG9hZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAkLmZuLnNjcm9sbHkgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSU5TUElSTy5lbGVtZW50cy5ub3RpZmljYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIldhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwialF1ZXJ5IHNjcm9sbHkgcGx1Z2luIGlzIG1pc3NpbmcgaW4gcGx1Z2lucy5qcyBmaWxlLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJHBhcmFsbGF4LmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkZWxlbSA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtSW1hZ2VTcmMgPSAkZWxlbS5hdHRyKFwiZGF0YS1iZy1wYXJhbGxheFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1JbWFnZVZlbG9jaXR5ID0gJGVsZW0uYXR0cihcImRhdGEtdmVsb2NpdHlcIikgfHwgXCItLjE0MFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZWxlbS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJwYXJhbGxheC1jb250YWluZXJcIiBkYXRhLWJnPVwiJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtSW1hZ2VTcmMgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1wiICBkYXRhLXZlbG9jaXR5PVwiJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtSW1hZ2VWZWxvY2l0eSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiB1cmwoJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtSW1hZ2VTcmMgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJylcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYWxsYXhMYXp5ID0gbmV3IExhenlMb2FkKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzX3NlbGVjdG9yOiBcIi5wYXJhbGxheC1jb250YWluZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzX2xvYWRlZDogXCJpbWctbG9hZGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJGVsZW0uZmluZChcIi5wYXJhbGxheC1jb250YWluZXJcIikuc2Nyb2xseSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ1BhcmFsbGF4OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciAkYmFja2dyb3VuZEltYWdlID0gJChcIltkYXRhLWJnLWltYWdlXVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGJhY2tncm91bmRJbWFnZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGJhY2tncm91bmRJbWFnZS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGVsZW0gPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbUltYWdlU3JjID0gJGVsZW0uYXR0cihcImRhdGEtYmctaW1hZ2VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRlbGVtLmFkZENsYXNzKFwibGF6eS1iZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGVsZW0uYXR0cihcImRhdGEtYmdcIiwgZWxlbUltYWdlU3JjKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxhYXp5YmcgPSBuZXcgTGF6eUxvYWQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50c19zZWxlY3RvcjogXCIubGF6eS1iZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc19sb2FkZWQ6IFwiYmctbG9hZGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNoYXBlRGl2aWRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJHNoYXBlX2RpdmlkZXIgPSAkKFwiLnNoYXBlLWRpdmlkZXJcIik7XHJcbiAgICAgICAgICAgICAgICAkc2hhcGVfZGl2aWRlci5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGVtID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBlbGVtLmF0dHIoXCJkYXRhLXN0eWxlXCIpIHx8IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBlbGVtLmF0dHIoXCJkYXRhLWNvbG9yXCIpIHx8IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBlbGVtLmF0dHIoXCJkYXRhLW9wYWNpdHlcIikgfHwgXCIxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogZWxlbS5hdHRyKFwiZGF0YS16SW5kZXhcIikgfHwgXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogZWxlbS5hdHRyKFwiZGF0YS1oZWlnaHRcIikgfHwgMjEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IFwiUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIWnBaWGRDYjNnOUlqQWdNQ0EyTXpBZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkYm9keS5oYXNDbGFzcyhcImRhcmtcIikgJiYgZWxlbS5vcHRpb25zLmNvbG9yID09PSBcIiNmZmZmZmZcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm9wdGlvbnMuY29sb3IgPSBcIiMxODE4MThcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChlbGVtLm9wdGlvbnMuc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub3B0aW9ucy5zdHlsZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLnByZWZpeCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJNVEkxTGpjeUlqNDhkR2wwYkdVK1FYTnpaWFFnTVRjMFBDOTBhWFJzWlQ0OGNHRjBhQ0JrUFNKTk16azFMRGs1TGpNM1l5MDFOeTQwTXl3eE1DNHhOeTB4TWpRdU1qY3RPQzR3TmkweE56WXVPQzB4TVM0M01uRXpMamt6TGpZMExEZ3NNUzQwTVdNMU1DNDRNU3cyTERFeE15NHpMREkwTGpBNExERTJPQzQzTml3eE5DNHlOa00wTmpnc09UQXVORElzTlRFNUxqWXNNVEV1T0Rnc05qTXdMRGd1T1ZZd1F6VXdOUzQwTWl3MExEUTJPQ3c0Tmk0ME55d3pPVFVzT1RrdU16ZGFJaUJ6ZEhsc1pUMGlabWxzYkRvalptWm1PMjl3WVdOcGRIazZNQzR6TURBd01EQXdNREF3TURBd01EQXdOQ0l2UGp4d1lYUm9JR1E5SWsweU1qWXVNalVzT0RsRE1qY3pMamc0TERrNExETXpPQzR4TkN3eE1Ua3VNamtzTXprMUxERXdPUzR5TTJNM01pNDVNeTB4TWk0NU1Td3hNall1TmpFdE56Y3VORFlzTWpNMUxUY3pMalE0VmpndU9EWmpMVEV4TUM0MExETXRNVFl5TERneExqVXhMVEl6TlN3NU5DNDBNa016TXprdU5UVXNNVEV6TGpFc01qYzNMakEyTERrMUxqQTNMREl5Tmk0eU5TdzRPVm9pSUhOMGVXeGxQU0ptYVd4c09pTm1abVk3YjNCaFkybDBlVG93TGpZeklpOCtQSEJoZEdnZ1pEMGlUVFl3TGpneUxERXlNaTQ0T0N3Mk1pd3hNak5oTXpFdU5Ea3NNekV1TkRrc01Dd3dMREFzT1M0ek5DMHVOalJCTVRBeExqSTJMREV3TVM0eU5pd3dMREFzTVN3Mk1DNDRNaXd4TWpJdU9EaGFJaUJ6ZEhsc1pUMGlabWxzYkRvalptWm1JaTgrUEhCaGRHZ2daRDBpVFRZd0xqZ3lMREV5TWk0NE9DdzJNaXd4TWpOaE16RXVORGtzTXpFdU5Ea3NNQ3d3TERBc09TNHpOQzB1TmpSQk1UQXhMakkyTERFd01TNHlOaXd3TERBc01TdzJNQzQ0TWl3eE1qSXVPRGhhSWlCemRIbHNaVDBpWm1sc2JEb2pabVptTzI5d1lXTnBkSGs2TUM0ek5UQXdNREF3TURBd01EQXdNREF3TXlJdlBqeHdZWFJvSUdROUlrMHpPVGdzTVRBM0xqZzBZeTAxTmk0eE5Td3hNQzR3TnkweE1Ua3VOVGt0TVRFdU1qWXRNVFkyTGpZeUxUSXdMakl0TWk0M01TMHVOVEl0TlM0ek5TMHhMVGN1T1RRdE1TNDBNVUV4TlRrdU5UUXNNVFU1TGpVMExEQXNNQ3d3TERJd01pdzROSEV0TXk0d09TMHVNRGt0Tml3d1l5MHVOekVzTUMweExqTTVMakE0TFRJdU1Ea3VNVEl0TlRJdU9Dd3lMamt6TFRnd0xqTTBMREk0TGpjNExURXhNaTQ1TVN3ek5pNDJNbUUzTWk0Mk15dzNNaTQyTXl3d0xEQXNNUzA1TGpZMkxERXVOakpCTXpFdU5Ea3NNekV1TkRrc01Dd3dMREVzTmpJc01USXpiQzB4TGpFNExTNHhNME16TVM0ek55d3hNakl1T0RVc01Dd3hNVEV1T0RJc01Dd3hNVEV1T0RKMk1UTXVPVWcyTXpCV016UXVNelpETlRJekxETXdMak01TERRM01DdzVOQzQ1TkN3ek9UZ3NNVEEzTGpnMFdpSWdjM1I1YkdVOUltWnBiR3c2STJabVppSXZQanh3WVhSb0lHUTlJazB3TERFd01pNHhOSFl4TUdNNE15d3pOQ3d4TWpZdU9ETXRNVFFzTVRrd0xUSTBiREV0TkdNdE5EUXVOQ3cyTGpJMkxUUTFMREl5TFRrekxETXhRelUwTGpjNExERXlNeTR5TlN3ek1Dd3hNVE11TVRRc01Dd3hNREl1TVRSYUlpQnpkSGxzWlQwaVptbHNiRG9qWm1abU8yOXdZV05wZEhrNk1DNHpNREF3TURBd01EQXdNREF3TURBd05DSXZQanh3WVhSb0lHUTlJazB3TERFd05DNHhOSFl4TUdNeU1pdzVMRFF4TGpJekxERXdMakkyTERVNExqZ3NNVEFzTkRndU56Z3RMamMyTERnMExqYzJMVEkyTGpZMUxERXpNUzR5TFRNMGJERXROR010TkRRdU5DdzJMakkyTFRRMUxESXlMVGt6TERNeFF6VTBMamM0TERFeU5TNHlOU3d6TUN3eE1UVXVNVFFzTUN3eE1EUXVNVFJhSWlCemRIbHNaVDBpWm1sc2JEb2pabVptTzI5d1lXTnBkSGs2TUM0ek1EQXdNREF3TURBd01EQXdNREF3TkNJdlBqd3ZjM1puUGc9PVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm9wdGlvbnMuc3R5bGUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub3B0aW9ucy5wcmVmaXggK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTVRJd0lqNDhkR2wwYkdVK1FYTnpaWFFnTVRZMFBDOTBhWFJzWlQ0OGNHRjBhQ0JrUFNKTk5UWTNMalkzTERNeExqRTBZeTB5Tmk0eU1pd3hOeTR6TmkwMU1Dd3pOaTQxTlMwNE1TNDRMRFV3UXpRek55NDFNaXd4TURFdU5EZ3NNemMxTGpVeUxERXdOaTR5TVN3ek1UY3NNVEF6TGpJemN5MHhNVFV1TkRJdE1UTXRNVGN6TGpFMUxURTVMalUyUXprMkxqUTNMRGM0TGpJMUxEUTNMakU0TERjMUxqRTRMREFzT0RBdU1EZDJNekl1TkRGSU5qTXdWakJETmpBMkxqUTBMRGN1TlRJc05UZzFMamc1TERFNUxqQTVMRFUyTnk0Mk55d3pNUzR4TkZvaUlITjBlV3hsUFNKbWFXeHNPaU5tWm1ZN2IzQmhZMmwwZVRvd0xqWTBJaTgrUEhCaGRHZ2daRDBpVFRVMk55NDJOeXd6T0M0Mk4yTXRNall1TWpJc01UY3VNelV0TlRBc016WXVOVFV0T0RFdU9DdzFNRU0wTXpjdU5USXNNVEE1TERNM05TNDFNaXd4TVRNdU56TXNNekUzTERFeE1DNDNOWE10TVRFMUxqUXlMVEV6TFRFM015NHhOUzB4T1M0MU5rTTVOaTQwTnl3NE5TNDNOeXcwTnk0eE9DdzRNaTQzTERBc09EY3VOVGxXTVRJd1NEWXpNRlkzTGpVeVF6WXdOaTQwTkN3eE5TdzFPRFV1T0Rrc01qWXVOakVzTlRZM0xqWTNMRE00TGpZM1dpSWdjM1I1YkdVOUltWnBiR3c2STJabVppSXZQand2YzNablBnPT1cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiM1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLnN0eWxlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm9wdGlvbnMucHJlZml4ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk5qQWlQangwYVhSc1pUNUJjM05sZENBeE56SThMM1JwZEd4bFBqeHdZWFJvSUdROUlrMHdMREFzTkRBd0xEVXpMakl6TERZek1Dd3dWall3U0RCYUlpQnpkSGxzWlQwaVptbHNiRG9qWm1abUlpOCtQQzl6ZG1jK1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm9wdGlvbnMuc3R5bGUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub3B0aW9ucy5wcmVmaXggK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiT0RBaVBqeDBhWFJzWlQ0MFBDOTBhWFJzWlQ0OGNHRjBhQ0JrUFNKTk1qWXhMaklzTmpRdU9VTXpOamN1Tml3MU5DNDNMRFE1T1M0MkxETTVMamNzTmpNd0xERTRMalZXTUVNME9UY3VPQ3d6TVM0MExETTJNeTQzTERVeUxESTJNUzR5TERZMExqbGFJaUJ6ZEhsc1pUMGlabWxzYkRvalptWm1PMjl3WVdOcGRIazZNQzR6TURBd01EQXdNREF3TURBd01EQXdOQ0l2UGp4d1lYUm9JR1E5SWsweU5qRXVNaXcyTkM0NVl5MDBNU3d6TGprdE56Z3VNaXczTGpFdE1URXdMRGt1Tml3eE15NHlMUzQwTERJM0xTNDVMRFF4TGpVdE1TNDJRek14TlN3Mk55NDNMRFEzT0M0MExEVTVMalFzTmpNd0xETTBMamhXTVRndU5VTTBPVGt1TVN3ek9TNDRMRE0yTnk0ekxEVTBMamdzTWpZeExqSXNOalF1T1ZvaUlITjBlV3hsUFNKbWFXeHNPaU5tWm1ZN2IzQmhZMmwwZVRvd0xqWXdNREF3TURBd01EQXdNREF3TURFaUx6NDhjR0YwYUNCa1BTSk5NVGt5TGpjc056SXVPV010TVRRdU5TNDNMVEk0TGpNc01TNHlMVFF4TGpVc01TNDJRelU1TGprc056Y3VOeXd3TERjM0xqUXNNQ3czTnk0MFZqZ3dTRFl6TUZZek15NDRRelEzT0M0MExEVTRMalFzTXpFMUxEWTNMamNzTVRreUxqY3NOekl1T1ZvaUlITjBlV3hsUFNKbWFXeHNPaU5tWm1ZaUx6NDhMM04yWno0PVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI1XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm9wdGlvbnMuc3R5bGUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub3B0aW9ucy5wcmVmaXggK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTVRBd0lqNDhkR2wwYkdVK1FYTnpaWFFnTVRjelBDOTBhWFJzWlQ0OGNHRjBhQ0JrUFNKTk1DdzFOaTQ0Tkd3eE1EZ3NNemxNTkRZNExEQXNOak13TERZNExqUXlWakV3TUVnd1dpSWdjM1I1YkdVOUltWnBiR3c2STJabVppSXZQand2YzNablBnPT1cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiNlwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLnN0eWxlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm9wdGlvbnMucHJlZml4ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk1USXdJajQ4ZEdsMGJHVStOand2ZEdsMGJHVStQSEJoZEdnZ1pEMGlUVFl4TlM0MUxESXVOV010TkRFdU15dzFMamd0TnpjdU5Dd3hNaTQzTFRFeE5pd3hNeTQzTFRJeUxqSXVOaTAwTkM0NExUTXVNeTAyTnk0eUxqUXRORGd1T0N3NExqRXRNVEEzTGpnc05ETXVOUzB4TlRjdU55dzJNaTQyTFRReUxqUXNNVFl1TWkwMk9TNDVMREUyTFRrNExqY3NNeTQ0TFRJeExqRXRPUzAwTWk0eExUSXlMamt0TmpVdU1pMHpNeTR4TFRJNUxqUXRNVE10TmpJdU5DMHlOQzR5TFRrNExqa3RNVEl1TTJ3dE1TNHhMak5NTUN3ME1TNDJWalV6TGpoc01UQXVOeTB6TGpZc01TNHhMUzQwWXpReUxqRXRNVE11Tnl3Mk15NHhMVFV1Tml3NU9DNDVMRFV1Tml3eU1pNDNMRGNzTkRRdU1Td3lNQ3cyTlM0eUxESTRMamtzTXpBdU9Td3hNeTR4TERVMUxqZ3NNVE1zT1RndU55MHhMRFE1TGprdE1UWXVOQ3d4TURndU9TMDFNUzQ0TERFMU55NDNMVFU1TGprc01qSXVOQzB6TGpjc05EVXVNaTAwTGpVc05qY3VNaTB1TkN3ek55NDRMRGN1TWl3M05DNDNMRGN1TVN3eE1UWXNNUzR6TERVdExqY3NPUzQ0TFRFdU5Td3hOQzQxTFRJdU5WWXdRell5TlM0ekxERXNOakl3TGpVc01TNDVMRFl4TlM0MUxESXVOVm9pSUhOMGVXeGxQU0ptYVd4c09pTm1abVk3YjNCaFkybDBlVG93TGpNMU1EQXdNREF3TURBd01EQXdNREF6SWk4K1BIQmhkR2dnWkQwaVRUUTVPUzQxTERJell5MHlNaTAwTGpFdE5EUXVPQzB6TGpNdE5qY3VNaTQwTFRRNExqZ3NPQzR4TFRFd055NDRMRFF6TGpVdE1UVTNMamNzTlRrdU9TMDBNaTQ1TERFMExUWTNMamdzTVRRdU1TMDVPQzQzTERFdE1qRXVNUzA0TGprdE5ESXVOUzB5TVM0NUxUWTFMakl0TWpndU9VTTNOQzQ1TERRMExqSXNOVE11T1N3ek5pNHhMREV4TGpnc05Ea3VPR3d0TVM0eExqUk1NQ3cxTXk0NFZqWXliREV3TGpjdE15NDJMREV1TVMwdU5HTXpOaTQxTFRFeExqa3NOamd1T0MwNExEazRMamtzTVM0MExESXlMamNzTnk0eExEUTBMakVzTVRjdU15dzJOUzR5TERJMkxqTXNNamd1T0N3eE1pNHlMRFUxTGpjc01USXVPU3c1T1M0eExESXVPU3cxTWk0MUxURXlMakVzTVRBM0xqRXROVEV1Tnl3eE5UVXVPUzAxT1M0NExESXlMak10TXk0NExEUTJMall0TVM0NExEWTRMallzTWk0MExETTNMamdzTnk0eExEYzBMamNzTWpJc01URTJMREUyTGpNc05TMHVOeXc1TGpndE1TNDJMREUwTGpVdE1pNDJWakl4TGpoakxUUXVOeXd4TFRrdU5Td3hMamd0TVRRdU5Td3lMalZETlRjMExqSXNNekF1TVN3MU16Y3VNeXd6TUM0eUxEUTVPUzQxTERJeldpSWdjM1I1YkdVOUltWnBiR3c2STJabVpqdHZjR0ZqYVhSNU9qQXVOU0l2UGp4d1lYUm9JR1E5SWswME9Ua3VOU3d6TVM0eVl5MHlNaTAwTGpJdE5EWXVNeTAyTGpJdE5qZ3VOaTB5TGpSRE16Z3lMakVzTXpZdU9Td3pNamN1TlN3M05pNDFMREkzTlN3NE9DNDJZeTAwTXk0MExERXdMVGN3TGpNc09TNHpMVGs1TGpFdE1pNDVMVEl4TGpFdE9TMDBNaTQxTFRFNUxqSXROalV1TWkweU5pNHpRemd3TGpZc05UQXNORGd1TXl3ME5pNHhMREV4TGpnc05UaHNMVEV1TVM0MFREQXNOakoyTlRoSU5qTXdWalEwTGpsakxUUXVOeXd4TFRrdU5Td3hMamt0TVRRdU5Td3lMalpETlRjMExqSXNOVE11TWl3MU16Y3VNeXd6T0M0ekxEUTVPUzQxTERNeExqSmFJaUJ6ZEhsc1pUMGlabWxzYkRvalptWm1JaTgrUEM5emRtYytcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiN1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLnN0eWxlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm9wdGlvbnMucHJlZml4ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk1USXdJajQ4ZEdsMGJHVStRWE56WlhRZ01UYzBQQzkwYVhSc1pUNDhjR0YwYUNCa1BTSk5NQ3d3TERZek1Dd3hNakJJTUZvaUlITjBlV3hsUFNKbWFXeHNPaU5tWm1ZaUx6NDhMM04yWno0PVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI4XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm9wdGlvbnMuc3R5bGUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub3B0aW9ucy5wcmVmaXggK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTVRJd0lqNDhkR2wwYkdVK09Ed3ZkR2wwYkdVK1BIQmhkR2dnWkQwaVRUUTFOaTQzTERVekxqWkRORE01TGpnc05ESXVPU3d6T1RZdU9Td3hMamdzTXpRekxqSXNNekF1TVdNdE16VXVOeXd4T0M0M0xUZzBMRGN4TGpVdE1USTNMamdzTnpFdU9TMHpOaTR4TGpNdE5UY3VPQzB5TUM0eUxUZ3hMalF0TXpVdU1TMHhOeTR6TFRFeExUTTFMVEl6TGpVdE5UTXVOaTB6TWk0eVF6VTFMallzTWpNdU1pd3pNQ3d4TVM0NExqRXNNall1TkdNdExqTXVNU3d3TERrekxqWXNNQ3c1TXk0MlNEWXpNRll6TVM0NFl5MHpMamtzTVM0ekxURXpMREUzTGpNdE5qVXVNaXd6TWk0NFF6VXpNeTR6TERjMkxqUXNORGt5TGpRc056WXVOQ3cwTlRZdU55dzFNeTQyV2lJZ2MzUjViR1U5SW1acGJHdzZJMlptWmlJdlBqeG5JSE4wZVd4bFBTSnZjR0ZqYVhSNU9qQXVNemdpUGp4d1lYUm9JR1E5SWswMk1URXNOak11Tm13dE1pdzBNaTQ0TFRVeU55NDVMRFV0T0RFdE1TNHhWall4TGpoaE1UazBMamNzTVRrMExqY3NNQ3d3TERBc01qUXVOeXc1TGpRc01UUTJMamdzTVRRMkxqZ3NNQ3d3TERBc05ETXVPU3cyTGpKRE9UUXVOaXczTnk0ekxERXlNQzQxTERZMUxERTBOaXcxTUM0MVl6RTRMamN0TVRBdU5pd3pOeTR4TFRJeUxqTXNOVFV1TWkwek1TNHpRekl4TXk0M0xERXlMamtzTWpJMkxEZ3NNak00TGpFc05TNDNZekkwTGpNdE5DNDJMRFV4TGpRdE15NHlMRGN5TGpVc055NDViRE0yTGpjc01Ua3VObU16Tnk0ekxERTVMamtzTnpNdU1Td3pPQzQ1TERFd05DNHlMRFV4TGpkRE5EWTFMalFzT1RBdU5pdzBOemd1TXl3NU5TNHlMRFE1TUN3NU9HTXhNeTR6TERNdU15d3lOUzR4TERRdU5Td3pOU3d5TGpsaE56VXVOU3czTlM0MUxEQXNNQ3d3TERrdU15MHpMamRzTnk0MExUTXVNMk14TlM0MExUY3VNU3d6T0M0NExURTVMakVzTlRrdU5pMHpNeTR5TERVdU5TMHpMamN1Tmk0MExEVXVOeTB6TGpSRE5qRTVMRFE0TGpJc05qQTRMamNzTmpRdU1pdzJNVEVzTmpNdU5sb2lJSE4wZVd4bFBTSm1hV3hzT2lObVptWWlMejQ4TDJjK1BIQmhkR2dnWkQwaVRUVTRNUzQ0TERFeExqUkROVFV5TEM0eUxEVXpNUzQxTERNdU9TdzFNRGN1TWl3NExqUXNORGN5TGpFc01UVXNORE0wTGpjc05EUXVNU3d6T1RZdU5pdzJNeTR5WXkweE5pNHpMRGd1TVMwek1pNDRMREUwTGpRdE5Ea3VNaXd4Tmk0ekxURTFMamd0TlM0MExUTXlMVEV5TGpJdE5EY3VOaTB4T1M0eUxUTTNMamt0TVRjdU1TMDNNaTQyTFRNMUxqY3RPVEV1T1Mwek9TNDRiQzAyTGpjdE1TNHpZeTB5TWk0eUxUUXVNaTAwTlM0NUxUVXVPQzAyTnk0NUxURXVOeTB4TUM0MExESXRNakVzTlM0NUxUTXhMamdzTVRGRE56WXVOaXcwTUM0eUxEVXdMamtzTlRjdU9Td3lOQzQ0TERjeExqSkJNakV6TGpZc01qRXpMallzTUN3d0xERXNMakVzT0RJdU1YWXpNQzQ0YkRneExURXVOU3d6TVRJdU15MDFMamNzTVM0MExqTk1Oak13TERFeE1TNDRkaTA0TUVNMk1UTXNNall1TkN3Mk1Ua3VNeXd5TlM0MUxEVTRNUzQ0TERFeExqUmFJaUJ6ZEhsc1pUMGlabWxzYkRvalptWm1PMjl3WVdOcGRIazZNQzQwT1NJdlBqeG5JSE4wZVd4bFBTSnZjR0ZqYVhSNU9qQXVNemdpUGp4d1lYUm9JR1E5SWswMU5EVXVOQ3c1TjJ3dE1URXVNUzR5VERRNU1DdzVPQ3d1TVN3eE1EY3VNVll3UXpJeExqTXRMalFzTkRFdU15dzBMakVzTmpBdU5Dd3hNQzQ0WVRRd015NDNMRFF3TXk0M0xEQXNNQ3d4TERReExqRXNNVGN1TjJNeE1DdzBMamtzTVRrdU9TdzVMamtzTWprdU55d3hOQzQyTERVc01pNHpMRGt1T1N3MExqa3NNVFF1T0N3M0xqUXNNall1TVN3eE15NDFMRFV5TGpjc01qZ3NPVEl1T1N3eU55NDRMREl3TGpNdExqRXNOREF1TnkwM0xqY3NOakF1T1MweE9Dd3hOaTA0TGpJc016RXVPUzB4T0N3ME55NDFMVEkzTGpFc01qQXVPUzB4TWk0eExEUXhMak10TWpJdU9TdzJNQzQ1TFRJMkxqWkRORE15TGpVc01pdzBPREV1TVN3NExqWXNOVEEwTERFNGN6UTVMallzTWpNdU5pdzVOeTR6TERReUxqZEROakl3TGpJc05qZ3VOQ3cxTkRVdU5DdzVOeXcxTkRVdU5DdzVOMW9pSUhOMGVXeGxQU0ptYVd4c09pTm1abVlpTHo0OEwyYytQQzl6ZG1jK1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm9wdGlvbnMuc3R5bGUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub3B0aW9ucy5wcmVmaXggK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTVRBd0lqNDhkR2wwYkdVK1FYTnpaWFFnTVRneVBDOTBhWFJzWlQ0OGNHRjBhQ0JrUFNKTk1DdzBOUzQyTlZNeE5Ua3NNQ3d6TWpJc01DdzJNekFzTkRVdU5qVXNOak13TERRMUxqWTFWakV3TUVnd1dpSWdjM1I1YkdVOUltWnBiR3c2STJabVppSXZQand2YzNablBnPT1cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiMTBcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub3B0aW9ucy5zdHlsZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLnByZWZpeCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJNVEl3SWo0OGRHbDBiR1UrTVRBOEwzUnBkR3hsUGp4d1lYUm9JR1E5SWswd0xERXdPQzR4U0RZek1GWXdVelEzTlN3eE1EUXVOaXd6TVRRc01UQTBMallzTUN3d0xEQXNNRm9pSUhOMGVXeGxQU0ptYVd4c09pTm1abVk3YjNCaFkybDBlVG93TGpJeUlpOCtQSEJoZEdnZ1pEMGlUVEFzTVRBMkxqbElOak13VmpFM0xqaHpMVEUxTlN3NE55NDVMVE14Tml3NE55NDVVekFzTVRrc01Dd3hPVm9pSUhOMGVXeGxQU0ptYVd4c09pTm1abVk3YjNCaFkybDBlVG93TGpNMklpOCtQSEJoZEdnZ1pEMGlUVEFzTVRJd1NEWXpNRlkwTlM0eGN5MHhOVFVzTmpFdU9DMHpNVFlzTmpFdU9GTXdMRFExTGpFc01DdzBOUzR4V2lJZ2MzUjViR1U5SW1acGJHdzZJMlptWmlJdlBqd3ZjM1puUGc9PVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIxMVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLnN0eWxlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm9wdGlvbnMucHJlZml4ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk1USXdJajQ4ZEdsMGJHVStNVEU4TDNScGRHeGxQanh3WVhSb0lHUTlJazAxTVRBdU55d3lMamxqTFRrNExqa3NNakV1T1MweU1qSXVNeXc0TlM0MUxUTXlNaXc0TlM0MVF6Z3dMakVzT0RndU5Dd3lOQzR4TERVMkxqRXNNQ3d6Tmk0MFZqRXlNRWcyTXpCV01UVXVNa00yTURJdU5DdzJMamtzTlRVd0xqRXROUzQ0TERVeE1DNDNMREl1T1ZvaUlITjBlV3hsUFNKbWFXeHNPaU5tWm1ZaUx6NDhMM04yWno0PVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIxMlwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLnN0eWxlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm9wdGlvbnMucHJlZml4ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk1USXdJajQ4ZEdsMGJHVStNVEk4TDNScGRHeGxQanh3WVhSb0lHUTlJazAyTXpBc016UXVOV0UxTkN3MU5Dd3dMREFzTVMwNUxESXVNME0xTnpndU15dzBOaTR4TERVMU5pNHhMREkwTERVeE55NHlMREV5TGpWakxUSXlMamt0Tmk0M0xUUTNMamt0T1M0NExUY3hMVE11T1VNek9UVXVPQ3d5TVM0M0xETTBNQzR6TERFd01pd3lPRFV1TVN3eE1ESXVOR010TkRVdU5DNHpMVGN5TGpZdE1qWXVOUzB4TURJdU15MDBOaTR4TFRJeExqZ3RNVFF1TkMwME5DMHpNQzQ0TFRZM0xqUXROREl1TVVNNE5DNHlMUzQ1TERVd0xqa3ROeTR5TERFekxqSXNNVEV1T0d3dE1TNHlMalpqTFRNdU5Td3hMamt0T0M0eUxETXVPUzB4TWl3MUxqbFdNVEl3U0RZek1Gb2lJSE4wZVd4bFBTSm1hV3hzT2lObVptWWlMejQ4TDNOMlp6ND1cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiMTNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub3B0aW9ucy5zdHlsZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLnByZWZpeCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPVEFpUGp4MGFYUnNaVDR4TXp3dmRHbDBiR1UrUEhCaGRHZ2daRDBpVFRZek1DdzVNRWd4VERBc01GTXhNekVzTnpZdU5pd3pOallzTXpRdU1tTXhNakF0TWpFdU55d3lOalFzTkM0MUxESTJOQ3cwTGpWYUlpQnpkSGxzWlQwaVptbHNiRG9qWm1abU8yOXdZV05wZEhrNk1DNHhOaUl2UGp4d1lYUm9JR1E5SWsweExEa3dTRFl6TUZZd1V6UTRPU3czTkM0ekxESTFOQ3d6TVM0NVF6RXpOQ3d4TUM0ekxEQXNNek1zTUN3ek0xb2lJSE4wZVd4bFBTSm1hV3hzT2lObVptWTdiM0JoWTJsMGVUb3dMaklpTHo0OGNHRjBhQ0JrUFNKTk1DdzVNRWcyTXpCV01UZ3VNbE0wTnpVc056Y3VOU3d6TVRRc056Y3VOU3d3TERFNExqSXNNQ3d4T0M0eVdpSWdjM1I1YkdVOUltWnBiR3c2STJabVppSXZQand2YzNablBnPT1cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiMTRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub3B0aW9ucy5zdHlsZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLnByZWZpeCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJOakFpUGp4MGFYUnNaVDVCYzNObGRDQXhOemc4TDNScGRHeGxQanh3WVhSb0lHUTlJazB3TERBc01URXpMREU1TERVNE1pd3lPUzQwTnl3Mk16QXNNRlkyTUVnd1dpSWdjM1I1YkdVOUltWnBiR3c2STJabVppSXZQand2YzNablBnPT1cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiMTVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub3B0aW9ucy5zdHlsZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLnByZWZpeCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPREFpUGp4MGFYUnNaVDVCYzNObGRDQXhOemM4TDNScGRHeGxQanh3WVhSb0lHUTlJazB6TVRVc01DdzJNekFzT0RCSU1Gb2lJSE4wZVd4bFBTSm1hV3hzT2lObVptWWlMejQ4TDNOMlp6ND1cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiMTZcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub3B0aW9ucy5zdHlsZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLnByZWZpeCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPREFpUGp4MGFYUnNaVDR4Tmp3dmRHbDBiR1UrUEhCaGRHZ2daRDBpVFRBc09EQlRNakE0TERBc016RTFMREFzTmpNd0xEZ3dMRFl6TUN3NE1Gb2lJSE4wZVd4bFBTSm1hV3hzT2lObVptWWlMejQ4TDNOMlp6ND1cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiMTdcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub3B0aW9ucy5zdHlsZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLnByZWZpeCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJNVEl3SWo0OGRHbDBiR1UrTVRjOEwzUnBkR3hsUGp4d1lYUm9JR1E5SWswek1qQXNNVFpqT0RndU5Dd3lMRE14TUN3eE1EUXNNekV3TERFd05GTTFOamt1Tml3NE55NHpMRFE1T1M0MUxEVTJZeTB4T1M0M0xUZ3VPQzAwTUM0eExURTNMalV0TmpBdU1pMHlOUzR6UXpNNU5TNHlMREV6TGpZc016VXlMamN1Tnl3ek1qUXNNQ3d5TXpVdE1pd3dMREV5TUN3d0xERXlNR3d4TkM0eExUVXVOVU0yTWk0MUxEa3lMamdzTWpRekxqTXNNVFF1TXl3ek1qQXNNVFphSWlCemRIbHNaVDBpWm1sc2JEb2pabVptTzI5d1lXTnBkSGs2TUM0ek1TSXZQanh3WVhSb0lHUTlJazB4TkM0eExERXhOQzQxUXpZMExqa3NPVFVzTWpNNUxqUXNNekF1TXl3ek1UVXNNekpqT0RndU5Dd3lMRE14TlN3NE9Dd3pNVFVzT0RoVE5EQTRMalFzTVRnc016SXdMREUyUXpJME15NHpMREUwTGpNc05qSXVOU3c1TWk0NExERTBMakVzTVRFMExqVmFJaUJ6ZEhsc1pUMGlabWxzYkRvalptWm1PMjl3WVdOcGRIazZNQzQwTXlJdlBqeHdZWFJvSUdROUlrMHhOQzR4TERFeE5DNDFRelkwTGprc09UVXNNak01TGpRc016QXVNeXd6TVRVc016SmpPRGd1TkN3eUxETXhOU3c0T0N3ek1UVXNPRGhUTkRBNExqUXNNVGdzTXpJd0xERTJRekkwTXk0ekxERTBMak1zTmpJdU5TdzVNaTQ0TERFMExqRXNNVEUwTGpWYUlpQnpkSGxzWlQwaVptbHNiRG9qWm1abU8yOXdZV05wZEhrNk1DNHpNU0l2UGp4d1lYUm9JR1E5SWswek1UVXNNekpETWpNNUxqUXNNekF1TXl3Mk5DNDVMRGsxTERFMExqRXNNVEUwTGpWTU1pd3hNakJJTmpNd1V6UXdNeTQwTERNMExETXhOU3d6TWxvaUlITjBlV3hsUFNKbWFXeHNPaU5tWm1ZaUx6NDhMM04yWno0PVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIxOFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLnN0eWxlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm9wdGlvbnMucHJlZml4ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk5EQWlQangwYVhSc1pUNUJjM05sZENBeE56azhMM1JwZEd4bFBqeHdZWFJvSUdROUlrMHdMREU0TGpFc05UTXNNUzQ1TERFd015d3lNR3cxT1MwNUxqVXlMRFUyTERFMUxqSXpMRGN5TFRjdU5qRXNORFlzTkM0M05pd3pOQzAwTGpjMkxETTJMRGd1TlRjc056WXRNVGtzT0RVc01UVXVNalJNTmpNd0xEQldNemN1TVRSSU1Gb2lJSE4wZVd4bFBTSm1hV3hzT2lObVptWTdiM0JoWTJsMGVUb3dMalEzTURBd01EQXdNREF3TURBd01EQXpJaTgrUEhCaGRHZ2daRDBpVFRBc01qQXNOVE1zTXk0NE1Td3hNRE1zTWpFdU9XdzFPUzA1TGpVeUxEVTJMREUxTGpJMFRESTVNQ3d5TUd3ME5pdzBMamMyVERNM01Dd3lNR3d6Tml3NUxqVXlMRGMyTFRFM0xqRTBMRGcxTERFMkxqRTVMRFl6TFRFMkxqRTVWalF3U0RCYUlpQnpkSGxzWlQwaVptbHNiRG9qWm1abUlpOCtQQzl6ZG1jK1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIxOVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLnN0eWxlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm9wdGlvbnMucHJlZml4ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk9EQWlQangwYVhSc1pUNHhPVHd2ZEdsMGJHVStQSEJoZEdnZ1pEMGlUVFl6TUN3ek5pNDVZVE0wTGpZc016UXVOaXd3TERBc01DMHhOaTQxTFRRdU1tTXRNVGN1TWl3d0xUTXhMamdzTVRJdU55MHpOaTQzTERNd0xqTmhNakV1TWl3eU1TNHlMREFzTUN3d0xUa3VNeTB5TGpJc01qRXVPQ3d5TVM0NExEQXNNQ3d3TFRFekxqa3NOUzR4TERNNExqY3NNemd1Tnl3d0xEQXNNQzAwTUM0MExUUXVPR010TlM0eUxUY3VOeTB4TXk0MExURXlMall0TWpJdU55MHhNaTQyWVRJMUxqY3NNalV1Tnl3d0xEQXNNQzA0TGpjc01TNDFRelEzTWk0NUxESTNMamdzTkRVekxERXlMalFzTkRNd0xERXlMalJ6TFRReUxqY3NNVFV1TXkwMU1TNDNMRE0zTGpKakxUY3VNaTB4TUM0NUxURTRMamd0TVRndU1TMHpNUzQ0TFRFNExqRmhNemNzTXpjc01Dd3dMREF0TWpRc09TNHlZeTAyTFRFd0xqTXRNVFl1TXkweE55MHlPQzB4TnkweE15NDRMREF0TWpVdU5pdzVMak10TXpBdU55d3lNaTQzUVRJMkxqVXNNall1TlN3d0xEQXNNQ3d5TkRRc016Y3VNbUV5TWl3eU1pd3dMREFzTUMwMUxqZ3VOMk10TkMweE1TNDJMVEUwTFRFNUxqa3RNalV1TnkweE9TNDVZVEkwTGpjc01qUXVOeXd3TERBc01DMDVMalFzTVM0NVF6RTRPUzR5TERjdU5Dd3hOekV1Tml3d0xERTFNaTQxTERBc01USTBMallzTUN3eE1EQXNNVFV1T0N3NE5TNHpMRE01TGpsQk1qY3VOaXd5Tnk0MkxEQXNNQ3d3TERZekxESTRMakpoTWpNdU9Td3lNeTQ1TERBc01Dd3dMVGN1TVN3eFF6UTNMaklzTVRNc016RXVOU3d5TGpNc01UTXVOU3d5TGpOQk5ETXVNeXcwTXk0ekxEQXNNQ3d3TERBc05DNDBWamd3U0RZek1Gb2lJSE4wZVd4bFBTSm1hV3hzT2lObVptWWlMejQ4TDNOMlp6ND1cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiMjBcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub3B0aW9ucy5zdHlsZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLnByZWZpeCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJNVEF3SWo0OGRHbDBiR1UrUVhOelpYUWdNVGd3UEM5MGFYUnNaVDQ4Y0dGMGFDQmtQU0pOTmpNd0xEWXdMamd5VmpFd01FZ3dWamsxTGpnNGJERXhMamt4TFRZdU5EbE1PRFFzTkRNdU16UnNNell1TkRrc01qUXVORFZNTVRZd0xEUTJMREl6TWk0d05Td3diRFE1TGpBM0xETXlMamc1TERNMExqQTNMREk1TGpVNUxEWTRMakk1TERJM0xqYzFURFF5TXl3Mk5XdzBNaTR5TERJNExqSTVMREU0TGpNNUxURTJMRFE1TGpBM0xUTXlMamc1VERVNU5DdzRNeTQyTVN3Mk1qZ3NOakV1T1ZvaUlITjBlV3hsUFNKbWFXeHNPaU5tWm1ZaUx6NDhMM04yWno0PVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWNvZGVTdmcgPSBhdG9iKGVsZW0ub3B0aW9ucy5zdHlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuaW5uZXJIVE1MID0gZGVjb2RlU3ZnO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdmcgPSB3cmFwcGVyLmZpcnN0Q2hpbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhdGhzID0gc3ZnLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGF0aFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBbXS5mb3JFYWNoLmNhbGwocGF0aHMsIGZ1bmN0aW9uKHBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aC5zdHlsZS5maWxsID0gZWxlbS5vcHRpb25zLmNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzdmcuc2V0QXR0cmlidXRlKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRib2R5Lmhhc0NsYXNzKFwiYi0tZGVza3RvcFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5vcHRpb25zLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHQ6XCIgKyBOdW1iZXIoZWxlbS5vcHRpb25zLmhlaWdodCkudG9GaXhlZCgpICsgXCJweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHQ6XCIgKyBOdW1iZXIoc3ZnLmhlaWdodC5iYXNlVmFsLnZhbHVlKS50b0ZpeGVkKCkgKyBcInB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5vcHRpb25zLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHQ6XCIgKyBOdW1iZXIoZWxlbS5vcHRpb25zLmhlaWdodCkudG9GaXhlZCgpIC8gMiArIFwicHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0OlwiICsgTnVtYmVyKHN2Zy5oZWlnaHQuYmFzZVZhbC52YWx1ZSkudG9GaXhlZCgpIC8gMiArIFwicHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAkKFwiLnNoYXBlLWRpdmlkZXIgc3ZnIHRpdGxlXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW0uY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ6LWluZGV4XCI6IGVsZW0ub3B0aW9ucy56SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IGVsZW0ub3B0aW9ucy5vcGFjaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW0uYXBwZW5kKHN2Zyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZVZpZGVvczogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAvL3NlbGVjdGluZyBlbGVtZW50c1xyXG4gICAgICAgICAgICAgICAgLyogdmFyIHNlbGVjdG9ycyA9IFtcclxuICAgICAgICAgICAgICAgICAgJ2lmcmFtZVtzcmMqPVwicGxheWVyLnZpbWVvLmNvbVwiXScsXHJcbiAgICAgICAgICAgICAgICAgICdpZnJhbWVbc3JjKj1cInlvdXR1YmUuY29tXCJdJyxcclxuICAgICAgICAgICAgICAgICAgJ2lmcmFtZVtzcmMqPVwieW91dHViZS1ub2Nvb2tpZS5jb21cIl0nLFxyXG4gICAgICAgICAgICAgICAgICAnaWZyYW1lW3NyYyo9XCJraWNrc3RhcnRlci5jb21cIl1bc3JjKj1cInZpZGVvLmh0bWxcIl0nLFxyXG4gICAgICAgICAgICAgICAgICBcIm9iamVjdFwiLFxyXG4gICAgICAgICAgICAgICAgICBcImVtYmVkXCIsXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgdmFyIHZpZGVvQ29udGFpbmVycyA9ICQoXHJcbiAgICAgICAgICAgICAgICAgIFwic2VjdGlvbiwgLmNvbnRlbnQsIC5wb3N0LWNvbnRlbnQsIC52aWRlby1qcywgLnBvc3QtdmlkZW8sIC52aWRlby13cmFwLCAuYWpheC1xdWljay12aWV3LCNzbGlkZXI6bm90KC5yZXZzbGlkZXItd3JhcClcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHZhciBlbGVtID0gdmlkZW9Db250YWluZXJzLmZpbmQoc2VsZWN0b3JzLmpvaW4oXCIsXCIpKTtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgIGVsZW0uZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS53cmFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJlbWJlZC1yZXNwb25zaXZlIGVtYmVkLXJlc3BvbnNpdmUtMTZieTlcIj48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAkKFwiLmVtYmVkLXJlc3BvbnNpdmUtMTZieTlcIikuZmluZCgkKFwiaWZyYW1lXCIpKS5hZGRDbGFzcyhcImVtYmVkLXJlc3BvbnNpdmUtaXRlbVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSAqL1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb3VudGVyczogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJGNvdW50ZXIgPSAkKFwiLmNvdW50ZXJcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoJGNvdW50ZXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vQ2hlY2sgaWYgY291bnRUbyBwbHVnaW4gaXMgbG9hZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAkLmZuLmNvdW50VG8gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSU5TUElSTy5lbGVtZW50cy5ub3RpZmljYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIldhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwialF1ZXJ5IGNvdW50VG8gcGx1Z2luIGlzIG1pc3NpbmcgaW4gcGx1Z2lucy5qcyBmaWxlLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9Jbml0aWFsaXppbmcgY291bnRUbyBwbHVnaW5cclxuICAgICAgICAgICAgICAgICAgICAkY291bnRlci5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbSA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXggPSBlbGVtLmZpbmQoXCJzcGFuXCIpLmF0dHIoXCJkYXRhLXByZWZpeFwiKSB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VmZml4ID0gZWxlbS5maW5kKFwic3BhblwiKS5hdHRyKFwiZGF0YS1zdWZmaXhcIikgfHwgXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBXYXlwb2ludCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5maW5kKFwic3BhblwiKS5jb3VudFRvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hJbnRlcnZhbDogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24odmFsdWUsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcocHJlZml4KSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnRvRml4ZWQob3B0aW9ucy5kZWNpbWFscykgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcoc3VmZml4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IFwiMTA0JVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvdW50ZG93blRpbWVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciAkY291bnRkb3duVGltZXIgPSAkKFwiLmNvdW50ZG93blwiKTtcclxuICAgICAgICAgICAgICAgIGlmICgkY291bnRkb3duVGltZXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vQ2hlY2sgaWYgY291bnRkb3duIHBsdWdpbiBpcyBsb2FkZWRcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICQuZm4uY291bnRkb3duID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIElOU1BJUk8uZWxlbWVudHMubm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJXYXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImpRdWVyeSBjb3VudGRvd24gcGx1Z2luIGlzIG1pc3NpbmcgaW4gcGx1Z2lucy5qcyBmaWxlLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5jb3VudGRvd25cIikuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbSA9ICQoZWxlbWVudCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbERhdGUgPSBlbGVtLmF0dHIoXCJkYXRhLWNvdW50ZG93blwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uY291bnRkb3duKGZpbmFsRGF0ZSwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uaHRtbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdHJmdGltZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjb3VudGRvd24tY29udGFpbmVyXCI+PGRpdiBjbGFzcz1cImNvdW50ZG93bi1ib3hcIj48ZGl2IGNsYXNzPVwibnVtYmVyXCI+JS1EPC9kaXY+PHNwYW4+RGF5czwvc3Bhbj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjb3VudGRvd24tYm94XCI+PGRpdiBjbGFzcz1cIm51bWJlclwiPiVIPC9kaXY+PHNwYW4+SG91cnM8L3NwYW4+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY291bnRkb3duLWJveFwiPjxkaXYgY2xhc3M9XCJudW1iZXJcIj4lTTwvZGl2PjxzcGFuPk1pbnV0ZXM8L3NwYW4+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY291bnRkb3duLWJveFwiPjxkaXYgY2xhc3M9XCJudW1iZXJcIj4lUzwvZGl2PjxzcGFuPlNlY29uZHM8L3NwYW4+PC9kaXY+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm9ncmVzc0JhcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJHByb2dyZXNzQmFyID0gJChcIi5wLXByb2dyZXNzLWJhclwiKSB8fCAkKFwiLnByb2dyZXNzLWJhclwiKTtcclxuICAgICAgICAgICAgICAgIGlmICgkcHJvZ3Jlc3NCYXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRwcm9ncmVzc0Jhci5lYWNoKGZ1bmN0aW9uKGksIGVsZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRlbGVtID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnQgPSAkZWxlbS5hdHRyKFwiZGF0YS1wZXJjZW50XCIpIHx8IFwiMTAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheSA9ICRlbGVtLmF0dHIoXCJkYXRhLWRlbGF5XCIpIHx8IFwiNjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSAkZWxlbS5hdHRyKFwiZGF0YS10eXBlXCIpIHx8IFwiJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISRlbGVtLmhhc0NsYXNzKFwicHJvZ3Jlc3MtYW5pbWF0ZWRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRlbGVtLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9ncmVzc0JhclJ1biA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGVsZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogcGVyY2VudCArIFwiJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVhc2VJbk91dENpcmNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJwcm9ncmVzcy1hbmltYXRlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRlbGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRlbGF5KGRlbGF5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInByb2dyZXNzLXR5cGVcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8L3NwYW4+PHNwYW4gY2xhc3M9XCJwcm9ncmVzcy1udW1iZXIgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnQgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjwvc3Bhbj5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRib2R5Lmhhc0NsYXNzKFwiYnJlYWtwb2ludC1sZ1wiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGJvZHkuaGFzQ2xhc3MoXCJicmVha3BvaW50LXhsXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFdheXBvaW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiAkKGVsZW0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0JhclJ1bigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBkZWxheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXJSdW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwaWVDaGFydDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJHBpZUNoYXJ0ID0gJChcIi5waWUtY2hhcnRcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoJHBpZUNoYXJ0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvL0NoZWNrIGlmIGVhc3lQaWVDaGFydCBwbHVnaW4gaXMgbG9hZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAkLmZuLmVhc3lQaWVDaGFydCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBJTlNQSVJPLmVsZW1lbnRzLm5vdGlmaWNhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiV2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJqUXVlcnkgZWFzeVBpZUNoYXJ0IHBsdWdpbiBpcyBtaXNzaW5nIGluIHBsdWdpbnMuanMgZmlsZS5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICRwaWVDaGFydC5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbSA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vUGx1Z2luIE9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFyQ29sb3I6IGVsZW0uYXR0cihcImRhdGEtY29sb3JcIikgfHwgJHRoZW1lX2NvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2tDb2xvcjogZWxlbS5hdHRyKFwiZGF0YS10cmFja2NvbG9yXCIpIHx8IFwicmdiYSgwLDAsMCwwLjEwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVDb2xvcjogZWxlbS5hdHRyKFwiZGF0YS1zY2FsZUNvbG9yXCIpIHx8IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVMZW5ndGg6IGVsZW0uYXR0cihcImRhdGEtc2NhbGVMZW5ndGhcIikgfHwgNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVDYXA6IGVsZW0uYXR0cihcImRhdGEtbGluZUNhcFwiKSB8fCBcInNxdWFyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZVdpZHRoOiBlbGVtLmF0dHIoXCJkYXRhLWxpbmVXaWR0aFwiKSB8fCA2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogZWxlbS5hdHRyKFwiZGF0YS1zaXplXCIpIHx8IDE2MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZTogZWxlbS5hdHRyKFwiZGF0YS1yb3RhdGVcIikgfHwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU6IGVsZW0uYXR0cihcImRhdGEtYW5pbWF0ZVwiKSB8fCAyNjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbUVhc2luZzogZWxlbS5hdHRyKFwiZGF0YS1lYXNpbmdcIikgfHwgXCJlYXNlSW5PdXRFeHBvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uZmluZChcInNwYW4sIGlcIikuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBlbGVtLm9wdGlvbnMuc2l6ZSArIFwicHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogZWxlbS5vcHRpb25zLnNpemUgKyBcInB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpbmUtaGVpZ2h0XCI6IGVsZW0ub3B0aW9ucy5zaXplICsgXCJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9Jbml0aWFsaXppbmcgalF1ZXJ5IGVhc3lQaWVDaGFydCBwbHVnaW4gYW5kIHBhc3NpbmcgdGhlIG9wdGlvbnNcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgV2F5cG9pbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uZWFzeVBpZUNoYXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhckNvbG9yOiBlbGVtLm9wdGlvbnMuYmFyQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFja0NvbG9yOiBlbGVtLm9wdGlvbnMudHJhY2tDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlQ29sb3I6IGVsZW0ub3B0aW9ucy5zY2FsZUNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVMZW5ndGg6IGVsZW0ub3B0aW9ucy5zY2FsZUxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVDYXA6IGVsZW0ub3B0aW9ucy5saW5lQ2FwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZVdpZHRoOiBOdW1iZXIoZWxlbS5vcHRpb25zLmxpbmVXaWR0aCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBOdW1iZXIoZWxlbS5vcHRpb25zLnNpemUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlOiBOdW1iZXIoZWxlbS5vcHRpb25zLnJvdGF0ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlOiBOdW1iZXIoZWxlbS5vcHRpb25zLmFuaW1hdGUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbUVhc2luZzogZWxlbS5vcHRpb25zLmVsZW1FYXNpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN0ZXA6IGZ1bmN0aW9uKGZyb20sIHRvLCBwZXJjZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5maW5kKFwic3Bhbi5wZXJjZW50XCIpLnRleHQoTWF0aC5yb3VuZChwZXJjZW50KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1hcHM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyICRtYXAgPSAkKFwiLm1hcFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJG1hcC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9DaGVjayBpZiBnTWFwIHBsdWdpbiBpcyBsb2FkZWRcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICQuZm4uZ21hcDMgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSU5TUElSTy5lbGVtZW50cy5ub3RpZmljYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIldhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwialF1ZXJ5IGdtYXAzIHBsdWdpbiBpcyBtaXNzaW5nLCBwbGVhc2UgZ28gdG8gdGhpcyA8YSBocmVmPScvL3N1cHBvcnQuaW5zcGlyb3RoZW1lcy5jb20vaGVscC1jZW50ZXIvYXJ0aWNsZXMvOC8xNC82NS9nb29nbGUtbWFwcyc+aGVscCBhcnRpY2xlPC9hPiBhbmQgZm9sbG93IGluc3RydWN0aW9ucyBvbiBob3cgdG8gY29uZmlndXJlIGdvb2dsZSBtYXBzLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJG1hcC5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbSA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vUGx1Z2luIE9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IGVsZW0uYXR0cihcImRhdGEtbGF0aXR1ZGVcIikgfHwgXCItMzcuODE3MjQwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IGVsZW0uYXR0cihcImRhdGEtbG9uZ2l0dWRlXCIpIHx8IFwiMTQ0Ljk1NTgyMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mbzogZWxlbS5hdHRyKFwiZGF0YS1pbmZvXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwdHlwZTogZWxlbS5hdHRyKFwiZGF0YS10eXBlXCIpIHx8IFwiUk9BRE1BUFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgem9vbTogZWxlbS5hdHRyKFwiZGF0YS16b29tXCIpIHx8IDE0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbHNjcmVlbjogZWxlbS5kYXRhKFwiZnVsbHNjcmVlblwiKSA9PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IGVsZW0uYXR0cihcImRhdGEtaWNvblwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcENvbG9yOiBlbGVtLmF0dHIoXCJkYXRhLXN0eWxlXCIpIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXBzU3R5bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuTUFQUykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW0ub3B0aW9ucy5tYXBDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcHNTdHlsZSA9IE1BUFNbZWxlbS5vcHRpb25zLm1hcENvbG9yXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwc1N0eWxlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0luaXRpYWxpemUgZ29vZ2xlIG1hcHMgcGx1Z2luIGFuZCBwYXNzaW5nIHRoZSBvcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uZ21hcDMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGVsZW0ub3B0aW9ucy5sYXRpdHVkZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGVsZW0ub3B0aW9ucy5sb25naXR1ZGUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpvb206IE51bWJlcihlbGVtLm9wdGlvbnMuem9vbSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZFtlbGVtLm9wdGlvbnMubWFwdHlwZV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6b29tQ29udHJvbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmVldFZpZXdDb250cm9sOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbHNjcmVlbkNvbnRyb2w6IGVsZW0ub3B0aW9ucy5mdWxsc2NyZWVuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBtYXBzU3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5vcHRpb25zLmljb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uZ21hcDMoKS5tYXJrZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihlbGVtLm9wdGlvbnMubGF0aXR1ZGUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoZWxlbS5vcHRpb25zLmxvbmdpdHVkZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBlbGVtLm9wdGlvbnMuaWNvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nbWFwMygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcmtlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoZWxlbS5vcHRpb25zLmxhdGl0dWRlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihlbGVtLm9wdGlvbnMubG9uZ2l0dWRlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCIgXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAub3ZlcmxheSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoZWxlbS5vcHRpb25zLmxhdGl0dWRlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihlbGVtLm9wdGlvbnMubG9uZ2l0dWRlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJzxkaXYgY2xhc3M9XCJhbmltYXRlZC1kb3RcIj48L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtLm9wdGlvbnMuaW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nbWFwMygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluZm93aW5kb3coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGVsZW0ub3B0aW9ucy5sYXRpdHVkZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoZWxlbS5vcHRpb25zLmxvbmdpdHVkZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGVsZW0ub3B0aW9ucy5pbmZvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaXhlbE9mZnNldDogbmV3IGdvb2dsZS5tYXBzLlNpemUoMCwgLTEwKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGluZm93aW5kb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hcCA9IHRoaXMuZ2V0KDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWFya2VyID0gdGhpcy5nZXQoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5hZGRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mb3dpbmRvdy5vcGVuKG1hcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdyaWRMYXlvdXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCRncmlkTGF5b3V0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvL0NoZWNrIGlmIGlzb3RvcGUgcGx1Z2luIGlzIGxvYWRlZFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgJC5mbi5pc290b3BlID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIElOU1BJUk8uZWxlbWVudHMubm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJXYXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImpRdWVyeSBpc290b3BlIHBsdWdpbiBpcyBtaXNzaW5nIGluIHBsdWdpbnMuanMgZmlsZS5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNvdG9wZVJUTDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKElOU1BJUk8uY29yZS5ydGxTdGF0dXMoKSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzb3RvcGVSVEwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc290b3BlUlRMID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRncmlkTGF5b3V0LmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVNlbGVjdG9yOiBlbGVtLmF0dHIoXCJkYXRhLWl0ZW1cIikgfHwgXCJwb3J0Zm9saW8taXRlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0TW9kZTogZWxlbS5hdHRyKFwiZGF0YS1sYXlvdXRcIikgfHwgXCJtYXNvbnJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGVsZW0uYXR0cihcImRhdGEtZGVmYXVsdC1maWx0ZXJcIikgfHwgXCIqXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFnZ2VyOiBlbGVtLmF0dHIoXCJkYXRhLXN0YWdnZXJcIikgfHwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9IZWlnaHQ6IGVsZW0uZGF0YShcImF1dG8taGVpZ2h0XCIpID09IGZhbHNlID8gZmFsc2UgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZE1hcmdpbjogZWxlbS5hdHRyKFwiZGF0YS1tYXJnaW5cIikgfHwgMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkTWFyZ2luWHM6IGVsZW0uYXR0cihcImRhdGEtbWFyZ2luLXhzXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBlbGVtLmF0dHIoXCJkYXRhLXRyYW5zaXRpb25cIikgfHwgXCIwLjQ1c1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPcmlnaW5MZWZ0OiBpc290b3BlUlRMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLmJyZWFrcG9pbnRzKFwibGVzc1RoYW5cIiwgXCJsZ1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub3B0aW9ucy5ncmlkTWFyZ2luID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm9wdGlvbnMuZ3JpZE1hcmdpblhzIHx8IGVsZW0ub3B0aW9ucy5ncmlkTWFyZ2luO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uY3NzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMCAtXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLmdyaWRNYXJnaW4gK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJweCAtXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLmdyaWRNYXJnaW4gK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJweCAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoXCIuXCIgKyBlbGVtLm9wdGlvbnMuaXRlbVNlbGVjdG9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjAgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub3B0aW9ucy5ncmlkTWFyZ2luICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB4IFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm9wdGlvbnMuZ3JpZE1hcmdpbiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJweCAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5hdHRyKFwiZGF0YS1kZWZhdWx0LWZpbHRlclwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1EZWZhdWx0RmlsdGVyID0gZWxlbS5vcHRpb25zLmZpbHRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub3B0aW9ucy5maWx0ZXIgPSBcIi5cIiArIGVsZW0ub3B0aW9ucy5maWx0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZ3JpZC1sb2FkZXJcIj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpc290b3BlbGF5b3V0ID0gJChlbGVtKS5pbWFnZXNMb2FkZWQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbml0IElzb3RvcGUgYWZ0ZXIgYWxsIGltYWdlcyBoYXZlIGxvYWRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGlzb3RvcGVsYXlvdXQuaXNvdG9wZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0TW9kZTogZWxlbS5vcHRpb25zLmxheW91dE1vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBlbGVtLm9wdGlvbnMudHJhbnNpdGlvbkR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWdnZXI6IE51bWJlcihlbGVtLm9wdGlvbnMuc3RhZ2dlciksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1TZWxlY3RvcjogXCIuXCIgKyBlbGVtLm9wdGlvbnMuaXRlbVNlbGVjdG9yICsgXCI6bm90KC5ncmlkLWxvYWRlcilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc09yaWdpbkxlZnQ6IGVsZW0ub3B0aW9ucy5pc09yaWdpbkxlZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0hlaWdodDogZWxlbS5vcHRpb25zLmF1dG9IZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzb25yeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5XaWR0aDogZWxlbS5maW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIuXCIgKyBlbGVtLm9wdGlvbnMuaXRlbVNlbGVjdG9yICsgXCI6bm90KC5sYXJnZS13aWR0aClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBlbGVtLm9wdGlvbnMuZmlsdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZShcIi5ncmlkLWxvYWRlclwiKS5hZGRDbGFzcyhcImdyaWQtbG9hZGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vSW5maW5pdHkgU2Nyb2xsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtLm5leHQoKS5oYXNDbGFzcyhcImluZmluaXRlLXNjcm9sbFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSU5TUElSTy5lbGVtZW50cy5ncmlkTGF5b3V0SW5maW5pdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm9wdGlvbnMuaXRlbVNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub3B0aW9ucy5ncmlkTWFyZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZ3JpZEZpbHRlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JpZEZpbHRlci5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtRmlsdGVyID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGZpbHRlckl0ZW0gPSBlbGVtRmlsdGVyLmZpbmQoXCJhXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtRmlsdGVyTGF5b3V0ID0gZWxlbUZpbHRlci5hdHRyKFwiZGF0YS1sYXlvdXRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRmaWx0ZXJJdGVtQWN0aXZlQ2xhc3MgPSBcImFjdGl2ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRmaWx0ZXJJdGVtLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1GaWx0ZXIuZmluZChcImxpXCIpLnJlbW92ZUNsYXNzKCRmaWx0ZXJJdGVtQWN0aXZlQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudChcImxpXCIpLmFkZENsYXNzKCRmaWx0ZXJJdGVtQWN0aXZlQ2xhc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpbHRlclZhbHVlID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1jYXRlZ29yeVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChlbGVtRmlsdGVyTGF5b3V0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlzb3RvcGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZmlsdGVyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm9uKFwibGF5b3V0Q29tcGxldGVcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdpbmRvdy50cmlnZ2VyKFwic2Nyb2xsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElOU1BJUk8uZWxlbWVudHMubmFUbygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKFwiLmdyaWQtYWN0aXZlLXRpdGxlXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuZ3JpZC1hY3RpdmUtdGl0bGVcIikuZW1wdHkoKS5hcHBlbmQoJCh0aGlzKS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbURlZmF1bHRGaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpbHRlckRlZmF1bHRWYWx1ZSA9IGVsZW1GaWx0ZXIuZmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLWNhdGVnb3J5PVwiJyArIGVsZW0ub3B0aW9ucy5maWx0ZXIgKyAnXCJdJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbUZpbHRlci5maW5kKFwibGlcIikucmVtb3ZlQ2xhc3MoJGZpbHRlckl0ZW1BY3RpdmVDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckRlZmF1bHRWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBhcmVudChcImxpXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJGZpbHRlckl0ZW1BY3RpdmVDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpbHRlckRlZmF1bHRWYWx1ZSA9IGVsZW1GaWx0ZXIuZmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLWNhdGVnb3J5PVwiKlwiXScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckRlZmF1bHRWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBhcmVudChcImxpXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJGZpbHRlckl0ZW1BY3RpdmVDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ3JpZExheW91dEluZmluaXRlOiBmdW5jdGlvbihlbGVtZW50LCBlbGVtZW50U2VsZWN0b3IsIGVsZW1HcmlkTWFyZ2luKSB7XHJcbiAgICAgICAgICAgICAgICAvL0NoZWNrIGlmIGluZmluaXRlU2Nyb2xsIHBsdWdpbiBpcyBsb2FkZWRcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgJC5mbi5pbmZpbml0ZVNjcm9sbCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIElOU1BJUk8uZWxlbWVudHMubm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIldhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJqUXVlcnkgaW5maW5pdGVTY3JvbGwgcGx1Z2luIGlzIG1pc3NpbmcsIHBsZWFzZSBhZGQgdGhpcyBjb2RlIGxpbmUgPGI+ICZsdDtzY3JpcHQgc3JjPSZxdW90O3BsdWdpbnMvbWV0YWZpenp5L2luZmluaXRlLXNjcm9sbC5taW4uanMmcXVvdDsmZ3Q7Jmx0Oy9zY3JpcHQmZ3Q7PC9iPiwgYmVmb3JlIDxiPnBsdWdpbnMuanM8L2I+XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGVsZW0gPSBlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRJdGVtID0gZWxlbWVudFNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRNYXJnaW4gPSBlbGVtR3JpZE1hcmdpbixcclxuICAgICAgICAgICAgICAgICAgICBsb2FkT25TY3JvbGwgPSB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZCA9IDUwMCxcclxuICAgICAgICAgICAgICAgICAgICBwcmVmaWxsaSA9IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aFNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRNb3JlRWxlbSA9ICQoXCIjc2hvd01vcmVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZE1vcmVCdG4gPSAkKFwiI3Nob3dNb3JlIGEuYnRuXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRNb3JlQnRuVGV4dCA9ICQoXCIjc2hvd01vcmUgYS5idG5cIikuaHRtbCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRNb3JlTWVzc2FnZSA9ICQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiaW5maW5pdGUtc2Nyb2xsLW1lc3NhZ2VcIj48cCBjbGFzcz1cImFuaW1hdGVfX2FuaW1hdGVkIHZpc2libGUgYW5pbWF0ZV9fZmFkZUluXCI+Tm8gbW9yZSBwb3N0cyB0byBzaG93PC9wPjwvZGl2PidcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIHBhdGhTZWxlY3RvciA9ICQoXCIuaW5maW5pdGUtc2Nyb2xsID4gYVwiKS5hdHRyKFwiaHJlZlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocGF0aFNlbGVjdG9yLmluZGV4T2YoXCIuaHRtbFwiKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aFNlbGVjdG9yID0gcGF0aFNlbGVjdG9yLnJlcGxhY2UoLygtXFxkKykvZywgXCIte3sjfX1cIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhTZWxlY3RvciA9IFwiLmluZmluaXRlLXNjcm9sbCA+IGFcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobG9hZE1vcmVFbGVtLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2FkT25TY3JvbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBwcmVmaWxsaSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVsZW0uaW5maW5pdGVTY3JvbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IHBhdGhTZWxlY3RvcixcclxuICAgICAgICAgICAgICAgICAgICBhcHBlbmQ6IFwiLlwiICsgZ3JpZEl0ZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uOiBcIiNzaG93TW9yZSBhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVGhyZXNob2xkOiB0aHJlc2hvbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZE9uU2Nyb2xsOiBsb2FkT25TY3JvbGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlZmlsbDogcHJlZmlsbGksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtLm9uKFwibG9hZC5pbmZpbml0ZVNjcm9sbFwiLCBmdW5jdGlvbihldmVudCwgcmVzcG9uc2UsIHBhdGgsIGl0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICRpdGVtcyA9ICQocmVzcG9uc2UpLmZpbmQoXCIuXCIgKyBncmlkSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGl0ZW1zLmltYWdlc0xvYWRlZChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5hcHBlbmQoJGl0ZW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5pc290b3BlKFwiaW5zZXJ0XCIsICRpdGVtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtLm9uKFwiZXJyb3IuaW5maW5pdGVTY3JvbGxcIiwgZnVuY3Rpb24oZXZlbnQsIGVycm9yLCBwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZE1vcmVFbGVtLmFkZENsYXNzKFwiYW5pbWF0ZV9fYW5pbWF0ZWQgdmlzaWJsZSBhbmltYXRlX19mYWRlT3V0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZE1vcmVFbGVtLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5hZnRlcihsb2FkTW9yZU1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmluZmluaXRlLXNjcm9sbC1tZXNzYWdlXCIpLmFkZENsYXNzKFwiYW5pbWF0ZV9fYW5pbWF0ZWQgdmlzaWJsZSBhbmltYXRlX19mYWRlT3V0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtLm9uKFwiYXBwZW5kLmluZmluaXRlU2Nyb2xsXCIsIGZ1bmN0aW9uKGV2ZW50LCByZXNwb25zZSwgcGF0aCwgaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBJTlNQSVJPLnNsaWRlci5jYXJvdXNlbCgkKGl0ZW1zKS5maW5kKFwiLmNhcm91c2VsXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICBsb2FkTW9yZUJ0bi5odG1sKGxvYWRNb3JlQnRuVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jc3MoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMCAtXCIgKyBncmlkTWFyZ2luICsgXCJweCAtXCIgKyBncmlkTWFyZ2luICsgXCJweCAwXCJcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoXCIuXCIgKyBncmlkSXRlbSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyhcInBhZGRpbmdcIiwgXCIwIFwiICsgZ3JpZE1hcmdpbiArIFwicHggXCIgKyBncmlkTWFyZ2luICsgXCJweCAwXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICB0b29sdGlwOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciAkdG9vbHRpcCA9ICQoJ1tkYXRhLWJzLXRvZ2dsZT1cInRvb2x0aXBcIl0nKTtcclxuICAgICAgICAgICAgICAgIGlmICgkdG9vbHRpcC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9DaGVjayBpZiB0b29sdGlwIHBsdWdpbiBpcyBsb2FkZWRcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICQuZm4udG9vbHRpcCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBJTlNQSVJPLmVsZW1lbnRzLm5vdGlmaWNhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiV2FybmluZzogalF1ZXJ5IHRvb2x0aXAgcGx1Z2luIGlzIG1pc3NpbmcgaW4gcGx1Z2lucy5qcyBmaWxlLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vSW5pdGlhbGl6ZSBUb29sdGlwIHBsdWdpbiBmdW5jdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICR0b29sdGlwLnRvb2x0aXAoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9wb3ZlcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJHBvcG92ZXIgPSAkKCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyXCJdJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJHBvcG92ZXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vQ2hlY2sgaWYgcG9wb3ZlciBwbHVnaW4gaXMgbG9hZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAkLmZuLnBvcG92ZXIgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSU5TUElSTy5lbGVtZW50cy5ub3RpZmljYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIldhcm5pbmc6IGpRdWVyeSBwb3BvdmVyIHBsdWdpbiBpcyBtaXNzaW5nIGluIHBsdWdpbnMuanMgZmlsZS5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL0luaXRpYWxpemUgVG9vbHRpcCBwbHVnaW4gZnVuY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAkcG9wb3Zlci5wb3BvdmVyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiBcImJvZHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIG1hZ25pZmljUG9wdXA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyICRsaWdodGJveCA9ICQoXCJbZGF0YS1saWdodGJveF1cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoJGxpZ2h0Ym94Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvL0NoZWNrIGlmIG1hZ25pZmljUG9wdXAgcGx1Z2luIGlzIGxvYWRlZFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgJC5mbi5tYWduaWZpY1BvcHVwID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIElOU1BJUk8uZWxlbWVudHMubm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJXYXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImpRdWVyeSBtYWduaWZpY1BvcHVwIHBsdWdpbiBpcyBtaXNzaW5nIGluIHBsdWdpbnMuanMgZmlsZS5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vR2V0IGxpZ2h0Ym94IGRhdGEgdHlwZVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBnZXRUeXBlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VPbkNvbnRlbnRDbGljazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92YWxEZWxheTogNTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEZpdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVPcGVuOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdC5pbWFnZS5tYXJrdXAgPSB0aGlzLnN0LmltYWdlLm1hcmt1cC5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZnAtZmlndXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1mcC1maWd1cmUgbWZwLXdpdGgtYW5pbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3QubWFpbkNsYXNzID0gXCJtZnAtem9vbS1vdXRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FsbGVyeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZWdhdGU6ICdhW2RhdGEtbGlnaHRib3g9XCJnYWxsZXJ5LWltYWdlXCJdLCBhW2RhdGEtbGlnaHRib3g9XCJpbWFnZVwiXScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImltYWdlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsRml0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbGxlcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlQnlJbWdDbGljazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVsb2FkOiBbMCwgMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZhbERlbGF5OiA1MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVPcGVuOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdC5pbWFnZS5tYXJrdXAgPSB0aGlzLnN0LmltYWdlLm1hcmt1cC5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZnAtZmlndXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1mcC1maWd1cmUgbWZwLXdpdGgtYW5pbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3QubWFpbkNsYXNzID0gXCJtZnAtem9vbS1vdXRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWZyYW1lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImlmcmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZhbERlbGF5OiA1MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVPcGVuOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdC5pbWFnZS5tYXJrdXAgPSB0aGlzLnN0LmltYWdlLm1hcmt1cC5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZnAtZmlndXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1mcC1maWd1cmUgbWZwLXdpdGgtYW5pbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3QubWFpbkNsYXNzID0gXCJtZnAtem9vbS1vdXRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWpheDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhamF4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmFsRGVsYXk6IDUwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFqYXhDb250ZW50QWRkZWQ6IGZ1bmN0aW9uKG1mcFJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElOU1BJUk8uZWxlbWVudHMuZnVuY3Rpb25zKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1JlaW5pdGlhbGl6ZSBjYXJvdXNlbCBmdW5jdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChcIi5tZnAtY29udGVudFwiKS5maW5kKFwiLmNhcm91c2VsXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElOU1BJUk8uc2xpZGVyLmNhcm91c2VsKCQoXCIubWZwLWNvbnRlbnRcIikuZmluZChcIi5jYXJvdXNlbFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5saW5lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImlubGluZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZhbERlbGF5OiA1MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUJ0bkluc2lkZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pZENsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlT3BlbjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3QuaW1hZ2UubWFya3VwID0gdGhpcy5zdC5pbWFnZS5tYXJrdXAucmVwbGFjZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWZwLWZpZ3VyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZnAtZmlndXJlIG1mcC13aXRoLWFuaW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0Lm1haW5DbGFzcyA9IFwibWZwLXpvb20tb3V0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcy5jb250ZW50KS5maW5kKFwidmlkZW9cIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzLmNvbnRlbnQpLmZpbmQoXCJ2aWRlb1wiKS5nZXQoMCkucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMuY29udGVudCkuZmluZChcInZpZGVvXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcy5jb250ZW50KS5maW5kKFwidmlkZW9cIikuZ2V0KDApLmxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZml4ZWRDb250ZW50UG9zOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dZOiBcInNjcm9sbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgLy9Jbml0aWFsaXppbmcgalF1ZXJ5IG1hZ25pZmljUG9wdXAgcGx1Z2luIGFuZCBwYXNzaW5nIHRoZSBvcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgJGxpZ2h0Ym94LmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1UeXBlID0gZWxlbS5hdHRyKFwiZGF0YS1saWdodGJveFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChlbGVtVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImltYWdlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5tYWduaWZpY1BvcHVwKGdldFR5cGUuaW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImdhbGxlcnlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm1hZ25pZmljUG9wdXAoZ2V0VHlwZS5nYWxsZXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpZnJhbWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm1hZ25pZmljUG9wdXAoZ2V0VHlwZS5pZnJhbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFqYXhcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm1hZ25pZmljUG9wdXAoZ2V0VHlwZS5hamF4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbmxpbmVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm1hZ25pZmljUG9wdXAoZ2V0VHlwZS5pbmxpbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHlUUGxheWVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciAkeXRQbGF5ZXIgPSAkKFwiLnlvdXR1YmUtYmFja2dyb3VuZFwiKTtcclxuICAgICAgICAgICAgICAgIGlmICgkeXRQbGF5ZXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vQ2hlY2sgaWYgWVRQbGF5ZXIgcGx1Z2luIGlzIGxvYWRlZFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgJC5mbi5ZVFBsYXllciA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBJTlNQSVJPLmVsZW1lbnRzLm5vdGlmaWNhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiV2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJqUXVlcnkgWVRQbGF5ZXIgcGx1Z2luIGlzIG1pc3NpbmcsIHBsZWFzZSBhZGQgdGhpcyBjb2RlIGxpbmUgPGI+ICZsdDtzY3JpcHQgc3JjPSZxdW90O3BsdWdpbnMveW91dHViZS1wbGF5ZXIvanF1ZXJ5Lm1iLllUUGxheWVyLm1pbi5qcyZxdW90OyZndDsmbHQ7L3NjcmlwdCZndDs8L2I+LCBiZWZvcmUgPGI+PC0tVGVtcGxhdGUgZnVuY3Rpb25zLS0+PC9iPlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYW5nZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAkeXRQbGF5ZXIuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW0gPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1BsdWdpbiBPcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvVVJMOiBlbGVtLmF0dHIoXCJkYXRhLXlvdXR1YmUtdXJsXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b1BsYXk6IGVsZW0uZGF0YShcInlvdXR1YmUtYXV0b3BsYXlcIikgPT0gZmFsc2UgPyAwIDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGU6IGVsZW0uZGF0YShcInlvdXR1YmUtbXV0ZVwiKSA9PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdXNlT25TY3JvbGw6IGVsZW0uZGF0YShcInlvdXR1YmUtcGF1c2VPblNjcm9sbFwiKSA9PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvb3A6IGVsZW0uZGF0YShcInlvdXR1YmUtbG9vcFwiKSA9PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvbDogZWxlbS5hdHRyKFwiZGF0YS15b3V0dWJlLXZvbHVtZVwiKSB8fCA1MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QXQ6IGVsZW0uYXR0cihcImRhdGEteW91dHViZS1zdGFydFwiKSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcEF0OiBlbGVtLmF0dHIoXCJkYXRhLXlvdXR1YmUtc3RvcFwiKSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbHM6IGVsZW0uZGF0YShcInlvdXR1YmUtY29udHJvbHNcIikgPT0gdHJ1ZSA/IDEgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVnRXhwID0gL14uKih5b3V0dVxcLmJlXFwvfHZcXC98dVxcL1xcd1xcL3xlbWJlZFxcL3x3YXRjaFxcP3Y9fFxcJnY9KShbXiNcXCZcXD9dKikuKi87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IGVsZW0ub3B0aW9ucy52aWRlb1VSTC5tYXRjaChyZWdFeHApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMl0ubGVuZ3RoID09IDExKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm9wdGlvbnMudmlkZW9VUkwgPSBtYXRjaFsyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub3B0aW9ucy52aWRlb1VSTCA9IGVsZW0ub3B0aW9ucy52aWRlb1VSTDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLllUUGxheWVyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpdFRvQmFja2dyb3VuZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvSWQ6IGVsZW0ub3B0aW9ucy52aWRlb1VSTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdDogZWxlbS5vcHRpb25zLmxvb3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJWYXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IGVsZW0ub3B0aW9ucy5zdGFydCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IGVsZW0ub3B0aW9ucy5lbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXk6IGVsZW0ub3B0aW9ucy5hdXRvUGxheSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2Rlc3RicmFuZGluZzogZWxlbS5vcHRpb25zLmxvZ28sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbHM6IGVsZW0ub3B0aW9ucy5jb250cm9scyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJhbmRpbmc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dpbmZvOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50czoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVhZHk6IG9uUGxheWVyUmVhZHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG9uUGxheWVyUmVhZHkoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtLm9wdGlvbnMudm9sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnNldFZvbHVtZShlbGVtLm9wdGlvbnMudm9sKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtLm9wdGlvbnMubXV0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5tdXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5vcHRpb25zLnBhdXNlT25TY3JvbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgd2F5cG9pbnQgPSBuZXcgV2F5cG9pbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbihkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wYXVzZVZpZGVvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5vcHRpb25zLmF1dG9QbGF5ID09IHRydWUgJiYgZGlyZWN0aW9uID09IFwidXBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wbGF5VmlkZW8oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChTZXR0aW5ncy5pc01vYmlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub24oXCJjbGlja1wiLCBmdW5jdGlvbihldikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQucGxheVZpZGVvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdmltZW9QbGF5ZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyICR2bVBsYXllciA9ICQoXCIudmltZW8tYmFja2dyb3VuZFwiKTtcclxuICAgICAgICAgICAgICAgIGlmICgkdm1QbGF5ZXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vQ2hlY2sgaWYgdmltZW9fcGxheWVyIHBsdWdpbiBpcyBsb2FkZWRcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICQuZm4udmltZW9fcGxheWVyID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIElOU1BJUk8uZWxlbWVudHMubm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJXYXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImpRdWVyeSB2aW1lb19wbGF5ZXIgcGx1Z2luIGlzIG1pc3NpbmcsIHBsZWFzZSBhZGQgdGhpcyBjb2RlIGxpbmUgPGI+ICZsdDtzY3JpcHQgc3JjPSZxdW90O3BsdWdpbnMvdmltZW8tcGxheWVyL2pxdWVyeS5tYi52aW1lb19wbGF5ZXIubWluLmpzJnF1b3Q7Jmd0OyZsdDsvc2NyaXB0Jmd0OzwvYj4sIGJlZm9yZSA8Yj48LS1UZW1wbGF0ZSBmdW5jdGlvbnMtLT48L2I+XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhbmdlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICR2bVBsYXllci5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbSA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtVmlkZW8gPSBlbGVtLmF0dHIoXCJkYXRhLXZpbWVvLXVybFwiKSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbU11dGUgPSBlbGVtLmF0dHIoXCJkYXRhLXZpbWVvLW11dGVcIikgfHwgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtUmF0aW8gPSBlbGVtLmF0dHIoXCJkYXRhLXZpbWVvLXJhdGlvXCIpIHx8IFwiMTYvOVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbVF1YWxpdHkgPSBlbGVtLmF0dHIoXCJkYXRhLXZpbWVvLXF1YWxpdHlcIikgfHwgXCJoZDcyMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbU9wYWNpdHkgPSBlbGVtLmF0dHIoXCJkYXRhLXZpbWVvLW9wYWNpdHlcIikgfHwgMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1Db250YWluZXIgPSBlbGVtLmF0dHIoXCJkYXRhLXZpbWVvLWNvbnRhaW5lclwiKSB8fCBcInNlbGZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1PcHRpbWl6ZSA9IGVsZW0uYXR0cihcImRhdGEtdmltZW8tb3B0aW1pemVcIikgfHwgdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1Mb29wID0gZWxlbS5hdHRyKFwiZGF0YS12aW1lby1sb29wXCIpIHx8IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtVm9sdW1lID0gZWxlbS5hdHRyKFwiZGF0YS12aW1lby12b2x1bWVcIikgfHwgNzAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtU3RhcnQgPSBlbGVtLmF0dHIoXCJkYXRhLXZpbWVvLXN0YXJ0XCIpIHx8IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtU3RvcCA9IGVsZW0uYXR0cihcImRhdGEtdmltZW8tc3RvcFwiKSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbUF1dG9QbGF5ID0gZWxlbS5hdHRyKFwiZGF0YS12aW1lby1hdXRvcGxheVwiKSB8fCB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbUZ1bGxTY3JlZW4gPSBlbGVtLmF0dHIoXCJkYXRhLXZpbWVvLWZ1bGxzY3JlZW5cIikgfHwgdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1Db250cm9scyA9IGVsZW0uYXR0cihcImRhdGEtdmltZW8tY29udHJvbHNcIikgfHwgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtTG9nbyA9IGVsZW0uYXR0cihcImRhdGEtdmltZW8tbG9nb1wiKSB8fCBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1BdXRvUGF1c2UgPSBlbGVtLmF0dHIoXCJkYXRhLXZpbWVvLWF1dG9wYXVzZVwiKSB8fCBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS52aW1lb19wbGF5ZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9VUkw6IGVsZW1WaWRlbyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGU6IGVsZW1NdXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW86IGVsZW1SYXRpbyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YWxpdHk6IGVsZW1RdWFsaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogZWxlbU9wYWNpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWlubWVudDogZWxlbUNvbnRhaW5lcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGltaXplRGlzcGxheTogZWxlbU9wdGltaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9vcDogZWxlbUxvb3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2w6IGVsZW1Wb2x1bWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEF0OiBlbGVtU3RhcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wQXQ6IGVsZW1TdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b1BsYXk6IGVsZW1BdXRvUGxheSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWxmdWxsc2NyZWVuOiBlbGVtRnVsbFNjcmVlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3d2bUxvZ286IGVsZW1Mb2dvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NvbnRyb2xzOiBlbGVtQ29udHJvbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtb2RhbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAvL0NoZWNrIGlmIG1hZ25pZmljUG9wdXAgcGx1Z2luIGlzIGxvYWRlZFxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAkLmZuLm1hZ25pZmljUG9wdXAgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBJTlNQSVJPLmVsZW1lbnRzLm5vdGlmaWNhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJXYXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwialF1ZXJ5IG1hZ25pZmljUG9wdXAgcGx1Z2luIGlzIG1pc3NpbmcgaW4gcGx1Z2lucy5qcyBmaWxlLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciAkbW9kYWwgPSAkKFwiLm1vZGFsXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICRtb2RhbFN0cmlwID0gJChcIi5tb2RhbC1zdHJpcFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAkYnRuTW9kYWwgPSAkKFwiLmJ0bi1tb2RhbFwiKSxcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbFNob3cgPSBcIm1vZGFsLWF1dG8tb3BlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsU2hvd0NsYXNzID0gXCJtb2RhbC1hY3RpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbERlY2xpbmUgPSAkKFwiLm1vZGFsLWNsb3NlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZU5vdGlmeSA9ICQoXCIuY29va2llLW5vdGlmeVwiKSxcclxuICAgICAgICAgICAgICAgICAgICBjb29raWVDb25maXJtID0gY29va2llTm90aWZ5LmZpbmQoXCIubW9kYWwtY29uZmlybSwgLm1mcC1jbG9zZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvKk1vZGFsKi9cclxuICAgICAgICAgICAgICAgIGlmICgkbW9kYWwubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRtb2RhbC5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbSA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtRGVsYXkgPSBlbGVtLmF0dHIoXCJkYXRhLWRlbGF5XCIpIHx8IDMwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtQ29va2llRXhwaXJlID0gZWxlbS5hdHRyKFwiZGF0YS1jb29raWUtZXhwaXJlXCIpIHx8IDM2NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1Db29raWVOYW1lID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uYXR0cihcImRhdGEtY29va2llLW5hbWVcIikgfHwgXCJjb29raWVNb2RhbE5hbWUyMDIwXzNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1Db29raWVFbmFibGVkID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uZGF0YShcImNvb2tpZS1lbmFibGVkXCIpID09IHRydWUgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtTW9kYWxEaXNtaXNzRGVsYXkgPSBlbGVtLmF0dHIoXCJkYXRhLWRlbGF5LWRpc21pc3NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qTW9kYWwgQXV0byBTaG93Ki9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW0uaGFzQ2xhc3MobW9kYWxTaG93KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZGFsRWxlbSA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxFbGVtLmFkZENsYXNzKG1vZGFsU2hvd0NsYXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGVsZW1EZWxheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLypNb2RhbCBEaXNzbWlzIEJ1dHRvbiovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uZmluZChtb2RhbERlY2xpbmUpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVDbGFzcyhtb2RhbFNob3dDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKk1vZGFsIEF1dG8gU2hvdyovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtLmhhc0NsYXNzKG1vZGFsU2hvdykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtQ29va2llRW5hYmxlZCAhPSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypDb29raWUgTm90aWZ5Ki9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQubWFnbmlmaWNQb3B1cC5vcGVuKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IGVsZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImlubGluZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQnRuSW5zaWRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pZENsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVPcGVuOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3QuaW1hZ2UubWFya3VwID0gdGhpcy5zdC5pbWFnZS5tYXJrdXAucmVwbGFjZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1mcC1maWd1cmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1mcC1maWd1cmUgbWZwLXdpdGgtYW5pbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdC5tYWluQ2xhc3MgPSBcIm1mcC16b29tLW91dFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMuY29udGVudCkuZmluZChcInZpZGVvXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMuY29udGVudCkuZmluZChcInZpZGVvXCIpLmdldCgwKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMuY29udGVudCkuZmluZChcInZpZGVvXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMuY29udGVudCkuZmluZChcInZpZGVvXCIpLmdldCgwKS5sb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZWxlbURlbGF5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBDb29raWVzLmdldChlbGVtQ29va2llTmFtZSkgPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKkNvb2tpZSBOb3RpZnkqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLm1hZ25pZmljUG9wdXAub3Blbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IGVsZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiaW5saW5lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQnRuSW5zaWRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWRDbGljazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVPcGVuOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0LmltYWdlLm1hcmt1cCA9IHRoaXMuc3QuaW1hZ2UubWFya3VwLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWZwLWZpZ3VyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1mcC1maWd1cmUgbWZwLXdpdGgtYW5pbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0Lm1haW5DbGFzcyA9IFwibWZwLXpvb20tb3V0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcy5jb250ZW50KS5maW5kKFwidmlkZW9cIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMuY29udGVudCkuZmluZChcInZpZGVvXCIpLmdldCgwKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb2tpZUNvbmZpcm0uY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvb2tpZXMuc2V0KGVsZW1Db29raWVOYW1lLCB0cnVlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBpcmVzOiBOdW1iZXIoZWxlbUNvb2tpZUV4cGlyZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLm1hZ25pZmljUG9wdXAuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29va2llTm90aWZ5LnJlbW92ZUNsYXNzKG1vZGFsU2hvd0NsYXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzLmNvbnRlbnQpLmZpbmQoXCJ2aWRlb1wiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcy5jb250ZW50KS5maW5kKFwidmlkZW9cIikuZ2V0KDApLmxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvb2tpZXMuc2V0KGVsZW1Db29raWVOYW1lLCB0cnVlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyZXM6IE51bWJlcihlbGVtQ29va2llRXhwaXJlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBlbGVtRGVsYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKk1vZGFsIERpc3NtaXMgQnV0dG9uKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5maW5kKG1vZGFsRGVjbGluZSkuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLm1hZ25pZmljUG9wdXAuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbU1vZGFsRGlzbWlzc0RlbGF5KSB7fVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLypNb2RhbCBTdHJpcCovXHJcbiAgICAgICAgICAgICAgICBpZiAoJG1vZGFsU3RyaXAubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRtb2RhbFN0cmlwLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1EZWxheSA9IGVsZW0uYXR0cihcImRhdGEtZGVsYXlcIikgfHwgMzAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1Db29raWVFeHBpcmUgPSBlbGVtLmF0dHIoXCJkYXRhLWNvb2tpZS1leHBpcmVcIikgfHwgMzY1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbUNvb2tpZU5hbWUgPSBlbGVtLmF0dHIoXCJkYXRhLWNvb2tpZS1uYW1lXCIpIHx8IFwiY29va2llTmFtZTIwMTNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1Db29raWVFbmFibGVkID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uZGF0YShcImNvb2tpZS1lbmFibGVkXCIpID09IHRydWUgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtTW9kYWxEaXNtaXNzRGVsYXkgPSBlbGVtLmF0dHIoXCJkYXRhLWRlbGF5LWRpc21pc3NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qTW9kYWwgQXV0byBTaG93Ki9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW0uaGFzQ2xhc3MobW9kYWxTaG93KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZGFsRWxlbSA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxFbGVtLmFkZENsYXNzKG1vZGFsU2hvd0NsYXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbU1vZGFsRGlzbWlzc0RlbGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQ2xhc3MobW9kYWxTaG93Q2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBlbGVtTW9kYWxEaXNtaXNzRGVsYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGVsZW1EZWxheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLypNb2RhbCBEaXNzbWlzIEJ1dHRvbiovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uZmluZChtb2RhbERlY2xpbmUpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVDbGFzcyhtb2RhbFNob3dDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKkNvb2tpZSBOb3RpZnkqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5oYXNDbGFzcyhcImNvb2tpZS1ub3RpZnlcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbUNvb2tpZUVuYWJsZWQgIT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29raWVOb3RpZnkuYWRkQ2xhc3MobW9kYWxTaG93Q2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgQ29va2llcy5nZXQoZWxlbUNvb2tpZU5hbWUpID09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb2tpZU5vdGlmeS5hZGRDbGFzcyhtb2RhbFNob3dDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBlbGVtRGVsYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29va2llQ29uZmlybS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnNldChlbGVtQ29va2llTmFtZSwgdHJ1ZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBpcmVzOiBOdW1iZXIoZWxlbUNvb2tpZUV4cGlyZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5tYWduaWZpY1BvcHVwLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29va2llTm90aWZ5LnJlbW92ZUNsYXNzKG1vZGFsU2hvd0NsYXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLypNb2RhbCB0b2dnbGVzKi9cclxuICAgICAgICAgICAgICAgIGlmICgkYnRuTW9kYWwubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRidG5Nb2RhbC5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbSA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RhbFRhcmdldCA9IGVsZW0uYXR0cihcImRhdGEtbW9kYWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKG1vZGFsVGFyZ2V0KS50b2dnbGVDbGFzcyhtb2RhbFNob3dDbGFzcywgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBub3RpZmljYXRpb246IGZ1bmN0aW9uKFxyXG4gICAgICAgICAgICAgICAgJHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgJG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAkdHlwZSxcclxuICAgICAgICAgICAgICAgICRlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgJGRlbGF5LFxyXG4gICAgICAgICAgICAgICAgJHBsYWNlbWVudCxcclxuICAgICAgICAgICAgICAgICRhbmltYXRlRW50ZXIsXHJcbiAgICAgICAgICAgICAgICAkYW5pbWF0ZUV4aXQsXHJcbiAgICAgICAgICAgICAgICAkYmFja2dyb3VuZEltYWdlLFxyXG4gICAgICAgICAgICAgICAgJHRpbWVvdXRcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnRDb250YWluZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgJGFuaW1hdGVFbnRlciA9IFwiYW5pbWF0ZV9fXCIgKyAkYW5pbWF0ZUVudGVyIHx8IFwiYW5pbWF0ZV9fZmFkZUluRG93blwiLFxyXG4gICAgICAgICAgICAgICAgICAgICRhbmltYXRlRXhpdCA9IFwiYW5pbWF0ZV9fXCIgKyAkYW5pbWF0ZUV4aXQgfHwgXCJhbmltYXRlX19mYWRlT3V0RG93blwiLFxyXG4gICAgICAgICAgICAgICAgICAgICRwbGFjZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgJGJhY2tncm91bmRJbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICAkYmFja2dyb3VuZEltYWdlQ29udGFpbmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICR0aW1lb3V0O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkcGxhY2VtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHBsYWNlbWVudCA9ICRwbGFjZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICRwbGFjZW1lbnQgPSBcInRvcFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRlbGVtZW50Q29udGFpbmVyID0gXCJlbGVtZW50LWNvbnRhaW5lclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICgkYW5pbWF0ZUVudGVyID0gXCJhbmltYXRlX19mYWRlSW5cIiksICgkYW5pbWF0ZUV4aXQgPSBcImFuaW1hdGVfX2ZhZGVPdXRcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICRlbGVtZW50Q29udGFpbmVyID0gXCJjb2wtMTEgY29sLW1kLTRcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGJhY2tncm91bmRJbWFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRiYWNrZ3JvdW5kSW1hZ2VDb250YWluZXIgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOnVybCgnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGJhY2tncm91bmRJbWFnZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcpOyBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgMjAlOyBoZWlnaHQ6MTIwcHggIWltcG9ydGFudDsgd2lkdGg6NDMwcHggIWltcG9ydGFudDsgYm9yZGVyOjBweDtcIiAnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghJG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAkbWVzc2FnZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJGVsZW1lbnQgPSBcImJvZHlcIjtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbm90aWZ5ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJC5ub3RpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAkbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6ICRlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAkdHlwZSB8fCBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6ICRkZWxheSB8fCAxMDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IGRhdGEtbm90aWZ5PVwiY29udGFpbmVyXCIgJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYmFja2dyb3VuZEltYWdlQ29udGFpbmVyICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgY2xhc3M9XCJib290c3RyYXAtbm90aWZ5ICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnRDb250YWluZXIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyBhbGVydCBhbGVydC17MH1cIiByb2xlPVwiYWxlcnRcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImJ0bi1jbG9zZVwiIGRhdGEtbm90aWZ5PVwiZGlzbWlzc1wiPjwvYnV0dG9uPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGRhdGEtbm90aWZ5PVwiaWNvblwiPjwvc3Bhbj4gJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gZGF0YS1ub3RpZnk9XCJ0aXRsZVwiPnsxfTwvc3Bhbj4gJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gZGF0YS1ub3RpZnk9XCJtZXNzYWdlXCI+ezJ9PC9zcGFuPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8L2Rpdj5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2Vfb3ZlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dfZGlzbWlzczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiAkcGxhY2VtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlcjogXCJhbmltYXRlX19hbmltYXRlZCBcIiArICRhbmltYXRlRW50ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0OiBcImFuaW1hdGVfX2FuaW1hdGVkIFwiICsgJGFuaW1hdGVFeGl0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RpZnkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90aWZ5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNpZGViYXJGaXhlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoSU5TUElSTy5jb3JlLnJ0bFN0YXR1cygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgJHNpZGViYXJGaXhlZCA9ICQoXCIuc3RpY2t5LXNpZGViYXJcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoJHNpZGViYXJGaXhlZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9DaGVjayBpZiB0aGVpYVN0aWNreVNpZGViYXIgcGx1Z2luIGlzIGxvYWRlZFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgJC5mbi50aGVpYVN0aWNreVNpZGViYXIgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSU5TUElSTy5lbGVtZW50cy5ub3RpZmljYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIldhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwialF1ZXJ5IHRoZWlhU3RpY2t5U2lkZWJhciBwbHVnaW4gaXMgbWlzc2luZyBpbiBwbHVnaW5zLmpzIGZpbGUuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAkc2lkZWJhckZpeGVkLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbE1hcmdpblRvcDogZWxlbS5hdHRyKFwiZGF0YS1tYXJnaW4tdG9wXCIpIHx8IDEyMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxNYXJnaW5Cb3R0b206IGVsZW0uYXR0cihcImRhdGEtbWFyZ2luLWJvdHRvbVwiKSB8fCA1MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9Jbml0aWFsaXplIHRoZWlhU3RpY2t5U2lkZWJhciBwbHVnaW4gYW5kIHBhc3NpbmcgdGhlIG9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS50aGVpYVN0aWNreVNpZGViYXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbE1hcmdpblRvcDogTnVtYmVyKGVsZW0ub3B0aW9ucy5hZGRpdGlvbmFsTWFyZ2luVG9wKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxNYXJnaW5Cb3R0b206IE51bWJlcihlbGVtLm9wdGlvbnMuYWRkaXRpb25hbE1hcmdpbkJvdHRvbSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlT25SZXNwb25zaXZlTGF5b3V0czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvb3RzdHJhcFN3aXRjaDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJGJvb3RzdHJhcFN3aXRjaCA9ICQoXCJbZGF0YS1zd2l0Y2g9dHJ1ZV1cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoJGJvb3RzdHJhcFN3aXRjaC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9DaGVjayBpZiBib290c3RyYXBTd2l0Y2ggcGx1Z2luIGlzIGxvYWRlZFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgJC5mbi5ib290c3RyYXBTd2l0Y2ggPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSU5TUElSTy5lbGVtZW50cy5ub3RpZmljYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIldhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwialF1ZXJ5IGJvb3RzdHJhcFN3aXRjaCBwbHVnaW4gaXMgbWlzc2luZyBpbiBwbHVnaW5zLmpzIGZpbGUuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL0luaXRpYWxpemUgalF1ZXJ5IEJvb3RzdHJhcFN3aXRjaCBwbHVnaW5cclxuICAgICAgICAgICAgICAgICAgICAkYm9vdHN0cmFwU3dpdGNoLmJvb3RzdHJhcFN3aXRjaCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbGlwYm9hcmQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyICRjbGlwYm9hcmRUYXJnZXQgPSAkKFwiW2RhdGEtY2xpcGJvYXJkLXRhcmdldF1cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgJGNsaXBib2FyZFRleHQgPSAkKFwiW2RhdGEtY2xpcGJvYXJkLXRleHRdXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCRjbGlwYm9hcmRUYXJnZXQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vQ2hlY2sgaWYgQ2xpcGJvYXJkSlMgcGx1Z2luIGlzIGxvYWRlZFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgQ2xpcGJvYXJkSlMgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSU5TUElSTy5lbGVtZW50cy5ub3RpZmljYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIldhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwialF1ZXJ5IENsaXBib2FyZEpTIHBsdWdpbiBpcyBtaXNzaW5nIGluIHBsdWdpbnMuanMgZmlsZS5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkY2xpcGJvYXJkVGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDbGlwYm9hcmRKUyhcIltkYXRhLWNsaXBib2FyZC10YXJnZXRdXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlwYm9hcmRJbml0KCRjbGlwYm9hcmRUYXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoJGNsaXBib2FyZFRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENsaXBib2FyZEpTKFwiW2RhdGEtY2xpcGJvYXJkLXRleHRdXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlwYm9hcmRJbml0KCRjbGlwYm9hcmRUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNsaXBib2FyZEluaXQoY2xpcGJvYXJkVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlwYm9hcmRUeXBlLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbSA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSBlbGVtLmF0dHIoXCJkYXRhLWJzLW9yaWdpbmFsLXRpdGxlXCIpIHx8IFwiQ29weSB0byBjbGlwYm9hcmRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZVN1Y2Nlc3MgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uYXR0cihcImRhdGEtYnMtb3JpZ2luYWwtdGl0bGUtc3VjY2Vzc1wiKSB8fCBcIkNvcGllZCFcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0udG9vbHRpcCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50OiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLmF0dHIoXCJkYXRhLWJzLW9yaWdpbmFsLXRpdGxlXCIsIHRpdGxlU3VjY2VzcykudG9vbHRpcChcInNob3dcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAub24oXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnRvb2x0aXAoXCJoaWRlXCIpLmF0dHIoXCJkYXRhLWJzLW9yaWdpbmFsLXRpdGxlXCIsIHRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvdW50ZG93bjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJGNvdW50ZG93biA9ICQoXCIucC1jb3VudGRvd25cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoJGNvdW50ZG93bi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNvdW50ZG93bi5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGVsZW0gPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGVsZW1Db3VudCA9ICRlbGVtLmZpbmQoXCIucC1jb3VudGRvd24tY291bnRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZWxlbVNob3cgPSAkZWxlbS5maW5kKFwiLnAtY291bnRkb3duLXNob3dcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZWxlbVNlY29uZHMgPSAkZWxlbS5hdHRyKFwiZGF0YS1kZWxheVwiKSB8fCA1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZWxlbUNvdW50LmZpbmQoXCIuY291bnQtbnVtYmVyXCIpLmh0bWwoJGVsZW1TZWNvbmRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFdheXBvaW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6ICRlbGVtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRlbGVtU2Vjb25kcy0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGVsZW1TZWNvbmRzID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGVsZW1Db3VudC5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGVsZW1TaG93LmZhZGVJbihcInNob3dcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRlbGVtQ291bnQuZmluZChcIi5jb3VudC1udW1iZXJcIikuaHRtbCgkZWxlbVNlY29uZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHZpZGVvQmFja2dyb3VuZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJHZpZGVvQmFja2dyb3VuZCA9ICQoXCJbZGF0YS1iZy12aWRlb11cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoJHZpZGVvQmFja2dyb3VuZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHZpZGVvQmFja2dyb3VuZC5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbSA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBlbGVtLmRhdGEoXCJhdXRvcGxheVwiKSA9PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzOiBlbGVtLmF0dHIoXCJkYXRhLWNvbnRyb2xzXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9vcDogZWxlbS5kYXRhKFwibG9vcFwiKSA9PSB0cnVlID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0ZWQ6IGVsZW0uZGF0YShcIm11dGVkXCIpID09IGZhbHNlID8gZmFsc2UgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdGVyOiBlbGVtLmF0dHIoXCJkYXRhLXBvc3RlclwiKSB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlbG9hZDogZWxlbS5hdHRyKFwiZGF0YS1wcmVsb2FkXCIpIHx8IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBlbGVtLmF0dHIoXCJkYXRhLWJnLXZpZGVvXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9tSWQ6IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA1KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtLm9wdGlvbnMuY29udHJvbHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub3B0aW9ucy5jb250cm9scyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyBjb250cm9scz1cIicgKyBlbGVtLm9wdGlvbnMuY29udHJvbHMgKyAnXCIgJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ub3B0aW9ucy5jb250cm9scyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJodG1sNXZpZFwiIGlkPVwidmlkZW8tJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm9wdGlvbnMucmFuZG9tSWQgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1wiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8dmlkZW8gcGxheXNpbmxpbmUgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLmNvbnRyb2xzICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgbG9vcD1cIicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLmxvb3AgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1wiIG11dGVkPVwiJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm9wdGlvbnMubXV0ZWQgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1wiIHBvc3Rlcj1cIicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLnBvc3RlciArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXCIgcHJlbG9hZD1cIicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5vcHRpb25zLnByZWxvYWQgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1wiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzb3VyY2Ugc3JjPVwiJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm9wdGlvbnMuc3JjICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcIiB0eXBlPVwidmlkZW8vbXA0XCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjwvdmlkZW8+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8L2Rpdj5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5vcHRpb25zLmF1dG9wbGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjdmlkZW8tXCIgKyBlbGVtLm9wdGlvbnMucmFuZG9tSWQpLndheXBvaW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwiZG93blwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiN2aWRlby1cIiArIGVsZW0ub3B0aW9ucy5yYW5kb21JZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoXCJ2aWRlb1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0KDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjdmlkZW8tXCIgKyBlbGVtLm9wdGlvbnMucmFuZG9tSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKFwidmlkZW9cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldCgwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjdmlkZW8tXCIgKyBlbGVtLm9wdGlvbnMucmFuZG9tSWQpLmFkZENsYXNzKFwidmlkZW8tbG9hZGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgSU5TUElSTy53aWRnZXRzID0ge1xyXG4gICAgICAgICAgICBmdW5jdGlvbnM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgSU5TUElSTy53aWRnZXRzLnR3aXR0ZXIoKTtcclxuICAgICAgICAgICAgICAgIElOU1BJUk8ud2lkZ2V0cy5mbGlja3IoKTtcclxuICAgICAgICAgICAgICAgIElOU1BJUk8ud2lkZ2V0cy5pbnN0YWdyYW0oKTtcclxuICAgICAgICAgICAgICAgIElOU1BJUk8ud2lkZ2V0cy5zdWJzY3JpYmVGb3JtKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHR3aXR0ZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyICR3aWRnZXRfdHdpdHRlciA9ICQoXCIud2lkZ2V0LXR3ZWV0ZXJcIikgfHwgJChcIi53aWRnZXQtdHdpdHRlclwiKTtcclxuICAgICAgICAgICAgICAgIGlmICgkd2lkZ2V0X3R3aXR0ZXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vQ2hlY2sgaWYgdHdpdHRpZSBwbHVnaW4gaXMgbG9hZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAkLmZuLnR3aXR0aWUgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSU5TUElSTy5lbGVtZW50cy5ub3RpZmljYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIldhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwialF1ZXJ5IHR3aXR0aWUgcGx1Z2luIGlzIG1pc3NpbmcgaW4gcGx1Z2lucy5qcyBmaWxlLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkd2lkZ2V0X3R3aXR0ZXIuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0d2l0dGVyVXNlcm5hbWUgPSBlbGVtLmF0dHIoXCJkYXRhLXVzZXJuYW1lXCIpIHx8IFwiYXJkaWFubXVzbGl1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHdpdHRlckxpbWl0ID0gZWxlbS5hdHRyKFwiZGF0YS1saW1pdFwiKSB8fCAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR3aXR0ZXJEYXRlRm9ybWF0ID0gZWxlbS5hdHRyKFwiZGF0YS1mb3JtYXRcIikgfHwgXCIlYi8lZC8lWVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR3aXR0ZXJMb2FkaW5nVGV4dCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5hdHRyKFwiZGF0YS1sb2FkaW5nLXRleHRcIikgfHwgXCJMb2FkaW5nLi4uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHdpdHRlckFwaVBBdGggPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uYXR0cihcImRhdGEtbG9hZGVyXCIpIHx8IFwiaW5jbHVkZS90d2l0dGVyL3R3ZWV0LnBocFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR3aXR0ZXJBdmF0YXIgPSBlbGVtLmF0dHIoXCJkYXRhLWF2YXRhclwiKSB8fCBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0d2l0dGVyQXZhdGFyID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHdpdHRlckF2YXRhciA9IFwie3thdmF0YXJ9fVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0d2l0dGVyQXZhdGFyID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uYXBwZW5kKCc8ZGl2IGlkPVwidHdpdHRlci1jbnRcIj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uZmluZChcIiN0d2l0dGVyLWNudFwiKS50d2l0dGllKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHR3aXR0ZXJVc2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IHR3aXR0ZXJMaW1pdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdDogdHdpdHRlckRhdGVGb3JtYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB0d2l0dGVyQXZhdGFyICsgXCJ7e3R3ZWV0fX08c21hbGw+e3tkYXRlfX08L3NtYWxsPlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGlQYXRoOiB0d2l0dGVyQXBpUEF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1RleHQ6IHR3aXR0ZXJMb2FkaW5nVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5wYXJlbnRzKFwiLmdyaWQtbGF5b3V0XCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucGFyZW50cyhcIi5ncmlkLWxheW91dFwiKS5pc290b3BlKFwibGF5b3V0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZsaWNrcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJGZsaWNrcl93aWRnZXQgPSAkKFwiLmZsaWNrci13aWRnZXRcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoJGZsaWNrcl93aWRnZXQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vQ2hlY2sgaWYgamZsaWNrcmZlZWQgcGx1Z2luIGlzIGxvYWRlZFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgJC5mbi5qZmxpY2tyZmVlZCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBJTlNQSVJPLmVsZW1lbnRzLm5vdGlmaWNhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiV2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJqUXVlcnkgamZsaWNrcmZlZWQgcGx1Z2luIGlzIG1pc3NpbmcgaW4gcGx1Z2lucy5qcyBmaWxlLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJGZsaWNrcl93aWRnZXQuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW0gPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogZWxlbS5hdHRyKFwiZGF0YS1mbGlja3ItaWRcIikgfHwgXCI1MjYxNzE1NUBOMDhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBlbGVtLmF0dHIoXCJkYXRhLWZsaWNrci1pbWFnZXNcIikgfHwgXCI5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtVGVtcGxhdGU6ICc8YSBocmVmPVwie3tpbWFnZX19XCIgdGl0bGU9XCJ7e3RpdGxlfX1cIj48aW1nIHNyYz1cInt7aW1hZ2Vfc319XCIgYWx0PVwie3t0aXRsZX19XCIgLz48L2E+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9Jbml0aWFsaXppbmcgamZsaWNrcmZlZWQgcGx1Z2luIGFuZCBwYXNzaW5nIHRoZSBvcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRmbGlja3Jfd2lkZ2V0LmpmbGlja3JmZWVkKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogZWxlbS5vcHRpb25zLmxpbWl0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHFzdHJpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBlbGVtLm9wdGlvbnMuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtVGVtcGxhdGU6IGVsZW0ub3B0aW9ucy5pdGVtVGVtcGxhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLmFkZENsYXNzKFwiZmxpY2tyLXdpZGdldC1sb2FkZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5tYWduaWZpY1BvcHVwKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGVnYXRlOiBcImFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbGxlcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5wYXJlbnRzKFwiLmdyaWQtbGF5b3V0XCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnBhcmVudHMoXCIuZ3JpZC1sYXlvdXRcIikuaXNvdG9wZShcImxheW91dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluc3RhZ3JhbTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJHdpZGdldF9pbnN0YWdyYW0gPSAkKFwiLndpZGdldC1pbnN0YWdyYW1cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoJHdpZGdldF9pbnN0YWdyYW0ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vQ2hlY2sgaWYgc3BlY3RyYWdyYW0gcGx1Z2luIGlzIGxvYWRlZFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgJC5mbi5zcGVjdHJhZ3JhbSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBJTlNQSVJPLmVsZW1lbnRzLm5vdGlmaWNhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiV2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJqUXVlcnkgc3BlY3RyYWdyYW0gcGx1Z2luIGlzIG1pc3NpbmcgaW4gcGx1Z2lucy5qcyBmaWxlLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICR3aWRnZXRfaW5zdGFncmFtLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhZ3JhbUxpbWl0ID0gZWxlbS5hdHRyKFwiZGF0YS1saW1pdFwiKSB8fCAxMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhZ3JhbUNvbHVtbnMgPSBlbGVtLmF0dHIoXCJkYXRhLWNvbFwiKSB8fCAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFncmFtQWNjZXNzVG9rZW4gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5hdHRyKFwiZGF0YS10b2tlblwiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJJR1FWSllNamRJYjNsT1pBbEJwVERaQXBZMWxPYWtOVlRrMXhXVmRXVms0MlkwUldNRk5EU1VFNFREUmFkM001ZDJKTlpBVVpBaUxYQmhZMFpBZldWWkFZVUVjdE1ERjBSMVF3WkEybFRhbFJRV0Mxa01pMXpkMnBRYzNVMFYzbGtNRUUwVGs4d1pBVWx6UVc1NWQzaDNUSEZqUlU5NFRnWkRaRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFncmFtSXRlbXMgPSBcIiNpbnN0YWdyYW0tY250XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YWdyYW1TaXplID0gZWxlbS5hdHRyKFwiZGF0YS1zaXplXCIpIHx8IFwic21hbGxcIiwgLy9UaGUgc2l6ZSBvZiB0aGUgcGhvdG9zLiAnc21hbGwnLCAnbWVkaXVtJyBvciAnYmlnJy4gRGVmYXVsdDogJ21lZGl1bSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhZ3JhbUdyaWRDb2x1bW5zID0gXCJncmlkLVwiICsgaW5zdGFncmFtQ29sdW1ucztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBpZD1cImluc3RhZ3JhbS1jbnRcIiBjbGFzcz1cIicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFncmFtR3JpZENvbHVtbnMgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1wiPjwvZGl2PidcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5mbi5zcGVjdHJhZ3JhbS5hY2Nlc3NEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzVG9rZW46IGluc3RhZ3JhbUFjY2Vzc1Rva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5maW5kKCQoaW5zdGFncmFtSXRlbXMpKS5zcGVjdHJhZ3JhbSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogbXlDYWxsYmFja0Z1bmMoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogaW5zdGFncmFtTGltaXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBpbnN0YWdyYW1TaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcEVhY2hXaXRoOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG15Q2FsbGJhY2tGdW5jKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5hZGRDbGFzcyhcIndpZGdldC1pbnN0YWdyYW0tbG9hZGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5wYXJlbnRzKFwiLmdyaWQtbGF5b3V0XCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucGFyZW50cyhcIi5ncmlkLWxheW91dFwiKS5pc290b3BlKFwibGF5b3V0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTsgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWJzY3JpYmVGb3JtOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciAkc3Vic2NyaWJlRm9ybSA9ICQoXCIud2lkZ2V0LXN1YnNjcmliZS1mb3JtXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCRzdWJzY3JpYmVGb3JtLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkc3Vic2NyaWJlRm9ybS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbSA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtU3VjY2Vzc01lc3NhZ2UgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5hdHRyKFwiZGF0YS1zdWNjZXNzLW1lc3NhZ2VcIikgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IHN1YnNjcmliZWQgdG8gb3VyIG1haWxpbmcgbGlzdC5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFkZG9uSWNvbiA9IGVsZW0uZmluZCgnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZG9uSWNvblRleHQgPSBhZGRvbkljb24uaHRtbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnN1Ym1pdChmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3N0X3VybCA9ICQodGhpcykuYXR0cihcImFjdGlvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0X21ldGhvZCA9ICQodGhpcykuYXR0cihcIm1ldGhvZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmb3JtX2RhdGEgPSAkKHRoaXMpLnNlcmlhbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1bMF0uY2hlY2tWYWxpZGl0eSgpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uYWRkQ2xhc3MoXCJ3YXMtdmFsaWRhdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGVsZW0pLnJlbW92ZUNsYXNzKFwid2FzLXZhbGlkYXRlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRvbkljb24uaHRtbCgnPGkgY2xhc3M9XCJpY29uLWxvYWRlciBmYS1zcGluXCI+PC9pPicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcG9zdF91cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHJlcXVlc3RfbWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBmb3JtX2RhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24odGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHQucmVzcG9uc2UgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLm5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVsZW1TdWNjZXNzTWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZWxlbSlbMF0ucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGVsZW0pLnJlbW92ZUNsYXNzKFwid2FzLXZhbGlkYXRlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRvbkljb24uaHRtbChhZGRvbkljb25UZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5ub3RpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB0ZXh0Lm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGVsZW0pWzBdLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChlbGVtKS5yZW1vdmVDbGFzcyhcIndhcy12YWxpZGF0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkb25JY29uLmh0bWwoYWRkb25JY29uVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkb25JY29uLmh0bWwoYWRkb25JY29uVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy9Mb2FkIEZ1bmN0aW9ucyBvbiBkb2N1bWVudCByZWFkeVxyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBJTlNQSVJPLmNvcmUuZnVuY3Rpb25zKCk7XHJcbiAgICAgICAgICAgIElOU1BJUk8uaGVhZGVyLmZ1bmN0aW9ucygpO1xyXG4gICAgICAgICAgICBJTlNQSVJPLnNsaWRlci5mdW5jdGlvbnMoKTtcclxuICAgICAgICAgICAgSU5TUElSTy53aWRnZXRzLmZ1bmN0aW9ucygpO1xyXG4gICAgICAgICAgICBJTlNQSVJPLmVsZW1lbnRzLmZ1bmN0aW9ucygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vUmVjYWxsIEZ1bmN0aW9ucyBvbiB3aW5kb3cgc2Nyb2xsXHJcbiAgICAgICAgJHdpbmRvdy5vbihcInNjcm9sbFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgSU5TUElSTy5oZWFkZXIuc3RpY2t5SGVhZGVyKCk7XHJcbiAgICAgICAgICAgIElOU1BJUk8uY29yZS5zY3JvbGxUb3AoKTtcclxuICAgICAgICAgICAgSU5TUElSTy5oZWFkZXIuZG90c01lbnUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL1JlY2FsbCBGdW5jdGlvbnMgb24gd2luZG93IHJlc2l6ZVxyXG4gICAgICAgICR3aW5kb3cub24oXCJyZXNpemVcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIElOU1BJUk8uaGVhZGVyLmxvZ29TdGF0dXMoKTtcclxuICAgICAgICAgICAgSU5TUElSTy5oZWFkZXIuc3RpY2t5SGVhZGVyKCk7XHJcbiAgICAgICAgICAgIElOU1BJUk8uaGVhZGVyLm1haW5NZW51UmVzcG9uc2l2ZVNob3coKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pKGpRdWVyeSk7XHJcbn0pO1xyXG4iLCIoZnVuY3Rpb24oZSl7dHlwZW9mIGRlZmluZT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIl0sZSk6dHlwZW9mIG1vZHVsZT09XCJvYmplY3RcIiYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24odCxuKXtyZXR1cm4gbj09PXVuZGVmaW5lZCYmKHR5cGVvZiB3aW5kb3chPVwidW5kZWZpbmVkXCI/bj1yZXF1aXJlKFwianF1ZXJ5XCIpOm49cmVxdWlyZShcImpxdWVyeVwiKSh0KSksZShuKSxufTplKGpRdWVyeSl9KShmdW5jdGlvbihlKXtmdW5jdGlvbiBBKHQsbixpKXt0eXBlb2YgaT09XCJzdHJpbmdcIiYmKGk9e2NsYXNzTmFtZTppfSksdGhpcy5vcHRpb25zPUUodyxlLmlzUGxhaW5PYmplY3QoaSk/aTp7fSksdGhpcy5sb2FkSFRNTCgpLHRoaXMud3JhcHBlcj1lKGguaHRtbCksdGhpcy5vcHRpb25zLmNsaWNrVG9IaWRlJiZ0aGlzLndyYXBwZXIuYWRkQ2xhc3MocitcIi1oaWRhYmxlXCIpLHRoaXMud3JhcHBlci5kYXRhKHIsdGhpcyksdGhpcy5hcnJvdz10aGlzLndyYXBwZXIuZmluZChcIi5cIityK1wiLWFycm93XCIpLHRoaXMuY29udGFpbmVyPXRoaXMud3JhcHBlci5maW5kKFwiLlwiK3IrXCItY29udGFpbmVyXCIpLHRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLnVzZXJDb250YWluZXIpLHQmJnQubGVuZ3RoJiYodGhpcy5lbGVtZW50VHlwZT10LmF0dHIoXCJ0eXBlXCIpLHRoaXMub3JpZ2luYWxFbGVtZW50PXQsdGhpcy5lbGVtPU4odCksdGhpcy5lbGVtLmRhdGEocix0aGlzKSx0aGlzLmVsZW0uYmVmb3JlKHRoaXMud3JhcHBlcikpLHRoaXMuY29udGFpbmVyLmhpZGUoKSx0aGlzLnJ1bihuKX12YXIgdD1bXS5pbmRleE9mfHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MCxuPXRoaXMubGVuZ3RoO3Q8bjt0KyspaWYodCBpbiB0aGlzJiZ0aGlzW3RdPT09ZSlyZXR1cm4gdDtyZXR1cm4tMX0sbj1cIm5vdGlmeVwiLHI9bitcImpzXCIsaT1uK1wiIWJsYW5rXCIscz17dDpcInRvcFwiLG06XCJtaWRkbGVcIixiOlwiYm90dG9tXCIsbDpcImxlZnRcIixjOlwiY2VudGVyXCIscjpcInJpZ2h0XCJ9LG89W1wibFwiLFwiY1wiLFwiclwiXSx1PVtcInRcIixcIm1cIixcImJcIl0sYT1bXCJ0XCIsXCJiXCIsXCJsXCIsXCJyXCJdLGY9e3Q6XCJiXCIsbTpudWxsLGI6XCJ0XCIsbDpcInJcIixjOm51bGwscjpcImxcIn0sbD1mdW5jdGlvbih0KXt2YXIgbjtyZXR1cm4gbj1bXSxlLmVhY2godC5zcGxpdCgvXFxXKy8pLGZ1bmN0aW9uKGUsdCl7dmFyIHI7cj10LnRvTG93ZXJDYXNlKCkuY2hhckF0KDApO2lmKHNbcl0pcmV0dXJuIG4ucHVzaChyKX0pLG59LGM9e30saD17bmFtZTpcImNvcmVcIixodG1sOic8ZGl2IGNsYXNzPVwiJytyKyctd3JhcHBlclwiPlxcblx0PGRpdiBjbGFzcz1cIicrcisnLWFycm93XCI+PC9kaXY+XFxuXHQ8ZGl2IGNsYXNzPVwiJytyKyctY29udGFpbmVyXCI+PC9kaXY+XFxuPC9kaXY+Jyxjc3M6XCIuXCIrcitcIi1jb3JuZXIge1xcblx0cG9zaXRpb246IGZpeGVkO1xcblx0bWFyZ2luOiA1cHg7XFxuXHR6LWluZGV4OiAxMDUwO1xcbn1cXG5cXG4uXCIrcitcIi1jb3JuZXIgLlwiK3IrXCItd3JhcHBlcixcXG4uXCIrcitcIi1jb3JuZXIgLlwiK3IrXCItY29udGFpbmVyIHtcXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cdGRpc3BsYXk6IGJsb2NrO1xcblx0aGVpZ2h0OiBpbmhlcml0O1xcblx0d2lkdGg6IGluaGVyaXQ7XFxuXHRtYXJnaW46IDNweDtcXG59XFxuXFxuLlwiK3IrXCItd3JhcHBlciB7XFxuXHR6LWluZGV4OiAxO1xcblx0cG9zaXRpb246IGFic29sdXRlO1xcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblx0aGVpZ2h0OiAwO1xcblx0d2lkdGg6IDA7XFxufVxcblxcbi5cIityK1wiLWNvbnRhaW5lciB7XFxuXHRkaXNwbGF5OiBub25lO1xcblx0ei1pbmRleDogMTtcXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLlwiK3IrXCItaGlkYWJsZSB7XFxuXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbltkYXRhLW5vdGlmeS10ZXh0XSxbZGF0YS1ub3RpZnktaHRtbF0ge1xcblx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uXCIrcitcIi1hcnJvdyB7XFxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXHR6LWluZGV4OiAyO1xcblx0d2lkdGg6IDA7XFxuXHRoZWlnaHQ6IDA7XFxufVwifSxwPXtcImJvcmRlci1yYWRpdXNcIjpbXCItd2Via2l0LVwiLFwiLW1vei1cIl19LGQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGNbZV19LHY9ZnVuY3Rpb24oZSl7aWYoIWUpdGhyb3dcIk1pc3NpbmcgU3R5bGUgbmFtZVwiO2NbZV0mJmRlbGV0ZSBjW2VdfSxtPWZ1bmN0aW9uKHQsaSl7aWYoIXQpdGhyb3dcIk1pc3NpbmcgU3R5bGUgbmFtZVwiO2lmKCFpKXRocm93XCJNaXNzaW5nIFN0eWxlIGRlZmluaXRpb25cIjtpZighaS5odG1sKXRocm93XCJNaXNzaW5nIFN0eWxlIEhUTUxcIjt2YXIgcz1jW3RdO3MmJnMuY3NzRWxlbSYmKHdpbmRvdy5jb25zb2xlJiZjb25zb2xlLndhcm4obitcIjogb3ZlcndyaXRpbmcgc3R5bGUgJ1wiK3QrXCInXCIpLGNbdF0uY3NzRWxlbS5yZW1vdmUoKSksaS5uYW1lPXQsY1t0XT1pO3ZhciBvPVwiXCI7aS5jbGFzc2VzJiZlLmVhY2goaS5jbGFzc2VzLGZ1bmN0aW9uKHQsbil7cmV0dXJuIG8rPVwiLlwiK3IrXCItXCIraS5uYW1lK1wiLVwiK3QrXCIge1xcblwiLGUuZWFjaChuLGZ1bmN0aW9uKHQsbil7cmV0dXJuIHBbdF0mJmUuZWFjaChwW3RdLGZ1bmN0aW9uKGUscil7cmV0dXJuIG8rPVwiXHRcIityK3QrXCI6IFwiK24rXCI7XFxuXCJ9KSxvKz1cIlx0XCIrdCtcIjogXCIrbitcIjtcXG5cIn0pLG8rPVwifVxcblwifSksaS5jc3MmJihvKz1cIi8qIHN0eWxlcyBmb3IgXCIraS5uYW1lK1wiICovXFxuXCIraS5jc3MpLG8mJihpLmNzc0VsZW09ZyhvKSxpLmNzc0VsZW0uYXR0cihcImlkXCIsXCJub3RpZnktXCIraS5uYW1lKSk7dmFyIHU9e30sYT1lKGkuaHRtbCk7eShcImh0bWxcIixhLHUpLHkoXCJ0ZXh0XCIsYSx1KSxpLmZpZWxkcz11fSxnPWZ1bmN0aW9uKHQpe3ZhciBuLHIsaTtyPXgoXCJzdHlsZVwiKSxyLmF0dHIoXCJ0eXBlXCIsXCJ0ZXh0L2Nzc1wiKSxlKFwiaGVhZFwiKS5hcHBlbmQocik7dHJ5e3IuaHRtbCh0KX1jYXRjaChzKXtyWzBdLnN0eWxlU2hlZXQuY3NzVGV4dD10fXJldHVybiByfSx5PWZ1bmN0aW9uKHQsbixyKXt2YXIgcztyZXR1cm4gdCE9PVwiaHRtbFwiJiYodD1cInRleHRcIikscz1cImRhdGEtbm90aWZ5LVwiK3QsYihuLFwiW1wiK3MrXCJdXCIpLmVhY2goZnVuY3Rpb24oKXt2YXIgbjtuPWUodGhpcykuYXR0cihzKSxufHwobj1pKSxyW25dPXR9KX0sYj1mdW5jdGlvbihlLHQpe3JldHVybiBlLmlzKHQpP2U6ZS5maW5kKHQpfSx3PXtjbGlja1RvSGlkZTohMCxhdXRvSGlkZTohMCxhdXRvSGlkZURlbGF5OjVlMyxhcnJvd1Nob3c6ITAsYXJyb3dTaXplOjUsYnJlYWtOZXdMaW5lczohMCxlbGVtZW50UG9zaXRpb246XCJib3R0b21cIixnbG9iYWxQb3NpdGlvbjpcInRvcCByaWdodFwiLHN0eWxlOlwiYm9vdHN0cmFwXCIsY2xhc3NOYW1lOlwiZXJyb3JcIixzaG93QW5pbWF0aW9uOlwic2xpZGVEb3duXCIsc2hvd0R1cmF0aW9uOjQwMCxoaWRlQW5pbWF0aW9uOlwic2xpZGVVcFwiLGhpZGVEdXJhdGlvbjoyMDAsZ2FwOjV9LEU9ZnVuY3Rpb24odCxuKXt2YXIgcjtyZXR1cm4gcj1mdW5jdGlvbigpe30sci5wcm90b3R5cGU9dCxlLmV4dGVuZCghMCxuZXcgcixuKX0sUz1mdW5jdGlvbih0KXtyZXR1cm4gZS5leHRlbmQodyx0KX0seD1mdW5jdGlvbih0KXtyZXR1cm4gZShcIjxcIit0K1wiPjwvXCIrdCtcIj5cIil9LFQ9e30sTj1mdW5jdGlvbih0KXt2YXIgbjtyZXR1cm4gdC5pcyhcIlt0eXBlPXJhZGlvXVwiKSYmKG49dC5wYXJlbnRzKFwiZm9ybTpmaXJzdFwiKS5maW5kKFwiW3R5cGU9cmFkaW9dXCIpLmZpbHRlcihmdW5jdGlvbihuLHIpe3JldHVybiBlKHIpLmF0dHIoXCJuYW1lXCIpPT09dC5hdHRyKFwibmFtZVwiKX0pLHQ9bi5maXJzdCgpKSx0fSxDPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpO2lmKHR5cGVvZiBuPT1cInN0cmluZ1wiKW49cGFyc2VJbnQobiwxMCk7ZWxzZSBpZih0eXBlb2YgbiE9XCJudW1iZXJcIilyZXR1cm47aWYoaXNOYU4obikpcmV0dXJuO3JldHVybiByPXNbZlt0LmNoYXJBdCgwKV1dLGk9dCxlW3JdIT09dW5kZWZpbmVkJiYodD1zW3IuY2hhckF0KDApXSxuPS1uKSxlW3RdPT09dW5kZWZpbmVkP2VbdF09bjplW3RdKz1uLG51bGx9LGs9ZnVuY3Rpb24oZSx0LG4pe2lmKGU9PT1cImxcInx8ZT09PVwidFwiKXJldHVybiAwO2lmKGU9PT1cImNcInx8ZT09PVwibVwiKXJldHVybiBuLzItdC8yO2lmKGU9PT1cInJcInx8ZT09PVwiYlwiKXJldHVybiBuLXQ7dGhyb3dcIkludmFsaWQgYWxpZ25tZW50XCJ9LEw9ZnVuY3Rpb24oZSl7cmV0dXJuIEwuZT1MLmV8fHgoXCJkaXZcIiksTC5lLnRleHQoZSkuaHRtbCgpfTtBLnByb3RvdHlwZS5sb2FkSFRNTD1mdW5jdGlvbigpe3ZhciB0O3Q9dGhpcy5nZXRTdHlsZSgpLHRoaXMudXNlckNvbnRhaW5lcj1lKHQuaHRtbCksdGhpcy51c2VyRmllbGRzPXQuZmllbGRzfSxBLnByb3RvdHlwZS5zaG93PWZ1bmN0aW9uKGUsdCl7dmFyIG4scixpLHMsbztyPWZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbigpeyFlJiYhbi5lbGVtJiZuLmRlc3Ryb3koKTtpZih0KXJldHVybiB0KCl9fSh0aGlzKSxvPXRoaXMuY29udGFpbmVyLnBhcmVudCgpLnBhcmVudHMoXCI6aGlkZGVuXCIpLmxlbmd0aD4wLGk9dGhpcy5jb250YWluZXIuYWRkKHRoaXMuYXJyb3cpLG49W107aWYobyYmZSlzPVwic2hvd1wiO2Vsc2UgaWYobyYmIWUpcz1cImhpZGVcIjtlbHNlIGlmKCFvJiZlKXM9dGhpcy5vcHRpb25zLnNob3dBbmltYXRpb24sbi5wdXNoKHRoaXMub3B0aW9ucy5zaG93RHVyYXRpb24pO2Vsc2V7aWYoISFvfHwhIWUpcmV0dXJuIHIoKTtzPXRoaXMub3B0aW9ucy5oaWRlQW5pbWF0aW9uLG4ucHVzaCh0aGlzLm9wdGlvbnMuaGlkZUR1cmF0aW9uKX1yZXR1cm4gbi5wdXNoKHIpLGlbc10uYXBwbHkoaSxuKX0sQS5wcm90b3R5cGUuc2V0R2xvYmFsUG9zaXRpb249ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmdldFBvc2l0aW9uKCksbj10WzBdLGk9dFsxXSxvPXNbbl0sdT1zW2ldLGE9bitcInxcIitpLGY9VFthXTtpZighZnx8IWRvY3VtZW50LmJvZHkuY29udGFpbnMoZlswXSkpe2Y9VFthXT14KFwiZGl2XCIpO3ZhciBsPXt9O2xbb109MCx1PT09XCJtaWRkbGVcIj9sLnRvcD1cIjQ1JVwiOnU9PT1cImNlbnRlclwiP2wubGVmdD1cIjQ1JVwiOmxbdV09MCxmLmNzcyhsKS5hZGRDbGFzcyhyK1wiLWNvcm5lclwiKSxlKFwiYm9keVwiKS5hcHBlbmQoZil9cmV0dXJuIGYucHJlcGVuZCh0aGlzLndyYXBwZXIpfSxBLnByb3RvdHlwZS5zZXRFbGVtZW50UG9zaXRpb249ZnVuY3Rpb24oKXt2YXIgbixyLGksbCxjLGgscCxkLHYsbSxnLHksYix3LEUsUyx4LFQsTixMLEEsTyxNLF8sRCxQLEgsQixqO0g9dGhpcy5nZXRQb3NpdGlvbigpLF89SFswXSxPPUhbMV0sTT1IWzJdLGc9dGhpcy5lbGVtLnBvc2l0aW9uKCksZD10aGlzLmVsZW0ub3V0ZXJIZWlnaHQoKSx5PXRoaXMuZWxlbS5vdXRlcldpZHRoKCksdj10aGlzLmVsZW0uaW5uZXJIZWlnaHQoKSxtPXRoaXMuZWxlbS5pbm5lcldpZHRoKCksaj10aGlzLndyYXBwZXIucG9zaXRpb24oKSxjPXRoaXMuY29udGFpbmVyLmhlaWdodCgpLGg9dGhpcy5jb250YWluZXIud2lkdGgoKSxUPXNbX10sTD1mW19dLEE9c1tMXSxwPXt9LHBbQV09Xz09PVwiYlwiP2Q6Xz09PVwiclwiP3k6MCxDKHAsXCJ0b3BcIixnLnRvcC1qLnRvcCksQyhwLFwibGVmdFwiLGcubGVmdC1qLmxlZnQpLEI9W1widG9wXCIsXCJsZWZ0XCJdO2Zvcih3PTAsUz1CLmxlbmd0aDt3PFM7dysrKUQ9Qlt3XSxOPXBhcnNlSW50KHRoaXMuZWxlbS5jc3MoXCJtYXJnaW4tXCIrRCksMTApLE4mJkMocCxELE4pO2I9TWF0aC5tYXgoMCx0aGlzLm9wdGlvbnMuZ2FwLSh0aGlzLm9wdGlvbnMuYXJyb3dTaG93P2k6MCkpLEMocCxBLGIpO2lmKCF0aGlzLm9wdGlvbnMuYXJyb3dTaG93KXRoaXMuYXJyb3cuaGlkZSgpO2Vsc2V7aT10aGlzLm9wdGlvbnMuYXJyb3dTaXplLHI9ZS5leHRlbmQoe30scCksbj10aGlzLnVzZXJDb250YWluZXIuY3NzKFwiYm9yZGVyLWNvbG9yXCIpfHx0aGlzLnVzZXJDb250YWluZXIuY3NzKFwiYm9yZGVyLXRvcC1jb2xvclwiKXx8dGhpcy51c2VyQ29udGFpbmVyLmNzcyhcImJhY2tncm91bmQtY29sb3JcIil8fFwid2hpdGVcIjtmb3IoRT0wLHg9YS5sZW5ndGg7RTx4O0UrKyl7RD1hW0VdLFA9c1tEXTtpZihEPT09TCljb250aW51ZTtsPVA9PT1UP246XCJ0cmFuc3BhcmVudFwiLHJbXCJib3JkZXItXCIrUF09aStcInB4IHNvbGlkIFwiK2x9QyhwLHNbTF0saSksdC5jYWxsKGEsTyk+PTAmJkMocixzW09dLGkqMil9dC5jYWxsKHUsXyk+PTA/KEMocCxcImxlZnRcIixrKE8saCx5KSksciYmQyhyLFwibGVmdFwiLGsoTyxpLG0pKSk6dC5jYWxsKG8sXyk+PTAmJihDKHAsXCJ0b3BcIixrKE8sYyxkKSksciYmQyhyLFwidG9wXCIsayhPLGksdikpKSx0aGlzLmNvbnRhaW5lci5pcyhcIjp2aXNpYmxlXCIpJiYocC5kaXNwbGF5PVwiYmxvY2tcIiksdGhpcy5jb250YWluZXIucmVtb3ZlQXR0cihcInN0eWxlXCIpLmNzcyhwKTtpZihyKXJldHVybiB0aGlzLmFycm93LnJlbW92ZUF0dHIoXCJzdHlsZVwiKS5jc3Mocil9LEEucHJvdG90eXBlLmdldFBvc2l0aW9uPWZ1bmN0aW9uKCl7dmFyIGUsbixyLGkscyxmLGMsaDtoPXRoaXMub3B0aW9ucy5wb3NpdGlvbnx8KHRoaXMuZWxlbT90aGlzLm9wdGlvbnMuZWxlbWVudFBvc2l0aW9uOnRoaXMub3B0aW9ucy5nbG9iYWxQb3NpdGlvbiksZT1sKGgpLGUubGVuZ3RoPT09MCYmKGVbMF09XCJiXCIpO2lmKG49ZVswXSx0LmNhbGwoYSxuKTwwKXRocm93XCJNdXN0IGJlIG9uZSBvZiBbXCIrYStcIl1cIjtpZihlLmxlbmd0aD09PTF8fChyPWVbMF0sdC5jYWxsKHUscik+PTApJiYoaT1lWzFdLHQuY2FsbChvLGkpPDApfHwocz1lWzBdLHQuY2FsbChvLHMpPj0wKSYmKGY9ZVsxXSx0LmNhbGwodSxmKTwwKSllWzFdPShjPWVbMF0sdC5jYWxsKG8sYyk+PTApP1wibVwiOlwibFwiO3JldHVybiBlLmxlbmd0aD09PTImJihlWzJdPWVbMV0pLGV9LEEucHJvdG90eXBlLmdldFN0eWxlPWZ1bmN0aW9uKGUpe3ZhciB0O2V8fChlPXRoaXMub3B0aW9ucy5zdHlsZSksZXx8KGU9XCJkZWZhdWx0XCIpLHQ9Y1tlXTtpZighdCl0aHJvd1wiTWlzc2luZyBzdHlsZTogXCIrZTtyZXR1cm4gdH0sQS5wcm90b3R5cGUudXBkYXRlQ2xhc3Nlcz1mdW5jdGlvbigpe3ZhciB0LG47cmV0dXJuIHQ9W1wiYmFzZVwiXSxlLmlzQXJyYXkodGhpcy5vcHRpb25zLmNsYXNzTmFtZSk/dD10LmNvbmNhdCh0aGlzLm9wdGlvbnMuY2xhc3NOYW1lKTp0aGlzLm9wdGlvbnMuY2xhc3NOYW1lJiZ0LnB1c2godGhpcy5vcHRpb25zLmNsYXNzTmFtZSksbj10aGlzLmdldFN0eWxlKCksdD1lLm1hcCh0LGZ1bmN0aW9uKGUpe3JldHVybiByK1wiLVwiK24ubmFtZStcIi1cIitlfSkuam9pbihcIiBcIiksdGhpcy51c2VyQ29udGFpbmVyLmF0dHIoXCJjbGFzc1wiLHQpfSxBLnByb3RvdHlwZS5ydW49ZnVuY3Rpb24odCxuKXt2YXIgcixzLG8sdSxhO2UuaXNQbGFpbk9iamVjdChuKT9lLmV4dGVuZCh0aGlzLm9wdGlvbnMsbik6ZS50eXBlKG4pPT09XCJzdHJpbmdcIiYmKHRoaXMub3B0aW9ucy5jbGFzc05hbWU9bik7aWYodGhpcy5jb250YWluZXImJiF0KXt0aGlzLnNob3coITEpO3JldHVybn1pZighdGhpcy5jb250YWluZXImJiF0KXJldHVybjtzPXt9LGUuaXNQbGFpbk9iamVjdCh0KT9zPXQ6c1tpXT10O2ZvcihvIGluIHMpe3I9c1tvXSx1PXRoaXMudXNlckZpZWxkc1tvXTtpZighdSljb250aW51ZTt1PT09XCJ0ZXh0XCImJihyPUwociksdGhpcy5vcHRpb25zLmJyZWFrTmV3TGluZXMmJihyPXIucmVwbGFjZSgvXFxuL2csXCI8YnIvPlwiKSkpLGE9bz09PWk/XCJcIjpcIj1cIitvLGIodGhpcy51c2VyQ29udGFpbmVyLFwiW2RhdGEtbm90aWZ5LVwiK3UrYStcIl1cIikuaHRtbChyKX10aGlzLnVwZGF0ZUNsYXNzZXMoKSx0aGlzLmVsZW0/dGhpcy5zZXRFbGVtZW50UG9zaXRpb24oKTp0aGlzLnNldEdsb2JhbFBvc2l0aW9uKCksdGhpcy5zaG93KCEwKSx0aGlzLm9wdGlvbnMuYXV0b0hpZGUmJihjbGVhclRpbWVvdXQodGhpcy5hdXRvaGlkZVRpbWVyKSx0aGlzLmF1dG9oaWRlVGltZXI9c2V0VGltZW91dCh0aGlzLnNob3cuYmluZCh0aGlzLCExKSx0aGlzLm9wdGlvbnMuYXV0b0hpZGVEZWxheSkpfSxBLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7dGhpcy53cmFwcGVyLmRhdGEocixudWxsKSx0aGlzLndyYXBwZXIucmVtb3ZlKCl9LGVbbl09ZnVuY3Rpb24odCxyLGkpe3JldHVybiB0JiZ0Lm5vZGVOYW1lfHx0LmpxdWVyeT9lKHQpW25dKHIsaSk6KGk9cixyPXQsbmV3IEEobnVsbCxyLGkpKSx0fSxlLmZuW25dPWZ1bmN0aW9uKHQsbil7cmV0dXJuIGUodGhpcykuZWFjaChmdW5jdGlvbigpe3ZhciBpPU4oZSh0aGlzKSkuZGF0YShyKTtpJiZpLmRlc3Ryb3koKTt2YXIgcz1uZXcgQShlKHRoaXMpLHQsbil9KSx0aGlzfSxlLmV4dGVuZChlW25dLHtkZWZhdWx0czpTLGFkZFN0eWxlOm0scmVtb3ZlU3R5bGU6dixwbHVnaW5PcHRpb25zOncsZ2V0U3R5bGU6ZCxpbnNlcnRDU1M6Z30pLG0oXCJib290c3RyYXBcIix7aHRtbDpcIjxkaXY+XFxuPHNwYW4gZGF0YS1ub3RpZnktdGV4dD48L3NwYW4+XFxuPC9kaXY+XCIsY2xhc3Nlczp7YmFzZTp7XCJmb250LXdlaWdodFwiOlwiYm9sZFwiLHBhZGRpbmc6XCI4cHggMTVweCA4cHggMTRweFwiLFwidGV4dC1zaGFkb3dcIjpcIjAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpXCIsXCJiYWNrZ3JvdW5kLWNvbG9yXCI6XCIjZmNmOGUzXCIsYm9yZGVyOlwiMXB4IHNvbGlkICNmYmVlZDVcIixcImJvcmRlci1yYWRpdXNcIjpcIjRweFwiLFwid2hpdGUtc3BhY2VcIjpcIm5vd3JhcFwiLFwicGFkZGluZy1sZWZ0XCI6XCIyNXB4XCIsXCJiYWNrZ3JvdW5kLXJlcGVhdFwiOlwibm8tcmVwZWF0XCIsXCJiYWNrZ3JvdW5kLXBvc2l0aW9uXCI6XCIzcHggN3B4XCJ9LGVycm9yOntjb2xvcjpcIiNCOTRBNDhcIixcImJhY2tncm91bmQtY29sb3JcIjpcIiNGMkRFREVcIixcImJvcmRlci1jb2xvclwiOlwiI0VFRDNEN1wiLFwiYmFja2dyb3VuZC1pbWFnZVwiOlwidXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBWUFBQUNOaVIwTkFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBdFJKUkVGVWVOcWtWYzF1MDBBUUhxK2RPRCswcG9JUWZrSWphbFcwU0VHcVJNdVJuSG9zM0Rqd0FIMEFybHlRZUFOT09TTWVBQTVWanlCeEtCUWhnU3BWVUtLUU5HbG9GZHc0Y1d3Mmp0Zk1PbmE2Sk9VQXJEVGF6WGkvYjNkbTU1c29jUHFRaEZrYSsrYUhCc0k4R3NvcFJKRVJORmxZODhGQ0VrOVlpd2Y4UmhnUnlhSEZRcFBIQ0RtWkc1b1gydWkyeWlsa2NUVDFBY0RzYllDMU5NQXlPaTd6VFgyQWd4N0E5bHVBbDg4QmF1aWlRL2NKYVpRZklwQWxuZ0RjdlpaTXJsOHZGUEs1K1hrdHJXbHgzL2VoWjVyOSt0NmUrV1ZucDFweG5OSWpnQmU0LzZkQXlzUWM4ZHNtSHdQY1c5QzBoM2ZXMWhhbnMxbHR3Smh5MEd4SzdYWmJVbE1wNVd3MmV5YW42K2Z0L2YyRkFxWEdLNEN2UWs1SHVlRno3RDZHT1p0SXJLK3NydXBkeDFHUkJCcU5CdHpjMkFpTXI3blBwbFJkS2hiMXE2cTZ6akZocmtsRUZPVXV0b1E1MHhjWDg2WmxxYVpwUXJmYkJkdTJSNi9HMTl6WDZYU2doNlJYNXVieUhDTThucVNJRDZJQ3JHaVpqR1lZeG9qRXNpdzRQRHdNU0w1VktzQzhZZjRWUllGek16TWF4d2psSlNsQ3lBUTlsMENXNDRQQkFEelhoZTd4TWRpOUh0VHJkWWpGWWtEUUwwY240WGRxMi9FQUUrSW5DbnZBRFRmMmVhaDRTeDl2RXhRamtxWFQ2YUFFUklDTWV3ZC9VQXAvSWVZQU5NMmpveHQrcTVWSStpZXEyaTBXZzNsNkROekh3VEVSUGdvMWtvN1hCWGozdmRsc1QyRitVdWhJaFlrcDd1N0NhcmtjckZPQ3RSM0g1Sml3YkFJZUltalQvWVFLS0J0R2pSRkNVNUlVZ0ZSZTdmRjRjQ05WSVBNWW8zVktxeHdqeU5BWE5lcHVvcHlxbmxkNjAycVZzZlJwRWtreitHRkwxd1BqNnlTWEJwSnRXVmE1eGxocGN5aEJOd3BaSG10WDhBR2dmSUV4bzBacHprV1ZUQkdpWENTRWFIaDYyL1BvUjBwL3ZIYWN6eFhHbmo0YlNvK0c3OGxFTFU4MGgxdW9nQndXTGY1WWxzUG1nREVkNE0yMzZ4am0rOG5tNEl1RS85dSsvUEgySlhaZmJ3ejR6dzFXYk8rU1FQcFhmd0cvQkJnQWhDTlppU2IvcE9RQUFBQUFTVVZPUks1Q1lJST0pXCJ9LHN1Y2Nlc3M6e2NvbG9yOlwiIzQ2ODg0N1wiLFwiYmFja2dyb3VuZC1jb2xvclwiOlwiI0RGRjBEOFwiLFwiYm9yZGVyLWNvbG9yXCI6XCIjRDZFOUM2XCIsXCJiYWNrZ3JvdW5kLWltYWdlXCI6XCJ1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCUUFBQUFVQ0FZQUFBQ05pUjBOQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF1dEpSRUZVZU5xMGxjdFBFMEVjeDM4enUvUkZTMUVyeXF0Z0pGQTA4WUNpTVpJQVFRNGVSRzhlREdkUEppWWVUSXdIVGZ3UGlBY3ZYSXdYTHdvWFBhRHhrV2dRNmlzbEtsSkxTUVdMVXJhUExUdjdHbWUzMnpvRjlLU1RmTE83djUzdlozZC9NNy9mSXRoK0lPNklOdDJqam9BN2JqSENKb0FsekNSdzU5WXdIWWpCbmZNUHFBS1dRWUtqR2tmQ0pxQUYweHdaamlwUXRBM014ZVNHODdWaE9PWWVnVnJVQ3k3VVpNOVM2VExJZEFhbXlTVGNsWmRZaEZoUkhsb0dZZzdtZ1p2MVp6enR2Z3VkN1YxdGJRMnR3WUEzNExKbUY0cDVkWEYxS1R1Zm5FK1N4ZUp0dUNaTnNMRENRVTArUnlLVEYyN1VudzEwMWw4ZTZobnMzdTBQQmFsT1JWVlZrY2FFS0JKRGdWMytjR000dEtLbUkrb2hsSUdueWdLWDAwclNCZnN6ei9uMnVYdjgxd2Q2K3J0MW9yc1pDSFJkcjFJbWsyRjJLb2IzaHV0U3hXOHRoc2Q4QVhOYWxuOUQ3Q1RmQTZPKzBVZ2tNdXdWdkVGRlViYkFjcmtjVEE4K0F0T2s4RTZLaVFpRG1NRlNEcVpJdEF6RVZRdmlSa2REZGFGZ1BwOEhTWktBRUFMNVFoN1NxMmxJSkJKd3Yyc2NVcWtVbktvWmdOaGNES2hLZzVhSCsxSWtjb3VDQWRGR0FRc3VXWlloT2p3RkhROTZvYWdXZ1JvVW92MVQ5a1JCRU9EQXd4TTJRdEVVbCtXcCtMbjlWUm82QmNNdzRFckhSWWpINC9CMjZBbFFvUVFUUmRIV3djZDlBSDU3K1VBWGRkdkREMzdEbXJCQlYzNFdmcWlYUGw2MWcrdnI2eEE5enNHZU05Z09kc05Ya2dwRXRUd1Z2d09rbFhMS202Ky9wNWV6d2s0QitqNmRyb0JzMkNzR2EvZ05zNlJJeGF6bDRUYzI1bXBUZ3cvYXBQUjFMWWxOUkZBemdzT3hreVhZTElNMVY4Tk13eUFrSlNjdEQxZUdWS2lxNXdXalNQZGptZVRraUt2Vlc0ZjJZUEhXbDNHQVZxNnltY3lDVGdvdk0zRnp5UmlEZTJUYUtjRUtzTHBKdk5IalpnUE5xRXR5aTZtWkltNFNSRnlMTVVzT05TU2RrUGVGdFkxbjBtY3pvWTNCSFRMaHdQUnk5L2x6Y3ppQ3c5QUNJK3lxbDBWTHpjR0FaYllTTTVDQ1NaZzEvOW9jL25uNytpOE45cC84QW40Sk1BRHhoSCt4SGZ1aUt3QUFBQUJKUlU1RXJrSmdnZz09KVwifSxpbmZvOntjb2xvcjpcIiMzQTg3QURcIixcImJhY2tncm91bmQtY29sb3JcIjpcIiNEOUVERjdcIixcImJvcmRlci1jb2xvclwiOlwiI0JDRThGMVwiLFwiYmFja2dyb3VuZC1pbWFnZVwiOlwidXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBWUFBQUNOaVIwTkFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQjNSSlRVVUgzUVlGQWhrU3NkZXMvUUFBQThkSlJFRlVPTXZWbEd0TVcyVVl4Ly9QT2FXSFhnNmxMYVcweXBBdHcxVUNnYm5pTk9MY1ZPTG1Bakhab2xPWWx4bVRHWFZaZEFuUmZYUW0rN1NvVTRtWGFPYWlac0VwQzlGa2lRczZaNmJkQ25OWXJ1TTZLTkJ3NllXZXd6bDl6K3NISW1FV3Yrdno3WG1UOTVmLyszLys3d1A4MTR2K2VmRE9WMy9Tb1gzbEhBQSs2T0RlVUZmTWZqT1dNQURnZGsrZUVLejBwRjdhUWRNQWNPS0xManJjVk1WWDN4ZFdOMjkvR2hZUDdTdm5QMGNXZlM4Y2FTa2ZIWnNQRTlGZ250MDJKTnV0UTBRWUhCMmREejkvcEtYOFFqanVPOXhVeGQvNjZIZHhUZUNIWjNyb2pRT2JHUUJjdU5qZnBsa0QzYjE5WS82TXJpbVNhS2dTTW1wR1U1V2V2bUUvc3dhNk95NzN0UUhBMFJkcjJNbXYvNkExbjl3OXN1UTcwOTdaOWxNNEZsVGdURHJ6WlR1NFN0WFZmcGlJNDhyVmNVRE01Y21Fa3NyRm5IeGZwVHRVLzNCRlF6Q1FGLzJiWVZvTmJIN3ptSXRiU29NajQwSlN6bU15WDVxRHZyaUE3UWRySUlwQSszY2RzTXB1MG5YSThjVjBNdEtYQ1BaZXYrZ0NFTTFTMk5IUHZXZlAvaEwrN0ZTcjMrMHA1UkJFeWhFTjVKQ0tZcjhYbkFTTVQweEJOeXpRR1FlSThmanNHRDM5Uk1QazdzZTJiZDVadFR5b0ZZWGZ0RjZ5MzdneDdOZVV0SkpPVEZsQUhEWkxEdUlMVTNqMytINW9PckQzeVdiSXp0dWdhQXpnbkJLSnVCTHBHZlFyUzh3TzRGWmdWK2MxSXhhTGdXVlUwdE1MRUVUQ29zNHhNekVJdjljSlhRY3lhZ0l3aWdER3dKZ09BdEhBd0FoaXNRVWp5ME9SR0VSaUVMZ0c0aWFra3pvNE1ZQXhjTTVoQU1pMVdXRzF5WUNKSWNNVWFCa1ZSTGRHZVNVMjk5NVRMV3pjVUF6T05KN0o2RkJWQllJZ2dNem1GYnZkQlY0NENvcmc4dmpoekMrRUpFbDhVMWtKdGdZcmhDemdjL3Z2VHdYS1NpYjFwYVJGVlJWT1JEQUpBc3c1RnVUYUpFaFdNMlNIQjNtT0FsaGtOeHd1THplSnNHd3FXemY1VEZOZEtndFk1cUhwNlpGZjY3WS9zQVZhZENhVlk1WUFDRERiM09pNE5JakxuV013MlF0aENCSXNWaHNVVFU5dHZYc2plcTkrWDFkNzUvS0VzNExOT2ZjZGYvK0h0aE1udnd4T0Qwd21IYVhyN1pJdG4yd3VIMlNuQnpiWkFiUEp3cFB4K1ZRdXpjbTdkZ1JDQjU3YTF1QnpVRFJMNGJmbkkwUkUwZWFYZDlXODltcGpxSFpuVUk1SGgybDJka1paVWhPcXBpMnFTbXBPbVo2NFR1dTlxbHovU0VYbzZNRUhhM3dPaXA0NkYxbjc2MzNlZWtWOGRzOFd4am4zN1dsNjNWVmErZWo1b2VFWi84MlpCRVRKanBKMVJiaWoyRDNaLzF0clhVdkxzYmxDSzBYZk94MFNYMmtNc245ZFgrZCs3S2Y2aDhvNEFJeWt1ZmZqVDhMMjBMVSt3NEFaZDVWdkVQWStYcFdxTFYzMjdIUjdEelh1RG5EOHIrb3ZrQmVoSjhpK3k4WUFBQUFBU1VWT1JLNUNZSUk9KVwifSx3YXJuOntjb2xvcjpcIiNDMDk4NTNcIixcImJhY2tncm91bmQtY29sb3JcIjpcIiNGQ0Y4RTNcIixcImJvcmRlci1jb2xvclwiOlwiI0ZCRUVENVwiLFwiYmFja2dyb3VuZC1pbWFnZVwiOlwidXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBTUFBQUM2ViswL0FBQUJKbEJNVkVYcjZlYi8yb0Qvd2k3L3hqci8wbVAveWtmL3RRRC92QmovM283L3VRLy92eUwvdHdlYmhnRC80cHpYMUszejhlMzQ5dks2dEhDaWxDV2JpUXltbjBqR3dvcnI2ZFhRemEzSHhjS2tuMXZXdlYvNXVSZms0ZFhaMWJEMTgrLzUyWWViaUFteXI1UzltaEN6cldxNXQ2dWZqUkg1NGFMczBvUytxRDc1MVhxUGhBeWJod1hzdWpHM3NtK1prMFBUd0c2U2hnK1BoaE9iaHdPUGdRTDR6VjJubHlyZjI3dUxmZ0NQaFJIdTdPbUxnQWFma3lpV2tEM2w0OWliaUFmVHMwQytsZ0NuaXdENHNnREp4cU9pbHpEV293V0ZmQUgwOHVlYmlnNnFwRkhCdkgvYXcyNkZmUVRRenN2eThPeUVmejIwcjNqQXZhS2JoZ0c5cTBuYzJMYlp4WGFub1V1L3U1V1NnZ0N0cDFhbnBKS2RtRnovemxYLzFuR0ppWW11cTVEeDcrc0FBQURvUFVaU0FBQUFBWFJTVGxNQVFPYllaZ0FBQUFGaVMwZEVBSWdGSFVnQUFBQUpjRWhaY3dBQUN4TUFBQXNUQVFDYW5CZ0FBQUFIZEVsTlJRZmRCZ1VCR2hoNGFhaDVBQUFBbGtsRVFWUVkwMk5nb0JJSUU4RVVjd24xRmtJWE0xVGo1ZERVUWhQVTUwMk1pN1hYUXhHejV1VklqR09KVVVVVzgxSG5ZRXlNaTJIVmNVT0lDUVp6TU1ZbXhyRXlNeWxKd2dVdDVCbGpXUkxqbUptNHBJMWhZcDVTUUxHWXhEZ21MblpPVnh1b29DbElES2dYS01iTjVnZ1YxQUNMSmNhQnhOZ2NvaUdDQmlad2RXeE9FVEJEclR5RUZleTBqWUo0ZUhqTUdXZ0VBSXBSRlJDVXQwOHFBQUFBQUVsRlRrU3VRbUNDKVwifX19KSxlKGZ1bmN0aW9uKCl7ZyhoLmNzcykuYXR0cihcImlkXCIsXCJjb3JlLW5vdGlmeVwiKSxlKGRvY3VtZW50KS5vbihcImNsaWNrXCIsXCIuXCIrcitcIi1oaWRhYmxlXCIsZnVuY3Rpb24odCl7ZSh0aGlzKS50cmlnZ2VyKFwibm90aWZ5LWhpZGVcIil9KSxlKGRvY3VtZW50KS5vbihcIm5vdGlmeS1oaWRlXCIsXCIuXCIrcitcIi13cmFwcGVyXCIsZnVuY3Rpb24odCl7dmFyIG49ZSh0aGlzKS5kYXRhKHIpO24mJm4uc2hvdyghMSl9KX0pfSkiLCIvKipcbiAqIE93bCBjYXJvdXNlbFxuICogQHZlcnNpb24gMi4wLjAtYmV0YS4zXG4gKiBAYXV0aG9yIEJhcnRvc3ogV29qY2llY2hvd3NraVxuICogQGxpY2Vuc2UgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBAdG9kbyBMYXp5IExvYWQgSWNvblxuICogQHRvZG8gcHJldmVudCBhbmltYXRpb25lbmQgYnVibGluZ1xuICogQHRvZG8gaXRlbXNTY2FsZVVwXG4gKiBAdG9kbyBUZXN0IFplcHRvXG4gKiBAdG9kbyBzdGFnZVBhZGRpbmcgY2FsY3VsYXRlIHdyb25nIGFjdGl2ZSBjbGFzc2VzXG4gKi9cbjsoZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgY2Fyb3VzZWwuXG4gICAgICogQGNsYXNzIFRoZSBPd2wgQ2Fyb3VzZWwuXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8alF1ZXJ5fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgdG8gY3JlYXRlIHRoZSBjYXJvdXNlbCBmb3IuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIFRoZSBvcHRpb25zXG4gICAgICovXG4gICAgZnVuY3Rpb24gT3dsKGVsZW1lbnQsIG9wdGlvbnMpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3VycmVudCBzZXR0aW5ncyBmb3IgdGhlIGNhcm91c2VsLlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gbnVsbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3VycmVudCBvcHRpb25zIHNldCBieSB0aGUgY2FsbGVyIGluY2x1ZGluZyBkZWZhdWx0cy5cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIE93bC5EZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBsdWdpbiBlbGVtZW50LlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLiRlbGVtZW50ID0gJChlbGVtZW50KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJveGllZCBldmVudCBoYW5kbGVycy5cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faGFuZGxlcnMgPSB7fTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVmZXJlbmNlcyB0byB0aGUgcnVubmluZyBwbHVnaW5zIG9mIHRoaXMgY2Fyb3VzZWwuXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3BsdWdpbnMgPSB7fTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3VycmVudGx5IHN1cHByZXNzZWQgZXZlbnRzIHRvIHByZXZlbnQgdGhlbSBmcm9tIGJlZWluZyByZXRyaWdnZXJlZC5cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fc3VwcmVzcyA9IHt9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBYnNvbHV0ZSBjdXJyZW50IHBvc2l0aW9uLlxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9jdXJyZW50ID0gbnVsbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW5pbWF0aW9uIHNwZWVkIGluIG1pbGxpc2Vjb25kcy5cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fc3BlZWQgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb29yZGluYXRlcyBvZiBhbGwgaXRlbXMgaW4gcGl4ZWwuXG4gICAgICAgICAqIEB0b2RvIFRoZSBuYW1lIG9mIHRoaXMgbWVtYmVyIGlzIG1pc3NsZWFkaW5nLlxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9jb29yZGluYXRlcyA9IFtdO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDdXJyZW50IGJyZWFrcG9pbnQuXG4gICAgICAgICAqIEB0b2RvIFJlYWwgbWVkaWEgcXVlcmllcyB3b3VsZCBiZSBuaWNlLlxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9icmVha3BvaW50ID0gbnVsbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3VycmVudCB3aWR0aCBvZiB0aGUgcGx1Z2luIGVsZW1lbnQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl93aWR0aCA9IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsbCByZWFsIGl0ZW1zLlxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9pdGVtcyA9IFtdO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGwgY2xvbmVkIGl0ZW1zLlxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9jbG9uZXMgPSBbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTWVyZ2UgdmFsdWVzIG9mIGFsbCBpdGVtcy5cbiAgICAgICAgICogQHRvZG8gTWF5YmUgdGhpcyBjb3VsZCBiZSBwYXJ0IG9mIGEgcGx1Z2luLlxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9tZXJnZXJzID0gW107XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdpZHRocyBvZiBhbGwgaXRlbXMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl93aWR0aHMgPSBbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW52YWxpZGF0ZWQgcGFydHMgd2l0aGluIHRoZSB1cGRhdGUgcHJvY2Vzcy5cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faW52YWxpZGF0ZWQgPSB7fTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogT3JkZXJlZCBsaXN0IG9mIHdvcmtlcnMgZm9yIHRoZSB1cGRhdGUgcHJvY2Vzcy5cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fcGlwZSA9IFtdO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDdXJyZW50IHN0YXRlIGluZm9ybWF0aW9uIGZvciB0aGUgZHJhZyBvcGVyYXRpb24uXG4gICAgICAgICAqIEB0b2RvICMyNjFcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fZHJhZyA9IHtcbiAgICAgICAgICAgIHRpbWU6IG51bGwsXG4gICAgICAgICAgICB0YXJnZXQ6IG51bGwsXG4gICAgICAgICAgICBwb2ludGVyOiBudWxsLFxuICAgICAgICAgICAgc3RhZ2U6IHtcbiAgICAgICAgICAgICAgICBzdGFydDogbnVsbCxcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBudWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEN1cnJlbnQgc3RhdGUgaW5mb3JtYXRpb24gYW5kIHRoZWlyIHRhZ3MuXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3N0YXRlcyA9IHtcbiAgICAgICAgICAgIGN1cnJlbnQ6IHt9LFxuICAgICAgICAgICAgdGFnczoge1xuICAgICAgICAgICAgICAgICdpbml0aWFsaXppbmcnOiBbICdidXN5JyBdLFxuICAgICAgICAgICAgICAgICdhbmltYXRpbmcnOiBbICdidXN5JyBdLFxuICAgICAgICAgICAgICAgICdkcmFnZ2luZyc6IFsgJ2ludGVyYWN0aW5nJyBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgJC5lYWNoKFsgJ29uUmVzaXplJywgJ29uVGhyb3R0bGVkUmVzaXplJyBdLCAkLnByb3h5KGZ1bmN0aW9uKGksIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZXJzW2hhbmRsZXJdID0gJC5wcm94eSh0aGlzW2hhbmRsZXJdLCB0aGlzKTtcbiAgICAgICAgfSwgdGhpcykpO1xuXG4gICAgICAgICQuZWFjaChPd2wuUGx1Z2lucywgJC5wcm94eShmdW5jdGlvbihrZXksIHBsdWdpbikge1xuICAgICAgICAgICAgdGhpcy5fcGx1Z2luc1trZXkuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSldXG4gICAgICAgICAgICAgICAgPSBuZXcgcGx1Z2luKHRoaXMpO1xuICAgICAgICB9LCB0aGlzKSk7XG5cbiAgICAgICAgJC5lYWNoKE93bC5Xb3JrZXJzLCAkLnByb3h5KGZ1bmN0aW9uKHByaW9yaXR5LCB3b3JrZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3BpcGUucHVzaCh7XG4gICAgICAgICAgICAgICAgJ2ZpbHRlcic6IHdvcmtlci5maWx0ZXIsXG4gICAgICAgICAgICAgICAgJ3J1bic6ICQucHJveHkod29ya2VyLnJ1biwgdGhpcylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCB0aGlzKSk7XG5cbiAgICAgICAgdGhpcy5zZXR1cCgpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IG9wdGlvbnMgZm9yIHRoZSBjYXJvdXNlbC5cbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgT3dsLkRlZmF1bHRzID0ge1xuICAgICAgICBpdGVtczogMyxcbiAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgIGNlbnRlcjogZmFsc2UsXG4gICAgICAgIHJld2luZDogZmFsc2UsXG5cbiAgICAgICAgbW91c2VEcmFnOiB0cnVlLFxuICAgICAgICB0b3VjaERyYWc6IHRydWUsXG4gICAgICAgIHB1bGxEcmFnOiB0cnVlLFxuICAgICAgICBmcmVlRHJhZzogZmFsc2UsXG5cbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICBzdGFnZVBhZGRpbmc6IDAsXG5cbiAgICAgICAgbWVyZ2U6IGZhbHNlLFxuICAgICAgICBtZXJnZUZpdDogdHJ1ZSxcbiAgICAgICAgYXV0b1dpZHRoOiBmYWxzZSxcblxuICAgICAgICBzdGFydFBvc2l0aW9uOiAwLFxuICAgICAgICBydGw6IGZhbHNlLFxuXG4gICAgICAgIHNtYXJ0U3BlZWQ6IDI1MCxcbiAgICAgICAgZmx1aWRTcGVlZDogZmFsc2UsXG4gICAgICAgIGRyYWdFbmRTcGVlZDogZmFsc2UsXG5cbiAgICAgICAgcmVzcG9uc2l2ZToge30sXG4gICAgICAgIHJlc3BvbnNpdmVSZWZyZXNoUmF0ZTogMjAwLFxuICAgICAgICByZXNwb25zaXZlQmFzZUVsZW1lbnQ6IHdpbmRvdyxcblxuICAgICAgICBmYWxsYmFja0Vhc2luZzogJ3N3aW5nJyxcblxuICAgICAgICBpbmZvOiBmYWxzZSxcblxuICAgICAgICBuZXN0ZWRJdGVtU2VsZWN0b3I6IGZhbHNlLFxuICAgICAgICBpdGVtRWxlbWVudDogJ2RpdicsXG4gICAgICAgIHN0YWdlRWxlbWVudDogJ2RpdicsXG5cbiAgICAgICAgcmVmcmVzaENsYXNzOiAnb3dsLXJlZnJlc2gnLFxuICAgICAgICBsb2FkZWRDbGFzczogJ293bC1sb2FkZWQnLFxuICAgICAgICBsb2FkaW5nQ2xhc3M6ICdvd2wtbG9hZGluZycsXG4gICAgICAgIHJ0bENsYXNzOiAnb3dsLXJ0bCcsXG4gICAgICAgIHJlc3BvbnNpdmVDbGFzczogJ293bC1yZXNwb25zaXZlJyxcbiAgICAgICAgZHJhZ0NsYXNzOiAnb3dsLWRyYWcnLFxuICAgICAgICBpdGVtQ2xhc3M6ICdvd2wtaXRlbScsXG4gICAgICAgIHN0YWdlQ2xhc3M6ICdvd2wtc3RhZ2UnLFxuICAgICAgICBzdGFnZU91dGVyQ2xhc3M6ICdvd2wtc3RhZ2Utb3V0ZXInLFxuICAgICAgICBncmFiQ2xhc3M6ICdvd2wtZ3JhYidcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRW51bWVyYXRpb24gZm9yIHdpZHRoLlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAZW51bSB7U3RyaW5nfVxuICAgICAqL1xuICAgIE93bC5XaWR0aCA9IHtcbiAgICAgICAgRGVmYXVsdDogJ2RlZmF1bHQnLFxuICAgICAgICBJbm5lcjogJ2lubmVyJyxcbiAgICAgICAgT3V0ZXI6ICdvdXRlcidcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRW51bWVyYXRpb24gZm9yIHR5cGVzLlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAZW51bSB7U3RyaW5nfVxuICAgICAqL1xuICAgIE93bC5UeXBlID0ge1xuICAgICAgICBFdmVudDogJ2V2ZW50JyxcbiAgICAgICAgU3RhdGU6ICdzdGF0ZSdcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ29udGFpbnMgYWxsIHJlZ2lzdGVyZWQgcGx1Z2lucy5cbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgT3dsLlBsdWdpbnMgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIExpc3Qgb2Ygd29ya2VycyBpbnZvbHZlZCBpbiB0aGUgdXBkYXRlIHByb2Nlc3MuXG4gICAgICovXG4gICAgT3dsLldvcmtlcnMgPSBbIHtcbiAgICAgICAgZmlsdGVyOiBbICd3aWR0aCcsICdzZXR0aW5ncycgXSxcbiAgICAgICAgcnVuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuX3dpZHRoID0gdGhpcy4kZWxlbWVudC53aWR0aCgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBmaWx0ZXI6IFsgJ3dpZHRoJywgJ2l0ZW1zJywgJ3NldHRpbmdzJyBdLFxuICAgICAgICBydW46IGZ1bmN0aW9uKGNhY2hlKSB7XG4gICAgICAgICAgICBjYWNoZS5jdXJyZW50ID0gdGhpcy5faXRlbXMgJiYgdGhpcy5faXRlbXNbdGhpcy5yZWxhdGl2ZSh0aGlzLl9jdXJyZW50KV07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGZpbHRlcjogWyAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG4gICAgICAgIHJ1bjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLiRzdGFnZS5jaGlsZHJlbignLmNsb25lZCcpLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBmaWx0ZXI6IFsgJ3dpZHRoJywgJ2l0ZW1zJywgJ3NldHRpbmdzJyBdLFxuICAgICAgICBydW46IGZ1bmN0aW9uKGNhY2hlKSB7XG4gICAgICAgICAgICB2YXIgbWFyZ2luID0gdGhpcy5zZXR0aW5ncy5tYXJnaW4gfHwgJycsXG4gICAgICAgICAgICAgICAgZ3JpZCA9ICF0aGlzLnNldHRpbmdzLmF1dG9XaWR0aCxcbiAgICAgICAgICAgICAgICBydGwgPSB0aGlzLnNldHRpbmdzLnJ0bCxcbiAgICAgICAgICAgICAgICBjc3MgPSB7XG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgJ21hcmdpbi1sZWZ0JzogcnRsID8gbWFyZ2luIDogJycsXG4gICAgICAgICAgICAgICAgICAgICdtYXJnaW4tcmlnaHQnOiBydGwgPyAnJyA6IG1hcmdpblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICFncmlkICYmIHRoaXMuJHN0YWdlLmNoaWxkcmVuKCkuY3NzKGNzcyk7XG5cbiAgICAgICAgICAgIGNhY2hlLmNzcyA9IGNzcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAgZmlsdGVyOiBbICd3aWR0aCcsICdpdGVtcycsICdzZXR0aW5ncycgXSxcbiAgICAgICAgcnVuOiBmdW5jdGlvbihjYWNoZSkge1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gKHRoaXMud2lkdGgoKSAvIHRoaXMuc2V0dGluZ3MuaXRlbXMpLnRvRml4ZWQoMykgLSB0aGlzLnNldHRpbmdzLm1hcmdpbixcbiAgICAgICAgICAgICAgICBtZXJnZSA9IG51bGwsXG4gICAgICAgICAgICAgICAgaXRlcmF0b3IgPSB0aGlzLl9pdGVtcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgZ3JpZCA9ICF0aGlzLnNldHRpbmdzLmF1dG9XaWR0aCxcbiAgICAgICAgICAgICAgICB3aWR0aHMgPSBbXTtcblxuICAgICAgICAgICAgY2FjaGUuaXRlbXMgPSB7XG4gICAgICAgICAgICAgICAgbWVyZ2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgd2hpbGUgKGl0ZXJhdG9yLS0pIHtcbiAgICAgICAgICAgICAgICBtZXJnZSA9IHRoaXMuX21lcmdlcnNbaXRlcmF0b3JdO1xuICAgICAgICAgICAgICAgIG1lcmdlID0gdGhpcy5zZXR0aW5ncy5tZXJnZUZpdCAmJiBNYXRoLm1pbihtZXJnZSwgdGhpcy5zZXR0aW5ncy5pdGVtcykgfHwgbWVyZ2U7XG5cbiAgICAgICAgICAgICAgICBjYWNoZS5pdGVtcy5tZXJnZSA9IG1lcmdlID4gMSB8fCBjYWNoZS5pdGVtcy5tZXJnZTtcblxuICAgICAgICAgICAgICAgIHdpZHRoc1tpdGVyYXRvcl0gPSAhZ3JpZCA/IHRoaXMuX2l0ZW1zW2l0ZXJhdG9yXS53aWR0aCgpIDogd2lkdGggKiBtZXJnZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fd2lkdGhzID0gd2lkdGhzO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBmaWx0ZXI6IFsgJ2l0ZW1zJywgJ3NldHRpbmdzJyBdLFxuICAgICAgICBydW46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGNsb25lcyA9IFtdLFxuICAgICAgICAgICAgICAgIGl0ZW1zID0gdGhpcy5faXRlbXMsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzLFxuICAgICAgICAgICAgICAgIHZpZXcgPSBNYXRoLm1heChzZXR0aW5ncy5pdGVtcyAqIDIsIDQpLFxuICAgICAgICAgICAgICAgIHNpemUgPSBNYXRoLmNlaWwoaXRlbXMubGVuZ3RoIC8gMikgKiAyLFxuICAgICAgICAgICAgICAgIHJlcGVhdCA9IHNldHRpbmdzLmxvb3AgJiYgaXRlbXMubGVuZ3RoID8gc2V0dGluZ3MucmV3aW5kID8gdmlldyA6IE1hdGgubWF4KHZpZXcsIHNpemUpIDogMCxcbiAgICAgICAgICAgICAgICBhcHBlbmQgPSAnJyxcbiAgICAgICAgICAgICAgICBwcmVwZW5kID0gJyc7XG5cbiAgICAgICAgICAgIHJlcGVhdCAvPSAyO1xuXG4gICAgICAgICAgICB3aGlsZSAocmVwZWF0LS0pIHtcbiAgICAgICAgICAgICAgICBjbG9uZXMucHVzaCh0aGlzLm5vcm1hbGl6ZShjbG9uZXMubGVuZ3RoIC8gMiwgdHJ1ZSkpO1xuICAgICAgICAgICAgICAgIGFwcGVuZCA9IGFwcGVuZCArIGl0ZW1zW2Nsb25lc1tjbG9uZXMubGVuZ3RoIC0gMV1dWzBdLm91dGVySFRNTDtcbiAgICAgICAgICAgICAgICBjbG9uZXMucHVzaCh0aGlzLm5vcm1hbGl6ZShpdGVtcy5sZW5ndGggLSAxIC0gKGNsb25lcy5sZW5ndGggLSAxKSAvIDIsIHRydWUpKTtcbiAgICAgICAgICAgICAgICBwcmVwZW5kID0gaXRlbXNbY2xvbmVzW2Nsb25lcy5sZW5ndGggLSAxXV1bMF0ub3V0ZXJIVE1MICsgcHJlcGVuZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fY2xvbmVzID0gY2xvbmVzO1xuXG4gICAgICAgICAgICAkKGFwcGVuZCkuYWRkQ2xhc3MoJ2Nsb25lZCcpLmFwcGVuZFRvKHRoaXMuJHN0YWdlKTtcbiAgICAgICAgICAgICQocHJlcGVuZCkuYWRkQ2xhc3MoJ2Nsb25lZCcpLnByZXBlbmRUbyh0aGlzLiRzdGFnZSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGZpbHRlcjogWyAnd2lkdGgnLCAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG4gICAgICAgIHJ1bjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcnRsID0gdGhpcy5zZXR0aW5ncy5ydGwgPyAxIDogLTEsXG4gICAgICAgICAgICAgICAgc2l6ZSA9IHRoaXMuX2Nsb25lcy5sZW5ndGggKyB0aGlzLl9pdGVtcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgaXRlcmF0b3IgPSAtMSxcbiAgICAgICAgICAgICAgICBwcmV2aW91cyA9IDAsXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IDAsXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBbXTtcblxuICAgICAgICAgICAgd2hpbGUgKCsraXRlcmF0b3IgPCBzaXplKSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXMgPSBjb29yZGluYXRlc1tpdGVyYXRvciAtIDFdIHx8IDA7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IHRoaXMuX3dpZHRoc1t0aGlzLnJlbGF0aXZlKGl0ZXJhdG9yKV0gKyB0aGlzLnNldHRpbmdzLm1hcmdpbjtcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlcy5wdXNoKHByZXZpb3VzICsgY3VycmVudCAqIHJ0bCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2Nvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGZpbHRlcjogWyAnd2lkdGgnLCAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG4gICAgICAgIHJ1bjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcGFkZGluZyA9IHRoaXMuc2V0dGluZ3Muc3RhZ2VQYWRkaW5nLFxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gdGhpcy5fY29vcmRpbmF0ZXMsXG4gICAgICAgICAgICAgICAgY3NzID0ge1xuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiBNYXRoLmNlaWwoTWF0aC5hYnMoY29vcmRpbmF0ZXNbY29vcmRpbmF0ZXMubGVuZ3RoIC0gMV0pKSArIHBhZGRpbmcgKiAyLFxuICAgICAgICAgICAgICAgICAgICAncGFkZGluZy1sZWZ0JzogcGFkZGluZyB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgJ3BhZGRpbmctcmlnaHQnOiBwYWRkaW5nIHx8ICcnXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy4kc3RhZ2UuY3NzKGNzcyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGZpbHRlcjogWyAnd2lkdGgnLCAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG4gICAgICAgIHJ1bjogZnVuY3Rpb24oY2FjaGUpIHtcbiAgICAgICAgICAgIHZhciBpdGVyYXRvciA9IHRoaXMuX2Nvb3JkaW5hdGVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBncmlkID0gIXRoaXMuc2V0dGluZ3MuYXV0b1dpZHRoLFxuICAgICAgICAgICAgICAgIGl0ZW1zID0gdGhpcy4kc3RhZ2UuY2hpbGRyZW4oKTtcblxuICAgICAgICAgICAgaWYgKGdyaWQgJiYgY2FjaGUuaXRlbXMubWVyZ2UpIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaXRlcmF0b3ItLSkge1xuICAgICAgICAgICAgICAgICAgICBjYWNoZS5jc3Mud2lkdGggPSB0aGlzLl93aWR0aHNbdGhpcy5yZWxhdGl2ZShpdGVyYXRvcildO1xuICAgICAgICAgICAgICAgICAgICBpdGVtcy5lcShpdGVyYXRvcikuY3NzKGNhY2hlLmNzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChncmlkKSB7XG4gICAgICAgICAgICAgICAgY2FjaGUuY3NzLndpZHRoID0gY2FjaGUuaXRlbXMud2lkdGg7XG4gICAgICAgICAgICAgICAgaXRlbXMuY3NzKGNhY2hlLmNzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGZpbHRlcjogWyAnaXRlbXMnIF0sXG4gICAgICAgIHJ1bjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLl9jb29yZGluYXRlcy5sZW5ndGggPCAxICYmIHRoaXMuJHN0YWdlLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGZpbHRlcjogWyAnd2lkdGgnLCAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG4gICAgICAgIHJ1bjogZnVuY3Rpb24oY2FjaGUpIHtcbiAgICAgICAgICAgIGNhY2hlLmN1cnJlbnQgPSBjYWNoZS5jdXJyZW50ID8gdGhpcy4kc3RhZ2UuY2hpbGRyZW4oKS5pbmRleChjYWNoZS5jdXJyZW50KSA6IDA7XG4gICAgICAgICAgICBjYWNoZS5jdXJyZW50ID0gTWF0aC5tYXgodGhpcy5taW5pbXVtKCksIE1hdGgubWluKHRoaXMubWF4aW11bSgpLCBjYWNoZS5jdXJyZW50KSk7XG4gICAgICAgICAgICB0aGlzLnJlc2V0KGNhY2hlLmN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBmaWx0ZXI6IFsgJ3Bvc2l0aW9uJyBdLFxuICAgICAgICBydW46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlKHRoaXMuY29vcmRpbmF0ZXModGhpcy5fY3VycmVudCkpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBmaWx0ZXI6IFsgJ3dpZHRoJywgJ3Bvc2l0aW9uJywgJ2l0ZW1zJywgJ3NldHRpbmdzJyBdLFxuICAgICAgICBydW46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHJ0bCA9IHRoaXMuc2V0dGluZ3MucnRsID8gMSA6IC0xLFxuICAgICAgICAgICAgICAgIHBhZGRpbmcgPSB0aGlzLnNldHRpbmdzLnN0YWdlUGFkZGluZyAqIDIsXG4gICAgICAgICAgICAgICAgYmVnaW4gPSB0aGlzLmNvb3JkaW5hdGVzKHRoaXMuY3VycmVudCgpKSArIHBhZGRpbmcsXG4gICAgICAgICAgICAgICAgZW5kID0gYmVnaW4gKyB0aGlzLndpZHRoKCkgKiBydGwsXG4gICAgICAgICAgICAgICAgaW5uZXIsIG91dGVyLCBtYXRjaGVzID0gW10sIGksIG47XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDAsIG4gPSB0aGlzLl9jb29yZGluYXRlcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpbm5lciA9IHRoaXMuX2Nvb3JkaW5hdGVzW2kgLSAxXSB8fCAwO1xuICAgICAgICAgICAgICAgIG91dGVyID0gTWF0aC5hYnModGhpcy5fY29vcmRpbmF0ZXNbaV0pICsgcGFkZGluZyAqIHJ0bDtcblxuICAgICAgICAgICAgICAgIGlmICgodGhpcy5vcChpbm5lciwgJzw9JywgYmVnaW4pICYmICh0aGlzLm9wKGlubmVyLCAnPicsIGVuZCkpKVxuICAgICAgICAgICAgICAgICAgICB8fCAodGhpcy5vcChvdXRlciwgJzwnLCBiZWdpbikgJiYgdGhpcy5vcChvdXRlciwgJz4nLCBlbmQpKSkge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiRzdGFnZS5jaGlsZHJlbignLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIHRoaXMuJHN0YWdlLmNoaWxkcmVuKCc6ZXEoJyArIG1hdGNoZXMuam9pbignKSwgOmVxKCcpICsgJyknKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmNlbnRlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0YWdlLmNoaWxkcmVuKCcuY2VudGVyJykucmVtb3ZlQ2xhc3MoJ2NlbnRlcicpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0YWdlLmNoaWxkcmVuKCkuZXEodGhpcy5jdXJyZW50KCkpLmFkZENsYXNzKCdjZW50ZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gXTtcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHRoZSBjYXJvdXNlbC5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgT3dsLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZW50ZXIoJ2luaXRpYWxpemluZycpO1xuICAgICAgICB0aGlzLnRyaWdnZXIoJ2luaXRpYWxpemUnKTtcblxuICAgICAgICB0aGlzLiRlbGVtZW50LnRvZ2dsZUNsYXNzKHRoaXMuc2V0dGluZ3MucnRsQ2xhc3MsIHRoaXMuc2V0dGluZ3MucnRsKTtcblxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5hdXRvV2lkdGggJiYgIXRoaXMuaXMoJ3ByZS1sb2FkaW5nJykpIHtcbiAgICAgICAgICAgIHZhciBpbWdzLCBuZXN0ZWRTZWxlY3Rvciwgd2lkdGg7XG4gICAgICAgICAgICBpbWdzID0gdGhpcy4kZWxlbWVudC5maW5kKCdpbWcnKTtcbiAgICAgICAgICAgIG5lc3RlZFNlbGVjdG9yID0gdGhpcy5zZXR0aW5ncy5uZXN0ZWRJdGVtU2VsZWN0b3IgPyAnLicgKyB0aGlzLnNldHRpbmdzLm5lc3RlZEl0ZW1TZWxlY3RvciA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHdpZHRoID0gdGhpcy4kZWxlbWVudC5jaGlsZHJlbihuZXN0ZWRTZWxlY3Rvcikud2lkdGgoKTtcblxuICAgICAgICAgICAgaWYgKGltZ3MubGVuZ3RoICYmIHdpZHRoIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZWxvYWRBdXRvV2lkdGhJbWFnZXMoaW1ncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRlbGVtZW50LmFkZENsYXNzKHRoaXMub3B0aW9ucy5sb2FkaW5nQ2xhc3MpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBzdGFnZVxuICAgICAgICB0aGlzLiRzdGFnZSA9ICQoJzwnICsgdGhpcy5zZXR0aW5ncy5zdGFnZUVsZW1lbnQgKyAnIGNsYXNzPVwiJyArIHRoaXMuc2V0dGluZ3Muc3RhZ2VDbGFzcyArICdcIi8+JylcbiAgICAgICAgICAgIC53cmFwKCc8ZGl2IGNsYXNzPVwiJyArIHRoaXMuc2V0dGluZ3Muc3RhZ2VPdXRlckNsYXNzICsgJ1wiLz4nKTtcblxuICAgICAgICAvLyBhcHBlbmQgc3RhZ2VcbiAgICAgICAgdGhpcy4kZWxlbWVudC5hcHBlbmQodGhpcy4kc3RhZ2UucGFyZW50KCkpO1xuXG4gICAgICAgIC8vIGFwcGVuZCBjb250ZW50XG4gICAgICAgIHRoaXMucmVwbGFjZSh0aGlzLiRlbGVtZW50LmNoaWxkcmVuKCkubm90KHRoaXMuJHN0YWdlLnBhcmVudCgpKSk7XG5cbiAgICAgICAgLy8gY2hlY2sgdmlzaWJpbGl0eVxuICAgICAgICBpZiAodGhpcy4kZWxlbWVudC5pcygnOnZpc2libGUnKSkge1xuICAgICAgICAgICAgLy8gdXBkYXRlIHZpZXdcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaW52YWxpZGF0ZSB3aWR0aFxuICAgICAgICAgICAgdGhpcy5pbnZhbGlkYXRlKCd3aWR0aCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kZWxlbWVudFxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5sb2FkaW5nQ2xhc3MpXG4gICAgICAgICAgICAuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmxvYWRlZENsYXNzKTtcblxuICAgICAgICAvLyByZWdpc3RlciBldmVudCBoYW5kbGVyc1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRIYW5kbGVycygpO1xuXG4gICAgICAgIHRoaXMubGVhdmUoJ2luaXRpYWxpemluZycpO1xuICAgICAgICB0aGlzLnRyaWdnZXIoJ2luaXRpYWxpemVkJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHVwcyB0aGUgY3VycmVudCBzZXR0aW5ncy5cbiAgICAgKiBAdG9kbyBSZW1vdmUgcmVzcG9uc2l2ZSBjbGFzc2VzLiBXaHkgc2hvdWxkIGFkYXB0aXZlIGRlc2lnbnMgYmUgYnJvdWdodCBpbnRvIElFOD9cbiAgICAgKiBAdG9kbyBTdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzIGJ5IHVzaW5nIGBtYXRjaE1lZGlhYCB3b3VsZCBiZSBuaWNlLlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBPd2wucHJvdG90eXBlLnNldHVwID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB2aWV3cG9ydCA9IHRoaXMudmlld3BvcnQoKSxcbiAgICAgICAgICAgIG92ZXJ3cml0ZXMgPSB0aGlzLm9wdGlvbnMucmVzcG9uc2l2ZSxcbiAgICAgICAgICAgIG1hdGNoID0gLTEsXG4gICAgICAgICAgICBzZXR0aW5ncyA9IG51bGw7XG5cbiAgICAgICAgaWYgKCFvdmVyd3JpdGVzKSB7XG4gICAgICAgICAgICBzZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJC5lYWNoKG92ZXJ3cml0ZXMsIGZ1bmN0aW9uKGJyZWFrcG9pbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoYnJlYWtwb2ludCA8PSB2aWV3cG9ydCAmJiBicmVha3BvaW50ID4gbWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBOdW1iZXIoYnJlYWtwb2ludCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNldHRpbmdzID0gJC5leHRlbmQoe30sIHRoaXMub3B0aW9ucywgb3ZlcndyaXRlc1ttYXRjaF0pO1xuICAgICAgICAgICAgZGVsZXRlIHNldHRpbmdzLnJlc3BvbnNpdmU7XG5cbiAgICAgICAgICAgIC8vIHJlc3BvbnNpdmUgY2xhc3NcbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy5yZXNwb25zaXZlQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50LmF0dHIoJ2NsYXNzJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5hdHRyKCdjbGFzcycpLnJlcGxhY2UobmV3IFJlZ0V4cCgnKCcgKyB0aGlzLm9wdGlvbnMucmVzcG9uc2l2ZUNsYXNzICsgJy0pXFxcXFMrXFxcXHMnLCAnZycpLCAnJDEnICsgbWF0Y2gpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzID09PSBudWxsIHx8IHRoaXMuX2JyZWFrcG9pbnQgIT09IG1hdGNoKSB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2NoYW5nZScsIHsgcHJvcGVydHk6IHsgbmFtZTogJ3NldHRpbmdzJywgdmFsdWU6IHNldHRpbmdzIH0gfSk7XG4gICAgICAgICAgICB0aGlzLl9icmVha3BvaW50ID0gbWF0Y2g7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgICAgICAgICB0aGlzLmludmFsaWRhdGUoJ3NldHRpbmdzJyk7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2NoYW5nZWQnLCB7IHByb3BlcnR5OiB7IG5hbWU6ICdzZXR0aW5ncycsIHZhbHVlOiB0aGlzLnNldHRpbmdzIH0gfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBvcHRpb24gbG9naWMgaWYgbmVjZXNzZXJ5LlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBPd2wucHJvdG90eXBlLm9wdGlvbnNMb2dpYyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5hdXRvV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3Muc3RhZ2VQYWRkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLm1lcmdlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHJlcGFyZXMgYW4gaXRlbSBiZWZvcmUgYWRkLlxuICAgICAqIEB0b2RvIFJlbmFtZSBldmVudCBwYXJhbWV0ZXIgYGNvbnRlbnRgIHRvIGBpdGVtYC5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMge2pRdWVyeXxIVE1MRWxlbWVudH0gLSBUaGUgaXRlbSBjb250YWluZXIuXG4gICAgICovXG4gICAgT3dsLnByb3RvdHlwZS5wcmVwYXJlID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICB2YXIgZXZlbnQgPSB0aGlzLnRyaWdnZXIoJ3ByZXBhcmUnLCB7IGNvbnRlbnQ6IGl0ZW0gfSk7XG5cbiAgICAgICAgaWYgKCFldmVudC5kYXRhKSB7XG4gICAgICAgICAgICBldmVudC5kYXRhID0gJCgnPCcgKyB0aGlzLnNldHRpbmdzLml0ZW1FbGVtZW50ICsgJy8+JylcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3ModGhpcy5vcHRpb25zLml0ZW1DbGFzcykuYXBwZW5kKGl0ZW0pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRyaWdnZXIoJ3ByZXBhcmVkJywgeyBjb250ZW50OiBldmVudC5kYXRhIH0pO1xuXG4gICAgICAgIHJldHVybiBldmVudC5kYXRhO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSB2aWV3LlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBPd2wucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgICBuID0gdGhpcy5fcGlwZS5sZW5ndGgsXG4gICAgICAgICAgICBmaWx0ZXIgPSAkLnByb3h5KGZ1bmN0aW9uKHApIHsgcmV0dXJuIHRoaXNbcF0gfSwgdGhpcy5faW52YWxpZGF0ZWQpLFxuICAgICAgICAgICAgY2FjaGUgPSB7fTtcblxuICAgICAgICB3aGlsZSAoaSA8IG4pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pbnZhbGlkYXRlZC5hbGwgfHwgJC5ncmVwKHRoaXMuX3BpcGVbaV0uZmlsdGVyLCBmaWx0ZXIpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9waXBlW2ldLnJ1bihjYWNoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pbnZhbGlkYXRlZCA9IHt9O1xuXG4gICAgICAgICF0aGlzLmlzKCd2YWxpZCcpICYmIHRoaXMuZW50ZXIoJ3ZhbGlkJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHdpZHRoIG9mIHRoZSB2aWV3LlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge093bC5XaWR0aH0gW2RpbWVuc2lvbj1Pd2wuV2lkdGguRGVmYXVsdF0gLSBUaGUgZGltZW5zaW9uIHRvIHJldHVybi5cbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSAtIFRoZSB3aWR0aCBvZiB0aGUgdmlldyBpbiBwaXhlbC5cbiAgICAgKi9cbiAgICBPd2wucHJvdG90eXBlLndpZHRoID0gZnVuY3Rpb24oZGltZW5zaW9uKSB7XG4gICAgICAgIGRpbWVuc2lvbiA9IGRpbWVuc2lvbiB8fCBPd2wuV2lkdGguRGVmYXVsdDtcbiAgICAgICAgc3dpdGNoIChkaW1lbnNpb24pIHtcbiAgICAgICAgICAgIGNhc2UgT3dsLldpZHRoLklubmVyOlxuICAgICAgICAgICAgY2FzZSBPd2wuV2lkdGguT3V0ZXI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fd2lkdGggLSB0aGlzLnNldHRpbmdzLnN0YWdlUGFkZGluZyAqIDIgKyB0aGlzLnNldHRpbmdzLm1hcmdpbjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZWZyZXNoZXMgdGhlIGNhcm91c2VsIHByaW1hcmlseSBmb3IgYWRhcHRpdmUgcHVycG9zZXMuXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIE93bC5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmVudGVyKCdyZWZyZXNoaW5nJyk7XG4gICAgICAgIHRoaXMudHJpZ2dlcigncmVmcmVzaCcpO1xuXG4gICAgICAgIHRoaXMuc2V0dXAoKTtcblxuICAgICAgICB0aGlzLm9wdGlvbnNMb2dpYygpO1xuXG4gICAgICAgIHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLnJlZnJlc2hDbGFzcyk7XG5cbiAgICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5yZWZyZXNoQ2xhc3MpO1xuXG4gICAgICAgIHRoaXMubGVhdmUoJ3JlZnJlc2hpbmcnKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdyZWZyZXNoZWQnKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHdpbmRvdyBgcmVzaXplYCBldmVudC5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgT3dsLnByb3RvdHlwZS5vblRocm90dGxlZFJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZXIpO1xuICAgICAgICB0aGlzLnJlc2l6ZVRpbWVyID0gd2luZG93LnNldFRpbWVvdXQodGhpcy5faGFuZGxlcnMub25SZXNpemUsIHRoaXMuc2V0dGluZ3MucmVzcG9uc2l2ZVJlZnJlc2hSYXRlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHdpbmRvdyBgcmVzaXplYCBldmVudC5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgT3dsLnByb3RvdHlwZS5vblJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2l0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX3dpZHRoID09PSB0aGlzLiRlbGVtZW50LndpZHRoKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy4kZWxlbWVudC5pcygnOnZpc2libGUnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbnRlcigncmVzaXppbmcnKTtcblxuICAgICAgICBpZiAodGhpcy50cmlnZ2VyKCdyZXNpemUnKS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5sZWF2ZSgncmVzaXppbmcnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW52YWxpZGF0ZSgnd2lkdGgnKTtcblxuICAgICAgICB0aGlzLnJlZnJlc2goKTtcblxuICAgICAgICB0aGlzLmxlYXZlKCdyZXNpemluZycpO1xuICAgICAgICB0aGlzLnRyaWdnZXIoJ3Jlc2l6ZWQnKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGV2ZW50IGhhbmRsZXJzLlxuICAgICAqIEB0b2RvIENoZWNrIGBtc1BvaW50ZXJFbmFibGVkYFxuICAgICAqIEB0b2RvICMyNjFcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgT3dsLnByb3RvdHlwZS5yZWdpc3RlckV2ZW50SGFuZGxlcnMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQuc3VwcG9ydC50cmFuc2l0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLiRzdGFnZS5vbigkLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQgKyAnLm93bC5jb3JlJywgJC5wcm94eSh0aGlzLm9uVHJhbnNpdGlvbkVuZCwgdGhpcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MucmVzcG9uc2l2ZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMub24od2luZG93LCAncmVzaXplJywgdGhpcy5faGFuZGxlcnMub25UaHJvdHRsZWRSZXNpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MubW91c2VEcmFnKSB7XG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50LmFkZENsYXNzKHRoaXMub3B0aW9ucy5kcmFnQ2xhc3MpO1xuICAgICAgICAgICAgdGhpcy4kc3RhZ2Uub24oJ21vdXNlZG93bi5vd2wuY29yZScsICQucHJveHkodGhpcy5vbkRyYWdTdGFydCwgdGhpcykpO1xuICAgICAgICAgICAgdGhpcy4kc3RhZ2Uub24oJ2RyYWdzdGFydC5vd2wuY29yZSBzZWxlY3RzdGFydC5vd2wuY29yZScsIGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2UgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy50b3VjaERyYWcpe1xuICAgICAgICAgICAgdGhpcy4kc3RhZ2Uub24oJ3RvdWNoc3RhcnQub3dsLmNvcmUnLCAkLnByb3h5KHRoaXMub25EcmFnU3RhcnQsIHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMuJHN0YWdlLm9uKCd0b3VjaGNhbmNlbC5vd2wuY29yZScsICQucHJveHkodGhpcy5vbkRyYWdFbmQsIHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGB0b3VjaHN0YXJ0YCBhbmQgYG1vdXNlZG93bmAgZXZlbnRzLlxuICAgICAqIEB0b2RvIEhvcml6b250YWwgc3dpcGUgdGhyZXNob2xkIGFzIG9wdGlvblxuICAgICAqIEB0b2RvICMyNjFcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBUaGUgZXZlbnQgYXJndW1lbnRzLlxuICAgICAqL1xuICAgIE93bC5wcm90b3R5cGUub25EcmFnU3RhcnQgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICB2YXIgc3RhZ2UgPSBudWxsO1xuXG4gICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCQuc3VwcG9ydC50cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIHN0YWdlID0gdGhpcy4kc3RhZ2UuY3NzKCd0cmFuc2Zvcm0nKS5yZXBsYWNlKC8uKlxcKHxcXCl8IC9nLCAnJykuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIHN0YWdlID0ge1xuICAgICAgICAgICAgICAgIHg6IHN0YWdlW3N0YWdlLmxlbmd0aCA9PT0gMTYgPyAxMiA6IDRdLFxuICAgICAgICAgICAgICAgIHk6IHN0YWdlW3N0YWdlLmxlbmd0aCA9PT0gMTYgPyAxMyA6IDVdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhZ2UgPSB0aGlzLiRzdGFnZS5wb3NpdGlvbigpO1xuICAgICAgICAgICAgc3RhZ2UgPSB7XG4gICAgICAgICAgICAgICAgeDogdGhpcy5zZXR0aW5ncy5ydGwgP1xuICAgICAgICAgICAgICAgICAgICBzdGFnZS5sZWZ0ICsgdGhpcy4kc3RhZ2Uud2lkdGgoKSAtIHRoaXMud2lkdGgoKSArIHRoaXMuc2V0dGluZ3MubWFyZ2luIDpcbiAgICAgICAgICAgICAgICAgICAgc3RhZ2UubGVmdCxcbiAgICAgICAgICAgICAgICB5OiBzdGFnZS50b3BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pcygnYW5pbWF0aW5nJykpIHtcbiAgICAgICAgICAgICQuc3VwcG9ydC50cmFuc2Zvcm0gPyB0aGlzLmFuaW1hdGUoc3RhZ2UueCkgOiB0aGlzLiRzdGFnZS5zdG9wKClcbiAgICAgICAgICAgIHRoaXMuaW52YWxpZGF0ZSgncG9zaXRpb24nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGVsZW1lbnQudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLmdyYWJDbGFzcywgZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicpO1xuXG4gICAgICAgIHRoaXMuc3BlZWQoMCk7XG5cbiAgICAgICAgdGhpcy5fZHJhZy50aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHRoaXMuX2RyYWcudGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xuICAgICAgICB0aGlzLl9kcmFnLnN0YWdlLnN0YXJ0ID0gc3RhZ2U7XG4gICAgICAgIHRoaXMuX2RyYWcuc3RhZ2UuY3VycmVudCA9IHN0YWdlO1xuICAgICAgICB0aGlzLl9kcmFnLnBvaW50ZXIgPSB0aGlzLnBvaW50ZXIoZXZlbnQpO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdtb3VzZXVwLm93bC5jb3JlIHRvdWNoZW5kLm93bC5jb3JlJywgJC5wcm94eSh0aGlzLm9uRHJhZ0VuZCwgdGhpcykpO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uZSgnbW91c2Vtb3ZlLm93bC5jb3JlIHRvdWNobW92ZS5vd2wuY29yZScsICQucHJveHkoZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBkZWx0YSA9IHRoaXMuZGlmZmVyZW5jZSh0aGlzLl9kcmFnLnBvaW50ZXIsIHRoaXMucG9pbnRlcihldmVudCkpO1xuXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vbignbW91c2Vtb3ZlLm93bC5jb3JlIHRvdWNobW92ZS5vd2wuY29yZScsICQucHJveHkodGhpcy5vbkRyYWdNb3ZlLCB0aGlzKSk7XG5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhkZWx0YS54KSA8IE1hdGguYWJzKGRlbHRhLnkpICYmIHRoaXMuaXMoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHRoaXMuZW50ZXIoJ2RyYWdnaW5nJyk7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2RyYWcnKTtcbiAgICAgICAgfSwgdGhpcykpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHRoZSBgdG91Y2htb3ZlYCBhbmQgYG1vdXNlbW92ZWAgZXZlbnRzLlxuICAgICAqIEB0b2RvICMyNjFcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBUaGUgZXZlbnQgYXJndW1lbnRzLlxuICAgICAqL1xuICAgIE93bC5wcm90b3R5cGUub25EcmFnTW92ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHZhciBtaW5pbXVtID0gbnVsbCxcbiAgICAgICAgICAgIG1heGltdW0gPSBudWxsLFxuICAgICAgICAgICAgcHVsbCA9IG51bGwsXG4gICAgICAgICAgICBkZWx0YSA9IHRoaXMuZGlmZmVyZW5jZSh0aGlzLl9kcmFnLnBvaW50ZXIsIHRoaXMucG9pbnRlcihldmVudCkpLFxuICAgICAgICAgICAgc3RhZ2UgPSB0aGlzLmRpZmZlcmVuY2UodGhpcy5fZHJhZy5zdGFnZS5zdGFydCwgZGVsdGEpO1xuXG4gICAgICAgIGlmICghdGhpcy5pcygnZHJhZ2dpbmcnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5sb29wKSB7XG4gICAgICAgICAgICBtaW5pbXVtID0gdGhpcy5jb29yZGluYXRlcyh0aGlzLm1pbmltdW0oKSk7XG4gICAgICAgICAgICBtYXhpbXVtID0gdGhpcy5jb29yZGluYXRlcyh0aGlzLm1heGltdW0oKSArIDEpIC0gbWluaW11bTtcbiAgICAgICAgICAgIHN0YWdlLnggPSAoKChzdGFnZS54IC0gbWluaW11bSkgJSBtYXhpbXVtICsgbWF4aW11bSkgJSBtYXhpbXVtKSArIG1pbmltdW07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtaW5pbXVtID0gdGhpcy5zZXR0aW5ncy5ydGwgPyB0aGlzLmNvb3JkaW5hdGVzKHRoaXMubWF4aW11bSgpKSA6IHRoaXMuY29vcmRpbmF0ZXModGhpcy5taW5pbXVtKCkpO1xuICAgICAgICAgICAgbWF4aW11bSA9IHRoaXMuc2V0dGluZ3MucnRsID8gdGhpcy5jb29yZGluYXRlcyh0aGlzLm1pbmltdW0oKSkgOiB0aGlzLmNvb3JkaW5hdGVzKHRoaXMubWF4aW11bSgpKTtcbiAgICAgICAgICAgIHB1bGwgPSB0aGlzLnNldHRpbmdzLnB1bGxEcmFnID8gLTEgKiBkZWx0YS54IC8gNSA6IDA7XG4gICAgICAgICAgICBzdGFnZS54ID0gTWF0aC5tYXgoTWF0aC5taW4oc3RhZ2UueCwgbWluaW11bSArIHB1bGwpLCBtYXhpbXVtICsgcHVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kcmFnLnN0YWdlLmN1cnJlbnQgPSBzdGFnZTtcblxuICAgICAgICB0aGlzLmFuaW1hdGUoc3RhZ2UueCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIGB0b3VjaGVuZGAgYW5kIGBtb3VzZXVwYCBldmVudHMuXG4gICAgICogQHRvZG8gIzI2MVxuICAgICAqIEB0b2RvIFRocmVzaG9sZCBmb3IgY2xpY2sgZXZlbnRcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBUaGUgZXZlbnQgYXJndW1lbnRzLlxuICAgICAqL1xuICAgIE93bC5wcm90b3R5cGUub25EcmFnRW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgdmFyIGRlbHRhID0gdGhpcy5kaWZmZXJlbmNlKHRoaXMuX2RyYWcucG9pbnRlciwgdGhpcy5wb2ludGVyKGV2ZW50KSksXG4gICAgICAgICAgICBzdGFnZSA9IHRoaXMuX2RyYWcuc3RhZ2UuY3VycmVudCxcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IGRlbHRhLnggPiAwIF4gdGhpcy5zZXR0aW5ncy5ydGwgPyAnbGVmdCcgOiAncmlnaHQnO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9mZignLm93bC5jb3JlJyk7XG5cbiAgICAgICAgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZ3JhYkNsYXNzKTtcblxuICAgICAgICBpZiAoZGVsdGEueCAhPT0gMCAmJiB0aGlzLmlzKCdkcmFnZ2luZycpIHx8ICF0aGlzLmlzKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkKHRoaXMuc2V0dGluZ3MuZHJhZ0VuZFNwZWVkIHx8IHRoaXMuc2V0dGluZ3Muc21hcnRTcGVlZCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQodGhpcy5jbG9zZXN0KHN0YWdlLngsIGRlbHRhLnggIT09IDAgPyBkaXJlY3Rpb24gOiB0aGlzLl9kcmFnLmRpcmVjdGlvbikpO1xuICAgICAgICAgICAgdGhpcy5pbnZhbGlkYXRlKCdwb3NpdGlvbicpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgICAgICAgdGhpcy5fZHJhZy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhkZWx0YS54KSA+IDMgfHwgbmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLl9kcmFnLnRpbWUgPiAzMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmFnLnRhcmdldC5vbmUoJ2NsaWNrLm93bC5jb3JlJywgZnVuY3Rpb24oKSB7IHJldHVybiBmYWxzZTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuaXMoJ2RyYWdnaW5nJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGVhdmUoJ2RyYWdnaW5nJyk7XG4gICAgICAgIHRoaXMudHJpZ2dlcignZHJhZ2dlZCcpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBjbG9zZXN0IGl0ZW0gZm9yIGEgY29vcmRpbmF0ZS5cbiAgICAgKiBAdG9kbyBTZXR0aW5nIGBmcmVlRHJhZ2AgbWFrZXMgYGNsb3Nlc3RgIG5vdCByZXVzYWJsZS4gU2VlICMxNjUuXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBjb29yZGluYXRlIC0gVGhlIGNvb3JkaW5hdGUgaW4gcGl4ZWwuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRpcmVjdGlvbiAtIFRoZSBkaXJlY3Rpb24gdG8gY2hlY2sgZm9yIHRoZSBjbG9zZXN0IGl0ZW0uIEV0aGVyIGBsZWZ0YCBvciBgcmlnaHRgLlxuICAgICAqIEByZXR1cm4ge051bWJlcn0gLSBUaGUgYWJzb2x1dGUgcG9zaXRpb24gb2YgdGhlIGNsb3Nlc3QgaXRlbS5cbiAgICAgKi9cbiAgICBPd2wucHJvdG90eXBlLmNsb3Nlc3QgPSBmdW5jdGlvbihjb29yZGluYXRlLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gLTEsXG4gICAgICAgICAgICBwdWxsID0gMzAsXG4gICAgICAgICAgICB3aWR0aCA9IHRoaXMud2lkdGgoKSxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gdGhpcy5jb29yZGluYXRlcygpO1xuXG4gICAgICAgIGlmICghdGhpcy5zZXR0aW5ncy5mcmVlRHJhZykge1xuICAgICAgICAgICAgLy8gY2hlY2sgY2xvc2VzdCBpdGVtXG4gICAgICAgICAgICAkLmVhY2goY29vcmRpbmF0ZXMsICQucHJveHkoZnVuY3Rpb24oaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvb3JkaW5hdGUgPiB2YWx1ZSAtIHB1bGwgJiYgY29vcmRpbmF0ZSA8IHZhbHVlICsgcHVsbCkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IGluZGV4O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcChjb29yZGluYXRlLCAnPCcsIHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLm9wKGNvb3JkaW5hdGUsICc+JywgY29vcmRpbmF0ZXNbaW5kZXggKyAxXSB8fCB2YWx1ZSAtIHdpZHRoKSkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gaW5kZXggKyAxIDogaW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwb3NpdGlvbiA9PT0gLTE7XG4gICAgICAgICAgICB9LCB0aGlzKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MubG9vcCkge1xuICAgICAgICAgICAgLy8gbm9uIGxvb3AgYm91bmRyaWVzXG4gICAgICAgICAgICBpZiAodGhpcy5vcChjb29yZGluYXRlLCAnPicsIGNvb3JkaW5hdGVzW3RoaXMubWluaW11bSgpXSkpIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IGNvb3JkaW5hdGUgPSB0aGlzLm1pbmltdW0oKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcChjb29yZGluYXRlLCAnPCcsIGNvb3JkaW5hdGVzW3RoaXMubWF4aW11bSgpXSkpIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IGNvb3JkaW5hdGUgPSB0aGlzLm1heGltdW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQW5pbWF0ZXMgdGhlIHN0YWdlLlxuICAgICAqIEB0b2RvICMyNzBcbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvb3JkaW5hdGUgLSBUaGUgY29vcmRpbmF0ZSBpbiBwaXhlbHMuXG4gICAgICovXG4gICAgT3dsLnByb3RvdHlwZS5hbmltYXRlID0gZnVuY3Rpb24oY29vcmRpbmF0ZSkge1xuICAgICAgICB2YXIgYW5pbWF0ZSA9IHRoaXMuc3BlZWQoKSA+IDA7XG5cbiAgICAgICAgdGhpcy5pcygnYW5pbWF0aW5nJykgJiYgdGhpcy5vblRyYW5zaXRpb25FbmQoKTtcblxuICAgICAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgICAgICAgdGhpcy5lbnRlcignYW5pbWF0aW5nJyk7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ3RyYW5zbGF0ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCQuc3VwcG9ydC50cmFuc2Zvcm0zZCAmJiAkLnN1cHBvcnQudHJhbnNpdGlvbikge1xuICAgICAgICAgICAgdGhpcy4kc3RhZ2UuY3NzKHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgnICsgY29vcmRpbmF0ZSArICdweCwwcHgsMHB4KScsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogKHRoaXMuc3BlZWQoKSAvIDEwMDApICsgJ3MnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChhbmltYXRlKSB7XG4gICAgICAgICAgICB0aGlzLiRzdGFnZS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBjb29yZGluYXRlICsgJ3B4J1xuICAgICAgICAgICAgfSwgdGhpcy5zcGVlZCgpLCB0aGlzLnNldHRpbmdzLmZhbGxiYWNrRWFzaW5nLCAkLnByb3h5KHRoaXMub25UcmFuc2l0aW9uRW5kLCB0aGlzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRzdGFnZS5jc3Moe1xuICAgICAgICAgICAgICAgIGxlZnQ6IGNvb3JkaW5hdGUgKyAncHgnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgY2Fyb3VzZWwgaXMgaW4gYSBzcGVjaWZpYyBzdGF0ZSBvciBub3QuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIC0gVGhlIHN0YXRlIHRvIGNoZWNrLlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSAtIFRoZSBmbGFnIHdoaWNoIGluZGljYXRlcyBpZiB0aGUgY2Fyb3VzZWwgaXMgYnVzeS5cbiAgICAgKi9cbiAgICBPd2wucHJvdG90eXBlLmlzID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlcy5jdXJyZW50W3N0YXRlXSAmJiB0aGlzLl9zdGF0ZXMuY3VycmVudFtzdGF0ZV0gPiAwO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgY3VycmVudCBpdGVtLlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3Bvc2l0aW9uXSAtIFRoZSBuZXcgYWJzb2x1dGUgcG9zaXRpb24gb3Igbm90aGluZyB0byBsZWF2ZSBpdCB1bmNoYW5nZWQuXG4gICAgICogQHJldHVybnMge051bWJlcn0gLSBUaGUgYWJzb2x1dGUgcG9zaXRpb24gb2YgdGhlIGN1cnJlbnQgaXRlbS5cbiAgICAgKi9cbiAgICBPd2wucHJvdG90eXBlLmN1cnJlbnQgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuICAgICAgICBpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5faXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9zaXRpb24gPSB0aGlzLm5vcm1hbGl6ZShwb3NpdGlvbik7XG5cbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnQgIT09IHBvc2l0aW9uKSB7XG4gICAgICAgICAgICB2YXIgZXZlbnQgPSB0aGlzLnRyaWdnZXIoJ2NoYW5nZScsIHsgcHJvcGVydHk6IHsgbmFtZTogJ3Bvc2l0aW9uJywgdmFsdWU6IHBvc2l0aW9uIH0gfSk7XG5cbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMubm9ybWFsaXplKGV2ZW50LmRhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50ID0gcG9zaXRpb247XG5cbiAgICAgICAgICAgIHRoaXMuaW52YWxpZGF0ZSgncG9zaXRpb24nKTtcblxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdjaGFuZ2VkJywgeyBwcm9wZXJ0eTogeyBuYW1lOiAncG9zaXRpb24nLCB2YWx1ZTogdGhpcy5fY3VycmVudCB9IH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludmFsaWRhdGVzIHRoZSBnaXZlbiBwYXJ0IG9mIHRoZSB1cGRhdGUgcm91dGluZS5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW3BhcnRdIC0gVGhlIHBhcnQgdG8gaW52YWxpZGF0ZS5cbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPFN0cmluZz59IC0gVGhlIGludmFsaWRhdGVkIHBhcnRzLlxuICAgICAqL1xuICAgIE93bC5wcm90b3R5cGUuaW52YWxpZGF0ZSA9IGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgICAgaWYgKCQudHlwZShwYXJ0KSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRoaXMuX2ludmFsaWRhdGVkW3BhcnRdID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaXMoJ3ZhbGlkJykgJiYgdGhpcy5sZWF2ZSgndmFsaWQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJC5tYXAodGhpcy5faW52YWxpZGF0ZWQsIGZ1bmN0aW9uKHYsIGkpIHsgcmV0dXJuIGkgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlc2V0cyB0aGUgYWJzb2x1dGUgcG9zaXRpb24gb2YgdGhlIGN1cnJlbnQgaXRlbS5cbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gVGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBuZXcgaXRlbS5cbiAgICAgKi9cbiAgICBPd2wucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcbiAgICAgICAgcG9zaXRpb24gPSB0aGlzLm5vcm1hbGl6ZShwb3NpdGlvbik7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NwZWVkID0gMDtcbiAgICAgICAgdGhpcy5fY3VycmVudCA9IHBvc2l0aW9uO1xuXG4gICAgICAgIHRoaXMuc3VwcHJlc3MoWyAndHJhbnNsYXRlJywgJ3RyYW5zbGF0ZWQnIF0pO1xuXG4gICAgICAgIHRoaXMuYW5pbWF0ZSh0aGlzLmNvb3JkaW5hdGVzKHBvc2l0aW9uKSk7XG5cbiAgICAgICAgdGhpcy5yZWxlYXNlKFsgJ3RyYW5zbGF0ZScsICd0cmFuc2xhdGVkJyBdKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTm9ybWFsaXplcyBhbiBhYnNvbHV0ZSBvciBhIHJlbGF0aXZlIHBvc2l0aW9uIG9mIGFuIGl0ZW0uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBwb3NpdGlvbiAtIFRoZSBhYnNvbHV0ZSBvciByZWxhdGl2ZSBwb3NpdGlvbiB0byBub3JtYWxpemUuXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbcmVsYXRpdmU9ZmFsc2VdIC0gV2hldGhlciB0aGUgZ2l2ZW4gcG9zaXRpb24gaXMgcmVsYXRpdmUgb3Igbm90LlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IC0gVGhlIG5vcm1hbGl6ZWQgcG9zaXRpb24uXG4gICAgICovXG4gICAgT3dsLnByb3RvdHlwZS5ub3JtYWxpemUgPSBmdW5jdGlvbihwb3NpdGlvbiwgcmVsYXRpdmUpIHtcbiAgICAgICAgdmFyIG4gPSB0aGlzLl9pdGVtcy5sZW5ndGgsXG4gICAgICAgICAgICBtID0gcmVsYXRpdmUgPyAwIDogdGhpcy5fY2xvbmVzLmxlbmd0aDtcblxuICAgICAgICBpZiAoISQuaXNOdW1lcmljKHBvc2l0aW9uKSB8fCBuIDwgMSkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID49IG4gKyBtKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9ICgocG9zaXRpb24gLSBtIC8gMikgJSBuICsgbikgJSBuICsgbSAvIDI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGFuIGFic29sdXRlIHBvc2l0aW9uIG9mIGFuIGl0ZW0gaW50byBhIHJlbGF0aXZlIG9uZS5cbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gVGhlIGFic29sdXRlIHBvc2l0aW9uIHRvIGNvbnZlcnQuXG4gICAgICogQHJldHVybnMge051bWJlcn0gLSBUaGUgY29udmVydGVkIHBvc2l0aW9uLlxuICAgICAqL1xuICAgIE93bC5wcm90b3R5cGUucmVsYXRpdmUgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuICAgICAgICBwb3NpdGlvbiAtPSB0aGlzLl9jbG9uZXMubGVuZ3RoIC8gMjtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9ybWFsaXplKHBvc2l0aW9uLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgbWF4aW11bSBwb3NpdGlvbiBmb3IgdGhlIGN1cnJlbnQgaXRlbS5cbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbcmVsYXRpdmU9ZmFsc2VdIC0gV2hldGhlciB0byByZXR1cm4gYW4gYWJzb2x1dGUgcG9zaXRpb24gb3IgYSByZWxhdGl2ZSBwb3NpdGlvbi5cbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIE93bC5wcm90b3R5cGUubWF4aW11bSA9IGZ1bmN0aW9uKHJlbGF0aXZlKSB7XG4gICAgICAgIHZhciBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MsXG4gICAgICAgICAgICBtYXhpbXVtID0gdGhpcy5fY29vcmRpbmF0ZXMubGVuZ3RoLFxuICAgICAgICAgICAgYm91bmRhcnkgPSBNYXRoLmFicyh0aGlzLl9jb29yZGluYXRlc1ttYXhpbXVtIC0gMV0pIC0gdGhpcy5fd2lkdGgsXG4gICAgICAgICAgICBpID0gLTEsIGo7XG5cbiAgICAgICAgaWYgKHNldHRpbmdzLmxvb3ApIHtcbiAgICAgICAgICAgIG1heGltdW0gPSB0aGlzLl9jbG9uZXMubGVuZ3RoIC8gMiArIHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICAgIH0gZWxzZSBpZiAoc2V0dGluZ3MuYXV0b1dpZHRoIHx8IHNldHRpbmdzLm1lcmdlKSB7XG4gICAgICAgICAgICAvLyBiaW5hcnkgc2VhcmNoXG4gICAgICAgICAgICB3aGlsZSAobWF4aW11bSAtIGkgPiAxKSB7XG4gICAgICAgICAgICAgICAgTWF0aC5hYnModGhpcy5fY29vcmRpbmF0ZXNbaiA9IG1heGltdW0gKyBpID4+IDFdKSA8IGJvdW5kYXJ5XG4gICAgICAgICAgICAgICAgICAgID8gaSA9IGogOiBtYXhpbXVtID0gajtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzZXR0aW5ncy5jZW50ZXIpIHtcbiAgICAgICAgICAgIG1heGltdW0gPSB0aGlzLl9pdGVtcy5sZW5ndGggLSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWF4aW11bSA9IHRoaXMuX2l0ZW1zLmxlbmd0aCAtIHNldHRpbmdzLml0ZW1zO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlbGF0aXZlKSB7XG4gICAgICAgICAgICBtYXhpbXVtIC09IHRoaXMuX2Nsb25lcy5sZW5ndGggLyAyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KG1heGltdW0sIDApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBtaW5pbXVtIHBvc2l0aW9uIGZvciB0aGUgY3VycmVudCBpdGVtLlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtyZWxhdGl2ZT1mYWxzZV0gLSBXaGV0aGVyIHRvIHJldHVybiBhbiBhYnNvbHV0ZSBwb3NpdGlvbiBvciBhIHJlbGF0aXZlIHBvc2l0aW9uLlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgT3dsLnByb3RvdHlwZS5taW5pbXVtID0gZnVuY3Rpb24ocmVsYXRpdmUpIHtcbiAgICAgICAgcmV0dXJuIHJlbGF0aXZlID8gMCA6IHRoaXMuX2Nsb25lcy5sZW5ndGggLyAyO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGFuIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCByZWxhdGl2ZSBwb3NpdGlvbi5cbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtwb3NpdGlvbl0gLSBUaGUgcmVsYXRpdmUgcG9zaXRpb24gb2YgdGhlIGl0ZW0uXG4gICAgICogQHJldHVybiB7alF1ZXJ5fEFycmF5LjxqUXVlcnk+fSAtIFRoZSBpdGVtIGF0IHRoZSBnaXZlbiBwb3NpdGlvbiBvciBhbGwgaXRlbXMgaWYgbm8gcG9zaXRpb24gd2FzIGdpdmVuLlxuICAgICAqL1xuICAgIE93bC5wcm90b3R5cGUuaXRlbXMgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuICAgICAgICBpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLnNsaWNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBwb3NpdGlvbiA9IHRoaXMubm9ybWFsaXplKHBvc2l0aW9uLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zW3Bvc2l0aW9uXTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyBhbiBpdGVtIGF0IHRoZSBzcGVjaWZpZWQgcmVsYXRpdmUgcG9zaXRpb24uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbcG9zaXRpb25dIC0gVGhlIHJlbGF0aXZlIHBvc2l0aW9uIG9mIHRoZSBpdGVtLlxuICAgICAqIEByZXR1cm4ge2pRdWVyeXxBcnJheS48alF1ZXJ5Pn0gLSBUaGUgaXRlbSBhdCB0aGUgZ2l2ZW4gcG9zaXRpb24gb3IgYWxsIGl0ZW1zIGlmIG5vIHBvc2l0aW9uIHdhcyBnaXZlbi5cbiAgICAgKi9cbiAgICBPd2wucHJvdG90eXBlLm1lcmdlcnMgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuICAgICAgICBpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21lcmdlcnMuc2xpY2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBvc2l0aW9uID0gdGhpcy5ub3JtYWxpemUocG9zaXRpb24sIHRydWUpO1xuICAgICAgICByZXR1cm4gdGhpcy5fbWVyZ2Vyc1twb3NpdGlvbl07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGFic29sdXRlIHBvc2l0aW9ucyBvZiBjbG9uZXMgZm9yIGFuIGl0ZW0uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbcG9zaXRpb25dIC0gVGhlIHJlbGF0aXZlIHBvc2l0aW9uIG9mIHRoZSBpdGVtLlxuICAgICAqIEByZXR1cm5zIHtBcnJheS48TnVtYmVyPn0gLSBUaGUgYWJzb2x1dGUgcG9zaXRpb25zIG9mIGNsb25lcyBmb3IgdGhlIGl0ZW0gb3IgYWxsIGlmIG5vIHBvc2l0aW9uIHdhcyBnaXZlbi5cbiAgICAgKi9cbiAgICBPd2wucHJvdG90eXBlLmNsb25lcyA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG4gICAgICAgIHZhciBvZGQgPSB0aGlzLl9jbG9uZXMubGVuZ3RoIC8gMixcbiAgICAgICAgICAgIGV2ZW4gPSBvZGQgKyB0aGlzLl9pdGVtcy5sZW5ndGgsXG4gICAgICAgICAgICBtYXAgPSBmdW5jdGlvbihpbmRleCkgeyByZXR1cm4gaW5kZXggJSAyID09PSAwID8gZXZlbiArIGluZGV4IC8gMiA6IG9kZCAtIChpbmRleCArIDEpIC8gMiB9O1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gJC5tYXAodGhpcy5fY2xvbmVzLCBmdW5jdGlvbih2LCBpKSB7IHJldHVybiBtYXAoaSkgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJC5tYXAodGhpcy5fY2xvbmVzLCBmdW5jdGlvbih2LCBpKSB7IHJldHVybiB2ID09PSBwb3NpdGlvbiA/IG1hcChpKSA6IG51bGwgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGN1cnJlbnQgYW5pbWF0aW9uIHNwZWVkLlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3NwZWVkXSAtIFRoZSBhbmltYXRpb24gc3BlZWQgaW4gbWlsbGlzZWNvbmRzIG9yIG5vdGhpbmcgdG8gbGVhdmUgaXQgdW5jaGFuZ2VkLlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IC0gVGhlIGN1cnJlbnQgYW5pbWF0aW9uIHNwZWVkIGluIG1pbGxpc2Vjb25kcy5cbiAgICAgKi9cbiAgICBPd2wucHJvdG90eXBlLnNwZWVkID0gZnVuY3Rpb24oc3BlZWQpIHtcbiAgICAgICAgaWYgKHNwZWVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3NwZWVkID0gc3BlZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fc3BlZWQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGNvb3JkaW5hdGUgb2YgYW4gaXRlbS5cbiAgICAgKiBAdG9kbyBUaGUgbmFtZSBvZiB0aGlzIG1ldGhvZCBpcyBtaXNzbGVhbmRpbmcuXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBwb3NpdGlvbiAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgaXRlbSB3aXRoaW4gYG1pbmltdW0oKWAgYW5kIGBtYXhpbXVtKClgLlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ8QXJyYXkuPE51bWJlcj59IC0gVGhlIGNvb3JkaW5hdGUgb2YgdGhlIGl0ZW0gaW4gcGl4ZWwgb3IgYWxsIGNvb3JkaW5hdGVzLlxuICAgICAqL1xuICAgIE93bC5wcm90b3R5cGUuY29vcmRpbmF0ZXMgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuICAgICAgICB2YXIgY29vcmRpbmF0ZSA9IG51bGw7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAkLm1hcCh0aGlzLl9jb29yZGluYXRlcywgJC5wcm94eShmdW5jdGlvbihjb29yZGluYXRlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvb3JkaW5hdGVzKGluZGV4KTtcbiAgICAgICAgICAgIH0sIHRoaXMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmNlbnRlcikge1xuICAgICAgICAgICAgY29vcmRpbmF0ZSA9IHRoaXMuX2Nvb3JkaW5hdGVzW3Bvc2l0aW9uXTtcbiAgICAgICAgICAgIGNvb3JkaW5hdGUgKz0gKHRoaXMud2lkdGgoKSAtIGNvb3JkaW5hdGUgKyAodGhpcy5fY29vcmRpbmF0ZXNbcG9zaXRpb24gLSAxXSB8fCAwKSkgLyAyICogKHRoaXMuc2V0dGluZ3MucnRsID8gLTEgOiAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvb3JkaW5hdGUgPSB0aGlzLl9jb29yZGluYXRlc1twb3NpdGlvbiAtIDFdIHx8IDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29vcmRpbmF0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgc3BlZWQgZm9yIGEgdHJhbnNsYXRpb24uXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBmcm9tIC0gVGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBzdGFydCBpdGVtLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB0byAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgdGFyZ2V0IGl0ZW0uXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtmYWN0b3I9dW5kZWZpbmVkXSAtIFRoZSB0aW1lIGZhY3RvciBpbiBtaWxsaXNlY29uZHMuXG4gICAgICogQHJldHVybnMge051bWJlcn0gLSBUaGUgdGltZSBpbiBtaWxsaXNlY29uZHMgZm9yIHRoZSB0cmFuc2xhdGlvbi5cbiAgICAgKi9cbiAgICBPd2wucHJvdG90eXBlLmR1cmF0aW9uID0gZnVuY3Rpb24oZnJvbSwgdG8sIGZhY3Rvcikge1xuICAgICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoTWF0aC5hYnModG8gLSBmcm9tKSwgMSksIDYpICogTWF0aC5hYnMoKGZhY3RvciB8fCB0aGlzLnNldHRpbmdzLnNtYXJ0U3BlZWQpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2xpZGVzIHRvIHRoZSBzcGVjaWZpZWQgaXRlbS5cbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gVGhlIHBvc2l0aW9uIG9mIHRoZSBpdGVtLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWRdIC0gVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNpdGlvbi5cbiAgICAgKi9cbiAgICBPd2wucHJvdG90eXBlLnRvID0gZnVuY3Rpb24ocG9zaXRpb24sIHNwZWVkKSB7XG4gICAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5jdXJyZW50KCksXG4gICAgICAgICAgICByZXZlcnQgPSBudWxsLFxuICAgICAgICAgICAgZGlzdGFuY2UgPSBwb3NpdGlvbiAtIHRoaXMucmVsYXRpdmUoY3VycmVudCksXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAoZGlzdGFuY2UgPiAwKSAtIChkaXN0YW5jZSA8IDApLFxuICAgICAgICAgICAgaXRlbXMgPSB0aGlzLl9pdGVtcy5sZW5ndGgsXG4gICAgICAgICAgICBtaW5pbXVtID0gdGhpcy5taW5pbXVtKCksXG4gICAgICAgICAgICBtYXhpbXVtID0gdGhpcy5tYXhpbXVtKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MubG9vcCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLnJld2luZCAmJiBNYXRoLmFicyhkaXN0YW5jZSkgPiBpdGVtcyAvIDIpIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSArPSBkaXJlY3Rpb24gKiAtMSAqIGl0ZW1zO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwb3NpdGlvbiA9IGN1cnJlbnQgKyBkaXN0YW5jZTtcbiAgICAgICAgICAgIHJldmVydCA9ICgocG9zaXRpb24gLSBtaW5pbXVtKSAlIGl0ZW1zICsgaXRlbXMpICUgaXRlbXMgKyBtaW5pbXVtO1xuXG4gICAgICAgICAgICBpZiAocmV2ZXJ0ICE9PSBwb3NpdGlvbiAmJiByZXZlcnQgLSBkaXN0YW5jZSA8PSBtYXhpbXVtICYmIHJldmVydCAtIGRpc3RhbmNlID4gMCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSByZXZlcnQgLSBkaXN0YW5jZTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHJldmVydDtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KGN1cnJlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2V0dGluZ3MucmV3aW5kKSB7XG4gICAgICAgICAgICBtYXhpbXVtICs9IDE7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IChwb3NpdGlvbiAlIG1heGltdW0gKyBtYXhpbXVtKSAlIG1heGltdW07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IE1hdGgubWF4KG1pbmltdW0sIE1hdGgubWluKG1heGltdW0sIHBvc2l0aW9uKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNwZWVkKHRoaXMuZHVyYXRpb24oY3VycmVudCwgcG9zaXRpb24sIHNwZWVkKSk7XG4gICAgICAgIHRoaXMuY3VycmVudChwb3NpdGlvbik7XG5cbiAgICAgICAgaWYgKHRoaXMuJGVsZW1lbnQuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2xpZGVzIHRvIHRoZSBuZXh0IGl0ZW0uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWRdIC0gVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNpdGlvbi5cbiAgICAgKi9cbiAgICBPd2wucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbihzcGVlZCkge1xuICAgICAgICBzcGVlZCA9IHNwZWVkIHx8IGZhbHNlO1xuICAgICAgICB0aGlzLnRvKHRoaXMucmVsYXRpdmUodGhpcy5jdXJyZW50KCkpICsgMSwgc3BlZWQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTbGlkZXMgdG8gdGhlIHByZXZpb3VzIGl0ZW0uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWRdIC0gVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNpdGlvbi5cbiAgICAgKi9cbiAgICBPd2wucHJvdG90eXBlLnByZXYgPSBmdW5jdGlvbihzcGVlZCkge1xuICAgICAgICBzcGVlZCA9IHNwZWVkIHx8IGZhbHNlO1xuICAgICAgICB0aGlzLnRvKHRoaXMucmVsYXRpdmUodGhpcy5jdXJyZW50KCkpIC0gMSwgc3BlZWQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHRoZSBlbmQgb2YgYW4gYW5pbWF0aW9uLlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIFRoZSBldmVudCBhcmd1bWVudHMuXG4gICAgICovXG4gICAgT3dsLnByb3RvdHlwZS5vblRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIC8vIGlmIGNzczIgYW5pbWF0aW9uIHRoZW4gZXZlbnQgb2JqZWN0IGlzIHVuZGVmaW5lZFxuICAgICAgICBpZiAoZXZlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgIC8vIENhdGNoIG9ubHkgb3dsLXN0YWdlIHRyYW5zaXRpb25FbmQgZXZlbnRcbiAgICAgICAgICAgIGlmICgoZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQgfHwgZXZlbnQub3JpZ2luYWxUYXJnZXQpICE9PSB0aGlzLiRzdGFnZS5nZXQoMCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxlYXZlKCdhbmltYXRpbmcnKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCd0cmFuc2xhdGVkJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdmlld3BvcnQgd2lkdGguXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEByZXR1cm4ge051bWJlcn0gLSBUaGUgd2lkdGggaW4gcGl4ZWwuXG4gICAgICovXG4gICAgT3dsLnByb3RvdHlwZS52aWV3cG9ydCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgd2lkdGg7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVzcG9uc2l2ZUJhc2VFbGVtZW50ICE9PSB3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpZHRoID0gJCh0aGlzLm9wdGlvbnMucmVzcG9uc2l2ZUJhc2VFbGVtZW50KS53aWR0aCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICAgICAgICB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpIHtcbiAgICAgICAgICAgIHdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgJ0NhbiBub3QgZGV0ZWN0IHZpZXdwb3J0IHdpZHRoLic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlcyB0aGUgY3VycmVudCBjb250ZW50LlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fGpRdWVyeXxTdHJpbmd9IGNvbnRlbnQgLSBUaGUgbmV3IGNvbnRlbnQuXG4gICAgICovXG4gICAgT3dsLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24oY29udGVudCkge1xuICAgICAgICB0aGlzLiRzdGFnZS5lbXB0eSgpO1xuICAgICAgICB0aGlzLl9pdGVtcyA9IFtdO1xuXG4gICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICBjb250ZW50ID0gKGNvbnRlbnQgaW5zdGFuY2VvZiBqUXVlcnkpID8gY29udGVudCA6ICQoY29udGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5uZXN0ZWRJdGVtU2VsZWN0b3IpIHtcbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50LmZpbmQoJy4nICsgdGhpcy5zZXR0aW5ncy5uZXN0ZWRJdGVtU2VsZWN0b3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGVudC5maWx0ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlVHlwZSA9PT0gMTtcbiAgICAgICAgfSkuZWFjaCgkLnByb3h5KGZ1bmN0aW9uKGluZGV4LCBpdGVtKSB7XG4gICAgICAgICAgICBpdGVtID0gdGhpcy5wcmVwYXJlKGl0ZW0pO1xuICAgICAgICAgICAgdGhpcy4kc3RhZ2UuYXBwZW5kKGl0ZW0pO1xuICAgICAgICAgICAgdGhpcy5faXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgIHRoaXMuX21lcmdlcnMucHVzaChpdGVtLmZpbmQoJ1tkYXRhLW1lcmdlXScpLmFkZEJhY2soJ1tkYXRhLW1lcmdlXScpLmF0dHIoJ2RhdGEtbWVyZ2UnKSAqIDEgfHwgMSk7XG4gICAgICAgIH0sIHRoaXMpKTtcblxuICAgICAgICB0aGlzLnJlc2V0KCQuaXNOdW1lcmljKHRoaXMuc2V0dGluZ3Muc3RhcnRQb3NpdGlvbikgPyB0aGlzLnNldHRpbmdzLnN0YXJ0UG9zaXRpb24gOiAwKTtcblxuICAgICAgICB0aGlzLmludmFsaWRhdGUoJ2l0ZW1zJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gaXRlbS5cbiAgICAgKiBAdG9kbyBVc2UgYGl0ZW1gIGluc3RlYWQgb2YgYGNvbnRlbnRgIGZvciB0aGUgZXZlbnQgYXJndW1lbnRzLlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fGpRdWVyeXxTdHJpbmd9IGNvbnRlbnQgLSBUaGUgaXRlbSBjb250ZW50IHRvIGFkZC5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3Bvc2l0aW9uXSAtIFRoZSByZWxhdGl2ZSBwb3NpdGlvbiBhdCB3aGljaCB0byBpbnNlcnQgdGhlIGl0ZW0gb3RoZXJ3aXNlIHRoZSBpdGVtIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGVuZC5cbiAgICAgKi9cbiAgICBPd2wucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGNvbnRlbnQsIHBvc2l0aW9uKSB7XG4gICAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5yZWxhdGl2ZSh0aGlzLl9jdXJyZW50KTtcblxuICAgICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uID09PSB1bmRlZmluZWQgPyB0aGlzLl9pdGVtcy5sZW5ndGggOiB0aGlzLm5vcm1hbGl6ZShwb3NpdGlvbiwgdHJ1ZSk7XG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50IGluc3RhbmNlb2YgalF1ZXJ5ID8gY29udGVudCA6ICQoY29udGVudCk7XG5cbiAgICAgICAgdGhpcy50cmlnZ2VyKCdhZGQnLCB7IGNvbnRlbnQ6IGNvbnRlbnQsIHBvc2l0aW9uOiBwb3NpdGlvbiB9KTtcblxuICAgICAgICBjb250ZW50ID0gdGhpcy5wcmVwYXJlKGNvbnRlbnQpO1xuXG4gICAgICAgIGlmICh0aGlzLl9pdGVtcy5sZW5ndGggPT09IDAgfHwgcG9zaXRpb24gPT09IHRoaXMuX2l0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5faXRlbXMubGVuZ3RoID09PSAwICYmIHRoaXMuJHN0YWdlLmFwcGVuZChjb250ZW50KTtcbiAgICAgICAgICAgIHRoaXMuX2l0ZW1zLmxlbmd0aCAhPT0gMCAmJiB0aGlzLl9pdGVtc1twb3NpdGlvbiAtIDFdLmFmdGVyKGNvbnRlbnQpO1xuICAgICAgICAgICAgdGhpcy5faXRlbXMucHVzaChjb250ZW50KTtcbiAgICAgICAgICAgIHRoaXMuX21lcmdlcnMucHVzaChjb250ZW50LmZpbmQoJ1tkYXRhLW1lcmdlXScpLmFkZEJhY2soJ1tkYXRhLW1lcmdlXScpLmF0dHIoJ2RhdGEtbWVyZ2UnKSAqIDEgfHwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9pdGVtc1twb3NpdGlvbl0uYmVmb3JlKGNvbnRlbnQpO1xuICAgICAgICAgICAgdGhpcy5faXRlbXMuc3BsaWNlKHBvc2l0aW9uLCAwLCBjb250ZW50KTtcbiAgICAgICAgICAgIHRoaXMuX21lcmdlcnMuc3BsaWNlKHBvc2l0aW9uLCAwLCBjb250ZW50LmZpbmQoJ1tkYXRhLW1lcmdlXScpLmFkZEJhY2soJ1tkYXRhLW1lcmdlXScpLmF0dHIoJ2RhdGEtbWVyZ2UnKSAqIDEgfHwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pdGVtc1tjdXJyZW50XSAmJiB0aGlzLnJlc2V0KHRoaXMuX2l0ZW1zW2N1cnJlbnRdLmluZGV4KCkpO1xuXG4gICAgICAgIHRoaXMuaW52YWxpZGF0ZSgnaXRlbXMnKTtcblxuICAgICAgICB0aGlzLnRyaWdnZXIoJ2FkZGVkJywgeyBjb250ZW50OiBjb250ZW50LCBwb3NpdGlvbjogcG9zaXRpb24gfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYW4gaXRlbSBieSBpdHMgcG9zaXRpb24uXG4gICAgICogQHRvZG8gVXNlIGBpdGVtYCBpbnN0ZWFkIG9mIGBjb250ZW50YCBmb3IgdGhlIGV2ZW50IGFyZ3VtZW50cy5cbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gVGhlIHJlbGF0aXZlIHBvc2l0aW9uIG9mIHRoZSBpdGVtIHRvIHJlbW92ZS5cbiAgICAgKi9cbiAgICBPd2wucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG4gICAgICAgIHBvc2l0aW9uID0gdGhpcy5ub3JtYWxpemUocG9zaXRpb24sIHRydWUpO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRyaWdnZXIoJ3JlbW92ZScsIHsgY29udGVudDogdGhpcy5faXRlbXNbcG9zaXRpb25dLCBwb3NpdGlvbjogcG9zaXRpb24gfSk7XG5cbiAgICAgICAgdGhpcy5faXRlbXNbcG9zaXRpb25dLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLl9pdGVtcy5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgICAgICB0aGlzLl9tZXJnZXJzLnNwbGljZShwb3NpdGlvbiwgMSk7XG5cbiAgICAgICAgdGhpcy5pbnZhbGlkYXRlKCdpdGVtcycpO1xuXG4gICAgICAgIHRoaXMudHJpZ2dlcigncmVtb3ZlZCcsIHsgY29udGVudDogbnVsbCwgcG9zaXRpb246IHBvc2l0aW9uIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQcmVsb2FkcyBpbWFnZXMgd2l0aCBhdXRvIHdpZHRoLlxuICAgICAqIEB0b2RvIFJlcGxhY2UgYnkgYSBtb3JlIGdlbmVyaWMgYXBwcm9hY2hcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgT3dsLnByb3RvdHlwZS5wcmVsb2FkQXV0b1dpZHRoSW1hZ2VzID0gZnVuY3Rpb24oaW1hZ2VzKSB7XG4gICAgICAgIGltYWdlcy5lYWNoKCQucHJveHkoZnVuY3Rpb24oaSwgZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5lbnRlcigncHJlLWxvYWRpbmcnKTtcbiAgICAgICAgICAgIGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuICAgICAgICAgICAgJChuZXcgSW1hZ2UoKSkub25lKCdsb2FkJywgJC5wcm94eShmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hdHRyKCdzcmMnLCBlLnRhcmdldC5zcmMpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY3NzKCdvcGFjaXR5JywgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sZWF2ZSgncHJlLWxvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAhdGhpcy5pcygncHJlLWxvYWRpbmcnKSAmJiAhdGhpcy5pcygnaW5pdGlhbGl6aW5nJykgJiYgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgICAgICB9LCB0aGlzKSkuYXR0cignc3JjJywgZWxlbWVudC5hdHRyKCdzcmMnKSB8fCBlbGVtZW50LmF0dHIoJ2RhdGEtc3JjJykgfHwgZWxlbWVudC5hdHRyKCdkYXRhLXNyYy1yZXRpbmEnKSk7XG4gICAgICAgIH0sIHRoaXMpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVzdHJveXMgdGhlIGNhcm91c2VsLlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBPd2wucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB0aGlzLiRlbGVtZW50Lm9mZignLm93bC5jb3JlJyk7XG4gICAgICAgIHRoaXMuJHN0YWdlLm9mZignLm93bC5jb3JlJyk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZignLm93bC5jb3JlJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MucmVzcG9uc2l2ZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lcik7XG4gICAgICAgICAgICB0aGlzLm9mZih3aW5kb3csICdyZXNpemUnLCB0aGlzLl9oYW5kbGVycy5vblRocm90dGxlZFJlc2l6ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMuX3BsdWdpbnMpIHtcbiAgICAgICAgICAgIHRoaXMuX3BsdWdpbnNbaV0uZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kc3RhZ2UuY2hpbGRyZW4oJy5jbG9uZWQnKS5yZW1vdmUoKTtcblxuICAgICAgICB0aGlzLiRzdGFnZS51bndyYXAoKTtcbiAgICAgICAgdGhpcy4kc3RhZ2UuY2hpbGRyZW4oKS5jb250ZW50cygpLnVud3JhcCgpO1xuICAgICAgICB0aGlzLiRzdGFnZS5jaGlsZHJlbigpLnVud3JhcCgpO1xuXG4gICAgICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMucmVmcmVzaENsYXNzKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5sb2FkaW5nQ2xhc3MpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmxvYWRlZENsYXNzKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5ydGxDbGFzcylcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZHJhZ0NsYXNzKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5ncmFiQ2xhc3MpXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCB0aGlzLiRlbGVtZW50LmF0dHIoJ2NsYXNzJykucmVwbGFjZShuZXcgUmVnRXhwKHRoaXMub3B0aW9ucy5yZXNwb25zaXZlQ2xhc3MgKyAnLVxcXFxTK1xcXFxzJywgJ2cnKSwgJycpKVxuICAgICAgICAgICAgLnJlbW92ZURhdGEoJ293bC5jYXJvdXNlbCcpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBPcGVyYXRvcnMgdG8gY2FsY3VsYXRlIHJpZ2h0LXRvLWxlZnQgYW5kIGxlZnQtdG8tcmlnaHQuXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbYV0gLSBUaGUgbGVmdCBzaWRlIG9wZXJhbmQuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtvXSAtIFRoZSBvcGVyYXRvci5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2JdIC0gVGhlIHJpZ2h0IHNpZGUgb3BlcmFuZC5cbiAgICAgKi9cbiAgICBPd2wucHJvdG90eXBlLm9wID0gZnVuY3Rpb24oYSwgbywgYikge1xuICAgICAgICB2YXIgcnRsID0gdGhpcy5zZXR0aW5ncy5ydGw7XG4gICAgICAgIHN3aXRjaCAobykge1xuICAgICAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJ0bCA/IGEgPiBiIDogYSA8IGI7XG4gICAgICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcnRsID8gYSA8IGIgOiBhID4gYjtcbiAgICAgICAgICAgIGNhc2UgJz49JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcnRsID8gYSA8PSBiIDogYSA+PSBiO1xuICAgICAgICAgICAgY2FzZSAnPD0nOlxuICAgICAgICAgICAgICAgIHJldHVybiBydGwgPyBhID49IGIgOiBhIDw9IGI7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIHRvIGFuIGludGVybmFsIGV2ZW50LlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gVGhlIGV2ZW50IHNvdXJjZS5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgLSBUaGUgZXZlbnQgbmFtZS5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciAtIFRoZSBldmVudCBoYW5kbGVyIHRvIGF0dGFjaC5cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGNhcHR1cmUgLSBXZXRoZXIgdGhlIGV2ZW50IHNob3VsZCBiZSBoYW5kbGVkIGF0IHRoZSBjYXB0dXJpbmcgcGhhc2Ugb3Igbm90LlxuICAgICAqL1xuICAgIE93bC5wcm90b3R5cGUub24gPSBmdW5jdGlvbihlbGVtZW50LCBldmVudCwgbGlzdGVuZXIsIGNhcHR1cmUpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgY2FwdHVyZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5hdHRhY2hFdmVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXRhY2hlcyBmcm9tIGFuIGludGVybmFsIGV2ZW50LlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gVGhlIGV2ZW50IHNvdXJjZS5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgLSBUaGUgZXZlbnQgbmFtZS5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciAtIFRoZSBhdHRhY2hlZCBldmVudCBoYW5kbGVyIHRvIGRldGFjaC5cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGNhcHR1cmUgLSBXZXRoZXIgdGhlIGF0dGFjaGVkIGV2ZW50IGhhbmRsZXIgd2FzIHJlZ2lzdGVyZWQgYXMgYSBjYXB0dXJpbmcgbGlzdGVuZXIgb3Igbm90LlxuICAgICAqL1xuICAgIE93bC5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oZWxlbWVudCwgZXZlbnQsIGxpc3RlbmVyLCBjYXB0dXJlKSB7XG4gICAgICAgIGlmIChlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIGNhcHR1cmUpO1xuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuZGV0YWNoRXZlbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgYSBwdWJsaWMgZXZlbnQuXG4gICAgICogQHRvZG8gUmVtb3ZlIGBzdGF0dXNgLCBgcmVsYXRlZFRhcmdldGAgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZC5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBUaGUgZXZlbnQgbmFtZS5cbiAgICAgKiBAcGFyYW0geyp9IFtkYXRhPW51bGxdIC0gVGhlIGV2ZW50IGRhdGEuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtuYW1lc3BhY2U9Y2Fyb3VzZWxdIC0gVGhlIGV2ZW50IG5hbWVzcGFjZS5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW3N0YXRlXSAtIFRoZSBzdGF0ZSB3aGljaCBpcyBhc3NvY2lhdGVkIHdpdGggdGhlIGV2ZW50LlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2VudGVyPWZhbHNlXSAtIEluZGljYXRlcyBpZiB0aGUgY2FsbCBlbnRlcnMgdGhlIHNwZWNpZmllZCBzdGF0ZSBvciBub3QuXG4gICAgICogQHJldHVybnMge0V2ZW50fSAtIFRoZSBldmVudCBhcmd1bWVudHMuXG4gICAgICovXG4gICAgT3dsLnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24obmFtZSwgZGF0YSwgbmFtZXNwYWNlLCBzdGF0ZSwgZW50ZXIpIHtcbiAgICAgICAgdmFyIHN0YXR1cyA9IHtcbiAgICAgICAgICAgIGl0ZW06IHsgY291bnQ6IHRoaXMuX2l0ZW1zLmxlbmd0aCwgaW5kZXg6IHRoaXMuY3VycmVudCgpIH1cbiAgICAgICAgfSwgaGFuZGxlciA9ICQuY2FtZWxDYXNlKFxuICAgICAgICAgICAgJC5ncmVwKFsgJ29uJywgbmFtZSwgbmFtZXNwYWNlIF0sIGZ1bmN0aW9uKHYpIHsgcmV0dXJuIHYgfSlcbiAgICAgICAgICAgICAgICAuam9pbignLScpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgKSwgZXZlbnQgPSAkLkV2ZW50KFxuICAgICAgICAgICAgWyBuYW1lLCAnb3dsJywgbmFtZXNwYWNlIHx8ICdjYXJvdXNlbCcgXS5qb2luKCcuJykudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICQuZXh0ZW5kKHsgcmVsYXRlZFRhcmdldDogdGhpcyB9LCBzdGF0dXMsIGRhdGEpXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9zdXByZXNzW25hbWVdKSB7XG4gICAgICAgICAgICAkLmVhY2godGhpcy5fcGx1Z2lucywgZnVuY3Rpb24obmFtZSwgcGx1Z2luKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBsdWdpbi5vblRyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luLm9uVHJpZ2dlcihldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoeyB0eXBlOiBPd2wuVHlwZS5FdmVudCwgbmFtZTogbmFtZSB9KTtcbiAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihldmVudCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzICYmIHR5cGVvZiB0aGlzLnNldHRpbmdzW2hhbmRsZXJdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nc1toYW5kbGVyXS5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBldmVudDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRW50ZXJzIGEgc3RhdGUuXG4gICAgICogQHBhcmFtIG5hbWUgLSBUaGUgc3RhdGUgbmFtZS5cbiAgICAgKi9cbiAgICBPd2wucHJvdG90eXBlLmVudGVyID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAkLmVhY2goWyBuYW1lIF0uY29uY2F0KHRoaXMuX3N0YXRlcy50YWdzW25hbWVdIHx8IFtdKSwgJC5wcm94eShmdW5jdGlvbihpLCBuYW1lKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc3RhdGVzLmN1cnJlbnRbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlcy5jdXJyZW50W25hbWVdID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fc3RhdGVzLmN1cnJlbnRbbmFtZV0rKztcbiAgICAgICAgfSwgdGhpcykpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBMZWF2ZXMgYSBzdGF0ZS5cbiAgICAgKiBAcGFyYW0gbmFtZSAtIFRoZSBzdGF0ZSBuYW1lLlxuICAgICAqL1xuICAgIE93bC5wcm90b3R5cGUubGVhdmUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICQuZWFjaChbIG5hbWUgXS5jb25jYXQodGhpcy5fc3RhdGVzLnRhZ3NbbmFtZV0gfHwgW10pLCAkLnByb3h5KGZ1bmN0aW9uKGksIG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlcy5jdXJyZW50W25hbWVdLS07XG4gICAgICAgIH0sIHRoaXMpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IG9yIHN0YXRlLlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IC0gVGhlIGV2ZW50IG9yIHN0YXRlIHRvIHJlZ2lzdGVyLlxuICAgICAqL1xuICAgIE93bC5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgICAgaWYgKG9iamVjdC50eXBlID09PSBPd2wuVHlwZS5FdmVudCkge1xuICAgICAgICAgICAgaWYgKCEkLmV2ZW50LnNwZWNpYWxbb2JqZWN0Lm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgJC5ldmVudC5zcGVjaWFsW29iamVjdC5uYW1lXSA9IHt9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoISQuZXZlbnQuc3BlY2lhbFtvYmplY3QubmFtZV0ub3dsKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9kZWZhdWx0ID0gJC5ldmVudC5zcGVjaWFsW29iamVjdC5uYW1lXS5fZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAkLmV2ZW50LnNwZWNpYWxbb2JqZWN0Lm5hbWVdLl9kZWZhdWx0ID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2RlZmF1bHQgJiYgX2RlZmF1bHQuYXBwbHkgJiYgKCFlLm5hbWVzcGFjZSB8fCBlLm5hbWVzcGFjZS5pbmRleE9mKCdvd2wnKSA9PT0gLTEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2RlZmF1bHQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5uYW1lc3BhY2UgJiYgZS5uYW1lc3BhY2UuaW5kZXhPZignb3dsJykgPiAtMTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICQuZXZlbnQuc3BlY2lhbFtvYmplY3QubmFtZV0ub3dsID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChvYmplY3QudHlwZSA9PT0gT3dsLlR5cGUuU3RhdGUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fc3RhdGVzLnRhZ3Nbb2JqZWN0Lm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVzLnRhZ3Nbb2JqZWN0Lm5hbWVdID0gb2JqZWN0LnRhZ3M7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlcy50YWdzW29iamVjdC5uYW1lXSA9IHRoaXMuX3N0YXRlcy50YWdzW29iamVjdC5uYW1lXS5jb25jYXQob2JqZWN0LnRhZ3MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZXMudGFnc1tvYmplY3QubmFtZV0gPSAkLmdyZXAodGhpcy5fc3RhdGVzLnRhZ3Nbb2JqZWN0Lm5hbWVdLCAkLnByb3h5KGZ1bmN0aW9uKHRhZywgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAkLmluQXJyYXkodGFnLCB0aGlzLl9zdGF0ZXMudGFnc1tvYmplY3QubmFtZV0pID09PSBpO1xuICAgICAgICAgICAgfSwgdGhpcykpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN1cHByZXNzZXMgZXZlbnRzLlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcGFyYW0ge0FycmF5LjxTdHJpbmc+fSBldmVudHMgLSBUaGUgZXZlbnRzIHRvIHN1cHByZXNzLlxuICAgICAqL1xuICAgIE93bC5wcm90b3R5cGUuc3VwcHJlc3MgPSBmdW5jdGlvbihldmVudHMpIHtcbiAgICAgICAgJC5lYWNoKGV2ZW50cywgJC5wcm94eShmdW5jdGlvbihpbmRleCwgZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX3N1cHJlc3NbZXZlbnRdID0gdHJ1ZTtcbiAgICAgICAgfSwgdGhpcykpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZWxlYXNlcyBzdXBwcmVzc2VkIGV2ZW50cy5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHBhcmFtIHtBcnJheS48U3RyaW5nPn0gZXZlbnRzIC0gVGhlIGV2ZW50cyB0byByZWxlYXNlLlxuICAgICAqL1xuICAgIE93bC5wcm90b3R5cGUucmVsZWFzZSA9IGZ1bmN0aW9uKGV2ZW50cykge1xuICAgICAgICAkLmVhY2goZXZlbnRzLCAkLnByb3h5KGZ1bmN0aW9uKGluZGV4LCBldmVudCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3N1cHJlc3NbZXZlbnRdO1xuICAgICAgICB9LCB0aGlzKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdW5pZmllZCBwb2ludGVyIGNvb3JkaW5hdGVzIGZyb20gZXZlbnQuXG4gICAgICogQHRvZG8gIzI2MVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSAtIFRoZSBgbW91c2Vkb3duYCBvciBgdG91Y2hzdGFydGAgZXZlbnQuXG4gICAgICogQHJldHVybnMge09iamVjdH0gLSBDb250YWlucyBgeGAgYW5kIGB5YCBjb29yZGluYXRlcyBvZiBjdXJyZW50IHBvaW50ZXIgcG9zaXRpb24uXG4gICAgICovXG4gICAgT3dsLnByb3RvdHlwZS5wb2ludGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHsgeDogbnVsbCwgeTogbnVsbCB9O1xuXG4gICAgICAgIGV2ZW50ID0gZXZlbnQub3JpZ2luYWxFdmVudCB8fCBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XG5cbiAgICAgICAgZXZlbnQgPSBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID9cbiAgICAgICAgICAgIGV2ZW50LnRvdWNoZXNbMF0gOiBldmVudC5jaGFuZ2VkVG91Y2hlcyAmJiBldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggP1xuICAgICAgICAgICAgICAgIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdIDogZXZlbnQ7XG5cbiAgICAgICAgaWYgKGV2ZW50LnBhZ2VYKSB7XG4gICAgICAgICAgICByZXN1bHQueCA9IGV2ZW50LnBhZ2VYO1xuICAgICAgICAgICAgcmVzdWx0LnkgPSBldmVudC5wYWdlWTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdC54ID0gZXZlbnQuY2xpZW50WDtcbiAgICAgICAgICAgIHJlc3VsdC55ID0gZXZlbnQuY2xpZW50WTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGRpZmZlcmVuY2Ugb2YgdHdvIHZlY3RvcnMuXG4gICAgICogQHRvZG8gIzI2MVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gLSBUaGUgZmlyc3QgdmVjdG9yLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAtIFRoZSBzZWNvbmQgdmVjdG9yLlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IC0gVGhlIGRpZmZlcmVuY2UuXG4gICAgICovXG4gICAgT3dsLnByb3RvdHlwZS5kaWZmZXJlbmNlID0gZnVuY3Rpb24oZmlyc3QsIHNlY29uZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogZmlyc3QueCAtIHNlY29uZC54LFxuICAgICAgICAgICAgeTogZmlyc3QueSAtIHNlY29uZC55XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBqUXVlcnkgUGx1Z2luIGZvciB0aGUgT3dsIENhcm91c2VsXG4gICAgICogQHRvZG8gTmF2aWdhdGlvbiBwbHVnaW4gYG5leHRgIGFuZCBgcHJldmBcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgJC5mbi5vd2xDYXJvdXNlbCA9IGZ1bmN0aW9uKG9wdGlvbikge1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgZGF0YSA9ICR0aGlzLmRhdGEoJ293bC5jYXJvdXNlbCcpO1xuXG4gICAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gbmV3IE93bCh0aGlzLCB0eXBlb2Ygb3B0aW9uID09ICdvYmplY3QnICYmIG9wdGlvbik7XG4gICAgICAgICAgICAgICAgJHRoaXMuZGF0YSgnb3dsLmNhcm91c2VsJywgZGF0YSk7XG5cbiAgICAgICAgICAgICAgICAkLmVhY2goW1xuICAgICAgICAgICAgICAgICAgICAnbmV4dCcsICdwcmV2JywgJ3RvJywgJ2Rlc3Ryb3knLCAncmVmcmVzaCcsICdyZXBsYWNlJywgJ2FkZCcsICdyZW1vdmUnXG4gICAgICAgICAgICAgICAgXSwgZnVuY3Rpb24oaSwgZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5yZWdpc3Rlcih7IHR5cGU6IE93bC5UeXBlLkV2ZW50LCBuYW1lOiBldmVudCB9KTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS4kZWxlbWVudC5vbihldmVudCArICcub3dsLmNhcm91c2VsLmNvcmUnLCAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLm5hbWVzcGFjZSAmJiBlLnJlbGF0ZWRUYXJnZXQgIT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cHByZXNzKFsgZXZlbnQgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtldmVudF0uYXBwbHkodGhpcywgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbGVhc2UoWyBldmVudCBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgZGF0YSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJyAmJiBvcHRpb24uY2hhckF0KDApICE9PSAnXycpIHtcbiAgICAgICAgICAgICAgICBkYXRhW29wdGlvbl0uYXBwbHkoZGF0YSwgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29uc3RydWN0b3IgZm9yIHRoZSBqUXVlcnkgUGx1Z2luXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgICQuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IgPSBPd2w7XG5cbn0pKHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcblxuLyoqXG4gKiBBdXRvUmVmcmVzaCBQbHVnaW5cbiAqIEB2ZXJzaW9uIDIuMC4wLWJldGEuM1xuICogQGF1dGhvciBBcnR1cyBLb2xhbm93c2tpXG4gKiBAbGljZW5zZSBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqL1xuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIGF1dG8gcmVmcmVzaCBwbHVnaW4uXG4gICAgICogQGNsYXNzIFRoZSBBdXRvIFJlZnJlc2ggUGx1Z2luXG4gICAgICogQHBhcmFtIHtPd2x9IGNhcm91c2VsIC0gVGhlIE93bCBDYXJvdXNlbFxuICAgICAqL1xuICAgIHZhciBBdXRvUmVmcmVzaCA9IGZ1bmN0aW9uKGNhcm91c2VsKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWZlcmVuY2UgdG8gdGhlIGNvcmUuXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQHR5cGUge093bH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2NvcmUgPSBjYXJvdXNlbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVmcmVzaCBpbnRlcnZhbC5cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGV0aGVyIHRoZSBlbGVtZW50IGlzIGN1cnJlbnRseSB2aXNpYmxlIG9yIG5vdC5cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3Zpc2libGUgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGwgZXZlbnQgaGFuZGxlcnMuXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2hhbmRsZXJzID0ge1xuICAgICAgICAgICAgJ2luaXRpYWxpemVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9SZWZyZXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2F0Y2goKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0aGlzKVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcbiAgICAgICAgdGhpcy5fY29yZS5vcHRpb25zID0gJC5leHRlbmQoe30sIEF1dG9SZWZyZXNoLkRlZmF1bHRzLCB0aGlzLl9jb3JlLm9wdGlvbnMpO1xuXG4gICAgICAgIC8vIHJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzXG4gICAgICAgIHRoaXMuX2NvcmUuJGVsZW1lbnQub24odGhpcy5faGFuZGxlcnMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IG9wdGlvbnMuXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIEF1dG9SZWZyZXNoLkRlZmF1bHRzID0ge1xuICAgICAgICBhdXRvUmVmcmVzaDogdHJ1ZSxcbiAgICAgICAgYXV0b1JlZnJlc2hJbnRlcnZhbDogNTAwXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFdhdGNoZXMgdGhlIGVsZW1lbnQuXG4gICAgICovXG4gICAgQXV0b1JlZnJlc2gucHJvdG90eXBlLndhdGNoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9pbnRlcnZhbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdmlzaWJsZSA9IHRoaXMuX2NvcmUuJGVsZW1lbnQuaXMoJzp2aXNpYmxlJyk7XG4gICAgICAgIHRoaXMuX2ludGVydmFsID0gd2luZG93LnNldEludGVydmFsKCQucHJveHkodGhpcy5yZWZyZXNoLCB0aGlzKSwgdGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvUmVmcmVzaEludGVydmFsKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVmcmVzaGVzIHRoZSBlbGVtZW50LlxuICAgICAqL1xuICAgIEF1dG9SZWZyZXNoLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9jb3JlLiRlbGVtZW50LmlzKCc6dmlzaWJsZScpID09PSB0aGlzLl92aXNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl92aXNpYmxlID0gIXRoaXMuX3Zpc2libGU7XG5cbiAgICAgICAgdGhpcy5fY29yZS4kZWxlbWVudC50b2dnbGVDbGFzcygnb3dsLWhpZGRlbicsICF0aGlzLl92aXNpYmxlKTtcblxuICAgICAgICB0aGlzLl92aXNpYmxlICYmICh0aGlzLl9jb3JlLmludmFsaWRhdGUoJ3dpZHRoJykgJiYgdGhpcy5fY29yZS5yZWZyZXNoKCkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95cyB0aGUgcGx1Z2luLlxuICAgICAqL1xuICAgIEF1dG9SZWZyZXNoLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBoYW5kbGVyLCBwcm9wZXJ0eTtcblxuICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbCk7XG5cbiAgICAgICAgZm9yIChoYW5kbGVyIGluIHRoaXMuX2hhbmRsZXJzKSB7XG4gICAgICAgICAgICB0aGlzLl9jb3JlLiRlbGVtZW50Lm9mZihoYW5kbGVyLCB0aGlzLl9oYW5kbGVyc1toYW5kbGVyXSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChwcm9wZXJ0eSBpbiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuICAgICAgICAgICAgdHlwZW9mIHRoaXNbcHJvcGVydHldICE9ICdmdW5jdGlvbicgJiYgKHRoaXNbcHJvcGVydHldID0gbnVsbCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgJC5mbi5vd2xDYXJvdXNlbC5Db25zdHJ1Y3Rvci5QbHVnaW5zLkF1dG9SZWZyZXNoID0gQXV0b1JlZnJlc2g7XG5cbn0pKHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcblxuLyoqXG4gKiBMYXp5IFBsdWdpblxuICogQHZlcnNpb24gMi4wLjAtYmV0YS4zXG4gKiBAYXV0aG9yIEJhcnRvc3ogV29qY2llY2hvd3NraVxuICogQGxpY2Vuc2UgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKi9cbjsoZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBsYXp5IHBsdWdpbi5cbiAgICAgKiBAY2xhc3MgVGhlIExhenkgUGx1Z2luXG4gICAgICogQHBhcmFtIHtPd2x9IGNhcm91c2VsIC0gVGhlIE93bCBDYXJvdXNlbFxuICAgICAqL1xuICAgIHZhciBMYXp5ID0gZnVuY3Rpb24oY2Fyb3VzZWwpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVmZXJlbmNlIHRvIHRoZSBjb3JlLlxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEB0eXBlIHtPd2x9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9jb3JlID0gY2Fyb3VzZWw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFscmVhZHkgbG9hZGVkIGl0ZW1zLlxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEB0eXBlIHtBcnJheS48alF1ZXJ5Pn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2xvYWRlZCA9IFtdO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFdmVudCBoYW5kbGVycy5cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faGFuZGxlcnMgPSB7XG4gICAgICAgICAgICAnaW5pdGlhbGl6ZWQub3dsLmNhcm91c2VsIGNoYW5nZS5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWUubmFtZXNwYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2NvcmUuc2V0dGluZ3MgfHwgIXRoaXMuX2NvcmUuc2V0dGluZ3MubGF6eUxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgoZS5wcm9wZXJ0eSAmJiBlLnByb3BlcnR5Lm5hbWUgPT0gJ3Bvc2l0aW9uJykgfHwgZS50eXBlID09ICdpbml0aWFsaXplZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNldHRpbmdzID0gdGhpcy5fY29yZS5zZXR0aW5ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG4gPSAoc2V0dGluZ3MuY2VudGVyICYmIE1hdGguY2VpbChzZXR0aW5ncy5pdGVtcyAvIDIpIHx8IHNldHRpbmdzLml0ZW1zKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSAoKHNldHRpbmdzLmNlbnRlciAmJiBuICogLTEpIHx8IDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSAoKGUucHJvcGVydHkgJiYgZS5wcm9wZXJ0eS52YWx1ZSkgfHwgdGhpcy5fY29yZS5jdXJyZW50KCkpICsgaSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb25lcyA9IHRoaXMuX2NvcmUuY2xvbmVzKCkubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZCA9ICQucHJveHkoZnVuY3Rpb24oaSwgdikgeyB0aGlzLmxvYWQodikgfSwgdGhpcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGkrKyA8IG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZChjbG9uZXMgLyAyICsgdGhpcy5fY29yZS5yZWxhdGl2ZShwb3NpdGlvbikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmVzICYmICQuZWFjaCh0aGlzLl9jb3JlLmNsb25lcyh0aGlzLl9jb3JlLnJlbGF0aXZlKHBvc2l0aW9uKSksIGxvYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24rKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHRoaXMpXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gc2V0IHRoZSBkZWZhdWx0IG9wdGlvbnNcbiAgICAgICAgdGhpcy5fY29yZS5vcHRpb25zID0gJC5leHRlbmQoe30sIExhenkuRGVmYXVsdHMsIHRoaXMuX2NvcmUub3B0aW9ucyk7XG5cbiAgICAgICAgLy8gcmVnaXN0ZXIgZXZlbnQgaGFuZGxlclxuICAgICAgICB0aGlzLl9jb3JlLiRlbGVtZW50Lm9uKHRoaXMuX2hhbmRsZXJzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IG9wdGlvbnMuXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIExhenkuRGVmYXVsdHMgPSB7XG4gICAgICAgIGxhenlMb2FkOiBmYWxzZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWRzIGFsbCByZXNvdXJjZXMgb2YgYW4gaXRlbSBhdCB0aGUgc3BlY2lmaWVkIHBvc2l0aW9uLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBwb3NpdGlvbiAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgaXRlbS5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgTGF6eS5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG4gICAgICAgIHZhciAkaXRlbSA9IHRoaXMuX2NvcmUuJHN0YWdlLmNoaWxkcmVuKCkuZXEocG9zaXRpb24pLFxuICAgICAgICAgICAgJGVsZW1lbnRzID0gJGl0ZW0gJiYgJGl0ZW0uZmluZCgnLm93bC1sYXp5Jyk7XG5cbiAgICAgICAgaWYgKCEkZWxlbWVudHMgfHwgJC5pbkFycmF5KCRpdGVtLmdldCgwKSwgdGhpcy5fbG9hZGVkKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkZWxlbWVudHMuZWFjaCgkLnByb3h5KGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgJGVsZW1lbnQgPSAkKGVsZW1lbnQpLCBpbWFnZSxcbiAgICAgICAgICAgICAgICB1cmwgPSAod2luZG93LmRldmljZVBpeGVsUmF0aW8gPiAxICYmICRlbGVtZW50LmF0dHIoJ2RhdGEtc3JjLXJldGluYScpKSB8fCAkZWxlbWVudC5hdHRyKCdkYXRhLXNyYycpO1xuXG4gICAgICAgICAgICB0aGlzLl9jb3JlLnRyaWdnZXIoJ2xvYWQnLCB7IGVsZW1lbnQ6ICRlbGVtZW50LCB1cmw6IHVybCB9LCAnbGF6eScpO1xuXG4gICAgICAgICAgICBpZiAoJGVsZW1lbnQuaXMoJ2ltZycpKSB7XG4gICAgICAgICAgICAgICAgJGVsZW1lbnQub25lKCdsb2FkLm93bC5sYXp5JywgJC5wcm94eShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnQuY3NzKCdvcGFjaXR5JywgMSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvcmUudHJpZ2dlcignbG9hZGVkJywgeyBlbGVtZW50OiAkZWxlbWVudCwgdXJsOiB1cmwgfSwgJ2xhenknKTtcbiAgICAgICAgICAgICAgICB9LCB0aGlzKSkuYXR0cignc3JjJywgdXJsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSAkLnByb3h5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkZWxlbWVudC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcgKyB1cmwgKyAnKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29yZS50cmlnZ2VyKCdsb2FkZWQnLCB7IGVsZW1lbnQ6ICRlbGVtZW50LCB1cmw6IHVybCB9LCAnbGF6eScpO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IHVybDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcykpO1xuXG4gICAgICAgIHRoaXMuX2xvYWRlZC5wdXNoKCRpdGVtLmdldCgwKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveXMgdGhlIHBsdWdpbi5cbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgTGF6eS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaGFuZGxlciwgcHJvcGVydHk7XG5cbiAgICAgICAgZm9yIChoYW5kbGVyIGluIHRoaXMuaGFuZGxlcnMpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvcmUuJGVsZW1lbnQub2ZmKGhhbmRsZXIsIHRoaXMuaGFuZGxlcnNbaGFuZGxlcl0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAocHJvcGVydHkgaW4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpIHtcbiAgICAgICAgICAgIHR5cGVvZiB0aGlzW3Byb3BlcnR5XSAhPSAnZnVuY3Rpb24nICYmICh0aGlzW3Byb3BlcnR5XSA9IG51bGwpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICQuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IuUGx1Z2lucy5MYXp5ID0gTGF6eTtcblxufSkod2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG4vKipcbiAqIEF1dG9IZWlnaHQgUGx1Z2luXG4gKiBAdmVyc2lvbiAyLjAuMC1iZXRhLjNcbiAqIEBhdXRob3IgQmFydG9zeiBXb2pjaWVjaG93c2tpXG4gKiBAbGljZW5zZSBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqL1xuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIGF1dG8gaGVpZ2h0IHBsdWdpbi5cbiAgICAgKiBAY2xhc3MgVGhlIEF1dG8gSGVpZ2h0IFBsdWdpblxuICAgICAqIEBwYXJhbSB7T3dsfSBjYXJvdXNlbCAtIFRoZSBPd2wgQ2Fyb3VzZWxcbiAgICAgKi9cbiAgICB2YXIgQXV0b0hlaWdodCA9IGZ1bmN0aW9uKGNhcm91c2VsKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWZlcmVuY2UgdG8gdGhlIGNvcmUuXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQHR5cGUge093bH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2NvcmUgPSBjYXJvdXNlbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIGV2ZW50IGhhbmRsZXJzLlxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9oYW5kbGVycyA9IHtcbiAgICAgICAgICAgICdpbml0aWFsaXplZC5vd2wuY2Fyb3VzZWwgcmVmcmVzaGVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9IZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0aGlzKSxcbiAgICAgICAgICAgICdjaGFuZ2VkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9IZWlnaHQgJiYgZS5wcm9wZXJ0eS5uYW1lID09ICdwb3NpdGlvbicpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHRoaXMpLFxuICAgICAgICAgICAgJ2xvYWRlZC5vd2wubGF6eSc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9IZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgJiYgZS5lbGVtZW50LmNsb3Nlc3QoJy4nICsgdGhpcy5fY29yZS5zZXR0aW5ncy5pdGVtQ2xhc3MpLmluZGV4KCkgPT09IHRoaXMuX2NvcmUuY3VycmVudCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGhpcylcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gICAgICAgIHRoaXMuX2NvcmUub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBBdXRvSGVpZ2h0LkRlZmF1bHRzLCB0aGlzLl9jb3JlLm9wdGlvbnMpO1xuXG4gICAgICAgIC8vIHJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzXG4gICAgICAgIHRoaXMuX2NvcmUuJGVsZW1lbnQub24odGhpcy5faGFuZGxlcnMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IG9wdGlvbnMuXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIEF1dG9IZWlnaHQuRGVmYXVsdHMgPSB7XG4gICAgICAgIGF1dG9IZWlnaHQ6IGZhbHNlLFxuICAgICAgICBhdXRvSGVpZ2h0Q2xhc3M6ICdvd2wtaGVpZ2h0J1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSB2aWV3LlxuICAgICAqL1xuICAgIEF1dG9IZWlnaHQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLl9jb3JlLl9jdXJyZW50LFxuICAgICAgICAgICAgZW5kID0gc3RhcnQgKyB0aGlzLl9jb3JlLnNldHRpbmdzLml0ZW1zLFxuICAgICAgICAgICAgdmlzaWJsZSA9IHRoaXMuX2NvcmUuJHN0YWdlLmNoaWxkcmVuKCkudG9BcnJheSgpLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgICAgICBoZWlnaHRzID0gW10sXG4gICAgICAgICAgICBtYXhoZWlnaHQgPSAwO1xuXG4gICAgICAgICQuZWFjaCh2aXNpYmxlLCBmdW5jdGlvbihpbmRleCwgaXRlbSkge1xuICAgICAgICAgICAgaGVpZ2h0cy5wdXNoKCQoaXRlbSkuaGVpZ2h0KCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtYXhoZWlnaHQgPSBNYXRoLm1heC5hcHBseShudWxsLCBoZWlnaHRzKTtcblxuICAgICAgICB0aGlzLl9jb3JlLiRzdGFnZS5wYXJlbnQoKVxuICAgICAgICAgICAgLmhlaWdodChtYXhoZWlnaHQpXG4gICAgICAgICAgICAuYWRkQ2xhc3ModGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvSGVpZ2h0Q2xhc3MpO1xuICAgIH07XG5cbiAgICBBdXRvSGVpZ2h0LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBoYW5kbGVyLCBwcm9wZXJ0eTtcblxuICAgICAgICBmb3IgKGhhbmRsZXIgaW4gdGhpcy5faGFuZGxlcnMpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvcmUuJGVsZW1lbnQub2ZmKGhhbmRsZXIsIHRoaXMuX2hhbmRsZXJzW2hhbmRsZXJdKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHByb3BlcnR5IGluIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpKSB7XG4gICAgICAgICAgICB0eXBlb2YgdGhpc1twcm9wZXJ0eV0gIT0gJ2Z1bmN0aW9uJyAmJiAodGhpc1twcm9wZXJ0eV0gPSBudWxsKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAkLmZuLm93bENhcm91c2VsLkNvbnN0cnVjdG9yLlBsdWdpbnMuQXV0b0hlaWdodCA9IEF1dG9IZWlnaHQ7XG5cbn0pKHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcblxuLyoqXG4gKiBWaWRlbyBQbHVnaW5cbiAqIEB2ZXJzaW9uIDIuMC4wLWJldGEuM1xuICogQGF1dGhvciBCYXJ0b3N6IFdvamNpZWNob3dza2lcbiAqIEBsaWNlbnNlIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICovXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgdmlkZW8gcGx1Z2luLlxuICAgICAqIEBjbGFzcyBUaGUgVmlkZW8gUGx1Z2luXG4gICAgICogQHBhcmFtIHtPd2x9IGNhcm91c2VsIC0gVGhlIE93bCBDYXJvdXNlbFxuICAgICAqL1xuICAgIHZhciBWaWRlbyA9IGZ1bmN0aW9uKGNhcm91c2VsKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWZlcmVuY2UgdG8gdGhlIGNvcmUuXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQHR5cGUge093bH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2NvcmUgPSBjYXJvdXNlbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FjaGUgYWxsIHZpZGVvIFVSTHMuXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3ZpZGVvcyA9IHt9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDdXJyZW50IHBsYXlpbmcgaXRlbS5cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAdHlwZSB7alF1ZXJ5fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fcGxheWluZyA9IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsbCBldmVudCBoYW5kbGVycy5cbiAgICAgICAgICogQHRvZG8gVGhlIGNsb25lZCBjb250ZW50IHJlbW92YWxlIGlzIHRvbyBsYXRlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2hhbmRsZXJzID0ge1xuICAgICAgICAgICAgJ2luaXRpYWxpemVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLm5hbWVzcGFjZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb3JlLnJlZ2lzdGVyKHsgdHlwZTogJ3N0YXRlJywgbmFtZTogJ3BsYXlpbmcnLCB0YWdzOiBbICdpbnRlcmFjdGluZycgXSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0aGlzKSxcbiAgICAgICAgICAgICdyZXNpemUub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2NvcmUuc2V0dGluZ3MudmlkZW8gJiYgdGhpcy5pc0luRnVsbFNjcmVlbigpKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0aGlzKSxcbiAgICAgICAgICAgICdyZWZyZXNoZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2NvcmUuaXMoJ3Jlc2l6aW5nJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29yZS4kc3RhZ2UuZmluZCgnLmNsb25lZCAub3dsLXZpZGVvLWZyYW1lJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGhpcyksXG4gICAgICAgICAgICAnY2hhbmdlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5uYW1lc3BhY2UgJiYgZS5wcm9wZXJ0eS5uYW1lID09PSAncG9zaXRpb24nICYmIHRoaXMuX3BsYXlpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGhpcyksXG4gICAgICAgICAgICAncHJlcGFyZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlLm5hbWVzcGFjZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyICRlbGVtZW50ID0gJChlLmNvbnRlbnQpLmZpbmQoJy5vd2wtdmlkZW8nKTtcblxuICAgICAgICAgICAgICAgIGlmICgkZWxlbWVudC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnQuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaCgkZWxlbWVudCwgJChlLmNvbnRlbnQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0aGlzKVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcbiAgICAgICAgdGhpcy5fY29yZS5vcHRpb25zID0gJC5leHRlbmQoe30sIFZpZGVvLkRlZmF1bHRzLCB0aGlzLl9jb3JlLm9wdGlvbnMpO1xuXG4gICAgICAgIC8vIHJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzXG4gICAgICAgIHRoaXMuX2NvcmUuJGVsZW1lbnQub24odGhpcy5faGFuZGxlcnMpO1xuXG4gICAgICAgIHRoaXMuX2NvcmUuJGVsZW1lbnQub24oJ2NsaWNrLm93bC52aWRlbycsICcub3dsLXZpZGVvLXBsYXktaWNvbicsICQucHJveHkoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdGhpcy5wbGF5KGUpO1xuICAgICAgICB9LCB0aGlzKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgb3B0aW9ucy5cbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgVmlkZW8uRGVmYXVsdHMgPSB7XG4gICAgICAgIHZpZGVvOiBmYWxzZSxcbiAgICAgICAgdmlkZW9IZWlnaHQ6IGZhbHNlLFxuICAgICAgICB2aWRlb1dpZHRoOiBmYWxzZVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSB2aWRlbyBJRCBhbmQgdGhlIHR5cGUgKFlvdVR1YmUvVmltZW8gb25seSkuXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSB0YXJnZXQgLSBUaGUgdGFyZ2V0IGNvbnRhaW5pbmcgdGhlIHZpZGVvIGRhdGEuXG4gICAgICogQHBhcmFtIHtqUXVlcnl9IGl0ZW0gLSBUaGUgaXRlbSBjb250YWluaW5nIHRoZSB2aWRlby5cbiAgICAgKi9cbiAgICBWaWRlby5wcm90b3R5cGUuZmV0Y2ggPSBmdW5jdGlvbih0YXJnZXQsIGl0ZW0pIHtcbiAgICAgICAgdmFyIHR5cGUgPSB0YXJnZXQuYXR0cignZGF0YS12aW1lby1pZCcpID8gJ3ZpbWVvJyA6ICd5b3V0dWJlJyxcbiAgICAgICAgICAgIGlkID0gdGFyZ2V0LmF0dHIoJ2RhdGEtdmltZW8taWQnKSB8fCB0YXJnZXQuYXR0cignZGF0YS15b3V0dWJlLWlkJyksXG4gICAgICAgICAgICB3aWR0aCA9IHRhcmdldC5hdHRyKCdkYXRhLXdpZHRoJykgfHwgdGhpcy5fY29yZS5zZXR0aW5ncy52aWRlb1dpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0ID0gdGFyZ2V0LmF0dHIoJ2RhdGEtaGVpZ2h0JykgfHwgdGhpcy5fY29yZS5zZXR0aW5ncy52aWRlb0hlaWdodCxcbiAgICAgICAgICAgIHVybCA9IHRhcmdldC5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgaWQgPSB1cmwubWF0Y2goLyhodHRwOnxodHRwczp8KVxcL1xcLyhwbGF5ZXIufHd3dy4pPyh2aW1lb1xcLmNvbXx5b3V0dShiZVxcLmNvbXxcXC5iZXxiZVxcLmdvb2dsZWFwaXNcXC5jb20pKVxcLyh2aWRlb1xcL3xlbWJlZFxcL3x3YXRjaFxcP3Y9fHZcXC8pPyhbQS1aYS16MC05Ll8lLV0qKShcXCZcXFMrKT8vKTtcblxuICAgICAgICAgICAgaWYgKGlkWzNdLmluZGV4T2YoJ3lvdXR1JykgPiAtMSkge1xuICAgICAgICAgICAgICAgIHR5cGUgPSAneW91dHViZSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlkWzNdLmluZGV4T2YoJ3ZpbWVvJykgPiAtMSkge1xuICAgICAgICAgICAgICAgIHR5cGUgPSAndmltZW8nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZpZGVvIFVSTCBub3Qgc3VwcG9ydGVkLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWQgPSBpZFs2XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyB2aWRlbyBVUkwuJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl92aWRlb3NbdXJsXSA9IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICB9O1xuXG4gICAgICAgIGl0ZW0uYXR0cignZGF0YS12aWRlbycsIHVybCk7XG5cbiAgICAgICAgdGhpcy50aHVtYm5haWwodGFyZ2V0LCB0aGlzLl92aWRlb3NbdXJsXSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdmlkZW8gdGh1bWJuYWlsLlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gdGFyZ2V0IC0gVGhlIHRhcmdldCBjb250YWluaW5nIHRoZSB2aWRlbyBkYXRhLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpbmZvIC0gVGhlIHZpZGVvIGluZm8gb2JqZWN0LlxuICAgICAqIEBzZWUgYGZldGNoYFxuICAgICAqL1xuICAgIFZpZGVvLnByb3RvdHlwZS50aHVtYm5haWwgPSBmdW5jdGlvbih0YXJnZXQsIHZpZGVvKSB7XG4gICAgICAgIHZhciB0bkxpbmssXG4gICAgICAgICAgICBpY29uLFxuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIGRpbWVuc2lvbnMgPSB2aWRlby53aWR0aCAmJiB2aWRlby5oZWlnaHQgPyAnc3R5bGU9XCJ3aWR0aDonICsgdmlkZW8ud2lkdGggKyAncHg7aGVpZ2h0OicgKyB2aWRlby5oZWlnaHQgKyAncHg7XCInIDogJycsXG4gICAgICAgICAgICBjdXN0b21UbiA9IHRhcmdldC5maW5kKCdpbWcnKSxcbiAgICAgICAgICAgIHNyY1R5cGUgPSAnc3JjJyxcbiAgICAgICAgICAgIGxhenlDbGFzcyA9ICcnLFxuICAgICAgICAgICAgc2V0dGluZ3MgPSB0aGlzLl9jb3JlLnNldHRpbmdzLFxuICAgICAgICAgICAgY3JlYXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICAgICAgICAgICAgICAgIGljb24gPSAnPGRpdiBjbGFzcz1cIm93bC12aWRlby1wbGF5LWljb25cIj48L2Rpdj4nO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzLmxhenlMb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRuTGluayA9ICc8ZGl2IGNsYXNzPVwib3dsLXZpZGVvLXRuICcgKyBsYXp5Q2xhc3MgKyAnXCIgJyArIHNyY1R5cGUgKyAnPVwiJyArIHBhdGggKyAnXCI+PC9kaXY+JztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0bkxpbmsgPSAnPGRpdiBjbGFzcz1cIm93bC12aWRlby10blwiIHN0eWxlPVwib3BhY2l0eToxO2JhY2tncm91bmQtaW1hZ2U6dXJsKCcgKyBwYXRoICsgJylcIj48L2Rpdj4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXQuYWZ0ZXIodG5MaW5rKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuYWZ0ZXIoaWNvbik7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIC8vIHdyYXAgdmlkZW8gY29udGVudCBpbnRvIG93bC12aWRlby13cmFwcGVyIGRpdlxuICAgICAgICB0YXJnZXQud3JhcCgnPGRpdiBjbGFzcz1cIm93bC12aWRlby13cmFwcGVyXCInICsgZGltZW5zaW9ucyArICc+PC9kaXY+Jyk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvcmUuc2V0dGluZ3MubGF6eUxvYWQpIHtcbiAgICAgICAgICAgIHNyY1R5cGUgPSAnZGF0YS1zcmMnO1xuICAgICAgICAgICAgbGF6eUNsYXNzID0gJ293bC1sYXp5JztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGN1c3RvbSB0aHVtYm5haWxcbiAgICAgICAgaWYgKGN1c3RvbVRuLmxlbmd0aCkge1xuICAgICAgICAgICAgY3JlYXRlKGN1c3RvbVRuLmF0dHIoc3JjVHlwZSkpO1xuICAgICAgICAgICAgY3VzdG9tVG4ucmVtb3ZlKCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmlkZW8udHlwZSA9PT0gJ3lvdXR1YmUnKSB7XG4gICAgICAgICAgICBwYXRoID0gXCJodHRwOi8vaW1nLnlvdXR1YmUuY29tL3ZpL1wiICsgdmlkZW8uaWQgKyBcIi9ocWRlZmF1bHQuanBnXCI7XG4gICAgICAgICAgICBjcmVhdGUocGF0aCk7XG4gICAgICAgIH0gZWxzZSBpZiAodmlkZW8udHlwZSA9PT0gJ3ZpbWVvJykge1xuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vdmltZW8uY29tL2FwaS92Mi92aWRlby8nICsgdmlkZW8uaWQgKyAnLmpzb24nLFxuICAgICAgICAgICAgICAgIGpzb25wOiAnY2FsbGJhY2snLFxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbnAnLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IGRhdGFbMF0udGh1bWJuYWlsX2xhcmdlO1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGUocGF0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU3RvcHMgdGhlIGN1cnJlbnQgdmlkZW8uXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIFZpZGVvLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX2NvcmUudHJpZ2dlcignc3RvcCcsIG51bGwsICd2aWRlbycpO1xuICAgICAgICB0aGlzLl9wbGF5aW5nLmZpbmQoJy5vd2wtdmlkZW8tZnJhbWUnKS5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5fcGxheWluZy5yZW1vdmVDbGFzcygnb3dsLXZpZGVvLXBsYXlpbmcnKTtcbiAgICAgICAgdGhpcy5fcGxheWluZyA9IG51bGw7XG4gICAgICAgIHRoaXMuX2NvcmUubGVhdmUoJ3BsYXlpbmcnKTtcbiAgICAgICAgdGhpcy5fY29yZS50cmlnZ2VyKCdzdG9wcGVkJywgbnVsbCwgJ3ZpZGVvJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyB0aGUgY3VycmVudCB2aWRlby5cbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBUaGUgZXZlbnQgYXJndW1lbnRzLlxuICAgICAqL1xuICAgIFZpZGVvLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KSxcbiAgICAgICAgICAgIGl0ZW0gPSB0YXJnZXQuY2xvc2VzdCgnLicgKyB0aGlzLl9jb3JlLnNldHRpbmdzLml0ZW1DbGFzcyksXG4gICAgICAgICAgICB2aWRlbyA9IHRoaXMuX3ZpZGVvc1tpdGVtLmF0dHIoJ2RhdGEtdmlkZW8nKV0sXG4gICAgICAgICAgICB3aWR0aCA9IHZpZGVvLndpZHRoIHx8ICcxMDAlJyxcbiAgICAgICAgICAgIGhlaWdodCA9IHZpZGVvLmhlaWdodCB8fCB0aGlzLl9jb3JlLiRzdGFnZS5oZWlnaHQoKSxcbiAgICAgICAgICAgIGh0bWw7XG5cbiAgICAgICAgaWYgKHRoaXMuX3BsYXlpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NvcmUuZW50ZXIoJ3BsYXlpbmcnKTtcbiAgICAgICAgdGhpcy5fY29yZS50cmlnZ2VyKCdwbGF5JywgbnVsbCwgJ3ZpZGVvJyk7XG5cbiAgICAgICAgaXRlbSA9IHRoaXMuX2NvcmUuaXRlbXModGhpcy5fY29yZS5yZWxhdGl2ZShpdGVtLmluZGV4KCkpKTtcblxuICAgICAgICB0aGlzLl9jb3JlLnJlc2V0KGl0ZW0uaW5kZXgoKSk7XG5cbiAgICAgICAgaWYgKHZpZGVvLnR5cGUgPT09ICd5b3V0dWJlJykge1xuICAgICAgICAgICAgaHRtbCA9ICc8aWZyYW1lIHdpZHRoPVwiJyArIHdpZHRoICsgJ1wiIGhlaWdodD1cIicgKyBoZWlnaHQgKyAnXCIgc3JjPVwiaHR0cDovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8nICtcbiAgICAgICAgICAgICAgICB2aWRlby5pZCArICc/YXV0b3BsYXk9MSZ2PScgKyB2aWRlby5pZCArICdcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+JztcbiAgICAgICAgfSBlbHNlIGlmICh2aWRlby50eXBlID09PSAndmltZW8nKSB7XG4gICAgICAgICAgICBodG1sID0gJzxpZnJhbWUgc3JjPVwiaHR0cDovL3BsYXllci52aW1lby5jb20vdmlkZW8vJyArIHZpZGVvLmlkICtcbiAgICAgICAgICAgICAgICAnP2F1dG9wbGF5PTFcIiB3aWR0aD1cIicgKyB3aWR0aCArICdcIiBoZWlnaHQ9XCInICsgaGVpZ2h0ICtcbiAgICAgICAgICAgICAgICAnXCIgZnJhbWVib3JkZXI9XCIwXCIgd2Via2l0YWxsb3dmdWxsc2NyZWVuIG1vemFsbG93ZnVsbHNjcmVlbiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+JztcbiAgICAgICAgfVxuXG4gICAgICAgICQoJzxkaXYgY2xhc3M9XCJvd2wtdmlkZW8tZnJhbWVcIj4nICsgaHRtbCArICc8L2Rpdj4nKS5pbnNlcnRBZnRlcihpdGVtLmZpbmQoJy5vd2wtdmlkZW8nKSk7XG5cbiAgICAgICAgdGhpcy5fcGxheWluZyA9IGl0ZW0uYWRkQ2xhc3MoJ293bC12aWRlby1wbGF5aW5nJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB3aGV0aGVyIGFuIHZpZGVvIGlzIGN1cnJlbnRseSBpbiBmdWxsIHNjcmVlbiBtb2RlIG9yIG5vdC5cbiAgICAgKiBAdG9kbyBCYWQgc3R5bGUgYmVjYXVzZSBsb29rcyBsaWtlIGEgcmVhZG9ubHkgbWV0aG9kIGJ1dCBjaGFuZ2VzIG1lbWJlcnMuXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIFZpZGVvLnByb3RvdHlwZS5pc0luRnVsbFNjcmVlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50IHx8IGRvY3VtZW50Lm1vekZ1bGxTY3JlZW5FbGVtZW50IHx8XG4gICAgICAgICAgICBkb2N1bWVudC53ZWJraXRGdWxsc2NyZWVuRWxlbWVudDtcblxuICAgICAgICByZXR1cm4gZWxlbWVudCAmJiAkKGVsZW1lbnQpLnBhcmVudCgpLmhhc0NsYXNzKCdvd2wtdmlkZW8tZnJhbWUnKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVzdHJveXMgdGhlIHBsdWdpbi5cbiAgICAgKi9cbiAgICBWaWRlby5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaGFuZGxlciwgcHJvcGVydHk7XG5cbiAgICAgICAgdGhpcy5fY29yZS4kZWxlbWVudC5vZmYoJ2NsaWNrLm93bC52aWRlbycpO1xuXG4gICAgICAgIGZvciAoaGFuZGxlciBpbiB0aGlzLl9oYW5kbGVycykge1xuICAgICAgICAgICAgdGhpcy5fY29yZS4kZWxlbWVudC5vZmYoaGFuZGxlciwgdGhpcy5faGFuZGxlcnNbaGFuZGxlcl0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAocHJvcGVydHkgaW4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpIHtcbiAgICAgICAgICAgIHR5cGVvZiB0aGlzW3Byb3BlcnR5XSAhPSAnZnVuY3Rpb24nICYmICh0aGlzW3Byb3BlcnR5XSA9IG51bGwpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICQuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IuUGx1Z2lucy5WaWRlbyA9IFZpZGVvO1xuXG59KSh3aW5kb3cuWmVwdG8gfHwgd2luZG93LmpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XG5cbi8qKlxuICogQW5pbWF0ZSBQbHVnaW5cbiAqIEB2ZXJzaW9uIDIuMC4wLWJldGEuM1xuICogQGF1dGhvciBCYXJ0b3N6IFdvamNpZWNob3dza2lcbiAqIEBsaWNlbnNlIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICovXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgYW5pbWF0ZSBwbHVnaW4uXG4gICAgICogQGNsYXNzIFRoZSBOYXZpZ2F0aW9uIFBsdWdpblxuICAgICAqIEBwYXJhbSB7T3dsfSBzY29wZSAtIFRoZSBPd2wgQ2Fyb3VzZWxcbiAgICAgKi9cbiAgICB2YXIgQW5pbWF0ZSA9IGZ1bmN0aW9uKHNjb3BlKSB7XG4gICAgICAgIHRoaXMuY29yZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmNvcmUub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBBbmltYXRlLkRlZmF1bHRzLCB0aGlzLmNvcmUub3B0aW9ucyk7XG4gICAgICAgIHRoaXMuc3dhcHBpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnByZXZpb3VzID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm5leHQgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IHtcbiAgICAgICAgICAgICdjaGFuZ2Uub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUubmFtZXNwYWNlICYmIGUucHJvcGVydHkubmFtZSA9PSAncG9zaXRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXMgPSB0aGlzLmNvcmUuY3VycmVudCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQgPSBlLnByb3BlcnR5LnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHRoaXMpLFxuICAgICAgICAgICAgJ2RyYWcub3dsLmNhcm91c2VsIGRyYWdnZWQub3dsLmNhcm91c2VsIHRyYW5zbGF0ZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUubmFtZXNwYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3dhcHBpbmcgPSBlLnR5cGUgPT0gJ3RyYW5zbGF0ZWQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHRoaXMpLFxuICAgICAgICAgICAgJ3RyYW5zbGF0ZS5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5uYW1lc3BhY2UgJiYgdGhpcy5zd2FwcGluZyAmJiAodGhpcy5jb3JlLm9wdGlvbnMuYW5pbWF0ZU91dCB8fCB0aGlzLmNvcmUub3B0aW9ucy5hbmltYXRlSW4pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3dhcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHRoaXMpXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jb3JlLiRlbGVtZW50Lm9uKHRoaXMuaGFuZGxlcnMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IG9wdGlvbnMuXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIEFuaW1hdGUuRGVmYXVsdHMgPSB7XG4gICAgICAgIGFuaW1hdGVPdXQ6IGZhbHNlLFxuICAgICAgICBhbmltYXRlSW46IGZhbHNlXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgdGhlIGFuaW1hdGlvbiBjbGFzc2VzIHdoZW5ldmVyIGFuIHRyYW5zbGF0aW9ucyBzdGFydHMuXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBBbmltYXRlLnByb3RvdHlwZS5zd2FwID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuY29yZS5zZXR0aW5ncy5pdGVtcyAhPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEkLnN1cHBvcnQuYW5pbWF0aW9uIHx8ICEkLnN1cHBvcnQudHJhbnNpdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb3JlLnNwZWVkKDApO1xuXG4gICAgICAgIHZhciBsZWZ0LFxuICAgICAgICAgICAgY2xlYXIgPSAkLnByb3h5KHRoaXMuY2xlYXIsIHRoaXMpLFxuICAgICAgICAgICAgcHJldmlvdXMgPSB0aGlzLmNvcmUuJHN0YWdlLmNoaWxkcmVuKCkuZXEodGhpcy5wcmV2aW91cyksXG4gICAgICAgICAgICBuZXh0ID0gdGhpcy5jb3JlLiRzdGFnZS5jaGlsZHJlbigpLmVxKHRoaXMubmV4dCksXG4gICAgICAgICAgICBpbmNvbWluZyA9IHRoaXMuY29yZS5zZXR0aW5ncy5hbmltYXRlSW4sXG4gICAgICAgICAgICBvdXRnb2luZyA9IHRoaXMuY29yZS5zZXR0aW5ncy5hbmltYXRlT3V0O1xuXG4gICAgICAgIGlmICh0aGlzLmNvcmUuY3VycmVudCgpID09PSB0aGlzLnByZXZpb3VzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3V0Z29pbmcpIHtcbiAgICAgICAgICAgIGxlZnQgPSB0aGlzLmNvcmUuY29vcmRpbmF0ZXModGhpcy5wcmV2aW91cykgLSB0aGlzLmNvcmUuY29vcmRpbmF0ZXModGhpcy5uZXh0KTtcbiAgICAgICAgICAgIHByZXZpb3VzLm9uZSgkLnN1cHBvcnQuYW5pbWF0aW9uLmVuZCwgY2xlYXIpXG4gICAgICAgICAgICAgICAgLmNzcyggeyAnbGVmdCc6IGxlZnQgKyAncHgnIH0gKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnYW5pbWF0ZWQgb3dsLWFuaW1hdGVkLW91dCcpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKG91dGdvaW5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmNvbWluZykge1xuICAgICAgICAgICAgbmV4dC5vbmUoJC5zdXBwb3J0LmFuaW1hdGlvbi5lbmQsIGNsZWFyKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnYW5pbWF0ZWQgb3dsLWFuaW1hdGVkLWluJylcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoaW5jb21pbmcpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEFuaW1hdGUucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAkKGUudGFyZ2V0KS5jc3MoIHsgJ2xlZnQnOiAnJyB9IClcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnYW5pbWF0ZWQgb3dsLWFuaW1hdGVkLW91dCBvd2wtYW5pbWF0ZWQtaW4nKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKHRoaXMuY29yZS5zZXR0aW5ncy5hbmltYXRlSW4pXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3ModGhpcy5jb3JlLnNldHRpbmdzLmFuaW1hdGVPdXQpO1xuICAgICAgICB0aGlzLmNvcmUub25UcmFuc2l0aW9uRW5kKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3lzIHRoZSBwbHVnaW4uXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIEFuaW1hdGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGhhbmRsZXIsIHByb3BlcnR5O1xuXG4gICAgICAgIGZvciAoaGFuZGxlciBpbiB0aGlzLmhhbmRsZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmNvcmUuJGVsZW1lbnQub2ZmKGhhbmRsZXIsIHRoaXMuaGFuZGxlcnNbaGFuZGxlcl0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAocHJvcGVydHkgaW4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpIHtcbiAgICAgICAgICAgIHR5cGVvZiB0aGlzW3Byb3BlcnR5XSAhPSAnZnVuY3Rpb24nICYmICh0aGlzW3Byb3BlcnR5XSA9IG51bGwpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICQuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IuUGx1Z2lucy5BbmltYXRlID0gQW5pbWF0ZTtcblxufSkod2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG4vKipcbiAqIEF1dG9wbGF5IFBsdWdpblxuICogQHZlcnNpb24gMi4wLjAtYmV0YS4zXG4gKiBAYXV0aG9yIEJhcnRvc3ogV29qY2llY2hvd3NraVxuICogQGF1dGhvciBBcnR1cyBLb2xhbm93c2tpXG4gKiBAbGljZW5zZSBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqL1xuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIGF1dG9wbGF5IHBsdWdpbi5cbiAgICAgKiBAY2xhc3MgVGhlIEF1dG9wbGF5IFBsdWdpblxuICAgICAqIEBwYXJhbSB7T3dsfSBzY29wZSAtIFRoZSBPd2wgQ2Fyb3VzZWxcbiAgICAgKi9cbiAgICB2YXIgQXV0b3BsYXkgPSBmdW5jdGlvbihjYXJvdXNlbCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVmZXJlbmNlIHRvIHRoZSBjb3JlLlxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEB0eXBlIHtPd2x9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9jb3JlID0gY2Fyb3VzZWw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBhdXRvcGxheSBpbnRlcnZhbC5cbiAgICAgICAgICogQHR5cGUge051bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW5kaWNhdGVzIHdoZW5ldmVyIHRoZSBhdXRvcGxheSBpcyBwYXVzZWQuXG4gICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fcGF1c2VkID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsbCBldmVudCBoYW5kbGVycy5cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faGFuZGxlcnMgPSB7XG4gICAgICAgICAgICAnY2hhbmdlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5uYW1lc3BhY2UgJiYgZS5wcm9wZXJ0eS5uYW1lID09PSAnc2V0dGluZ3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9wbGF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGhpcyksXG4gICAgICAgICAgICAnaW5pdGlhbGl6ZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b3BsYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGhpcyksXG4gICAgICAgICAgICAncGxheS5vd2wuYXV0b3BsYXknOiAkLnByb3h5KGZ1bmN0aW9uKGUsIHQsIHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5uYW1lc3BhY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5KHQsIHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHRoaXMpLFxuICAgICAgICAgICAgJ3N0b3Aub3dsLmF1dG9wbGF5JzogJC5wcm94eShmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUubmFtZXNwYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHRoaXMpLFxuICAgICAgICAgICAgJ21vdXNlb3Zlci5vd2wuYXV0b3BsYXknOiAkLnByb3h5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9wbGF5SG92ZXJQYXVzZSAmJiB0aGlzLl9jb3JlLmlzKCdyb3RhdGluZycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0aGlzKSxcbiAgICAgICAgICAgICdtb3VzZWxlYXZlLm93bC5hdXRvcGxheSc6ICQucHJveHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b3BsYXlIb3ZlclBhdXNlICYmIHRoaXMuX2NvcmUuaXMoJ3JvdGF0aW5nJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGhpcylcbiAgICAgICAgfTtcblxuICAgICAgICAvLyByZWdpc3RlciBldmVudCBoYW5kbGVyc1xuICAgICAgICB0aGlzLl9jb3JlLiRlbGVtZW50Lm9uKHRoaXMuX2hhbmRsZXJzKTtcblxuICAgICAgICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gICAgICAgIHRoaXMuX2NvcmUub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBBdXRvcGxheS5EZWZhdWx0cywgdGhpcy5fY29yZS5vcHRpb25zKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVmYXVsdCBvcHRpb25zLlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBBdXRvcGxheS5EZWZhdWx0cyA9IHtcbiAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDUwMDAsXG4gICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZTogZmFsc2UsXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyB0aGUgYXV0b3BsYXkuXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbdGltZW91dF0gLSBUaGUgaW50ZXJ2YWwgYmVmb3JlIHRoZSBuZXh0IGFuaW1hdGlvbiBzdGFydHMuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtzcGVlZF0gLSBUaGUgYW5pbWF0aW9uIHNwZWVkIGZvciB0aGUgYW5pbWF0aW9ucy5cbiAgICAgKi9cbiAgICBBdXRvcGxheS5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uKHRpbWVvdXQsIHNwZWVkKSB7XG4gICAgICAgIHRoaXMuX3BhdXNlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLl9jb3JlLmlzKCdyb3RhdGluZycpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jb3JlLmVudGVyKCdyb3RhdGluZycpO1xuXG4gICAgICAgIHRoaXMuX2ludGVydmFsID0gd2luZG93LnNldEludGVydmFsKCQucHJveHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcGF1c2VkIHx8IHRoaXMuX2NvcmUuaXMoJ2J1c3knKSB8fCB0aGlzLl9jb3JlLmlzKCdpbnRlcmFjdGluZycpIHx8IGRvY3VtZW50LmhpZGRlbikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2NvcmUubmV4dChzcGVlZCB8fCB0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9wbGF5U3BlZWQpO1xuICAgICAgICB9LCB0aGlzKSwgdGltZW91dCB8fCB0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9wbGF5VGltZW91dCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN0b3BzIHRoZSBhdXRvcGxheS5cbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgQXV0b3BsYXkucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jb3JlLmlzKCdyb3RhdGluZycpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuX2NvcmUubGVhdmUoJ3JvdGF0aW5nJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN0b3BzIHRoZSBhdXRvcGxheS5cbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgQXV0b3BsYXkucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghdGhpcy5fY29yZS5pcygncm90YXRpbmcnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcGF1c2VkID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVzdHJveXMgdGhlIHBsdWdpbi5cbiAgICAgKi9cbiAgICBBdXRvcGxheS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaGFuZGxlciwgcHJvcGVydHk7XG5cbiAgICAgICAgdGhpcy5zdG9wKCk7XG5cbiAgICAgICAgZm9yIChoYW5kbGVyIGluIHRoaXMuX2hhbmRsZXJzKSB7XG4gICAgICAgICAgICB0aGlzLl9jb3JlLiRlbGVtZW50Lm9mZihoYW5kbGVyLCB0aGlzLl9oYW5kbGVyc1toYW5kbGVyXSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChwcm9wZXJ0eSBpbiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuICAgICAgICAgICAgdHlwZW9mIHRoaXNbcHJvcGVydHldICE9ICdmdW5jdGlvbicgJiYgKHRoaXNbcHJvcGVydHldID0gbnVsbCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgJC5mbi5vd2xDYXJvdXNlbC5Db25zdHJ1Y3Rvci5QbHVnaW5zLmF1dG9wbGF5ID0gQXV0b3BsYXk7XG5cbn0pKHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcblxuLyoqXG4gKiBOYXZpZ2F0aW9uIFBsdWdpblxuICogQHZlcnNpb24gMi4wLjAtYmV0YS4zXG4gKiBAYXV0aG9yIEFydHVzIEtvbGFub3dza2lcbiAqIEBsaWNlbnNlIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICovXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIG5hdmlnYXRpb24gcGx1Z2luLlxuICAgICAqIEBjbGFzcyBUaGUgTmF2aWdhdGlvbiBQbHVnaW5cbiAgICAgKiBAcGFyYW0ge093bH0gY2Fyb3VzZWwgLSBUaGUgT3dsIENhcm91c2VsLlxuICAgICAqL1xuICAgIHZhciBOYXZpZ2F0aW9uID0gZnVuY3Rpb24oY2Fyb3VzZWwpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZmVyZW5jZSB0byB0aGUgY29yZS5cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAdHlwZSB7T3dsfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fY29yZSA9IGNhcm91c2VsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgcGx1Z2luIGlzIGluaXRpYWxpemVkIG9yIG5vdC5cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjdXJyZW50IHBhZ2luZyBpbmRleGVzLlxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEB0eXBlIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3BhZ2VzID0gW107XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsbCBET00gZWxlbWVudHMgb2YgdGhlIHVzZXIgaW50ZXJmYWNlLlxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9jb250cm9scyA9IHt9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYXJrdXAgZm9yIGFuIGluZGljYXRvci5cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAdHlwZSB7QXJyYXkuPFN0cmluZz59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl90ZW1wbGF0ZXMgPSBbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNhcm91c2VsIGVsZW1lbnQuXG4gICAgICAgICAqIEB0eXBlIHtqUXVlcnl9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLiRlbGVtZW50ID0gdGhpcy5fY29yZS4kZWxlbWVudDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogT3ZlcnJpZGRlbiBtZXRob2RzIG9mIHRoZSBjYXJvdXNlbC5cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fb3ZlcnJpZGVzID0ge1xuICAgICAgICAgICAgbmV4dDogdGhpcy5fY29yZS5uZXh0LFxuICAgICAgICAgICAgcHJldjogdGhpcy5fY29yZS5wcmV2LFxuICAgICAgICAgICAgdG86IHRoaXMuX2NvcmUudG9cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIGV2ZW50IGhhbmRsZXJzLlxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9oYW5kbGVycyA9IHtcbiAgICAgICAgICAgICdwcmVwYXJlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5uYW1lc3BhY2UgJiYgdGhpcy5fY29yZS5zZXR0aW5ncy5kb3RzRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90ZW1wbGF0ZXMucHVzaCgnPGRpdiBjbGFzcz1cIicgKyB0aGlzLl9jb3JlLnNldHRpbmdzLmRvdENsYXNzICsgJ1wiPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJChlLmNvbnRlbnQpLmZpbmQoJ1tkYXRhLWRvdF0nKS5hZGRCYWNrKCdbZGF0YS1kb3RdJykuYXR0cignZGF0YS1kb3QnKSArICc8L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0aGlzKSxcbiAgICAgICAgICAgICdhZGRlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5uYW1lc3BhY2UgJiYgdGhpcy5fY29yZS5zZXR0aW5ncy5kb3RzRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90ZW1wbGF0ZXMuc3BsaWNlKGUucG9zaXRpb24sIDAsIHRoaXMuX3RlbXBsYXRlcy5wb3AoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGhpcyksXG4gICAgICAgICAgICAncmVtb3ZlLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9jb3JlLnNldHRpbmdzLmRvdHNEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RlbXBsYXRlcy5zcGxpY2UoZS5wb3NpdGlvbiwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGhpcyksXG4gICAgICAgICAgICAnY2hhbmdlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5uYW1lc3BhY2UgJiYgZS5wcm9wZXJ0eS5uYW1lID09ICdwb3NpdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGhpcyksXG4gICAgICAgICAgICAnaW5pdGlhbGl6ZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUubmFtZXNwYWNlICYmICF0aGlzLl9pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb3JlLnRyaWdnZXIoJ2luaXRpYWxpemUnLCBudWxsLCAnbmF2aWdhdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29yZS50cmlnZ2VyKCdpbml0aWFsaXplZCcsIG51bGwsICduYXZpZ2F0aW9uJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGhpcyksXG4gICAgICAgICAgICAncmVmcmVzaGVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb3JlLnRyaWdnZXIoJ3JlZnJlc2gnLCBudWxsLCAnbmF2aWdhdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29yZS50cmlnZ2VyKCdyZWZyZXNoZWQnLCBudWxsLCAnbmF2aWdhdGlvbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHRoaXMpXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuICAgICAgICB0aGlzLl9jb3JlLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgTmF2aWdhdGlvbi5EZWZhdWx0cywgdGhpcy5fY29yZS5vcHRpb25zKTtcblxuICAgICAgICAvLyByZWdpc3RlciBldmVudCBoYW5kbGVyc1xuICAgICAgICB0aGlzLiRlbGVtZW50Lm9uKHRoaXMuX2hhbmRsZXJzKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVmYXVsdCBvcHRpb25zLlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAdG9kbyBSZW5hbWUgYHNsaWRlQnlgIHRvIGBuYXZCeWBcbiAgICAgKi9cbiAgICBOYXZpZ2F0aW9uLkRlZmF1bHRzID0ge1xuICAgICAgICBuYXY6IGZhbHNlLFxuICAgICAgICBuYXZUZXh0OiBbICdwcmV2JywgJ25leHQnIF0sXG4gICAgICAgIG5hdlNwZWVkOiBmYWxzZSxcbiAgICAgICAgbmF2RWxlbWVudDogJ2RpdicsXG4gICAgICAgIG5hdkNvbnRhaW5lcjogZmFsc2UsXG4gICAgICAgIG5hdkNvbnRhaW5lckNsYXNzOiAnb3dsLW5hdicsXG4gICAgICAgIG5hdkNsYXNzOiBbICdvd2wtcHJldicsICdvd2wtbmV4dCcgXSxcbiAgICAgICAgc2xpZGVCeTogMSxcbiAgICAgICAgZG90Q2xhc3M6ICdvd2wtZG90JyxcbiAgICAgICAgZG90c0NsYXNzOiAnb3dsLWRvdHMnLFxuICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICBkb3RzRWFjaDogZmFsc2UsXG4gICAgICAgIGRvdHNEYXRhOiBmYWxzZSxcbiAgICAgICAgZG90c1NwZWVkOiBmYWxzZSxcbiAgICAgICAgZG90c0NvbnRhaW5lcjogZmFsc2VcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIGxheW91dCBvZiB0aGUgcGx1Z2luIGFuZCBleHRlbmRzIHRoZSBjYXJvdXNlbC5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgTmF2aWdhdGlvbi5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgb3ZlcnJpZGUsXG4gICAgICAgICAgICBzZXR0aW5ncyA9IHRoaXMuX2NvcmUuc2V0dGluZ3M7XG5cbiAgICAgICAgLy8gY3JlYXRlIERPTSBzdHJ1Y3R1cmUgZm9yIHJlbGF0aXZlIG5hdmlnYXRpb25cbiAgICAgICAgdGhpcy5fY29udHJvbHMuJHJlbGF0aXZlID0gKHNldHRpbmdzLm5hdkNvbnRhaW5lciA/ICQoc2V0dGluZ3MubmF2Q29udGFpbmVyKVxuICAgICAgICAgICAgOiAkKCc8ZGl2PicpLmFkZENsYXNzKHNldHRpbmdzLm5hdkNvbnRhaW5lckNsYXNzKS5hcHBlbmRUbyh0aGlzLiRlbGVtZW50KSkuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cbiAgICAgICAgdGhpcy5fY29udHJvbHMuJHByZXZpb3VzID0gJCgnPCcgKyBzZXR0aW5ncy5uYXZFbGVtZW50ICsgJz4nKVxuICAgICAgICAgICAgLmFkZENsYXNzKHNldHRpbmdzLm5hdkNsYXNzWzBdKVxuICAgICAgICAgICAgLmh0bWwoc2V0dGluZ3MubmF2VGV4dFswXSlcbiAgICAgICAgICAgIC5wcmVwZW5kVG8odGhpcy5fY29udHJvbHMuJHJlbGF0aXZlKVxuICAgICAgICAgICAgLm9uKCdjbGljaycsICQucHJveHkoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJldihzZXR0aW5ncy5uYXZTcGVlZCk7XG4gICAgICAgICAgICB9LCB0aGlzKSk7XG4gICAgICAgIHRoaXMuX2NvbnRyb2xzLiRuZXh0ID0gJCgnPCcgKyBzZXR0aW5ncy5uYXZFbGVtZW50ICsgJz4nKVxuICAgICAgICAgICAgLmFkZENsYXNzKHNldHRpbmdzLm5hdkNsYXNzWzFdKVxuICAgICAgICAgICAgLmh0bWwoc2V0dGluZ3MubmF2VGV4dFsxXSlcbiAgICAgICAgICAgIC5hcHBlbmRUbyh0aGlzLl9jb250cm9scy4kcmVsYXRpdmUpXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgJC5wcm94eShmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KHNldHRpbmdzLm5hdlNwZWVkKTtcbiAgICAgICAgICAgIH0sIHRoaXMpKTtcblxuICAgICAgICAvLyBjcmVhdGUgRE9NIHN0cnVjdHVyZSBmb3IgYWJzb2x1dGUgbmF2aWdhdGlvblxuICAgICAgICBpZiAoIXNldHRpbmdzLmRvdHNEYXRhKSB7XG4gICAgICAgICAgICB0aGlzLl90ZW1wbGF0ZXMgPSBbICQoJzxkaXY+JylcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3Moc2V0dGluZ3MuZG90Q2xhc3MpXG4gICAgICAgICAgICAgICAgLmFwcGVuZCgkKCc8c3Bhbj4nKSlcbiAgICAgICAgICAgICAgICAucHJvcCgnb3V0ZXJIVE1MJykgXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NvbnRyb2xzLiRhYnNvbHV0ZSA9IChzZXR0aW5ncy5kb3RzQ29udGFpbmVyID8gJChzZXR0aW5ncy5kb3RzQ29udGFpbmVyKVxuICAgICAgICAgICAgOiAkKCc8ZGl2PicpLmFkZENsYXNzKHNldHRpbmdzLmRvdHNDbGFzcykuYXBwZW5kVG8odGhpcy4kZWxlbWVudCkpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuXG4gICAgICAgIHRoaXMuX2NvbnRyb2xzLiRhYnNvbHV0ZS5vbignY2xpY2snLCAnZGl2JywgJC5wcm94eShmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSAkKGUudGFyZ2V0KS5wYXJlbnQoKS5pcyh0aGlzLl9jb250cm9scy4kYWJzb2x1dGUpXG4gICAgICAgICAgICAgICAgPyAkKGUudGFyZ2V0KS5pbmRleCgpIDogJChlLnRhcmdldCkucGFyZW50KCkuaW5kZXgoKTtcblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB0aGlzLnRvKGluZGV4LCBzZXR0aW5ncy5kb3RzU3BlZWQpO1xuICAgICAgICB9LCB0aGlzKSk7XG5cbiAgICAgICAgLy8gb3ZlcnJpZGUgcHVibGljIG1ldGhvZHMgb2YgdGhlIGNhcm91c2VsXG4gICAgICAgIGZvciAob3ZlcnJpZGUgaW4gdGhpcy5fb3ZlcnJpZGVzKSB7XG4gICAgICAgICAgICB0aGlzLl9jb3JlW292ZXJyaWRlXSA9ICQucHJveHkodGhpc1tvdmVycmlkZV0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3lzIHRoZSBwbHVnaW4uXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIE5hdmlnYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGhhbmRsZXIsIGNvbnRyb2wsIHByb3BlcnR5LCBvdmVycmlkZTtcblxuICAgICAgICBmb3IgKGhhbmRsZXIgaW4gdGhpcy5faGFuZGxlcnMpIHtcbiAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQub2ZmKGhhbmRsZXIsIHRoaXMuX2hhbmRsZXJzW2hhbmRsZXJdKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnRyb2wgaW4gdGhpcy5fY29udHJvbHMpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRyb2xzW2NvbnRyb2xdLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAob3ZlcnJpZGUgaW4gdGhpcy5vdmVyaWRlcykge1xuICAgICAgICAgICAgdGhpcy5fY29yZVtvdmVycmlkZV0gPSB0aGlzLl9vdmVycmlkZXNbb3ZlcnJpZGVdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAocHJvcGVydHkgaW4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpIHtcbiAgICAgICAgICAgIHR5cGVvZiB0aGlzW3Byb3BlcnR5XSAhPSAnZnVuY3Rpb24nICYmICh0aGlzW3Byb3BlcnR5XSA9IG51bGwpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGludGVybmFsIHN0YXRlLlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBOYXZpZ2F0aW9uLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGksIGosIGssXG4gICAgICAgICAgICBsb3dlciA9IHRoaXMuX2NvcmUuY2xvbmVzKCkubGVuZ3RoIC8gMixcbiAgICAgICAgICAgIHVwcGVyID0gbG93ZXIgKyB0aGlzLl9jb3JlLml0ZW1zKCkubGVuZ3RoLFxuICAgICAgICAgICAgbWF4aW11bSA9IHRoaXMuX2NvcmUubWF4aW11bSh0cnVlKSxcbiAgICAgICAgICAgIHNldHRpbmdzID0gdGhpcy5fY29yZS5zZXR0aW5ncyxcbiAgICAgICAgICAgIHNpemUgPSBzZXR0aW5ncy5jZW50ZXIgfHwgc2V0dGluZ3MuYXV0b1dpZHRoIHx8IHNldHRpbmdzLmRvdHNEYXRhXG4gICAgICAgICAgICAgICAgPyAxIDogc2V0dGluZ3MuZG90c0VhY2ggfHwgc2V0dGluZ3MuaXRlbXM7XG5cbiAgICAgICAgaWYgKHNldHRpbmdzLnNsaWRlQnkgIT09ICdwYWdlJykge1xuICAgICAgICAgICAgc2V0dGluZ3Muc2xpZGVCeSA9IE1hdGgubWluKHNldHRpbmdzLnNsaWRlQnksIHNldHRpbmdzLml0ZW1zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZXR0aW5ncy5kb3RzIHx8IHNldHRpbmdzLnNsaWRlQnkgPT0gJ3BhZ2UnKSB7XG4gICAgICAgICAgICB0aGlzLl9wYWdlcyA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSBsb3dlciwgaiA9IDAsIGsgPSAwOyBpIDwgdXBwZXI7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChqID49IHNpemUgfHwgaiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYWdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBNYXRoLm1pbihtYXhpbXVtLCBpIC0gbG93ZXIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBpIC0gbG93ZXIgKyBzaXplIC0gMVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGgubWluKG1heGltdW0sIGkgLSBsb3dlcikgPT09IG1heGltdW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGogPSAwLCArK2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGogKz0gdGhpcy5fY29yZS5tZXJnZXJzKHRoaXMuX2NvcmUucmVsYXRpdmUoaSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERyYXdzIHRoZSB1c2VyIGludGVyZmFjZS5cbiAgICAgKiBAdG9kbyBUaGUgb3B0aW9uIGBkb3RzRGF0YWAgd29udCB3b3JrLlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBOYXZpZ2F0aW9uLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkaWZmZXJlbmNlLFxuICAgICAgICAgICAgc2V0dGluZ3MgPSB0aGlzLl9jb3JlLnNldHRpbmdzLFxuICAgICAgICAgICAgZGlzYWJsZWQgPSB0aGlzLl9jb3JlLml0ZW1zKCkubGVuZ3RoIDw9IHNldHRpbmdzLml0ZW1zLFxuICAgICAgICAgICAgaW5kZXggPSB0aGlzLl9jb3JlLnJlbGF0aXZlKHRoaXMuX2NvcmUuY3VycmVudCgpKSxcbiAgICAgICAgICAgIGxvb3AgPSBzZXR0aW5ncy5sb29wIHx8IHNldHRpbmdzLnJld2luZDtcblxuICAgICAgICB0aGlzLl9jb250cm9scy4kcmVsYXRpdmUudG9nZ2xlQ2xhc3MoJ2Rpc2FibGVkJywgIXNldHRpbmdzLm5hdiB8fCBkaXNhYmxlZCk7XG5cbiAgICAgICAgaWYgKHNldHRpbmdzLm5hdikge1xuICAgICAgICAgICAgdGhpcy5fY29udHJvbHMuJHByZXZpb3VzLnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsICFsb29wICYmIGluZGV4IDw9IHRoaXMuX2NvcmUubWluaW11bSh0cnVlKSk7XG4gICAgICAgICAgICB0aGlzLl9jb250cm9scy4kbmV4dC50b2dnbGVDbGFzcygnZGlzYWJsZWQnLCAhbG9vcCAmJiBpbmRleCA+PSB0aGlzLl9jb3JlLm1heGltdW0odHJ1ZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY29udHJvbHMuJGFic29sdXRlLnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsICFzZXR0aW5ncy5kb3RzIHx8IGRpc2FibGVkKTtcblxuICAgICAgICBpZiAoc2V0dGluZ3MuZG90cykge1xuICAgICAgICAgICAgZGlmZmVyZW5jZSA9IHRoaXMuX3BhZ2VzLmxlbmd0aCAtIHRoaXMuX2NvbnRyb2xzLiRhYnNvbHV0ZS5jaGlsZHJlbigpLmxlbmd0aDtcblxuICAgICAgICAgICAgaWYgKHNldHRpbmdzLmRvdHNEYXRhICYmIGRpZmZlcmVuY2UgIT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb250cm9scy4kYWJzb2x1dGUuaHRtbCh0aGlzLl90ZW1wbGF0ZXMuam9pbignJykpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaWZmZXJlbmNlID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRyb2xzLiRhYnNvbHV0ZS5hcHBlbmQobmV3IEFycmF5KGRpZmZlcmVuY2UgKyAxKS5qb2luKHRoaXMuX3RlbXBsYXRlc1swXSkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaWZmZXJlbmNlIDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRyb2xzLiRhYnNvbHV0ZS5jaGlsZHJlbigpLnNsaWNlKGRpZmZlcmVuY2UpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9jb250cm9scy4kYWJzb2x1dGUuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRyb2xzLiRhYnNvbHV0ZS5jaGlsZHJlbigpLmVxKCQuaW5BcnJheSh0aGlzLmN1cnJlbnQoKSwgdGhpcy5fcGFnZXMpKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRXh0ZW5kcyBldmVudCBkYXRhLlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIFRoZSBldmVudCBvYmplY3Qgd2hpY2ggZ2V0cyB0aHJvd24uXG4gICAgICovXG4gICAgTmF2aWdhdGlvbi5wcm90b3R5cGUub25UcmlnZ2VyID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgdmFyIHNldHRpbmdzID0gdGhpcy5fY29yZS5zZXR0aW5ncztcblxuICAgICAgICBldmVudC5wYWdlID0ge1xuICAgICAgICAgICAgaW5kZXg6ICQuaW5BcnJheSh0aGlzLmN1cnJlbnQoKSwgdGhpcy5fcGFnZXMpLFxuICAgICAgICAgICAgY291bnQ6IHRoaXMuX3BhZ2VzLmxlbmd0aCxcbiAgICAgICAgICAgIHNpemU6IHNldHRpbmdzICYmIChzZXR0aW5ncy5jZW50ZXIgfHwgc2V0dGluZ3MuYXV0b1dpZHRoIHx8IHNldHRpbmdzLmRvdHNEYXRhXG4gICAgICAgICAgICAgICAgPyAxIDogc2V0dGluZ3MuZG90c0VhY2ggfHwgc2V0dGluZ3MuaXRlbXMpXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGN1cnJlbnQgcGFnZSBwb3NpdGlvbiBvZiB0aGUgY2Fyb3VzZWwuXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgTmF2aWdhdGlvbi5wcm90b3R5cGUuY3VycmVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY3VycmVudCA9IHRoaXMuX2NvcmUucmVsYXRpdmUodGhpcy5fY29yZS5jdXJyZW50KCkpO1xuICAgICAgICByZXR1cm4gJC5ncmVwKHRoaXMuX3BhZ2VzLCAkLnByb3h5KGZ1bmN0aW9uKHBhZ2UsIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gcGFnZS5zdGFydCA8PSBjdXJyZW50ICYmIHBhZ2UuZW5kID49IGN1cnJlbnQ7XG4gICAgICAgIH0sIHRoaXMpKS5wb3AoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY3VycmVudCBzdWNjZXNvci9wcmVkZWNlc3NvciBwb3NpdGlvbi5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBOYXZpZ2F0aW9uLnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKHN1Y2Nlc3Nvcikge1xuICAgICAgICB2YXIgcG9zaXRpb24sIGxlbmd0aCxcbiAgICAgICAgICAgIHNldHRpbmdzID0gdGhpcy5fY29yZS5zZXR0aW5ncztcblxuICAgICAgICBpZiAoc2V0dGluZ3Muc2xpZGVCeSA9PSAncGFnZScpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gJC5pbkFycmF5KHRoaXMuY3VycmVudCgpLCB0aGlzLl9wYWdlcyk7XG4gICAgICAgICAgICBsZW5ndGggPSB0aGlzLl9wYWdlcy5sZW5ndGg7XG4gICAgICAgICAgICBzdWNjZXNzb3IgPyArK3Bvc2l0aW9uIDogLS1wb3NpdGlvbjtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5fcGFnZXNbKChwb3NpdGlvbiAlIGxlbmd0aCkgKyBsZW5ndGgpICUgbGVuZ3RoXS5zdGFydDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5fY29yZS5yZWxhdGl2ZSh0aGlzLl9jb3JlLmN1cnJlbnQoKSk7XG4gICAgICAgICAgICBsZW5ndGggPSB0aGlzLl9jb3JlLml0ZW1zKCkubGVuZ3RoO1xuICAgICAgICAgICAgc3VjY2Vzc29yID8gcG9zaXRpb24gKz0gc2V0dGluZ3Muc2xpZGVCeSA6IHBvc2l0aW9uIC09IHNldHRpbmdzLnNsaWRlQnk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNsaWRlcyB0byB0aGUgbmV4dCBpdGVtIG9yIHBhZ2UuXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWQ9ZmFsc2VdIC0gVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNpdGlvbi5cbiAgICAgKi9cbiAgICBOYXZpZ2F0aW9uLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oc3BlZWQpIHtcbiAgICAgICAgJC5wcm94eSh0aGlzLl9vdmVycmlkZXMudG8sIHRoaXMuX2NvcmUpKHRoaXMuZ2V0UG9zaXRpb24odHJ1ZSksIHNwZWVkKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2xpZGVzIHRvIHRoZSBwcmV2aW91cyBpdGVtIG9yIHBhZ2UuXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWQ9ZmFsc2VdIC0gVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNpdGlvbi5cbiAgICAgKi9cbiAgICBOYXZpZ2F0aW9uLnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24oc3BlZWQpIHtcbiAgICAgICAgJC5wcm94eSh0aGlzLl9vdmVycmlkZXMudG8sIHRoaXMuX2NvcmUpKHRoaXMuZ2V0UG9zaXRpb24oZmFsc2UpLCBzcGVlZCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNsaWRlcyB0byB0aGUgc3BlY2lmaWVkIGl0ZW0gb3IgcGFnZS5cbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gVGhlIHBvc2l0aW9uIG9mIHRoZSBpdGVtIG9yIHBhZ2UuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtzcGVlZF0gLSBUaGUgdGltZSBpbiBtaWxsaXNlY29uZHMgZm9yIHRoZSB0cmFuc2l0aW9uLlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3N0YW5kYXJkPWZhbHNlXSAtIFdoZXRoZXIgdG8gdXNlIHRoZSBzdGFuZGFyZCBiZWhhdmlvdXIgb3Igbm90LlxuICAgICAqL1xuICAgIE5hdmlnYXRpb24ucHJvdG90eXBlLnRvID0gZnVuY3Rpb24ocG9zaXRpb24sIHNwZWVkLCBzdGFuZGFyZCkge1xuICAgICAgICB2YXIgbGVuZ3RoO1xuXG4gICAgICAgIGlmICghc3RhbmRhcmQpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IHRoaXMuX3BhZ2VzLmxlbmd0aDtcbiAgICAgICAgICAgICQucHJveHkodGhpcy5fb3ZlcnJpZGVzLnRvLCB0aGlzLl9jb3JlKSh0aGlzLl9wYWdlc1soKHBvc2l0aW9uICUgbGVuZ3RoKSArIGxlbmd0aCkgJSBsZW5ndGhdLnN0YXJ0LCBzcGVlZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkLnByb3h5KHRoaXMuX292ZXJyaWRlcy50bywgdGhpcy5fY29yZSkocG9zaXRpb24sIHNwZWVkKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAkLmZuLm93bENhcm91c2VsLkNvbnN0cnVjdG9yLlBsdWdpbnMuTmF2aWdhdGlvbiA9IE5hdmlnYXRpb247XG5cbn0pKHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcblxuLyoqXG4gKiBIYXNoIFBsdWdpblxuICogQHZlcnNpb24gMi4wLjAtYmV0YS4zXG4gKiBAYXV0aG9yIEFydHVzIEtvbGFub3dza2lcbiAqIEBsaWNlbnNlIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICovXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIGhhc2ggcGx1Z2luLlxuICAgICAqIEBjbGFzcyBUaGUgSGFzaCBQbHVnaW5cbiAgICAgKiBAcGFyYW0ge093bH0gY2Fyb3VzZWwgLSBUaGUgT3dsIENhcm91c2VsXG4gICAgICovXG4gICAgdmFyIEhhc2ggPSBmdW5jdGlvbihjYXJvdXNlbCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVmZXJlbmNlIHRvIHRoZSBjb3JlLlxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEB0eXBlIHtPd2x9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9jb3JlID0gY2Fyb3VzZWw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhhc2ggaW5kZXggZm9yIHRoZSBpdGVtcy5cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faGFzaGVzID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjYXJvdXNlbCBlbGVtZW50LlxuICAgICAgICAgKiBAdHlwZSB7alF1ZXJ5fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy4kZWxlbWVudCA9IHRoaXMuX2NvcmUuJGVsZW1lbnQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsbCBldmVudCBoYW5kbGVycy5cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faGFuZGxlcnMgPSB7XG4gICAgICAgICAgICAnaW5pdGlhbGl6ZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2NvcmUuc2V0dGluZ3Muc3RhcnRQb3NpdGlvbiA9PT0gJ1VSTEhhc2gnKSB7XG4gICAgICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCdoYXNoY2hhbmdlLm93bC5uYXZpZ2F0aW9uJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGhpcyksXG4gICAgICAgICAgICAncHJlcGFyZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUubmFtZXNwYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYXNoID0gJChlLmNvbnRlbnQpLmZpbmQoJ1tkYXRhLWhhc2hdJykuYWRkQmFjaygnW2RhdGEtaGFzaF0nKS5hdHRyKCdkYXRhLWhhc2gnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhc2hlc1toYXNoXSA9IGUuY29udGVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0aGlzKSxcbiAgICAgICAgICAgICdjaGFuZ2VkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLm5hbWVzcGFjZSAmJiBlLnByb3BlcnR5Lm5hbWUgPT09ICdwb3NpdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzLl9jb3JlLml0ZW1zKHRoaXMuX2NvcmUucmVsYXRpdmUodGhpcy5fY29yZS5jdXJyZW50KCkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc2ggPSAkLm1hcCh0aGlzLl9oYXNoZXMsIGZ1bmN0aW9uKGl0ZW0sIGhhc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbSA9PT0gY3VycmVudCA/IGhhc2ggOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkuam9pbigpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFzaCB8fCB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKSA9PT0gaGFzaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHRoaXMpXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuICAgICAgICB0aGlzLl9jb3JlLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgSGFzaC5EZWZhdWx0cywgdGhpcy5fY29yZS5vcHRpb25zKTtcblxuICAgICAgICAvLyByZWdpc3RlciB0aGUgZXZlbnQgaGFuZGxlcnNcbiAgICAgICAgdGhpcy4kZWxlbWVudC5vbih0aGlzLl9oYW5kbGVycyk7XG5cbiAgICAgICAgLy8gcmVnaXN0ZXIgZXZlbnQgbGlzdGVuZXIgZm9yIGhhc2ggbmF2aWdhdGlvblxuICAgICAgICAkKHdpbmRvdykub24oJ2hhc2hjaGFuZ2Uub3dsLm5hdmlnYXRpb24nLCAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpLFxuICAgICAgICAgICAgICAgIGl0ZW1zID0gdGhpcy5fY29yZS4kc3RhZ2UuY2hpbGRyZW4oKSxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMuX2hhc2hlc1toYXNoXSAmJiBpdGVtcy5pbmRleCh0aGlzLl9oYXNoZXNbaGFzaF0pO1xuXG4gICAgICAgICAgICBpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCB8fCBwb3NpdGlvbiA9PT0gdGhpcy5fY29yZS5jdXJyZW50KCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2NvcmUudG8odGhpcy5fY29yZS5yZWxhdGl2ZShwb3NpdGlvbiksIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgfSwgdGhpcykpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IG9wdGlvbnMuXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIEhhc2guRGVmYXVsdHMgPSB7XG4gICAgICAgIFVSTGhhc2hMaXN0ZW5lcjogZmFsc2VcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVzdHJveXMgdGhlIHBsdWdpbi5cbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgSGFzaC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaGFuZGxlciwgcHJvcGVydHk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9mZignaGFzaGNoYW5nZS5vd2wubmF2aWdhdGlvbicpO1xuXG4gICAgICAgIGZvciAoaGFuZGxlciBpbiB0aGlzLl9oYW5kbGVycykge1xuICAgICAgICAgICAgdGhpcy5fY29yZS4kZWxlbWVudC5vZmYoaGFuZGxlciwgdGhpcy5faGFuZGxlcnNbaGFuZGxlcl0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAocHJvcGVydHkgaW4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpIHtcbiAgICAgICAgICAgIHR5cGVvZiB0aGlzW3Byb3BlcnR5XSAhPSAnZnVuY3Rpb24nICYmICh0aGlzW3Byb3BlcnR5XSA9IG51bGwpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICQuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IuUGx1Z2lucy5IYXNoID0gSGFzaDtcblxufSkod2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG4vKipcbiAqIFN1cHBvcnQgUGx1Z2luXG4gKlxuICogQHZlcnNpb24gMi4wLjAtYmV0YS4zXG4gKiBAYXV0aG9yIFZpdmlkIFBsYW5ldCBTb2Z0d2FyZSBHbWJIXG4gKiBAYXV0aG9yIEFydHVzIEtvbGFub3dza2lcbiAqIEBsaWNlbnNlIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICovXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuXG4gICAgdmFyIHN0eWxlID0gJCgnPHN1cHBvcnQ+JykuZ2V0KDApLnN0eWxlLFxuICAgICAgICBwcmVmaXhlcyA9ICdXZWJraXQgTW96IE8gbXMnLnNwbGl0KCcgJyksXG4gICAgICAgIGV2ZW50cyA9IHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgV2Via2l0VHJhbnNpdGlvbjogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgICAgICAgICAgICAgICAgICBNb3pUcmFuc2l0aW9uOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgICAgICAgICAgICAgICAgIE9UcmFuc2l0aW9uOiAnb1RyYW5zaXRpb25FbmQnLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNpdGlvbmVuZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAgICAgICAgZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIFdlYmtpdEFuaW1hdGlvbjogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsXG4gICAgICAgICAgICAgICAgICAgIE1vekFuaW1hdGlvbjogJ2FuaW1hdGlvbmVuZCcsXG4gICAgICAgICAgICAgICAgICAgIE9BbmltYXRpb246ICdvQW5pbWF0aW9uRW5kJyxcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiAnYW5pbWF0aW9uZW5kJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdGVzdHMgPSB7XG4gICAgICAgICAgICBjc3N0cmFuc2Zvcm1zOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gISF0ZXN0KCd0cmFuc2Zvcm0nKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjc3N0cmFuc2Zvcm1zM2Q6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhIXRlc3QoJ3BlcnNwZWN0aXZlJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3NzdHJhbnNpdGlvbnM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhIXRlc3QoJ3RyYW5zaXRpb24nKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjc3NhbmltYXRpb25zOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gISF0ZXN0KCdhbmltYXRpb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIGZ1bmN0aW9uIHRlc3QocHJvcGVydHksIHByZWZpeGVkKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBmYWxzZSxcbiAgICAgICAgICAgIHVwcGVyID0gcHJvcGVydHkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wZXJ0eS5zbGljZSgxKTtcblxuICAgICAgICAkLmVhY2goKHByb3BlcnR5ICsgJyAnICsgcHJlZml4ZXMuam9pbih1cHBlciArICcgJykgKyB1cHBlcikuc3BsaXQoJyAnKSwgZnVuY3Rpb24oaSwgcHJvcGVydHkpIHtcbiAgICAgICAgICAgIGlmIChzdHlsZVtwcm9wZXJ0eV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHByZWZpeGVkID8gcHJvcGVydHkgOiB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmVmaXhlZChwcm9wZXJ0eSkge1xuICAgICAgICByZXR1cm4gdGVzdChwcm9wZXJ0eSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRlc3RzLmNzc3RyYW5zaXRpb25zKCkpIHtcbiAgICAgICAgLyoganNoaW50IC1XMDUzICovXG4gICAgICAgICQuc3VwcG9ydC50cmFuc2l0aW9uID0gbmV3IFN0cmluZyhwcmVmaXhlZCgndHJhbnNpdGlvbicpKVxuICAgICAgICAkLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQgPSBldmVudHMudHJhbnNpdGlvbi5lbmRbICQuc3VwcG9ydC50cmFuc2l0aW9uIF07XG4gICAgfVxuXG4gICAgaWYgKHRlc3RzLmNzc2FuaW1hdGlvbnMoKSkge1xuICAgICAgICAvKiBqc2hpbnQgLVcwNTMgKi9cbiAgICAgICAgJC5zdXBwb3J0LmFuaW1hdGlvbiA9IG5ldyBTdHJpbmcocHJlZml4ZWQoJ2FuaW1hdGlvbicpKVxuICAgICAgICAkLnN1cHBvcnQuYW5pbWF0aW9uLmVuZCA9IGV2ZW50cy5hbmltYXRpb24uZW5kWyAkLnN1cHBvcnQuYW5pbWF0aW9uIF07XG4gICAgfVxuXG4gICAgaWYgKHRlc3RzLmNzc3RyYW5zZm9ybXMoKSkge1xuICAgICAgICAvKiBqc2hpbnQgLVcwNTMgKi9cbiAgICAgICAgJC5zdXBwb3J0LnRyYW5zZm9ybSA9IG5ldyBTdHJpbmcocHJlZml4ZWQoJ3RyYW5zZm9ybScpKTtcbiAgICAgICAgJC5zdXBwb3J0LnRyYW5zZm9ybTNkID0gdGVzdHMuY3NzdHJhbnNmb3JtczNkKCk7XG4gICAgfVxuXG59KSh3aW5kb3cuWmVwdG8gfHwgd2luZG93LmpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJnbG9iYWwiLCJqUXVlcnkiLCJ3aW5kb3ciLCJqUXVlcnlCcmlkZ2V0IiwiRmxpY2tpdHkiLCJzZXRKUXVlcnkiLCJDb29raWVzIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJMYXp5TG9hZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIklOU1BJUk8iLCIkd2luZG93IiwiJHRoZW1lX2NvbG9yIiwiJGJvZHkiLCIkYm9keUlubmVyIiwiJHNlY3Rpb24iLCIkdG9wYmFyIiwiJGhlYWRlciIsIiRoZWFkZXJDdXJyZW50Q2xhc3NlcyIsImF0dHIiLCJoZWFkZXJMb2dvIiwiJG1haW5NZW51IiwiJG1haW5NZW51VHJpZ2dlckJ0biIsIiRzbGlkZXIiLCIkaW5zcGlyb1NsaWRlciIsIiRjYXJvdXNlbCIsIiRncmlkTGF5b3V0IiwiJGdyaWRGaWx0ZXIiLCJ3aW5kb3dXaWR0aCIsIndpZHRoIiwibGVuZ3RoIiwiJGhlYWRlck9mZnNldFRvcCIsIm9mZnNldCIsInRvcCIsIkV2ZW50cyIsImJyb3dzZXIiLCJpc01vYmlsZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1hdGNoIiwiU2V0dGluZ3MiLCJzdWJtZW51TGlnaHQiLCJoYXNDbGFzcyIsImhlYWRlckhhc0RhcmtDbGFzcyIsImhlYWRlckRhcmtDbGFzc1JlbW92ZWQiLCJzbGlkZXJEYXJrQ2xhc3MiLCJtZW51SXNPcGVuIiwibWVudU92ZXJsYXlPcGVuZWQiLCJicmVha3BvaW50cyIsInRyaWdnZXJPbkluaXQiLCJuYW1lIiwiY3VycmVudEJyZWFrcG9pbnQiLCJhZGRDbGFzcyIsImJpbmQiLCJicmVha3BvaW50IiwicmVtb3ZlQ2xhc3MiLCJmcm9tIiwidG8iLCJjb3JlIiwiZnVuY3Rpb25zIiwic2Nyb2xsVG9wIiwicnRsU3RhdHVzIiwiZXF1YWxpemUiLCJjdXN0b21IZWlnaHQiLCJkYXJrVGhlbWUiLCIkc2Nyb2xsVG9wIiwic2Nyb2xsT2Zmc2V0IiwiY3NzIiwiYm90dG9tIiwib3BhY2l0eSIsIm9mZiIsIm9uIiwic3RvcCIsImFuaW1hdGUiLCIkcnRsU3RhdHVzQ2hlY2siLCIkZXF1YWxpemUiLCJlYWNoIiwiZWxlbSIsInNlbGVjdG9ySXRlbSIsImZpbmQiLCJtYXhIZWlnaHQiLCJvdXRlckhlaWdodCIsImhlaWdodCIsInNldEhlaWdodCIsIiRjdXN0b21IZWlnaHQiLCJlbGVtSGVpZ2h0IiwiZWxlbUhlaWdodExnIiwiZWxlbUhlaWdodE1kIiwiZWxlbUhlaWdodFNtIiwiZWxlbUhlaWdodFhzIiwiY3VzdG9tSGVpZ2h0QnJlYWtwb2ludCIsInJlc2l6ZSIsInNldFRpbWVvdXQiLCIkZGFya0VsZW1lbnQiLCIkbGlnaHRCdG5UcmlnZ2VyIiwiJGRhcmtCdG5UcmlnZ2VyIiwiZGFya0NvbG9yU2NoZW1lIiwiZGVmYXVsdERhcmsiLCJnZXQiLCJlIiwiZGFya0VsZW1TcmMiLCJlbGVtZW50cyIsInNoYXBlRGl2aWRlciIsInNldCIsImV4cGlyZXMiLCJOdW1iZXIiLCJsaWdodEVsZW1TcmMiLCJyZW1vdmUiLCJlbGVtT3JpZ2luYWxTcmMiLCJlbGVtRGFya1NyYyIsImVsZW1MaWdodFNyYyIsImhlYWRlciIsImxvZ29TdGF0dXMiLCJzdGlja3lIZWFkZXIiLCJ0b3BCYXIiLCJzZWFyY2giLCJtYWluTWVudSIsIm1haW5NZW51UmVzcG9uc2l2ZVNob3ciLCJtYWluTWVudU92ZXJsYXkiLCJwYWdlTWVudSIsInNpZGViYXJPdmVybGF5IiwiZG90c01lbnUiLCJvbmVwYWdlTWVudSIsInN0YXR1cyIsImhlYWRlckxvZ29EZWZhdWx0IiwiaGVhZGVyTG9nb0RhcmsiLCJoZWFkZXJMb2dvRml4ZWQiLCJoZWFkZXJMb2dvUmVzcG9uc2l2ZSIsInJlbW92ZUF0dHIiLCJzaHJpbmtIZWFkZXIiLCJzaHJpbmtIZWFkZXJBY3RpdmUiLCJzY3JvbGxPblRvcCIsImlzIiwiaW5kZXgiLCJlbGVtZW50IiwibGVmdCIsIiRzZWFyY2giLCJzZWFyY2hCdG4iLCJzZWFyY2hCdG5DbG9zZSIsInNlYXJjaElucHV0Iiwib3BlblNlYXJjaCIsImZvY3VzIiwiY2xvc2VTZWFyY2giLCJ2YWx1ZSIsImV2Iiwia2V5Q29kZSIsInByZXBlbmQiLCIkbWVudUl0ZW1MaW5rcyIsIiR0cmlnZ2VyQnV0dG9uIiwicHJvY2Vzc2luZyIsInRyaWdnZXJFdmVudCIsInByZXZlbnREZWZhdWx0Iiwib3Blbk1lbnUiLCJwYXJlbnQiLCJkdXJhdGlvbiIsImVhc2luZyIsInN0YXJ0IiwiY29tcGxldGUiLCJjbG9zZU1lbnUiLCJkb25lIiwic2libGluZ3MiLCJ0b2dnbGVDbGFzcyIsInN0b3BQcm9wYWdhdGlvbiIsInRyaWdnZXIiLCIkbWVudUxhc3RJdGVtIiwiJG1lbnVMYXN0SXRlbVVsIiwiJG1lbnVMYXN0SW52ZXJ0IiwiJG1lbnVJdGVtcyIsIiRwYWdlTWVudSIsInNocmlua1BhZ2VNZW51Iiwic2Nyb2xsIiwiJHNpZGVwYW5lbCIsIiRzaWRlcGFuZWxUcmlnZ2VyIiwic2lkZXBhbmVsUHJvY2Vzc2luZyIsInNpZGVwYW5lbEV2ZW50IiwicGFuZWxPcGVuIiwicGFuZWxJc09wZW4iLCJwYW5lbENsb3NlIiwiJGRvdHNNZW51IiwiJGRvdHNNZW51SXRlbXMiLCJvcHRpb25zIiwic3BlZWQiLCJwYXJlbnRzIiwiY3VycmVudFNlY3Rpb24iLCIkY3VycmVudE1lbnVJdGVtIiwiJGN1cnJlbnRTZWN0aW9uIiwiZWxlbUN1cnJlbnQiLCJlbGVtZUlkIiwic2xpZGVyIiwiaW5zcGlyb1NsaWRlciIsImNhcm91c2VsIiwiZm4iLCJmbGlja2l0eSIsIm5vdGlmaWNhdGlvbiIsImRlZmF1bHRBbmltYXRpb24iLCJhbmltYXRlX2NhcHRpb25zIiwiJGVsZW0iLCIkY2FwdGlvbnMiLCIkY2FwdGlvbkVsZW0iLCJhbmltYXRpb25EdXJhdGlvbiIsImNhcHRpb25EZWxheSIsImNhcHRpb25BbmltYXRpb24iLCJ0IiwiaGlkZV9jYXB0aW9ucyIsImNhcHRpb24iLCJzdGFydF9rZW5idXJuIiwiY3VycmVudFNsaWRlIiwiY3VycmVudFNsaWRlS2VuYnVybnMiLCJzdG9wX2tlbmJ1cm4iLCJub3RDdXJyZW50U2xpZGUiLCJzbGlkZV9kYXJrIiwiJHNsaWRlckNsYXNzU2xpZGUiLCJzbGlkZXJIZWlnaHQiLCJzdGF0ZSIsImhlYWRlckhlaWdodCIsInRvcGJhckhlaWdodCIsIndpbmRvd0hlaWdodCIsInNsaWRlckN1cnJlbnRIZWlnaHQiLCJzY3JlZW5IZWlnaHRFeHRyYSIsInNsaWRlckZ1bGxzY3JlZW4iLCJzY3JlZW5SYXRpbyIsInRyYW5zcGFyZW50SGVhZGVyIiwicmVzcG9uc2l2ZUhlaWdodFhzIiwiY29udGFpbmVyRnVsbHNjcmVlbiIsImZpcnN0IiwiY29udGVudENyb3AiLCJzbGlkZXJNaW5IZWlnaHQiLCJzbGlkZXJFbGVtZW50c0hlaWdodCIsImNlbGxTZWxlY3RvciIsInByZXZOZXh0QnV0dG9ucyIsImRhdGEiLCJwYWdlRG90cyIsImZhZGUiLCJkcmFnZ2FibGUiLCJmcmVlU2Nyb2xsIiwid3JhcEFyb3VuZCIsImdyb3VwQ2VsbHMiLCJhdXRvUGxheSIsInBhdXNlQXV0b1BsYXlPbkhvdmVyIiwiYWRhcHRpdmVIZWlnaHQiLCJhc05hdkZvciIsInNlbGVjdGVkQXR0cmFjdGlvbiIsImZyaWN0aW9uIiwiaW5pdGlhbEluZGV4IiwiYWNjZXNzaWJpbGl0eSIsInNldEdhbGxlcnlTaXplIiwiY2VsbEFsaWduIiwicGxheVdob2xlVmlkZW8iLCJlbGVtQ2hpbGQiLCJlbGVtQ2hpbGRJbWFnZSIsInJlcGxhY2UiLCJwYXVzZSIsImlzTnVtZXJpYyIsImluc3Bpcm9TbGlkZXJEYXRhIiwicmlnaHRUb0xlZnQiLCJpIiwidmlkZW8iLCJjdXJyZW50VGltZSIsImZsa3R5Iiwid3JhcEFyb3VuZFN0b3AiLCJwbGF5ZXIiLCJkaXNhYmxlQXV0b3BsYXkiLCJpc0F0TGFzdCIsInNlbGVjdGVkSW5kZXgiLCJzbGlkZXMiLCJzZWxlY3RlZEVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGxheSIsImNvbnRhaW5lcldpZHRoIiwiaXRlbXMiLCJpdGVtc0xnIiwiaXRlbXNNZCIsIml0ZW1zU20iLCJpdGVtc1hzIiwibWFyZ2luIiwibGF6eUxvYWQiLCJhdXRvV2lkdGgiLCJjb250YWluIiwiTWF0aCIsIm1pbiIsInNldFJlc3BvbnNpdmVDb2x1bW5zIiwiZ2V0Q2Fyb3VzZWxDb2x1bW5zIiwiaXRlbVdpZHRoIiwid3JhcCIsImNhcm91c2VsQ3VzdG9tSGVpZ2h0U3RhdHVzIiwiJGNhcm91c2VsRWxlbSIsImltYWdlc0xvYWRlZCIsIm5hVG8iLCJtb3JwaGV4dCIsImJ1dHRvbnMiLCJhY2NvcmRpb24iLCJhbmltYXRpb25zIiwicGFyYWxsYXgiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJyZXNwb25zaXZlVmlkZW9zIiwiY291bnRkb3duVGltZXIiLCJwcm9ncmVzc0JhciIsInBpZUNoYXJ0IiwiZ3JpZExheW91dCIsInRvb2x0aXAiLCJwb3BvdmVyIiwibWFnbmlmaWNQb3B1cCIsInlUUGxheWVyIiwidmltZW9QbGF5ZXIiLCJtb2RhbCIsInNpZGViYXJGaXhlZCIsImNsaXBib2FyZCIsImJvb3RzdHJhcFN3aXRjaCIsImNvdW50ZG93biIsIm90aGVyIiwidmlkZW9CYWNrZ3JvdW5kIiwiZm9ybXMiLCJmb3JtVmFsaWRhdGlvbiIsImZvcm1BamF4UHJvY2Vzc2luZyIsImZsb2F0aW5nRGl2Iiwid2l6YXJkIiwiY291bnRlcnMiLCIkc2hvd0hpZGVQYXNzd29yZCIsIiRpY29uRXllIiwiJGljb25DbG9zZWRFeWUiLCJlbGVtU2hvd0hpZGVJY29uIiwiZWxlbUlucHV0IiwiY2hpbGRyZW4iLCJjdXJzb3IiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwidmFsaWRhdGlvbiIsIkFycmF5IiwicHJvdG90eXBlIiwiZmlsdGVyIiwiY2FsbCIsImZvcm0iLCJjaGVja1ZhbGlkaXR5IiwiY2xhc3NMaXN0IiwiYWRkIiwiJGFqYXhGb3JtIiwiZWxlbUN1c3RvbVJlZGlyZWN0UGFnZSIsImJ1dHRvbiIsImJ1dHRvblRleHQiLCJodG1sIiwic3VibWl0IiwicG9zdF91cmwiLCJyZXF1ZXN0X21ldGhvZCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiRm9ybURhdGEiLCJjYWNoZSIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCJzdWNjZXNzIiwidGV4dCIsInJlc3BvbnNlIiwiZ3JlY2FwdGNoYSIsInJlc2V0IiwibG9jYXRpb24iLCJocmVmIiwibm90aWZ5IiwibWVzc2FnZSIsImRlbGF5IiwiJGZsb2F0aW5nRGl2IiwiZWxlbUFsaWduIiwiZWxlbVNjcm9sbE9mZnNldCIsImVsZW1WaXNpYmxlIiwiZWxlbVdpZHRoIiwib3V0ZXJXaWR0aCIsImNvbnRleHQiLCJteUxhenlMb2FkIiwiZWxlbWVudHNfc2VsZWN0b3IiLCJjbGFzc19sb2FkZWQiLCJ0b2dnbGVJdGVtQ2xhc3MiLCJ0b2dnbGVJdGVtQ2xhc3NUYXJnZXQiLCIkcERyb3Bkb3duIiwiJHNob3dIaWRlIiwiZWxlbUhpZGUiLCJlbGVtU2hvdyIsImhpZGUiLCJzaG93Iiwib2Zmc2V0VG9wIiwiJHRleHRSb3RhdG9yIiwiTW9ycGhleHQiLCJhbmltYXRlX3ByZWZpeCIsImFuaW1hdGlvbiIsInNlcGFyYXRvciIsImVsZW1EZWZhdWx0V2lkdGgiLCJob3ZlciIsImFjY29yZGlvblR5cGUiLCJ0b29nbGVUeXBlIiwiYWNjb3JkaW9uSXRlbSIsIml0ZW1BY3RpdmUiLCJpdGVtVGl0bGUiLCJpdGVtQ29udGVudCIsIiRhY2NzIiwiJGl0ZW0iLCIkbGluayIsIiRhY2MiLCJuZXh0Iiwic2xpZGVVcCIsInNsaWRlVG9nZ2xlIiwicHJvcCIsIiRhbmltYXRlIiwiV2F5cG9pbnQiLCJkaXJlY3Rpb24iLCJpbmRleE9mIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJoYW5kbGVyIiwiZGVzdHJveSIsIiRwYXJhbGxheCIsInNjcm9sbHkiLCJlbGVtSW1hZ2VTcmMiLCJlbGVtSW1hZ2VWZWxvY2l0eSIsInBhcmFsbGF4TGF6eSIsImJnUGFyYWxsYXgiLCIkYmFja2dyb3VuZEltYWdlIiwibGFhenliZyIsIiRzaGFwZV9kaXZpZGVyIiwic3R5bGUiLCJjb2xvciIsInpJbmRleCIsInByZWZpeCIsImRlY29kZVN2ZyIsImF0b2IiLCJ3cmFwcGVyIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInN2ZyIsImZpcnN0Q2hpbGQiLCJwYXRocyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZm9yRWFjaCIsInBhdGgiLCJmaWxsIiwic2V0QXR0cmlidXRlIiwidG9GaXhlZCIsImJhc2VWYWwiLCJhcHBlbmQiLCIkY291bnRlciIsImNvdW50VG8iLCJzdWZmaXgiLCJyZWZyZXNoSW50ZXJ2YWwiLCJmb3JtYXR0ZXIiLCJTdHJpbmciLCJkZWNpbWFscyIsIiRjb3VudGRvd25UaW1lciIsImZpbmFsRGF0ZSIsInN0cmZ0aW1lIiwiJHByb2dyZXNzQmFyIiwicGVyY2VudCIsInByb2dyZXNzQmFyUnVuIiwiJHBpZUNoYXJ0IiwiZWFzeVBpZUNoYXJ0IiwiYmFyQ29sb3IiLCJ0cmFja0NvbG9yIiwic2NhbGVDb2xvciIsInNjYWxlTGVuZ3RoIiwibGluZUNhcCIsImxpbmVXaWR0aCIsInNpemUiLCJyb3RhdGUiLCJlbGVtRWFzaW5nIiwib25TdGVwIiwicm91bmQiLCJtYXBzIiwiJG1hcCIsImdtYXAzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJpbmZvIiwibWFwdHlwZSIsInpvb20iLCJmdWxsc2NyZWVuIiwiaWNvbiIsIm1hcENvbG9yIiwibWFwc1N0eWxlIiwiTUFQUyIsImNlbnRlciIsIm1hcFR5cGVJZCIsImdvb2dsZSIsIk1hcFR5cGVJZCIsInNjcm9sbHdoZWVsIiwiem9vbUNvbnRyb2wiLCJtYXBUeXBlQ29udHJvbCIsInN0cmVldFZpZXdDb250cm9sIiwiZnVsbHNjcmVlbkNvbnRyb2wiLCJzdHlsZXMiLCJtYXJrZXIiLCJwb3NpdGlvbiIsIm92ZXJsYXkiLCJjb250ZW50IiwiaW5mb3dpbmRvdyIsInBpeGVsT2Zmc2V0IiwiU2l6ZSIsInRoZW4iLCJtYXAiLCJhZGRMaXN0ZW5lciIsIm9wZW4iLCJpc290b3BlIiwiaXNvdG9wZVJUTCIsIml0ZW1TZWxlY3RvciIsImxheW91dE1vZGUiLCJzdGFnZ2VyIiwiYXV0b0hlaWdodCIsImdyaWRNYXJnaW4iLCJncmlkTWFyZ2luWHMiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJpc09yaWdpbkxlZnQiLCJlbGVtRGVmYXVsdEZpbHRlciIsIiRpc290b3BlbGF5b3V0IiwibWFzb25yeSIsImNvbHVtbldpZHRoIiwiZ3JpZExheW91dEluZmluaXRlIiwiZWxlbUZpbHRlciIsIiRmaWx0ZXJJdGVtIiwiZWxlbUZpbHRlckxheW91dCIsIiRmaWx0ZXJJdGVtQWN0aXZlQ2xhc3MiLCJmaWx0ZXJWYWx1ZSIsImVtcHR5IiwiZmlsdGVyRGVmYXVsdFZhbHVlIiwiZWxlbWVudFNlbGVjdG9yIiwiZWxlbUdyaWRNYXJnaW4iLCJpbmZpbml0ZVNjcm9sbCIsImdyaWRJdGVtIiwibG9hZE9uU2Nyb2xsIiwidGhyZXNob2xkIiwicHJlZmlsbGkiLCJwYXRoU2VsZWN0b3IiLCJsb2FkTW9yZUVsZW0iLCJsb2FkTW9yZUJ0biIsImxvYWRNb3JlQnRuVGV4dCIsImxvYWRNb3JlTWVzc2FnZSIsImhpc3RvcnkiLCJzY3JvbGxUaHJlc2hvbGQiLCJwcmVmaWxsIiwiJGl0ZW1zIiwiZXJyb3IiLCJhZnRlciIsIiR0b29sdGlwIiwiJHBvcG92ZXIiLCJjb250YWluZXIiLCIkbGlnaHRib3giLCJnZXRUeXBlIiwiaW1hZ2UiLCJjbG9zZU9uQ29udGVudENsaWNrIiwicmVtb3ZhbERlbGF5IiwidmVydGljYWxGaXQiLCJjYWxsYmFja3MiLCJiZWZvcmVPcGVuIiwic3QiLCJtYXJrdXAiLCJtYWluQ2xhc3MiLCJnYWxsZXJ5IiwiZGVsZWdhdGUiLCJlbmFibGVkIiwibmF2aWdhdGVCeUltZ0NsaWNrIiwicHJlbG9hZCIsImlmcmFtZSIsImFqYXhDb250ZW50QWRkZWQiLCJtZnBSZXNwb25zZSIsImlubGluZSIsImNsb3NlQnRuSW5zaWRlIiwibWlkQ2xpY2siLCJjbG9zZSIsImxvYWQiLCJmaXhlZENvbnRlbnRQb3MiLCJvdmVyZmxvd1kiLCJlbGVtVHlwZSIsIiR5dFBsYXllciIsIllUUGxheWVyIiwidmlkZW9VUkwiLCJtdXRlIiwicGF1c2VPblNjcm9sbCIsImxvb3AiLCJ2b2wiLCJzdGFydEF0Iiwic3RvcEF0IiwiY29udHJvbHMiLCJyZWdFeHAiLCJmaXRUb0JhY2tncm91bmQiLCJ2aWRlb0lkIiwicmVwZWF0IiwicGxheWVyVmFycyIsImVuZCIsImF1dG9wbGF5IiwibW9kZXN0YnJhbmRpbmciLCJsb2dvIiwib3JpZ2luIiwiYnJhbmRpbmciLCJyZWwiLCJzaG93aW5mbyIsImV2ZW50cyIsIm9uUmVhZHkiLCJvblBsYXllclJlYWR5IiwidGFyZ2V0Iiwic2V0Vm9sdW1lIiwid2F5cG9pbnQiLCJwYXVzZVZpZGVvIiwicGxheVZpZGVvIiwiJHZtUGxheWVyIiwidmltZW9fcGxheWVyIiwiZWxlbVZpZGVvIiwiZWxlbU11dGUiLCJlbGVtUmF0aW8iLCJlbGVtUXVhbGl0eSIsImVsZW1PcGFjaXR5IiwiZWxlbUNvbnRhaW5lciIsImVsZW1PcHRpbWl6ZSIsImVsZW1Mb29wIiwiZWxlbVZvbHVtZSIsImVsZW1TdGFydCIsImVsZW1TdG9wIiwiZWxlbUF1dG9QbGF5IiwiZWxlbUZ1bGxTY3JlZW4iLCJlbGVtQ29udHJvbHMiLCJlbGVtTG9nbyIsImVsZW1BdXRvUGF1c2UiLCJyYXRpbyIsInF1YWxpdHkiLCJjb250YWlubWVudCIsIm9wdGltaXplRGlzcGxheSIsInJlYWxmdWxsc2NyZWVuIiwic2hvd3ZtTG9nbyIsInNob3dDb250cm9scyIsIiRtb2RhbCIsIiRtb2RhbFN0cmlwIiwiJGJ0bk1vZGFsIiwibW9kYWxTaG93IiwibW9kYWxTaG93Q2xhc3MiLCJtb2RhbERlY2xpbmUiLCJjb29raWVOb3RpZnkiLCJjb29raWVDb25maXJtIiwiZWxlbURlbGF5IiwiZWxlbUNvb2tpZUV4cGlyZSIsImVsZW1Db29raWVOYW1lIiwiZWxlbUNvb2tpZUVuYWJsZWQiLCJlbGVtTW9kYWxEaXNtaXNzRGVsYXkiLCJtb2RhbEVsZW0iLCJ0aW1lb3V0IiwiY2xpY2siLCJzcmMiLCJtb2RhbFRhcmdldCIsIiR0aXRsZSIsIiRtZXNzYWdlIiwiJHR5cGUiLCIkZWxlbWVudCIsIiRkZWxheSIsIiRwbGFjZW1lbnQiLCIkYW5pbWF0ZUVudGVyIiwiJGFuaW1hdGVFeGl0IiwiJHRpbWVvdXQiLCIkZWxlbWVudENvbnRhaW5lciIsIiRiYWNrZ3JvdW5kSW1hZ2VDb250YWluZXIiLCJ0aXRsZSIsInRlbXBsYXRlIiwibW91c2Vfb3ZlciIsImFsbG93X2Rpc21pc3MiLCJwbGFjZW1lbnQiLCJlbnRlciIsImV4aXQiLCIkc2lkZWJhckZpeGVkIiwidGhlaWFTdGlja3lTaWRlYmFyIiwiYWRkaXRpb25hbE1hcmdpblRvcCIsImFkZGl0aW9uYWxNYXJnaW5Cb3R0b20iLCJkaXNhYmxlT25SZXNwb25zaXZlTGF5b3V0cyIsIiRib290c3RyYXBTd2l0Y2giLCIkY2xpcGJvYXJkVGFyZ2V0IiwiJGNsaXBib2FyZFRleHQiLCJDbGlwYm9hcmRKUyIsImNsaXBib2FyZEluaXQiLCJjbGlwYm9hcmRUeXBlIiwidGl0bGVTdWNjZXNzIiwiJGNvdW50ZG93biIsIiRlbGVtQ291bnQiLCIkZWxlbVNob3ciLCIkZWxlbVNlY29uZHMiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImZhZGVPdXQiLCJmYWRlSW4iLCIkdmlkZW9CYWNrZ3JvdW5kIiwibXV0ZWQiLCJwb3N0ZXIiLCJyYW5kb21JZCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyIiwid2lkZ2V0cyIsInR3aXR0ZXIiLCJmbGlja3IiLCJpbnN0YWdyYW0iLCJzdWJzY3JpYmVGb3JtIiwiJHdpZGdldF90d2l0dGVyIiwidHdpdHRpZSIsInR3aXR0ZXJVc2VybmFtZSIsInR3aXR0ZXJMaW1pdCIsInR3aXR0ZXJEYXRlRm9ybWF0IiwidHdpdHRlckxvYWRpbmdUZXh0IiwidHdpdHRlckFwaVBBdGgiLCJ0d2l0dGVyQXZhdGFyIiwidXNlcm5hbWUiLCJjb3VudCIsImRhdGVGb3JtYXQiLCJhcGlQYXRoIiwibG9hZGluZ1RleHQiLCIkZmxpY2tyX3dpZGdldCIsImpmbGlja3JmZWVkIiwiaWQiLCJsaW1pdCIsIml0ZW1UZW1wbGF0ZSIsInFzdHJpbmdzIiwiJHdpZGdldF9pbnN0YWdyYW0iLCJzcGVjdHJhZ3JhbSIsImluc3RhZ3JhbUxpbWl0IiwiaW5zdGFncmFtQ29sdW1ucyIsImluc3RhZ3JhbUFjY2Vzc1Rva2VuIiwiaW5zdGFncmFtSXRlbXMiLCJpbnN0YWdyYW1TaXplIiwiaW5zdGFncmFtR3JpZENvbHVtbnMiLCJhY2Nlc3NEYXRhIiwiYWNjZXNzVG9rZW4iLCJteUNhbGxiYWNrRnVuYyIsIm1heCIsIndyYXBFYWNoV2l0aCIsIiRzdWJzY3JpYmVGb3JtIiwiZWxlbVN1Y2Nlc3NNZXNzYWdlIiwiYWRkb25JY29uIiwiYWRkb25JY29uVGV4dCIsImZvcm1fZGF0YSIsInNlcmlhbGl6ZSIsImRhdGFUeXBlIiwiZGVmaW5lIiwiYW1kIiwibW9kdWxlIiwiZXhwb3J0cyIsIm4iLCJ1bmRlZmluZWQiLCJBIiwiY2xhc3NOYW1lIiwiRSIsInciLCJpc1BsYWluT2JqZWN0IiwibG9hZEhUTUwiLCJoIiwiY2xpY2tUb0hpZGUiLCJyIiwiYXJyb3ciLCJ1c2VyQ29udGFpbmVyIiwiZWxlbWVudFR5cGUiLCJvcmlnaW5hbEVsZW1lbnQiLCJOIiwiYmVmb3JlIiwicnVuIiwicyIsIm0iLCJiIiwibCIsImMiLCJvIiwidSIsImEiLCJmIiwic3BsaXQiLCJ0b0xvd2VyQ2FzZSIsImNoYXJBdCIsInB1c2giLCJwIiwiZCIsInYiLCJjc3NFbGVtIiwid2FybiIsImNsYXNzZXMiLCJnIiwieSIsImZpZWxkcyIsIngiLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsImF1dG9IaWRlIiwiYXV0b0hpZGVEZWxheSIsImFycm93U2hvdyIsImFycm93U2l6ZSIsImJyZWFrTmV3TGluZXMiLCJlbGVtZW50UG9zaXRpb24iLCJnbG9iYWxQb3NpdGlvbiIsInNob3dBbmltYXRpb24iLCJzaG93RHVyYXRpb24iLCJoaWRlQW5pbWF0aW9uIiwiaGlkZUR1cmF0aW9uIiwiZ2FwIiwiZXh0ZW5kIiwiUyIsIlQiLCJDIiwicGFyc2VJbnQiLCJpc05hTiIsImsiLCJMIiwiZ2V0U3R5bGUiLCJ1c2VyRmllbGRzIiwiYXBwbHkiLCJzZXRHbG9iYWxQb3NpdGlvbiIsImdldFBvc2l0aW9uIiwiYm9keSIsImNvbnRhaW5zIiwic2V0RWxlbWVudFBvc2l0aW9uIiwiTyIsIk0iLCJfIiwiRCIsIlAiLCJIIiwiQiIsImoiLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJkaXNwbGF5IiwidXBkYXRlQ2xhc3NlcyIsImlzQXJyYXkiLCJjb25jYXQiLCJqb2luIiwiY2xlYXJUaW1lb3V0IiwiYXV0b2hpZGVUaW1lciIsIm5vZGVOYW1lIiwianF1ZXJ5IiwiZGVmYXVsdHMiLCJhZGRTdHlsZSIsInJlbW92ZVN0eWxlIiwicGx1Z2luT3B0aW9ucyIsImluc2VydENTUyIsImJhc2UiLCJwYWRkaW5nIiwiYm9yZGVyIiwiT3dsIiwic2V0dGluZ3MiLCJEZWZhdWx0cyIsIl9oYW5kbGVycyIsIl9wbHVnaW5zIiwiX3N1cHJlc3MiLCJfY3VycmVudCIsIl9zcGVlZCIsIl9jb29yZGluYXRlcyIsIl9icmVha3BvaW50IiwiX3dpZHRoIiwiX2l0ZW1zIiwiX2Nsb25lcyIsIl9tZXJnZXJzIiwiX3dpZHRocyIsIl9pbnZhbGlkYXRlZCIsIl9waXBlIiwiX2RyYWciLCJ0aW1lIiwicG9pbnRlciIsInN0YWdlIiwiY3VycmVudCIsIl9zdGF0ZXMiLCJ0YWdzIiwicHJveHkiLCJQbHVnaW5zIiwia2V5IiwicGx1Z2luIiwic2xpY2UiLCJXb3JrZXJzIiwicHJpb3JpdHkiLCJ3b3JrZXIiLCJzZXR1cCIsImluaXRpYWxpemUiLCJyZXdpbmQiLCJtb3VzZURyYWciLCJ0b3VjaERyYWciLCJwdWxsRHJhZyIsImZyZWVEcmFnIiwic3RhZ2VQYWRkaW5nIiwibWVyZ2UiLCJtZXJnZUZpdCIsInN0YXJ0UG9zaXRpb24iLCJydGwiLCJzbWFydFNwZWVkIiwiZmx1aWRTcGVlZCIsImRyYWdFbmRTcGVlZCIsInJlc3BvbnNpdmUiLCJyZXNwb25zaXZlUmVmcmVzaFJhdGUiLCJyZXNwb25zaXZlQmFzZUVsZW1lbnQiLCJmYWxsYmFja0Vhc2luZyIsIm5lc3RlZEl0ZW1TZWxlY3RvciIsIml0ZW1FbGVtZW50Iiwic3RhZ2VFbGVtZW50IiwicmVmcmVzaENsYXNzIiwibG9hZGVkQ2xhc3MiLCJsb2FkaW5nQ2xhc3MiLCJydGxDbGFzcyIsInJlc3BvbnNpdmVDbGFzcyIsImRyYWdDbGFzcyIsIml0ZW1DbGFzcyIsInN0YWdlQ2xhc3MiLCJzdGFnZU91dGVyQ2xhc3MiLCJncmFiQ2xhc3MiLCJXaWR0aCIsIkRlZmF1bHQiLCJJbm5lciIsIk91dGVyIiwiVHlwZSIsIkV2ZW50IiwiU3RhdGUiLCJyZWxhdGl2ZSIsIiRzdGFnZSIsImdyaWQiLCJpdGVyYXRvciIsIndpZHRocyIsImNsb25lcyIsInZpZXciLCJjZWlsIiwibm9ybWFsaXplIiwib3V0ZXJIVE1MIiwiYXBwZW5kVG8iLCJwcmVwZW5kVG8iLCJwcmV2aW91cyIsImNvb3JkaW5hdGVzIiwiYWJzIiwiZXEiLCJtaW5pbXVtIiwibWF4aW11bSIsImJlZ2luIiwiaW5uZXIiLCJvdXRlciIsIm1hdGNoZXMiLCJvcCIsImltZ3MiLCJuZXN0ZWRTZWxlY3RvciIsInByZWxvYWRBdXRvV2lkdGhJbWFnZXMiLCJub3QiLCJyZWZyZXNoIiwiaW52YWxpZGF0ZSIsInJlZ2lzdGVyRXZlbnRIYW5kbGVycyIsImxlYXZlIiwidmlld3BvcnQiLCJvdmVyd3JpdGVzIiwiUmVnRXhwIiwicHJvcGVydHkiLCJvcHRpb25zTG9naWMiLCJwcmVwYXJlIiwiaXRlbSIsInVwZGF0ZSIsImFsbCIsImdyZXAiLCJkaW1lbnNpb24iLCJvblRocm90dGxlZFJlc2l6ZSIsInJlc2l6ZVRpbWVyIiwib25SZXNpemUiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJzdXBwb3J0IiwidHJhbnNpdGlvbiIsIm9uVHJhbnNpdGlvbkVuZCIsIm9uRHJhZ1N0YXJ0Iiwib25EcmFnRW5kIiwid2hpY2giLCJ0cmFuc2Zvcm0iLCJEYXRlIiwiZ2V0VGltZSIsIm9uZSIsImRlbHRhIiwiZGlmZmVyZW5jZSIsIm9uRHJhZ01vdmUiLCJwdWxsIiwiY2xvc2VzdCIsImNvb3JkaW5hdGUiLCJ0cmFuc2Zvcm0zZCIsInBhcnQiLCJzdXBwcmVzcyIsInJlbGVhc2UiLCJib3VuZGFyeSIsIm1lcmdlcnMiLCJvZGQiLCJldmVuIiwiZmFjdG9yIiwicmV2ZXJ0IiwiZGlzdGFuY2UiLCJwcmV2Iiwic3JjRWxlbWVudCIsIm9yaWdpbmFsVGFyZ2V0IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJub2RlVHlwZSIsImFkZEJhY2siLCJzcGxpY2UiLCJpbWFnZXMiLCJJbWFnZSIsInVud3JhcCIsImNvbnRlbnRzIiwicmVtb3ZlRGF0YSIsImxpc3RlbmVyIiwiY2FwdHVyZSIsImF0dGFjaEV2ZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRldGFjaEV2ZW50IiwibmFtZXNwYWNlIiwiY2FtZWxDYXNlIiwicmVsYXRlZFRhcmdldCIsIm9uVHJpZ2dlciIsInJlZ2lzdGVyIiwib2JqZWN0Iiwic3BlY2lhbCIsIm93bCIsIl9kZWZhdWx0IiwiYXJndW1lbnRzIiwidGFnIiwiaW5BcnJheSIsInJlc3VsdCIsIm9yaWdpbmFsRXZlbnQiLCJ0b3VjaGVzIiwiY2hhbmdlZFRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwiY2xpZW50WCIsImNsaWVudFkiLCJzZWNvbmQiLCJvd2xDYXJvdXNlbCIsIm9wdGlvbiIsImFyZ3MiLCIkdGhpcyIsIkNvbnN0cnVjdG9yIiwiWmVwdG8iLCJBdXRvUmVmcmVzaCIsIl9jb3JlIiwiX2ludGVydmFsIiwiX3Zpc2libGUiLCJhdXRvUmVmcmVzaCIsIndhdGNoIiwiYXV0b1JlZnJlc2hJbnRlcnZhbCIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJMYXp5IiwiX2xvYWRlZCIsIiRlbGVtZW50cyIsImRldmljZVBpeGVsUmF0aW8iLCJvbmxvYWQiLCJoYW5kbGVycyIsIkF1dG9IZWlnaHQiLCJhdXRvSGVpZ2h0Q2xhc3MiLCJ2aXNpYmxlIiwidG9BcnJheSIsImhlaWdodHMiLCJtYXhoZWlnaHQiLCJWaWRlbyIsIl92aWRlb3MiLCJfcGxheWluZyIsImlzSW5GdWxsU2NyZWVuIiwiZmV0Y2giLCJ2aWRlb0hlaWdodCIsInZpZGVvV2lkdGgiLCJFcnJvciIsInRodW1ibmFpbCIsInRuTGluayIsImRpbWVuc2lvbnMiLCJjdXN0b21UbiIsInNyY1R5cGUiLCJsYXp5Q2xhc3MiLCJjcmVhdGUiLCJqc29ucCIsInRodW1ibmFpbF9sYXJnZSIsImluc2VydEFmdGVyIiwiZnVsbHNjcmVlbkVsZW1lbnQiLCJtb3pGdWxsU2NyZWVuRWxlbWVudCIsIndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50IiwiQW5pbWF0ZSIsInNjb3BlIiwic3dhcHBpbmciLCJhbmltYXRlT3V0IiwiYW5pbWF0ZUluIiwic3dhcCIsImNsZWFyIiwiaW5jb21pbmciLCJvdXRnb2luZyIsIkF1dG9wbGF5IiwiX3BhdXNlZCIsImF1dG9wbGF5SG92ZXJQYXVzZSIsImF1dG9wbGF5VGltZW91dCIsImF1dG9wbGF5U3BlZWQiLCJoaWRkZW4iLCJOYXZpZ2F0aW9uIiwiX2luaXRpYWxpemVkIiwiX3BhZ2VzIiwiX2NvbnRyb2xzIiwiX3RlbXBsYXRlcyIsIl9vdmVycmlkZXMiLCJkb3RzRGF0YSIsImRvdENsYXNzIiwicG9wIiwiZHJhdyIsIm5hdiIsIm5hdlRleHQiLCJuYXZTcGVlZCIsIm5hdkVsZW1lbnQiLCJuYXZDb250YWluZXIiLCJuYXZDb250YWluZXJDbGFzcyIsIm5hdkNsYXNzIiwic2xpZGVCeSIsImRvdHNDbGFzcyIsImRvdHMiLCJkb3RzRWFjaCIsImRvdHNTcGVlZCIsImRvdHNDb250YWluZXIiLCJvdmVycmlkZSIsIiRyZWxhdGl2ZSIsIiRwcmV2aW91cyIsIiRuZXh0IiwiJGFic29sdXRlIiwiY29udHJvbCIsIm92ZXJpZGVzIiwibG93ZXIiLCJ1cHBlciIsImRpc2FibGVkIiwicGFnZSIsInN1Y2Nlc3NvciIsInN0YW5kYXJkIiwiSGFzaCIsIl9oYXNoZXMiLCJoYXNoIiwic3Vic3RyaW5nIiwiVVJMaGFzaExpc3RlbmVyIiwicHJlZml4ZXMiLCJXZWJraXRUcmFuc2l0aW9uIiwiTW96VHJhbnNpdGlvbiIsIk9UcmFuc2l0aW9uIiwiV2Via2l0QW5pbWF0aW9uIiwiTW96QW5pbWF0aW9uIiwiT0FuaW1hdGlvbiIsInRlc3RzIiwiY3NzdHJhbnNmb3JtcyIsInRlc3QiLCJjc3N0cmFuc2Zvcm1zM2QiLCJjc3N0cmFuc2l0aW9ucyIsImNzc2FuaW1hdGlvbnMiLCJwcmVmaXhlZCIsInRvVXBwZXJDYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==