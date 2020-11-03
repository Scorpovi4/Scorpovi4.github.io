/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./_HTML/src/assets/js/_pages/page-faqs.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_HTML/src/assets/js/_libs/req.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"req\", function() { return req; });\nfunction req(settings, doneCb, failCb, alwaysCb) {\n  typeof doneCb !== 'function' ? doneCb = function doneCb(response) {\n    return console.log(response);\n  } : doneCb;\n  typeof failCb !== 'function' ? failCb = function failCb(err) {\n    return console.log(err);\n  } : failCb;\n  typeof alwaysCb !== 'function' ? alwaysCb = null : alwaysCb;\n  $.ajax(settings).done(doneCb).fail(failCb).always(alwaysCb);\n} // req (config, done callback, fail callback, always callback);\n\n//# sourceURL=webpack:///./_HTML/src/assets/js/_libs/req.js?");

/***/ }),

/***/ "./_HTML/src/assets/js/_modules/forms/sidebar-form.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _libs_req__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./_HTML/src/assets/js/_libs/req.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function () {\n  $('.js-sidebar-form').formValidation({\n    submitHandler: function submitHandler(form) {\n      Object(_libs_req__WEBPACK_IMPORTED_MODULE_0__[\"req\"])({\n        url: $(form).attr('action'),\n        method: $(form).attr('method'),\n        data: $(form).serialize()\n      }, function () {\n        form.reset();\n        $(form).find('input, textarea').each(function (i, el) {\n          $(el).removeClass('valid');\n        });\n        $.magnificPopup.open({\n          items: {\n            src: '../../modals/subscribe.html'\n          },\n          type: 'ajax'\n        }, 0);\n      }, null, null);\n    }\n  });\n})());\n\n//# sourceURL=webpack:///./_HTML/src/assets/js/_modules/forms/sidebar-form.js?");

/***/ }),

/***/ "./_HTML/src/assets/js/_pages/page-faqs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_forms_sidebar_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./_HTML/src/assets/js/_modules/forms/sidebar-form.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function () {})());\n\n//# sourceURL=webpack:///./_HTML/src/assets/js/_pages/page-faqs.js?");

/***/ })

/******/ });