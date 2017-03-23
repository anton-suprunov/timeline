var theme = null;

(function($) {
	"use strict";

	theme = {
		onReady : function(){

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