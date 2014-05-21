/*global window, define */
/*
* Copyright (c) 2013 - 2014 Samsung Electronics Co., Ltd
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
/*jslint nomen: true, plusplus: true */

/**
 * #Popup Widget
 *
 * ##Default selectors
 * All elements with class=ui-popup will be become Popup widgets
 *
 * ##Manual constructor
 * To create the widget manually you can use the instanceWidget method
 *
 *     @example
 *         var popup = ns.engine.instanceWidget(document.getElementById('popup'), 'popup');
 *         //or
 *         var popup = tau.widget.popup(document.getElementById('popup'));
 * 
 * #HTML Examples
 *
 * ###Simple popup
 * <div id="popup-example" class="ui-popup">
 *		Hello world!
 * </div>
 * @author Maciej Urbanski <m.urbanski@samsung.com>
 * @author Krzysztof Antoszek <k.antoszek@samsung.com>
 * @author Piotr Karny <p.karny@samsung.com>
 * @class ns.widget.wearable.Popup
 * @extends ns.widget.BaseWidget
 */
(function (window, document, screen, ns) {
	"use strict";
	//>>excludeStart("tauBuildExclude", pragmas.tauBuildExclude);
	define(
		[
			"../../selectors",
			"../../../../core/engine",
			"../../../../core/util/object",
			"../../../../core/util/DOM/css",
			"../../../../core/widget/BaseWidget",
			"../wearable"
		],
		function () {
			//>>excludeEnd("tauBuildExclude");
			var Popup = function () {
					var self = this,
						ui = {};

					/**
					 * @property {Object} options Options for widget
					 * @property {string|boolean} [options.header=false] Header content
					 * @property {string|boolean} [options.footer=false] Footer content
					 * @member ns.widget.wearable.Popup
					 * @instance
					 */
					self.options = {
						header: false,
						footer: false
					};

					/**
					 * @private
					 * @property {?DOMTokenList} [_elementClassList=null] Popup element classList 
					 * @member ns.widget.wearable.Popup
					 * @instance
					 */
					self._elementClassList = null;

					/**
					 * @property {Object} ui A collection of UI elements
					 * @property {?HTMLElement} [ui.header=null] Header element
					 * @property {?HTMLElement} [ui.footer=null] Footer element
					 * @property {?HTMLElement} [ui.content=null] Content element
					 * @member ns.widget.wearable.Popup
					 * @instance
					 */
					self.ui = ui;
					ui.header = null;
					ui.footer = null;
					ui.content = null;

					/**
					 * @property {boolean} [active=false] Popup state flag
					 * @member ns.widget.wearable.Popup
					 * @instance
					 */
					self.active = false;
				},
				/**
				* @property {Function} BaseWidget Alias for {@link ns.widget.BaseWidget}
				* @member ns.widget.wearable.Popup
				* @private
				*/
				BaseWidget = ns.widget.BaseWidget,
				/**
				* @property {ns.engine} engine Alias for class ns.engine
				* @member ns.widget.wearable.Popup
				* @private
				*/
				engine = ns.engine,
				/**
				* @property {Object} utilsObject Alias for class ns.util.events
				* @member ns.widget.wearable.Popup
				* @private
				*/
				utilsObject = ns.util.object,
				/**
				* @property {ns.util.selectors} selectors Alias for class ns.selectors
				* @member ns.widget.wearable.Popup
				* @private
				*/
				selectors = ns.wearable.selectors,
				prototype = new BaseWidget(),
				/**
				* @property {Object} classes Dictionary for popup related css class names
				* @member ns.widget.wearable.Popup
				* @static
				*/
				classes = {
					active: "ui-popup-active",
					header: "ui-popup-header",
					footer: "ui-popup-footer",
					content: "ui-popup-content",
					background: "ui-popup-background",
					toast: "ui-popup-toast"
				};

			/**
			* @property {Object} events Dictionary for popup related events
			* @member ns.widget.wearable.Popup
			* @static
			*/
			Popup.events = {
				show: "popupshow",
				hide: "popuphide",
				before_show: "popupbeforeshow",
				before_hide: "popupbeforehide"
			};
			Popup.classes = classes;

			/**
			 * @property {string} [popup=".ui-popup"] Selector for popup element
			 * @member ns.wearable.selectors
			 */
			selectors.popup = ".ui-popup";

			/**
			* Build the popup DOM tree
			* @method _build
			* @protected
			* @instance
			* @param {HTMLElement} element
			* @return {HTMLElement}
			* @member ns.widget.wearable.Popup
			*/
			prototype._build = function ( element) {
				var ui = this.ui,
					options = this.options,
					header = element.querySelector("." + classes.header),
					content = element.querySelector("." + classes.content),
					footer = element.querySelector("." + classes.footer),
					i,
					l,
					node;

				if (!content) {
					content = document.createElement("div");
					content.className = classes.content;
					if (element.children.length > 0) {
						for (i = 0, l = element.children.length; i < l; ++i) {
							node = element.children[i];
							if (node !== footer && node !== header) {
								content.appendChild(element.children[i]);
							}
						}
					}
					element.appendChild(content);
				}

				if (!header && options.header !== false) {
					header = document.createElement("div");
					header.className = classes.header;
					if (typeof options.header !== "boolean") {
						header.innerHTML = options.header;
					}
					element.insertBefore(header, content);
				}

				if (!footer && options.footer !== false) {
					footer = document.createElement("div");
					footer.className = classes.footer;
					if (typeof options.footer !== "boolean") {
						footer.innerHTML = options.footer;
					}
					element.appendChild(footer);
				}

				ui.header = header;
				ui.content = content;
				ui.footer = footer;

				return element;
			};

			/**
			* Initialize popup
			* @method _init
			* @protected
			* @instance
			* @param {HTMLElement} element
			* @member ns.widget.wearable.Popup
			*/
			prototype._init = function (element) {
				var self = this,
					ui = self.ui;

				// re-init if already built
				if (!ui.header) {
					ui.header = element.querySelector("." + classes.header);
				}
				if (!ui.footer) {
					ui.footer = element.querySelector("." + classes.footer);
				}
				if (!ui.content) {
					ui.content = element.querySelector("." + classes.content);
				}
				ui.content.style.overflowY = "scroll";
				self._elementClassList = element.classList;
				self._refresh();
			};

			/**
			* Bind events
			* @method _bindEvents
			* @protected
			* @instance
			* @member ns.widget.wearable.Popup
			*/
			prototype._bindEvents = function () {
				var self = this;
				self.closeFunction = function () {
					self.close({transition: "none"});
				};
				self.onResize = function () {
					if (self.active === true) {
						self._refresh();
					}
				};
				window.addEventListener("resize", self.onResize, false);
				document.addEventListener("pagebeforehide", self.closeFunction, false);
			};

			/**
			* Destroy the popup
			* @method _destroy
			* @protected
			* @instance
			* @member ns.widget.wearable.Popup
			*/
			prototype._destroy = function () {
				window.removeEventListener("resize", this.onResize, false);
				document.removeEventListener("pagebeforehide", this.closeFunction, false);
			};

			/**
			* Refresh the popup 
			* @method _refresh
			* @protected
			* @instance
			* @member ns.widget.wearable.Popup
			*/
			prototype._refresh = function () {
				var ui = this.ui,
					header = ui.header,
					footer = ui.footer,
					element = this.element,
					content = ui.content,
					props = {
						"margin-top": 0,
						"margin-bottom": 0,
						"margin-left": 0,
						"margin-right": 0,
						"padding-top": 0,
						"padding-bottom": 0,
						"border-width": 0,
						"display": null
					},
					elementStyle = element.style,
					contentStyle = content.style,
					borderWidth,
					headerHeight = 0,
					footerHeight = 0,
					contentHeight = 0,
					contentWidth,
					isToast = element.classList.contains(classes.toast),
					dom = ns.util.DOM,
					originalDisplay = '',
					originalVisibility = '',
					isDisplayNone;

				dom.extractCSSProperties(element, props);

				borderWidth = parseFloat(props["border-width"]) || 0;

				isDisplayNone = props.display === "none";

				if (isDisplayNone) {
					originalDisplay = elementStyle.display;
					originalVisibility = elementStyle.visibility;
					elementStyle.visibility = "hidden";
					elementStyle.display = "block";
				}

				contentWidth = window.innerWidth - (parseInt(props["margin-left"], 10) + parseInt(props["margin-right"], 10));
				elementStyle.width = contentWidth + "px";

				if (!isToast) {
					if (header) {
						headerHeight = header.offsetHeight;
					}

					if (footer) {
						footerHeight = footer.offsetHeight;
					}

					contentHeight = window.innerHeight - (parseInt(props["margin-top"], 10) + parseInt(props["margin-bottom"], 10));

					elementStyle.height = contentHeight + "px";
					contentStyle.height = (contentHeight - headerHeight - footerHeight - borderWidth * 2 - (parseFloat(props["padding-top"]) + parseFloat(props["padding-bottom"]))) + "px";
					contentStyle.overflowY = "scroll";
				}

				if (isDisplayNone) {
					elementStyle.display = originalDisplay;
					elementStyle.visibility = originalVisibility;
				}
			};

			/**
			* Set the state of the popup
			* @method _setActive
			* @param {boolean} active
			* @protected
			* @instance
			* @member ns.widget.wearable.Popup
			*/
			prototype._setActive = function (active) {
				var activeClass = classes.active,
					elementCls = this._elementClassList;
				if (active) {
					elementCls.add(activeClass);
				} else {
					elementCls.remove(activeClass);
				}

				this.active = elementCls.contains(activeClass);
			};

			/**
			* Open the popup 
			* @method open
			* @param {Object=} [options]
			* @param {string=} [options.transition] options.transition
			* @param {string=} [options.ext= in ui-pre-in] options.ext
			* @instance
			* @member ns.widget.wearable.Popup
			*/
			prototype.open = function (options) {
				var transitionOptions = utilsObject.merge({}, options, {ext: " in ui-pre-in "}),
					events = Popup.events,
					self = this,
					element = self.element,
					container = document.createElement("div");

				container.classList.add(classes.background);
				container.appendChild(element.parentElement.replaceChild(container, element));

				if (element.classList.contains(classes.toast)) {
					container.addEventListener("click", self.closeFunction, false);
				}
				self.background = container;

				self.trigger(events.before_show);
				self._transition(transitionOptions, function () {
					self._setActive(true);
					self.trigger(events.show);
				});
			};

			/**
			* Close the popup 
			* @method close
			* @param {Object=} [options]
			* @param {string=} [options.transition]
			* @param {string=} [options.ext= in ui-pre-in] options.ext 
			* @instance
			* @member ns.widget.wearable.Popup
			*/
			prototype.close = function (options) {
				var transitionOptions = utilsObject.merge({}, options, {ext: " in ui-pre-in "}),
					events = Popup.events,
					self = this,
					element = self.element,
					container = self.background,
					parent = container.parentElement;

				if (element.classList.contains(classes.toast)) {
					container.removeEventListener("click", self.closeFunction, false);
				}

				if ( parent ) {
					parent.appendChild(element);
					parent.removeChild(container);
				}
				container = null;

				self.trigger(events.before_hide);
				self._transition(transitionOptions, function () {
					self._setActive(false);
					self.trigger(events.hide);
				});
			};

			/**
			* Animate popup opening/closing
			* @method _transition
			* @protected
			* @instance
			* @param {Object} [options]
			* @param {string=} [options.transition]
			* @param {string=} [options.ext]
			* @param {?Function} [resolve]
			* @member ns.widget.wearable.Popup
			*/

			prototype._transition = function (options, resolve) {
				var self = this,
					transition = options.transition || self.options.transition || '',
					transitionClass = transition + options.ext,
					element = self.element,
					elementClassList = element.classList,
					pageContainer = engine.getRouter().getContainer().element,
					deferred = {
						resolve: resolve
					},
					animationEnd = function () {
						element.removeEventListener("animationend", animationEnd, false);
						element.removeEventListener("webkitAnimationEnd", animationEnd, false);
						pageContainer.classList.remove("ui-viewport-transitioning");
						transitionClass.split(" ").forEach(function (cls) {
							var _cls = cls.trim();
							if (_cls.length > 0) {
								elementClassList.remove(_cls);
							}
						});
						deferred.resolve();
					};

				if (transition !== "none") {
					element.addEventListener("animationend", animationEnd, false);
					element.addEventListener("webkitAnimationEnd", animationEnd, false);
					pageContainer.classList.add("ui-viewport-transitioning");
					transitionClass.split(" ").forEach(function (cls) {
						var _cls = cls.trim();
						if (_cls.length > 0) {
							elementClassList.add(_cls);
						}
					});
				} else {
					window.setTimeout(deferred.resolve, 0);
				}
				return deferred;
			};

            Popup.prototype = prototype;

			engine.defineWidget(
				"popup",
				".ui-popup",
				["setActive", "show", "hide", "open", "close"],
				Popup,
				"wearable"
			);
			ns.widget.wearable.Popup = Popup;
			//>>excludeStart("tauBuildExclude", pragmas.tauBuildExclude);
			return Popup;
		}
	);
	//>>excludeEnd("tauBuildExclude");
}(window, window.document, window.screen, ns));
