/*global tau */
(function () {

	var page = document.getElementById("pageIndicatorPageOP") || document.getElementById("pageIndicatorCirclePageOP"),
		changer = document.getElementById("hsectionchangerOP"),
		sections = document.querySelectorAll("section"),
		sectionChanger,
		elPageIndicator = document.getElementById("pageIndicatorOP"),
		pageIndicator,
		pageIndicatorHandler;

	/**
	 * pagebeforeshow event handler
	 * Do preparatory works and adds event listeners
	 */
	page.addEventListener("pagebeforeshow", function () {
		// make PageIndicator
		pageIndicator = tau.widget.PageIndicator(elPageIndicator, {numberOfPages: sections.length, maxPage: 7});
		pageIndicator.setActive(4);
		// make SectionChanger object
		sectionChanger = new tau.widget.SectionChanger(changer, {
			orientation: "horizontal",
			useBouncingEffect: true
		});
	});

	/**
	 * pagehide event handler
	 * Destroys and removes event listeners
	 */
	page.addEventListener("pagehide", function () {
		// release object
		sectionChanger.destroy();
		pageIndicator.destroy();
	});

	/**
	 * sectionchange event handler
	 * @param {Event} e
	 */
	pageIndicatorHandler = function (e) {
		pageIndicator.setActive(e.detail.active);
	};

	changer.addEventListener("sectionchange", pageIndicatorHandler, false);

}());
