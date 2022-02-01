'use strict';

const wrapper = document.querySelector('.wrapper');
const h = window.innerHeight - 10;
const w = window.innerWidth - 7;
const number =  Math.floor(h / 60) * Math.floor(w / 60);
let boxes = [];
let counter = 0;

init(boxes);

function init() {
    for (let i = 0; i < number; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        wrapper.append(box);
        boxes.push(box);
    }
    addListener(wrapper);
}

function changeColor(item) {
    counter++;
    item.style.backgroundColor = 'rgba(150, 100, 150, 0.863';
    checkFilled();
}

function checkFilled() {
    if (counter == boxes.length) {
        boxes.forEach((i) => {
            setTimeout(() => {
                i.style.backgroundColor = '';
                i.innerText = ``;
                i.removeEventListener('click', changeColor);
                counter = 0;
            }, 1000);
        });
        addListener(wrapper);
    }
}

function addListener(wrapper) {
    wrapper.addEventListener('click', (e) => {
        if (e.target.matches('div.box')) {
            changeColor(e.target);
        };
    });
}
