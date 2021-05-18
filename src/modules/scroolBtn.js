'use strict';
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

  const ancors = document.querySelectorAll('a[href*="#"');
  for (let ancor of ancors) {
    ancor.addEventListener('click', function(event) {
      event.preventDefault();
      const blockID = ancor.getAttribute('href')
      document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth"
      })
    })
  }

};

export default scroolBtn;