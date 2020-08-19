/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/blocks-content/blocks-content.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/blocks-content/blocks-content.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var navPanel = document.querySelector(".vertical-nav");
var navItem = document.querySelectorAll(".vertical-nav__active");
var heightSection;

if (window.innerWidth > 1280) {
  heightSection = 1000;
} else if (window.innerWidth < 1280) {
  heightSection = 768;
}

function removeActive() {
  for (i = 0; i < navItem.length; i++) {
    if (navItem[i].classList.contains("active")) {
      navItem[i].classList.remove("active");
    }
  }
}

for (i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener('click', function (e) {
    e.stopPropagation();
    removeActive();
  });
}

window.addEventListener('scroll', function () {
  if (window.scrollY >= 0 && window.scrollY < heightSection) {
    removeActive();
    navItem[0].classList.add("active");
  } else if (window.scrollY < 2 * heightSection) {
    removeActive();
    navItem[1].classList.add("active");
  } else if (window.scrollY < 3 * heightSection) {
    removeActive();
    navItem[2].classList.add("active");
  } else if (window.scrollY < 4 * heightSection) {
    removeActive();
    navItem[3].classList.add("active");
  } else if (window.scrollY < 5 * heightSection) {
    removeActive();
    navItem[4].classList.add("active");
  } else if (window.scrollY < 6 * heightSection) {
    removeActive();
    navItem[5].classList.add("active");
  } else if (window.scrollY < 7 * heightSection) {
    removeActive();
    navItem[6].classList.add("active");
  } else if (window.scrollY >= 7 * heightSection) {
    removeActive();
    navItem[7].classList.add("active");
  }
}); //slider-burgers

$(document).ready(function () {
  if ($(".slick-slider").length > 0) {
    $(".slick-slider").slick({
      arrows: true,
      dots: false,
      infinite: true,
      slidesToShow: 1,
      adaptiveHeight: true,
      prevArrow: "<img src='img/arrow-left.png' class='arrows'>",
      nextArrow: "<img src='img/arrow-right.png' class='arrows'>"
    });
  } //header-nav click


  $("#nav-list").on("click", ".header__nav-item-link", function (event) {
    removeActive();
    event.preventDefault();
    $('body,html').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
  });
}); //menu-click

var menuItem = document.querySelectorAll('.menu__item');

var _loop = function _loop(_i) {
  menuItem[_i].addEventListener('click', function (e) {
    e.preventDefault();

    for (var j = 0; j < menuItem.length; j++) {
      if (menuItem[j].classList.contains('active') && menuItem[j] !== menuItem[_i]) {
        menuItem[j].classList.toggle('active');
      }
    }

    menuItem[_i].classList.toggle('active');
  });
};

for (var _i = 0; _i < menuItem.length; _i++) {
  _loop(_i);
} //team-active


var teamList = document.querySelectorAll(".team__item");

var _loop2 = function _loop2(_i2) {
  teamList[_i2].addEventListener('click', function (e) {
    e.preventDefault();

    teamList[_i2].classList.toggle("team-active");
  });
};

for (var _i2 = 0; _i2 < teamList.length; _i2++) {
  _loop2(_i2);
} //modal window quotes


function toggle(e) {
  e.stopPropagation();
  var modal = document.querySelector(".quotes__modal-window");

  switch (modal.style.display) {
    case 'flex':
      modal.style.display = "none";
      break;

    case 'none':
      modal.style.display = "flex";
  }
}

document.querySelector(".quotes__modal-window").onclick = toggle;
document.querySelector(".quotes__close").addEventListener('click', toggle, true);

document.querySelector(".quotes__content").onclick = function (e) {
  return e.stopPropagation();
};

document.querySelector(".quotes").onclick = function (event) {
  toggle(event);
}; //burgers__description-button-order


var buttonsBurgers = document.querySelectorAll(".burgers__description-button-order");

for (var _i3 = 0; _i3 < buttonsBurgers.length; _i3++) {
  buttonsBurgers[_i3].addEventListener('click', function () {
    removeActive();
  });
} //footer__social-button


document.querySelector(".footer__social-button").addEventListener('click', function () {
  removeActive();
}); //submit-order click

var submitOrder = document.querySelector(".submit-order").addEventListener('click', function () {
  removeActive();
});
var buttonUp = document.querySelector(".fa-chevron-circle-up");
window.addEventListener('scroll', function () {
  if (window.scrollY > 500) {
    buttonUp.classList.add("active");
  }

  if (window.scrollY <= 500 && buttonUp.classList.contains("active")) {
    buttonUp.classList.remove("active");
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var burger = document.querySelector(".fa-hamburger");
var closeBurger = document.querySelector(".fa-times");
burger.addEventListener("click", function () {
  burger.classList.toggle('active');
  closeBurger.classList.toggle('active');
});
closeBurger.addEventListener("click", function () {
  closeBurger.classList.toggle('active');
  burger.classList.toggle('active');
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_blocks_content_blocks_content_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/blocks-content/blocks-content.js */ "./src/blocks/modules/blocks-content/blocks-content.js");
/* harmony import */ var _modules_blocks_content_blocks_content_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_blocks_content_blocks_content_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map