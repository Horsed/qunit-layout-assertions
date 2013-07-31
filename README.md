#QUnit Layout Tests

Layout testing library based on [QUnit](http://qunitjs.com/)

## Features

- adds layout assertions to QUnit
- advanced logging

##Assertions

**assertOffsetLeft**: asserts the x-position of the given node

```js
test("Position of BODY", function() {
  assertOffsetLeft($("body"), 550, "x-position should be 550");
});
```
**assertOffsetTop**: asserts the y-position of the given node

```js
test("Position of BODY", function() {
  assertOffsetTop($("body"), 1, "y-position should be 1");
});
```

##License

Copyright (c) 2013 Martin Knopf Licensed under the MIT license.