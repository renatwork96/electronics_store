'use strict';
const mobileMenu = () => {
  const mobMenuBtn = document.querySelector('.mob-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuItems = document.querySelectorAll('.mobile-menu-items');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  const mobileCallbackBtn = document.querySelector('.callback-btn');

  mobMenuBtn.addEventListener('click', () => {
    mobileMenu.style.right = '0';
  });

  const closeMobileMenu = () => {
    mobileMenu.style.right = '-400px';
  };

  mobileMenu.addEventListener('click', (event) => {
    let target = event.target;
    console.log(target);

    if (target === mobileMenuClose){
      closeMobileMenu();
    }

    if (target === mobileCallbackBtn ){
      closeMobileMenu();
    }

    for(let i = 0; i < mobileMenuItems.length; i++) {
      if (target === mobileMenuItems[i]){
        closeMobileMenu();
      }
    }
  });

};

export default mobileMenu;