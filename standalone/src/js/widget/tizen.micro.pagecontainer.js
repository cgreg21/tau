//>>excludeStart("microBuildExclude", pragmas.microBuildExclude);
define([
	"jquery",
	"jquery.ui.widget",
	"./../tizen.micro.core",
	"./tizen.micro.page"], function( jQuery ) {
//>>excludeEnd("microBuildExclude");

(function( $, undefined ) {

var EventType = {
	PAGE_CHANGE: "pagechange"
};

$.widget( "micro.pagecontainer", {

	options: {
	},

	_create: function() {
		this.activePage = null;
	},

	_destroy: function() {
	},

	_init: function() {
	},

	_include: function( page/*, options */) {
		$(page).prependTo( this.element )
			.page();
	},

	change: function (toPage/*, options */) {
		var fromPage = this.getActivePage();

		this._include(toPage);

		if (fromPage) {
			fromPage.page("setActive", false);
		}
		if (toPage) {
			toPage.page("setActive", true);
		}

		this.changePageFinish(fromPage, toPage);

	},

	changePageFinish: function (fromPage, toPage) {
		this._setActivePage(toPage);

		if (fromPage) {
			$(fromPage).page("hide");
		}
		$(toPage).page("show");

		$.micro.fireEvent(this.element, EventType.PAGE_CHANGE);
		this._removeExternalPage();
	},

	_setActivePage: function(page) {
		this.activePage = page;
	},

	getActivePage: function() {
		return this.activePage;
	},

	showLoading: function(/* delay */) {
	},

	_removeExternalPage: function() {
		this.element
			.find( $.micro.selectors.page )
			.filter( "[data-external-page=true]" )
			.not(this.getActivePage())
			.remove();
	}
});

})( jQuery );

//>>excludeStart("microBuildExclude", pragmas.microBuildExclude);
});
//>>excludeEnd("microBuildExclude");
