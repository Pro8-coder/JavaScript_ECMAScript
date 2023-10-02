'use strict'

/* Задание 3
Дополнительное задание, выполняем только если 
проходили работу с DOM. Напишите рекурсивную 
функцию findElementByClass, которая принимает 
корневой элемент дерева DOM и название класса в 
качестве аргументов и возвращает первый найденный 
элемент с указанным классом в этом дереве.

Пример
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement); */

function findElementByClass(element, className) {
    if (element.classList && element.classList.contains(className)) {
        return element;
    }
    const children = element.children;
    for (let i = 0; i < children.length; i++) {
        const foundElement = findElementByClass(children[i], className);
        if (foundElement) {
            return foundElement;
        }
    }
    return null;
}


const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
