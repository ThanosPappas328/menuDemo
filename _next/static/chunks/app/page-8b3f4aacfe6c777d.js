(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[931],{

/***/ 8114:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7372));


/***/ }),

/***/ 7449:
/***/ (function(module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return NoopHead;
    }
}));
function NoopHead() {
    return null;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=noop-head.js.map


/***/ }),

/***/ 7372:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ App; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/next/dist/client/components/noop-head.js
var noop_head = __webpack_require__(7449);
var noop_head_default = /*#__PURE__*/__webpack_require__.n(noop_head);
// EXTERNAL MODULE: ./src/app/styles/headerWithInfo.module.css
var headerWithInfo_module = __webpack_require__(6596);
var headerWithInfo_module_default = /*#__PURE__*/__webpack_require__.n(headerWithInfo_module);
;// CONCATENATED MODULE: ./src/app/components/headerWithInfo.tsx



const HeaderWithInfo = ()=>{
    const [isModalOpen, setIsModalOpen] = (0,react.useState)(false);
    const companyName = "Codex Caffe"; // Hardcoded company name
    const companyInfo = "Here is some additional information about Codex Caffe. Customize this message as needed.";
    const handleOpenModal = ()=>{
        setIsModalOpen(true);
    };
    const handleCloseModal = ()=>{
        setIsModalOpen(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (headerWithInfo_module_default()).header,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                className: (headerWithInfo_module_default()).companyName,
                children: companyName
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                onClick: handleOpenModal,
                className: (headerWithInfo_module_default()).infoButton,
                children: "Info"
            }),
            isModalOpen && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (headerWithInfo_module_default()).modalOverlay,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (headerWithInfo_module_default()).modalContent,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                            className: (headerWithInfo_module_default()).modalTitle,
                            children: "Company Information"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            children: companyInfo
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            onClick: handleCloseModal,
                            className: (headerWithInfo_module_default()).closeButton,
                            children: "Close"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ var headerWithInfo = (HeaderWithInfo);

// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.mjs
var fa = __webpack_require__(1942);
// EXTERNAL MODULE: ./src/app/styles/menuRibbon.module.css
var menuRibbon_module = __webpack_require__(864);
var menuRibbon_module_default = /*#__PURE__*/__webpack_require__.n(menuRibbon_module);
;// CONCATENATED MODULE: ./src/app/components/menuRibbon.tsx
// components/MenuRibbon.tsx


 // Use any refresh icon, here using Font Awesome

const MenuRibbon = (param)=>{
    let { categories, onSelectCategory, onResetCategories } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (menuRibbon_module_default()).menuRibbon,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                onClick: onResetCategories,
                className: (menuRibbon_module_default()).refreshButton,
                title: "Refresh",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(fa/* FaRedo */.WLu, {})
            }),
            categories.map((category)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    onClick: ()=>onSelectCategory(category.id),
                    className: (menuRibbon_module_default()).categoryButton,
                    children: category.title
                }, category.id))
        ]
    });
};
/* harmony default export */ var menuRibbon = (MenuRibbon);

// EXTERNAL MODULE: ./src/app/styles/categoryCard.module.css
var categoryCard_module = __webpack_require__(6623);
var categoryCard_module_default = /*#__PURE__*/__webpack_require__.n(categoryCard_module);
;// CONCATENATED MODULE: ./src/app/components/categoryCard.tsx
// components/pages/punlishedMenu/categoryCard.tsx



const CategoryCard = (param)=>{
    let { title, subtitle } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (categoryCard_module_default()).categoryCard,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                children: title
            }),
            subtitle && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                children: subtitle
            })
        ]
    });
};
/* harmony default export */ var categoryCard = (CategoryCard);

// EXTERNAL MODULE: ./node_modules/next/dist/api/image.js
var api_image = __webpack_require__(6648);
// EXTERNAL MODULE: ./src/app/styles/menuItemCard.module.css
var menuItemCard_module = __webpack_require__(4599);
var menuItemCard_module_default = /*#__PURE__*/__webpack_require__.n(menuItemCard_module);
;// CONCATENATED MODULE: ./src/app/components/menuItemCard.tsx





