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
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "SEANI UTT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
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
              lineNumber: 67,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
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
              lineNumber: 78,
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
                lineNumber: 81,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "focus-input100"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 15
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 80,
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
                lineNumber: 91,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "focus-input100"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 15
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 13
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "container-login100-form-btn",
              children: isloadin ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default.a, {
                color: "secondary"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 17
              }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "login100-form-btn",
                children: "Login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 13
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
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
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ "firebase/storage");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_3__);




/*
const {
    FIREBASE_AUTHDOMAIN,
    FIREBASE_DATABASE,
    FIREBASE_PROJECT_ID,
  } = process.env;
  const {
    FIREBASE_STORAGE_BUCKET,
    FIREBASE_SENDER_ID,
    FIREBASE_APP_ID,
    FIREBASE_MENSURABLE,
  } = process.env;*/

const firebaseConfig = {
  apiKey: "AIzaSyDxblUMTsA7EQAGV3cgCcGMoYuaBN2_Ihk",
  authDomain: "utt-examen.firebaseapp.com",
  databaseURL: "https://utt-examen.firebaseio.com",
  projectId: "utt-examen",
  storageBucket: "utt-examen.appspot.com",
  messagingSenderId: "18898550084",
  appId: "1:18898550084:web:f333bed7d19c444b356b11",
  measurementId: "G-EZJBGMMT5R"
};

if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);
}

const app = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app();
const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();
const au = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();
const db = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();
const now = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore.Timestamp.now();
const storage = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.storage();

/**
 *  apiKey: process.env.FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTHDOMAIN,
    databaseURL: FIREBASE_DATABASE,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_SENDER_ID,
    appId: FIREBASE_APP_ID,
    measurementId: FIREBASE_MENSURABLE,
 */

/***/ }),

/***/ "./utils/variables.js":
/*!****************************!*\
  !*** ./utils/variables.js ***!
  \****************************/
