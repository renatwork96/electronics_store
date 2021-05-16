/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modalWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modalWindow */ \"./src/modules/modalWindow.js\");\n/* harmony import */ var _modules_scroolBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroolBtn */ \"./src/modules/scroolBtn.js\");\n/* harmony import */ var _modules_sliderTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sliderTop */ \"./src/modules/sliderTop.js\");\n/* harmony import */ var _modules_sliderServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sliderServices */ \"./src/modules/sliderServices.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/accordeon */ \"./src/modules/accordeon.js\");\n/* harmony import */ var _modules_validateInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/validateInput */ \"./src/modules/validateInput.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_mobileMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/mobileMenu */ \"./src/modules/mobileMenu.js\");\n\n\n\n\n\n\n\n\n\n //Модальное окно\n\n(0,_modules_modalWindow__WEBPACK_IMPORTED_MODULE_0__.default)(); //Валидация\n\n(0,_modules_validateInput__WEBPACK_IMPORTED_MODULE_5__.default)('.modal-callback'); //Слайдер Top\n\n(0,_modules_sliderTop__WEBPACK_IMPORTED_MODULE_2__.default)(); //Слайдер Услуг\n\n(0,_modules_sliderServices__WEBPACK_IMPORTED_MODULE_3__.default)(); //Аккордеон\n\n(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_4__.default)(); //Кнопка прокрутки\n\n(0,_modules_scroolBtn__WEBPACK_IMPORTED_MODULE_1__.default)(); //Отправка формы\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__.default)('#form-callback', 'font-size: 2rem;'); //Мобильное меню\n\n(0,_modules_mobileMenu__WEBPACK_IMPORTED_MODULE_7__.default)();\n\n//# sourceURL=webpack://electric/./src/index.js?");

/***/ }),

/***/ "./src/modules/accordeon.js":
/*!**********************************!*\
  !*** ./src/modules/accordeon.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar accordeon = function accordeon() {\n  var accordeon = document.querySelector('.accordeon');\n  var accordeonItems = document.querySelectorAll('.accordeon>.element');\n\n  var openItem = function openItem(item) {\n    item.parentNode.classList.add('active');\n  };\n\n  var closeItems = function closeItems() {\n    accordeonItems.forEach(function (item) {\n      item.classList.remove('active');\n    });\n  };\n\n  accordeon.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (target.matches('.title')) {\n      if (target.parentNode.classList.contains('active')) {\n        closeItems();\n      } else {\n        closeItems();\n        openItem(target);\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack://electric/./src/modules/accordeon.js?");

/***/ }),

/***/ "./src/modules/mobileMenu.js":
/*!***********************************!*\
  !*** ./src/modules/mobileMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar mobileMenu = function mobileMenu() {\n  var mobMenuBtn = document.querySelector('.mob-menu-btn');\n  var mobileMenu = document.querySelector('.mobile-menu');\n  var mobileMenuItems = document.querySelectorAll('.mobile-menu-items');\n  var mobileMenuClose = document.querySelector('.mobile-menu-close');\n  var mobileCallbackBtn = document.querySelector('.callback-btn');\n  mobMenuBtn.addEventListener('click', function () {\n    mobileMenu.style.right = '0';\n  });\n\n  var closeMobileMenu = function closeMobileMenu() {\n    mobileMenu.style.right = '-400px';\n  };\n\n  mobileMenu.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target === mobileMenuClose) {\n      closeMobileMenu();\n    }\n\n    if (target === mobileCallbackBtn) {\n      closeMobileMenu();\n    }\n\n    for (var i = 0; i < mobileMenuItems.length; i++) {\n      if (target === mobileMenuItems[i]) {\n        closeMobileMenu();\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mobileMenu);\n\n//# sourceURL=webpack://electric/./src/modules/mobileMenu.js?");

/***/ }),

