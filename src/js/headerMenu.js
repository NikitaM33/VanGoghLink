'use strict';

const subLinks = document.querySelectorAll('.menu__sub');
const burgerIcon = document.querySelector('.menu__burger-icon');
const menuBody = document.querySelector('.menu__body');
const menuLinks = document.querySelectorAll('.menu__link');

const isModile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isModile.Android() ||
      isModile.iOS() ||
      isModile.Opera() ||
      isModile.Windows()
    );
  },
};

if (isModile.any()) {
  document.body.classList.add('_touch');

  subLinks.forEach((subLink) => {
    if (subLinks.length > 0) {
      subLink.addEventListener('click', () => {
        subLink.classList.toggle('_active');
      });
    }
  });
} else {
  document.body.classList.add('_pc');
}

if (burgerIcon) {
  burgerIcon.addEventListener('click', () => {
    document.body.classList.add('_lock');
    burgerIcon.classList.toggle('_active');
    menuBody.classList.toggle('_active');

    subLinks.forEach((subLink) => {
      subLink.classList.remove('_active');
    });
  });
}

if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', () => {
      document.body.classList.remove('_lock');
      burgerIcon.classList.remove('_active');
      menuBody.classList.remove('_active');

      subLinks.forEach((subLink) => {
        subLink.classList.remove('_active');
      });
    });
  });
}
