/*
 * Copyright (c) 2015 Samsung Electronics Co., Ltd
 *
 * Licensed under the Flora License, Version 1.1 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://floralicense.org/license/
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* global window, define, ns */
/**
 * #NumberPicker Widget
 *
 * @class ns.widget.wearable.NumberPicker
 * @since 3.0
 * @extends ns.widget.core.BaseWidget
 * @author Tomasz Lukawski <t.lukawski@samsung.com>
 */
(function (window, document) {
	"use strict";
	//>>excludeStart("tauBuildExclude", pragmas.tauBuildExclude);
	define(
		[
			"../wearable",
			"../../../../core/widget/BaseWidget",
			"./CircleIndicator"
		],
		function () {
			//>>excludeEnd("tauBuildExclude");

			var /**
				 * Alias for class {@link ns.util.selectors}
				 * @property {Object} engine
				 * @member ns.widget.core.NumberPicker
				 * @private
				 * @static
				 */
				selectors = ns.util.selectors,
				prototype = new ns.widget.BaseWidget(),
				WIDGET_CLASS = "ui-number-picker",
				WIDGET_SELECTOR = "input[type='number']",
				classes = {
					CONTAINER: WIDGET_CLASS + "-container",
					NUMBER: WIDGET_CLASS + "-number",
					NUMBER_BLINK: WIDGET_CLASS + "-number-blink",
					LABEL: WIDGET_CLASS + "-label",
					LABEL_PRESSED: WIDGET_CLASS + "-label-pressed",
					BUTTON_SET: WIDGET_CLASS + "-set",
					DISABLED: WIDGET_CLASS + "-disabled"
				};

			function NumberPicker() {
				var self = this;

				self.options = {
					min: 0,
					max: 12,
					step: 1,
					disabled: false,
					accelerated: 0
				};

				// other widgets instances using by number picker
				self._circleIndicator = null;

				// widget UI cache
				self._ui = {
					number: null,
					container: null,
					indicator: null,
					buttonSet: null,
					label: null,
					footer: null
				};
			}
			NumberPicker.classes = classes;

			/**
			 * Method trying find label for number element or create label element if not found it
			 * @param {HTMLElement} element
			 * @method _extractLabel
			 * @member ns.widget.core.NumberPicker
			 * @protected
			 */
			prototype._extractLabel = function (element) {
				var elementId = "",
					label = null;

				// find label by "for" attribute
				elementId = element.getAttribute("id");
				if (elementId) {
					label = document.querySelector("*[for=\"" + elementId + "\"]");
				}
				// check closing label
				if (!label) {
					label = selectors.getClosestByTag(element, "label");
				}

				// replace label by element
				if (label && element.parentElement === label) {
					label.parentElement.replaceChild(element, label);
				}

				// if label not existed before then create it
				if (!label) {
					label = document.createElement("label");
					element.parentNode.appendChild(label);
				}

				return label;
			};

			/**
			 * Method searching footer of closing page or popup-element
			 * @param {HTMLElement} element
			 * @method _findFooter
			 * @member ns.widget.core.NumberPicker
			 * @protected
			 */
			prototype._findFooter = function (element) {
				var page = selectors.getClosestBySelector(element, ".ui-page, .ui-popup"),
					footerClasslist = null,
					footer = null;

				// find close page or popup element
				if (page) {
					footer = page.querySelector("footer, .ui-footer, .ui-popup-footer");
					if (!footer) {
						footer = document.createElement("footer");
						page.appendChild(footer);
					}

					// add standard footer class for footer with button
					footerClasslist = footer.classList;
					footerClasslist.add("ui-footer");
					footerClasslist.add("ui-bottom-button");
					footerClasslist.add("ui-fixed");
				}

				return footer;
			};

			/**
			 * Create dependent widgetes
			 * @method _createWidgets
			 * @member ns.widget.core.NumberPicker
			 * @protected
			 */
			prototype._createWidgets = function () {
				var self = this,
					ui = self._ui,
					options = self.options;

				// Create circle indicator widget
				self._circleIndicator = ns.widget.CircleIndicator(ui.indicator, {
					text: options.circleType || "none",
					circleR: options.circleR || 0,
					from: options.from || 0,
					to: options.to || 360,
					indicatorType: "line",
					indicatorHeight: 21,
					indicatorColor: "rgba(249,123,47,1)",
					indicatorWidth: 6,
					indicatorR: 180,

					bigTick: options.bigTick || 0,
					bigTickR: options.bigTickR || 0,
					bigTickHeight: options.bigTickHeight || 0,
					bigTickWidth: options.bigTickWidth,

					smallTick: options.smallTick || 0,
					smallTickR: options.smallTickR || 0,
					smallTickHeight: options.smallTickHeight || 0
				});
			};

			/**
			 * Collect attributes of input element and convert to widget options
			 * @param {HTMLElement} element
			 * @protected
			 * @method _getOptions
			 * @member ns.widget.core.NumberPicker
			 */
			prototype._getOptions = function (element) {
				var options = this.options;

				element = this.element || element;

				options.min = parseInt(element.getAttribute("min"), 10);
				options.max = parseInt(element.getAttribute("max"), 10);
				options.step = parseInt(element.getAttribute("step"), 10);
				options.disabled = element.getAttribute("disabled", 10);
			};

			/**
			 * Collect attributes of input element when widget is creating
			 * @param {HTMLElement} element
			 * @protected
			 * @method _configure
			 * @member ns.widget.core.NumberPicker
			 */
			prototype._configure = function (element) {
				this._getOptions(element);
			};

			/**
			 * Toggle widget state of disabled/enabled
			 * @param {boolean} disabled
			 * @protected
			 * @method _toggle
			 * @member ns.widget.core.NumberPicker
			 */
			prototype._toggle = function (disabled) {
				var self = this;

				self.options.disabled = disabled;

				// update disabled state
				if (disabled) {
					self._ui.container.classList.add(classes.DISABLED);
				} else {
					self._ui.container.classList.remove(classes.DISABLED);
				}
			};

			/**
			 * Refresh number picker
			 * eg. after change of element attributes like "max" or "min"
			 * @protected
			 * @method _refresh
			 * @member ns.widget.core.NumberPicker
			 */
			prototype._refresh = function () {
				var self = this,
					element = self.element;

				self._getOptions();
				self._setValue(element.getAttribute("value"));

				self._toggle(!!self.options.disabled);
			};

			/**
			 * Update visual representation of value of number picker
			 * @param {number} value
			 * @protected
			 * @method _updateValue
			 * @member ns.widget.core.NumberPicker
			 */
			prototype._updateValue = function (value) {
				var self = this,
					ui = self._ui,
					delta = self.options.max - self.options.min;

				ui.number.innerHTML = value;

				/**
				 * Cirecle indicator showing radius value.
				 * Number Picker value has to be calculated as proportion of full angle
				 */
				if (delta > 0) {
					self._circleIndicator.value(360 * value / delta);
				} else {
					self._circleIndicator.value(0);
				}
			};

			/**
			 * Get value of number picker
			 * @protected
			 * @method _getValue
			 * @member ns.widget.core.NumberPicker
			 * @return {number}
			 */
			prototype._getValue = function () {
				return parseInt(this.element.value, 10);
			};

			/**
			 * Set value of number picker
			 * @param {number} value
			 * @protected
			 * @method _setValue
			 * @member ns.widget.core.NumberPicker
			 */
			prototype._setValue = function (value) {
				var self = this,
					element = self.element,
					options = self.options;

				value = parseInt(value, 10);
				value = Math.max(Math.min(value, options.max), options.min);

				element.setAttribute("value", value);
				element.value = value;

				self._updateValue(element.value);
			};

			/**
			 * Init method
			 * @protected
			 * @method _init
			 * @member ns.widget.core.NumberPicker
			 * @protected
			 */
			prototype._init = function () {
				var self = this;

				self.value(self.element.value);

				// update disabled state
				self._toggle(!!self.options.disabled);
			};

			/**
			 * Build widget instance
			 * @param {HTMLElement} element
			 * @protected
			 * @method _build
			 * @member ns.widget.core.NumberPicker
			 */
			prototype._build = function (element) {
				var self = this,
					ui = self._ui,
					indicator = document.createElement("div"),
					container = document.createElement("div"),
					number = document.createElement("span"),
					buttonSet = document.createElement("button"),
					label = null,
					footer = null;

				// find or create label and footer
				label = self._extractLabel(element);
				footer = self._findFooter(element);

				// add classes
				container.classList.add(classes.CONTAINER);
				number.classList.add(classes.NUMBER);
				label.classList.add(classes.LABEL);

				// create button set
				buttonSet.innerHTML = "SET";
				buttonSet.classList.add("ui-btn");
				buttonSet.classList.add(classes.BUTTON_SET);
				// add "set" button to the footer
				footer.appendChild(buttonSet);

				// build DOM structure
				container.appendChild(number);
				container.appendChild(indicator);
				container.appendChild(label);

				// add widget container
				element.parentElement.appendChild(container);
				container.appendChild(element);

				// cache ui elements
				ui.indicator = indicator;
				ui.container = container;
				ui.number = number;
				ui.buttonSet = buttonSet;
				ui.label = label;
				ui.footer = footer;

				// Create widgets
				self._createWidgets();

				return element;
			};

			/**
			 * Destroy widget instance
			 * @protected
			 * @method _destroy
			 * @member ns.widget.core.NumberPicker
			 */
			prototype._destroy = function () {
				var self = this,
					ui = self._ui,
					container = ui.container,
					footer = ui.footer;

				self._unbindEvents();

				// destroy widgets
				self._circleIndicator.destroy();

				// remove classes
				container.classList.remove(classes.CONTAINER);
				ui.number.classList.remove(classes.NUMBER);
				ui.label.classList.remove(classes.LABEL);
				ui.buttonSet.classList.remove(classes.BUTTON_SET);
				footer.classList.remove("ui-bottom-button");

				// recovery DOM structure
				container.parentElement.replaceChild(self.element, container);
				footer.removeChild(ui.buttonSet);
			};

			function onSet(self) {
				ns.event.trigger(self.element, "change", {
					value: self.value()
				});
				history.back();
			}

			function onRotary(self, ev) {
				var step = parseInt(self.options.step, 10),
					now = Date.now(),
					accelerated = parseInt(self.options.accelerated, 10);

				if (accelerated) {
					if (now - self._previousRotaryTime < 30) {
						step *= accelerated;
					}
					self._previousRotaryTime = now;
				}

				if (ev.detail.direction === "CW") {
					self.value(self.value() + step);
				} else {
					self.value(self.value() - step);
				}
			}

			function onNumberClick(ev) {
				var target = ev.target;

				if (target) {
					target.classList.add(classes.NUMBER_BLINK);
				}
			}

			/**
			 * Bind widget event handlers
			 * @protected
			 * @method _bindEvents
			 * @member ns.widget.core.NumberPicker
			 */
			prototype._bindEvents = function () {
				var self = this;

				self._onSet = onSet.bind(null, self);
				self._onRotary = onRotary.bind(null, self);

				self._ui.buttonSet.addEventListener("click", self._onSet);
				self._ui.number.addEventListener("click", onNumberClick);
				document.addEventListener("rotarydetent", self._onRotary);
			};

			/**
			 * Unbind widget event handlers
			 * @protected
			 * @method _unbindEvents
			 * @member ns.widget.core.NumberPicker
			 */
			prototype._unbindEvents = function () {
				var self = this;

				self._ui.buttonSet.removeEventListener("click", self._onSet);
				self._ui.number.removeEventListener("click", onNumberClick);
				document.removeEventListener("rotarydetent", self._onRotary);

			};

			NumberPicker.prototype = prototype;

			// definition
			ns.widget.wearable.NumberPicker = NumberPicker;
			ns.engine.defineWidget(
				"NumberPicker",
				WIDGET_SELECTOR,
				[],
				NumberPicker,
				""
			);
			//>>excludeStart("tauBuildExclude", pragmas.tauBuildExclude);
			return NumberPicker;
		}
	);
	//>>excludeEnd("tauBuildExclude");
}(window, window.document));
