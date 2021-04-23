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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Layout/Layout.jsx":
/*!***************************!*\
  !*** ./Layout/Layout.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Menu/Menu */ "./components/Menu/Menu.jsx");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/firebase */ "./utils/firebase.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/api */ "./utils/api.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_accion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/accion */ "./redux/accion/index.js");

var _jsxFileName = "C:\\proyectos\\next\\seani\\Layout\\Layout.jsx";







const Layout = ({
  children
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  _utils_firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].onAuthStateChanged(async currentUser => {
    if (currentUser) {
      dispatch(Object(_redux_accion__WEBPACK_IMPORTED_MODULE_6__["accionUser"])(currentUser));
      const {
        data
      } = await Object(_utils_api__WEBPACK_IMPORTED_MODULE_4__["getInitial"])(currentUser.uid); //console.log(alumno.data)

      dispatch(Object(_redux_accion__WEBPACK_IMPORTED_MODULE_6__["accionAlumno"])({
        data
      }));
    } else {
      dispatch(Object(_redux_accion__WEBPACK_IMPORTED_MODULE_6__["accionUser"])(null));
    }
  });
  const user2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => {
    var _state$user;

    return (_state$user = state.user) === null || _state$user === void 0 ? void 0 : _state$user.uid;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [user2 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }, undefined) : null, children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./assets/styles/index.css":
/*!*********************************!*\
  !*** ./assets/styles/index.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Menu/Menu.jsx":
/*!**********************************!*\
  !*** ./components/Menu/Menu.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_accion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/accion */ "./redux/accion/index.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.js");
/* harmony import */ var _Modal_ModalBasic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Modal/ModalBasic */ "./components/Modal/ModalBasic.jsx");
/* harmony import */ var _Modal_NoResponsive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Modal/NoResponsive */ "./components/Modal/NoResponsive.jsx");
/* harmony import */ var _Reloj_RelojLimit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Reloj/RelojLimit */ "./components/Reloj/RelojLimit.jsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/ExitToApp */ "@material-ui/icons/ExitToApp");
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "@material-ui/icons/MoreVert");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_17__);

var _jsxFileName = "C:\\proyectos\\next\\seani\\components\\Menu\\Menu.jsx";

















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["fade"])(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["fade"])(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

const MenuApp = () => {
  const classes = useStyles();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const user = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  const alumno = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.alumno);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null);
  const activeTest = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.activeTest);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const logout = async () => {
    Object(_utils_api__WEBPACK_IMPORTED_MODULE_5__["logOut"])();
    dispatch(Object(_redux_accion__WEBPACK_IMPORTED_MODULE_4__["accionUser"])({}));
    dispatch(Object(_redux_accion__WEBPACK_IMPORTED_MODULE_4__["accionAlumno"])({}));
    router.push('/');
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_15___default.a, {
    anchorEl: mobileMoreAnchorEl,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    id: mobileMenuId,
    keepMounted: true,
    transformOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    open: isMobileMenuOpen,
    onClose: handleMobileMenuClose,
    children: activeTest ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Modal_NoResponsive__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 8
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
      onClick: logout,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default.a, {
        "aria-label": "Exit app",
        color: "inherit",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_16___default.a, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Cerrar sesi\xF3n"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 5
  }, undefined); //<NotRes exitExam={null} examen={examen} />


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.grow,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_10___default.a, {
      position: "static",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11___default.a, {
        children: [activeTest ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default.a, {
          variant: "h6",
          noWrap: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Reloj_RelojLimit__WEBPACK_IMPORTED_MODULE_8__["default"], {
            user: user,
            alumno: alumno
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 13
        }, undefined) : "SEANI", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.grow
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.sectionDesktop,
          children: activeTest ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Modal_ModalBasic__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 15
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default.a, {
            edge: "end",
            "aria-label": "account of current user",
            "aria-haspopup": "true",
            onClick: logout,
            color: "inherit",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_16___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 17
            }, undefined), "Salir"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 15
          }, undefined) //<Exit exitExam={null} examen={examen} />

        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.sectionMobile,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default.a, {
            "aria-label": "show more",
            "aria-controls": mobileMenuId,
            "aria-haspopup": "true",
            onClick: handleMobileMenuOpen,
            color: "inherit",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_17___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }, undefined), renderMobileMenu]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 135,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MenuApp);

/***/ }),

/***/ "./components/Modal/ModalBasic.jsx":
/*!*****************************************!*\
  !*** ./components/Modal/ModalBasic.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_accion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/accion */ "./redux/accion/index.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.js");

var _jsxFileName = "C:\\proyectos\\next\\seani\\components\\Modal\\ModalBasic.jsx";








