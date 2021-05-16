'use strict';
const sendForm = (formId, textStyle = 'font-size: 2rem;') => {

  const errorVessage = 'Что-то пошло не так...',
    loadMessage = 'Загрузка...',
    successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

  const form = document.querySelector('#form-callback');

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = textStyle;
  form.appendChild(statusMessage);
  
  form.addEventListener('submit', (event) => {
    
    event.preventDefault();

    form.appendChild(statusMessage);
    
    const formData = new FormData(form);
    let body = {};
    

    formData.forEach((val, key) => {
      if (!val) {
        alert('Поле имя не заполнено');
        return;
      }
      body[key] = val;
    });

    const postData = (bodyForm) => {

      return fetch('/server.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyForm),
        credentials: 'include',
      });

    };

    postData(body)
    .then((response) => {
        if(response.status !== 200) {
          throw new Error ('status network not 200');
        }
        statusMessage.textContent = successMessage;  
        form.reset();  
        setTimeout(() => {statusMessage.textContent = '';}, 4000);      
      })
    .catch((error) => {
        statusMessage.textContent = errorVessage;
        console.error(error);
      });
    
  });

};

export default sendForm;