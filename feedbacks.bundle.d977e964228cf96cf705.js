/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/assets/js/components/review.js
const review = starSelector => {
  const stars = document.querySelectorAll(starSelector);
  const setRating = selectedStar => {
    const selectedStarHaveRate = Number(selectedStar.getAttribute('data-rate'));
    stars.forEach(star => {
      let currentStarHaveRate = Number(star.getAttribute('data-rate'));
      if (currentStarHaveRate <= selectedStarHaveRate) {
        star.style.fill = '#FDBC30';
      } else if (currentStarHaveRate > selectedStarHaveRate) {
        star.style.fill = 'none';
      }
    });
  };
  stars.forEach(star => {
    star.addEventListener('click', e => {
      if (e.target) {
        setRating(e.target);
      }
    });
  });
};
/* harmony default export */ const components_review = (review);
;// CONCATENATED MODULE: ./src/pages/feedbacks/feedbacks.js


components_review('svg[data-rate]');
/******/ })()
;