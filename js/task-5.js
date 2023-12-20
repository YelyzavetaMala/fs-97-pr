/*Поверніть об'єкт, в якому вказано кількість тегів.
*? Очікуваний результат {js: 3, nodejs: 3, html: 2, css: 2, react: 2}

 const tweets = [
   { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
   { id: "003", likes: 8, tags: ["css", "react"] },
   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
const result = tweets.reduce((obj, currentEl) => {
    console.log(obj);
    console.log(currentEl.tags);
    currentEl.tags.forEach((tag) => 
        (obj[tag] = (obj[tag] || 0) + 1;));
    return obj;
}, { });
console.log(result); */



/*повертати масив моделей автомобілі, відсортованих за зростанням року випуску
const cars = [
    { brand: "Mersedes", model: "Benz", year: 1995 },
    { brand: "Mazda", model: "Miata", year: 1985 },
    { brand: "Toyota", model: "Supra", year: 1980 },
    { brand: "Nissan", model: "Nismo", year: 2010 },
];
function getModelsSortedArr(arr) {
    return arr.toSorted((a, b) => a.year - b.year).map((car)=> car.model);}
console.log(getModelsSortedArr(cars));*/



/*Зробити кожне число масиву в степені 
const nums = [1, 2, 3, 4, 5];
const squaredNums = nums.map(num => num * num)
console.log(nums);
console.log(squaredNums);*/




function simpleMap(arr, callback) {
    const newArr = [];
    for (const el of arr) {
        newArr.push(callback(el));
    }
    return newArr;
} 
const res1 = simpleMap([1, 2, 3], (el) => el * el);
console.log(res1);



