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
			"./profile/mobile/widget/mobile/Scrollview",
			"./profile/mobile/widget/mobile/Circularview",
			"./profile/mobile/widget/mobile/Collapsibleset",
			"./profile/mobile/widget/mobile/Collapsible",
			"./profile/mobile/widget/mobile/Button",
			"./profile/mobile/widget/mobile/Dialog",
			"./profile/mobile/widget/mobile/Checkboxradio",
			"./profile/mobile/widget/mobile/Listview",
			"./profile/mobile/widget/mobile/Listdivider",
			"./profile/mobile/widget/mobile/ListviewAutodivider",
			"./profile/mobile/widget/mobile/ListviewFilter",
			"./profile/mobile/widget/mobile/ExtendableList",
			"./profile/mobile/widget/mobile/Fastscroll",
			"./profile/mobile/widget/mobile/Tabbar",
			"./profile/mobile/widget/mobile/Fieldcontain",
			"./profile/mobile/widget/mobile/Controlgroup",
			"./profile/mobile/widget/mobile/Textinput",
			"./profile/mobile/widget/mobile/Popup",
			"./profile/mobile/widget/mobile/Datetimepicker",
			"./profile/mobile/widget/mobile/Slider",
			"./profile/mobile/widget/mobile/Swipe",
			"./profile/mobile/widget/mobile/Selectmenu",
			"./profile/mobile/widget/mobile/Searchbar",
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
