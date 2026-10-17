'use strict';

const wrapper = document.querySelector('.wrapper');
const counter = document.querySelector('.counter');

wrapper.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        [...wrapper.children].forEach(button => {
            button.textContent = "Нажми меня";
        });

        event.target.textContent = 'Нажата!';
        if (counter.textContent === '') {
            counter.textContent = '1';
        } else {
            let value = Number(counter.textContent);
            value++;
            counter.textContent = String(value);
        }
    }
});