'use strict';
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

export default sliderTop;