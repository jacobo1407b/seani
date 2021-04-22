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











var home = function home() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var alumno = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.alumno;
  });

  var _useSnackbar = Object(notistack__WEBPACK_IMPORTED_MODULE_3__["useSnackbar"])(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

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
        lineNumber: 69,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        className: "responsive-img center",
        src: _assets_images_utt_png__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: "utt-img",
        width: "250px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextIng, {
        dataAlumno: alumno
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("blockquote", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "flow-text",
            children: "La evaluaci\xF3n, que estas a punto de iniciar, consta de 90 preguntas que deber\xE1s responder en un tiempo m\xE1ximo de 2 horas, mismas que corresponden a las siguientes \xE1reas:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
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
              lineNumber: 91,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "blue-text text-darken-2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "flow-text",
              children: "Comprensi\xF3n lectora"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("blockquote", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "flow-text",
          children: "Por favor, habilita los permisos necesarios en tu navegador como se muestra a continuaci\xF3n:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
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
              lineNumber: 113,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("blockquote", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "flow-text",
          children: "Todas las preguntas son de opci\xF3n m\xFAltiple, no olvides que, al seleccionar la respuesta, tendr\xE1s que dar clic en el bot\xF3n \"Guardar respuesta\", como se muestra a continuaci\xF3n."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
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
              lineNumber: 135,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card-panel",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "flow-text",
          children: "En caso de que te encuentres en estas situaciones:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "red-text text-darken-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "flow-text",
            children: "Conexi\xF3n a internet muy inestable."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "red-text text-darken-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "flow-text",
            children: "Cerrar la pesta\xF1a por error."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "red-text text-darken-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "flow-text",
            children: "Se termine la bater\xEDa a tu celular."
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
            children: "Se interrumpa la energ\xEDa el\xE9ctrica."
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
            children: "Se apague tu dispositivo."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
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
            lineNumber: 165,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
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
              lineNumber: 177,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
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
              lineNumber: 188,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
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
              lineNumber: 199,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
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
              lineNumber: 210,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 9
  }, _this);
};

_s(home, "nP0earqKoeLTCG9FhNJbXbIq5p0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"], notistack__WEBPACK_IMPORTED_MODULE_3__["useSnackbar"]];
});

