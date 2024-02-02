// --------------------- Task - 1 ---------------------

// reverse the array without reverse method.

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// technique: 1
let reverse = [];
for(let color of colors){
    reverse.unshift(color);
}
console.log(reverse);

// technique: 2
let reverse1 = [];
for(let i = 0; i < colors.length; i++){
    reverse1.unshift(colors[i])
}
console.log(reverse1);

// technique: 3
let reverse2 = [];
for(let i = colors.length - 1; i >= 0; i--){
    reverse2.push(colors[i]);
}
console.log(reverse2);



// --------------------- Task - 2 ---------------------

const numbers = [12, 98, 5, 41, 23, 41, 23, 78, 46];

let even = [];
for(let i = 0; i < numbers.length; i++){
    let number = numbers[i];

    if(number % 2 == 0){
        even.push(number);
    }
}
console.log(even);



// --------------------- Task - 3 ---------------------

// use for of and concatenate all the element of an array
let words = ['Tom', 'Tim', 'Tin', 'Tik'];

let addWord = '';
for(let word of words){
    addWord = addWord + word;
}
console.log(`'${addWord}'`);


// --------------------- Task - 3 ---------------------

// Reverse the words statement. only the word position
const statement = 'I am a hard working person';

let statementWords = '';
statementWords = statement.split(' ');

let wordReverse = '';
for(word of statementWords){
    wordReverse = word + ' ' + wordReverse;
}

console.log(`'${wordReverse}'`);