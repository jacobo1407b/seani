module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/home.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/images/qwerty.mp4":
/*!**********************************!*\
  !*** ./assets/images/qwerty.mp4 ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/videos/qwerty-843cdea0972b04d28ead77c02355e1ff.mp4";

/***/ }),

/***/ "./assets/images/utt.png":
/*!*******************************!*\
  !*** ./assets/images/utt.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/utt-2ab43d897f413da8c5888a547381d8fd.png";

/***/ }),

/***/ "./assets/video/camara-micro.mp4":
/*!***************************************!*\
  !*** ./assets/video/camara-micro.mp4 ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/videos/camara-micro-c0d5e1b5a22979611f421e7f74b90beb.mp4";

/***/ }),

/***/ "./pages/home.jsx":
/*!************************!*\
  !*** ./pages/home.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! notistack */ "notistack");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_utt_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/utt.png */ "./assets/images/utt.png");
/* harmony import */ var _assets_images_utt_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_utt_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_video_camara_micro_mp4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/video/camara-micro.mp4 */ "./assets/video/camara-micro.mp4");
/* harmony import */ var _assets_video_camara_micro_mp4__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_video_camara_micro_mp4__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_qwerty_mp4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/images/qwerty.mp4 */ "./assets/images/qwerty.mp4");
/* harmony import */ var _assets_images_qwerty_mp4__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_qwerty_mp4__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "C:\\proyectos\\next\\seani\\pages\\home.jsx";










