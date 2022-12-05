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
exports.id = "pages/api/addTweet";
exports.ids = ["pages/api/addTweet"];
exports.modules = {

/***/ "(api)/./pages/api/addTweet.ts":
/*!*******************************!*\
  !*** ./pages/api/addTweet.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nasync function handler(req, res) {\n    const data = JSON.parse(req.body);\n    const mutations = {\n        mutations: [\n            {\n                create: {\n                    _type: \"tweet\",\n                    text: data.text,\n                    username: data.username,\n                    blockTweet: false,\n                    profileImg: data.profileImg,\n                    image: data.image\n                }\n            }\n        ]\n    };\n    const apiEndpoint = `https://${\"pjidcf63\"}.api.sanity.io/v2021-06-07/data/mutate/${\"production\"}`;\n    const result = await fetch(apiEndpoint, {\n        headers: {\n            \"content-type\": \"application/json\",\n            Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`\n        },\n        body: JSON.stringify(mutations),\n        method: \"POST\"\n    });\n    const json = await result.json();\n    res.status(200).json({\n        message: \"Added!\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkVHdlZXQudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDZFQUE2RTtBQVE5RCxlQUFlQSxRQUM1QkMsR0FBbUIsRUFDbkJDLEdBQTBCLEVBQzFCO0lBQ0EsTUFBTUMsT0FBa0JDLEtBQUtDLEtBQUssQ0FBQ0osSUFBSUssSUFBSTtJQUUzQyxNQUFNQyxZQUFZO1FBQ2hCQSxXQUFXO1lBQ1A7Z0JBQ0lDLFFBQVE7b0JBQ0pDLE9BQU87b0JBQ1BDLE1BQU1QLEtBQUtPLElBQUk7b0JBQ2ZDLFVBQVVSLEtBQUtRLFFBQVE7b0JBQ3ZCQyxZQUFZLEtBQUs7b0JBQ2pCQyxZQUFZVixLQUFLVSxVQUFVO29CQUMzQkMsT0FBT1gsS0FBS1csS0FBSztnQkFDckI7WUFDSjtTQUNIO0lBQ0g7SUFFQSxNQUFNQyxjQUFjLENBQUMsUUFBUSxFQUFFQyxVQUF5QyxDQUFDLHVDQUF1QyxFQUFFQSxZQUFzQyxDQUFDLENBQUM7SUFFMUosTUFBTUksU0FBUyxNQUFNQyxNQUFNTixhQUFhO1FBQ3RDTyxTQUFTO1lBQ0wsZ0JBQWdCO1lBQ2hCQyxlQUFlLENBQUMsT0FBTyxFQUFFUCxRQUFRQyxHQUFHLENBQUNPLGdCQUFnQixDQUFDLENBQUM7UUFDM0Q7UUFDQWxCLE1BQU1GLEtBQUtxQixTQUFTLENBQUNsQjtRQUNyQm1CLFFBQVE7SUFDVjtJQUVBLE1BQU1DLE9BQU8sTUFBTVAsT0FBT08sSUFBSTtJQUU5QnpCLElBQUkwQixNQUFNLENBQUMsS0FBS0QsSUFBSSxDQUFDO1FBQUVFLFNBQVM7SUFBUztBQUMzQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2FkZFR3ZWV0LnRzPzM1YmEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cclxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHsgVHdlZXRCb2R5IH0gZnJvbSAnLi4vLi4vdHlwaW5ncydcclxuXHJcbnR5cGUgRGF0YSA9IHtcclxuICBtZXNzYWdlOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+XHJcbikge1xyXG4gIGNvbnN0IGRhdGE6IFR3ZWV0Qm9keSA9IEpTT04ucGFyc2UocmVxLmJvZHkpO1xyXG5cclxuICBjb25zdCBtdXRhdGlvbnMgPSB7XHJcbiAgICBtdXRhdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgICAgICAgICAgX3R5cGU6ICd0d2VldCcsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBkYXRhLnRleHQsXHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgIGJsb2NrVHdlZXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcHJvZmlsZUltZzogZGF0YS5wcm9maWxlSW1nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IGRhdGEuaW1hZ2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG5cclxuICBjb25zdCBhcGlFbmRwb2ludCA9IGBodHRwczovLyR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUR9LmFwaS5zYW5pdHkuaW8vdjIwMjEtMDYtMDcvZGF0YS9tdXRhdGUvJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVH1gXHJcbiAgXHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYXBpRW5kcG9pbnQsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5TQU5JVFlfQVBJX1RPS0VOfWBcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShtdXRhdGlvbnMpLFxyXG4gICAgbWV0aG9kOiAnUE9TVCdcclxuICB9KVxyXG5cclxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcclxuXHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnQWRkZWQhJyB9KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJtdXRhdGlvbnMiLCJjcmVhdGUiLCJfdHlwZSIsInRleHQiLCJ1c2VybmFtZSIsImJsb2NrVHdlZXQiLCJwcm9maWxlSW1nIiwiaW1hZ2UiLCJhcGlFbmRwb2ludCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRCIsIk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIiwicmVzdWx0IiwiZmV0Y2giLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIlNBTklUWV9BUElfVE9LRU4iLCJzdHJpbmdpZnkiLCJtZXRob2QiLCJqc29uIiwic3RhdHVzIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/addTweet.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addTweet.ts"));
module.exports = __webpack_exports__;

})();