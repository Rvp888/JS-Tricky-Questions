
// 1. What is the output?

// function sayHi() {
//   console.log(name);
//   console.log(age);
//   var name = "Lydia";
//   let age = 21;
// }

// sayHi();

// Explaination:
// Within the function, we first declare the name variable with the var keyword. This means that the variable gets 
// hoisted (memory space is set up during the creation phase) with the default value of undefined, until we actually 
// get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log 
// the name variable, so it still holds the value of undefined.
//           Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized. They are not accessible 
// before the line we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variables 
// before they are declared, JavaScript throws a ReferenceError.



// 2. What is the output?

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
// }

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
// }


// Explaination: 
// Because of the event queue in JavaScript, the setTimeout callback function is called after the loop has been executed. 
// Since the variable i in the first loop was declared using the var keyword, this value was global. During the loop, 
// we incremented the value of i by 1 each time, using the unary operator ++. By the time the setTimeout callback function 
// was invoked, i was equal to 3 in the first example.

// In the second loop, the variable i was declared using the let keyword: variables declared with the let (and const) keyword 
// are block-scoped (a block is anything between { }). During each iteration, i will have a new value, and each value is scoped 
// inside the loop.



// 3. What is the output?

// const shape = {
//     radius: 10,
//     diameter() {
//         return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());


// Explaination: 
// Note that the value of diameter is a regular function, whereas the value of perimeter is an arrow function.
// With arrow functions, the this keyword refers to its current surrounding scope, unlike regular functions! 
// This means that when we call perimeter, it doesn't refer to the shape object, but to its surrounding scope (window for example).
// There is no value radius on that object, which returns undefined.



// 4. What is the output?

// console.log(+true);
// console.log(!"Lydia");

// Explaination: 
// The unary plus tries to convert an operand to a number. true is 1, and false is 0.
// The string 'Lydia' is a truthy value. What we're actually asking, is "is this truthy value falsy?". This returns false.



// 5. Choose the correct option.

// const bird = {
//     size: "small"
// };

// const mouse = {
//     name: "Mickey",
//     small: true
// };

// a. mouse.bird.size is not valid
// b. mouse[bird.size] is valid

// Explaination: 
// In JavaScript, all object keys are strings (unless it's a Symbol). Even though we might not type them as strings, 
// they are always converted into strings under the hood.
// JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket '[' and 
// keeps going until it finds the closing bracket ']'. Only then, it will evaluate the statement.

// mouse[bird.size]: First it evaluates bird.size, which is "small". mouse["small"] returns true.

// However, with dot notation, this doesn't happen. mouse does not have a key called bird, which means that mouse.bird is undefined. 
// Then, we ask for the size using dot notation: mouse.bird.size. Since mouse.bird is undefined, we're actually asking undefined.size. 
// This isn't valid, and will throw an error similar to Cannot read property "size" of undefined.




// 6. What is the output?

// let c = { greeting: "Hey!" };
// let d;

// d = c;
// c.greeting = "Hello";
// console.log(d.greeting);

// Explaination: 
// In JavaScript, all objects interact by reference when setting them equal to each other.
// First, variable c holds a value to an object. Later, we assign d with the same reference that c has to the object.
// When you change one object, you change all of them.




// 7. What is the output?

// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b);
// console.log(a === b);
// console.log(b === c);

// Explaination: 
// new Number() is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features 
// and is an object.

// When we use the == operator, it only checks whether it has the same value. They both have the value of 3, so it returns true.

// However, when we use the === operator, both value and type should be the same. It's not: new Number() is not a number, it's an object. 
// Both return false.




// 8. What is the output?

// class Chameleon {
//     static colorChange(newColor) {
//         this.newColor = newColor;
//         return this.newColor;
//     }

//     constructor({ newColor = "green" } = {}) {
//         this.newColor = newColor;
//     }
// }

// const freddie = new Chameleon({ newColor: "purple" });
// console.log(freddie.colorChange("orange"));

// Explaination: 
// The colorChange function is static. Static methods are designed to live only on the constructor in which they are created, 
// and cannot be passed down to any children. Since freddie is a child, the function is not passed down, and not available on 
// the freddie instance: a TypeError is thrown.




// 9. What is the output?

// let greeting;
// greetign = {}; // Typo!
// console.log(greetign);

// Explaination: 
// It logs the object, because we just created an empty object on the global object! When we mistyped greeting as greetign, 
// the JS interpreter actually saw this as global.greetign = {} (or window.greetign = {} in a browser).

// In order to avoid this, we can use "use strict". This makes sure that you have declared a variable before setting it equal to anything.




// 10. What happens when we do this ?

// function bark() {
//     console.log("Woof!");
// }

// bark.animal = "dog";

// Options: 1) Nothing, this is totally fine!   2) Syntax Error   3) "Woof"gets logged    4) Reference Error

// Explaination: 
// This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects)
// A function is a special type of object. The code you write yourself isn't the actual function. The function is an 
// object with properties. This property is invocable.




// 11. What is the output?

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// const member = new Person("Lydia", "Hallie");
// Person.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// };

// console.log(member.getFullName());

// Explaination: 
// You can't add properties to a constructor like you can with regular objects. If you want to add a feature to all objects at once, 
// you have to use the prototype instead. So in this case,

// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };
// would have made member.getFullName() work. Why is this beneficial? Say that we added this method to the constructor itself. 
// Maybe not every Person instance needed this method. This would waste a lot of memory space, since they would still have that property, 
// which takes of memory space for each instance. Instead, if we only add it to the prototype, we just have it at one spot in memory, 
// yet they all have access to it!




