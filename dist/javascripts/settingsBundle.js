!function e(t,n,o){function r(s,a){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+s+"'")}var l=n[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return r(n?n:e)},l,l.exports,e,t,n,o)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<o.length;s++)r(o[s]);return r}({1:[function(e,t,n){(function(t,o,r){function r(e,t,n){if(!(this instanceof r))return new r(e,t,n);var o=typeof e;if("base64"===t&&"string"===o)for(e=B(e);e.length%4!==0;)e+="=";var i;if("number"===o)i=F(e);else if("string"===o)i=r.byteLength(e,t);else{if("object"!==o)throw new Error("First argument needs to be a number, array or string.");i=F(e.length)}var s;r._useTypedArrays?s=r._augment(new Uint8Array(i)):(s=this,s.length=i,s._isBuffer=!0);var a;if(r._useTypedArrays&&"number"==typeof e.byteLength)s._set(e);else if(M(e))for(a=0;i>a;a++)s[a]=r.isBuffer(e)?e.readUInt8(a):e[a];else if("string"===o)s.write(e,0,t);else if("number"===o&&!r._useTypedArrays&&!n)for(a=0;i>a;a++)s[a]=0;return s}function i(e,t,n,o){n=Number(n)||0;var i=e.length-n;o?(o=Number(o),o>i&&(o=i)):o=i;var s=t.length;q(s%2===0,"Invalid hex string"),o>s/2&&(o=s/2);for(var a=0;o>a;a++){var u=parseInt(t.substr(2*a,2),16);q(!isNaN(u),"Invalid hex string"),e[n+a]=u}return r._charsWritten=2*a,a}function s(e,t,n,o){var i=r._charsWritten=D(N(t),e,n,o);return i}function a(e,t,n,o){var i=r._charsWritten=D(T(t),e,n,o);return i}function u(e,t,n,o){return a(e,t,n,o)}function l(e,t,n,o){var i=r._charsWritten=D($(t),e,n,o);return i}function f(e,t,n,o){var i=r._charsWritten=D(O(t),e,n,o);return i}function c(e,t,n){return R.fromByteArray(0===t&&n===e.length?e:e.slice(t,n))}function d(e,t,n){var o="",r="";n=Math.min(e.length,n);for(var i=t;n>i;i++)e[i]<=127?(o+=V(r)+String.fromCharCode(e[i]),r=""):r+="%"+e[i].toString(16);return o+V(r)}function g(e,t,n){var o="";n=Math.min(e.length,n);for(var r=t;n>r;r++)o+=String.fromCharCode(e[r]);return o}function h(e,t,n){return g(e,t,n)}function p(e,t,n){var o=e.length;(!t||0>t)&&(t=0),(!n||0>n||n>o)&&(n=o);for(var r="",i=t;n>i;i++)r+=S(e[i]);return r}function b(e,t,n){for(var o=e.slice(t,n),r="",i=0;i<o.length;i+=2)r+=String.fromCharCode(o[i]+256*o[i+1]);return r}function y(e,t,n,o){o||(q("boolean"==typeof n,"missing or invalid endian"),q(void 0!==t&&null!==t,"missing offset"),q(t+1<e.length,"Trying to read beyond buffer length"));var r=e.length;if(!(t>=r)){var i;return n?(i=e[t],r>t+1&&(i|=e[t+1]<<8)):(i=e[t]<<8,r>t+1&&(i|=e[t+1])),i}}function m(e,t,n,o){o||(q("boolean"==typeof n,"missing or invalid endian"),q(void 0!==t&&null!==t,"missing offset"),q(t+3<e.length,"Trying to read beyond buffer length"));var r=e.length;if(!(t>=r)){var i;return n?(r>t+2&&(i=e[t+2]<<16),r>t+1&&(i|=e[t+1]<<8),i|=e[t],r>t+3&&(i+=e[t+3]<<24>>>0)):(r>t+1&&(i=e[t+1]<<16),r>t+2&&(i|=e[t+2]<<8),r>t+3&&(i|=e[t+3]),i+=e[t]<<24>>>0),i}}function v(e,t,n,o){o||(q("boolean"==typeof n,"missing or invalid endian"),q(void 0!==t&&null!==t,"missing offset"),q(t+1<e.length,"Trying to read beyond buffer length"));var r=e.length;if(!(t>=r)){var i=y(e,t,n,!0),s=32768&i;return s?-1*(65535-i+1):i}}function w(e,t,n,o){o||(q("boolean"==typeof n,"missing or invalid endian"),q(void 0!==t&&null!==t,"missing offset"),q(t+3<e.length,"Trying to read beyond buffer length"));var r=e.length;if(!(t>=r)){var i=m(e,t,n,!0),s=2147483648&i;return s?-1*(4294967295-i+1):i}}function k(e,t,n,o){return o||(q("boolean"==typeof n,"missing or invalid endian"),q(t+3<e.length,"Trying to read beyond buffer length")),z.read(e,t,n,23,4)}function I(e,t,n,o){return o||(q("boolean"==typeof n,"missing or invalid endian"),q(t+7<e.length,"Trying to read beyond buffer length")),z.read(e,t,n,52,8)}function L(e,t,n,o,r){r||(q(void 0!==t&&null!==t,"missing value"),q("boolean"==typeof o,"missing or invalid endian"),q(void 0!==n&&null!==n,"missing offset"),q(n+1<e.length,"trying to write beyond buffer length"),j(t,65535));var i=e.length;if(!(n>=i))for(var s=0,a=Math.min(i-n,2);a>s;s++)e[n+s]=(t&255<<8*(o?s:1-s))>>>8*(o?s:1-s)}function E(e,t,n,o,r){r||(q(void 0!==t&&null!==t,"missing value"),q("boolean"==typeof o,"missing or invalid endian"),q(void 0!==n&&null!==n,"missing offset"),q(n+3<e.length,"trying to write beyond buffer length"),j(t,4294967295));var i=e.length;if(!(n>=i))for(var s=0,a=Math.min(i-n,4);a>s;s++)e[n+s]=t>>>8*(o?s:3-s)&255}function x(e,t,n,o,r){r||(q(void 0!==t&&null!==t,"missing value"),q("boolean"==typeof o,"missing or invalid endian"),q(void 0!==n&&null!==n,"missing offset"),q(n+1<e.length,"Trying to write beyond buffer length"),P(t,32767,-32768));var i=e.length;n>=i||(t>=0?L(e,t,n,o,r):L(e,65535+t+1,n,o,r))}function C(e,t,n,o,r){r||(q(void 0!==t&&null!==t,"missing value"),q("boolean"==typeof o,"missing or invalid endian"),q(void 0!==n&&null!==n,"missing offset"),q(n+3<e.length,"Trying to write beyond buffer length"),P(t,2147483647,-2147483648));var i=e.length;n>=i||(t>=0?E(e,t,n,o,r):E(e,4294967295+t+1,n,o,r))}function U(e,t,n,o,r){r||(q(void 0!==t&&null!==t,"missing value"),q("boolean"==typeof o,"missing or invalid endian"),q(void 0!==n&&null!==n,"missing offset"),q(n+3<e.length,"Trying to write beyond buffer length"),J(t,3.4028234663852886e38,-3.4028234663852886e38));var i=e.length;n>=i||z.write(e,t,n,o,23,4)}function A(e,t,n,o,r){r||(q(void 0!==t&&null!==t,"missing value"),q("boolean"==typeof o,"missing or invalid endian"),q(void 0!==n&&null!==n,"missing offset"),q(n+7<e.length,"Trying to write beyond buffer length"),J(t,1.7976931348623157e308,-1.7976931348623157e308));var i=e.length;n>=i||z.write(e,t,n,o,52,8)}function B(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function _(e,t,n){return"number"!=typeof e?n:(e=~~e,e>=t?t:e>=0?e:(e+=t,e>=0?e:0))}function F(e){return e=~~Math.ceil(+e),0>e?0:e}function W(e){return(Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)})(e)}function M(e){return W(e)||r.isBuffer(e)||e&&"object"==typeof e&&"number"==typeof e.length}function S(e){return 16>e?"0"+e.toString(16):e.toString(16)}function N(e){for(var t=[],n=0;n<e.length;n++){var o=e.charCodeAt(n);if(127>=o)t.push(e.charCodeAt(n));else{var r=n;o>=55296&&57343>=o&&n++;for(var i=encodeURIComponent(e.slice(r,n+1)).substr(1).split("%"),s=0;s<i.length;s++)t.push(parseInt(i[s],16))}}return t}function T(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t}function O(e){for(var t,n,o,r=[],i=0;i<e.length;i++)t=e.charCodeAt(i),n=t>>8,o=t%256,r.push(o),r.push(n);return r}function $(e){return R.toByteArray(e)}function D(e,t,n,o){for(var r=0;o>r&&!(r+n>=t.length||r>=e.length);r++)t[r+n]=e[r];return r}function V(e){try{return decodeURIComponent(e)}catch(t){return String.fromCharCode(65533)}}function j(e,t){q("number"==typeof e,"cannot write a non-number as a number"),q(e>=0,"specified a negative value for writing an unsigned value"),q(t>=e,"value is larger than maximum value for type"),q(Math.floor(e)===e,"value has a fractional component")}function P(e,t,n){q("number"==typeof e,"cannot write a non-number as a number"),q(t>=e,"value larger than maximum allowed value"),q(e>=n,"value smaller than minimum allowed value"),q(Math.floor(e)===e,"value has a fractional component")}function J(e,t,n){q("number"==typeof e,"cannot write a non-number as a number"),q(t>=e,"value larger than maximum allowed value"),q(e>=n,"value smaller than minimum allowed value")}function q(e,t){if(!e)throw new Error(t||"Failed assertion")}var R=e("base64-js"),z=e("ieee754");n.Buffer=r,n.SlowBuffer=r,n.INSPECT_MAX_BYTES=50,r.poolSize=8192,r._useTypedArrays=function(){try{var e=new ArrayBuffer(0),t=new Uint8Array(e);return t.foo=function(){return 42},42===t.foo()&&"function"==typeof t.subarray}catch(n){return!1}}(),r.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},r.isBuffer=function(e){return!(null===e||void 0===e||!e._isBuffer)},r.byteLength=function(e,t){var n;switch(e+="",t||"utf8"){case"hex":n=e.length/2;break;case"utf8":case"utf-8":n=N(e).length;break;case"ascii":case"binary":case"raw":n=e.length;break;case"base64":n=$(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":n=2*e.length;break;default:throw new Error("Unknown encoding")}return n},r.concat=function(e,t){if(q(W(e),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===e.length)return new r(0);if(1===e.length)return e[0];var n;if("number"!=typeof t)for(t=0,n=0;n<e.length;n++)t+=e[n].length;var o=new r(t),i=0;for(n=0;n<e.length;n++){var s=e[n];s.copy(o,i),i+=s.length}return o},r.prototype.write=function(e,t,n,o){if(isFinite(t))isFinite(n)||(o=n,n=void 0);else{var r=o;o=t,t=n,n=r}t=Number(t)||0;var c=this.length-t;n?(n=Number(n),n>c&&(n=c)):n=c,o=String(o||"utf8").toLowerCase();var d;switch(o){case"hex":d=i(this,e,t,n);break;case"utf8":case"utf-8":d=s(this,e,t,n);break;case"ascii":d=a(this,e,t,n);break;case"binary":d=u(this,e,t,n);break;case"base64":d=l(this,e,t,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":d=f(this,e,t,n);break;default:throw new Error("Unknown encoding")}return d},r.prototype.toString=function(e,t,n){var o=this;if(e=String(e||"utf8").toLowerCase(),t=Number(t)||0,n=void 0!==n?Number(n):n=o.length,n===t)return"";var r;switch(e){case"hex":r=p(o,t,n);break;case"utf8":case"utf-8":r=d(o,t,n);break;case"ascii":r=g(o,t,n);break;case"binary":r=h(o,t,n);break;case"base64":r=c(o,t,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":r=b(o,t,n);break;default:throw new Error("Unknown encoding")}return r},r.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},r.prototype.copy=function(e,t,n,o){var i=this;if(n||(n=0),o||0===o||(o=this.length),t||(t=0),o!==n&&0!==e.length&&0!==i.length){q(o>=n,"sourceEnd < sourceStart"),q(t>=0&&t<e.length,"targetStart out of bounds"),q(n>=0&&n<i.length,"sourceStart out of bounds"),q(o>=0&&o<=i.length,"sourceEnd out of bounds"),o>this.length&&(o=this.length),e.length-t<o-n&&(o=e.length-t+n);var s=o-n;if(100>s||!r._useTypedArrays)for(var a=0;s>a;a++)e[a+t]=this[a+n];else e._set(this.subarray(n,n+s),t)}},r.prototype.slice=function(e,t){var n=this.length;if(e=_(e,n,0),t=_(t,n,n),r._useTypedArrays)return r._augment(this.subarray(e,t));for(var o=t-e,i=new r(o,void 0,!0),s=0;o>s;s++)i[s]=this[s+e];return i},r.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},r.prototype.set=function(e,t){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,t)},r.prototype.readUInt8=function(e,t){return t||(q(void 0!==e&&null!==e,"missing offset"),q(e<this.length,"Trying to read beyond buffer length")),e>=this.length?void 0:this[e]},r.prototype.readUInt16LE=function(e,t){return y(this,e,!0,t)},r.prototype.readUInt16BE=function(e,t){return y(this,e,!1,t)},r.prototype.readUInt32LE=function(e,t){return m(this,e,!0,t)},r.prototype.readUInt32BE=function(e,t){return m(this,e,!1,t)},r.prototype.readInt8=function(e,t){if(t||(q(void 0!==e&&null!==e,"missing offset"),q(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length)){var n=128&this[e];return n?-1*(255-this[e]+1):this[e]}},r.prototype.readInt16LE=function(e,t){return v(this,e,!0,t)},r.prototype.readInt16BE=function(e,t){return v(this,e,!1,t)},r.prototype.readInt32LE=function(e,t){return w(this,e,!0,t)},r.prototype.readInt32BE=function(e,t){return w(this,e,!1,t)},r.prototype.readFloatLE=function(e,t){return k(this,e,!0,t)},r.prototype.readFloatBE=function(e,t){return k(this,e,!1,t)},r.prototype.readDoubleLE=function(e,t){return I(this,e,!0,t)},r.prototype.readDoubleBE=function(e,t){return I(this,e,!1,t)},r.prototype.writeUInt8=function(e,t,n){n||(q(void 0!==e&&null!==e,"missing value"),q(void 0!==t&&null!==t,"missing offset"),q(t<this.length,"trying to write beyond buffer length"),j(e,255)),t>=this.length||(this[t]=e)},r.prototype.writeUInt16LE=function(e,t,n){L(this,e,t,!0,n)},r.prototype.writeUInt16BE=function(e,t,n){L(this,e,t,!1,n)},r.prototype.writeUInt32LE=function(e,t,n){E(this,e,t,!0,n)},r.prototype.writeUInt32BE=function(e,t,n){E(this,e,t,!1,n)},r.prototype.writeInt8=function(e,t,n){n||(q(void 0!==e&&null!==e,"missing value"),q(void 0!==t&&null!==t,"missing offset"),q(t<this.length,"Trying to write beyond buffer length"),P(e,127,-128)),t>=this.length||(e>=0?this.writeUInt8(e,t,n):this.writeUInt8(255+e+1,t,n))},r.prototype.writeInt16LE=function(e,t,n){x(this,e,t,!0,n)},r.prototype.writeInt16BE=function(e,t,n){x(this,e,t,!1,n)},r.prototype.writeInt32LE=function(e,t,n){C(this,e,t,!0,n)},r.prototype.writeInt32BE=function(e,t,n){C(this,e,t,!1,n)},r.prototype.writeFloatLE=function(e,t,n){U(this,e,t,!0,n)},r.prototype.writeFloatBE=function(e,t,n){U(this,e,t,!1,n)},r.prototype.writeDoubleLE=function(e,t,n){A(this,e,t,!0,n)},r.prototype.writeDoubleBE=function(e,t,n){A(this,e,t,!1,n)},r.prototype.fill=function(e,t,n){if(e||(e=0),t||(t=0),n||(n=this.length),"string"==typeof e&&(e=e.charCodeAt(0)),q("number"==typeof e&&!isNaN(e),"value is not a number"),q(n>=t,"end < start"),n!==t&&0!==this.length){q(t>=0&&t<this.length,"start out of bounds"),q(n>=0&&n<=this.length,"end out of bounds");for(var o=t;n>o;o++)this[o]=e}},r.prototype.inspect=function(){for(var e=[],t=this.length,o=0;t>o;o++)if(e[o]=S(this[o]),o===n.INSPECT_MAX_BYTES){e[o+1]="...";break}return"<Buffer "+e.join(" ")+">"},r.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(r._useTypedArrays)return new r(this).buffer;for(var e=new Uint8Array(this.length),t=0,n=e.length;n>t;t+=1)e[t]=this[t];return e.buffer}throw new Error("Buffer.toArrayBuffer not supported in this browser")};var X=r.prototype;r._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=X.get,e.set=X.set,e.write=X.write,e.toString=X.toString,e.toLocaleString=X.toString,e.toJSON=X.toJSON,e.copy=X.copy,e.slice=X.slice,e.readUInt8=X.readUInt8,e.readUInt16LE=X.readUInt16LE,e.readUInt16BE=X.readUInt16BE,e.readUInt32LE=X.readUInt32LE,e.readUInt32BE=X.readUInt32BE,e.readInt8=X.readInt8,e.readInt16LE=X.readInt16LE,e.readInt16BE=X.readInt16BE,e.readInt32LE=X.readInt32LE,e.readInt32BE=X.readInt32BE,e.readFloatLE=X.readFloatLE,e.readFloatBE=X.readFloatBE,e.readDoubleLE=X.readDoubleLE,e.readDoubleBE=X.readDoubleBE,e.writeUInt8=X.writeUInt8,e.writeUInt16LE=X.writeUInt16LE,e.writeUInt16BE=X.writeUInt16BE,e.writeUInt32LE=X.writeUInt32LE,e.writeUInt32BE=X.writeUInt32BE,e.writeInt8=X.writeInt8,e.writeInt16LE=X.writeInt16LE,e.writeInt16BE=X.writeInt16BE,e.writeInt32LE=X.writeInt32LE,e.writeInt32BE=X.writeInt32BE,e.writeFloatLE=X.writeFloatLE,e.writeFloatBE=X.writeFloatBE,e.writeDoubleLE=X.writeDoubleLE,e.writeDoubleBE=X.writeDoubleBE,e.fill=X.fill,e.inspect=X.inspect,e.toArrayBuffer=X.toArrayBuffer,e}}).call(this,e("oMfpAn"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/index.js","/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer")},{"base64-js":2,buffer:1,ieee754:3,oMfpAn:4}],2:[function(e,t,n){(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function(t){"use strict";function n(e){var t=e.charCodeAt(0);return t===s?62:t===a?63:u>t?-1:u+10>t?t-u+26+26:f+26>t?t-f:l+26>t?t-l+26:void 0}function o(e){function t(e){l[c++]=e}var o,r,s,a,u,l;if(e.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var f=e.length;u="="===e.charAt(f-2)?2:"="===e.charAt(f-1)?1:0,l=new i(3*e.length/4-u),s=u>0?e.length-4:e.length;var c=0;for(o=0,r=0;s>o;o+=4,r+=3)a=n(e.charAt(o))<<18|n(e.charAt(o+1))<<12|n(e.charAt(o+2))<<6|n(e.charAt(o+3)),t((16711680&a)>>16),t((65280&a)>>8),t(255&a);return 2===u?(a=n(e.charAt(o))<<2|n(e.charAt(o+1))>>4,t(255&a)):1===u&&(a=n(e.charAt(o))<<10|n(e.charAt(o+1))<<4|n(e.charAt(o+2))>>2,t(a>>8&255),t(255&a)),l}function r(t){function n(t){return e.charAt(t)}function o(e){return n(e>>18&63)+n(e>>12&63)+n(e>>6&63)+n(63&e)}var r,i,s,a=t.length%3,u="";for(r=0,s=t.length-a;s>r;r+=3)i=(t[r]<<16)+(t[r+1]<<8)+t[r+2],u+=o(i);switch(a){case 1:i=t[t.length-1],u+=n(i>>2),u+=n(i<<4&63),u+="==";break;case 2:i=(t[t.length-2]<<8)+t[t.length-1],u+=n(i>>10),u+=n(i>>4&63),u+=n(i<<2&63),u+="="}return u}var i="undefined"!=typeof Uint8Array?Uint8Array:Array,s="+".charCodeAt(0),a="/".charCodeAt(0),u="0".charCodeAt(0),l="a".charCodeAt(0),f="A".charCodeAt(0);t.toByteArray=o,t.fromByteArray=r}("undefined"==typeof n?this.base64js={}:n)}).call(this,e("oMfpAn"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js","/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib")},{buffer:1,oMfpAn:4}],3:[function(e,t,n){(function(){n.read=function(e,t,n,o,r){var i,s,a=8*r-o-1,u=(1<<a)-1,l=u>>1,f=-7,c=n?r-1:0,d=n?-1:1,g=e[t+c];for(c+=d,i=g&(1<<-f)-1,g>>=-f,f+=a;f>0;i=256*i+e[t+c],c+=d,f-=8);for(s=i&(1<<-f)-1,i>>=-f,f+=o;f>0;s=256*s+e[t+c],c+=d,f-=8);if(0===i)i=1-l;else{if(i===u)return s?0/0:1/0*(g?-1:1);s+=Math.pow(2,o),i-=l}return(g?-1:1)*s*Math.pow(2,i-o)},n.write=function(e,t,n,o,r,i){var s,a,u,l=8*i-r-1,f=(1<<l)-1,c=f>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,g=o?0:i-1,h=o?1:-1,p=0>t||0===t&&0>1/t?1:0;for(t=Math.abs(t),isNaN(t)||1/0===t?(a=isNaN(t)?1:0,s=f):(s=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-s))<1&&(s--,u*=2),t+=s+c>=1?d/u:d*Math.pow(2,1-c),t*u>=2&&(s++,u/=2),s+c>=f?(a=0,s=f):s+c>=1?(a=(t*u-1)*Math.pow(2,r),s+=c):(a=t*Math.pow(2,c-1)*Math.pow(2,r),s=0));r>=8;e[n+g]=255&a,g+=h,a/=256,r-=8);for(s=s<<r|a,l+=r;l>0;e[n+g]=255&s,g+=h,s/=256,l-=8);e[n+g-h]|=128*p}}).call(this,e("oMfpAn"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js","/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754")},{buffer:1,oMfpAn:4}],4:[function(e,t){(function(e){function n(){}var e=t.exports={};e.nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,t="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};if(t){var n=[];return window.addEventListener("message",function(e){var t=e.source;if((t===window||null===t)&&"process-tick"===e.data&&(e.stopPropagation(),n.length>0)){var o=n.shift();o()}},!0),function(e){n.push(e),window.postMessage("process-tick","*")}}return function(e){setTimeout(e,0)}}(),e.title="browser",e.browser=!0,e.env={},e.argv=[],e.on=n,e.addListener=n,e.once=n,e.off=n,e.removeListener=n,e.removeAllListeners=n,e.emit=n,e.binding=function(){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(){throw new Error("process.chdir is not supported")}}).call(this,e("oMfpAn"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/process/browser.js","/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/process")},{buffer:1,oMfpAn:4}],5:[function(e,t,n){(function(){n.defaultNote={design:{template:"defaultNote",text:{color:"color-1",preset:"5",alignment:"center"},background:{color:"color-8",opacity:"1"},hover:{selected:!0,color:"color-9",opacity:"1"},border:{color:"color-6",width:"4",radius:"0"}},transition:{effect:"fade",preview:"false",duration:"2"},notes:[]},n.spiralNote={design:{template:"spiralNote",text:{color:"#000000",preset:"Body-L",alignment:"center"},background:{color:"rgba(255,255,255,1)",opacity:"1"},hover:{selected:!0,color:"rgba(175,204,255,1)",opacity:"1"},border:{color:"#505C73",width:"0",radius:"6"}},transition:{effect:"fade",preview:"false",duration:"2"},notes:[]},n.postitNote={design:{template:"postitNote",text:{color:"#000000",preset:"Body-L",alignment:"center"},background:{color:"rgba(251,239,172,1)",opacity:"1"},hover:{selected:!0,color:"rgba(251,227,97,1)",opacity:"1"},border:{color:"#3f3a26",width:"0",radius:"3"}},transition:{effect:"fade",preview:"false",duration:"2"},notes:[]},n.chalkboardNote={design:{template:"chalkboardNote",text:{color:"#FFFFFF",preset:"Body-L",alignment:"center"},background:{color:"rgba(72,104,35,1)",opacity:"1"},hover:{selected:!0,color:"rgba(94,141,48,1)",opacity:"1"},border:{color:"#FFFFFF",width:"8",radius:"8"}},transition:{effect:"fade",preview:"false",duration:"2"},notes:[]}}).call(this,e("oMfpAn"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/defaultTemplates.js","/")},{buffer:1,oMfpAn:4}],6:[function(e){(function(){var t,n=e("./defaultTemplates");!function(){var e=angular.module("settingsApp",["ui.sortable"]);e.controller("settingsController",["$window","$scope","$http","$timeout",function(e,o,r,i){this.settings=e.settings;var s=function(e){return e.substring(e.indexOf(".")+1)},a=function(){var e=window.location.search.substring(window.location.search.indexOf("instance")+9,window.location.search.indexOf("&"));return e};o.updateComponent=function(e){this.settings=e,this.settings.instance=a(),r.post("/updateComponent",this.settings).success(function(){console.log("posting")}).error(function(e,t){console.log("OH NO! WE FAILED TO POST!!!!!"),console.log("data: "+e+"; status: "+t)}),Wix.Settings.triggerSettingsUpdatedEvent(settings,s(settings._id))};var u=function(e){var o=JSON.parse(JSON.stringify(n[e].design));return"defaultNote"===e&&(o.text.color=t.color,o.background.color=t["background-color"],o.border.color=t["border-color"],o.hover.color=t.hover),o},l=function(e){Wix.UI.set("color",{cssColor:e.text.color}),Wix.UI.set("bcolorWOpacity",{rgba:e.background.color,opacity:e.background.opacity}),Wix.UI.set("bOpacitySpinner",100*e.background.opacity),Wix.UI.set("hcolorWOpacity",{rgba:e.hover.color,opacity:e.hover.opacity}),Wix.UI.set("hOpacitySlider",100*e.hover.opacity),Wix.UI.set("borderColor",{cssColor:e.border.color}),Wix.UI.set("borderWidth",e.border.width),Wix.UI.set("radius",e.border.radius),Wix.UI.set("hoverCheckbox",e.hover.selected)};this.resetTemplate=function(){var e=u(settings.design.template);l(e),settings.design=e,o.updateComponent(settings)};var f=function(e){var t=u(settings.design.template),n=u(e.value),o=JSON.parse(JSON.stringify(settings.design));DeepDiff.observableDiff(t,o,function(e){DeepDiff.applyChange(n,n,e)}),l(n),settings.design=n};Wix.UI.onChange("template",function(e){f(e),o.updateComponent(settings)}),Wix.UI.onChange("color",function(e){settings.design.text.color=e.cssColor,o.updateComponent(settings)}),Wix.UI.onChange("textAlignGroup",function(e){settings.design.text.alignment=e.value,o.updateComponent(settings)});var c=function(e){return e.substring(5,e.length-1).replace(/ /g,"").split(",")};Wix.UI.onChange("bcolorWOpacity",function(e){settings.design.background.color=e.rgba,settings.design.background.opacity=e.opacity,Wix.UI.set("bOpacitySpinner",100*settings.design.background.opacity),o.updateComponent(settings)}),Wix.UI.onChange("bOpacitySpinner",function(e){var t=c(settings.design.background.color);settings.design.background.color="rgba("+t[0]+","+t[1]+","+t[2]+","+e/100+")",settings.design.background.opacity=e/100,Wix.UI.set("bcolorWOpacity",{rgba:settings.design.background.color,opacity:settings.design.background.opacity}),o.updateComponent(settings)}),Wix.UI.onChange("hoverCheckbox",function(e){settings.design.hover.selected=e,o.updateComponent(settings)}),Wix.UI.onChange("hcolorWOpacity",function(e){settings.design.hover.selected||Wix.UI.set("hoverCheckbox",!0),settings.design.hover.color=e.rgba,settings.design.hover.opacity=e.opacity,Wix.UI.set("hOpacitySlider",100*settings.design.hover.opacity),o.updateComponent(settings)}),Wix.UI.onChange("hOpacitySlider",function(e){settings.design.hover.selected||Wix.UI.set("hoverCheckbox",!0);var t=c(settings.design.hover.color);settings.design.hover.color="rgba("+t[0]+","+t[1]+","+t[2]+","+e/100+")",settings.design.hover.opacity=e/100,Wix.UI.set("hcolorWOpacity",{rgba:settings.design.hover.color,opacity:settings.design.hover.opacity}),o.updateComponent(settings)}),Wix.UI.onChange("borderColor",function(e){settings.design.border.color=e.cssColor,o.updateComponent(settings)}),Wix.UI.onChange("borderWidth",function(e){settings.design.border.width=e,o.updateComponent(settings)}),Wix.UI.onChange("radius",function(e){settings.design.border.radius=e,o.updateComponent(settings)}),o.visibleManageNotes=!1,this.showManageNotes=function(){o.visibleManageNotes=!0,$(".character-count-normal").removeClass("character-count-max"),$("textarea").removeClass("note-text-max-count")},this.hideManageNotes=function(){o.visibleManageNotes=!1},this.blur=function(){$(".character-count-normal").removeClass("character-count-max"),$("textarea").removeClass("note-text-max-count"),o.updateComponent(settings)},o.settings=e.settings,o.$watchCollection("settings.notes",function(){o.updateComponent(settings)}),this.addNote=function(){settings.notes.push({visibility:!0,msg:"",key:d(),link:{type:"",url:"",display:"",targetVal:"0"}}),g()};var d=function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}var t;return t=e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},g=function(){i(function(){var e=$("textarea"),t=$(e[e.length-1]);t.focus()},0)};this.editNoteButton=function(e,t){this.settings.notes[t].visibility&&this.focusText(e)},this.focusText=function(e){i(function(){$("textarea:focus")||$("textarea:focus").blur(),$(e.target).closest(".note-container").find("textarea").focus()},0,!1)},this.deleteNote=function(e,t){e.splice(t,1)},o.hiddenNote=!1,o.showIcons=!1;var h=this;Wix.UI.onChange("transition",function(e){settings.transition.effect=e.value,h.playPreview()}),Wix.UI.onChange("duration",function(e){settings.transition.duration=Math.round(e),o.updateComponent(settings)}),this.playPreview=function(){settings.transition.preview=!0,o.updateComponent(settings),settings.transition.preview=!1},o.popupVisible=!1,o.upperTextVisible=!1,o.buttonsVisible=!1,o.optionsVisible=!1,o.linkOption=0,this.showLinkPopup=function(e){this.noteForLink=e,o.popupVisible=!0,o.buttonsVisible=!0,o.linkOption=0,b()},this.showLink=function(e){o.buttonsVisible=!1,o.optionsVisible=!0,o.linkOption=e},this.closeLinkPopup=function(){o.popupVisible=!1,o.upperTextVisible=!1,o.buttonsVisible=!1,o.optionsVisible=!1,o.linkOption=0},this.setLink=function(){o.options={1:"webLink",2:"pageLink",3:"emailLink",4:"docLink"};var e=o.options[o.linkOption],t=this.noteForLink[e];switch(p(this.noteForLink),this.noteForLink[e]=t,this.noteForLink.link.url=t,o.linkOption){case 1:this.noteForLink.link.display=t,console.log("targetVal: "+this.noteForLink.link.targetVal),this.noteForLink.link.target="1"===this.noteForLink.link.targetVal?"_top":"_blank",console.log("Target: "+this.noteForLink.link.target);break;case 2:var n=this,r=o,i=settings.pages.indexOf(this.noteForLink.pageLink);this.noteForLink.link.display=t,this.noteForLink.link.target="_top",Wix.Worker.getSiteInfo(function(e){n.noteForLink.link.url=e.baseUrl+"#!/"+n.settings.pageIds[i],r.updateComponent(n.settings)});break;case 3:this.noteForLink.link.url=y(this.noteForLink.emailLink,{subject:this.noteForLink.link.subject}),this.noteForLink.link.display="mail to: "+this.noteForLink.emailLink,this.noteForLink.link.target="";break;case 4:this.noteForLink.link.target="_blank",this.noteForLink.link.doc=!0}this.noteForLink.link.display=this.noteForLink.link.display.substring(0,30),o.updateComponent(settings),this.closeLinkPopup()},this.backToOptions=function(){o.optionsVisible=!1,o.buttonsVisible=!0,o.linkOption=0};var p=function(e){e.webLink="",e.pageLink="",e.emailLink="",e.docLink="",e.link.doc=!1,e.link.subject="",e.link.url=""};this.removeLink=function(e){p(e),e.link.display="",o.updateComponent(settings),this.closeLinkPopup()};var b=function(){Wix.getSitePages(function(e){settings.pages=_.pluck(e,"title"),settings.pageIds=_.pluck(e,"id")})},y=function(e,t){var n="mailto:";n+=window.encodeURIComponent(e);var o=[];return angular.forEach(t,function(e,t){o.push(t.toLowerCase()+"="+window.encodeURIComponent(e))}),o.length>0&&(n+="?"+o.join("&")),n};this.docLink=function(){var e=this,t=o;Wix.Settings.openMediaDialog(Wix.Settings.MediaType.DOCUMENT,!1,function(n){Wix.Utils.Media.getDocumentUrl(n.relativeUri);e.noteForLink.docLink=n.relativeUri,o.$apply(function(){e.noteForLink.link.display=n.fileName,e.noteForLink.link.display=e.noteForLink.link.display.substring(0,30),t.updateComponent(settings)})})},$(document).ready(function(){Wix.UI.initialize({numOfImages:100,isIconShown:!0,imageVisibility:"show",imagesToSync:0,imageLink:!1});var e=document.registerElement("site-template-colors");document.body.appendChild(new e);var n=["color","background-color","border-color"];t=$("site-template-colors").css(n),t.hover=$("site-template-colors").css("outline-color"),"color-1"===settings.design.text.color&&(settings.design=u("defaultNote"))})}]),e.directive("httpPrefix",function(){return{restrict:"A",require:"ngModel",link:function(e,t,n,o){function r(e){return e&&!/^(https):\/\//i.test(e)&&-1==="https://".indexOf(e)?(o.$setViewValue("https://"+e),o.$render(),"https://"+e):e}o.$formatters.push(r),o.$parsers.push(r)}}})}()}).call(this,e("oMfpAn"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_861c8e77.js","/")},{"./defaultTemplates":5,buffer:1,oMfpAn:4}]},{},[6]);