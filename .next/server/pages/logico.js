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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/logico.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/json/exam_PensaLogic.json":
/*!******************************************!*\
  !*** ./assets/json/exam_PensaLogic.json ***!
  \******************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"_id\":\"83\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F83%20-%20A.jpg?alt=media&token=836d466a-41e0-4345-a27a-7428f66a6ad2\",\"respuesta1\":\"1, 2\",\"respuesta2\":\"1, 3\",\"respuesta3\":\"2, 4\",\"respuesta4\":\"3, 4\"},{\"_id\":\"84\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F84%20-%20C.jpg?alt=media&token=fbbc76e6-2a98-4676-a5f1-1efd0266a9bd\",\"respuesta1\":\"La crítica no siempre resulta provechosa\",\"respuesta2\":\"Una sociedad con oposiciones política es crítica\",\"respuesta3\":\"La crítica es necesaria aunque resulte incómoda\",\"respuesta4\":\"En todos los ámbitos existe crítica\"},{\"_id\":\"85\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F85%20-%20D.jpg?alt=media&token=b50e8426-ceed-4589-bba5-8d1f9258e88f\",\"respuesta1\":\"En tiempos muy lejanos, cuando hacía mucho calor, a pesar de que era invierno, el director de una escuela entró sorpresivamente a un aula para supervisar las enseñanzas que se impartían a los grillitos\",\"respuesta2\":\"Un maestro grillo explica a sus alumnos el arte de cantar, les dice que la voz de los grillos es la mejor y más bella de las voces porque se produce por el frotamiento de las alas contra los costados\",\"respuesta3\":\"Hace tiempo, un viejo grillo que era director de una escuela supervisó a un maestro grillo, quien le explicaba a los alumnos el arte de cantar. El director quedó satisfecho con lo que se enseñaba\",\"respuesta4\":\"Un grillo viejo y sabio que se desempeñaba como director de una escuela queda satisfecho cuando las enseñanzas que un maestro grillo transmite a los alumnos. Las clases son como antes\"},{\"_id\":\"86\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F86%20-%20B.jpg?alt=media&token=6f504ad0-7ddc-4660-a3d0-0ccd614e3cb6\",\"respuesta1\":\"Los gobernantes promueven las campañas de lectura\",\"respuesta2\":\"La lectura articula una forma de pensamiento liberal\",\"respuesta3\":\"La Biblia es un motor para fomentar el hábito de la lectura\",\"respuesta4\":\"Los esclavos son el mejor ejemplo de promover la lectura\"},{\"_id\":\"87\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F87%20-%20A.jpg?alt=media&token=2b4fc9f2-cf23-4b70-be11-4bbfa64ea7d7\",\"respuesta1\":\"Cita\",\"respuesta2\":\"Referencia\",\"respuesta3\":\"Epígrafe\",\"respuesta4\":\"Paráfrasis\"},{\"_id\":\"88\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F88%20-%20D.jpg?alt=media&token=3ce395a1-6b19-4d81-ac4e-52422b54caff\",\"respuesta1\":\"1, 6, 5, 2, 4, 3\",\"respuesta2\":\"2, 3, 6, 4, 5, 1\",\"respuesta3\":\"3, 5, 4, 6, 2, 1\",\"respuesta4\":\"4, 2, 6, 1, 5, 3\"},{\"_id\":\"89\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F89%20-%20A%20.jpg?alt=media&token=c5710528-c00c-4a4f-b195-c4d924e23599\",\"respuesta1\":\"Contumaz\",\"respuesta2\":\"Nostálgico\",\"respuesta3\":\"Arrepentido\",\"respuesta4\":\"Retraído\"},{\"_id\":\"90\",\"pregunta_txt\":\"¿Cuál es la síntesis del texto?\",\"pregunta_url\":\"\",\"respuesta1\":\"En una noche de insomnio, el señor Scrouge recuerda sus errores, se le presenta la oportunidad de redimirse al evitar que un hombre muera ahogado. Pese al intento, ninguno de los dos lograra salvarse\",\"respuesta2\":\"Dando vueltas en su cama, el señor Scrouge gritos de auxilio en la calle y decide salir de la cama, sin importar el fuerte frío que hace, para ayudar a un hombre cuya vida se encuentra en peligro\",\"respuesta3\":\"Reconociendo los errores que ha cometido, el señor Scrouge decide sacrificarse y ayudar a un hombre que se está ahogado en el río, pero se hunde porque su corazón es de piedra.\",\"respuesta4\":\" \"},{\"_id\":\"91\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F91%20-%20A.jpg?alt=media&token=5092aed0-2975-4273-92d3-3c86e7e5903a\",\"respuesta1\":\"En el Congreso chileno 13% son mujeres y el resto hombres\",\"respuesta2\":\"Las mujeres en cargos de poder del gobierno chileno son 50%\",\"respuesta3\":\"El mismo número de hombres y mujeres tienen puestos de representación popular en Chile\",\"respuesta4\":\"En los parlamentos de América Latina existen la misma cantidad de hombres y de mujeres\"},{\"_id\":\"92\",\"pregunta_txt\":\"Del párrafo 1 se puede inferir que…\",\"pregunta_url\":\"\",\"respuesta1\":\"Evelyn Matthei fue la presidenta de ONU Mujeres después de Michelle Bachelet\",\"respuesta2\":\"La igualdad de género es parte fundamental de la propuesta política de Michelle Bachelet \",\"respuesta3\":\"Evelyn Matthei perdió las elecciones en Chile porque carecía de un programa educativo liberal\",\"respuesta4\":\"Michelle Bachelet privatizará el sector salud y aumentará impuestos en el sector educativo\"},{\"_id\":\"93\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F93%20-%20C.jpg?alt=media&token=f44ff159-3e1f-48c2-aa91-6ab1617b59b5\",\"respuesta1\":\"1, 5, 3, 4, 6, 2\",\"respuesta2\":\"3, 1, 6, 4, 2, 5\",\"respuesta3\":\"4, 1, 3, 6, 2, 5\",\"respuesta4\":\"4, 3, 2, 6, 5, 1\"},{\"_id\":\"94\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F94%20-%20%20D.jpg?alt=media&token=35ddc60a-da82-4b45-bf3e-8ae404ef8cc1\",\"respuesta1\":\"Diversidad de medios de comunicación\",\"respuesta2\":\"Transformación de la sociedad mexicana\",\"respuesta3\":\"Velocidad con la que ocurre la toma de decisiones\",\"respuesta4\":\"Aplicación de las nuevas tecnologías de información\"},{\"_id\":\"95\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F95%20-%20B.jpg?alt=media&token=32730e33-4872-42a0-8c7c-7b8541a69ebd\",\"respuesta1\":\"La alternativa que tienen los medios tradicionales de resurgir\",\"respuesta2\":\"La poca disposición de los internautas de pagar por noticias digitales\",\"respuesta3\":\"Los medios no pueden sobrevivir solo con dinero de la publicidad\",\"respuesta4\":\"La crisis económica que muy pronto vivirán los nuevos medios\"},{\"_id\":\"96\",\"pregunta_txt\":\" \",\"pregunta_url\":\"https://firebasestorage.googleapis.com/v0/b/seani-954ac.appspot.com/o/imgPreguntas%2F96%20-%20D.jpg?alt=media&token=98d030a3-0fa3-4058-9a92-19f462234e7d\",\"respuesta1\":\"estaba decepcionado de la humanidad\",\"respuesta2\":\"se entendía mejor con los perros que con los hombres\",\"respuesta3\":\"sentía un amor fraternal hacia los animales\",\"respuesta4\":\"encontró en los perros las respuestas que buscaba\"},{\"_id\":\"97\",\"pregunta_txt\":\"¿Cuál es la idea central del texto?\",\"pregunta_url\":\"\",\"respuesta1\":\"Por amor, un hombre aprendió a ladrar \",\"respuesta2\":\"Los animales entienden al hombre mejor que el hombre mismo\",\"respuesta3\":\"Cuando el hombre aprendió a ladrar encontró a su mejor amigo\",\"respuesta4\":\"El perro es el mejor amigo del hombre\"}]");

/***/ }),

