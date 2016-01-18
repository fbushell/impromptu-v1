;(function( $, window, document, undefined ) {

	'use strict';

	var Cirro				= window.Cirro || {},
			$document   = $( document ),
			$window 	  = $( window );
		
	// The page singleton controller object
	var page = {

		init: function(){
			var self = this;

			// Variables
			self.win                 = {};
			self.$html               = $('html');
			self.$body							 = $('body');
			self.docuHeight          = $(document).height();
			self.windHeight          = $(window).height();
			self.scrollPos           = null;
			self.$logo               = $('.logo');
			self.$smLogo						 = $('.sm-logo');
			self.$what               = $('div.what');
			self.$sectionOne         = $('section.intro');
			self.$sectionTwo         = $('main.page');
			self.$arrow              = $('.arrow');
			self.globalIndex         = 100;
			self.lastScrollY         = 0;
			self.ticking             = false;
			self.groupSpeedDivider   = 3
			self.speedDivider        = 5;
			self.mainImgSpeedDivider = 8;
			self.$imageGroup      	 = $('.image-group');
			self.$mainImg 					 = $('.group-main');
			self.$groupLayer         = $('.group-layer');
			self.lastRandom          = 0;
			self.$navToggle					 = $('#nav-toggle');
			self.$mobileOverlay			 = $('#mobile-overlay');

			// Initilaize methods
			//self.windowSizeFunction();
			//self.fallbackIntro();
			//page.imageStack();
			//page.randomImageStacker();

			// Init event methods
			self.$navToggle.on('click', self.toggleNav);
		},

		toggleNav: function() {
			page.$body.toggleClass('mobile-nav-active');
		},

		//
		// Paralax stuff 
		//

		// randomScrollDivider: function() {
		// 	return Math.floor((Math.random() * 8) + 1);
		// },


		// Check 
		// numberChecker: function(number) {
		// 	var lastNum = page.lastRandom;
		// 	var buffer = 20;
		// 	var maxBuffer = number + buffer;
		// 	var minBuffer = number - buffer;
		// 	if (lastNum > maxBuffer || lastNum < minBuffer) {
		// 		return number;
		// 	} else {
		// 		return Math.floor(Math.random() * (maxBuffer - minBuffer + 1)) + minBuffer;
		// 	}
		// },

		// randomNumberGenerator: function(min, max) {
		// 	var newNum = Math.floor(Math.random() * (max - min + 1)) + min;
		// 	var randomNum = page.numberChecker(newNum)
		// 	page.lastRandom = randomNum;
		// 	return randomNum;
		// },

		// randomImageStacker: function() {
		// 	var $group = $('.group-layer');

		// 	$group.each(function(i, obj){
		// 		var eachNum = page.randomNumberGenerator(0,80)
		// 		$(this).css({
		// 			transform: 'translateY(' + eachNum + '%)',
		// 			MozTransform: 'translateY(' + eachNum + '%)',
 	// 				WebkitTransform: 'translateY(' + eachNum + '%)',
		// 			left: (page.randomNumberGenerator(30,70)+'%')
		// 		})
		// 	})
		// },

		// randomImageStacker: function(){
		// 	var $group = $('.image-group');

		// 	$group.each(function(){	
		// 		var containerHW = {
		// 					height:$(this).innerHeight(),
		// 					width:$(this).innerWidth()
		// 				},
		// 				t = $(this).attr("data-image-size");
		// 		$(this).find(".group-layer").each(function(n,item){
		// 			var dimensions={},
		// 					offset={},
		// 					placement={};

		// 			dimensions = {
		// 				width: $(item).width(),
		// 				height: $(item).height()
		// 			},

		// 			offset = {
		// 				x: containerHW.width-dimensions.width,
		// 				y: containerHW.height-dimensions.height
		// 			},

		// 			placement = {
		// 				x: (Math.floor(Math.random()* offset.x)+1),
		// 				y: (Math.floor(Math.random()* offset.y)+1)
		// 			},
		// 			"large-image" === t&&(s.x=Math.floor((containerHW.width-dimensions.width)/2)),
		// 			$(item).css({
		// 				left: placement.x,
		// 				top: placement.y
		// 			})
		// 		})
		// 	})
		// },


		// imageStack: function() {
		// 	var $item = $('.group-layer');

		// 	$item.on('mouseover', function() {
		// 		var $this = $(this);
		// 		page.globalIndex = page.globalIndex + 1;
		// 		$this.css('z-index', page.globalIndex);
		// 	});
		// },

		// scrollEase: function() {
		// 	page.lastScrollY = page.scrollPos;
  // 		page.requestTick();
		// },

		// requestTick: function() {
		// 	if (!page.ticking) {
  //   		//window.requestAnimationFrame(page.updatePosition);
  //   		page.ticking = true;
  // 		}
		// },

		// updatePosition: function() {
		//   var translateValue = page.lastScrollY;

		//   // We don't want parallax to happen if scrollpos is below 0
		//   if (translateValue < 0) translateValue = 0;

		//   page.$groupLayer.each(function(i, obj) {
		//   	page.translateY3d(obj, translateValue);
		//   })

		//   // Stop ticking
		//   page.ticking = false;
		// },

		// translateY3d: function(elm, value) {
		// 	var randValue = value / page.randomScrollDivider();
		//   var translate = 'translate3d(0px,' + value + 'px, 0px)';
		//   var $elm = $(elm);
		  
		//   if ($elm.length > 0) {
		//  		//$elm.css('transform', translate);
		//  	}
		// },


		// fallbackIntro: function() {
		// 	if (!Detector.webgl) {
		// 	  page.$html.addClass('no-webgl');
		// 	}
		// },

		// centerLogo: function() {
		// 	var self = this;
		// 	var windHeight = self.windHeight;
		// 	var logoHeight = self.$logo.height();
		// 	var center = (windHeight - logoHeight) / 2;
		// 	self.$logo.css('top', center);
		// },

		// scrollToTwo: function() {
		// 	var self = this;
		// 	var $two = $('section.two');
		// 	page.$html.animate({
  //       scrollTop: $two.offset().top
  //   	}, 1000);
		// },

		checkNav: function() {
			var self = this;
			if (self.windWidth > 630) {return;}
			if (self.windWidth > 600) {
				page.$body.removeClass('mobile-nav-active');
			}
		},

		// Find the width of the window
		windowSizeFunction: function() {
			var self = this;
			self.windHeight = $window.height();
			self.windWidth  = $window.width();
		},

		scrollPosition: function() {
			var self = this;
			self.scrollPos = $(document).scrollTop();
		}
	};


	// Attach the object controller to the Cirro namespace
	Cirro.page = page;

	// Window load
	$window.load(function(){

		var $loader = $("div#loader");
		var $html   = $("html");
		
		// Show site after timeout
		setTimeout(function() {

			$html.css("overflow","auto");
				$loader.fadeOut();
		}, 300);

		// Initialize the singleton object controller after images loaded
			page.init();
	});

	// Window scroll
	$window.scroll( $.throttle( 10, function(){
		//page.scrollPosition();
		//page.scrollEase();
		//page.updatePosition();
	}));		

	// $( window ).konami({  
	//   cheat: function() {
	//     page.$sectionTwo.css('background', 'url("img/ipad.gif") scroll');
	//   }
 //  });

	// Window resize
	$window.resize(function(){
		page.windowSizeFunction();
		page.checkNav();
	});

}( jQuery, window, document));