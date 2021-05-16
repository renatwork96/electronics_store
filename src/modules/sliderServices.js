'use strict';
const sliderServices = () => {
  let position = 0;
  let slidesToShow = 3;
  let slidesToScrool = 2;

  const sdsdsd = () => {
    if (window.innerWidth <= 992 && window.innerWidth > 768) {  
      slidesToShow = 2;
      slidesToScrool = 1;
    } else if (window.innerWidth <= 768) { 
      slidesToShow = 1;
      slidesToScrool = 1;
    }
  };

  sdsdsd(slidesToShow);

  const container = document.querySelector('.services-elements');
  const track = document.querySelector('.services-carousel');
  const btnPrev = document.querySelector('.arrow-left');
  const btnNext = document.querySelector('.arrow-right');
  const items = document.querySelectorAll('.slider-services-item');
  const itemsCont = items.length;
  const itemWidth = container.clientWidth / slidesToShow;
  const movePosition = slidesToScrool * itemWidth;

  

  items.forEach((item) => {
    item.style.minWidth = `${itemWidth + 0.1}px`;
  });

  const checkBtns = () => {

    if (Math.round(position) === 0) {
      btnPrev.style.opacity = '0.5';
    } else {
      btnPrev.style.opacity = '1';
    }

    if (Math.round(position) <= -(itemsCont - slidesToShow) * itemWidth) {
      btnNext.style.opacity = '0.5';
    } else {
      btnNext.style.opacity = '1';
    }
  };

  const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
  };

  btnNext.addEventListener('click', () => {

    const itemsLeft = itemsCont - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    if (itemsLeft >= slidesToScrool) {
      position -= movePosition;
    } else {
      position -= itemsLeft * itemWidth;
    }
    
    setPosition();
    checkBtns();
  });

  btnPrev.addEventListener('click', () => {

    const itemsLeft = Math.abs(position) / itemWidth;

    if (itemsLeft >= slidesToScrool) {
      position += movePosition;
    } else {
      position += itemsLeft * itemWidth;
    }

    setPosition();
    checkBtns();
  });

  checkBtns();

  
};

export default sliderServices;