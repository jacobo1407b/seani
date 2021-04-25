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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! notistack */ "notistack");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/api */ "./utils/api.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redux_accion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/accion */ "./redux/accion/index.js");


var _jsxFileName = "C:\\proyectos\\next\\seani\\pages\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const index = ({
  user
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  var fechaAplicacion = new Date("2021-04-26T08:00");
  var fechaActual = new Date(Date.now());
  console.log(fechaAplicacion);
  console.log("actual", fechaActual);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (user) {
      router.push('/home');
    }
  }, []);
  const {
    0: isloadin,
    1: setIsloadin
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: formDta,
    1: setFormDta
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    password: "",
    email: ""
  });
  const {
    enqueueSnackbar
  } = Object(notistack__WEBPACK_IMPORTED_MODULE_3__["useSnackbar"])();

  const handlerChange = e => {
    const {
      value,
      name
    } = e.target;
    setFormDta(_objectSpread(_objectSpread({}, formDta), {}, {
      [name]: value
    }));
  };

  const handlerSubmit = e => {
    e.preventDefault();

    if (fechaActual < fechaAplicacion) {
      enqueueSnackbar("La fecha de aplicación es el Lunes", {
        variant: "warning"
      });
      return false;
    } else {
      if (!formDta.email || !formDta.password) {
        enqueueSnackbar("Completa los campos", {
          variant: "error"
        });
        return false;
      }

      setIsloadin(true);
      Object(_utils_api__WEBPACK_IMPORTED_MODULE_4__["logIn"])(formDta).then(async response => {
        dispatch(Object(_redux_accion__WEBPACK_IMPORTED_MODULE_8__["accionUser"])(response.user));
        const {
          data
        } = await Object(_utils_api__WEBPACK_IMPORTED_MODULE_4__["getInitial"])(response.user.uid);
        dispatch(Object(_redux_accion__WEBPACK_IMPORTED_MODULE_8__["accionAlumno"])({
          data
        }));
        setIsloadin(false);
        router.push('/home');
      }).catch(err => {
        setIsloadin(false);
        console.log(err);
        enqueueSnackbar(err.message, {
          variant: "error"
        });
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "SEANI UTT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
              lineNumber: 79,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            onChange: handlerChange,
            onSubmit: handlerSubmit,
            className: "login100-form",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "login100-form-title",
              children: "Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 13
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "wrap-input100 validate-input",
              "data-validate": null,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "input100",
                type: "text",
                name: "email",
                placeholder: "Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "focus-input100"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 15
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 13
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "wrap-input100 validate-input",
              "data-validate": null,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                //className="input100"
                type: "password",
                name: "password",
                placeholder: "Password"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "focus-input100"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 15
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 13
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "container-login100-form-btn",
              children: isloadin ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default.a, {
                color: "secondary"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "login100-form-btn",
                children: "Login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 13
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./redux/accion/accionAlumno.js":
/*!**************************************!*\
  !*** ./redux/accion/accionAlumno.js ***!
  \**************************************/
/*! exports provided: accionAlumno */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accionAlumno", function() { return accionAlumno; });
const accionAlumno = data => {
  return {
    type: "ALUMNO",
    payload: data
  };
};

/***/ }),

/***/ "./redux/accion/accionTest.js":
/*!************************************!*\
  !*** ./redux/accion/accionTest.js ***!
  \************************************/
/*! exports provided: accionTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accionTest", function() { return accionTest; });
const accionTest = data => {
  return {
    type: "TEST",
    payload: data
  };
};

/***/ }),

/***/ "./redux/accion/accionTime.js":
/*!************************************!*\
  !*** ./redux/accion/accionTime.js ***!
  \************************************/
/*! exports provided: accionTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accionTime", function() { return accionTime; });
const accionTime = data => {
  return {
    type: "TIME",
    payload: data
  };
};

/***/ }),

/***/ "./redux/accion/accionTipe.js":
/*!************************************!*\
  !*** ./redux/accion/accionTipe.js ***!
  \************************************/
/*! exports provided: accionTipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accionTipe", function() { return accionTipe; });
const accionTipe = data => {
  return {
    type: "TIPE",
    payload: data
  };
};

/***/ }),

