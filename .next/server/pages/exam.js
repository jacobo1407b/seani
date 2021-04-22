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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2k1k");


/***/ }),

/***/ "2k1k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./assets/json/Examen_PensaAnlitico.json
var Examen_PensaAnlitico = __webpack_require__("F4Q4");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./redux/accion/index.js + 5 modules
var accion = __webpack_require__("np2V");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./assets/style.js

const useStyleLogin = Object(styles_["makeStyles"])(theme => ({
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
const useStyleExam = Object(styles_["makeStyles"])(theme => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2)
    }
  }
}));
// EXTERNAL MODULE: external "@material-ui/lab/Pagination"
var Pagination_ = __webpack_require__("Jtos");
var Pagination_default = /*#__PURE__*/__webpack_require__.n(Pagination_);

// EXTERNAL MODULE: external "@material-ui/core/Radio"
var Radio_ = __webpack_require__("CUfL");
var Radio_default = /*#__PURE__*/__webpack_require__.n(Radio_);

// EXTERNAL MODULE: external "@material-ui/core/FormControl"
var FormControl_ = __webpack_require__("lWoh");
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);

// EXTERNAL MODULE: external "@material-ui/core/RadioGroup"
var RadioGroup_ = __webpack_require__("p1B1");
var RadioGroup_default = /*#__PURE__*/__webpack_require__.n(RadioGroup_);

// EXTERNAL MODULE: external "@material-ui/core/FormControlLabel"
var FormControlLabel_ = __webpack_require__("7s44");
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/icons/Save"
var Save_ = __webpack_require__("BwON");
var Save_default = /*#__PURE__*/__webpack_require__.n(Save_);

// EXTERNAL MODULE: ./utils/api.js
var api = __webpack_require__("yzAy");

// CONCATENATED MODULE: ./components/Exam/Pregunta1.jsx












const Pregunta1 = ({
  dtajs,
  dataAlumno,
  posision
}) => {
  const user = Object(external_react_redux_["useSelector"])(state => state.user);
  let conver = parseInt(posision);
  let valorActive = dataAlumno[conver] ? dataAlumno[conver] : "";
  const {
    0: tempResp,
    1: setTempResp
  } = Object(external_react_["useState"])({});
  const {
    0: selectValue,
    1: setSelectValue
  } = Object(external_react_["useState"])(valorActive.respuesta);
  Object(external_react_["useEffect"])(() => {
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
      Object(api["i" /* testExam */])({
        id: user === null || user === void 0 ? void 0 : user.uid,
        arre: dataAlumno
      });
      setTempResp({});
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "container",
    children: [dtajs !== null && dtajs !== void 0 && dtajs.pregunta_txt ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
      children: dtajs === null || dtajs === void 0 ? void 0 : dtajs.pregunta_txt
    }) : null, dtajs !== null && dtajs !== void 0 && dtajs.pregunta_url ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      className: "responsive-img materialboxed",
      src: dtajs === null || dtajs === void 0 ? void 0 : dtajs.pregunta_url,
      alt: "pregunta",
      width: "900px",
      height: "550px"
    }) : null, /*#__PURE__*/Object(jsx_runtime_["jsx"])("form", {
      onSubmit: handlerSubmit,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(FormControl_default.a, {
        component: "fieldset",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(RadioGroup_default.a //defaultValue={selectValue}
        , {
          "aria-label": "gender",
          name: "customized-radios",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(FormControlLabel_default.a, {
            value: "A",
            control: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Radio_default.a, {}),
            label: dtajs === null || dtajs === void 0 ? void 0 : dtajs.respuesta1,
            onChange: handlerElegirRespuesta,
            checked: selectValue === "A"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(FormControlLabel_default.a, {
            value: "B",
            control: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Radio_default.a, {}),
            label: dtajs === null || dtajs === void 0 ? void 0 : dtajs.respuesta2,
            onChange: handlerElegirRespuesta,
            checked: selectValue === "B"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(FormControlLabel_default.a, {
            value: "C",
            control: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Radio_default.a, {}),
            label: dtajs === null || dtajs === void 0 ? void 0 : dtajs.respuesta3,
            onChange: handlerElegirRespuesta,
            checked: selectValue === "C"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(FormControlLabel_default.a, {
            value: "D",
            control: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Radio_default.a, {}),
            label: dtajs === null || dtajs === void 0 ? void 0 : dtajs.respuesta4,
            onChange: handlerElegirRespuesta,
            checked: selectValue === "D"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button_default.a, {
          type: "submit",
          variant: "contained",
          color: "primary",
          size: "large",
          startIcon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Save_default.a, {}),
          children: "Guardar Respuesta"
        })]
      })
    })]
  });
};

