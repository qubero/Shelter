!function(){var e={306:function(e,t,n){var o={"./charly.png":438,"./freddie.png":528,"./jennifer.png":480,"./katerine.png":903,"./scarlett.png":18,"./sophia.png":691,"./timmy.png":211,"./woody.png":962};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id=306},620:function(e,t,n){"use strict";e.exports=n.p+"assets/images/f3803654b7e7f46fafb6.png"},438:function(e,t,n){"use strict";e.exports=n.p+"assets/images/ced4e399a51c4183f125.png"},528:function(e,t,n){"use strict";e.exports=n.p+"assets/images/fadecb22388434dc910b.png"},480:function(e,t,n){"use strict";e.exports=n.p+"assets/images/e36eb69780f9ced90752.png"},903:function(e,t,n){"use strict";e.exports=n.p+"assets/images/ed5f000ebf808011f798.png"},18:function(e,t,n){"use strict";e.exports=n.p+"assets/images/642d228764da438f2cef.png"},691:function(e,t,n){"use strict";e.exports=n.p+"assets/images/2344312ca42955d229ea.png"},211:function(e,t,n){"use strict";e.exports=n.p+"assets/images/f28b802b95a1fcf49f0d.png"},962:function(e,t,n){"use strict";e.exports=n.p+"assets/images/9926a26c4cb1dd4bf18c.png"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../../"}(),function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t=function(){function t(){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(this instanceof t?this.constructor:void 0)instanceof t)throw new Error("Cant't intantiate Abstract, only concrete one.");this._element=null}var n,o;return n=t,(o=[{key:"getTemplate",value:function(){throw new Error("Abstract's method not implemented: getTemplate.")}},{key:"getElement",value:function(){return this._element||(this._element=r(this.getTemplate())),this._element}},{key:"removeElement",value:function(){this._element=null}}])&&e(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}(),o="beforeend",r=function(e){var t=document.createElement("div");return t.innerHTML=e,t.firstChild},i=function(e,n,r){switch(e instanceof t&&(e=e.getElement()),n instanceof t&&(n=n.getElement()),r){case"afterbegin":e.prepend(n);break;case o:e.append(n)}};function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function u(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(o);if(r){var n=l(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u(this,e)});function a(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this))._data={currentPage:null,pagesCount:null},e}return t=a,(n=[{key:"init",value:function(e,t){this._data={currentPage:e,pagesCount:t}}},{key:"getTemplate",value:function(){return n=0===(t=(e=this._data).currentPage)?"disabled":"",r=o=t===e.pagesCount-1?"disabled":"",'<div class="pets-list__controls">\n      <button '.concat(n,' class="button button--outline button--round btn-first">\n          &lt;&lt;\n      </button>\n      <button ').concat(n,' class="button button--outline button--round btn-prev">\n          &lt;\n      </button>\n      <button class="button button--outline button--round active">\n        ').concat(t+1,"\n      </button>\n      <button ").concat(o,' class="button button--outline button--round btn-next">\n          &gt;\n      </button>\n      <button ').concat(r,' class="button button--outline button--round btn-last">\n          &gt;&gt;\n      </button>\n    </div>');var e,t,n,o,r}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(t);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function m(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(s,e);var t,o,r,i,a=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(i){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function s(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Somedata";return p(this,s),(e=a.call(this))._content=t,e._currentScrollY=0,e._handleCloseClick=e._handleCloseClick.bind(b(e)),e.getElement().addEventListener("click",e._handleCloseClick),e}return t=s,(o=[{key:"getTemplate",value:function(){return this._currentScrollY=window.pageYOffset,document.body.classList.add("fixed"),document.body.style.marginTop="-".concat(this._currentScrollY,"px"),e=this._content.outerHTML,t=n(620),'<div class="overlay is-visible">\n      <div class="popup">\n        <div class="popup__container">\n          <button class="popup__close button button--outline button--round">\n            <img class="icon" width="12" height="12" src="'.concat(t,'" alt="">\n          </button>\n\n          <div class="popup__content">\n            ').concat(e,"\n          </div>\n        </div>\n      </div>\n    </div>");var e,t}},{key:"_handleCloseClick",value:function(e){e.preventDefault();var t=e.target.classList;(t.contains("overlay")||t.contains("popup__close")||t.contains("icon"))&&(this.getElement().remove(),document.body.classList.remove("fixed"),document.body.style.marginTop="0",window.scrollTo({top:this._currentScrollY,behavior:"instant"}),this._currentScrollY=0)}}])&&h(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),s}(t);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function _(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function S(e,t){return S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},S(e,t)}function k(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var E=["Age","Inoculations","Diseases","Parasites"],j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(s,e);var t,o,r,i,a=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(i){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=a.call(this))._data=e,t}return t=s,(o=[{key:"getTemplate",value:function(){return e=this._data,t=e.name,o=e.type,r=e.breed,i=e.description,a=e.age,s=e.inoculations,c=e.diseases,u=e.parasites,l=e.img,d=n(306)("./".concat(l.split("/").pop())),'<div class="info-card">\n        <div class="info-card__img">\n            <img src="'.concat(d,'" alt="').concat(t,'">\n        </div>\n\n        <div class="info-card__content pet-card">\n            <h3 class="h3 pet-card__name">').concat(t,'</h3>\n            <span class="h4 pet-card__sub">').concat(o," - ").concat(r,'</span>\n            <p class="h5">').concat(i,'</p>\n\n            <ul class="pet-card__descr h5">\n              ').concat([a,s,c,u].map((function(e,t){return e&&"<li>\n      <strong>".concat(E[t],": </strong>").concat(e,"\n    </li>")})).join(""),"\n            </ul>\n        </div>\n    </div>");var e,t,o,r,i,a,s,c,u,l,d}}])&&_(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),s}(t);function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var L=function(e){for(var t,n=e.length;0!=n;){t=Math.floor(Math.random()*n),n--;var o=[e[t],e[n]];e[n]=o[0],e[t]=o[1]}return e};function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var P=JSON.parse('[{"name":"Jennifer","img":"../../assets/images/jennifer.png","type":"Dog","breed":"Labrador","description":"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.","age":"2 months","inoculations":["none"],"diseases":["none"],"parasites":["none"]},{"name":"Sophia","img":"../../assets/images/sophia.png","type":"Dog","breed":"Shih tzu","description":"Sophia here and I\'m looking for my forever home to live out the best years of my life. I am full of energy. Everyday I\'m learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.","age":"1 month","inoculations":["parvovirus"],"diseases":["none"],"parasites":["none"]},{"name":"Woody","img":"../../assets/images/woody.png","type":"Dog","breed":"Golden Retriever","description":"Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.","age":"3 years 6 months","inoculations":["adenovirus","distemper"],"diseases":["right back leg mobility reduced"],"parasites":["none"]},{"name":"Scarlett","img":"../../assets/images/scarlett.png","type":"Dog","breed":"Jack Russell Terrier","description":"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.","age":"3 months","inoculations":["parainfluenza"],"diseases":["none"],"parasites":["none"]},{"name":"Katrine","img":"../../assets/images/katerine.png","type":"Cat","breed":"British Shorthair","description":"Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.","age":"6 months","inoculations":["panleukopenia"],"diseases":["none"],"parasites":["none"]},{"name":"Timmy","img":"../../assets/images/timmy.png","type":"Cat","breed":"British Shorthair","description":"Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.","age":"2 years 3 months","inoculations":["calicivirus","viral rhinotracheitis"],"diseases":["kidney stones"],"parasites":["none"]},{"name":"Freddie","img":"../../assets/images/freddie.png","type":"Cat","breed":"British Shorthair","description":"Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.","age":"2 months","inoculations":["rabies"],"diseases":["none"],"parasites":["none"]},{"name":"Charly","img":"../../assets/images/charly.png","type":"Dog","breed":"Jack Russell Terrier","description":"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.","age":"8 years","inoculations":["bordetella bronchiseptica","leptospirosis"],"diseases":["deafness","blindness"],"parasites":["lice","fleas"]}]');document.querySelector(".slider__content")?function(e){var t,o=3,a=[],s=L(function(e){if(Array.isArray(e))return T(e)}(t=Array(e.length).keys())||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=document.querySelector(".slider__content");document.querySelector(".sl-next").addEventListener("click",(function(){c.classList.add("a-left")})),document.querySelector(".sl-prev").addEventListener("click",(function(){c.classList.add("a-right")}));var u=0;c.ontransitionend=function(e){e.target.classList.contains("slider__cards-container")&&3==++u&&(l.remove(),f.remove(),c.classList.remove("a-left"),c.classList.remove("a-right"),b(!0),u=0)};var l,d,f,p,h=window.matchMedia("screen and (max-width: 767px)"),y=window.matchMedia("screen and (min-width: 768px) and (max-width: 1279px)"),m=window.matchMedia("screen and (min-width: 1280px)");h.matches?o=1:y.matches?o=2:m.matches&&(o=3);var b=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];l=e?p:g(),d=g(),f=g(!0),p=d,e?(l.before(d),l.after(f)):c.append(d,l,f)},g=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],c=document.createElement("div");c.classList.add("slider__cards-container");var u,l=a,d=!0;do{d=!(u=L(s).slice(0,o)).every((function(e){return!l.includes(e)}))}while(d);return t||(a=u),a.forEach((function(t){var o=e[t],a=new j(o).getElement(),s=n(306)("./".concat(o.img.split("/").pop())),u=r('<div class="card">\n              <div class="card__img">\n                  <img src="'.concat(s,'" alt="').concat(o.name,'">\n              </div>\n              <div class="card__title">').concat(o.name,'</div>\n              <div>\n                  <button class="button button--outline" type="button">Learn more</button>\n              </div>\n          </div>'));c.append(u),u.addEventListener("click",(function(){var e=new v(a);i(document.body,e,"beforeend")}))})),c};c&&(b(),m.onchange=function(e){e.matches&&(o=3,c&&(c.innerHTML=""),b())},y.onchange=function(e){e.matches&&(c&&(c.innerHTML=""),o=2,b())},h.onchange=function(e){e.matches&&(c&&(c.innerHTML=""),o=1,b())})}(P):function(e){var a,s=function(e){if(Array.isArray(e))return x(e)}(a=Array(e.length).keys())||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(a)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),c=function(e){for(var t=[],n=0,o=0;o<6;o++)for(var r=0;r<e.length;r+=3){var i=t[n-3]||[],a=void 0;do{a=L(e.slice(r,r+3))}while(a.join("")===i.join(""));t.push(a),n++}return t.flat()}(L(s)),u=document.querySelector(".pets-list"),l=document.querySelector(".pets-list__content"),f=null,p=0,h=8,y=window.matchMedia("screen and (max-width: 767px)"),m=window.matchMedia("screen and (min-width: 768px) and (max-width: 1279px)"),b=window.matchMedia("screen and (min-width: 1280px)");y.matches?h=3:m.matches?h=6:b.matches&&(h=8);var g=function a(){var s=c.length/h,y=p*h;l&&(l.innerHTML=""),c.slice(y,y+h).forEach((function(t){var o=e[t],a=new j(o).getElement(),s=n(306)("./".concat(o.img.split("/").pop())),c=r('<div class="card">\n            <div class="card__img">\n                <img src="'.concat(s,'" alt="').concat(o.name,'">\n            </div>\n            <div class="card__title">').concat(o.name,'</div>\n            <div>\n                <button class="button button--outline" type="button">Learn more</button>\n            </div>\n        </div>'));l.append(c),c.addEventListener("click",(function(){var e=new v(a);i(document.body,e,"beforeend")}))})),f&&function(e){if(!(e instanceof t))throw Err("Can remove only component.");e.getElement().remove(),e.removeElement()}(f),(f=new d).init(p,s),i(u,f,o),document.querySelector(".btn-next").addEventListener("click",(function(){p++,a()})),document.querySelector(".btn-prev").addEventListener("click",(function(){p--,a()})),document.querySelector(".btn-last").addEventListener("click",(function(){p=s-1,a()})),document.querySelector(".btn-first").addEventListener("click",(function(){p=0,a()}))};l&&(g(),b.onchange=function(e){e.matches&&(h=8,p=0,g())},m.onchange=function(e){e.matches&&(h=6,p=0,g())},y.onchange=function(e){e.matches&&(h=3,p=0,g())})}(P),function(){var e=document.querySelector("body"),t=document.querySelector(".menu"),n=document.querySelector(".toggle"),o=document.createElement("div");o.classList.add("overlay");var r=0,i=function(){e.classList.remove("fixed"),e.style.marginTop="0",window.scrollTo({top:r,behavior:"instant"}),r=0,t.classList.remove("menu--open"),n.classList.remove("toggle--open","header__button--open")};n.addEventListener("click",(function(){window.innerWidth<=768&&(t.classList.contains("menu--open")?i():(r=window.pageYOffset,e.classList.add("fixed"),e.style.marginTop="-".concat(r,"px"),t.after(o),t.classList.add("menu--open"),n.classList.add("toggle--open","header__button--open")))})),o.addEventListener("click",i),t.addEventListener("click",(function(e){e.target.classList.contains("menu__link")&&i()})),window.matchMedia("(max-width: 767px)").onchange=function(e){return!e.matches&&i()}}()}()}();