var TextIng = function TextIng(_ref) {
  var _dataAlumno$data;

  var dataAlumno = _ref.dataAlumno;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: ["BIENVENIDO ", "(A)", ", ", dataAlumno === null || dataAlumno === void 0 ? void 0 : (_dataAlumno$data = dataAlumno.data) === null || _dataAlumno$data === void 0 ? void 0 : _dataAlumno$data.username]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 231,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS5qc3giXSwibmFtZXMiOlsiaG9tZSIsInJvdXRlciIsInVzZVJvdXRlciIsImFsdW1ubyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VTbmFja2JhciIsImVucXVldWVTbmFja2JhciIsImhhbmRsZXJFeGFtMSIsImRhdGEiLCJhY3RpdmVFeGFtMSIsInZhcmlhbnQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJsb2dpY2EiLCJhY3RpdmVMb2dpYyIsIm1hdGUiLCJhY3RpdmVNYXQiLCJsZW5ndWEiLCJhY3RpdmVMZW5ndWEiLCJMb2dvIiwiVmlkIiwiUXdlcnR5IiwiVGV4dEluZyIsImRhdGFBbHVtbm8iLCJ1c2VybmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNGLE1BQVY7QUFBQSxHQUFOLENBQTFCOztBQUZpQixxQkFHV0csNkRBQVcsRUFIdEI7QUFBQSxNQUdUQyxlQUhTLGdCQUdUQSxlQUhTOztBQVFmLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDdkIsUUFBSSxDQUFDTCxNQUFNLENBQUNNLElBQVAsQ0FBWUMsV0FBakIsRUFBOEI7QUFDNUJILHFCQUFlLENBQUMsOEJBQUQsRUFBaUM7QUFDOUNJLGVBQU8sRUFBRTtBQURxQyxPQUFqQyxDQUFmO0FBR0EsYUFBTyxLQUFQO0FBQ0QsS0FMRCxNQUtPO0FBQ0xDLFlBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsaUJBREssQ0FFSDtB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STtVQUNXRSxxRCxFQUNBRSx1RCxFQUNhRSxxRDs7O0FBb045QixJQUFNa0IsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBa0I7QUFBQTs7QUFBQSxNQUFoQkMsVUFBZ0IsUUFBaEJBLFVBQWdCO0FBRTlCLHNCQUNFO0FBQUEsMkJBQ0U7QUFBQSxnQ0FDYyxLQURkLFFBQ3VCQSxVQUR2QixhQUN1QkEsVUFEdkIsMkNBQ3VCQSxVQUFVLENBQUVoQixJQURuQyxxREFDdUIsaUJBQWtCaUIsUUFEekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFPRCxDQVRIOztLQUFNRixPO0FBV1N4QixtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ob21lLjgwZGZlN2VhNzk0ZDc2OTM0NDE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse0ZyYWdtZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgQnV0dG9uLCBHcmlkIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNuYWNrYmFyIH0gZnJvbSBcIm5vdGlzdGFja1wiO1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3V0dC5wbmcnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFZpZCBmcm9tICcuLi9hc3NldHMvdmlkZW8vY2FtYXJhLW1pY3JvLm1wNCc7XHJcbmltcG9ydCBRd2VydHkgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9xd2VydHkubXA0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcblxyXG5jb25zdCBob21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGFsdW1ubyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmFsdW1ubylcclxuICBjb25zdCB7IGVucXVldWVTbmFja2JhciB9ID0gdXNlU25hY2tiYXIoKTtcclxuICBcclxuICAgIFxyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVyRXhhbTEgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFhbHVtbm8uZGF0YS5hY3RpdmVFeGFtMSkge1xyXG4gICAgICAgICAgZW5xdWV1ZVNuYWNrYmFyKFwiRXN0ZSBleGFtZW4gZXN0YSBkZXNhY3RpdmFkb1wiLCB7XHJcbiAgICAgICAgICAgIHZhcmlhbnQ6IFwiaW5mb1wiLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGAvZXhhbT9wYWdlPTFgKVxyXG4gICAgICAgICAgICAvL3JvdXRlci5wdXNoKCcvZXhhbT9wYWdlPTEnKVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIFxyXG4gICAgICBjb25zdCBsb2dpY2EgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFhbHVtbm8uZGF0YS5hY3RpdmVMb2dpYykge1xyXG4gICAgICAgICAgZW5xdWV1ZVNuYWNrYmFyKFwiRXN0ZSBleGFtZW4gZXN0YSBkZXNhY3RpdmFkb1wiLCB7XHJcbiAgICAgICAgICAgIHZhcmlhbnQ6IFwiaW5mb1wiLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGAvbG9naWNvP3BhZ2U9MWApXHJcbiAgICAgICAgICAgIC8vcm91dGVyLnB1c2goJy9sb2dpY28/cGFnZT0xJylcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IG1hdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFhbHVtbm8uZGF0YS5hY3RpdmVNYXQpIHtcclxuICAgICAgICAgIGVucXVldWVTbmFja2JhcihcIkVzdGUgZXhhbWVuIGVzdGEgZGVzYWN0aXZhZG9cIiwge1xyXG4gICAgICAgICAgICB2YXJpYW50OiBcImluZm9cIixcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShgL21hdGU/cGFnZT0xYClcclxuICAgICAgICAgICAgLy9yb3V0ZXIucHVzaCgnL21hdGU/cGFnZT0xJylcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IGxlbmd1YSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIWFsdW1uby5kYXRhLmFjdGl2ZUxlbmd1YSkge1xyXG4gICAgICAgICAgZW5xdWV1ZVNuYWNrYmFyKFwiRXN0ZSBleGFtZW4gZXN0YSBkZXNhY3RpdmFkb1wiLCB7XHJcbiAgICAgICAgICAgIHZhcmlhbnQ6IFwiaW5mb1wiLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGAvbGVuZ3VhP3BhZ2U9MWApXHJcbiAgICAgICAgICAgIC8vcm91dGVyLnB1c2goJy9sZW5ndWE/cGFnZT0xJylcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyIHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlNFQU5JIHwgSG9tZTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJlc3BvbnNpdmUtaW1nIGNlbnRlclwiXHJcbiAgICAgICAgICBzcmM9e0xvZ299XHJcbiAgICAgICAgICBhbHQ9XCJ1dHQtaW1nXCJcclxuICAgICAgICAgIHdpZHRoPVwiMjUwcHhcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRleHRJbmcgZGF0YUFsdW1ubz17YWx1bW5vfSAvPlxyXG4gICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgIDxibG9ja3F1b3RlPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbG93LXRleHRcIj5cclxuICAgICAgICAgICAgICBMYSBldmFsdWFjacOzbiwgcXVlIGVzdGFzIGEgcHVudG8gZGUgaW5pY2lhciwgY29uc3RhIGRlIDkwXHJcbiAgICAgICAgICAgICAgcHJlZ3VudGFzIHF1ZSBkZWJlcsOhcyByZXNwb25kZXIgZW4gdW4gdGllbXBvIG3DoXhpbW8gZGUgMiBob3JhcyxcclxuICAgICAgICAgICAgICBtaXNtYXMgcXVlIGNvcnJlc3BvbmRlbiBhIGxhcyBzaWd1aWVudGVzIMOhcmVhczpcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9ibG9ja3F1b3RlPlxyXG4gICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXBhbmVsXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsdWUtdGV4dCB0ZXh0LWRhcmtlbi0yXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxvdy10ZXh0XCI+TMOzZ2ljbyAvIE1hdGVtw6F0aWNhczwvcD5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibHVlLXRleHQgdGV4dC1kYXJrZW4tMlwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsb3ctdGV4dFwiPkNvbXByZW5zacOzbiBsZWN0b3JhPC9wPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0dyaWQuUm93PlxyXG5cclxuICAgICAgICA8YmxvY2txdW90ZT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsb3ctdGV4dFwiPlxyXG4gICAgICAgICAgICBQb3IgZmF2b3IsIGhhYmlsaXRhIGxvcyBwZXJtaXNvcyBuZWNlc2FyaW9zIGVuIHR1IG5hdmVnYWRvciBjb21vIHNlXHJcbiAgICAgICAgICAgIG11ZXN0cmEgYSBjb250aW51YWNpw7NuOlxyXG4gICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1wYW5lbFwiPlxyXG4gICAgICAgICAgICA8dmlkZW9cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNwb25zaXZlLXZpZGVvXCJcclxuICAgICAgICAgICAgICBjb250cm9scz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgYXV0b1BsYXlcclxuICAgICAgICAgICAgICBsb29wXHJcbiAgICAgICAgICAgICAgcHJlbG9hZD1cImF1dG9cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNvdXJjZSBcclxuICAgICAgICAgICAgICAgc3JjPXtWaWR9IHR5cGU9XCJ2aWRlby9tcDRcIlxyXG4gICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3ZpZGVvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9ibG9ja3F1b3RlPlxyXG5cclxuICAgICAgICA8YmxvY2txdW90ZT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsb3ctdGV4dFwiPlxyXG4gICAgICAgICAgICBUb2RhcyBsYXMgcHJlZ3VudGFzIHNvbiBkZSBvcGNpw7NuIG3Dumx0aXBsZSwgbm8gb2x2aWRlcyBxdWUsIGFsXHJcbiAgICAgICAgICAgIHNlbGVjY2lvbmFyIGxhIHJlc3B1ZXN0YSwgdGVuZHLDoXMgcXVlIGRhciBjbGljIGVuIGVsIGJvdMOzbiBcIkd1YXJkYXJcclxuICAgICAgICAgICAgcmVzcHVlc3RhXCIsIGNvbW8gc2UgbXVlc3RyYSBhIGNvbnRpbnVhY2nDs24uXHJcbiAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXBhbmVsXCI+XHJcbiAgICAgICAgICAgIDx2aWRlb1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc3BvbnNpdmUtdmlkZW9cIlxyXG4gICAgICAgICAgICAgIGNvbnRyb2xzPXtmYWxzZX1cclxuICAgICAgICAgICAgICBhdXRvUGxheVxyXG4gICAgICAgICAgICAgIGxvb3BcclxuICAgICAgICAgICAgICBwcmVsb2FkPVwiYXV0b1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c291cmNlIHNyYz17UXdlcnR5fSB0eXBlPVwidmlkZW8vbXA0XCIgLz5cclxuICAgICAgICAgICAgPC92aWRlbz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYmxvY2txdW90ZT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXBhbmVsXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbG93LXRleHRcIj5cclxuICAgICAgICAgICAgRW4gY2FzbyBkZSBxdWUgdGUgZW5jdWVudHJlcyBlbiBlc3RhcyBzaXR1YWNpb25lczpcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlZC10ZXh0IHRleHQtZGFya2VuLTJcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxvdy10ZXh0XCI+Q29uZXhpw7NuIGEgaW50ZXJuZXQgbXV5IGluZXN0YWJsZS48L3A+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWQtdGV4dCB0ZXh0LWRhcmtlbi0yXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsb3ctdGV4dFwiPkNlcnJhciBsYSBwZXN0YcOxYSBwb3IgZXJyb3IuPC9wPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVkLXRleHQgdGV4dC1kYXJrZW4tMlwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbG93LXRleHRcIj5TZSB0ZXJtaW5lIGxhIGJhdGVyw61hIGEgdHUgY2VsdWxhci48L3A+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWQtdGV4dCB0ZXh0LWRhcmtlbi0yXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsb3ctdGV4dFwiPlNlIGludGVycnVtcGEgbGEgZW5lcmfDrWEgZWzDqWN0cmljYS48L3A+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWQtdGV4dCB0ZXh0LWRhcmtlbi0yXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsb3ctdGV4dFwiPlNlIGFwYWd1ZSB0dSBkaXNwb3NpdGl2by48L3A+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJsb2NrcXVvdGU+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbG93LXRleHRcIj5cclxuICAgICAgICAgICAgRWwgc2lzdGVtYSBndWFyZGFyw6EgbGFzIHJlc3B1ZXN0YXMgeSBlbCB0aWVtcG8gdGFtYmnDqW4sIGFzw60gcXVlXHJcbiAgICAgICAgICAgIG1hbnTDqW4gbGEgY2FsbWEsIGVuIGNhc28gZGUgY3VhbHF1aWVyIGR1ZGEgc29icmUgYWxndW5hIHNpdHVhY2nDs25cclxuICAgICAgICAgICAgcHVlZGVzIGNvbXVuaWNhcnRlIGFsIEdydXBvIGRle1wiIFwifVxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3QubWUvdXR0X3NlYW5pXzIwMjBcIlxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBUZWxlZ3JhbS5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvYmxvY2txdW90ZT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPEdyaWQgY29sdW1ucz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PVwiUGVuc2FtaWVudG8gYW5hbMOtdGljb1wiXHJcbiAgICAgICAgICAgICAgICBpY29uPVwic2V0dGluZ3NcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cIm9yYW5nZVwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwiaHVnZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVyRXhhbTF9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJDb21wcmVuc2nDs24gbGVjdG9yYVwiXHJcbiAgICAgICAgICAgICAgICBpY29uPVwiY29nXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJvcmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImh1Z2VcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17bG9naWNhfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PVwiUGVuc2FtaWVudG8gbWF0ZW3DoXRpY29cIlxyXG4gICAgICAgICAgICAgICAgaWNvbj1cInJlYWN0XCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJvcmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImh1Z2VcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17bWF0ZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY29udGVudD1cIkVzdHJ1Y3R1cmEgZGUgbGEgbGVuZ3VhXCJcclxuICAgICAgICAgICAgICAgIGljb249XCJtYWxlXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJvcmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImh1Z2VcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17bGVuZ3VhfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgVGV4dEluZyA9ICh7ZGF0YUFsdW1ub30pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxoMT5cclxuICAgICAgICAgIEJJRU5WRU5JRE8ge1wiKEEpXCJ9LCB7ZGF0YUFsdW1ubz8uZGF0YT8udXNlcm5hbWV9XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=