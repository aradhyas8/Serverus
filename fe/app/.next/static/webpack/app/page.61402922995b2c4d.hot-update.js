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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Landing: function() { return /* binding */ Landing; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/label */ \"(app-pages-browser)/./components/ui/label.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ Landing auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst BACKEND_UPLOAD_URL = \"http://localhost:3000\";\nfunction Landing() {\n    _s();\n    const [repoUrl, setRepoUrl] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [uploadId, setUploadId] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [uploading, setUploading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [deployed, setDeployed] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"flex text-5xl bg-gray-50 border border-black items-center justify-center p-10\",\n                children: \"SERVERUS\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900  border border-black \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                        className: \"w-full max-w-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardTitle, {\n                                        className: \"text-xl\",\n                                        children: \"Deploy your GitHub Repository\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardDescription, {\n                                        children: \"Enter the URL of your GitHub repository to deploy it\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardContent, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"space-y-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"space-y-2\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_2__.Label, {\n                                                    htmlFor: \"github-url\",\n                                                    children: \"GitHub Repository URL\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                                    lineNumber: 31,\n                                                    columnNumber: 29\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                                    onChange: (e)=>{\n                                                        setRepoUrl(e.target.value);\n                                                    },\n                                                    placeholder: \"https://github.com/username/repo\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                                    lineNumber: 32,\n                                                    columnNumber: 29\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                            onClick: async ()=>{\n                                                setUploading(true);\n                                                const res = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"\".concat(BACKEND_UPLOAD_URL, \"/deploy\"), {\n                                                    repoUrl: repoUrl\n                                                });\n                                                setUploadId(res.data.id);\n                                                setUploading(false);\n                                                const interval = setInterval(async ()=>{\n                                                    const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"\".concat(BACKEND_UPLOAD_URL, \"/status?id=\").concat(res.data.id));\n                                                    if (response.data.status === \"deployed\") {\n                                                        clearInterval(interval);\n                                                        setDeployed(true);\n                                                    }\n                                                }, 3000);\n                                            },\n                                            disabled: uploadId !== \"\" || uploading,\n                                            className: \"w-full\",\n                                            type: \"submit\",\n                                            children: uploadId ? \"Deploying (\".concat(uploadId, \")\") : uploading ? \"Uploading...\" : \"Upload\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 13\n                    }, this),\n                    deployed && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                        className: \"w-full max-w-md mt-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardTitle, {\n                                        className: \"text-xl\",\n                                        children: \"Deployment Status\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardDescription, {\n                                        children: \"Your website is successfully deployed!\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardContent, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"space-y-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_2__.Label, {\n                                                htmlFor: \"deployed-url\",\n                                                children: \"Deployed URL\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 25\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                                id: \"deployed-url\",\n                                                readOnly: true,\n                                                type: \"url\",\n                                                value: \"http://\".concat(uploadId, \".dev.100xdevs.com:3001/index.html\")\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 25\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                        className: \"w-full\",\n                                        variant: \"outline\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"http://\".concat(uploadId, \".10kdevs.com/index.html\"),\n                                            target: \"_blank\",\n                                            children: \"Visit Website\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 25\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 26\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\aradhya\\\\Desktop\\\\Ethan Personal Projects\\\\Serverus\\\\fe\\\\components\\\\landing.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_s(Landing, \"2PwAOOStPZh/BBhFWAE+0+eKy9E=\");\n_c = Landing;\nvar _c;\n$RefreshReg$(_c, \"Landing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbGFuZGluZy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFHZ0c7QUFDbkQ7QUFDQTtBQUNFO0FBQ2Y7QUFDUDtBQUV6QixNQUFNVSxxQkFBcUI7QUFFcEIsU0FBU0M7O0lBQ1osTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNRLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDVSxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFDO0lBRXpDLHFCQUNJLDhEQUFDWTs7MEJBQ0csOERBQUNDO2dCQUFHQyxXQUFVOzBCQUFnRjs7Ozs7OzBCQUM5Riw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNmLDhEQUFDbEIscURBQUlBO3dCQUFDa0IsV0FBVTs7MENBQ1osOERBQUNwQiwyREFBVUE7O2tEQUNQLDhEQUFDRiwwREFBU0E7d0NBQUNzQixXQUFVO2tEQUFVOzs7Ozs7a0RBQy9CLDhEQUFDckIsZ0VBQWVBO2tEQUFDOzs7Ozs7Ozs7Ozs7MENBRXJCLDhEQUFDRSw0REFBV0E7MENBQ1IsNEVBQUNvQjtvQ0FBSUQsV0FBVTs7c0RBQ1gsOERBQUNDOzRDQUFJRCxXQUFVOzs4REFDWCw4REFBQ2pCLHVEQUFLQTtvREFBQ21CLFNBQVE7OERBQWE7Ozs7Ozs4REFDNUIsOERBQUNsQix1REFBS0E7b0RBQ0ZtQixVQUFVLENBQUNDO3dEQUNQYixXQUFXYSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7b0RBQzdCO29EQUNBQyxhQUFZOzs7Ozs7Ozs7Ozs7c0RBR3BCLDhEQUFDdEIseURBQU1BOzRDQUFDdUIsU0FBUztnREFDYmIsYUFBYTtnREFDYixNQUFNYyxNQUFNLE1BQU10Qiw2Q0FBS0EsQ0FBQ3VCLElBQUksQ0FBQyxHQUFzQixPQUFuQnRCLG9CQUFtQixZQUFVO29EQUN6REUsU0FBU0E7Z0RBQ2I7Z0RBQ0FHLFlBQVlnQixJQUFJRSxJQUFJLENBQUNDLEVBQUU7Z0RBQ3ZCakIsYUFBYTtnREFDYixNQUFNa0IsV0FBV0MsWUFBWTtvREFDekIsTUFBTUMsV0FBVyxNQUFNNUIsNkNBQUtBLENBQUM2QixHQUFHLENBQUMsR0FBbUNQLE9BQWhDckIsb0JBQW1CLGVBQXlCLE9BQVpxQixJQUFJRSxJQUFJLENBQUNDLEVBQUU7b0RBRS9FLElBQUlHLFNBQVNKLElBQUksQ0FBQ00sTUFBTSxLQUFLLFlBQVk7d0RBQ3JDQyxjQUFjTDt3REFDZGhCLFlBQVk7b0RBQ2hCO2dEQUNKLEdBQUc7NENBQ1A7NENBQUdzQixVQUFVM0IsYUFBYSxNQUFNRTs0Q0FBV00sV0FBVTs0Q0FBU29CLE1BQUs7c0RBQzlENUIsV0FBVyxjQUF1QixPQUFUQSxVQUFTLE9BQUtFLFlBQVksaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFLcEZFLDBCQUFZLDhEQUFDZCxxREFBSUE7d0JBQUNrQixXQUFVOzswQ0FDekIsOERBQUNwQiwyREFBVUE7O2tEQUNQLDhEQUFDRiwwREFBU0E7d0NBQUNzQixXQUFVO2tEQUFVOzs7Ozs7a0RBQy9CLDhEQUFDckIsZ0VBQWVBO2tEQUFDOzs7Ozs7Ozs7Ozs7MENBRXJCLDhEQUFDRSw0REFBV0E7O2tEQUNSLDhEQUFDb0I7d0NBQUlELFdBQVU7OzBEQUNYLDhEQUFDakIsdURBQUtBO2dEQUFDbUIsU0FBUTswREFBZTs7Ozs7OzBEQUM5Qiw4REFBQ2xCLHVEQUFLQTtnREFBQzRCLElBQUc7Z0RBQWVTLFFBQVE7Z0RBQUNELE1BQUs7Z0RBQU1kLE9BQU8sVUFBbUIsT0FBVGQsVUFBUzs7Ozs7Ozs7Ozs7O2tEQUUzRSw4REFBQzhCOzs7OztrREFDRCw4REFBQ3JDLHlEQUFNQTt3Q0FBQ2UsV0FBVTt3Q0FBU3VCLFNBQVE7a0RBQy9CLDRFQUFDQzs0Q0FBRUMsTUFBTSxVQUFtQixPQUFUakMsVUFBUzs0Q0FBMEJhLFFBQU87c0RBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUzlGO0dBcEVnQmhCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGFuZGluZy50c3g/MTJmMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcblxyXG5pbXBvcnQgeyBDYXJkVGl0bGUsIENhcmREZXNjcmlwdGlvbiwgQ2FyZEhlYWRlciwgQ2FyZENvbnRlbnQsIENhcmQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIlxyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvbGFiZWxcIlxyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIlxyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcblxyXG5jb25zdCBCQUNLRU5EX1VQTE9BRF9VUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExhbmRpbmcoKSB7XHJcbiAgICBjb25zdCBbcmVwb1VybCwgc2V0UmVwb1VybF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt1cGxvYWRJZCwgc2V0VXBsb2FkSWRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbdXBsb2FkaW5nLCBzZXRVcGxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2RlcGxveWVkLCBzZXREZXBsb3llZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZsZXggdGV4dC01eGwgYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWJsYWNrIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTEwXCI+U0VSVkVSVVM8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBiZy1ncmF5LTUwIGRhcms6YmctZ3JheS05MDAgIGJvcmRlciBib3JkZXItYmxhY2sgXCI+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1tZFwiPlxyXG4gICAgICAgICAgICAgICAgPENhcmRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+RGVwbG95IHlvdXIgR2l0SHViIFJlcG9zaXRvcnk8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZERlc2NyaXB0aW9uPkVudGVyIHRoZSBVUkwgb2YgeW91ciBHaXRIdWIgcmVwb3NpdG9yeSB0byBkZXBsb3kgaXQ8L0NhcmREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJnaXRodWItdXJsXCI+R2l0SHViIFJlcG9zaXRvcnkgVVJMPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSZXBvVXJsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly9naXRodWIuY29tL3VzZXJuYW1lL3JlcG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXBsb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtCQUNLRU5EX1VQTE9BRF9VUkx9L2RlcGxveWAsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBvVXJsOiByZXBvVXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFVwbG9hZElkKHJlcy5kYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFVwbG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtCQUNLRU5EX1VQTE9BRF9VUkx9L3N0YXR1cz9pZD0ke3Jlcy5kYXRhLmlkfWApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09IFwiZGVwbG95ZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGVwbG95ZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMzAwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0gZGlzYWJsZWQ9e3VwbG9hZElkICE9PSBcIlwiIHx8IHVwbG9hZGluZ30gY2xhc3NOYW1lPVwidy1mdWxsXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VwbG9hZElkID8gYERlcGxveWluZyAoJHt1cGxvYWRJZH0pYCA6IHVwbG9hZGluZyA/IFwiVXBsb2FkaW5nLi4uXCIgOiBcIlVwbG9hZFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAge2RlcGxveWVkICYmIDxDYXJkIGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1tZCBtdC04XCI+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cInRleHQteGxcIj5EZXBsb3ltZW50IFN0YXR1czwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkRGVzY3JpcHRpb24+WW91ciB3ZWJzaXRlIGlzIHN1Y2Nlc3NmdWxseSBkZXBsb3llZCE8L0NhcmREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImRlcGxveWVkLXVybFwiPkRlcGxveWVkIFVSTDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBpZD1cImRlcGxveWVkLXVybFwiIHJlYWRPbmx5IHR5cGU9XCJ1cmxcIiB2YWx1ZT17YGh0dHA6Ly8ke3VwbG9hZElkfS5kZXYuMTAweGRldnMuY29tOjMwMDEvaW5kZXguaHRtbGB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGxcIiB2YXJpYW50PVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cDovLyR7dXBsb2FkSWR9LjEwa2RldnMuY29tL2luZGV4Lmh0bWxgfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpc2l0IFdlYnNpdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPC9DYXJkPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIkNhcmRUaXRsZSIsIkNhcmREZXNjcmlwdGlvbiIsIkNhcmRIZWFkZXIiLCJDYXJkQ29udGVudCIsIkNhcmQiLCJMYWJlbCIsIklucHV0IiwiQnV0dG9uIiwidXNlU3RhdGUiLCJheGlvcyIsIkJBQ0tFTkRfVVBMT0FEX1VSTCIsIkxhbmRpbmciLCJyZXBvVXJsIiwic2V0UmVwb1VybCIsInVwbG9hZElkIiwic2V0VXBsb2FkSWQiLCJ1cGxvYWRpbmciLCJzZXRVcGxvYWRpbmciLCJkZXBsb3llZCIsInNldERlcGxveWVkIiwibWFpbiIsImgxIiwiY2xhc3NOYW1lIiwiZGl2IiwiaHRtbEZvciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJvbkNsaWNrIiwicmVzIiwicG9zdCIsImRhdGEiLCJpZCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJyZXNwb25zZSIsImdldCIsInN0YXR1cyIsImNsZWFySW50ZXJ2YWwiLCJkaXNhYmxlZCIsInR5cGUiLCJyZWFkT25seSIsImJyIiwidmFyaWFudCIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/landing.tsx\n"));

/***/ })

});