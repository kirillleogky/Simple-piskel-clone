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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/screens/app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/screens/app/style.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/screens/app/style.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../../img/changeColor.svg */ \"./src/img/changeColor.svg\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../../img/changeColorPurple.svg */ \"./src/img/changeColorPurple.svg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\n// Module\nexports.push([module.i, \".header_block {\\n  display: flex;\\n  justify-content: space-between;\\n  background-color: #420e00;\\n  height: 48px;\\n  -webkit-box-shadow: 0px -15px 25px 10px #420e00;\\n  -moz-box-shadow: 0px -15px 25px 10px #420e00;\\n  box-shadow: 0px -15px 25px 10px #420e00; }\\n  .header_block-logo {\\n    display: flex;\\n    justify-content: flex-start;\\n    width: 245px;\\n    height: 100%;\\n    text-align: center;\\n    line-height: 125px; }\\n    .header_block-logo_text {\\n      font-size: 2em;\\n      line-height: 50px;\\n      margin: 0% 2% 0% 2%;\\n      color: #b4ffff; }\\n    .header_block-logo_icon {\\n      height: 60%;\\n      padding-top: 3%; }\\n\\n.head_nav_block {\\n  display: flex;\\n  width: 400px;\\n  justify-content: space-between;\\n  font-size: 1.5em; }\\n  .head_nav_block-list {\\n    display: flex;\\n    width: 100%;\\n    justify-content: space-evenly;\\n    line-height: 50px; }\\n\\n.head_nav_list-item {\\n  width: 50%; }\\n\\n.sign_in_btn {\\n  font-size: 1em;\\n  background-color: #420e00;\\n  border: none;\\n  background-color: transparent; }\\n\\n.canvas {\\n  background-color: #707070;\\n  -webkit-box-shadow: 0px 0px 35px -20px rgba(0, 0, 0, 0.75);\\n  -moz-box-shadow: 0px 0px 35px -20px rgba(0, 0, 0, 0.75);\\n  box-shadow: 0px 0px 35px -20px rgba(0, 0, 0, 0.75); }\\n\\n.main_block-navigation {\\n  width: 5%;\\n  height: 85%;\\n  display: flex;\\n  flex-direction: column;\\n  color: rgba(180, 255, 255, 0.8); }\\n\\n.main_block-nav_items {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-evenly;\\n  -webkit-box-shadow: 0px 8px 15px -8px rgba(0, 0, 0, 0.75);\\n  -moz-box-shadow: 0px 8px 15px -8px rgba(0, 0, 0, 0.75);\\n  box-shadow: 0px 8px 15px -8px rgba(0, 0, 0, 0.75); }\\n  .main_block-nav_items:hover {\\n    cursor: pointer; }\\n\\n.first_nav_block {\\n  height: 45%; }\\n\\n.second_nav_block {\\n  height: 20%;\\n  border-radius: 0px 0px 20px 0px;\\n  -moz-border-radius: 0px 0px 20px 0px;\\n  -webkit-border-radius: 0px 0px 20px 0px;\\n  border: 0px solid black;\\n  margin: 10% 0% 10% 0%; }\\n\\n.third_nav_block {\\n  height: 35%; }\\n\\n.icon-block,\\n.second_nav_block-item {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n  height: 100%;\\n  background-color: white;\\n  -webkit-box-shadow: none;\\n  -moz-box-shadow: none;\\n  transition: background-color .2s;\\n  background-color: #420e00; }\\n\\n.second_nav_block-icon {\\n  width: 25px;\\n  height: 25px;\\n  border-radius: 100%;\\n  border: 1.5px solid rgba(180, 255, 255, 0.8);\\n  background-color: #707070; }\\n\\n.pixel-icon {\\n  width: 24px; }\\n\\n#curr-icon-input,\\n#extra-icon-input {\\n  display: none; }\\n\\n#bucket,\\n#curr-color,\\n#one-pixel {\\n  border-radius: 0px 20px 0px 0px;\\n  -moz-border-radius: 0px 20px 0px 0px;\\n  -webkit-border-radius: 0px 20px 0px 0px;\\n  border: 0px solid black; }\\n\\n#extra-color,\\n#second-color,\\n#eraser,\\n#four-pixel,\\n.first_nav_block,\\n.main_block-navigation,\\n.third_nav_block {\\n  border-radius: 0px 0px 20px 0px;\\n  -moz-border-radius: 0px 0px 20px 0px;\\n  -webkit-border-radius: 0px 0px 20px 0px;\\n  border: 0px solid black; }\\n\\n.fillAll-icon {\\n  width: 22px; }\\n\\n.icon-block {\\n  position: relative;\\n  transition: background-color 0.5s linear;\\n  width: 100%; }\\n  .icon-block:hover::after {\\n    content: attr(data-title);\\n    position: absolute;\\n    left: 20%;\\n    top: 70%;\\n    background-color: #f1e2d5;\\n    padding: 5px 10px;\\n    height: 20%;\\n    color: #420e00;\\n    border-radius: 5px 5px 5px 5px;\\n    -moz-border-radius: 5px 5px 5px 5px;\\n    -webkit-border-radius: 5px 5px 5px 5px;\\n    border: 0px solid black;\\n    z-index: 1000; }\\n\\n.icon {\\n  width: 35%; }\\n\\n#curr-color:hover::after,\\n#extra-color:hover::after,\\n.first_nav_block-choose_color_item:hover::after,\\n.third_nav_block-one_item:hover::after {\\n  height: 30px; }\\n\\n.first_nav_block-fill_item:hover::after {\\n  width: 50px; }\\n\\n.third_nav_block-one_item:hover::after {\\n  width: 70px; }\\n\\n#four-pixel:hover::after {\\n  width: 85px; }\\n\\n.change_color {\\n  display: flex;\\n  justify-content: center;\\n  background-color: #420e00; }\\n  .change_color-icon {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    height: 35%;\\n    background-repeat: no-repeat;\\n    background-position: center;\\n    background-size: contain; }\\n  .change_color:active .change_color-icon {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \"); }\\n  .change_color:hover::after {\\n    height: 30px;\\n    width: 75px; }\\n\\n@media screen and (max-width: 1000px) {\\n  #canvas {\\n    width: 400px;\\n    height: 400px; } }\\n\\n.main_block-frames {\\n  width: 170px;\\n  height: 90%;\\n  border-radius: 20px 20px 19px 20px;\\n  -moz-border-radius: 20px 20px 19px 20px;\\n  -webkit-border-radius: 20px 20px 19px 20px;\\n  border: 0px solid black;\\n  background-color: #420e00;\\n  overflow-y: auto; }\\n\\n.frame {\\n  width: 90%;\\n  height: 153px;\\n  margin: 5%;\\n  position: relative; }\\n  .frame_add-btn {\\n    width: 100%;\\n    font-size: 1em;\\n    padding-top: 5%;\\n    background-color: #420e00;\\n    border: none; }\\n    .frame_add-btn:hover {\\n      color: #b4ffff; }\\n      .frame_add-btn:hover:active {\\n        color: rgba(75, 0, 171, 0.5); }\\n  .frame:hover .frame-btn {\\n    opacity: 1; }\\n  .frame-btn {\\n    position: absolute;\\n    z-index: 10;\\n    border: none;\\n    background-color: transparent;\\n    opacity: 0;\\n    transition: opacity 0.5s linear; }\\n    .frame-btn:active {\\n      color: rgba(75, 0, 171, 0.5) !important; }\\n\\n.copy-btn {\\n  top: 0;\\n  right: 0; }\\n\\n.del-btn {\\n  right: 0;\\n  bottom: 0; }\\n\\n.move-btn {\\n  bottom: 0;\\n  left: 0;\\n  cursor: move; }\\n\\n.frame-active {\\n  -webkit-box-shadow: 0px 0px 10px 1px #b4ffff;\\n  -moz-box-shadow: 0px 0px 10px 1px #b4ffff;\\n  box-shadow: 0px 0px 10px 1px #b4ffff; }\\n\\n.frame-canvas {\\n  width: 100%; }\\n\\n.main_block-output {\\n  width: 230px;\\n  height: 90%; }\\n\\n.output_block-animation {\\n  width: 90%;\\n  height: 30%;\\n  background-color: #8ba4a4;\\n  border-radius: 20px 20px 19px 20px;\\n  -moz-border-radius: 20px 20px 19px 20px;\\n  -webkit-border-radius: 20px 20px 19px 20px;\\n  border: 0px solid black;\\n  -webkit-box-shadow: 0px 0px 60px -30px rgba(0, 0, 0, 0.75);\\n  -moz-box-shadow: 0px 0px 60px -30px rgba(0, 0, 0, 0.75);\\n  box-shadow: 0px 0px 60px -30px rgba(0, 0, 0, 0.75); }\\n\\n.output_block-anim_nav {\\n  width: 90%;\\n  margin-top: 5%;\\n  height: 7%;\\n  background-color: #8ba4a4;\\n  border-radius: 10px 10px 9px 10px;\\n  -moz-border-radius: 10px 10px 9px 10px;\\n  -webkit-border-radius: 10px 10px 9px 10px;\\n  border: 0px solid black;\\n  -webkit-box-shadow: 0px 0px 60px -30px rgba(0, 0, 0, 0.75);\\n  -moz-box-shadow: 0px 0px 60px -30px rgba(0, 0, 0, 0.75);\\n  box-shadow: 0px 0px 60px -30px rgba(0, 0, 0, 0.75); }\\n\\n.animation_nav-full_screen {\\n  width: 25%;\\n  height: 100%;\\n  text-align: center; }\\n  .animation_nav-full_screen-icon {\\n    width: 60%;\\n    height: 90%;\\n    padding: 5%; }\\n\\n.icon-anim {\\n  position: relative; }\\n\\n.icon-anim:hover::after {\\n  content: attr(data-title);\\n  position: absolute;\\n  left: 10%;\\n  top: 90%;\\n  background-color: #f1e2d5;\\n  padding: 5px 10px;\\n  width: 175%;\\n  height: 25%;\\n  color: #420e00;\\n  border-radius: 5px 5px 5px 5px;\\n  -moz-border-radius: 5px 5px 5px 5px;\\n  -webkit-border-radius: 5px 5px 5px 5px;\\n  border: 0px solid black; }\\n\\n.canvas_size {\\n  width: 90%;\\n  height: 5%;\\n  margin-top: 5%;\\n  background-color: #8ba4a4;\\n  border-radius: 10px 10px 10px 10px;\\n  -moz-border-radius: 10px 10px 10px 10px;\\n  -webkit-border-radius: 10px 10px 10px 10px;\\n  border: 0px solid black; }\\n  .canvas_size-btn {\\n    width: 100%;\\n    height: 100%;\\n    font-size: 1em;\\n    font-weight: 600;\\n    border: none;\\n    background-color: transparent; }\\n\\n.main_block {\\n  width: 100%;\\n  height: 750px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  position: relative; }\\n  .main_block-modal_window {\\n    display: none;\\n    width: 100%;\\n    height: 742px;\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    background-color: #420e00;\\n    z-index: 100;\\n    margin-top: 1%;\\n    -webkit-box-shadow: 0px 0px 240px 0px #420e00;\\n    -moz-box-shadow: 0px 0px 240px 0px #420e00;\\n    box-shadow: 0px 0px 240px 0px #420e00; }\\n\\n.modal_window-key {\\n  width: 25%;\\n  margin: 0 auto;\\n  padding-bottom: 20px;\\n  display: flex;\\n  justify-content: space-between; }\\n  .modal_window-key_title {\\n    text-align: center; }\\n  .modal_window-key_input {\\n    width: 10%;\\n    text-align: center; }\\n\\n.modal_window-btn {\\n  width: 100%;\\n  font-size: 1.5em;\\n  background-color: #420e00;\\n  border: none; }\\n\\n.modal_window-supported_values {\\n  text-align: center;\\n  margin-top: 20px; }\\n\\n.active {\\n  background-color: rgba(75, 0, 171, 0.5); }\\n\\n.footer_block {\\n  text-align: center; }\\n  .footer_block-btn {\\n    background-color: #420e00;\\n    border: none; }\\n\\n.wrapper {\\n  max-width: 1440px;\\n  font-family: 'Comfortaa', cursive;\\n  font-style: normal;\\n  font-weight: 300;\\n  background-color: #404040; }\\n\\n.button {\\n  border: none; }\\n  .button:hover {\\n    cursor: pointer; }\\n\\na,\\nh1,\\nh2,\\nh3,\\n.btn {\\n  font-family: 'Comfortaa', cursive;\\n  text-decoration: none;\\n  outline: none;\\n  color: #b4ffff; }\\n  a:hover,\\n  h1:hover,\\n  h2:hover,\\n  h3:hover,\\n  .btn:hover {\\n    color: #0ccccc;\\n    cursor: pointer; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/screens/app/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    for (var i = 0; i < modules.length; i++) {\n      var item = [].concat(modules[i]);\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction addModulesToDom(id, list, options) {\n  id = options.base ? id + options.base : id;\n\n  if (!stylesInDom[id]) {\n    stylesInDom[id] = [];\n  }\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var part = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n    var styleInDomById = stylesInDom[id];\n\n    if (styleInDomById[i]) {\n      styleInDomById[i].updater(part);\n    } else {\n      styleInDomById.push({\n        updater: addStyle(part, options)\n      });\n    }\n  }\n\n  for (var j = list.length; j < stylesInDom[id].length; j++) {\n    stylesInDom[id][j].updater();\n  }\n\n  stylesInDom[id].length = list.length;\n\n  if (stylesInDom[id].length === 0) {\n    delete stylesInDom[id];\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (id, list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  addModulesToDom(id, list, options);\n  return function update(newList) {\n    addModulesToDom(id, newList || [], options);\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/components/activeButtons/activeBtnClick.js":
/*!********************************************************!*\
  !*** ./src/components/activeButtons/activeBtnClick.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function activeButtonClick(button, buttonClassName) {\n  if (button.classList.contains('active')) {\n    button.classList.remove('active');\n  } else {\n    const currButtons = document.querySelectorAll(`.${buttonClassName}`);\n    currButtons.forEach((item) => {\n      if (item.classList.contains('active')) {\n        item.classList.remove('active');\n      }\n    });\n    button.classList.add('active');\n  }\n}\n\nmodule.exports = activeButtonClick;\n\n\n//# sourceURL=webpack:///./src/components/activeButtons/activeBtnClick.js?");

/***/ }),

