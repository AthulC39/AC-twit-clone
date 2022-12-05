"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getComments";
exports.ids = ["pages/api/getComments"];
exports.modules = {

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("next-sanity");;

/***/ }),

/***/ "(api)/./pages/api/getComments.ts":
/*!**********************************!*\
  !*** ./pages/api/getComments.ts ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sanity */ \"(api)/./sanity.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _sanity__WEBPACK_IMPORTED_MODULE_1__]);\n([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _sanity__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\nconst commentQuery = next_sanity__WEBPACK_IMPORTED_MODULE_0__.groq`\r\n*[_type == \"comment\" && references(*[_type== 'tweet' && _id== $tweetId]._id)]{\r\n    _id,\r\n    ...\r\n  } | order(_createdAt desc)\r\n    \r\n`;\nasync function handler(req, res) {\n    const { tweetId  } = req.query;\n    const comments = await _sanity__WEBPACK_IMPORTED_MODULE_1__.sanityClient.fetch(commentQuery, {\n        tweetId\n    });\n    res.status(200).json(comments);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0Q29tbWVudHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkVBQTZFO0FBRTNDO0FBQ1U7QUFHNUMsTUFBTUUsZUFBZUYsNkNBQUksQ0FBQztBQVkxQixlQUFlLGVBQWVHLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBMEIsRUFDMUI7SUFDRTtJQUVBO1FBQW1FQztJQUFROztBQUU5RSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9nZXRDb21tZW50cy50cz8xNzhlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXHJcbmltcG9ydCB7IGdyb3EgfSBmcm9tICduZXh0LXNhbml0eSdcclxuaW1wb3J0IHsgc2FuaXR5Q2xpZW50IH0gZnJvbSAnLi4vLi4vc2FuaXR5JztcclxuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gJy4uLy4uL3R5cGluZ3MnO1xyXG5cclxuY29uc3QgY29tbWVudFF1ZXJ5ID0gZ3JvcWBcclxuKltfdHlwZSA9PSBcImNvbW1lbnRcIiAmJiByZWZlcmVuY2VzKCpbX3R5cGU9PSAndHdlZXQnICYmIF9pZD09ICR0d2VldElkXS5faWQpXXtcclxuICAgIF9pZCxcclxuICAgIC4uLlxyXG4gIH0gfCBvcmRlcihfY3JlYXRlZEF0IGRlc2MpXHJcbiAgICBcclxuYFxyXG5cclxuXHJcblxyXG50eXBlIERhdGEgPSBDb21tZW50W107XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxyXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8RGF0YT5cclxuKSB7XHJcbiAgICBjb25zdCB7dHdlZXRJZH0gPSByZXEucXVlcnlcclxuXHJcbiAgICBjb25zdCBjb21tZW50czogQ29tbWVudFtdPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2goY29tbWVudFF1ZXJ5LHsgdHdlZXRJZCx9KVxyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKGNvbW1lbnRzKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJncm9xIiwic2FuaXR5Q2xpZW50IiwiY29tbWVudFF1ZXJ5IiwiaGFuZGxlciIsInJlcSIsInJlcyIsInR3ZWV0SWQiLCJxdWVyeSIsImNvbW1lbnRzIiwiZmV0Y2giLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getComments.ts\n");

/***/ }),

/***/ "(api)/./sanity.js":
/*!*******************!*\
  !*** ./sanity.js ***!
  \*******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"sanityClient\": () => (/* binding */ sanityClient)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__]);\nnext_sanity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst config = {\n    dataset: \"production\" || 0,\n    projectId: \"pjidcf63\",\n    apiVersion: \"2022-11-27\",\n    useCdn: \"development\" === \"production\"\n};\nconst sanityClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)(config);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zYW5pdHkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRW9CO0FBR2IsTUFBTUMsU0FBUztJQUN0QkMsU0FBU0MsWUFBc0MsSUFBSTtJQUNuREcsV0FBV0gsVUFBeUM7SUFDcERLLFlBQVk7SUFDWkMsUUFBUU4sa0JBQXlCO0FBR2pDLEVBQUM7QUFFTSxNQUFNTyxlQUFlVix5REFBWUEsQ0FBQ0MsUUFBTyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Nhbml0eS5qcz84NWQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBjcmVhdGVDbGllbnQsXHJcbn0gZnJvbSAnbmV4dC1zYW5pdHknXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuZGF0YXNldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX0RBVEFTRVQgfHwgJ3Byb2R1Y3Rpb24nLFxyXG5wcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lELFxyXG5hcGlWZXJzaW9uOiAnMjAyMi0xMS0yNycsXHJcbnVzZUNkbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyxcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2FuaXR5Q2xpZW50ID0gY3JlYXRlQ2xpZW50KGNvbmZpZykiXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50IiwiY29uZmlnIiwiZGF0YXNldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCIsInByb2plY3RJZCIsIk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lEIiwiYXBpVmVyc2lvbiIsInVzZUNkbiIsInNhbml0eUNsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./sanity.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getComments.ts"));
module.exports = __webpack_exports__;

})();