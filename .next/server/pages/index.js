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
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/variables */ "./utils/variables.js");
/* harmony import */ var _redux_accion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/accion */ "./redux/accion/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "C:\\proyectos\\next\\seani\\pages\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const index = ({
  user
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (user) {
      router.push("/home");
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

    if (_utils_variables__WEBPACK_IMPORTED_MODULE_8__["fechaActual"] > _utils_variables__WEBPACK_IMPORTED_MODULE_8__["fechaAplicacion"]) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
        title: "El examen no esta disponible",
        text: "Espera la siguiente etapa",
        icon: "warning"
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
        dispatch(Object(_redux_accion__WEBPACK_IMPORTED_MODULE_9__["accionUser"])(response.user));
        const {
          data
        } = await Object(_utils_api__WEBPACK_IMPORTED_MODULE_4__["getInitial"])(response.user.uid);
        dispatch(Object(_redux_accion__WEBPACK_IMPORTED_MODULE_9__["accionAlumno"])({
          data
        }));
        setIsloadin(false);
        router.push("/home");
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
        lineNumber: 72,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
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
              lineNumber: 78,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            onChange: handlerChange,
            onSubmit: handlerSubmit,
            className: "login100-form",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "login100-form-title",
              children: "Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
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
                lineNumber: 95,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "focus-input100"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
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
                lineNumber: 108,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "focus-input100"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "container-login100-form-btn",
              children: isloadin ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default.a, {
                color: "secondary"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 19
              }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "login100-form-btn",
                children: "Login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
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
/*! exports provided: host, collection, firebaseConfig, fechaAplicacion, fechaActual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "host", function() { return host; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collection", function() { return collection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fechaAplicacion", function() { return fechaAplicacion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fechaActual", function() { return fechaActual; });
const host = "http://localhost:3000"; //coleccion a conectarse

const collection = "e1-2021"; //configuracion firebase

const firebaseConfig = {
  apiKey: "AIzaSyAyiLjNMCdX4vkB_kM0n8D_KE-tWhzGGg4",
  authDomain: "seani-954ac.firebaseapp.com",
  databaseURL: "https://seani-954ac.firebaseio.com",
  projectId: "seani-954ac",
  storageBucket: "seani-954ac.appspot.com",
  messagingSenderId: "821462862987",
  appId: "1:821462862987:web:43310b4bbc8b84f354d88e",
  measurementId: "G-EXBFMRJ8F4"
}; //poner fecha en cuando se aplicara

const fechaAplicacion = new Date("2021-04-26T20:00");
const fechaActual = new Date("2021-04-26T20:02");

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

/***/ }),

/***/ "sweetalert2":
/*!******************************!*\
  !*** external "sweetalert2" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sweetalert2");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWNjaW9uL2FjY2lvbkFsdW1uby5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY2Npb24vYWNjaW9uVGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY2Npb24vYWNjaW9uVGltZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY2Npb24vYWNjaW9uVGlwZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY2Npb24vYWNjaW9uVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY2Npb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvYXBpLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2ZpcmViYXNlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3ZhcmlhYmxlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub3Rpc3RhY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3dlZXRhbGVydDJcIiJdLCJuYW1lcyI6WyJpbmRleCIsInVzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwicHVzaCIsImlzbG9hZGluIiwic2V0SXNsb2FkaW4iLCJ1c2VTdGF0ZSIsImZvcm1EdGEiLCJzZXRGb3JtRHRhIiwicGFzc3dvcmQiLCJlbWFpbCIsImVucXVldWVTbmFja2JhciIsInVzZVNuYWNrYmFyIiwiaGFuZGxlckNoYW5nZSIsImUiLCJ2YWx1ZSIsIm5hbWUiLCJ0YXJnZXQiLCJoYW5kbGVyU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJmZWNoYUFjdHVhbCIsImZlY2hhQXBsaWNhY2lvbiIsIlN3YWwiLCJmaXJlIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsInZhcmlhbnQiLCJsb2dJbiIsInRoZW4iLCJyZXNwb25zZSIsImFjY2lvblVzZXIiLCJkYXRhIiwiZ2V0SW5pdGlhbCIsInVpZCIsImFjY2lvbkFsdW1ubyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJ0eXBlIiwicGF5bG9hZCIsImFjY2lvblRlc3QiLCJhY2Npb25UaW1lIiwiYWNjaW9uVGlwZSIsIm15SGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJyYXciLCJ0aXBlIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVkaXJlY3QiLCJhdXRoIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJnZXRVc2VyIiwiZmV0Y2giLCJob3N0IiwiZGF0IiwianNvbiIsIm9wZW5Tb2NrZXQiLCJpZCIsInRpbWUiLCJkYiIsImRvYyIsImNvbGxlY3Rpb24iLCJ1cGRhdGUiLCJ0ZXN0RXhhbSIsImFycmUiLCJ0ZXN0IiwidGVzdExvZ2ljIiwibG9naWNvIiwibGVuZ3VhRXhhbSIsImxlbmd1YSIsIm1hdGVFeGFtIiwibWF0ZW1hdGljbyIsIm1hdGVDYW5jZWwiLCJhY3RpdmVNYXQiLCJsb2dpQ2FuY2VsIiwiYWN0aXZlTG9naWMiLCJsZW5ndWFDYW5jZWwiLCJhY3RpdmVMZW5ndWEiLCJleGFtQ2FuY2VsIiwiYWN0aXZlRXhhbTEiLCJhbGxDYW5jZWwiLCJ3aGVyZSIsImdldCIsImRvY3MiLCJsb2dPdXQiLCJzaWduT3V0IiwiZmlyZWJhc2UiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImZpcmViYXNlQ29uZmlnIiwiYXBwIiwiYXUiLCJmaXJlc3RvcmUiLCJub3ciLCJUaW1lc3RhbXAiLCJzdG9yYWdlIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiRGF0ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RB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Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzc1wiO1xyXG5pbXBvcnQgeyB1c2VTbmFja2JhciB9IGZyb20gXCJub3Rpc3RhY2tcIjtcclxuaW1wb3J0IHsgbG9nSW4sIGdldEluaXRpYWwgfSBmcm9tIFwiLi4vdXRpbHMvYXBpXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGZlY2hhQWN0dWFsLCBmZWNoYUFwbGljYWNpb24gfSBmcm9tIFwiLi4vdXRpbHMvdmFyaWFibGVzXCI7XHJcbmltcG9ydCB7IGFjY2lvblVzZXIsIGFjY2lvbkFsdW1ubyB9IGZyb20gXCIuLi9yZWR1eC9hY2Npb25cIjtcclxuaW1wb3J0IFN3YWwgZnJvbSBcInN3ZWV0YWxlcnQyXCI7XHJcblxyXG5jb25zdCBpbmRleCA9ICh7IHVzZXIgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2hvbWVcIik7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IFtpc2xvYWRpbiwgc2V0SXNsb2FkaW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtmb3JtRHRhLCBzZXRGb3JtRHRhXSA9IHVzZVN0YXRlKHsgcGFzc3dvcmQ6IFwiXCIsIGVtYWlsOiBcIlwiIH0pO1xyXG4gIGNvbnN0IHsgZW5xdWV1ZVNuYWNrYmFyIH0gPSB1c2VTbmFja2JhcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVyQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgdmFsdWUsIG5hbWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgc2V0Rm9ybUR0YSh7XHJcbiAgICAgIC4uLmZvcm1EdGEsXHJcbiAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVyU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChmZWNoYUFjdHVhbCA+IGZlY2hhQXBsaWNhY2lvbikge1xyXG4gICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgIHRpdGxlOiBcIkVsIGV4YW1lbiBubyBlc3RhIGRpc3BvbmlibGVcIixcclxuICAgICAgICB0ZXh0OiBcIkVzcGVyYSBsYSBzaWd1aWVudGUgZXRhcGFcIixcclxuICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIWZvcm1EdGEuZW1haWwgfHwgIWZvcm1EdGEucGFzc3dvcmQpIHtcclxuICAgICAgICBlbnF1ZXVlU25hY2tiYXIoXCJDb21wbGV0YSBsb3MgY2FtcG9zXCIsIHtcclxuICAgICAgICAgIHZhcmlhbnQ6IFwiZXJyb3JcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgc2V0SXNsb2FkaW4odHJ1ZSk7XHJcbiAgICAgIGxvZ0luKGZvcm1EdGEpXHJcbiAgICAgICAgLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBkaXNwYXRjaChhY2Npb25Vc2VyKHJlc3BvbnNlLnVzZXIpKTtcclxuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgZ2V0SW5pdGlhbChyZXNwb25zZS51c2VyLnVpZCk7XHJcbiAgICAgICAgICBkaXNwYXRjaChhY2Npb25BbHVtbm8oeyBkYXRhIH0pKTtcclxuICAgICAgICAgIHNldElzbG9hZGluKGZhbHNlKTtcclxuICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2hvbWVcIik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgc2V0SXNsb2FkaW4oZmFsc2UpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIGVucXVldWVTbmFja2JhcihlcnIubWVzc2FnZSwge1xyXG4gICAgICAgICAgICB2YXJpYW50OiBcImVycm9yXCIsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlNFQU5JIFVUVDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW1pdGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItbG9naW4xMDBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcC1sb2dpbjEwMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luMTAwLXBpYyBqcy10aWx0XCIgZGF0YS10aWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jb2xvcmxpYi5jb20vZXRjL2xmL0xvZ2luX3YxL2ltYWdlcy9pbWctMDEucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIklNR1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVyQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVyU3VibWl0fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ2luMTAwLWZvcm1cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9naW4xMDAtZm9ybS10aXRsZVwiPkxvZ2luPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3cmFwLWlucHV0MTAwIHZhbGlkYXRlLWlucHV0XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdmFsaWRhdGU9e251bGx9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0MTAwXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb2N1cy1pbnB1dDEwMFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid3JhcC1pbnB1dDEwMCB2YWxpZGF0ZS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXZhbGlkYXRlPXtudWxsfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAvL2NsYXNzTmFtZT1cImlucHV0MTAwXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9jdXMtaW5wdXQxMDBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWxvZ2luMTAwLWZvcm0tYnRuXCI+XHJcbiAgICAgICAgICAgICAgICB7aXNsb2FkaW4gPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibG9naW4xMDAtZm9ybS1idG5cIj5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iLCJleHBvcnQgY29uc3QgYWNjaW9uQWx1bW5vID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IFwiQUxVTU5PXCIsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGEsXHJcbiAgICB9O1xyXG4gIH07XHJcbiAgIiwiZXhwb3J0IGNvbnN0IGFjY2lvblRlc3QgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogXCJURVNUXCIsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGEsXHJcbiAgICB9O1xyXG4gIH07XHJcbiAgIiwiZXhwb3J0IGNvbnN0IGFjY2lvblRpbWUgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogXCJUSU1FXCIsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGEsXHJcbiAgICB9O1xyXG4gIH07XHJcbiAgIiwiZXhwb3J0IGNvbnN0IGFjY2lvblRpcGUgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogXCJUSVBFXCIsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGEsXHJcbiAgICB9O1xyXG4gIH07XHJcbiAgIiwiZXhwb3J0IGNvbnN0IGFjY2lvblVzZXIgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogXCJVU0VSXCIsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGEsXHJcbiAgICB9O1xyXG4gIH07XHJcbiAgIiwiZXhwb3J0IHthY2Npb25UZXN0fSBmcm9tICcuL2FjY2lvblRlc3QnO1xyXG5leHBvcnQge2FjY2lvblVzZXJ9IGZyb20gJy4vYWNjaW9uVXNlcic7XHJcbmV4cG9ydCB7YWNjaW9uVGltZX0gZnJvbSAnLi9hY2Npb25UaW1lJztcclxuZXhwb3J0IHthY2Npb25UaXBlfSBmcm9tICcuL2FjY2lvblRpcGUnO1xyXG5leHBvcnQge2FjY2lvbkFsdW1ub30gZnJvbSAnLi9hY2Npb25BbHVtbm8nIiwiaW1wb3J0IHsgaG9zdCAsY29sbGVjdGlvbn0gZnJvbSBcIi4vdmFyaWFibGVzXCI7XHJcbmltcG9ydCB7ZGIsYXV0aH0gZnJvbSAnLi9maXJlYmFzZSdcclxuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJ1xyXG52YXIgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxubXlIZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbi8vdmFyIHJhdyA9IEpTT04uc3RyaW5naWZ5KHJlc3B1ZXN0YS51c2VyKTtcclxuXHJcbmNvbnN0IHJhdyA9IChkYXRhLCB0aXBlKSA9PiB7XHJcbiAgaWYgKCF0aXBlKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBtZXRob2Q6IHRpcGUsXHJcbiAgICBoZWFkZXJzOiBteUhlYWRlcnMsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIHJlZGlyZWN0OiBcImZvbGxvd1wiLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nSW4gPWFzeW5jIChkYXRhKT0+e1xyXG4gIHJldHVybiBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKFxyXG4gICAgZGF0YS5lbWFpbCxcclxuICAgIGRhdGEucGFzc3dvcmRcclxuICApXHJcbn1cclxuLy9nZXQgaW5mbyB1c2VyXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyID0oZGF0YSk9PntcclxuICAgIHJldHVybiBmZXRjaChgJHtob3N0fS9hcGkvdXNlcmAscmF3KGRhdGEsXCJQT1NUXCIpKS50aGVuKGRhdCA9PmRhdC5qc29uKCkpO1xyXG59XHJcbi8vYWN0aXZlIHNvY2tldFxyXG5leHBvcnQgY29uc3Qgb3BlblNvY2tldD1hc3luYyAoZGF0YSk9PntcclxuICBjb25zdCB7aWQsdGltZX0gPSBkYXRhXHJcbiAgYXdhaXQgZGIuZG9jKGAke2NvbGxlY3Rpb259LyR7aWR9YCkudXBkYXRlKHtcclxuICAgIHRpbWU6dGltZVxyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuLy8gdXBkYXRlIHJlc3BvbnNlIG9mIGFsdW1ub1xyXG5leHBvcnQgY29uc3QgdGVzdEV4YW0gPSBhc3luYyhkYXRhKT0+e1xyXG4gIGNvbnN0IHtpZCxhcnJlfSA9IGRhdGFcclxuICBhd2FpdCBkYi5kb2MoYCR7Y29sbGVjdGlvbn0vJHtpZH1gKS51cGRhdGUoeyB0ZXN0OiBhcnJlIH0pO1xyXG59XHJcbmV4cG9ydCBjb25zdCB0ZXN0TG9naWM9YXN5bmMoZGF0YSk9PntcclxuICBjb25zdCB7aWQsYXJyZX0gPSBkYXRhXHJcbiAgYXdhaXQgZGIuZG9jKGAke2NvbGxlY3Rpb259LyR7aWR9YCkudXBkYXRlKHsgbG9naWNvOiBhcnJlIH0pO1xyXG5cclxufVxyXG5leHBvcnQgY29uc3QgbGVuZ3VhRXhhbSA9YXN5bmMoZGF0YSk9PntcclxuICBjb25zdCB7aWQsYXJyZX0gPSBkYXRhXHJcbiAgYXdhaXQgZGIuZG9jKGAke2NvbGxlY3Rpb259LyR7aWR9YCkudXBkYXRlKHsgbGVuZ3VhOiBhcnJlIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWF0ZUV4YW0gPWFzeW5jKGRhdGEpPT57XHJcbiAgY29uc3Qge2lkLGFycmV9ID0gZGF0YVxyXG4gIGF3YWl0IGRiLmRvYyhgJHtjb2xsZWN0aW9ufS8ke2lkfWApLnVwZGF0ZSh7IG1hdGVtYXRpY286IGFycmUgfSk7XHJcblxyXG59XHJcblxyXG5cclxuLy9maW5pc2ggdGVzdFxyXG5leHBvcnQgY29uc3QgbWF0ZUNhbmNlbCA9YXN5bmMoZGF0YSk9PntcclxuICBhd2FpdCBkYi5kb2MoYCR7Y29sbGVjdGlvbn0vJHtkYXRhLmlkfWApLnVwZGF0ZSh7IGFjdGl2ZU1hdDogZmFsc2UgfSk7XHJcblxyXG59XHJcbmV4cG9ydCBjb25zdCBsb2dpQ2FuY2VsID1hc3luYyhkYXRhKT0+e1xyXG5cclxuICBhd2FpdCBkYi5kb2MoYCR7Y29sbGVjdGlvbn0vJHtkYXRhLmlkfWApLnVwZGF0ZSh7IGFjdGl2ZUxvZ2ljOiBmYWxzZSB9KTtcclxufVxyXG5leHBvcnQgY29uc3QgbGVuZ3VhQ2FuY2VsID1hc3luYyhkYXRhKT0+e1xyXG4gIGF3YWl0IGRiLmRvYyhgJHtjb2xsZWN0aW9ufS8ke2RhdGEuaWR9YCkudXBkYXRlKHsgYWN0aXZlTGVuZ3VhOiBmYWxzZSB9KTtcclxuXHJcbn1cclxuZXhwb3J0IGNvbnN0IGV4YW1DYW5jZWwgPWFzeW5jKGRhdGEpPT57XHJcbiAgYXdhaXQgZGIuZG9jKGAke2NvbGxlY3Rpb259LyR7ZGF0YS5pZH1gKS51cGRhdGUoeyBhY3RpdmVFeGFtMTogZmFsc2UgfSk7XHJcbn1cclxuLy9kZXN0cm95XHJcbmV4cG9ydCBjb25zdCBhbGxDYW5jZWwgPWFzeW5jKGRhdGEpPT57XHJcbiAgYXdhaXQgZGIuZG9jKGAke2NvbGxlY3Rpb259LyR7ZGF0YS5pZH1gKS51cGRhdGUoe1xyXG4gICAgYWN0aXZlTGVuZ3VhOiBmYWxzZSxcclxuICAgIGFjdGl2ZU1hdDogZmFsc2UsXHJcbiAgICBhY3RpdmVMb2dpYzogZmFsc2UsXHJcbiAgICBhY3RpdmVFeGFtMTogZmFsc2UsXHJcbiAgICB0aW1lOiAwLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKipHRVQgREFUQSBVU0VSICovXHJcbmV4cG9ydCBjb25zdCBnZXRJbml0aWFsID0gYXN5bmMgKHVpZCk9PntcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZGJcclxuICAgICAgLmNvbGxlY3Rpb24oY29sbGVjdGlvbilcclxuICAgICAgLndoZXJlKFwidXNlclwiLCBcIj09XCIsIHVpZClcclxuICAgICAgLmdldCgpO1xyXG4gICAgcmV0dXJuIHsgZGF0YTogZGF0YT8uZG9jc1swXT8uZGF0YSgpIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dPdXQgPSBhc3luYyAoKT0+e1xyXG4gIGF3YWl0IGF1dGguc2lnbk91dCgpO1xyXG59IiwiaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHtmaXJlYmFzZUNvbmZpZ30gZnJvbSAnLi92YXJpYWJsZXMnXHJcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuXHJcbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcclxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxufVxyXG5cclxuY29uc3QgYXBwID0gZmlyZWJhc2UuYXBwKCk7XHJcbmNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XHJcbmNvbnN0IGF1ID0gZmlyZWJhc2UuYXV0aCgpO1xyXG5jb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG5jb25zdCBub3cgPSBmaXJlYmFzZS5maXJlc3RvcmUuVGltZXN0YW1wLm5vdygpO1xyXG5jb25zdCBzdG9yYWdlID0gZmlyZWJhc2Uuc3RvcmFnZSgpO1xyXG5cclxuZXhwb3J0IHsgYXV0aCwgZGIsIG5vdywgc3RvcmFnZSxhdSB9OyIsImV4cG9ydCBjb25zdCBob3N0ID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcclxuLy9jb2xlY2Npb24gYSBjb25lY3RhcnNlXHJcbmV4cG9ydCBjb25zdCBjb2xsZWN0aW9uID0gXCJlMS0yMDIxXCI7XHJcbi8vY29uZmlndXJhY2lvbiBmaXJlYmFzZVxyXG5leHBvcnQgY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBcIkFJemFTeUF5aUxqTk1DZFg0dmtCX2tNMG44RF9LRS10V2h6R0dnNFwiLFxyXG4gIGF1dGhEb21haW46IFwic2VhbmktOTU0YWMuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9zZWFuaS05NTRhYy5maXJlYmFzZWlvLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJzZWFuaS05NTRhY1wiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwic2VhbmktOTU0YWMuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI4MjE0NjI4NjI5ODdcIixcclxuICBhcHBJZDogXCIxOjgyMTQ2Mjg2Mjk4Nzp3ZWI6NDMzMTBiNGJiYzhiODRmMzU0ZDg4ZVwiLFxyXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy1FWEJGTVJKOEY0XCIsXHJcbn07XHJcbi8vcG9uZXIgZmVjaGEgZW4gY3VhbmRvIHNlIGFwbGljYXJhXHJcbmV4cG9ydCBjb25zdCBmZWNoYUFwbGljYWNpb24gPSBuZXcgRGF0ZShcIjIwMjEtMDQtMjZUMjA6MDBcIik7XHJcbmV4cG9ydCBjb25zdCBmZWNoYUFjdHVhbCA9IG5ldyBEYXRlKFwiMjAyMS0wNC0yNlQyMDowMlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9zdG9yYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vdGlzdGFja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dlZXRhbGVydDJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==