webpackHotUpdate_N_E("pages/home",{

/***/ "./pages/home.jsx":
/*!************************!*\
  !*** ./pages/home.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var _assets_images_utt_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/utt.png */ "./assets/images/utt.png");
/* harmony import */ var _assets_images_utt_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_utt_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_video_camara_micro_mp4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/video/camara-micro.mp4 */ "./assets/video/camara-micro.mp4");
/* harmony import */ var _assets_video_camara_micro_mp4__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_video_camara_micro_mp4__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_qwerty_mp4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/images/qwerty.mp4 */ "./assets/images/qwerty.mp4");
/* harmony import */ var _assets_images_qwerty_mp4__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_qwerty_mp4__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");



var _jsxFileName = "C:\\proyectos\\next\\seani\\pages\\home.jsx",
    _this = undefined,
    _s = $RefreshSig$();











var home = function home(_ref) {
  _s();

  var user = _ref.user;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var alumno = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.alumno;
  });

  var _useSnackbar = Object(notistack__WEBPACK_IMPORTED_MODULE_3__["useSnackbar"])(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!user) {
      router.push('/');
    }
  }, []);

  var handlerExam1 = function handlerExam1() {
    if (!alumno.data.activeExam1) {
      enqueueSnackbar("Este examen esta desactivado", {
        variant: "info"
      });
      return false;
    } else {
      window.location.replace("/exam?page=1"); //router.push('/exam?page=1')
    }
  };

  var logica = function logica() {
    if (!alumno.data.activeLogic) {
      enqueueSnackbar("Este examen esta desactivado", {
        variant: "info"
      });
      return false;
    } else {
      window.location.replace("/logico?page=1"); //router.push('/logico?page=1')
    }
  };

  var mate = function mate() {
    if (!alumno.data.activeMat) {
      enqueueSnackbar("Este examen esta desactivado", {
        variant: "info"
      });
      return false;
    } else {
      window.location.replace("/mate?page=1"); //router.push('/mate?page=1')
    }
  };

  var lengua = function lengua() {
    if (!alumno.data.activeLengua) {
      enqueueSnackbar("Este examen esta desactivado", {
        variant: "info"
      });
      return false;
    } else {
      window.location.replace("/lengua?page=1"); //router.push('/lengua?page=1')
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    textAlign: "center",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "SEANI | Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        className: "responsive-img center",
        src: _assets_images_utt_png__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: "utt-img",
        width: "250px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextIng, {
        dataAlumno: alumno
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("blockquote", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "flow-text",
            children: "La evaluaci\xF3n, que estas a punto de iniciar, consta de 90 preguntas que deber\xE1s responder en un tiempo m\xE1ximo de 2 horas, mismas que corresponden a las siguientes \xE1reas:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card-panel",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "blue-text text-darken-2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "flow-text",
              children: "L\xF3gico / Matem\xE1ticas"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "blue-text text-darken-2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "flow-text",
              children: "Comprensi\xF3n lectora"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("blockquote", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "flow-text",
          children: "Por favor, habilita los permisos necesarios en tu navegador como se muestra a continuaci\xF3n:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card-panel",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("video", {
            className: "responsive-video",
            controls: false,
            autoPlay: true,
            loop: true,
            preload: "auto",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("source", {
              src: _assets_video_camara_micro_mp4__WEBPACK_IMPORTED_MODULE_6___default.a,
              type: "video/mp4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("blockquote", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "flow-text",
          children: "Todas las preguntas son de opci\xF3n m\xFAltiple, no olvides que, al seleccionar la respuesta, tendr\xE1s que dar clic en el bot\xF3n \"Guardar respuesta\", como se muestra a continuaci\xF3n."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card-panel",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("video", {
            className: "responsive-video",
            controls: false,
            autoPlay: true,
            loop: true,
            preload: "auto",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("source", {
              src: _assets_images_qwerty_mp4__WEBPACK_IMPORTED_MODULE_7___default.a,
              type: "video/mp4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card-panel",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "flow-text",
          children: "En caso de que te encuentres en estas situaciones:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "red-text text-darken-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "flow-text",
            children: "Conexi\xF3n a internet muy inestable."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "red-text text-darken-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "flow-text",
            children: "Cerrar la pesta\xF1a por error."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "red-text text-darken-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "flow-text",
            children: "Se termine la bater\xEDa a tu celular."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "red-text text-darken-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "flow-text",
            children: "Se interrumpa la energ\xEDa el\xE9ctrica."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "red-text text-darken-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "flow-text",
            children: "Se apague tu dispositivo."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("blockquote", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "flow-text",
          children: ["El sistema guardar\xE1 las respuestas y el tiempo tambi\xE9n, as\xED que mant\xE9n la calma, en caso de cualquier duda sobre alguna situaci\xF3n puedes comunicarte al Grupo de", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "https://t.me/utt_seani_2020",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Telegram."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          columns: "equal",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              content: "Pensamiento anal\xEDtico",
              icon: "settings",
              labelPosition: "right",
              fluid: true,
              color: "orange",
              size: "huge",
              onClick: handlerExam1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              content: "Comprensi\xF3n lectora",
              icon: "cog",
              labelPosition: "right",
              fluid: true,
              color: "orange",
              size: "huge",
              onClick: logica
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              content: "Pensamiento matem\xE1tico",
              icon: "react",
              labelPosition: "right",
              fluid: true,
              color: "orange",
              size: "huge",
              onClick: mate
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              content: "Estructura de la lengua",
              icon: "male",
              labelPosition: "right",
              fluid: true,
              color: "orange",
              size: "huge",
              onClick: lengua
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 9
  }, _this);
};

_s(home, "6GjO5FVyEcW8+lwNRgrKWJxnO5c=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"], notistack__WEBPACK_IMPORTED_MODULE_3__["useSnackbar"]];
});

var TextIng = function TextIng(_ref2) {
  var _dataAlumno$data;

  var dataAlumno = _ref2.dataAlumno;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: ["BIENVENIDO ", "(A)", ", ", dataAlumno === null || dataAlumno === void 0 ? void 0 : (_dataAlumno$data = dataAlumno.data) === null || _dataAlumno$data === void 0 ? void 0 : _dataAlumno$data.username]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 9
    }, _this)
  }, void 0, false);
};

_c = TextIng;
/* harmony default export */ __webpack_exports__["default"] = (home);

var _c;

$RefreshReg$(_c, "TextIng");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS5qc3giXSwibmFtZXMiOlsiaG9tZSIsInVzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhbHVtbm8iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlU25hY2tiYXIiLCJlbnF1ZXVlU25hY2tiYXIiLCJ1c2VFZmZlY3QiLCJwdXNoIiwiaGFuZGxlckV4YW0xIiwiZGF0YSIsImFjdGl2ZUV4YW0xIiwidmFyaWFudCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsImxvZ2ljYSIsImFjdGl2ZUxvZ2ljIiwibWF0ZSIsImFjdGl2ZU1hdCIsImxlbmd1YSIsImFjdGl2ZUxlbmd1YSIsIkxvZ28iLCJWaWQiLCJRd2VydHkiLCJUZXh0SW5nIiwiZGF0YUFsdW1ubyIsInVzZXJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFZO0FBQUE7O0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBQ3ZCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0YsTUFBVjtBQUFBLEdBQU4sQ0FBMUI7O0FBRnVCLHFCQUdLRyw2REFBVyxFQUhoQjtBQUFBLE1BR2ZDLGVBSGUsZ0JBR2ZBLGVBSGU7O0FBS3ZCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFHLENBQUNSLElBQUosRUFBUztBQUNQQyxZQUFNLENBQUNRLElBQVAsQ0FBWSxHQUFaO0FBQ0Q7QUFDRixHQUpRLEVBSU4sRUFKTSxDQUFUOztBQVNFLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDdkIsUUFBSSxDQUFDUCxNQUFNLENBQUNR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REY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXZHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQStKSCxDQTNORDs7R0FBTXRCLEk7VUFDV0cscUQsRUFDQUUsdUQsRUFDYUUscUQ7OztBQTBOOUIsSUFBTW9CLE9BQU8sR0FBRyxTQUFWQSxPQUFVLFFBQWtCO0FBQUE7O0FBQUEsTUFBaEJDLFVBQWdCLFNBQWhCQSxVQUFnQjtBQUU5QixzQkFDRTtBQUFBLDJCQUNFO0FBQUEsZ0NBQ2MsS0FEZCxRQUN1QkEsVUFEdkIsYUFDdUJBLFVBRHZCLDJDQUN1QkEsVUFBVSxDQUFFaEIsSUFEbkMscURBQ3VCLGlCQUFrQmlCLFFBRHpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBT0QsQ0FUSDs7S0FBTUYsTztBQVdTM0IsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS5jZDIyODk2ZGZjZDJmZDhmN2Y4My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtGcmFnbWVudCx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBCdXR0b24sIEdyaWQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU25hY2tiYXIgfSBmcm9tIFwibm90aXN0YWNrXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvdXR0LnBuZyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgVmlkIGZyb20gJy4uL2Fzc2V0cy92aWRlby9jYW1hcmEtbWljcm8ubXA0JztcclxuaW1wb3J0IFF3ZXJ0eSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3F3ZXJ0eS5tcDQnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuXHJcbmNvbnN0IGhvbWUgPSAoe3VzZXJ9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgYWx1bW5vID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYWx1bW5vKVxyXG4gIGNvbnN0IHsgZW5xdWV1ZVNuYWNrYmFyIH0gPSB1c2VTbmFja2JhcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoIXVzZXIpe1xyXG4gICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcbiAgXHJcbiAgICBcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlckV4YW0xID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghYWx1bW5vLmRhdGEuYWN0aXZlRXhhbTEpIHtcclxuICAgICAgICAgIGVucXVldWVTbmFja2JhcihcIkVzdGUgZXhhbWVuIGVzdGEgZGVzYWN0aXZhZG9cIiwge1xyXG4gICAgICAgICAgICB2YXJpYW50OiBcImluZm9cIixcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShgL2V4YW0/cGFnZT0xYClcclxuICAgICAgICAgICAgLy9yb3V0ZXIucHVzaCgnL2V4YW0/cGFnZT0xJylcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICBcclxuICAgICAgY29uc3QgbG9naWNhID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghYWx1bW5vLmRhdGEuYWN0aXZlTG9naWMpIHtcclxuICAgICAgICAgIGVucXVldWVTbmFja2JhcihcIkVzdGUgZXhhbWVuIGVzdGEgZGVzYWN0aXZhZG9cIiwge1xyXG4gICAgICAgICAgICB2YXJpYW50OiBcImluZm9cIixcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShgL2xvZ2ljbz9wYWdlPTFgKVxyXG4gICAgICAgICAgICAvL3JvdXRlci5wdXNoKCcvbG9naWNvP3BhZ2U9MScpXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBtYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghYWx1bW5vLmRhdGEuYWN0aXZlTWF0KSB7XHJcbiAgICAgICAgICBlbnF1ZXVlU25hY2tiYXIoXCJFc3RlIGV4YW1lbiBlc3RhIGRlc2FjdGl2YWRvXCIsIHtcclxuICAgICAgICAgICAgdmFyaWFudDogXCJpbmZvXCIsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoYC9tYXRlP3BhZ2U9MWApXHJcbiAgICAgICAgICAgIC8vcm91dGVyLnB1c2goJy9tYXRlP3BhZ2U9MScpXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBsZW5ndWEgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFhbHVtbm8uZGF0YS5hY3RpdmVMZW5ndWEpIHtcclxuICAgICAgICAgIGVucXVldWVTbmFja2JhcihcIkVzdGUgZXhhbWVuIGVzdGEgZGVzYWN0aXZhZG9cIiwge1xyXG4gICAgICAgICAgICB2YXJpYW50OiBcImluZm9cIixcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShgL2xlbmd1YT9wYWdlPTFgKVxyXG4gICAgICAgICAgICAvL3JvdXRlci5wdXNoKCcvbGVuZ3VhP3BhZ2U9MScpXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lciB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5TRUFOSSB8IEhvbWU8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyZXNwb25zaXZlLWltZyBjZW50ZXJcIlxyXG4gICAgICAgICAgc3JjPXtMb2dvfVxyXG4gICAgICAgICAgYWx0PVwidXR0LWltZ1wiXHJcbiAgICAgICAgICB3aWR0aD1cIjI1MHB4XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUZXh0SW5nIGRhdGFBbHVtbm89e2FsdW1ub30gLz5cclxuICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICA8YmxvY2txdW90ZT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxvdy10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgTGEgZXZhbHVhY2nDs24sIHF1ZSBlc3RhcyBhIHB1bnRvIGRlIGluaWNpYXIsIGNvbnN0YSBkZSA5MFxyXG4gICAgICAgICAgICAgIHByZWd1bnRhcyBxdWUgZGViZXLDoXMgcmVzcG9uZGVyIGVuIHVuIHRpZW1wbyBtw6F4aW1vIGRlIDIgaG9yYXMsXHJcbiAgICAgICAgICAgICAgbWlzbWFzIHF1ZSBjb3JyZXNwb25kZW4gYSBsYXMgc2lndWllbnRlcyDDoXJlYXM6XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvYmxvY2txdW90ZT5cclxuICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1wYW5lbFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibHVlLXRleHQgdGV4dC1kYXJrZW4tMlwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsb3ctdGV4dFwiPkzDs2dpY28gLyBNYXRlbcOhdGljYXM8L3A+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmx1ZS10ZXh0IHRleHQtZGFya2VuLTJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbG93LXRleHRcIj5Db21wcmVuc2nDs24gbGVjdG9yYTwvcD5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9HcmlkLlJvdz5cclxuXHJcbiAgICAgICAgPGJsb2NrcXVvdGU+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbG93LXRleHRcIj5cclxuICAgICAgICAgICAgUG9yIGZhdm9yLCBoYWJpbGl0YSBsb3MgcGVybWlzb3MgbmVjZXNhcmlvcyBlbiB0dSBuYXZlZ2Fkb3IgY29tbyBzZVxyXG4gICAgICAgICAgICBtdWVzdHJhIGEgY29udGludWFjacOzbjpcclxuICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWxcIj5cclxuICAgICAgICAgICAgPHZpZGVvXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzcG9uc2l2ZS12aWRlb1wiXHJcbiAgICAgICAgICAgICAgY29udHJvbHM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGF1dG9QbGF5XHJcbiAgICAgICAgICAgICAgbG9vcFxyXG4gICAgICAgICAgICAgIHByZWxvYWQ9XCJhdXRvXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzb3VyY2UgXHJcbiAgICAgICAgICAgICAgIHNyYz17VmlkfSB0eXBlPVwidmlkZW8vbXA0XCJcclxuICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC92aWRlbz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYmxvY2txdW90ZT5cclxuXHJcbiAgICAgICAgPGJsb2NrcXVvdGU+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbG93LXRleHRcIj5cclxuICAgICAgICAgICAgVG9kYXMgbGFzIHByZWd1bnRhcyBzb24gZGUgb3BjacOzbiBtw7psdGlwbGUsIG5vIG9sdmlkZXMgcXVlLCBhbFxyXG4gICAgICAgICAgICBzZWxlY2Npb25hciBsYSByZXNwdWVzdGEsIHRlbmRyw6FzIHF1ZSBkYXIgY2xpYyBlbiBlbCBib3TDs24gXCJHdWFyZGFyXHJcbiAgICAgICAgICAgIHJlc3B1ZXN0YVwiLCBjb21vIHNlIG11ZXN0cmEgYSBjb250aW51YWNpw7NuLlxyXG4gICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1wYW5lbFwiPlxyXG4gICAgICAgICAgICA8dmlkZW9cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNwb25zaXZlLXZpZGVvXCJcclxuICAgICAgICAgICAgICBjb250cm9scz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgYXV0b1BsYXlcclxuICAgICAgICAgICAgICBsb29wXHJcbiAgICAgICAgICAgICAgcHJlbG9hZD1cImF1dG9cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9e1F3ZXJ0eX0gdHlwZT1cInZpZGVvL21wNFwiIC8+XHJcbiAgICAgICAgICAgIDwvdmlkZW8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Jsb2NrcXVvdGU+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1wYW5lbFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxvdy10ZXh0XCI+XHJcbiAgICAgICAgICAgIEVuIGNhc28gZGUgcXVlIHRlIGVuY3VlbnRyZXMgZW4gZXN0YXMgc2l0dWFjaW9uZXM6XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWQtdGV4dCB0ZXh0LWRhcmtlbi0yXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsb3ctdGV4dFwiPkNvbmV4acOzbiBhIGludGVybmV0IG11eSBpbmVzdGFibGUuPC9wPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVkLXRleHQgdGV4dC1kYXJrZW4tMlwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbG93LXRleHRcIj5DZXJyYXIgbGEgcGVzdGHDsWEgcG9yIGVycm9yLjwvcD5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlZC10ZXh0IHRleHQtZGFya2VuLTJcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxvdy10ZXh0XCI+U2UgdGVybWluZSBsYSBiYXRlcsOtYSBhIHR1IGNlbHVsYXIuPC9wPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVkLXRleHQgdGV4dC1kYXJrZW4tMlwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbG93LXRleHRcIj5TZSBpbnRlcnJ1bXBhIGxhIGVuZXJnw61hIGVsw6ljdHJpY2EuPC9wPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVkLXRleHQgdGV4dC1kYXJrZW4tMlwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbG93LXRleHRcIj5TZSBhcGFndWUgdHUgZGlzcG9zaXRpdm8uPC9wPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxibG9ja3F1b3RlPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxvdy10ZXh0XCI+XHJcbiAgICAgICAgICAgIEVsIHNpc3RlbWEgZ3VhcmRhcsOhIGxhcyByZXNwdWVzdGFzIHkgZWwgdGllbXBvIHRhbWJpw6luLCBhc8OtIHF1ZVxyXG4gICAgICAgICAgICBtYW50w6luIGxhIGNhbG1hLCBlbiBjYXNvIGRlIGN1YWxxdWllciBkdWRhIHNvYnJlIGFsZ3VuYSBzaXR1YWNpw7NuXHJcbiAgICAgICAgICAgIHB1ZWRlcyBjb211bmljYXJ0ZSBhbCBHcnVwbyBkZXtcIiBcIn1cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90Lm1lL3V0dF9zZWFuaV8yMDIwXCJcclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgVGVsZWdyYW0uXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Jsb2NrcXVvdGU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxHcmlkIGNvbHVtbnM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY29udGVudD1cIlBlbnNhbWllbnRvIGFuYWzDrXRpY29cIlxyXG4gICAgICAgICAgICAgICAgaWNvbj1cInNldHRpbmdzXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJvcmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImh1Z2VcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlckV4YW0xfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PVwiQ29tcHJlbnNpw7NuIGxlY3RvcmFcIlxyXG4gICAgICAgICAgICAgICAgaWNvbj1cImNvZ1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwib3JhbmdlXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJodWdlXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2xvZ2ljYX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY29udGVudD1cIlBlbnNhbWllbnRvIG1hdGVtw6F0aWNvXCJcclxuICAgICAgICAgICAgICAgIGljb249XCJyZWFjdFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwib3JhbmdlXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJodWdlXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e21hdGV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJFc3RydWN0dXJhIGRlIGxhIGxlbmd1YVwiXHJcbiAgICAgICAgICAgICAgICBpY29uPVwibWFsZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwib3JhbmdlXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJodWdlXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2xlbmd1YX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0ZyYWdtZW50PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IFRleHRJbmcgPSAoe2RhdGFBbHVtbm99KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8aDE+XHJcbiAgICAgICAgICBCSUVOVkVOSURPIHtcIihBKVwifSwge2RhdGFBbHVtbm8/LmRhdGE/LnVzZXJuYW1lfVxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9tZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9