(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[185],{

/***/ 9554:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7676));


/***/ }),

/***/ 7676:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ PublicLayout; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/next/dist/api/image.js
var api_image = __webpack_require__(6648);
// EXTERNAL MODULE: ./src/app/banner.module.css
var banner_module = __webpack_require__(4630);
var banner_module_default = /*#__PURE__*/__webpack_require__.n(banner_module);
;// CONCATENATED MODULE: ./src/app/banner.tsx
// components/Banner.tsx




const Banner = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (banner_module_default()).banner,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                className: (banner_module_default()).bannerTitle,
                children: "Καλώς ήρθατε στο Εστιατόριό μας"
            }),
            " ",
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: (banner_module_default()).bannerSubtitle,
                children: "Ζήστε τη γεύση της κομψότητας"
            }),
            " ",
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (banner_module_default()).logoContainer,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                    src: "/images/CompanyLogo.webp",
                    alt: "Company Logo",
                    width: 100,
                    height: 100,
                    className: (banner_module_default()).logo
                })
            })
        ]
    });
};
/* harmony default export */ var banner = (Banner);

// EXTERNAL MODULE: ./src/app/footer.module.css
var footer_module = __webpack_require__(9571);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
;// CONCATENATED MODULE: ./src/app/footer.tsx
// components/Footer.tsx



const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("footer", {
        className: (footer_module_default()).footer,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container mx-auto ".concat((footer_module_default()).footerGrid),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                            className: (footer_module_default()).footerTitle,
                            children: "About Us"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: (footer_module_default()).footerText,
                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                            className: (footer_module_default()).footerTitle,
                            children: "Quick Links"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                            className: "mt-2 space-y-1",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                        href: "#",
                                        className: (footer_module_default()).footerLink,
                                        children: "Privacy Policy"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                        href: "#",
                                        className: (footer_module_default()).footerLink,
                                        children: "Terms of Service"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                        href: "#",
                                        className: (footer_module_default()).footerLink,
                                        children: "FAQ"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                            className: (footer_module_default()).footerTitle,
                            children: "Contact Us"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: (footer_module_default()).footerText,
                            children: "Email: contact@restaurant.com"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: (footer_module_default()).footerText,
                            children: "Phone: (123) 456-7890"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ var footer = (Footer);

// EXTERNAL MODULE: ./src/app/publicMenuLayout.module.css
var publicMenuLayout_module = __webpack_require__(2205);
var publicMenuLayout_module_default = /*#__PURE__*/__webpack_require__.n(publicMenuLayout_module);
;// CONCATENATED MODULE: ./src/app/layout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


 // Optional: Include styles specific to this layout
function PublicLayout(param) {
    let { children } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("body", {
            className: (publicMenuLayout_module_default()).publicMenuLayout,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("header", {
                    className: (publicMenuLayout_module_default()).header,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(banner, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
                    className: (publicMenuLayout_module_default()).mainContent,
                    children: children
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("footer", {
                    className: (publicMenuLayout_module_default()).footer,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(footer, {})
                })
            ]
        })
    });
}


/***/ }),

/***/ 4630:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"banner":"banner_banner__hfwdq","bannerTitle":"banner_bannerTitle__dMlsj","bannerSubtitle":"banner_bannerSubtitle__vq7_x","logoContainer":"banner_logoContainer__zwKFT","logo":"banner_logo__8W6sc"};

/***/ }),

/***/ 9571:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"footer":"footer_footer__KDdEv","footerGrid":"footer_footerGrid__FztxW","footerTitle":"footer_footerTitle__THxKg","footerText":"footer_footerText__hMIQC","footerLink":"footer_footerLink__ax0_1"};

/***/ }),

/***/ 2205:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"public-layout-body":"publicMenuLayout_public-layout-body__XBJmO","public-header":"publicMenuLayout_public-header__V0b0J","public-main":"publicMenuLayout_public-main__0NeRE","banner":"publicMenuLayout_banner__Wc40Q","banner-ad":"publicMenuLayout_banner-ad__TQDE_","public-footer":"publicMenuLayout_public-footer__ArMUu"};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [477,648,971,23,744], function() { return __webpack_exec__(9554); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);