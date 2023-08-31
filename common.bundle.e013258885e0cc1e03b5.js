/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/assets/js/components/navbar.js
const navbar = (burgerBtnSelector, activeBtnClass, burgerMenuSelector, burgerMenuCloseSelector) => {
  const burgerBtn = document.querySelector(burgerBtnSelector);
  const burgerMenu = document.querySelector(burgerMenuSelector);
  const burgerBtnClose = document.querySelector(burgerMenuCloseSelector);
  const menuOpen = target => {
    if (target.classList.contains(burgerBtnSelector.slice(1)) || target.classList.contains('line')) {
      target.closest(burgerBtnSelector).classList.toggle(activeBtnClass.slice(1));
      burgerMenu.classList.toggle(burgerMenuSelector.slice(1) + '-active');
      document.body.classList.toggle('body-inactive');
    }
  };
  const menuClose = target => {
    if (target.classList.contains(burgerMenuCloseSelector.slice(1)) || target.classList.contains('wrapper')) {
      target.closest(burgerMenuSelector).classList.toggle(burgerMenuSelector.slice(1) + '-active');
      burgerBtn.classList.toggle(activeBtnClass.slice(1));
      document.body.classList.toggle('body-inactive');
    }
  };

  //
  burgerBtn.addEventListener('click', e => menuOpen(e.target));
  burgerBtnClose.addEventListener('click', e => menuClose(e.target));
};
/* harmony default export */ const components_navbar = (navbar);
;// CONCATENATED MODULE: ./src/assets/js/components/cart.js
const cart = (triggerSelector, cartSelector, closeCartSelector, cartActiveClassSelector, layoutSelector) => {
  const cartBtns = document.querySelectorAll(triggerSelector);
  const cart = document.querySelector(cartSelector);
  const closeBtnCart = document.querySelector(closeCartSelector);
  const layout = document.querySelector(layoutSelector);
  const openCart = cart => {
    layout.style.visibility = 'visible';
    layout.style.opacity = 1;
    cart.classList.add(cartActiveClassSelector.slice(1));
  };
  const closeCart = cart => {
    layout.style.opacity = 0;
    setTimeout(() => layout.style.visibility = 'hidden', 300);
    cart.classList.remove(cartActiveClassSelector.slice(1));
  };
  cartBtns.forEach(cartBtn => {
    cartBtn.addEventListener('click', e => {
      if (e.target) {
        e.preventDefault();
        openCart(cart);
      }
    });
  });
  closeBtnCart.addEventListener('click', e => {
    if (e.target) {
      e.preventDefault();
      closeCart(cart);
    }
  });
};
/* harmony default export */ const components_cart = (cart);
;// CONCATENATED MODULE: ./src/assets/js/common.js



components_navbar('.burger-btn', '.burger-btn-active', '.header-mobile', '.header-mobile-close');
components_cart('li.cart-btn', '.header > .cart', '.cart__close', '.cart-active', '.layout');
/******/ })()
;