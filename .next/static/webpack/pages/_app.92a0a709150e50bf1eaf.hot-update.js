webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_proyectos_next_seani_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_proyectos_next_seani_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_proyectos_next_seani_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_proyectos_next_seani_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_proyectos_next_seani_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/firebase */ "./utils/firebase.js");
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/variables */ "./utils/variables.js");
/* harmony import */ var _Layout_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Layout/Layout */ "./Layout/Layout.jsx");
/* harmony import */ var materialize_css_dist_css_materialize_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! materialize-css/dist/css/materialize.css */ "./node_modules/materialize-css/dist/css/materialize.css");
/* harmony import */ var materialize_css_dist_css_materialize_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(materialize_css_dist_css_materialize_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_styles_index_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/styles/index.css */ "./assets/styles/index.css");
/* harmony import */ var _assets_styles_index_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_index_css__WEBPACK_IMPORTED_MODULE_13__);




var _jsxFileName = "C:\\proyectos\\next\\seani\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_proyectos_next_seani_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 //import Router from "next/router";






 //import { route } from "next/dist/next-server/server/router";

/*
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const respuesta = {
    user: {
      apiKey: "AIzaSyDxblUMTsA7EQAGV3cgCcGMoYuaBN2_Ihk",
      appName: "[DEFAULT]",
      authDomain: "utt-examen.firebaseapp.com",
      createdAt: "1597202869305",
      displayName: null,
      email: "jacobohernandezmendieta7@gmail.com",
      emailVerified: true,
      isAnonymous: false,
      lastLoginAt: "1618968056675",
      uid: "MUymMC8LrBdY6X7lkof43omGgoU2",
      stsTokenManager: {
        accessToken:
          "eyJhbGciOiJSUzI1NiIsImtpZCI6IjJjOGUyYjI5NmM2ZjMyODRlYzMwYjg4NjVkNzI5M2U2MjdmYTJiOGYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdXR0LWV4YW1lbiIsImF1ZCI6InV0dC1leGFtZW4iLCJhdXRoX3RpbWUiOjE2MTg5NjgwNTYsInVzZXJfaWQiOiJNVXltTUM4THJCZFk2WDdsa29mNDNvbUdnb1UyIiwic3ViIjoiTVV5bU1DOExyQmRZNlg3bGtvZjQzb21HZ29VMiIsImlhdCI6MTYxODk2ODA1NiwiZXhwIjoxNjE4OTcxNjU2LCJlbWFpbCI6ImphY29ib2hlcm5hbmRlem1lbmRpZXRhN0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJqYWNvYm9oZXJuYW5kZXptZW5kaWV0YTdAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.XE7xsOV7uKOTwsbIP3RNQa9s4SjaxJ1BZiK4dUNRxo5DVpDV0je_YZfBSyj-8mqTU0BksTQY12xtye-tHNe2jp10z9EuryqlcwpZkpMq9hHIAhJatjIarwxf61F6RqbrC_IP8oHY98Dlf-DVfAhNEUFMnW65kku3wc9LTb76Pv9TViOrAq98QyVR3H0R1INepyP9WfuvQEkzr1NoJVWbGjEb2RaS7m1ipHOMY9eBQySCodrtnDeStEmr0341J7voBEZffJLw1j9hXHPDT7bLd14h09c7vEItlWgfmK2VwkDtmQ3LXSCdP4t2ilO35nXiVXQHK06vdYfoRbYMhh454Q",
        apiKey: "AIzaSyDxblUMTsA7EQAGV3cgCcGMoYuaBN2_Ihk",
        expirationTime: 1618971655816,
        refreshToken:
          "AGEhc0B-6oG33fsmr6TSFFHd4eWH2esoQs4XGHmvOBGYiUEpU32nsku7BQunsMBzAphrJbv_UTKqFuPq6GecM4SbTOVQPcCw5Ad6kkaLLiYfarbEHSP_TuCT4N6m-ZO8ujom2rwFx0A8O5CZxFV2CoXD1rVr5rDGWDfBG6zNEJPV5CmkxLbqG476FCBeuG9YB1H9vOdLlJjabcg7Du7baN29DLlAuj2xKA",
      },
    },
  };
  const alumno ={
    data:data
  }
  console.log(alumno)
  return {
    props: {
      respuesta,
      alumno
    },
  };
}*/

