'use strict';

let hasDriverLicense= false;
const passTest=true;

if(passTest){
hasDriverLicense=true

}
if(hasDriverLicense){
    console.log(
        "enjoy your driving and be safe"
    );
}


// Function


// define a fuction
// function car(){

// console.log("this is my car");

// }

// // calling a function
// car();
// car();
// car();

// function declearation
function addition(firstNumber,secondNumber){

const sum=firstNumber+secondNumber;
return sum;

}
const total=addition('10',20)
console.log(total);

// function expression

const ageCal=function (birthyear){

    return(2024-birthyear);
}
const age1=ageCal(1999);
console.log(age1);

// arrow function

const age2=birthyear=>2024-birthyear; //this is only one parameter

const age=age2(1998);
console.log(age);



const yearUntilRetirementAge=birthyear=>{

const currentAge= 2024-birthyear;
const retirement=65-currentAge;
return retirement;

}

const retirementAge=yearUntilRetirementAge(1991);
console.log(retirementAge);

// Array

const friend1='Ram';
const friend2='shyam';
const friend3='krishna';
const friend4='john';
const friend5='joseph';

const friends=['Ram','shyam','krishna','john','joseph'];
console.log(friends);

const years=[20,21,22,23,25];
console.log(years);

const day= new Array('monday','tuesday','wednesday','thursday','friday','saturday','sunday');
console.log(day);

//extract data from array

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);
console.log(friends[4]);

// To find the length of array

console.log(friends.length);
console.log(friends[friends.length-1]);

// array method

friends.push('peter'); //added new element in the last (friend.length -1) index
console.log(friends); 

friends.unshift('shahbaz'); //added new element in the start (0 index)
console.log(friends); 


friends.pop(); //remove element  from the last (friend.length -1) index
console.log(friends);


friends.shift(); //remove first element in the array
console.log(friends);

// To find the index of the element

console.log(friends.indexOf('krishna'));


// To check the element is in the array or not

console.log(friends.includes('krishna')); //true - its means krishna is in the array
console.log(friends.includes('bob')); //false - its means bob is not in the array




// object


// this is how creatred a object

const car= {
    carName: 'Tata punch',
    carOwnerName: 'Shyam lal',
    company: 'Tata',
    modal:'2024',
    color:'white',
    companyOwnerName:'Ratan Tata',
    yearsOfServicing: ['2020','2021','2022','2023','2024']

};


console.log(car);

// how to extract a data

console.log(car.carOwnerName);
console.log(Number(car.modal));
console.log(car.yearsOfServicing[1]);

car.type='compact';
console.log(car);



// object method

const shahbaz={

firstName: 'shahbaz',
lastName: 'shamshi',
birthyear: 2001,
job:'software engineer',
friend: ['abc','xyz','txy'],
hasDriverLicense: false,
calAge: function(birthyear){

    return 2024-birthyear
}


};

console.log(shahbaz.calAge(2001)); 