/***/ "./components/Exam/Logic.jsx":
/*!***********************************!*\
  !*** ./components/Exam/Logic.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "@material-ui/core/RadioGroup");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Save */ "@material-ui/icons/Save");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Radio */ "@material-ui/core/Radio");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.js");

var _jsxFileName = "C:\\proyectos\\next\\seani\\components\\Exam\\Logic.jsx";










const Logic = ({
  dtajs,
  dataAlumno,
  posision,
  todos
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
      Object(_utils_api__WEBPACK_IMPORTED_MODULE_9__["testLogic"])({
        id: user === null || user === void 0 ? void 0 : user.uid,
        arre: dataAlumno
      });
      setTempResp({});
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [dtajs !== null && dtajs !== void 0 && dtajs.pregunta_txt ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: dtajs === null || dtajs === void 0 ? void 0 : dtajs.pregunta_txt
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 30
    }, undefined) : null, dtajs !== null && dtajs !== void 0 && dtajs.pregunta_url ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      className: "responsive-img materialboxed",
      src: dtajs === null || dtajs === void 0 ? void 0 : dtajs.pregunta_url,
      alt: "pregunta",
      width: "900px",
      height: "550px" // onClick={zoomHandler}

    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, undefined) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: handlerSubmit,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_2___default.a, {
        component: "fieldset",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_3___default.a //defaultValue={selectValue}
        , {
          "aria-label": "gender",
          name: "customized-radios",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
            value: "A",
            control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 24
            }, undefined),
            label: dtajs === null || dtajs === void 0 ? void 0 : dtajs.respuesta1,
            onChange: handlerElegirRespuesta,
            checked: selectValue === "A"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
            value: "B",
            control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 24
            }, undefined),
            label: dtajs === null || dtajs === void 0 ? void 0 : dtajs.respuesta2,
            onChange: handlerElegirRespuesta,
            checked: selectValue === "B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
            value: "C",
            control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 24
            }, undefined),
            label: dtajs === null || dtajs === void 0 ? void 0 : dtajs.respuesta3,
            onChange: handlerElegirRespuesta,
            checked: selectValue === "C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
            value: "D",
            control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 24
            }, undefined),
            label: dtajs === null || dtajs === void 0 ? void 0 : dtajs.respuesta4,
            onChange: handlerElegirRespuesta,
            checked: selectValue === "D"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
          type: "submit",
          variant: "contained",
          color: "primary",
          size: "large",
          startIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 24
          }, undefined),
          children: "Guardar Respuesta"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Logic);

/***/ }),

/***/ "./pages/logico.jsx":
/*!**************************!*\
  !*** ./pages/logico.jsx ***!
  \**************************/
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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/Pagination */ "@material-ui/lab/Pagination");
/* harmony import */ var _material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_accion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/accion */ "./redux/accion/index.js");
/* harmony import */ var _assets_json_exam_PensaLogic_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/json/exam_PensaLogic.json */ "./assets/json/exam_PensaLogic.json");
var _assets_json_exam_PensaLogic_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/json/exam_PensaLogic.json */ "./assets/json/exam_PensaLogic.json", 1);
/* harmony import */ var _components_Exam_Logic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Exam/Logic */ "./components/Exam/Logic.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "C:\\proyectos\\next\\seani\\pages\\logico.jsx";










const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2)
    }
  }
}));

