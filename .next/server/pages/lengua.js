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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ({

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("bwuw");


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

/***/ "Y6IQ":
/***/ (function(module) {

module.exports = JSON.parse("[{\"_id\":\"\",\"pregunta_txt\":\"\",\"pregunta_url\":\"\",\"respuesta1\":\"\",\"respuesta2\":\"\",\"respuesta3\":\"\",\"respuesta4\":\"\"},{\"_id\":\"58\",\"pregunta_txt\":\"¿Qué oraciones presentan un tiempo verbal compuesto? \",\"pregunta_url\":\"\",\"respuesta1\":\"Di ropa para los ancianos que viven en la calle\",\"respuesta2\":\"El pueblo está más cerca de lo que pensamos\",\"respuesta3\":\"Solemos pensar en aquello que hemos vivido\",\"respuesta4\":\"La señora que habla con calma es enfermera\"},{\"_id\":\"59\",\"pregunta_txt\":\"¿Cuál es una oración impersonal? \",\"pregunta_url\":\"\",\"respuesta1\":\"En una horas dejará de llover \",\"respuesta2\":\"Los profesores nos regañaron \",\"respuesta3\":\"La sentencia fue dictada ese día\",\"respuesta4\":\"El queso ha caducado\"},{\"_id\":\"60\",\"pregunta_txt\":\"¿Cuál es el sustantivo que al convertirlo en plural es irregular? \",\"pregunta_url\":\"\",\"respuesta1\":\"Cruz\",\"respuesta2\":\"Buzo\",\"respuesta3\":\"Ave\",\"respuesta4\":\"Vaso\"},{\"_id\":\"61\",\"pregunta_txt\":\"¿En qué oración el adjetivo es superlativo\",\"pregunta_url\":\"\",\"respuesta1\":\"Esa muchacha es hermosa \",\"respuesta2\":\"Ella es tan alta como Juan\",\"respuesta3\":\"Fue un examen complicado \",\"respuesta4\":\"Es un problema antiquísimo\"},{\"_id\":\"62\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F62%20-%20D%20.jpg?alt=media&token=6fb90ce2-71ca-43c8-8ed6-eea053b43f31\",\"respuesta1\":\"1a, 2d, 3c\",\"respuesta2\":\"1b, 2a, 3d\",\"respuesta3\":\"1b, 2c, 3d\",\"respuesta4\":\"1c, 2b, 3a\"},{\"_id\":\"63\",\"pregunta_txt\":\"63. Elija la opción que contiene únicamente palabras con acento prosódico.\",\"pregunta_url\":\"\",\"respuesta1\":\"Pentágono, corazón, María \",\"respuesta2\":\"Veracruz, azul, loma\",\"respuesta3\":\"Panteón, Martín, solo\",\"respuesta4\":\"d) Soledad, circo, sí\"},{\"_id\":\"64\",\"pregunta_txt\":\"¿Qué característica tiene los adjetivos marcados? Los idealistas son auténticos , Lo soñador es lo que mejor va conmigo, La fantasiosa llegó del viaje\",\"pregunta_url\":\"\",\"respuesta1\":\"Se encuentran sustantivos\",\"respuesta2\":\"Funcionan como modificadores distintos\",\"respuesta3\":\"Son pronominales\",\"respuesta4\":\"Son completos predicativos\"},{\"_id\":\"65\",\"pregunta_txt\":\"¿En qué oración la preposición de indica propiedad?\",\"pregunta_url\":\"\",\"respuesta1\":\"Mis sobrinos vienen de Argentina\",\"respuesta2\":\"La cultura de mi país es amplia\",\"respuesta3\":\"Miguel está de visita en mi casa\",\"respuesta4\":\"El libro de astronomía es increíble \"},{\"_id\":\"66\",\"pregunta_txt\":\"¿Cuál es el plural de mordaz?\",\"pregunta_url\":\"\",\"respuesta1\":\"Mordaces\",\"respuesta2\":\"Mordazes\",\"respuesta3\":\"Mordases\",\"respuesta4\":\"Mordazez\"},{\"_id\":\"67\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F67%20-%20D.jpg?alt=media&token=3826380a-eb78-43a7-9eb4-886c933a8dd7\",\"respuesta1\":\"Comparativo\",\"respuesta2\":\"Positivo\",\"respuesta3\":\"Superlativo\",\"respuesta4\":\"Aumentativo\"},{\"_id\":\"68\",\"pregunta_txt\":\"¿Qué párrafo presenta un uso correcto de la coma?\",\"pregunta_url\":\"\",\"respuesta1\":\"Sara lee un libro Luis estudia, el pequeño juega con su carrito, y la abuela les hace compañía mientras teje un chaleco\",\"respuesta2\":\"Mi hermanita Carmen la más pequeña, tienen los cuidados de todos nosotros. Además es risueña dulce, graciosa y tierna\",\"respuesta3\":\"Buenos Aires, la capital es una ciudad muy populosa. Juan no lo cree, ni tú lo crees no yo lo creo, ni nadie lo cree\",\"respuesta4\":\"Francisco I. Madrero fue prescindente de México, hombre sencillo e idealista. Sin embargo, fue exiliado por sus ideas.\"},{\"_id\":\"69\",\"pregunta_txt\":\"En la oración, ¿Cuáles son las palabras que deben escribirse con acento gráfico? Tu1 tio2 te3 dijo: “Se4 por que5 no esta6 Mario”.\",\"pregunta_url\":\"\",\"respuesta1\":\"1, 2, 4, 5\",\"respuesta2\":\"1, 3, 4, 6\",\"respuesta3\":\"2, 3, 5, 6\",\"respuesta4\":\"2, 4, 5, 6\"},{\"_id\":\"70\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F70%20-%20D.jpg?alt=media&token=21966cf1-708e-4e16-b4f6-c3b99a4a1b42\",\"respuesta1\":\"1, 3\",\"respuesta2\":\"1, 4\",\"respuesta3\":\"2, 3\",\"respuesta4\":\"2, 4\"},{\"_id\":\"71\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F71%20-%20B%20.jpg?alt=media&token=8b2b752d-6428-4316-adce-75455dd4fd5b\",\"respuesta1\":\"1ab, 2cd\",\"respuesta2\":\"1ad, 2bc\",\"respuesta3\":\"1bc, 2ad\",\"respuesta4\":\"1bd, 2acg\"},{\"_id\":\"72\",\"pregunta_txt\":\"¿Cuál oración usa correctamente el acento diacrítico?\",\"pregunta_url\":\"\",\"respuesta1\":\"Tu arribaste después que tú primo\",\"respuesta2\":\"Té dije que han traído la caja de te\",\"respuesta3\":\"Él mejor obrero de la empresa es el\",\"respuesta4\":\"Sé que Mariana se fue una mañana\"},{\"_id\":\"73\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F73%20-%20A.jpg?alt=media&token=3ed512d4-59a5-4648-b7a2-39b277f7da42\",\"respuesta1\":\"1, 20\",\"respuesta2\":\"1, 4\",\"respuesta3\":\"2, 3\",\"respuesta4\":\"3, 4\"},{\"_id\":\"74\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F74%20-%20C.jpg?alt=media&token=dede116a-9d87-4a48-b79e-ca41ad429522\",\"respuesta1\":\"concibe\",\"respuesta2\":\"proyecta\",\"respuesta3\":\"plagia\",\"respuesta4\":\"crea\"},{\"_id\":\"75\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F75%20-%20D.jpg?alt=media&token=87b36729-abd3-4466-a80b-a85bdcadb241\",\"respuesta1\":\"1, 2, 3, 4\",\"respuesta2\":\"2, 1, 3, 4\",\"respuesta3\":\"2, 3, 4, 1\",\"respuesta4\":\"3, 2, 1, 4\"},{\"_id\":\"76\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F76%20-%20C%20.jpg?alt=media&token=8418f360-70d1-439e-8bed-161e26e9fd35\",\"respuesta1\":\"1, 2, 4\",\"respuesta2\":\"1, 3, 5\",\"respuesta3\":\"2, 3, 4\",\"respuesta4\":\"3, 4, 5\"},{\"_id\":\"77\",\"pregunta_txt\":\"Sinónimo de precepto.\",\"pregunta_url\":\"\",\"respuesta1\":\"Regla\",\"respuesta2\":\"Prefecto\",\"respuesta3\":\"Perfecto\",\"respuesta4\":\"Regalo\"},{\"_id\":\"78\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F78%20-%20B%20.jpg?alt=media&token=33bfc821-8d0b-4377-a6ea-653546e118e5\",\"respuesta1\":\"z – s – s – z – s\",\"respuesta2\":\"s – z – c – s – z\",\"respuesta3\":\"s – s – s – z – s\",\"respuesta4\":\"c – z – z – s – z\"},{\"_id\":\"79\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F79%20-%20B.jpg?alt=media&token=dc1f0b64-7d24-4454-8e42-73b34c475efa\",\"respuesta1\":\"Versatilidad\",\"respuesta2\":\"Erudición\",\"respuesta3\":\"Certeza\",\"respuesta4\":\"Conciencia\"},{\"_id\":\"80\",\"pregunta_txt\":\"El antónimo de leonino es…\",\"pregunta_url\":\"\",\"respuesta1\":\"Justo\",\"respuesta2\":\"León\",\"respuesta3\":\"Felino\",\"respuesta4\":\"Abusivo\"},{\"_id\":\"81\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F81%20-%20A.jpg?alt=media&token=ea94257f-da1c-4353-b3bb-1151df7e43ae\",\"respuesta1\":\"Jugo\",\"respuesta2\":\"Sumo\",\"respuesta3\":\"Néctar\",\"respuesta4\":\"Zumbo\"},{\"_id\":\"82\",\"pregunta_txt\":\"Elija las oraciones que tengan palabras homónimas.\",\"pregunta_url\":\"\",\"respuesta1\":\"El jefe es muy terco y no admite su error; un hombre necio jamás escucha razones\",\"respuesta2\":\"En competencias, mi hijo nada muy veloz; sé que nada será igual desde este momento\",\"respuesta3\":\"La planta absorbe sustancias minerales del suelo; el carbón activo absorbe las sustancias toxicas\",\"respuesta4\":\"Una vaca puede dar 20 L de leche diarios; el toro bravo es originario de la Península Ibérica.\"}]");

/***/ }),

/***/ "bwuw":
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

// EXTERNAL MODULE: ./assets/json/exam_EstrucLengua.json
var exam_EstrucLengua = __webpack_require__("Y6IQ");

// EXTERNAL MODULE: external "@material-ui/lab/Pagination"
var Pagination_ = __webpack_require__("Jtos");
var Pagination_default = /*#__PURE__*/__webpack_require__.n(Pagination_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

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

// EXTERNAL MODULE: external "@material-ui/core/Radio"
var Radio_ = __webpack_require__("CUfL");
var Radio_default = /*#__PURE__*/__webpack_require__.n(Radio_);

// CONCATENATED MODULE: ./components/Exam/Lengua.jsx












const Lengua = ({
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
      dataAlumno[conver] = tempResp;
      Object(api["d" /* lenguaExam */])({
        id: user === null || user === void 0 ? void 0 : user.uid,
        arre: dataAlumno
      }); //aqui para actualizar

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

/* harmony default export */ var Exam_Lengua = (Lengua);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./pages/lengua.jsx













const useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2)
    }
  }
}));