/* harmony default export */ var Exam_Pregunta1 = (Pregunta1);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./pages/exam.jsx












const exam = () => {
  const router = Object(router_["useRouter"])();
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const classes = useStyleExam();
  const alumno = Object(external_react_redux_["useSelector"])(state => state.alumno);
  Object(external_react_["useEffect"])(() => {
    var _alumno$data;

    dispatch(Object(accion["b" /* accionTest */])(true));
    dispatch(Object(accion["d" /* accionTipe */])("Pensamiento analítico"));

    if (!(alumno !== null && alumno !== void 0 && (_alumno$data = alumno.data) !== null && _alumno$data !== void 0 && _alumno$data.activeExam1)) {
      router.push("/home");
    }

    return () => {
      dispatch(Object(accion["b" /* accionTest */])(false));
      dispatch(Object(accion["d" /* accionTipe */])(""));
    };
  }, []);

  const handleChange = (event, value) => {
    //router.push(`/exam?page=${value}`);
    window.location.replace(`/exam?page=${value}`);
  };

  function elegir(numero) {
    var _alumno$data2, _alumno$data3;

    if (numero <= 0) {
      return false;
    }

    if (numero > 90) {
      return false;
    }

    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Exam_Pregunta1, {
      dtajs: Examen_PensaAnlitico[parseInt(numero)],
      dataAlumno: alumno !== null && alumno !== void 0 && (_alumno$data2 = alumno.data) !== null && _alumno$data2 !== void 0 && _alumno$data2.test ? alumno === null || alumno === void 0 ? void 0 : (_alumno$data3 = alumno.data) === null || _alumno$data3 === void 0 ? void 0 : _alumno$data3.test : [],
      todos: alumno === null || alumno === void 0 ? void 0 : alumno.data,
      posision: numero
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "SEANI | Pensamiento anal\xEDtico"
      })
    }), elegir(parseInt(router.query.page)), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: classes.root,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Pagination_default.a, {
        className: " transparent center-align",
        count: Examen_PensaAnlitico.length - 1,
        defaultPage: 1,
        page: parseInt(router.query.page),
        color: "primary",
        onChange: handleChange
      })
    })]
  });
};

/* harmony default export */ var pages_exam = __webpack_exports__["default"] = (exam);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "7s44":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

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

/***/ "BwON":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Save");

/***/ }),

/***/ "CUfL":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Radio");

/***/ }),