const logico = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  const classes = useStyles();
  const alumno = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.alumno);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    var _alumno$data;

    dispatch(Object(_redux_accion__WEBPACK_IMPORTED_MODULE_7__["accionTest"])(true));
    dispatch(Object(_redux_accion__WEBPACK_IMPORTED_MODULE_7__["accionTipe"])("Comprensión lectora"));

    if (!(alumno !== null && alumno !== void 0 && (_alumno$data = alumno.data) !== null && _alumno$data !== void 0 && _alumno$data.activeLogic)) {
      router.push("/home");
    }

    return () => {
      dispatch(Object(_redux_accion__WEBPACK_IMPORTED_MODULE_7__["accionTest"])(false));
      dispatch(Object(_redux_accion__WEBPACK_IMPORTED_MODULE_7__["accionTipe"])(""));
    };
  }, []);

  const handleChange = (event, value) => {
    //window.location.replace(`/logico?page=${value}`)
    router.push(`/logico?page=${value}`);
  };

  function elegir(numero) {
    var _alumno$data2, _alumno$data3;

    if (numero <= 0) {
      return false;
    }

    if (numero > 90) {
      return false;
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Exam_Logic__WEBPACK_IMPORTED_MODULE_9__["default"], {
      dtajs: _assets_json_exam_PensaLogic_json__WEBPACK_IMPORTED_MODULE_8__[parseInt(numero)],
      dataAlumno: alumno !== null && alumno !== void 0 && (_alumno$data2 = alumno.data) !== null && _alumno$data2 !== void 0 && _alumno$data2.logico ? alumno === null || alumno === void 0 ? void 0 : (_alumno$data3 = alumno.data) === null || _alumno$data3 === void 0 ? void 0 : _alumno$data3.logico : [],
      todos: alumno === null || alumno === void 0 ? void 0 : alumno.data,
      posision: numero
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "SEANI | Comprensi\xF3n lectora"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Container"], {
      children: [elegir(parseInt(router.query.page)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.root,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_4___default.a, {
          className: " transparent center-align",
          count: _assets_json_exam_PensaLogic_json__WEBPACK_IMPORTED_MODULE_8__.length - 1,
          defaultPage: 1,
          page: parseInt(router.query.page),
          color: "primary",
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (logico);

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

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FeGFtL0xvZ2ljLmpzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpY28uanN4Iiwid2VicGFjazovLy8uL3JlZHV4L2FjY2lvbi9hY2Npb25BbHVtbm8uanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWNjaW9uL2FjY2lvblRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWNjaW9uL2FjY2lvblRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWNjaW9uL2FjY2lvblRpcGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWNjaW9uL2FjY2lvblVzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWNjaW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9maXJlYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy92YXJpYWJsZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NhdmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvbGFiL1BhZ2luYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2Uvc3RvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIl0sIm5hbWVzIjpbIkxvZ2ljIiwiZHRhanMiLCJkYXRhQWx1bW5vIiwicG9zaXNpb24iLCJ0b2RvcyIsInVzZXIiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiY29udmVyIiwicGFyc2VJbnQiLCJ2YWxvckFjdGl2ZSIsInRlbXBSZXNwIiwic2V0VGVtcFJlc3AiLCJ1c2VTdGF0ZSIsInNlbGVjdFZhbHVlIiwic2V0U2VsZWN0VmFsdWUiLCJyZXNwdWVzdGEiLCJ1c2VFZmZlY3QiLCJoYW5kbGVyRWxlZ2lyUmVzcHVlc3RhIiwiZSIsInByZWd1bnRhIiwiX2lkIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVyU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ0ZXN0TG9naWMiLCJpZCIsInVpZCIsImFycmUiLCJwcmVndW50YV90eHQiLCJwcmVndW50YV91cmwiLCJyZXNwdWVzdGExIiwicmVzcHVlc3RhMiIsInJlc3B1ZXN0YTMiLCJyZXNwdWVzdGE0IiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJsb2dpY28iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiY2xhc3NlcyIsImFsdW1ubyIsImFjY2lvblRlc3QiLCJhY2Npb25UaXBlIiwiZGF0YSIsImFjdGl2ZUxvZ2ljIiwicHVzaCIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiZWxlZ2lyIiwibnVtZXJvIiwicXVlcnkiLCJwYWdlIiwibGVuZ3RoIiwiYWNjaW9uQWx1bW5vIiwidHlwZSIsInBheWxvYWQiLCJhY2Npb25UaW1lIiwiYWNjaW9uVXNlciIsIm15SGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJyYXciLCJ0aXBlIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVkaXJlY3QiLCJsb2dJbiIsImF1dGgiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImVtYWlsIiwicGFzc3dvcmQiLCJnZXRVc2VyIiwiZmV0Y2giLCJob3N0IiwidGhlbiIsImRhdCIsImpzb24iLCJvcGVuU29ja2V0IiwidGltZSIsImRiIiwiZG9jIiwiY29sbGVjdGlvbiIsInVwZGF0ZSIsInRlc3RFeGFtIiwidGVzdCIsImxlbmd1YUV4YW0iLCJsZW5ndWEiLCJtYXRlRXhhbSIsIm1hdGVtYXRpY28iLCJtYXRlQ2FuY2VsIiwiYWN0aXZlTWF0IiwibG9naUNhbmNlbCIsImxlbmd1YUNhbmNlbCIsImFjdGl2ZUxlbmd1YSIsImV4YW1DYW5jZWwiLCJhY3RpdmVFeGFtMSIsImFsbENhbmNlbCIsImdldEluaXRpYWwiLCJ3aGVyZSIsImdldCIsImRvY3MiLCJsb2dPdXQiLCJzaWduT3V0IiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJmaXJlYmFzZSIsImFwcHMiLCJpbml0aWFsaXplQXBwIiwiYXBwIiwiYXUiLCJmaXJlc3RvcmUiLCJub3ciLCJUaW1lc3RhbXAiLCJzdG9yYWdlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxNQUFNQSxLQUFLLEdBQUcsQ0FBQztBQUFFQyxPQUFGO0FBQVNDLFlBQVQ7QUFBcUJDLFVBQXJCO0FBQStCQztBQUEvQixDQUFELEtBQTRDO0FBQ3hELFFBQU1DLElBQUksR0FBR0MsK0RBQVcsQ0FBQ0MsS0FBSyxJQUFJQSxLQUFLLENBQUNGLElBQWhCLENBQXhCO0FBQ0EsTUFBSUcsTUFBTSxHQUFHQyxRQUFRLENBQUNOLFFBQUQsQ0FBckI7QUFDQSxNQUFJTyxXQUFXLEdBQUdSLFVBQVUsQ0FBQ00sTUFBRCxDQUFWLEdBQXFCTixVQUFVLENBQUNNLE1BQUQsQ0FBL0IsR0FBMEMsRUFBNUQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0csUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLHNEQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0Ysc0RBQVEsQ0FBQ0gsV0FBVyxDQUFDTSxTQUFiLENBQTlDO0FBQ0FDLHlEQUFTLENBQUMsTUFBTTtBQUNkRixrQkFBYyxDQUFDTCxXQUFXLENBQUNNLFNBQWIsQ0FBZDtBQUNELEdBRlEsRUFFTixDQUFDTixXQUFXLENBQUNNLFNBQWIsQ0FGTSxDQUFUOztBQUlBLFFBQU1FLHNCQUFzQixHQUFJQyxDQUFELElBQU87QUFDcENQLGVBQVcsQ0FBQztBQUNWUSxjQUFRLEVBQUVuQixLQUFGLGFBQUVBLEtBQUYsdUJBQUVBLEtBQUssQ0FBRW9CLEdBRFA7QUFFVkwsZUFBUyxFQUFFRyxDQUFDLENBQUNHLE1BQUYsQ0FBU0M7QUFGVixLQUFELENBQVg7QUFJQVIsa0JBQWMsQ0FBQ0ksQ0FBQyxDQUFDRyxNQUFGLENBQVNDLEtBQVYsQ0FBZDtBQUNELEdBTkQ7O0FBUUEsUUFBTUMsYUFBYSxHQUFJTCxDQUFELElBQU87QUFDM0JBLEtBQUMsQ0FBQ00sY0FBRjs7QUFFQSxRQUFJLEVBQUNkLFFBQUQsYUFBQ0EsUUFBRCxlQUFDQSxRQUFRLENBQUVTLFFBQVgsS0FBdUIsRUFBQ1QsUUFBRCxhQUFDQSxRQUFELGVBQUNBLFFBQVEsQ0FBRVMsUUFBWCxDQUEzQixFQUFnRDtBQUM5QyxhQUFPLEtBQVA7QUFDRCxLQUZELE1BRU87QUFDTGxCLGdCQUFVLENBQUNNLE1BQUQsQ0FBVixHQUFxQkcsUUFBckI7QUFDQWUsa0VBQVMsQ0FBQztBQUFDQyxVQUFFLEVBQUN0QixJQUFELGFBQUNBLElBQUQsdUJBQUNBLElBQUksQ0FBRXVCLEdBQVY7QUFBY0MsWUFBSSxFQUFDM0I7QUFBbkIsT0FBRCxDQUFUO0FBQ0FVLGlCQUFXLENBQUMsRUFBRCxDQUFYO0FBQ0Q7QUFDRixHQVZEOztBQVdBLHNCQUNFO0FBQUEsZUFDR1gsS0FBSyxTQUFMLElBQUFBLEtBQUssV0FBTCxJQUFBQSxLQUFLLENBQUU2QixZQUFQLGdCQUFzQjtBQUFBLGdCQUFLN0IsS0FBTCxhQUFLQSxLQUFMLHVCQUFLQSxLQUFLLENBQUU2QjtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQXRCLEdBQXVELElBRDFELEVBRUc3QixLQUFLLFNBQUwsSUFBQUEsS0FBSyxXQUFMLElBQUFBLEtBQUssQ0FBRThCLFlBQVAsZ0JBQ0M7QUFDRSxlQUFTLEVBQUMsOEJBRFo7QUFFRSxTQUFHLEVBQUU5QixLQUFGLGFBQUVBLEtBQUYsdUJBQUVBLEtBQUssQ0FBRThCLFlBRmQ7QUFHRSxTQUFHLEVBQUMsVUFITjtBQUlFLFdBQUssRUFBQyxPQUpSO0FBS0UsWUFBTSxFQUFDLE9BTFQsQ0FNRTs7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELEdBU0csSUFYTixlQVlFO0FBQU0sY0FBUSxFQUFFUCxhQUFoQjtBQUFBLDZCQUNFLHFFQUFDLG9FQUFEO0FBQWEsaUJBQVMsRUFBQyxVQUF2QjtBQUFBLGdDQUNFLHFFQUFDLG1FQUFELENBQ0U7QUFERjtBQUVFLHdCQUFXLFFBRmI7QUFHRSxjQUFJLEVBQUMsbUJBSFA7QUFBQSxrQ0FLRSxxRUFBQyx5RUFBRDtBQUNFLGlCQUFLLEVBQUMsR0FEUjtBQUVFLG1CQUFPLGVBQUUscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGWDtBQUdFLGlCQUFLLEVBQUV2QixLQUFGLGFBQUVBLEtBQUYsdUJBQUVBLEtBQUssQ0FBRStCLFVBSGhCO0FBSUUsb0JBQVEsRUFBRWQsc0JBSlo7QUFLRSxtQkFBTyxFQUFFSixXQUFXLEtBQUs7QUFMM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMRixlQVlFLHFFQUFDLHlFQUFEO0FBQ0UsaUJBQUssRUFBQyxHQURSO0FBRUUsbUJBQU8sZUFBRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZYO0FBR0UsaUJBQUssRUFBRWIsS0FBRixhQUFFQSxLQUFGLHVCQUFFQSxLQUFLLENBQUVnQyxVQUhoQjtBQUlFLG9CQUFRLEVBQUVmLHNCQUpaO0FBS0UsbUJBQU8sRUFBRUosV0FBVyxLQUFLO0FBTDNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBWkYsZUFtQkUscUVBQUMseUVBQUQ7QUFDRSxpQkFBSyxFQUFDLEdBRFI7QUFFRSxtQkFBTyxlQUFFLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRlg7QUFHRSxpQkFBSyxFQUFFYixLQUFGLGFBQUVBLEtBQUYsdUJBQUVBLEtBQUssQ0FBRWlDLFVBSGhCO0FBSUUsb0JBQVEsRUFBRWhCLHNCQUpaO0FBS0UsbUJBQU8sRUFBRUosV0FBVyxLQUFLO0FBTDNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBbkJGLGVBMEJFLHFFQUFDLHlFQUFEO0FBQ0UsaUJBQUssRUFBQyxHQURSO0FBRUUsbUJBQU8sZUFBRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZYO0FBR0UsaUJBQUssRUFBRWIsS0FBRixhQUFFQSxLQUFGLHVCQUFFQSxLQUFLLENBQUVrQyxVQUhoQjtBQUlFLG9CQUFRLEVBQUVqQixzQkFKWjtBQUtFLG1CQUFPLEVBQUVKLFdBQVcsS0FBSztBQUwzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFtQ0UscUVBQUMsK0RBQUQ7QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLGlCQUFPLEVBQUMsV0FGVjtBQUdFLGVBQUssRUFBQyxTQUhSO0FBSUUsY0FBSSxFQUFDLE9BSlA7QUFLRSxtQkFBUyxlQUFFLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbkNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUE4REQsQ0EzRkQ7O0FBNkZlZCxvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNb0MsU0FBUyxHQUFHQywyRUFBVSxDQUFFQyxLQUFELEtBQVk7QUFDdkNDLE1BQUksRUFBRTtBQUNKLGFBQVM7QUFDUEMsZUFBUyxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkO0FBREo7QUFETDtBQURpQyxDQUFaLENBQUQsQ0FBNUI7O0FBUUEsTUFBTUMsTUFBTSxHQUFHLE1BQU07QUFDbkIsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxRQUFNQyxPQUFPLEdBQUdYLFNBQVMsRUFBekI7QUFDQSxRQUFNWSxNQUFNLEdBQUcxQywrREFBVyxDQUFDQyxLQUFLLElBQUlBLEtBQUssQ0FBQ3lDLE1BQWhCLENBQTFCO0FBRUEvQix5REFBUyxDQUFDLE1BQU07QUFBQTs7QUFDWjRCLFlBQVEsQ0FBQ0ksZ0VBQVUsQ0FBQyxJQUFELENBQVgsQ0FBUjtBQUNBSixZQUFRLENBQUNLLGdFQUFVLENBQUMscUJBQUQsQ0FBWCxDQUFSOztBQUNBLFFBQUksRUFBQ0YsTUFBRCxhQUFDQSxNQUFELCtCQUFDQSxNQUFNLENBQUVHLElBQVQseUNBQUMsYUFBY0MsV0FBZixDQUFKLEVBQWdDO0FBQzlCVCxZQUFNLENBQUNVLElBQVAsQ0FBWSxPQUFaO0FBQ0Q7O0FBR0gsV0FBTyxNQUFNO0FBQ1hSLGNBQVEsQ0FBQ0ksZ0VBQVUsQ0FBQyxLQUFELENBQVgsQ0FBUjtBQUNBSixjQUFRLENBQUNLLGdFQUFVLENBQUMsRUFBRCxDQUFYLENBQVI7QUFDRCxLQUhEO0FBSUQsR0FaUSxFQVlOLEVBWk0sQ0FBVDs7QUFjQSxRQUFNSSxZQUFZLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRaEMsS0FBUixLQUFrQjtBQUNyQztBQUNBb0IsVUFBTSxDQUFDVSxJQUFQLENBQWEsZ0JBQWU5QixLQUFNLEVBQWxDO0FBQ0QsR0FIRDs7QUFLQSxXQUFTaUMsTUFBVCxDQUFnQkMsTUFBaEIsRUFBd0I7QUFBQTs7QUFDdEIsUUFBSUEsTUFBTSxJQUFJLENBQWQsRUFBaUI7QUFDZixhQUFPLEtBQVA7QUFDRDs7QUFDRCxRQUFJQSxNQUFNLEdBQUcsRUFBYixFQUFpQjtBQUNmLGFBQU8sS0FBUDtBQUNEOztBQUNELHdCQUNFLHFFQUFDLDhEQUFEO0FBQ0UsV0FBSyxFQUFFTiw4REFBSSxDQUFDMUMsUUFBUSxDQUFDZ0QsTUFBRCxDQUFULENBRGI7QUFFRSxnQkFBVSxFQUFFVCxNQUFNLFNBQU4sSUFBQUEsTUFBTSxXQUFOLHFCQUFBQSxNQUFNLENBQUVHLElBQVIsd0RBQWNULE1BQWQsR0FBdUJNLE1BQXZCLGFBQXVCQSxNQUF2Qix3Q0FBdUJBLE1BQU0sQ0FBRUcsSUFBL0Isa0RBQXVCLGNBQWNULE1BQXJDLEdBQThDLEVBRjVEO0FBR0UsV0FBSyxFQUFFTSxNQUFGLGFBQUVBLE1BQUYsdUJBQUVBLE1BQU0sQ0FBRUcsSUFIakI7QUFJRSxjQUFRLEVBQUVNO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBUUQ7O0FBQ0Qsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxpREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFLHFFQUFDLDJEQUFEO0FBQUEsaUJBQ0dELE1BQU0sQ0FBQy9DLFFBQVEsQ0FBQ2tDLE1BQU0sQ0FBQ2UsS0FBUCxDQUFhQyxJQUFkLENBQVQsQ0FEVCxlQUVFO0FBQUssaUJBQVMsRUFBRVosT0FBTyxDQUFDUixJQUF4QjtBQUFBLCtCQUNFLHFFQUFDLGtFQUFEO0FBQ0UsbUJBQVMsRUFBQywyQkFEWjtBQUVFLGVBQUssRUFBRVksOERBQUksQ0FBQ1MsTUFBTCxHQUFjLENBRnZCO0FBR0UscUJBQVcsRUFBRSxDQUhmO0FBSUUsY0FBSSxFQUFFbkQsUUFBUSxDQUFDa0MsTUFBTSxDQUFDZSxLQUFQLENBQWFDLElBQWQsQ0FKaEI7QUFLRSxlQUFLLEVBQUMsU0FMUjtBQU1FLGtCQUFRLEVBQUVMO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUEsa0JBREY7QUFvQkQsQ0E3REQ7O0FBK0RlWixxRUFBZixFOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFPLE1BQU1tQixZQUFZLEdBQUlWLElBQUQsSUFBVTtBQUNsQyxTQUFPO0FBQ0xXLFFBQUksRUFBRSxRQUREO0FBRUxDLFdBQU8sRUFBRVo7QUFGSixHQUFQO0FBSUQsQ0FMSSxDOzs7Ozs7Ozs7Ozs7QUNBUDtBQUFBO0FBQU8sTUFBTUYsVUFBVSxHQUFJRSxJQUFELElBQVU7QUFDaEMsU0FBTztBQUNMVyxRQUFJLEVBQUUsTUFERDtBQUVMQyxXQUFPLEVBQUVaO0FBRkosR0FBUDtBQUlELENBTEksQzs7Ozs7Ozs7Ozs7O0FDQVA7QUFBQTtBQUFPLE1BQU1hLFVBQVUsR0FBSWIsSUFBRCxJQUFVO0FBQ2hDLFNBQU87QUFDTFcsUUFBSSxFQUFFLE1BREQ7QUFFTEMsV0FBTyxFQUFFWjtBQUZKLEdBQVA7QUFJRCxDQUxJLEM7Ozs7Ozs7Ozs7OztBQ0FQO0FBQUE7QUFBTyxNQUFNRCxVQUFVLEdBQUlDLElBQUQsSUFBVTtBQUNoQyxTQUFPO0FBQ0xXLFFBQUksRUFBRSxNQUREO0FBRUxDLFdBQU8sRUFBRVo7QUFGSixHQUFQO0FBSUQsQ0FMSSxDOzs7Ozs7Ozs7Ozs7QUNBUDtBQUFBO0FBQU8sTUFBTWMsVUFBVSxHQUFJZCxJQUFELElBQVU7QUFDaEMsU0FBTztBQUNMVyxRQUFJLEVBQUUsTUFERDtBQUVMQyxXQUFPLEVBQUVaO0FBRkosR0FBUDtBQUlELENBTEksQzs7Ozs7Ozs7Ozs7O0FDQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBSWUsU0FBUyxHQUFHLElBQUlDLE9BQUosRUFBaEI7QUFDQUQsU0FBUyxDQUFDRSxNQUFWLENBQWlCLGNBQWpCLEVBQWlDLGtCQUFqQyxFLENBQ0E7O0FBRUEsTUFBTUMsR0FBRyxHQUFHLENBQUNsQixJQUFELEVBQU9tQixJQUFQLEtBQWdCO0FBQzFCLE1BQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1QsV0FBTyxFQUFQO0FBQ0Q7O0FBQ0QsU0FBTztBQUNMQyxVQUFNLEVBQUVELElBREg7QUFFTEUsV0FBTyxFQUFFTixTQUZKO0FBR0xPLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWV4QixJQUFmLENBSEQ7QUFJTHlCLFlBQVEsRUFBRTtBQUpMLEdBQVA7QUFNRCxDQVZEOztBQVlPLE1BQU1DLEtBQUssR0FBRSxNQUFPMUIsSUFBUCxJQUFjO0FBQ2hDLFNBQU8yQiw4Q0FBSSxDQUFDQywwQkFBTCxDQUNMNUIsSUFBSSxDQUFDNkIsS0FEQSxFQUVMN0IsSUFBSSxDQUFDOEIsUUFGQSxDQUFQO0FBSUQsQ0FMTSxDLENBTVA7O0FBQ08sTUFBTUMsT0FBTyxHQUFHL0IsSUFBRCxJQUFRO0FBQzFCLFNBQU9nQyxLQUFLLENBQUUsR0FBRUMsK0NBQUssV0FBVCxFQUFvQmYsR0FBRyxDQUFDbEIsSUFBRCxFQUFNLE1BQU4sQ0FBdkIsQ0FBTCxDQUEyQ2tDLElBQTNDLENBQWdEQyxHQUFHLElBQUdBLEdBQUcsQ0FBQ0MsSUFBSixFQUF0RCxDQUFQO0FBQ0gsQ0FGTSxDLENBR1A7O0FBQ08sTUFBTUMsVUFBVSxHQUFDLE1BQU9yQyxJQUFQLElBQWM7QUFDcEMsUUFBTTtBQUFDeEIsTUFBRDtBQUFJOEQ7QUFBSixNQUFZdEMsSUFBbEI7QUFDQSxRQUFNdUMsNENBQUUsQ0FBQ0MsR0FBSCxDQUFRLEdBQUVDLHFEQUFXLElBQUdqRSxFQUFHLEVBQTNCLEVBQThCa0UsTUFBOUIsQ0FBcUM7QUFDekNKLFFBQUksRUFBQ0E7QUFEb0MsR0FBckMsQ0FBTjtBQUdELENBTE0sQyxDQVFQOztBQUNPLE1BQU1LLFFBQVEsR0FBRyxNQUFNM0MsSUFBTixJQUFhO0FBQ25DLFFBQU07QUFBQ3hCLE1BQUQ7QUFBSUU7QUFBSixNQUFZc0IsSUFBbEI7QUFDQSxRQUFNdUMsNENBQUUsQ0FBQ0MsR0FBSCxDQUFRLEdBQUVDLHFEQUFXLElBQUdqRSxFQUFHLEVBQTNCLEVBQThCa0UsTUFBOUIsQ0FBcUM7QUFBRUUsUUFBSSxFQUFFbEU7QUFBUixHQUFyQyxDQUFOO0FBQ0QsQ0FITTtBQUlBLE1BQU1ILFNBQVMsR0FBQyxNQUFNeUIsSUFBTixJQUFhO0FBQ2xDLFFBQU07QUFBQ3hCLE1BQUQ7QUFBSUU7QUFBSixNQUFZc0IsSUFBbEI7QUFDQSxRQUFNdUMsNENBQUUsQ0FBQ0MsR0FBSCxDQUFRLEdBQUVDLHFEQUFXLElBQUdqRSxFQUFHLEVBQTNCLEVBQThCa0UsTUFBOUIsQ0FBcUM7QUFBRW5ELFVBQU0sRUFBRWI7QUFBVixHQUFyQyxDQUFOO0FBRUQsQ0FKTTtBQUtBLE1BQU1tRSxVQUFVLEdBQUUsTUFBTTdDLElBQU4sSUFBYTtBQUNwQyxRQUFNO0FBQUN4QixNQUFEO0FBQUlFO0FBQUosTUFBWXNCLElBQWxCO0FBQ0EsUUFBTXVDLDRDQUFFLENBQUNDLEdBQUgsQ0FBUSxHQUFFQyxxREFBVyxJQUFHakUsRUFBRyxFQUEzQixFQUE4QmtFLE1BQTlCLENBQXFDO0FBQUVJLFVBQU0sRUFBRXBFO0FBQVYsR0FBckMsQ0FBTjtBQUNELENBSE07QUFLQSxNQUFNcUUsUUFBUSxHQUFFLE1BQU0vQyxJQUFOLElBQWE7QUFDbEMsUUFBTTtBQUFDeEIsTUFBRDtBQUFJRTtBQUFKLE1BQVlzQixJQUFsQjtBQUNBLFFBQU11Qyw0Q0FBRSxDQUFDQyxHQUFILENBQVEsR0FBRUMscURBQVcsSUFBR2pFLEVBQUcsRUFBM0IsRUFBOEJrRSxNQUE5QixDQUFxQztBQUFFTSxjQUFVLEVBQUV0RTtBQUFkLEdBQXJDLENBQU47QUFFRCxDQUpNLEMsQ0FPUDs7QUFDTyxNQUFNdUUsVUFBVSxHQUFFLE1BQU1qRCxJQUFOLElBQWE7QUFDcEMsUUFBTXVDLDRDQUFFLENBQUNDLEdBQUgsQ0FBUSxHQUFFQyxxREFBVyxJQUFHekMsSUFBSSxDQUFDeEIsRUFBRyxFQUFoQyxFQUFtQ2tFLE1BQW5DLENBQTBDO0FBQUVRLGFBQVMsRUFBRTtBQUFiLEdBQTFDLENBQU47QUFFRCxDQUhNO0FBSUEsTUFBTUMsVUFBVSxHQUFFLE1BQU1uRCxJQUFOLElBQWE7QUFFcEMsUUFBTXVDLDRDQUFFLENBQUNDLEdBQUgsQ0FBUSxHQUFFQyxxREFBVyxJQUFHekMsSUFBSSxDQUFDeEIsRUFBRyxFQUFoQyxFQUFtQ2tFLE1BQW5DLENBQTBDO0FBQUV6QyxlQUFXLEVBQUU7QUFBZixHQUExQyxDQUFOO0FBQ0QsQ0FITTtBQUlBLE1BQU1tRCxZQUFZLEdBQUUsTUFBTXBELElBQU4sSUFBYTtBQUN0QyxRQUFNdUMsNENBQUUsQ0FBQ0MsR0FBSCxDQUFRLEdBQUVDLHFEQUFXLElBQUd6QyxJQUFJLENBQUN4QixFQUFHLEVBQWhDLEVBQW1Da0UsTUFBbkMsQ0FBMEM7QUFBRVcsZ0JBQVksRUFBRTtBQUFoQixHQUExQyxDQUFOO0FBRUQsQ0FITTtBQUlBLE1BQU1DLFVBQVUsR0FBRSxNQUFNdEQsSUFBTixJQUFhO0FBQ3BDLFFBQU11Qyw0Q0FBRSxDQUFDQyxHQUFILENBQVEsR0FBRUMscURBQVcsSUFBR3pDLElBQUksQ0FBQ3hCLEVBQUcsRUFBaEMsRUFBbUNrRSxNQUFuQyxDQUEwQztBQUFFYSxlQUFXLEVBQUU7QUFBZixHQUExQyxDQUFOO0FBQ0QsQ0FGTSxDLENBR1A7O0FBQ08sTUFBTUMsU0FBUyxHQUFFLE1BQU14RCxJQUFOLElBQWE7QUFDbkMsUUFBTXVDLDRDQUFFLENBQUNDLEdBQUgsQ0FBUSxHQUFFQyxxREFBVyxJQUFHekMsSUFBSSxDQUFDeEIsRUFBRyxFQUFoQyxFQUFtQ2tFLE1BQW5DLENBQTBDO0FBQzlDVyxnQkFBWSxFQUFFLEtBRGdDO0FBRTlDSCxhQUFTLEVBQUUsS0FGbUM7QUFHOUNqRCxlQUFXLEVBQUUsS0FIaUM7QUFJOUNzRCxlQUFXLEVBQUUsS0FKaUM7QUFLOUNqQixRQUFJLEVBQUU7QUFMd0MsR0FBMUMsQ0FBTjtBQU9ELENBUk07QUFVUDs7QUFDTyxNQUFNbUIsVUFBVSxHQUFHLE1BQU9oRixHQUFQLElBQWE7QUFBQTs7QUFDckMsUUFBTXVCLElBQUksR0FBRyxNQUFNdUMsNENBQUUsQ0FDaEJFLFVBRGMsQ0FDSEEscURBREcsRUFFZGlCLEtBRmMsQ0FFUixNQUZRLEVBRUEsSUFGQSxFQUVNakYsR0FGTixFQUdka0YsR0FIYyxFQUFuQjtBQUlFLFNBQU87QUFBRTNELFFBQUksRUFBRUEsSUFBRixhQUFFQSxJQUFGLHNDQUFFQSxJQUFJLENBQUU0RCxJQUFOLENBQVcsQ0FBWCxDQUFGLGdEQUFFLFlBQWU1RCxJQUFmO0FBQVIsR0FBUDtBQUNILENBTk07QUFRQSxNQUFNNkQsTUFBTSxHQUFHLFlBQVU7QUFDOUIsUUFBTWxDLDhDQUFJLENBQUNtQyxPQUFMLEVBQU47QUFDRCxDQUZNLEM7Ozs7Ozs7Ozs7OztBQ2hHUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUMsY0FBYyxHQUFHO0FBQ3JCQyxRQUFNLEVBQUUseUNBRGE7QUFFckJDLFlBQVUsRUFBRSw0QkFGUztBQUdyQkMsYUFBVyxFQUFFLG1DQUhRO0FBSXJCQyxXQUFTLEVBQUUsWUFKVTtBQUtyQkMsZUFBYSxFQUFFLHdCQUxNO0FBTXJCQyxtQkFBaUIsRUFBRSxhQU5FO0FBT3JCQyxPQUFLLEVBQUUsMENBUGM7QUFRckJDLGVBQWEsRUFBRTtBQVJNLENBQXZCOztBQVdBLElBQUksQ0FBQ0MsbURBQVEsQ0FBQ0MsSUFBVCxDQUFjaEUsTUFBbkIsRUFBMkI7QUFDekIrRCxxREFBUSxDQUFDRSxhQUFULENBQXVCWCxjQUF2QjtBQUNEOztBQUVELE1BQU1ZLEdBQUcsR0FBR0gsbURBQVEsQ0FBQ0csR0FBVCxFQUFaO0FBQ0EsTUFBTWhELElBQUksR0FBRzZDLG1EQUFRLENBQUM3QyxJQUFULEVBQWI7QUFDQSxNQUFNaUQsRUFBRSxHQUFHSixtREFBUSxDQUFDN0MsSUFBVCxFQUFYO0FBQ0EsTUFBTVksRUFBRSxHQUFHaUMsbURBQVEsQ0FBQ0ssU0FBVCxFQUFYO0FBQ0EsTUFBTUMsR0FBRyxHQUFHTixtREFBUSxDQUFDSyxTQUFULENBQW1CRSxTQUFuQixDQUE2QkQsR0FBN0IsRUFBWjtBQUNBLE1BQU1FLE9BQU8sR0FBR1IsbURBQVEsQ0FBQ1EsT0FBVCxFQUFoQjtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7Ozs7Ozs7O0FDbERBO0FBQUE7QUFBQTtBQUFPLE1BQU0vQyxJQUFJLEdBQUcsdUJBQWI7QUFDQSxNQUFNUSxVQUFVLEdBQUcsVUFBbkIsQzs7Ozs7Ozs7Ozs7QUNEUCxxRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9sb2dpY28uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2xvZ2ljby5qc3hcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sXCI7XHJcbmltcG9ydCBSYWRpb0dyb3VwIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwXCI7XHJcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgU2F2ZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TYXZlXCI7XHJcbmltcG9ydCBSYWRpbyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9cIjtcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7dGVzdExvZ2ljfSBmcm9tICcuLi8uLi91dGlscy9hcGknO1xyXG5cclxuXHJcbmNvbnN0IExvZ2ljID0gKHsgZHRhanMsIGRhdGFBbHVtbm8sIHBvc2lzaW9uLCB0b2RvcyB9KSA9PiB7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIpXHJcbiAgbGV0IGNvbnZlciA9IHBhcnNlSW50KHBvc2lzaW9uKTtcclxuICBsZXQgdmFsb3JBY3RpdmUgPSBkYXRhQWx1bW5vW2NvbnZlcl0gPyBkYXRhQWx1bW5vW2NvbnZlcl0gOiBcIlwiO1xyXG4gIGNvbnN0IFt0ZW1wUmVzcCwgc2V0VGVtcFJlc3BdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtzZWxlY3RWYWx1ZSwgc2V0U2VsZWN0VmFsdWVdID0gdXNlU3RhdGUodmFsb3JBY3RpdmUucmVzcHVlc3RhKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0U2VsZWN0VmFsdWUodmFsb3JBY3RpdmUucmVzcHVlc3RhKTtcclxuICB9LCBbdmFsb3JBY3RpdmUucmVzcHVlc3RhXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZXJFbGVnaXJSZXNwdWVzdGEgPSAoZSkgPT4ge1xyXG4gICAgc2V0VGVtcFJlc3Aoe1xyXG4gICAgICBwcmVndW50YTogZHRhanM/Ll9pZCxcclxuICAgICAgcmVzcHVlc3RhOiBlLnRhcmdldC52YWx1ZSxcclxuICAgIH0pO1xyXG4gICAgc2V0U2VsZWN0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZXJTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICghdGVtcFJlc3A/LnByZWd1bnRhIHx8ICF0ZW1wUmVzcD8ucHJlZ3VudGEpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGF0YUFsdW1ub1tjb252ZXJdID0gdGVtcFJlc3A7XHJcbiAgICAgIHRlc3RMb2dpYyh7aWQ6dXNlcj8udWlkLGFycmU6ZGF0YUFsdW1ub30pXHJcbiAgICAgIHNldFRlbXBSZXNwKHt9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7ZHRhanM/LnByZWd1bnRhX3R4dCA/IDxoMT57ZHRhanM/LnByZWd1bnRhX3R4dH08L2gxPiA6IG51bGx9XHJcbiAgICAgIHtkdGFqcz8ucHJlZ3VudGFfdXJsID8gKFxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJlc3BvbnNpdmUtaW1nIG1hdGVyaWFsYm94ZWRcIlxyXG4gICAgICAgICAgc3JjPXtkdGFqcz8ucHJlZ3VudGFfdXJsfVxyXG4gICAgICAgICAgYWx0PVwicHJlZ3VudGFcIlxyXG4gICAgICAgICAgd2lkdGg9XCI5MDBweFwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCI1NTBweFwiXHJcbiAgICAgICAgICAvLyBvbkNsaWNrPXt6b29tSGFuZGxlcn1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZXJTdWJtaXR9PlxyXG4gICAgICAgIDxGb3JtQ29udHJvbCBjb21wb25lbnQ9XCJmaWVsZHNldFwiPlxyXG4gICAgICAgICAgPFJhZGlvR3JvdXBcclxuICAgICAgICAgICAgLy9kZWZhdWx0VmFsdWU9e3NlbGVjdFZhbHVlfVxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiZ2VuZGVyXCJcclxuICAgICAgICAgICAgbmFtZT1cImN1c3RvbWl6ZWQtcmFkaW9zXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICB2YWx1ZT1cIkFcIlxyXG4gICAgICAgICAgICAgIGNvbnRyb2w9ezxSYWRpbyAvPn1cclxuICAgICAgICAgICAgICBsYWJlbD17ZHRhanM/LnJlc3B1ZXN0YTF9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZXJFbGVnaXJSZXNwdWVzdGF9XHJcbiAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0VmFsdWUgPT09IFwiQVwifVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgIHZhbHVlPVwiQlwiXHJcbiAgICAgICAgICAgICAgY29udHJvbD17PFJhZGlvIC8+fVxyXG4gICAgICAgICAgICAgIGxhYmVsPXtkdGFqcz8ucmVzcHVlc3RhMn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlckVsZWdpclJlc3B1ZXN0YX1cclxuICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RWYWx1ZSA9PT0gXCJCXCJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgdmFsdWU9XCJDXCJcclxuICAgICAgICAgICAgICBjb250cm9sPXs8UmFkaW8gLz59XHJcbiAgICAgICAgICAgICAgbGFiZWw9e2R0YWpzPy5yZXNwdWVzdGEzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVyRWxlZ2lyUmVzcHVlc3RhfVxyXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdFZhbHVlID09PSBcIkNcIn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICB2YWx1ZT1cIkRcIlxyXG4gICAgICAgICAgICAgIGNvbnRyb2w9ezxSYWRpbyAvPn1cclxuICAgICAgICAgICAgICBsYWJlbD17ZHRhanM/LnJlc3B1ZXN0YTR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZXJFbGVnaXJSZXNwdWVzdGF9XHJcbiAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0VmFsdWUgPT09IFwiRFwifVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9SYWRpb0dyb3VwPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgIHN0YXJ0SWNvbj17PFNhdmVJY29uIC8+fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBHdWFyZGFyIFJlc3B1ZXN0YVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2ljO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYi9QYWdpbmF0aW9uXCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCx1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGFjY2lvblRlc3QsIGFjY2lvblRpcGUgfSBmcm9tIFwiLi4vcmVkdXgvYWNjaW9uXCI7XHJcbmltcG9ydCBkYXRhIGZyb20gXCIuLi9hc3NldHMvanNvbi9leGFtX1BlbnNhTG9naWMuanNvblwiO1xyXG5pbXBvcnQgTG9naWMgZnJvbSBcIi4uL2NvbXBvbmVudHMvRXhhbS9Mb2dpY1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBcIiYgPiAqXCI6IHtcclxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBsb2dpY28gPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBhbHVtbm8gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hbHVtbm8pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKGFjY2lvblRlc3QodHJ1ZSkpO1xyXG4gICAgICBkaXNwYXRjaChhY2Npb25UaXBlKFwiQ29tcHJlbnNpw7NuIGxlY3RvcmFcIikpO1xyXG4gICAgICBpZiAoIWFsdW1ubz8uZGF0YT8uYWN0aXZlTG9naWMpIHtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9ob21lXCIpO1xyXG4gICAgICB9XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaChhY2Npb25UZXN0KGZhbHNlKSk7XHJcbiAgICAgIGRpc3BhdGNoKGFjY2lvblRpcGUoXCJcIikpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgdmFsdWUpID0+IHtcclxuICAgIC8vd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoYC9sb2dpY28/cGFnZT0ke3ZhbHVlfWApXHJcbiAgICByb3V0ZXIucHVzaChgL2xvZ2ljbz9wYWdlPSR7dmFsdWV9YClcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBlbGVnaXIobnVtZXJvKSB7XHJcbiAgICBpZiAobnVtZXJvIDw9IDApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKG51bWVybyA+IDkwKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMb2dpY1xyXG4gICAgICAgIGR0YWpzPXtkYXRhW3BhcnNlSW50KG51bWVybyldfVxyXG4gICAgICAgIGRhdGFBbHVtbm89e2FsdW1ubz8uZGF0YT8ubG9naWNvID8gYWx1bW5vPy5kYXRhPy5sb2dpY28gOiBbXX1cclxuICAgICAgICB0b2Rvcz17YWx1bW5vPy5kYXRhfVxyXG4gICAgICAgIHBvc2lzaW9uPXtudW1lcm99XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlNFQU5JIHwgQ29tcHJlbnNpw7NuIGxlY3RvcmE8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAge2VsZWdpcihwYXJzZUludChyb3V0ZXIucXVlcnkucGFnZSkpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHRyYW5zcGFyZW50IGNlbnRlci1hbGlnblwiXHJcbiAgICAgICAgICAgIGNvdW50PXtkYXRhLmxlbmd0aCAtIDF9XHJcbiAgICAgICAgICAgIGRlZmF1bHRQYWdlPXsxfVxyXG4gICAgICAgICAgICBwYWdlPXtwYXJzZUludChyb3V0ZXIucXVlcnkucGFnZSl9XHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2dpY287XHJcbiIsImV4cG9ydCBjb25zdCBhY2Npb25BbHVtbm8gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogXCJBTFVNTk9cIixcclxuICAgICAgcGF5bG9hZDogZGF0YSxcclxuICAgIH07XHJcbiAgfTtcclxuICAiLCJleHBvcnQgY29uc3QgYWNjaW9uVGVzdCA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBcIlRFU1RcIixcclxuICAgICAgcGF5bG9hZDogZGF0YSxcclxuICAgIH07XHJcbiAgfTtcclxuICAiLCJleHBvcnQgY29uc3QgYWNjaW9uVGltZSA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBcIlRJTUVcIixcclxuICAgICAgcGF5bG9hZDogZGF0YSxcclxuICAgIH07XHJcbiAgfTtcclxuICAiLCJleHBvcnQgY29uc3QgYWNjaW9uVGlwZSA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBcIlRJUEVcIixcclxuICAgICAgcGF5bG9hZDogZGF0YSxcclxuICAgIH07XHJcbiAgfTtcclxuICAiLCJleHBvcnQgY29uc3QgYWNjaW9uVXNlciA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBcIlVTRVJcIixcclxuICAgICAgcGF5bG9hZDogZGF0YSxcclxuICAgIH07XHJcbiAgfTtcclxuICAiLCJleHBvcnQge2FjY2lvblRlc3R9IGZyb20gJy4vYWNjaW9uVGVzdCc7XHJcbmV4cG9ydCB7YWNjaW9uVXNlcn0gZnJvbSAnLi9hY2Npb25Vc2VyJztcclxuZXhwb3J0IHthY2Npb25UaW1lfSBmcm9tICcuL2FjY2lvblRpbWUnO1xyXG5leHBvcnQge2FjY2lvblRpcGV9IGZyb20gJy4vYWNjaW9uVGlwZSc7XHJcbmV4cG9ydCB7YWNjaW9uQWx1bW5vfSBmcm9tICcuL2FjY2lvbkFsdW1ubyciLCJpbXBvcnQgeyBob3N0ICxjb2xsZWN0aW9ufSBmcm9tIFwiLi92YXJpYWJsZXNcIjtcclxuaW1wb3J0IHtkYixhdXRofSBmcm9tICcuL2ZpcmViYXNlJ1xyXG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXHJcbnZhciBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG5teUhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuLy92YXIgcmF3ID0gSlNPTi5zdHJpbmdpZnkocmVzcHVlc3RhLnVzZXIpO1xyXG5cclxuY29uc3QgcmF3ID0gKGRhdGEsIHRpcGUpID0+IHtcclxuICBpZiAoIXRpcGUpIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIG1ldGhvZDogdGlwZSxcclxuICAgIGhlYWRlcnM6IG15SGVhZGVycyxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgcmVkaXJlY3Q6IFwiZm9sbG93XCIsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dJbiA9YXN5bmMgKGRhdGEpPT57XHJcbiAgcmV0dXJuIGF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoXHJcbiAgICBkYXRhLmVtYWlsLFxyXG4gICAgZGF0YS5wYXNzd29yZFxyXG4gIClcclxufVxyXG4vL2dldCBpbmZvIHVzZXJcclxuZXhwb3J0IGNvbnN0IGdldFVzZXIgPShkYXRhKT0+e1xyXG4gICAgcmV0dXJuIGZldGNoKGAke2hvc3R9L2FwaS91c2VyYCxyYXcoZGF0YSxcIlBPU1RcIikpLnRoZW4oZGF0ID0+ZGF0Lmpzb24oKSk7XHJcbn1cclxuLy9hY3RpdmUgc29ja2V0XHJcbmV4cG9ydCBjb25zdCBvcGVuU29ja2V0PWFzeW5jIChkYXRhKT0+e1xyXG4gIGNvbnN0IHtpZCx0aW1lfSA9IGRhdGFcclxuICBhd2FpdCBkYi5kb2MoYCR7Y29sbGVjdGlvbn0vJHtpZH1gKS51cGRhdGUoe1xyXG4gICAgdGltZTp0aW1lXHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG4vLyB1cGRhdGUgcmVzcG9uc2Ugb2YgYWx1bW5vXHJcbmV4cG9ydCBjb25zdCB0ZXN0RXhhbSA9IGFzeW5jKGRhdGEpPT57XHJcbiAgY29uc3Qge2lkLGFycmV9ID0gZGF0YVxyXG4gIGF3YWl0IGRiLmRvYyhgJHtjb2xsZWN0aW9ufS8ke2lkfWApLnVwZGF0ZSh7IHRlc3Q6IGFycmUgfSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IHRlc3RMb2dpYz1hc3luYyhkYXRhKT0+e1xyXG4gIGNvbnN0IHtpZCxhcnJlfSA9IGRhdGFcclxuICBhd2FpdCBkYi5kb2MoYCR7Y29sbGVjdGlvbn0vJHtpZH1gKS51cGRhdGUoeyBsb2dpY286IGFycmUgfSk7XHJcblxyXG59XHJcbmV4cG9ydCBjb25zdCBsZW5ndWFFeGFtID1hc3luYyhkYXRhKT0+e1xyXG4gIGNvbnN0IHtpZCxhcnJlfSA9IGRhdGFcclxuICBhd2FpdCBkYi5kb2MoYCR7Y29sbGVjdGlvbn0vJHtpZH1gKS51cGRhdGUoeyBsZW5ndWE6IGFycmUgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYXRlRXhhbSA9YXN5bmMoZGF0YSk9PntcclxuICBjb25zdCB7aWQsYXJyZX0gPSBkYXRhXHJcbiAgYXdhaXQgZGIuZG9jKGAke2NvbGxlY3Rpb259LyR7aWR9YCkudXBkYXRlKHsgbWF0ZW1hdGljbzogYXJyZSB9KTtcclxuXHJcbn1cclxuXHJcblxyXG4vL2ZpbmlzaCB0ZXN0XHJcbmV4cG9ydCBjb25zdCBtYXRlQ2FuY2VsID1hc3luYyhkYXRhKT0+e1xyXG4gIGF3YWl0IGRiLmRvYyhgJHtjb2xsZWN0aW9ufS8ke2RhdGEuaWR9YCkudXBkYXRlKHsgYWN0aXZlTWF0OiBmYWxzZSB9KTtcclxuXHJcbn1cclxuZXhwb3J0IGNvbnN0IGxvZ2lDYW5jZWwgPWFzeW5jKGRhdGEpPT57XHJcblxyXG4gIGF3YWl0IGRiLmRvYyhgJHtjb2xsZWN0aW9ufS8ke2RhdGEuaWR9YCkudXBkYXRlKHsgYWN0aXZlTG9naWM6IGZhbHNlIH0pO1xyXG59XHJcbmV4cG9ydCBjb25zdCBsZW5ndWFDYW5jZWwgPWFzeW5jKGRhdGEpPT57XHJcbiAgYXdhaXQgZGIuZG9jKGAke2NvbGxlY3Rpb259LyR7ZGF0YS5pZH1gKS51cGRhdGUoeyBhY3RpdmVMZW5ndWE6IGZhbHNlIH0pO1xyXG5cclxufVxyXG5leHBvcnQgY29uc3QgZXhhbUNhbmNlbCA9YXN5bmMoZGF0YSk9PntcclxuICBhd2FpdCBkYi5kb2MoYCR7Y29sbGVjdGlvbn0vJHtkYXRhLmlkfWApLnVwZGF0ZSh7IGFjdGl2ZUV4YW0xOiBmYWxzZSB9KTtcclxufVxyXG4vL2Rlc3Ryb3lcclxuZXhwb3J0IGNvbnN0IGFsbENhbmNlbCA9YXN5bmMoZGF0YSk9PntcclxuICBhd2FpdCBkYi5kb2MoYCR7Y29sbGVjdGlvbn0vJHtkYXRhLmlkfWApLnVwZGF0ZSh7XHJcbiAgICBhY3RpdmVMZW5ndWE6IGZhbHNlLFxyXG4gICAgYWN0aXZlTWF0OiBmYWxzZSxcclxuICAgIGFjdGl2ZUxvZ2ljOiBmYWxzZSxcclxuICAgIGFjdGl2ZUV4YW0xOiBmYWxzZSxcclxuICAgIHRpbWU6IDAsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKkdFVCBEQVRBIFVTRVIgKi9cclxuZXhwb3J0IGNvbnN0IGdldEluaXRpYWwgPSBhc3luYyAodWlkKT0+e1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBkYlxyXG4gICAgICAuY29sbGVjdGlvbihjb2xsZWN0aW9uKVxyXG4gICAgICAud2hlcmUoXCJ1c2VyXCIsIFwiPT1cIiwgdWlkKVxyXG4gICAgICAuZ2V0KCk7XHJcbiAgICByZXR1cm4geyBkYXRhOiBkYXRhPy5kb2NzWzBdPy5kYXRhKCkgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ091dCA9IGFzeW5jICgpPT57XHJcbiAgYXdhaXQgYXV0aC5zaWduT3V0KCk7XHJcbn0iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcbi8qXHJcbmNvbnN0IHtcclxuICAgIEZJUkVCQVNFX0FVVEhET01BSU4sXHJcbiAgICBGSVJFQkFTRV9EQVRBQkFTRSxcclxuICAgIEZJUkVCQVNFX1BST0pFQ1RfSUQsXHJcbiAgfSA9IHByb2Nlc3MuZW52O1xyXG4gIGNvbnN0IHtcclxuICAgIEZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxyXG4gICAgRklSRUJBU0VfU0VOREVSX0lELFxyXG4gICAgRklSRUJBU0VfQVBQX0lELFxyXG4gICAgRklSRUJBU0VfTUVOU1VSQUJMRSxcclxuICB9ID0gcHJvY2Vzcy5lbnY7Ki9cclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lEeGJsVU1Uc0E3RVFBR1YzY2dDY0dNb1l1YUJOMl9JaGtcIixcclxuICBhdXRoRG9tYWluOiBcInV0dC1leGFtZW4uZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly91dHQtZXhhbWVuLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgcHJvamVjdElkOiBcInV0dC1leGFtZW5cIixcclxuICBzdG9yYWdlQnVja2V0OiBcInV0dC1leGFtZW4uYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIxODg5ODU1MDA4NFwiLFxyXG4gIGFwcElkOiBcIjE6MTg4OTg1NTAwODQ6d2ViOmYzMzNiZWQ3ZDE5YzQ0NGIzNTZiMTFcIixcclxuICBtZWFzdXJlbWVudElkOiBcIkctRVpKQkdNTVQ1UlwiLFxyXG59O1xyXG5cclxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG59XHJcblxyXG5jb25zdCBhcHAgPSBmaXJlYmFzZS5hcHAoKTtcclxuY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcclxuY29uc3QgYXUgPSBmaXJlYmFzZS5hdXRoKCk7XHJcbmNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbmNvbnN0IG5vdyA9IGZpcmViYXNlLmZpcmVzdG9yZS5UaW1lc3RhbXAubm93KCk7XHJcbmNvbnN0IHN0b3JhZ2UgPSBmaXJlYmFzZS5zdG9yYWdlKCk7XHJcblxyXG5leHBvcnQgeyBhdXRoLCBkYiwgbm93LCBzdG9yYWdlLGF1IH07XHJcblxyXG4vKipcclxuICogIGFwaUtleTogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBJX0tFWSxcclxuICAgIGF1dGhEb21haW46IEZJUkVCQVNFX0FVVEhET01BSU4sXHJcbiAgICBkYXRhYmFzZVVSTDogRklSRUJBU0VfREFUQUJBU0UsXHJcbiAgICBwcm9qZWN0SWQ6IEZJUkVCQVNFX1BST0pFQ1RfSUQsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBGSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCxcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBGSVJFQkFTRV9TRU5ERVJfSUQsXHJcbiAgICBhcHBJZDogRklSRUJBU0VfQVBQX0lELFxyXG4gICAgbWVhc3VyZW1lbnRJZDogRklSRUJBU0VfTUVOU1VSQUJMRSxcclxuICovIiwiZXhwb3J0IGNvbnN0IGhvc3QgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xyXG5leHBvcnQgY29uc3QgY29sbGVjdGlvbiA9IFwiYWx1bW5vczNcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2F2ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvbGFiL1BhZ2luYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL3N0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy1mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=