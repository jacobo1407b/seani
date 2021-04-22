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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// CONCATENATED MODULE: ./redux/store.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  user: {},
  rejoj: {},
  activeTest: false,
  time: 0,
  typeTest: "",
  alumno: {}
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

const store = Object(external_redux_["createStore"])(updateState //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* harmony default export */ var redux_store = (store);
// EXTERNAL MODULE: external "notistack"
var external_notistack_ = __webpack_require__("oF3+");

// EXTERNAL MODULE: ./utils/firebase.js
var firebase = __webpack_require__("s7pt");

// EXTERNAL MODULE: ./utils/variables.js
var variables = __webpack_require__("Appm");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "sweetalert2"
var external_sweetalert2_ = __webpack_require__("CBiN");
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_);

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: ./utils/api.js
var api = __webpack_require__("yzAy");

// CONCATENATED MODULE: ./components/Modal/ModalBasic.jsx







const Modal = () => {
  const typeTest = Object(external_react_redux_["useSelector"])(state => state.typeTest);
  const time = Object(external_react_redux_["useSelector"])(state => state.time);
  const user = Object(external_react_redux_["useSelector"])(state => state.user);

  const primer = () => {
    if (time > 0) {
      external_sweetalert2_default.a.fire({
        title: `¿Terminar examen ${typeTest}?`,
        text: "No podras revertir esto",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si"
      }).then(result => {
        if (result.value) {
          external_sweetalert2_default.a.fire({
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
                  Object(api["b" /* examCancel */])({
                    id: user === null || user === void 0 ? void 0 : user.uid
                  }).then(() => {
                    window.location.replace('/home');
                  });
                  break;

                case "Estructura de la lengua":
                  //lengua
                  Object(api["c" /* lenguaCancel */])({
                    id: user === null || user === void 0 ? void 0 : user.uid
                  }).then(() => {
                    window.location.replace('/home');
                  });
                  break;

                case "Comprensión lectora":
                  //logico
                  Object(api["f" /* logiCancel */])({
                    id: user === null || user === void 0 ? void 0 : user.uid
                  }).then(() => {
                    window.location.replace('/home');
                  });
                  break;

                case "Pensamiento matemático":
                  //mate
                  Object(api["g" /* mateCancel */])({
                    id: user === null || user === void 0 ? void 0 : user.uid
                  }).then(() => {
                    window.location.replace('/home');
                  });
                  break;

                default:
                  Object(api["b" /* examCancel */])({
                    id: user === null || user === void 0 ? void 0 : user.uid
                  }).then(() => {
                    window.location.replace('/home');
                  });
                  break;
              }
            }
          });
        }
      });
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Menu"].Item, {
      name: "Terminar examen",
      onClick: primer,
      className: "my-color"
    })
  });
};

/* harmony default export */ var ModalBasic = (Modal);
/***
 *
 *
 *
 */
// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__("x54t");
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);

// EXTERNAL MODULE: external "@material-ui/icons/Done"
var Done_ = __webpack_require__("2UeD");
var Done_default = /*#__PURE__*/__webpack_require__.n(Done_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// CONCATENATED MODULE: ./components/Modal/NoResponsive.jsx










const NoResponsive = () => {
  const typeTest = Object(external_react_redux_["useSelector"])(state => state.typeTest);
  const time = Object(external_react_redux_["useSelector"])(state => state.time);
  const user = Object(external_react_redux_["useSelector"])(state => state.user);

  const primer = () => {
    if (time > 0) {
      external_sweetalert2_default.a.fire({
        title: `¿Terminar examen ${typeTest}?`,
        text: "No podras revertir esto",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si"
      }).then(result => {
        if (result.value) {
          external_sweetalert2_default.a.fire({
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
                  Object(api["b" /* examCancel */])({
                    id: user === null || user === void 0 ? void 0 : user.uid
                  }).then(() => {
                    window.location.replace("/home");
                  });
                  break;

                case "Estructura de la lengua":
                  //lengia
                  Object(api["c" /* lenguaCancel */])({
                    id: user === null || user === void 0 ? void 0 : user.uid
                  }).then(() => {
                    window.location.replace("/home");
                  });
                  break;

                case "Comprensión lectora":
                  //logico
                  Object(api["f" /* logiCancel */])({
                    id: user === null || user === void 0 ? void 0 : user.uid
                  }).then(() => {
                    window.location.replace("/home");
                  });
                  break;

                case "Pensamiento matemático":
                  //mate
                  Object(api["g" /* mateCancel */])({
                    id: user === null || user === void 0 ? void 0 : user.uid
                  }).then(() => {
                    window.location.replace("/home");
                  });
                  break;

                default:
                  Object(api["b" /* examCancel */])({
                    id: user === null || user === void 0 ? void 0 : user.uid
                  }).then(() => {
                    window.location.replace("/home");
                  });
                  break;
              }
            }
          });
        }
      });
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(MenuItem_default.a, {
    onClick: primer,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(IconButton_default.a, {
      "aria-label": "Exit examen",
      color: "inherit",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Done_default.a, {})
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      children: "Terminar Examen"
    })]
  });
};

