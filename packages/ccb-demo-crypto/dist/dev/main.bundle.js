(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./TEA/index.js":
/*!**********************!*\
  !*** ./TEA/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */\n/* Block TEA (xxtea) Tiny Encryption Algorithm                        (c) Chris Veness 2002-2017  */\n/*                                                                                   MIT Licence  */\n/* www.movable-type.co.uk/scripts/tea-block.html                                                  */\n/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */\n\nvar _xxTEA = __webpack_require__(/*! ./xxTEA */ \"./TEA/xxTEA.js\");\n\nvar _util = __webpack_require__(/*! ./util */ \"./TEA/util/index.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * Tiny Encryption Algorithm. David Wheeler & Roger Needham, Cambridge University Computer Lab.\n *\n * www.movable-type.co.uk/scripts/tea.pdf   - TEA, a Tiny Encryption Algorithm (1994)\n * www.movable-type.co.uk/scripts/xtea.pdf  - Tea extensions (1997)\n * www.movable-type.co.uk/scripts/xxtea.pdf - Correction to xtea (1998)\n */\n\nvar Tea = function () {\n  function Tea() {\n    _classCallCheck(this, Tea);\n  }\n\n  _createClass(Tea, null, [{\n    key: 'encrypt',\n\n    /**\n     * Encrypts text using Corrected Block TEA (xxtea) algorithm.\n     *\n     * @param   {string} plaintext - String to be encrypted (multi-byte safe).\n     * @param   {string} password - Password to be used for encryption (1st 16 chars).\n     * @returns {string} Encrypted text (encoded as base64).\n     */\n    value: function encrypt(plaintext, password) {\n      var ptext = String(plaintext);\n      var pword = String(password);\n\n      if (ptext.length === 0) return ''; // nothing to encrypt\n\n      //  v is n-word data vector; converted to array of longs from UTF-8 string\n      var v = (0, _util.strToLongs)((0, _util.utf8Encode)(ptext));\n      //  k is 4-word key; simply convert first 16 chars of password as key\n      var k = (0, _util.strToLongs)((0, _util.utf8Encode)(pword).slice(0, 16));\n\n      var cipher = (0, _xxTEA.encode)(v, k);\n\n      // convert array of longs to string\n      var ciphertext = (0, _util.longsToStr)(cipher);\n\n      // convert binary string to base64 ascii for safe transport\n      return (0, _util.base64Encode)(ciphertext);\n    }\n\n    /**\n     * Decrypts text using Corrected Block TEA (xxtea) algorithm.\n     *\n     * @param   {string} ciphertext - String to be decrypted.\n     * @param   {string} password - Password to be used for decryption (1st 16 chars).\n     * @returns {string} Decrypted text.\n     * @throws  {Error}  Invalid ciphertext\n     */\n\n  }, {\n    key: 'decrypt',\n    value: function decrypt(ciphertext, password) {\n      var ctext = String(ciphertext);\n      var pword = String(password);\n\n      if (ctext.length === 0) return ''; // nothing to decrypt\n\n      //  v is n-word data vector; converted to array of longs from base64 string\n      var v = (0, _util.strToLongs)((0, _util.base64Decode)(ctext));\n      //  k is 4-word key; simply convert first 16 chars of password as key\n      var k = (0, _util.strToLongs)((0, _util.utf8Encode)(pword).slice(0, 16));\n\n      var plain = (0, _xxTEA.decode)(v, k);\n\n      var ptext = (0, _util.longsToStr)(plain);\n\n      // strip trailing null chars resulting from filling 4-char blocks:\n      return (0, _util.utf8Decode)(ptext.replace(/\\0+$/, ''));\n    }\n  }]);\n\n  return Tea;\n}();\n\nexports.default = Tea;\n\n//# sourceURL=webpack:///./TEA/index.js?");

/***/ }),

