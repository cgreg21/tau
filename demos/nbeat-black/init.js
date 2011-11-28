$(document).bind("pagecreate", function () {
    $('#spinner-demo').bind('pageshow', function (e) {
        $(this).find('li').each(function (index, element) {
            var randomWait = 500 * (Math.floor(Math.random() * 6) + 4);

            $(element).text("I am processing");

            $(element).bind('stopped', function () {
                $(element).text("I am done!");
            });

            $(element).spinner('start');

            setTimeout(function () {
                $(element).spinner('stop');
            }, randomWait);
        });
    });

    $('#spinnerbar-demo').bind('pageshow', function () {
        $(this).find(':jqmData(processing="spinnerbar")').each(function (index, element) {
            var randomWait = 500 * (Math.floor(Math.random() * 6) + 4);

            $(element).text("");

            $(element).bind('stopped', function () {
                $(element).text("I am done!");
            });

            $(element).spinnerbar('start');

            setTimeout(function () {
                $(element).spinnerbar('stop');
            }, randomWait);
        });
    });

    $('#scroller-demo').bind('pageshow', function (e) {
        $page = $(e.target);
        /*
         * many options cannot be set without subclassing since they're
         * used in the _create method - it seems as if these are for
         * internal use only and scrollDuration is only changable by
         * chance.
         */
        var $scroller2List = $('#scroller2').find('ul');
        $scroller2List.scrollview('option','scrollDuration','10000');

        // only works by manipulating css
        // the only other way is to use attribute 'scroll-method="scroll"' in html
        $('#scroller2 .ui-scrollbar').css('visibility','hidden');

        /*
         * make toggle button switch scroll bars on and off
         */
        var scrollBarVisible = $('#scroller2').find('.ui-scrollbar').css('visibility')==="visible";

        var $toggleScrollBars = $('#toggleScrollBars');
        $toggleScrollBars.attr("checked",scrollBarVisible).checkboxradio("refresh");
        /* the 'label' is the thing that is clicked, not the input element */
        var $label = $toggleScrollBars.siblings('label').attr('for','#toggleScrollBars');
        $label.bind("click", function() {
            var $scrollBar = $('#scroller2').find('.ui-scrollbar');
            var scrollBarVisible = $scrollBar.css('visibility')==="visible";
            var newVisibility = scrollBarVisible?"hidden":"visible";
            $scrollBar.css('visibility',scrollBarVisible?"hidden":"visible");
        })
    });
    
    $("#demo-date").bind("date-changed", function(e, newDate) { 
        $("#selected-date1").text(newDate.toString());
    });    
    $("#demo-date2").bind("date-changed", function(e, newDate) { 
        $("#selected-date2").text(newDate.toString());
    });
    $("#demo-date3").bind("date-changed", function(e, newDate) { 
        $("#selected-date3").text(newDate.toString());
    });

	$('#progressbar-demo').bind('pageshow', function (e) {

		// set progressbar value...
		$('#progressbar').progressbar("option", "value", 37);

		// how to update progressbar..
		$('#progressbarTest').bind('vclick', function (e) {

			// request animation frame
			window.requestAnimFrame = (function(){
				return  window.requestAnimationFrame       ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame    ||
				window.oRequestAnimationFrame      ||
				window.msRequestAnimationFrame     ||
				function(animloop){
				return window.setTimeout(animloop, 1000 / 60);
				};
			})();
			window.cancelRequestAnimFrame = ( function() {
				return window.cancelAnimationFrame          ||
				window.webkitCancelRequestAnimationFrame    ||
				window.mozCancelRequestAnimationFrame       ||
				window.oCancelRequestAnimationFrame     ||
				window.msCancelRequestAnimationFrame        ||
				clearTimeout
			})();

			// to store the request
			var request;
			// progress value
			var i = 0;

			// start and run the animloop
			(function animloop(){
				$('#progressbar').progressbar("option", "value", i++);
				request = requestAnimFrame(animloop);
				if ( i > 100 )
					cancelRequestAnimFrame(request);
			})();
		});
		$(this).find('#pending').progress_pending('start');
		$(this).find('#progressing').progressing('start');
	});

	$('#progressbar-demo').bind('pagehide', function (e) {
		$(this).find('#pending').progress_pending('stop');
		$(this).find('#progressing').progressing('stop');
	});

	$('#tickernoti-demo').bind('vmouseup', function (e) {
		$('#tickernoti').tickernoti('show');
	});

	$('#tickernoti-demo').bind('tapped', function (e, m) {
		/* DO SOMETHING */
		alert('ticker noti is tapped\nparameter:"' + m + '"');
		$('#tickernoti').tickernoti('hide');
	});

	$('#smallpopup-demo').bind('vmouseup', function (e) {
		$('#smallpopup').smallpopup('show');
	});

	$('#smallpopup-demo').bind('tapped', function (e, m) {
		/* DO SOMETHING */
		alert('smallpopup is tapped\nparameter:"' + m + '"');
		$('#smallpopup').smallpopup('hide');
	});

	$('#imageslider-add').bind('vmouseup', function (e) {
		$('#imageslider').imageslider('add', './test/10.jpg');
		$('#imageslider').imageslider('add', './test/11.jpg');
		$('#imageslider').imageslider('refresh');
	});

	$('#imageslider-del').bind('vmouseup', function (e) {
		$('#imageslider').imageslider('del');
	});

	$('#selectioninfo-demo').bind('vmouseup', function (e) {
		$('#smallpopup_selectioninfo').attr("data-text1", $("#dayselector1").find(".ui-checkbox-on").length);
		$('#smallpopup_selectioninfo').smallpopup('show');
	});

	$('#selectioninfo-demo').bind('tapped', function (e, m) {
		/* DO SOMETHING */
		alert('smallpopup is tapped\nparameter:"' + m + '"');
		$('#smallpopup_selectioninfo').smallpopup('hide');
	});



    $('#groupindex-demo').bind('pageshow', function () {
        $('#groupindex').scrolllistview();
    });

    $("#showVolumeButton").bind("vclick", function (e) {
        $("#myVolumeControl").volumecontrol("open");
    });
    $("#volumecontrol_setBasicTone").bind("change", function(e) {
      var basicTone = !($("#volumecontrol_setBasicTone").next('label').find(".ui-icon").hasClass("ui-icon-checkbox-on"));

      if (basicTone) {
        $("#myVolumeControl").volumecontrol("option", "basicTone", true);
        $("#myVolumeControl").volumecontrol("option", "title", "Basic Tone");
      }
      else {
        $("#myVolumeControl").volumecontrol("option", "basicTone", false);
        $("#myVolumeControl").volumecontrol("option", "title", "Volume");
      }
    });
    $("#myoptionheader").bind('collapse', function () {
        console.log('option header was collapsed');
    });

    $("#myoptionheader").bind('expand', function () {
        console.log('option header was expanded');
    });

	//day-selector codes...
	$( "#day-selector-check-all" ).live('vclick', function () {
		$("#dayselector1").dayselector('selectAll');
	});

	$( "#day-selector-get-days" ).live('vclick', function () {
		var valuesStr = $("#dayselector1").dayselector('value').join(', ');
		$(".selectedDay").text(valuesStr);
	});
	
	/* Gen list : Dummy DB load */
	$(".virtuallist_demo_page").live("pagecreate", function(){
		/* ?_=ts code for no cache mechanism */
		$.getScript( "./virtuallist-db-demo.js", function(data, textStatus)
		{
			$("ul").filter(function(){return $(this).data("role")=="virtuallistview";}).addClass("vlLoadSuccess");
			$("ul.ui-virtual-list-container").virtuallistview("create");
		});
	});
});

$(document).bind("pagecreate", function() {
    var button = $('#calendarbutton');
    button.bind('vclick', function (e) {
        button.calendarpicker('open');
        button.unbind('selectedDate').bind('selectedDate',function(e,val) {
            $('#selectedCalendarDate').attr('value',val);
        });
    });
});