const MenuItemCard = (param)=>{
    let { imageSrc, title, description, allergies, price } = param;
    const [isExpanded, setIsExpanded] = (0,react.useState)(false);
    const [hasImageError, setHasImageError] = (0,react.useState)(false);
    const [isTooltipVisible, setIsTooltipVisible] = (0,react.useState)(false);
    const handleClick = ()=>{
        setIsExpanded(!isExpanded);
    };
    const handleMouseEnter = ()=>{
        setIsTooltipVisible(true);
    };
    const handleMouseLeave = ()=>{
        setIsTooltipVisible(false);
    };
    const formatImageUrl = (url)=>{
        const formattedUrl = url.startsWith("http") || url.startsWith("/") ? url : "/images/".concat(url);
        return formattedUrl;
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "".concat((menuItemCard_module_default()).card, " ").concat(isExpanded ? (menuItemCard_module_default()).cardExpanded : ""),
        onClick: handleClick,
        role: "button",
        "aria-expanded": isExpanded,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (menuItemCard_module_default()).content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (menuItemCard_module_default()).header,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                className: (menuItemCard_module_default()).title,
                                children: title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (menuItemCard_module_default()).icon,
                                onMouseEnter: handleMouseEnter,
                                onMouseLeave: handleMouseLeave,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(fa/* FaInfoCircle */.DAO, {
                                        className: "text-gray-500 hover:text-gray-800 cursor-pointer ml-2"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "".concat((menuItemCard_module_default()).tooltip, " ").concat(isTooltipVisible ? "" : (menuItemCard_module_default()).tooltipHidden),
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            children: allergies
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: (menuItemCard_module_default()).description,
                        children: description
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                        className: (menuItemCard_module_default()).price,
                        children: [
                            "$",
                            price.toFixed(2)
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (menuItemCard_module_default()).imageContainer,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                    src: hasImageError ? "/default-category-image.jpg" : formatImageUrl(imageSrc),
                    alt: title || "Menu item image",
                    width: 200,
                    height: 200,
                    className: (menuItemCard_module_default()).image,
                    onError: ()=>setHasImageError(true)
                })
            })
        ]
    });
};
/* harmony default export */ var menuItemCard = (MenuItemCard);

// EXTERNAL MODULE: ./src/app/styles/bannerAd.module.css
var bannerAd_module = __webpack_require__(5610);
var bannerAd_module_default = /*#__PURE__*/__webpack_require__.n(bannerAd_module);
;// CONCATENATED MODULE: ./src/app/components/bannerAd.tsx
// components/pages/punlishedMenu/bannerAd.tsx


 // Import Image from Next.js

const BannerAd = (param)=>{
    let { imageUrl, altText } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (bannerAd_module_default()).bannerad,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
            src: imageUrl,
            alt: altText,
            width: 728,
            height: 90
        })
    });
};
/* harmony default export */ var bannerAd = (BannerAd);