/***/ "./TEA/util/base64.js":
/*!****************************!*\
  !*** ./TEA/util/base64.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.base64Encode = base64Encode;\nexports.base64Decode = base64Decode;\n/* eslint-disable no-undef */\n/**\n * Encodes base64 -\n *      developer.mozilla.org/en-US/docs/Web/API/window.btoa,\n *      nodejs.org/api/buffer.html\n */\nfunction base64Encode(str) {\n  if (typeof btoa !== 'undefined') return btoa(str); // browser\n  if (typeof Buffer !== 'undefined') return Buffer.from(str, 'binary').toString('base64'); // Node.js\n  throw new Error('No Base64 Encode');\n}\n\n/**\n * Decodes base64\n */\nfunction base64Decode(b64Str) {\n  if (typeof atob === 'undefined' && typeof Buffer === 'undefined') throw new Error('No base64 decode');\n  try {\n    if (typeof atob !== 'undefined') return atob(b64Str); // browser\n    return Buffer.from(b64Str, 'base64').toString('binary'); // Node.js\n  } catch (e) {\n    throw new Error('Invalid ciphertext');\n  }\n}\n\n//# sourceURL=webpack:///./TEA/util/base64.js?");

/***/ }),

/***/ "./TEA/util/index.js":
/*!***************************!*\
  !*** ./TEA/util/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.base64Decode = exports.base64Encode = exports.utf8Decode = exports.utf8Encode = exports.longsToStr = exports.strToLongs = undefined;\n\nvar _str2l = __webpack_require__(/*! ./str2l */ \"./TEA/util/str2l.js\");\n\nvar _utf = __webpack_require__(/*! ./utf8 */ \"./TEA/util/utf8.js\");\n\nvar _base = __webpack_require__(/*! ./base64 */ \"./TEA/util/base64.js\");\n\nexports.strToLongs = _str2l.strToLongs;\nexports.longsToStr = _str2l.longsToStr;\nexports.utf8Encode = _utf.utf8Encode;\nexports.utf8Decode = _utf.utf8Decode;\nexports.base64Encode = _base.base64Encode;\nexports.base64Decode = _base.base64Decode;\n\n//# sourceURL=webpack:///./TEA/util/index.js?");

/***/ }),

/***/ "./TEA/util/str2l.js":
/*!***************************!*\
  !*** ./TEA/util/str2l.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.strToLongs = strToLongs;\nexports.longsToStr = longsToStr;\n/* eslint-disable no-mixed-operators, no-bitwise, no-plusplus */\n/**\n * Converts string to array of longs (each containing 4 chars).\n */\nfunction strToLongs(s) {\n  // note chars must be within ISO-8859-1 (Unicode code-point <= U+00FF) to fit 4/long\n  var l = new Array(Math.ceil(s.length / 4));\n  for (var i = 0; i < l.length; i++) {\n    // note little-endian encoding - endianness is irrelevant as long as it matches longsToStr()\n    l[i] = s.charCodeAt(i * 4) + (s.charCodeAt(i * 4 + 1) << 8) + (s.charCodeAt(i * 4 + 2) << 16) + (s.charCodeAt(i * 4 + 3) << 24);\n  }\n  // note running off the end of the string generates nulls; bitwise operators treat NaN as 0\n  return l;\n}\n\n/**\n * Converts array of longs to string.\n */\nfunction longsToStr(l) {\n  var str = '';\n  for (var i = 0; i < l.length; i++) {\n    str += String.fromCharCode(l[i] & 0xff, l[i] >>> 8 & 0xff, l[i] >>> 16 & 0xff, l[i] >>> 24 & 0xff);\n  }\n  return str;\n}\n\n//# sourceURL=webpack:///./TEA/util/str2l.js?");

/***/ }),

/***/ "./TEA/util/utf8.js":
/*!**************************!*\
  !*** ./TEA/util/utf8.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.utf8Encode = utf8Encode;\nexports.utf8Decode = utf8Decode;\n/**\n * Encodes multi-byte string to utf8 - monsur.hossa.in/2012/07/20/utf-8-in-javascript.html\n */\nfunction utf8Encode(str) {\n  return unescape(encodeURIComponent(str));\n}\n\n/**\n * Decodes utf8 string to multi-byte\n */\nfunction utf8Decode(utf8Str) {\n  try {\n    return decodeURIComponent(escape(utf8Str));\n  } catch (e) {\n    return utf8Str; // invalid UTF-8? return as-is\n  }\n}\n\n//# sourceURL=webpack:///./TEA/util/utf8.js?");

/***/ }),