/***/ "./src/components/activeButtons/activeBtnTyping.js":
/*!*********************************************************!*\
  !*** ./src/components/activeButtons/activeBtnTyping.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const mainPage = document.querySelector('.head_nav_list-link');\n\nconst bucket = document.getElementById('bucket');\nconst chooseColor = document.getElementById('choose_color');\nconst pencil = document.getElementById('pencil');\nconst fillAll = document.getElementById('fill_all');\nconst stroke = document.getElementById('stroke');\nconst eraser = document.getElementById('eraser');\n\nconst currColor = document.querySelector('.curr-icon');\nconst extraColor = document.querySelector('.extra-icon');\nconst changeColor = document.querySelector('.change_color');\n\nconst onePixel = document.getElementById('one-pixel');\nconst twoPixel = document.getElementById('two-pixel');\nconst threePixel = document.getElementById('three-pixel');\nconst fourPixel = document.getElementById('four-pixel');\n\nconst canvas32x32 = document.getElementById('32x32');\nconst canvas64x64 = document.getElementById('64x64');\nconst canvas128x128 = document.getElementById('128x128');\n\n\nconst modalMainPage = document.getElementById('modal_window-main_page');\nconst modalBucket = document.getElementById('modal_window-bucket');\nconst modalChooseColor = document.getElementById('modal_window-choose_color');\nconst modalPencil = document.getElementById('modal_window-pencil');\nconst modalFillAll = document.getElementById('modal_window-fill_all');\nconst modalStroke = document.getElementById('modal_window-stroke');\nconst modalEraser = document.getElementById('modal_window-eraser');\nconst modalCurrColor = document.getElementById('modal_window-curr_color');\nconst modalExtraColor = document.getElementById('modal_window-extra_color');\nconst modalChangeColor = document.getElementById('modal_window-change_color');\nconst modalOnePixel = document.getElementById('modal_window-one_pixel');\nconst modalTwoPixel = document.getElementById('modal_window-two_pixel');\nconst modalThreePixel = document.getElementById('modal_window-three_pixel');\nconst modalFourPixel = document.getElementById('modal_window-four_pixel');\nconst modalCanvas32x32 = document.getElementById('modal_window-canvas32x32');\nconst modalCanvas64x64 = document.getElementById('modal_window-canvas64x64');\nconst modalCanvas128x128 = document.getElementById('modal_window-canvas128x128');\n\ndocument.addEventListener('keydown', (event) => {\n  const key = event.code;\n  if (key === `Key${modalMainPage.value.toUpperCase()}`) {\n    mainPage.click();\n    event.stopImmediatePropagation();\n  }\n  if (key === `Key${modalBucket.value.toUpperCase()}`) {\n    bucket.click();\n    event.stopImmediatePropagation();\n  }\n  if (key === `Key${modalChooseColor.value.toUpperCase()}`) {\n    chooseColor.click();\n    event.stopImmediatePropagation();\n  }\n  if (key === `Key${modalPencil.value.toUpperCase()}`) {\n    pencil.click();\n    event.stopImmediatePropagation();\n  }\n  if (key === `Key${modalFillAll.value.toUpperCase()}`) {\n    fillAll.click();\n    event.stopImmediatePropagation();\n  }\n  if (key === `Key${modalStroke.value.toUpperCase()}`) {\n    stroke.click();\n    event.stopImmediatePropagation();\n  }\n  if (key === `Key${modalEraser.value.toUpperCase()}`) {\n    eraser.click();\n    event.stopImmediatePropagation();\n  }\n  if (key === `Key${modalCurrColor.value.toUpperCase()}`) {\n    currColor.click();\n    event.stopImmediatePropagation();\n  }\n  if (key === `Key${modalExtraColor.value.toUpperCase()}`) {\n    extraColor.click();\n    event.stopImmediatePropagation();\n  }\n  if (key === `Key${modalChangeColor.value.toUpperCase()}`) {\n    changeColor.click();\n    event.stopImmediatePropagation();\n  }\n  if (key === `Key${modalOnePixel.value.toUpperCase()}`) {\n    onePixel.click();\n    event.stopImmediatePropagation();\n  }\n  if (key === `Key${modalTwoPixel.value.toUpperCase()}`) {\n    twoPixel.click();\n    event.stopImmediatePropagation();\n  }\n  if (key === `Key${modalThreePixel.value.toUpperCase()}`) {\n    threePixel.click();\n    event.stopImmediatePropagation();\n  }\n  if (key === `Key${modalFourPixel.value.toUpperCase()}`) {\n    fourPixel.click();\n    event.stopImmediatePropagation();\n  }\n  if (key === `Key${modalCanvas32x32.value.toUpperCase()}`) {\n    canvas32x32.click();\n    event.stopImmediatePropagation();\n  }\n  if (key === `Key${modalCanvas64x64.value.toUpperCase()}`) {\n    canvas64x64.click();\n    event.stopImmediatePropagation();\n  }\n  if (key === `Key${modalCanvas128x128.value.toUpperCase()}`) {\n    canvas128x128.click();\n    event.stopImmediatePropagation();\n  }\n});\n\n\n//# sourceURL=webpack:///./src/components/activeButtons/activeBtnTyping.js?");

/***/ }),