;// CONCATENATED MODULE: ./public/data/menuData.json
var menuData_namespaceObject = /*#__PURE__*/JSON.parse('{"categories":[{"id":"category1","title":"Ορεκτικά","menuItemKategoryTranslations":[{"languageCode":"gr","title":"Ορεκτικά","subtitle":"Ξεκινήστε το γεύμα σας με νόστιμα ορεκτικά."}],"menuItems":[{"id":"item1","image":"/images/bruschetta.jpg","menuItemTranslation":[{"languageCode":"gr","title":"Μπρουσκέτα","description":"Ψωμί με φρέσκια ντομάτα, βασιλικό και ελαιόλαδο.","allergies":"Περιέχει γλουτένη.","price":"4.50"}]},{"id":"item2","image":"/images/bruschetta.jpg","menuItemTranslation":[{"languageCode":"gr","title":"Σκορδόψωμο","description":"Κριτσανιστό ψωμί με σκόρδο και βούτυρο.","allergies":"Περιέχει γλουτένη και γαλακτοκομικά.","price":"3.50"}]},{"id":"item3","image":"/images/bruschetta.jpg","menuItemTranslation":[{"languageCode":"gr","title":"Γεμιστά Μανιτάρια","description":"Μανιτάρια γεμιστά με τυρί και μυρωδικά.","allergies":"Περιέχει γαλακτοκομικά.","price":"5.00"}]},{"id":"item4","image":"/images/bruschetta.jpg","menuItemTranslation":[{"languageCode":"gr","title":"Καλαμαράκια Τηγανιτά","description":"Φρέσκα τηγανητά καλαμαράκια με λεμόνι.","allergies":"Περιέχει θαλασσινά και γλουτένη.","price":"7.50"}]}]},{"id":"category2","title":"Κυρίως Πιάτα","menuItemKategoryTranslations":[{"languageCode":"gr","title":"Κυρίως Πιάτα","subtitle":"Απολαύστε μια ποικιλία από κυρίως πιάτα."}],"menuItems":[{"id":"item5","image":"/images/bruschetta.jpg","menuItemTranslation":[{"languageCode":"gr","title":"Μουσακάς","description":"Παραδοσιακός μουσακάς με μελιτζάνες, κιμά και μπεσαμέλ.","allergies":"Περιέχει γλουτένη και γαλακτοκομικά.","price":"9.00"}]},{"id":"item6","image":"/images/bruschetta.jpg","menuItemTranslation":[{"languageCode":"gr","title":"Σουβλάκι","description":"Χοιρινό σουβλάκι σερβιρισμένο με πίτα και τζατζίκι.","allergies":"Περιέχει γλουτένη.","price":"8.00"}]},{"id":"item7","image":"/images/bruschetta.jpg","menuItemTranslation":[{"languageCode":"gr","title":"Στιφάδο","description":"Μοσχαράκι μαγειρεμένο με κρεμμύδια και κόκκινο κρασί.","allergies":"Δεν περιέχει αλλεργιογόνα.","price":"10.50"}]},{"id":"item8","image":"/images/bruschetta.jpg","menuItemTranslation":[{"languageCode":"gr","title":"Παστίτσιο","description":"Ζυμαρικά με κιμά και κρέμα μπεσαμέλ.","allergies":"Περιέχει γλουτένη και γαλακτοκομικά.","price":"8.50"}]}]},{"id":"category3","title":"Σαλάτες","menuItemKategoryTranslations":[{"languageCode":"gr","title":"Σαλάτες","subtitle":"Φρέσκες σαλάτες για κάθε γεύση."}],"menuItems":[{"id":"item9","image":"/images/bruschetta.jpg","menuItemTranslation":[{"languageCode":"gr","title":"Χωριάτικη Σαλάτα","description":"Ντομάτα, αγγούρι, πιπεριά, φέτα και ελιές.","allergies":"Περιέχει γαλακτοκομικά.","price":"6.00"}]},{"id":"item10","image":"/images/bruschetta.jpg","menuItemTranslation":[{"languageCode":"gr","title":"Σαλάτα Καίσαρα","description":"Σαλάτα με κοτόπουλο, κρουτόν και παρμεζάνα.","allergies":"Περιέχει γλουτένη και γαλακτοκομικά.","price":"7.50"}]},{"id":"item11","image":"/images/bruschetta.jpg","menuItemTranslation":[{"languageCode":"gr","title":"Σαλάτα Ρόκα","description":"Ρόκα με παρμεζάνα και μπαλσάμικο.","allergies":"Περιέχει γαλακτοκομικά.","price":"5.50"}]},{"id":"item12","image":"/images/bruschetta.jpg","menuItemTranslation":[{"languageCode":"gr","title":"Σαλάτα Τόνου","description":"Σαλάτα με τόνο, αυγό και καλαμπόκι.","allergies":"Περιέχει ψάρι και αυγό.","price":"7.00"}]}]},{"id":"category4","title":"Επιδόρπια","menuItemKategoryTranslations":[{"languageCode":"gr","title":"Επιδόρπια","subtitle":"Γλυκές επιλογές για το τέλος."}],"menuItems":[{"id":"item13","image":"/images/bruschetta.jpg","menuItemTranslation":[{"languageCode":"gr","title":"Μπακλαβάς","description":"Παραδοσιακό γλυκό με φύλλο και καρύδια.","allergies":"Περιέχει γλουτένη και ξηρούς καρπούς.","price":"4.00"}]},{"id":"item14","image":"/images/bruschetta.jpg","menuItemTranslation":[{"languageCode":"gr","title":"Γαλακτομπούρεκο","description":"Γλυκό με κρέμα και φύλλο σιροπιαστό.","allergies":"Περιέχει γλουτένη και γαλακτοκομικά.","price":"4.50"}]},{"id":"item15","image":"/images/bruschetta.jpg","menuItemTranslation":[{"languageCode":"gr","title":"Καταΐφι","description":"Γλυκό με φύλλο και καρύδια, σιροπιαστό.","allergies":"Περιέχει γλουτένη και ξηρούς καρπούς.","price":"4.50"}]},{"id":"item16","image":"/images/bruschetta.jpg","menuItemTranslation":[{"languageCode":"gr","title":"Γιαούρτι με Μέλι","description":"Παραδοσιακό γιαούρτι με ελληνικό μέλι.","allergies":"Περιέχει γαλακτοκομικά.","price":"3.50"}]}]},{"id":"category5","title":"Ροφήματα","menuItemKategoryTranslations":[{"languageCode":"gr","title":"Ροφήματα","subtitle":"Ζεστά και κρύα ροφήματα για κάθε γούστο."}],"menuItems":[{"id":"item17","image":"/images/bruschetta.jpg","menuItemTranslation":[{"languageCode":"gr","title":"Καφές","description":"Ελληνικός, espresso ή καπουτσίνο.","allergies":"Δεν περιέχει αλλεργιογόνα.","price":"2.50"}]},{"id":"item18","image":"/images/bruschetta.jpg","menuItemTranslation":[{"languageCode":"gr","title":"Τσάι","description":"Επιλογή από πράσινο, μαύρο ή τσάι βοτάνων.","allergies":"Δεν περιέχει αλλεργιογόνα.","price":"2.00"}]},{"id":"item19","image":"/images/bruschetta.jpg","menuItemTranslation":[{"languageCode":"gr","title":"Φρέσκος Χυμός Πορτοκάλι","description":"Χυμός από φρέσκα πορτοκάλια.","allergies":"Δεν περιέχει αλλεργιογόνα.","price":"3.00"}]},{"id":"item20","image":"/images/bruschetta.jpg","menuItemTranslation":[{"languageCode":"gr","title":"Smoothie","description":"Σμούθι με φρούτα εποχής.","allergies":"Δεν περιέχει αλλεργιογόνα.","price":"4.00"}]}]}]}');
;// CONCATENATED MODULE: ./src/app/page.tsx
// components/Home.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 








