var theme = null;

(function($) {
	"use strict";

	theme = {
		onReady : function(){

			var touchDetect = (('ontouchstart' in window) || (window.DocumentTouch && document instanceof DocumentTouch)) ? 'touchstart' : 'click';

			function removeHighlight() {
				$('.tml').removeClass('tml_highlight');
				$('.tml__section').removeClass('tml__section_highlight');
			}
	        
			$('.tml__hover-area, .tml__month-wrap').hover(function() {
				var section = $(this).closest('.tml__section');
				section.addClass('tml__section_highlight');
				$('.tml').addClass('tml_highlight');
			}, function() {
				var section = $(this).closest('.tml__section');
				section.removeClass('tml__section_highlight');
				$('.tml').removeClass('tml_highlight');
			});

			window.addEventListener('touchend', function(event) {
				if($(event.target).hasClass("tml__hover-area") || $(event.target).hasClass("tml__month")) {
					removeHighlight();
				}
			});

			theme.onResize();
		},
		onResize : function() {

		},
		onLoad: function() {}
	};

	$(document).ready( theme.onReady );
	$(window).load( theme.onLoad );
	$(window).resize( theme.onResize );

})(jQuery);