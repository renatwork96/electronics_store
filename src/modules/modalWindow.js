'use strict';
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

export default modalWindow;