/***/ "./redux/accion/accionUser.js":
/*!************************************!*\
  !*** ./redux/accion/accionUser.js ***!
  \************************************/
/*! exports provided: accionUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accionUser", function() { return accionUser; });
const accionUser = data => {
  return {
    type: "USER",
    payload: data
  };
};

/***/ }),

/***/ "./redux/accion/index.js":
/*!*******************************!*\
  !*** ./redux/accion/index.js ***!
  \*******************************/
/*! exports provided: accionTest, accionUser, accionTime, accionTipe, accionAlumno */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accionTest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accionTest */ "./redux/accion/accionTest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "accionTest", function() { return _accionTest__WEBPACK_IMPORTED_MODULE_0__["accionTest"]; });

/* harmony import */ var _accionUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accionUser */ "./redux/accion/accionUser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "accionUser", function() { return _accionUser__WEBPACK_IMPORTED_MODULE_1__["accionUser"]; });

/* harmony import */ var _accionTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accionTime */ "./redux/accion/accionTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "accionTime", function() { return _accionTime__WEBPACK_IMPORTED_MODULE_2__["accionTime"]; });

/* harmony import */ var _accionTipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accionTipe */ "./redux/accion/accionTipe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "accionTipe", function() { return _accionTipe__WEBPACK_IMPORTED_MODULE_3__["accionTipe"]; });

/* harmony import */ var _accionAlumno__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accionAlumno */ "./redux/accion/accionAlumno.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "accionAlumno", function() { return _accionAlumno__WEBPACK_IMPORTED_MODULE_4__["accionAlumno"]; });







/***/ }),

/***/ "./utils/api.js":
/*!**********************!*\
  !*** ./utils/api.js ***!
  \**********************/
/*! exports provided: logIn, getUser, openSocket, testExam, testLogic, lenguaExam, mateExam, mateCancel, logiCancel, lenguaCancel, examCancel, allCancel, getInitial, logOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logIn", function() { return logIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openSocket", function() { return openSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testExam", function() { return testExam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testLogic", function() { return testLogic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lenguaExam", function() { return lenguaExam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mateExam", function() { return mateExam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mateCancel", function() { return mateCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logiCancel", function() { return logiCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lenguaCancel", function() { return lenguaCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "examCancel", function() { return examCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allCancel", function() { return allCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitial", function() { return getInitial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOut", function() { return logOut; });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./utils/variables.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebase */ "./utils/firebase.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);



var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json"); //var raw = JSON.stringify(respuesta.user);

const raw = (data, tipe) => {
  if (!tipe) {
    return {};
  }

  return {
    method: tipe,
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: "follow"
  };
};

const logIn = async data => {
  return _firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].signInWithEmailAndPassword(data.email, data.password);
}; //get info user

const getUser = data => {
  return fetch(`${_variables__WEBPACK_IMPORTED_MODULE_0__["host"]}/api/user`, raw(data, "POST")).then(dat => dat.json());
}; //active socket

const openSocket = async data => {
  const {
    id,
    time
  } = data;
  await _firebase__WEBPACK_IMPORTED_MODULE_1__["db"].doc(`${_variables__WEBPACK_IMPORTED_MODULE_0__["collection"]}/${id}`).update({
    time: time
  });
}; // update response of alumno

const testExam = async data => {
  const {
    id,
    arre
  } = data;
  await _firebase__WEBPACK_IMPORTED_MODULE_1__["db"].doc(`${_variables__WEBPACK_IMPORTED_MODULE_0__["collection"]}/${id}`).update({
    test: arre
  });
};
const testLogic = async data => {
  const {
    id,
    arre
  } = data;
  await _firebase__WEBPACK_IMPORTED_MODULE_1__["db"].doc(`${_variables__WEBPACK_IMPORTED_MODULE_0__["collection"]}/${id}`).update({
    logico: arre
  });
};
const lenguaExam = async data => {
  const {
    id,
    arre
  } = data;
  await _firebase__WEBPACK_IMPORTED_MODULE_1__["db"].doc(`${_variables__WEBPACK_IMPORTED_MODULE_0__["collection"]}/${id}`).update({
    lengua: arre
  });
};
const mateExam = async data => {
  const {
    id,
    arre
  } = data;
  await _firebase__WEBPACK_IMPORTED_MODULE_1__["db"].doc(`${_variables__WEBPACK_IMPORTED_MODULE_0__["collection"]}/${id}`).update({
    matematico: arre
  });
}; //finish test