/* harmony default export */ var Modal_NoResponsive = (NoResponsive);
/***
 *
 *
 */
// EXTERNAL MODULE: external "socket.io-client"
var external_socket_io_client_ = __webpack_require__("pI2v");
var external_socket_io_client_default = /*#__PURE__*/__webpack_require__.n(external_socket_io_client_);

// EXTERNAL MODULE: ./redux/accion/index.js + 5 modules
var accion = __webpack_require__("np2V");

// EXTERNAL MODULE: external "@material-ui/icons/AccessAlarm"
var AccessAlarm_ = __webpack_require__("qF+9");
var AccessAlarm_default = /*#__PURE__*/__webpack_require__.n(AccessAlarm_);

// CONCATENATED MODULE: ./components/Reloj/RelojLimit.jsx











function RelojLimit({
  user,
  alumno
}) {
  const {
    0: sock,
    1: setSock
  } = Object(external_react_["useState"])(null);
  Object(external_react_["useEffect"])(() => {
    fetch("/api/socket");
    const socket = external_socket_io_client_default()();
    socket.on("connect", () => {
      console.log(`user ${user.uid} connect`);
    });
    setSock(socket);
    return () => socket.on("disconnect", () => {
      console.log(`user ${user.uid} disconnect`);
    });
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(TimerInternal, {
    socket: sock,
    user: user,
    alumno: alumno
  });
}

function TimerInternal({
  socket,
  user,
  alumno
}) {
  var _alumno$data;

  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    enqueueSnackbar
  } = Object(external_notistack_["useSnackbar"])();
  const {
    0: seconds,
    1: setSeconds
  } = Object(external_react_["useState"])(alumno === null || alumno === void 0 ? void 0 : (_alumno$data = alumno.data) === null || _alumno$data === void 0 ? void 0 : _alumno$data.time);
  const {
    0: timer,
    1: setTimer
  } = Object(external_react_["useState"])({
    h: null,
    m: null,
    s: null
  });
  Object(external_react_["useEffect"])(() => {
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
      dispatch(Object(accion["c" /* accionTime */])(0));
      setTimer({
        s: 0,
        h: 0,
        m: 0
      });
      socket === null || socket === void 0 ? void 0 : socket.emit("message", {
        id: user.uid,
        time: seconds
      });
      Object(api["a" /* allCancel */])({
        id: user === null || user === void 0 ? void 0 : user.uid
      }).then(() => {
        window.location.replace('/home');
      });
    } else {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
      dispatch(Object(accion["c" /* accionTime */])(seconds));
      setTimer({
        s: Math.round(seconds % 0x3c),
        h: Math.floor(seconds / 0xe10),
        m: Math.floor(seconds / 0x3c) % 0x3c
      });
      socket === null || socket === void 0 ? void 0 : socket.emit("message", {
        id: user.uid,
        time: seconds
      });
    }

    return () => clearInterval(interval);
  }, [seconds]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(AccessAlarm_default.a, {}), `${timer.h}H ${timer.m} M ${timer.s}S`]
  });
}

/* harmony default export */ var Reloj_RelojLimit = (RelojLimit);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__("4151");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@material-ui/core/Toolbar"
var Toolbar_ = __webpack_require__("Ms0O");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/Menu"
var Menu_ = __webpack_require__("GYHf");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);

// EXTERNAL MODULE: external "@material-ui/icons/ExitToApp"
var ExitToApp_ = __webpack_require__("RiyV");
var ExitToApp_default = /*#__PURE__*/__webpack_require__.n(ExitToApp_);

// EXTERNAL MODULE: external "@material-ui/icons/MoreVert"
var MoreVert_ = __webpack_require__("UQSI");
var MoreVert_default = /*#__PURE__*/__webpack_require__.n(MoreVert_);