/***/ "./src/components/canvas/drawCanvas.js":
/*!*********************************************!*\
  !*** ./src/components/canvas/drawCanvas.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return drawCanvas; });\n/* harmony import */ var _tools_useTools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/useTools */ \"./src/components/tools/useTools.js\");\n\n\nconst canvas = document.getElementById('canvas');\nconst context = canvas.getContext('2d');\nconst canvasWidth = canvas.width;\nconst canvasHeight = canvas.height;\n\nlet cells = [];\n\nfunction drawCanvas(cellWidth, cellHeight, storageCanvas) {\n  cells = [];\n  for (let top = 0; top < canvasWidth; top += cellWidth) {\n    for (let left = 0; left < canvasHeight; left += cellHeight) {\n      const cell = {\n        top,\n        left,\n        curcolor: 'rgb(112, 112, 112)',\n        fill(color) {\n          context.fillStyle = color;\n          context.fillRect(this.top, this.left, cellWidth, cellHeight);\n        },\n        drawBorder(boderColor) {\n          context.beginPath();\n          context.strokeStyle = boderColor;\n\n          context.moveTo(this.top - 0.5, this.left - 0.5);\n          context.lineTo(this.top - 0.5, this.left + cellWidth - 0.5);\n          context.lineTo(this.top + cellHeight - 0.5, this.left + cellWidth - 0.5);\n          context.lineTo(this.top + cellHeight - 0.5, this.left - 0.5);\n          context.lineTo(this.top - 0.5, this.left - 0.5);\n          context.stroke();\n        },\n        getTop() {\n          return this.top;\n        },\n        getLeft() {\n          return this.left;\n        },\n      };\n      cells.push(cell);\n      cell.fill('rgb(112, 112, 112)');\n      cell.drawBorder('rgb(168, 168, 168)');\n      if (storageCanvas) {\n        if (storageCanvas[cells.length - 1].curcolor !== cell.curcolor) {\n          cell.fill(storageCanvas[cells.length - 1].curcolor);\n          cell.curcolor = storageCanvas[cells.length - 1].curcolor;\n          cell.drawBorder(storageCanvas[cells.length - 1].curcolor);\n        }\n      }\n    }\n  }\n  Object(_tools_useTools__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cellWidth, cellHeight, cells, storageCanvas);\n}\n\n\n//# sourceURL=webpack:///./src/components/canvas/drawCanvas.js?");

/***/ }),

