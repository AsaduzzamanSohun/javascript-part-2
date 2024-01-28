// -------------------------------> While <------------------------------------ //

// Task 1:
let commitment = "I will invest at least 6 hrs every single day for next 60 days!";

let count = 0;

while (count <= 60) {
    console.log(commitment);
    count++;
}


// Task 2:
let odd = 61;
while (odd <= 100) {

    if(odd % 2 != 0){
        console.log(odd);
    }

    odd++;

}

let even = 78;
while(even <= 98){
    if(even % 2 == 0){
        console.log(even);
    }
    even++;
}



// Task 3;

let odd1 = 81;
let oddSum = 0;

while(odd1 <= 131){
    if(odd1 % 2 != 0){
        oddSum = oddSum + odd1;
        console.log(oddSum);
    }
    odd1++;
}

let even1 = 206;
let evenSum = 0;

while(even1 <= 311){
    if(even1 % 2 == 0){
        evenSum = evenSum + even1;
        console.log(evenSum);
    }
    even1++;
}


// Task 4:
let number = 5;
let n = 1;
while (n <= 10) {
    console.log(number + " x " + n + " = " + number * n);
    n++;
}

// // Task 5:
let countDown = 21;
while (countDown >= 15) {
    console.log(countDown);
    countDown--;
}



// --------------------------------> For <---------------------------------- //
// Task 1;
let message = "I will invest at least 6 hrs every single day for next 60 days!"

for(let q = 0; q <= 60; q++){
    console.log(message);
}

// ----------------------------------------------------------------------------

// Task 2:
for(let odd = 61; odd <= 100; odd++){
    if(odd % 2 != 0){
        console.log(odd);
    }
}

for(let even = 78; even <= 98; even++){
    if(even % 2 == 0){
        console.log(even);
    }
}

// ----------------------------------------------------------------------------

// Task 3:
let oddSum1 = 0;
for(let odd = 91; odd <= 129; odd++){
    if(odd %2 != 0){
        oddSum1 = oddSum1 + odd;
        // console.log(odd);
        console.log(oddSum1);
    }
}


let evenSum1 = 0;
for(let even = 51; even <= 85; even++){
    if(even %2 == 0){
        evenSum1 = evenSum1 + even;
        // console.log(odd);
        console.log(evenSum1);
    }
}

// ---------------------------------------------------------------------------------------------------

// Task 4:

let number1 = 9;

for(let x = 0; x <= 10; x++){
    console.log(number1 + " x " + x + " = " + number1*x);
}

// // Task 5:
for(let x = 81; x >= 65; x--){
    console.log(x);
}


// ================================================================================

// break task

// Task 1:

for(let i = 0; i <= 200; i++){
    console.log(i);

    if(i == 100){
        break;
    }
}

// ----------------------------------------------------------------------------------

// Task 2:

let sum = 0;
let num = 0;
while(num <= 100){
    sum = sum + num;
    if(sum > 100){
        break;
    }
    console.log(sum);
    num++;
}

// -----------------------------------------------------------------------------------

// Task 3:

let sq = 0;
for(let n = 0; n <= 100; n++){
    sq = n*n
    if(sq > 100){
        break;
    }
    console.log(sq);
}


// ================================================================================================================================

// ----------------------------> Continue <--------------------------- //

// Task 1:
for(let even = 0; even <= 40; even++){
    if(even % 2 == 0){
        console.log(even);
        if(even % 2 != 0){
            continue;
        }
    }
}

// Task 2:
for(let odd = 55; (odd >= 55 && odd <= 85) || (odd % 2 != 0); odd++ ){

    if(odd % 5 == 0){
        console.log(odd);
    }
}

// =================================================================================================================================