/***/ "./TEA/xxTEA.js":
/*!**********************!*\
  !*** ./TEA/xxTEA.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.encode = encode;\nexports.decode = decode;\n/* eslint-disable\n    no-mixed-operators,\n    no-param-reassign,\n    no-bitwise,\n    no-plusplus,\n    no-undef\n*/\n\n/**\n * XXTEA: encodes array of unsigned 32-bit integers using 128-bit key.\n *\n * @param   {number[]} v - Data vector.\n * @param   {number[]} k - Key.\n * @returns {number[]} Encoded vector.\n */\nfunction encode(v, k) {\n  if (v.length < 2) v[1] = 0; // algorithm doesn't work for n<2 so fudge by adding a null\n  var n = v.length;\n  var delta = 0x9e3779b9;\n  var q = Math.floor(6 + 52 / n);\n\n  var z = v[n - 1];\n  var y = v[0];\n  var mx = 0;\n  var e = 0;\n  var sum = 0;\n\n  while (q-- > 0) {\n    // 6 + 52/n operations gives between 6 & 32 mixes on each word\n    sum += delta;\n    e = sum >>> 2 & 3;\n    for (var p = 0; p < n; p++) {\n      y = v[(p + 1) % n];\n      mx = (z >>> 5 ^ y << 2) + (y >>> 3 ^ z << 4) ^ (sum ^ y) + (k[p & 3 ^ e] ^ z);\n      v[p] += mx;\n      z = v[p];\n    }\n  }\n\n  return v;\n}\n\n/**\n * XXTEA: decodes array of unsigned 32-bit integers using 128-bit key.\n *\n * @param   {number[]} v - Data vector.\n * @param   {number[]} k - Key.\n * @returns {number[]} Decoded vector.\n */\nfunction decode(v, k) {\n  var n = v.length;\n  var delta = 0x9e3779b9;\n  var q = Math.floor(6 + 52 / n);\n\n  var z = v[n - 1];\n  var y = v[0];\n  var mx = q * delta;\n  var e = mx;\n  var sum = mx;\n\n  while (sum !== 0) {\n    e = sum >>> 2 & 3;\n    for (var p = n - 1; p >= 0; p--) {\n      z = v[p > 0 ? p - 1 : n - 1];\n      mx = (z >>> 5 ^ y << 2) + (y >>> 3 ^ z << 4) ^ (sum ^ y) + (k[p & 3 ^ e] ^ z);\n      v[p] -= mx;\n      y = v[p];\n    }\n    sum -= delta;\n  }\n\n  return v;\n}\n\n//# sourceURL=webpack:///./TEA/xxTEA.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Crypto = undefined;\n\nvar _TEA = __webpack_require__(/*! ./TEA */ \"./TEA/index.js\");\n\nvar _TEA2 = _interopRequireDefault(_TEA);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/* eslint-disable no-unused-vars, arrow-body-style, no-console, import/prefer-default-export */\n\nvar DEFAULT_PASSWORD = 'Using this should be a security error';\n\nvar Crypto = exports.Crypto = function Crypto() {\n  _classCallCheck(this, Crypto);\n\n  // These variables are hidden by the constructor closure\n  var secretPassword = DEFAULT_PASSWORD;\n  var on = true;\n\n  this.setCryptoOn = function () {\n    console.log('Setting Crytpo ON');\n    on = true;\n  };\n\n  this.setCryptoOff = function () {\n    console.log('Setting Crypto OFF');\n    on = false;\n  };\n\n  this.encrypt = function (plainText, options) {\n    return on ? _TEA2.default.encrypt(plainText, secretPassword) : plainText;\n  };\n\n  this.decrypt = function (cypherText, options) {\n    return on ? _TEA2.default.decrypt(cypherText, secretPassword) : cypherText;\n  };\n};\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ })));