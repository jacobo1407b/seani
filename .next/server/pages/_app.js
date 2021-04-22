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
        title: `¿Terminar examen ${typeTest}?`,
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
            text: "Tienes tiempo para revisar tu examen",
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
        title: `¿Terminar examen ${typeTest}?`,
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
            text: "Tienes tiempo para revisar tu examen",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vTGF5b3V0L0xheW91dC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZW51L01lbnUuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTW9kYWwvTW9kYWxCYXNpYy5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2RhbC9Ob1Jlc3BvbnNpdmUuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVsb2ovUmVsb2pMaW1pdC5qc3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY2Npb24vYWNjaW9uQWx1bW5vLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjY2lvbi9hY2Npb25UZXN0LmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjY2lvbi9hY2Npb25UaW1lLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjY2lvbi9hY2Npb25UaXBlLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjY2lvbi9hY2Npb25Vc2VyLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjY2lvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZmlyZWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdmFyaWFibGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9BY2Nlc3NBbGFybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Eb25lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4aXRUb0FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3JlVmVydFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2F1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm90aXN0YWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd2VldGFsZXJ0MlwiIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJjdXJyZW50VXNlciIsImFjY2lvblVzZXIiLCJkYXRhIiwiZ2V0SW5pdGlhbCIsInVpZCIsImFjY2lvbkFsdW1ubyIsInVzZXIyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJncm93IiwiZmxleEdyb3ciLCJtZW51QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwidGl0bGUiLCJkaXNwbGF5IiwiYnJlYWtwb2ludHMiLCJ1cCIsInNlYXJjaCIsInBvc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwic2hhcGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmYWRlIiwicGFsZXR0ZSIsImNvbW1vbiIsIndoaXRlIiwibWFyZ2luTGVmdCIsIndpZHRoIiwic2VhcmNoSWNvbiIsInBhZGRpbmciLCJoZWlnaHQiLCJwb2ludGVyRXZlbnRzIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaW5wdXRSb290IiwiY29sb3IiLCJpbnB1dElucHV0IiwicGFkZGluZ0xlZnQiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJzZWN0aW9uRGVza3RvcCIsInNlY3Rpb25Nb2JpbGUiLCJNZW51QXBwIiwiY2xhc3NlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImFsdW1ubyIsIm1vYmlsZU1vcmVBbmNob3JFbCIsInNldE1vYmlsZU1vcmVBbmNob3JFbCIsIlJlYWN0IiwidXNlU3RhdGUiLCJhY3RpdmVUZXN0IiwiaXNNb2JpbGVNZW51T3BlbiIsIkJvb2xlYW4iLCJsb2dvdXQiLCJsb2dPdXQiLCJwdXNoIiwiaGFuZGxlTW9iaWxlTWVudUNsb3NlIiwiaGFuZGxlTW9iaWxlTWVudU9wZW4iLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJtb2JpbGVNZW51SWQiLCJyZW5kZXJNb2JpbGVNZW51IiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiTW9kYWwiLCJ0eXBlVGVzdCIsInRpbWUiLCJwcmltZXIiLCJTd2FsIiwiZmlyZSIsInRleHQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0IiwidmFsdWUiLCJleGFtQ2FuY2VsIiwiaWQiLCJsZW5ndWFDYW5jZWwiLCJsb2dpQ2FuY2VsIiwibWF0ZUNhbmNlbCIsIk5vUmVzcG9uc2l2ZSIsIlJlbG9qTGltaXQiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiVGltZXJJbnRlcm5hbCIsImVucXVldWVTbmFja2JhciIsInVzZVNuYWNrYmFyIiwic2Vjb25kcyIsInNldFNlY29uZHMiLCJ0aW1lciIsInNldFRpbWVyIiwiaCIsIm0iLCJzIiwiaW50ZXJ2YWwiLCJ2YXJpYW50IiwiYWNjaW9uVGltZSIsIm9wZW5Tb2NrZXQiLCJhbGxDYW5jZWwiLCJzZXRJbnRlcnZhbCIsIk1hdGgiLCJyb3VuZCIsImZsb29yIiwiY2xlYXJJbnRlcnZhbCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJtYWtlU3RvcmUiLCJ3aXRoUmVkdXgiLCJ0eXBlIiwicGF5bG9hZCIsImFjY2lvblRlc3QiLCJhY2Npb25UaXBlIiwiaW5pdGlhbFN0YXRlIiwicmVqb2oiLCJ1cGRhdGVTdGF0ZSIsImFjdGlvbiIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsIm15SGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJyYXciLCJ0aXBlIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVkaXJlY3QiLCJsb2dJbiIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZW1haWwiLCJwYXNzd29yZCIsImdldFVzZXIiLCJmZXRjaCIsImhvc3QiLCJkYXQiLCJqc29uIiwiZGIiLCJkb2MiLCJjb2xsZWN0aW9uIiwidXBkYXRlIiwidGVzdEV4YW0iLCJhcnJlIiwidGVzdCIsInRlc3RMb2dpYyIsImxvZ2ljbyIsImxlbmd1YUV4YW0iLCJsZW5ndWEiLCJtYXRlRXhhbSIsIm1hdGVtYXRpY28iLCJhY3RpdmVNYXQiLCJhY3RpdmVMb2dpYyIsImFjdGl2ZUxlbmd1YSIsImFjdGl2ZUV4YW0xIiwid2hlcmUiLCJnZXQiLCJkb2NzIiwic2lnbk91dCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiZmlyZWJhc2UiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImFwcCIsImF1IiwiZmlyZXN0b3JlIiwibm93IiwiVGltZXN0YW1wIiwic3RvcmFnZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVB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RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTWVudUJhciBmcm9tICcuLi9jb21wb25lbnRzL01lbnUvTWVudSc7XHJcbmltcG9ydCB7YXV0aCB9IGZyb20gJy4uL3V0aWxzL2ZpcmViYXNlJztcclxuaW1wb3J0IHtnZXRJbml0aWFsfSBmcm9tICcuLi91dGlscy9hcGknXHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsdXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHthY2Npb25Vc2VyLGFjY2lvbkFsdW1ub30gZnJvbSAnLi4vcmVkdXgvYWNjaW9uJ1xyXG5jb25zdCBMYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKGFzeW5jKGN1cnJlbnRVc2VyKT0+e1xyXG4gICAgICAgIGlmKGN1cnJlbnRVc2VyKXtcclxuICAgICAgICAgICAgZGlzcGF0Y2goYWNjaW9uVXNlcihjdXJyZW50VXNlcikpXHJcbiAgICAgICAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGdldEluaXRpYWwoY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGFsdW1uby5kYXRhKVxyXG4gICAgICAgICAgICBkaXNwYXRjaChhY2Npb25BbHVtbm8oe2RhdGF9KSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZGlzcGF0Y2goYWNjaW9uVXNlcihudWxsKSlcclxuICAgICAgICB9ICBcclxuICAgIH0pXHJcbiAgICBjb25zdCB1c2VyMiA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXI/LnVpZClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3VzZXIyPyg8TWVudUJhci8+KTpudWxsfVxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dFxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHthY2Npb25BbHVtbm8sYWNjaW9uVXNlcn0gZnJvbSAnLi4vLi4vcmVkdXgvYWNjaW9uJ1xyXG5pbXBvcnQge2xvZ091dH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpJ1xyXG5pbXBvcnQgRXhpdCBmcm9tIFwiLi4vTW9kYWwvTW9kYWxCYXNpY1wiO1xyXG5pbXBvcnQgTm90UmVzIGZyb20gXCIuLi9Nb2RhbC9Ob1Jlc3BvbnNpdmVcIjtcclxuaW1wb3J0IFJlbG9qIGZyb20gXCIuLi9SZWxvai9SZWxvakxpbWl0XCI7XHJcblxyXG5pbXBvcnQgeyBmYWRlLCBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIjtcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuXHJcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVcIjtcclxuaW1wb3J0IEV4aXRUb0FwcEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FeGl0VG9BcHBcIjtcclxuaW1wb3J0IE1vcmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnRcIjtcclxuXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBncm93OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICB9LFxyXG4gIG1lbnVCdXR0b246IHtcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWFyY2g6IHtcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogZmFkZSh0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSwgMC4xNSksXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUodGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsIDAuMjUpLFxyXG4gICAgfSxcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgbWFyZ2luTGVmdDogMCxcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VhcmNoSWNvbjoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAyKSxcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICB9LFxyXG4gIGlucHV0Um9vdDoge1xyXG4gICAgY29sb3I6IFwiaW5oZXJpdFwiLFxyXG4gIH0sXHJcbiAgaW5wdXRJbnB1dDoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLCAxLCAxLCAwKSxcclxuICAgIC8vIHZlcnRpY2FsIHBhZGRpbmcgKyBmb250IHNpemUgZnJvbSBzZWFyY2hJY29uXHJcbiAgICBwYWRkaW5nTGVmdDogYGNhbGMoMWVtICsgJHt0aGVtZS5zcGFjaW5nKDQpfXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJ3aWR0aFwiKSxcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xyXG4gICAgICB3aWR0aDogXCIyMGNoXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VjdGlvbkRlc2t0b3A6IHtcclxuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY3Rpb25Nb2JpbGU6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBNZW51QXBwID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgYWx1bW5vID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYWx1bW5vKVxyXG4gIGNvbnN0IFttb2JpbGVNb3JlQW5jaG9yRWwsIHNldE1vYmlsZU1vcmVBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBhY3RpdmVUZXN0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hY3RpdmVUZXN0KTtcclxuICBjb25zdCBpc01vYmlsZU1lbnVPcGVuID0gQm9vbGVhbihtb2JpbGVNb3JlQW5jaG9yRWwpO1xyXG4gIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICAgIGxvZ091dCgpXHJcbiAgICBkaXNwYXRjaChhY2Npb25Vc2VyKHt9KSk7XHJcbiAgICBkaXNwYXRjaChhY2Npb25BbHVtbm8oe30pKTtcclxuICAgIHJvdXRlci5wdXNoKCcvJylcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZU1vYmlsZU1lbnVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE1vYmlsZU1vcmVBbmNob3JFbChudWxsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNb2JpbGVNZW51T3BlbiA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0TW9iaWxlTW9yZUFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1vYmlsZU1lbnVJZCA9IFwicHJpbWFyeS1zZWFyY2gtYWNjb3VudC1tZW51LW1vYmlsZVwiO1xyXG4gIGNvbnN0IHJlbmRlck1vYmlsZU1lbnUgPSAoXHJcbiAgICA8TWVudVxyXG4gICAgICBhbmNob3JFbD17bW9iaWxlTW9yZUFuY2hvckVsfVxyXG4gICAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6IFwidG9wXCIsIGhvcml6b250YWw6IFwicmlnaHRcIiB9fVxyXG4gICAgICBpZD17bW9iaWxlTWVudUlkfVxyXG4gICAgICBrZWVwTW91bnRlZFxyXG4gICAgICB0cmFuc2Zvcm1PcmlnaW49e3sgdmVydGljYWw6IFwidG9wXCIsIGhvcml6b250YWw6IFwicmlnaHRcIiB9fVxyXG4gICAgICBvcGVuPXtpc01vYmlsZU1lbnVPcGVufVxyXG4gICAgICBvbkNsb3NlPXtoYW5kbGVNb2JpbGVNZW51Q2xvc2V9XHJcbiAgICA+XHJcbiAgICAgIHthY3RpdmVUZXN0ID8gKFxyXG4gICAgICAgPE5vdFJlcy8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2xvZ291dH0+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiRXhpdCBhcHBcIiBjb2xvcj1cImluaGVyaXRcIj5cclxuICAgICAgICAgICAgPEV4aXRUb0FwcEljb24gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDxwPkNlcnJhciBzZXNpw7NuPC9wPlxyXG4gICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICl9XHJcbiAgICA8L01lbnU+XHJcbiAgKTtcclxuICAvLzxOb3RSZXMgZXhpdEV4YW09e251bGx9IGV4YW1lbj17ZXhhbWVufSAvPlxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncm93fT5cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxyXG4gICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAge2FjdGl2ZVRlc3QgPyAoXHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIG5vV3JhcD5cclxuICAgICAgICAgICAgICA8UmVsb2ogdXNlcj17dXNlcn0gYWx1bW5vPXthbHVtbm99Lz5cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgXCJTRUFOSVwiXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ3Jvd30gLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25EZXNrdG9wfT5cclxuICAgICAgICAgICAge2FjdGl2ZVRlc3QgPyAoXHJcbiAgICAgICAgICAgICAgPEV4aXQvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBlZGdlPVwiZW5kXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJhY2NvdW50IG9mIGN1cnJlbnQgdXNlclwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtsb2dvdXR9XHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxFeGl0VG9BcHBJY29uIC8+XHJcbiAgICAgICAgICAgICAgICBTYWxpclxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAvLzxFeGl0IGV4aXRFeGFtPXtudWxsfSBleGFtZW49e2V4YW1lbn0gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbk1vYmlsZX0+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInNob3cgbW9yZVwiXHJcbiAgICAgICAgICAgICAgYXJpYS1jb250cm9scz17bW9iaWxlTWVudUlkfVxyXG4gICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNb2JpbGVNZW51T3Blbn1cclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1vcmVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICAgIHtyZW5kZXJNb2JpbGVNZW51fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVBcHA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yLHVzZURpc3BhdGNofSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7YWNjaW9uQWx1bW5vfSBmcm9tICcuLi8uLi9yZWR1eC9hY2Npb24nXHJcbmltcG9ydCB7bWF0ZUNhbmNlbCxsb2dpQ2FuY2VsLGxlbmd1YUNhbmNlbCxleGFtQ2FuY2VsLGdldEluaXRpYWx9IGZyb20gJy4uLy4uL3V0aWxzL2FwaSc7XHJcblxyXG5cclxuY29uc3QgTW9kYWwgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHR5cGVUZXN0ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudHlwZVRlc3QpO1xyXG4gIGNvbnN0IHRpbWUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS50aW1lKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgcHJpbWVyID0gKCkgPT4ge1xyXG4gICAgaWYgKHRpbWUgPiAwKSB7XHJcbiAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgdGl0bGU6IGDCv1Rlcm1pbmFyIGV4YW1lbiAke3R5cGVUZXN0fT9gLFxyXG4gICAgICAgIHRleHQ6IFwiTm8gcG9kcmFzIHJldmVydGlyIGVzdG9cIixcclxuICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcclxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogXCIjMzA4NWQ2XCIsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6IFwiI2QzM1wiLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIlNpXCIsXHJcbiAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIsK/RXN0YXMgc2VndXJvP1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlRpZW5lcyB0aWVtcG8gcGFyYSByZXZpc2FyIHR1IGV4YW1lblwiLFxyXG4gICAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiMzMDg1ZDZcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6IFwiI2QzM1wiLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJTaSBlc3RveSB0b3RhbG1lbnRlIHNlZ3VybyFcIixcclxuICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RpbWUnLCAwKVxyXG4gICAgICAgICAgICAgIHN3aXRjaCAodHlwZVRlc3QpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJQZW5zYW1pZW50byBhbmFsw610aWNvXCI6XHJcbiAgICAgICAgICAgICAgICAgIC8vZXhhbVxyXG4gICAgICAgICAgICAgICAgICBleGFtQ2FuY2VsKHtpZDp1c2VyPy51aWR9KS50aGVuKGFzeW5jICgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgZ2V0SW5pdGlhbCh1c2VyLnVpZClcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChhY2Npb25BbHVtbm8oe2RhdGF9KSlcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2hvbWUnKVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJFc3RydWN0dXJhIGRlIGxhIGxlbmd1YVwiOlxyXG4gICAgICAgICAgICAgICAgICAvL2xlbmd1YVxyXG4gICAgICAgICAgICAgICAgICBsZW5ndWFDYW5jZWwoe2lkOnVzZXI/LnVpZH0pLnRoZW4oYXN5bmMgKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBnZXRJbml0aWFsKHVzZXIudWlkKVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGFjY2lvbkFsdW1ubyh7ZGF0YX0pKVxyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvaG9tZScpXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkNvbXByZW5zacOzbiBsZWN0b3JhXCI6XHJcbiAgICAgICAgICAgICAgICAgIC8vbG9naWNvXHJcbiAgICAgICAgICAgICAgICAgIGxvZ2lDYW5jZWwoe2lkOnVzZXI/LnVpZH0pLnRoZW4oYXN5bmMgKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBnZXRJbml0aWFsKHVzZXIudWlkKVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGFjY2lvbkFsdW1ubyh7ZGF0YX0pKVxyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvaG9tZScpXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJQZW5zYW1pZW50byBtYXRlbcOhdGljb1wiOlxyXG4gICAgICAgICAgICAgICAgICAvL21hdGVcclxuICAgICAgICAgICAgICAgICAgbWF0ZUNhbmNlbCh7aWQ6dXNlcj8udWlkfSkudGhlbihhc3luYyAoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGdldEluaXRpYWwodXNlci51aWQpXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goYWNjaW9uQWx1bW5vKHtkYXRhfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9ob21lJylcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgZXhhbUNhbmNlbCh7aWQ6dXNlcj8udWlkfSkudGhlbihhc3luYygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgZ2V0SW5pdGlhbCh1c2VyLnVpZClcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChhY2Npb25BbHVtbm8oe2RhdGF9KSlcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2hvbWUnKVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE1lbnUuSXRlbSBuYW1lPVwiVGVybWluYXIgZXhhbWVuXCIgb25DbGljaz17cHJpbWVyfSBjbGFzc05hbWU9XCJteS1jb2xvclwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XHJcblxyXG4vKioqXHJcbiAqXHJcbiAqXHJcbiAqXHJcbiAqL1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIjtcclxuaW1wb3J0IERvbmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRG9uZVwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQge2FjY2lvbkFsdW1ub30gZnJvbSAnLi4vLi4vcmVkdXgvYWNjaW9uJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3Rvcix1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7XHJcbiAgbWF0ZUNhbmNlbCxcclxuICBsb2dpQ2FuY2VsLFxyXG4gIGxlbmd1YUNhbmNlbCxcclxuICBleGFtQ2FuY2VsLFxyXG4gIGdldEluaXRpYWxcclxufSBmcm9tIFwiLi4vLi4vdXRpbHMvYXBpXCI7XHJcblxyXG5jb25zdCBOb1Jlc3BvbnNpdmUgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgdHlwZVRlc3QgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnR5cGVUZXN0KTtcclxuICBjb25zdCB0aW1lID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50aW1lKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgY29uc3QgcHJpbWVyID0gKCkgPT4ge1xyXG4gICAgaWYgKHRpbWUgPiAwKSB7XHJcbiAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgdGl0bGU6IGDCv1Rlcm1pbmFyIGV4YW1lbiAke3R5cGVUZXN0fT9gLFxyXG4gICAgICAgIHRleHQ6IFwiTm8gcG9kcmFzIHJldmVydGlyIGVzdG9cIixcclxuICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcclxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogXCIjMzA4NWQ2XCIsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6IFwiI2QzM1wiLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIlNpXCIsXHJcbiAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIsK/RXN0YXMgc2VndXJvP1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlRpZW5lcyB0aWVtcG8gcGFyYSByZXZpc2FyIHR1IGV4YW1lblwiLFxyXG4gICAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiMzMDg1ZDZcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6IFwiI2QzM1wiLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJTaSBlc3RveSB0b3RhbG1lbnRlIHNlZ3VybyFcIixcclxuICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgc3dpdGNoICh0eXBlVGVzdCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlBlbnNhbWllbnRvIGFuYWzDrXRpY29cIjpcclxuICAgICAgICAgICAgICAgICAgLy9leGFtXHJcbiAgICAgICAgICAgICAgICAgIGV4YW1DYW5jZWwoeyBpZDogdXNlcj8udWlkIH0pLnRoZW4oYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgZ2V0SW5pdGlhbCh1c2VyLnVpZClcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChhY2Npb25BbHVtbm8oe2RhdGF9KSlcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2hvbWUnKVxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiRXN0cnVjdHVyYSBkZSBsYSBsZW5ndWFcIjpcclxuICAgICAgICAgICAgICAgICAgLy9sZW5naWFcclxuICAgICAgICAgICAgICAgICAgbGVuZ3VhQ2FuY2VsKHsgaWQ6IHVzZXI/LnVpZCB9KS50aGVuKGFzeW5jKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGdldEluaXRpYWwodXNlci51aWQpXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goYWNjaW9uQWx1bW5vKHtkYXRhfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9ob21lJylcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkNvbXByZW5zacOzbiBsZWN0b3JhXCI6XHJcbiAgICAgICAgICAgICAgICAgIC8vbG9naWNvXHJcbiAgICAgICAgICAgICAgICAgIGxvZ2lDYW5jZWwoeyBpZDogdXNlcj8udWlkIH0pLnRoZW4oYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgZ2V0SW5pdGlhbCh1c2VyLnVpZClcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChhY2Npb25BbHVtbm8oe2RhdGF9KSlcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2hvbWUnKVxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiUGVuc2FtaWVudG8gbWF0ZW3DoXRpY29cIjpcclxuICAgICAgICAgICAgICAgICAgLy9tYXRlXHJcbiAgICAgICAgICAgICAgICAgIG1hdGVDYW5jZWwoeyBpZDogdXNlcj8udWlkIH0pLnRoZW4oYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgZ2V0SW5pdGlhbCh1c2VyLnVpZClcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChhY2Npb25BbHVtbm8oe2RhdGF9KSlcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2hvbWUnKVxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgZXhhbUNhbmNlbCh7IGlkOiB1c2VyPy51aWQgfSkudGhlbihhc3luYygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBnZXRJbml0aWFsKHVzZXIudWlkKVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGFjY2lvbkFsdW1ubyh7ZGF0YX0pKVxyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvaG9tZScpXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPE1lbnVJdGVtIG9uQ2xpY2s9e3ByaW1lcn0+XHJcbiAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJFeGl0IGV4YW1lblwiIGNvbG9yPVwiaW5oZXJpdFwiPlxyXG4gICAgICAgIDxEb25lSWNvbiAvPlxyXG4gICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgIDxwPlRlcm1pbmFyIEV4YW1lbjwvcD5cclxuICAgIDwvTWVudUl0ZW0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vUmVzcG9uc2l2ZTtcclxuLyoqKlxyXG4gKlxyXG4gKlxyXG4gKi9cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVNuYWNrYmFyIH0gZnJvbSBcIm5vdGlzdGFja1wiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBhY2Npb25UaW1lLCBhY2Npb25BbHVtbm8gfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWNjaW9uXCI7XHJcbmltcG9ydCBBY2Nlc3NBbGFybUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BY2Nlc3NBbGFybVwiO1xyXG5pbXBvcnQgeyBhbGxDYW5jZWwsIG9wZW5Tb2NrZXQsIGdldEluaXRpYWwgfSBmcm9tIFwiLi4vLi4vdXRpbHMvYXBpXCI7XHJcblxyXG5mdW5jdGlvbiBSZWxvakxpbWl0KHsgdXNlciwgYWx1bW5vIH0pIHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYHVzZXIgJHt1c2VyLnVpZH0gY29ubmVjdGApO1xyXG4gICAgcmV0dXJuICgpID0+IGNvbnNvbGUubG9nKGB1c2VyICR7dXNlci51aWR9IGRpc2Nvbm5lY3RgKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIDxUaW1lckludGVybmFsIHVzZXI9e3VzZXJ9IGFsdW1ubz17YWx1bW5vfSAvPjtcclxufVxyXG5cclxuZnVuY3Rpb24gVGltZXJJbnRlcm5hbCh7IHVzZXIsIGFsdW1ubyB9KSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgZW5xdWV1ZVNuYWNrYmFyIH0gPSB1c2VTbmFja2JhcigpO1xyXG4gIGNvbnN0IFtzZWNvbmRzLCBzZXRTZWNvbmRzXSA9IHVzZVN0YXRlKGFsdW1ubz8uZGF0YT8udGltZSk7XHJcbiAgY29uc3QgW3RpbWVyLCBzZXRUaW1lcl0gPSB1c2VTdGF0ZSh7IGg6IG51bGwsIG06IG51bGwsIHM6IG51bGwgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaW50ZXJ2YWwgPSBudWxsO1xyXG4gICAgaWYgKHNlY29uZHMgPT09IDkwMCkge1xyXG4gICAgICBlbnF1ZXVlU25hY2tiYXIoXCJRdWVkYW4gMTUgbWludXRvcyBwYXJhIGZpbmFsaXphclwiLCB7XHJcbiAgICAgICAgdmFyaWFudDogXCJ3YXJuaW5nXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlY29uZHMgPT09IDApIHtcclxuICAgICAgZW5xdWV1ZVNuYWNrYmFyKFwiRWwgdGllbXBvIHBhcmEgcmVhbGl6YXIgdHUgZXhhbWVuIGZpbmFsaXpvXCIsIHtcclxuICAgICAgICB2YXJpYW50OiBcImluZm9cIixcclxuICAgICAgfSk7XHJcbiAgICAgIHNldFNlY29uZHMoMCk7XHJcbiAgICAgIGRpc3BhdGNoKGFjY2lvblRpbWUoMCkpO1xyXG4gICAgICBzZXRUaW1lcih7XHJcbiAgICAgICAgczogMCxcclxuICAgICAgICBoOiAwLFxyXG4gICAgICAgIG06IDAsXHJcbiAgICAgIH0pO1xyXG4gICAgICBvcGVuU29ja2V0KHsgaWQ6IHVzZXIudWlkLCB0aW1lOiBzZWNvbmRzIH0pO1xyXG4gICAgICBhbGxDYW5jZWwoeyBpZDogdXNlcj8udWlkIH0pLnRoZW4oYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgZ2V0SW5pdGlhbCh1c2VyLnVpZCk7XHJcbiAgICAgICAgZGlzcGF0Y2goYWNjaW9uQWx1bW5vKHsgZGF0YSB9KSk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvaG9tZVwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBzZXRTZWNvbmRzKChzZWNvbmRzKSA9PiBzZWNvbmRzIC0gMSk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgICBkaXNwYXRjaChhY2Npb25UaW1lKHNlY29uZHMpKTtcclxuICAgICAgc2V0VGltZXIoe1xyXG4gICAgICAgIHM6IE1hdGgucm91bmQoc2Vjb25kcyAlIDB4M2MpLFxyXG4gICAgICAgIGg6IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDB4ZTEwKSxcclxuICAgICAgICBtOiBNYXRoLmZsb29yKHNlY29uZHMgLyAweDNjKSAlIDB4M2MsXHJcbiAgICAgIH0pO1xyXG4gICAgICBvcGVuU29ja2V0KHsgaWQ6IHVzZXIudWlkLCB0aW1lOiBzZWNvbmRzIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgfSwgW3NlY29uZHNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxBY2Nlc3NBbGFybUljb24gLz5cclxuICAgICAge2Ake3RpbWVyLmh9SCAke3RpbWVyLm19IE0gJHt0aW1lci5zfVNgfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVsb2pMaW1pdDtcclxuIiwiaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHdpdGhSZWR1eCBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcclxuaW1wb3J0IHsgU25hY2tiYXJQcm92aWRlciB9IGZyb20gXCJub3Rpc3RhY2tcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vTGF5b3V0L0xheW91dFwiO1xyXG5pbXBvcnQgXCJtYXRlcmlhbGl6ZS1jc3MvZGlzdC9jc3MvbWF0ZXJpYWxpemUuY3NzXCI7XHJcbmltcG9ydCBcInNlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzXCI7XHJcbmltcG9ydCBcIi4uL2Fzc2V0cy9zdHlsZXMvaW5kZXguY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgIDxTbmFja2JhclByb3ZpZGVyIG1heFNuYWNrPXszfT5cclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfS8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvU25hY2tiYXJQcm92aWRlcj5cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFrZVN0b3JlID0gKCkgPT4gc3RvcmU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgobWFrZVN0b3JlKShNeUFwcCk7XHJcblxyXG4vKjBcclxuICBjb25zdCByZWRpcmVjdE9uRXJyb3IgPSAoKSA9PlxyXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICA/IHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiL1wiKVxyXG4gICAgICA6IGN0eC5yZXMud3JpdGVIZWFkKDMwMiwgeyBMb2NhdGlvbjogXCIvXCIgfSlcclxuICBjb25zdCByZWRpcmVjdE8gPSAoKSA9PlxyXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICA/IHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiL2hvbWVcIilcclxuICAgICAgOiBjdHgucmVzLndyaXRlSGVhZCgzMDIsIHsgTG9jYXRpb246IFwiL2hvbWVcIiB9KVxyXG4qL1xyXG5cclxuLypcclxuY29uc3QgdXNlciA9IGF1LmN1cnJlbnRVc2VyO1xyXG4gIGNvbnN0IHJlc3B1ZXN0YSA9IHsgdXNlcjogdXNlciB9O1xyXG4gIGNvbnN0IGRhdGEgPSByZXNwdWVzdGEudXNlcj8udWlkID8gYXdhaXQgZGJcclxuICAgICAgICAuY29sbGVjdGlvbihjb2xsZWN0aW9uKVxyXG4gICAgICAgIC53aGVyZShcInVzZXJcIiwgXCI9PVwiLCByZXNwdWVzdGE/LnVzZXI/LnVpZClcclxuICAgICAgICAuZ2V0KCkgOiBudWxsXHJcbiAgY29uc3QgYWx1bW5vID0geyBkYXRhOiBkYXRhPy5kb2NzWzBdPy5kYXRhKCkgfTtcclxuICAgIGlmICghcmVzcHVlc3RhLnVzZXIpIHtcclxuICAgICAgaWYgKGN0eD8ucmVxPy51cmwgIT09IFwiL1wiKSB7XHJcbiAgICAgICAgY3R4Py5yZXM/LndyaXRlSGVhZCgzMDIsIHsgTG9jYXRpb246IFwiL1wiIH0pPy5lbmQoKTtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGN0eD8ucmVxPy51cmwgPT09IFwiL1wiKSB7XHJcbiAgICAgICAgY3R4Py5yZXM/LndyaXRlSGVhZCgzMDIsIHsgTG9jYXRpb246IFwiL2hvbWVcIiB9KT8uZW5kKCk7XHJcbiAgICAgICAgcmV0dXJuIHsgcmVzcHVlc3RhLCBhbHVtbm8gfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geyByZXNwdWVzdGEsIGFsdW1ubyB9O1xyXG4gICAgfVxyXG4qL1xyXG4iLCJleHBvcnQgY29uc3QgYWNjaW9uQWx1bW5vID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IFwiQUxVTU5PXCIsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGEsXHJcbiAgICB9O1xyXG4gIH07XHJcbiAgIiwiZXhwb3J0IGNvbnN0IGFjY2lvblRlc3QgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogXCJURVNUXCIsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGEsXHJcbiAgICB9O1xyXG4gIH07XHJcbiAgIiwiZXhwb3J0IGNvbnN0IGFjY2lvblRpbWUgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogXCJUSU1FXCIsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGEsXHJcbiAgICB9O1xyXG4gIH07XHJcbiAgIiwiZXhwb3J0IGNvbnN0IGFjY2lvblRpcGUgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogXCJUSVBFXCIsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGEsXHJcbiAgICB9O1xyXG4gIH07XHJcbiAgIiwiZXhwb3J0IGNvbnN0IGFjY2lvblVzZXIgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogXCJVU0VSXCIsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGEsXHJcbiAgICB9O1xyXG4gIH07XHJcbiAgIiwiZXhwb3J0IHthY2Npb25UZXN0fSBmcm9tICcuL2FjY2lvblRlc3QnO1xyXG5leHBvcnQge2FjY2lvblVzZXJ9IGZyb20gJy4vYWNjaW9uVXNlcic7XHJcbmV4cG9ydCB7YWNjaW9uVGltZX0gZnJvbSAnLi9hY2Npb25UaW1lJztcclxuZXhwb3J0IHthY2Npb25UaXBlfSBmcm9tICcuL2FjY2lvblRpcGUnO1xyXG5leHBvcnQge2FjY2lvbkFsdW1ub30gZnJvbSAnLi9hY2Npb25BbHVtbm8nIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgdXNlcjoge30sXHJcbiAgYWx1bW5vOiB7fSxcclxuICByZWpvajoge30sXHJcbiAgYWN0aXZlVGVzdDogZmFsc2UsXHJcbiAgdGltZTogMCxcclxuICB0eXBlVGVzdDogXCJcIixcclxufTtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVN0YXRlKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiVVNFUlwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIkFMVU1OT1wiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFsdW1ubzogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFwiVElQRVwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHR5cGVUZXN0OiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgXCJUSU1FXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdGltZTogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFwiVEVTVFwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFjdGl2ZVRlc3Q6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIH07XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIHJldHVybiBzdGF0ZTtcclxuICAgKi9cclxufS8qXHJcbmNvbnN0IG1ha2VTdG9yZSA9IChpbml0aWFsU3RhdGUgPSBleGFtcGxlSW5pdGlhbFN0YXRlKSA9PiBjcmVhdGVTdG9yZShcclxuICByZWR1Y2VyLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpKSxcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1ha2VTdG9yZTsqL1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcclxuICB1cGRhdGVTdGF0ZSxcclxuICBjb21wb3NlV2l0aERldlRvb2xzKClcclxuICAvL3dpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKClcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xyXG4iLCJpbXBvcnQgeyBob3N0ICxjb2xsZWN0aW9ufSBmcm9tIFwiLi92YXJpYWJsZXNcIjtcclxuaW1wb3J0IHtkYixhdXRofSBmcm9tICcuL2ZpcmViYXNlJ1xyXG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXHJcbnZhciBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG5teUhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuLy92YXIgcmF3ID0gSlNPTi5zdHJpbmdpZnkocmVzcHVlc3RhLnVzZXIpO1xyXG5cclxuY29uc3QgcmF3ID0gKGRhdGEsIHRpcGUpID0+IHtcclxuICBpZiAoIXRpcGUpIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIG1ldGhvZDogdGlwZSxcclxuICAgIGhlYWRlcnM6IG15SGVhZGVycyxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgcmVkaXJlY3Q6IFwiZm9sbG93XCIsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dJbiA9YXN5bmMgKGRhdGEpPT57XHJcbiAgcmV0dXJuIGF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoXHJcbiAgICBkYXRhLmVtYWlsLFxyXG4gICAgZGF0YS5wYXNzd29yZFxyXG4gIClcclxufVxyXG4vL2dldCBpbmZvIHVzZXJcclxuZXhwb3J0IGNvbnN0IGdldFVzZXIgPShkYXRhKT0+e1xyXG4gICAgcmV0dXJuIGZldGNoKGAke2hvc3R9L2FwaS91c2VyYCxyYXcoZGF0YSxcIlBPU1RcIikpLnRoZW4oZGF0ID0+ZGF0Lmpzb24oKSk7XHJcbn1cclxuLy9hY3RpdmUgc29ja2V0XHJcbmV4cG9ydCBjb25zdCBvcGVuU29ja2V0PWFzeW5jIChkYXRhKT0+e1xyXG4gIGNvbnN0IHtpZCx0aW1lfSA9IGRhdGFcclxuICBhd2FpdCBkYi5kb2MoYCR7Y29sbGVjdGlvbn0vJHtpZH1gKS51cGRhdGUoe1xyXG4gICAgdGltZTp0aW1lXHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG4vLyB1cGRhdGUgcmVzcG9uc2Ugb2YgYWx1bW5vXHJcbmV4cG9ydCBjb25zdCB0ZXN0RXhhbSA9IGFzeW5jKGRhdGEpPT57XHJcbiAgY29uc3Qge2lkLGFycmV9ID0gZGF0YVxyXG4gIGF3YWl0IGRiLmRvYyhgJHtjb2xsZWN0aW9ufS8ke2lkfWApLnVwZGF0ZSh7IHRlc3Q6IGFycmUgfSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IHRlc3RMb2dpYz1hc3luYyhkYXRhKT0+e1xyXG4gIGNvbnN0IHtpZCxhcnJlfSA9IGRhdGFcclxuICBhd2FpdCBkYi5kb2MoYCR7Y29sbGVjdGlvbn0vJHtpZH1gKS51cGRhdGUoeyBsb2dpY286IGFycmUgfSk7XHJcblxyXG59XHJcbmV4cG9ydCBjb25zdCBsZW5ndWFFeGFtID1hc3luYyhkYXRhKT0+e1xyXG4gIGNvbnN0IHtpZCxhcnJlfSA9IGRhdGFcclxuICBhd2FpdCBkYi5kb2MoYCR7Y29sbGVjdGlvbn0vJHtpZH1gKS51cGRhdGUoeyBsZW5ndWE6IGFycmUgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYXRlRXhhbSA9YXN5bmMoZGF0YSk9PntcclxuICBjb25zdCB7aWQsYXJyZX0gPSBkYXRhXHJcbiAgYXdhaXQgZGIuZG9jKGAke2NvbGxlY3Rpb259LyR7aWR9YCkudXBkYXRlKHsgbWF0ZW1hdGljbzogYXJyZSB9KTtcclxuXHJcbn1cclxuXHJcblxyXG4vL2ZpbmlzaCB0ZXN0XHJcbmV4cG9ydCBjb25zdCBtYXRlQ2FuY2VsID1hc3luYyhkYXRhKT0+e1xyXG4gIGF3YWl0IGRiLmRvYyhgJHtjb2xsZWN0aW9ufS8ke2RhdGEuaWR9YCkudXBkYXRlKHsgYWN0aXZlTWF0OiBmYWxzZSB9KTtcclxuXHJcbn1cclxuZXhwb3J0IGNvbnN0IGxvZ2lDYW5jZWwgPWFzeW5jKGRhdGEpPT57XHJcblxyXG4gIGF3YWl0IGRiLmRvYyhgJHtjb2xsZWN0aW9ufS8ke2RhdGEuaWR9YCkudXBkYXRlKHsgYWN0aXZlTG9naWM6IGZhbHNlIH0pO1xyXG59XHJcbmV4cG9ydCBjb25zdCBsZW5ndWFDYW5jZWwgPWFzeW5jKGRhdGEpPT57XHJcbiAgYXdhaXQgZGIuZG9jKGAke2NvbGxlY3Rpb259LyR7ZGF0YS5pZH1gKS51cGRhdGUoeyBhY3RpdmVMZW5ndWE6IGZhbHNlIH0pO1xyXG5cclxufVxyXG5leHBvcnQgY29uc3QgZXhhbUNhbmNlbCA9YXN5bmMoZGF0YSk9PntcclxuICBhd2FpdCBkYi5kb2MoYCR7Y29sbGVjdGlvbn0vJHtkYXRhLmlkfWApLnVwZGF0ZSh7IGFjdGl2ZUV4YW0xOiBmYWxzZSB9KTtcclxufVxyXG4vL2Rlc3Ryb3lcclxuZXhwb3J0IGNvbnN0IGFsbENhbmNlbCA9YXN5bmMoZGF0YSk9PntcclxuICBhd2FpdCBkYi5kb2MoYCR7Y29sbGVjdGlvbn0vJHtkYXRhLmlkfWApLnVwZGF0ZSh7XHJcbiAgICBhY3RpdmVMZW5ndWE6IGZhbHNlLFxyXG4gICAgYWN0aXZlTWF0OiBmYWxzZSxcclxuICAgIGFjdGl2ZUxvZ2ljOiBmYWxzZSxcclxuICAgIGFjdGl2ZUV4YW0xOiBmYWxzZSxcclxuICAgIHRpbWU6IDAsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKkdFVCBEQVRBIFVTRVIgKi9cclxuZXhwb3J0IGNvbnN0IGdldEluaXRpYWwgPSBhc3luYyAodWlkKT0+e1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBkYlxyXG4gICAgICAuY29sbGVjdGlvbihjb2xsZWN0aW9uKVxyXG4gICAgICAud2hlcmUoXCJ1c2VyXCIsIFwiPT1cIiwgdWlkKVxyXG4gICAgICAuZ2V0KCk7XHJcbiAgICByZXR1cm4geyBkYXRhOiBkYXRhPy5kb2NzWzBdPy5kYXRhKCkgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ091dCA9IGFzeW5jICgpPT57XHJcbiAgYXdhaXQgYXV0aC5zaWduT3V0KCk7XHJcbn0iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcbi8qXHJcbmNvbnN0IHtcclxuICAgIEZJUkVCQVNFX0FVVEhET01BSU4sXHJcbiAgICBGSVJFQkFTRV9EQVRBQkFTRSxcclxuICAgIEZJUkVCQVNFX1BST0pFQ1RfSUQsXHJcbiAgfSA9IHByb2Nlc3MuZW52O1xyXG4gIGNvbnN0IHtcclxuICAgIEZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxyXG4gICAgRklSRUJBU0VfU0VOREVSX0lELFxyXG4gICAgRklSRUJBU0VfQVBQX0lELFxyXG4gICAgRklSRUJBU0VfTUVOU1VSQUJMRSxcclxuICB9ID0gcHJvY2Vzcy5lbnY7Ki9cclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lEeGJsVU1Uc0E3RVFBR1YzY2dDY0dNb1l1YUJOMl9JaGtcIixcclxuICBhdXRoRG9tYWluOiBcInV0dC1leGFtZW4uZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly91dHQtZXhhbWVuLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgcHJvamVjdElkOiBcInV0dC1leGFtZW5cIixcclxuICBzdG9yYWdlQnVja2V0OiBcInV0dC1leGFtZW4uYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIxODg5ODU1MDA4NFwiLFxyXG4gIGFwcElkOiBcIjE6MTg4OTg1NTAwODQ6d2ViOmYzMzNiZWQ3ZDE5YzQ0NGIzNTZiMTFcIixcclxuICBtZWFzdXJlbWVudElkOiBcIkctRVpKQkdNTVQ1UlwiLFxyXG59O1xyXG5cclxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG59XHJcblxyXG5jb25zdCBhcHAgPSBmaXJlYmFzZS5hcHAoKTtcclxuY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcclxuY29uc3QgYXUgPSBmaXJlYmFzZS5hdXRoKCk7XHJcbmNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbmNvbnN0IG5vdyA9IGZpcmViYXNlLmZpcmVzdG9yZS5UaW1lc3RhbXAubm93KCk7XHJcbmNvbnN0IHN0b3JhZ2UgPSBmaXJlYmFzZS5zdG9yYWdlKCk7XHJcblxyXG5leHBvcnQgeyBhdXRoLCBkYiwgbm93LCBzdG9yYWdlLGF1IH07XHJcblxyXG4vKipcclxuICogIGFwaUtleTogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBJX0tFWSxcclxuICAgIGF1dGhEb21haW46IEZJUkVCQVNFX0FVVEhET01BSU4sXHJcbiAgICBkYXRhYmFzZVVSTDogRklSRUJBU0VfREFUQUJBU0UsXHJcbiAgICBwcm9qZWN0SWQ6IEZJUkVCQVNFX1BST0pFQ1RfSUQsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBGSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCxcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBGSVJFQkFTRV9TRU5ERVJfSUQsXHJcbiAgICBhcHBJZDogRklSRUJBU0VfQVBQX0lELFxyXG4gICAgbWVhc3VyZW1lbnRJZDogRklSRUJBU0VfTUVOU1VSQUJMRSxcclxuICovIiwiZXhwb3J0IGNvbnN0IGhvc3QgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xyXG5leHBvcnQgY29uc3QgY29sbGVjdGlvbiA9IFwiYWx1bW5vczNcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0FjY2Vzc0FsYXJtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Eb25lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9FeGl0VG9BcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9zdG9yYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vdGlzdGFja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3ZWV0YWxlcnQyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=