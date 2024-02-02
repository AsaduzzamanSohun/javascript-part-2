// -------------------------- String ------------------------------

let allPhabet = 'Quick brown fox jump over the lazy dog';
console.log(allPhabet);

// console.log(allPhabet[6]); // String is immutable

// for(let i = 0; i < allPhabet.length; i++){
//     let myString = allPhabet[i];
//     console.log(myString);
// }


// -------------------------- Uppercase & Lowercase -----------------------

let subject = "Chemistry";
let book = "chemIsTry";

// if(subject == book){
//     console.log("I'm reading book after aibar porikkhai fatai felmu.");
// }
// else{
//     console.log("hudai hudai pristha ultai ar vat khawar jonno.");
// }

if(subject.toLowerCase() == book.toLowerCase()){
    console.log("I'm reading book after aibar porikkhai fatai felmu.");
}
else{
    console.log("hudai hudai pristha ultai ar vat khawar jonno.");
}



// ----------------------------- trim ------------------------------

let glass = '  water ';
let sea = ' water    ';

console.log(glass.length);
console.log(sea.length);

// if(glass == sea){
//     console.log('panir opor naam jibon');
// }
// else{
//     console.log('somudrer pani khawa jai na');
// }

if(glass.trim() == sea.trim()){
    console.log('panir opor naam jibon');
}
else{
    console.log('somudrer pani khawa jai na');
}




