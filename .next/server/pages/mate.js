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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ({

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("4BnH");


/***/ }),

/***/ "4BnH":
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

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./redux/accion/index.js + 5 modules
var accion = __webpack_require__("np2V");

// EXTERNAL MODULE: external "@material-ui/lab/Pagination"
var Pagination_ = __webpack_require__("Jtos");
var Pagination_default = /*#__PURE__*/__webpack_require__.n(Pagination_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: ./assets/json/examen_PensaMatematico.json
var examen_PensaMatematico = __webpack_require__("pa9O");

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

// CONCATENATED MODULE: ./components/Exam/Mat.jsx



 ////import { updateMate } from "../../utils/DataBase";









const Mat = ({
  dtajs,
  dataAlumno,
  posision,
  todos
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
    setSelectValue(valorActive.respuesta);
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
      dataAlumno[conver] = tempResp; //updateMate(localStorage.getItem("document"), dataAlumno);

      Object(api["h" /* mateExam */])({
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
      height: "550px" // onClick={zoomHandler}

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

/* harmony default export */ var Exam_Mat = (Mat);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./pages/mate.jsx













const useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2)
    }
  }
}));

const mate = () => {
  const router = Object(router_["useRouter"])();
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const classes = useStyles();
  const alumno = Object(external_react_redux_["useSelector"])(state => state.alumno);
  Object(external_react_["useEffect"])(() => {
    var _alumno$data;

    dispatch(Object(accion["b" /* accionTest */])(true));
    dispatch(Object(accion["d" /* accionTipe */])("Pensamiento matemático"));

    if (!(alumno !== null && alumno !== void 0 && (_alumno$data = alumno.data) !== null && _alumno$data !== void 0 && _alumno$data.activeMat)) {
      router.push("/home");
    }

    return () => {
      dispatch(Object(accion["b" /* accionTest */])(false));
      dispatch(Object(accion["d" /* accionTipe */])(""));
    };
  }, []);

  const handleChange = (event, value) => {
    window.location.replace(`/mate?page=${value}`);
  };

  function elegir(numero) {
    var _alumno$data2, _alumno$data3;

    if (numero <= 0) {
      return false;
    }

    if (numero > 90) {
      return false;
    }

    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Exam_Mat, {
      dtajs: examen_PensaMatematico[parseInt(numero)],
      dataAlumno: alumno !== null && alumno !== void 0 && (_alumno$data2 = alumno.data) !== null && _alumno$data2 !== void 0 && _alumno$data2.matematico ? alumno === null || alumno === void 0 ? void 0 : (_alumno$data3 = alumno.data) === null || _alumno$data3 === void 0 ? void 0 : _alumno$data3.matematico : [],
      todos: alumno === null || alumno === void 0 ? void 0 : alumno.data,
      posision: numero
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "SEANI | Pensamiento matem\xE1tico"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_semantic_ui_react_["Container"], {
      children: [elegir(router.query.page), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: classes.root,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Pagination_default.a, {
          className: " transparent center-align",
          count: examen_PensaMatematico.length - 1,
          defaultPage: 1,
          page: parseInt(router.query.page),
          color: "primary",
          onChange: handleChange
        })
      })]
    })]
  });
};

/* harmony default export */ var pages_mate = __webpack_exports__["default"] = (mate);

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

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

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

