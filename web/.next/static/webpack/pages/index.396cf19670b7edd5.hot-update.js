"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Countdown.tsx":
/*!**************************************!*\
  !*** ./src/components/Countdown.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Countdown\": function() { return /* binding */ Countdown; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Countdown() {\n    _s();\n    const [isConcluded, setIsConcluded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [days, setDays] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [hours, setHours] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [minutes, setMinutes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const target = new Date(\"20/11/2022 13:00:00\");\n        const interval = setInterval(()=>{\n            const now = new Date();\n            const difference = target.getTime() - now.getTime();\n            const d = Math.floor(difference / (1000 * 60 * 60 * 24));\n            setDays(d);\n            const h = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n            setHours(h);\n            const m = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));\n            setMinutes(m);\n            const s = Math.floor(difference % (1000 * 60) / 1000);\n            setSeconds(s);\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Contagem regressiva para a abertura da Copa!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: days\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Countdown, \"DYjE1zuiCqhIu1FzKOd1YfAMSvY=\");\n_c = Countdown;\n{\n/* <Image\r\nsrc={appPreviewImg}\r\nalt=\"Dois celulares exibindo uma prévia da aplicação móvel do NLW Copa\"\r\nquality={100}\r\n/> */ }var _c;\n$RefreshReg$(_c, \"Countdown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db3VudGRvd24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQzJDO0FBR3BDLFNBQVNFLFlBQVk7O0lBQzFCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHSCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3BELE1BQU0sQ0FBQ0ksTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNNLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUSxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1hLFNBQVMsSUFBSUMsS0FBSztRQUV4QixNQUFNQyxXQUFXQyxZQUFZLElBQU07WUFDakMsTUFBTUMsTUFBTSxJQUFJSDtZQUNoQixNQUFNSSxhQUFhTCxPQUFPTSxPQUFPLEtBQUtGLElBQUlFLE9BQU87WUFFakQsTUFBTUMsSUFBSUMsS0FBS0MsS0FBSyxDQUFDSixhQUFjLFFBQU8sS0FBSyxLQUFLLEVBQUM7WUFDckRaLFFBQVFjO1lBRVIsTUFBTUcsSUFBSUYsS0FBS0MsS0FBSyxDQUNsQixhQUFlLFFBQU8sS0FBSyxLQUFLLEVBQUMsSUFBTyxRQUFPLEtBQUssRUFBQztZQUV2RGQsU0FBU2U7WUFFVCxNQUFNQyxJQUFJSCxLQUFLQyxLQUFLLENBQUMsYUFBZSxRQUFPLEtBQUssRUFBQyxJQUFPLFFBQU8sRUFBQztZQUNoRVosV0FBV2M7WUFFWCxNQUFNQyxJQUFJSixLQUFLQyxLQUFLLENBQUMsYUFBZSxRQUFPLEVBQUMsSUFBTTtZQUNsRFYsV0FBV2E7UUFDYixHQUFHO1FBRUgsT0FBTyxJQUFNQyxjQUFjWDtJQUM3QixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1k7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzswQkFBR3hCOzs7Ozs7Ozs7Ozs7QUFHVixDQUFDO0dBdENlSDtLQUFBQTtBQXdDaEI7QUFDRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db3VudGRvd24udHN4PzU1MWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGFwcFByZXZpZXdJbWcgZnJvbSAnLi4vYXNzZXRzL2FwcC1ubHctY29wYS1wcmV2aWV3LnBuZydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb3VudGRvd24oKSB7XHJcbiAgY29uc3QgW2lzQ29uY2x1ZGVkLCBzZXRJc0NvbmNsdWRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbZGF5cywgc2V0RGF5c10gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtob3Vycywgc2V0SG91cnNdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbbWludXRlcywgc2V0TWludXRlc10gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtzZWNvbmRzLCBzZXRTZWNvbmRzXSA9IHVzZVN0YXRlKDApXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBuZXcgRGF0ZSgnMjAvMTEvMjAyMiAxMzowMDowMCcpXHJcblxyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKClcclxuICAgICAgY29uc3QgZGlmZmVyZW5jZSA9IHRhcmdldC5nZXRUaW1lKCkgLSBub3cuZ2V0VGltZSgpXHJcblxyXG4gICAgICBjb25zdCBkID0gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKVxyXG4gICAgICBzZXREYXlzKGQpXHJcblxyXG4gICAgICBjb25zdCBoID0gTWF0aC5mbG9vcihcclxuICAgICAgICAoZGlmZmVyZW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApXHJcbiAgICAgIClcclxuICAgICAgc2V0SG91cnMoaClcclxuXHJcbiAgICAgIGNvbnN0IG0gPSBNYXRoLmZsb29yKChkaWZmZXJlbmNlICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSlcclxuICAgICAgc2V0TWludXRlcyhtKVxyXG5cclxuICAgICAgY29uc3QgcyA9IE1hdGguZmxvb3IoKGRpZmZlcmVuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKVxyXG4gICAgICBzZXRTZWNvbmRzKHMpXHJcbiAgICB9LCAxMDAwKVxyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgzPkNvbnRhZ2VtIHJlZ3Jlc3NpdmEgcGFyYSBhIGFiZXJ0dXJhIGRhIENvcGEhPC9oMz5cclxuICAgICAgPHA+e2RheXN9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG57XHJcbiAgLyogPEltYWdlXHJcbnNyYz17YXBwUHJldmlld0ltZ31cclxuYWx0PVwiRG9pcyBjZWx1bGFyZXMgZXhpYmluZG8gdW1hIHByw6l2aWEgZGEgYXBsaWNhw6fDo28gbcOzdmVsIGRvIE5MVyBDb3BhXCJcclxucXVhbGl0eT17MTAwfVxyXG4vPiAqL1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvdW50ZG93biIsImlzQ29uY2x1ZGVkIiwic2V0SXNDb25jbHVkZWQiLCJkYXlzIiwic2V0RGF5cyIsImhvdXJzIiwic2V0SG91cnMiLCJtaW51dGVzIiwic2V0TWludXRlcyIsInNlY29uZHMiLCJzZXRTZWNvbmRzIiwidGFyZ2V0IiwiRGF0ZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJub3ciLCJkaWZmZXJlbmNlIiwiZ2V0VGltZSIsImQiLCJNYXRoIiwiZmxvb3IiLCJoIiwibSIsInMiLCJjbGVhckludGVydmFsIiwiZGl2IiwiaDMiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Countdown.tsx\n"));

/***/ })

});