(function () {
	"use strict";

    jQuery(document).ready(function($){
		
		/*Home page main slider*/
		
        $(".homepage-slides").owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            autoplay: true,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            mouseDrag: false,
            touchDrag: false,
			animateOut: 'fadeOut'
        });
        
        $(".homepage-slides").on("translate.owl.carousel", function(){
            $(".single-slide-item h3, .single-slide-item p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".single-slide-item .slide-btn, .single-slide-item h1").removeClass("animated fadeInDown").css("opacity", "0");
        });
        
        $(".homepage-slides").on("translated.owl.carousel", function(){
            $(".single-slide-item h3, .single-slide-item p").addClass("animated fadeInUp").css("opacity", "1");
            $(".single-slide-item .slide-btn, .single-slide-item h1").addClass("animated fadeInDown").css("opacity", "1");
        });
		
		/*For mobile menu*/
		
		$("ul#navigation").slicknav({
            prependTo: ".mobile-menu-wrapper"
        });
		
		/*Home page1 Testimonial*/
		
		$(".testimonial").owlCarousel({
            items: 1,
            nav: false,
            dots: true,
            autoplay: true,
            loop: true,
            mouseDrag: false,
            touchDrag: false
        });
		
		/*Home page2 Testimonial*/
		
		$(".testimonial2").owlCarousel({
            items: 1,
            nav: false,
            dots: true,
            autoplay: true,
            loop: true,
            mouseDrag: false,
            touchDrag: false
        });
		
		/*Client Carousel*/
		
		$(".our-client").owlCarousel({
            items: 6,
            nav: false,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: false,
            autoplay: true,
            loop: true,
            mouseDrag: true,
            touchDrag: false,
			responsiveClass:true,
			responsive:{
				0:{
					items:1,
					nav:true
				},
				380:{
					items:2,
					nav:false
				},
				600:{
					items:4,
					nav:false
				},
				1000:{
					items:6,
					nav:false
				}
			}
        });
		
		/*Wow animation*/

         new WOW().init();
		
		/*tooltip*/
		
		$('[data-toggle="tooltip"]').tooltip(); 
		
		/*tooltip*/
		$('.datepicker').datepicker({
			format: 'mm/dd/yyyy',
			startDate: '-3d'
		});
		
		/*magnificPopup*/
		
		$(".latest-gallery").magnificPopup({
            type: 'image',
			callbacks: {
				beforeOpen: function() {
				   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated ' + this.st.el.attr('data-effect'));
				}
			  },
            gallery: {
                enabled: true
            }
			
        });
		
		/*scrollTop*/
		
		$('.scrollup').on('click',function(){
			$("html, body").animate({ scrollTop: 0 }, 600);
			return false;
		});
		
		/*On scroll*/
		
		$(window).on('scroll',function() {
		  if ($(this).scrollTop() > 40){  
			  $('header.for-sticky').addClass("sticky");
		     } else {
			  $('header.for-sticky').removeClass("sticky");
		   }
		   
		   if ($(this).scrollTop() > 300) {
				$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
		   
		});
		  
		/*Counter*/
		
		$('.counter').each(function() {
		  var $this = $(this),
			  countTo = $this.attr('data-count');
		  
		  $({ countNum: $this.text()}).animate({
			countNum: countTo
		  },
		
		  {
		
			duration: 8000,
			easing:'linear',
			step: function() {
			  $this.text(Math.floor(this.countNum));
			},
			complete: function() {
			  $this.text(this.countNum);
			}
		
		  });  
		  
		}); 
		
		/*Chat Box*/ 
		
		var $chatbox = $('.chatbox'),
            $chatboxTitle = $('.chatbox__title'),
            $chatboxTitleClose = $('.chatbox__title__close'),
            $chatboxCredentials = $('.chatbox__credentials');
       		$chatboxTitle.on('click', function() {
            $chatbox.toggleClass('chatbox--tray');
        });
        $chatboxTitleClose.on('click', function(e) {
            e.stopPropagation();
            $chatbox.addClass('chatbox--closed');
        });
        $chatbox.on('transitionend', function() {
            if ($chatbox.hasClass('chatbox--closed')) {
				$chatbox.remove();
			}
        });
        $chatboxCredentials.on('submit', function(e) {
            e.preventDefault();
            $chatbox.removeClass('chatbox--empty');
        });
		
		/*Gallery Filter*/
		
		var filterList = {
			init: function () {
				$('#freightGallery').mixItUp({
  				selectors: {
    			  target: '.fGallery',
    			  filter: '.filter'	
    		  },
    		  load: {
      		  filter: '.air'  
      		}     
				});								
			}

		   };	
		   // Run the show!
		   filterList.init();
		   
		/*Gallery Filter End*/   

    });

    jQuery(window).on('load',function(){
        jQuery(".wshipping-site-preloader-wrapper").fadeOut(300);
    });
	
}(jQuery));	