//typescript

// 1:Types
let a: number;
let b : boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
let f: any [] = [1, true, 'a', false];

// typescript enum
enum Color {red =0, green =1, blue= 2, purple = 3};
let backgroundColor = Color.red;


//2:Type assertion
let message ;
message = 'abc';

//two approaches too type assertion first approach you see more
let endsWithC = (<string>message.endsWith('c');

//second approach
let alternateiveWay = (message as string).endsWith('c');


//3:arrow function

//javascript function
let log = function(message) {
  console.log(message);
}

//nice and clean way to define functions.

// arrow function => this is a one line example so can put all on one line.....In c# its called Lamda expression.
let doLog = (message) => console.log(message);

//example with empty parameters
let doBlog = () => console.log();


//4: Interface/ custom typescript

// example shows to implement interface:(do not want all the parameters specially more than two)

//instead of this cause of the x, and y we can narraw it down.
let drawPoint = (x, y) => {

}

//inline annotation: this is good but al litte verbose so it is easier to implement 'Interface'
let locationPoint = (point: {x: number, y: number }) => {
}

locationPoint ({
  x:1,
  y:2
})

// This is how to use interface properly// use PascalCase when using interface: Remember Interfaces are only for declaration nor for implementation.

interface Area {
  x:number,
  y: number
}


let drawArea = (area: Area) => {
}


drawArea ({
  x:1,
  y:2
})



//5: Classes

// two properties x, and y. With a fucntion called city. Like we said interface is for declarion not implementation.

// class has 3 memeber. 2 fields and a function.
// for this class we place the fucntions inside a class/therefore we call it a method.

class Point {
  x: number;
  y: number;

  draw() {
    //..
  }

  getDistance(another: Point) {
  //....
  }
}





//6: Objects.

//This point is a class. The point at the bottom of the class is an Object.
class Place {
  x: number;
  y:number;

  area() {
    console.log('X:' + this.x + 'Y:' +this.y);
  }

getWere(another: Place) {

 }

}

// = new Place // we initialize it. place here is an object.
let place = new Place();
place.x =1;
place.y = 2;
place.area();



//7: Constructors.Typescript unlike c# cannot have multiple constructors.
// ? makes parameters values optional. KNow are PointOne function can be used somewhere else with any parametets they need


class PointOne {
  x: number;
  y:number;

  //Constructors
constructor(x?: number, y?: number) {
  this.x = x;
  this.y = y;
}

  drawOne() {
    console.log('X:' + this.x + ',Y:' + this.y);
  }
}

let pointOne = new PointOne();
pointOne.drawOne();


//8: AccesModifiers: lets take example from above.
//typescript has 3 AccesModifiers Public, Private, Protected.
// because we added private to our fields when we call the foos method we cannot change its properties.
// can add accessmodifers on fields , properties and methods.
//by default assumes its public. 

class foo {
  //2 fields
private x: number;
private y:number;



constructor (x?: number, y?: number) {
  this.x = x;
  this.y = y;
}


//method
foos() {
  console.log('X:' + this.x + ',Y:' + this.y)
 }
}

let foo = new Foo (1, 2);
foo.foos();