/***/ "./src/components/frames/addFrame.js":
/*!*******************************************!*\
  !*** ./src/components/frames/addFrame.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addFrame; });\nfunction addFrame(cellWidth, cellHeight, storageFrame) {\n  const currFrame = document.querySelector('.frame-active');\n\n  const frame = document.getElementById(`frame_${currFrame.id}`);\n  const context = frame.getContext('2d');\n  const canvasWidth = frame.width;\n  const canvasHeight = frame.height;\n  const cells = [];\n  for (let top = 0; top < canvasWidth; top += cellWidth) {\n    for (let left = 0; left < canvasHeight; left += cellHeight) {\n      const cell = {\n        top,\n        left,\n        curcolor: 'rgb(112, 112, 112)',\n        fill(color) {\n          context.fillStyle = color;\n          context.fillRect(this.top, this.left, cellWidth, cellHeight);\n        },\n        drawBorder(boderColor) {\n          context.beginPath();\n          context.strokeStyle = boderColor;\n\n          context.moveTo(this.top - 0.5, this.left - 0.5);\n          context.lineTo(this.top - 0.5, this.left + cellWidth - 0.5);\n          context.lineTo(this.top + cellHeight - 0.5, this.left + cellWidth - 0.5);\n          context.lineTo(this.top + cellHeight - 0.5, this.left - 0.5);\n          context.lineTo(this.top - 0.5, this.left - 0.5);\n          context.stroke();\n        },\n        getTop() {\n          return this.top;\n        },\n        getLeft() {\n          return this.left;\n        },\n      };\n      cells.push(cell);\n      cell.fill('rgb(112, 112, 112)');\n      cell.drawBorder('rgb(168, 168, 168)');\n      if (storageFrame) {\n        if (storageFrame[cells.length - 1].curcolor !== cell.curcolor) {\n          cell.fill(storageFrame[cells.length - 1].curcolor);\n          cell.curcolor = storageFrame[cells.length - 1].curcolor;\n          cell.drawBorder(storageFrame[cells.length - 1].curcolor);\n        }\n      }\n    }\n  }\n  localStorage.removeItem(`frame_${currFrame.id}`);\n  localStorage.setItem(`frame_${currFrame.id}`, JSON.stringify(cells));\n  return cells;\n}\n\n\n//# sourceURL=webpack:///./src/components/frames/addFrame.js?");

/***/ }),

/***/ "./src/components/frames/addFrameDOM.js":
/*!**********************************************!*\
  !*** ./src/components/frames/addFrameDOM.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function addFrameDOM() {\n  const frames = document.querySelectorAll('.frame');\n  const lastFrame = frames[frames.length - 1];\n\n  for (let i = 0; i < frames.length; i += 1) {\n    frames[i].classList.remove('frame-active');\n  }\n  const htmlFrame = `\n  <div class=\"frame frame-active\" id=${+lastFrame.id + 1}>\n      <button type=\"button\" class=\"frame-btn copy-btn btn\">Copy</button>\n      <button type=\"button\" class=\"frame-btn del-btn btn\">Del</button>\n      <button type=\"button\" class=\"frame-btn move-btn btn\">Move</button>\n      <canvas class=\"frame-canvas\" width=\"512\" height=\"512\" id=frame_${+lastFrame.id + 1}></canvas>\n  </div>\n `;\n  lastFrame.insertAdjacentHTML('afterend', htmlFrame);\n}\n\nmodule.exports = addFrameDOM;\n\n\n//# sourceURL=webpack:///./src/components/frames/addFrameDOM.js?");

/***/ }),

/***/ "./src/components/frames/changeFrame.js":
/*!**********************************************!*\
  !*** ./src/components/frames/changeFrame.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return changeFrame; });\nfunction changeFrame(mainCells, frameCells) {\n  const currFrame = document.querySelector('.frame-active');\n\n  for (let i = 0; i < mainCells.length; i += 1) {\n    const mainCell = mainCells[i];\n    const frameCell = frameCells[i];\n    if (frameCell.curcolor !== mainCell.curcolor) {\n      frameCell.fill(`${mainCell.curcolor}`);\n      frameCell.curcolor = mainCell.curcolor;\n      frameCell.drawBorder(`${mainCell.curcolor}`);\n    }\n    if (mainCell.curcolor === 'rgb(112, 112, 112)') {\n      frameCell.drawBorder('rgb(168, 168, 168)');\n    }\n  }\n\n  localStorage.removeItem(`frame_${currFrame.id}`);\n  localStorage.setItem(`frame_${currFrame.id}`, JSON.stringify(frameCells));\n}\n\n\n//# sourceURL=webpack:///./src/components/frames/changeFrame.js?");

/***/ }),

/***/ "./src/components/frames/framesHandlers.js":
/*!*************************************************!*\
  !*** ./src/components/frames/framesHandlers.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_drawCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas/drawCanvas */ \"./src/components/canvas/drawCanvas.js\");\n\n\nconst addFrameDOM = __webpack_require__(/*! ./addFrameDOM */ \"./src/components/frames/addFrameDOM.js\");\n\ndocument.addEventListener('click', (event) => {\n  const frames = document.querySelectorAll('.frame');\n  if (event.target === document.querySelector('.frame_add-btn')) {\n    addFrameDOM();\n    event.stopImmediatePropagation();\n    Object(_canvas_drawCanvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(16, 16);\n  }\n  if (event.target.classList.contains('frame-canvas')) {\n    const storageFrame = JSON.parse(localStorage.getItem(`frame_${event.target.closest('.frame').id}`));\n    let currCanvasSize = 16;\n    if (storageFrame.length === 4096) {\n      currCanvasSize = 8;\n    }\n    if (storageFrame.length === 16384) {\n      currCanvasSize = 4;\n    }\n    for (let i = 0; i < frames.length; i += 1) {\n      frames[i].classList.remove('frame-active');\n    }\n    event.target.closest('.frame').classList.add('frame-active');\n    Object(_canvas_drawCanvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currCanvasSize, currCanvasSize, storageFrame);\n    event.stopImmediatePropagation();\n  }\n  if (event.target.classList.contains('del-btn')) {\n    let currFrame = event.target.closest('.frame');\n    let currCanvasSize = 16;\n    if (currFrame.classList.contains('frame-active') && frames.length > 1) {\n      currFrame.remove();\n      localStorage.removeItem(`frame_${currFrame.id}`);\n\n      const currFrames = document.querySelectorAll('.frame');\n      currFrame = currFrames[currFrames.length - 1];\n      currFrame.classList.add('frame-active');\n      const storageFrame = JSON.parse(localStorage.getItem(`frame_${currFrame.id}`));\n      if (storageFrame.length === 4096) {\n        currCanvasSize = 8;\n      }\n      if (storageFrame.length === 16384) {\n        currCanvasSize = 4;\n      }\n      Object(_canvas_drawCanvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currCanvasSize, currCanvasSize, storageFrame);\n    }\n  }\n  if (event.target.classList.contains('copy-btn')) {\n    const currFrame = event.target.closest('.frame');\n    let currCanvasSize = 16;\n    if (currFrame.classList.contains('frame-active')) {\n      const storageFrame = JSON.parse(localStorage.getItem(`frame_${currFrame.id}`));\n      if (storageFrame.length === 4096) {\n        currCanvasSize = 8;\n      }\n      if (storageFrame.length === 16384) {\n        currCanvasSize = 4;\n      }\n      for (let i = 0; i < frames.length; i += 1) {\n        frames[i].classList.remove('frame-active');\n      }\n      currFrame.classList.add('frame-active');\n      addFrameDOM();\n      event.stopImmediatePropagation();\n      Object(_canvas_drawCanvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currCanvasSize, currCanvasSize, storageFrame);\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./src/components/frames/framesHandlers.js?");

/***/ }),

/***/ "./src/components/output/canvasSizeHandlers.js":
/*!*****************************************************!*\
  !*** ./src/components/output/canvasSizeHandlers.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_drawCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas/drawCanvas */ \"./src/components/canvas/drawCanvas.js\");\n\n\nconst btn32x32 = document.getElementById('32x32');\nconst btn64x64 = document.getElementById('64x64');\nconst btn128x128 = document.getElementById('128x128');\n\ndocument.addEventListener('click', (event) => {\n  switch (event.target) {\n    case btn32x32:\n      Object(_canvas_drawCanvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(16, 16);\n      break;\n    case btn64x64:\n      Object(_canvas_drawCanvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(8, 8);\n      break;\n    case btn128x128:\n      Object(_canvas_drawCanvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(4, 4);\n      break;\n    default:\n      break;\n  }\n});\n\n\n//# sourceURL=webpack:///./src/components/output/canvasSizeHandlers.js?");

