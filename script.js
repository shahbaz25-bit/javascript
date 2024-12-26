// Assignment-1

let country="india";
let continent="asia";
let population="1.4b";
console.log("country:", country);
console.log("continent:", continent);

console.log("population:", population);



// let,var and const


// the value of let variable should be change

let firstName="ram";
console.log("firstname: ",firstName);

firstName="Shyam"
console.log("firstname: ",firstName);

// the value of const variable should never be change at any point

const lastName="sharma";
console.log("lastname: ",lastName);

// lastName="panday";
// console.log("lastname: ",lastName); 

// error message -Uncaught TypeError: Assignment to constant variable.
//    at script.js:29:9


// var is similar to let like both value should change at any point but they both having small diffrennce that we doing earlier lesson right now we only use let or const


//basic operator

// 1.Assignment operator

let x=10+5;
console.log(x); //x=15

x+=10; //x=x+10
console.log(x);//x=25

x*=4;//x=x*4
console.log(x);//x=100

x/=4;//x=x/4;
console.log(x);//x=25


x++; //x=x+1
console.log(x);//x=26

x--;//x=x-1
console.log(x);//x=25


// 2.comparison operator

// the comparison ooperator should give boolean value to compare two value


// operotor precedence


const currentYear=2024;
const ageRam=currentYear-1999;
const ageShyam=currentYear-1996;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence


// codingChallenge-1


const markMass=78;
const markHeight=1.69;

const johnMass=95;
const johnHeight=1.88;

const markBMI=markMass/markHeight**2;
const johnBMI=johnMass/johnHeight**2;

const markHigherBMI=markBMI>johnBMI;
console.log("Mark has a higher BMI than John: ",markHigherBMI);


// codingChallenge-2

if(markBMI>johnBMI){

console.log("Mark's BMI is higher than John's!");
}

else{
    console.log("John's BMI is higher than Mark's!");

}


if(markBMI>johnBMI){

    console.log(`Mark's BMI (${markBMI})  is higher than John's (${johnBMI})`);
    }
    
    else{
        console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI}) !`);
    
    }


// type conversion

const year='2024';

console.log(year+18);
console.log(Number(year)+18); //here i can change string into number

// 5 falsy value: 0, "", NaN, undefined, null

console.log(Boolean(0)); //false
console.log(Boolean(""));//false
console.log(Boolean(NaN));//false
console.log(Boolean(undefined));//false
console.log(Boolean(null));//false

console.log(Boolean("john"));//true
console.log(Boolean({}));//true


const money=0;
if(money){
    console.log("don't spend it all!");
}

else{

    console.log("do job!");
}

// equality operator == or ===

const age=18;
if(age ===18){

    console.log("true");
}



















 




