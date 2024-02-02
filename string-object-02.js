// --------------- split, slice, join, concat ------------------

let vowel = 'a, e, i, o, u';
console.log(vowel.split(','));
console.log(vowel.split('').join('|'));

let address = 'Brahmanbaria'
console.log(address.split('a'));



let sentence = 'I am a good and hardworking person.'
console.log(sentence.slice(2, 13));
console.log(sentence.split('a'));

let tech = ['html', 'css', 'daisy ui', 'javascript', 'react'];
console.log(tech.join(' + '));


let concat = sentence.concat(' '+ tech.join(', '));
console.log(concat);


