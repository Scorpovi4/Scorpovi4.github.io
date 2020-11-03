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
/******/ 	return __webpack_require__(__webpack_require__.s = "./_HTML/src/assets/js/_pages/page-diagnostic-clinics.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_HTML/src/assets/js/_libs/req.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"req\", function() { return req; });\nfunction req(settings, doneCb, failCb, alwaysCb) {\n  typeof doneCb !== 'function' ? doneCb = function doneCb(response) {\n    return console.log(response);\n  } : doneCb;\n  typeof failCb !== 'function' ? failCb = function failCb(err) {\n    return console.log(err);\n  } : failCb;\n  typeof alwaysCb !== 'function' ? alwaysCb = null : alwaysCb;\n  $.ajax(settings).done(doneCb).fail(failCb).always(alwaysCb);\n} // req (config, done callback, fail callback, always callback);\n\n//# sourceURL=webpack:///./_HTML/src/assets/js/_libs/req.js?");

/***/ }),

/***/ "./_HTML/src/assets/js/_pages/page-diagnostic-clinics.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _libs_req__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./_HTML/src/assets/js/_libs/req.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function () {\n  // Асинхронное добавление филиалов\n  $('.js-more-branches').on('click', function (e) {\n    e.preventDefault();\n    var container = $(this).closest('.clinic-card');\n    Object(_libs_req__WEBPACK_IMPORTED_MODULE_0__[\"req\"])({\n      url: container.find('.clinic-card__branches').data('action'),\n      method: container.find('.clinic-card__branches').data('method'),\n      data: {\n        id: container.find('.clinic-card__branches').data('id')\n      }\n    }, function () {\n      var data = {\n        clinics: [{\n          name: 'Клиника Fifa (Фифа) на м. Дворец Украина',\n          image: '1.png',\n          voters: 39,\n          value: 8,\n          stations: [{\n            link: '#',\n            name: 'Синагога'\n          }, {\n            link: '#',\n            name: 'Лыбедская'\n          }]\n        }, {\n          name: 'Клиника Viva (Вива) на м. Лыбедская',\n          image: '1.png',\n          voters: 39,\n          value: 7,\n          stations: [{\n            link: '#',\n            name: 'Дворец Спорта'\n          }, {\n            link: '#',\n            name: 'Лыбедская'\n          }]\n        }]\n      };\n      data.clinics.forEach(function (clinic) {\n        var starRate = clinic.value / 2;\n        var stars = \"\";\n\n        if (starRate % 2 == 0) {\n          for (var i = 0; i < starRate; i++) {\n            stars += \"<div class=\\\"rating__star\\\">                 \\n              </div>\";\n          }\n        } else {\n          starRate = Math.floor(starRate);\n\n          for (var _i = 0; _i < starRate; _i++) {\n            stars += \"<div class=\\\"rating__star\\\">                 \\n              </div>\";\n          }\n\n          stars += \"<div class=\\\"rating__star rating__star--half\\\">                 \\n              </div>\";\n        }\n\n        var stations = \"\";\n        clinic.stations.forEach(function (item) {\n          stations += \"<div class=\\\"metro-station metro-station--blue mr-3\\\">\\n            <a href=\\\"\".concat(item.link, \"\\\">\\n            \").concat(item.name, \"\\n            </a>\\n          </div>\");\n        });\n        container.find('.clinic-card__branches').append(\"\\n        <div class=\\\"clinic-card__branch\\\">\\n                <div class=\\\"row no-gutters\\\">\\n                  <div class=\\\"col-12 col-md-2\\\">\\n                    <div class=\\\"d-flex align-items-center justify-content-center justify-content-md-start h-100\\\">\\n                      <div class=\\\"clinic-card__branch-logo mb-4 mb-md-0\\\">\\n                        <img src=\\\"./assets/images/diagnostic-clinics/\".concat(clinic.image, \"\\\" alt=\\\"\\\">\\n                      </div>\\n                    </div>\\n                  </div>\\n                  <div class=\\\"col-12 col-md-10\\\">\\n                    <div class=\\\"clinic-card__branch-content\\\">\\n                      <div class=\\\"d-flex justify-content-between flex-column flex-sm-row mb-2\\\">\\n                        <div class=\\\"clinic-card__branch-title text-blue mb-3 mb-sm-0 text-center text-sm-left\\\">\\n                        \").concat(clinic.name, \"\\n                        </div>\\n                        <div class=\\\"rating\\\">\\n                          <div class=\\\"rating__left\\\">\\n                            <div class=\\\"rating__voters\\\">\\n                            \").concat(clinic.voters, \"\\n                            </div>\\n                          </div>\\n                          <div class=\\\"rating__right\\\">\\n                            <div class=\\\"rating__stars\\\">\\n                            \").concat(stars, \"\\n                            </div>\\n                            <div class=\\\"rating__value\\\">\\n                              \").concat(clinic.value, \"\\n                            </div>\\n                          </div>\\n                        </div>\\n                      </div>\\n                      <div class=\\\"view-text view-text--small text-gray mb-1\\\">\\n                        <p>\\n                          \\u041A\\u0438\\u0435\\u0432, \\u0443\\u043B. \\u0410\\u043D\\u0442\\u043E\\u043D\\u043E\\u0432\\u0438\\u0447\\u0430, 155\\n                        </p>\\n                      </div>\\n                      <div class=\\\"d-flex align-items-end\\\">\\n                        \").concat(stations, \"\\n                      </div>\\n                    </div>\\n                  </div>\\n                </div>\\n              </div>\\n        \"));\n      });\n    }, null, null);\n  }); // Плавный скролл к форме\n\n  $('.js-clinics-reviews-trigger').on('click', function () {\n    var _this = this;\n\n    $($(this).data('target')).slideDown(300, function () {\n      $('html, body').animate({\n        scrollTop: $($(_this).data('target')).offset().top\n      }, 1000);\n    });\n  }); // Отправка формы отзывов\n\n  $('.js-form-review').each(function (i, el) {\n    $(el).formValidation({\n      submitHandler: function submitHandler(form) {\n        Object(_libs_req__WEBPACK_IMPORTED_MODULE_0__[\"req\"])({\n          url: $(form).attr('action'),\n          method: $(form).attr('method'),\n          data: $(form).serialize()\n        }, function () {\n          form.reset();\n          $.magnificPopup.open({\n            items: {\n              src: '#modal-review-sent'\n            },\n            type: 'inline'\n          }, 0);\n        }, null, null);\n      }\n    });\n  });\n})());\n\n//# sourceURL=webpack:///./_HTML/src/assets/js/_pages/page-diagnostic-clinics.js?");

/***/ })

/******/ });