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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ({

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2MHU");


/***/ }),

/***/ "2MHU":
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

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/lab/Pagination"
var Pagination_ = __webpack_require__("Jtos");
var Pagination_default = /*#__PURE__*/__webpack_require__.n(Pagination_);

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./redux/accion/index.js + 5 modules
var accion = __webpack_require__("np2V");

// EXTERNAL MODULE: ./assets/json/exam_PensaLogic.json
var exam_PensaLogic = __webpack_require__("CH5V");

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

// EXTERNAL MODULE: external "@material-ui/core/Radio"
var Radio_ = __webpack_require__("CUfL");
var Radio_default = /*#__PURE__*/__webpack_require__.n(Radio_);

// EXTERNAL MODULE: ./utils/api.js
var api = __webpack_require__("yzAy");

// CONCATENATED MODULE: ./components/Exam/Logic.jsx












const Logic = ({
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
      Object(api["j" /* testLogic */])({
        id: user === null || user === void 0 ? void 0 : user.uid,
        arre: dataAlumno
      });
      setTempResp({});
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
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

/* harmony default export */ var Exam_Logic = (Logic);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./pages/logico.jsx













const useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2)
    }
  }
}));

const logico = () => {
  const router = Object(router_["useRouter"])();
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const classes = useStyles();
  const alumno = Object(external_react_redux_["useSelector"])(state => state.alumno);
  Object(external_react_["useEffect"])(() => {
    var _alumno$data;

    dispatch(Object(accion["b" /* accionTest */])(true));
    dispatch(Object(accion["d" /* accionTipe */])("Comprensión lectora"));

    if (!(alumno !== null && alumno !== void 0 && (_alumno$data = alumno.data) !== null && _alumno$data !== void 0 && _alumno$data.activeLogic)) {
      router.push("/home");
    }

    return () => {
      dispatch(Object(accion["b" /* accionTest */])(false));
      dispatch(Object(accion["d" /* accionTipe */])(""));
    };
  }, []);

  const handleChange = (event, value) => {
    window.location.replace(`/logico?page=${value}`);
  };

  function elegir(numero) {
    var _alumno$data2, _alumno$data3;

    if (numero <= 0) {
      return false;
    }

    if (numero > 90) {
      return false;
    }

    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Exam_Logic, {
      dtajs: exam_PensaLogic[parseInt(numero)],
      dataAlumno: alumno !== null && alumno !== void 0 && (_alumno$data2 = alumno.data) !== null && _alumno$data2 !== void 0 && _alumno$data2.logico ? alumno === null || alumno === void 0 ? void 0 : (_alumno$data3 = alumno.data) === null || _alumno$data3 === void 0 ? void 0 : _alumno$data3.logico : [],
      todos: alumno === null || alumno === void 0 ? void 0 : alumno.data,
      posision: numero
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "SEANI | Comprensi\xF3n lectora"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_semantic_ui_react_["Container"], {
      children: [elegir(parseInt(router.query.page)), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: classes.root,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Pagination_default.a, {
          className: " transparent center-align",
          count: exam_PensaLogic.length - 1,
          defaultPage: 1,
          page: parseInt(router.query.page),
          color: "primary",
          onChange: handleChange
        })
      })]
    })]
  });
};

/* harmony default export */ var pages_logico = __webpack_exports__["default"] = (logico);

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

