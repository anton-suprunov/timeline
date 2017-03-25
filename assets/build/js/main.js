var theme = null;

(function($) {
	"use strict";

	theme = {
		onReady : function(){
	        theme.onResize();
			$('.tml__hover-area, .tml__month-wrap').hover(function() {
				var section = $(this).closest('.tml__section');
				section.addClass('tml__section_highlight');
				$('.tml').addClass('tml_highlight');
			}, function() {
				var section = $(this).closest('.tml__section');
				section.removeClass('tml__section_highlight');
				$('.tml').removeClass('tml_highlight');
			});
		},
		onResize : function() {

		},
		onLoad: function() {}
	};

	$(document).ready( theme.onReady );
	$(window).load( theme.onLoad );
	$(window).resize( theme.onResize );

})(jQuery);