/***/ "pa9O":
/***/ (function(module) {

module.exports = JSON.parse("[{\"_id\":\"0\",\"pregunta_txt\":\" \",\"pregunta_url\":\"\",\"respuesta1\":\"\",\"respuesta2\":\"\",\"respuesta3\":\"\",\"respuesta4\":\"\"},{\"_id\":\"1\",\"pregunta_txt\":\"Es el resultado de realizar la operación: (9)(4) + 4/2.\",\"pregunta_url\":\"\",\"respuesta1\":\"14\",\"respuesta2\":\"20\",\"respuesta3\":\"38\",\"respuesta4\":\"40\"},{\"_id\":\"2\",\"pregunta_txt\":\"Desarrolle el binomio. (2x+3)(2x+5) \",\"pregunta_url\":\"\",\"respuesta1\":\"2X^2 + 15\",\"respuesta2\":\"4X^4 + 15\",\"respuesta3\":\"2X^2 + 8 + 15\",\"respuesta4\":\"4X^2 + 16 + 15\"},{\"_id\":\"3\",\"pregunta_txt\":\"La computadora de Francisco puede funcionar durante 8 horas continuas cuando la carga de su batería se encuentra en 95%. Si está indicada que le quedan 3.2 de energía para trabajar, ¿Cuál es su porcentaje de carga?\",\"pregunta_url\":\"\",\"respuesta1\":\"24.32\",\"respuesta2\":\"26.94\",\"respuesta3\":\"29.68\",\"respuesta4\":\"38.00\"},{\"_id\":\"4\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F4%20-%20B.jpg?alt=media&token=2e47cde5-cdb1-44b3-9789-f2f45b2a1c47\",\"respuesta1\":\"-2x^2 + 6x + 10\",\"respuesta2\":\"2x^2 + 10\",\"respuesta3\":\"-2x^2 + 7x + 10\",\"respuesta4\":\"-2x^2 + 10\"},{\"_id\":\"5\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F5%20-%20D.jpg?alt=media&token=18b7ee66-ec1c-4f25-94c3-aa1f169514ed\",\"respuesta1\":\"Porcentaje de libros de cada categoría\",\"respuesta2\":\"Probabilidad de elegir un libro al azar\",\"respuesta3\":\"Frecuencia absoluta de los diferentes temas\",\"respuesta4\":\"Frecuencia acumulada de las 4 categorías\"},{\"_id\":\"6\",\"pregunta_txt\":\"¿Cuál es la probabilidad de que al seleccionar un libro al azar sea de matemáticas o de literatura? \",\"pregunta_url\":\"\",\"respuesta1\":\"0.026\",\"respuesta2\":\"0.133\",\"respuesta3\":\"0.200\",\"respuesta4\":\"0.333\"},{\"_id\":\"7\",\"pregunta_txt\":\"¿Cuál es el valor de x, si 2 + (3/2)x = 7?\",\"pregunta_url\":\"\",\"respuesta1\":\"18/3\",\"respuesta2\":\"15/2\",\"respuesta3\":\"-10/3\",\"respuesta4\":\"10/3\"},{\"_id\":\"8\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F8%20-%20D.jpg?alt=media&token=c46569e3-5b64-449d-b340-c11dead503a7\",\"respuesta1\":\"a\",\"respuesta2\":\"b\",\"respuesta3\":\"c\",\"respuesta4\":\"d\"},{\"_id\":\"9\",\"pregunta_txt\":\"En un taller de dibujo técnico se pide elaborar un plano a escala 1 : 150 de la fechada de un edificio. Si el frente mide 127 m y su altura es de 30 m, ¿Cuál es el tamaño del papel, en metros, para encuadrar la fachada? \",\"pregunta_url\":\"\",\"respuesta1\":\"0.85 x 0.20\",\"respuesta2\":\"1.18 x 0.20\",\"respuesta3\":\"5.00 x 0.85\",\"respuesta4\":\"5.00 x 1.18\"},{\"_id\":\"10\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F10%20-%20B.jpg?alt=media&token=65a29fed-20c2-4668-8e19-3d4186c4dad8\",\"respuesta1\":\"2x^2 – 12x – 85\",\"respuesta2\":\"2x^2 – 12x -13\",\"respuesta3\":\"2x^2 – 12x +13\",\"respuesta4\":\"2x^2 – 12x +85\"},{\"_id\":\"11\",\"pregunta_txt\":\"Calcula el área que ocupa el espacio municipal. \",\"pregunta_url\":\"\",\"respuesta1\":\"-x^2 – 49 \",\"respuesta2\":\"–x^2 + 49\",\"respuesta3\":\"x^2 – 49\",\"respuesta4\":\"x^2 + 49\"},{\"_id\":\"12\",\"pregunta_txt\":\"¿Cuál expresión representa el área que ocupa el mercado?\",\"pregunta_url\":\"\",\"respuesta1\":\"x^2 – 9x -20\",\"respuesta2\":\"x^2 – 9x +20\",\"respuesta3\":\"x^2 + 9x -20\",\"respuesta4\":\"x^2 + 9x +20\"},{\"_id\":\"13\",\"pregunta_txt\":\"si se desea fotocopiar un libro de 180 páginas y la fotocopiadora se descompuso en el percentil 70 del trabajo, ¿Cuántas fotocopias se lograron procesar?\",\"pregunta_url\":\"\",\"respuesta1\":\"38\",\"respuesta2\":\"54\",\"respuesta3\":\"110\",\"respuesta4\":\"126\"},{\"_id\":\"14\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F14%20-B.jpg?alt=media&token=53fdebf3-b1e9-46db-a726-74f1577f04d6\",\"respuesta1\":\"3\",\"respuesta2\":\"10\",\"respuesta3\":\"25\",\"respuesta4\":\"30\"},{\"_id\":\"15\",\"pregunta_txt\":\"Desarrolla el binomio (2x – 2y)^3.\",\"pregunta_url\":\"\",\"respuesta1\":\"8x^3 – 8y^3\",\"respuesta2\":\"8x^3 – 8x^2y + 8xy^2 – 8y^3\",\"respuesta3\":\"8x^3 – 24x^2y + 24xy^2 – 8y^3\",\"respuesta4\":\"8x^3 – 48x^2y + 48xy^2 – 8y^3\"},{\"_id\":\"16\",\"pregunta_txt\":\"¿Cuál es el valor de las incógnitas del sistema de ecuaciones? 2x + 3y = 54 5x – 8y = -20 \",\"pregunta_url\":\"\",\"respuesta1\":\"x = -24, y = -34\",\"respuesta2\":\"x = 12, y = 10\",\"respuesta3\":\"x = 156, y = 34\",\"respuesta4\":\"x = 372, y = -230\"},{\"_id\":\"17\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F17%20-%20C%20.jpg?alt=media&token=8cfde20e-03c6-4d65-8984-0bf6f5700760\",\"respuesta1\":\"7\",\"respuesta2\":\"2/3\",\"respuesta3\":\"1/2\",\"respuesta4\":\"1/3\"},{\"_id\":\"18\",\"pregunta_txt\":\"Mario pesa 98 kg y su médico lo somete a una dieta que le permite bajar 3 kg por mes. ¿Cuál será su peso después de x meses?\",\"pregunta_url\":\"\",\"respuesta1\":\"w = 3x – 98 \",\"respuesta2\":\"w = 98 + 3x\",\"respuesta3\":\"w = 98 – 3x \",\"respuesta4\":\"w = 98 – 3 – x\"},{\"_id\":\"19\",\"pregunta_txt\":\"¿Cuál es el punto medio de la receta numérica que une los puntos a = -2 y b = 10?\",\"pregunta_url\":\"\",\"respuesta1\":\"-6\",\"respuesta2\":\"-4\",\"respuesta3\":\"4\",\"respuesta4\":\"6\"},{\"_id\":\"20\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F20%20-%20A.jpg?alt=media&token=96d4541e-e11d-4582-9704-a6802349e1cb\",\"respuesta1\":\"9/15\",\"respuesta2\":\"12/15\",\"respuesta3\":\"15/12\",\"respuesta4\":\"15/9\"},{\"_id\":\"21\",\"pregunta_txt\":\"Aurora compró un delineador, una máscara para pestañas y un labial, y pagó $165 por los 3 productos. Si el costo del delineador excede $25 a la máscara y $5 al labial. ¿Cuánto costó el delineador?\",\"pregunta_url\":\"\",\"respuesta1\":\"$45\",\"respuesta2\":\"$55\",\"respuesta3\":\"$65\",\"respuesta4\":\"$135\"},{\"_id\":\"22\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F22%20-%20C%20.jpg?alt=media&token=0fe42d8f-0252-4d0c-8468-aebcf4329e59\",\"respuesta1\":\"2\",\"respuesta2\":\"6\",\"respuesta3\":\"11\",\"respuesta4\":\"17\"},{\"_id\":\"23\",\"pregunta_txt\":\"El número de días que necesitó un grupo de trabajadores para terminar 5 instalaciones de iguales características fue 13, 12, 15, 11 y 14. ¿Cuál es la media de los datos?\",\"pregunta_url\":\"\",\"respuesta1\":\"11\",\"respuesta2\":\"12\",\"respuesta3\":\"13\",\"respuesta4\":\"15\"},{\"_id\":\"24\",\"pregunta_txt\":\"Una compañía realizó un estudio y pidió a un grupo de personas que seleccionara únicamente un tipo de chocolate: 70 preferían chocolate blanco, 58 chocolate amargo y 92 chocolate con frutas. Determine aleatoriamente la probabilidad de que la preferencia sea chocolate amargo. \",\"pregunta_url\":\"\",\"respuesta1\":\"29/100\",\"respuesta2\":\"29/220\",\"respuesta3\":\"35/110\",\"respuesta4\":\"70/220\"},{\"_id\":\"25\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F25%20-%20A%20.jpg?alt=media&token=0767ef80-3461-44dc-bbc3-23b86ce35df2\",\"respuesta1\":\"√31\",\"respuesta2\":\"√91\",\"respuesta3\":\"31\",\"respuesta4\":\"91\"}]");

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