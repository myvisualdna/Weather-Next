webpackHotUpdate("static/development/pages/404.js",{

/***/ "./node_modules/react/index.js":
false,

/***/ "./node_modules/webpack/buildin/harmony-module.js":
false,

/***/ "./pages/404.js":
/*!**********************!*\
  !*** ./pages/404.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var lFollowX = 0,\n    lFollowY = 0,\n    x = 0,\n    y = 0,\n    friction = 1 / 30;\n\nfunction animate() {\n  x += (lFollowX - x) * friction;\n  y += (lFollowY - y) * friction;\n  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';\n  $('img').css({\n    '-webit-transform': translate,\n    '-moz-transform': translate,\n    'transform': translate\n  });\n  window.requestAnimationFrame(animate);\n}\n\n$(window).on('mousemove click', function (e) {\n  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));\n  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));\n  lFollowX = 20 * lMouseX / 100; // 100 : 12 = lMouxeX : lFollow\n\n  lFollowY = 10 * lMouseY / 100;\n});\nanimate();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy80MDQuanM/YjhkYyJdLCJuYW1lcyI6WyJsRm9sbG93WCIsImxGb2xsb3dZIiwieCIsInkiLCJmcmljdGlvbiIsImFuaW1hdGUiLCJ0cmFuc2xhdGUiLCIkIiwiY3NzIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib24iLCJlIiwibE1vdXNlWCIsIk1hdGgiLCJtYXgiLCJtaW4iLCJ3aWR0aCIsImNsaWVudFgiLCJsTW91c2VZIiwiaGVpZ2h0IiwiY2xpZW50WSJdLCJtYXBwaW5ncyI6IkFBQUEsa0RBQUlBLFFBQVEsR0FBRyxDQUFmO0FBQUEsSUFDSUMsUUFBUSxHQUFHLENBRGY7QUFBQSxJQUVJQyxDQUFDLEdBQUcsQ0FGUjtBQUFBLElBR0lDLENBQUMsR0FBRyxDQUhSO0FBQUEsSUFJSUMsUUFBUSxHQUFHLElBQUksRUFKbkI7O0FBTUEsU0FBU0MsT0FBVCxHQUFtQjtBQUNqQkgsR0FBQyxJQUFJLENBQUNGLFFBQVEsR0FBR0UsQ0FBWixJQUFpQkUsUUFBdEI7QUFDQUQsR0FBQyxJQUFJLENBQUNGLFFBQVEsR0FBR0UsQ0FBWixJQUFpQkMsUUFBdEI7QUFFQUUsV0FBUyxHQUFHLGVBQWVKLENBQWYsR0FBbUIsTUFBbkIsR0FBNEJDLENBQTVCLEdBQWdDLGdCQUE1QztBQUVBSSxHQUFDLENBQUMsS0FBRCxDQUFELENBQVNDLEdBQVQsQ0FBYTtBQUNYLHdCQUFvQkYsU0FEVDtBQUVYLHNCQUFrQkEsU0FGUDtBQUdYLGlCQUFhQTtBQUhGLEdBQWI7QUFNQUcsUUFBTSxDQUFDQyxxQkFBUCxDQUE2QkwsT0FBN0I7QUFDRDs7QUFFREUsQ0FBQyxDQUFDRSxNQUFELENBQUQsQ0FBVUUsRUFBVixDQUFhLGlCQUFiLEVBQWdDLFVBQVNDLENBQVQsRUFBWTtBQUUxQyxNQUFJQyxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQUMsR0FBVixFQUFlRCxJQUFJLENBQUNFLEdBQUwsQ0FBUyxHQUFULEVBQWNULENBQUMsQ0FBQ0UsTUFBRCxDQUFELENBQVVRLEtBQVYsS0FBb0IsQ0FBcEIsR0FBd0JMLENBQUMsQ0FBQ00sT0FBeEMsQ0FBZixDQUFkO0FBQ0EsTUFBSUMsT0FBTyxHQUFHTCxJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFDLEdBQVYsRUFBZUQsSUFBSSxDQUFDRSxHQUFMLENBQVMsR0FBVCxFQUFjVCxDQUFDLENBQUNFLE1BQUQsQ0FBRCxDQUFVVyxNQUFWLEtBQXFCLENBQXJCLEdBQXlCUixDQUFDLENBQUNTLE9BQXpDLENBQWYsQ0FBZDtBQUNBckIsVUFBUSxHQUFJLEtBQUthLE9BQU4sR0FBaUIsR0FBNUIsQ0FKMEMsQ0FJVDs7QUFDakNaLFVBQVEsR0FBSSxLQUFLa0IsT0FBTixHQUFpQixHQUE1QjtBQUVELENBUEQ7QUFTQWQsT0FBTyIsImZpbGUiOiIuL3BhZ2VzLzQwNC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBsRm9sbG93WCA9IDAsXG4gICAgbEZvbGxvd1kgPSAwLFxuICAgIHggPSAwLFxuICAgIHkgPSAwLFxuICAgIGZyaWN0aW9uID0gMSAvIDMwO1xuXG5mdW5jdGlvbiBhbmltYXRlKCkge1xuICB4ICs9IChsRm9sbG93WCAtIHgpICogZnJpY3Rpb247XG4gIHkgKz0gKGxGb2xsb3dZIC0geSkgKiBmcmljdGlvbjtcbiAgXG4gIHRyYW5zbGF0ZSA9ICd0cmFuc2xhdGUoJyArIHggKyAncHgsICcgKyB5ICsgJ3B4KSBzY2FsZSgxLjEpJztcblxuICAkKCdpbWcnKS5jc3Moe1xuICAgICctd2ViaXQtdHJhbnNmb3JtJzogdHJhbnNsYXRlLFxuICAgICctbW96LXRyYW5zZm9ybSc6IHRyYW5zbGF0ZSxcbiAgICAndHJhbnNmb3JtJzogdHJhbnNsYXRlXG4gIH0pO1xuXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG59XG5cbiQod2luZG93KS5vbignbW91c2Vtb3ZlIGNsaWNrJywgZnVuY3Rpb24oZSkge1xuXG4gIHZhciBsTW91c2VYID0gTWF0aC5tYXgoLTEwMCwgTWF0aC5taW4oMTAwLCAkKHdpbmRvdykud2lkdGgoKSAvIDIgLSBlLmNsaWVudFgpKTtcbiAgdmFyIGxNb3VzZVkgPSBNYXRoLm1heCgtMTAwLCBNYXRoLm1pbigxMDAsICQod2luZG93KS5oZWlnaHQoKSAvIDIgLSBlLmNsaWVudFkpKTtcbiAgbEZvbGxvd1ggPSAoMjAgKiBsTW91c2VYKSAvIDEwMDsgLy8gMTAwIDogMTIgPSBsTW91eGVYIDogbEZvbGxvd1xuICBsRm9sbG93WSA9ICgxMCAqIGxNb3VzZVkpIC8gMTAwO1xuXG59KTtcblxuYW5pbWF0ZSgpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/404.js\n");

/***/ }),

/***/ "dll-reference dll_5030f387d328e4415785":
false

})