/***/ }),

/***/ "./src/components/tools/bucket/fillTheArea.js":
/*!****************************************************!*\
  !*** ./src/components/tools/bucket/fillTheArea.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fillArea; });\nconst currColorWrapper = document.querySelector('.curr-icon');\n\nfunction fillArea(pointX, cellHeight, cellsInRow, pointY, cellWidth, cells) {\n  const top = Math.floor(pointX / cellHeight) * cellsInRow;\n  const left = Math.floor(pointY / cellWidth);\n\n  const cnvSize = cells.length;\n  const mainCellColor = cells[top + left].curcolor;\n\n  const stack = [[top, left]];\n  let pixel;\n  while (stack.length > 0) {\n    pixel = stack.pop();\n    const currPixel = cells[pixel[1] + pixel[0]];\n\n    if ((pixel[1] + pixel[0]) >= 0 && (pixel[1] + pixel[0]) <= cnvSize && currPixel !== undefined) {\n      const isCurrPixelColorWrong = currPixel.curcolor !== currColorWrapper.style.backgroundColor;\n      if (isCurrPixelColorWrong && currPixel.curcolor === mainCellColor) {\n        currPixel.curcolor = `${currColorWrapper.style.backgroundColor}`;\n        currPixel.fill(`${currColorWrapper.style.backgroundColor}`);\n        currPixel.drawBorder(`${currColorWrapper.style.backgroundColor}`);\n        stack.push([\n          pixel[0] - 1,\n          pixel[1],\n        ]);\n        stack.push([\n          pixel[0] + 1,\n          pixel[1],\n        ]);\n        stack.push([\n          pixel[0],\n          pixel[1] - cellsInRow,\n        ]);\n        stack.push([\n          pixel[0],\n          pixel[1] + cellsInRow,\n        ]);\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/tools/bucket/fillTheArea.js?");

/***/ }),

/***/ "./src/components/tools/colorSelect/changeCurrColorFromPixelColor.js":
/*!***************************************************************************!*\
  !*** ./src/components/tools/colorSelect/changeCurrColorFromPixelColor.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return changeCurrColor; });\nconst getCellByPos = __webpack_require__(/*! ../getCellByPosition */ \"./src/components/tools/getCellByPosition.js\");\n\nconst currColorWrapper = document.querySelector('.curr-icon');\n\nfunction changeCurrColor(x, y, cellHeight, cellsInRow, cellWidth, cells) {\n  const cellUnderCursor = getCellByPos(x, y, cellHeight, cellsInRow, cellWidth, cells);\n  currColorWrapper.style.backgroundColor = cellUnderCursor[0].curcolor;\n}\n\n\n//# sourceURL=webpack:///./src/components/tools/colorSelect/changeCurrColorFromPixelColor.js?");

/***/ }),

/***/ "./src/components/tools/currentAndExtraColor/currAndExtraColorHandlers.js":
/*!********************************************************************************!*\
  !*** ./src/components/tools/currentAndExtraColor/currAndExtraColorHandlers.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const currColorInput = document.getElementById('curr-icon-input');\nconst extraColorInput = document.getElementById('extra-icon-input');\nconst extraColorWrapper = document.querySelector('.extra-icon');\nconst currColorWrapper = document.querySelector('.curr-icon');\nconst changeColor = document.querySelector('.change_color');\n\ncurrColorInput.addEventListener('change', () => {\n  currColorWrapper.style.backgroundColor = `${currColorInput.value}`;\n});\nextraColorInput.addEventListener('change', () => {\n  extraColorWrapper.style.backgroundColor = `${extraColorInput.value}`;\n});\n\ndocument.addEventListener('click', (event) => {\n  if (event.target.closest('.curr-icon') === currColorWrapper) {\n    currColorInput.click();\n  }\n  if (event.target.closest('.extra-icon') === extraColorWrapper) {\n    extraColorInput.click();\n  }\n  if (event.target.closest('.change_color') === changeColor) {\n    currColorWrapper.style.backgroundColor = `${extraColorWrapper.style.backgroundColor}`;\n  }\n});\n\n\n//# sourceURL=webpack:///./src/components/tools/currentAndExtraColor/currAndExtraColorHandlers.js?");

/***/ }),

/***/ "./src/components/tools/eraser/erasePixels.js":
/*!****************************************************!*\
  !*** ./src/components/tools/eraser/erasePixels.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return erasePixel; });\nconst getCellByPos = __webpack_require__(/*! ../getCellByPosition */ \"./src/components/tools/getCellByPosition.js\");\n\nfunction erasePixel(x, y, cellHeight, cellsInRow, cellWidth, cells) {\n  const cellUnderCursor = getCellByPos(x, y, cellHeight, cellsInRow, cellWidth, cells);\n  for (let i = 0; i < cellUnderCursor.length; i += 1) {\n    if (cellUnderCursor[i]) {\n      cellUnderCursor[i].curcolor = 'rgb(112, 112, 112)';\n      cellUnderCursor[i].fill('rgb(112, 112, 112)');\n      cellUnderCursor[i].drawBorder('rgb(168, 168, 168)');\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/tools/eraser/erasePixels.js?");

/***/ }),

/***/ "./src/components/tools/fillAll/fillAllPixels.js":
/*!*******************************************************!*\
  !*** ./src/components/tools/fillAll/fillAllPixels.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fillAllPixels; });\nconst currColorWrapper = document.querySelector('.curr-icon');\n\nfunction fillAllPixels(cells) {\n  const currCells = cells;\n  for (let i = 0; i < cells.length; i += 1) {\n    currCells[i].curcolor = `${currColorWrapper.style.backgroundColor}`;\n    currCells[i].fill(`${currColorWrapper.style.backgroundColor}`);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/tools/fillAll/fillAllPixels.js?");

/***/ }),

/***/ "./src/components/tools/getCellByPosition.js":
/*!***************************************************!*\
  !*** ./src/components/tools/getCellByPosition.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const choosePixelsSize = __webpack_require__(/*! ./penSize/choosePenSize */ \"./src/components/tools/penSize/choosePenSize.js\");\n\nfunction getCellByPosition(top, left, cellHeight, cellsInRow, cellWidth, cells) {\n  const topIndex = Math.floor(top / cellHeight) * cellsInRow;\n  const leftIndex = Math.floor(left / cellWidth);\n  const currPixelIndex = topIndex + leftIndex;\n  return choosePixelsSize(cells, topIndex, leftIndex, currPixelIndex, cellsInRow);\n}\n\nmodule.exports = getCellByPosition;\n\n\n//# sourceURL=webpack:///./src/components/tools/getCellByPosition.js?");

/***/ }),

