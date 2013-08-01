/*
 * QUnit Layout Assertions
 * Copyright (c) 2013 Martin Knopf Licensed under the MIT license.
 *
 * jQuery, QUnit
 * Copyright 2013 The jQuery Foundation.
 */

var expect = require('expect.js');

describe('QUnit Layout Assertions', function() {
  
  QUnit = {
      push: function(passes, actual, expected, msg) {
        expect(passes).to.be.ok();
      },
      ok: function(expression, msg) {
        expect(expression).to.be.ok();
      },
      equal: function(actual, expected, msg) {
        expect(actual).to.eql(expected);
      },
      log: function() { 'noop'; }
  };
  require('../qunit-layout-assertions.js');
  
  describe('#assertWidth', function() {
    it('should compare to the given element\'s width', function() {
      var $el = { width: function() { return 101; } };
      
      QUnit.assertWidth($el, 101);
    });
    
    it('should compare to the given element\'s width using the given tolerance', function() {
      var $el = { width: function() { return 100; } };
      
      QUnit.assertWidth($el, 101, 1);
    });
    
    it('should compare to the given element\'s width regardless of tolerance', function() {
      var $el = { width: function() { return 101; } };
      
      QUnit.assertWidth($el, 101, 1);
    });
    
  });
  
  describe('#assertOuterWidth', function() {
    it('should compare to the given element\'s outer width', function() {
      var $el = { outerWidth: function() { return 100; } };
      
      QUnit.assertOuterWidth($el, 100);
    });
    
    it('should compare to the given element\'s outer width using the given tolerance', function() {
      var $el = { outerWidth: function() { return 101; } };
      
      QUnit.assertOuterWidth($el, 100, 1);
    });
    
    it('should compare to the given element\'s outer width regardless of tolerance', function() {
      var $el = { outerWidth: function() { return 100; } };
      
      QUnit.assertOuterWidth($el, 100, 1);
    });
    
  });
  
  describe('#assertOuterWidthWithMargin', function() {
    it('should compare to the given element\'s outer width including it\'s margin', function() {
      var $el = { outerWidth: function(b) { return b ? 100 : 0; } };
      
      QUnit.assertOuterWidthWithMargin($el, 100);
    });
    
    it('should compare to the given element\'s outer width including it\'s margin using the given tolerance', function() {
      var $el = { outerWidth: function(b) { return b ? 101 : 0; } };
      
      QUnit.assertOuterWidthWithMargin($el, 100, 1);
    });
    
    it('should compare to the given element\'s outer width including it\'s margin regardless of tolerance', function() {
      var $el = { outerWidth: function(b) { return b ? 100 : 0; } };
      
      QUnit.assertOuterWidthWithMargin($el, 100, 1);
    });
    
  });
  
  describe('#assertOffsetLeft', function() {
    it('should compare to the given element\'s left offset', function() {
      var $el = { offset: function() { return { left: 100 }; } };
      
      QUnit.assertOffsetLeft($el, 100);
    });
    
    it('should compare to the given element\'s left offset using the given tolerance', function() {
      var $el = { offset: function() { return { left: 101 }; } };
      
      QUnit.assertOffsetLeft($el, 100, 1);
    });
    
    it('should compare to the given element\'s left offset regardless of tolerance', function() {
      var $el = { offset: function() { return { left: 100 }; } };
      
      QUnit.assertOffsetLeft($el, 100, 1);
    });
    
  });
  
  describe('#assertOffsetRight', function() {
    it('should compare to the given element\'s left offset + width', function() {
      var $el = {
          offset: function() { return { left: 100 }; },
          outerWidth: function() { return 101; }
      };
      
      QUnit.assertOffsetRight($el, 201);
    });

    it('should compare to the given element\'s left offset + width using the given tolerance', function() {
      var $el = {
          offset: function() { return { left: 101 }; },
          outerWidth: function() { return 101; }
      };
      
      QUnit.assertOffsetRight($el, 201, 1);
    });

    it('should compare to the given element\'s left offset + width regardless of tolerance', function() {
      var $el = {
          offset: function() { return { left: 100 }; },
          outerWidth: function() { return 101; }
      };
      
      QUnit.assertOffsetRight($el, 201, 1);
    });
  });
  
  describe('#assertOffsetTop', function() {
    it('should compare to the given element\'s top offset', function() {
      var $el = { offset: function() { return { top: 100 }; } };
      
      QUnit.assertOffsetTop($el, 100);
    });

    it('should compare to the given element\'s top offset using the given tolerance', function() {
      var $el = { offset: function() { return { top: 99 }; } };
      
      QUnit.assertOffsetTop($el, 100, 1);
    });
    
    it('should compare to the given element\'s top offset regardless of tolerance', function() {
      var $el = { offset: function() { return { top: 100 }; } };
      
      QUnit.assertOffsetTop($el, 100, 1);
    });
  });
  
  describe('#assertHorizontallyCentered', function() {    
    it('should assert the given element is exactly horizontally centered within it\'s parent', function() {
      var $el = {
          offset: function() { return { left: 550 }; },
          outerWidth: function() { return 820; },
          parent: function() {
            return {
              offset: function() { return { left: 0 }; },
              outerWidth: function() { return 1920; }
            };
          }
      };
      
      QUnit.assertHorizontallyCentered($el);
    });
    
    it('should assert the given element is nearly horizontally centered within it\'s parent using the given tolerance', function() {
      var $el = {
          offset: function() { return { left: 549 }; },
          outerWidth: function() { return 820; },
          parent: function() {
            return {
              offset: function() { return { left: 0 }; },
              outerWidth: function() { return 1920; }
            };
          }
      };
      
      QUnit.assertHorizontallyCentered($el, 1);
    });
    
    it('should assert the given element is exactly horizontally centered within it\'s parent using the given tolerance', function() {
      var $el = {
          offset: function() { return { left: 550 }; },
          outerWidth: function() { return 820; },
          parent: function() {
            return {
              offset: function() { return { left: 0 }; },
              outerWidth: function() { return 1920; }
            };
          }
      };
      
      QUnit.assertHorizontallyCentered($el, 1);
    });
  });
});