/*! exports provided: host, collection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "host", function() { return host; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collection", function() { return collection; });
const host = "http://localhost:3000";
const collection = "alumnos3";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWNjaW9uL2FjY2lvbkFsdW1uby5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY2Npb24vYWNjaW9uVGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY2Npb24vYWNjaW9uVGltZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY2Npb24vYWNjaW9uVGlwZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY2Npb24vYWNjaW9uVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY2Npb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvYXBpLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2ZpcmViYXNlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3ZhcmlhYmxlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub3Rpc3RhY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiaW5kZXgiLCJ1c2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsInB1c2giLCJpc2xvYWRpbiIsInNldElzbG9hZGluIiwidXNlU3RhdGUiLCJmb3JtRHRhIiwic2V0Rm9ybUR0YSIsInBhc3N3b3JkIiwiZW1haWwiLCJlbnF1ZXVlU25hY2tiYXIiLCJ1c2VTbmFja2JhciIsImhhbmRsZXJDaGFuZ2UiLCJlIiwidmFsdWUiLCJuYW1lIiwidGFyZ2V0IiwiaGFuZGxlclN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidmFyaWFudCIsImxvZ0luIiwidGhlbiIsInJlc3BvbnNlIiwiYWNjaW9uVXNlciIsImRhdGEiLCJnZXRJbml0aWFsIiwidWlkIiwiYWNjaW9uQWx1bW5vIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInR5cGUiLCJwYXlsb2FkIiwiYWNjaW9uVGVzdCIsImFjY2lvblRpbWUiLCJhY2Npb25UaXBlIiwibXlIZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsInJhdyIsInRpcGUiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZWRpcmVjdCIsImF1dGgiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImdldFVzZXIiLCJmZXRjaCIsImhvc3QiLCJkYXQiLCJqc29uIiwib3BlblNvY2tldCIsImlkIiwidGltZSIsImRiIiwiZG9jIiwiY29sbGVjdGlvbiIsInVwZGF0ZSIsInRlc3RFeGFtIiwiYXJyZSIsInRlc3QiLCJ0ZXN0TG9naWMiLCJsb2dpY28iLCJsZW5ndWFFeGFtIiwibGVuZ3VhIiwibWF0ZUV4YW0iLCJtYXRlbWF0aWNvIiwibWF0ZUNhbmNlbCIsImFjdGl2ZU1hdCIsImxvZ2lDYW5jZWwiLCJhY3RpdmVMb2dpYyIsImxlbmd1YUNhbmNlbCIsImFjdGl2ZUxlbmd1YSIsImV4YW1DYW5jZWwiLCJhY3RpdmVFeGFtMSIsImFsbENhbmNlbCIsIndoZXJlIiwiZ2V0IiwiZG9jcyIsImxvZ091dCIsInNpZ25PdXQiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJhcHAiLCJhdSIsImZpcmVzdG9yZSIsIm5vdyIsIlRpbWVzdGFtcCIsInN0b3JhZ2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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bUQsRUFBRSxHQUFHTCxtREFBUSxDQUFDOUMsSUFBVCxFQUFYO0FBQ0EsTUFBTVUsRUFBRSxHQUFHb0MsbURBQVEsQ0FBQ00sU0FBVCxFQUFYO0FBQ0EsTUFBTUMsR0FBRyxHQUFHUCxtREFBUSxDQUFDTSxTQUFULENBQW1CRSxTQUFuQixDQUE2QkQsR0FBN0IsRUFBWjtBQUNBLE1BQU1FLE9BQU8sR0FBR1QsbURBQVEsQ0FBQ1MsT0FBVCxFQUFoQjtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7Ozs7Ozs7O0FDbERBO0FBQUE7QUFBQTtBQUFPLE1BQU1uRCxJQUFJLEdBQUcsdUJBQWI7QUFDQSxNQUFNUSxVQUFVLEdBQUcsVUFBbkIsQzs7Ozs7Ozs7Ozs7QUNEUCwrRDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcclxuaW1wb3J0IHsgdXNlU25hY2tiYXIgfSBmcm9tIFwibm90aXN0YWNrXCI7XHJcbmltcG9ydCB7bG9nSW4sZ2V0SW5pdGlhbH0gZnJvbSAnLi4vdXRpbHMvYXBpJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge2FjY2lvblVzZXIsYWNjaW9uQWx1bW5vfSBmcm9tICcuLi9yZWR1eC9hY2Npb24nXHJcblxyXG5cclxuXHJcbmNvbnN0IGluZGV4ID0gKHt1c2VyfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZih1c2VyKXtcclxuICAgICAgcm91dGVyLnB1c2goJy9ob21lJylcclxuICAgIH1cclxuICB9LCBbXSlcclxuICBjb25zdCBbaXNsb2FkaW4sIHNldElzbG9hZGluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZm9ybUR0YSwgc2V0Rm9ybUR0YV0gPSB1c2VTdGF0ZSh7IHBhc3N3b3JkOiBcIlwiLCBlbWFpbDogXCJcIiB9KTtcclxuICBjb25zdCB7IGVucXVldWVTbmFja2JhciB9ID0gdXNlU25hY2tiYXIoKTtcclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZXJDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyB2YWx1ZSwgbmFtZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBzZXRGb3JtRHRhKHtcclxuICAgICAgLi4uZm9ybUR0YSxcclxuICAgICAgW25hbWVdOiB2YWx1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZXJTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKCFmb3JtRHRhLmVtYWlsIHx8ICFmb3JtRHRhLnBhc3N3b3JkKSB7XHJcbiAgICAgIGVucXVldWVTbmFja2JhcihcIkNvbXBsZXRhIGxvcyBjYW1wb3NcIiwge1xyXG4gICAgICAgIHZhcmlhbnQ6IFwiZXJyb3JcIixcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHNldElzbG9hZGluKHRydWUpO1xyXG4gICAgbG9nSW4oZm9ybUR0YSkudGhlbihhc3luYyByZXNwb25zZT0+e1xyXG4gICAgICBkaXNwYXRjaChhY2Npb25Vc2VyKHJlc3BvbnNlLnVzZXIpKVxyXG4gICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBnZXRJbml0aWFsKHJlc3BvbnNlLnVzZXIudWlkKVxyXG4gICAgICBkaXNwYXRjaChhY2Npb25BbHVtbm8oe2RhdGF9KSlcclxuICAgICAgc2V0SXNsb2FkaW4oZmFsc2UpO1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2hvbWUnKTtcclxuICAgIH0pLmNhdGNoKGVycj0+e1xyXG4gICAgICBzZXRJc2xvYWRpbihmYWxzZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICBlbnF1ZXVlU25hY2tiYXIoZXJyLm1lc3NhZ2UsIHtcclxuICAgICAgICAgIHZhcmlhbnQ6IFwiZXJyb3JcIixcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+U0VBTkkgVVRUPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsaW1pdGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWxvZ2luMTAwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwLWxvZ2luMTAwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luMTAwLXBpYyBqcy10aWx0XCIgZGF0YS10aWx0PVwiXCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2NvbG9ybGliLmNvbS9ldGMvbGYvTG9naW5fdjEvaW1hZ2VzL2ltZy0wMS5wbmdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIklNR1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlckNoYW5nZX1cclxuICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZXJTdWJtaXR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ2luMTAwLWZvcm1cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dpbjEwMC1mb3JtLXRpdGxlXCI+TG9naW48L3NwYW4+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXAtaW5wdXQxMDAgdmFsaWRhdGUtaW5wdXRcIiBkYXRhLXZhbGlkYXRlPXtudWxsfT5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0MTAwXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvY3VzLWlucHV0MTAwXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcC1pbnB1dDEwMCB2YWxpZGF0ZS1pbnB1dFwiIGRhdGEtdmFsaWRhdGU9e251bGx9PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgLy9jbGFzc05hbWU9XCJpbnB1dDEwMFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9jdXMtaW5wdXQxMDBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItbG9naW4xMDAtZm9ybS1idG5cIj5cclxuICAgICAgICAgICAgICB7aXNsb2FkaW4gPyAoXHJcbiAgICAgICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBjb2xvcj1cInNlY29uZGFyeVwiIC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibG9naW4xMDAtZm9ybS1idG5cIj5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4OyIsImV4cG9ydCBjb25zdCBhY2Npb25BbHVtbm8gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogXCJBTFVNTk9cIixcclxuICAgICAgcGF5bG9hZDogZGF0YSxcclxuICAgIH07XHJcbiAgfTtcclxuICAiLCJleHBvcnQgY29uc3QgYWNjaW9uVGVzdCA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBcIlRFU1RcIixcclxuICAgICAgcGF5bG9hZDogZGF0YSxcclxuICAgIH07XHJcbiAgfTtcclxuICAiLCJleHBvcnQgY29uc3QgYWNjaW9uVGltZSA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBcIlRJTUVcIixcclxuICAgICAgcGF5bG9hZDogZGF0YSxcclxuICAgIH07XHJcbiAgfTtcclxuICAiLCJleHBvcnQgY29uc3QgYWNjaW9uVGlwZSA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBcIlRJUEVcIixcclxuICAgICAgcGF5bG9hZDogZGF0YSxcclxuICAgIH07XHJcbiAgfTtcclxuICAiLCJleHBvcnQgY29uc3QgYWNjaW9uVXNlciA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBcIlVTRVJcIixcclxuICAgICAgcGF5bG9hZDogZGF0YSxcclxuICAgIH07XHJcbiAgfTtcclxuICAiLCJleHBvcnQge2FjY2lvblRlc3R9IGZyb20gJy4vYWNjaW9uVGVzdCc7XHJcbmV4cG9ydCB7YWNjaW9uVXNlcn0gZnJvbSAnLi9hY2Npb25Vc2VyJztcclxuZXhwb3J0IHthY2Npb25UaW1lfSBmcm9tICcuL2FjY2lvblRpbWUnO1xyXG5leHBvcnQge2FjY2lvblRpcGV9IGZyb20gJy4vYWNjaW9uVGlwZSc7XHJcbmV4cG9ydCB7YWNjaW9uQWx1bW5vfSBmcm9tICcuL2FjY2lvbkFsdW1ubyciLCJpbXBvcnQgeyBob3N0ICxjb2xsZWN0aW9ufSBmcm9tIFwiLi92YXJpYWJsZXNcIjtcclxuaW1wb3J0IHtkYixhdXRofSBmcm9tICcuL2ZpcmViYXNlJ1xyXG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXHJcbnZhciBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG5teUhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuLy92YXIgcmF3ID0gSlNPTi5zdHJpbmdpZnkocmVzcHVlc3RhLnVzZXIpO1xyXG5cclxuY29uc3QgcmF3ID0gKGRhdGEsIHRpcGUpID0+IHtcclxuICBpZiAoIXRpcGUpIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIG1ldGhvZDogdGlwZSxcclxuICAgIGhlYWRlcnM6IG15SGVhZGVycyxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgcmVkaXJlY3Q6IFwiZm9sbG93XCIsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dJbiA9YXN5bmMgKGRhdGEpPT57XHJcbiAgcmV0dXJuIGF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoXHJcbiAgICBkYXRhLmVtYWlsLFxyXG4gICAgZGF0YS5wYXNzd29yZFxyXG4gIClcclxufVxyXG4vL2dldCBpbmZvIHVzZXJcclxuZXhwb3J0IGNvbnN0IGdldFVzZXIgPShkYXRhKT0+e1xyXG4gICAgcmV0dXJuIGZldGNoKGAke2hvc3R9L2FwaS91c2VyYCxyYXcoZGF0YSxcIlBPU1RcIikpLnRoZW4oZGF0ID0+ZGF0Lmpzb24oKSk7XHJcbn1cclxuLy9hY3RpdmUgc29ja2V0XHJcbmV4cG9ydCBjb25zdCBvcGVuU29ja2V0PWFzeW5jIChkYXRhKT0+e1xyXG4gIGNvbnN0IHtpZCx0aW1lfSA9IGRhdGFcclxuICBhd2FpdCBkYi5kb2MoYCR7Y29sbGVjdGlvbn0vJHtpZH1gKS51cGRhdGUoe1xyXG4gICAgdGltZTp0aW1lXHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG4vLyB1cGRhdGUgcmVzcG9uc2Ugb2YgYWx1bW5vXHJcbmV4cG9ydCBjb25zdCB0ZXN0RXhhbSA9IGFzeW5jKGRhdGEpPT57XHJcbiAgY29uc3Qge2lkLGFycmV9ID0gZGF0YVxyXG4gIGF3YWl0IGRiLmRvYyhgJHtjb2xsZWN0aW9ufS8ke2lkfWApLnVwZGF0ZSh7IHRlc3Q6IGFycmUgfSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IHRlc3RMb2dpYz1hc3luYyhkYXRhKT0+e1xyXG4gIGNvbnN0IHtpZCxhcnJlfSA9IGRhdGFcclxuICBhd2FpdCBkYi5kb2MoYCR7Y29sbGVjdGlvbn0vJHtpZH1gKS51cGRhdGUoeyBsb2dpY286IGFycmUgfSk7XHJcblxyXG59XHJcbmV4cG9ydCBjb25zdCBsZW5ndWFFeGFtID1hc3luYyhkYXRhKT0+e1xyXG4gIGNvbnN0IHtpZCxhcnJlfSA9IGRhdGFcclxuICBhd2FpdCBkYi5kb2MoYCR7Y29sbGVjdGlvbn0vJHtpZH1gKS51cGRhdGUoeyBsZW5ndWE6IGFycmUgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYXRlRXhhbSA9YXN5bmMoZGF0YSk9PntcclxuICBjb25zdCB7aWQsYXJyZX0gPSBkYXRhXHJcbiAgYXdhaXQgZGIuZG9jKGAke2NvbGxlY3Rpb259LyR7aWR9YCkudXBkYXRlKHsgbWF0ZW1hdGljbzogYXJyZSB9KTtcclxuXHJcbn1cclxuXHJcblxyXG4vL2ZpbmlzaCB0ZXN0XHJcbmV4cG9ydCBjb25zdCBtYXRlQ2FuY2VsID1hc3luYyhkYXRhKT0+e1xyXG4gIGF3YWl0IGRiLmRvYyhgJHtjb2xsZWN0aW9ufS8ke2RhdGEuaWR9YCkudXBkYXRlKHsgYWN0aXZlTWF0OiBmYWxzZSB9KTtcclxuXHJcbn1cclxuZXhwb3J0IGNvbnN0IGxvZ2lDYW5jZWwgPWFzeW5jKGRhdGEpPT57XHJcblxyXG4gIGF3YWl0IGRiLmRvYyhgJHtjb2xsZWN0aW9ufS8ke2RhdGEuaWR9YCkudXBkYXRlKHsgYWN0aXZlTG9naWM6IGZhbHNlIH0pO1xyXG59XHJcbmV4cG9ydCBjb25zdCBsZW5ndWFDYW5jZWwgPWFzeW5jKGRhdGEpPT57XHJcbiAgYXdhaXQgZGIuZG9jKGAke2NvbGxlY3Rpb259LyR7ZGF0YS5pZH1gKS51cGRhdGUoeyBhY3RpdmVMZW5ndWE6IGZhbHNlIH0pO1xyXG5cclxufVxyXG5leHBvcnQgY29uc3QgZXhhbUNhbmNlbCA9YXN5bmMoZGF0YSk9PntcclxuICBhd2FpdCBkYi5kb2MoYCR7Y29sbGVjdGlvbn0vJHtkYXRhLmlkfWApLnVwZGF0ZSh7IGFjdGl2ZUV4YW0xOiBmYWxzZSB9KTtcclxufVxyXG4vL2Rlc3Ryb3lcclxuZXhwb3J0IGNvbnN0IGFsbENhbmNlbCA9YXN5bmMoZGF0YSk9PntcclxuICBhd2FpdCBkYi5kb2MoYCR7Y29sbGVjdGlvbn0vJHtkYXRhLmlkfWApLnVwZGF0ZSh7XHJcbiAgICBhY3RpdmVMZW5ndWE6IGZhbHNlLFxyXG4gICAgYWN0aXZlTWF0OiBmYWxzZSxcclxuICAgIGFjdGl2ZUxvZ2ljOiBmYWxzZSxcclxuICAgIGFjdGl2ZUV4YW0xOiBmYWxzZSxcclxuICAgIHRpbWU6IDAsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKkdFVCBEQVRBIFVTRVIgKi9cclxuZXhwb3J0IGNvbnN0IGdldEluaXRpYWwgPSBhc3luYyAodWlkKT0+e1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBkYlxyXG4gICAgICAuY29sbGVjdGlvbihjb2xsZWN0aW9uKVxyXG4gICAgICAud2hlcmUoXCJ1c2VyXCIsIFwiPT1cIiwgdWlkKVxyXG4gICAgICAuZ2V0KCk7XHJcbiAgICByZXR1cm4geyBkYXRhOiBkYXRhPy5kb2NzWzBdPy5kYXRhKCkgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ091dCA9IGFzeW5jICgpPT57XHJcbiAgYXdhaXQgYXV0aC5zaWduT3V0KCk7XHJcbn0iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcbi8qXHJcbmNvbnN0IHtcclxuICAgIEZJUkVCQVNFX0FVVEhET01BSU4sXHJcbiAgICBGSVJFQkFTRV9EQVRBQkFTRSxcclxuICAgIEZJUkVCQVNFX1BST0pFQ1RfSUQsXHJcbiAgfSA9IHByb2Nlc3MuZW52O1xyXG4gIGNvbnN0IHtcclxuICAgIEZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxyXG4gICAgRklSRUJBU0VfU0VOREVSX0lELFxyXG4gICAgRklSRUJBU0VfQVBQX0lELFxyXG4gICAgRklSRUJBU0VfTUVOU1VSQUJMRSxcclxuICB9ID0gcHJvY2Vzcy5lbnY7Ki9cclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lEeGJsVU1Uc0E3RVFBR1YzY2dDY0dNb1l1YUJOMl9JaGtcIixcclxuICBhdXRoRG9tYWluOiBcInV0dC1leGFtZW4uZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly91dHQtZXhhbWVuLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgcHJvamVjdElkOiBcInV0dC1leGFtZW5cIixcclxuICBzdG9yYWdlQnVja2V0OiBcInV0dC1leGFtZW4uYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIxODg5ODU1MDA4NFwiLFxyXG4gIGFwcElkOiBcIjE6MTg4OTg1NTAwODQ6d2ViOmYzMzNiZWQ3ZDE5YzQ0NGIzNTZiMTFcIixcclxuICBtZWFzdXJlbWVudElkOiBcIkctRVpKQkdNTVQ1UlwiLFxyXG59O1xyXG5cclxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG59XHJcblxyXG5jb25zdCBhcHAgPSBmaXJlYmFzZS5hcHAoKTtcclxuY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcclxuY29uc3QgYXUgPSBmaXJlYmFzZS5hdXRoKCk7XHJcbmNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbmNvbnN0IG5vdyA9IGZpcmViYXNlLmZpcmVzdG9yZS5UaW1lc3RhbXAubm93KCk7XHJcbmNvbnN0IHN0b3JhZ2UgPSBmaXJlYmFzZS5zdG9yYWdlKCk7XHJcblxyXG5leHBvcnQgeyBhdXRoLCBkYiwgbm93LCBzdG9yYWdlLGF1IH07XHJcblxyXG4vKipcclxuICogIGFwaUtleTogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBJX0tFWSxcclxuICAgIGF1dGhEb21haW46IEZJUkVCQVNFX0FVVEhET01BSU4sXHJcbiAgICBkYXRhYmFzZVVSTDogRklSRUJBU0VfREFUQUJBU0UsXHJcbiAgICBwcm9qZWN0SWQ6IEZJUkVCQVNFX1BST0pFQ1RfSUQsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBGSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCxcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBGSVJFQkFTRV9TRU5ERVJfSUQsXHJcbiAgICBhcHBJZDogRklSRUJBU0VfQVBQX0lELFxyXG4gICAgbWVhc3VyZW1lbnRJZDogRklSRUJBU0VfTUVOU1VSQUJMRSxcclxuICovIiwiZXhwb3J0IGNvbnN0IGhvc3QgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xyXG5leHBvcnQgY29uc3QgY29sbGVjdGlvbiA9IFwiYWx1bW5vczNcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9zdG9yYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vdGlzdGFja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==