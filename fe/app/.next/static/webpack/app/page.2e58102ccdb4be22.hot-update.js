"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/landing.tsx":
/*!********************************!*\
  !*** ./components/landing.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Landing: function() { return /* binding */ Landing; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/label */ \"(app-pages-browser)/./components/ui/label.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ Landing auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst BACKEND_UPLOAD_URL = \"http://localhost:3000\";\nfunction Landing() {\n    _s();\n    const [repoUrl, setRepoUrl] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [uploadId, setUploadId] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [uploading, setUploading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [deployed, setDeployed] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-5xl bg-gray-50 border border-black items-center justify-center\",\n                children: \"SERVERUS\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                        className: \"w-full max-w-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardTitle, {\n                                        className: \"text-xl\",\n                                        children: \"Deploy your GitHub Repository\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardDescription, {\n                                        children: \"Enter the URL of your GitHub repository to deploy it\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardContent, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"space-y-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"space-y-2\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_2__.Label, {\n                                                    htmlFor: \"github-url\",\n                                                    children: \"GitHub Repository URL\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                                    lineNumber: 31,\n                                                    columnNumber: 29\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                                    onChange: (e)=>{\n                                                        setRepoUrl(e.target.value);\n                                                    },\n                                                    placeholder: \"https://github.com/username/repo\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                                    lineNumber: 32,\n                                                    columnNumber: 29\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                            onClick: async ()=>{\n                                                setUploading(true);\n                                                const res = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"\".concat(BACKEND_UPLOAD_URL, \"/deploy\"), {\n                                                    repoUrl: repoUrl\n                                                });\n                                                setUploadId(res.data.id);\n                                                setUploading(false);\n                                                const interval = setInterval(async ()=>{\n                                                    const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"\".concat(BACKEND_UPLOAD_URL, \"/status?id=\").concat(res.data.id));\n                                                    if (response.data.status === \"deployed\") {\n                                                        clearInterval(interval);\n                                                        setDeployed(true);\n                                                    }\n                                                }, 3000);\n                                            },\n                                            disabled: uploadId !== \"\" || uploading,\n                                            className: \"w-full\",\n                                            type: \"submit\",\n                                            children: uploadId ? \"Deploying (\".concat(uploadId, \")\") : uploading ? \"Uploading...\" : \"Upload\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 13\n                    }, this),\n                    deployed && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                        className: \"w-full max-w-md mt-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardTitle, {\n                                        className: \"text-xl\",\n                                        children: \"Deployment Status\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardDescription, {\n                                        children: \"Your website is successfully deployed!\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardContent, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"space-y-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_2__.Label, {\n                                                htmlFor: \"deployed-url\",\n                                                children: \"Deployed URL\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 25\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                                id: \"deployed-url\",\n                                                readOnly: true,\n                                                type: \"url\",\n                                                value: \"http://\".concat(uploadId, \".dev.100xdevs.com:3001/index.html\")\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 25\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                        className: \"w-full\",\n                                        variant: \"outline\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"http://\".concat(uploadId, \".10kdevs.com/index.html\"),\n                                            target: \"_blank\",\n                                            children: \"Visit Website\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 25\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 26\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_s(Landing, \"2PwAOOStPZh/BBhFWAE+0+eKy9E=\");\n_c = Landing;\nvar _c;\n$RefreshReg$(_c, \"Landing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbGFuZGluZy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFHZ0c7QUFDbkQ7QUFDQTtBQUNFO0FBQ2Y7QUFDUDtBQUV6QixNQUFNVSxxQkFBcUI7QUFFcEIsU0FBU0M7O0lBQ1osTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNRLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDVSxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFDO0lBRXpDLHFCQUNJLDhEQUFDWTs7MEJBQ0csOERBQUNDO2dCQUFHQyxXQUFVOzBCQUFzRTs7Ozs7OzBCQUNwRiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNmLDhEQUFDbEIscURBQUlBO3dCQUFDa0IsV0FBVTs7MENBQ1osOERBQUNwQiwyREFBVUE7O2tEQUNQLDhEQUFDRiwwREFBU0E7d0NBQUNzQixXQUFVO2tEQUFVOzs7Ozs7a0RBQy9CLDhEQUFDckIsZ0VBQWVBO2tEQUFDOzs7Ozs7Ozs7Ozs7MENBRXJCLDhEQUFDRSw0REFBV0E7MENBQ1IsNEVBQUNvQjtvQ0FBSUQsV0FBVTs7c0RBQ1gsOERBQUNDOzRDQUFJRCxXQUFVOzs4REFDWCw4REFBQ2pCLHVEQUFLQTtvREFBQ21CLFNBQVE7OERBQWE7Ozs7Ozs4REFDNUIsOERBQUNsQix1REFBS0E7b0RBQ0ZtQixVQUFVLENBQUNDO3dEQUNQYixXQUFXYSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7b0RBQzdCO29EQUNBQyxhQUFZOzs7Ozs7Ozs7Ozs7c0RBR3BCLDhEQUFDdEIseURBQU1BOzRDQUFDdUIsU0FBUztnREFDYmIsYUFBYTtnREFDYixNQUFNYyxNQUFNLE1BQU10Qiw2Q0FBS0EsQ0FBQ3VCLElBQUksQ0FBQyxHQUFzQixPQUFuQnRCLG9CQUFtQixZQUFVO29EQUN6REUsU0FBU0E7Z0RBQ2I7Z0RBQ0FHLFlBQVlnQixJQUFJRSxJQUFJLENBQUNDLEVBQUU7Z0RBQ3ZCakIsYUFBYTtnREFDYixNQUFNa0IsV0FBV0MsWUFBWTtvREFDekIsTUFBTUMsV0FBVyxNQUFNNUIsNkNBQUtBLENBQUM2QixHQUFHLENBQUMsR0FBbUNQLE9BQWhDckIsb0JBQW1CLGVBQXlCLE9BQVpxQixJQUFJRSxJQUFJLENBQUNDLEVBQUU7b0RBRS9FLElBQUlHLFNBQVNKLElBQUksQ0FBQ00sTUFBTSxLQUFLLFlBQVk7d0RBQ3JDQyxjQUFjTDt3REFDZGhCLFlBQVk7b0RBQ2hCO2dEQUNKLEdBQUc7NENBQ1A7NENBQUdzQixVQUFVM0IsYUFBYSxNQUFNRTs0Q0FBV00sV0FBVTs0Q0FBU29CLE1BQUs7c0RBQzlENUIsV0FBVyxjQUF1QixPQUFUQSxVQUFTLE9BQUtFLFlBQVksaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFLcEZFLDBCQUFZLDhEQUFDZCxxREFBSUE7d0JBQUNrQixXQUFVOzswQ0FDekIsOERBQUNwQiwyREFBVUE7O2tEQUNQLDhEQUFDRiwwREFBU0E7d0NBQUNzQixXQUFVO2tEQUFVOzs7Ozs7a0RBQy9CLDhEQUFDckIsZ0VBQWVBO2tEQUFDOzs7Ozs7Ozs7Ozs7MENBRXJCLDhEQUFDRSw0REFBV0E7O2tEQUNSLDhEQUFDb0I7d0NBQUlELFdBQVU7OzBEQUNYLDhEQUFDakIsdURBQUtBO2dEQUFDbUIsU0FBUTswREFBZTs7Ozs7OzBEQUM5Qiw4REFBQ2xCLHVEQUFLQTtnREFBQzRCLElBQUc7Z0RBQWVTLFFBQVE7Z0RBQUNELE1BQUs7Z0RBQU1kLE9BQU8sVUFBbUIsT0FBVGQsVUFBUzs7Ozs7Ozs7Ozs7O2tEQUUzRSw4REFBQzhCOzs7OztrREFDRCw4REFBQ3JDLHlEQUFNQTt3Q0FBQ2UsV0FBVTt3Q0FBU3VCLFNBQVE7a0RBQy9CLDRFQUFDQzs0Q0FBRUMsTUFBTSxVQUFtQixPQUFUakMsVUFBUzs0Q0FBMEJhLFFBQU87c0RBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUzlGO0dBcEVnQmhCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGFuZGluZy50c3g/MTJmMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcblxyXG5pbXBvcnQgeyBDYXJkVGl0bGUsIENhcmREZXNjcmlwdGlvbiwgQ2FyZEhlYWRlciwgQ2FyZENvbnRlbnQsIENhcmQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIlxyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvbGFiZWxcIlxyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIlxyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcblxyXG5jb25zdCBCQUNLRU5EX1VQTE9BRF9VUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExhbmRpbmcoKSB7XHJcbiAgICBjb25zdCBbcmVwb1VybCwgc2V0UmVwb1VybF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt1cGxvYWRJZCwgc2V0VXBsb2FkSWRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbdXBsb2FkaW5nLCBzZXRVcGxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2RlcGxveWVkLCBzZXREZXBsb3llZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIGJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ibGFjayBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5TRVJWRVJVUzwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIGJnLWdyYXktNTAgZGFyazpiZy1ncmF5LTkwMCBwLTRcIj5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LW1kXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cInRleHQteGxcIj5EZXBsb3kgeW91ciBHaXRIdWIgUmVwb3NpdG9yeTwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkRGVzY3JpcHRpb24+RW50ZXIgdGhlIFVSTCBvZiB5b3VyIEdpdEh1YiByZXBvc2l0b3J5IHRvIGRlcGxveSBpdDwvQ2FyZERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImdpdGh1Yi11cmxcIj5HaXRIdWIgUmVwb3NpdG9yeSBVUkw8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlcG9VcmwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJodHRwczovL2dpdGh1Yi5jb20vdXNlcm5hbWUvcmVwb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVcGxvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke0JBQ0tFTkRfVVBMT0FEX1VSTH0vZGVwbG95YCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcG9Vcmw6IHJlcG9VcmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXBsb2FkSWQocmVzLmRhdGEuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXBsb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0JBQ0tFTkRfVVBMT0FEX1VSTH0vc3RhdHVzP2lkPSR7cmVzLmRhdGEuaWR9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gXCJkZXBsb3llZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREZXBsb3llZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSBkaXNhYmxlZD17dXBsb2FkSWQgIT09IFwiXCIgfHwgdXBsb2FkaW5nfSBjbGFzc05hbWU9XCJ3LWZ1bGxcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXBsb2FkSWQgPyBgRGVwbG95aW5nICgke3VwbG9hZElkfSlgIDogdXBsb2FkaW5nID8gXCJVcGxvYWRpbmcuLi5cIiA6IFwiVXBsb2FkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICB7ZGVwbG95ZWQgJiYgPENhcmQgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LW1kIG10LThcIj5cclxuICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwidGV4dC14bFwiPkRlcGxveW1lbnQgU3RhdHVzPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmREZXNjcmlwdGlvbj5Zb3VyIHdlYnNpdGUgaXMgc3VjY2Vzc2Z1bGx5IGRlcGxveWVkITwvQ2FyZERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiZGVwbG95ZWQtdXJsXCI+RGVwbG95ZWQgVVJMPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGlkPVwiZGVwbG95ZWQtdXJsXCIgcmVhZE9ubHkgdHlwZT1cInVybFwiIHZhbHVlPXtgaHR0cDovLyR7dXBsb2FkSWR9LmRldi4xMDB4ZGV2cy5jb206MzAwMS9pbmRleC5odG1sYH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbFwiIHZhcmlhbnQ9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwOi8vJHt1cGxvYWRJZH0uMTBrZGV2cy5jb20vaW5kZXguaHRtbGB9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlzaXQgV2Vic2l0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICA8L0NhcmQ+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiQ2FyZFRpdGxlIiwiQ2FyZERlc2NyaXB0aW9uIiwiQ2FyZEhlYWRlciIsIkNhcmRDb250ZW50IiwiQ2FyZCIsIkxhYmVsIiwiSW5wdXQiLCJCdXR0b24iLCJ1c2VTdGF0ZSIsImF4aW9zIiwiQkFDS0VORF9VUExPQURfVVJMIiwiTGFuZGluZyIsInJlcG9VcmwiLCJzZXRSZXBvVXJsIiwidXBsb2FkSWQiLCJzZXRVcGxvYWRJZCIsInVwbG9hZGluZyIsInNldFVwbG9hZGluZyIsImRlcGxveWVkIiwic2V0RGVwbG95ZWQiLCJtYWluIiwiaDEiLCJjbGFzc05hbWUiLCJkaXYiLCJodG1sRm9yIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwbGFjZWhvbGRlciIsIm9uQ2xpY2siLCJyZXMiLCJwb3N0IiwiZGF0YSIsImlkIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInJlc3BvbnNlIiwiZ2V0Iiwic3RhdHVzIiwiY2xlYXJJbnRlcnZhbCIsImRpc2FibGVkIiwidHlwZSIsInJlYWRPbmx5IiwiYnIiLCJ2YXJpYW50IiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/landing.tsx\n"));

/***/ })

});