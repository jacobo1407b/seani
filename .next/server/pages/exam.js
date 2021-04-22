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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/exam.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/json/Examen_PensaAnlitico.json":
/*!***********************************************!*\
  !*** ./assets/json/Examen_PensaAnlitico.json ***!
  \***********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"_id\":\"0\",\"pregunta_txt\":\" \",\"pregunta_url\":\"\",\"respuesta1\":\"\",\"respuesta2\":\"\",\"respuesta3\":\"\",\"respuesta4\":\"\"},{\"_id\":\"26\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F26%20-%20B.jpg?alt=media&token=8d095081-e9aa-47dc-9d79-5a82476bf4a9\",\"respuesta1\":\"A\",\"respuesta2\":\"B\",\"respuesta3\":\"C\",\"respuesta4\":\"D\"},{\"_id\":\"27\",\"pregunta_txt\":\"Todo número entero es racional. Todos los números racionales pertenecen a los números reales. La conclusión es ...\",\"pregunta_url\":\"\",\"respuesta1\":\"ningún racional es real\",\"respuesta2\":\"ningún entero es real\",\"respuesta3\":\"todo entero es real\",\"respuesta4\":\"todo racional es entero\"},{\"_id\":\"28\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F28%20-%20D.jpg?alt=media&token=ea63d00c-07f3-45f5-80b3-44dc11c4b070\",\"respuesta1\":\"xwjwytm\",\"respuesta2\":\"vuhuwrk\",\"respuesta3\":\"wvivxsz\",\"respuesta4\":\"wvivxsl\"},{\"_id\":\"29\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F29%20-%20.Cjpg.jpg?alt=media&token=ac098f41-f0c6-4554-83ea-c00f2f103b8d\",\"respuesta1\":\"O-H-3-4\",\"respuesta2\":\"V-3-H-4\",\"respuesta3\":\"V-H-4-3\",\"respuesta4\":\"V-H-38-4\"},{\"_id\":\"30\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F29%20-%20D%20.jpg?alt=media&token=f6536ac0-a750-4ba6-99e6-aff92620b7a9\",\"respuesta1\":\"C-M-0-3\",\"respuesta2\":\"C-M-2-3\",\"respuesta3\":\"C-M-2-6\",\"respuesta4\":\"C-M-3-2\"},{\"_id\":\"31\",\"pregunta_txt\":\"Son caballos que se registran para exposición, excepto ...\",\"pregunta_url\":\"\",\"respuesta1\":\"C-M-0-3\",\"respuesta2\":\"C-M-1-2\",\"respuesta3\":\"C-M-2-6\",\"respuesta4\":\"C-M-5-7\"},{\"_id\":\"32\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F32%20-%20B%20.jpg?alt=media&token=270be644-3bee-4c38-8d5f-48a6b080da28\",\"respuesta1\":\"36\",\"respuesta2\":\"38\",\"respuesta3\":\"39\",\"respuesta4\":\"44\"},{\"_id\":\"33\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F33%20-%20D%20.jpg?alt=media&token=2bff95ae-96da-44b5-bce5-e49d744ecfb8\",\"respuesta1\":\"A\",\"respuesta2\":\"B\",\"respuesta3\":\"C\",\"respuesta4\":\"D\"},{\"_id\":\"34\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F34%20-%20A.jpg?alt=media&token=ac84d855-63ee-48cc-acf1-20245437ce76\",\"respuesta1\":\"A\",\"respuesta2\":\"B\",\"respuesta3\":\"C\",\"respuesta4\":\"D\"},{\"_id\":\"35\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F35%20-%20B.jpg?alt=media&token=347db055-fa2c-435d-beda-940995ccd9c1\",\"respuesta1\":\"A\",\"respuesta2\":\"B\",\"respuesta3\":\"C\",\"respuesta4\":\"D\"},{\"_id\":\"36\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F36%20-%20C.jpg?alt=media&token=59360ee3-0694-41fa-ae57-0cac09ab31d1\",\"respuesta1\":\"A\",\"respuesta2\":\"B\",\"respuesta3\":\"C\",\"respuesta4\":\"D\"},{\"_id\":\"37\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F37%20-%20C%20.jpg?alt=media&token=a7902f0b-420e-4e6f-8cba-dd65c7a7ed5e\",\"respuesta1\":\"10\",\"respuesta2\":\"12\",\"respuesta3\":\"24\",\"respuesta4\":\"32\"},{\"_id\":\"38\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F38%20-%20D.jpg?alt=media&token=f5884441-c3ae-406e-b0a5-8ba2f0e6b29b\",\"respuesta1\":\"A\",\"respuesta2\":\"B\",\"respuesta3\":\"C\",\"respuesta4\":\"D\"},{\"_id\":\"39\",\"pregunta_txt\":\"Los siguientes elementos corresponden a la serie, excepto: 4, 7, 12, 19, 28 ...\",\"pregunta_url\":\"\",\"respuesta1\":\"39\",\"respuesta2\":\"49\",\"respuesta3\":\"403\",\"respuesta4\":\"1684\"},{\"_id\":\"40\",\"pregunta_txt\":\"¿Cuál es el elemento que continúa la serie? 18T, 26S, 35Q, 43P, 53Ñ, 61N ...\",\"pregunta_url\":\"\",\"respuesta1\":\"69L\",\"respuesta2\":\"70M\",\"respuesta3\":\"71M\",\"respuesta4\":\"72L\"},{\"_id\":\"40\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F40%20-%20C%20.jpg?alt=media&token=ef0a40f7-4790-4c0c-890a-443aa95f02cd\",\"respuesta1\":\"1\",\"respuesta2\":\"2\",\"respuesta3\":\"6\",\"respuesta4\":\"7\"},{\"_id\":\"41\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F41%20-%20D%20.jpg?alt=media&token=cdc5a7ae-5617-4272-928f-8d8407c102da\",\"respuesta1\":\"Futbol mantuvo su liderazgo los años incluidos en la encuesta\",\"respuesta2\":\"Box fue la segunda tendencia tanto en el año 2009 como en 2011\",\"respuesta3\":\"Basquetbol fue la segunda preferida en el año 2007 y en el año 2008\",\"respuesta4\":\"Futbol americano y golf obtuvieron su porcentaje más alto en 2009\"},{\"_id\":\"42\",\"pregunta_txt\":\"Completa el silogismo: Todos los libros son libros de referencia. Ningún libro de referencia es enciclopedia. Entonces ...\",\"pregunta_url\":\"\",\"respuesta1\":\"ningún libro es enciclopedia\",\"respuesta2\":\"todos los libros son enciclopedias\",\"respuesta3\":\"ningún libro no es enciclopedia \",\"respuesta4\":\"no todos lo libros son enciclopedias \"},{\"_id\":\"43\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F43%20-%20D.jpg?alt=media&token=c79d7cc8-7989-42f0-8915-a8407bd78a3e\",\"respuesta1\":\"510\",\"respuesta2\":\"1,020\",\"respuesta3\":\"5,010\",\"respuesta4\":\"10,020\"},{\"_id\":\"44\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F44%20-%20B%20.%20jpg.jpg?alt=media&token=589a1fbf-eef4-4de4-a148-ce84b85b6800\",\"respuesta1\":\"A\",\"respuesta2\":\"B\",\"respuesta3\":\"C\",\"respuesta4\":\"D\"},{\"_id\":\"45\",\"pregunta_txt\":\"¿Cuál es una proposición universal afirmativa?\",\"pregunta_url\":\"\",\"respuesta1\":\"Ningún esclavo se liberó\",\"respuesta2\":\"Juan conquistó su libertad\",\"respuesta3\":\"Lauro continua como esclavo\",\"respuesta4\":\"Todos los hombres son libres\"},{\"_id\":\"46\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F46%20-%20B.jpg?alt=media&token=eda70e73-4013-4289-9151-e36b0d3026d0\",\"respuesta1\":\"A\",\"respuesta2\":\"B\",\"respuesta3\":\"C\",\"respuesta4\":\"D\"},{\"_id\":\"47\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F47%20-%20B.jpg?alt=media&token=a1b4ba8f-d4a7-4c77-8271-da65c2ffc1a2\",\"respuesta1\":\"A\",\"respuesta2\":\"B\",\"respuesta3\":\"C\",\"respuesta4\":\"D\"},{\"_id\":\"48\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F48%20-%20B.jpg?alt=media&token=ad23b513-fd5a-4722-8f0e-1c521b7e8628\",\"respuesta1\":\"3\",\"respuesta2\":\"4\",\"respuesta3\":\"7\",\"respuesta4\":\"10\"},{\"_id\":\"49\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F49%20-%20B.jpg?alt=media&token=da48f4e3-7e6b-481a-bc80-12ab1e9ddd57\",\"respuesta1\":\"Los hongos Botrytis cinerea, Fusarium sp. y Colletrichum sp. infectan a algunas frutas y verduras\",\"respuesta2\":\"Andrea Trejo y Andrea Flores son las responsables de la investigación acerca de las infecciones por hongos\",\"respuesta3\":\"La sustancia que ataca a las plagas en frutas y verduras se obtiene de las plantas de orégano y eucalipto\",\"respuesta4\":\"El objetivo de la investigación fue combatir las plagas que enfermaban a ciertas frutas y verduras\"},{\"_id\":\"50\",\"pregunta_txt\":\"¿Qué letra continua con la serie? M, Ñ, Q, U\",\"pregunta_url\":\"\",\"respuesta1\":\"W\",\"respuesta2\":\"X\",\"respuesta3\":\"Y\",\"respuesta4\":\"Z\"},{\"_id\":\"51\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F51%20-%20A%20.jpg?alt=media&token=590d213f-d914-444f-9fe9-db2fe442c301\",\"respuesta1\":\"htxce\",\"respuesta2\":\"iuydf\",\"respuesta3\":\"gswbd\",\"respuesta4\":\"htwce\"},{\"_id\":\"52\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F52%20-%20D.jpg?alt=media&token=0253555b-2445-4c0b-ba42-bd7188f4ba15\",\"respuesta1\":\"Juan\",\"respuesta2\":\"Javier\",\"respuesta3\":\"Jésica\",\"respuesta4\":\"Janet\"},{\"_id\":\"53\",\"pregunta_txt\":\"Reloj es a tiempo como ...\",\"pregunta_url\":\"\",\"respuesta1\":\"estatura a metro\",\"respuesta2\":\"termómetro a frío\",\"respuesta3\":\"Vernier a nanómetro\",\"respuesta4\":\"Balanza a masa\"},{\"_id\":\"54\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F54%20-%20A%20.jpg?alt=media&token=89af000f-cb39-4161-a138-48d577f878ce\",\"respuesta1\":\"En el norte del país hay mejores oportunidades laborales\",\"respuesta2\":\"Existe un menor índice de bienestar en el sur del país\",\"respuesta3\":\"En el centro del país se presentan mejores oportunidades de vida\",\"respuesta4\":\"La mayoría de las entidades federativas requiere de una mayor inversión\"}]");

/***/ }),

