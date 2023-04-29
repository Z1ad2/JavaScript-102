let user = {
    firstNmame:'ziad',
    lastName:'waled'
}

let user1 = {
    firstNmame:'khalid',
    lastName:'hamdi'
}

let printFullName = function(age){
    console.log("hello, "+this.firstNmame+", "+this.lastName+". your age is: "+age);
}
printFullName.call(user, '22')     //call method
printFullName.call(user1, '21')

printFullName.apply(user, [22])    // apply method
printFullName.apply(user1, [21])

let newFunction = printFullName.bind(user1) //bind method
newFunction("25")

let result = (num1, num2) => {let result1 = num1 + num2} //arrow functions statements


(function(n){     //IFEs
    console.log(n)
})("Reem");

let obj = {
  
function1 : function(){                      //functions in object
    return console.log("First function")
},

function2 : () => {
    return console.log("Second function")
},

function3(){
    return console.log("Third function")
}
}

obj.function1()
obj.function2()
obj.function3()

function rectangleArea(w, l){    //arguments (5)
    let a = w * l;
    return a;
}
let area = rectangleArea(4, 2, );  
console.log(area)

function rectangleArea1(w, l=w,){     //(l=w)default value in Argument      
    let a = w * l;
    return a;
}
let area1 = rectangleArea1(4);  
console.log(area1)

function studentsNames(name1, name2, ...names){  //rest Parameter
    console.log(name1,name2,names)
    
}

studentsNames("ziad", "yazn", "khalid", "salman");

let studentsNames1 = function(name1, name2,name3,name4){
    console.log(name1,name2,name3,name4)
}
names = ["yazn", "salman", "khalid", "ziad"];
studentsNames1(...names)   //spread Operator