const Home = ()=>{
    const [selectedCategory, setSelectedCategory] = (0,react.useState)(null);
    const [menuData] = (0,react.useState)(menuData_namespaceObject);
    const contentRef = (0,react.useRef)(null);
    const handleSelectCategory = (categoryId)=>{
        setSelectedCategory(categoryId);
        if (contentRef.current) {
            contentRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };
    const handleResetCategories = ()=>{
        setSelectedCategory(null);
        if (contentRef.current) {
            contentRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };
    if (!menuData) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            children: "Loading..."
        });
    }
    const categories = menuData.categories || [];
    const itemsByCategory = categories.reduce((acc, category)=>{
        acc[category.id] = category.menuItems || [];
        return acc;
    }, {});
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((noop_head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("title", {
                        children: "Restaurant Menu"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "description",
                        content: "Welcome to our restaurant menu page."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(headerWithInfo, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(menuRibbon, {
                categories: categories.map((category)=>{
                    const translation = category.menuItemKategoryTranslations.find((t)=>t.languageCode === "gr" // Adjust the language code as needed
                    );
                    return {
                        id: category.id,
                        title: translation ? translation.title : category.title,
                        subtitle: translation ? translation.subtitle : category.title
                    };
                }),
                onSelectCategory: handleSelectCategory,
                onResetCategories: handleResetCategories
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                ref: contentRef,
                className: "container mx-auto px-4",
                children: categories.filter((category)=>selectedCategory === null || category.id === selectedCategory).map((category)=>{
                    var _itemsByCategory_category_id;
                    const translation = category.menuItemKategoryTranslations.find((t)=>t.languageCode === "gr" // Adjust the language code as needed
                    );
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(categoryCard, {
                                title: translation ? translation.title : category.title,
                                subtitle: translation ? translation.subtitle : category.title
                            }),
                            ((_itemsByCategory_category_id = itemsByCategory[category.id]) === null || _itemsByCategory_category_id === void 0 ? void 0 : _itemsByCategory_category_id.length) > 0 ? itemsByCategory[category.id].map((item)=>{
                                const itemTranslation = item.menuItemTranslation.find((t)=>t.languageCode === "gr" // Adjust the language code as needed
                                );
                                return itemTranslation ? /*#__PURE__*/ (0,jsx_runtime.jsx)(menuItemCard, {
                                    imageSrc: "/menudemo/" + item.image,
                                    title: itemTranslation.title,
                                    description: itemTranslation.description,
                                    allergies: itemTranslation.allergies,
                                    price: parseFloat(itemTranslation.price) || 0
                                }, item.id) : null;
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                children: "No menu items available"
                            })
                        ]
                    }, category.id);
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(bannerAd, {
                imageUrl: "https://via.placeholder.com/728x90.png?text=Advertisement",
                altText: "Sample Advertisement"
            })
        ]
    });
};
function App() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Home, {});
}


