// 5 (filter(), reduce()) Необхідно отримати загальну суму балів студентів із id більше 120.
 /*let studentRecords = [
   { name: "John", id: 123, marks: 98 },
   { name: "Baba", id: 101, marks: 23 },
   { name: "yaga", id: 200, marks: 45 },
   { name: "Wick", id: 115, marks: 75 },
];
 
const total = studentRecords.filter(({ id }) => id > 120).reduce(function (acc, {marks}) {
    return marks + acc;
}, 0);
console.log(total);*/



// Напиши функцію конструктор User для створення користувача з такими властивостями
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. функція очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`

const User = function (userObj) {
  this.userName = userObj.name;
  this.age = userObj.age;
  this.numbersOfPost = userObj.numbersOfPost;
};

User.prototype.getInfo = function () {
  return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`
}
const user = new User({ name: "Poly", age: 26, numbersOfPost: 10 });
console.log(user.getInfo());


