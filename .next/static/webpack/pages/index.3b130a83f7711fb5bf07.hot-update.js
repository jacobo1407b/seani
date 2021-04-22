webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/webpack/global.js":
false,

/***/ "./node_modules/react-redux/es/components/Context.js":
false,

/***/ "./node_modules/react-redux/es/components/Provider.js":
false,

/***/ "./node_modules/react-redux/es/components/connectAdvanced.js":
false,

/***/ "./node_modules/react-redux/es/connect/connect.js":
false,

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
false,

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
false,

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
false,

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
false,

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
false,

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
false,

/***/ "./node_modules/react-redux/es/hooks/useDispatch.js":
false,

/***/ "./node_modules/react-redux/es/hooks/useReduxContext.js":
false,

/***/ "./node_modules/react-redux/es/hooks/useSelector.js":
false,

/***/ "./node_modules/react-redux/es/hooks/useStore.js":
false,

/***/ "./node_modules/react-redux/es/index.js":
false,

/***/ "./node_modules/react-redux/es/utils/Subscription.js":
false,

/***/ "./node_modules/react-redux/es/utils/batch.js":
false,

/***/ "./node_modules/react-redux/es/utils/isPlainObject.js":
false,

/***/ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js":
false,

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
false,

/***/ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js":
false,

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
false,

/***/ "./node_modules/react-redux/es/utils/warning.js":
false,

/***/ "./node_modules/redux/es/redux.js":
false,

/***/ "./node_modules/symbol-observable/es/index.js":
false,

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_proyectos_next_seani_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/api */ "./utils/api.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);




var _jsxFileName = "C:\\proyectos\\next\\seani\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_proyectos_next_seani_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






 //import {useSelector} from 'react-redux'

var index = function index(_ref) {
  _s();

  var user = _ref.user;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (user) {
      router.push('/home');
    }
  }, []);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isloadin = _useState[0],
      setIsloadin = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    password: "",
    email: ""
  }),
      formDta = _useState2[0],
      setFormDta = _useState2[1];

  var _useSnackbar = Object(notistack__WEBPACK_IMPORTED_MODULE_4__["useSnackbar"])(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  var handlerChange = function handlerChange(e) {
    var _e$target = e.target,
        value = _e$target.value,
        name = _e$target.name;
    setFormDta(_objectSpread(_objectSpread({}, formDta), {}, Object(C_proyectos_next_seani_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, name, value)));
  };

  var handlerSubmit = function handlerSubmit(e) {
    e.preventDefault();

    if (!formDta.email || !formDta.password) {
      enqueueSnackbar("Completa los campos", {
        variant: "error"
      });
      return false;
    }

    setIsloadin(true);
    Object(_utils_api__WEBPACK_IMPORTED_MODULE_5__["logIn"])(formDta).then(function (response) {
      setIsloadin(false);

      if (response.error) {
        enqueueSnackbar(response.message, {
          variant: "error"
        });
      } else {
        //cookie.set('user',JSON.stringify(response))
        router.push('/home');
        window.location.replace('/home');
      }
    })["catch"](function (err) {
      console.log(err);
      enqueueSnackbar("Error del servidor", {
        variant: "error"
      });
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "SEANI UTT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "limiter",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container-login100",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "wrap-login100",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "login100-pic js-tilt",
            "data-tilt": "",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "https://colorlib.com/etc/lf/Login_v1/images/img-01.png",
              alt: "IMG"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            onChange: handlerChange,
            onSubmit: handlerSubmit,
            className: "login100-form",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "login100-form-title",
              children: "Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "wrap-input100 validate-input",
              "data-validate": null,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "input100",
                type: "text",
                name: "email",
                placeholder: "Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 15
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "focus-input100"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "wrap-input100 validate-input",
              "data-validate": null,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                //className="input100"
                type: "password",
                name: "password",
                placeholder: "Password"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 15
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "focus-input100"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "container-login100-form-btn",
              children: isloadin ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__["default"], {
                color: "secondary"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 17
              }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "login100-form-btn",
                children: "Login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }, _this)]
  }, void 0, true);
};

_s(index, "aocSvlhBczFuNBHyPGhFxyuw/8o=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"], notistack__WEBPACK_IMPORTED_MODULE_4__["useSnackbar"]];
});

