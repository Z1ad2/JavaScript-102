
function sum(FirstNumber, SecondNumber){
    return (FirstNumber + SecondNumber)
};


function sub(FirstNumber, SecondNumber){
    return FirstNumber - SecondNumber
};

function mull(FirstNumber, SecondNumber){
    return FirstNumber * SecondNumber
};

function oparation(FirstNumber, SecondNumber, opCallback){     //Callback first way
return `[${opCallback(FirstNumber, SecondNumber)}]`       // `[]` transform value to a string
};

console.log(oparation(5,2, sum));
console.log(oparation(5,2, sub));
console.log(oparation(5,2, mull));

console.log(oparation(6,2, function (FirstNumber, SecondNumber){   //Call back second way
    return FirstNumber / SecondNumber
}));

console.log(oparation(9, 9, (FirstNumber, SecondNumber) => FirstNumber + SecondNumber)) ;  //callback arrow functions

const sum1 = (FirstNumber, SecondNumber) => FirstNumber + SecondNumber  //callback outside arrow functions
console.log(oparation(5, 9, sum1));

function format(massage, formatcallback){          // Callback Function
    return formatcallback(massage)
}
function htmlformt(massage){
    return `<di>${massage}</di>`
}
function jsonFormat(massage){
    return `{'massage': '${massage}'}`
}
console.log(format('Welcome to JavaScrpt', jsonFormat))