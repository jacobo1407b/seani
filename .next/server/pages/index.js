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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWNjaW9uL2FjY2lvbkFsdW1uby5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY2Npb24vYWNjaW9uVGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY2Npb24vYWNjaW9uVGltZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY2Npb24vYWNjaW9uVGlwZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY2Npb24vYWNjaW9uVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY2Npb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvYXBpLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2ZpcmViYXNlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3ZhcmlhYmxlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub3Rpc3RhY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiaW5kZXgiLCJ1c2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsInB1c2giLCJpc2xvYWRpbiIsInNldElzbG9hZGluIiwidXNlU3RhdGUiLCJmb3JtRHRhIiwic2V0Rm9ybUR0YSIsInBhc3N3b3JkIiwiZW1haWwiLCJlbnF1ZXVlU25hY2tiYXIiLCJ1c2VTbmFja2JhciIsImhhbmRsZXJDaGFuZ2UiLCJlIiwidmFsdWUiLCJuYW1lIiwidGFyZ2V0IiwiaGFuZGxlclN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidmFyaWFudCIsImxvZ0luIiwidGhlbiIsInJlc3BvbnNlIiwiYWNjaW9uVXNlciIsImRhdGEiLCJnZXRJbml0aWFsIiwidWlkIiwiYWNjaW9uQWx1bW5vIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInR5cGUiLCJwYXlsb2FkIiwiYWNjaW9uVGVzdCIsImFjY2lvblRpbWUiLCJhY2Npb25UaXBlIiwibXlIZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsInJhdyIsInRpcGUiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZWRpcmVjdCIsImF1dGgiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImdldFVzZXIiLCJmZXRjaCIsImhvc3QiLCJkYXQiLCJqc29uIiwib3BlblNvY2tldCIsImlkIiwidGltZSIsImRiIiwiZG9jIiwiY29sbGVjdGlvbiIsInVwZGF0ZSIsInRlc3RFeGFtIiwiYXJyZSIsInRlc3QiLCJ0ZXN0TG9naWMiLCJsb2dpY28iLCJsZW5ndWFFeGFtIiwibGVuZ3VhIiwibWF0ZUV4YW0iLCJtYXRlbWF0aWNvIiwibWF0ZUNhbmNlbCIsImFjdGl2ZU1hdCIsImxvZ2lDYW5jZWwiLCJhY3RpdmVMb2dpYyIsImxlbmd1YUNhbmNlbCIsImFjdGl2ZUxlbmd1YSIsImV4YW1DYW5jZWwiLCJhY3RpdmVFeGFtMSIsImFsbENhbmNlbCIsIndoZXJlIiwiZ2V0IiwiZG9jcyIsImxvZ091dCIsInNpZ25PdXQiLCJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiZmlyZWJhc2VDb25maWciLCJhcHAiLCJhdSIsImZpcmVzdG9yZSIsIm5vdyIsIlRpbWVzdGFtcCIsInN0b3JhZ2UiLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QSxNQUFNUSxVQUFVLEdBQUcsU0FBbkI7QUFDQSxNQUFNNkIsY0FBYyxHQUFHO0FBQzVCTyxRQUFNLEVBQUUseUNBRG9CO0FBRTVCQyxZQUFVLEVBQUUsNkJBRmdCO0FBRzVCQyxhQUFXLEVBQUUsb0NBSGU7QUFJNUJDLFdBQVMsRUFBRSxhQUppQjtBQUs1QkMsZUFBYSxFQUFFLHlCQUxhO0FBTTVCQyxtQkFBaUIsRUFBRSxjQU5TO0FBTzVCQyxPQUFLLEVBQUUsMkNBUHFCO0FBUTVCQyxlQUFhLEVBQUU7QUFSYSxDQUF2QixDOzs7Ozs7Ozs7OztBQ0ZQLCtEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzc1wiO1xyXG5pbXBvcnQgeyB1c2VTbmFja2JhciB9IGZyb20gXCJub3Rpc3RhY2tcIjtcclxuaW1wb3J0IHtsb2dJbixnZXRJbml0aWFsfSBmcm9tICcuLi91dGlscy9hcGknXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge3VzZURpc3BhdGNofSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7YWNjaW9uVXNlcixhY2Npb25BbHVtbm99IGZyb20gJy4uL3JlZHV4L2FjY2lvbidcclxuXHJcblxyXG5cclxuY29uc3QgaW5kZXggPSAoe3VzZXJ9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKHVzZXIpe1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2hvbWUnKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IFtpc2xvYWRpbiwgc2V0SXNsb2FkaW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtmb3JtRHRhLCBzZXRGb3JtRHRhXSA9IHVzZVN0YXRlKHsgcGFzc3dvcmQ6IFwiXCIsIGVtYWlsOiBcIlwiIH0pO1xyXG4gIGNvbnN0IHsgZW5xdWV1ZVNuYWNrYmFyIH0gPSB1c2VTbmFja2JhcigpO1xyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlckNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IHZhbHVlLCBuYW1lIH0gPSBlLnRhcmdldDtcclxuICAgIHNldEZvcm1EdGEoe1xyXG4gICAgICAuLi5mb3JtRHRhLFxyXG4gICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlclN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoIWZvcm1EdGEuZW1haWwgfHwgIWZvcm1EdGEucGFzc3dvcmQpIHtcclxuICAgICAgZW5xdWV1ZVNuYWNrYmFyKFwiQ29tcGxldGEgbG9zIGNhbXBvc1wiLCB7XHJcbiAgICAgICAgdmFyaWFudDogXCJlcnJvclwiLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc2V0SXNsb2FkaW4odHJ1ZSk7XHJcbiAgICBsb2dJbihmb3JtRHRhKS50aGVuKGFzeW5jIHJlc3BvbnNlPT57XHJcbiAgICAgIGRpc3BhdGNoKGFjY2lvblVzZXIocmVzcG9uc2UudXNlcikpXHJcbiAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGdldEluaXRpYWwocmVzcG9uc2UudXNlci51aWQpXHJcbiAgICAgIGRpc3BhdGNoKGFjY2lvbkFsdW1ubyh7ZGF0YX0pKVxyXG4gICAgICBzZXRJc2xvYWRpbihmYWxzZSk7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvaG9tZScpO1xyXG4gICAgfSkuY2F0Y2goZXJyPT57XHJcbiAgICAgIHNldElzbG9hZGluKGZhbHNlKTtcclxuICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIGVucXVldWVTbmFja2JhcihlcnIubWVzc2FnZSwge1xyXG4gICAgICAgICAgdmFyaWFudDogXCJlcnJvclwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5TRUFOSSBVVFQ8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbWl0ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItbG9naW4xMDBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXAtbG9naW4xMDBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4xMDAtcGljIGpzLXRpbHRcIiBkYXRhLXRpbHQ9XCJcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vY29sb3JsaWIuY29tL2V0Yy9sZi9Mb2dpbl92MS9pbWFnZXMvaW1nLTAxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiSU1HXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVyQ2hhbmdlfVxyXG4gICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlclN1Ym1pdH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9naW4xMDAtZm9ybVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ2luMTAwLWZvcm0tdGl0bGVcIj5Mb2dpbjwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcC1pbnB1dDEwMCB2YWxpZGF0ZS1pbnB1dFwiIGRhdGEtdmFsaWRhdGU9e251bGx9PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQxMDBcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9jdXMtaW5wdXQxMDBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwLWlucHV0MTAwIHZhbGlkYXRlLWlucHV0XCIgZGF0YS12YWxpZGF0ZT17bnVsbH0+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAvL2NsYXNzTmFtZT1cImlucHV0MTAwXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb2N1cy1pbnB1dDEwMFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1sb2dpbjEwMC1mb3JtLWJ0blwiPlxyXG4gICAgICAgICAgICAgIHtpc2xvYWRpbiA/IChcclxuICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsb2dpbjEwMC1mb3JtLWJ0blwiPkxvZ2luPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7IiwiZXhwb3J0IGNvbnN0IGFjY2lvbkFsdW1ubyA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBcIkFMVU1OT1wiLFxyXG4gICAgICBwYXlsb2FkOiBkYXRhLFxyXG4gICAgfTtcclxuICB9O1xyXG4gICIsImV4cG9ydCBjb25zdCBhY2Npb25UZXN0ID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IFwiVEVTVFwiLFxyXG4gICAgICBwYXlsb2FkOiBkYXRhLFxyXG4gICAgfTtcclxuICB9O1xyXG4gICIsImV4cG9ydCBjb25zdCBhY2Npb25UaW1lID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IFwiVElNRVwiLFxyXG4gICAgICBwYXlsb2FkOiBkYXRhLFxyXG4gICAgfTtcclxuICB9O1xyXG4gICIsImV4cG9ydCBjb25zdCBhY2Npb25UaXBlID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IFwiVElQRVwiLFxyXG4gICAgICBwYXlsb2FkOiBkYXRhLFxyXG4gICAgfTtcclxuICB9O1xyXG4gICIsImV4cG9ydCBjb25zdCBhY2Npb25Vc2VyID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IFwiVVNFUlwiLFxyXG4gICAgICBwYXlsb2FkOiBkYXRhLFxyXG4gICAgfTtcclxuICB9O1xyXG4gICIsImV4cG9ydCB7YWNjaW9uVGVzdH0gZnJvbSAnLi9hY2Npb25UZXN0JztcclxuZXhwb3J0IHthY2Npb25Vc2VyfSBmcm9tICcuL2FjY2lvblVzZXInO1xyXG5leHBvcnQge2FjY2lvblRpbWV9IGZyb20gJy4vYWNjaW9uVGltZSc7XHJcbmV4cG9ydCB7YWNjaW9uVGlwZX0gZnJvbSAnLi9hY2Npb25UaXBlJztcclxuZXhwb3J0IHthY2Npb25BbHVtbm99IGZyb20gJy4vYWNjaW9uQWx1bW5vJyIsImltcG9ydCB7IGhvc3QgLGNvbGxlY3Rpb259IGZyb20gXCIuL3ZhcmlhYmxlc1wiO1xyXG5pbXBvcnQge2RiLGF1dGh9IGZyb20gJy4vZmlyZWJhc2UnXHJcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcclxudmFyIG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbm15SGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4vL3ZhciByYXcgPSBKU09OLnN0cmluZ2lmeShyZXNwdWVzdGEudXNlcik7XHJcblxyXG5jb25zdCByYXcgPSAoZGF0YSwgdGlwZSkgPT4ge1xyXG4gIGlmICghdGlwZSkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgbWV0aG9kOiB0aXBlLFxyXG4gICAgaGVhZGVyczogbXlIZWFkZXJzLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICByZWRpcmVjdDogXCJmb2xsb3dcIixcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ0luID1hc3luYyAoZGF0YSk9PntcclxuICByZXR1cm4gYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChcclxuICAgIGRhdGEuZW1haWwsXHJcbiAgICBkYXRhLnBhc3N3b3JkXHJcbiAgKVxyXG59XHJcbi8vZ2V0IGluZm8gdXNlclxyXG5leHBvcnQgY29uc3QgZ2V0VXNlciA9KGRhdGEpPT57XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7aG9zdH0vYXBpL3VzZXJgLHJhdyhkYXRhLFwiUE9TVFwiKSkudGhlbihkYXQgPT5kYXQuanNvbigpKTtcclxufVxyXG4vL2FjdGl2ZSBzb2NrZXRcclxuZXhwb3J0IGNvbnN0IG9wZW5Tb2NrZXQ9YXN5bmMgKGRhdGEpPT57XHJcbiAgY29uc3Qge2lkLHRpbWV9ID0gZGF0YVxyXG4gIGF3YWl0IGRiLmRvYyhgJHtjb2xsZWN0aW9ufS8ke2lkfWApLnVwZGF0ZSh7XHJcbiAgICB0aW1lOnRpbWVcclxuICB9KTtcclxufVxyXG5cclxuXHJcbi8vIHVwZGF0ZSByZXNwb25zZSBvZiBhbHVtbm9cclxuZXhwb3J0IGNvbnN0IHRlc3RFeGFtID0gYXN5bmMoZGF0YSk9PntcclxuICBjb25zdCB7aWQsYXJyZX0gPSBkYXRhXHJcbiAgYXdhaXQgZGIuZG9jKGAke2NvbGxlY3Rpb259LyR7aWR9YCkudXBkYXRlKHsgdGVzdDogYXJyZSB9KTtcclxufVxyXG5leHBvcnQgY29uc3QgdGVzdExvZ2ljPWFzeW5jKGRhdGEpPT57XHJcbiAgY29uc3Qge2lkLGFycmV9ID0gZGF0YVxyXG4gIGF3YWl0IGRiLmRvYyhgJHtjb2xsZWN0aW9ufS8ke2lkfWApLnVwZGF0ZSh7IGxvZ2ljbzogYXJyZSB9KTtcclxuXHJcbn1cclxuZXhwb3J0IGNvbnN0IGxlbmd1YUV4YW0gPWFzeW5jKGRhdGEpPT57XHJcbiAgY29uc3Qge2lkLGFycmV9ID0gZGF0YVxyXG4gIGF3YWl0IGRiLmRvYyhgJHtjb2xsZWN0aW9ufS8ke2lkfWApLnVwZGF0ZSh7IGxlbmd1YTogYXJyZSB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1hdGVFeGFtID1hc3luYyhkYXRhKT0+e1xyXG4gIGNvbnN0IHtpZCxhcnJlfSA9IGRhdGFcclxuICBhd2FpdCBkYi5kb2MoYCR7Y29sbGVjdGlvbn0vJHtpZH1gKS51cGRhdGUoeyBtYXRlbWF0aWNvOiBhcnJlIH0pO1xyXG5cclxufVxyXG5cclxuXHJcbi8vZmluaXNoIHRlc3RcclxuZXhwb3J0IGNvbnN0IG1hdGVDYW5jZWwgPWFzeW5jKGRhdGEpPT57XHJcbiAgYXdhaXQgZGIuZG9jKGAke2NvbGxlY3Rpb259LyR7ZGF0YS5pZH1gKS51cGRhdGUoeyBhY3RpdmVNYXQ6IGZhbHNlIH0pO1xyXG5cclxufVxyXG5leHBvcnQgY29uc3QgbG9naUNhbmNlbCA9YXN5bmMoZGF0YSk9PntcclxuXHJcbiAgYXdhaXQgZGIuZG9jKGAke2NvbGxlY3Rpb259LyR7ZGF0YS5pZH1gKS51cGRhdGUoeyBhY3RpdmVMb2dpYzogZmFsc2UgfSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGxlbmd1YUNhbmNlbCA9YXN5bmMoZGF0YSk9PntcclxuICBhd2FpdCBkYi5kb2MoYCR7Y29sbGVjdGlvbn0vJHtkYXRhLmlkfWApLnVwZGF0ZSh7IGFjdGl2ZUxlbmd1YTogZmFsc2UgfSk7XHJcblxyXG59XHJcbmV4cG9ydCBjb25zdCBleGFtQ2FuY2VsID1hc3luYyhkYXRhKT0+e1xyXG4gIGF3YWl0IGRiLmRvYyhgJHtjb2xsZWN0aW9ufS8ke2RhdGEuaWR9YCkudXBkYXRlKHsgYWN0aXZlRXhhbTE6IGZhbHNlIH0pO1xyXG59XHJcbi8vZGVzdHJveVxyXG5leHBvcnQgY29uc3QgYWxsQ2FuY2VsID1hc3luYyhkYXRhKT0+e1xyXG4gIGF3YWl0IGRiLmRvYyhgJHtjb2xsZWN0aW9ufS8ke2RhdGEuaWR9YCkudXBkYXRlKHtcclxuICAgIGFjdGl2ZUxlbmd1YTogZmFsc2UsXHJcbiAgICBhY3RpdmVNYXQ6IGZhbHNlLFxyXG4gICAgYWN0aXZlTG9naWM6IGZhbHNlLFxyXG4gICAgYWN0aXZlRXhhbTE6IGZhbHNlLFxyXG4gICAgdGltZTogMCxcclxuICB9KTtcclxufVxyXG5cclxuLyoqR0VUIERBVEEgVVNFUiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0SW5pdGlhbCA9IGFzeW5jICh1aWQpPT57XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGRiXHJcbiAgICAgIC5jb2xsZWN0aW9uKGNvbGxlY3Rpb24pXHJcbiAgICAgIC53aGVyZShcInVzZXJcIiwgXCI9PVwiLCB1aWQpXHJcbiAgICAgIC5nZXQoKTtcclxuICAgIHJldHVybiB7IGRhdGE6IGRhdGE/LmRvY3NbMF0/LmRhdGEoKSB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9nT3V0ID0gYXN5bmMgKCk9PntcclxuICBhd2FpdCBhdXRoLnNpZ25PdXQoKTtcclxufSIsImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7ZmlyZWJhc2VDb25maWd9IGZyb20gJy4vdmFyaWFibGVzJ1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcblxyXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbn1cclxuXHJcbmNvbnN0IGFwcCA9IGZpcmViYXNlLmFwcCgpO1xyXG5jb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xyXG5jb25zdCBhdSA9IGZpcmViYXNlLmF1dGgoKTtcclxuY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuY29uc3Qgbm93ID0gZmlyZWJhc2UuZmlyZXN0b3JlLlRpbWVzdGFtcC5ub3coKTtcclxuY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcclxuXHJcbmV4cG9ydCB7IGF1dGgsIGRiLCBub3csIHN0b3JhZ2UsYXUgfTsiLCJleHBvcnQgY29uc3QgaG9zdCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XHJcbmV4cG9ydCBjb25zdCBjb2xsZWN0aW9uID0gXCJlMS0yMDIxXCI7XHJcbmV4cG9ydCBjb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5QXlpTGpOTUNkWDR2a0Jfa00wbjhEX0tFLXRXaHpHR2c0XCIsXHJcbiAgYXV0aERvbWFpbjogXCJzZWFuaS05NTRhYy5maXJlYmFzZWFwcC5jb21cIixcclxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL3NlYW5pLTk1NGFjLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgcHJvamVjdElkOiBcInNlYW5pLTk1NGFjXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJzZWFuaS05NTRhYy5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjgyMTQ2Mjg2Mjk4N1wiLFxyXG4gIGFwcElkOiBcIjE6ODIxNDYyODYyOTg3OndlYjo0MzMxMGI0YmJjOGI4NGYzNTRkODhlXCIsXHJcbiAgbWVhc3VyZW1lbnRJZDogXCJHLUVYQkZNUko4RjRcIixcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9maXJlc3RvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2Uvc3RvcmFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLWZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub3Rpc3RhY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=