'use strict';

const wrapper = document.querySelector('.wrapper');
const h = window.innerHeight - 10;
const w = window.innerWidth - 7;
const kolvo = Math.floor(h / 60) * Math.floor(w / 60);
const boxes = document.querySelectorAll('.box');
let counter = 0;

function init() {
    for (let i = 0; i < kolvo - 1; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        wrapper.append(box);
    }

}

init();
const boxes = document.querySelectorAll('.box');
addListener(boxes);

function changeColor(item) {
    counter++;
    item.target.style.backgroundColor = 'black';
    item.target.innerText = `${counter}`;
    checkFilled();
}

function checkFilled() {
    console.log(counter, boxes.length)
    if (counter == boxes.length) {
        boxes.forEach((i) => {
            setTimeout(() => {
                i.style.backgroundColor = 'orange';
                i.innerText = ``;
                i.removeEventListener('mouseover', changeColor);
                counter = 0;
                addListener(boxes);
            }, 1000);
        });
    }
}

function addListener(elements) {
    elements.forEach(item => {
        item.addEventListener('mouseover', changeColor, {
            once: true
        });
    });
}