function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps,
      respuesta = _ref.respuesta,
      alumno = _ref.alumno;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_6__["default"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(notistack__WEBPACK_IMPORTED_MODULE_7__["SnackbarProvider"], {
      maxSnack: 3,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_Layout_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        user: respuesta === null || respuesta === void 0 ? void 0 : respuesta.user,
        alumno: alumno,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
          user: respuesta === null || respuesta === void 0 ? void 0 : respuesta.user,
          alumno: alumno
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

_c = MyApp;

MyApp.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(C_proyectos_next_seani_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_proyectos_next_seani_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var _respuesta$user, _data$docs$;

    var ctx, user, respuesta, data, alumno;
    return C_proyectos_next_seani_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = _ref2.ctx;
            user = _utils_firebase__WEBPACK_IMPORTED_MODULE_8__["au"].currentUser;
            respuesta = {
              user: user
            };

            if (!user) {
              _context.next = 9;
              break;
            }

            _context.next = 6;
            return _utils_firebase__WEBPACK_IMPORTED_MODULE_8__["db"].collection(_utils_variables__WEBPACK_IMPORTED_MODULE_9__["collection"]).where("user", "==", respuesta === null || respuesta === void 0 ? void 0 : (_respuesta$user = respuesta.user) === null || _respuesta$user === void 0 ? void 0 : _respuesta$user.uid).get();

          case 6:
            _context.t0 = _context.sent;
            _context.next = 10;
            break;

          case 9:
            _context.t0 = null;

          case 10:
            data = _context.t0;
            alumno = {
              data: data === null || data === void 0 ? void 0 : (_data$docs$ = data.docs[0]) === null || _data$docs$ === void 0 ? void 0 : _data$docs$.data()
            }; // const respuesta = await getInitialData();

            /*if (!respuesta.user) {
              if (ctx?.req?.url !== "/") {
                ctx?.res?.writeHead(302, { Location: "/" })?.end();
                return {};
              }
              return {};
            } else {
              const data = await db
                .collection(collection)
                .where("user", "==", respuesta?.user?.uid)
                .get();
              const alumno = { data: data?.docs[0]?.data() };
              if (ctx?.req?.url === "/") {
                ctx?.res?.writeHead(302, { Location: "/home" })?.end();
                return { respuesta, alumno };
              }
              return { respuesta, alumno };
            }*/

            return _context.abrupt("return", {
              respuesta: respuesta,
              alumno: alumno
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

var makeStore = function makeStore() {
  return _redux_store__WEBPACK_IMPORTED_MODULE_6__["default"];
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__["default"])(makeStore)(MyApp));
/*0
  const redirectOnError = () =>
    typeof window !== "undefined"
      ? window.location.replace("/")
      : ctx.res.writeHead(302, { Location: "/" })
  const redirectO = () =>
    typeof window !== "undefined"
      ? window.location.replace("/home")
      : ctx.res.writeHead(302, { Location: "/home" })
*/

/*
const user = au.currentUser;
  const respuesta = { user: user };
  const data = respuesta.user?.uid ? await db
        .collection(collection)
        .where("user", "==", respuesta?.user?.uid)
        .get() : null
  const alumno = { data: data?.docs[0]?.data() };
    if (!respuesta.user) {
      if (ctx?.req?.url !== "/") {
        ctx?.res?.writeHead(302, { Location: "/" })?.end();
        return {};
      }
      return {};
    } else {
      if (ctx?.req?.url === "/") {
        ctx?.res?.writeHead(302, { Location: "/home" })?.end();
        return { respuesta, alumno };
      }
      return { respuesta, alumno };
    }
*/

var _c;

$RefreshReg$(_c, "MyApp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJlc3B1ZXN0YSIsImFsdW1ubyIsInN0b3JlIiwidXNlciIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImF1IiwiY3VycmVudFVzZXIiLCJkYiIsImNvbGxlY3Rpb24iLCJ3aGVyZSIsInVpZCIsImdldCIsImRhdGEiLCJkb2NzIiwibWFrZVN0b3JlIiwid2l0aFJlZHV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULE9BQTREO0FBQUEsTUFBM0NDLFNBQTJDLFFBQTNDQSxTQUEyQztBQUFBLE1BQWhDQyxTQUFnQyxRQUFoQ0EsU0FBZ0M7QUFBQSxNQUFyQkMsU0FBcUIsUUFBckJBLFNBQXFCO0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVO0FBQzFELHNCQUNFLHFFQUFDLG9EQUFEO0FBQVUsU0FBSyxFQUFFQyxvREFBakI7QUFBQSwyQkFDRSxxRUFBQywwREFBRDtBQUFrQixjQUFRLEVBQUUsQ0FBNUI7QUFBQSw2QkFDRSxxRUFBQyx1REFBRDtBQUFRLFlBQUksRUFBRUYsU0FBRixhQUFFQSxTQUFGLHVCQUFFQSxTQUFTLENBQUVHLElBQXpCO0FBQStCLGNBQU0sRUFBRUYsTUFBdkM7QUFBQSwrQkFDRSxxRUFBQyxTQUFELGtDQUFlRixTQUFmO0FBQTBCLGNBQUksRUFBRUMsU0FBRixhQUFFQSxTQUFGLHVCQUFFQSxTQUFTLENBQUVHLElBQTNDO0FBQWlELGdCQUFNLEVBQUVGO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztLQVZRSixLOztBQVlUQSxLQUFLLENBQUNPLGVBQU47QUFBQSxxUUFBd0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNDLGVBQVQsU0FBU0EsR0FBVDtBQUNoQkYsZ0JBRGdCLEdBQ1RHLGtEQUFFLENBQUNDLFdBRE07QUFFaEJQLHFCQUZnQixHQUVKO0FBQUVHLGtCQUFJLEVBQUVBO0FBQVIsYUFGSTs7QUFBQSxpQkFHVEEsSUFIUztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQUdJSyxrREFBRSxDQUN2QkMsVUFEcUIsQ0FDVkEsMkRBRFUsRUFFckJDLEtBRnFCLENBRWYsTUFGZSxFQUVQLElBRk8sRUFFRFYsU0FGQyxhQUVEQSxTQUZDLDBDQUVEQSxTQUFTLENBQUVHLElBRlYsb0RBRUQsZ0JBQWlCUSxHQUZoQixFQUdyQkMsR0FIcUIsRUFISjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDBCQU1ULElBTlM7O0FBQUE7QUFHaEJDLGdCQUhnQjtBQU9kWixrQkFQYyxHQU9MO0FBQUVZLGtCQUFJLEVBQUVBLElBQUYsYUFBRUEsSUFBRixzQ0FBRUEsSUFBSSxDQUFFQyxJQUFOLENBQVcsQ0FBWCxDQUFGLGdEQUFFLFlBQWVELElBQWY7QUFBUixhQVBLLEVBUXRCOztBQUNBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUExQndCLDZDQTJCZjtBQUFFYix1QkFBUyxFQUFUQSxTQUFGO0FBQWFDLG9CQUFNLEVBQU5BO0FBQWIsYUEzQmU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBNkJBLElBQU1jLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FBTWIsb0RBQU47QUFBQSxDQUFsQjs7QUFFZWMsaUlBQVMsQ0FBQ0QsU0FBRCxDQUFULENBQXFCbEIsS0FBckIsQ0FBZjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOTJhMGE3MDkxNTBlNTBiZjFlYWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB3aXRoUmVkdXggZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFNuYWNrYmFyUHJvdmlkZXIgfSBmcm9tIFwibm90aXN0YWNrXCI7XHJcbi8vaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgYXUsIGRiIH0gZnJvbSBcIi4uL3V0aWxzL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IGNvbGxlY3Rpb24gfSBmcm9tIFwiLi4vdXRpbHMvdmFyaWFibGVzXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL0xheW91dC9MYXlvdXRcIjtcclxuaW1wb3J0IFwibWF0ZXJpYWxpemUtY3NzL2Rpc3QvY3NzL21hdGVyaWFsaXplLmNzc1wiO1xyXG5pbXBvcnQgXCJzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9hc3NldHMvc3R5bGVzL2luZGV4LmNzc1wiO1xyXG4vL2ltcG9ydCB7IHJvdXRlIH0gZnJvbSBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvcm91dGVyXCI7XHJcbi8qXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAvLyBDYWxsIGFuIGV4dGVybmFsIEFQSSBlbmRwb2ludCB0byBnZXQgcG9zdHNcclxuICBjb25zdCByZXNwdWVzdGEgPSB7XHJcbiAgICB1c2VyOiB7XHJcbiAgICAgIGFwaUtleTogXCJBSXphU3lEeGJsVU1Uc0E3RVFBR1YzY2dDY0dNb1l1YUJOMl9JaGtcIixcclxuICAgICAgYXBwTmFtZTogXCJbREVGQVVMVF1cIixcclxuICAgICAgYXV0aERvbWFpbjogXCJ1dHQtZXhhbWVuLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgICBjcmVhdGVkQXQ6IFwiMTU5NzIwMjg2OTMwNVwiLFxyXG4gICAgICBkaXNwbGF5TmFtZTogbnVsbCxcclxuICAgICAgZW1haWw6IFwiamFjb2JvaGVybmFuZGV6bWVuZGlldGE3QGdtYWlsLmNvbVwiLFxyXG4gICAgICBlbWFpbFZlcmlmaWVkOiB0cnVlLFxyXG4gICAgICBpc0Fub255bW91czogZmFsc2UsXHJcbiAgICAgIGxhc3RMb2dpbkF0OiBcIjE2MTg5NjgwNTY2NzVcIixcclxuICAgICAgdWlkOiBcIk1VeW1NQzhMckJkWTZYN2xrb2Y0M29tR2dvVTJcIixcclxuICAgICAgc3RzVG9rZW5NYW5hZ2VyOiB7XHJcbiAgICAgICAgYWNjZXNzVG9rZW46XHJcbiAgICAgICAgICBcImV5SmhiR2NpT2lKU1V6STFOaUlzSW10cFpDSTZJakpqT0dVeVlqSTVObU0yWmpNeU9EUmxZek13WWpnNE5qVmtOekk1TTJVMk1qZG1ZVEppT0dZaUxDSjBlWEFpT2lKS1YxUWlmUS5leUpwYzNNaU9pSm9kSFJ3Y3pvdkwzTmxZM1Z5WlhSdmEyVnVMbWR2YjJkc1pTNWpiMjB2ZFhSMExXVjRZVzFsYmlJc0ltRjFaQ0k2SW5WMGRDMWxlR0Z0Wlc0aUxDSmhkWFJvWDNScGJXVWlPakUyTVRnNU5qZ3dOVFlzSW5WelpYSmZhV1FpT2lKTlZYbHRUVU00VEhKQ1pGazJXRGRzYTI5bU5ETnZiVWRuYjFVeUlpd2ljM1ZpSWpvaVRWVjViVTFET0V4eVFtUlpObGczYkd0dlpqUXpiMjFIWjI5Vk1pSXNJbWxoZENJNk1UWXhPRGsyT0RBMU5pd2laWGh3SWpveE5qRTRPVGN4TmpVMkxDSmxiV0ZwYkNJNkltcGhZMjlpYjJobGNtNWhibVJsZW0xbGJtUnBaWFJoTjBCbmJXRnBiQzVqYjIwaUxDSmxiV0ZwYkY5MlpYSnBabWxsWkNJNmRISjFaU3dpWm1seVpXSmhjMlVpT25zaWFXUmxiblJwZEdsbGN5STZleUpsYldGcGJDSTZXeUpxWVdOdlltOW9aWEp1WVc1a1pYcHRaVzVrYVdWMFlUZEFaMjFoYVd3dVkyOXRJbDE5TENKemFXZHVYMmx1WDNCeWIzWnBaR1Z5SWpvaWNHRnpjM2R2Y21RaWZYMC5YRTd4c09WN3VLT1R3c2JJUDNSTlFhOXM0U2pheEoxQlppSzRkVU5SeG81RFZwRFYwamVfWVpmQlN5ai04bXFUVTBCa3NUUVkxMnh0eWUtdEhOZTJqcDEwejlFdXJ5cWxjd3Baa3BNcTloSElBaEphdGpJYXJ3eGY2MUY2UnFickNfSVA4b0hZOThEbGYtRFZmQWhORVVGTW5XNjVra3Uzd2M5TFRiNzZQdjlUVmlPckFxOThReVZSM0gwUjFJTmVweVA5V2Z1dlFFa3pyMU5vSlZXYkdqRWIyUmFTN20xaXBIT01ZOWVCUXlTQ29kcnRuRGVTdEVtcjAzNDFKN3ZvQkVaZmZKTHcxajloWEhQRFQ3YkxkMTRoMDljN3ZFSXRsV2dmbUsyVndrRHRtUTNMWFNDZFA0dDJpbE8zNW5YaVZYUUhLMDZ2ZFlmb1JiWU1oaDQ1NFFcIixcclxuICAgICAgICBhcGlLZXk6IFwiQUl6YVN5RHhibFVNVHNBN0VRQUdWM2NnQ2NHTW9ZdWFCTjJfSWhrXCIsXHJcbiAgICAgICAgZXhwaXJhdGlvblRpbWU6IDE2MTg5NzE2NTU4MTYsXHJcbiAgICAgICAgcmVmcmVzaFRva2VuOlxyXG4gICAgICAgICAgXCJBR0VoYzBCLTZvRzMzZnNtcjZUU0ZGSGQ0ZVdIMmVzb1FzNFhHSG12T0JHWWlVRXBVMzJuc2t1N0JRdW5zTUJ6QXBockpidl9VVEtxRnVQcTZHZWNNNFNiVE9WUVBjQ3c1QWQ2a2thTExpWWZhcmJFSFNQX1R1Q1Q0TjZtLVpPOHVqb20ycndGeDBBOE81Q1p4RlYyQ29YRDFyVnI1ckRHV0RmQkc2ek5FSlBWNUNta3hMYnFHNDc2RkNCZXVHOVlCMUg5dk9kTGxKamFiY2c3RHU3YmFOMjlETGxBdWoyeEtBXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgY29uc3QgYWx1bW5vID17XHJcbiAgICBkYXRhOmRhdGFcclxuICB9XHJcbiAgY29uc29sZS5sb2coYWx1bW5vKVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICByZXNwdWVzdGEsXHJcbiAgICAgIGFsdW1ub1xyXG4gICAgfSxcclxuICB9O1xyXG59Ki9cclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJlc3B1ZXN0YSwgYWx1bW5vIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgIDxTbmFja2JhclByb3ZpZGVyIG1heFNuYWNrPXszfT5cclxuICAgICAgICA8TGF5b3V0IHVzZXI9e3Jlc3B1ZXN0YT8udXNlcn0gYWx1bW5vPXthbHVtbm99PlxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSB1c2VyPXtyZXNwdWVzdGE/LnVzZXJ9IGFsdW1ubz17YWx1bW5vfSAvPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8L1NuYWNrYmFyUHJvdmlkZXI+XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IGN0eCB9KSA9PiB7XHJcbiAgY29uc3QgdXNlciA9IGF1LmN1cnJlbnRVc2VyO1xyXG4gIGNvbnN0IHJlc3B1ZXN0YSA9IHsgdXNlcjogdXNlciB9O1xyXG4gIGNvbnN0IGRhdGEgPSB1c2VyID8gYXdhaXQgZGJcclxuICAgICAgLmNvbGxlY3Rpb24oY29sbGVjdGlvbilcclxuICAgICAgLndoZXJlKFwidXNlclwiLCBcIj09XCIsIHJlc3B1ZXN0YT8udXNlcj8udWlkKVxyXG4gICAgICAuZ2V0KCkgOiBudWxsXHJcbiAgICBjb25zdCBhbHVtbm8gPSB7IGRhdGE6IGRhdGE/LmRvY3NbMF0/LmRhdGEoKSB9O1xyXG4gIC8vIGNvbnN0IHJlc3B1ZXN0YSA9IGF3YWl0IGdldEluaXRpYWxEYXRhKCk7XHJcbiAgLyppZiAoIXJlc3B1ZXN0YS51c2VyKSB7XHJcbiAgICBpZiAoY3R4Py5yZXE/LnVybCAhPT0gXCIvXCIpIHtcclxuICAgICAgY3R4Py5yZXM/LndyaXRlSGVhZCgzMDIsIHsgTG9jYXRpb246IFwiL1wiIH0pPy5lbmQoKTtcclxuICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZGJcclxuICAgICAgLmNvbGxlY3Rpb24oY29sbGVjdGlvbilcclxuICAgICAgLndoZXJlKFwidXNlclwiLCBcIj09XCIsIHJlc3B1ZXN0YT8udXNlcj8udWlkKVxyXG4gICAgICAuZ2V0KCk7XHJcbiAgICBjb25zdCBhbHVtbm8gPSB7IGRhdGE6IGRhdGE/LmRvY3NbMF0/LmRhdGEoKSB9O1xyXG4gICAgaWYgKGN0eD8ucmVxPy51cmwgPT09IFwiL1wiKSB7XHJcbiAgICAgIGN0eD8ucmVzPy53cml0ZUhlYWQoMzAyLCB7IExvY2F0aW9uOiBcIi9ob21lXCIgfSk/LmVuZCgpO1xyXG4gICAgICByZXR1cm4geyByZXNwdWVzdGEsIGFsdW1ubyB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgcmVzcHVlc3RhLCBhbHVtbm8gfTtcclxuICB9Ki9cclxuICByZXR1cm4geyByZXNwdWVzdGEsIGFsdW1ubyB9O1xyXG59O1xyXG5jb25zdCBtYWtlU3RvcmUgPSAoKSA9PiBzdG9yZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChtYWtlU3RvcmUpKE15QXBwKTtcclxuXHJcbi8qMFxyXG4gIGNvbnN0IHJlZGlyZWN0T25FcnJvciA9ICgpID0+XHJcbiAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgID8gd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCIvXCIpXHJcbiAgICAgIDogY3R4LnJlcy53cml0ZUhlYWQoMzAyLCB7IExvY2F0aW9uOiBcIi9cIiB9KVxyXG4gIGNvbnN0IHJlZGlyZWN0TyA9ICgpID0+XHJcbiAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgID8gd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCIvaG9tZVwiKVxyXG4gICAgICA6IGN0eC5yZXMud3JpdGVIZWFkKDMwMiwgeyBMb2NhdGlvbjogXCIvaG9tZVwiIH0pXHJcbiovXHJcblxyXG4vKlxyXG5jb25zdCB1c2VyID0gYXUuY3VycmVudFVzZXI7XHJcbiAgY29uc3QgcmVzcHVlc3RhID0geyB1c2VyOiB1c2VyIH07XHJcbiAgY29uc3QgZGF0YSA9IHJlc3B1ZXN0YS51c2VyPy51aWQgPyBhd2FpdCBkYlxyXG4gICAgICAgIC5jb2xsZWN0aW9uKGNvbGxlY3Rpb24pXHJcbiAgICAgICAgLndoZXJlKFwidXNlclwiLCBcIj09XCIsIHJlc3B1ZXN0YT8udXNlcj8udWlkKVxyXG4gICAgICAgIC5nZXQoKSA6IG51bGxcclxuICBjb25zdCBhbHVtbm8gPSB7IGRhdGE6IGRhdGE/LmRvY3NbMF0/LmRhdGEoKSB9O1xyXG4gICAgaWYgKCFyZXNwdWVzdGEudXNlcikge1xyXG4gICAgICBpZiAoY3R4Py5yZXE/LnVybCAhPT0gXCIvXCIpIHtcclxuICAgICAgICBjdHg/LnJlcz8ud3JpdGVIZWFkKDMwMiwgeyBMb2NhdGlvbjogXCIvXCIgfSk/LmVuZCgpO1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ge307XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoY3R4Py5yZXE/LnVybCA9PT0gXCIvXCIpIHtcclxuICAgICAgICBjdHg/LnJlcz8ud3JpdGVIZWFkKDMwMiwgeyBMb2NhdGlvbjogXCIvaG9tZVwiIH0pPy5lbmQoKTtcclxuICAgICAgICByZXR1cm4geyByZXNwdWVzdGEsIGFsdW1ubyB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7IHJlc3B1ZXN0YSwgYWx1bW5vIH07XHJcbiAgICB9XHJcbiovXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=