// CONCATENATED MODULE: ./components/Menu/Menu.jsx
















const useStyles = Object(styles_["makeStyles"])(theme => ({
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
    backgroundColor: Object(styles_["fade"])(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: Object(styles_["fade"])(theme.palette.common.white, 0.25)
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
  const user = Object(external_react_redux_["useSelector"])(state => state.user);
  const alumno = Object(external_react_redux_["useSelector"])(state => state.alumno);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = external_react_default.a.useState(null);
  const activeTest = Object(external_react_redux_["useSelector"])(state => state.activeTest);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const logout = async () => {
    await fetch(`/api/logout`);
    window.location.replace('/');
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = /*#__PURE__*/Object(jsx_runtime_["jsx"])(Menu_default.a, {
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
    children: activeTest ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(Modal_NoResponsive, {}) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])(MenuItem_default.a, {
      onClick: logout,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(IconButton_default.a, {
        "aria-label": "Exit app",
        color: "inherit",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ExitToApp_default.a, {})
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: "Cerrar sesi\xF3n"
      })]
    })
  }); //<NotRes exitExam={null} examen={examen} />


  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: classes.grow,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(AppBar_default.a, {
      position: "static",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Toolbar_default.a, {
        children: [activeTest ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(Typography_default.a, {
          variant: "h6",
          noWrap: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Reloj_RelojLimit, {
            user: user,
            alumno: alumno
          })
        }) : "SEANI", /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: classes.grow
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: classes.sectionDesktop,
          children: activeTest ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(ModalBasic, {}) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])(IconButton_default.a, {
            edge: "end",
            "aria-label": "account of current user",
            "aria-haspopup": "true",
            onClick: logout,
            color: "inherit",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ExitToApp_default.a, {}), "Salir"]
          }) //<Exit exitExam={null} examen={examen} />

        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: classes.sectionMobile,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(IconButton_default.a, {
            "aria-label": "show more",
            "aria-controls": mobileMenuId,
            "aria-haspopup": "true",
            onClick: handleMobileMenuOpen,
            color: "inherit",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(MoreVert_default.a, {})
          })
        })]
      })
    }), renderMobileMenu]
  });
};

/* harmony default export */ var Menu = (MenuApp);
// CONCATENATED MODULE: ./Layout/Layout.jsx







const Layout = ({
  children,
  user,
  alumno
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  dispatch(Object(accion["e" /* accionUser */])(user));
  dispatch(Object(accion["a" /* accionAlumno */])(alumno));
  const user2 = Object(external_react_redux_["useSelector"])(state => state.user);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [user2 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(Menu, {}) : null, children]
  });
};

/* harmony default export */ var Layout_Layout = (Layout);
// EXTERNAL MODULE: ./node_modules/materialize-css/dist/css/materialize.css
var materialize = __webpack_require__("3FOV");

// EXTERNAL MODULE: ./node_modules/semantic-ui-css/semantic.min.css
var semantic_min = __webpack_require__("xMo/");

// EXTERNAL MODULE: ./assets/styles/index.css
var styles = __webpack_require__("ETwq");

// CONCATENATED MODULE: ./pages/_app.js


function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




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

function MyApp({
  Component,
  pageProps,
  respuesta,
  alumno
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_redux_["Provider"], {
    store: redux_store,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_notistack_["SnackbarProvider"], {
      maxSnack: 3,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Layout_Layout, {
        user: respuesta === null || respuesta === void 0 ? void 0 : respuesta.user,
        alumno: alumno,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _app_objectSpread(_app_objectSpread({}, pageProps), {}, {
          user: respuesta === null || respuesta === void 0 ? void 0 : respuesta.user,
          alumno: alumno
        }))
      })
    })
  });
}

MyApp.getInitialProps = async ({
  ctx
}) => {
  var _respuesta$user, _data$docs$;

  const user = firebase["a" /* au */].currentUser;
  const respuesta = {
    user: user
  };
  const data = user ? await firebase["c" /* db */].collection(variables["a" /* collection */]).where("user", "==", respuesta === null || respuesta === void 0 ? void 0 : (_respuesta$user = respuesta.user) === null || _respuesta$user === void 0 ? void 0 : _respuesta$user.uid).get() : null;
  const alumno = {
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

  return {
    respuesta,
    alumno
  };
};

const makeStore = () => redux_store;

/* harmony default export */ var _app = __webpack_exports__["default"] = (external_next_redux_wrapper_default()(makeStore)(MyApp));
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

/***/ "2UeD":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Done");

/***/ }),

