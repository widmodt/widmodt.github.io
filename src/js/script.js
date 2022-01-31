// 'use strict';


// // const box = document.getElementById('box');
// // console.dir(box);
// // const buttons = document.getElementsByClassName('button');
// // console.log(buttons);

// // const hearts = document.querySelectorAll('.heart');
// // hearts[1].style.backgroundColor = 'black';


// // const div = document.createElement('div');
// // const text = 'ssdffff';
// // div.classList.add('black');

// // document.querySelector('.wrapper').append(div);
// // div.innerHTML = text;

// /* Задания на урок:

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)

// 2) Изменить жанр фильма, поменять "комедия" на "драма"

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 

// 5) Добавить нумерацию выведенных фильмов */
// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против..."
//     ]
// };

// movieDB['movies'].sort();
// const listItem = document.querySelectorAll('.promo__interactive-item');

// document.querySelector('.promo__adv').querySelectorAll('img')
// .forEach(item => item.style.display = 'none');

// document.querySelector('.promo__bg .promo__genre').textContent = "драма";


// document.querySelector('.promo__bg').style
// .backgroundImage = "url(../img/bg.jpg)";


// listItem.forEach(function(item, i){
//     item.innerHTML = `${i+1} ${movieDB['movies'][i]}<div class="delete"></div>`;
// });

const wrapper = document.querySelector('.wrapper');
const h = window.innerHeight - 10;
const w = window.innerWidth - 7;
const kolvo = Math.floor(h / 60) * Math.floor(w / 60);
let counter = 0;

for (let i = 0; i < kolvo - 1; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    wrapper.append(box);
}

const boxes = document.querySelectorAll('.box');

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
addListener(boxes);
