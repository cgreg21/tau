/*global define */
//>>excludeStart("tauBuildExclude", pragmas.tauBuildExclude);
(function () {
	"use strict";
	define(
		[
			"require",
			"./core/core",
			"./core/config",
			"./core/support",
			"./jqm/all",
			"./core/export",
			"./core/engine",
			"./core/frameworkData",
			"./core/theme",
			"./core/theme/ThemeCommon",
			"./core/utils/events",
			"./core/utils/grid",
			"./core/utils/data",
			"./core/utils/array",
			"./core/utils/DOM",
			"./core/utils/selectors",
			"./core/utils/object",
			"./core/utils/date",
			"./core/utils/callbacks",
			"./core/utils/deferred",
			"./core/utils/deferredWhen",
			"./core/utils/path",
			"./core/utils/bezierCurve",
			"./core/utils/zoom",
			"./core/utils/anim",
			"./core/utils/anim/Keyframes.js",
			"./core/utils/anim/Animation.js",
			"./core/utils/anim/Chain.js",
			"./core/events/vmouse",
			"./core/events/hwkey",
			"./core/events/throttledresize",
			"./core/events/orientationchange",
			"./core/events/touch",
			"./core/events/pinch",
			"./core/events/hwkey",
			// widget list
			"./profile/mobile/widget/mobile/Page",
			"./core/widget/mobile/Scrollview",
			"./core/widget/mobile/Circularview",
			"./core/widget/mobile/Collapsibleset",
			"./core/widget/mobile/Collapsible",
			"./profile/mobile/widget/mobile/Button",
			"./core/widget/mobile/Dialog",
			"./profile/mobile/widget/mobile/Checkboxradio",
			"./core/widget/mobile/Listview",
			"./core/widget/mobile/Listdivider",
			"./core/widget/mobile/ListviewAutodivider",
			"./core/widget/mobile/ListviewFilter",
			"./core/widget/mobile/ExtendableList",
			"./core/widget/mobile/Fastscroll",
			"./core/widget/mobile/Tabbar",
			"./core/widget/mobile/Fieldcontain",
			"./core/widget/mobile/Controlgroup",
			"./core/widget/mobile/Textinput",
			"./profile/mobile/widget/mobile/Popup",
			"./core/widget/mobile/Datetimepicker",
			"./core/widget/mobile/Slider",
			"./core/widget/mobile/Swipe",
			"./core/widget/mobile/Selectmenu",
			"./core/widget/mobile/Searchbar",
			"./core/widget/mobile/Progress",
			"./core/widget/mobile/Navbar",
			"./core/widget/mobile/MultimediaView",
			"./core/widget/mobile/Progressbar",
			"./core/widget/mobile/Tokentextarea",
			"./core/widget/mobile/Notification",
			"./core/widget/mobile/Gallery",
			"./core/widget/mobile/VirtualListview",
			"./core/widget/mobile/VirtualGrid",
			"./core/widget/mobile/Loader",
			"./profile/mobile/router/Page",
			"./profile/mobile/router/PageExternal",
			"./profile/mobile/router/PageTransition",
			"./core/widget/mobile/Gallery3d",
			"./core/widget/mobile/TizenSlider",
			"./core/widget/mobile/SplitView",
			"./core/widget/mobile/ScrollHandler",
			"../css/themes/tizen/tizen-black/theme"
		],
		function (require) {
			require(["./core/init"], function () {
				return true;
			});
		}
	);
}());
//>>excludeEnd("tauBuildExclude");
