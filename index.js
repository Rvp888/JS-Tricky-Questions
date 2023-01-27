
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




// 12. What is the output?

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// const lydia = new Person("Lydia", "Hallie");
// const sarah = Person("Sarah", "Smith");

// console.log(lydia);
// console.log(sarah);

// Explaination:
// For sarah, we didn't use the new keyword. When using new, it refers to the new empty object we create. 
// However, if you don't add new it refers to the global object!

// We said that this.firstName equals "Sarah" and this.lastName equals "Smith". What we actually did, is 
// defining global.firstName = 'Sarah' and global.lastName = 'Smith'. sarah itself is left undefined, 
// since we don't return a value from the Person function.




// 13. What are the three phases of event proprgation?

// a. Target > Capturing > Bubbling
// b. Bubbling > Target > Capturing
// c. Target > Bubbling > Capturing
// d. Capturing > Target > Bubbling

// Explaination:
// During the capturing phase, the event goes through the ancestor elements down to the target element. 
// It then reaches the target element, and bubbling begins.




// 14. All objects have prototypes.
// true  or  false

// Explaination:
// All objects have prototypes, except for the base object. The base object is the object created by the user, 
// or an object that is created using the new keyword. The base object has access to some methods and properties, 
// such as .toString. This is the reason why you can use built-in JavaScript methods! All of such methods are available 
// on the prototype. Although JavaScript can't find it directly on your object, it goes down the prototype chain and finds 
// it there, which makes it accessible for you.




// 15. What is the output?

// function sum(a, b) {
//     return a + b;
// }

// sum(1, "2");

// Explaination:
// JavaScript is a dynamically typed language: we don't specify what types certain variables are. Values can automatically be converted 
// into another type without you knowing, which is called implicit type coercion. Coercion is converting from one type into another.

// In this example, JavaScript converts the number 1 into a string, in order for the function to make sense and return a value. During the 
// addition of a numeric type (1) and a string type ('2'), the number is treated as a string. We can concatenate strings like "Hello" + "World", 
// so what's happening here is "1" + "2" which returns "12".




// 16. What is the output?

// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);

// Explaination:
// The postfix unary operator ++:
// Returns the value (this returns 0)
// Increments the value (number is now 1)

// The prefix unary operator ++:
// Increments the value (number is now 2)
// Returns the value (this returns 2)

// This returns 0 2 2.




// 17. What is the output?

// function getPersonInfo(one, two, three) {
//     console.log(one);
//     console.log(two);
//     console.log(three);
// }

// const person = "Lydia";
// const age = 21;

// getPersonInfo`${person}${age}`;   

// Explaination:
// If you use tagged template literals, the value of the first argument is always an array of the string values. 
// The remaining arguments get the values of the passed expressions!




// 18. What is the output?

// function checkAge(data) {
//     if (data === { age: 18 }) {
//         console.log("You are an adult!");
//     } else if (data == { age: 18 }) {
//         console.log("You are still an adult.");
//     } else {
//         console.log(`Hmm.. You don't have an age I guess`);
//     }
// }

// checkAge({ age: 18 });

// Explaination:
// When testing equality, primitives are compared by their value, while objects are compared by their reference. 
// JavaScript checks if the objects have a reference to the same location in memory.

// The two objects that we are comparing don't have that: the object we passed as a parameter refers to a different 
// location in memory than the object we used in order to check equality.

// This is why both { age: 18 } === { age: 18 } and { age: 18 } == { age: 18 } return false.




// 19. What is the output?

// function getAge(...args) {
//     console.log(typeof args);
// }

// getAge(21);

// Explaination:
// The rest parameter (...args.) lets us "collect" all remaining arguments into an array. 
// An array is an object, so typeof args returns "object".




// 20. What is the output?

// function getAge() {
//     "use strict";
//     age = 21;
//     console.log(age);
// }

// getAge();

// Explaination:
// With "use strict", you can make sure that you don't accidentally declare global variables. We never declared the variable age, 
// and since we use "use strict", it will throw a reference error. If we didn't use "use strict", it would have worked, since the 
// property age would have gotten added to the global object.




// 21. What's value of sum?

