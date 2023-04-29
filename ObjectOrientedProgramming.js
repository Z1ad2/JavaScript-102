 const car = {                 //object
    name:'optema',
    color: 'blue',
    model: '2017',
    currentSpeed: 0,
    move: function(speed){
    this.currentSpeed = speed                                                       //*this*
    return `this ${this.name} is moving at speed of ${this.currentSpeed} km per hour`
    },
    stop: function(){
    this.currentSpeed = 0
    return `the ${this.name} stopped`
    }

 }
 console.log(car.name);
 

 console.log(car.move(100))
 
 console.log(car.stop())

 class Car{                                              //*Class* 
   static numberofCars = 0   //static nymbers
   #currentSpeed      //private
   constructor(name, color, model ,currentSpeed){
      this.name = name
      this.collor = color
      this.model = model
      this.#currentSpeed = currentSpeed
      Car.incrementNumberofCars()
   }
   move(speed){                         //functions
      this.#currentSpeed = speed       
      return `this ${this.name} is moving at speed of ${this.#currentSpeed} km per hour`
   }
   stop(){                             //functions
      this.#currentSpeed = 0
      return `the ${this.name} stopped`
      }
  static incrementNumberofCars(){  //static numbers
   Car.numberofCars++
  }
 }
 const car1 = new Car('Optema', 'blue', '2017', 0);
 const car2 = new Car('Camry', 'black', '2018', 0);
 console.log(car1.move(100));
 console.log(car2.move(90));
 console.log(Car.numberofCars)

 const car3 = new Car('Mazda', 'white', '2019', 0);
 
 console.log(car3.move(100));
 console.log(Car.numberofCars);

class Animals{                           //inheritance
   constructor(name, color, speed){
   this.name= name
   this.color = color
   this.speed = speed
   }
   run(speed){                         
      this.speed = speed       
      return `this ${this.name} runs at speed of ${this.speed} km per hour and her color is${this,color}`
}
}

class Fox extends Animals{
 makeSound(){
      return 'bruh'
 }
 }

 class Cat extends Animals{ 
   makeSound(){
      return 'meow'
   }

 }

 const cat1 = new Cat('smokkey', 'gray', 20)
 const cat2= new Cat('muffen', 'browm', 14)

 const fox1 = new Fox('fluffy', 'orange', 23)
 const fox2= new Fox('smokkey', 'white', 25)

 console.log(cat1);
 console.log(cat2);
 console.log(fox1);
 console.log(fox2);

class animals{
   makeSound(){
      console,log('sound')
   }
}
 class cat extends Animals{    //overriding
   makeSound(){
      console.log('mew...')
   }

 }
const ccat = new cat()
ccat.makeSound()

function studentsNames(name1, name2, ...names){
   console.log(name1,name2)
   
}

studentsNames()