/***/ "./src/components/tools/penSize/choosePenSize.js":
/*!*******************************************************!*\
  !*** ./src/components/tools/penSize/choosePenSize.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const onePixel = document.getElementById('one-pixel');\nconst twoPixel = document.getElementById('two-pixel');\nconst threePixel = document.getElementById('three-pixel');\nconst fourPixel = document.getElementById('four-pixel');\n\n\nfunction choosePenSize(cells, topIndex, leftIndex, pixelIndex, cellsInRow) {\n  const arrCurr = [];\n  if (onePixel && twoPixel && threePixel && fourPixel) {\n    if (onePixel.classList.contains('active')) {\n      arrCurr.push(cells[topIndex + leftIndex]);\n      return arrCurr;\n    }\n\n    if (twoPixel.classList.contains('active')) {\n      arrCurr.push(cells[pixelIndex]);\n      arrCurr.push(cells[pixelIndex + cellsInRow]);\n      if (pixelIndex % cellsInRow !== cellsInRow - 1) {\n        arrCurr.push(cells[pixelIndex + 1]);\n        arrCurr.push(cells[pixelIndex + cellsInRow + 1]);\n      }\n      return arrCurr;\n    }\n\n    if (threePixel.classList.contains('active')) {\n      arrCurr.push(cells[pixelIndex]);\n      arrCurr.push(cells[pixelIndex + cellsInRow]);\n      arrCurr.push(cells[pixelIndex + (cellsInRow * 2)]);\n\n      if (pixelIndex % cellsInRow !== cellsInRow - 1) {\n        arrCurr.push(cells[pixelIndex + 1]);\n        arrCurr.push(cells[pixelIndex + cellsInRow + 1]);\n        arrCurr.push(cells[pixelIndex + (cellsInRow * 2) + 1]);\n        if ((pixelIndex + 1) % cellsInRow !== cellsInRow - 1) {\n          arrCurr.push(cells[pixelIndex + 2]);\n          arrCurr.push(cells[pixelIndex + cellsInRow + 2]);\n          arrCurr.push(cells[pixelIndex + (cellsInRow * 2) + 2]);\n        }\n      }\n      return arrCurr;\n    }\n\n    if (fourPixel.classList.contains('active')) {\n      arrCurr.push(cells[pixelIndex]);\n      arrCurr.push(cells[pixelIndex + cellsInRow]);\n      arrCurr.push(cells[pixelIndex + (cellsInRow * 2)]);\n      arrCurr.push(cells[pixelIndex + (cellsInRow * 3)]);\n\n      if (pixelIndex % cellsInRow !== cellsInRow - 1) {\n        arrCurr.push(cells[pixelIndex + 1]);\n        arrCurr.push(cells[pixelIndex + cellsInRow + 1]);\n        arrCurr.push(cells[pixelIndex + (cellsInRow * 2) + 1]);\n        arrCurr.push(cells[pixelIndex + (cellsInRow * 3) + 1]);\n        if ((pixelIndex + 1) % cellsInRow !== cellsInRow - 1) {\n          arrCurr.push(cells[pixelIndex + 2]);\n          arrCurr.push(cells[pixelIndex + cellsInRow + 2]);\n          arrCurr.push(cells[pixelIndex + (cellsInRow * 2) + 2]);\n          arrCurr.push(cells[pixelIndex + (cellsInRow * 3) + 2]);\n          if ((pixelIndex + 2) % cellsInRow !== cellsInRow - 1) {\n            arrCurr.push(cells[pixelIndex + 3]);\n            arrCurr.push(cells[pixelIndex + cellsInRow + 3]);\n            arrCurr.push(cells[pixelIndex + (cellsInRow * 2) + 3]);\n            arrCurr.push(cells[pixelIndex + (cellsInRow * 3) + 3]);\n          }\n        }\n      }\n      return arrCurr;\n    }\n  }\n  arrCurr.push(cells[topIndex + leftIndex]);\n  return arrCurr;\n}\n\nmodule.exports = choosePenSize;\n\n\n//# sourceURL=webpack:///./src/components/tools/penSize/choosePenSize.js?");

/***/ }),

/***/ "./src/components/tools/pencil/fillCellAtPosition.js":
/*!***********************************************************!*\
  !*** ./src/components/tools/pencil/fillCellAtPosition.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fillCellAtPosition; });\nconst getCellByPos = __webpack_require__(/*! ../getCellByPosition */ \"./src/components/tools/getCellByPosition.js\");\n\nconst currColorWrapper = document.querySelector('.curr-icon');\n\nfunction fillCellAtPosition(x, y, cellHeight, cellsInRow, cellWidth, cells) {\n  const cellUnderCursor = getCellByPos(x, y, cellHeight, cellsInRow, cellWidth, cells);\n  for (let i = 0; i < cellUnderCursor.length; i += 1) {\n    if (cellUnderCursor[i]) {\n      cellUnderCursor[i].curcolor = `${currColorWrapper.style.backgroundColor}`;\n      cellUnderCursor[i].fill(`${currColorWrapper.style.backgroundColor}`);\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/tools/pencil/fillCellAtPosition.js?");

/***/ }),

/***/ "./src/components/tools/stroke/drawStroke.js":
/*!***************************************************!*\
  !*** ./src/components/tools/stroke/drawStroke.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return drawStroke; });\nconst choosePixelsSize = __webpack_require__(/*! ../penSize/choosePenSize */ \"./src/components/tools/penSize/choosePenSize.js\");\n\nconst currColorWrapper = document.querySelector('.curr-icon');\n\nfunction fillArea(topIndex, leftIndex, cells, cellsInRow) {\n  const currPixelIndex = topIndex + leftIndex;\n  const currPixels = choosePixelsSize(cells, topIndex, leftIndex, currPixelIndex, cellsInRow);\n  for (let i = 0; i < currPixels.length; i += 1) {\n    if (currPixels[i]) {\n      currPixels[i].curcolor = `${currColorWrapper.style.backgroundColor}`;\n      currPixels[i].fill(`${currColorWrapper.style.backgroundColor}`);\n    }\n  }\n}\n\nfunction drawStroke(startX, startY, pX, pY, cellH, cellsInRow, cellW, cells) {\n  let startPointX = startX;\n  let startPointY = startY;\n\n  const currPointX = Math.floor(pX / cellH) * cellsInRow;\n  const currPointY = Math.floor(pY / cellW);\n\n\n  for (let i = 0; i < cells.length; i += 1) {\n    const cell = cells[i];\n    if (cell) {\n      cell.curcolor = 'rgb(112, 112, 112)';\n      cell.fill('rgb(112, 112, 112)');\n      cell.drawBorder('rgb(168, 168, 168)');\n    }\n  }\n  fillArea(startPointX, startPointY, cells, cellsInRow);\n  if (startPointX < currPointX && startPointY < currPointY) {\n    while (startPointX !== currPointX && startPointY !== currPointY) {\n      startPointX += cellsInRow;\n      startPointY += 1;\n      fillArea(startPointX, startPointY, cells, cellsInRow);\n    }\n  }\n  if (startPointX > currPointX && startPointY > currPointY) {\n    while (startPointX !== currPointX && startPointY !== currPointY) {\n      startPointX -= cellsInRow;\n      startPointY -= 1;\n      fillArea(startPointX, startPointY, cells, cellsInRow);\n    }\n  }\n  if (startPointX < currPointX && startPointY === currPointY) {\n    while (startPointX !== currPointX) {\n      startPointX += cellsInRow;\n      fillArea(startPointX, startPointY, cells, cellsInRow);\n    }\n  }\n  if (startPointX === currPointX && startPointY < currPointY) {\n    while (startPointY !== currPointY) {\n      startPointY += 1;\n      fillArea(startPointX, startPointY, cells, cellsInRow);\n    }\n  }\n  if (startPointX > currPointX && startPointY === currPointY) {\n    while (startPointX !== currPointX) {\n      startPointX -= cellsInRow;\n      fillArea(startPointX, startPointY, cells, cellsInRow);\n    }\n  }\n  if (startPointX === currPointX && startPointY > currPointY) {\n    while (startPointY !== currPointY) {\n      startPointY -= 1;\n      fillArea(startPointX, startPointY, cells, cellsInRow);\n    }\n  }\n  if (startPointX > currPointX && startPointY < currPointY) {\n    while (startPointX !== currPointX && startPointY !== currPointY) {\n      startPointX -= cellsInRow;\n      startPointY += 1;\n      fillArea(startPointX, startPointY, cells, cellsInRow);\n    }\n  }\n  if (startPointX < currPointX && startPointY > currPointY) {\n    while (startPointX !== currPointX && startPointY !== currPointY) {\n      startPointX += cellsInRow;\n      startPointY -= 1;\n      fillArea(startPointX, startPointY, cells, cellsInRow);\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/tools/stroke/drawStroke.js?");

