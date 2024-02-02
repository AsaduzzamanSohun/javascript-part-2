function multiplyFour(a, b, c, d){
    let multiplication = a*b*c*d;
    return multiplication;
}

console.log(multiplyFour(4, 4, 4, 4));

// ----------------------------------------------------

function two_two(x){
    if(x % 2 != 0){
        return x * 2;
    }else{
        return x/2;
    }
}

console.log(two_two(5));


// ------------------------------------------------------

function make_avg(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    let avg = sum/arr.length;

    return avg;
}

let arr = [1, 2, 3, 4, 5];
console.log(make_avg(arr));


// ------------------------------------------------------

let binary = '10011010100011';

function count_zero(binary){
    let binary_split = [];

    for(let i = 0; i < binary.length; i++){
        if(binary[i] == '0'){
            binary_split.push(binary[i]);
        }
    }

    let totalZero = binary_split.length;

    return totalZero;
}

console.log(count_zero(binary));


// ------------------------------------------------------


function odd_even(number){
    if(number % 2 == 0){
        return 'Even';
    }
    else{
        return 'Odd';
    }
}

let number = 10;
console.log(odd_even(number));