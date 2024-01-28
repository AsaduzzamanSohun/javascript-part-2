// Task 1: You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

let moneyIHave = 1000;

let apple1Kg = 250;
let oranges1Kg = 350
let chocolatePrice = 100;

let totalBought = apple1Kg + oranges1Kg + chocolatePrice;
let moneyChanges = moneyIHave - totalBought;

console.log(moneyChanges);



// Task 2: Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

let mathematics = 75.25;
let biology = 65;
let chemistry = 80;
let physics = 35.45;
let bangla = 99.50;

let totalMarks = (mathematics + biology + chemistry + physics + bangla);
console.log("Total marks: " + totalMarks);

let averageMarks = totalMarks/5;
console.log("Average marks: " + averageMarks.toFixed(2)); 



// Task 3: You task is to divide the given number by 5 and show the remainder as the output.

let givenNumber = 119;
let divisibleBy = 5;
let remainder = givenNumber % divisibleBy;

console.log(remainder);



// Task 4: What will be the result of the following codes:

var a = isNaN('11');
console.log(a);
// Explanation: It'll return false. isNaN() stands for check the data if it is a number or not. Though '11' is a string but it can convert into a number.

var a = isNaN(2-10);
console.log(a);
// Explanation: It'll return false. 2-10 returns -8 that is a number. isNaN() stands for check the data if it is a number or not. As isNaN will return false.