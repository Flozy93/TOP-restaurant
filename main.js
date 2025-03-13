/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageloader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageloader.js */ \"./src/pageloader.js\");\n\r\n\r\n(0,_pageloader_js__WEBPACK_IMPORTED_MODULE_0__.loadMainPage)();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBK0M7QUFDL0M7QUFDQSw0REFBWSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRNYWluUGFnZSB9IGZyb20gXCIuL3BhZ2Vsb2FkZXIuanNcIjtcclxuXHJcbmxvYWRNYWluUGFnZSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/pageloader.js":
/*!***************************!*\
  !*** ./src/pageloader.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMainPage: () => (/* binding */ loadMainPage)\n/* harmony export */ });\nfunction loadMainPage() {\r\n  const container = document.querySelector(\".content\");\r\n  const header = document.querySelector(\".header\");\r\n  const nav = document.querySelector(\".nav\");\r\n\r\n  const title = document.createElement(\"h1\");\r\n  title.classList.add(\"header-title\");\r\n  title.textContent = \"Lorem Ipsum Burgers\";\r\n\r\n  const buttonContainer = document.createElement(\"div\");\r\n  buttonContainer.classList.add(\"button-container\");\r\n\r\n  const button1 = document.createElement(\"button\");\r\n  button1.textContent = \"Home\";\r\n\r\n  const button2 = document.createElement(\"button\");\r\n  button2.textContent = \"Menu\";\r\n\r\n  const button3 = document.createElement(\"button\");\r\n  button3.textContent = \"About us\";\r\n\r\n  const content = document.createElement(\"div\");\r\n  content.classList.add(\"text-container\");\r\n\r\n  const text = document.createElement(\"p\");\r\n  text.textContent = \"BRB!\";\r\n\r\n  const text2 = document.createElement(\"p\");\r\n  text2.textContent = \"Website in construction\";\r\n\r\n  container.appendChild(content);\r\n  content.appendChild(text);\r\n  content.appendChild(text2);\r\n  nav.appendChild(title);\r\n  header.appendChild(buttonContainer);\r\n  buttonContainer.appendChild(button1);\r\n  buttonContainer.appendChild(button2);\r\n  buttonContainer.appendChild(button3);\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZWxvYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2Vsb2FkZXIuanM/ZjM3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbG9hZE1haW5QYWdlKCkge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdlwiKTtcclxuXHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImhlYWRlci10aXRsZVwiKTtcclxuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiTG9yZW0gSXBzdW0gQnVyZ2Vyc1wiO1xyXG5cclxuICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgY29uc3QgYnV0dG9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgYnV0dG9uMS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG5cclxuICBjb25zdCBidXR0b24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBidXR0b24yLnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcblxyXG4gIGNvbnN0IGJ1dHRvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGJ1dHRvbjMudGV4dENvbnRlbnQgPSBcIkFib3V0IHVzXCI7XHJcblxyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcInRleHQtY29udGFpbmVyXCIpO1xyXG5cclxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgdGV4dC50ZXh0Q29udGVudCA9IFwiQlJCIVwiO1xyXG5cclxuICBjb25zdCB0ZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHRleHQyLnRleHRDb250ZW50ID0gXCJXZWJzaXRlIGluIGNvbnN0cnVjdGlvblwiO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKHRleHQyKTtcclxuICBuYXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xyXG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24xKTtcclxuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uMik7XHJcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbjMpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pageloader.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;