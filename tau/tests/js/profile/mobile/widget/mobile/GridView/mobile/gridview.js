/*global module, test, asyncTest, ok, equal, deepEqual, tau, window */
(function(ns, $) {
	"use strict";

	module("profile/mobile/widget/mobile/GridView", {
		setup: function () {
			tau.engine.run();
		},
		teardown: function () {
			tau.engine._clearBindings();
		}
	});
	test("GridView" , function () {
		var elGridView = document.getElementById("gridview"),
			gridList = tau.widget.GridView(elGridView),
			addedItem, listLength,
			styleElement;

		styleElement = gridList._styleElement;
		deepEqual(styleElement.parentNode, document.head, "Style element was created in document HEAD");

		ok(window.parseInt(elGridView.children[0].style.width, 10) > 0, "grid item has width");
		$(elGridView).trigger('pinchout');
		equal(gridList.options.cols, 3, "pinchout event has fired and adjust cols");
		$(elGridView).trigger('pinchin');
		equal(gridList.options.cols, 4, "pinchin event has fired and adjust cols");

		listLength = elGridView.children.length;
		equal(listLength, 4, "There are 4 list items");
		addedItem = document.createElement("li");
		addedItem.innerHTML = '<img class="ui-gridview-image" src=""><p class="ui-gridview-label">1</p><div class="ui-gridview-handler"></div>';
		gridList.addItem(addedItem);
		equal(elGridView.children[listLength], addedItem, "Item has been added");
		gridList.removeItem(addedItem);
		equal(listLength, 4, "There are 4 list items");

		gridList.option("reorder", true);
		ok(elGridView.classList.contains("ui-gridview-reorder"), "reorder options has been activated.");

		gridList.destroy();
		deepEqual(styleElement.parentNode, null, "(after destroy()) Style element was removed from DOM");
		deepEqual(gridList._styleElement, null, "(after destroy()) ._styleElement property is null");
	});

}(window.tau, jQuery));