/*
 * QUnit Layout Assertions
 * Copyright (c) 2013 Martin Knopf Licensed under the MIT license.
 *
 * jQuery, QUnit
 * Copyright 2013 The jQuery Foundation.
 */

QUnit.assertWidth = assertWidth = function($el, expected, tolerance, msg) {
  shortcuts.almostEqual($el.width(), expected, tolerance, msg);
};

QUnit.assertOuterWidth = assertOuterWidth = function($el, expected, tolerance, msg) {
  shortcuts.almostEqual($el.outerWidth(), expected, tolerance, msg);
};

QUnit.assertOuterWidthWithMargin = assertOuterWidthWithMargin = function($el, expected, tolerance, msg) {
  shortcuts.almostEqual($el.outerWidth(true), expected, tolerance, msg);
};

QUnit.assertOffsetLeft = assertOffsetLeft = function($el, expected, tolerance, msg) {
  shortcuts.almostEqual($el.offset().left, expected, tolerance, msg);
};

QUnit.assertOffsetRight = assertOffsetRight = function($el, expected, tolerance, msg) {
  shortcuts.almostEqual($el.offset().left + $el.outerWidth(), expected, tolerance, msg);
};

QUnit.assertOffsetTop = assertOffsetTop = function($el, expected, tolerance, msg) {
  shortcuts.almostEqual($el.offset().top, expected, tolerance, msg);
};

QUnit.assertHorizontallyCentered = assertHorizontallyCentered = function($el, tolerance, msg) {
  var $parent = $el.parent(),
      dWidth = ($parent.outerWidth() - $el.outerWidth()) / 2,
      dOffset= $el.offset().left - $parent.offset().left;
  
  shortcuts.almostEqual(dWidth, dOffset, tolerance, msg);
};

var shortcuts = {
  /**
   * Returns the parsed float value of the given css property of the given element.
   */
  cssValue: function($el, property) {
    return parseFloat($el.css(property).replace('px', ''));
  },
  almostEqual: function(actual, expected, tolerance, msg) {
    msg = typeof msg === "undefined" && tolerance && typeof tolerance === "string" ? tolerance : msg;
    tolerance = tolerance && typeof tolerance === "number" ? tolerance : 0;

    var passes = Math.abs(actual - expected) <= tolerance;

    QUnit.push(passes, actual, expected, msg);
  }
};