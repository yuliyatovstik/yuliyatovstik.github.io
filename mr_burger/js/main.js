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
var sectionAboutUs = document.querySelector(".about-us");
var navPanel1 = navPanel.cloneNode(true);
sectionAboutUs.append(navPanel1);
var sectionBurgers = document.querySelector(".burgers-section");
var navPanel2 = navPanel.cloneNode(true);
sectionBurgers.append(navPanel2);
var sectionTeam = document.querySelector(".team");
var navPanel3 = navPanel.cloneNode(true);
sectionTeam.append(navPanel3);
var sectionMenu = document.querySelector(".menu");
var navPanel4 = navPanel.cloneNode(true);
sectionMenu.append(navPanel4);
var sectionQuotes = document.querySelector(".quotes");
var navPanel5 = navPanel.cloneNode(true);
sectionQuotes.append(navPanel5);
var sectionDelivery = document.querySelector(".delivery");
var navPanel6 = navPanel.cloneNode(true);
sectionDelivery.append(navPanel6);
var sectionMap = document.querySelector(".map");
var navPanel7 = navPanel.cloneNode(true);
sectionMap.append(navPanel7);
var navItem = document.querySelectorAll(".vertical-nav__active");
var c = 8;
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
    for (var _i = 0; _i < navItem.length; _i += c) {
      navItem[_i].classList.add("active");

      navItem[_i + 1].classList.remove("active");
    }
  } else if (window.scrollY >= heightSection && window.scrollY < 2 * heightSection) {
    for (var _i2 = 1; _i2 < navItem.length; _i2 += c) {
      navItem[_i2].classList.add("active");

      navItem[_i2 - 1].classList.remove("active");

      navItem[_i2 + 1].classList.remove("active");
    }
  } else if (window.scrollY >= 2 * heightSection && window.scrollY < 3 * heightSection) {
    for (var _i3 = 2; _i3 < navItem.length; _i3 += c) {
      navItem[_i3].classList.add("active");

      navItem[_i3 - 1].classList.remove("active");

      navItem[_i3 + 1].classList.remove("active");
    }
  } else if (window.scrollY >= 3 * heightSection && window.scrollY < 4 * heightSection) {
    for (var _i4 = 3; _i4 < navItem.length; _i4 += c) {
      navItem[_i4].classList.add("active");

      navItem[_i4 - 1].classList.remove("active");

      navItem[_i4 + 1].classList.remove("active");
    }
  } else if (window.scrollY >= 4 * heightSection && window.scrollY < 5 * heightSection) {
    for (var _i5 = 4; _i5 < navItem.length; _i5 += c) {
      navItem[_i5].classList.add("active");

      navItem[_i5 - 1].classList.remove("active");

      navItem[_i5 + 1].classList.remove("active");
    }
  } else if (window.scrollY >= 5 * heightSection && window.scrollY < 6 * heightSection) {
    for (var _i6 = 5; _i6 < navItem.length; _i6 += c) {
      navItem[_i6].classList.add("active");

      navItem[_i6 - 1].classList.remove("active");

      navItem[_i6 + 1].classList.remove("active");
    }
  } else if (window.scrollY >= 6 * heightSection && window.scrollY < 7 * heightSection) {
    for (var _i7 = 6; _i7 < navItem.length; _i7 += c) {
      navItem[_i7].classList.add("active");

      navItem[_i7 - 1].classList.remove("active");

      navItem[_i7 + 1].classList.remove("active");
    }
  } else if (window.scrollY >= 7 * heightSection) {
    for (var _i8 = 7; _i8 < navItem.length; _i8 += c) {
      navItem[_i8].classList.add("active");

      navItem[_i8 - 1].classList.remove("active");
    }
  }
}); //slider-burgers

$(document).ready(function () {
  if ($(".slick-slider").length > 0) {
    $(".slick-slider").slick({
      arrows: true,
      dots: false,
      infinite: true,
      // autoplay: 1500,
      // speed: 1000,
      slidesToShow: 1,
      adaptiveHeight: true,
      prevArrow: "<img src='img/arrow-left.png'>",
      nextArrow: "<img src='img/arrow-right.png'>"
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

if (window.innerWidth > 768) {
  var _loop = function _loop(_i9) {
    menuItem[_i9].addEventListener('click', function (e) {
      e.preventDefault();

      menuItem[_i9].classList.toggle('active');
    });
  };

  for (var _i9 = 0; _i9 < menuItem.length; _i9++) {
    _loop(_i9);
  }
}

if (window.innerWidth <= 768) {
  var _loop2 = function _loop2(_i10) {
    menuItem[_i10].addEventListener('click', function (e) {
      e.preventDefault();

      for (var j = 0; j < menuItem.length; j++) {
        if (menuItem[j].classList.contains('active') && menuItem[j] !== menuItem[_i10]) {
          menuItem[j].classList.toggle('active');
        }
      }

      menuItem[_i10].classList.toggle('active');
    });
  };

  for (var _i10 = 0; _i10 < menuItem.length; _i10++) {
    _loop2(_i10);
  }
} // let menuList = document.querySelector('.menu__list');
// let menuText = document.querySelectorAll('.menu__text');
// if (window.innerWidth <= 576) {
//     menuList.style.maxHeight = window.innerWidth + 'px';
//     for (let j = 0; j < menuItem.length; j++) {
//         menuItem[j].style.height = window.innerWidth + 'px';
//         menuItem[j].style.maxHeight = window.innerWidth + 'px';
//     }
//     for (let j = 0; j < menuItem.length; j++) {
//         menuText[j].style.width = window.innerWidth + 'px';
//         // menuText[j].style.maxHeight = window.innerWidth + 'px';
//     }
// }
//team-active


var teamList = document.querySelectorAll(".team__item");

var _loop3 = function _loop3(_i11) {
  teamList[_i11].addEventListener('click', function (e) {
    e.preventDefault();

    teamList[_i11].classList.toggle("team-active");
  });
};

for (var _i11 = 0; _i11 < teamList.length; _i11++) {
  _loop3(_i11);
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

for (var _i12 = 0; _i12 < buttonsBurgers.length; _i12++) {
  buttonsBurgers[_i12].addEventListener('click', function () {
    removeActive();
  });
} //footer__social-button


document.querySelector(".footer__social-button").addEventListener('click', function () {
  removeActive();
}); //submit-order click

var submitOrder = document.querySelector(".submit-order").addEventListener('click', function () {
  removeActive();
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