/***/ }),

/***/ "./src/components/tools/useTools.js":
/*!******************************************!*\
  !*** ./src/components/tools/useTools.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return drawOnTheCanvas; });\n/* harmony import */ var _pencil_fillCellAtPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pencil/fillCellAtPosition */ \"./src/components/tools/pencil/fillCellAtPosition.js\");\n/* harmony import */ var _bucket_fillTheArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bucket/fillTheArea */ \"./src/components/tools/bucket/fillTheArea.js\");\n/* harmony import */ var _eraser_erasePixels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eraser/erasePixels */ \"./src/components/tools/eraser/erasePixels.js\");\n/* harmony import */ var _colorSelect_changeCurrColorFromPixelColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colorSelect/changeCurrColorFromPixelColor */ \"./src/components/tools/colorSelect/changeCurrColorFromPixelColor.js\");\n/* harmony import */ var _stroke_drawStroke__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stroke/drawStroke */ \"./src/components/tools/stroke/drawStroke.js\");\n/* harmony import */ var _fillAll_fillAllPixels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fillAll/fillAllPixels */ \"./src/components/tools/fillAll/fillAllPixels.js\");\n/* harmony import */ var _frames_addFrame__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../frames/addFrame */ \"./src/components/frames/addFrame.js\");\n/* harmony import */ var _frames_changeFrame__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../frames/changeFrame */ \"./src/components/frames/changeFrame.js\");\n\n\n\n\n\n\n\n\n\n__webpack_require__(/*! ./currentAndExtraColor/currAndExtraColorHandlers.js */ \"./src/components/tools/currentAndExtraColor/currAndExtraColorHandlers.js\");\n\n\nconst canvas = document.getElementById('canvas');\nconst canvasWidth = canvas.width;\nconst pencil = document.getElementById('pencil');\nconst bucket = document.getElementById('bucket');\nconst eraser = document.getElementById('eraser');\nconst colorSelect = document.getElementById('choose_color');\nconst stroke = document.getElementById('stroke');\nconst fillAll = document.getElementById('fill_all');\n\nlet startPointX;\nlet startPointY;\n\n\nfunction drawOnTheCanvas(cellWidth, cellHeight, cells, storageCells) {\n  const cellsInRow = Math.floor(canvasWidth / cellWidth);\n  const frameCell = Object(_frames_addFrame__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(cellWidth, cellHeight, storageCells);\n\n  function drawByHandleMouseMove(event) {\n    const pointX = event.layerX;\n    const pointY = event.layerY;\n    if (pencil.classList.contains('active')) {\n      Object(_pencil_fillCellAtPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pointX, pointY, cellHeight, cellsInRow, cellWidth, cells);\n      event.stopImmediatePropagation();\n    }\n    if (eraser.classList.contains('active')) {\n      Object(_eraser_erasePixels__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(pointX, pointY, cellHeight, cellsInRow, cellWidth, cells);\n      event.stopImmediatePropagation();\n    }\n    if (stroke.classList.contains('active')) {\n      Object(_stroke_drawStroke__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(startPointX, startPointY, pointX, pointY, cellHeight, cellsInRow, cellWidth, cells);\n    }\n  }\n\n  canvas.onmousedown = (event) => {\n    const pointX = event.layerX;\n    const pointY = event.layerY;\n    if (pencil.classList.contains('active')) {\n      Object(_pencil_fillCellAtPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pointX, pointY, cellHeight, cellsInRow, cellWidth, cells);\n      canvas.addEventListener('mousemove', drawByHandleMouseMove, false);\n    }\n    if (bucket.classList.contains('active')) {\n      Object(_bucket_fillTheArea__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(pointX, cellHeight, cellsInRow, pointY, cellWidth, cells);\n    }\n    if (eraser.classList.contains('active')) {\n      Object(_eraser_erasePixels__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(pointX, pointY, cellHeight, cellsInRow, cellWidth, cells);\n      canvas.addEventListener('mousemove', drawByHandleMouseMove, false);\n    }\n    if (colorSelect.classList.contains('active')) {\n      Object(_colorSelect_changeCurrColorFromPixelColor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(pointX, pointY, cellHeight, cellsInRow, cellWidth, cells);\n    }\n    if (stroke.classList.contains('active')) {\n      startPointX = Math.floor(pointX / cellHeight) * cellsInRow;\n      startPointY = Math.floor(pointY / cellWidth);\n      canvas.addEventListener('mousemove', drawByHandleMouseMove, false);\n    }\n    if (fillAll.classList.contains('active')) {\n      Object(_fillAll_fillAllPixels__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(cells);\n    }\n  };\n\n  canvas.onmouseup = () => {\n    canvas.removeEventListener('mousemove', drawByHandleMouseMove);\n    Object(_frames_changeFrame__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(cells, frameCell);\n  };\n}\n\n\n//# sourceURL=webpack:///./src/components/tools/useTools.js?");

/***/ }),

/***/ "./src/img/changeColor.svg":
/*!*********************************!*\
  !*** ./src/img/changeColor.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTRweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTQgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYwICg4ODEwMykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+ZG91YmxlX2Fycm93LTI0cHg8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iZG91YmxlX2Fycm93LTI0cHgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcuMDAwMDAwLCA4LjAwMDAwMCkgcm90YXRlKC05MC4wMDAwMDApIHRyYW5zbGF0ZSgtNy4wMDAwMDAsIC04LjAwMDAwMCkgdHJhbnNsYXRlKC01LjAwMDAwMCwgLTQuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJCb3VuZGluZ19Cb3giPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiPjwvcmVjdD4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8ZyBpZD0iTWFzdGVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjAwMDAwMCwgNS4wMDAwMDApIiBmaWxsPSIjQjRGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUuMDgsNi40MiBMMTEuMDQsMC43NyBDMTAuNywwLjI5IDEwLjE1LDAgOS41NiwwIEw5LjU2LDAgQzguMDcsMCA3LjIxLDEuNjggOC4wNywyLjg5IEwxMSw3IEw4LjA3LDExLjExIEM3LjIsMTIuMzIgOC4wNywxNCA5LjU2LDE0IEw5LjU2LDE0IEMxMC4xNSwxNCAxMC43MSwxMy43MSAxMS4wNSwxMy4yMyBMMTUuMDksNy41OCBDMTUuMzMsNy4yMyAxNS4zMyw2Ljc3IDE1LjA4LDYuNDIgWiIgaWQ9IlBhdGgiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOC4wOCw2LjQyIEw0LjA1LDAuNzcgQzMuNywwLjI5IDMuMTUsMCAyLjU2LDAgTDIuNTYsMCBDMS4wNywwIDAuMiwxLjY4IDEuMDcsMi44OSBMNCw3IEwxLjA3LDExLjExIEMwLjIsMTIuMzIgMS4wNywxNCAyLjU2LDE0IEwyLjU2LDE0IEMzLjE1LDE0IDMuNzEsMTMuNzEgNC4wNSwxMy4yMyBMOC4wOSw3LjU4IEM4LjMzLDcuMjMgOC4zMyw2Ljc3IDguMDgsNi40MiBaIiBpZD0iUGF0aCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=\");\n\n//# sourceURL=webpack:///./src/img/changeColor.svg?");

/***/ }),