const lengua = () => {
  const router = Object(router_["useRouter"])();
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const classes = useStyles();
  const user = Object(external_react_redux_["useSelector"])(state => state.user);
  const alumno = Object(external_react_redux_["useSelector"])(state => state.alumno);
  Object(external_react_["useEffect"])(() => {
    var _alumno$data;

    dispatch(Object(accion["b" /* accionTest */])(true));
    dispatch(Object(accion["d" /* accionTipe */])("Estructura de la lengua"));

    if (!(alumno !== null && alumno !== void 0 && (_alumno$data = alumno.data) !== null && _alumno$data !== void 0 && _alumno$data.activeLengua)) {
      router.push("/home");
    }

    return () => {
      dispatch(Object(accion["b" /* accionTest */])(false));
      dispatch(Object(accion["d" /* accionTipe */])(""));
    };
  }, []);

  const handleChange = (event, value) => {
    //router.push(`/lengua?page=${value}`);
    window.location.replace(`/lengua?page=${value}`);
  };

  function elegir(numero) {
    var _alumno$data2, _alumno$data3;

    if (numero <= 0) {
      return false;
    }

    if (numero > 90) {
      return false;
    }

    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Exam_Lengua, {
      dtajs: exam_EstrucLengua[parseInt(numero)],
      dataAlumno: alumno !== null && alumno !== void 0 && (_alumno$data2 = alumno.data) !== null && _alumno$data2 !== void 0 && _alumno$data2.lengua ? alumno === null || alumno === void 0 ? void 0 : (_alumno$data3 = alumno.data) === null || _alumno$data3 === void 0 ? void 0 : _alumno$data3.lengua : [],
      todos: alumno === null || alumno === void 0 ? void 0 : alumno.data,
      posision: numero
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "SEANI | Estructura de la lengua"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_semantic_ui_react_["Container"], {
      children: [elegir(router.query.page), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: classes.root,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Pagination_default.a, {
          className: " transparent center-align",
          count: exam_EstrucLengua.length - 1,
          defaultPage: 1,
          page: parseInt(router.query.page),
          color: "primary",
          onChange: handleChange
        })
      })]
    })]
  });
};

/* harmony default export */ var pages_lengua = __webpack_exports__["default"] = (lengua);

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