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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Countdown\": function() { return /* binding */ Countdown; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Countdown() {\n    _s();\n    const [isConcluded, setIsConcluded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [days, setDays] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [hours, setHours] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [minutes, setMinutes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const target = new Date(\"11/20/2022 13:00:00\");\n        const interval = setInterval(()=>{\n            const now = new Date();\n            const difference = target.getTime() - now.getTime();\n            const d = Math.floor(difference / (1000 * 60 * 60 * 24));\n            setDays(d);\n            const h = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n            setHours(h);\n            const m = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));\n            setMinutes(m);\n            const s = Math.floor(difference % (1000 * 60) / 1000);\n            setSeconds(s);\n            if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {\n                setPartyTime(true);\n            }\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Contagem regressiva para a abertura da Copa!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"timer-wrapper\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"timer-inner\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"timer-segment\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"time\",\n                                    children: days\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"label\",\n                                    children: \"Days\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"divider\",\n                            children: \":\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"timer-segment\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"time\",\n                                    children: hours\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"label\",\n                                    children: \"Hours\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"divider\",\n                            children: \":\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"timer-segment\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"time\",\n                                    children: minutes\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"label\",\n                                    children: \"Minutes\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"divider\",\n                            children: \":\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"timer-segment\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"time\",\n                                    children: seconds\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"label\",\n                                    children: \"Seconds\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\wlcco\\\\OneDrive\\\\Documentos\\\\FAM\\\\React\\\\ignite-aulas\\\\reactjs\\\\nlw-world-cup\\\\web\\\\src\\\\components\\\\Countdown.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Countdown, \"DYjE1zuiCqhIu1FzKOd1YfAMSvY=\");\n_c = Countdown;\n{\n/* <Image\r\nsrc={appPreviewImg}\r\nalt=\"Dois celulares exibindo uma prévia da aplicação móvel do NLW Copa\"\r\nquality={100}\r\n/> */ }var _c;\n$RefreshReg$(_c, \"Countdown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db3VudGRvd24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQzJDO0FBR3BDLFNBQVNFLFlBQVk7O0lBQzFCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHSCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3BELE1BQU0sQ0FBQ0ksTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNNLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUSxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1hLFNBQVMsSUFBSUMsS0FBSztRQUV4QixNQUFNQyxXQUFXQyxZQUFZLElBQU07WUFDakMsTUFBTUMsTUFBTSxJQUFJSDtZQUNoQixNQUFNSSxhQUFhTCxPQUFPTSxPQUFPLEtBQUtGLElBQUlFLE9BQU87WUFFakQsTUFBTUMsSUFBSUMsS0FBS0MsS0FBSyxDQUFDSixhQUFjLFFBQU8sS0FBSyxLQUFLLEVBQUM7WUFDckRaLFFBQVFjO1lBRVIsTUFBTUcsSUFBSUYsS0FBS0MsS0FBSyxDQUNsQixhQUFlLFFBQU8sS0FBSyxLQUFLLEVBQUMsSUFBTyxRQUFPLEtBQUssRUFBQztZQUV2RGQsU0FBU2U7WUFFVCxNQUFNQyxJQUFJSCxLQUFLQyxLQUFLLENBQUMsYUFBZSxRQUFPLEtBQUssRUFBQyxJQUFPLFFBQU8sRUFBQztZQUNoRVosV0FBV2M7WUFFWCxNQUFNQyxJQUFJSixLQUFLQyxLQUFLLENBQUMsYUFBZSxRQUFPLEVBQUMsSUFBTTtZQUNsRFYsV0FBV2E7WUFFWCxJQUFJTCxLQUFLLEtBQUtHLEtBQUssS0FBS0MsS0FBSyxLQUFLQyxLQUFLLEdBQUc7Z0JBQ3hDQyxhQUFhLElBQUk7WUFDbkIsQ0FBQztRQUNILEdBQUc7UUFFSCxPQUFPLElBQU1DLGNBQWNaO0lBQzdCLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDYTs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNEO2dCQUFJRSxXQUFVOzBCQUNiLDRFQUFDRjtvQkFBSUUsV0FBVTs7c0NBQ2IsOERBQUNGOzRCQUFJRSxXQUFVOzs4Q0FDYiw4REFBQ0M7b0NBQUtELFdBQVU7OENBQVF6Qjs7Ozs7OzhDQUN4Qiw4REFBQzBCO29DQUFLRCxXQUFVOzhDQUFROzs7Ozs7Ozs7Ozs7c0NBRTFCLDhEQUFDQzs0QkFBS0QsV0FBVTtzQ0FBVTs7Ozs7O3NDQUMxQiw4REFBQ0Y7NEJBQUlFLFdBQVU7OzhDQUNiLDhEQUFDQztvQ0FBS0QsV0FBVTs4Q0FBUXZCOzs7Ozs7OENBQ3hCLDhEQUFDd0I7b0NBQUtELFdBQVU7OENBQVE7Ozs7Ozs7Ozs7OztzQ0FFMUIsOERBQUNDOzRCQUFLRCxXQUFVO3NDQUFVOzs7Ozs7c0NBQzFCLDhEQUFDRjs0QkFBSUUsV0FBVTs7OENBQ2IsOERBQUNDO29DQUFLRCxXQUFVOzhDQUFRckI7Ozs7Ozs4Q0FDeEIsOERBQUNzQjtvQ0FBS0QsV0FBVTs4Q0FBUTs7Ozs7Ozs7Ozs7O3NDQUUxQiw4REFBQ0M7NEJBQUtELFdBQVU7c0NBQVU7Ozs7OztzQ0FDMUIsOERBQUNGOzRCQUFJRSxXQUFVOzs4Q0FDYiw4REFBQ0M7b0NBQUtELFdBQVU7OENBQVFuQjs7Ozs7OzhDQUN4Qiw4REFBQ29CO29DQUFLRCxXQUFVOzhDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wQyxDQUFDO0dBaEVlNUI7S0FBQUE7QUFrRWhCO0FBQ0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLnRzeD81NTFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBhcHBQcmV2aWV3SW1nIGZyb20gJy4uL2Fzc2V0cy9hcHAtbmx3LWNvcGEtcHJldmlldy5wbmcnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ291bnRkb3duKCkge1xyXG4gIGNvbnN0IFtpc0NvbmNsdWRlZCwgc2V0SXNDb25jbHVkZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2RheXMsIHNldERheXNdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbaG91cnMsIHNldEhvdXJzXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW21pbnV0ZXMsIHNldE1pbnV0ZXNdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbc2Vjb25kcywgc2V0U2Vjb25kc10gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gbmV3IERhdGUoJzExLzIwLzIwMjIgMTM6MDA6MDAnKVxyXG5cclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpXHJcbiAgICAgIGNvbnN0IGRpZmZlcmVuY2UgPSB0YXJnZXQuZ2V0VGltZSgpIC0gbm93LmdldFRpbWUoKVxyXG5cclxuICAgICAgY29uc3QgZCA9IE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSlcclxuICAgICAgc2V0RGF5cyhkKVxyXG5cclxuICAgICAgY29uc3QgaCA9IE1hdGguZmxvb3IoXHJcbiAgICAgICAgKGRpZmZlcmVuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKVxyXG4gICAgICApXHJcbiAgICAgIHNldEhvdXJzKGgpXHJcblxyXG4gICAgICBjb25zdCBtID0gTWF0aC5mbG9vcigoZGlmZmVyZW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpXHJcbiAgICAgIHNldE1pbnV0ZXMobSlcclxuXHJcbiAgICAgIGNvbnN0IHMgPSBNYXRoLmZsb29yKChkaWZmZXJlbmNlICUgKDEwMDAgKiA2MCkpIC8gMTAwMClcclxuICAgICAgc2V0U2Vjb25kcyhzKVxyXG5cclxuICAgICAgaWYgKGQgPD0gMCAmJiBoIDw9IDAgJiYgbSA8PSAwICYmIHMgPD0gMCkge1xyXG4gICAgICAgIHNldFBhcnR5VGltZSh0cnVlKVxyXG4gICAgICB9XHJcbiAgICB9LCAxMDAwKVxyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgzPkNvbnRhZ2VtIHJlZ3Jlc3NpdmEgcGFyYSBhIGFiZXJ0dXJhIGRhIENvcGEhPC9oMz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lci13cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lci1pbm5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lci1zZWdtZW50XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpbWVcIj57ZGF5c308L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+RGF5czwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGl2aWRlclwiPjo8L3NwYW4+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVyLXNlZ21lbnRcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGltZVwiPntob3Vyc308L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+SG91cnM8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRpdmlkZXJcIj46PC9zcGFuPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lci1zZWdtZW50XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpbWVcIj57bWludXRlc308L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+TWludXRlczwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGl2aWRlclwiPjo8L3NwYW4+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVyLXNlZ21lbnRcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGltZVwiPntzZWNvbmRzfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj5TZWNvbmRzPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG57XHJcbiAgLyogPEltYWdlXHJcbnNyYz17YXBwUHJldmlld0ltZ31cclxuYWx0PVwiRG9pcyBjZWx1bGFyZXMgZXhpYmluZG8gdW1hIHByw6l2aWEgZGEgYXBsaWNhw6fDo28gbcOzdmVsIGRvIE5MVyBDb3BhXCJcclxucXVhbGl0eT17MTAwfVxyXG4vPiAqL1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvdW50ZG93biIsImlzQ29uY2x1ZGVkIiwic2V0SXNDb25jbHVkZWQiLCJkYXlzIiwic2V0RGF5cyIsImhvdXJzIiwic2V0SG91cnMiLCJtaW51dGVzIiwic2V0TWludXRlcyIsInNlY29uZHMiLCJzZXRTZWNvbmRzIiwidGFyZ2V0IiwiRGF0ZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJub3ciLCJkaWZmZXJlbmNlIiwiZ2V0VGltZSIsImQiLCJNYXRoIiwiZmxvb3IiLCJoIiwibSIsInMiLCJzZXRQYXJ0eVRpbWUiLCJjbGVhckludGVydmFsIiwiZGl2IiwiaDMiLCJjbGFzc05hbWUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Countdown.tsx\n"));

/***/ })

});