/***/ "./assets/style.js":
/*!*************************!*\
  !*** ./assets/style.js ***!
  \*************************/
/*! exports provided: useStyleLogin, useStyleExam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyleLogin", function() { return useStyleLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyleExam", function() { return useStyleExam; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useStyleLogin = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#FB5D0E !important"
  },
  media: {
    height: "70%",
    paddingTop: "58.25%",
    // 16:9
    paddingBottom: "12px"
  }
}));
const useStyleExam = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2)
    }
  }
}));

/***/ }),

/***/ "./components/Exam/Pregunta1.jsx":
/*!***************************************!*\
  !*** ./components/Exam/Pregunta1.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Radio */ "@material-ui/core/Radio");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "@material-ui/core/RadioGroup");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Save */ "@material-ui/icons/Save");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.js");

var _jsxFileName = "C:\\proyectos\\next\\seani\\components\\Exam\\Pregunta1.jsx";










const Pregunta1 = ({
  dtajs,
  dataAlumno,
  posision
}) => {
  const user = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(state => state.user);
  let conver = parseInt(posision);
  let valorActive = dataAlumno[conver] ? dataAlumno[conver] : "";
  const {
    0: tempResp,
    1: setTempResp
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  const {
    0: selectValue,
    1: setSelectValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(valorActive.respuesta);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setSelectValue(valorActive === null || valorActive === void 0 ? void 0 : valorActive.respuesta);
  }, [valorActive.respuesta]);

  const handlerElegirRespuesta = e => {
    setTempResp({
      pregunta: dtajs === null || dtajs === void 0 ? void 0 : dtajs._id,
      respuesta: e.target.value
    });
    setSelectValue(e.target.value);
  };

  const handlerSubmit = e => {
    e.preventDefault();

    if (!(tempResp !== null && tempResp !== void 0 && tempResp.pregunta) || !(tempResp !== null && tempResp !== void 0 && tempResp.pregunta)) {
      return false;
    } else {
      dataAlumno[conver] = tempResp;
      Object(_utils_api__WEBPACK_IMPORTED_MODULE_9__["testExam"])({
        id: user === null || user === void 0 ? void 0 : user.uid,
        arre: dataAlumno
      });
      setTempResp({});
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: [dtajs !== null && dtajs !== void 0 && dtajs.pregunta_txt ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: dtajs === null || dtajs === void 0 ? void 0 : dtajs.pregunta_txt
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 30
    }, undefined) : null, dtajs !== null && dtajs !== void 0 && dtajs.pregunta_url ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      className: "responsive-img materialboxed",
      src: dtajs === null || dtajs === void 0 ? void 0 : dtajs.pregunta_url,
      alt: "pregunta",
      width: "900px",
      height: "550px"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, undefined) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: handlerSubmit,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_3___default.a, {
        component: "fieldset",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_4___default.a //defaultValue={selectValue}
        , {
          "aria-label": "gender",
          name: "customized-radios",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
            value: "A",
            control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_2___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 24
            }, undefined),
            label: dtajs === null || dtajs === void 0 ? void 0 : dtajs.respuesta1,
            onChange: handlerElegirRespuesta,
            checked: selectValue === "A"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
            value: "B",
            control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_2___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 24
            }, undefined),
            label: dtajs === null || dtajs === void 0 ? void 0 : dtajs.respuesta2,
            onChange: handlerElegirRespuesta,
            checked: selectValue === "B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
            value: "C",
            control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_2___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 24
            }, undefined),
            label: dtajs === null || dtajs === void 0 ? void 0 : dtajs.respuesta3,
            onChange: handlerElegirRespuesta,
            checked: selectValue === "C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
            value: "D",
            control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_2___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 24
            }, undefined),
            label: dtajs === null || dtajs === void 0 ? void 0 : dtajs.respuesta4,
            onChange: handlerElegirRespuesta,
            checked: selectValue === "D"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
          type: "submit",
          variant: "contained",
          color: "primary",
          size: "large",
          startIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 24
          }, undefined),
          children: "Guardar Respuesta"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Pregunta1);

