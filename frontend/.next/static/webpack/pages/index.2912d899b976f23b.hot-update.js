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

/***/ "./components/layout/index.tsx":
/*!*************************************!*\
  !*** ./components/layout/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/constants */ \"./lib/constants.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_hooks_use_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/hooks/use-scroll */ \"./lib/hooks/use-scroll.ts\");\n/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./meta */ \"./components/layout/meta.tsx\");\n/* harmony import */ var _sign_in_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in-modal */ \"./components/layout/sign-in-modal.tsx\");\n/* harmony import */ var _user_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-dropdown */ \"./components/layout/user-dropdown.tsx\");\n/* harmony import */ var flow_hooks_useFlowLogin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flow/hooks/useFlowLogin */ \"./flow/hooks/useFlowLogin.tsx\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Layout(param) {\n    let { meta , children  } = param;\n    _s();\n    const { SignInModal , setShowSignInModal  } = (0,_sign_in_modal__WEBPACK_IMPORTED_MODULE_6__.useSignInModal)();\n    const scrolled = (0,_lib_hooks_use_scroll__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(50);\n    const { user  } = (0,flow_hooks_useFlowLogin__WEBPACK_IMPORTED_MODULE_8__.useFlowLogin)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_meta__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                ...meta\n            }, void 0, false, {\n                fileName: \"/Users/dragoonz/Documents/hackathons/DCAdd/frontend/components/layout/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SignInModal, {}, void 0, false, {\n                fileName: \"/Users/dragoonz/Documents/hackathons/DCAdd/frontend/components/layout/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed h-screen w-full bg-[#191B1F]\"\n            }, void 0, false, {\n                fileName: \"/Users/dragoonz/Documents/hackathons/DCAdd/frontend/components/layout/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 w-full \".concat(scrolled ? \"border-b border-gray-300 bg-white/0 backdrop-blur-xl\" : \"bg-white/0\", \" z-10 transition-all\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/\",\n                            className: \"relative flex items-center pl-2 font-display text-2xl\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"absolute left-0 top-1/2 -translate-y-1/2 text-white\",\n                                    children: \"Metr\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dragoonz/Documents/hackathons/DCAdd/frontend/components/layout/index.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                                    src: \"/metronome-logo.mp4\",\n                                    playsInline: true,\n                                    muted: true,\n                                    loop: true,\n                                    autoPlay: true,\n                                    className: \"mask h-8\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dragoonz/Documents/hackathons/DCAdd/frontend/components/layout/index.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(\"absolute -right-4 text-white transition-colors\"),\n                                    children: \"nome\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dragoonz/Documents/hackathons/DCAdd/frontend/components/layout/index.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dragoonz/Documents/hackathons/DCAdd/frontend/components/layout/index.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center space-x-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.AnimatePresence, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.a, {\n                                        href: \"https://flow.com/\",\n                                        target: \"_blank\",\n                                        rel: \"noreferrer\",\n                                        className: \"flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-[#00EF8B] border-opacity-80 px-7 py-2 text-[#00EF8B] transition-colors hover:bg-[#00EF8B] hover:bg-opacity-10\",\n                                        ..._lib_constants__WEBPACK_IMPORTED_MODULE_1__.FADE_IN_ANIMATION_SETTINGS,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                src: \"/flow-flow-logo.svg\",\n                                                alt: \"\",\n                                                className: \"h-5 w-5\",\n                                                width: 20,\n                                                height: 20\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dragoonz/Documents/hackathons/DCAdd/frontend/components/layout/index.tsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-sm font-semibold\",\n                                                children: \"#OnFlow\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dragoonz/Documents/hackathons/DCAdd/frontend/components/layout/index.tsx\",\n                                                lineNumber: 87,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/dragoonz/Documents/hackathons/DCAdd/frontend/components/layout/index.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/dragoonz/Documents/hackathons/DCAdd/frontend/components/layout/index.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.AnimatePresence, {\n                                    children: !user.loggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.button, {\n                                        className: \"rounded-full border border-black bg-white py-2 px-4 text-sm text-black transition-all hover:bg-white hover:text-black\",\n                                        onClick: ()=>setShowSignInModal(true),\n                                        ..._lib_constants__WEBPACK_IMPORTED_MODULE_1__.FADE_IN_ANIMATION_SETTINGS,\n                                        children: \"Connect wallet\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dragoonz/Documents/hackathons/DCAdd/frontend/components/layout/index.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 17\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_user_dropdown__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/dragoonz/Documents/hackathons/DCAdd/frontend/components/layout/index.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/dragoonz/Documents/hackathons/DCAdd/frontend/components/layout/index.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dragoonz/Documents/hackathons/DCAdd/frontend/components/layout/index.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dragoonz/Documents/hackathons/DCAdd/frontend/components/layout/index.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dragoonz/Documents/hackathons/DCAdd/frontend/components/layout/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center py-20\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/dragoonz/Documents/hackathons/DCAdd/frontend/components/layout/index.tsx\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Layout, \"CF6ePiXwrPUS7BRvRr1ZZ83XhIs=\", false, function() {\n    return [\n        _sign_in_modal__WEBPACK_IMPORTED_MODULE_6__.useSignInModal,\n        _lib_hooks_use_scroll__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        flow_hooks_useFlowLogin__WEBPACK_IMPORTED_MODULE_8__.useFlowLogin\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUd5QjtBQUMrQjtBQUN6QjtBQUNGO0FBRWtCO0FBQ3JCO0FBQ3VCO0FBQ047QUFFWTtBQUVuQjtBQUVyQixTQUFTVyxPQUFPLEtBVTlCLEVBQUU7UUFWNEIsRUFDN0JDLEtBQUksRUFDSkMsU0FBUSxFQVFULEdBVjhCOztJQVc3QixNQUFNLEVBQUVDLFlBQVcsRUFBRUMsbUJBQWtCLEVBQUUsR0FBR1IsOERBQWNBO0lBQzFELE1BQU1TLFdBQVdYLGlFQUFTQSxDQUFDO0lBRTNCLE1BQU0sRUFBRVksS0FBSSxFQUFFLEdBQUdSLHFFQUFZQTtJQUU3QixxQkFDRTs7MEJBQ0UsOERBQUNILDZDQUFJQTtnQkFBRSxHQUFHTSxJQUFJOzs7Ozs7MEJBQ2QsOERBQUNFOzs7OzswQkFDRCw4REFBQ0k7Z0JBQUlDLFdBQVU7Ozs7OzswQkFDZiw4REFBQ0Q7Z0JBQ0NDLFdBQVcsc0JBSVYsT0FIQ0gsV0FDSSx5REFDQSxZQUFZLEVBQ2pCOzBCQUVELDRFQUFDRTtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNmLGtEQUFJQTs0QkFDSGdCLE1BQUs7NEJBQ0xELFdBQVU7OzhDQUdWLDhEQUFDRTtvQ0FBRUYsV0FBVTs4Q0FBc0Q7Ozs7Ozs4Q0FHbkUsOERBQUNHO29DQUNDQyxLQUFJO29DQUNKQyxXQUFXO29DQUNYQyxLQUFLO29DQUNMQyxJQUFJO29DQUNKQyxRQUFRO29DQUNSUixXQUFVOzs7Ozs7OENBRVosOERBQUNFO29DQUNDRixXQUFXVCxpREFBVUEsQ0FDbkI7OENBRUg7Ozs7Ozs7Ozs7OztzQ0FJSCw4REFBQ1E7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDbEIsMkRBQWVBOzhDQUNkLDRFQUFDQyxvREFBUTt3Q0FDUGtCLE1BQUs7d0NBQ0xTLFFBQU87d0NBQ1BDLEtBQUk7d0NBQ0pYLFdBQVU7d0NBQ1QsR0FBR25CLHNFQUEwQjs7MERBRTlCLDhEQUFDRyxtREFBS0E7Z0RBQ0pvQixLQUFJO2dEQUNKUSxLQUFJO2dEQUNKWixXQUFVO2dEQUNWYSxPQUFPO2dEQUNQQyxRQUFROzs7Ozs7MERBRVYsOERBQUNaO2dEQUFFRixXQUFVOzBEQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBR3pDLDhEQUFDbEIsMkRBQWVBOzhDQUNiLENBQUNnQixLQUFLaUIsUUFBUSxpQkFDYiw4REFBQ2hDLHlEQUFhO3dDQUNaaUIsV0FBVTt3Q0FDVmlCLFNBQVMsSUFBTXJCLG1CQUFtQixJQUFJO3dDQUNyQyxHQUFHZixzRUFBMEI7a0RBQy9COzs7Ozs2REFJRCw4REFBQ1Esc0RBQVlBOzs7OzRDQUNkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLVCw4REFBQzZCO2dCQUFLbEIsV0FBVTswQkFDYk47Ozs7Ozs7O0FBSVQsQ0FBQztHQTdGdUJGOztRQVdzQkosMERBQWNBO1FBQ3pDRiw2REFBU0E7UUFFVEksaUVBQVlBOzs7S0FkUEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvaW5kZXgudHN4PzEzODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRkFERV9ET1dOX0FOSU1BVElPTl9WQVJJQU5UUyxcbiAgRkFERV9JTl9BTklNQVRJT05fU0VUVElOR1MsXG59IGZyb20gXCJAL2xpYi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlU2Nyb2xsIGZyb20gXCJAL2xpYi9ob29rcy91c2Utc2Nyb2xsXCI7XG5pbXBvcnQgTWV0YSBmcm9tIFwiLi9tZXRhXCI7XG5pbXBvcnQgeyB1c2VTaWduSW5Nb2RhbCB9IGZyb20gXCIuL3NpZ24taW4tbW9kYWxcIjtcbmltcG9ydCBVc2VyRHJvcGRvd24gZnJvbSBcIi4vdXNlci1kcm9wZG93blwiO1xuaW1wb3J0IHsgVHdpdHRlciB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IHVzZUZsb3dMb2dpbiB9IGZyb20gXCJmbG93L2hvb2tzL3VzZUZsb3dMb2dpblwiO1xuaW1wb3J0IEx1bWlMb2dvIGZyb20gXCIuLi9zaGFyZWQvbHVtaS1sb2dvXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoe1xuICBtZXRhLFxuICBjaGlsZHJlbixcbn06IHtcbiAgbWV0YT86IHtcbiAgICB0aXRsZT86IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICBpbWFnZT86IHN0cmluZztcbiAgfTtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn0pIHtcbiAgY29uc3QgeyBTaWduSW5Nb2RhbCwgc2V0U2hvd1NpZ25Jbk1vZGFsIH0gPSB1c2VTaWduSW5Nb2RhbCgpO1xuICBjb25zdCBzY3JvbGxlZCA9IHVzZVNjcm9sbCg1MCk7XG5cbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VGbG93TG9naW4oKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TWV0YSB7Li4ubWV0YX0gLz5cbiAgICAgIDxTaWduSW5Nb2RhbCAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBoLXNjcmVlbiB3LWZ1bGwgYmctWyMxOTFCMUZdXCIgLz5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgZml4ZWQgdG9wLTAgdy1mdWxsICR7XG4gICAgICAgICAgc2Nyb2xsZWRcbiAgICAgICAgICAgID8gXCJib3JkZXItYiBib3JkZXItZ3JheS0zMDAgYmctd2hpdGUvMCBiYWNrZHJvcC1ibHVyLXhsXCJcbiAgICAgICAgICAgIDogXCJiZy13aGl0ZS8wXCJcbiAgICAgICAgfSB6LTEwIHRyYW5zaXRpb24tYWxsYH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC01IGZsZXggaC0xNiBtYXgtdy1zY3JlZW4teGwgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB4bDpteC1hdXRvXCI+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9XCIvXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIHBsLTIgZm9udC1kaXNwbGF5IHRleHQtMnhsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7LyogPEx1bWlMb2dvIC8+ICovfVxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0wIHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgIE1ldHJcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDx2aWRlb1xuICAgICAgICAgICAgICBzcmM9XCIvbWV0cm9ub21lLWxvZ28ubXA0XCJcbiAgICAgICAgICAgICAgcGxheXNJbmxpbmVcbiAgICAgICAgICAgICAgbXV0ZWRcbiAgICAgICAgICAgICAgbG9vcFxuICAgICAgICAgICAgICBhdXRvUGxheVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXNrIGgtOFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgICAgIFwiYWJzb2x1dGUgLXJpZ2h0LTQgdGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9yc1wiLFxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBub21lXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XG4gICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgICA8bW90aW9uLmFcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mbG93LmNvbS9cIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBtYXgtdy1maXQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNwYWNlLXgtMiBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItWyMwMEVGOEJdIGJvcmRlci1vcGFjaXR5LTgwIHB4LTcgcHktMiB0ZXh0LVsjMDBFRjhCXSB0cmFuc2l0aW9uLWNvbG9ycyBob3ZlcjpiZy1bIzAwRUY4Ql0gaG92ZXI6Ymctb3BhY2l0eS0xMFwiXG4gICAgICAgICAgICAgICAgey4uLkZBREVfSU5fQU5JTUFUSU9OX1NFVFRJTkdTfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvZmxvdy1mbG93LWxvZ28uc3ZnXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTUgdy01XCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MjB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIj4jT25GbG93PC9wPlxuICAgICAgICAgICAgICA8L21vdGlvbi5hPlxuICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgICB7IXVzZXIubG9nZ2VkSW4gPyAoXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5idXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLWJsYWNrIGJnLXdoaXRlIHB5LTIgcHgtNCB0ZXh0LXNtIHRleHQtYmxhY2sgdHJhbnNpdGlvbi1hbGwgaG92ZXI6Ymctd2hpdGUgaG92ZXI6dGV4dC1ibGFja1wiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93U2lnbkluTW9kYWwodHJ1ZSl9XG4gICAgICAgICAgICAgICAgICB7Li4uRkFERV9JTl9BTklNQVRJT05fU0VUVElOR1N9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ29ubmVjdCB3YWxsZXRcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5idXR0b24+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPFVzZXJEcm9wZG93biAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJteC1hdXRvIGZsZXggdy1mdWxsIG1heC13LXNjcmVlbi14bCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktMjBcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkZBREVfSU5fQU5JTUFUSU9OX1NFVFRJTkdTIiwiQW5pbWF0ZVByZXNlbmNlIiwibW90aW9uIiwiSW1hZ2UiLCJMaW5rIiwidXNlU2Nyb2xsIiwiTWV0YSIsInVzZVNpZ25Jbk1vZGFsIiwiVXNlckRyb3Bkb3duIiwidXNlRmxvd0xvZ2luIiwiY2xhc3NOYW1lcyIsIkxheW91dCIsIm1ldGEiLCJjaGlsZHJlbiIsIlNpZ25Jbk1vZGFsIiwic2V0U2hvd1NpZ25Jbk1vZGFsIiwic2Nyb2xsZWQiLCJ1c2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsInAiLCJ2aWRlbyIsInNyYyIsInBsYXlzSW5saW5lIiwibXV0ZWQiLCJsb29wIiwiYXV0b1BsYXkiLCJhIiwidGFyZ2V0IiwicmVsIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJsb2dnZWRJbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/index.tsx\n"));

/***/ })

});