/**
 * Перероби функцію на проміс таким чином, щоб проміс повертав значення
 * через 2 секунди після виклику функції

function greet() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve( 'hello world' ) }, 2000)
    });
}
greet().then((value) => {
    console.log(value);
})
*/



/**
 * - Використовуй prompt та повертай значення звідти.
 * - Створи функцію, яка буде набувати значення з prompt і всередині якої буде проміс.
 * Якщо значення не є числом, відхиляй проміс та логіруй "error".
 * Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
 * Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.
 

function getPrompt() {
    const userPrompt = Number(prompt("введіть число:"));
    return new Promise((resolve, reject) => {
        if (isNaN(userPrompt)) {
            reject("error")
        };
        if (userPrompt % 2 === 0) {
            setTimeout(() => {
                resolve("even")
            }, 1000)
        } else {
            setTimeout(() => {
                resolve("odd")
            }, 2000)
        }
    })
}
getPrompt().then((value) => {
    console.log(value);
}).catch((err) => {
    console.log(err);
})
*/





/**
 * Функція countWithDelay приймає 3 аргументи:
 * 1) кількість секунд перед тим як спрацює ф-ція logCount
 * 2) скільки разів повинна відпрацювати logCount
 * 3) затримка між викликами ф-ції
 *
 * logCount повинна логувати кількість викликів
 



const logCount = count => console.log(count);
function promise(delay, count) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(count), delay);
    });
}
const countWithDelay = (delay = 0, times = 0, stepInterval = 0) => { 
    for (let index = 0; index < times; index++){
        promise(delay, index + 1).then((value) => {
            logCount(value);
        });
        delay += stepInterval;
    }
};

countWithDelay(3000, 6, 1000);
*/