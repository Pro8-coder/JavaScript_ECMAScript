'use strict'

/* Задание 1. Получение данных о пользователе.

Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

Подсказка, с последовательностью действий:
getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

Работа должна быть выполнена с API: https://reqres.in/ */

const url = new URL('https://reqres.in/api/users');

function getUserData(ID) {
    return fetch(`${url}/${ID}`).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`Произошла ошибка: ${response.status}`);
        }
    }).then(data => {
        return data.data; // Возвращаем только данные о пользователе
    }).catch(error => {
        throw new Error(error.message);
    });
}


getUserData(1).then(data => {
    console.log(data);
}).catch(error => {
    console.error(error.message);
});

getUserData(9000).then(data => {
    console.log(data);
}).catch(error => {
    console.error(error.message);
});