/***/ }),

/***/ 5610:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"bannerad":"bannerAd_bannerad__vXP7J"};

/***/ }),

/***/ 6623:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"categoryCard":"categoryCard_categoryCard__sRePn","categoryImage":"categoryCard_categoryImage___iTXN","categoryContent":"categoryCard_categoryContent__rrUGr","icon":"categoryCard_icon__WN2z0","categoryTitle":"categoryCard_categoryTitle__PQTsK","categorySubtitle":"categoryCard_categorySubtitle__ioA4w"};

/***/ }),

/***/ 6596:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"header":"headerWithInfo_header__kX5c7","companyName":"headerWithInfo_companyName__YM9Ie","infoButton":"headerWithInfo_infoButton__XxOWI","modalOverlay":"headerWithInfo_modalOverlay__pO8E6","modalContent":"headerWithInfo_modalContent__SVkNA","modalTitle":"headerWithInfo_modalTitle__OhbBn","closeButton":"headerWithInfo_closeButton__nUm3S"};

/***/ }),

/***/ 4599:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"card":"menuItemCard_card__CikZh","cardExpanded":"menuItemCard_cardExpanded__KIASX","imageContainer":"menuItemCard_imageContainer__taW88","image":"menuItemCard_image__Ae4b8","content":"menuItemCard_content__IahqV","header":"menuItemCard_header__jhAog","title":"menuItemCard_title__rXz5o","titleLarge":"menuItemCard_titleLarge__BWDvP","titleBase":"menuItemCard_titleBase__J2eAj","icon":"menuItemCard_icon__0QEz1","description":"menuItemCard_description__jyfmx","descriptionLarge":"menuItemCard_descriptionLarge__z3642","descriptionBase":"menuItemCard_descriptionBase__aWprP","price":"menuItemCard_price__ieKYF","priceLarge":"menuItemCard_priceLarge__SebSU","priceBase":"menuItemCard_priceBase__U_7v4","tooltip":"menuItemCard_tooltip__9jblK","tooltipHidden":"menuItemCard_tooltipHidden__7OzNs"};

/***/ }),

/***/ 864:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"menuRibbon":"menuRibbon_menuRibbon__hG9wF","refreshButton":"menuRibbon_refreshButton__VpYro","categoryButton":"menuRibbon_categoryButton__4QPF2"};

/***/ }),

/***/ 1810:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  w_: function() { return /* reexport */ GenIcon; }
});

// UNUSED EXPORTS: DefaultContext, IconBase, IconContext, IconsManifest

