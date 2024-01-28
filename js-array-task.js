// 1. Declare an array
//     Declare an array with 5 elements containing fruits
//     console log the 3rd index element
//     change the value of the 2nd index element to jambura
//     console log the final array

let fruits = ['Apple', 'Orange', 'Litchi', 'Blue Berry', 'Kiwi'];
console.log(fruits[3]);
fruits[2] = 'Jambura';
console.log(fruits);



// 2. Add or remove elements
//     Declare an array of 3 tourist destinations
//     Add a new tourist destination to your tourist array
//     Add two more to your array
//     Remove the last tourist destination you have added
//     display the final array as output

let touristDestination = ['Paris', 'Venice', 'New York'];
console.log(touristDestination);

touristDestination.push('London');
console.log(touristDestination);

touristDestination.push('Rome', 'Miami');
console.log(touristDestination);

touristDestination.pop();
console.log(touristDestination);



// 3. Checking Array Membership with ‘includes’
// Instructions:
//     Create an array of books containing different book.
//     Use the includes method to check if the array contains a javascript book.
//     Print a message to the console indicating whether the element is present in the array or not.

let books = ['Java book', 'ML book', 'Novel book', 'Sci-fi book', 'Javascript book', 'Story book'];

let hasJavascriptBook = books.includes('Javascript book');
console.log('JS book exists: ', hasJavascriptBook);



// 4. Checking if it's an Array
// Instructions:
//     Create different variables, each containing either an array or a non-array value.
//     Now use isArray to check if each variable is an array.
//     Print a message to the console indicating whether each variable is an array or not.

let var1 = (9, 2, 4);
let var2 = "String";
let var3 = ['a', 's', 'a', 'd'];
let var4 = '["This", "is", a, "array"]';
let var5 = [[[9, 7]], '3'];
let var6 = [];
let var7 = 'Sohun';
let var8 = ['1', {}, 3, 'js', [[[]]]];

console.log(Array.isArray(var1));
console.log(Array.isArray(var2));
console.log(Array.isArray(var3));
console.log(Array.isArray(var4));
console.log(Array.isArray(var5));
console.log(Array.isArray(var6));
console.log(Array.isArray(var7));
console.log(Array.isArray(var8));


// 5. Combining Arrays
// Instructions:
//     Create two arrays of your choice.
//     Use the concat method to combine the two arrays into a new array.
//     Print both the original arrays and the combined array using console.log().

let skills = ['Web Development', 'Android Development', 'Machine Learning', 'Data Science'];
let technologies = ['Java', 'Kotlin', 'Next.js', 'Javascript', 'MERN-Stack', 'Typescript', 'Firebase'];

let combinedArray = skills.concat(technologies);
console.log(combinedArray);