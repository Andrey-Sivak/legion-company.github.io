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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/main.js":
/*!************************!*\
  !*** ./app/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./app/js/modal.js\");\n\nwindow.addEventListener('load', function () {\n  (function () {\n    const modal = new _modal__WEBPACK_IMPORTED_MODULE_0__[\"Modal\"]();\n    let buttons = document.getElementsByClassName('button');\n    buttons = Array.prototype.slice.call(buttons);\n    buttons = buttons.filter(button => {\n      return !button.classList.contains('toTopBtn');\n    });\n\n    for (const btn of buttons) {\n      btn.addEventListener('click', e => {\n        e.preventDefault();\n        modal.init();\n      });\n    }\n  })();\n});\n\n//# sourceURL=webpack:///./app/js/main.js?");

/***/ }),

/***/ "./app/js/modal.js":
/*!*************************!*\
  !*** ./app/js/modal.js ***!
  \*************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Modal\", function() { return Modal; });\n\n\nclass Modal {\n  constructor(options) {\n    this.modal = 0;\n    this.ANIMATION_SPEED = 350;\n    this.closing = false;\n    this.body = document.body;\n  }\n\n  createModal() {\n    this.modal = document.createElement('div');\n    this.modal.classList.add('modal');\n    this.modal.dataset.close = 'true';\n    this.modal.insertAdjacentHTML('afterBegin', `<div class=\"modal-window\">\n                    <form action=\"#\" class=\"form\">\n                      <span class=\"modal_close\" id=\"modal-close\" data-close=\"true\">&times;</span>\n                        <p class=\"form_caption\">Оставьте заявку</p>\n                        <p class=\"form_sub-caption\">И мы вам перезвоним в течении 15 минут</p>\n                        <div class=\"form_group\">\n                          <input type=\"text\"\n                                 name=\"name\"\n                                 id=\"name\"\n                                 placeholder=\"Имя\"\n                                 class=\"input\">\n                        </div>\n                        <div class=\"form_group\">\n                          <input type=\"text\"\n                                 name=\"phone\"\n                                 id=\"phone\"\n                                 placeholder=\"Номер телефона\"\n                                 class=\"input\">\n                        </div>\n                        <div class=\"form_group\">\n                          <button type=\"submit\" class=\"btn form-btn\">отправить</button>\n                        </div>\n                      </form>\n                </div>`);\n    document.body.appendChild(this.modal);\n    return this.modal;\n  }\n  /*sendFormData() {\r\n      const modalForm = document.getElementById('modal-form');\r\n      const self = this;\r\n        modalForm.addEventListener('submit', function (e) {\r\n          e.preventDefault();\r\n            const formData = new FormData( this );\r\n          fetch( '../../form.php', {\r\n              method: 'post',\r\n              body: formData\r\n          }).then( ( response ) => {\r\n              return response.text();\r\n          }).catch( (er) => {\r\n              console.log(er);\r\n          });\r\n          self.close();\r\n      });\r\n  }*/\n\n\n  listeners() {\n    this.modal.addEventListener('click', e => {\n      if (e.target.dataset.close) {\n        this.close();\n      }\n    });\n  }\n\n  open() {\n    this.createModal();\n    setTimeout(() => {\n      if (!this.closing) {\n        this.modal.classList.add('open');\n      }\n\n      this.body.classList.add('body-forbiddence-scroll');\n    }, 10);\n    this.listeners();\n  }\n\n  close() {\n    this.closing = true;\n    this.modal.classList.remove('open');\n    this.modal.classList.add('modal-hide');\n    setTimeout(() => {\n      this.modal.classList.remove('modal-hide');\n      this.destroy();\n      this.closing = false;\n    }, this.ANIMATION_SPEED);\n    this.body.classList.remove('body-forbiddence-scroll');\n  }\n\n  destroy() {\n    this.modal.parentNode.removeChild(this.modal);\n    this.modal.removeEventListener('click', e => {\n      if (e.target.dataset.close) {\n        this.close();\n      }\n    });\n  }\n\n  init() {\n    this.open(); // this.sendFormData();\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./app/js/modal.js?");

/***/ })

/******/ });