const Modal = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const typeTest = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.typeTest);
  const time = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.time);
  const user = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.user);

  const primer = () => {
    if (time > 0) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
        title: `¿Terminar módulo ${typeTest}?`,
        text: "No podras revertir esto",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si"
      }).then(result => {
        if (result.value) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: "¿Estas seguro?",
            text: "Tienes tiempo para revisar tu módulo",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si estoy totalmente seguro!"
          }).then(result => {
            if (result.value) {
              // localStorage.setItem('time', 0)
              switch (typeTest) {
                case "Pensamiento analítico":
                  //exam
                  Object(_utils_api__WEBPACK_IMPORTED_MODULE_7__["examCancel"])({
                    id: user === null || user === void 0 ? void 0 : user.uid
                  }).then(async () => {
                    const {
                      data
                    } = await Object(_utils_api__WEBPACK_IMPORTED_MODULE_7__["getInitial"])(user.uid);
                    dispatch(Object(_redux_accion__WEBPACK_IMPORTED_MODULE_6__["accionAlumno"])({
                      data
                    }));
                    router.push('/home');
                  });
                  break;

                case "Estructura de la lengua":
                  //lengua
                  Object(_utils_api__WEBPACK_IMPORTED_MODULE_7__["lenguaCancel"])({
                    id: user === null || user === void 0 ? void 0 : user.uid
                  }).then(async () => {
                    const {
                      data
                    } = await Object(_utils_api__WEBPACK_IMPORTED_MODULE_7__["getInitial"])(user.uid);
                    dispatch(Object(_redux_accion__WEBPACK_IMPORTED_MODULE_6__["accionAlumno"])({
                      data
                    }));
                    router.push('/home');
                  });
                  break;

                case "Comprensión lectora":
                  //logico
                  Object(_utils_api__WEBPACK_IMPORTED_MODULE_7__["logiCancel"])({
                    id: user === null || user === void 0 ? void 0 : user.uid
                  }).then(async () => {
                    const {
                      data
                    } = await Object(_utils_api__WEBPACK_IMPORTED_MODULE_7__["getInitial"])(user.uid);
                    dispatch(Object(_redux_accion__WEBPACK_IMPORTED_MODULE_6__["accionAlumno"])({
                      data
                    }));
                    router.push('/home');
                  });
                  break;

                case "Pensamiento matemático":
                  //mate
                  Object(_utils_api__WEBPACK_IMPORTED_MODULE_7__["mateCancel"])({
                    id: user === null || user === void 0 ? void 0 : user.uid
                  }).then(async () => {
                    const {
                      data
                    } = await Object(_utils_api__WEBPACK_IMPORTED_MODULE_7__["getInitial"])(user.uid);
                    dispatch(Object(_redux_accion__WEBPACK_IMPORTED_MODULE_6__["accionAlumno"])({
                      data
                    }));
                    router.push('/home');
                  });
                  break;

                default:
                  Object(_utils_api__WEBPACK_IMPORTED_MODULE_7__["examCancel"])({
                    id: user === null || user === void 0 ? void 0 : user.uid
                  }).then(async () => {
                    const {
                      data
                    } = await Object(_utils_api__WEBPACK_IMPORTED_MODULE_7__["getInitial"])(user.uid);
                    dispatch(Object(_redux_accion__WEBPACK_IMPORTED_MODULE_6__["accionAlumno"])({
                      data
                    }));
                    router.push('/home');
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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
      name: "Terminar examen",
      onClick: primer,
      className: "my-color"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);
/***
 *
 *
 *
 */

/***/ }),

/***/ "./components/Modal/NoResponsive.jsx":
/*!*******************************************!*\
  !*** ./components/Modal/NoResponsive.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Done */ "@material-ui/icons/Done");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_accion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/accion */ "./redux/accion/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.js");

var _jsxFileName = "C:\\proyectos\\next\\seani\\components\\Modal\\NoResponsive.jsx";










const NoResponsive = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const typeTest = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(state => state.typeTest);
  const time = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(state => state.time);
  const user = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(state => state.user);

  const primer = () => {
    if (time > 0) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
        title: `¿Terminar módulo ${typeTest}?`,
        text: "No podras revertir esto",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si"
      }).then(result => {
        if (result.value) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: "¿Estas seguro?",
            text: "Tienes tiempo para revisar tu módulo",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si estoy totalmente seguro!"
          }).then(result => {
            if (result.value) {
              switch (typeTest) {
                case "Pensamiento analítico":
                  //exam
                  Object(_utils_api__WEBPACK_IMPORTED_MODULE_9__["examCancel"])({
                    id: user === null || user === void 0 ? void 0 : user.uid
                  }).then(async () => {
                    const {
                      data
                    } = await Object(_utils_api__WEBPACK_IMPORTED_MODULE_9__["getInitial"])(user.uid);
                    dispatch(Object(_redux_accion__WEBPACK_IMPORTED_MODULE_7__["accionAlumno"])({
                      data
                    }));
                    router.push('/home');
                  });
                  break;

                case "Estructura de la lengua":
                  //lengia
                  Object(_utils_api__WEBPACK_IMPORTED_MODULE_9__["lenguaCancel"])({
                    id: user === null || user === void 0 ? void 0 : user.uid
                  }).then(async () => {
                    const {
                      data
                    } = await Object(_utils_api__WEBPACK_IMPORTED_MODULE_9__["getInitial"])(user.uid);
                    dispatch(Object(_redux_accion__WEBPACK_IMPORTED_MODULE_7__["accionAlumno"])({
                      data
                    }));
                    router.push('/home');
                  });
                  break;

                case "Comprensión lectora":
                  //logico
                  Object(_utils_api__WEBPACK_IMPORTED_MODULE_9__["logiCancel"])({
                    id: user === null || user === void 0 ? void 0 : user.uid
                  }).then(async () => {
                    const {
                      data
                    } = await Object(_utils_api__WEBPACK_IMPORTED_MODULE_9__["getInitial"])(user.uid);
                    dispatch(Object(_redux_accion__WEBPACK_IMPORTED_MODULE_7__["accionAlumno"])({
                      data
                    }));
                    router.push('/home');
                  });
                  break;

                case "Pensamiento matemático":
                  //mate
                  Object(_utils_api__WEBPACK_IMPORTED_MODULE_9__["mateCancel"])({
                    id: user === null || user === void 0 ? void 0 : user.uid
                  }).then(async () => {
                    const {
                      data
                    } = await Object(_utils_api__WEBPACK_IMPORTED_MODULE_9__["getInitial"])(user.uid);
                    dispatch(Object(_redux_accion__WEBPACK_IMPORTED_MODULE_7__["accionAlumno"])({
                      data
                    }));
                    router.push('/home');
                  });
                  break;

                default:
                  Object(_utils_api__WEBPACK_IMPORTED_MODULE_9__["examCancel"])({
                    id: user === null || user === void 0 ? void 0 : user.uid
                  }).then(async () => {
                    const {
                      data
                    } = await Object(_utils_api__WEBPACK_IMPORTED_MODULE_9__["getInitial"])(user.uid);
                    dispatch(Object(_redux_accion__WEBPACK_IMPORTED_MODULE_7__["accionAlumno"])({
                      data
                    }));
                    router.push('/home');
                  });
                  break;
              }
            }
          });
        }
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: primer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, {
      "aria-label": "Exit examen",
      color: "inherit",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_5___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Terminar Examen"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (NoResponsive);
/***
 *
 *
 */

/***/ }),

/***/ "./components/Reloj/RelojLimit.jsx":
/*!*****************************************!*\
  !*** ./components/Reloj/RelojLimit.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! notistack */ "notistack");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_accion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/accion */ "./redux/accion/index.js");
/* harmony import */ var _material_ui_icons_AccessAlarm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/AccessAlarm */ "@material-ui/icons/AccessAlarm");
/* harmony import */ var _material_ui_icons_AccessAlarm__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccessAlarm__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.js");


var _jsxFileName = "C:\\proyectos\\next\\seani\\components\\Reloj\\RelojLimit.jsx";








function RelojLimit({
  user,
  alumno
}) {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    console.log(`user ${user.uid} connect`);
    return () => console.log(`user ${user.uid} disconnect`);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TimerInternal, {
    user: user,
    alumno: alumno
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 10
  }, this);
}

function TimerInternal({
  user,
  alumno
}) {
  var _alumno$data;

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    enqueueSnackbar
  } = Object(notistack__WEBPACK_IMPORTED_MODULE_3__["useSnackbar"])();
  const {
    0: seconds,
    1: setSeconds
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(alumno === null || alumno === void 0 ? void 0 : (_alumno$data = alumno.data) === null || _alumno$data === void 0 ? void 0 : _alumno$data.time);
  const {
    0: timer,
    1: setTimer
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    h: null,
    m: null,
    s: null
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let interval = null;

    if (seconds === 900) {
      enqueueSnackbar("Quedan 15 minutos para finalizar", {
        variant: "warning"
      });
    }

    if (seconds === 0) {
      enqueueSnackbar("El tiempo para realizar tu examen finalizo", {
        variant: "info"
      });
      setSeconds(0);
      dispatch(Object(_redux_accion__WEBPACK_IMPORTED_MODULE_5__["accionTime"])(0));
      setTimer({
        s: 0,
        h: 0,
        m: 0
      });
      Object(_utils_api__WEBPACK_IMPORTED_MODULE_7__["openSocket"])({
        id: user.uid,
        time: seconds
      });
      Object(_utils_api__WEBPACK_IMPORTED_MODULE_7__["allCancel"])({
        id: user === null || user === void 0 ? void 0 : user.uid
      }).then(async () => {
        const {
          data
        } = await Object(_utils_api__WEBPACK_IMPORTED_MODULE_7__["getInitial"])(user.uid);
        dispatch(Object(_redux_accion__WEBPACK_IMPORTED_MODULE_5__["accionAlumno"])({
          data
        }));
        router.push("/home");
      });
    } else {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
      dispatch(Object(_redux_accion__WEBPACK_IMPORTED_MODULE_5__["accionTime"])(seconds));
      setTimer({
        s: Math.round(seconds % 0x3c),
        h: Math.floor(seconds / 0xe10),
        m: Math.floor(seconds / 0x3c) % 0x3c
      });
      Object(_utils_api__WEBPACK_IMPORTED_MODULE_7__["openSocket"])({
        id: user.uid,
        time: seconds
      });
    }

    return () => clearInterval(interval);
  }, [seconds]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_AccessAlarm__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this), `${timer.h}H ${timer.m} M ${timer.s}S`]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (RelojLimit);

