/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script.js */ \"./src/script.js\");\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! exports provided: aa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"aa\", function() { return aa; });\nlet aa = $(function () {\r\n\r\n    //NAV FOR SHORT WIDTH\r\n    const shortWidth = function () {\r\n        if ($(window).width() < 864) {\r\n            $(\"header span\").hide();\r\n            $(\"nav ul li ul:eq(0) span\").html(\"<img src='img/billetGold.png'>\");\r\n            $(\"nav ul li ul:eq(1) span\").html(\"<img src='img/billetSilver.png'>\");\r\n            $(\"nav ul li ul:eq(2) span\").html(\"<img src='img/tips.png'>\");\r\n            $(\"nav ul li ul:eq(3) span\").html(\"<img src='img/Contact.png'>\");\r\n            $(\"nav ul li ul\").on(\"mouseover\", function () {\r\n                $(this).children(\"li\").css({\r\n                    'display': 'block',\r\n                    'width': '100vw',\r\n                    'backgroundColor': 'goldenrod'\r\n                }).offset({\r\n                    left: 0\r\n                });\r\n            });\r\n            $(\"nav ul li ul\").on(\"mouseout\", function () {\r\n                $(this).children(\"li\").css('display', 'none')\r\n            });\r\n        } else {\r\n            $(\"header span\").show();\r\n            $(\"nav ul li ul:eq(0) span\").html(\"Złoto\");\r\n            $(\"nav ul li ul:eq(1) span\").html(\"Srebro\");\r\n            $(\"nav ul li ul:eq(2) span\").html(\"Porady\");\r\n            $(\"nav ul li ul:eq(3) span\").html(\"Kontakt\");\r\n        }\r\n    }\r\n    $(window).on(\"resize\", shortWidth);\r\n    shortWidth();\r\n\r\n    //NAV LINKS\r\n    $(\"nav a\").on(\"click\", function (e) {\r\n        e.preventDefault();\r\n        const url = this.href;\r\n        $(\".content\").remove();\r\n        const ids = this.id;\r\n        if (ids) {\r\n            $(\".package\").load(url + \" .content #\" + ids).hide().fadeIn(1000);\r\n        } else {\r\n            $(\".package\").load(url + \" .content\").hide().fadeIn(1000);\r\n        }\r\n    });\r\n\r\n    //OTHER SUBPAGES\r\n    $(document).ajaxComplete(function () {\r\n\r\n        //TABLE GOLD-PRODUCTION RANKING\r\n        const $rows = $(\"tbody tr\");\r\n\r\n        //shows first 10 countries\r\n        let $tableContent = \"\";\r\n        for (let i = 1; i <= 10; i++) {\r\n            $tableContent = $rows[i];\r\n            $(\"tbody\").append($tableContent);\r\n        }\r\n        //shows the number of countries by select input\r\n        $(\"#countryNumber\").on(\"input\", function () {\r\n            let $howMany = $(\"select\").val();\r\n            if ($howMany == \"Wszystek\") $howMany = `${$rows.length}`;\r\n            const $howManyNumber = parseInt($howMany);\r\n            $(\"tbody\").empty();\r\n\r\n            for (let i = 0; i <= $howManyNumber - 1; i++) {\r\n                $tableContent = $rows[i];\r\n                $(\"tbody\").append($tableContent);\r\n            }\r\n        });\r\n\r\n        //MINES - silverWorld\r\n        $(\".mine\").on(\"mouseover\", function () {\r\n            const $number = this.id;\r\n\r\n            for (let i = 0; i < 10; i++) {\r\n                if ($number == i) {\r\n                    $(this).css({\r\n                        'backgroundImage': \"url(img/Silver/World/Mines/mine\" + [i] + \".png)\",\r\n                        'backgroundSize': \"cover\",\r\n                        'backgroundPosition': \"center\",\r\n                        'fontSize': '0'\r\n                    })\r\n                }\r\n            }\r\n            $(this).on(\"mouseout\", function () {\r\n                $(this).css({\r\n                    'backgroundColor': 'grey !important',\r\n                    'backgroundImage': 'linear-gradient(to bottom, #d7d9db, #b8bbbf)',\r\n                    'fontSize': '30px'\r\n                });\r\n            });\r\n        });\r\n\r\n\r\n    });\r\n\r\n    \r\n\r\n\r\n\r\n\r\n\r\n\r\n});\r\n\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ })

/******/ });