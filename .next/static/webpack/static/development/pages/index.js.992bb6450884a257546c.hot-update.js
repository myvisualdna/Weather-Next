webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/navigation.js":
/*!**********************************!*\
  !*** ./components/navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_actions_firstFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions/firstFetch */ \"./redux/actions/firstFetch.js\");\n/* harmony import */ var _redux_actions_firstImperial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/firstImperial */ \"./redux/actions/firstImperial.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_styling_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/styling.module.scss */ \"./styles/styling.module.scss\");\n/* harmony import */ var _styles_styling_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_styling_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/andresnieves/Documents/React/arietis/components/navigation.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nvar Switch = function Switch(_ref) {\n  var celsius = _ref.celsius,\n      handleToggle = _ref.handleToggle;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"input\", {\n    checked: celsius,\n    onChange: ToggleUnit,\n    className: _styles_styling_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.react_switch_checkbox,\n    id: \"react-switch-new\",\n    type: \"checkbox\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }), __jsx(\"label\", {\n    style: {\n      background: celsius && \"#06D6A0\"\n    },\n    className: _styles_styling_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.react_switch_label,\n    htmlFor: \"react-switch-new\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    className: _styles_styling_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.react_switch_button,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  })));\n};\n\n_c = Switch;\n\nvar Navigation = function Navigation() {\n  _s();\n\n  var myAPI = \"ba5bdbde96da5e11cab5be14c6342e0f\";\n\n  var Switch = function Switch(_ref2) {\n    var isOn = _ref2.isOn,\n        handleToggle = _ref2.handleToggle;\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"input\", {\n      checked: isOn,\n      onChange: ToggleUnit,\n      className: _styles_styling_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.react_switch_checkbox,\n      id: \"react-switch-new\",\n      type: \"checkbox\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }\n    }), __jsx(\"label\", {\n      style: {\n        background: isOn && \"#06D6A0\"\n      },\n      className: _styles_styling_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.react_switch_label,\n      htmlFor: \"react-switch-new\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }\n    }, __jsx(\"span\", {\n      className: _styles_styling_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.react_switch_button,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 11\n      }\n    })));\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      celsius = _useState[0],\n      setCelsius = _useState[1]; //3. HOOKS\n  //Para fijar el parametro default para la accion\n  //Es la funcion usada para el dispatch pasandole un valor\n  //por default (en este caso Buenos Aires)\n  //UseEffect es componentDidMount\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var request = axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(\"http://api.ipapi.com/check?access_key=ba5bdbde96da5e11cab5be14c6342e0f\");\n    console.log(request.data);\n    getOneAsync(\"Portland\");\n  }, []); //2. Creamos el metodo que se va a disparar cuando subirmos\n  //algo a traves del input (2)\n\n  var getWeatherInfo = function getWeatherInfo(e) {\n    e.preventDefault();\n    var city = e.target.elements.city.value;\n\n    if (city === \"\") {\n      console.log(\"no city to search\");\n    } else {//Llamamos al creador de acciones conectado (3)\n    }\n\n    if (celsius === true) {\n      getOneAsync(city);\n    } else {\n      getOneAsyncImperial(city);\n    }\n  };\n\n  var ToggleUnit = function ToggleUnit() {\n    setCelsius(!celsius);\n  };\n\n  var theUnit = \"°C\";\n\n  if (celsius === true) {\n    theUnit === \"°C\";\n  } else {\n    theUnit === \"°F\";\n  }\n\n  console.log(celsius); //1. HOOKS\n  //Este un creador de acciones \"conectado\": es una funcion\n  //que recibe el parametro \"city\" y que cuando sea llamada\n  //Despachara (disparara) otra funcion \"fetchweather\" (que es\n  //la accion que recoge la API)\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])(); //Debajo tenemos una funcion asyncrona (una vez ejecutada\n  //no devuelve una accion, sino otra funcion. Ver accion FetchOneAsync)\n\n  var getOneAsync = function getOneAsync(city) {\n    return dispatch(Object(_redux_actions_firstFetch__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(city));\n  };\n\n  var getOneAsyncImperial = function getOneAsyncImperial(city) {\n    return dispatch(Object(_redux_actions_firstImperial__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(city));\n  };\n\n  return __jsx(\"nav\", {\n    className: \"navbar navbar-expand-lg navbar-light bg-light justify-content-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    className: \"navbar-brand\",\n    href: \"#\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }\n  }, \"Weather App\"), __jsx(\"button\", {\n    className: \"navbar-toggler\",\n    type: \"button\",\n    \"data-toggle\": \"collapse\",\n    \"data-target\": \"#navbarSupportedContent\",\n    \"aria-controls\": \"navbarSupportedContent\",\n    \"aria-expanded\": \"false\",\n    \"aria-label\": \"Toggle navigation\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    className: \"navbar-toggler-icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"collapse navbar-collapse\",\n    id: \"navbarSupportedContent\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 7\n    }\n  }, __jsx(\"ul\", {\n    className: \"navbar-nav mr-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 13\n    }\n  }, \"Home\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    href: \"/test\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 13\n    }\n  }, \"Daily\"))), __jsx(\"form\", {\n    className: \"form-inline my-2 my-lg-0\",\n    onSubmit: getWeatherInfo,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 9\n    }\n  }, __jsx(\"input\", {\n    className: _styles_styling_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.inputStyle,\n    type: \"text\",\n    name: \"city\",\n    placeholder: \"Search City...\",\n    \"aria-label\": \"Search\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 11\n    }\n  }), __jsx(\"button\", {\n    className: _styles_styling_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.btn,\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 11\n    }\n  }, \"Search\"), __jsx(\"div\", {\n    className: _styles_styling_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.unitStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 11\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 13\n    }\n  }, \"\\xB0F\"), __jsx(Switch, {\n    isOn: celsius,\n    handleToggle: function handleToggle() {\n      return setCelsius(!celsius);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 13\n    }\n  }), __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 13\n    }\n  }, \"\\xB0C\")))));\n};\n\n_s(Navigation, \"PFWGaQAXiL4loxqx448xKiiSNVY=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"]];\n});\n\n_c2 = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Switch\");\n$RefreshReg$(_c2, \"Navigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmlnYXRpb24uanM/OTMwOCJdLCJuYW1lcyI6WyJTd2l0Y2giLCJjZWxzaXVzIiwiaGFuZGxlVG9nZ2xlIiwiVG9nZ2xlVW5pdCIsInN0eWxlcyIsInJlYWN0X3N3aXRjaF9jaGVja2JveCIsImJhY2tncm91bmQiLCJyZWFjdF9zd2l0Y2hfbGFiZWwiLCJyZWFjdF9zd2l0Y2hfYnV0dG9uIiwiTmF2aWdhdGlvbiIsIm15QVBJIiwiaXNPbiIsInVzZVN0YXRlIiwic2V0Q2Vsc2l1cyIsInVzZUVmZmVjdCIsInJlcXVlc3QiLCJheGlvcyIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZ2V0T25lQXN5bmMiLCJnZXRXZWF0aGVySW5mbyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNpdHkiLCJ0YXJnZXQiLCJlbGVtZW50cyIsInZhbHVlIiwiZ2V0T25lQXN5bmNJbXBlcmlhbCIsInRoZVVuaXQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiRmV0Y2hPbmVBc3luYyIsIkZldGNoT25lQXN5bmNJbXBlcmlhbCIsImlucHV0U3R5bGUiLCJidG4iLCJ1bml0U3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBK0I7QUFBQSxNQUE1QkMsT0FBNEIsUUFBNUJBLE9BQTRCO0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjtBQUM1QyxTQUNFLG1FQUNFO0FBQ0UsV0FBTyxFQUFFRCxPQURYO0FBRUUsWUFBUSxFQUFFRSxVQUZaO0FBR0UsYUFBUyxFQUFFQyxrRUFBTSxDQUFDQyxxQkFIcEI7QUFJRSxNQUFFLG9CQUpKO0FBS0UsUUFBSSxFQUFDLFVBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBUUU7QUFDRSxTQUFLLEVBQUU7QUFB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bmVudHMvbmF2aWdhdGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IEZldGNoT25lQXN5bmMgZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvZmlyc3RGZXRjaFwiO1xuaW1wb3J0IEZldGNoT25lQXN5bmNJbXBlcmlhbCBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9maXJzdEltcGVyaWFsXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvc3R5bGluZy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBTd2l0Y2ggPSAoeyBjZWxzaXVzLCBoYW5kbGVUb2dnbGUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgY2hlY2tlZD17Y2Vsc2l1c31cbiAgICAgICAgb25DaGFuZ2U9e1RvZ2dsZVVuaXR9XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0X3N3aXRjaF9jaGVja2JveH1cbiAgICAgICAgaWQ9e2ByZWFjdC1zd2l0Y2gtbmV3YH1cbiAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgIC8+XG4gICAgICA8bGFiZWxcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogY2Vsc2l1cyAmJiBcIiMwNkQ2QTBcIiB9fVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5yZWFjdF9zd2l0Y2hfbGFiZWx9XG4gICAgICAgIGh0bWxGb3I9e2ByZWFjdC1zd2l0Y2gtbmV3YH1cbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucmVhY3Rfc3dpdGNoX2J1dHRvbn0gLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICBjb25zdCBteUFQSSA9IFwiYmE1YmRiZGU5NmRhNWUxMWNhYjViZTE0YzYzNDJlMGZcIjtcblxuICBjb25zdCBTd2l0Y2ggPSAoeyBpc09uLCBoYW5kbGVUb2dnbGUgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjaGVja2VkPXtpc09ufVxuICAgICAgICAgIG9uQ2hhbmdlPXtUb2dnbGVVbml0fVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0X3N3aXRjaF9jaGVja2JveH1cbiAgICAgICAgICBpZD17YHJlYWN0LXN3aXRjaC1uZXdgfVxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IGlzT24gJiYgXCIjMDZENkEwXCIgfX1cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5yZWFjdF9zd2l0Y2hfbGFiZWx9XG4gICAgICAgICAgaHRtbEZvcj17YHJlYWN0LXN3aXRjaC1uZXdgfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucmVhY3Rfc3dpdGNoX2J1dHRvbn0gLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgW2NlbHNpdXMsIHNldENlbHNpdXNdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgLy8zLiBIT09LU1xuICAvL1BhcmEgZmlqYXIgZWwgcGFyYW1ldHJvIGRlZmF1bHQgcGFyYSBsYSBhY2Npb25cbiAgLy9FcyBsYSBmdW5jaW9uIHVzYWRhIHBhcmEgZWwgZGlzcGF0Y2ggcGFzYW5kb2xlIHVuIHZhbG9yXG4gIC8vcG9yIGRlZmF1bHQgKGVuIGVzdGUgY2FzbyBCdWVub3MgQWlyZXMpXG4gIC8vVXNlRWZmZWN0IGVzIGNvbXBvbmVudERpZE1vdW50XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGF4aW9zLmdldChcbiAgICAgIGBodHRwOi8vYXBpLmlwYXBpLmNvbS9jaGVjaz9hY2Nlc3Nfa2V5PWJhNWJkYmRlOTZkYTVlMTFjYWI1YmUxNGM2MzQyZTBmYFxuICAgICk7XG4gICAgY29uc29sZS5sb2cocmVxdWVzdC5kYXRhKTtcbiAgICBnZXRPbmVBc3luYyhcIlBvcnRsYW5kXCIpO1xuICB9LCBbXSk7XG5cbiAgLy8yLiBDcmVhbW9zIGVsIG1ldG9kbyBxdWUgc2UgdmEgYSBkaXNwYXJhciBjdWFuZG8gc3ViaXJtb3NcbiAgLy9hbGdvIGEgdHJhdmVzIGRlbCBpbnB1dCAoMilcbiAgY29uc3QgZ2V0V2VhdGhlckluZm8gPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjaXR5ID0gZS50YXJnZXQuZWxlbWVudHMuY2l0eS52YWx1ZTtcbiAgICBpZiAoY2l0eSA9PT0gXCJcIikge1xuICAgICAgY29uc29sZS5sb2coXCJubyBjaXR5IHRvIHNlYXJjaFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy9MbGFtYW1vcyBhbCBjcmVhZG9yIGRlIGFjY2lvbmVzIGNvbmVjdGFkbyAoMylcbiAgICB9XG4gICAgaWYgKGNlbHNpdXMgPT09IHRydWUpIHtcbiAgICAgIGdldE9uZUFzeW5jKGNpdHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZXRPbmVBc3luY0ltcGVyaWFsKGNpdHkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBUb2dnbGVVbml0ID0gKCkgPT4ge1xuICAgIHNldENlbHNpdXMoIWNlbHNpdXMpO1xuICB9O1xuICBsZXQgdGhlVW5pdCA9IFwiwrBDXCI7XG4gIGlmIChjZWxzaXVzID09PSB0cnVlKSB7XG4gICAgdGhlVW5pdCA9PT0gXCLCsENcIjtcbiAgfSBlbHNlIHtcbiAgICB0aGVVbml0ID09PSBcIsKwRlwiO1xuICB9XG5cbiAgY29uc29sZS5sb2coY2Vsc2l1cyk7XG5cbiAgLy8xLiBIT09LU1xuICAvL0VzdGUgdW4gY3JlYWRvciBkZSBhY2Npb25lcyBcImNvbmVjdGFkb1wiOiBlcyB1bmEgZnVuY2lvblxuICAvL3F1ZSByZWNpYmUgZWwgcGFyYW1ldHJvIFwiY2l0eVwiIHkgcXVlIGN1YW5kbyBzZWEgbGxhbWFkYVxuICAvL0Rlc3BhY2hhcmEgKGRpc3BhcmFyYSkgb3RyYSBmdW5jaW9uIFwiZmV0Y2h3ZWF0aGVyXCIgKHF1ZSBlc1xuICAvL2xhIGFjY2lvbiBxdWUgcmVjb2dlIGxhIEFQSSlcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAvL0RlYmFqbyB0ZW5lbW9zIHVuYSBmdW5jaW9uIGFzeW5jcm9uYSAodW5hIHZleiBlamVjdXRhZGFcbiAgLy9ubyBkZXZ1ZWx2ZSB1bmEgYWNjaW9uLCBzaW5vIG90cmEgZnVuY2lvbi4gVmVyIGFjY2lvbiBGZXRjaE9uZUFzeW5jKVxuICBjb25zdCBnZXRPbmVBc3luYyA9IChjaXR5KSA9PiBkaXNwYXRjaChGZXRjaE9uZUFzeW5jKGNpdHkpKTtcbiAgY29uc3QgZ2V0T25lQXN5bmNJbXBlcmlhbCA9IChjaXR5KSA9PiBkaXNwYXRjaChGZXRjaE9uZUFzeW5jSW1wZXJpYWwoY2l0eSkpO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItbGlnaHQgYmctbGlnaHQganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgV2VhdGhlciBBcHBcbiAgICAgIDwvYT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxuICAgICAgICBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiXG4gICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIiAvPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtci1hdXRvXCI+XG4gICAgICAgICAgey8qTG9zIGxpbmtzIGRlYmVuIHRlbmVyIGVsIGhyZWYgcXVlIGluZGljYSBhIHF1ZSBhcmNoaXZvIGRlIGxhIGNhcnBldGFcbiAgICAgICAgICAgIHBhZ2VzIHF1ZXJlbW9zIGlyIChhcXVpIHZhbW9zIGFsIGhvbWUpLiBMYSA8YT4gdmEgYSBjb250ZW5lciBsYSBwYWxhYnJhXG4gICAgICAgICAgICBxdWUgdXNhbW9zIGNvbW8gbGluayovfVxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkhvbWU8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi90ZXN0XCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkRhaWx5PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmUgbXktMiBteS1sZy0wXCIgb25TdWJtaXQ9e2dldFdlYXRoZXJJbmZvfT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0U3R5bGV9XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwiY2l0eVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBDaXR5Li4uXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2hcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idG59IHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudW5pdFN0eWxlfT5cbiAgICAgICAgICAgIDxoMz7CsEY8L2gzPlxuICAgICAgICAgICAgPFN3aXRjaCBpc09uPXtjZWxzaXVzfSBoYW5kbGVUb2dnbGU9eygpID0+IHNldENlbHNpdXMoIWNlbHNpdXMpfSAvPlxuICAgICAgICAgICAgPGgzPsKwQzwvaDM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navigation.js\n");

/***/ })

})