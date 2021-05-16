'use strict';
const validateInput = (selector) => {
  const form = document.querySelector(selector);
  const inputSelector = form.querySelectorAll('.input-form-control');
  const submit = form.querySelector('.button');

  let validName;
  let validPhone;

   inputSelector.forEach((item) => {

    //Для имен
    if (item.getAttribute('name') === "fio") {

      let conditionsForm = /.{2,50}/ig;

      item.addEventListener('input', () => {
        item.value =  item.value.replace(/[^а-яё\s]/ig,'');
      });

      item.addEventListener('blur', () => {
        item.value = item.value.toLowerCase();
        item.value =  item.value.replace(/( |^)[а-яё]/g, function(x){ return x.toUpperCase();});
        item.value =  item.value.replace(/\s+/g, ' ');
        item.value =  item.value.replace(/^\s*/,'');
        
        
        validName = conditionsForm.test(item.value);
        conditionsForm.test(item.value);

        if(!validName){
          submit.style.cursor = "not-allowed";
          submit.disabled = true;
        } else if (validName && validPhone) {
          submit.style.cursor = "default";
          submit.disabled = false;
        }
      });

    }

    //Для телефона
    if (item.getAttribute('name') === "tel") {

      let conditionsForm = /\+?[0-9]{11}/ig;

      item.addEventListener('input', () => {
        item.value =  item.value.replace(/[^0-9\+]/g, '');

        validPhone = conditionsForm.test(item.value);
        conditionsForm.test(item.value);
        
        if(!validPhone){
          submit.style.cursor = "not-allowed";
          submit.disabled = true;
        } else if (validName && validPhone) {
          submit.style.cursor = "default";
          submit.disabled = false;
        }
      });
    }
  });

};

export default validateInput;