const mateCancel = async data => {
  await _firebase__WEBPACK_IMPORTED_MODULE_1__["db"].doc(`${_variables__WEBPACK_IMPORTED_MODULE_0__["collection"]}/${data.id}`).update({
    activeMat: false
  });
};
const logiCancel = async data => {
  await _firebase__WEBPACK_IMPORTED_MODULE_1__["db"].doc(`${_variables__WEBPACK_IMPORTED_MODULE_0__["collection"]}/${data.id}`).update({
    activeLogic: false
  });
};
const lenguaCancel = async data => {
  await _firebase__WEBPACK_IMPORTED_MODULE_1__["db"].doc(`${_variables__WEBPACK_IMPORTED_MODULE_0__["collection"]}/${data.id}`).update({
    activeLengua: false
  });
};
const examCancel = async data => {
  await _firebase__WEBPACK_IMPORTED_MODULE_1__["db"].doc(`${_variables__WEBPACK_IMPORTED_MODULE_0__["collection"]}/${data.id}`).update({
    activeExam1: false
  });
}; //destroy

const allCancel = async data => {
  await _firebase__WEBPACK_IMPORTED_MODULE_1__["db"].doc(`${_variables__WEBPACK_IMPORTED_MODULE_0__["collection"]}/${data.id}`).update({
    activeLengua: false,
    activeMat: false,
    activeLogic: false,
    activeExam1: false,
    time: 0
  });
};
/**GET DATA USER */

const getInitial = async uid => {
  var _data$docs$;

  const data = await _firebase__WEBPACK_IMPORTED_MODULE_1__["db"].collection(_variables__WEBPACK_IMPORTED_MODULE_0__["collection"]).where("user", "==", uid).get();
  return {
    data: data === null || data === void 0 ? void 0 : (_data$docs$ = data.docs[0]) === null || _data$docs$ === void 0 ? void 0 : _data$docs$.data()
  };
};
const logOut = async () => {
  await _firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].signOut();
};

/***/ }),

/***/ "./utils/firebase.js":
/*!***************************!*\
  !*** ./utils/firebase.js ***!
  \***************************/
/*! exports provided: auth, db, now, storage, au */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "au", function() { return au; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables */ "./utils/variables.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ "firebase/storage");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_4__);






if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(_variables__WEBPACK_IMPORTED_MODULE_1__["firebaseConfig"]);
}

const app = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app();
const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();
const au = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();
const db = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();
const now = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore.Timestamp.now();
const storage = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.storage();


/***/ }),

/***/ "./utils/variables.js":
/*!****************************!*\
  !*** ./utils/variables.js ***!
  \****************************/
/*! exports provided: host, collection, firebaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "host", function() { return host; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collection", function() { return collection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
const host = "http://localhost:3000";
const collection = "e1-2021";
const firebaseConfig = {
  apiKey: "AIzaSyAyiLjNMCdX4vkB_kM0n8D_KE-tWhzGGg4",
  authDomain: "seani-954ac.firebaseapp.com",
  databaseURL: "https://seani-954ac.firebaseio.com",
  projectId: "seani-954ac",
  storageBucket: "seani-954ac.appspot.com",
  messagingSenderId: "821462862987",
  appId: "1:821462862987:web:43310b4bbc8b84f354d88e",
  measurementId: "G-EXBFMRJ8F4"
};

/***/ }),

