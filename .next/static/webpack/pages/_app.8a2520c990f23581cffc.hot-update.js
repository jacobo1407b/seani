webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Modal/NoResponsive.jsx":
/*!*******************************************!*\
  !*** ./components/Modal/NoResponsive.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Done */ "./node_modules/@material-ui/icons/Done.js");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.js");


var _jsxFileName = "C:\\proyectos\\next\\seani\\components\\Modal\\NoResponsive.jsx",
    _this = undefined,
    _s = $RefreshSig$();









var NoResponsive = function NoResponsive() {
  _s();

  var typeTest = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.typeTest;
  });
  var time = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.time;
  });
  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.user;
  });

  var primer = function primer() {
    if (time > 0) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
        title: "\xBFTerminar examen ".concat(typeTest, "?"),
        text: "No podras revertir esto",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si"
      }).then(function (result) {
        if (result.value) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: "¿Estas seguro?",
            text: "Tienes tiempo para revisar tu examen",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si estoy totalmente seguro!"
          }).then(function (result) {
            if (result.value) {
              switch (typeTest) {
                case "Pensamiento analítico":
                  //exam
                  Object(_utils_api__WEBPACK_IMPORTED_MODULE_7__["examCancel"])({
                    id: user === null || user === void 0 ? void 0 : user.uid
                  }).then(function () {
                    window.location.replace("/");
                  });
                  break;

                case "Estructura de la lengua":
                  //lengia
                  Object(_utils_api__WEBPACK_IMPORTED_MODULE_7__["lenguaCancel"])({
                    id: user === null || user === void 0 ? void 0 : user.uid
                  }).then(function () {
                    window.location.replace("/home");
                  });
                  break;

                case "Comprensión lectora":
                  //logico
                  Object(_utils_api__WEBPACK_IMPORTED_MODULE_7__["logiCancel"])({
                    id: user === null || user === void 0 ? void 0 : user.uid
                  }).then(function () {
                    window.location.replace("/home");
                  });
                  break;

                case "Pensamiento matemático":
                  //mate
                  Object(_utils_api__WEBPACK_IMPORTED_MODULE_7__["mateCancel"])({
                    id: user === null || user === void 0 ? void 0 : user.uid
                  }).then(function () {
                    window.location.replace("/home");
                  });
                  break;

                default:
                  Object(_utils_api__WEBPACK_IMPORTED_MODULE_7__["examCancel"])({
                    id: user === null || user === void 0 ? void 0 : user.uid
                  }).then(function () {
                    window.location.replace("/home");
                  });
                  break;
              }
            }
          });
        }
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: primer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      "aria-label": "Exit examen",
      color: "inherit",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_4___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Terminar Examen"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }, _this);
};

_s(NoResponsive, "Ppsh7W/Uz+a6u+3zdrwjaOjqAmk=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"]];
});

_c = NoResponsive;
/* harmony default export */ __webpack_exports__["default"] = (NoResponsive);
/***
 *
 *
 */

var _c;