// const sum = eval("10*10+5");
// console.log(sum);

// Explaination:
// eval evaluates codes that's passed as a string. If it's an expression, like in this case, it evaluates the expression. 
// The expression is 10 * 10 + 5. This returns the number 105.




// 22. How long is cool_secret accessible?

// sessionStorage.setItem("cool_secret", 123);

// a. Forever, the data doesn't get lost.
// b. When the user closes the tab.
// c. When the user closes the entire browser, not only the tab.
// d. When the user shuts off their computer.

// Explaination:
// The data stored in sessionStorage is removed after closing the tab.
// If you used localStorage, the data would've been there forever, unless for example localStorage.clear() is invoked.




// 23. What is the output?

// var num = 8;
// var num = 10;

// console.log(num);

// Explaination:
// With the var keyword, you can declare multiple variables with the same name. The variable will then hold the latest value.
// You cannot do this with let or const since they're block-scoped.




// 24. What is the output?

// const obj = { 1: "a", 2: "b", 3: "c" };
// const set = new Set([1, 2, 3, 4, 5]);

// obj.hasOwnProperty("1");
// obj.hasOwnProperty(1);
// set.has("1");
// set.has(1);

// Explaination:
// All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. T
// his is why obj.hasOwnProperty('1') also returns true.

// It doesn't work that way for a set. There is no '1' in our set: set.has('1') returns false. It has the numeric type 1, 
// set.has(1) returns true.




// 25. What is the output?

// const obj = { a: "one", b: "two", a: "three" };
// console.log(obj);

// Explaination:
// If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.




// 26. The JavaScript global execution context creates two things for you: the global object, and the "this" keyword.

// a. true
// b. false
// c. it depends

// Explaination:
// true
// The base execution context is the global execution context: it's what's accessible everywhere in your code.




// 27. What is the output?

// for (let i = 1; i < 5; i++) {
//     if (i === 3) continue;
//     console.log(i);
// }

// Explaination:
// The continue statement skips an iteration if a certain condition returns true.




// 28. What is the output?

// String.prototype.giveLydiaPizza = () => {
//     return "Just give Lydia pizza already!";
// };

// const name = "Lydia";

// name.giveLydiaPizza();

// a. "Just give Lydia pizza already!"
// b. TypeError: not a function
// c. SyntaxError
// d. undefined

// Explaination:
// String is a built-in constructor, which we can add properties to. I just added a method to its prototype. 
// Primitive strings are automatically converted into a string object, generated by the string prototype function. 
// So, all strings (string objects) have access to that method!




// 29. What is the output?

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);

// a. 123
// b. 456
// c. undefined
// d. ReferenceError

// Explaination:
// Object keys are automatically converted into strings. We are trying to set an object as a key to object a, with the value of 123.

// However, when we stringify an object, it becomes "[object Object]". So what we are saying here, is that a["object Object"] = 123. 
// Then, we can try to do the same again. c is another object that we are implicitly stringifying. So then, a["object Object"] = 456.

// Then, we log a[b], which is actually a["object Object"]. We just set that to 456, so it returns 456.




// 30. What is the output?

// const foo = () => console.log("First");
// const bar = () => setTimeout(() => console.log("Second"));
// const baz = () => console.log("Third");

// bar();
// foo();
// baz();

// Explaination:
// We have a setTimeout function and invoked it first. Yet, it was logged last.

// This is because in browsers, we don't just have the runtime engine, we also have something called a WebAPI. 
// The WebAPI gives us the setTimeout function to start with, and for example the DOM.

// After the callback is pushed to the WebAPI, the setTimeout function itself (but not the callback!) is popped off the stack.

// Now, foo gets invoked, and "First" is being logged.

// foo is popped off the stack, and baz gets invoked. "Third" gets logged.

// The WebAPI can't just add stuff to the stack whenever it's ready. Instead, it pushes the callback function to something called the queue.

// This is where an event loop starts to work. An event loop looks at the stack and task queue. If the stack is empty, it takes the first 
// thing on the queue and pushes it onto the stack.

// bar gets invoked, "Second" gets logged, and it's popped off the stack.