/***/ "@material-ui/core/CircularProgress":
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWNjaW9uL2FjY2lvbkFsdW1uby5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY2Npb24vYWNjaW9uVGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY2Npb24vYWNjaW9uVGltZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY2Npb24vYWNjaW9uVGlwZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY2Npb24vYWNjaW9uVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY2Npb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvYXBpLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2ZpcmViYXNlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3ZhcmlhYmxlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub3Rpc3RhY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiaW5kZXgiLCJ1c2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImZlY2hhQXBsaWNhY2lvbiIsIkRhdGUiLCJmZWNoYUFjdHVhbCIsIm5vdyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJwdXNoIiwiaXNsb2FkaW4iLCJzZXRJc2xvYWRpbiIsInVzZVN0YXRlIiwiZm9ybUR0YSIsInNldEZvcm1EdGEiLCJwYXNzd29yZCIsImVtYWlsIiwiZW5xdWV1ZVNuYWNrYmFyIiwidXNlU25hY2tiYXIiLCJoYW5kbGVyQ2hhbmdlIiwiZSIsInZhbHVlIiwibmFtZSIsInRhcmdldCIsImhhbmRsZXJTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInZhcmlhbnQiLCJsb2dJbiIsInRoZW4iLCJyZXNwb25zZSIsImFjY2lvblVzZXIiLCJkYXRhIiwiZ2V0SW5pdGlhbCIsInVpZCIsImFjY2lvbkFsdW1ubyIsImNhdGNoIiwiZXJyIiwibWVzc2FnZSIsInR5cGUiLCJwYXlsb2FkIiwiYWNjaW9uVGVzdCIsImFjY2lvblRpbWUiLCJhY2Npb25UaXBlIiwibXlIZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsInJhdyIsInRpcGUiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZWRpcmVjdCIsImF1dGgiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImdldFVzZXIiLCJmZXRjaCIsImhvc3QiLCJkYXQiLCJqc29uIiwib3BlblNvY2tldCIsImlkIiwidGltZSIsImRiIiwiZG9jIiwiY29sbGVjdGlvbiIsInVwZGF0ZSIsInRlc3RFeGFtIiwiYXJyZSIsInRlc3QiLCJ0ZXN0TG9naWMiLCJsb2dpY28iLCJsZW5ndWFFeGFtIiwibGVuZ3VhIiwibWF0ZUV4YW0iLCJtYXRlbWF0aWNvIiwibWF0ZUNhbmNlbCIsImFjdGl2ZU1hdCIsImxvZ2lDYW5jZWwiLCJhY3RpdmVMb2dpYyIsImxlbmd1YUNhbmNlbCIsImFjdGl2ZUxlbmd1YSIsImV4YW1DYW5jZWwiLCJhY3RpdmVFeGFtMSIsImFsbENhbmNlbCIsIndoZXJlIiwiZ2V0IiwiZG9jcyIsImxvZ091dCIsInNpZ25PdXQiLCJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiZmlyZWJhc2VDb25maWciLCJhcHAiLCJhdSIsImZpcmVzdG9yZSIsIlRpbWVzdGFtcCIsInN0b3JhZ2UiLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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O0FBQ0Q7O0FBRUQsTUFBTUMsR0FBRyxHQUFHTCxtREFBUSxDQUFDSyxHQUFULEVBQVo7QUFDQSxNQUFNMUMsSUFBSSxHQUFHcUMsbURBQVEsQ0FBQ3JDLElBQVQsRUFBYjtBQUNBLE1BQU0yQyxFQUFFLEdBQUdOLG1EQUFRLENBQUNyQyxJQUFULEVBQVg7QUFDQSxNQUFNVSxFQUFFLEdBQUcyQixtREFBUSxDQUFDTyxTQUFULEVBQVg7QUFDQSxNQUFNN0YsR0FBRyxHQUFHc0YsbURBQVEsQ0FBQ08sU0FBVCxDQUFtQkMsU0FBbkIsQ0FBNkI5RixHQUE3QixFQUFaO0FBQ0EsTUFBTStGLE9BQU8sR0FBR1QsbURBQVEsQ0FBQ1MsT0FBVCxFQUFoQjs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTTFDLElBQUksR0FBRyx1QkFBYjtBQUNBLE1BQU1RLFVBQVUsR0FBRyxTQUFuQjtBQUNBLE1BQU02QixjQUFjLEdBQUc7QUFDNUJNLFFBQU0sRUFBRSx5Q0FEb0I7QUFFNUJDLFlBQVUsRUFBRSw2QkFGZ0I7QUFHNUJDLGFBQVcsRUFBRSxvQ0FIZTtBQUk1QkMsV0FBUyxFQUFFLGFBSmlCO0FBSzVCQyxlQUFhLEVBQUUseUJBTGE7QUFNNUJDLG1CQUFpQixFQUFFLGNBTlM7QUFPNUJDLE9BQUssRUFBRSwyQ0FQcUI7QUFRNUJDLGVBQWEsRUFBRTtBQVJhLENBQXZCLEM7Ozs7Ozs7Ozs7O0FDRlAsK0Q7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCI7XHJcbmltcG9ydCB7IHVzZVNuYWNrYmFyIH0gZnJvbSBcIm5vdGlzdGFja1wiO1xyXG5pbXBvcnQge2xvZ0luLGdldEluaXRpYWx9IGZyb20gJy4uL3V0aWxzL2FwaSdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2h9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHthY2Npb25Vc2VyLGFjY2lvbkFsdW1ub30gZnJvbSAnLi4vcmVkdXgvYWNjaW9uJ1xyXG5cclxuXHJcblxyXG5jb25zdCBpbmRleCA9ICh7dXNlcn0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIHZhciBmZWNoYUFwbGljYWNpb24gPSBuZXcgRGF0ZShcIjIwMjEtMDQtMjZUMDg6MDBcIik7XHJcbiAgdmFyIGZlY2hhQWN0dWFsID0gbmV3IERhdGUoRGF0ZS5ub3coKSlcclxuICBjb25zb2xlLmxvZyhmZWNoYUFwbGljYWNpb24pXHJcbiAgY29uc29sZS5sb2coXCJhY3R1YWxcIixmZWNoYUFjdHVhbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKHVzZXIpe1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2hvbWUnKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IFtpc2xvYWRpbiwgc2V0SXNsb2FkaW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtmb3JtRHRhLCBzZXRGb3JtRHRhXSA9IHVzZVN0YXRlKHsgcGFzc3dvcmQ6IFwiXCIsIGVtYWlsOiBcIlwiIH0pO1xyXG4gIGNvbnN0IHsgZW5xdWV1ZVNuYWNrYmFyIH0gPSB1c2VTbmFja2JhcigpO1xyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlckNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IHZhbHVlLCBuYW1lIH0gPSBlLnRhcmdldDtcclxuICAgIHNldEZvcm1EdGEoe1xyXG4gICAgICAuLi5mb3JtRHRhLFxyXG4gICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlclN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZihmZWNoYUFjdHVhbDxmZWNoYUFwbGljYWNpb24pe1xyXG4gICAgICBlbnF1ZXVlU25hY2tiYXIoXCJMYSBmZWNoYSBkZSBhcGxpY2FjacOzbiBlcyBlbCBMdW5lc1wiLCB7XHJcbiAgICAgICAgdmFyaWFudDogXCJ3YXJuaW5nXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgaWYgKCFmb3JtRHRhLmVtYWlsIHx8ICFmb3JtRHRhLnBhc3N3b3JkKSB7XHJcbiAgICAgICAgZW5xdWV1ZVNuYWNrYmFyKFwiQ29tcGxldGEgbG9zIGNhbXBvc1wiLCB7XHJcbiAgICAgICAgICB2YXJpYW50OiBcImVycm9yXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHNldElzbG9hZGluKHRydWUpO1xyXG4gICAgICBsb2dJbihmb3JtRHRhKS50aGVuKGFzeW5jIHJlc3BvbnNlPT57XHJcbiAgICAgICAgZGlzcGF0Y2goYWNjaW9uVXNlcihyZXNwb25zZS51c2VyKSlcclxuICAgICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBnZXRJbml0aWFsKHJlc3BvbnNlLnVzZXIudWlkKVxyXG4gICAgICAgIGRpc3BhdGNoKGFjY2lvbkFsdW1ubyh7ZGF0YX0pKVxyXG4gICAgICAgIHNldElzbG9hZGluKGZhbHNlKTtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL2hvbWUnKTtcclxuICAgICAgfSkuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgc2V0SXNsb2FkaW4oZmFsc2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgIGVucXVldWVTbmFja2JhcihlcnIubWVzc2FnZSwge1xyXG4gICAgICAgICAgICB2YXJpYW50OiBcImVycm9yXCIsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlNFQU5JIFVUVDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGltaXRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1sb2dpbjEwMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcC1sb2dpbjEwMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbjEwMC1waWMganMtdGlsdFwiIGRhdGEtdGlsdD1cIlwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jb2xvcmxpYi5jb20vZXRjL2xmL0xvZ2luX3YxL2ltYWdlcy9pbWctMDEucG5nXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJJTUdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZXJDaGFuZ2V9XHJcbiAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVyU3VibWl0fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dpbjEwMC1mb3JtXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9naW4xMDAtZm9ybS10aXRsZVwiPkxvZ2luPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwLWlucHV0MTAwIHZhbGlkYXRlLWlucHV0XCIgZGF0YS12YWxpZGF0ZT17bnVsbH0+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dDEwMFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb2N1cy1pbnB1dDEwMFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXAtaW5wdXQxMDAgdmFsaWRhdGUtaW5wdXRcIiBkYXRhLXZhbGlkYXRlPXtudWxsfT5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIC8vY2xhc3NOYW1lPVwiaW5wdXQxMDBcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvY3VzLWlucHV0MTAwXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWxvZ2luMTAwLWZvcm0tYnRuXCI+XHJcbiAgICAgICAgICAgICAge2lzbG9hZGluID8gKFxyXG4gICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgY29sb3I9XCJzZWNvbmRhcnlcIiAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImxvZ2luMTAwLWZvcm0tYnRuXCI+TG9naW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDsiLCJleHBvcnQgY29uc3QgYWNjaW9uQWx1bW5vID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IFwiQUxVTU5PXCIsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGEsXHJcbiAgICB9O1xyXG4gIH07XHJcbiAgIiwiZXhwb3J0IGNvbnN0IGFjY2lvblRlc3QgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogXCJURVNUXCIsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGEsXHJcbiAgICB9O1xyXG4gIH07XHJcbiAgIiwiZXhwb3J0IGNvbnN0IGFjY2lvblRpbWUgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogXCJUSU1FXCIsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGEsXHJcbiAgICB9O1xyXG4gIH07XHJcbiAgIiwiZXhwb3J0IGNvbnN0IGFjY2lvblRpcGUgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogXCJUSVBFXCIsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGEsXHJcbiAgICB9O1xyXG4gIH07XHJcbiAgIiwiZXhwb3J0IGNvbnN0IGFjY2lvblVzZXIgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogXCJVU0VSXCIsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGEsXHJcbiAgICB9O1xyXG4gIH07XHJcbiAgIiwiZXhwb3J0IHthY2Npb25UZXN0fSBmcm9tICcuL2FjY2lvblRlc3QnO1xyXG5leHBvcnQge2FjY2lvblVzZXJ9IGZyb20gJy4vYWNjaW9uVXNlcic7XHJcbmV4cG9ydCB7YWNjaW9uVGltZX0gZnJvbSAnLi9hY2Npb25UaW1lJztcclxuZXhwb3J0IHthY2Npb25UaXBlfSBmcm9tICcuL2FjY2lvblRpcGUnO1xyXG5leHBvcnQge2FjY2lvbkFsdW1ub30gZnJvbSAnLi9hY2Npb25BbHVtbm8nIiwiaW1wb3J0IHsgaG9zdCAsY29sbGVjdGlvbn0gZnJvbSBcIi4vdmFyaWFibGVzXCI7XHJcbmltcG9ydCB7ZGIsYXV0aH0gZnJvbSAnLi9maXJlYmFzZSdcclxuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJ1xyXG52YXIgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxubXlIZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbi8vdmFyIHJhdyA9IEpTT04uc3RyaW5naWZ5KHJlc3B1ZXN0YS51c2VyKTtcclxuXHJcbmNvbnN0IHJhdyA9IChkYXRhLCB0aXBlKSA9PiB7XHJcbiAgaWYgKCF0aXBlKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBtZXRob2Q6IHRpcGUsXHJcbiAgICBoZWFkZXJzOiBteUhlYWRlcnMsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIHJlZGlyZWN0OiBcImZvbGxvd1wiLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nSW4gPWFzeW5jIChkYXRhKT0+e1xyXG4gIHJldHVybiBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKFxyXG4gICAgZGF0YS5lbWFpbCxcclxuICAgIGRhdGEucGFzc3dvcmRcclxuICApXHJcbn1cclxuLy9nZXQgaW5mbyB1c2VyXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyID0oZGF0YSk9PntcclxuICAgIHJldHVybiBmZXRjaChgJHtob3N0fS9hcGkvdXNlcmAscmF3KGRhdGEsXCJQT1NUXCIpKS50aGVuKGRhdCA9PmRhdC5qc29uKCkpO1xyXG59XHJcbi8vYWN0aXZlIHNvY2tldFxyXG5leHBvcnQgY29uc3Qgb3BlblNvY2tldD1hc3luYyAoZGF0YSk9PntcclxuICBjb25zdCB7aWQsdGltZX0gPSBkYXRhXHJcbiAgYXdhaXQgZGIuZG9jKGAke2NvbGxlY3Rpb259LyR7aWR9YCkudXBkYXRlKHtcclxuICAgIHRpbWU6dGltZVxyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuLy8gdXBkYXRlIHJlc3BvbnNlIG9mIGFsdW1ub1xyXG5leHBvcnQgY29uc3QgdGVzdEV4YW0gPSBhc3luYyhkYXRhKT0+e1xyXG4gIGNvbnN0IHtpZCxhcnJlfSA9IGRhdGFcclxuICBhd2FpdCBkYi5kb2MoYCR7Y29sbGVjdGlvbn0vJHtpZH1gKS51cGRhdGUoeyB0ZXN0OiBhcnJlIH0pO1xyXG59XHJcbmV4cG9ydCBjb25zdCB0ZXN0TG9naWM9YXN5bmMoZGF0YSk9PntcclxuICBjb25zdCB7aWQsYXJyZX0gPSBkYXRhXHJcbiAgYXdhaXQgZGIuZG9jKGAke2NvbGxlY3Rpb259LyR7aWR9YCkudXBkYXRlKHsgbG9naWNvOiBhcnJlIH0pO1xyXG5cclxufVxyXG5leHBvcnQgY29uc3QgbGVuZ3VhRXhhbSA9YXN5bmMoZGF0YSk9PntcclxuICBjb25zdCB7aWQsYXJyZX0gPSBkYXRhXHJcbiAgYXdhaXQgZGIuZG9jKGAke2NvbGxlY3Rpb259LyR7aWR9YCkudXBkYXRlKHsgbGVuZ3VhOiBhcnJlIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWF0ZUV4YW0gPWFzeW5jKGRhdGEpPT57XHJcbiAgY29uc3Qge2lkLGFycmV9ID0gZGF0YVxyXG4gIGF3YWl0IGRiLmRvYyhgJHtjb2xsZWN0aW9ufS8ke2lkfWApLnVwZGF0ZSh7IG1hdGVtYXRpY286IGFycmUgfSk7XHJcblxyXG59XHJcblxyXG5cclxuLy9maW5pc2ggdGVzdFxyXG5leHBvcnQgY29uc3QgbWF0ZUNhbmNlbCA9YXN5bmMoZGF0YSk9PntcclxuICBhd2FpdCBkYi5kb2MoYCR7Y29sbGVjdGlvbn0vJHtkYXRhLmlkfWApLnVwZGF0ZSh7IGFjdGl2ZU1hdDogZmFsc2UgfSk7XHJcblxyXG59XHJcbmV4cG9ydCBjb25zdCBsb2dpQ2FuY2VsID1hc3luYyhkYXRhKT0+e1xyXG5cclxuICBhd2FpdCBkYi5kb2MoYCR7Y29sbGVjdGlvbn0vJHtkYXRhLmlkfWApLnVwZGF0ZSh7IGFjdGl2ZUxvZ2ljOiBmYWxzZSB9KTtcclxufVxyXG5leHBvcnQgY29uc3QgbGVuZ3VhQ2FuY2VsID1hc3luYyhkYXRhKT0+e1xyXG4gIGF3YWl0IGRiLmRvYyhgJHtjb2xsZWN0aW9ufS8ke2RhdGEuaWR9YCkudXBkYXRlKHsgYWN0aXZlTGVuZ3VhOiBmYWxzZSB9KTtcclxuXHJcbn1cclxuZXhwb3J0IGNvbnN0IGV4YW1DYW5jZWwgPWFzeW5jKGRhdGEpPT57XHJcbiAgYXdhaXQgZGIuZG9jKGAke2NvbGxlY3Rpb259LyR7ZGF0YS5pZH1gKS51cGRhdGUoeyBhY3RpdmVFeGFtMTogZmFsc2UgfSk7XHJcbn1cclxuLy9kZXN0cm95XHJcbmV4cG9ydCBjb25zdCBhbGxDYW5jZWwgPWFzeW5jKGRhdGEpPT57XHJcbiAgYXdhaXQgZGIuZG9jKGAke2NvbGxlY3Rpb259LyR7ZGF0YS5pZH1gKS51cGRhdGUoe1xyXG4gICAgYWN0aXZlTGVuZ3VhOiBmYWxzZSxcclxuICAgIGFjdGl2ZU1hdDogZmFsc2UsXHJcbiAgICBhY3RpdmVMb2dpYzogZmFsc2UsXHJcbiAgICBhY3RpdmVFeGFtMTogZmFsc2UsXHJcbiAgICB0aW1lOiAwLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKipHRVQgREFUQSBVU0VSICovXHJcbmV4cG9ydCBjb25zdCBnZXRJbml0aWFsID0gYXN5bmMgKHVpZCk9PntcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZGJcclxuICAgICAgLmNvbGxlY3Rpb24oY29sbGVjdGlvbilcclxuICAgICAgLndoZXJlKFwidXNlclwiLCBcIj09XCIsIHVpZClcclxuICAgICAgLmdldCgpO1xyXG4gICAgcmV0dXJuIHsgZGF0YTogZGF0YT8uZG9jc1swXT8uZGF0YSgpIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dPdXQgPSBhc3luYyAoKT0+e1xyXG4gIGF3YWl0IGF1dGguc2lnbk91dCgpO1xyXG59IiwiaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHtmaXJlYmFzZUNvbmZpZ30gZnJvbSAnLi92YXJpYWJsZXMnXHJcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuXHJcbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcclxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxufVxyXG5cclxuY29uc3QgYXBwID0gZmlyZWJhc2UuYXBwKCk7XHJcbmNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XHJcbmNvbnN0IGF1ID0gZmlyZWJhc2UuYXV0aCgpO1xyXG5jb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG5jb25zdCBub3cgPSBmaXJlYmFzZS5maXJlc3RvcmUuVGltZXN0YW1wLm5vdygpO1xyXG5jb25zdCBzdG9yYWdlID0gZmlyZWJhc2Uuc3RvcmFnZSgpO1xyXG5cclxuZXhwb3J0IHsgYXV0aCwgZGIsIG5vdywgc3RvcmFnZSxhdSB9OyIsImV4cG9ydCBjb25zdCBob3N0ID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcclxuZXhwb3J0IGNvbnN0IGNvbGxlY3Rpb24gPSBcImUxLTIwMjFcIjtcclxuZXhwb3J0IGNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lBeWlMak5NQ2RYNHZrQl9rTTBuOERfS0UtdFdoekdHZzRcIixcclxuICBhdXRoRG9tYWluOiBcInNlYW5pLTk1NGFjLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vc2VhbmktOTU0YWMuZmlyZWJhc2Vpby5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwic2VhbmktOTU0YWNcIixcclxuICBzdG9yYWdlQnVja2V0OiBcInNlYW5pLTk1NGFjLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiODIxNDYyODYyOTg3XCIsXHJcbiAgYXBwSWQ6IFwiMTo4MjE0NjI4NjI5ODc6d2ViOjQzMzEwYjRiYmM4Yjg0ZjM1NGQ4OGVcIixcclxuICBtZWFzdXJlbWVudElkOiBcIkctRVhCRk1SSjhGNFwiLFxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9zdG9yYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vdGlzdGFja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==