$RefreshReg$(_c, "NoResponsive");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbC9Ob1Jlc3BvbnNpdmUuanN4Il0sIm5hbWVzIjpbIk5vUmVzcG9uc2l2ZSIsInR5cGVUZXN0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInRpbWUiLCJ1c2VyIiwicHJpbWVyIiwiU3dhbCIsImZpcmUiLCJ0aXRsZSIsInRleHQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0IiwidmFsdWUiLCJleGFtQ2FuY2VsIiwiaWQiLCJ1aWQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJsZW5ndWFDYW5jZWwiLCJsb2dpQ2FuY2VsIiwibWF0ZUNhbmNlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQ3pCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRixRQUFqQjtBQUFBLEdBQUQsQ0FBNUI7QUFDQSxNQUFNRyxJQUFJLEdBQUdGLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQXhCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHSCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNFLElBQWpCO0FBQUEsR0FBRCxDQUF4Qjs7QUFFQSxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLFFBQUlGLElBQUksR0FBRyxDQUFYLEVBQWM7QUFDWkcsd0RBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ1JDLGFBQUssZ0NBQXNCUixRQUF0QixNQURHO0FBRVJTLFlBQUksRUFBRSx5QkFGRTtBQUdSQyxZQUFJLEVBQUUsU0FIRTtBQUlSQyx3QkFBZ0IsRUFBRSxJQUpWO0FBS1JDLDBCQUFrQixFQUFFLFNBTFo7QUFNUkMseUJBQWlCLEVBQUUsTUFOWDtBQU9SQyx5QkFBaUIsRUFBRTtBQVBYLE9BQVYsRUFRR0MsSUFSSCxDQVFRLFVBQUNDLE1BQUQsRUFBWTtBQUNsQixZQUFJQSxNQUFNLENBQUNDLEtBQVgsRUFBa0I7QUFDaEJYLDREQUFJLENBQUNDLElBQUwsQ0FBVTtBQUNSQyxpQkFBSyxFQUFFLGdCQURDO0FBRVJDLGdCQUFJLEVBQUUsc0NBRkU7QUFHUkMsZ0JBQUksRUFBRSxTQUhFO0FBSVJDLDRCQUFnQixFQUFFLElBSlY7QUFLUkMsOEJBQWtCLEVBQUUsU0FMWjtBQU1SQyw2QkFBaUIsRUFBRSxNQU5YO0FBT1JDLDZCQUFpQixFQUFFO0FBUFgsV0FBVixFQVFHQyxJQVJILENBUVEsVUFBQ0MsTUFBRCxFQUFZO0FBQ2xCLGdCQUFJQSxNQUFNLENBQUNDLEtBQVgsRUFBa0I7QUFDaEIsc0JBQVFqQixRQUFSO0FBQ0UscUJBQUssdUJBQUw7QUFDRTtBQUNBa0IsK0VBQVUsQ0FBQztBQUFFQyxzQkFBRSxFQUFFZixJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRWdCO0FBQVosbUJBQUQsQ0FBVixDQUE4QkwsSUFBOUIsQ0FBbUMsWUFBTTtBQUN2Q00sMEJBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0IsR0FBeEI7QUFDRCxtQkFGRDtBQUdBOztBQUNGLHFCQUFLLHlCQUFMO0FBQ0U7QUFDQUMsaUZBQVksQ0FBQztBQUFFTCxzQkFBRSxFQUFFZixJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRWdCO0FBQVosbUJBQUQsQ0FBWixDQUFnQ0wsSUFBaEMsQ0FBcUMsWUFBTTtBQUN6Q00sMEJBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0IsT0FBeEI7QUFDRCxtQkFGRDtBQUdBOztBQUNGLHFCQUFLLHFCQUFMO0FBQ0U7QUFDQUUsK0VBQVUsQ0FBQztBQUFFTixzQkFBRSxFQUFFZixJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRWdCO0FBQVosbUJBQUQsQ0FBVixDQUE4QkwsSUFBOUIsQ0FBbUMsWUFBTTtBQUN2Q00sMEJBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0IsT0FBeEI7QUFDRCxtQkFGRDtBQUdBOztBQUNGLHFCQUFLLHdCQUFMO0FBQ0U7QUFDQUcsK0VBQVUsQ0FBQztBQUFFUCxzQkFBRSxFQUFFZixJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRWdCO0FBQVosbUJBQUQsQ0FBVixDQUE4QkwsSUFBOUIsQ0FBbUMsWUFBTTtBQUN2Q00sMEJBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0IsT0FBeEI7QUFDRCxtQkFGRDtBQUdBOztBQUVGO0FBQ0VMLCtFQUFVLENBQUM7QUFBRUMsc0JBQUUsRUFBRWYsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVnQjtBQUFaLG1CQUFELENBQVYsQ0FBOEJMLElBQTlCLENBQW1DLFlBQU07QUFDdkNNLDBCQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLE9BQXhCO0FBQ0QsbUJBRkQ7QUFHQTtBQTlCSjtBQWdDRDtBQUNGLFdBM0NEO0FBNENEO0FBQ0YsT0F2REQ7QUF3REQ7QUFDRixHQTNERDs7QUE0REEsc0JBQ0UscUVBQUMsa0VBQUQ7QUFBVSxXQUFPLEVBQUVsQixNQUFuQjtBQUFBLDRCQUNFLHFFQUFDLG9FQUFEO0FBQVksb0JBQVcsYUFBdkI7QUFBcUMsV0FBSyxFQUFDLFNBQTNDO0FBQUEsNkJBQ0UscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFRRCxDQXpFRDs7R0FBTU4sWTtVQUNhRSx1RCxFQUNKQSx1RCxFQUNBQSx1RDs7O0tBSFRGLFk7QUEyRVNBLDJFQUFmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44YTI1MjBjOTkwZjIzNTgxY2ZmYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiO1xyXG5pbXBvcnQgRG9uZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Eb25lXCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7XHJcbiAgbWF0ZUNhbmNlbCxcclxuICBsb2dpQ2FuY2VsLFxyXG4gIGxlbmd1YUNhbmNlbCxcclxuICBleGFtQ2FuY2VsLFxyXG59IGZyb20gXCIuLi8uLi91dGlscy9hcGlcIjtcclxuXHJcbmNvbnN0IE5vUmVzcG9uc2l2ZSA9ICgpID0+IHtcclxuICBjb25zdCB0eXBlVGVzdCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHlwZVRlc3QpO1xyXG4gIGNvbnN0IHRpbWUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRpbWUpO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICBjb25zdCBwcmltZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAodGltZSA+IDApIHtcclxuICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICB0aXRsZTogYMK/VGVybWluYXIgZXhhbWVuICR7dHlwZVRlc3R9P2AsXHJcbiAgICAgICAgdGV4dDogXCJObyBwb2RyYXMgcmV2ZXJ0aXIgZXN0b1wiLFxyXG4gICAgICAgIGljb246IFwid2FybmluZ1wiLFxyXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiMzMDg1ZDZcIixcclxuICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogXCIjZDMzXCIsXHJcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiU2lcIixcclxuICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiwr9Fc3RhcyBzZWd1cm8/XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiVGllbmVzIHRpZW1wbyBwYXJhIHJldmlzYXIgdHUgZXhhbWVuXCIsXHJcbiAgICAgICAgICAgIGljb246IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzMwODVkNlwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogXCIjZDMzXCIsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIlNpIGVzdG95IHRvdGFsbWVudGUgc2VndXJvIVwiLFxyXG4gICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGVUZXN0KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiUGVuc2FtaWVudG8gYW5hbMOtdGljb1wiOlxyXG4gICAgICAgICAgICAgICAgICAvL2V4YW1cclxuICAgICAgICAgICAgICAgICAgZXhhbUNhbmNlbCh7IGlkOiB1c2VyPy51aWQgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCIvXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiRXN0cnVjdHVyYSBkZSBsYSBsZW5ndWFcIjpcclxuICAgICAgICAgICAgICAgICAgLy9sZW5naWFcclxuICAgICAgICAgICAgICAgICAgbGVuZ3VhQ2FuY2VsKHsgaWQ6IHVzZXI/LnVpZCB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcIi9ob21lXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQ29tcHJlbnNpw7NuIGxlY3RvcmFcIjpcclxuICAgICAgICAgICAgICAgICAgLy9sb2dpY29cclxuICAgICAgICAgICAgICAgICAgbG9naUNhbmNlbCh7IGlkOiB1c2VyPy51aWQgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCIvaG9tZVwiKTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlBlbnNhbWllbnRvIG1hdGVtw6F0aWNvXCI6XHJcbiAgICAgICAgICAgICAgICAgIC8vbWF0ZVxyXG4gICAgICAgICAgICAgICAgICBtYXRlQ2FuY2VsKHsgaWQ6IHVzZXI/LnVpZCB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcIi9ob21lXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgZXhhbUNhbmNlbCh7IGlkOiB1c2VyPy51aWQgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCIvaG9tZVwiKTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWVudUl0ZW0gb25DbGljaz17cHJpbWVyfT5cclxuICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cIkV4aXQgZXhhbWVuXCIgY29sb3I9XCJpbmhlcml0XCI+XHJcbiAgICAgICAgPERvbmVJY29uIC8+XHJcbiAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgPHA+VGVybWluYXIgRXhhbWVuPC9wPlxyXG4gICAgPC9NZW51SXRlbT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm9SZXNwb25zaXZlO1xyXG4vKioqXHJcbiAqXHJcbiAqXHJcbiAqL1xyXG4iXSwic291cmNlUm9vdCI6IiJ9