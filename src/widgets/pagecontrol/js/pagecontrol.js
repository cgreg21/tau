/*
 * pagecontrol
 * by Youmin Ha <youmin.ha@samsung.com>
 */

(function ($, undefined) {

$.widget("todons.pagecontrol", $.mobile.widget, {
	options: {
		initSelector: ":jqmData(role='pagecontrol')",
	},

	_create: function () {
	},

	_init: function() {
		var e = this.element,
			maxVal = e.data("max"),
			currentVal = e.data("current"),
			i = 0,
			btn = null,
			buf = null;
		
		// Set default values
		if(!maxVal) {
			maxVal = 1;
		} else if(maxVal > 10) {
			maxVal = 10;
		}
		e.data("max", maxVal);

		if(!currentVal) {
			currentVal = 1;
		}
		e.data("current", currentVal);

		// Set class
		e.addClass('pagecontrol');

		// Calculate left/right margin

		// Add dot icons
		for(i=1; i<=maxVal; i++) {
			btn = $('<div class="page_n page_n_dot"></div>');
			e.append(btn);
			if(i == currentVal) {
				btn.removeClass('page_n_dot').
					addClass('page_n_'+i);
			}
		}

		e.bind('vclick', function() {
			
		});

	},
	
	setChangeCallback: function( callback ) {

	},
});	// end: $.widget()


$(document).bind("pagecreate create", function(e) {
		$($.todons.pagecontrol.prototype.options.initSelector, e.target)
		.not(":jqmData(role='none'), :jqmData(role='nojs')")
		.pagecontrol();
});

}) (jQuery);
