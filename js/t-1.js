/*
 * Виведи на екран загальну кількість яблук та винограду.
 * Різницю яблук та винограду.
 */

const apples = 47;
const grapes = 135;

const totalFruts = apples + grapes;
console.log(totalFruts);

console.log(grapes - apples);



/*
 * Напиши скрипт, який виводить в консоль заокруглені вгору / вниз і т.д. значення змінної value. Використовуй методи Math.floor(), Math.ceil() і Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.
 */

const value = 27.4;

console.log(Math.floor(value))
console.log(Math.round(value))
console.log(Math.ceil(value))

// Переробіть наведений код так, щоб у ньому використовувалися операції +=, -=, *=, /=, ++, --.
//Кількість рядків коду не повинна змінитися. Код для переробки:
let num = 1;
 num += 12;
 num -= 14;
num *= 5;
num /= 7;
 num ++;
num --;