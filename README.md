#QUnit Layout Assertions

Layout assertions for [QUnit](http://qunitjs.com/)

##Usage

Include in your html:
```html
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" src="qunit.js"></script>
<script type="text/javascript" src="qunit-layout-assertions.js"></script>
```

Use the assertions in your QUnit tests:
```html
<script type="text/javascript">
  QUnit.module('main content layout');
  
  test('position', function() {
    assertOffsetLeft( $("#main-content") , 550 , "left offset should be 550" );
    assertOffsetRight( $("#main-content") , 550 , "right offset should be 550" );
  });
</script>
```

[jQuery](http://jquery.com/) and QUnit are necessary.

##Assertions

**assertWidth($el, expected, [tolerance], [message])**
asserts the width of the given element
```js
assertWidth( $('#el') , 100 );
assertWidth( $('#el') , 100 , 1 , "width should be 100" );
```

**assertOuterWidth($el, expected, [tolerance], [message])**
asserts the outer width of the given element including border, padding
```js
assertOuterWidth( $('#el') , 100 );
assertOuterWidth( $('#el') , 100 , 1 , "outer width should be 100" );
```

**assertOuterWidthWithMargin($el, expected, [tolerance], [message])**
asserts the outer width of the given element including border, padding, margin
```js
assertOuterWidthWithMargin( $('#el') , 100 );
assertOuterWidthWithMargin( $('#el') , 100 , 1 , "outer width should be 100 including margin" );
```

**assertOffsetLeft($el, expected, [tolerance], [message])**
asserts the left offset of the given element excluding the margin
```js
assertOffsetLeft( $('#el') , 100 );
assertOffsetLeft( $('#el') , 100 , 1 , "left offset should be 100" );
```

**assertOffsetRight($el, expected, [tolerance], [message])**
asserts the right offset of the given element excluding the margin
```js
assertOffsetRight( $('#el') , 100 );
assertOffsetRight( $('#el') , 100 , 1 , "right offset should be 100" );
```

**assertOffsetTop($el, expected, [tolerance], [message])**
asserts the top offset of the given element excluding the margin
```js
assertOffsetTop( $('#el') , 100 );
assertOffsetTop( $('#el') , 100 , 1 , "top offset should be 100" );
```

**assertHorizontallyCentered($el, [tolerance], [message])**
asserts that the given element is horizontally centered (excluding the margin) within its parent element
```js
assertHorizontallyCentered( $('#el') );
assertHorizontallyCentered( $('#el') , 1 , "should be horizontally centered" );
```

##License

Copyright (c) 2014 Martin Knopf Licensed under the MIT license.