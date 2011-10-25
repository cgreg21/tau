/*!
 * jQuery Mobile Widget @VERSION
 *
 * Copyright (C) TODO
 * License: TODO
 * Authors: Max Waterman <max.waterman@intel.com>
 */

/**
 * Todonsslider modifies the JQuery Mobile slider and is created in the same way.
 *
 * See the JQuery Mobile slider widget for more information :
 *     http://jquerymobile.com/demos/1.0a4.1/docs/forms/forms-slider.html
 *
 * The JQuery Mobile slider option:
 *     theme: specify the theme using the 'data-theme' attribute
 *
 * Options:
 *     theme: string; the theme to use if none is specified using the 'data-theme' attribute
 *            default: 'c'
 *     popupEnabled: boolean; controls whether the popup is displayed or not
 *                   specify if the popup is enabled using the 'data-popupEnabled' attribute
 *                   set from javascript using .todonsslider('option','popupEnabled',newValue)
 *
 * Events:
 *     changed: triggers when the value is changed (rather than when the handle is moved)
 *
 * Examples:
 *
 *     <a href="#" id="popupEnabler" data-role="button" data-inline="true">Enable popup</a>
 *     <a href="#" id="popupDisabler" data-role="button" data-inline="true">Disable popup</a>
 *     <div data-role="fieldcontain">
 *         <input id="mySlider" data-theme='a' data-popupenabled='false' type="range" name="slider" value="7" min="0" max="9" />
 *     </div>
 *     <div data-role="fieldcontain">
 *         <input id="mySlider2" type="range" name="slider" value="77" min="0" max="777" />
 *     </div>
 *
 *     // disable popup from javascript
 *     $('#mySlider').todonsslider('option','popupEnabled',false);
 *
 *     // from buttons
 *     $('#popupEnabler').bind('vclick', function() {
 *         $('#mySlider').todonsslider('option','popupEnabled',true);
 *     });
 *     $('#popupDisabler').bind('vclick', function() {
 *         $('#mySlider').todonsslider('option','popupEnabled',false);
 *     });
 */

(function ($, window, undefined) {
	$.widget("todons.todonsslider", $.mobile.widget, {
		options: {
			popupEnabled: true,
		},

		popup: null,
		handle: null,
		handleText: null,

		_create: function() {
			this.currentValue = null;
			this.popupVisible = false;

			var self = this,
			inputElement = $(this.element),
			slider,
			showPopup,
			hidePopup,
			positionPopup,
			updateSlider,
			slider_bar,
			max_value,
			handle_press;

			// apply jqm slider
			inputElement.slider();

			// hide the slider input element proper
			inputElement.hide();

			self.popup = $('<div class="ui-slider-popup"></div>');

			// set the popupEnabled according to the html attribute
			var popupEnabledAttr = inputElement.attr('data-popupenabled');
			if (popupEnabledAttr !== undefined) {
				self.options.popupEnabled = popupEnabledAttr==='true';
			}

			// get the actual slider added by jqm
			slider = inputElement.next('.ui-slider');

			// get the handle
			self.handle = slider.find('.ui-slider-handle');

			// remove the rounded corners from the slider and its children
			slider.removeClass('ui-btn-corner-all');
			slider.find('*').removeClass('ui-btn-corner-all');

			// add icon
			var icon = inputElement.attr('data-icon');
			if (icon == 'bright') {
				slider.before($('<div class="ui-slider-left-bright"></div>'));
				slider.after($('<div class="ui-slider-right-bright"></div>'));
			} else if (icon == 'volume') {
				slider.before($('<div class="ui-slider-left-volume"></div>'));
				slider.after($('<div class="ui-slider-right-volume"></div>'));
			} else if (icon == 'text') {
				slider.before($('<div class="ui-slider-left-text">' +
					'<span style="position:relative;top:0.4em;">' +
					inputElement.attr('data-text-left') +
					'</span></div>'));
				slider.after($('<div class="ui-slider-right-text">' +
					'<span style="position:relative;top:0.4em;">' +
					inputElement.attr('data-text-right') +
					'</span></div>'));
			}

			// slider bar
			slider.append($('<div class="ui-slider-bar"></div>'));
			self.slider_bar = slider.find('.ui-slider-bar');

			// handle press
			slider.append($('<div class="ui-slider-handle-press"></div>'));
			self.handle_press = slider.find('.ui-slider-handle-press');

			self.max_value = inputElement.attr('max') - inputElement.attr('min');

			// add a popup element (hidden initially)
			slider.before(self.popup);
			self.popup.hide();

			// get the element where value can be displayed
			self.handleText = slider.find('.ui-btn-text');

			// set initial value
			self.updateSlider();

			// bind to changes in the slider's value to update handle text
			this.element.bind('change', function () {
				self.updateSlider();
			});

			// bind clicks on the handle to show the popup
			self.handle.bind('vmousedown', function () {
				self.showPopup();
			});

			// watch events on the document to turn off the slider popup
			slider.add(document).bind('vmouseup', function () {
				self.hidePopup();
			});
		},

		_handle_press_show: function () {
			this.handle_press.css('z-index', 15);
		},

		_handle_press_hide: function () {
			this.handle_press.css('z-index', 5);
		},

		// position the popup
		positionPopup: function () {
			this.popup.position({my: 'center bottom',
				at: 'center top',
				offset: '0 20px',
				of: this.handle});
	       },

		// show value on the handle and in popup
		updateSlider: function () {
			this.positionPopup();

			// remove the title attribute from the handle (which is
			// responsible for the annoying tooltip); NB we have
			// to do it here as the jqm slider sets it every time
			// the slider's value changes :(
			this.handle.removeAttr('title');

			var newValue = this.element.val();

			if (newValue !== this.currentValue) {
				this.currentValue = newValue;
				this.handleText.html(newValue);
				this.popup.html(newValue);
				this.element.trigger('update', newValue);

				var bar_size = 100 * newValue / this.max_value;
				this.slider_bar.width(bar_size + '%');
				this.handle_press.css('left', bar_size + '%');
			}
		},

		// show the popup
		showPopup: function () {
			var needToShow = (this.options.popupEnabled && !this.popupVisible);

			if (needToShow) {
				this.handleText.hide();
				this.popup.show();
				this.popupVisible = true;
				this._handle_press_show();
			}
		},

		// hide the popup
		hidePopup: function () {
			var needToHide = (this.options.popupEnabled && this.popupVisible);
			if (needToHide) {
				this.handleText.show();
				this.popup.hide();
				this.popupVisible = false;
				this._handle_press_hide();
			}
		},

		_setOption: function(key, value) {
			var needToChange = value !== this.options[key];
			switch (key) {
			case 'popupEnabled':
				if (needToChange) {
					this.options.popupEnabled = value;

					if (this.options.popupEnabled) {
						this.updateSlider();
					} else {
						this.hidePopup();
					}
				}
				break;
			}
		},
	});

	// stop jqm from initialising sliders
	$(document).bind("pagebeforecreate", function (e) {
		if ($.data(window, "jqmSliderInitSelector") === undefined ) {
			$.data(window,"jqmSliderInitSelector",
				$.mobile.slider.prototype.options.initSelector);
			$.mobile.slider.prototype.options.initSelector = null;
		}
	});

	// initialise sliders with our own slider
	$(document).bind("pagecreate", function(e) {
		var jqmSliderInitSelector = $.data(window,"jqmSliderInitSelector");
		$(e.target).find(jqmSliderInitSelector).not('select').todonsslider();
		$(e.target).find(jqmSliderInitSelector).filter('select').slider();
	});

})(jQuery, this);
