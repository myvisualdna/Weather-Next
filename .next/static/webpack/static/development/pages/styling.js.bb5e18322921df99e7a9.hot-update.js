webpackHotUpdate("static/development/pages/styling.js",{

/***/ "./pages/styling.js":
/*!**************************!*\
  !*** ./pages/styling.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/container */ \"./components/container.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/andresnieves/Documents/React/arietis/pages/styling.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Styling = function Styling() {\n  _s();\n\n  //Main Hooks\n  //Nombre del selector = useSelector(state = state.nombreDelReducer.NombreDelObjetoDentroDelStateDondeSeInyectaLaInfoNueva)\n  var weatherSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.weatherInfo.weatherInformation;\n  });\n  var oneSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.oneReducer.oneApi;\n  });\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 17\n    }\n  }, \"Next Project - Scss Style\")), __jsx(_components_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 17\n    }\n  }, \"Using scss (SASS)\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 17\n    }\n  }, \"This text has some style applied\"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 17\n    }\n  }, __jsx(\"h4\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 21\n    }\n  }, weatherSelector.weather[0].description), __jsx(\"h6\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 21\n    }\n  }, \"Feels Like: \", Math.round(weatherSelector.main.feels_like), \" \\xB0C\"), __jsx(\"h6\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 21\n    }\n  }, \"Humidity:  \", weatherSelector.main.humidity, \"%\"), __jsx(\"h6\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 21\n    }\n  }, \"Wind: \", weatherSelector.wind.speed, \" km/h\"), __jsx(\"h6\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 21\n    }\n  }, \"Clouds: \", weatherSelector.clouds.all, \"%\"), __jsx(\"h6\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 21\n    }\n  }, \"Pressure: \", weatherSelector.main.pressure, \" hPa\"))));\n};\n\n_s(Styling, \"xCplnG6SrfJ1qJMiLl96dg4mDb0=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = Styling;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Styling);\n\nvar _c;\n\n$RefreshReg$(_c, \"Styling\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdHlsaW5nLmpzPzEwMjIiXSwibmFtZXMiOlsiU3R5bGluZyIsIndlYXRoZXJTZWxlY3RvciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ3ZWF0aGVySW5mbyIsIndlYXRoZXJJbmZvcm1hdGlvbiIsIm9uZVNlbGVjdG9yIiwib25lUmVkdWNlciIsIm9uZUFwaSIsIndlYXRoZXIiLCJkZXNjcmlwdGlvbiIsIk1hdGgiLCJyb3VuZCIsIm1haW4iLCJmZWVsc19saWtlIiwiaHVtaWRpdHkiLCJ3aW5kIiwic3BlZWQiLCJjbG91ZHMiLCJhbGwiLCJwcmVzc3VyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUVkO0FBQ0o7QUFDRixNQUFNQyxlQUFlLEdBQUdDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsV0FBTixDQUFrQkMsa0JBQXRCO0FBQUEsR0FBTixDQUFuQztBQUNBLE1BQU1DLFdBQVcsR0FBR0osK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDSSxVQUFOLENBQWlCQyxNQUFyQjtBQUFBLEdBQU4sQ0FBL0I7QUFHRSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURKLENBRkosRUFLSSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tQLGVBQWUsQ0FBQ1EsT0FBaEIsQ0FBd0IsQ0FBeEIsRUFBMkJDLFdBRGhDLENBSEosRUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFpQkMsSUFBSSxDQUFDQyxLQUFMLENBQVdYLGVBQWUsQ0FBQ1ksSUFBaEIsQ0FBcUJDLFVBQWhDLENBQWpCLFdBTkosRUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFnQmIsZUFBZSxDQUFDWSxJQUFoQixDQUFxQkUsUUFBckMsTUFQSixFQVFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBV2QsZUFBZSxDQUFDZSxJQUFoQixDQUFxQkMsS0FBaEMsVUFSSixFQVNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWFoQixlQUFlLENBQUNpQixNQUFoQixDQUF1QkMsR0FBcEMsTUFUSixFQVVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWVsQixlQUFlLENBQUNZLElBQWhCLENBQXFCTyxRQUFwQyxTQVZKLENBSEosQ0FMSixDQURKO0FBd0JILENBaENEOztHQUFNcEIsTztVQUlvQkUsdUQsRUFDSkEsdUQ7OztLQUxoQkYsTztBQWtDU0Esc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9zdHlsaW5nLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInO1xuXG5jb25zdCBTdHlsaW5nID0gKCkgPT4ge1xuXG4gICAgICAgIC8vTWFpbiBIb29rc1xuICAgIC8vTm9tYnJlIGRlbCBzZWxlY3RvciA9IHVzZVNlbGVjdG9yKHN0YXRlID0gc3RhdGUubm9tYnJlRGVsUmVkdWNlci5Ob21icmVEZWxPYmpldG9EZW50cm9EZWxTdGF0ZURvbmRlU2VJbnllY3RhTGFJbmZvTnVldmEpXG4gIGNvbnN0IHdlYXRoZXJTZWxlY3RvciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLndlYXRoZXJJbmZvLndlYXRoZXJJbmZvcm1hdGlvbik7XG4gIGNvbnN0IG9uZVNlbGVjdG9yID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUub25lUmVkdWNlci5vbmVBcGkpO1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgey8qSGVhZCBlcyBlbCB0aXR1bG8gZGUgbGEgcGFnaW5hIGVuIGVsIGJyb3dzZXIgKi99XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+TmV4dCBQcm9qZWN0IC0gU2NzcyBTdHlsZTwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxoMT5Vc2luZyBzY3NzIChTQVNTKTwvaDE+XG4gICAgICAgICAgICAgICAgPHA+VGhpcyB0ZXh0IGhhcyBzb21lIHN0eWxlIGFwcGxpZWQ8L3A+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgICAgICAgICAge3dlYXRoZXJTZWxlY3Rvci53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8aDY+RmVlbHMgTGlrZToge01hdGgucm91bmQod2VhdGhlclNlbGVjdG9yLm1haW4uZmVlbHNfbGlrZSl9IMKwQzwvaDY+XG4gICAgICAgICAgICAgICAgICAgIDxoNj5IdW1pZGl0eTogIHt3ZWF0aGVyU2VsZWN0b3IubWFpbi5odW1pZGl0eX0lPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPGg2PldpbmQ6IHt3ZWF0aGVyU2VsZWN0b3Iud2luZC5zcGVlZH0ga20vaDwvaDY+XG4gICAgICAgICAgICAgICAgICAgIDxoNj5DbG91ZHM6IHt3ZWF0aGVyU2VsZWN0b3IuY2xvdWRzLmFsbH0lPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPGg2PlByZXNzdXJlOiB7d2VhdGhlclNlbGVjdG9yLm1haW4ucHJlc3N1cmV9IGhQYTwvaDY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHlsaW5nO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/styling.js\n");

/***/ })

})