const colors = ['red' , 'green', 'blue'];           //for each
colors.forEach(function(currentValue, index, array){
console.log(index, currentValue,)
});

const ages = [11, 13 ,25 ,15, 12];              //some on condetion

const Hasadult = ages.some(function(element){
    return element >= 18
});
console.log(Hasadult)

const ages1 = [17, 23 ,25 ,24, 29];         //every check all elments
const areAdult = ages1.every(function(element1){
    return element1 >= 18
});
console.log(areAdult);

const colors1 = ['red' , 'green', 'blue'];  //includes
const isContainblue = colors1.includes('blue');
console.log(isContainblue);

const colors2 = ['red', 'green', 'blue', 'green'];  //indexOF ---------->
const index = colors2.indexOf('green' ,2);  //(2)starts from
console.log(index);

const colors3 = ['red', 'green', 'blue', 'green'];  //lastindexOF  <------------
const index2 = colors3.lastIndexOf('green', 2);
console.log(index2);

const ages2 = [14, 16, 18, 20];           //findindex
index3 = ages2.findIndex(function(element){
 return element >= 18
});
console.log(index3)

const numbers = [11, 7, 9, 10];   //find
const el = numbers.find(function(element){
return element % 3 === 0
});
console.log(el);

const numbers1 = [1, 2, 4, 5, 7, 8];  //filter
const evennumber = numbers1.filter(function(currentValue){
return currentValue % 2 === 0
});
console.log(evennumber)

const Primarycolers = ['red', 'green', 'blue', 'green'];    //concat (marge between 2 arrays)
const Seconderycolors = ['black', 'white', 'purple', 'orange'];

const colors4 = Primarycolers.concat(Seconderycolors, 'yellow'); //add more colors
console.log(colors4);

const colors5 = ['black', 'white', 'purple', 'orange', 'red'];  //slice
const brightcolers = colors5.slice(1, 4)
console.log(brightcolers);

const colors6 = ['black', 'white', 'purple', 'orange', 'red'];  //splice
colors6.splice(1, 2, 'gray', 'yellow');   //(start, amout)  also placed
console.log(colors6);

const colors7 = ['black', 'white', 'purple', 'orange', 'red']; //join
const strcolors = colors7.join('-');
console.log(strcolors);

const colors8 = ['black', 'white', 'purple', 'orange', 'red']; //sort
const numbers2 = [720, 900, 1000];
colors8.sort();
console.log(colors8);
numbers2.sort();
console.log(numbers2);

const colors9 = ['black', 'white', 'purple', 'orange', 'red'];
colors9.reverse();
console.log(colors9);

const numbers3 = [5, 8, 9]; //map
const squareNumbers = numbers3.map(function(currentValue){
return currentValue * currentValue
});
console.log(squareNumbers);

const colors10= 'black ; white ; orange ; red'; //split
const arrcolors = colors10.split(' ; ', 3); //take 3 elemnts
console.log(arrcolors);

const numbers4 = [1, 2, 4, 3, 7, 8];  // reduce
const total = numbers4.reduce(function(accumleter, currentValue, index){
return accumleter + currentValue
}, 100) ;  // accumleter value
console.log(total);

