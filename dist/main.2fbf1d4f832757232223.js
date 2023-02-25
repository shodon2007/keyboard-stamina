/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/script.js */ \"./js/script.js\");\n/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_script_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/style.scss */ \"./scss/style.scss\");\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ (() => {

eval("var text = document.querySelector('.text').textContent;\nvar startTime = Date.now();\nvar letter = getArrayText(text);\ntext = letter.join('');\nvar mistakes = 0;\nvar thisLetter = 0;\nvar allowedToPrint = true;\nvar seeText = document.querySelector('.text');\nvar seeButtons = document.querySelector('.buttons');\nseeText.innerHTML = text.slice(thisLetter);\nprint();\ndocument.addEventListener('keyup', function (e) {\n  return pressedButton(e);\n});\nfunction pressedButton(button) {\n  if (allowedToPrint) {\n    removeClassInButtons();\n    var correctlyPressed = button.key == letter[thisLetter];\n    if (correctlyPressed) {\n      thisLetter++;\n      print();\n      addClassInButton();\n    } else {\n      mistakes++;\n    }\n    return;\n  }\n  if (button.key == 'Enter') {\n    location.reload();\n  }\n}\nfunction addClassInButton() {\n  document.getElementById(text[thisLetter]).classList.add(\"active\");\n}\nfunction removeClassInButtons() {\n  var getAllButtons = document.querySelectorAll('.button');\n  getAllButtons.forEach(function (button) {\n    button.classList.remove('active');\n  });\n}\nfunction print() {\n  var result = text.slice(thisLetter);\n  var printed = text.slice(thisLetter >= 10 ? thisLetter - 10 : 0, thisLetter);\n  document.querySelector('.progress__body').style.width = (thisLetter / text.length * 100).toFixed() + '%';\n  if (result.length >= 20) {\n    result = result.slice(0, 20);\n    result += \"...\";\n  }\n  if (printed.at(-1) == \" \") {\n    printed = printed.slice(0, printed.length - 1) + \"&#160;\";\n  }\n  if (result[0] == \" \") {\n    result = \"&#160;\" + result.slice(1);\n  }\n  if (result == false) {\n    showModalWindow();\n  }\n  if (text.slice(thisLetter) == false) {\n    seeText.innerHTML = \"\";\n  } else {\n    seeText.innerHTML = \"<div class=\\\"printed\\\">\".concat(printed, \"</div>\") + result;\n  }\n}\nfunction showModalWindow() {\n  (function showSpeedPrint() {\n    var time = Date.now() - startTime;\n    var speed = (text.length / (Math.floor(time / 1000) / 60)).toFixed(0);\n    document.querySelector('.statistic__speed').innerHTML = \"Speed: <span style='color: rgb(0, 150, 0)'>\".concat(speed, \"</span> WRM\");\n  })();\n  document.querySelector('.statistic').style.display = 'flex';\n  var endTime = Date.now();\n  var time = ((endTime - startTime) / 1000).toFixed(2);\n  allowedToPrint = false;\n  document.querySelector('.statistic__mistakes').innerHTML = \"Mistakes: <span style='color: rgb(255, 0, 0)'>\".concat(mistakes, \"</span>\");\n  document.querySelector('.statistic__time').innerHTML = \"Time: <span style='color: rgb(0, 150, 0)'>\".concat(time, \"</span>s\");\n}\nfunction getArrayText(text) {\n  var letter = text.split('');\n  var count = 0;\n  return letter.filter(function (el) {\n    if (el == \" \") {\n      count++;\n    } else {\n      count = 0;\n    }\n    if (count >= 2 || el == \"\\n\") {\n      return false;\n    } else {\n      return true;\n    }\n  });\n}\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;