;// CONCATENATED MODULE: ./node_modules/react-icons/lib/iconsManifest.mjs
var IconsManifest = [
    {
        "id": "ci",
        "name": "Circum Icons",
        "projectUrl": "https://circumicons.com/",
        "license": "MPL-2.0 license",
        "licenseUrl": "https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE"
    },
    {
        "id": "fa",
        "name": "Font Awesome 5",
        "projectUrl": "https://fontawesome.com/",
        "license": "CC BY 4.0 License",
        "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
    },
    {
        "id": "fa6",
        "name": "Font Awesome 6",
        "projectUrl": "https://fontawesome.com/",
        "license": "CC BY 4.0 License",
        "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
    },
    {
        "id": "io",
        "name": "Ionicons 4",
        "projectUrl": "https://ionicons.com/",
        "license": "MIT",
        "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
    },
    {
        "id": "io5",
        "name": "Ionicons 5",
        "projectUrl": "https://ionicons.com/",
        "license": "MIT",
        "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
    },
    {
        "id": "md",
        "name": "Material Design icons",
        "projectUrl": "http://google.github.io/material-design-icons/",
        "license": "Apache License Version 2.0",
        "licenseUrl": "https://github.com/google/material-design-icons/blob/master/LICENSE"
    },
    {
        "id": "ti",
        "name": "Typicons",
        "projectUrl": "http://s-ings.com/typicons/",
        "license": "CC BY-SA 3.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
    },
    {
        "id": "go",
        "name": "Github Octicons icons",
        "projectUrl": "https://octicons.github.com/",
        "license": "MIT",
        "licenseUrl": "https://github.com/primer/octicons/blob/master/LICENSE"
    },
    {
        "id": "fi",
        "name": "Feather",
        "projectUrl": "https://feathericons.com/",
        "license": "MIT",
        "licenseUrl": "https://github.com/feathericons/feather/blob/master/LICENSE"
    },
    {
        "id": "lu",
        "name": "Lucide",
        "projectUrl": "https://lucide.dev/",
        "license": "ISC",
        "licenseUrl": "https://github.com/lucide-icons/lucide/blob/main/LICENSE"
    },
    {
        "id": "gi",
        "name": "Game Icons",
        "projectUrl": "https://game-icons.net/",
        "license": "CC BY 3.0",
        "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
    },
    {
        "id": "wi",
        "name": "Weather Icons",
        "projectUrl": "https://erikflowers.github.io/weather-icons/",
        "license": "SIL OFL 1.1",
        "licenseUrl": "http://scripts.sil.org/OFL"
    },
    {
        "id": "di",
        "name": "Devicons",
        "projectUrl": "https://vorillaz.github.io/devicons/",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
    },
    {
        "id": "ai",
        "name": "Ant Design Icons",
        "projectUrl": "https://github.com/ant-design/ant-design-icons",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
    },
    {
        "id": "bs",
        "name": "Bootstrap Icons",
        "projectUrl": "https://github.com/twbs/icons",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
    },
    {
        "id": "ri",
        "name": "Remix Icon",
        "projectUrl": "https://github.com/Remix-Design/RemixIcon",
        "license": "Apache License Version 2.0",
        "licenseUrl": "http://www.apache.org/licenses/"
    },
    {
        "id": "fc",
        "name": "Flat Color Icons",
        "projectUrl": "https://github.com/icons8/flat-color-icons",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
    },
    {
        "id": "gr",
        "name": "Grommet-Icons",
        "projectUrl": "https://github.com/grommet/grommet-icons",
        "license": "Apache License Version 2.0",
        "licenseUrl": "http://www.apache.org/licenses/"
    },
    {
        "id": "hi",
        "name": "Heroicons",
        "projectUrl": "https://github.com/tailwindlabs/heroicons",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
    },
    {
        "id": "hi2",
        "name": "Heroicons 2",
        "projectUrl": "https://github.com/tailwindlabs/heroicons",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
    },
    {
        "id": "si",
        "name": "Simple Icons",
        "projectUrl": "https://simpleicons.org/",
        "license": "CC0 1.0 Universal",
        "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
    },
    {
        "id": "sl",
        "name": "Simple Line Icons",
        "projectUrl": "https://thesabbir.github.io/simple-line-icons/",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
    },
    {
        "id": "im",
        "name": "IcoMoon Free",
        "projectUrl": "https://github.com/Keyamoon/IcoMoon-Free",
        "license": "CC BY 4.0 License",
        "licenseUrl": "https://github.com/Keyamoon/IcoMoon-Free/blob/master/License.txt"
    },
    {
        "id": "bi",
        "name": "BoxIcons",
        "projectUrl": "https://github.com/atisawd/boxicons",
        "license": "MIT",
        "licenseUrl": "https://github.com/atisawd/boxicons/blob/master/LICENSE"
    },
    {
        "id": "cg",
        "name": "css.gg",
        "projectUrl": "https://github.com/astrit/css.gg",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
    },
    {
        "id": "vsc",
        "name": "VS Code Icons",
        "projectUrl": "https://github.com/microsoft/vscode-codicons",
        "license": "CC BY 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
    },
    {
        "id": "tb",
        "name": "Tabler Icons",
        "projectUrl": "https://github.com/tabler/tabler-icons",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
    },
    {
        "id": "tfi",
        "name": "Themify Icons",
        "projectUrl": "https://github.com/lykmapipo/themify-icons",
        "license": "MIT",
        "licenseUrl": "https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE"
    },
    {
        "id": "rx",
        "name": "Radix Icons",
        "projectUrl": "https://icons.radix-ui.com",
        "license": "MIT",
        "licenseUrl": "https://github.com/radix-ui/icons/blob/master/LICENSE"
    },
    {
        "id": "pi",
        "name": "Phosphor Icons",
        "projectUrl": "https://github.com/phosphor-icons/core",
        "license": "MIT",
        "licenseUrl": "https://github.com/phosphor-icons/core/blob/main/LICENSE"
    },
    {
        "id": "lia",
        "name": "Icons8 Line Awesome",
        "projectUrl": "https://icons8.com/line-awesome",
        "license": "MIT",
        "licenseUrl": "https://github.com/icons8/line-awesome/blob/master/LICENSE.md"
    }
];

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
;// CONCATENATED MODULE: ./node_modules/react-icons/lib/iconContext.mjs

