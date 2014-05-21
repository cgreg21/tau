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
 * #Listview Widget
 * The list widget displays a list view.
 *
 * @class ns.widget.mobile.Listview
 * @extends ns.widget.BaseWidget
 */
/**
 * Triggered when the listview is before refresh items.
 * @event beforerefreshitems
 * @member ns.widget.mobile.Listview
 */
(function (ns) {
	'use strict';
	//>>excludeStart("tauBuildExclude", pragmas.tauBuildExclude);
	define(
		[
			"../../../../core/engine",
			"../../../../core/util/DOM/attributes",
			"../../../../core/util/DOM/css",
			"../../../../core/util/selectors",
			"../../../../core/event",
			"../../../../core/event/vmouse",
			"../mobile",
			"./BaseWidgetMobile",
			"./Button",
			"./Page"
		],
		function () {
			//>>excludeEnd("tauBuildExclude");
			var Listview = function () {
					var self = this;
					self.options = {
						theme: null,
						dividerTheme: null,
						inset: false
					};
					self.ui = {
						page: null
					};
				},
				BaseWidget = ns.widget.mobile.BaseWidgetMobile,
				engine = ns.engine,
				DOM = ns.util.DOM,
				Button = ns.widget.mobile.Button,
				Page = ns.widget.mobile.Page,
				classes = {
					uiListview : 'ui-listview',
					uiListviewInset: 'ui-listview-inset',
					uiCornerAll: 'ui-corner-all',
					uiShadow: 'ui-shadow',
					uiLi: 'ui-li',
					uiLiLast: 'ui-li-last',
					uiCornerTop: 'ui-corner-top',
					uiCornerTr: 'ui-corner-tr',
					uiCornerTl: 'ui-corner-tl',
					uiCornerBottom: 'ui-corner-bottom',
					uiCornerBr: 'ui-corner-br',
					uiCornerBl: 'ui-corner-bl',
					uiLink: 'ui-link',
					uiLiLinkAlt: 'ui-li-link-alt',
					uiLiHasArrow: 'ui-li-has-arrow',
					uiLiHasAlt: 'ui-li-has-alt',
					uiLinkInherit: 'ui-link-inherit',
					uiLiThumb: 'ui-li-thumb',
					uiLiHasThumb: 'ui-li-has-thumb',
					uiLiIcon: 'ui-li-icon',
					uiLiHasIcon: 'ui-li-has-icon',
					uiLiHasCheckbox: 'ui-li-has-checkbox',
					uiLiHasRadio: 'ui-li-has-radio',
					uiLiHasRightCircleBtn: 'ui-li-has-right-circle-btn',
					uiLiHasRightBtn: 'ui-li-has-right-btn',
					uiLiCount: 'ui-li-count',
					uiLiHasCount: 'ui-li-has-count',
					uiLiStatic: 'ui-li-static',
					uiLiHeading: "ui-li-heading"
				},
				buttonClasses = Button.classes,
				selectors = ns.util.selectors,
				eventUtils = ns.event,
				/**
				 * Alias to Array.slice
				 * @method slice
				 * @member ns.widget.mobile.Listview
				 * @private
				 */
					slice = [].slice;

			Listview.prototype = new BaseWidget();

			Listview.classes = classes;

			Listview.prototype._configure = function () {
				var self = this,
					options = self.options || {}, // redeclaration for extendibles :(
					ui = self.ui || {}; // redeclaration for extendibles :/
				/**
				 * theme of widget
				 * @property {?String} [options.theme=null]
				 * @member ns.widget.mobile.Listview
				 * @instance
				 */
				/** @expose */
				options.theme = null;
				/**
				 * theme of widget
				 * @property {String} [options.theme='s']
				 * @member ns.widget.mobile.Listview
				 * @instance
				 */
				/** @expose */
				options.dividerTheme = 's';
				/**
				 * inset option - listview is wrapped by additionally layer
				 * @property {boolean} [options.theme=false]
				 * @member ns.widget.mobile.Listview
				 * @instance
				 */
				/** @expose */
				options.inset = false;

				ui.page = null;
			};

			/**
			 * Change links to button widget
			 * @method changeLinksToButton
			 * @param {HTMLElement} item
			 * @param {Array} links
			 * @param {string} itemTheme
			 * @private
			 * @member ns.widget.mobile.Listview
			 */
			function changeLinksToButton(item, links, itemTheme) {
				var icon = DOM.getNSData(item, 'icon'),
					linkClassList = links[0].classList,
					linksLength = links.length,
					last = links[linksLength - 1],
					span;
				DOM.setNSData(item, 'theme', itemTheme);
				engine.instanceWidget(
					item,
					'Button',
					{
						wrapperEls: 'div',
						shadow: false,
						corners: false,
						iconpos: 'right',
						icon: false
					}
				);

				if (linksLength === 1) {
					item.classList.add(classes.uiLiHasArrow);
					if (icon !== false) {
						item.classList.add(buttonClasses.uiBtnIconRight);
					}
				} else if (linksLength > 1) {
					item.classList.add(classes.uiLiHasAlt);
					item.appendChild(last);
					last.classList.add(classes.uiLiLinkAlt);
					last.setAttribute('title', last.innerText);
					last.innerText = '';
					engine.instanceWidget(
						last,
						'Button',
						{
							wrapperEls: 'span',
							shadow: false,
							corners: false,
							iconpos: 'right',
							icon: false
						}
					);
					last.classList.add(buttonClasses.uiBtnIconNotext);

					span = document.createElement('span');
					engine.instanceWidget(
						span,
						'Button',
						{
							wrapperEls: 'span',
							shadow: true,
							corners: false,
							iconpos: 'notext',
							icon: 'arrow-r'
						}
					);
					last.querySelector('.' + buttonClasses.uiBtnInner).appendChild(span);
				}
				linkClassList.remove(classes.uiLink);
				linkClassList.add(classes.uiLinkInherit);

				selectors.getChildrenByClass(item, buttonClasses.uiBtnInner)
					.forEach(function (element) {
						element.classList.add(classes.uiLi);
					});
			}

			/**
			 * Add thumb classes img
			 * @method addThumbClassesToImg
			 * @param {HTMLElement} img
			 * @private
			 * @member ns.widget.mobile.Listview
			 */
			function addThumbClassesToImg(img) {
				var parentNode = selectors.getClosestByTag(img.parentNode, "li");
				img.classList.add(classes.uiLiThumb);
				if (parentNode) {
					parentNode.classList.add(
						img.classList.contains(classes.uiLiIcon) ?
							classes.uiLiHasIcon :
							classes.uiLiHasThumb
					);
				}
			}

			/**
			 * Add thumb classes to first img of container
			 * @method addThumbClasses
			 * @param {HTMLElement} container
			 * @private
			 * @member ns.widget.mobile.Listview
			 */
			function addThumbClasses(container) {
				var img;
				img = selectors.getChildrenByTag(container, 'img');
				if (img.length) {
					addThumbClassesToImg(img[0]);
				}
			}

			/**
			 * @method addCheckboxRadioClasses
			 * @param {HTMLElement} container HTML LI element.
			 * @private
			 * @member ns.widget.mobile.Listview
			 */
			function addCheckboxRadioClasses(container) {
				var inputAttr = container.querySelector('input'),
					typeOfInput,
					contenerClassList = container.classList;
				if (inputAttr) {
					typeOfInput = inputAttr.getAttribute('type');
					if (typeOfInput === 'checkbox') {
						contenerClassList.add(classes.uiLiHasCheckbox);
					} else if (typeOfInput === 'radio') {
						contenerClassList.add(classes.uiLiHasRadio);
					}
				}
			}

			/**
			 * Function add ui-li-heading class to all headings elemenets in list
			 * @method addHeadingClasses
			 * @param {HTMLElement} container HTML LI element.
			 * @private
			 * @static
			 * @member ns.widget.mobile.Listview
			 */
			function addHeadingClasses(container) {
				var headings = [].slice.call(container.querySelectorAll("h1, h2, h3, h4, h5, h6")),
					i = headings.length - 1;
				while (i >= 0) {
					headings[i].classList.add(classes.uiLiHeading);
					i--;
				}
			}

			/**
			 * @method addRightBtnClasses
			 * @param {HTMLElement} container HTML LI element
			 * @private
			 * @member ns.widget.mobile.Listview
			 */
			function addRightBtnClasses(container) {
				var btnAttr = container.querySelector('[data-role="button"],input[type="button"],select[data-role="slider"]');
				if (btnAttr) {
					if (DOM.getNSData(btnAttr, 'style') === "circle") {
						container.classList.add(classes.uiLiHasRightCircleBtn);
					} else {
						container.classList.add(classes.uiLiHasRightBtn);
					}
				}
			}

			/**
			 * @method _build
			 * @param {HTMLElement} element
			 * @return {HTMLElement}
			 * @member ns.widget.mobile.Listview
			 */
			Listview.prototype._build = function (element) {
				var elementClassList = element.classList;
				elementClassList.add(classes.uiListview);
				if (this.options.inset) {
					elementClassList.add(classes.uiListviewInset);
					elementClassList.add(classes.uiCornerAll);
					elementClassList.add(classes.uiShadow);
				}
				//@todo check if this is ol list

				this._refreshItems(element, true);
				return element;
			};

			Listview.prototype._init = function (element) {
				var ui = this.ui,
					page = ui.page,
					popup = selectors.getClosestBySelector(element, "[data-role=popup]");
				//@todo check if this is ol list
				if (!popup) {
					element.style.width = window.innerWidth + 'px';
				}

				if (!page) {
					page = selectors.getClosestByClass(element, Page.classes.uiPage);
					if (page && page.classList.contains(Page.classes.uiPageActive) === true) {
						ui.page = page;
					}
				}

				this.trigger("create");
				return element;
			};

			/**
			 * Registers widget's event listeners
			 * @method _bindEvents
			 * @param {HTMLElement} element
			 * @protected
			 * @member ns.widget.mobile.Listview
			 * @instance
			 */
			Listview.prototype._bindEvents = function (element) {
				var self = this;

				element.addEventListener("vclick", function (event) {
					var target,
						checkboxRadio,
						i;
					if (selectors.matchesSelector(self, "li." + classes.uiLiHasCheckbox + ",li." + classes.uiLiHasRadio) === true) {
						target = event.target;
						checkboxRadio = slice.call(target.querySelectorAll(".ui-checkbox label"));
						if (!checkboxRadio.length) {
							checkboxRadio = slice.call(target.querySelectorAll(".ui-radio label"));
						}
						i = checkboxRadio.length;
						while (--i >= 0) {
							eventUtils.trigger(checkboxRadio[i], "vclick");
						}
					}
				}, false);
			};

			function removeCorners(element, which) {
				var elementClassList = element.classList;
				switch (which) {
					case "top":
						elementClassList.remove(classes.uiCornerTop);
						elementClassList.remove(classes.uiCornerTr);
						elementClassList.remove(classes.uiCornerTl);
						break;
					case "bottom":
						elementClassList.remove(classes.uiCornerBottom);
						elementClassList.remove(classes.uiCornerBr);
						elementClassList.remove(classes.uiCornerBl);
						break;
				}
			}

			Listview.prototype._removeCorners = function (li, which) {
				var additionlElements = slice.call(li.querySelectorAll(
					'.' + buttonClasses.uiBtnInner + ', ' +
						'.' + classes.uiLiLinkAlt + ', ' +
						'.' + classes.uiLiThumb
				));

				if (which === "top" || which !== "bottom") {
					removeCorners(li, "top");
					additionlElements.forEach(function (item) {
						removeCorners(item, "top");
					});
				}
				if (which === "bottom" || which !== "top") {
					removeCorners(li, "bottom");
					additionlElements.forEach(function (item) {
						removeCorners(item, "bottom");
					});
				}
			};

			/**
			 * Adding top corners for list item
			 * @param {HTMLElement} item
			 * @member ns.widget.mobile.Listview
			 * @private
			 * @static
			 */
			function addTopCorners(item) {
				item.classList.add(classes.uiCornerTop);
				slice.call(item.querySelectorAll("." + buttonClasses.uiBtnInner + ":not(." + classes.uiLiLinkAlt + ")")).forEach(function (subitem) {
					subitem.classList.add(classes.uiCornerTop);
				});
				slice.call(item.querySelectorAll("." + buttonClasses.uiBtnInner + ":not(:first-child)")).forEach(function (subitem) {
					subitem.classList.add(classes.uiCornerTop);
				});
				slice.call(item.querySelectorAll("." + classes.uiLiLinkAlt + ", ." + classes.uiLiLinkAlt + " span:first-child")).forEach(function (subitem) {
					subitem.classList.add(classes.uiCornerTr);
				});
				slice.call(item.querySelectorAll("." + classes.uiLiThumb + ":not(." + classes.uiLiIcon + ")")).forEach(function (subitem) {
					subitem.classList.add(classes.uiCornerTl);
				});
			}

			/**
			 * Adding bottom corners for list item
			 * @param {HTMLElement} item
			 * @member ns.widget.mobile.Listview
			 * @private
			 * @static
			 */
			function addBottomCorners(item) {
				var itemClassList = item.classList;
				itemClassList.add(classes.uiCornerBottom);
				itemClassList.add(classes.uiLiLast);
				slice.call(item.querySelectorAll("." + classes.uiLiThumb)).forEach(function (subitem) {
					subitem.classList.add(classes.uiCornerBr);
				});
				slice.call(item.querySelectorAll("." + classes.uiLiThumb + ":not(." + classes.uiLiIcon + ")")).forEach(function (subitem) {
					subitem.classList.add(classes.uiCornerBl);
				});
			}

			Listview.prototype._refreshCorners = function (ul, create) {
				var items,
					self = this,
					last;

				items = selectors.getChildrenByTag(ul, 'li');
				if (items.length) {
					// clean previous corners
					items.forEach(function (item) {
						// ui-li-last is used for setting border-bottom on the last li
						item.classList.remove(classes.uiLiLast);
						self._removeCorners(item);
					});

					// filter element which occupied place on the view
					items = items.filter(DOM.isOccupiedPlace);

					if (items.length) {
						last = items.length - 1;
						if (self.options.inset) {
							addTopCorners(items[0]);
							addBottomCorners(items[last]);
						} else {
							items[last].classList.add(classes.uiLiLast);
						}
					}
				}
				if (!create) {
					eventUtils.trigger(ul, "updatelayout");
				}
			};

			/**
			 * Refresh items of list
			 * @method _refreshItems
			 * @param {HTMLElement} ul
			 * @param {Boolean} create
			 * @instance
			 * @protected
			 * @member ns.widget.mobile.Listview
			 */
			Listview.prototype._refreshItems = function (ul, create) {
				var items,
					options = this.options,
					theme,
					last,
					imgs,
					dividerTheme;

				eventUtils.trigger(ul, 'beforerefreshitems');
				items = selectors.getChildrenByTag(ul, 'li');
				theme = DOM.getNSData(ul, 'theme') || options.theme || 's';
				dividerTheme = DOM.getNSData(ul, 'divider-theme') || options.dividerTheme || theme;
				last = items.length - 1;

				//@todo filter only visible
				items.forEach(function (item, index) {
					var itemTheme, isDivider, links, link,
						itemClassList = item.classList;
					if (create || !item.classList.contains(classes.uiLi)) {
						itemClassList.add(classes.uiLi);
						links = selectors.getChildrenByTag(item, 'a');
						itemTheme = DOM.getNSData(item, 'theme') || theme;
						isDivider = DOM.getNSData(item, 'role') === 'list-divider';

						// check if item has a element with class for count
						if (!!item.querySelector('.' + classes.uiLiCount)) {
							itemClassList.add(classes.uiLiHasCount);
						}

						if (isDivider) {
							DOM.setNSData(item, 'theme', dividerTheme);
							engine.instanceWidget(item, "Listdivider");
						} else {
							if (links.length) {
								changeLinksToButton(item, links, itemTheme);
								link = links[0];
								addCheckboxRadioClasses(link);
								addThumbClasses(link);
								addRightBtnClasses(link);
							} else {
								itemClassList.add(classes.uiLiStatic);
								itemClassList.add(buttonClasses.uiBtnUpThemePrefix + itemTheme);
								item.setAttribute('tabindex', '0');
							}
							addHeadingClasses(item);
						}
					}
					addCheckboxRadioClasses(item);
					addThumbClasses(item);
					addRightBtnClasses(item);
					if (index === last) {
						itemClassList.add(classes.uiLiLast);
					} else {
						itemClassList.remove(classes.uiLiLast);
					}
				}, this);

				imgs = ul.querySelectorAll('.' + classes.uiLinkInherit + ' > img:first-child');
				if (imgs.length !== 0) {
					slice.call(imgs).forEach(function (img) {
						addThumbClassesToImg(img);
					});
				}
				this._refreshCorners(ul, create);
			};

			Listview.prototype.refresh = function () {
				this._refreshItems(this.element, false);
				eventUtils.trigger(this.element, this.name.toLowerCase() + 'afterrefresh');
			};

			/**
			 *
			 * @param {HTMLElement} listItem
			 * @param {number} position
			 */
			Listview.prototype.addItem = function (listItem, position) {
				var element = this.element,
					childNodes = element.getElementsByTagName("li"),
					tempDiv = document.createElement('div'),
					liItem,
					liButtons,
					i;

				tempDiv.innerHTML = listItem;
				liItem = tempDiv.firstChild;
				liButtons = liItem.querySelectorAll("[data-role='button']");

				if (position) {
					element.insertBefore(liItem, childNodes[position]);
				} else {
					element.appendChild(liItem);
				}

				for (i = 0; i < liButtons.length; i++) {
					engine.instanceWidget(liButtons[i], 'Button');
				}

				this.refresh();
			};

			/**
			 *
			 * @param {number} position
			 */
			Listview.prototype.removeItem = function (position) {
				var element = this.element,
					childNodes = element.getElementsByTagName("li");

				element.removeChild(childNodes[position]);
				this.refresh();
			};

			ns.widget.mobile.Listview = Listview;
			engine.defineWidget(
				"Listview",
				"[data-role='listview'], .ui-listview",
				['addItem', 'removeItem'],
				Listview,
				'mobile'
			);
			//>>excludeStart("tauBuildExclude", pragmas.tauBuildExclude);
			return ns.widget.mobile.Listview;
		}
	);
	//>>excludeEnd("tauBuildExclude");
}(ns));