/***/ "./src/img/changeColorPurple.svg":
/*!***************************************!*\
  !*** ./src/img/changeColorPurple.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMnB4IiB2aWV3Qm94PSIwIDAgMjIgMjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYwICg4ODEwMykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+Q29tYmluZWQgU2hhcGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNOS41Niw4Ljg4MTc4NDJlLTE2IEw5LjcxOTc4OTYzLDAuMDA3MTE0OTUxMTYgQzEwLjI0ODI2NDUsMC4wNTQyOTc1MjA3IDEwLjczMDkwOTEsMC4zMzM2MzYzNjQgMTEuMDQsMC43NyBMMTEuMDQsMC43NyBMMTUuMDgsNi40MiBDMTUuMzMsNi43NyAxNS4zMyw3LjIzIDE1LjA5LDcuNTggTDE1LjA5LDcuNTggTDExLjA1LDEzLjIzIEMxMC43MSwxMy43MSAxMC4xNSwxNCA5LjU2LDE0IEw5LjU2LDE0IEw5LjQxMzEwODE1LDEzLjk5NDQ3OTYgQzguMDEzOTMzMzMsMTMuODg4NTIyMiA3LjIyOSwxMi4yNzk2NjY3IDguMDcsMTEuMTEgTDguMDcsMTEuMTEgTDExLDcgTDguMDcsMi44OSBDNy4yMSwxLjY4IDguMDcsOC44ODE3ODQyZS0xNiA5LjU2LDguODgxNzg0MmUtMTYgTDkuNTYsOC44ODE3ODQyZS0xNiBaIE0yLjU2LDguODgxNzg0MmUtMTYgTDIuNzE5Nzk3MTUsMC4wMDcxMTQ5NTExNiBDMy4yNDgzNDcxMSwwLjA1NDI5NzUyMDcgMy43MzE4MTgxOCwwLjMzMzYzNjM2NCA0LjA1LDAuNzcgTDQuMDUsMC43NyBMOC4wOCw2LjQyIEM4LjMzLDYuNzcgOC4zMyw3LjIzIDguMDksNy41OCBMOC4wOSw3LjU4IEw0LjA1LDEzLjIzIEMzLjcxLDEzLjcxIDMuMTUsMTQgMi41NiwxNCBMMi41NiwxNCBMMi40MTMxMDgxNSwxMy45OTQ0Nzk2IEMxLjAxMzkzMzMzLDEzLjg4ODUyMjIgMC4yMjksMTIuMjc5NjY2NyAxLjA3LDExLjExIEwxLjA3LDExLjExIEw0LDcgTDEuMDcsMi44OSBDMC4yLDEuNjggMS4wNyw4Ljg4MTc4NDJlLTE2IDIuNTYsOC44ODE3ODQyZS0xNiBMMi41Niw4Ljg4MTc4NDJlLTE2IFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgICAgICA8ZmlsdGVyIHg9Ii00MS4zJSIgeT0iLTQyLjklIiB3aWR0aD0iMTgyLjUlIiBoZWlnaHQ9IjE4NS43JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iZmlsdGVyLTIiPgogICAgICAgICAgICA8ZmVPZmZzZXQgZHg9IjAiIGR5PSIwIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIj48L2ZlT2Zmc2V0PgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyIiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiPjwvZmVHYXVzc2lhbkJsdXI+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwLjI5NDExNzY0NyAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMC42NzA1ODgyMzUgIDAgMCAwIDEgMCIgdHlwZT0ibWF0cml4IiBpbj0ic2hhZG93Qmx1ck91dGVyMSI+PC9mZUNvbG9yTWF0cml4PgogICAgICAgIDwvZmlsdGVyPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImNoYW5nZUNvbG9yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS4wMDAwMDAsIC0xLjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJkb3VibGVfYXJyb3ctMjRweCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIuMDAwMDAwLCAxMi4wMDAwMDApIHJvdGF0ZSgtOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTEyLjAwMDAwMCwgLTEyLjAwMDAwMCkgIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJNYXN0ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuMDAwMDAwLCA1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJDb21iaW5lZC1TaGFwZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjEiIGZpbHRlcj0idXJsKCNmaWx0ZXItMikiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSIjNEIwMEFCIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+\");\n\n//# sourceURL=webpack:///./src/img/changeColorPurple.svg?");

/***/ }),

/***/ "./src/screens/app/footer/footerHandlers.js":
/*!**************************************************!*\
  !*** ./src/screens/app/footer/footerHandlers.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener('click', (event) => {\n  if (event.target === document.querySelector('.footer_block-btn')) {\n    document.querySelector('.main_block-modal_window').style.display = 'block';\n  }\n});\n\n\n//# sourceURL=webpack:///./src/screens/app/footer/footerHandlers.js?");

/***/ }),

/***/ "./src/screens/app/index.js":
/*!**********************************!*\
  !*** ./src/screens/app/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_canvas_drawCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/canvas/drawCanvas */ \"./src/components/canvas/drawCanvas.js\");\n\n\n__webpack_require__(/*! ./style.scss */ \"./src/screens/app/style.scss\");\n__webpack_require__(/*! ./main/main.js */ \"./src/screens/app/main/main.js\");\n__webpack_require__(/*! ../../components/activeButtons/activeBtnTyping.js */ \"./src/components/activeButtons/activeBtnTyping.js\");\n__webpack_require__(/*! ./footer/footerHandlers.js */ \"./src/screens/app/footer/footerHandlers.js\");\n\nconst activeButtonClick = __webpack_require__(/*! ../../components/activeButtons/activeBtnClick */ \"./src/components/activeButtons/activeBtnClick.js\");\n\nwindow.onload = () => {\n  if (localStorage.length) {\n    const lastFrame = JSON.parse(localStorage.getItem(localStorage.key(localStorage.length - 1)));\n    let currCanvasSize = 16;\n    if (lastFrame.length === 4096) {\n      currCanvasSize = 8;\n    }\n    if (lastFrame.length === 16384) {\n      currCanvasSize = 4;\n    }\n    localStorage.clear();\n    Object(_components_canvas_drawCanvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currCanvasSize, currCanvasSize, lastFrame);\n  } else {\n    Object(_components_canvas_drawCanvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(16, 16);\n  }\n};\n\ndocument.addEventListener('click', (event) => {\n  const btnElem = event.target.closest('.first_block-icon') || event.target.closest('.third_block-icon');\n  if (btnElem) {\n    if (btnElem.classList.contains('first_block-icon')) {\n      activeButtonClick(btnElem, 'first_block-icon');\n      event.stopImmediatePropagation();\n    }\n    if (btnElem.classList.contains('third_block-icon')) {\n      activeButtonClick(btnElem, 'third_block-icon');\n      event.stopImmediatePropagation();\n    }\n  }\n  if (event.target === document.querySelector('.modal_window-btn')) {\n    document.querySelector('.main_block-modal_window').style.display = 'none';\n  }\n});\n\n\n//# sourceURL=webpack:///./src/screens/app/index.js?");

/***/ }),

/***/ "./src/screens/app/main/main.js":
/*!**************************************!*\
  !*** ./src/screens/app/main/main.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../components/tools/useTools.js */ \"./src/components/tools/useTools.js\");\n__webpack_require__(/*! ../../../components/output/canvasSizeHandlers.js */ \"./src/components/output/canvasSizeHandlers.js\");\n__webpack_require__(/*! ../../../components/frames/framesHandlers.js */ \"./src/components/frames/framesHandlers.js\");\n\n\n//# sourceURL=webpack:///./src/screens/app/main/main.js?");

/***/ }),

/***/ "./src/screens/app/style.scss":
/*!************************************!*\
  !*** ./src/screens/app/style.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/screens/app/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar id = \"!!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss\";\nvar update = api(id, content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/screens/app/style.scss?");

/***/ })

/******/ });