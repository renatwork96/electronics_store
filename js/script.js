'use strict';

//Меню
const modalWindow = () => {

  const callbackBtn = document.querySelectorAll('.callback-btn'),
    modalCallback = document.querySelector('.modal-callback'),
    modalOverlay = document.querySelector('.modal-overlay'),
    modalClose = document.querySelector('.modal-close'),
    imgBtnSlider = document.querySelectorAll('.modal-btn-slider'),
    buttonServices = document.querySelector('.button-services');
    
  
  const handlerModal = () => {
    modalCallback.classList.toggle('modal-callback--visible');
    modalOverlay.classList.toggle('modal-overlay--visible');
  };

  const addEventsItem = (selector, funct) => {
    selector.forEach(function(item){
      item.addEventListener('click', funct);
    });
  };

  addEventsItem(callbackBtn, handlerModal);
  addEventsItem(imgBtnSlider, handlerModal);
  buttonServices.addEventListener('click', handlerModal);
  modalClose.addEventListener('click', handlerModal);
  modalOverlay.addEventListener('click', handlerModal);

};

modalWindow();


//Слайдер Top
const sliderTop = () => {
  const slide = document.querySelectorAll('.top-slider>.item');

  let currentSlide = 0;

  const prevSlide = (elem, index, strClassAct, strClassPrev) => {
    elem[index].classList.remove(strClassAct);
    elem[index].classList.add(strClassPrev);
  };

  const nextSlide = (elem, index, strClassAct, strClassPrev) => {
    elem[index].classList.add(strClassAct);
    elem[index].classList.remove(strClassPrev);
  };

  const autoPlaySlide = () => {
    
    prevSlide(slide, currentSlide, 'item--active', 'item--noactive');
    currentSlide++;

    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }

    nextSlide(slide, currentSlide, 'item--active', 'item--noactive');
  };

  const startSlide = (time = 3000) => {
    setInterval(autoPlaySlide, time);
  };

  startSlide(3000);
};


sliderTop();


//Слайдер Top
const sliderServices = () => {
  const sliderServicesItem = document.querySelectorAll('.slider-services-item'),
    arrowRight = document.querySelector('.arrow-right'),
    arrowLeft = document.querySelector('.arrow-left');

  let currentSlide = 0;

  

};

sliderServices();