/* harmony default export */ __webpack_exports__["default"] = (index);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5kZXgiLCJ1c2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwicHVzaCIsInVzZVN0YXRlIiwiaXNsb2FkaW4iLCJzZXRJc2xvYWRpbiIsInBhc3N3b3JkIiwiZW1haWwiLCJmb3JtRHRhIiwic2V0Rm9ybUR0YSIsInVzZVNuYWNrYmFyIiwiZW5xdWV1ZVNuYWNrYmFyIiwiaGFuZGxlckNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm5hbWUiLCJoYW5kbGVyU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ2YXJpYW50IiwibG9nSW4iLCJ0aGVuIiwicmVzcG9uc2UiLCJlcnJvciIsIm1lc3NhZ2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJlcnIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFJQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFZO0FBQUE7O0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBQ3hCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBR0gsSUFBSCxFQUFRO0FBQ05DLFlBQU0sQ0FBQ0csSUFBUCxDQUFZLE9BQVo7QUFDRDtBQUNGLEdBSlEsRUFJTixFQUpNLENBQVQ7O0FBSHdCLGtCQVFRQyxzREFBUSxDQUFDLEtBQUQsQ0FSaEI7QUFBQSxNQVFqQkMsUUFSaUI7QUFBQSxNQVFQQyxXQVJPOztBQUFBLG1CQVNNRixzREFBUSxDQUFDO0FBQUVHLFlBQVEsRUFBRSxFQUFa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OEJBQWY7QUFBOEMsK0JBQWUsSUFBN0Q7QUFBQSxzQ0FDRTtBQUNFO0FBQ0Esb0JBQUksRUFBQyxVQUZQO0FBR0Usb0JBQUksRUFBQyxVQUhQO0FBSUUsMkJBQVcsRUFBQztBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFPRTtBQUFNLHlCQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBakJGLGVBMkJFO0FBQUssdUJBQVMsRUFBQyw2QkFBZjtBQUFBLHdCQUNHYixRQUFRLGdCQUNQLHFFQUFDLDBFQUFEO0FBQWtCLHFCQUFLLEVBQUM7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFETyxnQkFHUDtBQUFRLHlCQUFTLEVBQUMsbUJBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkEzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkE7QUFBQSxrQkFERjtBQXVERCxDQXhHRDs7R0FBTVAsSztVQUNXRyxxRCxFQVNhVSxxRDs7O0FBZ0dmYixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zYjEzMGE4M2Y3NzExZmI1YmYwNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCI7XHJcbmltcG9ydCB7IHVzZVNuYWNrYmFyIH0gZnJvbSBcIm5vdGlzdGFja1wiO1xyXG5pbXBvcnQge2xvZ0lufSBmcm9tICcuLi91dGlscy9hcGknXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbi8vaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5cclxuXHJcbmNvbnN0IGluZGV4ID0gKHt1c2VyfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZih1c2VyKXtcclxuICAgICAgcm91dGVyLnB1c2goJy9ob21lJylcclxuICAgIH1cclxuICB9LCBbXSlcclxuICBjb25zdCBbaXNsb2FkaW4sIHNldElzbG9hZGluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZm9ybUR0YSwgc2V0Rm9ybUR0YV0gPSB1c2VTdGF0ZSh7IHBhc3N3b3JkOiBcIlwiLCBlbWFpbDogXCJcIiB9KTtcclxuICBjb25zdCB7IGVucXVldWVTbmFja2JhciB9ID0gdXNlU25hY2tiYXIoKTtcclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZXJDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyB2YWx1ZSwgbmFtZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBzZXRGb3JtRHRhKHtcclxuICAgICAgLi4uZm9ybUR0YSxcclxuICAgICAgW25hbWVdOiB2YWx1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZXJTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKCFmb3JtRHRhLmVtYWlsIHx8ICFmb3JtRHRhLnBhc3N3b3JkKSB7XHJcbiAgICAgIGVucXVldWVTbmFja2JhcihcIkNvbXBsZXRhIGxvcyBjYW1wb3NcIiwge1xyXG4gICAgICAgIHZhcmlhbnQ6IFwiZXJyb3JcIixcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHNldElzbG9hZGluKHRydWUpO1xyXG4gICAgbG9nSW4oZm9ybUR0YSkudGhlbihyZXNwb25zZT0+e1xyXG4gICAgICBzZXRJc2xvYWRpbihmYWxzZSk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgICAgICBlbnF1ZXVlU25hY2tiYXIocmVzcG9uc2UubWVzc2FnZSwge1xyXG4gICAgICAgICAgICB2YXJpYW50OiBcImVycm9yXCIsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy9jb29raWUuc2V0KCd1c2VyJyxKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpXHJcbiAgICAgICAgICByb3V0ZXIucHVzaCgnL2hvbWUnKVxyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9ob21lJylcclxuICAgICAgICB9XHJcbiAgICB9KS5jYXRjaChlcnI9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIGVucXVldWVTbmFja2JhcihcIkVycm9yIGRlbCBzZXJ2aWRvclwiLCB7XHJcbiAgICAgICAgICB2YXJpYW50OiBcImVycm9yXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlNFQU5JIFVUVDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGltaXRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1sb2dpbjEwMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcC1sb2dpbjEwMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbjEwMC1waWMganMtdGlsdFwiIGRhdGEtdGlsdD1cIlwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jb2xvcmxpYi5jb20vZXRjL2xmL0xvZ2luX3YxL2ltYWdlcy9pbWctMDEucG5nXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJJTUdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZXJDaGFuZ2V9XHJcbiAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVyU3VibWl0fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dpbjEwMC1mb3JtXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9naW4xMDAtZm9ybS10aXRsZVwiPkxvZ2luPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwLWlucHV0MTAwIHZhbGlkYXRlLWlucHV0XCIgZGF0YS12YWxpZGF0ZT17bnVsbH0+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dDEwMFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb2N1cy1pbnB1dDEwMFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXAtaW5wdXQxMDAgdmFsaWRhdGUtaW5wdXRcIiBkYXRhLXZhbGlkYXRlPXtudWxsfT5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIC8vY2xhc3NOYW1lPVwiaW5wdXQxMDBcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvY3VzLWlucHV0MTAwXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWxvZ2luMTAwLWZvcm0tYnRuXCI+XHJcbiAgICAgICAgICAgICAge2lzbG9hZGluID8gKFxyXG4gICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgY29sb3I9XCJzZWNvbmRhcnlcIiAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImxvZ2luMTAwLWZvcm0tYnRuXCI+TG9naW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDsiXSwic291cmNlUm9vdCI6IiJ9