/***/ }),

/***/ "./node_modules/materialize-css/dist/css/materialize.css":
/*!***************************************************************!*\
  !*** ./node_modules/materialize-css/dist/css/materialize.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/semantic-ui-css/semantic.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/semantic-ui-css/semantic.min.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! notistack */ "notistack");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Layout/Layout */ "./Layout/Layout.jsx");
/* harmony import */ var materialize_css_dist_css_materialize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! materialize-css/dist/css/materialize.css */ "./node_modules/materialize-css/dist/css/materialize.css");
/* harmony import */ var materialize_css_dist_css_materialize_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(materialize_css_dist_css_materialize_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_styles_index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/styles/index.css */ "./assets/styles/index.css");
/* harmony import */ var _assets_styles_index_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_index_css__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\proyectos\\next\\seani\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(notistack__WEBPACK_IMPORTED_MODULE_4__["SnackbarProvider"], {
      maxSnack: 3,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

const makeStore = () => _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"];

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default()(makeStore)(MyApp));
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

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  user: {},
  alumno: {},
  rejoj: {},
  activeTest: false,
  time: 0,
  typeTest: ""
};

function updateState(state = initialState, action) {
  switch (action.type) {
    case "USER":
      return _objectSpread(_objectSpread({}, state), {}, {
        user: action.payload
      });

    case "ALUMNO":
      return _objectSpread(_objectSpread({}, state), {}, {
        alumno: action.payload
      });

    case "TIPE":
      return _objectSpread(_objectSpread({}, state), {}, {
        typeTest: action.payload
      });

    case "TIME":
      return _objectSpread(_objectSpread({}, state), {}, {
        time: action.payload
      });

    case "TEST":
      return _objectSpread(_objectSpread({}, state), {}, {
        activeTest: action.payload
      });

    default:
      return _objectSpread({}, state);
  }
  /**
   * return state;
   */

}
/*
const makeStore = (initialState = exampleInitialState) => createStore(
 reducer,
 initialState,
 composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

export default makeStore;*/


const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(updateState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])() //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* harmony default export */ __webpack_exports__["default"] = (store);

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

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/AccessAlarm":
/*!*************************************************!*\
  !*** external "@material-ui/icons/AccessAlarm" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccessAlarm");

/***/ }),

/***/ "@material-ui/icons/Done":
/*!******************************************!*\
  !*** external "@material-ui/icons/Done" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Done");

/***/ }),

/***/ "@material-ui/icons/ExitToApp":
/*!***********************************************!*\
  !*** external "@material-ui/icons/ExitToApp" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExitToApp");

/***/ }),

