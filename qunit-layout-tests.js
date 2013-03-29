(function(QUnit) {
  /*
   * LAYOUT ASSERTIONS
   */
  QUnit.assertOffsetLeft = assertOffsetLeft = function($el, expectedOffset, msg) {
    equal($el.offset().left, expectedOffset, msg);
  }
  
  QUnit.assertOffsetTop = assertOffsetTop = function($el, expectedOffset, msg) {
    equal($el.offset().top, expectedOffset, msg);
  }
  
  /*
   * COLORFUL RESULT LOGGING
   */
  var isMSIE = /msie/.test(navigator.userAgent.toLowerCase());
  QUnit.log(function(details) {
    var cssPlaceholder = isMSIE ? '' : '%c',
	    colorCSS = isMSIE ? ' ' : ('background:' + (details.result ? 'green' : 'red') + ';color:white');
    
    if(details.result) {
      console.log(cssPlaceholder + (details.result ? "[+++]" : "[---]"),
        colorCSS,
        ' ' + details.name + ':',
        ' ' + details.message);
    } else {
      console.log(cssPlaceholder + (details.result ? "[+++]" : "[---]"),
        colorCSS,
        ' ' + details.name + ':',
        ' ' + details.message,
        ' (' + 'actual = ' + details.actual,
        ', expected = ' + details.expected + ')',
        '\n' + details.source);
    }
  });
})(QUnit);