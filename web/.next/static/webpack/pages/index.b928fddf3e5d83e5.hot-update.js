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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Countdown\": function() { return /* binding */ Countdown; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_app_nlw_copa_preview_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/app-nlw-copa-preview.png */ \"./src/assets/app-nlw-copa-preview.png\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Countdown() {\n    _s();\n    const [isConcluded, setIsConcluded] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [days, setDays] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [hours, setHours] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [minutes, setMinutes] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const target = new Date(\"11/03/2022 21:09:00\");\n        const interval = setInterval(()=>{\n            const now = new Date();\n            const difference = target.getTime() - now.getTime();\n            const d = Math.floor(difference / (1000 * 60 * 60 * 24));\n            setDays(d);\n            const h = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n            setHours(h);\n            const m = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));\n            setMinutes(m);\n            const s = Math.floor(difference % (1000 * 60) / 1000);\n            setSeconds(s);\n            if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {\n                setIsConcluded(true);\n            }\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: isConcluded ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: _assets_app_nlw_copa_preview_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            alt: \"Dois celulares exibindo uma pr\\xe9via da aplica\\xe7\\xe3o m\\xf3vel do NLW Copa\",\n            quality: 100\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n            lineNumber: 44,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"Contagem regressiva para a abertura da Copa!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"timer-wrapper\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"timer-inner\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"timer-segment\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"time\",\n                                        children: days\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"label\",\n                                        children: \"Days\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"divider\",\n                                children: \":\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"timer-segment\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"time\",\n                                        children: hours\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"label\",\n                                        children: \"Hours\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"divider\",\n                                children: \":\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"timer-segment\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"time\",\n                                        children: minutes\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"label\",\n                                        children: \"Minutes\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"divider\",\n                                children: \":\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"timer-segment\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"time\",\n                                        children: seconds\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"label\",\n                                        children: \"Seconds\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n            lineNumber: 50,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Countdown, \"DYjE1zuiCqhIu1FzKOd1YfAMSvY=\");\n_c = Countdown;\nvar _c;\n$RefreshReg$(_c, \"Countdown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db3VudGRvd24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQThCO0FBQ2E7QUFDbUI7QUFFdkQsU0FBU0ksWUFBWTs7SUFDMUIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdKLCtDQUFRQSxDQUFDLEtBQUs7SUFDcEQsTUFBTSxDQUFDSyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ08sT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNTLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDVyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDO0lBRXZDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTWMsU0FBUyxJQUFJQyxLQUFLO1FBRXhCLE1BQU1DLFdBQVdDLFlBQVksSUFBTTtZQUNqQyxNQUFNQyxNQUFNLElBQUlIO1lBQ2hCLE1BQU1JLGFBQWFMLE9BQU9NLE9BQU8sS0FBS0YsSUFBSUUsT0FBTztZQUVqRCxNQUFNQyxJQUFJQyxLQUFLQyxLQUFLLENBQUNKLGFBQWMsUUFBTyxLQUFLLEtBQUssRUFBQztZQUNyRFosUUFBUWM7WUFFUixNQUFNRyxJQUFJRixLQUFLQyxLQUFLLENBQ2xCLGFBQWUsUUFBTyxLQUFLLEtBQUssRUFBQyxJQUFPLFFBQU8sS0FBSyxFQUFDO1lBRXZEZCxTQUFTZTtZQUVULE1BQU1DLElBQUlILEtBQUtDLEtBQUssQ0FBQyxhQUFlLFFBQU8sS0FBSyxFQUFDLElBQU8sUUFBTyxFQUFDO1lBQ2hFWixXQUFXYztZQUVYLE1BQU1DLElBQUlKLEtBQUtDLEtBQUssQ0FBQyxhQUFlLFFBQU8sRUFBQyxJQUFNO1lBQ2xEVixXQUFXYTtZQUVYLElBQUlMLEtBQUssS0FBS0csS0FBSyxLQUFLQyxLQUFLLEtBQUtDLEtBQUssR0FBRztnQkFDeENyQixlQUFlLElBQUk7WUFDckIsQ0FBQztRQUNILEdBQUc7UUFFSCxPQUFPLElBQU1zQixjQUFjWDtJQUM3QixHQUFHLEVBQUU7SUFFTCxxQkFDRTtrQkFDR1osNEJBQ0MsOERBQUNMLG1EQUFLQTtZQUNKNkIsS0FBSzFCLHdFQUFhQTtZQUNsQjJCLEtBQUk7WUFDSkMsU0FBUzs7Ozs7aUNBR1gsOERBQUNDOzs4QkFDQyw4REFBQ0M7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0Q7b0JBQUlFLFdBQVU7OEJBQ2IsNEVBQUNGO3dCQUFJRSxXQUFVOzswQ0FDYiw4REFBQ0Y7Z0NBQUlFLFdBQVU7O2tEQUNiLDhEQUFDQzt3Q0FBS0QsV0FBVTtrREFBUTNCOzs7Ozs7a0RBQ3hCLDhEQUFDNEI7d0NBQUtELFdBQVU7a0RBQVE7Ozs7Ozs7Ozs7OzswQ0FFMUIsOERBQUNDO2dDQUFLRCxXQUFVOzBDQUFVOzs7Ozs7MENBQzFCLDhEQUFDRjtnQ0FBSUUsV0FBVTs7a0RBQ2IsOERBQUNDO3dDQUFLRCxXQUFVO2tEQUFRekI7Ozs7OztrREFDeEIsOERBQUMwQjt3Q0FBS0QsV0FBVTtrREFBUTs7Ozs7Ozs7Ozs7OzBDQUUxQiw4REFBQ0M7Z0NBQUtELFdBQVU7MENBQVU7Ozs7OzswQ0FDMUIsOERBQUNGO2dDQUFJRSxXQUFVOztrREFDYiw4REFBQ0M7d0NBQUtELFdBQVU7a0RBQVF2Qjs7Ozs7O2tEQUN4Qiw4REFBQ3dCO3dDQUFLRCxXQUFVO2tEQUFROzs7Ozs7Ozs7Ozs7MENBRTFCLDhEQUFDQztnQ0FBS0QsV0FBVTswQ0FBVTs7Ozs7OzBDQUMxQiw4REFBQ0Y7Z0NBQUlFLFdBQVU7O2tEQUNiLDhEQUFDQzt3Q0FBS0QsV0FBVTtrREFBUXJCOzs7Ozs7a0RBQ3hCLDhEQUFDc0I7d0NBQUtELFdBQVU7a0RBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBS2pDOztBQUdQLENBQUM7R0ExRWU5QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db3VudGRvd24udHN4PzU1MWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGFwcFByZXZpZXdJbWcgZnJvbSAnLi4vYXNzZXRzL2FwcC1ubHctY29wYS1wcmV2aWV3LnBuZydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb3VudGRvd24oKSB7XHJcbiAgY29uc3QgW2lzQ29uY2x1ZGVkLCBzZXRJc0NvbmNsdWRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbZGF5cywgc2V0RGF5c10gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtob3Vycywgc2V0SG91cnNdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbbWludXRlcywgc2V0TWludXRlc10gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtzZWNvbmRzLCBzZXRTZWNvbmRzXSA9IHVzZVN0YXRlKDApXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBuZXcgRGF0ZSgnMTEvMDMvMjAyMiAyMTowOTowMCcpXHJcblxyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKClcclxuICAgICAgY29uc3QgZGlmZmVyZW5jZSA9IHRhcmdldC5nZXRUaW1lKCkgLSBub3cuZ2V0VGltZSgpXHJcblxyXG4gICAgICBjb25zdCBkID0gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKVxyXG4gICAgICBzZXREYXlzKGQpXHJcblxyXG4gICAgICBjb25zdCBoID0gTWF0aC5mbG9vcihcclxuICAgICAgICAoZGlmZmVyZW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApXHJcbiAgICAgIClcclxuICAgICAgc2V0SG91cnMoaClcclxuXHJcbiAgICAgIGNvbnN0IG0gPSBNYXRoLmZsb29yKChkaWZmZXJlbmNlICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSlcclxuICAgICAgc2V0TWludXRlcyhtKVxyXG5cclxuICAgICAgY29uc3QgcyA9IE1hdGguZmxvb3IoKGRpZmZlcmVuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKVxyXG4gICAgICBzZXRTZWNvbmRzKHMpXHJcblxyXG4gICAgICBpZiAoZCA8PSAwICYmIGggPD0gMCAmJiBtIDw9IDAgJiYgcyA8PSAwKSB7XHJcbiAgICAgICAgc2V0SXNDb25jbHVkZWQodHJ1ZSlcclxuICAgICAgfVxyXG4gICAgfSwgMTAwMClcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtpc0NvbmNsdWRlZCA/IChcclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHNyYz17YXBwUHJldmlld0ltZ31cclxuICAgICAgICAgIGFsdD1cIkRvaXMgY2VsdWxhcmVzIGV4aWJpbmRvIHVtYSBwcsOpdmlhIGRhIGFwbGljYcOnw6NvIG3Ds3ZlbCBkbyBOTFcgQ29wYVwiXHJcbiAgICAgICAgICBxdWFsaXR5PXsxMDB9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgzPkNvbnRhZ2VtIHJlZ3Jlc3NpdmEgcGFyYSBhIGFiZXJ0dXJhIGRhIENvcGEhPC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVyLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lci1zZWdtZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aW1lXCI+e2RheXN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj5EYXlzPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRpdmlkZXJcIj46PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZXItc2VnbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGltZVwiPntob3Vyc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPkhvdXJzPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRpdmlkZXJcIj46PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZXItc2VnbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGltZVwiPnttaW51dGVzfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+TWludXRlczwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+Ojwvc3Bhbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVyLXNlZ21lbnRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpbWVcIj57c2Vjb25kc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPlNlY29uZHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhcHBQcmV2aWV3SW1nIiwiQ291bnRkb3duIiwiaXNDb25jbHVkZWQiLCJzZXRJc0NvbmNsdWRlZCIsImRheXMiLCJzZXREYXlzIiwiaG91cnMiLCJzZXRIb3VycyIsIm1pbnV0ZXMiLCJzZXRNaW51dGVzIiwic2Vjb25kcyIsInNldFNlY29uZHMiLCJ0YXJnZXQiLCJEYXRlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIm5vdyIsImRpZmZlcmVuY2UiLCJnZXRUaW1lIiwiZCIsIk1hdGgiLCJmbG9vciIsImgiLCJtIiwicyIsImNsZWFySW50ZXJ2YWwiLCJzcmMiLCJhbHQiLCJxdWFsaXR5IiwiZGl2IiwiaDMiLCJjbGFzc05hbWUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Countdown.tsx\n"));

/***/ })

});