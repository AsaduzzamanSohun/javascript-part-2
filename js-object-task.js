// Task 1:

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

let targetedValue = colors["golden rod"];
console.log(targetedValue);


// Task 2:

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

car.capacity = 5

console.log(car);


// Task 3:
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

let displayMarks = student.physics.marks;
console.log(displayMarks);

// Task 4:
let student1 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

let countNumberOfProperties = Object.keys(student1).length;
console.log(countNumberOfProperties);


// Task 5:

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for(let key in myObject){

    let output = `${key}: ${myObject[key] } | type: ${typeof(myObject[key])}`;

    console.log(output);

}