/***/ "@material-ui/icons/MoreVert":
/*!**********************************************!*\
  !*** external "@material-ui/icons/MoreVert" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreVert");

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

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

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

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vTGF5b3V0L0xheW91dC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZW51L01lbnUuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTW9kYWwvTW9kYWxCYXNpYy5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2RhbC9Ob1Jlc3BvbnNpdmUuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVsb2ovUmVsb2pMaW1pdC5qc3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY2Npb24vYWNjaW9uQWx1bW5vLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjY2lvbi9hY2Npb25UZXN0LmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjY2lvbi9hY2Npb25UaW1lLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjY2lvbi9hY2Npb25UaXBlLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjY2lvbi9hY2Npb25Vc2VyLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjY2lvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZmlyZWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdmFyaWFibGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9BY2Nlc3NBbGFybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Eb25lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4aXRUb0FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3JlVmVydFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2F1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm90aXN0YWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd2VldGFsZXJ0MlwiIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJjdXJyZW50VXNlciIsImFjY2lvblVzZXIiLCJkYXRhIiwiZ2V0SW5pdGlhbCIsInVpZCIsImFjY2lvbkFsdW1ubyIsInVzZXIyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJncm93IiwiZmxleEdyb3ciLCJtZW51QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwidGl0bGUiLCJkaXNwbGF5IiwiYnJlYWtwb2ludHMiLCJ1cCIsInNlYXJjaCIsInBvc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwic2hhcGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmYWRlIiwicGFsZXR0ZSIsImNvbW1vbiIsIndoaXRlIiwibWFyZ2luTGVmdCIsIndpZHRoIiwic2VhcmNoSWNvbiIsInBhZGRpbmciLCJoZWlnaHQiLCJwb2ludGVyRXZlbnRzIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaW5wdXRSb290IiwiY29sb3IiLCJpbnB1dElucHV0IiwicGFkZGluZ0xlZnQiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJzZWN0aW9uRGVza3RvcCIsInNlY3Rpb25Nb2JpbGUiLCJNZW51QXBwIiwiY2xhc3NlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImFsdW1ubyIsIm1vYmlsZU1vcmVBbmNob3JFbCIsInNldE1vYmlsZU1vcmVBbmNob3JFbCIsIlJlYWN0IiwidXNlU3RhdGUiLCJhY3RpdmVUZXN0IiwiaXNNb2JpbGVNZW51T3BlbiIsIkJvb2xlYW4iLCJsb2dvdXQiLCJsb2dPdXQiLCJwdXNoIiwiaGFuZGxlTW9iaWxlTWVudUNsb3NlIiwiaGFuZGxlTW9iaWxlTWVudU9wZW4iLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJtb2JpbGVNZW51SWQiLCJyZW5kZXJNb2JpbGVNZW51IiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiTW9kYWwiLCJ0eXBlVGVzdCIsInRpbWUiLCJwcmltZXIiLCJTd2FsIiwiZmlyZSIsInRleHQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0IiwidmFsdWUiLCJleGFtQ2FuY2VsIiwiaWQiLCJsZW5ndWFDYW5jZWwiLCJsb2dpQ2FuY2VsIiwibWF0ZUNhbmNlbCIsIk5vUmVzcG9uc2l2ZSIsIlJlbG9qTGltaXQiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiVGltZXJJbnRlcm5hbCIsImVucXVldWVTbmFja2JhciIsInVzZVNuYWNrYmFyIiwic2Vjb25kcyIsInNldFNlY29uZHMiLCJ0aW1lciIsInNldFRpbWVyIiwiaCIsIm0iLCJzIiwiaW50ZXJ2YWwiLCJ2YXJpYW50IiwiYWNjaW9uVGltZSIsIm9wZW5Tb2NrZXQiLCJhbGxDYW5jZWwiLCJzZXRJbnRlcnZhbCIsIk1hdGgiLCJyb3VuZCIsImZsb29yIiwiY2xlYXJJbnRlcnZhbCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJtYWtlU3RvcmUiLCJ3aXRoUmVkdXgiLCJ0eXBlIiwicGF5bG9hZCIsImFjY2lvblRlc3QiLCJhY2Npb25UaXBlIiwiaW5pdGlhbFN0YXRlIiwicmVqb2oiLCJ1cGRhdGVTdGF0ZSIsImFjdGlvbiIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsIm15SGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJyYXciLCJ0aXBlIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVkaXJlY3QiLCJsb2dJbiIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZW1haWwiLCJwYXNzd29yZCIsImdldFVzZXIiLCJmZXRjaCIsImhvc3QiLCJkYXQiLCJqc29uIiwiZGIiLCJkb2MiLCJjb2xsZWN0aW9uIiwidXBkYXRlIiwidGVzdEV4YW0iLCJhcnJlIiwidGVzdCIsInRlc3RMb2dpYyIsImxvZ2ljbyIsImxlbmd1YUV4YW0iLCJsZW5ndWEiLCJtYXRlRXhhbSIsIm1hdGVtYXRpY28iLCJhY3RpdmVNYXQiLCJhY3RpdmVMb2dpYyIsImFjdGl2ZUxlbmd1YSIsImFjdGl2ZUV4YW0xIiwid2hlcmUiLCJnZXQiLCJkb2NzIiwic2lnbk91dCIsImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJmaXJlYmFzZUNvbmZpZyIsImFwcCIsImF1IiwiZmlyZXN0b3JlIiwibm93IiwiVGltZXN0YW1wIiwic3RvcmFnZSIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVB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Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE1lbnVCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51L01lbnUnO1xyXG5pbXBvcnQge2F1dGggfSBmcm9tICcuLi91dGlscy9maXJlYmFzZSc7XHJcbmltcG9ydCB7Z2V0SW5pdGlhbH0gZnJvbSAnLi4vdXRpbHMvYXBpJ1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLHVzZVNlbGVjdG9yfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7YWNjaW9uVXNlcixhY2Npb25BbHVtbm99IGZyb20gJy4uL3JlZHV4L2FjY2lvbidcclxuY29uc3QgTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZChhc3luYyhjdXJyZW50VXNlcik9PntcclxuICAgICAgICBpZihjdXJyZW50VXNlcil7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGFjY2lvblVzZXIoY3VycmVudFVzZXIpKVxyXG4gICAgICAgICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBnZXRJbml0aWFsKGN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhhbHVtbm8uZGF0YSlcclxuICAgICAgICAgICAgZGlzcGF0Y2goYWNjaW9uQWx1bW5vKHtkYXRhfSkpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGFjY2lvblVzZXIobnVsbCkpXHJcbiAgICAgICAgfSAgXHJcbiAgICB9KVxyXG4gICAgY29uc3QgdXNlcjIgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyPy51aWQpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHt1c2VyMj8oPE1lbnVCYXIvPik6bnVsbH1cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3Rvcix1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7YWNjaW9uQWx1bW5vLGFjY2lvblVzZXJ9IGZyb20gJy4uLy4uL3JlZHV4L2FjY2lvbidcclxuaW1wb3J0IHtsb2dPdXR9IGZyb20gJy4uLy4uL3V0aWxzL2FwaSdcclxuaW1wb3J0IEV4aXQgZnJvbSBcIi4uL01vZGFsL01vZGFsQmFzaWNcIjtcclxuaW1wb3J0IE5vdFJlcyBmcm9tIFwiLi4vTW9kYWwvTm9SZXNwb25zaXZlXCI7XHJcbmltcG9ydCBSZWxvaiBmcm9tIFwiLi4vUmVsb2ovUmVsb2pMaW1pdFwiO1xyXG5cclxuaW1wb3J0IHsgZmFkZSwgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCI7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcblxyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51XCI7XHJcbmltcG9ydCBFeGl0VG9BcHBJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhpdFRvQXBwXCI7XHJcbmltcG9ydCBNb3JlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0XCI7XHJcblxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgZ3Jvdzoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBtZW51QnV0dG9uOiB7XHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VhcmNoOiB7XHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUodGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsIDAuMTUpLFxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLCAwLjI1KSxcclxuICAgIH0sXHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIG1hcmdpbkxlZnQ6IDAsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlYXJjaEljb246IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMiksXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgfSxcclxuICBpbnB1dFJvb3Q6IHtcclxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcclxuICB9LFxyXG4gIGlucHV0SW5wdXQ6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSwgMSwgMSwgMCksXHJcbiAgICAvLyB2ZXJ0aWNhbCBwYWRkaW5nICsgZm9udCBzaXplIGZyb20gc2VhcmNoSWNvblxyXG4gICAgcGFkZGluZ0xlZnQ6IGBjYWxjKDFlbSArICR7dGhlbWUuc3BhY2luZyg0KX1weClgLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwid2lkdGhcIiksXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuICAgICAgd2lkdGg6IFwiMjBjaFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY3Rpb25EZXNrdG9wOiB7XHJcbiAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWN0aW9uTW9iaWxlOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xyXG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgTWVudUFwcCA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IGFsdW1ubyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmFsdW1ubylcclxuICBjb25zdCBbbW9iaWxlTW9yZUFuY2hvckVsLCBzZXRNb2JpbGVNb3JlQW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgYWN0aXZlVGVzdCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWN0aXZlVGVzdCk7XHJcbiAgY29uc3QgaXNNb2JpbGVNZW51T3BlbiA9IEJvb2xlYW4obW9iaWxlTW9yZUFuY2hvckVsKTtcclxuICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBsb2dPdXQoKVxyXG4gICAgZGlzcGF0Y2goYWNjaW9uVXNlcih7fSkpO1xyXG4gICAgZGlzcGF0Y2goYWNjaW9uQWx1bW5vKHt9KSk7XHJcbiAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVNb2JpbGVNZW51Q2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2JpbGVNb3JlQW5jaG9yRWwobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW9iaWxlTWVudU9wZW4gPSAoZXZlbnQpID0+IHtcclxuICAgIHNldE1vYmlsZU1vcmVBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBtb2JpbGVNZW51SWQgPSBcInByaW1hcnktc2VhcmNoLWFjY291bnQtbWVudS1tb2JpbGVcIjtcclxuICBjb25zdCByZW5kZXJNb2JpbGVNZW51ID0gKFxyXG4gICAgPE1lbnVcclxuICAgICAgYW5jaG9yRWw9e21vYmlsZU1vcmVBbmNob3JFbH1cclxuICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiBcInRvcFwiLCBob3Jpem9udGFsOiBcInJpZ2h0XCIgfX1cclxuICAgICAgaWQ9e21vYmlsZU1lbnVJZH1cclxuICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7IHZlcnRpY2FsOiBcInRvcFwiLCBob3Jpem9udGFsOiBcInJpZ2h0XCIgfX1cclxuICAgICAgb3Blbj17aXNNb2JpbGVNZW51T3Blbn1cclxuICAgICAgb25DbG9zZT17aGFuZGxlTW9iaWxlTWVudUNsb3NlfVxyXG4gICAgPlxyXG4gICAgICB7YWN0aXZlVGVzdCA/IChcclxuICAgICAgIDxOb3RSZXMvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtsb2dvdXR9PlxyXG4gICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cIkV4aXQgYXBwXCIgY29sb3I9XCJpbmhlcml0XCI+XHJcbiAgICAgICAgICAgIDxFeGl0VG9BcHBJY29uIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8cD5DZXJyYXIgc2VzacOzbjwvcD5cclxuICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICApfVxyXG4gICAgPC9NZW51PlxyXG4gICk7XHJcbiAgLy88Tm90UmVzIGV4aXRFeGFtPXtudWxsfSBleGFtZW49e2V4YW1lbn0gLz5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ3Jvd30+XHJcbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIj5cclxuICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgIHthY3RpdmVUZXN0ID8gKFxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBub1dyYXA+XHJcbiAgICAgICAgICAgICAgPFJlbG9qIHVzZXI9e3VzZXJ9IGFsdW1ubz17YWx1bW5vfS8+XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIFwiU0VBTklcIlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyb3d9IC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uRGVza3RvcH0+XHJcbiAgICAgICAgICAgIHthY3RpdmVUZXN0ID8gKFxyXG4gICAgICAgICAgICAgIDxFeGl0Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgZWRnZT1cImVuZFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiYWNjb3VudCBvZiBjdXJyZW50IHVzZXJcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17bG9nb3V0fVxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RXhpdFRvQXBwSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgU2FsaXJcclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgLy88RXhpdCBleGl0RXhhbT17bnVsbH0gZXhhbWVuPXtleGFtZW59IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25Nb2JpbGV9PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJzaG93IG1vcmVcIlxyXG4gICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9e21vYmlsZU1lbnVJZH1cclxuICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTW9iaWxlTWVudU9wZW59XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNb3JlSWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgICB7cmVuZGVyTW9iaWxlTWVudX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51QXBwO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFN3YWwgZnJvbSBcInN3ZWV0YWxlcnQyXCI7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcix1c2VEaXNwYXRjaH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge2FjY2lvbkFsdW1ub30gZnJvbSAnLi4vLi4vcmVkdXgvYWNjaW9uJ1xyXG5pbXBvcnQge21hdGVDYW5jZWwsbG9naUNhbmNlbCxsZW5ndWFDYW5jZWwsZXhhbUNhbmNlbCxnZXRJbml0aWFsfSBmcm9tICcuLi8uLi91dGlscy9hcGknO1xyXG5cclxuXHJcbmNvbnN0IE1vZGFsID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB0eXBlVGVzdCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnR5cGVUZXN0KTtcclxuICBjb25zdCB0aW1lID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudGltZSk7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IHByaW1lciA9ICgpID0+IHtcclxuICAgIGlmICh0aW1lID4gMCkge1xyXG4gICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgIHRpdGxlOiBgwr9UZXJtaW5hciBtw7NkdWxvICR7dHlwZVRlc3R9P2AsXHJcbiAgICAgICAgdGV4dDogXCJObyBwb2RyYXMgcmV2ZXJ0aXIgZXN0b1wiLFxyXG4gICAgICAgIGljb246IFwid2FybmluZ1wiLFxyXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiMzMDg1ZDZcIixcclxuICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogXCIjZDMzXCIsXHJcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiU2lcIixcclxuICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiwr9Fc3RhcyBzZWd1cm8/XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiVGllbmVzIHRpZW1wbyBwYXJhIHJldmlzYXIgdHUgbcOzZHVsb1wiLFxyXG4gICAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiMzMDg1ZDZcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6IFwiI2QzM1wiLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJTaSBlc3RveSB0b3RhbG1lbnRlIHNlZ3VybyFcIixcclxuICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RpbWUnLCAwKVxyXG4gICAgICAgICAgICAgIHN3aXRjaCAodHlwZVRlc3QpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJQZW5zYW1pZW50byBhbmFsw610aWNvXCI6XHJcbiAgICAgICAgICAgICAgICAgIC8vZXhhbVxyXG4gICAgICAgICAgICAgICAgICBleGFtQ2FuY2VsKHtpZDp1c2VyPy51aWR9KS50aGVuKGFzeW5jICgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgZ2V0SW5pdGlhbCh1c2VyLnVpZClcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChhY2Npb25BbHVtbm8oe2RhdGF9KSlcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2hvbWUnKVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJFc3RydWN0dXJhIGRlIGxhIGxlbmd1YVwiOlxyXG4gICAgICAgICAgICAgICAgICAvL2xlbmd1YVxyXG4gICAgICAgICAgICAgICAgICBsZW5ndWFDYW5jZWwoe2lkOnVzZXI/LnVpZH0pLnRoZW4oYXN5bmMgKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBnZXRJbml0aWFsKHVzZXIudWlkKVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGFjY2lvbkFsdW1ubyh7ZGF0YX0pKVxyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvaG9tZScpXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkNvbXByZW5zacOzbiBsZWN0b3JhXCI6XHJcbiAgICAgICAgICAgICAgICAgIC8vbG9naWNvXHJcbiAgICAgICAgICAgICAgICAgIGxvZ2lDYW5jZWwoe2lkOnVzZXI/LnVpZH0pLnRoZW4oYXN5bmMgKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBnZXRJbml0aWFsKHVzZXIudWlkKVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGFjY2lvbkFsdW1ubyh7ZGF0YX0pKVxyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvaG9tZScpXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJQZW5zYW1pZW50byBtYXRlbcOhdGljb1wiOlxyXG4gICAgICAgICAgICAgICAgICAvL21hdGVcclxuICAgICAgICAgICAgICAgICAgbWF0ZUNhbmNlbCh7aWQ6dXNlcj8udWlkfSkudGhlbihhc3luYyAoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGdldEluaXRpYWwodXNlci51aWQpXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goYWNjaW9uQWx1bW5vKHtkYXRhfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9ob21lJylcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgZXhhbUNhbmNlbCh7aWQ6dXNlcj8udWlkfSkudGhlbihhc3luYygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgZ2V0SW5pdGlhbCh1c2VyLnVpZClcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChhY2Npb25BbHVtbm8oe2RhdGF9KSlcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2hvbWUnKVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE1lbnUuSXRlbSBuYW1lPVwiVGVybWluYXIgZXhhbWVuXCIgb25DbGljaz17cHJpbWVyfSBjbGFzc05hbWU9XCJteS1jb2xvclwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XHJcblxyXG4vKioqXHJcbiAqXHJcbiAqXHJcbiAqXHJcbiAqL1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIjtcclxuaW1wb3J0IERvbmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRG9uZVwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQge2FjY2lvbkFsdW1ub30gZnJvbSAnLi4vLi4vcmVkdXgvYWNjaW9uJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3Rvcix1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7XHJcbiAgbWF0ZUNhbmNlbCxcclxuICBsb2dpQ2FuY2VsLFxyXG4gIGxlbmd1YUNhbmNlbCxcclxuICBleGFtQ2FuY2VsLFxyXG4gIGdldEluaXRpYWxcclxufSBmcm9tIFwiLi4vLi4vdXRpbHMvYXBpXCI7XHJcblxyXG5jb25zdCBOb1Jlc3BvbnNpdmUgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgdHlwZVRlc3QgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnR5cGVUZXN0KTtcclxuICBjb25zdCB0aW1lID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50aW1lKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgY29uc3QgcHJpbWVyID0gKCkgPT4ge1xyXG4gICAgaWYgKHRpbWUgPiAwKSB7XHJcbiAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgdGl0bGU6IGDCv1Rlcm1pbmFyIG3Ds2R1bG8gJHt0eXBlVGVzdH0/YCxcclxuICAgICAgICB0ZXh0OiBcIk5vIHBvZHJhcyByZXZlcnRpciBlc3RvXCIsXHJcbiAgICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzMwODVkNlwiLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiBcIiNkMzNcIixcclxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJTaVwiLFxyXG4gICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCLCv0VzdGFzIHNlZ3Vybz9cIixcclxuICAgICAgICAgICAgdGV4dDogXCJUaWVuZXMgdGllbXBvIHBhcmEgcmV2aXNhciB0dSBtw7NkdWxvXCIsXHJcbiAgICAgICAgICAgIGljb246IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzMwODVkNlwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogXCIjZDMzXCIsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIlNpIGVzdG95IHRvdGFsbWVudGUgc2VndXJvIVwiLFxyXG4gICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGVUZXN0KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiUGVuc2FtaWVudG8gYW5hbMOtdGljb1wiOlxyXG4gICAgICAgICAgICAgICAgICAvL2V4YW1cclxuICAgICAgICAgICAgICAgICAgZXhhbUNhbmNlbCh7IGlkOiB1c2VyPy51aWQgfSkudGhlbihhc3luYygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBnZXRJbml0aWFsKHVzZXIudWlkKVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGFjY2lvbkFsdW1ubyh7ZGF0YX0pKVxyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvaG9tZScpXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJFc3RydWN0dXJhIGRlIGxhIGxlbmd1YVwiOlxyXG4gICAgICAgICAgICAgICAgICAvL2xlbmdpYVxyXG4gICAgICAgICAgICAgICAgICBsZW5ndWFDYW5jZWwoeyBpZDogdXNlcj8udWlkIH0pLnRoZW4oYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgZ2V0SW5pdGlhbCh1c2VyLnVpZClcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChhY2Npb25BbHVtbm8oe2RhdGF9KSlcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2hvbWUnKVxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQ29tcHJlbnNpw7NuIGxlY3RvcmFcIjpcclxuICAgICAgICAgICAgICAgICAgLy9sb2dpY29cclxuICAgICAgICAgICAgICAgICAgbG9naUNhbmNlbCh7IGlkOiB1c2VyPy51aWQgfSkudGhlbihhc3luYygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBnZXRJbml0aWFsKHVzZXIudWlkKVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGFjY2lvbkFsdW1ubyh7ZGF0YX0pKVxyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvaG9tZScpXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJQZW5zYW1pZW50byBtYXRlbcOhdGljb1wiOlxyXG4gICAgICAgICAgICAgICAgICAvL21hdGVcclxuICAgICAgICAgICAgICAgICAgbWF0ZUNhbmNlbCh7IGlkOiB1c2VyPy51aWQgfSkudGhlbihhc3luYygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBnZXRJbml0aWFsKHVzZXIudWlkKVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGFjY2lvbkFsdW1ubyh7ZGF0YX0pKVxyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvaG9tZScpXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICBleGFtQ2FuY2VsKHsgaWQ6IHVzZXI/LnVpZCB9KS50aGVuKGFzeW5jKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGdldEluaXRpYWwodXNlci51aWQpXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goYWNjaW9uQWx1bW5vKHtkYXRhfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9ob21lJylcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWVudUl0ZW0gb25DbGljaz17cHJpbWVyfT5cclxuICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cIkV4aXQgZXhhbWVuXCIgY29sb3I9XCJpbmhlcml0XCI+XHJcbiAgICAgICAgPERvbmVJY29uIC8+XHJcbiAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgPHA+VGVybWluYXIgRXhhbWVuPC9wPlxyXG4gICAgPC9NZW51SXRlbT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm9SZXNwb25zaXZlO1xyXG4vKioqXHJcbiAqXHJcbiAqXHJcbiAqL1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU25hY2tiYXIgfSBmcm9tIFwibm90aXN0YWNrXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGFjY2lvblRpbWUsIGFjY2lvbkFsdW1ubyB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY2Npb25cIjtcclxuaW1wb3J0IEFjY2Vzc0FsYXJtSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FjY2Vzc0FsYXJtXCI7XHJcbmltcG9ydCB7IGFsbENhbmNlbCwgb3BlblNvY2tldCwgZ2V0SW5pdGlhbCB9IGZyb20gXCIuLi8uLi91dGlscy9hcGlcIjtcclxuXHJcbmZ1bmN0aW9uIFJlbG9qTGltaXQoeyB1c2VyLCBhbHVtbm8gfSkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgdXNlciAke3VzZXIudWlkfSBjb25uZWN0YCk7XHJcbiAgICByZXR1cm4gKCkgPT4gY29uc29sZS5sb2coYHVzZXIgJHt1c2VyLnVpZH0gZGlzY29ubmVjdGApO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gPFRpbWVySW50ZXJuYWwgdXNlcj17dXNlcn0gYWx1bW5vPXthbHVtbm99IC8+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBUaW1lckludGVybmFsKHsgdXNlciwgYWx1bW5vIH0pIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBlbnF1ZXVlU25hY2tiYXIgfSA9IHVzZVNuYWNrYmFyKCk7XHJcbiAgY29uc3QgW3NlY29uZHMsIHNldFNlY29uZHNdID0gdXNlU3RhdGUoYWx1bW5vPy5kYXRhPy50aW1lKTtcclxuICBjb25zdCBbdGltZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlKHsgaDogbnVsbCwgbTogbnVsbCwgczogbnVsbCB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpbnRlcnZhbCA9IG51bGw7XHJcbiAgICBpZiAoc2Vjb25kcyA9PT0gOTAwKSB7XHJcbiAgICAgIGVucXVldWVTbmFja2JhcihcIlF1ZWRhbiAxNSBtaW51dG9zIHBhcmEgZmluYWxpemFyXCIsIHtcclxuICAgICAgICB2YXJpYW50OiBcIndhcm5pbmdcIixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc2Vjb25kcyA9PT0gMCkge1xyXG4gICAgICBlbnF1ZXVlU25hY2tiYXIoXCJFbCB0aWVtcG8gcGFyYSByZWFsaXphciB0dSBleGFtZW4gZmluYWxpem9cIiwge1xyXG4gICAgICAgIHZhcmlhbnQ6IFwiaW5mb1wiLFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0U2Vjb25kcygwKTtcclxuICAgICAgZGlzcGF0Y2goYWNjaW9uVGltZSgwKSk7XHJcbiAgICAgIHNldFRpbWVyKHtcclxuICAgICAgICBzOiAwLFxyXG4gICAgICAgIGg6IDAsXHJcbiAgICAgICAgbTogMCxcclxuICAgICAgfSk7XHJcbiAgICAgIG9wZW5Tb2NrZXQoeyBpZDogdXNlci51aWQsIHRpbWU6IHNlY29uZHMgfSk7XHJcbiAgICAgIGFsbENhbmNlbCh7IGlkOiB1c2VyPy51aWQgfSkudGhlbihhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBnZXRJbml0aWFsKHVzZXIudWlkKTtcclxuICAgICAgICBkaXNwYXRjaChhY2Npb25BbHVtbm8oeyBkYXRhIH0pKTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9ob21lXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHNldFNlY29uZHMoKHNlY29uZHMpID0+IHNlY29uZHMgLSAxKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICAgIGRpc3BhdGNoKGFjY2lvblRpbWUoc2Vjb25kcykpO1xyXG4gICAgICBzZXRUaW1lcih7XHJcbiAgICAgICAgczogTWF0aC5yb3VuZChzZWNvbmRzICUgMHgzYyksXHJcbiAgICAgICAgaDogTWF0aC5mbG9vcihzZWNvbmRzIC8gMHhlMTApLFxyXG4gICAgICAgIG06IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDB4M2MpICUgMHgzYyxcclxuICAgICAgfSk7XHJcbiAgICAgIG9wZW5Tb2NrZXQoeyBpZDogdXNlci51aWQsIHRpbWU6IHNlY29uZHMgfSlcclxuICAgIH1cclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICB9LCBbc2Vjb25kc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEFjY2Vzc0FsYXJtSWNvbiAvPlxyXG4gICAgICB7YCR7dGltZXIuaH1IICR7dGltZXIubX0gTSAke3RpbWVyLnN9U2B9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWxvakxpbWl0O1xyXG4iLCJpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBTbmFja2JhclByb3ZpZGVyIH0gZnJvbSBcIm5vdGlzdGFja1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9MYXlvdXQvTGF5b3V0XCI7XHJcbmltcG9ydCBcIm1hdGVyaWFsaXplLWNzcy9kaXN0L2Nzcy9tYXRlcmlhbGl6ZS5jc3NcIjtcclxuaW1wb3J0IFwic2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3NcIjtcclxuaW1wb3J0IFwiLi4vYXNzZXRzL3N0eWxlcy9pbmRleC5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgPFNuYWNrYmFyUHJvdmlkZXIgbWF4U25hY2s9ezN9PlxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9Lz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgPC9TbmFja2JhclByb3ZpZGVyPlxyXG4gICAgPC9Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYWtlU3RvcmUgPSAoKSA9PiBzdG9yZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChtYWtlU3RvcmUpKE15QXBwKTtcclxuXHJcbi8qMFxyXG4gIGNvbnN0IHJlZGlyZWN0T25FcnJvciA9ICgpID0+XHJcbiAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgID8gd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCIvXCIpXHJcbiAgICAgIDogY3R4LnJlcy53cml0ZUhlYWQoMzAyLCB7IExvY2F0aW9uOiBcIi9cIiB9KVxyXG4gIGNvbnN0IHJlZGlyZWN0TyA9ICgpID0+XHJcbiAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgID8gd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCIvaG9tZVwiKVxyXG4gICAgICA6IGN0eC5yZXMud3JpdGVIZWFkKDMwMiwgeyBMb2NhdGlvbjogXCIvaG9tZVwiIH0pXHJcbiovXHJcblxyXG4vKlxyXG5jb25zdCB1c2VyID0gYXUuY3VycmVudFVzZXI7XHJcbiAgY29uc3QgcmVzcHVlc3RhID0geyB1c2VyOiB1c2VyIH07XHJcbiAgY29uc3QgZGF0YSA9IHJlc3B1ZXN0YS51c2VyPy51aWQgPyBhd2FpdCBkYlxyXG4gICAgICAgIC5jb2xsZWN0aW9uKGNvbGxlY3Rpb24pXHJcbiAgICAgICAgLndoZXJlKFwidXNlclwiLCBcIj09XCIsIHJlc3B1ZXN0YT8udXNlcj8udWlkKVxyXG4gICAgICAgIC5nZXQoKSA6IG51bGxcclxuICBjb25zdCBhbHVtbm8gPSB7IGRhdGE6IGRhdGE/LmRvY3NbMF0/LmRhdGEoKSB9O1xyXG4gICAgaWYgKCFyZXNwdWVzdGEudXNlcikge1xyXG4gICAgICBpZiAoY3R4Py5yZXE/LnVybCAhPT0gXCIvXCIpIHtcclxuICAgICAgICBjdHg/LnJlcz8ud3JpdGVIZWFkKDMwMiwgeyBMb2NhdGlvbjogXCIvXCIgfSk/LmVuZCgpO1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ge307XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoY3R4Py5yZXE/LnVybCA9PT0gXCIvXCIpIHtcclxuICAgICAgICBjdHg/LnJlcz8ud3JpdGVIZWFkKDMwMiwgeyBMb2NhdGlvbjogXCIvaG9tZVwiIH0pPy5lbmQoKTtcclxuICAgICAgICByZXR1cm4geyByZXNwdWVzdGEsIGFsdW1ubyB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7IHJlc3B1ZXN0YSwgYWx1bW5vIH07XHJcbiAgICB9XHJcbiovXHJcbiIsImV4cG9ydCBjb25zdCBhY2Npb25BbHVtbm8gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogXCJBTFVNTk9cIixcclxuICAgICAgcGF5bG9hZDogZGF0YSxcclxuICAgIH07XHJcbiAgfTtcclxuICAiLCJleHBvcnQgY29uc3QgYWNjaW9uVGVzdCA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBcIlRFU1RcIixcclxuICAgICAgcGF5bG9hZDogZGF0YSxcclxuICAgIH07XHJcbiAgfTtcclxuICAiLCJleHBvcnQgY29uc3QgYWNjaW9uVGltZSA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBcIlRJTUVcIixcclxuICAgICAgcGF5bG9hZDogZGF0YSxcclxuICAgIH07XHJcbiAgfTtcclxuICAiLCJleHBvcnQgY29uc3QgYWNjaW9uVGlwZSA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBcIlRJUEVcIixcclxuICAgICAgcGF5bG9hZDogZGF0YSxcclxuICAgIH07XHJcbiAgfTtcclxuICAiLCJleHBvcnQgY29uc3QgYWNjaW9uVXNlciA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBcIlVTRVJcIixcclxuICAgICAgcGF5bG9hZDogZGF0YSxcclxuICAgIH07XHJcbiAgfTtcclxuICAiLCJleHBvcnQge2FjY2lvblRlc3R9IGZyb20gJy4vYWNjaW9uVGVzdCc7XHJcbmV4cG9ydCB7YWNjaW9uVXNlcn0gZnJvbSAnLi9hY2Npb25Vc2VyJztcclxuZXhwb3J0IHthY2Npb25UaW1lfSBmcm9tICcuL2FjY2lvblRpbWUnO1xyXG5leHBvcnQge2FjY2lvblRpcGV9IGZyb20gJy4vYWNjaW9uVGlwZSc7XHJcbmV4cG9ydCB7YWNjaW9uQWx1bW5vfSBmcm9tICcuL2FjY2lvbkFsdW1ubyciLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB1c2VyOiB7fSxcclxuICBhbHVtbm86IHt9LFxyXG4gIHJlam9qOiB7fSxcclxuICBhY3RpdmVUZXN0OiBmYWxzZSxcclxuICB0aW1lOiAwLFxyXG4gIHR5cGVUZXN0OiBcIlwiLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlU3RhdGUoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJVU0VSXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFwiQUxVTU5PXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWx1bW5vOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgXCJUSVBFXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdHlwZVRlc3Q6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIlRJTUVcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB0aW1lOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgXCJURVNUXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWN0aXZlVGVzdDogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgfTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogcmV0dXJuIHN0YXRlO1xyXG4gICAqL1xyXG59LypcclxuY29uc3QgbWFrZVN0b3JlID0gKGluaXRpYWxTdGF0ZSA9IGV4YW1wbGVJbml0aWFsU3RhdGUpID0+IGNyZWF0ZVN0b3JlKFxyXG4gIHJlZHVjZXIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpLFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFrZVN0b3JlOyovXHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxyXG4gIHVwZGF0ZVN0YXRlLFxyXG4gIGNvbXBvc2VXaXRoRGV2VG9vbHMoKVxyXG4gIC8vd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18oKVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XHJcbiIsImltcG9ydCB7IGhvc3QgLGNvbGxlY3Rpb259IGZyb20gXCIuL3ZhcmlhYmxlc1wiO1xyXG5pbXBvcnQge2RiLGF1dGh9IGZyb20gJy4vZmlyZWJhc2UnXHJcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcclxudmFyIG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbm15SGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4vL3ZhciByYXcgPSBKU09OLnN0cmluZ2lmeShyZXNwdWVzdGEudXNlcik7XHJcblxyXG5jb25zdCByYXcgPSAoZGF0YSwgdGlwZSkgPT4ge1xyXG4gIGlmICghdGlwZSkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgbWV0aG9kOiB0aXBlLFxyXG4gICAgaGVhZGVyczogbXlIZWFkZXJzLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICByZWRpcmVjdDogXCJmb2xsb3dcIixcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ0luID1hc3luYyAoZGF0YSk9PntcclxuICByZXR1cm4gYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChcclxuICAgIGRhdGEuZW1haWwsXHJcbiAgICBkYXRhLnBhc3N3b3JkXHJcbiAgKVxyXG59XHJcbi8vZ2V0IGluZm8gdXNlclxyXG5leHBvcnQgY29uc3QgZ2V0VXNlciA9KGRhdGEpPT57XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7aG9zdH0vYXBpL3VzZXJgLHJhdyhkYXRhLFwiUE9TVFwiKSkudGhlbihkYXQgPT5kYXQuanNvbigpKTtcclxufVxyXG4vL2FjdGl2ZSBzb2NrZXRcclxuZXhwb3J0IGNvbnN0IG9wZW5Tb2NrZXQ9YXN5bmMgKGRhdGEpPT57XHJcbiAgY29uc3Qge2lkLHRpbWV9ID0gZGF0YVxyXG4gIGF3YWl0IGRiLmRvYyhgJHtjb2xsZWN0aW9ufS8ke2lkfWApLnVwZGF0ZSh7XHJcbiAgICB0aW1lOnRpbWVcclxuICB9KTtcclxufVxyXG5cclxuXHJcbi8vIHVwZGF0ZSByZXNwb25zZSBvZiBhbHVtbm9cclxuZXhwb3J0IGNvbnN0IHRlc3RFeGFtID0gYXN5bmMoZGF0YSk9PntcclxuICBjb25zdCB7aWQsYXJyZX0gPSBkYXRhXHJcbiAgYXdhaXQgZGIuZG9jKGAke2NvbGxlY3Rpb259LyR7aWR9YCkudXBkYXRlKHsgdGVzdDogYXJyZSB9KTtcclxufVxyXG5leHBvcnQgY29uc3QgdGVzdExvZ2ljPWFzeW5jKGRhdGEpPT57XHJcbiAgY29uc3Qge2lkLGFycmV9ID0gZGF0YVxyXG4gIGF3YWl0IGRiLmRvYyhgJHtjb2xsZWN0aW9ufS8ke2lkfWApLnVwZGF0ZSh7IGxvZ2ljbzogYXJyZSB9KTtcclxuXHJcbn1cclxuZXhwb3J0IGNvbnN0IGxlbmd1YUV4YW0gPWFzeW5jKGRhdGEpPT57XHJcbiAgY29uc3Qge2lkLGFycmV9ID0gZGF0YVxyXG4gIGF3YWl0IGRiLmRvYyhgJHtjb2xsZWN0aW9ufS8ke2lkfWApLnVwZGF0ZSh7IGxlbmd1YTogYXJyZSB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1hdGVFeGFtID1hc3luYyhkYXRhKT0+e1xyXG4gIGNvbnN0IHtpZCxhcnJlfSA9IGRhdGFcclxuICBhd2FpdCBkYi5kb2MoYCR7Y29sbGVjdGlvbn0vJHtpZH1gKS51cGRhdGUoeyBtYXRlbWF0aWNvOiBhcnJlIH0pO1xyXG5cclxufVxyXG5cclxuXHJcbi8vZmluaXNoIHRlc3RcclxuZXhwb3J0IGNvbnN0IG1hdGVDYW5jZWwgPWFzeW5jKGRhdGEpPT57XHJcbiAgYXdhaXQgZGIuZG9jKGAke2NvbGxlY3Rpb259LyR7ZGF0YS5pZH1gKS51cGRhdGUoeyBhY3RpdmVNYXQ6IGZhbHNlIH0pO1xyXG5cclxufVxyXG5leHBvcnQgY29uc3QgbG9naUNhbmNlbCA9YXN5bmMoZGF0YSk9PntcclxuXHJcbiAgYXdhaXQgZGIuZG9jKGAke2NvbGxlY3Rpb259LyR7ZGF0YS5pZH1gKS51cGRhdGUoeyBhY3RpdmVMb2dpYzogZmFsc2UgfSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGxlbmd1YUNhbmNlbCA9YXN5bmMoZGF0YSk9PntcclxuICBhd2FpdCBkYi5kb2MoYCR7Y29sbGVjdGlvbn0vJHtkYXRhLmlkfWApLnVwZGF0ZSh7IGFjdGl2ZUxlbmd1YTogZmFsc2UgfSk7XHJcblxyXG59XHJcbmV4cG9ydCBjb25zdCBleGFtQ2FuY2VsID1hc3luYyhkYXRhKT0+e1xyXG4gIGF3YWl0IGRiLmRvYyhgJHtjb2xsZWN0aW9ufS8ke2RhdGEuaWR9YCkudXBkYXRlKHsgYWN0aXZlRXhhbTE6IGZhbHNlIH0pO1xyXG59XHJcbi8vZGVzdHJveVxyXG5leHBvcnQgY29uc3QgYWxsQ2FuY2VsID1hc3luYyhkYXRhKT0+e1xyXG4gIGF3YWl0IGRiLmRvYyhgJHtjb2xsZWN0aW9ufS8ke2RhdGEuaWR9YCkudXBkYXRlKHtcclxuICAgIGFjdGl2ZUxlbmd1YTogZmFsc2UsXHJcbiAgICBhY3RpdmVNYXQ6IGZhbHNlLFxyXG4gICAgYWN0aXZlTG9naWM6IGZhbHNlLFxyXG4gICAgYWN0aXZlRXhhbTE6IGZhbHNlLFxyXG4gICAgdGltZTogMCxcclxuICB9KTtcclxufVxyXG5cclxuLyoqR0VUIERBVEEgVVNFUiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0SW5pdGlhbCA9IGFzeW5jICh1aWQpPT57XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGRiXHJcbiAgICAgIC5jb2xsZWN0aW9uKGNvbGxlY3Rpb24pXHJcbiAgICAgIC53aGVyZShcInVzZXJcIiwgXCI9PVwiLCB1aWQpXHJcbiAgICAgIC5nZXQoKTtcclxuICAgIHJldHVybiB7IGRhdGE6IGRhdGE/LmRvY3NbMF0/LmRhdGEoKSB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9nT3V0ID0gYXN5bmMgKCk9PntcclxuICBhd2FpdCBhdXRoLnNpZ25PdXQoKTtcclxufSIsImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7ZmlyZWJhc2VDb25maWd9IGZyb20gJy4vdmFyaWFibGVzJ1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcblxyXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbn1cclxuXHJcbmNvbnN0IGFwcCA9IGZpcmViYXNlLmFwcCgpO1xyXG5jb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xyXG5jb25zdCBhdSA9IGZpcmViYXNlLmF1dGgoKTtcclxuY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuY29uc3Qgbm93ID0gZmlyZWJhc2UuZmlyZXN0b3JlLlRpbWVzdGFtcC5ub3coKTtcclxuY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcclxuXHJcbmV4cG9ydCB7IGF1dGgsIGRiLCBub3csIHN0b3JhZ2UsYXUgfTsiLCJleHBvcnQgY29uc3QgaG9zdCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XHJcbmV4cG9ydCBjb25zdCBjb2xsZWN0aW9uID0gXCJlMS0yMDIxXCI7XHJcbmV4cG9ydCBjb25zdCBmaXJlYmFzZUNvbmZpZyA9e1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeUF5aUxqTk1DZFg0dmtCX2tNMG44RF9LRS10V2h6R0dnNFwiLFxyXG4gIGF1dGhEb21haW46IFwic2VhbmktOTU0YWMuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9zZWFuaS05NTRhYy5maXJlYmFzZWlvLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJzZWFuaS05NTRhY1wiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwic2VhbmktOTU0YWMuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI4MjE0NjI4NjI5ODdcIixcclxuICBhcHBJZDogXCIxOjgyMTQ2Mjg2Mjk4Nzp3ZWI6NDMzMTBiNGJiYzhiODRmMzU0ZDg4ZVwiLFxyXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy1FWEJGTVJKOEY0XCJcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjZXNzQWxhcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0RvbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4aXRUb0FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL3N0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy1mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm90aXN0YWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dlZXRhbGVydDJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==