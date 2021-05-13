'use strict';
const toggleMenu = () => {

  const btnMenu = document.querySelectorAll('.callback-btn'),
    modalCallback = document.querySelector('.modal-callback'),
    modalOverlay = document.querySelector('.modal-overlay'),
    modalClose = document.querySelector('.modal-close');

  const handlerMenu = () => {
    modalCallback.classList.toggle('modal-callback--visible');
    modalOverlay.classList.toggle('modal-overlay--visible');
  };

  btnMenu[0].addEventListener('click', handlerMenu);
  btnMenu[1].addEventListener('click', handlerMenu);
  modalClose.addEventListener('click', handlerMenu);
  modalOverlay.addEventListener('click', handlerMenu);

};

toggleMenu();