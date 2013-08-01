/*
 * QUnit Layout Tests
 * Copyright (c) 2013 Martin Knopf Licensed under the MIT license.
 *
 * jQuery, QUnit
 * Copyright 2013 The jQuery Foundation.
 */

QUnit.assertOffsetLeft = assertOffsetLeft = function($el, expectedOffset, msg) {
  equal($el.offset().left, expectedOffset, msg);
}

QUnit.assertOffsetTop = assertOffsetTop = function($el, expectedOffset, msg) {
  equal($el.offset().top, expectedOffset, msg);
}

/**
 * Logging of QUnit assertions.
 */
QUnit.log(function(details) {
  var isMSIE = /msie/.test(navigator.userAgent.toLowerCase()),
    colorCSS = 'background:' + (details.result ? 'green' : 'red') + ';color:white';

  if(details.result) {
    if(isMSIE) {
      console.log('[+++] %s: %s', details.name, details.message);
    } else {
      console.log('%c[+++]', colorCSS, details.name, ':', details.message);
    }
  } else {
    if(isMSIE) {
      if(details.actual && details.expected)
        console.error('[---] %s: %s\n   (actual = %s, expected = %s)\n%s', details.name, details.message, details.actual, details.expected, details.source);
      else
        console.error('[---] %s: %s\n%s', details.name, details.message, details.source);
    } else {
      console.group('%c[---]', colorCSS, details.name, ':', details.message);
      if(details.actual && details.expected)
        console.log('(actual = %s, expected = %s)', details.actual, details.expected);
      console.log(details.source);
      console.groupEnd();
    }
  }
});