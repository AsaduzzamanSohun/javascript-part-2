// Task 1:

var burgerPrice = 501;

if(burgerPrice > 500){
    console.log("You'll get a free coke");
}
else{
    console.log("coke: 30tk");
}

// Task 2:
let weight = 63.2;
let height = 1.69;
let bmi = weight/(height * height);

if(bmi < 18.5){
    console.log("You're underweight");
}
else if(bmi >= 18.5 && bmi <= 24.9){
    console.log("You're normal");
}
else if(bmi >= 25 && bmi <= 29.9){
    console.log("You're overweight");
}
else{
    console.log("Otherwise, you're obese");
}

// Task 3: 
let marks = 84;

if(marks >= 90 && marks <= 100){
    console.log(marks, '; You got A');
}
else if(marks >= 80 && marks <= 89){
    console.log(marks, '; You got B');
}
else if(marks >= 70 && marks <= 79){
    console.log(marks, '; You got C');
}
else if(marks >= 60 && marks <= 69){
    console.log(marks, '; You got D');
}
else if(marks >= 0 && marks <= 59){
    console.log(marks, '; You have failed');
}
else{
    console.log(marks, '; Invalid marks.');
}

// Marks 4:
// Nested if-else

let friendsResult = 88;
let myResult = 95;

if(myResult >= 80){ 

    if(friendsResult >= 80){
        console.log(friendsResult, ', Go for a lunch.');
    }

    if(friendsResult < 80 && friendsResult >= 60){
        console.log(friendsResult, ', tell your friend, good luck next time.');
    }
    else if(friendsResult < 60 && friendsResult >= 40){
        console.log(friendsResult, ", Keep your friend's message unseen.");
    }
    else if(friendsResult < 40){
        console.log(friendsResult, ', Block your friend.');
    }
}

if(myResult < 80){
    console.log(myResult, ', Go to home and sleep and act sad.');
}


// Task 5:

let num1 = 30;
let num2 = 49.9;

// if(num1 > num2){
//     console.log(num1*num1);
// }
// else{
//     console.log(num1 + num2);
// }

// Ternary operator
num1 > num2 ? console.log( num1*num1 ) : console.log( num1 + num2 );

// Task 6:

let age = 54;

if(age < 10){
    console.log("Free");
}
else if(age >= 10 && age <= 26){
    console.log("Students get a 50% discount.");
}
else if (age >= 60){
    console.log("Senior citizens get a 15% discount.");
}
else{
    console.log("Otherwise regular ticket fair 800.");
}