/***/ "3FOV":
/***/ (function(module, exports) {



/***/ }),

/***/ "4151":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "Appm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return host; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return collection; });
const host = "http://localhost:3000";
const collection = "alumnos3";

/***/ }),

/***/ "CBiN":
/***/ (function(module, exports) {

module.exports = require("sweetalert2");

/***/ }),

/***/ "ETwq":
/***/ (function(module, exports) {



/***/ }),

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "EuFW":
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "GYHf":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "Ms0O":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "RiyV":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExitToApp");

/***/ }),

/***/ "UQSI":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreVert");

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "W+0S":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "bnmT":
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "ha8t":
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),

/***/ "np2V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ accionTest; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ accionUser; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ accionTime; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ accionTipe; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ accionAlumno; });

// CONCATENATED MODULE: ./redux/accion/accionTest.js
const accionTest = data => {
  return {
    type: "TEST",
    payload: data
  };
};
// CONCATENATED MODULE: ./redux/accion/accionUser.js
const accionUser = data => {
  return {
    type: "USER",
    payload: data
  };
};
// CONCATENATED MODULE: ./redux/accion/accionTime.js
const accionTime = data => {
  return {
    type: "TIME",
    payload: data
  };
};
// CONCATENATED MODULE: ./redux/accion/accionTipe.js
const accionTipe = data => {
  return {
    type: "TIPE",
    payload: data
  };
};
// CONCATENATED MODULE: ./redux/accion/accionAlumno.js
const accionAlumno = data => {
  return {
    type: "ALUMNO",
    payload: data
  };
};
// CONCATENATED MODULE: ./redux/accion/index.js






/***/ }),

/***/ "oF3+":
/***/ (function(module, exports) {

module.exports = require("notistack");

/***/ }),

/***/ "pI2v":
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "qF+9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccessAlarm");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "s7pt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return db; });
/* unused harmony export now */
/* unused harmony export storage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return au; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wVQA");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("EuFW");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bnmT");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ha8t");
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

/***/ "wVQA":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "x54t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "xMo/":
/***/ (function(module, exports) {



/***/ }),

/***/ "yzAy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return logIn; });
/* unused harmony export getInitialData */
/* unused harmony export getUser */
/* unused harmony export openSocket */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return testExam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return testLogic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return lenguaExam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return mateExam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return mateCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return logiCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return lenguaCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return examCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return allCancel; });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Appm");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("W+0S");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);


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

const logIn = data => {
  return fetch(`/api/log`, raw(data, "POST")).then(response => response.json());
}; //get initial props firebase

const getInitialData = () => {
  return fetch(`${_variables__WEBPACK_IMPORTED_MODULE_0__[/* host */ "b"]}/api/inicial`).then(response => response.json());
}; //get info user

const getUser = data => {
  return fetch(`${_variables__WEBPACK_IMPORTED_MODULE_0__[/* host */ "b"]}/api/user`, raw(data, "POST")).then(dat => dat.json());
}; //active socket

const openSocket = () => {
  fetch("/api/socket");
}; // update response of alumno

const testExam = data => {
  return fetch(`/api/test/exam`, raw(data, "POST")).then(response => response.json());
};
const testLogic = data => {
  return fetch(`/api/test/logico`, raw(data, "POST")).then(response => response.json());
};
const lenguaExam = data => {
  return fetch(`/api/test/lengua`, raw(data, "POST")).then(response => response.json());
};
const mateExam = data => {
  return fetch(`/api/test/mate`, raw(data, "POST")).then(response => response.json());
}; //finish test

const mateCancel = data => {
  return fetch(`/api/cancel/mate`, raw(data, "POST")).then(response => response.json());
};
const logiCancel = data => {
  return fetch(`/api/cancel/logic`, raw(data, "POST")).then(response => response.json());
};
const lenguaCancel = data => {
  return fetch(`/api/cancel/lengua`, raw(data, "POST")).then(response => response.json());
};
const examCancel = data => {
  return fetch(`/api/cancel/exam`, raw(data, "POST")).then(response => response.json());
}; //destroy

const allCancel = data => {
  return fetch(`/api/cancel/all`, raw(data, "POST")).then(response => response.json());
};

/***/ })

/******/ });