/***/ "./src/modules/modalWindow.js":
/*!************************************!*\
  !*** ./src/modules/modalWindow.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar modalWindow = function modalWindow() {\n  var callbackBtn = document.querySelectorAll('.callback-btn'),\n      modalCallback = document.querySelector('.modal-callback'),\n      modalOverlay = document.querySelector('.modal-overlay'),\n      modalClose = document.querySelector('.modal-close'),\n      servicesCarousel = document.querySelector('.services-carousel'),\n      buttonServices = document.querySelector('.button-services');\n\n  var handlerModal = function handlerModal() {\n    modalCallback.classList.toggle('modal-callback--visible');\n    modalOverlay.classList.toggle('modal-overlay--visible');\n  };\n\n  var addEventsItem = function addEventsItem(selector, funct) {\n    selector.forEach(function (item) {\n      item.addEventListener('click', funct);\n    });\n  };\n\n  addEventsItem(callbackBtn, handlerModal);\n  buttonServices.addEventListener('click', handlerModal);\n  modalClose.addEventListener('click', handlerModal);\n  modalOverlay.addEventListener('click', handlerModal); //Для слайдера\n\n  servicesCarousel.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (target.matches('.modal-btn-slider')) {\n      handlerModal();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalWindow);\n\n//# sourceURL=webpack://electric/./src/modules/modalWindow.js?");

/***/ }),

/***/ "./src/modules/scroolBtn.js":
/*!**********************************!*\
  !*** ./src/modules/scroolBtn.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar scroolBtn = function scroolBtn() {\n  var heightTopSlider = +document.querySelector('.top-slider').scrollHeight;\n  var upBtn = document.querySelector('.up');\n  window.addEventListener('scroll', function () {\n    var scrolled = window.pageYOffset;\n\n    if (scrolled >= heightTopSlider) {\n      upBtn.style.display = 'block';\n    } else {\n      upBtn.style.display = 'none';\n    }\n  });\n  upBtn.addEventListener('click', function () {\n    window.scrollTo({\n      top: 0,\n      behavior: \"smooth\"\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroolBtn);\n\n//# sourceURL=webpack://electric/./src/modules/scroolBtn.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar sendForm = function sendForm(formId) {\n  var textStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'font-size: 2rem;';\n  var errorVessage = 'Что-то пошло не так...',\n      loadMessage = 'Загрузка...',\n      successMessage = 'Спасибо! Мы скоро с вами свяжемся!';\n  var form = document.querySelector('#form-callback');\n  var statusMessage = document.createElement('div');\n  statusMessage.style.cssText = textStyle;\n  form.appendChild(statusMessage);\n  form.addEventListener('submit', function (event) {\n    event.preventDefault();\n    form.appendChild(statusMessage);\n    var formData = new FormData(form);\n    var body = {};\n    formData.forEach(function (val, key) {\n      if (!val) {\n        alert('Поле имя не заполнено');\n        return;\n      }\n\n      body[key] = val;\n    });\n\n    var postData = function postData(bodyForm) {\n      return fetch('/server.php', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify(bodyForm),\n        credentials: 'include'\n      });\n    };\n\n    postData(body).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('status network not 200');\n      }\n\n      statusMessage.textContent = successMessage;\n      form.reset();\n      setTimeout(function () {\n        statusMessage.textContent = '';\n      }, 4000);\n    })[\"catch\"](function (error) {\n      statusMessage.textContent = errorVessage;\n      console.error(error);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://electric/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/sliderServices.js":
/*!***************************************!*\
  !*** ./src/modules/sliderServices.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar sliderServices = function sliderServices() {\n  var position = 0;\n  var slidesToShow = 3;\n  var slidesToScrool = 2;\n\n  var sdsdsd = function sdsdsd() {\n    if (window.innerWidth <= 992 && window.innerWidth > 768) {\n      slidesToShow = 2;\n      slidesToScrool = 1;\n    } else if (window.innerWidth <= 768) {\n      slidesToShow = 1;\n      slidesToScrool = 1;\n    }\n  };\n\n  sdsdsd(slidesToShow);\n  var container = document.querySelector('.services-elements');\n  var track = document.querySelector('.services-carousel');\n  var btnPrev = document.querySelector('.arrow-left');\n  var btnNext = document.querySelector('.arrow-right');\n  var items = document.querySelectorAll('.slider-services-item');\n  var itemsCont = items.length;\n  var itemWidth = container.clientWidth / slidesToShow;\n  var movePosition = slidesToScrool * itemWidth;\n  items.forEach(function (item) {\n    item.style.minWidth = \"\".concat(itemWidth + 0.1, \"px\");\n  });\n\n  var checkBtns = function checkBtns() {\n    if (Math.round(position) === 0) {\n      btnPrev.style.opacity = '0.5';\n    } else {\n      btnPrev.style.opacity = '1';\n    }\n\n    if (Math.round(position) <= -(itemsCont - slidesToShow) * itemWidth) {\n      btnNext.style.opacity = '0.5';\n    } else {\n      btnNext.style.opacity = '1';\n    }\n  };\n\n  var setPosition = function setPosition() {\n    track.style.transform = \"translateX(\".concat(position, \"px)\");\n  };\n\n  btnNext.addEventListener('click', function () {\n    var itemsLeft = itemsCont - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;\n\n    if (itemsLeft >= slidesToScrool) {\n      position -= movePosition;\n    } else {\n      position -= itemsLeft * itemWidth;\n    }\n\n    setPosition();\n    checkBtns();\n  });\n  btnPrev.addEventListener('click', function () {\n    var itemsLeft = Math.abs(position) / itemWidth;\n\n    if (itemsLeft >= slidesToScrool) {\n      position += movePosition;\n    } else {\n      position += itemsLeft * itemWidth;\n    }\n\n    setPosition();\n    checkBtns();\n  });\n  checkBtns();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderServices);\n\n//# sourceURL=webpack://electric/./src/modules/sliderServices.js?");

/***/ }),