/***/ "F4Q4":
/***/ (function(module) {

module.exports = JSON.parse("[{\"_id\":\"0\",\"pregunta_txt\":\" \",\"pregunta_url\":\"\",\"respuesta1\":\"\",\"respuesta2\":\"\",\"respuesta3\":\"\",\"respuesta4\":\"\"},{\"_id\":\"26\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F26%20-%20B.jpg?alt=media&token=8d095081-e9aa-47dc-9d79-5a82476bf4a9\",\"respuesta1\":\"A\",\"respuesta2\":\"B\",\"respuesta3\":\"C\",\"respuesta4\":\"D\"},{\"_id\":\"27\",\"pregunta_txt\":\"Todo número entero es racional. Todos los números racionales pertenecen a los números reales. La conclusión es ...\",\"pregunta_url\":\"\",\"respuesta1\":\"ningún racional es real\",\"respuesta2\":\"ningún entero es real\",\"respuesta3\":\"todo entero es real\",\"respuesta4\":\"todo racional es entero\"},{\"_id\":\"28\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F28%20-%20D.jpg?alt=media&token=ea63d00c-07f3-45f5-80b3-44dc11c4b070\",\"respuesta1\":\"xwjwytm\",\"respuesta2\":\"vuhuwrk\",\"respuesta3\":\"wvivxsz\",\"respuesta4\":\"wvivxsl\"},{\"_id\":\"29\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F29%20-%20.Cjpg.jpg?alt=media&token=ac098f41-f0c6-4554-83ea-c00f2f103b8d\",\"respuesta1\":\"O-H-3-4\",\"respuesta2\":\"V-3-H-4\",\"respuesta3\":\"V-H-4-3\",\"respuesta4\":\"V-H-38-4\"},{\"_id\":\"30\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F29%20-%20D%20.jpg?alt=media&token=f6536ac0-a750-4ba6-99e6-aff92620b7a9\",\"respuesta1\":\"C-M-0-3\",\"respuesta2\":\"C-M-2-3\",\"respuesta3\":\"C-M-2-6\",\"respuesta4\":\"C-M-3-2\"},{\"_id\":\"31\",\"pregunta_txt\":\"Son caballos que se registran para exposición, excepto ...\",\"pregunta_url\":\"\",\"respuesta1\":\"C-M-0-3\",\"respuesta2\":\"C-M-1-2\",\"respuesta3\":\"C-M-2-6\",\"respuesta4\":\"C-M-5-7\"},{\"_id\":\"32\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F32%20-%20B%20.jpg?alt=media&token=270be644-3bee-4c38-8d5f-48a6b080da28\",\"respuesta1\":\"36\",\"respuesta2\":\"38\",\"respuesta3\":\"39\",\"respuesta4\":\"44\"},{\"_id\":\"33\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F33%20-%20D%20.jpg?alt=media&token=2bff95ae-96da-44b5-bce5-e49d744ecfb8\",\"respuesta1\":\"A\",\"respuesta2\":\"B\",\"respuesta3\":\"C\",\"respuesta4\":\"D\"},{\"_id\":\"34\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F34%20-%20A.jpg?alt=media&token=ac84d855-63ee-48cc-acf1-20245437ce76\",\"respuesta1\":\"A\",\"respuesta2\":\"B\",\"respuesta3\":\"C\",\"respuesta4\":\"D\"},{\"_id\":\"35\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F35%20-%20B.jpg?alt=media&token=347db055-fa2c-435d-beda-940995ccd9c1\",\"respuesta1\":\"A\",\"respuesta2\":\"B\",\"respuesta3\":\"C\",\"respuesta4\":\"D\"},{\"_id\":\"36\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F36%20-%20C.jpg?alt=media&token=59360ee3-0694-41fa-ae57-0cac09ab31d1\",\"respuesta1\":\"A\",\"respuesta2\":\"B\",\"respuesta3\":\"C\",\"respuesta4\":\"D\"},{\"_id\":\"37\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F37%20-%20C%20.jpg?alt=media&token=a7902f0b-420e-4e6f-8cba-dd65c7a7ed5e\",\"respuesta1\":\"10\",\"respuesta2\":\"12\",\"respuesta3\":\"24\",\"respuesta4\":\"32\"},{\"_id\":\"38\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F38%20-%20D.jpg?alt=media&token=f5884441-c3ae-406e-b0a5-8ba2f0e6b29b\",\"respuesta1\":\"A\",\"respuesta2\":\"B\",\"respuesta3\":\"C\",\"respuesta4\":\"D\"},{\"_id\":\"39\",\"pregunta_txt\":\"Los siguientes elementos corresponden a la serie, excepto: 4, 7, 12, 19, 28 ...\",\"pregunta_url\":\"\",\"respuesta1\":\"39\",\"respuesta2\":\"49\",\"respuesta3\":\"403\",\"respuesta4\":\"1684\"},{\"_id\":\"40\",\"pregunta_txt\":\"¿Cuál es el elemento que continúa la serie? 18T, 26S, 35Q, 43P, 53Ñ, 61N ...\",\"pregunta_url\":\"\",\"respuesta1\":\"69L\",\"respuesta2\":\"70M\",\"respuesta3\":\"71M\",\"respuesta4\":\"72L\"},{\"_id\":\"40\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F40%20-%20C%20.jpg?alt=media&token=ef0a40f7-4790-4c0c-890a-443aa95f02cd\",\"respuesta1\":\"1\",\"respuesta2\":\"2\",\"respuesta3\":\"6\",\"respuesta4\":\"7\"},{\"_id\":\"41\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F41%20-%20D%20.jpg?alt=media&token=cdc5a7ae-5617-4272-928f-8d8407c102da\",\"respuesta1\":\"Futbol mantuvo su liderazgo los años incluidos en la encuesta\",\"respuesta2\":\"Box fue la segunda tendencia tanto en el año 2009 como en 2011\",\"respuesta3\":\"Basquetbol fue la segunda preferida en el año 2007 y en el año 2008\",\"respuesta4\":\"Futbol americano y golf obtuvieron su porcentaje más alto en 2009\"},{\"_id\":\"42\",\"pregunta_txt\":\"Completa el silogismo: Todos los libros son libros de referencia. Ningún libro de referencia es enciclopedia. Entonces ...\",\"pregunta_url\":\"\",\"respuesta1\":\"ningún libro es enciclopedia\",\"respuesta2\":\"todos los libros son enciclopedias\",\"respuesta3\":\"ningún libro no es enciclopedia \",\"respuesta4\":\"no todos lo libros son enciclopedias \"},{\"_id\":\"43\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F43%20-%20D.jpg?alt=media&token=c79d7cc8-7989-42f0-8915-a8407bd78a3e\",\"respuesta1\":\"510\",\"respuesta2\":\"1,020\",\"respuesta3\":\"5,010\",\"respuesta4\":\"10,020\"},{\"_id\":\"44\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F44%20-%20B%20.%20jpg.jpg?alt=media&token=589a1fbf-eef4-4de4-a148-ce84b85b6800\",\"respuesta1\":\"A\",\"respuesta2\":\"B\",\"respuesta3\":\"C\",\"respuesta4\":\"D\"},{\"_id\":\"45\",\"pregunta_txt\":\"¿Cuál es una proposición universal afirmativa?\",\"pregunta_url\":\"\",\"respuesta1\":\"Ningún esclavo se liberó\",\"respuesta2\":\"Juan conquistó su libertad\",\"respuesta3\":\"Lauro continua como esclavo\",\"respuesta4\":\"Todos los hombres son libres\"},{\"_id\":\"46\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F46%20-%20B.jpg?alt=media&token=eda70e73-4013-4289-9151-e36b0d3026d0\",\"respuesta1\":\"A\",\"respuesta2\":\"B\",\"respuesta3\":\"C\",\"respuesta4\":\"D\"},{\"_id\":\"47\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F47%20-%20B.jpg?alt=media&token=a1b4ba8f-d4a7-4c77-8271-da65c2ffc1a2\",\"respuesta1\":\"A\",\"respuesta2\":\"B\",\"respuesta3\":\"C\",\"respuesta4\":\"D\"},{\"_id\":\"48\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F48%20-%20B.jpg?alt=media&token=ad23b513-fd5a-4722-8f0e-1c521b7e8628\",\"respuesta1\":\"3\",\"respuesta2\":\"4\",\"respuesta3\":\"7\",\"respuesta4\":\"10\"},{\"_id\":\"49\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F49%20-%20B.jpg?alt=media&token=da48f4e3-7e6b-481a-bc80-12ab1e9ddd57\",\"respuesta1\":\"Los hongos Botrytis cinerea, Fusarium sp. y Colletrichum sp. infectan a algunas frutas y verduras\",\"respuesta2\":\"Andrea Trejo y Andrea Flores son las responsables de la investigación acerca de las infecciones por hongos\",\"respuesta3\":\"La sustancia que ataca a las plagas en frutas y verduras se obtiene de las plantas de orégano y eucalipto\",\"respuesta4\":\"El objetivo de la investigación fue combatir las plagas que enfermaban a ciertas frutas y verduras\"},{\"_id\":\"50\",\"pregunta_txt\":\"¿Qué letra continua con la serie? M, Ñ, Q, U\",\"pregunta_url\":\"\",\"respuesta1\":\"W\",\"respuesta2\":\"X\",\"respuesta3\":\"Y\",\"respuesta4\":\"Z\"},{\"_id\":\"51\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F51%20-%20A%20.jpg?alt=media&token=590d213f-d914-444f-9fe9-db2fe442c301\",\"respuesta1\":\"htxce\",\"respuesta2\":\"iuydf\",\"respuesta3\":\"gswbd\",\"respuesta4\":\"htwce\"},{\"_id\":\"52\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F52%20-%20D.jpg?alt=media&token=0253555b-2445-4c0b-ba42-bd7188f4ba15\",\"respuesta1\":\"Juan\",\"respuesta2\":\"Javier\",\"respuesta3\":\"Jésica\",\"respuesta4\":\"Janet\"},{\"_id\":\"53\",\"pregunta_txt\":\"Reloj es a tiempo como ...\",\"pregunta_url\":\"\",\"respuesta1\":\"estatura a metro\",\"respuesta2\":\"termómetro a frío\",\"respuesta3\":\"Vernier a nanómetro\",\"respuesta4\":\"Balanza a masa\"},{\"_id\":\"54\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F54%20-%20A%20.jpg?alt=media&token=89af000f-cb39-4161-a138-48d577f878ce\",\"respuesta1\":\"En el norte del país hay mejores oportunidades laborales\",\"respuesta2\":\"Existe un menor índice de bienestar en el sur del país\",\"respuesta3\":\"En el centro del país se presentan mejores oportunidades de vida\",\"respuesta4\":\"La mayoría de las entidades federativas requiere de una mayor inversión\"}]");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "Jtos":
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Pagination");

/***/ }),

/***/ "W+0S":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "lWoh":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

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

/***/ "p1B1":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/RadioGroup");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

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