/***/ }),

/***/ "./pages/exam.jsx":
/*!************************!*\
  !*** ./pages/exam.jsx ***!
  \************************/
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
/* harmony import */ var _assets_json_Examen_PensaAnlitico_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/json/Examen_PensaAnlitico.json */ "./assets/json/Examen_PensaAnlitico.json");
var _assets_json_Examen_PensaAnlitico_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/json/Examen_PensaAnlitico.json */ "./assets/json/Examen_PensaAnlitico.json", 1);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_accion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/accion */ "./redux/accion/index.js");
/* harmony import */ var _assets_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/style */ "./assets/style.js");
/* harmony import */ var _material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/lab/Pagination */ "@material-ui/lab/Pagination");
/* harmony import */ var _material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Exam_Pregunta1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Exam/Pregunta1 */ "./components/Exam/Pregunta1.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\proyectos\\next\\seani\\pages\\exam.jsx";










const exam = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const classes = Object(_assets_style__WEBPACK_IMPORTED_MODULE_6__["useStyleExam"])();
  const alumno = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.alumno);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    var _alumno$data;

    dispatch(Object(_redux_accion__WEBPACK_IMPORTED_MODULE_5__["accionTest"])(true));
    dispatch(Object(_redux_accion__WEBPACK_IMPORTED_MODULE_5__["accionTipe"])("Pensamiento analítico"));

    if (!(alumno !== null && alumno !== void 0 && (_alumno$data = alumno.data) !== null && _alumno$data !== void 0 && _alumno$data.activeExam1)) {
      router.push("/home");
    }

    return () => {
      dispatch(Object(_redux_accion__WEBPACK_IMPORTED_MODULE_5__["accionTest"])(false));
      dispatch(Object(_redux_accion__WEBPACK_IMPORTED_MODULE_5__["accionTipe"])(""));
    };
  }, []);

  const handleChange = (event, value) => {
    router.push(`/exam?page=${value}`);
  };

  function elegir(numero) {
    var _alumno$data2, _alumno$data3;

    if (numero <= 0) {
      return false;
    }

    if (numero > 90) {
      return false;
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Exam_Pregunta1__WEBPACK_IMPORTED_MODULE_8__["default"], {
      dtajs: _assets_json_Examen_PensaAnlitico_json__WEBPACK_IMPORTED_MODULE_3__[parseInt(numero)],
      dataAlumno: alumno !== null && alumno !== void 0 && (_alumno$data2 = alumno.data) !== null && _alumno$data2 !== void 0 && _alumno$data2.test ? alumno === null || alumno === void 0 ? void 0 : (_alumno$data3 = alumno.data) === null || _alumno$data3 === void 0 ? void 0 : _alumno$data3.test : [],
      todos: alumno === null || alumno === void 0 ? void 0 : alumno.data,
      posision: numero
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "SEANI | Pensamiento anal\xEDtico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, undefined), elegir(parseInt(router.query.page)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.root,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: " transparent center-align",
        count: _assets_json_Examen_PensaAnlitico_json__WEBPACK_IMPORTED_MODULE_3__.length - 1,
        defaultPage: 1,
        page: parseInt(router.query.page),
        color: "primary",
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (exam);

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

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "@material-ui/core/Radio":
/*!******************************************!*\
  !*** external "@material-ui/core/Radio" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Radio");

/***/ }),

/***/ "@material-ui/core/RadioGroup":
/*!***********************************************!*\
  !*** external "@material-ui/core/RadioGroup" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/RadioGroup");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Save":
/*!******************************************!*\
  !*** external "@material-ui/icons/Save" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Save");

/***/ }),

