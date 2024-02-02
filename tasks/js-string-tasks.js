// --------------------------- TASK: 1 -----------------------------

let sentence = 'I am a hard working person and also very lazy man.'

let alphabet = [];
for(letter of sentence){
    alphabet.push(letter);
}
// console.log(alphabet);

let aLetter = [];
for(let i = 0; i < alphabet.length; i++){
    if(alphabet[i] == 'a'){
        aLetter.push(alphabet[i]);
    }
}
// console.log(aLetter);

let aCount = aLetter.length;
console.log('Total a in the sentence:', aCount);


// --------------------------- TASK: 2 -----------------------------

let word = 'Authentication';
console.log(word.includes('A', 'a'));



// --------------------------- TASK: 3 -----------------------------

let mySentence = 'A quick brown fox jump over the lazy. Authentication needed.'
console.log(mySentence.includes('a' && 'e' && 'i' && 'o' && 'u'));



// --------------------------- TASK: 4 -----------------------------

let xWords = 'Fox, muskox, six, flax, lox, max, jukebox, XKE, vaxing, boxed';

xWords = xWords.split(',')
console.log(xWords);


let replaced = '';
for(let xWord of xWords){
    replaced = replaced + xWord.replace('x', 'y'); 
}
console.log(replaced);

