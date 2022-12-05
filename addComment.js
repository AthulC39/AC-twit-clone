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
exports.id = "pages/api/addComment";
exports.ids = ["pages/api/addComment"];
exports.modules = {

/***/ "(api)/./pages/api/addComment.ts":
/*!*********************************!*\
  !*** ./pages/api/addComment.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nasync function handler(req, res) {\n    const comment = JSON.parse(req.body);\n    const mutations = {\n        mutations: [\n            {\n                create: {\n                    _type: \"comment\",\n                    comment: comment.comment,\n                    username: comment.username,\n                    profileImg: comment.profileImg,\n                    tweet: {\n                        _type: \"reference\",\n                        _ref: comment.tweetId\n                    }\n                }\n            }\n        ]\n    };\n    const apiEndpoint = `https://${\"pjidcf63\"}.api.sanity.io/v2021-06-07/data/mutate/${\"production\"}`;\n    const result = await fetch(apiEndpoint, {\n        headers: {\n            \"content-type\": \"application/json\",\n            Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`\n        },\n        body: JSON.stringify(mutations),\n        method: \"POST\"\n    });\n    const json = await result.json();\n    console.log(json);\n    res.status(200).json({\n        message: \"Done!\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkQ29tbWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkVBQTZFO0FBUTlELGVBQWVBLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBMEIsRUFDMUI7SUFFRSxNQUFNQyxVQUFzQkMsS0FBS0MsS0FBSyxDQUFDSixJQUFJSyxJQUFJO0lBRS9DLE1BQU1DLFlBQVk7UUFDZEEsV0FBVztZQUNQO2dCQUNDQyxRQUFRO29CQUNMQyxPQUFPO29CQUNQTixTQUFTQSxRQUFRQSxPQUFPO29CQUN4Qk8sVUFBVVAsUUFBUU8sUUFBUTtvQkFDMUJDLFlBQVlSLFFBQVFRLFVBQVU7b0JBQzlCQyxPQUFPO3dCQUNISCxPQUFPO3dCQUNQSSxNQUFNVixRQUFRVyxPQUFPO29CQUN6QjtnQkFDSDtZQUNEO1NBQ0g7SUFFTDtJQUVBLE1BQU1DLGNBQWMsQ0FBQyxRQUFRLEVBQUVDLFVBQXlDLENBQUMsdUNBQXVDLEVBQUVBLFlBQXNDLENBQUMsQ0FBQztJQUcxSixNQUFNSSxTQUFTLE1BQU1DLE1BQU1OLGFBQVk7UUFDbkNPLFNBQVM7WUFDTCxnQkFBZ0I7WUFDaEJDLGVBQWUsQ0FBQyxPQUFPLEVBQUVQLFFBQVFDLEdBQUcsQ0FBQ08sZ0JBQWdCLENBQUMsQ0FBQztRQUMzRDtRQUNBbEIsTUFBTUYsS0FBS3FCLFNBQVMsQ0FBQ2xCO1FBQ3JCbUIsUUFBUTtJQUVaO0lBRUEsTUFBTUMsT0FBTyxNQUFNUCxPQUFPTyxJQUFJO0lBQzlCQyxRQUFRQyxHQUFHLENBQUNGO0lBRWR6QixJQUFJNEIsTUFBTSxDQUFDLEtBQUtILElBQUksQ0FBQztRQUFFSSxTQUFTO0lBQVE7QUFDMUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9hZGRDb21tZW50LnRzP2VkNTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cclxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHsgQ29tbWVudEJvZHkgfSBmcm9tICcuLi8uLi90eXBpbmdzJ1xyXG5cclxudHlwZSBEYXRhID0ge1xyXG4gIG1lc3NhZ2U6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxyXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8RGF0YT5cclxuKSB7XHJcblxyXG4gICAgY29uc3QgY29tbWVudDogQ29tbWVudEJvZHk9IEpTT04ucGFyc2UocmVxLmJvZHkpXHJcblxyXG4gICAgY29uc3QgbXV0YXRpb25zID0ge1xyXG4gICAgICAgIG11dGF0aW9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICBjcmVhdGU6IHtcclxuICAgICAgICAgICAgICAgIF90eXBlOiAnY29tbWVudCcsXHJcbiAgICAgICAgICAgICAgICBjb21tZW50OiBjb21tZW50LmNvbW1lbnQsXHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogY29tbWVudC51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgIHByb2ZpbGVJbWc6IGNvbW1lbnQucHJvZmlsZUltZyxcclxuICAgICAgICAgICAgICAgIHR3ZWV0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3R5cGU6ICdyZWZlcmVuY2UnLFxyXG4gICAgICAgICAgICAgICAgICAgIF9yZWY6IGNvbW1lbnQudHdlZXRJZCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGFwaUVuZHBvaW50ID0gYGh0dHBzOi8vJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRH0uYXBpLnNhbml0eS5pby92MjAyMS0wNi0wNy9kYXRhL211dGF0ZS8ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUfWBcclxuXHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYXBpRW5kcG9pbnQse1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Byb2Nlc3MuZW52LlNBTklUWV9BUElfVE9LRU59YCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG11dGF0aW9ucyksXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCdcclxuXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXN1bHQuanNvbigpXHJcbiAgICBjb25zb2xlLmxvZyhqc29uKVxyXG5cclxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdEb25lIScgfSlcclxufVxyXG4iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbW1lbnQiLCJKU09OIiwicGFyc2UiLCJib2R5IiwibXV0YXRpb25zIiwiY3JlYXRlIiwiX3R5cGUiLCJ1c2VybmFtZSIsInByb2ZpbGVJbWciLCJ0d2VldCIsIl9yZWYiLCJ0d2VldElkIiwiYXBpRW5kcG9pbnQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQiLCJORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCIsInJlc3VsdCIsImZldGNoIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJTQU5JVFlfQVBJX1RPS0VOIiwic3RyaW5naWZ5IiwibWV0aG9kIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/addComment.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addComment.ts"));
module.exports = __webpack_exports__;

})();