/***/ "@material-ui/lab/Pagination":
/*!**********************************************!*\
  !*** external "@material-ui/lab/Pagination" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Pagination");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRXhhbS9QcmVndW50YTEuanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2V4YW0uanN4Iiwid2VicGFjazovLy8uL3JlZHV4L2FjY2lvbi9hY2Npb25BbHVtbm8uanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWNjaW9uL2FjY2lvblRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWNjaW9uL2FjY2lvblRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWNjaW9uL2FjY2lvblRpcGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWNjaW9uL2FjY2lvblVzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWNjaW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9maXJlYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy92YXJpYWJsZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NhdmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvbGFiL1BhZ2luYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2Uvc3RvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJ1c2VTdHlsZUxvZ2luIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicGFwZXIiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiYXZhdGFyIiwibWFyZ2luIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsInNlY29uZGFyeSIsIm1haW4iLCJmb3JtIiwid2lkdGgiLCJzdWJtaXQiLCJtZWRpYSIsImhlaWdodCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwidXNlU3R5bGVFeGFtIiwicm9vdCIsIlByZWd1bnRhMSIsImR0YWpzIiwiZGF0YUFsdW1ubyIsInBvc2lzaW9uIiwidXNlciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJjb252ZXIiLCJwYXJzZUludCIsInZhbG9yQWN0aXZlIiwidGVtcFJlc3AiLCJzZXRUZW1wUmVzcCIsInVzZVN0YXRlIiwic2VsZWN0VmFsdWUiLCJzZXRTZWxlY3RWYWx1ZSIsInJlc3B1ZXN0YSIsInVzZUVmZmVjdCIsImhhbmRsZXJFbGVnaXJSZXNwdWVzdGEiLCJlIiwicHJlZ3VudGEiLCJfaWQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZXJTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInRlc3RFeGFtIiwiaWQiLCJ1aWQiLCJhcnJlIiwicHJlZ3VudGFfdHh0IiwicHJlZ3VudGFfdXJsIiwicmVzcHVlc3RhMSIsInJlc3B1ZXN0YTIiLCJyZXNwdWVzdGEzIiwicmVzcHVlc3RhNCIsImV4YW0iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiY2xhc3NlcyIsImFsdW1ubyIsImFjY2lvblRlc3QiLCJhY2Npb25UaXBlIiwiZGF0YSIsImFjdGl2ZUV4YW0xIiwicHVzaCIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiZWxlZ2lyIiwibnVtZXJvIiwidGVzdCIsInF1ZXJ5IiwicGFnZSIsImxlbmd0aCIsImFjY2lvbkFsdW1ubyIsInR5cGUiLCJwYXlsb2FkIiwiYWNjaW9uVGltZSIsImFjY2lvblVzZXIiLCJteUhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwicmF3IiwidGlwZSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlZGlyZWN0IiwibG9nSW4iLCJhdXRoIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJlbWFpbCIsInBhc3N3b3JkIiwiZ2V0VXNlciIsImZldGNoIiwiaG9zdCIsInRoZW4iLCJkYXQiLCJqc29uIiwib3BlblNvY2tldCIsInRpbWUiLCJkYiIsImRvYyIsImNvbGxlY3Rpb24iLCJ1cGRhdGUiLCJ0ZXN0TG9naWMiLCJsb2dpY28iLCJsZW5ndWFFeGFtIiwibGVuZ3VhIiwibWF0ZUV4YW0iLCJtYXRlbWF0aWNvIiwibWF0ZUNhbmNlbCIsImFjdGl2ZU1hdCIsImxvZ2lDYW5jZWwiLCJhY3RpdmVMb2dpYyIsImxlbmd1YUNhbmNlbCIsImFjdGl2ZUxlbmd1YSIsImV4YW1DYW5jZWwiLCJhbGxDYW5jZWwiLCJnZXRJbml0aWFsIiwid2hlcmUiLCJnZXQiLCJkb2NzIiwibG9nT3V0Iiwic2lnbk91dCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiZmlyZWJhc2UiLCJhcHBzIiwiaW5pdGlhbGl6ZUFwcCIsImFwcCIsImF1IiwiZmlyZXN0b3JlIiwibm93IiwiVGltZXN0YW1wIiwic3RvcmFnZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLGFBQWEsR0FBR0MsMkVBQVUsQ0FBRUMsS0FBRCxLQUFZO0FBQ2hEQyxP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QUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvZXhhbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvZXhhbS5qc3hcIik7XG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVN0eWxlTG9naW4gPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHBhcGVyOiB7XHJcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gICAgYXZhdGFyOiB7XHJcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgfSxcclxuICAgIGZvcm06IHtcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLCAvLyBGaXggSUUgMTEgaXNzdWUuXHJcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIH0sXHJcbiAgICBzdWJtaXQ6IHtcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDMsIDAsIDIpLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZCNUQwRSAhaW1wb3J0YW50XCIsXHJcbiAgICB9LFxyXG4gICAgbWVkaWE6IHtcclxuICAgICAgaGVpZ2h0OiBcIjcwJVwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiBcIjU4LjI1JVwiLCAvLyAxNjo5XHJcbiAgICAgIHBhZGRpbmdCb3R0b206IFwiMTJweFwiLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU3R5bGVFeGFtID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgXCImID4gKlwiOiB7XHJcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSYWRpbyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9cIjtcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiO1xyXG5pbXBvcnQgUmFkaW9Hcm91cCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cFwiO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IFNhdmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2F2ZVwiO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHt0ZXN0RXhhbX0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpJztcclxuXHJcbmNvbnN0IFByZWd1bnRhMSA9ICh7IGR0YWpzLCBkYXRhQWx1bW5vLCBwb3Npc2lvbiB9KSA9PiB7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIpXHJcbiAgbGV0IGNvbnZlciA9IHBhcnNlSW50KHBvc2lzaW9uKTtcclxuICBsZXQgdmFsb3JBY3RpdmUgPSBkYXRhQWx1bW5vW2NvbnZlcl0gPyBkYXRhQWx1bW5vW2NvbnZlcl0gOiBcIlwiO1xyXG4gIGNvbnN0IFt0ZW1wUmVzcCwgc2V0VGVtcFJlc3BdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtzZWxlY3RWYWx1ZSwgc2V0U2VsZWN0VmFsdWVdID0gdXNlU3RhdGUodmFsb3JBY3RpdmUucmVzcHVlc3RhKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0U2VsZWN0VmFsdWUodmFsb3JBY3RpdmU/LnJlc3B1ZXN0YSk7XHJcbiAgfSwgW3ZhbG9yQWN0aXZlLnJlc3B1ZXN0YV0pO1xyXG4gIGNvbnN0IGhhbmRsZXJFbGVnaXJSZXNwdWVzdGEgPSAoZSkgPT4ge1xyXG4gICAgc2V0VGVtcFJlc3Aoe1xyXG4gICAgICBwcmVndW50YTogZHRhanM/Ll9pZCxcclxuICAgICAgcmVzcHVlc3RhOiBlLnRhcmdldC52YWx1ZSxcclxuICAgIH0pO1xyXG4gICAgc2V0U2VsZWN0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZXJTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICghdGVtcFJlc3A/LnByZWd1bnRhIHx8ICF0ZW1wUmVzcD8ucHJlZ3VudGEpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGF0YUFsdW1ub1tjb252ZXJdID0gdGVtcFJlc3A7XHJcbiAgICAgIHRlc3RFeGFtKHtpZDp1c2VyPy51aWQsYXJyZTpkYXRhQWx1bW5vfSlcclxuICAgICAgc2V0VGVtcFJlc3Aoe30pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIHtkdGFqcz8ucHJlZ3VudGFfdHh0ID8gPGgxPntkdGFqcz8ucHJlZ3VudGFfdHh0fTwvaDE+IDogbnVsbH1cclxuICAgICAge2R0YWpzPy5wcmVndW50YV91cmwgPyAoXHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicmVzcG9uc2l2ZS1pbWcgbWF0ZXJpYWxib3hlZFwiXHJcbiAgICAgICAgICBzcmM9e2R0YWpzPy5wcmVndW50YV91cmx9XHJcbiAgICAgICAgICBhbHQ9XCJwcmVndW50YVwiXHJcbiAgICAgICAgICB3aWR0aD1cIjkwMHB4XCJcclxuICAgICAgICAgIGhlaWdodD1cIjU1MHB4XCJcclxuICAgICAgICAvPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZXJTdWJtaXR9PlxyXG4gICAgICAgIDxGb3JtQ29udHJvbCBjb21wb25lbnQ9XCJmaWVsZHNldFwiPlxyXG4gICAgICAgICAgPFJhZGlvR3JvdXBcclxuICAgICAgICAgICAgLy9kZWZhdWx0VmFsdWU9e3NlbGVjdFZhbHVlfVxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiZ2VuZGVyXCJcclxuICAgICAgICAgICAgbmFtZT1cImN1c3RvbWl6ZWQtcmFkaW9zXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICB2YWx1ZT1cIkFcIlxyXG4gICAgICAgICAgICAgIGNvbnRyb2w9ezxSYWRpbyAvPn1cclxuICAgICAgICAgICAgICBsYWJlbD17ZHRhanM/LnJlc3B1ZXN0YTF9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZXJFbGVnaXJSZXNwdWVzdGF9XHJcbiAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0VmFsdWUgPT09IFwiQVwifVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgIHZhbHVlPVwiQlwiXHJcbiAgICAgICAgICAgICAgY29udHJvbD17PFJhZGlvIC8+fVxyXG4gICAgICAgICAgICAgIGxhYmVsPXtkdGFqcz8ucmVzcHVlc3RhMn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlckVsZWdpclJlc3B1ZXN0YX1cclxuICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RWYWx1ZSA9PT0gXCJCXCJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgdmFsdWU9XCJDXCJcclxuICAgICAgICAgICAgICBjb250cm9sPXs8UmFkaW8gLz59XHJcbiAgICAgICAgICAgICAgbGFiZWw9e2R0YWpzPy5yZXNwdWVzdGEzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVyRWxlZ2lyUmVzcHVlc3RhfVxyXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdFZhbHVlID09PSBcIkNcIn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICB2YWx1ZT1cIkRcIlxyXG4gICAgICAgICAgICAgIGNvbnRyb2w9ezxSYWRpbyAvPn1cclxuICAgICAgICAgICAgICBsYWJlbD17ZHRhanM/LnJlc3B1ZXN0YTR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZXJFbGVnaXJSZXNwdWVzdGF9XHJcbiAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0VmFsdWUgPT09IFwiRFwifVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9SYWRpb0dyb3VwPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgIHN0YXJ0SWNvbj17PFNhdmVJY29uIC8+fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBHdWFyZGFyIFJlc3B1ZXN0YVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByZWd1bnRhMTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vYXNzZXRzL2pzb24vRXhhbWVuX1BlbnNhQW5saXRpY28uanNvblwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCx1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGFjY2lvblRlc3QsIGFjY2lvblRpcGUgfSBmcm9tIFwiLi4vcmVkdXgvYWNjaW9uXCI7XHJcbmltcG9ydCB7IHVzZVN0eWxlRXhhbSB9IGZyb20gXCIuLi9hc3NldHMvc3R5bGVcIjtcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIkBtYXRlcmlhbC11aS9sYWIvUGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgUGFnaW5hMSBmcm9tIFwiLi4vY29tcG9uZW50cy9FeGFtL1ByZWd1bnRhMVwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5jb25zdCBleGFtID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVFeGFtKCk7XHJcbiAgY29uc3QgYWx1bW5vID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYWx1bW5vKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaChhY2Npb25UZXN0KHRydWUpKTtcclxuICAgICAgZGlzcGF0Y2goYWNjaW9uVGlwZShcIlBlbnNhbWllbnRvIGFuYWzDrXRpY29cIikpO1xyXG5cclxuICAgICAgaWYgKCFhbHVtbm8/LmRhdGE/LmFjdGl2ZUV4YW0xKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvaG9tZVwiKTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaChhY2Npb25UZXN0KGZhbHNlKSk7XHJcbiAgICAgIGRpc3BhdGNoKGFjY2lvblRpcGUoXCJcIikpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgdmFsdWUpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKGAvZXhhbT9wYWdlPSR7dmFsdWV9YCk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gZWxlZ2lyKG51bWVybykge1xyXG4gICAgaWYgKG51bWVybyA8PSAwKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChudW1lcm8gPiA5MCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UGFnaW5hMVxyXG4gICAgICAgIGR0YWpzPXtkYXRhW3BhcnNlSW50KG51bWVybyldfVxyXG4gICAgICAgIGRhdGFBbHVtbm89e2FsdW1ubz8uZGF0YT8udGVzdCA/IGFsdW1ubz8uZGF0YT8udGVzdCA6IFtdfVxyXG4gICAgICAgIHRvZG9zPXthbHVtbm8/LmRhdGF9XHJcbiAgICAgICAgcG9zaXNpb249e251bWVyb31cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlNFQU5JIHwgUGVuc2FtaWVudG8gYW5hbMOtdGljbzwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAge2VsZWdpcihwYXJzZUludChyb3V0ZXIucXVlcnkucGFnZSkpfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIHRyYW5zcGFyZW50IGNlbnRlci1hbGlnblwiXHJcbiAgICAgICAgICBjb3VudD17ZGF0YS5sZW5ndGggLSAxfVxyXG4gICAgICAgICAgZGVmYXVsdFBhZ2U9ezF9XHJcbiAgICAgICAgICBwYWdlPXtwYXJzZUludChyb3V0ZXIucXVlcnkucGFnZSl9XHJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBleGFtO1xyXG4iLCJleHBvcnQgY29uc3QgYWNjaW9uQWx1bW5vID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IFwiQUxVTU5PXCIsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGEsXHJcbiAgICB9O1xyXG4gIH07XHJcbiAgIiwiZXhwb3J0IGNvbnN0IGFjY2lvblRlc3QgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogXCJURVNUXCIsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGEsXHJcbiAgICB9O1xyXG4gIH07XHJcbiAgIiwiZXhwb3J0IGNvbnN0IGFjY2lvblRpbWUgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogXCJUSU1FXCIsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGEsXHJcbiAgICB9O1xyXG4gIH07XHJcbiAgIiwiZXhwb3J0IGNvbnN0IGFjY2lvblRpcGUgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogXCJUSVBFXCIsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGEsXHJcbiAgICB9O1xyXG4gIH07XHJcbiAgIiwiZXhwb3J0IGNvbnN0IGFjY2lvblVzZXIgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogXCJVU0VSXCIsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGEsXHJcbiAgICB9O1xyXG4gIH07XHJcbiAgIiwiZXhwb3J0IHthY2Npb25UZXN0fSBmcm9tICcuL2FjY2lvblRlc3QnO1xyXG5leHBvcnQge2FjY2lvblVzZXJ9IGZyb20gJy4vYWNjaW9uVXNlcic7XHJcbmV4cG9ydCB7YWNjaW9uVGltZX0gZnJvbSAnLi9hY2Npb25UaW1lJztcclxuZXhwb3J0IHthY2Npb25UaXBlfSBmcm9tICcuL2FjY2lvblRpcGUnO1xyXG5leHBvcnQge2FjY2lvbkFsdW1ub30gZnJvbSAnLi9hY2Npb25BbHVtbm8nIiwiaW1wb3J0IHsgaG9zdCAsY29sbGVjdGlvbn0gZnJvbSBcIi4vdmFyaWFibGVzXCI7XHJcbmltcG9ydCB7ZGIsYXV0aH0gZnJvbSAnLi9maXJlYmFzZSdcclxuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJ1xyXG52YXIgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxubXlIZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbi8vdmFyIHJhdyA9IEpTT04uc3RyaW5naWZ5KHJlc3B1ZXN0YS51c2VyKTtcclxuXHJcbmNvbnN0IHJhdyA9IChkYXRhLCB0aXBlKSA9PiB7XHJcbiAgaWYgKCF0aXBlKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBtZXRob2Q6IHRpcGUsXHJcbiAgICBoZWFkZXJzOiBteUhlYWRlcnMsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIHJlZGlyZWN0OiBcImZvbGxvd1wiLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nSW4gPWFzeW5jIChkYXRhKT0+e1xyXG4gIHJldHVybiBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKFxyXG4gICAgZGF0YS5lbWFpbCxcclxuICAgIGRhdGEucGFzc3dvcmRcclxuICApXHJcbn1cclxuLy9nZXQgaW5mbyB1c2VyXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyID0oZGF0YSk9PntcclxuICAgIHJldHVybiBmZXRjaChgJHtob3N0fS9hcGkvdXNlcmAscmF3KGRhdGEsXCJQT1NUXCIpKS50aGVuKGRhdCA9PmRhdC5qc29uKCkpO1xyXG59XHJcbi8vYWN0aXZlIHNvY2tldFxyXG5leHBvcnQgY29uc3Qgb3BlblNvY2tldD1hc3luYyAoZGF0YSk9PntcclxuICBjb25zdCB7aWQsdGltZX0gPSBkYXRhXHJcbiAgYXdhaXQgZGIuZG9jKGAke2NvbGxlY3Rpb259LyR7aWR9YCkudXBkYXRlKHtcclxuICAgIHRpbWU6dGltZVxyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuLy8gdXBkYXRlIHJlc3BvbnNlIG9mIGFsdW1ub1xyXG5leHBvcnQgY29uc3QgdGVzdEV4YW0gPSBhc3luYyhkYXRhKT0+e1xyXG4gIGNvbnN0IHtpZCxhcnJlfSA9IGRhdGFcclxuICBhd2FpdCBkYi5kb2MoYCR7Y29sbGVjdGlvbn0vJHtpZH1gKS51cGRhdGUoeyB0ZXN0OiBhcnJlIH0pO1xyXG59XHJcbmV4cG9ydCBjb25zdCB0ZXN0TG9naWM9YXN5bmMoZGF0YSk9PntcclxuICBjb25zdCB7aWQsYXJyZX0gPSBkYXRhXHJcbiAgYXdhaXQgZGIuZG9jKGAke2NvbGxlY3Rpb259LyR7aWR9YCkudXBkYXRlKHsgbG9naWNvOiBhcnJlIH0pO1xyXG5cclxufVxyXG5leHBvcnQgY29uc3QgbGVuZ3VhRXhhbSA9YXN5bmMoZGF0YSk9PntcclxuICBjb25zdCB7aWQsYXJyZX0gPSBkYXRhXHJcbiAgYXdhaXQgZGIuZG9jKGAke2NvbGxlY3Rpb259LyR7aWR9YCkudXBkYXRlKHsgbGVuZ3VhOiBhcnJlIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWF0ZUV4YW0gPWFzeW5jKGRhdGEpPT57XHJcbiAgY29uc3Qge2lkLGFycmV9ID0gZGF0YVxyXG4gIGF3YWl0IGRiLmRvYyhgJHtjb2xsZWN0aW9ufS8ke2lkfWApLnVwZGF0ZSh7IG1hdGVtYXRpY286IGFycmUgfSk7XHJcblxyXG59XHJcblxyXG5cclxuLy9maW5pc2ggdGVzdFxyXG5leHBvcnQgY29uc3QgbWF0ZUNhbmNlbCA9YXN5bmMoZGF0YSk9PntcclxuICBhd2FpdCBkYi5kb2MoYCR7Y29sbGVjdGlvbn0vJHtkYXRhLmlkfWApLnVwZGF0ZSh7IGFjdGl2ZU1hdDogZmFsc2UgfSk7XHJcblxyXG59XHJcbmV4cG9ydCBjb25zdCBsb2dpQ2FuY2VsID1hc3luYyhkYXRhKT0+e1xyXG5cclxuICBhd2FpdCBkYi5kb2MoYCR7Y29sbGVjdGlvbn0vJHtkYXRhLmlkfWApLnVwZGF0ZSh7IGFjdGl2ZUxvZ2ljOiBmYWxzZSB9KTtcclxufVxyXG5leHBvcnQgY29uc3QgbGVuZ3VhQ2FuY2VsID1hc3luYyhkYXRhKT0+e1xyXG4gIGF3YWl0IGRiLmRvYyhgJHtjb2xsZWN0aW9ufS8ke2RhdGEuaWR9YCkudXBkYXRlKHsgYWN0aXZlTGVuZ3VhOiBmYWxzZSB9KTtcclxuXHJcbn1cclxuZXhwb3J0IGNvbnN0IGV4YW1DYW5jZWwgPWFzeW5jKGRhdGEpPT57XHJcbiAgYXdhaXQgZGIuZG9jKGAke2NvbGxlY3Rpb259LyR7ZGF0YS5pZH1gKS51cGRhdGUoeyBhY3RpdmVFeGFtMTogZmFsc2UgfSk7XHJcbn1cclxuLy9kZXN0cm95XHJcbmV4cG9ydCBjb25zdCBhbGxDYW5jZWwgPWFzeW5jKGRhdGEpPT57XHJcbiAgYXdhaXQgZGIuZG9jKGAke2NvbGxlY3Rpb259LyR7ZGF0YS5pZH1gKS51cGRhdGUoe1xyXG4gICAgYWN0aXZlTGVuZ3VhOiBmYWxzZSxcclxuICAgIGFjdGl2ZU1hdDogZmFsc2UsXHJcbiAgICBhY3RpdmVMb2dpYzogZmFsc2UsXHJcbiAgICBhY3RpdmVFeGFtMTogZmFsc2UsXHJcbiAgICB0aW1lOiAwLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKipHRVQgREFUQSBVU0VSICovXHJcbmV4cG9ydCBjb25zdCBnZXRJbml0aWFsID0gYXN5bmMgKHVpZCk9PntcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZGJcclxuICAgICAgLmNvbGxlY3Rpb24oY29sbGVjdGlvbilcclxuICAgICAgLndoZXJlKFwidXNlclwiLCBcIj09XCIsIHVpZClcclxuICAgICAgLmdldCgpO1xyXG4gICAgcmV0dXJuIHsgZGF0YTogZGF0YT8uZG9jc1swXT8uZGF0YSgpIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dPdXQgPSBhc3luYyAoKT0+e1xyXG4gIGF3YWl0IGF1dGguc2lnbk91dCgpO1xyXG59IiwiaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG4vKlxyXG5jb25zdCB7XHJcbiAgICBGSVJFQkFTRV9BVVRIRE9NQUlOLFxyXG4gICAgRklSRUJBU0VfREFUQUJBU0UsXHJcbiAgICBGSVJFQkFTRV9QUk9KRUNUX0lELFxyXG4gIH0gPSBwcm9jZXNzLmVudjtcclxuICBjb25zdCB7XHJcbiAgICBGSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCxcclxuICAgIEZJUkVCQVNFX1NFTkRFUl9JRCxcclxuICAgIEZJUkVCQVNFX0FQUF9JRCxcclxuICAgIEZJUkVCQVNFX01FTlNVUkFCTEUsXHJcbiAgfSA9IHByb2Nlc3MuZW52OyovXHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5RHhibFVNVHNBN0VRQUdWM2NnQ2NHTW9ZdWFCTjJfSWhrXCIsXHJcbiAgYXV0aERvbWFpbjogXCJ1dHQtZXhhbWVuLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vdXR0LWV4YW1lbi5maXJlYmFzZWlvLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJ1dHQtZXhhbWVuXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJ1dHQtZXhhbWVuLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMTg4OTg1NTAwODRcIixcclxuICBhcHBJZDogXCIxOjE4ODk4NTUwMDg0OndlYjpmMzMzYmVkN2QxOWM0NDRiMzU2YjExXCIsXHJcbiAgbWVhc3VyZW1lbnRJZDogXCJHLUVaSkJHTU1UNVJcIixcclxufTtcclxuXHJcbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcclxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxufVxyXG5cclxuY29uc3QgYXBwID0gZmlyZWJhc2UuYXBwKCk7XHJcbmNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XHJcbmNvbnN0IGF1ID0gZmlyZWJhc2UuYXV0aCgpO1xyXG5jb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG5jb25zdCBub3cgPSBmaXJlYmFzZS5maXJlc3RvcmUuVGltZXN0YW1wLm5vdygpO1xyXG5jb25zdCBzdG9yYWdlID0gZmlyZWJhc2Uuc3RvcmFnZSgpO1xyXG5cclxuZXhwb3J0IHsgYXV0aCwgZGIsIG5vdywgc3RvcmFnZSxhdSB9O1xyXG5cclxuLyoqXHJcbiAqICBhcGlLZXk6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQSV9LRVksXHJcbiAgICBhdXRoRG9tYWluOiBGSVJFQkFTRV9BVVRIRE9NQUlOLFxyXG4gICAgZGF0YWJhc2VVUkw6IEZJUkVCQVNFX0RBVEFCQVNFLFxyXG4gICAgcHJvamVjdElkOiBGSVJFQkFTRV9QUk9KRUNUX0lELFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogRklSRUJBU0VfU0VOREVSX0lELFxyXG4gICAgYXBwSWQ6IEZJUkVCQVNFX0FQUF9JRCxcclxuICAgIG1lYXN1cmVtZW50SWQ6IEZJUkVCQVNFX01FTlNVUkFCTEUsXHJcbiAqLyIsImV4cG9ydCBjb25zdCBob3N0ID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcclxuZXhwb3J0IGNvbnN0IGNvbGxlY3Rpb24gPSBcImFsdW1ub3MzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NhdmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2xhYi9QYWdpbmF0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9zdG9yYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9