const home = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const alumno = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(state => state.alumno);
  const user = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(state => state.user);
  const {
    enqueueSnackbar
  } = Object(notistack__WEBPACK_IMPORTED_MODULE_3__["useSnackbar"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    console.log(user);

    if (!user) {
      router.push("/");
    }
  }, []);

  const handlerExam1 = () => {
    if (!alumno.data.activeExam1) {
      enqueueSnackbar("Este examen esta desactivado", {
        variant: "info"
      });
      return false;
    } else {
      //window.location.replace(`/exam?page=1`)
      router.push("/exam?page=1");
    }
  };

  const logica = () => {
    if (!alumno.data.activeLogic) {
      enqueueSnackbar("Este examen esta desactivado", {
        variant: "info"
      });
      return false;
    } else {
      //window.location.replace(`/logico?page=1`)
      router.push("/logico?page=1");
    }
  };

  const mate = () => {
    if (!alumno.data.activeMat) {
      enqueueSnackbar("Este examen esta desactivado", {
        variant: "info"
      });
      return false;
    } else {
      //window.location.replace(`/mate?page=1`)
      router.push("/mate?page=1");
    }
  };

  const lengua = () => {
    if (!alumno.data.activeLengua) {
      enqueueSnackbar("Este examen esta desactivado", {
        variant: "info"
      });
      return false;
    } else {
      //window.location.replace(`/lengua?page=1`)
      router.push("/lengua?page=1");
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    textAlign: "center",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "SEANI | Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        className: "responsive-img center",
        src: _assets_images_utt_png__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: "utt-img",
        width: "250px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextIng, {
        dataAlumno: alumno
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("blockquote", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "flow-text",
            children: "La evaluaci\xF3n, que estas a punto de iniciar, consta de 90 preguntas que deber\xE1s responder en un tiempo m\xE1ximo de 2 horas, mismas que corresponden a las siguientes \xE1reas:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card-panel",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "blue-text text-darken-2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "flow-text",
              children: "L\xF3gico / Matem\xE1ticas"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "blue-text text-darken-2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "flow-text",
              children: "Comprensi\xF3n lectora"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("blockquote", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "flow-text",
          children: "Por favor, habilita los permisos necesarios en tu navegador como se muestra a continuaci\xF3n:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
              lineNumber: 117,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("blockquote", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "flow-text",
          children: "Todas las preguntas son de opci\xF3n m\xFAltiple, no olvides que, al seleccionar la respuesta, tendr\xE1s que dar clic en el bot\xF3n \"Guardar respuesta\", como se muestra a continuaci\xF3n."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
              lineNumber: 137,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card-panel",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "flow-text",
          children: "En caso de que te encuentres en estas situaciones:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "red-text text-darken-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "flow-text",
            children: "Conexi\xF3n a internet muy inestable."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "red-text text-darken-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "flow-text",
            children: "Cerrar la pesta\xF1a por error."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "red-text text-darken-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "flow-text",
            children: "Se termine la bater\xEDa a tu celular."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "red-text text-darken-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "flow-text",
            children: "Se interrumpa la energ\xEDa el\xE9ctrica."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "red-text text-darken-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "flow-text",
            children: "Se apague tu dispositivo."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("blockquote", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "flow-text",
          children: ["El sistema guardar\xE1 las respuestas y el tiempo tambi\xE9n, as\xED que mant\xE9n la calma, en caso de cualquier duda sobre alguna situaci\xF3n puedes comunicarte al Grupo de", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "https://t.me/utt_seani_2020",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Telegram."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
              lineNumber: 179,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
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
              lineNumber: 190,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
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
              lineNumber: 201,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
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
              lineNumber: 212,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 5
  }, undefined);
};

const TextIng = ({
  dataAlumno
}) => {
  var _dataAlumno$data;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: ["BIENVENIDO ", "(A)", ", ", dataAlumno === null || dataAlumno === void 0 ? void 0 : (_dataAlumno$data = dataAlumno.data) === null || _dataAlumno$data === void 0 ? void 0 : _dataAlumno$data.username]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (home);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "notistack":
/*!****************************!*\
  !*** external "notistack" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("notistack");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9xd2VydHkubXA0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvdXR0LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdmlkZW8vY2FtYXJhLW1pY3JvLm1wNCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vdGlzdGFja1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIl0sIm5hbWVzIjpbImhvbWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhbHVtbm8iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImVucXVldWVTbmFja2JhciIsInVzZVNuYWNrYmFyIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInB1c2giLCJoYW5kbGVyRXhhbTEiLCJkYXRhIiwiYWN0aXZlRXhhbTEiLCJ2YXJpYW50IiwibG9naWNhIiwiYWN0aXZlTG9naWMiLCJtYXRlIiwiYWN0aXZlTWF0IiwibGVuZ3VhIiwiYWN0aXZlTGVuZ3VhIiwiTG9nbyIsIlZpZCIsIlF3ZXJ0eSIsIlRleHRJbmciLCJkYXRhQWx1bW5vIiwidXNlcm5hbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FB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QUFFRTtBQVBYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWxDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXJHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUE2SkQsQ0F4TkQ7O0FBME5BLE1BQU1LLE9BQU8sR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFvQjtBQUFBOztBQUNsQyxzQkFDRTtBQUFBLDJCQUNFO0FBQUEsZ0NBQ2MsS0FEZCxRQUN1QkEsVUFEdkIsYUFDdUJBLFVBRHZCLDJDQUN1QkEsVUFBVSxDQUFFYixJQURuQyxxREFDdUIsaUJBQWtCYyxRQUR6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQU9ELENBUkQ7O0FBVWU1QixtRUFBZixFOzs7Ozs7Ozs7OztBQzlPQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9ob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9ob21lLmpzeFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL3ZpZGVvcy9xd2VydHktODQzY2RlYTA5NzJiMDRkMjhlYWQ3N2MwMjM1NWUxZmYubXA0XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3V0dC0yYWI0M2Q4OTdmNDEzZGE4YzU4ODhhNTQ3MzgxZDhmZC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy92aWRlb3MvY2FtYXJhLW1pY3JvLWMwZDVlMWI1YTIyOTc5NjExZjQyMWU3Zjc0YjkwYmViLm1wNFwiOyIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0LHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgQnV0dG9uLCBHcmlkIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNuYWNrYmFyIH0gZnJvbSBcIm5vdGlzdGFja1wiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy91dHQucG5nXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgVmlkIGZyb20gXCIuLi9hc3NldHMvdmlkZW8vY2FtYXJhLW1pY3JvLm1wNFwiO1xyXG5pbXBvcnQgUXdlcnR5IGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL3F3ZXJ0eS5tcDRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuY29uc3QgaG9tZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBhbHVtbm8gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFsdW1ubyk7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgeyBlbnF1ZXVlU25hY2tiYXIgfSA9IHVzZVNuYWNrYmFyKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHVzZXIpXHJcbiAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVyRXhhbTEgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWFsdW1uby5kYXRhLmFjdGl2ZUV4YW0xKSB7XHJcbiAgICAgIGVucXVldWVTbmFja2JhcihcIkVzdGUgZXhhbWVuIGVzdGEgZGVzYWN0aXZhZG9cIiwge1xyXG4gICAgICAgIHZhcmlhbnQ6IFwiaW5mb1wiLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy93aW5kb3cubG9jYXRpb24ucmVwbGFjZShgL2V4YW0/cGFnZT0xYClcclxuICAgICAgcm91dGVyLnB1c2goXCIvZXhhbT9wYWdlPTFcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9naWNhID0gKCkgPT4ge1xyXG4gICAgaWYgKCFhbHVtbm8uZGF0YS5hY3RpdmVMb2dpYykge1xyXG4gICAgICBlbnF1ZXVlU25hY2tiYXIoXCJFc3RlIGV4YW1lbiBlc3RhIGRlc2FjdGl2YWRvXCIsIHtcclxuICAgICAgICB2YXJpYW50OiBcImluZm9cIixcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoYC9sb2dpY28/cGFnZT0xYClcclxuICAgICAgcm91dGVyLnB1c2goXCIvbG9naWNvP3BhZ2U9MVwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IG1hdGUgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWFsdW1uby5kYXRhLmFjdGl2ZU1hdCkge1xyXG4gICAgICBlbnF1ZXVlU25hY2tiYXIoXCJFc3RlIGV4YW1lbiBlc3RhIGRlc2FjdGl2YWRvXCIsIHtcclxuICAgICAgICB2YXJpYW50OiBcImluZm9cIixcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoYC9tYXRlP3BhZ2U9MWApXHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL21hdGU/cGFnZT0xXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgbGVuZ3VhID0gKCkgPT4ge1xyXG4gICAgaWYgKCFhbHVtbm8uZGF0YS5hY3RpdmVMZW5ndWEpIHtcclxuICAgICAgZW5xdWV1ZVNuYWNrYmFyKFwiRXN0ZSBleGFtZW4gZXN0YSBkZXNhY3RpdmFkb1wiLCB7XHJcbiAgICAgICAgdmFyaWFudDogXCJpbmZvXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvL3dpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGAvbGVuZ3VhP3BhZ2U9MWApXHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2xlbmd1YT9wYWdlPTFcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5TRUFOSSB8IEhvbWU8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyZXNwb25zaXZlLWltZyBjZW50ZXJcIlxyXG4gICAgICAgICAgc3JjPXtMb2dvfVxyXG4gICAgICAgICAgYWx0PVwidXR0LWltZ1wiXHJcbiAgICAgICAgICB3aWR0aD1cIjI1MHB4XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUZXh0SW5nIGRhdGFBbHVtbm89e2FsdW1ub30gLz5cclxuICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICA8YmxvY2txdW90ZT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxvdy10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgTGEgZXZhbHVhY2nDs24sIHF1ZSBlc3RhcyBhIHB1bnRvIGRlIGluaWNpYXIsIGNvbnN0YSBkZSA5MFxyXG4gICAgICAgICAgICAgIHByZWd1bnRhcyBxdWUgZGViZXLDoXMgcmVzcG9uZGVyIGVuIHVuIHRpZW1wbyBtw6F4aW1vIGRlIDIgaG9yYXMsXHJcbiAgICAgICAgICAgICAgbWlzbWFzIHF1ZSBjb3JyZXNwb25kZW4gYSBsYXMgc2lndWllbnRlcyDDoXJlYXM6XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvYmxvY2txdW90ZT5cclxuICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1wYW5lbFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibHVlLXRleHQgdGV4dC1kYXJrZW4tMlwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsb3ctdGV4dFwiPkzDs2dpY28gLyBNYXRlbcOhdGljYXM8L3A+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmx1ZS10ZXh0IHRleHQtZGFya2VuLTJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbG93LXRleHRcIj5Db21wcmVuc2nDs24gbGVjdG9yYTwvcD5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9HcmlkLlJvdz5cclxuXHJcbiAgICAgICAgPGJsb2NrcXVvdGU+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbG93LXRleHRcIj5cclxuICAgICAgICAgICAgUG9yIGZhdm9yLCBoYWJpbGl0YSBsb3MgcGVybWlzb3MgbmVjZXNhcmlvcyBlbiB0dSBuYXZlZ2Fkb3IgY29tbyBzZVxyXG4gICAgICAgICAgICBtdWVzdHJhIGEgY29udGludWFjacOzbjpcclxuICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcGFuZWxcIj5cclxuICAgICAgICAgICAgPHZpZGVvXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzcG9uc2l2ZS12aWRlb1wiXHJcbiAgICAgICAgICAgICAgY29udHJvbHM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGF1dG9QbGF5XHJcbiAgICAgICAgICAgICAgbG9vcFxyXG4gICAgICAgICAgICAgIHByZWxvYWQ9XCJhdXRvXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXtWaWR9IHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxyXG4gICAgICAgICAgICA8L3ZpZGVvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9ibG9ja3F1b3RlPlxyXG5cclxuICAgICAgICA8YmxvY2txdW90ZT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsb3ctdGV4dFwiPlxyXG4gICAgICAgICAgICBUb2RhcyBsYXMgcHJlZ3VudGFzIHNvbiBkZSBvcGNpw7NuIG3Dumx0aXBsZSwgbm8gb2x2aWRlcyBxdWUsIGFsXHJcbiAgICAgICAgICAgIHNlbGVjY2lvbmFyIGxhIHJlc3B1ZXN0YSwgdGVuZHLDoXMgcXVlIGRhciBjbGljIGVuIGVsIGJvdMOzbiBcIkd1YXJkYXJcclxuICAgICAgICAgICAgcmVzcHVlc3RhXCIsIGNvbW8gc2UgbXVlc3RyYSBhIGNvbnRpbnVhY2nDs24uXHJcbiAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXBhbmVsXCI+XHJcbiAgICAgICAgICAgIDx2aWRlb1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc3BvbnNpdmUtdmlkZW9cIlxyXG4gICAgICAgICAgICAgIGNvbnRyb2xzPXtmYWxzZX1cclxuICAgICAgICAgICAgICBhdXRvUGxheVxyXG4gICAgICAgICAgICAgIGxvb3BcclxuICAgICAgICAgICAgICBwcmVsb2FkPVwiYXV0b1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c291cmNlIHNyYz17UXdlcnR5fSB0eXBlPVwidmlkZW8vbXA0XCIgLz5cclxuICAgICAgICAgICAgPC92aWRlbz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYmxvY2txdW90ZT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXBhbmVsXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbG93LXRleHRcIj5cclxuICAgICAgICAgICAgRW4gY2FzbyBkZSBxdWUgdGUgZW5jdWVudHJlcyBlbiBlc3RhcyBzaXR1YWNpb25lczpcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlZC10ZXh0IHRleHQtZGFya2VuLTJcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxvdy10ZXh0XCI+Q29uZXhpw7NuIGEgaW50ZXJuZXQgbXV5IGluZXN0YWJsZS48L3A+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWQtdGV4dCB0ZXh0LWRhcmtlbi0yXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsb3ctdGV4dFwiPkNlcnJhciBsYSBwZXN0YcOxYSBwb3IgZXJyb3IuPC9wPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVkLXRleHQgdGV4dC1kYXJrZW4tMlwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbG93LXRleHRcIj5TZSB0ZXJtaW5lIGxhIGJhdGVyw61hIGEgdHUgY2VsdWxhci48L3A+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWQtdGV4dCB0ZXh0LWRhcmtlbi0yXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsb3ctdGV4dFwiPlNlIGludGVycnVtcGEgbGEgZW5lcmfDrWEgZWzDqWN0cmljYS48L3A+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWQtdGV4dCB0ZXh0LWRhcmtlbi0yXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsb3ctdGV4dFwiPlNlIGFwYWd1ZSB0dSBkaXNwb3NpdGl2by48L3A+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJsb2NrcXVvdGU+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbG93LXRleHRcIj5cclxuICAgICAgICAgICAgRWwgc2lzdGVtYSBndWFyZGFyw6EgbGFzIHJlc3B1ZXN0YXMgeSBlbCB0aWVtcG8gdGFtYmnDqW4sIGFzw60gcXVlXHJcbiAgICAgICAgICAgIG1hbnTDqW4gbGEgY2FsbWEsIGVuIGNhc28gZGUgY3VhbHF1aWVyIGR1ZGEgc29icmUgYWxndW5hIHNpdHVhY2nDs25cclxuICAgICAgICAgICAgcHVlZGVzIGNvbXVuaWNhcnRlIGFsIEdydXBvIGRle1wiIFwifVxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3QubWUvdXR0X3NlYW5pXzIwMjBcIlxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBUZWxlZ3JhbS5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvYmxvY2txdW90ZT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPEdyaWQgY29sdW1ucz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PVwiUGVuc2FtaWVudG8gYW5hbMOtdGljb1wiXHJcbiAgICAgICAgICAgICAgICBpY29uPVwic2V0dGluZ3NcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cIm9yYW5nZVwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwiaHVnZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVyRXhhbTF9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJDb21wcmVuc2nDs24gbGVjdG9yYVwiXHJcbiAgICAgICAgICAgICAgICBpY29uPVwiY29nXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJvcmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImh1Z2VcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17bG9naWNhfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PVwiUGVuc2FtaWVudG8gbWF0ZW3DoXRpY29cIlxyXG4gICAgICAgICAgICAgICAgaWNvbj1cInJlYWN0XCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJvcmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImh1Z2VcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17bWF0ZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY29udGVudD1cIkVzdHJ1Y3R1cmEgZGUgbGEgbGVuZ3VhXCJcclxuICAgICAgICAgICAgICAgIGljb249XCJtYWxlXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJvcmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImh1Z2VcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17bGVuZ3VhfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVGV4dEluZyA9ICh7IGRhdGFBbHVtbm8gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDE+XHJcbiAgICAgICAgQklFTlZFTklETyB7XCIoQSlcIn0sIHtkYXRhQWx1bW5vPy5kYXRhPy51c2VybmFtZX1cclxuICAgICAgPC9oMT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm90aXN0YWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9