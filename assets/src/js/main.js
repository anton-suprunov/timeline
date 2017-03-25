var theme = null;

(function($) {
	"use strict";

	theme = {
		onReady : function(){
	        theme.onResize();
			$('.tml__milestone').on('mouseenter', function() {
				var section = $(this).closest('.tml__section');
				section.addClass('tml__section_highlight');
			}).on('mouseleave', function() {
				var section = $(this).closest('.tml__section');
				section.removeClass('tml__section_highlight');
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