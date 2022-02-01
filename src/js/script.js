'use strict';

const wrapper = document.querySelector('.wrapper');
const h = window.innerHeight - 10;
const w = window.innerWidth - 7;
const kolvo = Math.floor(h / 60) * Math.floor(w / 60);
let boxes = [];
let counter = 0;

init(boxes);

function init(list) {
    for (let i = 0; i < kolvo; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        wrapper.append(box);
        list.push(box);
    }
    addListener(list);
}



function changeColor(item) {
    counter++;
    item.target.style.backgroundColor = 'rgba(247, 112, 112, 0.822)';
    item.target.innerText = `${counter}`;
    checkFilled();
}

function checkFilled() {
    if (counter == boxes.length) {
        boxes.forEach((i) => {
            setTimeout(() => {
                i.style.backgroundColor = 'rgba(255, 182, 249, 0.863)';
                i.innerText = ``;
                i.removeEventListener('mouseenter', changeColor);
                counter = 0;
                addListener(boxes);
            }, 1000);
        });
    }
}

function addListener(list) {
    list.forEach(item => {
        item.addEventListener('mouseenter', changeColor, {once: true});
    });
}
