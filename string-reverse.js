let sentence = "I am a mern-stack web developer."
console.log(sentence);

let reverse = [];

// ---------- for of ----------
for(let letter of sentence){
    reverse = letter + reverse;    
}
console.log(reverse);


// --------------- for loop -------------------
let reverse2 = ''
// for(let i = sentence.length-1; i >= 0; i--){
//     let letter = sentence[i]
//     reverse2 = reverse2 + letter
// }

for(let i = 0; i < sentence.length; i++){
    let letter = sentence[i]
    reverse2 = letter + reverse2
}

console.log(reverse2);



// shortcut way
let reversed = sentence.split('').reverse().join('');
console.log(reversed);