/***/ "CH5V":
/***/ (function(module) {

module.exports = JSON.parse("[{\"_id\":\"83\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F83%20-%20A.jpg?alt=media&token=836d466a-41e0-4345-a27a-7428f66a6ad2\",\"respuesta1\":\"1, 2\",\"respuesta2\":\"1, 3\",\"respuesta3\":\"2, 4\",\"respuesta4\":\"3, 4\"},{\"_id\":\"84\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F84%20-%20C.jpg?alt=media&token=fbbc76e6-2a98-4676-a5f1-1efd0266a9bd\",\"respuesta1\":\"La crítica no siempre resulta provechosa\",\"respuesta2\":\"Una sociedad con oposiciones política es crítica\",\"respuesta3\":\"La crítica es necesaria aunque resulte incómoda\",\"respuesta4\":\"En todos los ámbitos existe crítica\"},{\"_id\":\"85\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F85%20-%20D.jpg?alt=media&token=b50e8426-ceed-4589-bba5-8d1f9258e88f\",\"respuesta1\":\"En tiempos muy lejanos, cuando hacía mucho calor, a pesar de que era invierno, el director de una escuela entró sorpresivamente a un aula para supervisar las enseñanzas que se impartían a los grillitos\",\"respuesta2\":\"Un maestro grillo explica a sus alumnos el arte de cantar, les dice que la voz de los grillos es la mejor y más bella de las voces porque se produce por el frotamiento de las alas contra los costados\",\"respuesta3\":\"Hace tiempo, un viejo grillo que era director de una escuela supervisó a un maestro grillo, quien le explicaba a los alumnos el arte de cantar. El director quedó satisfecho con lo que se enseñaba\",\"respuesta4\":\"Un grillo viejo y sabio que se desempeñaba como director de una escuela queda satisfecho cuando las enseñanzas que un maestro grillo transmite a los alumnos. Las clases son como antes\"},{\"_id\":\"86\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F86%20-%20B.jpg?alt=media&token=6f504ad0-7ddc-4660-a3d0-0ccd614e3cb6\",\"respuesta1\":\"Los gobernantes promueven las campañas de lectura\",\"respuesta2\":\"La lectura articula una forma de pensamiento liberal\",\"respuesta3\":\"La Biblia es un motor para fomentar el hábito de la lectura\",\"respuesta4\":\"Los esclavos son el mejor ejemplo de promover la lectura\"},{\"_id\":\"87\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F87%20-%20A.jpg?alt=media&token=2b4fc9f2-cf23-4b70-be11-4bbfa64ea7d7\",\"respuesta1\":\"Cita\",\"respuesta2\":\"Referencia\",\"respuesta3\":\"Epígrafe\",\"respuesta4\":\"Paráfrasis\"},{\"_id\":\"88\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F88%20-%20D.jpg?alt=media&token=3ce395a1-6b19-4d81-ac4e-52422b54caff\",\"respuesta1\":\"1, 6, 5, 2, 4, 3\",\"respuesta2\":\"2, 3, 6, 4, 5, 1\",\"respuesta3\":\"3, 5, 4, 6, 2, 1\",\"respuesta4\":\"4, 2, 6, 1, 5, 3\"},{\"_id\":\"89\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F89%20-%20A%20.jpg?alt=media&token=c5710528-c00c-4a4f-b195-c4d924e23599\",\"respuesta1\":\"Contumaz\",\"respuesta2\":\"Nostálgico\",\"respuesta3\":\"Arrepentido\",\"respuesta4\":\"Retraído\"},{\"_id\":\"90\",\"pregunta_txt\":\"¿Cuál es la síntesis del texto?\",\"pregunta_url\":\"\",\"respuesta1\":\"En una noche de insomnio, el señor Scrouge recuerda sus errores, se le presenta la oportunidad de redimirse al evitar que un hombre muera ahogado. Pese al intento, ninguno de los dos lograra salvarse\",\"respuesta2\":\"Dando vueltas en su cama, el señor Scrouge gritos de auxilio en la calle y decide salir de la cama, sin importar el fuerte frío que hace, para ayudar a un hombre cuya vida se encuentra en peligro\",\"respuesta3\":\"Reconociendo los errores que ha cometido, el señor Scrouge decide sacrificarse y ayudar a un hombre que se está ahogado en el río, pero se hunde porque su corazón es de piedra.\",\"respuesta4\":\" \"},{\"_id\":\"91\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F91%20-%20A.jpg?alt=media&token=5092aed0-2975-4273-92d3-3c86e7e5903a\",\"respuesta1\":\"En el Congreso chileno 13% son mujeres y el resto hombres\",\"respuesta2\":\"Las mujeres en cargos de poder del gobierno chileno son 50%\",\"respuesta3\":\"El mismo número de hombres y mujeres tienen puestos de representación popular en Chile\",\"respuesta4\":\"En los parlamentos de América Latina existen la misma cantidad de hombres y de mujeres\"},{\"_id\":\"92\",\"pregunta_txt\":\"Del párrafo 1 se puede inferir que…\",\"pregunta_url\":\"\",\"respuesta1\":\"Evelyn Matthei fue la presidenta de ONU Mujeres después de Michelle Bachelet\",\"respuesta2\":\"La igualdad de género es parte fundamental de la propuesta política de Michelle Bachelet \",\"respuesta3\":\"Evelyn Matthei perdió las elecciones en Chile porque carecía de un programa educativo liberal\",\"respuesta4\":\"Michelle Bachelet privatizará el sector salud y aumentará impuestos en el sector educativo\"},{\"_id\":\"93\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F93%20-%20C.jpg?alt=media&token=f44ff159-3e1f-48c2-aa91-6ab1617b59b5\",\"respuesta1\":\"1, 5, 3, 4, 6, 2\",\"respuesta2\":\"3, 1, 6, 4, 2, 5\",\"respuesta3\":\"4, 1, 3, 6, 2, 5\",\"respuesta4\":\"4, 3, 2, 6, 5, 1\"},{\"_id\":\"94\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F94%20-%20%20D.jpg?alt=media&token=35ddc60a-da82-4b45-bf3e-8ae404ef8cc1\",\"respuesta1\":\"Diversidad de medios de comunicación\",\"respuesta2\":\"Transformación de la sociedad mexicana\",\"respuesta3\":\"Velocidad con la que ocurre la toma de decisiones\",\"respuesta4\":\"Aplicación de las nuevas tecnologías de información\"},{\"_id\":\"95\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F95%20-%20B.jpg?alt=media&token=32730e33-4872-42a0-8c7c-7b8541a69ebd\",\"respuesta1\":\"La alternativa que tienen los medios tradicionales de resurgir\",\"respuesta2\":\"La poca disposición de los internautas de pagar por noticias digitales\",\"respuesta3\":\"Los medios no pueden sobrevivir solo con dinero de la publicidad\",\"respuesta4\":\"La crisis económica que muy pronto vivirán los nuevos medios\"},{\"_id\":\"96\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F96%20-%20D.jpg?alt=media&token=98d030a3-0fa3-4058-9a92-19f462234e7d\",\"respuesta1\":\"estaba decepcionado de la humanidad\",\"respuesta2\":\"se entendía mejor con los perros que con los hombres\",\"respuesta3\":\"sentía un amor fraternal hacia los animales\",\"respuesta4\":\"encontró en los perros las respuestas que buscaba\"},{\"_id\":\"97\",\"pregunta_txt\":\"¿Cuál es la idea central del texto?\",\"pregunta_url\":\"\",\"respuesta1\":\"Por amor, un hombre aprendió a ladrar \",\"respuesta2\":\"Los animales entienden al hombre mejor que el hombre mismo\",\"respuesta3\":\"Cuando el hombre aprendió a ladrar encontró a su mejor amigo\",\"respuesta4\":\"El perro es el mejor amigo del hombre\"}]");

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