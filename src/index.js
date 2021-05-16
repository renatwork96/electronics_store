'use strict';

import modalWindow from './modules/modalWindow';
import scroolBtn from './modules/scroolBtn';
import sliderTop from './modules/sliderTop';
import sliderServices from './modules/sliderServices';
import accordeon from './modules/accordeon';
import validateInput from './modules/validateInput';
import sendForm from './modules/sendForm';
//Модальное окно
modalWindow();


//Валидация
validateInput('.modal-callback');

//Слайдер Top
sliderTop();


//Слайдер Услуг
sliderServices();

//Аккордеон
accordeon();


//Кнопка прокрутки
scroolBtn();

//Отправка формы
sendForm('#form-callback', 'font-size: 2rem;');
