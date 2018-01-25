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
 *
 */
/*global window, define, ns, Math*/
/**
 * #ArcListview Widget
 *
 * @class ns.widget.wearable.ArcListview
 * @since 3.0
 * @extends ns.widget.wearable.Listview
 * @author Tomasz Lukawski <t.lukawski@samsung.com>
 */
(function (document, ns) {
	"use strict";
	//>>excludeStart("tauBuildExclude", pragmas.tauBuildExclude);
	define(
		[
			"../../../../core/engine",
			"../../../../core/event",
			"../../../../core/util/array",
			"../../../../core/util/selectors",
			"../../../../core/widget/core/Listview",
			"../../../../core/widget/core/Page",
			"../../../../core/widget/core/scroller/effect/Bouncing",
			// fetch namespace
			"../wearable"
		],
		function () {
			//>>excludeEnd("tauBuildExclude");

			var nsWidget = ns.widget,
				Listview = nsWidget.core.Listview,
				Page = nsWidget.core.Page,
				eventUtils = ns.event,
				slice = [].slice,
				// consts
				ELLIPSIS_A = 333,
				ELLIPSIS_B = 180,
				SCREEN_HEIGHT = 360,
				SCROLL_DURATION = 400,
				MAX_SCROLL_DURATION = 2000,
				MOMENTUM_VALUE = 20,
				MOMENTUM_MAX_VALUE = 500,
				// in ms
				TOUCH_MOVE_TIME_THRESHOLD = 140,
				// in px
				TOUCH_MOVE_Y_THRESHOLD = 10,
				// time of animation in skip animation mode, this is one animation frame and animation is
				// invisible
				ONE_FRAME_TIME = 40,
				// half of screen height - center element height (112)
				BOTTOM_MARGIN = (window.innerHeight - 112) / 2,
				/**
				 * Alias for class {@link ns.engine}
				 * @property {Object} engine
				 * @memberof ns.widget.wearable.ArcListview
				 * @protected
				 * @static
				 */
				engine = ns.engine,
				/**
				 * Alias for class {@link ns.util}
				 * @property {Object} util
				 * @memberof ns.widget.wearable.ArcListview
				 * @protected
				 * @static
				 */
				util = ns.util,
				/**
				 * Alias for class {@link ns.util.selectors}
				 * @property {Object} selectorsUtil
				 * @memberof ns.widget.wearable.ArcListview
				 * @protected
				 * @static
				 */
				selectorsUtil = util.selectors,
				/**
				 * Alias for class {@link ns.util.easing.easeOutQuad}
				 * @property {Object} timingFunction
				 * @memberof ns.widget.wearable.ArcListview
				 * @protected
				 * @static
				 */
				timingFunction = util.easing.easeOutQuad,
				/**
				 * Alias for method {@link Math.round}
				 * @property {Function} round
				 * @memberof ns.widget.wearable.ArcListview
				 * @protected
				 * @static
				 */
				round = Math.round,
				/**
				 * Alias for method {@link Math.min}
				 * @property {Function} min
				 * @memberof ns.widget.wearable.ArcListview
				 * @protected
				 * @static
				 */
				min = Math.min,
				/**
				 * Alias for method {@link Math.max}
				 * @property {Function} max
				 * @memberof ns.widget.wearable.ArcListview
				 * @protected
				 * @static
				 */
				max = Math.max,
				/**
				 * Alias for method {@link Math.sqrt}
				 * @property {Function} sqrt
				 * @memberof ns.widget.wearable.ArcListview
				 * @protected
				 * @static
				 */
				sqrt = Math.sqrt,
				/**
				 * Alias for method {@link Math.abs}
				 * @property {Function} sqrt
				 * @memberof ns.widget.wearable.ArcListview
				 * @protected
				 * @static
				 */
				abs = Math.abs,
				/**
				 * Alias for method {@link ns.util.array}
				 * @property {Object} arrayUtil
				 * @memberof ns.widget.wearable.ArcListview
				 * @protected
				 * @static
				 */
				arrayUtil = ns.util.array,
				/**
				 * Alias for class ArcListview
				 * @method ArcListview
				 * @memberof ns.widget.wearable.ArcListview
				 * @protected
				 * @static
				 */
				ArcListview = function () {
					var self = this;

					/**
					 * Object with default options
					 * @property {Object} options
					 * @property {number} [options.ellipsisA] a parameter of ellipsis equation
					 * @property {number} [options.ellipsisB] b parameter of ellipsis equation
					 * @property {number} [options.selectedIndex=0] index current selected item begins from 0
					 * @property {number} [options.bouncingTimeout=1000] time when bound effect will be hidden
					 * @memberof ns.widget.wearable.ArcListview
					 */
					self.options = {
						// selected index
						selectedIndex: 0,
						ellipsisA: ELLIPSIS_A,
						ellipsisB: ELLIPSIS_B,
						bouncingTimeout: 1000,
						visibleItems: 3
					};
					// items table on start is empty
					self._items = [];
					// the end of scroll animation
					self._scrollAnimationEnd = true;
					// carousel of five elements
					self._carousel = {
						items: []
					};
					self._initializeState();
					/**
					 * Cache for widget UI HTMLElements
					 * @property {Object} _ui
					 * @property {HTMLElement} _ui.selection element for indication of current selected item
					 * @memberof ns.widget.wearable.ArcListview
					 * @protected
					 */
					self._ui = {
						selection: null,
						scroller: null
					};
				},

				WIDGET_CLASS = "ui-arc-listview",
				/**
				 * CSS Classes using in widget
				 */
				classes = {
					WIDGET: WIDGET_CLASS,
					PREFIX: WIDGET_CLASS + "-",
					SELECTION: WIDGET_CLASS + "-selection",
					SELECTION_SHOW: WIDGET_CLASS + "-selection-show",
					CAROUSEL: WIDGET_CLASS + "-carousel",
					CAROUSEL_ITEM: WIDGET_CLASS + "-carousel-item",
					GROUP_INDEX: "ui-li-group-index",
					DIVIDER: "ui-listview-divider",
					FORCE_RELATIVE: "ui-force-relative-li-children",
					LISTVIEW: "ui-listview",
					SELECTED: "ui-arc-listview-selected"
				},
				events = {
					CHANGE: "change"
				},
				selectors = {
					PAGE: "." + Page.classes.uiPage,
					SCROLLER: ".ui-scroller",
					ITEMS: "." + WIDGET_CLASS + " > li",
					SELECTION: "." + WIDGET_CLASS + "-selection"
				},

				prototype = new Listview(),

				didScroll = false,
				averageVelocity = 0,
				sumTime = 0,
				sumDistance = 0,
				momentum = 0,
				startTouchTime = 0,
				lastTouchTime = 0,
				factorsX = [],

				lastTouchY = 0,
				deltaTouchY = 0,
				deltaSumTouchY = 0;

			/**
			 * Create item object
			 * @return {Object}
			 */
			ArcListview.createItem = function () {
				return {
					element: null,
					id: 0,
					y: 0,
					rect: null,
					current: {
						scale: -1
					},
					from: null,
					to: null,
					repaint: false
				};
			};

			/**
			 * Pre calculation of factors for Y axis
			 * @param {number} a factor X axis for ellipsis (see VI guide)
			 * @param {number} b factor Y axis for ellipsis (see VI guide)
			 * @memberof ns.widget.wearable.ArcListview
			 * @protected
			 */
			ArcListview.calcFactors = function (a, b) {
				var i;

				for (i = 0; i <= b; i++) {
					factorsX[i] = sqrt(a * a * (1 - i * i / b / b)) / a;
				}

				return factorsX;
			};

			/**
			 * Initialize state
			 * @protected
			 */
			prototype._initializeState = function () {
				/**
				 * Object with state of scroll animation
				 * @property {Object} _state
				 * @property {number} _state.startTime time of scroll animation start
				 * @property {number} _state.duration duration time of scroll animation
				 * @property {number} _state.progress current progress of scroll animation
				 * @property {Object} _state.scroll scroll state and animation objectives
				 * @property {number} _state.currentIndex current index of selected item
				 * @property {number} _state.toIndex item index as target for scroll end
				 * @property {Array} _state.items array of animated items
				 * @memberof ns.widget.wearable.ArcListview
				 * @protected
				 */
				this._state = {
					startTime: Date.now(),
					duration: 0,
					progress: 0,
					scroll: {
						current: 10,
						from: null,
						to: null
					},
					currentIndex: 0,
					toIndex: 0,
					items: []
				};
			};

			function prepareParentStyle(parentElement, parentRect) {
				var parentStyle = parentElement.style;

				parentStyle.height = parentRect.height + "px";
				parentStyle.position = "relative";
			}

			/**
			 * Set state for animation
			 * @protected
			 */
			prototype._setAnimatedItems = function () {
				var self = this,
					items = self._items,
					id = 0,
					itemElement = items[0],
					item = null,
					rect = null,
					parentRect = null,
					diffY = null,
					scroller = self._ui.scroller,
					state = self._state,
					parentElement = itemElement.parentElement,
					parentClassList = parentElement.classList,
					style = null;

				// set parent size
				parentRect = parentElement.getBoundingClientRect();
				prepareParentStyle(parentElement, parentRect);

				parentClassList.add(classes.FORCE_RELATIVE);

				arrayUtil.forEach(items, function (itemElement, i) {
					// add items to state
					if (i >= 0 && !state.items[i] && itemElement !== undefined) {
						rect = itemElement.getBoundingClientRect();
						style = itemElement.style;
						if (itemElement.classList.contains(classes.GROUP_INDEX) || itemElement.classList.contains(classes.DIVIDER)) {
							style.top = round(rect.top - parentRect.top + scroller.scrollTop) + "px";
							style.width = rect.width + "px";
						} else {
							item = ArcListview.createItem();
							item.element = itemElement;
							item.y = round(rect.top + rect.height / 2 + scroller.scrollTop);
							item.height = rect.height;
							item.rect = rect;
							item.id = id;
							id++;

							if (diffY === null) {
								diffY = rect.top - parentRect.top;
							}

							state.items.push(item);
						}
					}
				});

				parentClassList.remove(classes.FORCE_RELATIVE);
			};

			/**
			 * Update scale
			 * @param {number} currentScroll
			 * @protected
			 */
			prototype._updateScale = function (currentScroll) {
				var self = this,
					state = self._state,
					items = state.items,
					toScale = 0,
					y;

				arrayUtil.forEach(items, function (item) {
					if (item !== null) {
						y = item.y;
						if (item.id < state.currentIndex) {
							y -= item.height / 4;
						}
						if (item.id > state.currentIndex) {
							y += item.height / 4;
						}
						toScale = self._getScaleByY(y - SCREEN_HEIGHT / 2 - currentScroll);
						if (item.current.scale !== toScale) {
							item.from = item.from || {};
							item.from.scale = item.current.scale;

							item.to = item.to || {};
							item.to.scale = toScale;
						} else {
							item.to = null;
						}
					}
				});
			};

			function calcItem(item) {
				if (item !== null && item.to !== null) {
					item.current.scale = item.to.scale;
					item.repaint = true;
				}
			}

			/**
			 * Calculate state
			 * @protected
			 */
			prototype._calc = function () {
				var self = this,
					state = self._state,
					currentTime = Date.now(),
					startTime = state.startTime,
					deltaTime = currentTime - startTime,
					scroll = state.scroll;

				if (deltaTime >= state.duration) {
					self._scrollAnimationEnd = true;
					deltaTime = state.duration;
				}

				state.progress = (state.duration !== 0) ? deltaTime / state.duration : 1;

				// scroll
				if (scroll.to !== null) {
					scroll.current = timingFunction(
						state.progress,
						scroll.from,
						scroll.to - scroll.from,
						1
					);
					if (self._scrollAnimationEnd) {
						self.trigger(events.CHANGE, {
							"selected": state.currentIndex
						});
						eventUtils.trigger(state.items[state.currentIndex].element, "selected");
						state.toIndex = state.currentIndex;

						scroll.to = null;
						scroll.from = null;
					}
				}
				self._updateScale(-1 * scroll.current);

				// calculate items
				arrayUtil.forEach(state.items, calcItem);
			};

			prototype._setBouncingTimeout = function () {
				var self = this;

				// hide after timeout
				setTimeout(function () {
					self._bouncingEffect.dragEnd();
				}, self.options.bouncingTimeout);
			};

			/**
			 * Draw one item
			 * @param {Object} item
			 * @param {number} index
			 * @protected
			 */
			prototype._drawItem = function (item, index) {
				var self = this,
					state = self._state,
					carousel = self._carousel,
					middleItemIndex = Math.ceil(self.options.visibleItems / 2) + 1,
					itemElement,
					itemStyle;

				if (item !== null) {
					itemElement = item.element;
					if (item.repaint) {
						itemStyle = itemElement.style;
						if (index - state.currentIndex < middleItemIndex &&
							index - state.currentIndex > -middleItemIndex) {
							carousel.items[index - state.currentIndex + middleItemIndex - 1]
								.carouselElement.appendChild(item.element);
						}
						itemStyle.transform = "translateY(-50%) scale(" + item.current.scale + ")";
						itemStyle.opacity = item.current.scale * 1.15;
						item.repaint = false;
					} else {
						if (itemElement.parentNode !== null && item.current.scale === 0) {
							itemElement.parentNode.removeChild(itemElement);
						}
					}
				}
			};

			/**
			 * Draw widget
			 * @method _draw
			 * @protected
			 * @memberof ns.widget.wearable.ArcListview
			 */
			prototype._draw = function () {
				var self = this,
					state = self._state,
					items = state.items,
					length = items.length,
					i;

				// draw items
				for (i = 0; i < length; i++) {
					self._drawItem(items[i], i);
				}
				self._carouselUpdate(state.currentIndex);

				// scroller update
				self._ui.scroller.scrollTop = -1 * state.scroll.current;
			};

			/**
			 * Update positions of items
			 * @param {number} currentIndex
			 * @protected
			 */
			prototype._carouselUpdate = function (currentIndex) {
				var self = this,
					carousel = self._carousel,
					state = self._state,
					halfItemsCount = Math.ceil(self.options.visibleItems / 2),
					item,
					len,
					i,
					top;

				for (i = -halfItemsCount, len = halfItemsCount; i <= len; i++) {
					item = state.items[currentIndex + i];
					if (item !== undefined) {
						top = (state.scroll.current + item.y - item.height / 2) + "px";
					} else {
						top = 0;
					}
					carousel.items[i + halfItemsCount].carouselElement.style.top = top;
				}
			};

			/**
			 * Render widget
			 * @method _render
			 * @protected
			 * @memberof ns.widget.wearable.ArcListview
			 */
			prototype._render = function () {
				var self = this,
					state = self._state;

				self._calc();
				self._draw();

				if (!self._scrollAnimationEnd) {
					state.currentIndex = self._findItemIndexByY(
						-1 * (state.scroll.current - SCREEN_HEIGHT / 2 + 1));
					util.cancelAnimationFrame(self._animationHandle);
					self._animationHandle = util.requestAnimationFrame(self._render.bind(self));
				}
			};

			/**
			 * Find closer item for given "y" position
			 * @method _findItemIndexByY
			 * @param {number} y
			 * @return {number}
			 * @protected
			 * @memberof ns.widget.wearable.ArcListview
			 */
			prototype._findItemIndexByY = function (y) {
				var items = this._state.items,
					len = items.length,
					minY = items[0].y,
					maxY = items[len - 1].y,
					prev,
					current,
					next,
					loop = true,
					diffY = maxY - minY,
					tempIndex = diffY !== 0 ? round((y - minY) / (diffY) * len) : 0;

				tempIndex = min(len - 1, max(0, tempIndex));

				while (loop) {
					prev = abs((items[tempIndex - 1]) ? y - items[tempIndex - 1].y : Infinity);
					current = abs(y - items[tempIndex].y);
					next = abs((items[tempIndex + 1]) ? y - items[tempIndex + 1].y : -Infinity);

					if (prev < current) {
						tempIndex--;
					} else if (next < current) {
						tempIndex++;
					} else {
						loop = false;
					}
				}

				return tempIndex;
			};

			/**
			 * Refresh method
			 * @method _refresh
			 * @memberof ns.widget.wearable.ArcListview
			 * @protected
			 */
			prototype._refresh = function () {
				var self = this,
					state = self._state,
					currentTime = Date.now(),
					deltaTime = currentTime - lastTouchTime,
					items = state.items,
					currentItem,
					toY,
					scroll = state.scroll;

				sumTime += -1 * deltaTime;
				sumDistance += deltaTouchY;
				averageVelocity = sumDistance / sumTime;

				if (momentum !== 0) {
					momentum *= averageVelocity;
					// momentum value has to be limited to defined max value
					momentum = max(min(momentum, MOMENTUM_MAX_VALUE), -MOMENTUM_MAX_VALUE);

					toY = -1 * (scroll.current - momentum - SCREEN_HEIGHT / 2 + 1);
					// snap to closer item
					currentItem = self._findItemIndexByY(toY);
					toY = items[currentItem].y;

					state.currentIndex = currentItem;
					scroll.from = scroll.current;
					scroll.to = -1 * (toY - SCREEN_HEIGHT / 2 + 1);

					state.duration = min(SCROLL_DURATION * max(averageVelocity, 1), MAX_SCROLL_DURATION);
				}


				if (self._scrollAnimationEnd) {
					state.startTime = Date.now();
					self._scrollAnimationEnd = false;
					self._animationHandle = util.requestAnimationFrame(self._render.bind(self));
				}
			};

			/**
			 * Simulate scroll
			 * @protected
			 */
			prototype._scroll = function () {
				var self = this;

				momentum = (momentum === undefined) ? 0 : momentum;

				self._refresh();
				util.cancelAnimationFrame(self._animationHandle);
				self._animationHandle = util.requestAnimationFrame(self._render.bind(self));
			};

			/**
			 * Calculate scale for given Y position
			 * @param {number} y
			 * @return {number}
			 * @protected
			 */
			prototype._getScaleByY = function (y) {
				var self = this,
					roundY = round(y);

				if (roundY > self.options.ellipsisB || roundY < -self.options.ellipsisB) {
					return 0;
				} else {
					return factorsX[abs(roundY)];
				}
			};

			/**
			 * Redraw list after roll down/up
			 * @method _roll
			 * @param {number} duration Time of rolling
			 * @memberof ns.widget.wearable.ArcListview
			 * @protected
			 */
			prototype._roll = function (duration) {
				var self = this,
					state = self._state,
					scroll = state.scroll;

				// increase scroll duration according to length of items
				// one item more increase duration +25%
				// scroll duration is set to 0 when animations are disabled
				state.duration = duration !== undefined ? duration :
					SCROLL_DURATION * (1 + (abs(state.currentIndex - state.toIndex) - 1) / 4);

				// start scroll animation from current scroll position
				scroll.from = scroll.current;
				scroll.to = -1 * (state.items[state.toIndex].y - SCREEN_HEIGHT / 2 + 1);

				// if scroll animation is ended then aniamtion start
				if (self._scrollAnimationEnd) {
					state.startTime = Date.now();
					self._scrollAnimationEnd = false;
					self._animationHandle = util.requestAnimationFrame(self._render.bind(self));
				}
			};

			/**
			 * Change to next item
			 * @method _rollDown
			 * @memberof ns.widget.wearable.ArcListview
			 * @protected
			 */
			prototype._rollDown = function () {
				var self = this,
					state = self._state,
					bouncingEffect = self._bouncingEffect;

				self.trigger(events.CHANGE, {
					"unselected": state.currentIndex
				});

				if (state.toIndex < state.items.length - 1) {
					state.toIndex++;
					// hide end effect
					bouncingEffect.dragEnd();
				} else {
					// show bottom end effect
					bouncingEffect.drag(0, -self._maxScrollY);
					// hide after timeout
					self._setBouncingTimeout();
				}

				self._roll();
			};

			/**
			 * Change to prev item
			 * @method _rollUp
			 * @memberof ns.widget.wearable.ArcListview
			 * @protected
			 */
			prototype._rollUp = function () {
				var self = this,
					state = self._state,
					bouncingEffect = self._bouncingEffect;

				self.trigger(events.CHANGE, {
					"unselected": state.currentIndex
				});


				if (state.toIndex > 0) {
					state.toIndex--;
					// hide end effect
					bouncingEffect.dragEnd();
				} else {
					// show top end effect
					bouncingEffect.drag(0, 0);
					// hide after timeout
					self._setBouncingTimeout();
				}

				self._roll();
			};

			/**
			 * Callback for rotary event
			 * @param {Event} event
			 * @protected
			 */
			prototype._onRotary = function (event) {
				var self = this;

				self._scrollAnimationEnd = true;
				if (event.detail.direction === "CW") {
					self._rollDown();
				} else {
					self._rollUp();
				}
			};

			/**
			 * Scroll list to index
			 * @method scrollToPosition
			 * @param {number} index
			 * @param {boolean} skipAnimation
			 * @public
			 * @return {boolean} True if the list was scrolled, false - otherwise.
			 * @member ns.widget.wearable.SnapListview
			 */
			prototype.scrollToPosition = function (index, skipAnimation) {
				var self = this,
					state = self._state;

				self.trigger(events.CHANGE, {
					"unselected": state.currentIndex
				});

				state.toIndex = index;

				if (state.toIndex > state.items.length - 1) {
					state.toIndex = state.items.length - 1;
				}

				if (state.toIndex < 0) {
					state.toIndex = 0;
				}

				if (skipAnimation) {
					self._roll(ONE_FRAME_TIME);
				} else {
					self._roll();
				}
			};

			/**
			 * Get selected index
			 * @method getSelectedIndex
			 * @return {number} index
			 * @public
			 * @member ns.widget.wearable.SnapListview
			 */
			prototype.getSelectedIndex = function () {
				return this._state.currentIndex;
			};

			/**
			 * Handler for event touch start
			 * @method _onTouchStart
			 * @param {Event} event
			 * @memberof ns.widget.wearable.ArcListview
			 * @protected
			 */
			prototype._onTouchStart = function (event) {
				var self = this,
					touch = event.changedTouches[0],
					state = self._state;

				deltaTouchY = 0;
				lastTouchY = touch.clientY;
				startTouchTime = Date.now();
				deltaSumTouchY = 0;
				lastTouchTime = startTouchTime;
				averageVelocity = 0;
				sumTime = 0;
				sumDistance = 0;
				momentum = 0;
				self._scrollAnimationEnd = true;
				didScroll = false;

				self._carouselUpdate(state.currentIndex);
			};

			/**
			 * Handler for event touch move
			 * @method _onTouchMove
			 * @param {Event} event
			 * @memberof ns.widget.wearable.ArcListview
			 * @protected
			 */
			prototype._onTouchMove = function (event) {
				var self = this,
					state = self._state,
					touch = event.changedTouches[0],
					deltaTouchTime,
					scroll = state.scroll,
					current = scroll.current,
					bouncingEffect = self._bouncingEffect;

				// time
				lastTouchTime = Date.now();
				deltaTouchTime = lastTouchTime - startTouchTime;

				// move
				deltaTouchY = touch.clientY - lastTouchY;
				current += deltaTouchY;
				deltaSumTouchY += deltaTouchY;

				if (didScroll === false &&
					(deltaTouchTime > TOUCH_MOVE_TIME_THRESHOLD || abs(deltaSumTouchY) > TOUCH_MOVE_Y_THRESHOLD)) {
					didScroll = true;
					self.trigger(events.CHANGE, {
						"unselected": state.currentIndex
					});
				}

				if (didScroll) {
					lastTouchY = touch.clientY;
					// set current to correct range
					if (current > 0) {
						current = 0;
						// enable top end effect
						bouncingEffect.drag(0, 0);
						self._setBouncingTimeout();
					} else if (current < -self._maxScrollY) {
						current = -self._maxScrollY;
						// enable bottom end effect
						bouncingEffect.drag(0, current);
						self._setBouncingTimeout();
					} else {
						// hide end effect
						bouncingEffect.dragEnd();
					}
					scroll.current = current;

					state.currentIndex = self._findItemIndexByY(-1 * (current - SCREEN_HEIGHT / 2 + 1));
					self._carouselUpdate(state.currentIndex);

					momentum = 0;
					self._scroll();
					lastTouchTime = Date.now();
				}
			};

			/**
			 * Handler for event touch end
			 * @method _onTouchEnd
			 * @param {Event} event
			 * @memberof ns.widget.wearable.ArcListview
			 * @protected
			 */
			prototype._onTouchEnd = function (event) {
				var touch = event.changedTouches[0],
					self = this,
					state = self._state,
					scroll = state.scroll,
					bouncingEffect = self._bouncingEffect;

				if (didScroll) {
					deltaTouchY = touch.clientY - lastTouchY;
					lastTouchY = touch.clientY;
					scroll.current += deltaTouchY;
					if (scroll.current > 0) {
						scroll.current = 0;
					}

					state.currentIndex = self._findItemIndexByY(-1 * (scroll.current - SCREEN_HEIGHT / 2 + 1));
					self._carouselUpdate(state.currentIndex);

					momentum = MOMENTUM_VALUE;
					self._scrollAnimationEnd = true;
					self._scroll();
					lastTouchTime = 0;

					// bouncing effect
					if (bouncingEffect) {
						bouncingEffect.dragEnd();
					}
				}
			};

			function showHighlight(arcListviewSelection, selectedElement) {
				arcListviewSelection.style.height = selectedElement.getBoundingClientRect().height + "px";
				arcListviewSelection.classList.add(classes.SELECTION_SHOW);
			}

			/**
			 * Handler for event select
			 * @method _selectItem
			 * @param {number} selectedIndex
			 * @memberof ns.widget.wearable.ArcListview
			 * @protected
			 */
			prototype._selectItem = function (selectedIndex) {
				var ui = this._ui,
					state = this._state,
					selectedElement = state.items[selectedIndex].element;

				if (selectedElement.classList.contains(classes.SELECTED)) {
					showHighlight(ui.arcListviewSelection, selectedElement);
				} else {
					eventUtils.one(selectedElement, "transitionend", function () {
						showHighlight(ui.arcListviewSelection, selectedElement);
					});
					selectedElement.classList.add(classes.SELECTED);
				}
			};

			/**
			 * Handler for change event
			 * @method _onChange
			 * @param {Event} event
			 * @memberof ns.widget.wearable.ArcListview
			 * @protected
			 */
			prototype._onChange = function (event) {
				var selectedIndex = event.detail.selected,
					unselectedIndex = event.detail.unselected,
					classList = this._ui.arcListviewSelection.classList;

				if (!event.defaultPrevented) {
					if (selectedIndex !== undefined) {
						this._selectItem(selectedIndex);
					} else {
						classList.remove(classes.SELECTION_SHOW);
						this._state.items[unselectedIndex].element.classList.remove(classes.SELECTED);
					}
				}
			};

			/**
			 * Handler for click event
			 * @method _onClick
			 * @param {Event} event
			 * @memberof ns.widget.wearable.ArcListview
			 * @protected
			 */
			prototype._onClick = function (event) {
				var self = this,
					target = event.target,
					state = self._state,
					li = selectorsUtil.getClosestByTag(target, "li"),
					toIndex = state.items.map(function (item) {
						return item.element;
					}).indexOf(li);

				if (toIndex && toIndex !== state.currentIndex) {
					self.trigger(events.CHANGE, {
						"unselected": state.currentIndex
					});

					if (toIndex >= 0 && toIndex < state.items.length) {
						state.toIndex = toIndex;
					}

					self._roll();
				}
			};

			prototype._buildArcListviewSelection = function (page) {
				// find or add selection for current list element
				var arcListviewSelection = page.querySelector(selectors.SELECTION);

				if (!arcListviewSelection) {
					arcListviewSelection = document.createElement("div");
					arcListviewSelection.classList.add(classes.SELECTION);
					page.appendChild(arcListviewSelection);
				}
				return arcListviewSelection;
			};

			function buildArcListviewCarousel(carousel, count) {
				// create carousel
				var arcListviewCarousel = document.createElement("div"),
					carouselElement,
					fragment = document.createDocumentFragment(),
					i = 0;

				arcListviewCarousel.classList.add(classes.CAROUSEL, classes.PREFIX + count);
				for (; i < count + 2; i++) {
					carouselElement = document.createElement("ul");
					carouselElement.classList.add(classes.CAROUSEL_ITEM);
					carouselElement.classList.add(classes.LISTVIEW);
					carousel.items[i] = {
						carouselElement: carouselElement
					};
					fragment.appendChild(carouselElement);
				}
				arcListviewCarousel.appendChild(fragment);
				return arcListviewCarousel;
			}

			/**
			 * Widget build method
			 * @method _build
			 * @param {HTMLElement} element
			 * @memberof ns.widget.wearable.ArcListview
			 * @protected
			 */
			prototype._build = function (element) {
				var self = this,
					arcListviewCarousel,
					page,
					scroller,
					ui = self._ui,
					carousel = self._carousel,
					visibleItensCount = parseInt(self.options.visibleItems, 10);

				if (!engine.getBinding(element, "SnapListview")) {
					// find outer parent elements
					page = selectorsUtil.getClosestBySelector(element, selectors.PAGE);
					scroller = selectorsUtil.getClosestBySelector(element, selectors.SCROLLER);

					element.classList.add(WIDGET_CLASS, classes.PREFIX + visibleItensCount);

					// find list elements with including group indexes
					self._items = slice.call(page.querySelectorAll(selectors.ITEMS)) || [];

					ui.arcListviewSelection = self._buildArcListviewSelection(page);
					arcListviewCarousel = buildArcListviewCarousel(carousel, visibleItensCount);
					ui.arcListviewCarousel = arcListviewCarousel;

					// append carousel outside scroller element
					scroller.parentElement.appendChild(arcListviewCarousel);

					// cache HTML elements
					ui.page = page;
					ui.scroller = scroller;
					return element;
				} else {
					ns.warn("Can't create Listview on SnapListview element");
					return null;
				}

			};

			/**
			 * Widget init method
			 * @method _init
			 * @memberof ns.widget.wearable.ArcListview
			 * @protected
			 */
			prototype._init = function () {
				var self = this,
					options = self.options;

				ArcListview.calcFactors(options.ellipsisA, options.ellipsisB);

				// init items;
				self._setAnimatedItems();
				self._scrollAnimationEnd = true;
				momentum = 1;
				self._refresh();
				self._scroll();
				self._initBouncingEffect();
			};

			/**
			 * Event handeler for widget
			 * @param {Event} ev
			 * @method handleEvent
			 * @memberof ns.widget.wearable.ArcListview
			 * @protected
			 */
			prototype.handleEvent = function (ev) {
				var self = this;

				switch (ev.type) {
					case "touchmove" :
						self._onTouchMove(ev);
						break;
					case "rotarydetent" :
						self._onRotary(ev);
						break;
					case "touchstart" :
						self._onTouchStart(ev);
						break;
					case "touchend" :
						self._onTouchEnd(ev);
						break;
					case "change" :
						self._onChange(ev);
						break;
					case "vclick" :
						self._onClick(ev);
						break;
					default:
						break;
				}
			};

			/**
			 * Bind event listeners to widget instance
			 * @protected
			 * @method _bindEvents
			 * @memberof ns.widget.wearable.ArcListview
			 * @protected
			 */
			prototype._bindEvents = function () {
				var self = this,
					element = self.element,
					page = self._ui.page;

				page.addEventListener("touchstart", self, true);
				page.addEventListener("touchmove", self, true);
				page.addEventListener("touchend", self, true);
				self._ui.arcListviewCarousel.addEventListener("vclick", self, true);
				document.addEventListener("rotarydetent", self, true);
				element.addEventListener("change", self, true);
				page.addEventListener("pageshow", self, true);
			};

			/**
			 * Remove event listeners from widget instance
			 * @method _unbindEvents
			 * @memberof ns.widget.wearable.ArcListview
			 * @protected
			 */
			prototype._unbindEvents = function () {
				var self = this,
					element = self.element,
					page = self._ui.page;

				page.removeEventListener("touchstart", self, true);
				page.removeEventListener("touchmove", self, true);
				page.removeEventListener("touchend", self, true);
				self._ui.arcListviewCarousel.removeEventListener("vclick", self, true);
				document.removeEventListener("rotarydetent", self, true);
				element.removeEventListener("change", self, true);
				page.removeEventListener("pageshow", self, true);
			};

			/**
			 * Destroy widget instance
			 * @method _destroy
			 * @memberof ns.widget.wearable.ArcListview
			 * @protected
			 */
			prototype._destroy = function () {
				var self = this,
					ui = self._ui,
					arcListviewSelection = ui.arcListviewSelection,
					arcListviewCarousel = ui.arcListviewCarousel;

				self._unbindEvents();

				self._items.forEach(function (li) {
					self.element.appendChild(li);
					li.setAttribute("style", "");
				});
				self._items = [];

				// remove added elements
				if (arcListviewSelection && arcListviewSelection.parentElement) {
					arcListviewSelection.parentElement.removeChild(arcListviewSelection);
				}
				if (arcListviewCarousel && arcListviewCarousel.parentElement) {
					arcListviewCarousel.parentElement.removeChild(arcListviewCarousel);
				}
			};

			prototype._initBouncingEffect = function () {
				var self = this;

				self._maxScrollY = self.element.getBoundingClientRect().height - BOTTOM_MARGIN;
				self._bouncingEffect = new ns.widget.core.scroller.effect.Bouncing(self._ui.page, {
					maxScrollX: 0,
					maxScrollY: self._maxScrollY,
					orientation: "vertical"
				});
			};

			ArcListview.prototype = prototype;
			ns.widget.wearable.ArcListview = ArcListview;
			ArcListview.classes = classes;

			engine.defineWidget(
				"ArcListview",
				"." + WIDGET_CLASS,
				[],
				ArcListview,
				"wearable"
			);

			//>>excludeStart("tauBuildExclude", pragmas.tauBuildExclude);
			return ArcListview;
		}
	);
	//>>excludeEnd("tauBuildExclude");
}(window.document, ns));