/***/ "./src/modules/sliderTop.js":
/*!**********************************!*\
  !*** ./src/modules/sliderTop.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar sliderTop = function sliderTop() {\n  var slide = document.querySelectorAll('.top-slider>.item');\n  var currentSlide = 0;\n\n  var prevSlide = function prevSlide(elem, index, strClassAct, strClassPrev) {\n    elem[index].classList.remove(strClassAct);\n    elem[index].classList.add(strClassPrev);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClassAct, strClassPrev) {\n    elem[index].classList.add(strClassAct);\n    elem[index].classList.remove(strClassPrev);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'item--active', 'item--noactive');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'item--active', 'item--noactive');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    setInterval(autoPlaySlide, time);\n  };\n\n  startSlide(3000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderTop);\n\n//# sourceURL=webpack://electric/./src/modules/sliderTop.js?");

/***/ }),

/***/ "./src/modules/validateInput.js":
/*!**************************************!*\
  !*** ./src/modules/validateInput.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar validateInput = function validateInput(selector) {\n  var form = document.querySelector(selector);\n  var inputSelector = form.querySelectorAll('.input-form-control');\n  var submit = form.querySelector('.button');\n  var validName;\n  var validPhone;\n  inputSelector.forEach(function (item) {\n    //Для имен\n    if (item.getAttribute('name') === \"fio\") {\n      var conditionsForm = /.{2,50}/ig;\n      item.addEventListener('input', function () {\n        item.value = item.value.replace(/[^а-яё\\s]/ig, '');\n      });\n      item.addEventListener('blur', function () {\n        item.value = item.value.toLowerCase();\n        item.value = item.value.replace(/( |^)[а-яё]/g, function (x) {\n          return x.toUpperCase();\n        });\n        item.value = item.value.replace(/\\s+/g, ' ');\n        item.value = item.value.replace(/^\\s*/, '');\n        validName = conditionsForm.test(item.value);\n        conditionsForm.test(item.value);\n\n        if (!validName) {\n          submit.style.cursor = \"not-allowed\";\n          submit.disabled = true;\n        } else if (validName && validPhone) {\n          submit.style.cursor = \"default\";\n          submit.disabled = false;\n        }\n      });\n    } //Для телефона\n\n\n    if (item.getAttribute('name') === \"tel\") {\n      var _conditionsForm = /\\+?[0-9]{11}/ig;\n      item.addEventListener('input', function () {\n        item.value = item.value.replace(/[^0-9\\+]/g, '');\n        validPhone = _conditionsForm.test(item.value);\n\n        _conditionsForm.test(item.value);\n\n        if (!validPhone) {\n          submit.style.cursor = \"not-allowed\";\n          submit.disabled = true;\n        } else if (validName && validPhone) {\n          submit.style.cursor = \"default\";\n          submit.disabled = false;\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateInput);\n\n//# sourceURL=webpack://electric/./src/modules/validateInput.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;