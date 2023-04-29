
const d = new Date(2023, 4, 20);  //date
console.log(d.getFullYear());


const number = Math.ceil(9.12);   //big
console.log(number);

const number1 = Math.floor(9.12) ;  //small 
console.log(number1);

const number2 = Math.round(9.6);  //correct 
console.log(number2);

const number3 = Math.abs(-8);  //absolute value
console.log(number3);

const number4 = [3, 5, -5, 7];  //smallest value
const num = Math.min(...number4);
console.log(num);

const number5 = [2, 7, 9, -1];  //biggest value
const num1 = Math.max(...number5);
console.log(num1);

const str = '1.50';
const floatNumber = parseFloat(str); //transform string to float 
console.log(floatNumber + 4);

const str1 = '700';
const IntNumber = parseInt(str1);   //transform string to intger 
console.log(IntNumber + 20);

const number6 = Math.trunc(6.6);  //fracture removal
console.log(number6);

const number7 = 2.12;  //check if is it is integer        
const isInt = Number.isInteger(number7);  
console.log(isInt) 
const number8 = 2; 
const isInt1 = Number.isInteger(number8);
console.log(isInt1)

function square(nu){     //check if The value is non-numeric
if(isNaN(nu))
 return 'invalid input'
 return nu * nu
};
console.log(square('a'));  

const number9 = Math.pow(2, 5);  //add any square
console.log(number9);

const number10 = 16 ;       //square root
const SqrtNumber = Math.sqrt(number10)
console.log(SqrtNumber);

const number11 = -3 ;  //reference number
console.log(Math.sign(number11));

const number12 = -3/0;   //infinity
console.log(number12);

const randomNumber = Math.random();  //rondom number
console.log(randomNumber);

const bignumber = 777_777_777;
console.log(bignumber);

//let age = 13  //decimal(10)
//let age = 0xd  //hexdecimal(16)
//let age = 0o15 //octal(8)
//let age = 0b1101  //binary(2)

const number13 = 12     //binary    
console.log(number13.toString(2));


