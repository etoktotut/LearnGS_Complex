"use strict";
const wbody = document.querySelector('body');
const h1Here = document.querySelector('h1');
const btnChange = document.querySelector('#change');

btnChange.addEventListener('click', function () {
    let randColor = '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
    wbody.setAttribute('style', `background-color: ${randColor};`);
    h1Here.textContent = randColor;
});

