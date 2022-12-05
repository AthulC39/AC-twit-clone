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
exports.id = "pages/api/getTweets";
exports.ids = ["pages/api/getTweets"];
exports.modules = {

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("next-sanity");;

/***/ }),

/***/ "(api)/./pages/api/getTweets.ts":
/*!********************************!*\
  !*** ./pages/api/getTweets.ts ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sanity */ \"(api)/./sanity.js\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sanity__WEBPACK_IMPORTED_MODULE_0__, next_sanity__WEBPACK_IMPORTED_MODULE_1__]);\n([_sanity__WEBPACK_IMPORTED_MODULE_0__, next_sanity__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\nconst feedQuery = next_sanity__WEBPACK_IMPORTED_MODULE_1__.groq`\r\n    *[_type == \"tweet\" && !blockTweet]{\r\n        _id,\r\n        ...\r\n    } | order(_createdAt desc)\r\n`;\nasync function handler(req, res) {\n    const tweets = await _sanity__WEBPACK_IMPORTED_MODULE_0__.sanityClient.fetch(feedQuery);\n    console.log(tweets);\n    res.status(200).json({\n        tweets\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0VHdlZXRzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZFQUE2RTtBQUVsQztBQUVYO0FBRWhDLE1BQU1FLFlBQVlELDZDQUFJLENBQUM7QUFXdkIsZUFBZSxlQUFlRSxRQUM1QkM7SUFJRCxNQUFNRTtJQUVORSxRQUFRQztJQUNQSixJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDOztBQUFTO0FBQ2hDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZ2V0VHdlZXRzLnRzP2M1ZjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cclxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHsgc2FuaXR5Q2xpZW50IH0gZnJvbSAnLi4vLi4vc2FuaXR5J1xyXG5pbXBvcnQgeyBUd2VldCB9IGZyb20gJy4uLy4uL3R5cGluZ3MnXHJcbmltcG9ydCB7Z3JvcX0gZnJvbSAnbmV4dC1zYW5pdHknXHJcblxyXG5jb25zdCBmZWVkUXVlcnkgPSBncm9xYFxyXG4gICAgKltfdHlwZSA9PSBcInR3ZWV0XCIgJiYgIWJsb2NrVHdlZXRde1xyXG4gICAgICAgIF9pZCxcclxuICAgICAgICAuLi5cclxuICAgIH0gfCBvcmRlcihfY3JlYXRlZEF0IGRlc2MpXHJcbmBcclxuXHJcbnR5cGUgRGF0YSA9IHtcclxuICB0d2VldHM6IFR3ZWV0W11cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+XHJcbikge1xyXG5cclxuIGNvbnN0IHR3ZWV0czogVHdlZXRbXSA9IGF3YWl0IHNhbml0eUNsaWVudC5mZXRjaChmZWVkUXVlcnkpXHJcblxyXG4gY29uc29sZS5sb2codHdlZXRzKVxyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgdHdlZXRzIH0pXHJcbn1cclxuIl0sIm5hbWVzIjpbInNhbml0eUNsaWVudCIsImdyb3EiLCJmZWVkUXVlcnkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidHdlZXRzIiwiZmV0Y2giLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getTweets.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getTweets.ts"));
module.exports = __webpack_exports__;

})();