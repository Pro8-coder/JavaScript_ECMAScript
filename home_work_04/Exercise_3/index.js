'use strict'

/* Задание 3. Изменение стиля элемента через заданное время.

Напишите функцию changeStyleDelayed, которая принимает id элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль (любой, например - цвет текста) элемента через указанное время.

// Пример использования функции
changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'" */

function changeStyleDelayed(elem, delay) {
    setTimeout(() => {
        const element = document.getElementById(elem);
        if (element) {
            element.style.color = 'red';
        }
    }, delay)
}


changeStyleDelayed('myElement', 2000);
