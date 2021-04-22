webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Modal/ModalBasic.jsx":
/*!*****************************************!*\
  !*** ./components/Modal/ModalBasic.jsx ***!
  \*****************************************/
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
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.js");


var _jsxFileName = "C:\\proyectos\\next\\seani\\components\\Modal\\ModalBasic.jsx",
    _this = undefined,
    _s = $RefreshSig$();







var Modal = function Modal() {
  _s();

  var typeTest = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.typeTest;
  });
  var time = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.time;
  });
  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
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
              // localStorage.setItem('time', 0)
              switch (typeTest) {
                case "Pensamiento analítico":
                  //exam
                  Object(_utils_api__WEBPACK_IMPORTED_MODULE_5__["examCancel"])({
                    id: user === null || user === void 0 ? void 0 : user.uid
                  }).then(function () {
                    window.location.replace('/home');
                  });
                  break;

                case "Estructura de la lengua":
                  //lengua
                  Object(_utils_api__WEBPACK_IMPORTED_MODULE_5__["lenguaCancel"])({
                    id: user === null || user === void 0 ? void 0 : user.uid
                  }).then(function () {
                    window.location.replace('/home');
                  });
                  break;

                case "Comprensión lectora":
                  //logico
                  Object(_utils_api__WEBPACK_IMPORTED_MODULE_5__["logiCancel"])({
                    id: user === null || user === void 0 ? void 0 : user.uid
                  }).then(function () {
                    window.location.replace('/home');
                  });
                  break;

                case "Pensamiento matemático":
                  //mate
                  Object(_utils_api__WEBPACK_IMPORTED_MODULE_5__["mateCancel"])({
                    id: user === null || user === void 0 ? void 0 : user.uid
                  }).then(function () {
                    window.location.replace('/home');
                  });
                  break;

                default:
                  Object(_utils_api__WEBPACK_IMPORTED_MODULE_5__["examCancel"])({
                    id: user === null || user === void 0 ? void 0 : user.uid
                  }).then(function () {
                    window.location.replace('/home');
                  });
                  break;
              }
            }
          });
        }
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
      name: "Terminar examen",
      onClick: primer,
      className: "my-color"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 5
  }, _this);
};

_s(Modal, "Ppsh7W/Uz+a6u+3zdrwjaOjqAmk=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = Modal;
/* harmony default export */ __webpack_exports__["default"] = (Modal);
/***
 *
 *
 *
 */

var _c;

$RefreshReg$(_c, "Modal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbC9Nb2RhbEJhc2ljLmpzeCJdLCJuYW1lcyI6WyJNb2RhbCIsInR5cGVUZXN0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInRpbWUiLCJ1c2VyIiwicHJpbWVyIiwiU3dhbCIsImZpcmUiLCJ0aXRsZSIsInRleHQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0IiwidmFsdWUiLCJleGFtQ2FuY2VsIiwiaWQiLCJ1aWQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJsZW5ndWFDYW5jZWwiLCJsb2dpQ2FuY2VsIiwibWF0ZUNhbmNlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNGLFFBQVY7QUFBQSxHQUFOLENBQTVCO0FBQ0EsTUFBTUcsSUFBSSxHQUFHRiwrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLElBQVY7QUFBQSxHQUFOLENBQXhCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHSCwrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNFLElBQVY7QUFBQSxHQUFOLENBQXhCOztBQUNBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkIsUUFBSUYsSUFBSSxHQUFHLENBQVgsRUFBYztBQUNaRyx3REFBSSxDQUFDQyxJQUFMLENBQVU7QUFDUkMsYUFBSyxnQ0FBc0JSLFFBQXRCLE1BREc7QUFFUlMsWUFBSSxFQUFFLHlC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MDJlZGU4OTcxMDZjYThlZWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFN3YWwgZnJvbSBcInN3ZWV0YWxlcnQyXCI7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge21hdGVDYW5jZWwsbG9naUNhbmNlbCxsZW5ndWFDYW5jZWwsZXhhbUNhbmNlbH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpJztcclxuXHJcblxyXG5jb25zdCBNb2RhbCA9ICgpID0+IHtcclxuICBjb25zdCB0eXBlVGVzdCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnR5cGVUZXN0KTtcclxuICBjb25zdCB0aW1lID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudGltZSk7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IHByaW1lciA9ICgpID0+IHtcclxuICAgIGlmICh0aW1lID4gMCkge1xyXG4gICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgIHRpdGxlOiBgwr9UZXJtaW5hciBleGFtZW4gJHt0eXBlVGVzdH0/YCxcclxuICAgICAgICB0ZXh0OiBcIk5vIHBvZHJhcyByZXZlcnRpciBlc3RvXCIsXHJcbiAgICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzMwODVkNlwiLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiBcIiNkMzNcIixcclxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJTaVwiLFxyXG4gICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCLCv0VzdGFzIHNlZ3Vybz9cIixcclxuICAgICAgICAgICAgdGV4dDogXCJUaWVuZXMgdGllbXBvIHBhcmEgcmV2aXNhciB0dSBleGFtZW5cIixcclxuICAgICAgICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogXCIjMzA4NWQ2XCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiBcIiNkMzNcIixcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiU2kgZXN0b3kgdG90YWxtZW50ZSBzZWd1cm8hXCIsXHJcbiAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aW1lJywgMClcclxuICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGVUZXN0KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiUGVuc2FtaWVudG8gYW5hbMOtdGljb1wiOlxyXG4gICAgICAgICAgICAgICAgICAvL2V4YW1cclxuICAgICAgICAgICAgICAgICAgZXhhbUNhbmNlbCh7aWQ6dXNlcj8udWlkfSkudGhlbigoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvaG9tZScpO1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJFc3RydWN0dXJhIGRlIGxhIGxlbmd1YVwiOlxyXG4gICAgICAgICAgICAgICAgICAvL2xlbmd1YVxyXG4gICAgICAgICAgICAgICAgICBsZW5ndWFDYW5jZWwoe2lkOnVzZXI/LnVpZH0pLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2hvbWUnKVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJDb21wcmVuc2nDs24gbGVjdG9yYVwiOlxyXG4gICAgICAgICAgICAgICAgICAvL2xvZ2ljb1xyXG4gICAgICAgICAgICAgICAgICBsb2dpQ2FuY2VsKHtpZDp1c2VyPy51aWR9KS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9ob21lJylcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlBlbnNhbWllbnRvIG1hdGVtw6F0aWNvXCI6XHJcbiAgICAgICAgICAgICAgICAgIC8vbWF0ZVxyXG4gICAgICAgICAgICAgICAgICBtYXRlQ2FuY2VsKHtpZDp1c2VyPy51aWR9KS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9ob21lJylcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgZXhhbUNhbmNlbCh7aWQ6dXNlcj8udWlkfSkudGhlbigoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvaG9tZScpO1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE1lbnUuSXRlbSBuYW1lPVwiVGVybWluYXIgZXhhbWVuXCIgb25DbGljaz17cHJpbWVyfSBjbGFzc05hbWU9XCJteS1jb2xvclwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XHJcblxyXG4vKioqXHJcbiAqXHJcbiAqXHJcbiAqXHJcbiAqL1xyXG4iXSwic291cmNlUm9vdCI6IiJ9