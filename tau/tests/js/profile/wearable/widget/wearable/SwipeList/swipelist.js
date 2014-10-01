/*global document, window, module, test, asyncTest, ok, setTimeout, start */
/*
* Unit Test: SwipeList
*/

(function (ns) {
	'use strict';

	var page = document.getElementById('swipelist'),
		tapholdThreshold = 400,
		swipeWidget,
		listElement = page.getElementsByClassName('ui-swipelist-list')[0];

	swipeWidget = tau.widget.SwipeList(listElement, {
		swipeTarget: 'li',
		swipeElement: '.ui-swipelist'
	});

	/*
	 * Function triggering touch event
	 */
	function triggerTouchEvent(el, event, clientXY){
		var ev = document.createEvent('MouseEvent'),
			move = clientXY || {clientX: 0, clientY: 0};

		ev.initMouseEvent(
			event, /* type */
			true, /* bubble */
			true, /* cancelable */
			window, /* view */
			null, /* detail */
			0, 0, 0, 0, /* coordinates */
			false, false, false, false, /* modifier keys */
			0, /* button, left */
			null /* related target */
		);
		ev.touches = [{clientX: move.clientX, clientY: move.clientY}];
		if (event === 'touchend') {
			ev.touches = [];
		}
		ev.changedTouches = [{clientX: move.clientX, clientY: move.clientY}];
		el.dispatchEvent(ev);
	}


	module('tau.widget.SwipeList', {
		setup: function setup() {
			this.left = ns.util.DOM.getElementOffset(listElement).left;
			this.top = ns.util.DOM.getElementOffset(listElement).top;
			this.clientXY = {clientX: this.left, clientY: this.top};
			this.li = listElement.children[0];
			this.swipeList = document.getElementsByClassName('ui-swipelist')[0];
		}
	});

	asyncTest('swipe', 2, function swipe() {

			// Simulate swiping
			triggerTouchEvent(this.li, 'touchstart', this.clientXY);
			triggerTouchEvent(this.li, 'touchmove', {clientX: this.left + 10, clientY: this.top});
			ok(this.swipeList.style.display === 'block', 'Swipe list is displayed');

		setTimeout(function setTimeout() {

			triggerTouchEvent(this.li, 'touchend', {clientX: this.left + 10, clientY: this.top});
			ok(this.swipeList.style.display === 'none', 'Swipe list is hidden');
			start();

		}.bind(this), tapholdThreshold);

	});

	asyncTest('swipe left', 2, function swipe() {
		var swipeListRight = this.swipeList.getElementsByClassName('ui-swipelist-right')[0],
			clientMoveXY = {clientX: this.left - 10, clientY: this.top};

			// Simulate left swiping
			triggerTouchEvent(this.li, 'touchstart', this.clientXY);
			triggerTouchEvent(this.li, 'touchmove', clientMoveXY);
			ok(swipeListRight.style.display === 'block', 'Swipe right container is displayed');

		setTimeout(function setTimeout() {

			triggerTouchEvent(this.li, 'touchend', clientMoveXY);
			ok(swipeListRight.style.display === 'none', 'Swipe right container is hidden');
			start();

		}.bind(this), tapholdThreshold);

	});

	asyncTest('swipe right', 2, function swipe() {
		var swipeListLeft = this.swipeList.getElementsByClassName('ui-swipelist-left')[0],
			clientMoveXY = {clientX: this.left + 10, clientY: this.top};

			// Simulate right swiping
			triggerTouchEvent(this.li, 'touchstart', this.clientXY);
			triggerTouchEvent(this.li, 'touchmove', clientMoveXY);
			ok(swipeListLeft.style.display === 'block', 'Swipe left container is displayed');

		setTimeout(function setTimeout() {

			triggerTouchEvent(this.li, 'touchend', clientMoveXY);
			ok(swipeListLeft.style.display === 'none', 'Swipe left container is hidden');
			start();

		}.bind(this), tapholdThreshold);

	});

}(window.tau));
