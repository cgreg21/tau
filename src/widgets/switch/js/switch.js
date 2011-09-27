/*!
 * jQuery Mobile Widget @VERSION
 *
 * Copyright (C) TODO
 * License: TODO
 * Authors: Gabriel Schulhof <gabriel.schulhof@intel.com>
 */

/*
 * Displays a simple two-state switch.
 *
 * To apply, add the attribute data-role="switch" to a <div>
 * element inside a page. Alternatively, call switch() 
 * on an element, like this :
 *
 *     $("#myswitch").switch();
 * where the html might be :
 *     <div id="myswitch"></div>
 *
 * Options:
 *     checked: Boolean; the state of the switch
 *     Default: true (up)
 *
 * Events:
 *     changed: Emitted when the switch is changed
 */

(function($, undefined) {

$.widget("todons.switch", $.mobile.widget, {

  options: {
    checked: true,
    initSelector: ":jqmData(role='switch')"
  },

  _create: function() {
    var self = this,
        dstAttr = this.element.is("input") ? "checked" : "data-checked",
        ui = {
          outer: "#switch",
          normalBackground: "#switch-inner",
          activeBackground: "#switch-inner-active",
          button:           "#switch-button",
          realbutton:       "#switch-button-outside"
        };

    ui = $.mobile.todons.loadPrototype("switch", ui);
    this.element.append(ui.outer);
    ui.outer.find("a").buttonMarkup({inline: true, corners: true});

    $.extend(this, {
      ui: ui,
      dstAttr: dstAttr
    });

    /* FIXME 0x45666291: St00pid hack necessary because .outerHeight() doesn't seem to work during _create() */
    setTimeout(function(){$.mobile.todons.parseOptions(self, true);}, 0);

    ui.realbutton.bind("vclick", function(e) {
      self._toggle();
      e.stopPropagation();
    });

    ui.normalBackground.bind("vclick", function(e) {
      self._toggle();
      e.stopPropagation();
    });
  },

  _toggle: function() {
    this._setChecked(!(parseInt(this.ui.button.css("top")) === 0));
  },

  _setOption: function(key, value, unconditional) {
    if (undefined === unconditional)
      unconditional = false;
    if (key === "checked")
      this._setChecked(value, unconditional);
  },

  _setChecked: function(checked, unconditional) {
    var dst = checked ? 0 : this.ui.button.outerHeight();

    this.ui.normalBackground.css("height", this.ui.button.outerHeight() * 3);
    this.ui.activeBackground.css("height", this.ui.button.outerHeight() * 3);
    this.ui.realbutton.position({
      my: "center center",
      at: "center center",
      of: this.ui.button
    });

    /* FIXME 0x45666291: Part of the ugly hack */
    if (unconditional)
      this.ui.button.removeClass("ui-switch-button-hidden").css("opacity", 0);
    else
      this.ui.button.removeClass("ui-switch-button-hidden");

    if (dst != parseInt(this.ui.button.css("top")) || unconditional) {
      var newTop = (this.ui.realbutton.position().top + (dst - this.ui.button.position().top));
      if (unconditional) {
        this.ui.realbutton.css("top", newTop + "px");
        this.ui.button.css("top", dst + "px");
        this.ui.normalBackground.css("opacity", checked ? 0.0 : 1.0);
        this.ui.activeBackground.css("opacity", checked ? 1.0 : 0.0);
      }
      else {
        this.ui.realbutton.animate({"top": newTop + "px"});
        this.ui.button.animate({"top": dst + "px"});
        this.ui.normalBackground.animate({"opacity": checked ? 0.0 : 1.0});
        this.ui.activeBackground.animate({"opacity": checked ? 1.0 : 0.0});
      }

      this.options.checked = checked;
      this.element.attr(this.dstAttr, checked ? "true" : "false");
      this.element.triggerHandler("changed", checked);
    }
  },
});

$(document).bind("pagecreate create", function(e) {
  $($.todons.switch.prototype.options.initSelector, e.target)
    .not(":jqmData(role='none'), :jqmData(role='nojs')")
    .switch();
});

})(jQuery);
