"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/countdown",{

/***/ "./src/pages/countdown.tsx":
/*!*********************************!*\
  !*** ./src/pages/countdown.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Countdown; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_app_nlw_copa_preview_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/app-nlw-copa-preview.png */ \"./src/assets/app-nlw-copa-preview.png\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Countdown() {\n    _s();\n    const [isConcluded, setIsConcluded] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [days, setDays] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [hours, setHours] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [minutes, setMinutes] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const target = new Date(\"11/20/2022 13:00:00\");\n        const interval = setInterval(()=>{\n            const now = new Date();\n            const difference = target.getTime() - now.getTime();\n            const d = Math.floor(difference / (1000 * 60 * 60 * 24));\n            setDays(d);\n            const h = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n            setHours(h);\n            const m = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));\n            setMinutes(m);\n            const s = Math.floor(difference % (1000 * 60) / 1000);\n            setSeconds(s);\n            if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {\n                setIsConcluded(true);\n            }\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-[1124px] h-screen mx-auto flex items-center justify-center\",\n        children: isConcluded ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: _assets_app_nlw_copa_preview_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            alt: \"Dois celulares exibindo uma pr\\xe9via da aplica\\xe7\\xe3o m\\xf3vel do NLW Copa\",\n            quality: 100\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\pages\\\\countdown.tsx\",\n            lineNumber: 44,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-white text-bold text-3xl\",\n                    children: \"Contagem regressiva para a abertura da Copa!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\pages\\\\countdown.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4 p-8 shadow-sm\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-5 text-white \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-center rounded border-2 border-white p-8\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"time\",\n                                        children: days\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\pages\\\\countdown.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"label\",\n                                        children: \"Days\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\pages\\\\countdown.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\pages\\\\countdown.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"divider\",\n                                children: \":\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\pages\\\\countdown.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-center rounded border-2 border-white p-8\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"time\",\n                                        children: hours\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\pages\\\\countdown.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"label\",\n                                        children: \"Hours\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\pages\\\\countdown.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\pages\\\\countdown.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"divider\",\n                                children: \":\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\pages\\\\countdown.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-center rounded border-2 border-white p-8\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"time\",\n                                        children: minutes\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\pages\\\\countdown.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"label\",\n                                        children: \"Minutes\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\pages\\\\countdown.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\pages\\\\countdown.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"divider\",\n                                children: \":\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\pages\\\\countdown.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"time\",\n                                        children: seconds\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\pages\\\\countdown.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"label\",\n                                        children: \"Seconds\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\pages\\\\countdown.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\pages\\\\countdown.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\pages\\\\countdown.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\pages\\\\countdown.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\pages\\\\countdown.tsx\",\n            lineNumber: 50,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\pages\\\\countdown.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Countdown, \"DYjE1zuiCqhIu1FzKOd1YfAMSvY=\");\n_c = Countdown;\nvar _c;\n$RefreshReg$(_c, \"Countdown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cy9jb3VudGRvd24udHN4P2RmODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGFwcFByZXZpZXdJbWcgZnJvbSAnLi4vYXNzZXRzL2FwcC1ubHctY29wYS1wcmV2aWV3LnBuZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvdW50ZG93bigpIHtcclxuICBjb25zdCBbaXNDb25jbHVkZWQsIHNldElzQ29uY2x1ZGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtkYXlzLCBzZXREYXlzXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW2hvdXJzLCBzZXRIb3Vyc10gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFttaW51dGVzLCBzZXRNaW51dGVzXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW3NlY29uZHMsIHNldFNlY29uZHNdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IG5ldyBEYXRlKCcxMS8yMC8yMDIyIDEzOjAwOjAwJylcclxuXHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKVxyXG4gICAgICBjb25zdCBkaWZmZXJlbmNlID0gdGFyZ2V0LmdldFRpbWUoKSAtIG5vdy5nZXRUaW1lKClcclxuXHJcbiAgICAgIGNvbnN0IGQgPSBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpXHJcbiAgICAgIHNldERheXMoZClcclxuXHJcbiAgICAgIGNvbnN0IGggPSBNYXRoLmZsb29yKFxyXG4gICAgICAgIChkaWZmZXJlbmNlICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MClcclxuICAgICAgKVxyXG4gICAgICBzZXRIb3VycyhoKVxyXG5cclxuICAgICAgY29uc3QgbSA9IE1hdGguZmxvb3IoKGRpZmZlcmVuY2UgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKVxyXG4gICAgICBzZXRNaW51dGVzKG0pXHJcblxyXG4gICAgICBjb25zdCBzID0gTWF0aC5mbG9vcigoZGlmZmVyZW5jZSAlICgxMDAwICogNjApKSAvIDEwMDApXHJcbiAgICAgIHNldFNlY29uZHMocylcclxuXHJcbiAgICAgIGlmIChkIDw9IDAgJiYgaCA8PSAwICYmIG0gPD0gMCAmJiBzIDw9IDApIHtcclxuICAgICAgICBzZXRJc0NvbmNsdWRlZCh0cnVlKVxyXG4gICAgICB9XHJcbiAgICB9LCAxMDAwKVxyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1bMTEyNHB4XSBoLXNjcmVlbiBteC1hdXRvIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgIHtpc0NvbmNsdWRlZCA/IChcclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHNyYz17YXBwUHJldmlld0ltZ31cclxuICAgICAgICAgIGFsdD1cIkRvaXMgY2VsdWxhcmVzIGV4aWJpbmRvIHVtYSBwcsOpdmlhIGRhIGFwbGljYcOnw6NvIG3Ds3ZlbCBkbyBOTFcgQ29wYVwiXHJcbiAgICAgICAgICBxdWFsaXR5PXsxMDB9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1ib2xkIHRleHQtM3hsXCI+XHJcbiAgICAgICAgICAgIENvbnRhZ2VtIHJlZ3Jlc3NpdmEgcGFyYSBhIGFiZXJ0dXJhIGRhIENvcGEhXHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHAtOCAgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNSB0ZXh0LXdoaXRlICBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHJvdW5kZWQgYm9yZGVyLTIgYm9yZGVyLXdoaXRlIHAtOFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGltZVwiPntkYXlzfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+RGF5czwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+Ojwvc3Bhbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHJvdW5kZWQgYm9yZGVyLTIgYm9yZGVyLXdoaXRlIHAtOFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGltZVwiPntob3Vyc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPkhvdXJzPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRpdmlkZXJcIj46PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcm91bmRlZCBib3JkZXItMiBib3JkZXItd2hpdGUgcC04XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aW1lXCI+e21pbnV0ZXN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj5NaW51dGVzPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRpdmlkZXJcIj46PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGltZVwiPntzZWNvbmRzfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+U2Vjb25kczwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImFwcFByZXZpZXdJbWciLCJDb3VudGRvd24iLCJpc0NvbmNsdWRlZCIsInNldElzQ29uY2x1ZGVkIiwiZGF5cyIsInNldERheXMiLCJob3VycyIsInNldEhvdXJzIiwibWludXRlcyIsInNldE1pbnV0ZXMiLCJzZWNvbmRzIiwic2V0U2Vjb25kcyIsInRhcmdldCIsIkRhdGUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwibm93IiwiZGlmZmVyZW5jZSIsImdldFRpbWUiLCJkIiwiTWF0aCIsImZsb29yIiwiaCIsIm0iLCJzIiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsInF1YWxpdHkiLCJoMiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/countdown.tsx\n"));

/***/ })

});