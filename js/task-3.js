// 5 (filter(), reduce()) Необхідно отримати загальну суму балів студентів із id більше 120.
 let studentRecords = [
   { name: "John", id: 123, marks: 98 },
   { name: "Baba", id: 101, marks: 23 },
   { name: "yaga", id: 200, marks: 45 },
   { name: "Wick", id: 115, marks: 75 },
];
 
const total = studentRecords.filter(({ id }) => id > 120).reduce(function (acc, {marks}) {
    return marks + acc;
}, 0);
console.log(total);