var DefaultContext = {
    color: undefined,
    size: undefined,
    className: undefined,
    style: undefined,
    attr: undefined
};
var IconContext = react.createContext && /*#__PURE__*/ react.createContext(DefaultContext);

;// CONCATENATED MODULE: ./node_modules/react-icons/lib/iconBase.mjs
var _excluded = [
    "attr",
    "size",
    "title"
];
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    for(var key in source){
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}


function Tree2Element(tree) {
    return tree && tree.map((node, i)=>/*#__PURE__*/ react.createElement(node.tag, _objectSpread({
            key: i
        }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
    return (props)=>/*#__PURE__*/ react.createElement(IconBase, _extends({
            attr: _objectSpread({}, data.attr)
        }, props), Tree2Element(data.child));
}
function IconBase(props) {
    var elem = (conf)=>{
        var { attr, size, title } = props, svgProps = _objectWithoutProperties(props, _excluded);
        var computedSize = size || conf.size || "1em";
        var className;
        if (conf.className) className = conf.className;
        if (props.className) className = (className ? className + " " : "") + props.className;
        return /*#__PURE__*/ react.createElement("svg", _extends({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, conf.attr, attr, svgProps, {
            className: className,
            style: _objectSpread(_objectSpread({
                color: props.color || conf.color
            }, conf.style), props.style),
            height: computedSize,
            width: computedSize,
            xmlns: "http://www.w3.org/2000/svg"
        }), title && /*#__PURE__*/ react.createElement("title", null, title), props.children);
    };
    return IconContext !== undefined ? /*#__PURE__*/ react.createElement(IconContext.Consumer, null, (conf)=>elem(conf)) : elem(DefaultContext);
}

;// CONCATENATED MODULE: ./node_modules/react-icons/lib/index.mjs





/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [376,699,648,971,23,744], function() { return __webpack_exec__(8114); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);