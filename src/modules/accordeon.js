'use strict';
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

export default accordeon;