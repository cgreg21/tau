/*global tau */
/*jslint unparam: true */
(function() {
	var page = document.getElementById("selectModePage"),
		listview = document.querySelector('#selectModePage .ui-listview'),
		list = listview.getElementsByTagName("li"),
		listLength = list.length,
		selectWrapper = document.querySelector(".select-mode"),
		selectBtn = document.getElementById("select-btn"),
		selectBtnText =  document.getElementById("select-btn-text"),
		selectAll = document.getElementById("select-all"),
		deselectAll = document.getElementById("deselect-all"),
		drawerElement = page.querySelector("#rightDrawer"),
		handler = document.getElementById("handler"),
		selector = page.querySelector("#selector"),
		selectCount,
		drawerHelper,
		i,
		addFunction,
		fnSelectAll,
		fnDeselectAll,
		fnPopup,
		fnPopupClose,
		fnBackKey;

	function textRefresh() {
		selectBtnText.innerHTML =
			selectCount < 10 ? "0" + selectCount : selectCount;
	}

	function modeShow() {
		selectWrapper.classList.remove("open");
		handler.style.display = "block";
		selectWrapper.classList.add("show-btn");
		textRefresh();
	}

	function modeHide() {
		selectWrapper.classList.remove("open");
		handler.style.display = "none";
		selectWrapper.classList.remove("show-btn");
		selectCount = 0;
	}

	addFunction = function(event){
		var target = event.target;
		if ( !target.classList.contains("select")) {
			target.classList.add("select");
			selectCount++;
			modeShow();
		} else {
			target.classList.remove("select");
			selectCount--;
			if (selectCount <= 0) {
				modeHide();
			} else {
				textRefresh();
			}
		}
	};

	fnSelectAll = function(){
		for (i = 0; i < listLength; i++) {
			list[i].classList.add("select");
		}
		selectCount = listLength;
		modeShow();
	};

	fnDeselectAll = function(){
		for (i = 0; i < listLength; i++) {
			list[i].classList.remove("select");
		}
		modeHide();
	};

	fnPopup = function() {
		selectWrapper.classList.add("open");
		event.preventDefault();
		event.stopPropagation();
	};

	fnPopupClose = function() {
		selectWrapper.classList.remove("open");
	};

	fnBackKey = function() {
		var drawer = tau.widget.Drawer(drawerElement),
			classList = selectWrapper.classList;
		if( event.keyName === "back" && drawer.getState() === "closed" && classList.contains("show-btn")) {
			if (classList.contains("open")) {
				classList.remove("open");
			} else {
				fnDeselectAll();
			}
			event.preventDefault();
			event.stopPropagation();
		}
	};

	page.addEventListener("pageshow", function(ev) {
		listview.addEventListener('click', addFunction, false);
		selectAll.addEventListener("click", fnSelectAll, false);
		deselectAll.addEventListener("click", fnDeselectAll, false);
		selectBtn.addEventListener("click", fnPopup, false);
		selectWrapper.addEventListener("click", fnPopupClose, false);
		modeHide();
	}, false);

	page.addEventListener("pagehide", function(ev) {
		listview.removeEventListener('click', addFunction, false);
		selectAll.removeEventListener("click", fnSelectAll, false);
		deselectAll.removeEventListener("click", fnDeselectAll, false);
		document.removeEventListener('tizenhwkey', fnBackKey);
		modeHide();
		drawerHelper.destroy();
	}, false);

	page.addEventListener( "pagebeforeshow", function() {
		/********** drawer ******************/
		drawerHelper = tau.helper.DrawerMoreStyle.create(drawerElement, {
			handler: ".drawer-handler"
		});
		document.addEventListener('tizenhwkey', fnBackKey);
	});

	/*
	 * When user click the indicator of Selector, drawer will close.
	 */
	selector.addEventListener("click", function(event) {
		var target = event.target,
			drawerComponent = tau.widget.Drawer(drawerElement);

		// 'ui-selector-indicator' is default indicator class name of Selector component
		if (target.classList.contains("ui-selector-indicator")) {
			drawerComponent.close();
		}
	});
}());