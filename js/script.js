'use strict';

//Меню
const modalWindow = () => {

  const callbackBtn = document.querySelectorAll('.callback-btn'),
    modalCallback = document.querySelector('.modal-callback'),
    modalOverlay = document.querySelector('.modal-overlay'),
    modalClose = document.querySelector('.modal-close'),
    servicesCarousel = document.querySelector('.services-carousel'),
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
  
  buttonServices.addEventListener('click', handlerModal);
  modalClose.addEventListener('click', handlerModal);
  modalOverlay.addEventListener('click', handlerModal);

  servicesCarousel.addEventListener('click', (event) => {

    event.preventDefault();
    let target = event.target;

    if(target.matches('.modal-btn-slider')) {
      handlerModal();
    }

  });

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
  const sliderServicesItem2 = document.querySelector('.container121');
  // sliderServicesItem2.addEventListener('click', (event) => {
  //   event.preventDefault();

  //   let target = event.target;

  //   console.log(target);
  // });
  

};

sliderServices();

//Аккордеон
const accordeon = () => {
  const accordeon = document.querySelector('.accordeon');
  const accordeonItems = document.querySelectorAll('.accordeon>.element');

  const openItem = (item) => {
    item.parentNode.classList.add('active');
  };

  const closeItems = () => {
    accordeonItems.forEach(function(item){
      item.classList.remove('active');
    });
  };

  accordeon.addEventListener('click', (event) => {

    event.preventDefault();
    let target = event.target;

    if(target.matches('.title')) {

      if(target.parentNode.classList.contains('active')) {
        closeItems();
      } else {
        closeItems();
        openItem(target);
      }
      
    }

  });

};

accordeon();

//Кнопка прокрутки
const scroolBtn = () => {
  const heightTopSlider = +document.querySelector('.top-slider').scrollHeight;
  const upBtn = document.querySelector('.up');

  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;

    if (scrolled >= heightTopSlider) {
      upBtn.style.display = 'block';
    } else {
      upBtn.style.display = 'none';
    }
  });

  upBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

};

scroolBtn();