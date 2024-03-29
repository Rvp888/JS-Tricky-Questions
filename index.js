
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




// 31. What is the event.target when clicking the button?

{/* <div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div> */}

// a. Outer div     b. Inner div     c. button    d. An array of all nested elements

// Explaination:
// The deepest nested element that caused the event is the target of the event(button). You can stop bubbling by event.stopPropagation.




// 32. When you click the paragraph, what's the logged output?

{/* <div onclick="console.log('div')">
  <p onclick="console.log('p')">
    Click here!
  </p>
</div> */}

// a. p div     b. div p      c. p      d. div

// Explaination:
// If we click p, we see two logs: p and div. During event propagation, there are 3 phases: capturing, target, and bubbling. 
// By default, event handlers are executed in the bubbling phase (unless you set useCapture to true). It goes from the deepest 
// nested element outwards.




// 33. What is the output?

// const person = { name: "Lydia" };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 21));
// console.log(sayHi.bind(person, 21));

// Explaination:
// With both, we can pass the object to which we want the this keyword to refer to. However, .call is also executed immediately!

// .bind. returns a copy of the function, but with a bound context! It is not executed immediately.




// 34. What is the output?

// function sayHi() {
//     return (() => 0)();
// }

// console.log(typeof sayHi());

// a. object    b. number    c. function    d. undefined

// Explaination:
// The sayHi function returns the returned value of the immediately invoked function (IIFE). This function returned 0, which is type "number".

// FYI: there are only 7 built-in types: null, undefined, boolean, number, string, object, and symbol. 
// "function" is not a type, since functions are objects, it's of type "object".




// 35. Which of these values are falsy?

// 0;
// new Number(0);
// ("");
// (" ");
// new Boolean(false);
// undefined;  

// Explaination:
// There are only six falsy values:
// undefined
// null
// NaN
// 0
// '' (empty string)
// false

// Function constructors, like new Number and new Boolean are truthy.




// 36. What is the output?

// console.log(typeof typeof 1);

// Explaination:
// typeof 1 returns "number". typeof "number" returns "string".




// 37. What is the output?

// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers);

// Explaination:
// When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called "empty slots". 
// These actually have the value of undefined, but you will see something like:

// [1, 2, 3, 7 x empty, 11]

// depending on where you run it (it's different for every browser, node, etc.)




// 38. What is the output?

// (() => {
//     let x, y;
//     try {
//         throw new Error();
//     } catch (x) {
//         (x = 1), (y = 2);
//         console.log(x);
//     }
//     console.log(x);
//     console.log(y);
// })();

// Explaination:
// The catch block receives the argument x. This is not the same x as the variable when we pass arguments. 
// This variable x is block-scoped.

// Later, we set this block-scoped variable equal to 1, and set the value of the variable y. 
// Now, we log the block-scoped variable x, which is equal to 1.

// Outside of the catch block, x is still undefined, and y is 2. When we want to console.log(x) outside of the catch block, 
// it returns undefined, and y returns 2.




// 39. Everything in JavaScript is either a _____
//  a. primitive or object
//  b. function or object
//  c. trick question! only objects
//  d. number or object

// Explaination:
// JavaScript only has primitive types and objects.
// Primitive types are boolean, null, undefined, bigint, number, string, and symbol.

// What differentiates a primitive from an object is that primitives do not have any properties or methods; 
// however, you'll note that 'foo'.toUpperCase() evaluates to 'FOO' and does not result in a TypeError. 
// This is because when you try to access a property or method on a primitive like a string, JavaScript 
// will implicitly wrap the object using one of the wrapper classes, i.e. String, and then immediately 
// discard the wrapper after the expression evaluates. All primitives except for null and undefined exhibit this behaviour.




// 40. What is the output?

// [[0, 1], [2, 3]].reduce(
//     (acc, cur) => {
//         return acc.concat(cur);
//     },
//     [1, 2]
// );

// a. [0,1,2,3,1,2]
// b. [6,1,2]
// c. [1,2,0,1,2,3]
// d. [1,2,6]

// Explaination:
// [1, 2] is our initial value. This is the value we start with, and the value of the very first acc. 
// During the first round, acc is [1,2], and cur is [0, 1]. We concatenate them, which results in [1, 2, 0, 1].

// Then, [1, 2, 0, 1] is acc and [2, 3] is cur. We concatenate them, and get [1, 2, 0, 1, 2, 3].




// 41. What is the output?

// !!null;
// !!"";
// !!1;

// a. false true false
// b. false false true
// c. false true true
// d. true true false

// Explaination:
// null is falsy. !null returns true. !true returns false.

// "" is falsy. !"" returns true. !true returns false.

// 1 is truthy. !1 returns false. !false returns true.




// 42. What does the setInterval method return in the browser?

// setInterval(() => console.log("Hi"), 1000);

// a. a unique id
// b. the amount of milliseconds specified
// c. the passed function
// d. undefined

// Explaination:
// It returns a unique id. This id can be used to clear that interval with the clearInterval() function.




// 43. What does this return?

// [..."Lydia"];

// a. ["L","y","d","i","a"]
// b. ["Lydia"]
// c. [[],"Lydia"]
// d. [["L","y","d","i","a"]]

// Explaination:
// A string is an iterable. The spread operator maps every character of an iterable to one element.




// 44. What is the output?

// function* generator(i) {
//   yield i;
//   yield i * 2;
// }

// const gen = generator(10);

// console.log(gen.next().value);
// console.log(gen.next().value);




// 45. What does this return?

// const firstPromise = new Promise((res, rej) => {
//   setTimeout(res, 500, "one");
// });

// const secondPromise = new Promise((res, rej) => {
//   setTimeout(res, 100, "two");
// });

// Promise.race([firstPromise, secondPromise]).then(res => console.log(res));

// Explaination:
// When we pass multiple promises to the Promise.race method, it resolves/rejects the first promise that resolves/rejects. 
// To the setTimeout method, we pass a timer: 500ms for the first promise (firstPromise), and 100ms for the second promise (secondPromise). 
// This means that the secondPromise resolves first with the value of 'two'. res now holds the value of 'two', which gets logged.




// 46. What is the output?

// let person = { name: "Lydia" };
// const members = [person];
// person = null;

// console.log(members);

// Explaination:
// First, we declare a variable person with the value of an object that has a name property.
// Then, we declare a variable called members. We set the first element of that array equal to the value of the person variable. 
// Objects interact by reference when setting them equal to each other. When you assign a reference from one variable to another, 
// you make a copy of that reference. (note that they don't have the same reference!)

// Then, we set the variable person equal to null.
// We are only modifying the value of the person variable, and not the first element in the array, since that element has a different
// (copied) reference to the object. The first element in members still holds its reference to the original object. When we log the 
// members array, the first element still holds the value of the object, which gets logged.




// 47. What is the output?

// const person = {
//   name: "Lydia",
//   age: 21
// };

// for (const item in person) {
//   console.log(item);
// }

// Explaination:
// With a for-in loop, we can iterate through object keys, in this case name and age. Under the hood, 
// object keys are strings (if they're not a Symbol). On every loop, we set the value of item equal to 
// the current key it’s iterating over. First, item is equal to name, and gets logged. Then, item is equal 
// to age, which gets logged.




// 48. What is the output?

// console.log(3 + 4 + "5");

// a. "345"   b. "75"   c. 12   d. "12"

// Explaination:
// Operator associativity is the order in which the compiler evaluates the expressions, either left-to-right or right-to-left. 
// This only happens if all operators have the same precedence. We only have one type of operator: +. For addition, the associativity 
// is left-to-right.

// 3 + 4 gets evaluated first. This results in the number 7.

// 7 + '5' results in "75" because of coercion. JavaScript converts the number 7 into a string, see question 15. 
// We can concatenate two strings using the +operator. "7" + "5" results in "75".




// 49. What's the value of num?

// const num = parseInt("7*6", 10);

// a. 42   b. "42"   c. 7   d. NaN

// Explaination:
// Only the first numbers in the string is returned. Based on the radix (the second argument in order to specify what type of number 
// we want to parse it to: base 10, hexadecimal, octal, binary, etc.), the parseInt checks whether the characters in the string are valid. 
// Once it encounters a character that isn't a valid number in the radix, it stops parsing and ignores the following characters.

// * is not a valid number. It only parses "7" into the decimal 7. num now holds the value of 7.




// 50. What is the output?

// [1, 2, 3].map(num => {
//   if (typeof num === "number") return;
//   return num * 2;
// });

// a. []
// b. [null, null, null]
// c. [undefined, undefined, undefined]
// d. [3 x empty]

// When mapping over the array, the value of num is equal to the element it’s currently looping over. In this case, the elements are numbers, 
// so the condition of the if statement typeof num === "number" returns true. The map function creates a new array and inserts the values returned 
// from the function.

// However, we don’t return a value. When we don’t return a value from the function, the function returns undefined. For every element in the array, 
// the function block gets called, so for each element we return undefined.




// 51. What is the output?

// function getInfo(member, year) {
//   member.name = "Lydia";
//   year = "1998";
// }

// const person = { name: "Sarah" };
// const birthYear = "1997";

// getInfo(person, birthYear);

// console.log(person, birthYear);

// a. { name: "Lydia" }, "1997"
// b. { name: "Sarah" }, "1998"
// c. { name: "Lydia" }, "1998"
// d. { name: "Sarah" }, "1997"




// 52. What is the output?

// function greeting() {
//   throw "Hello world!";
// }

// function sayHi() {
//   try {
//     const data = greeting();
//     console.log("It worked!", data);
//   } catch (e) {
//     console.log("Oh no an error:", e);
//   }
// }

// sayHi();

// Explaination: 
// With the throw statement, we can create custom errors. With this statement, you can throw exceptions. An exception can be a string, a number, 
// a boolean or an object. In this case, our exception is the string 'Hello world'.

// With the catch statement, we can specify what to do if an exception is thrown in the try block. An exception is thrown: the string 'Hello world'. 
// e is now equal to that string, which we log. This results in 'Oh an error: Hello world'.




// 53. What is the output?

// function Car() {
//   this.make = "Lamborghini";
//   return { make: "Maserati" };
// }

// const myCar = new Car();
// console.log(myCar.make);

// Explaination: 
// When you return a property, the value of the property is equal to the returned value, not the value set in the constructor function. 
// We return the string "Maserati", so myCar.make is equal to "Maserati".




// 54. What is the output?

// (() => {
//   let x = (y = 10);
// })();

// console.log(typeof x);
// console.log(typeof y);

// a. "undefined", "number"
// b. "number", "number"
// c. "object", "number"
// d. "number", "undefined"

// Explaination: 
// let x = y = 10; is actually shorthand for:

// y = 10;
// let x = y;
// When we set y equal to 10, we actually add a property y to the global object (window in browser, global in Node). 
// In a browser, window.y is now equal to 10.
// Then, we declare a variable x with the value of y, which is 10. Variables declared with the let keyword are block scoped, 
// they are only defined within the block they're declared in; the immediately-invoked function (IIFE) in this case. When we 
// use the typeof operator, the operand x is not defined: we are trying to access x outside of the block it's declared in. 
// This means that x is not defined. Values who haven't been assigned a value or declared are of type "undefined". 
// console.log(typeof x) returns "undefined".

// However, we created a global variable y when setting y equal to 10. This value is accessible anywhere in our code. y is defined, 
// and holds a value of type "number". console.log(typeof y) returns "number".




// 55. What is the output?

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// Dog.prototype.bark = function() {
//   console.log(`Woof I am ${this.name}`);
// };

// const pet = new Dog("Mara");

// pet.bark();

// delete Dog.prototype.bark;

// pet.bark();

// Explaination: 
// We can delete properties from objects using the delete keyword, also on the prototype. By deleting a property on the prototype, 
// it is not available anymore in the prototype chain. In this case, the bark function is not available anymore on the prototype after 
// delete Dog.prototype.bark, yet we still try to access it.

// When we try to invoke something that is not a function, a TypeError is thrown. In this case TypeError: pet.bark is not a function, 
// since pet.bark is undefined.




// 56. What is the output?

// const set = new Set([1, 1, 2, 3, 4]);

// console.log(set);

// Explaination: 
// The Set object is a collection of unique values: a value can only occur once in a set.

// We passed the iterable [1, 1, 2, 3, 4] with a duplicate value 1. Since we cannot have two of the same values in a set, 
// one of them is removed. This results in {1, 2, 3, 4}.




// 57. What is the output?

// counter.js
// let counter = 10;
// export default counter;

// Explaination: 
// An imported module is read-only: you cannot modify the imported module. Only the module that exports them can change its value.

// When we try to increment the value of myCounter, it throws an error: myCounter is read-only and cannot be modified.




// 58. What is the output?

// const name = "Lydia";
// age = 21;

// console.log(delete name);
// console.log(delete age);

// Explaination: 
// The delete operator returns a boolean value: true on a successful deletion, else it'll return false. 
// However, variables declared with the var, const or let keyword cannot be deleted using the delete operator.

// The name variable was declared with a const keyword, so its deletion is not successful: false is returned. 
// When we set age equal to 21, we actually added a property called age to the global object. You can successfully 
// delete properties from objects this way, also the global object, so delete age returns true.




// 59. What is the output?

// const numbers = [1, 2, 3, 4, 5];
// const [y] = numbers;

// console.log(y);

// Explaination: 
// The value of y is equal to the first value in the array, which is the number 1. When we log y, 1 is returned.




// 60. What is the output?

// const user = { name: "Lydia", age: 21 };
// const admin = { admin: true, ...user };

// console.log(admin);

// Explaination: 
// It's possible to combine objects using the spread operator .... It lets you create copies of the key/value pairs of one object, 
// and add them to another object. In this case, we create copies of the user object, and add them to the admin object. The admin 
// object now contains the copied key/value pairs, which results in { admin: true, name: "Lydia", age: 21 }.




// 61. What is the output?

// const person = { name: "Lydia" };

// Object.defineProperty(person, "age", { value: 21 });

// console.log(person);
// console.log(Object.keys(person));

// Explaination: 
// With the defineProperty method, we can add new properties to an object, or modify existing ones. When we add a property to an object 
// using the defineProperty method, they are by default not enumerable. The Object.keys method returns all enumerable property names 
// from an object, in this case only "name".

// Properties added using the defineProperty method are immutable by default. You can override this behavior using the writable, 
// configurable and enumerable properties. This way, the defineProperty method gives you a lot more control over the properties 
// you're adding to an object.




// 62. What is the output?

// const settings = {
//   username: "lydiahallie",
//   level: 19,
//   health: 90
// };

// const data = JSON.stringify(settings, ["level", "health"]);
// console.log(data);

// Explaination: 
// The second argument of JSON.stringify is the replacer. The replacer can either be a function or an array, and lets you control what 
// and how the values should be stringified.

// If the replacer is an array, only the property names included in the array will be added to the JSON string. In this case, only the 
// properties with the names "level" and "health" are included, "username" is excluded. data is now equal to "{"level":19, "health":90}".

// If the replacer is a function, this function gets called on every property in the object you're stringifying. The value returned 
// from this function will be the value of the property when it's added to the JSON string. If the value is undefined, this property 
// is excluded from the JSON string.




// 63. What is the output?

// let num = 10;

// const increaseNumber = () => num++;
// const increasePassedNumber = number => number++;

// const num1 = increaseNumber();
// const num2 = increasePassedNumber(num1);

// console.log(num1);
// console.log(num2);

// Explaination:
// The unary operator ++ first returns the value of the operand, then increments the value of the operand. The value of num1 is 10, 
// since the increaseNumber function first returns the value of num, which is 10, and only increments the value of num afterwards.

// num2 is 10, since we passed num1 to the increasePassedNumber. number is equal to 10(the value of num1. Again, the unary operator ++ 
//   first returns the value of the operand, then increments the value of the operand. The value of number is 10, so num2 is equal to 10.




// 64. What is the output?

// const value = { number: 10 };

// const multiply = (x = { ...value }) => {
//   console.log((x.number *= 2));
// };

// multiply();
// multiply();
// multiply(value);
// multiply(value);

// Explaination:
// In ES6, we can initialize parameters with a default value. The value of the parameter will be the default value, 
// if no other value has been passed to the function, or if the value of the parameter is "undefined". In this case, 
// we spread the properties of the value object into a new object, so x has the default value of { number: 10 }.

// The default argument is evaluated at call time! Every time we call the function, a new object is created. We invoke 
// the multiply function the first two times without passing a value: x has the default value of { number: 10 }. We then 
// log the multiplied value of that number, which is 20.

// The third time we invoke multiply, we do pass an argument: the object called value. The *= operator is actually shorthand 
// for x.number = x.number * 2: we modify the value of x.number, and log the multiplied value 20.

// The fourth time, we pass the value object again. x.number was previously modified to 20, so x.number *= 2 logs 40.




// 65. What is the output?

// [1, 2, 3, 4].reduce((x, y) => console.log(x, y));

// Explaination:
// The first argument that the reduce method receives is the accumulator, x in this case. The second argument is the current value, y. 
// With the reduce method, we execute a callback function on every element in the array, which could ultimately result in one single value.

// In this example, we are not returning any values, we are simply logging the values of the accumulator and the current value.

// The value of the accumulator is equal to the previously returned value of the callback function. If you don't pass the optional initialValue 
// argument to the reduce method, the accumulator is equal to the first element on the first call.

// On the first call, the accumulator (x) is 1, and the current value (y) is 2. We don't return from the callback function, we log the 
// accumulator and current value: 1 and 2 get logged.

// If you don't return a value from a function, it returns undefined. On the next call, the accumulator is undefined, and the current value is 3. 
// undefined and 3 get logged.

// On the fourth call, we again don't return from the callback function. The accumulator is again undefined, and the current value is 4. 
// undefined and 4 get logged.




// 66. With which constructor can we successfully extend the Dog class?

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// };

// class Labrador extends Dog {
//   // 1 
//   constructor(name, size) {
//     this.size = size;
//   }
//   // 2
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
//   // 3
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
//   // 4 
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }

// };

// Explaination:
// In a derived class, you cannot access the this keyword before calling super. If you try to do that, it will throw a ReferenceError: 1 and 4 
// would throw a reference error.

// With the super keyword, we call that parent class's constructor with the given arguments. The parent's constructor receives the name argument, 
// so we need to pass name to super.

// The Labrador class receives two arguments, name since it extends Dog, and size as an extra property on the Labrador class. They both need to be 
// passed to the constructor function on Labrador, which is done correctly using constructor 2.




// 67. What is the output?

// index.js
// console.log('running index.js');
// import { sum } from './sum.js';
// console.log(sum(1, 2));

// // sum.js
// console.log('running sum.js');
// export const sum = (a, b) => a + b;

// Explaination:
// With the import keyword, all imported modules are pre-parsed. This means that the imported modules get run first, the code in the 
// file which imports the module gets executed after.

// This is a difference between require() in CommonJS and import! With require(), you can load dependencies on demand while the code 
// is being run. If we would have used require instead of import, running index.js, running sum.js, 3 would have been logged to the console.




// 68. What is the output?

// console.log(Number(2) === Number(2))
// console.log(Boolean(false) === Boolean(false))
// console.log(Symbol('foo') === Symbol('foo'))

// Explaination:
// Every Symbol is entirely unique. The purpose of the argument passed to the Symbol is to give the Symbol a description. 
// The value of the Symbol is not dependent on the passed argument. As we test equality, we are creating two entirely 
// new symbols: the first Symbol('foo'), and the second Symbol('foo'). These two values are unique and not equal to each other, 
// Symbol('foo') === Symbol('foo') returns false.




// 69. What is the output?

// const name = "Lydia Hallie"
// console.log(name.padStart(13))
// console.log(name.padStart(2))

// Explaination:
// With the padStart method, we can add padding to the beginning of a string. The value passed to this method is the 
// total length of the string together with the padding. The string "Lydia Hallie" has a length of 12. name.padStart(13) 
// inserts 1 space at the start of the string, because 12 + 1 is 13.

// If the argument passed to the padStart method is smaller than the length of the array, no padding will be added.




// 70. What is the output?

// console.log("🥑" + "💻");

// Explaination:
// With the + operator, you can concatenate strings. In this case, we are concatenating the string "🥑" with the string "💻", resulting in "🥑💻".




// 71. How can we log the values that are commented out after the console.log statement?

// function* startGame() {
//   const answer = yield "Do you love JavaScript?";
//   if (answer !== "Yes") {
//     return "Oh wow... Guess we're gone here";
//   }
//   return "JavaScript loves you back ❤️";
// }

// const game = startGame();
// console.log(/* 1 */); // Do you love JavaScript?
// console.log(/* 2 */); // JavaScript loves you back ❤️

// Explaination:
// A generator function "pauses" its execution when it sees the yield keyword. First, we have to let the function yield 
// the string "Do you love JavaScript?", which can be done by calling game.next().value.

// Every line is executed, until it finds the first yield keyword. There is a yield keyword on the first line within the 
// function: the execution stops with the first yield! This means that the variable answer is not defined yet!

// When we call game.next("Yes").value, the previous yield is replaced with the value of the parameters passed to the next() function, 
// "Yes" in this case. The value of the variable answer is now equal to "Yes". The condition of the if-statement returns false, 
// and JavaScript loves you back ❤️ gets logged.




// 72. What is the output?

// console.log(String.raw`Hello\nworld`);

// a. Hello world!
// b. Hello
//     world
// c. Hello\nworld
// d. Hello\n
//      world

// Explaination:
// String.raw returns a string where the escapes (\n, \v, \t etc.) are ignored! Backslashes can be an issue since you could end up with 
// something like:

// const path = `C:\Documents\Projects\table.html`

// Which would result in:

// "C:DocumentsProjects able.html"

// With String.raw, it would simply ignore the escape and print:

// C:\Documents\Projects\table.html

// In this case, the string is Hello\nworld, which gets logged.




// 73. What is the output?

// async function getData() {
//   return await Promise.resolve("I made it!");
// }

// const data = getData();
// console.log(data);

// a. "I made it!"
// b. Promise {<resolved>: "I made it!"}
// c. Promise {<pending>}
// d. undefined

// Explaination:
// An async function always returns a promise. The await still has to wait for the promise to resolve: a pending promise gets returned 
// when we call getData() in order to set data equal to it.

// If we wanted to get access to the resolved value "I made it", we could have used the .then() method on data:

// data.then(res => console.log(res))

// This would've logged "I made it!"




// 74. What is the output?

// function addToList(item, list) {
//   return list.push(item);
// }

// const result = addToList("apple", ["banana"]);
// console.log(result);

// a. ['apple', 'banana']
// b. 2
// c. true
// d. undefined

// Explaination:
// The .push() method returns the length of the new array! Previously, the array contained one element (the string "banana") 
// and had a length of 1. After adding the string "apple" to the array, the array contains two elements, and has a length of 2. 
// This gets returned from the addToList function.

// The push method modifies the original array. If you wanted to return the array from the function rather than the length 
// of the array, you should have returned list after pushing item to it.




// 75. What is the output?

// const box = { x: 10, y: 20 };

// Object.freeze(box);

// const shape = box;
// shape.x = 100;

// console.log(shape);

// Explaination:
// Object.freeze makes it impossible to add, remove, or modify properties of an object (unless the property's value is another object).

// When we create the variable shape and set it equal to the frozen object box, shape also refers to a frozen object. You can check whether 
// an object is frozen by using Object.isFrozen. In this case, Object.isFrozen(shape) returns true, since the variable shape has a reference 
// to a frozen object.

// Since shape is frozen, and since the value of x is not an object, we cannot modify the property x. x is still equal to 10, and 
// { x: 10, y: 20 } gets logged.




// 76. What is the output?

// const { name: myName } = { name: "Lydia" };

// console.log(name);

// Explaination:
// When we unpack the property name from the object on the right-hand side, we assign its value "Lydia" to a variable with the name myName.

// With { name: myName }, we tell JavaScript that we want to create a new variable called myName with the value of the name property on the 
// right-hand side.

// Since we try to log name, a variable that is not defined, a ReferenceError gets thrown.




// 77. Is this a pure function?

// function sum(a, b) {
//   return a + b;
// }

// Explaination:
// A pure function is a function that always returns the same result, if the same arguments are passed.

// The sum function always returns the same result. If we pass 1 and 2, it will always return 3 without side effects. 
// If we pass 5 and 10, it will always return 15, and so on. This is the definition of a pure function.




// 78. What is the output?

// const add = () => {
//   const cache = {};
//   return num => {
//     if (num in cache) {
//       return `From cache! ${cache[num]}`;
//     } else {
//       const result = num + 10;
//       cache[num] = result;
//       return `Calculated! ${result}`;
//     }
//   };
// };

// const addFunction = add();
// console.log(addFunction(10));
// console.log(addFunction(10));
// console.log(addFunction(5 * 2));

// Explaination:
// The add function is a memoized function. With memoization, we can cache the results of a function in order to speed up its execution. 
// In this case, we create a cache object that stores the previously returned values.

// If we call the addFunction function again with the same argument, it first checks whether it has already gotten that value in its cache. 
// If that's the case, the caches value will be returned, which saves on execution time. Else, if it's not cached, it will calculate the value 
// and store it afterwards.

// We call the addFunction function three times with the same value: on the first invocation, the value of the function when num is equal to 10 
// isn't cached yet. The condition of the if-statement num in cache returns false, and the else block gets executed: Calculated! 20 gets logged, 
// and the value of the result gets added to the cache object. cache now looks like { 10: 20 }.

// The second time, the cache object contains the value that gets returned for 10. The condition of the if-statement num in cache returns true, 
// and 'From cache! 20' gets logged.

// The third time, we pass 5 * 2 to the function which gets evaluated to 10. The cache object contains the value that gets returned for 10. 
// The condition of the if-statement num in cache returns true, and 'From cache! 20' gets logged.




// 79. What is the output?

// const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"]

// for (let item in myLifeSummedUp) {
//   console.log(item)
// }

// for (let item of myLifeSummedUp) {
//   console.log(item)
// }

// Explaination:
// With a for-in loop, we can iterate over enumerable properties. In an array, the enumerable properties are the "keys" of array elements, 
// which are actually their indexes. You could see an array as:

// {0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}

// Where the keys are the enumerable properties. 0 1 2 3 get logged.

// With a for-of loop, we can iterate over iterables. An array is an iterable. When we iterate over the array, the variable "item" is equal 
// to the element it's currently iterating over, "☕" "💻" "🍷" "🍫" get logged.




// 80. What is the output?

// const list = [1 + 2, 1 * 2, 1 / 2]
// console.log(list)

// Explaination:
// Array elements can hold any value. Numbers, strings, objects, other arrays, null, boolean values, undefined, and 
// other expressions such as dates, functions, and calculations.

// The element will be equal to the returned value. 1 + 2 returns 3, 1 * 2 returns 2, and 1 / 2 returns 0.5.




// 81. What is the output?

// function sayHi(name) {
//   return `Hi there, ${name}`
// }

// console.log(sayHi())

// Explaination:
// By default, arguments have the value of undefined, unless a value has been passed to the function. In this case, we didn't pass a value 
// for the name argument. name is equal to undefined which gets logged.

// In ES6, we can overwrite this default undefined value with default parameters. For example:

// function sayHi(name = "Lydia") { ... }

// In this case, if we didn't pass a value or if we passed undefined, name would always be equal to the string Lydia.




// 82. What is the output?

// var status = "😎"

// setTimeout(() => {
//   const status = "😍"

//   const data = {
//     status: "🥑",
//     getStatus() {
//       return this.status
//     }
//   }

//   console.log(data.getStatus())
//   console.log(data.getStatus.call(this))
// }, 0)

// Explaination:
// The value of the this keyword is dependent on where you use it. In a method, like the getStatus method, the this keyword refers to the object 
// that the method belongs to. The method belongs to the data object, so this refers to the data object. When we log this.status, the status 
// property on the data object gets logged, which is "🥑".

// With the call method, we can change the object to which the this keyword refers. In functions, the this keyword refers to the the object 
// that the function belongs to. We declared the setTimeout function on the global object, so within the setTimeout function, the this keyword 
// refers to the global object. On the global object, there is a variable called status with the value of "😎". When logging this.status, 
// "😎" gets logged.




// 83. What is the output?

// const person = {
//   name: "Lydia",
//   age: 21
// }

// let city = person.city
// city = "Amsterdam"

// console.log(person)

// Explaination: 
// We set the variable city equal to the value of the property called city on the person object. There is no property on this object called city, 
// so the variable city has the value of undefined.

// Note that we are not referencing the person object itself! We simply set the variable city equal to the current value of the city property 
// on the person object.

// Then, we set city equal to the string "Amsterdam". This doesn't change the person object: there is no reference to that object.

// When logging the person object, the unmodified object gets returned.




// 84. What is the output?

// function checkAge(age) {
//   if (age < 18) {
//     const message = "Sorry, you're too young."
//   } else {
//     const message = "Yay! You're old enough!"
//   }

//   return message
// }

// console.log(checkAge(21))

// Explaination: 
// Variables with the const and let keyword are block-scoped. A block is anything between curly brackets ({ }). 
// In this case, the curly brackets of the if/else statements. You cannot reference a variable outside of the block 
// it's declared in, a ReferenceError gets thrown.




// 85. What kind of information would get logged?

// fetch('https://www.website.com/api/user/1')
//   .then(res => res.json())
//   .then(res => console.log(res))

// Explaination: 
// The value of res in the second .then is equal to the returned value of the previous .then. You can keep chaining .thens like this, 
// where the value is passed to the next handler.




// 86. Which option is way to set 'hasName' equal to equal to true, provided you cannot pass true as an argument?

// function getName(name) {
//   const hasName = //
// }

// a. !!name     b. name     c. new Boolean(name)     d. name.length

// Explaination:
// With !!name, we determine whether the value of name is truthy or falsy. If name is truthy, which we want to test for, !name returns false. 
// !false (which is what !!name practically is) returns true.

// By setting hasName equal to name, you set hasName equal to whatever value you passed to the getName function, not the boolean value true.

// new Boolean(true) returns an object wrapper, not the boolean value itself.

// name.length returns the length of the passed argument, not whether it's true.




// 87. What is the output?

// console.log("I want pizza"[0])

// a.   ""   b.   "I"    c.   SyntaxError   d.   undefined

// Explaination:
// In order to get an character on a specific index in a string, you can use bracket notation. 
// The first character in the string has index 0, and so on. In this case we want to get the 
// element which index is 0, the character "I', which gets logged.

// Note that this method is not supported in IE7 and below. In that case, use .charAt().




// 88. What is the output?

// function sum(num1, num2 = num1) {
//   console.log(num1 + num2)
// }

// sum(10)

// Explaination:
// You can set a default parameter's value equal to another parameter of the function, as long as they've been 
// defined before the default parameter. We pass the value 10 to the sum function. If the sum function only 
// receives 1 argument, it means that the value for num2 is not passed, and the value of num1 is equal to the 
// passed value 10 in this case. The default value of num2 is the value of num1, which is 10. num1 + num2 returns 20.

// If you're trying to set a default parameter's value equal to a parameter which is defined after (to the right), 
// the parameter's value hasn't been initialized yet, which will throw an error.




// 89. What is the output?

// // module.js 
// export default () => "Hello world"
// export const name = "Lydia"

// // index.js 
// import * as data from "./module"

// console.log(data)

// a. { default: function default(), name: "Lydia" }
// b. { default: function default() }
// c. { default: "Hello world", name: "Lydia" }
// d. Global object of module.js

// Explaination:
// With the import * as name syntax, we import all exports from the module.js file into the index.js file as a new object 
// called data is created. In the module.js file, there are two exports: the default export, and a named export. 
// The default export is a function which returns the string "Hello World", and the named export is a variable called name 
// which has the value of the string "Lydia".

// The data object has a default property for the default export, other properties have the names of the named exports and 
// their corresponding values.

// Ans: { default: function default(), name: "Lydia" }




// 90. What is the output?

// class Person {
//   constructor(name) {
//     this.name = name
//   }
// }

// const member = new Person("John")
// console.log(typeof member)

// Explaination:
// Classes are syntactical sugar for function constructors. The equivalent of the Person class as a function constructor would be:

// function Person() {
//   this.name = name
// }
// Calling a function constructor with new results in the creation of an instance of Person, typeof keyword returns "object" for an instance. 
// typeof member returns "object".




// 91. What is the output?

// let newList = [1, 2, 3].push(4)

// console.log(newList.push(5))

// Explaination:
// The .push method returns the new length of the array, not the array itself! By setting newList equal to [1, 2, 3].push(4), 
// we set newList equal to the new length of the array: 4.

// Then, we try to use the .push method on newList. Since newList is the numerical value 4, we cannot use the .push method: a TypeError is thrown.




// 92. What is the output?

// function giveLydiaPizza() {
//   return "Here is pizza!"
// }

// const giveLydiaChocolate = () => "Here's chocolate... now go hit the gym already."

// console.log(giveLydiaPizza.prototype)
// console.log(giveLydiaChocolate.prototype)

// Explaination:
// Regular functions, such as the giveLydiaPizza function, have a prototype property, which is an object (prototype object) 
// with a constructor property. Arrow functions however, such as the giveLydiaChocolate function, do not have this prototype 
// property. undefined gets returned when trying to access the prototype property using giveLydiaChocolate.prototype.




// 93. What is the output?

// const person = {
//   name: "Lydia",
//   age: 21
// }

// for (const [x, y] of Object.entries(person)) {
//   console.log(x, y)
// }

// Explaination:
// Object.entries(person) returns an array of nested arrays, containing the keys and objects:

// [ [ 'name', 'Lydia' ], [ 'age', 21 ] ]

// Using the for-of loop, we can iterate over each element in the array, the subarrays in this case. We can destructure the subarrays 
// instantly in the for-of loop, using const [x, y]. x is equal to the first element in the subarray, y is equal to the second element 
// in the subarray.

// The first subarray is [ "name", "Lydia" ], with x equal to "name", and y equal to "Lydia", which get logged. 
// The second subarray is [ "age", 21 ], with x equal to "age", and y equal to 21, which get logged.




// 94. What is the output?

// function getItems(fruitList, ...args, favoriteFruit) {
//   return [...fruitList, ...args, favoriteFruit]
// }

// getItems(["banana", "apple"], "pear", "orange")

// Explaination:
// ...args is a rest parameter. The rest parameter's value is an array containing all remaining arguments, and can only be the last parameter! 
// In this example, the rest parameter was the second parameter. This is not possible, and will throw a syntax error.

// function getItems(fruitList, favoriteFruit, ...args) {
//   return [...fruitList, ...args, favoriteFruit]
// }

// getItems(["banana", "apple"], "pear", "orange")
// The above example works. This returns the array [ 'banana', 'apple', 'orange', 'pear' ]




// 95. What is the output?

// function nums(a, b) {
//   if
//   (a > b)
//   console.log('a is bigger')
//   else 
//   console.log('b is bigger')
//   return 
//   a + b
// }

// console.log(nums(4, 2))
// console.log(nums(1, 2))

// Explaination:
// In JavaScript, we don't have to write the semicolon (;) explicitly, however the JavaScript engine still adds them after statements. 
// This is called Automatic Semicolon Insertion. A statement can for example be variables, or keywords like throw, return, break, etc.

// Here, we wrote a return statement, and another value a + b on a new line. However, since it's a new line, the engine doesn't know that 
// it's actually the value that we wanted to return. Instead, it automatically added a semicolon after return. You could see this as:

//   return;
//   a + b
// This means that a + b is never reached, since a function stops running after the return keyword. If no value gets returned, like here, 
// the function returns undefined. Note that there is no automatic insertion after if/else statements!




// 96. What is the output?

// class Person {
//   constructor() {
//     this.name = "Lydia"
//   }
// }

// Person = class AnotherPerson {
//   constructor() {
//     this.name = "Sarah"
//   }
// }

// const member = new Person()
// console.log(member.name)

// Explaination:
// We can set classes equal to other classes/function constructors. In this case, we set Person equal to AnotherPerson. 
// The name on this constructor is Sarah, so the name property on the new Person instance member is "Sarah".




// 97. What is the output?

// const info = {
//   [Symbol('a')]: 'b'
// }

// console.log(info)
// console.log(Object.keys(info))

// Explaination:
// A Symbol is not enumerable. The Object.keys method returns all enumerable key properties on an object. 
// The Symbol won't be visible, and an empty array is returned. When logging the entire object, all properties 
// will be visible, even non-enumerable ones.

// This is one of the many qualities of a symbol: besides representing an entirely unique value (which prevents 
// accidental name collision on objects, for example when working with 2 libraries that want to add properties 
// to the same object), you can also "hide" properties on objects this way (although not entirely. You can still 
// access symbols using the Object.getOwnPropertySymbols() method).




// 98. What is the output?

// const getList = ([x, ...y]) => [x, y]
// const getUser = user => ({ name: user.name, age: user.age })

// const list = [1, 2, 3, 4]
// const user = { name: "Lydia", age: 21 }

// console.log(getList(list))
// console.log(getUser(user))

// Explaination:
// The getList function receives an array as its argument. Between the parentheses of the getList function, we destructure this array right away. 
// You could see this as:

// [x, ...y] = [1, 2, 3, 4]

// With the rest parameter ...y, we put all "remaining" arguments in an array. The remaining arguments are 2, 3 and 4 
// in this case. The value of y is an array, containing all the rest parameters. The value of x is equal to 1 in this case, 
// so when we log [x, y], [1, [2, 3, 4]] gets logged.

// The getUser function receives an object. With arrow functions, we don't have to write curly brackets if we just return one value. 
// However, if you want to return an object from an arrow function, you have to write it between parentheses, otherwise no value gets returned! 
// The following function would have returned an object:

// const getUser = user => ({ name: user.name, age: user.age })

// Since no value gets returned in this case, the function returns undefined.




// 99. What is the output?

// const name = "Lydia"

// console.log(name())

// Explaination:
// The variable name holds the value of a string, which is not a function, thus cannot invoke.

// TypeErrors get thrown when a value is not of the expected type. JavaScript expected name to be a function since we're trying to invoke it. 
// It was a string however, so a TypeError gets thrown: name is not a function!

// SyntaxErrors get thrown when you've written something that isn't valid JavaScript, for example when you've written the word return as retrun.
//  ReferenceErrors get thrown when JavaScript isn't able to find a reference to a value that you're trying to access.




// 100. What's the value of output?

// const output = `${[] && 'Im'}possible!
// You should${'' && `n't`} see a therapist after so much JavaScript lol`

// Explaination:
// [] is a truthy value. With the && operator, the right-hand value will be returned if the left-hand value is a truthy value. 
// In this case, the left-hand value [] is a truthy value, so "Im' gets returned.

// "" is a falsy value. If the left-hand value is falsy, nothing gets returned. n't doesn't get returned.




// 101. What's the value of output?

// const one = (false || {} || null)
// const two = (null || false || "")
// const three = ([] || 0 || true)

// console.log(one, two, three)

// Explaination:
// With the || operator, we can return the first truthy operand. If all values are falsy, the last operand gets returned.

// (false || {} || null): the empty object {} is a truthy value. This is the first (and only) truthy value, which gets returned. one is equal to {}.

// (null || false || ""): all operands are falsy values. This means that the past operand, "" gets returned. two is equal to "".

// ([] || 0 || ""): the empty array[] is a truthy value. This is the first truthy value, which gets returned. three is equal to [].




// 102. What's the value of output?

// const myPromise = () => Promise.resolve('I have resolved!')

// function firstFunction() {
//   myPromise().then(res => console.log(res))
//   console.log('second')
// }

// async function secondFunction() {
//   console.log(await myPromise())
//   console.log('second')
// }

// firstFunction()
// secondFunction()

// Explaination:
// With a promise, we basically say I want to execute this function, but I'll put it aside for now while it's running since this 
// might take a while. Only when a certain value is resolved (or rejected), and when the call stack is empty, I want to use this value.

// We can get this value with both .then and the await keyword in an async function. Although we can get a promise's value with both .then and 
// await, they work a bit differently.

// In the firstFunction, we (sort of) put the myPromise function aside while it was running, but continued running the other code, 
// which is console.log('second') in this case. Then, the function resolved with the string I have resolved, which then got logged 
// after it saw that the callstack was empty.

// With the await keyword in secondFunction, we literally pause the execution of an async function until the value has been resolved 
// before moving to the next line.

// This means that it waited for the myPromise to resolve with the value I have resolved, and only once that happened, we moved to 
// the next line: second got logged.




// 103. What's the value of output?

// const set = new Set()

// set.add(1)
// set.add("Lydia")
// set.add({ name: "Lydia" })

// for (let item of set) {
//   console.log(item + 2)
// }

// Explaination:
// The + operator is not only used for adding numerical values, but we can also use it to concatenate strings. Whenever the JavaScript engine 
// sees that one or more values are not a number, it coerces the number into a string.

// The first one is 1, which is a numerical value. 1 + 2 returns the number 3.

// However, the second one is a string "Lydia". "Lydia" is a string and 2 is a number: 2 gets coerced into a string. "Lydia" and "2" get 
// concatenated, which results in the string "Lydia2".

// { name: "Lydia" } is an object. Neither a number nor an object is a string, so it stringifies both. Whenever we stringify a regular object, 
// it becomes "[object Object]". "[object Object]" concatenated with "2" becomes "[object Object]2".




// 104. What is its value?

// Promise.resolve(5)

// Explaination:
// We can pass any type of value we want to Promise.resolve, either a promise or a non-promise. The method itself returns a promise 
// with the resolved value. If you pass a regular function, it'll be a resolved promise with a regular value. If you pass a promise, 
// it'll be a resolved promise with the resolved value of that passed promise.

// In this case, we just passed the numerical value 5. It returns a resolved promise with the value 5.




// 105. What is its value?

// function compareMembers(person1, person2 = person) {
//   if (person1 !== person2) {
//     console.log("Not the same!")
//   } else {
//     console.log("They are the same!")
//   }
// }

// const person = { name: "Lydia" }

// compareMembers(person)

// Explaination:
// Objects are passed by reference. When we check objects for strict equality (===), we're comparing their references.

// We set the default value for person2 equal to the person object, and passed the person object as the value for person1.

// This means that both values have a reference to the same spot in memory, thus they are equal.

// The code block in the else statement gets run, and They are the same! gets logged.




// 106. What is its value?

// const colorConfig = {
//   red: true,
//   blue: false,
//   green: true,
//   black: true,
//   yellow: false,
// }

// const colors = ["pink", "red", "blue"]

// console.log(colorConfig.colors[1])

// Explaination:
// In JavaScript, we have two ways to access properties on an object: bracket notation, or dot notation. In this example, 
// we use dot notation (colorConfig.colors) instead of bracket notation (colorConfig["colors"]).

// With dot notation, JavaScript tries to find the property on the object with that exact name. In this example, JavaScript tries 
// to find a property called colors on the colorConfig object. There is no property called colors, so this returns undefined. 
// Then, we try to access the value of the first element by using [1]. We cannot do this on a value that's undefined, so it 
// throws a TypeError: Cannot read property '1' of undefined.

// JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket [ and keeps going 
// until it finds the closing bracket ]. Only then, it will evaluate the statement. If we would've used colorConfig[colors[1]], 
// it would have returned the value of the red property on the colorConfig object.




// 107. What is its value?

// console.log('❤️' === '❤️') 

// Explaination:
// Under the hood, emojis are unicodes. The unicodes for the heart emoji is "U+2764 U+FE0F". These are always the same for the same emojis, 
// so we're comparing two equal strings to each other, which returns true.




// 108. Which of these methods modifies the original array ?

// const emojis = ['✨', '🥑', '😍']

// emojis.map(x => x + '✨')
// emojis.filter(x => x !== '🥑')
// emojis.find(x => x !== '🥑')
// emojis.reduce((acc, cur) => acc + '✨')
// emojis.slice(1, 2, '✨') 
// emojis.splice(1, 2, '✨')

// Explaination:
// With splice method, we modify the original array by deleting, replacing or adding elements. In this case, we removed 2 items 
// from index 1 (we removed '🥑' and '😍') and added the ✨ emoji instead.

// map, filter and slice return a new array, find returns an element, and reduce returns a reduced value.




// 109. What is the output ?

// const food = ['🍕', '🍫', '🥑', '🍔']
// const info = { favoriteFood: food[0] }

// info.favoriteFood = '🍝'

// console.log(food)

// Explaination:
// We set the value of the favoriteFood property on the info object equal to the string with the pizza emoji, '🍕'. A string is a 
// primitive data type. In JavaScript, primitive data types act by reference.

// In JavaScript, primitive data types (everything that's not an object) interact by value. In this case, we set the value of the 
// favoriteFood property on the info object equal to the value of the first element in the food array, the string with the pizza emoji 
// in this case ('🍕'). A string is a primitive data type, and interact by value (see my blogpost if you're interested in learning more).

// Then, we change the value of the favoriteFood property on the info object. The food array hasn't changed, since the value of favoriteFood 
// was merely a copy of the value of the first element in the array, and doesn't have a reference to the same spot in memory as the element 
// on food[0]. When we log food, it's still the original array, ['🍕', '🍫', '🥑', '🍔'].




// 110. What does this method do ?

// JSON.parse()

// Explaination:
// With the JSON.parse() method, we can parse JSON string to a JavaScript value.

// // Stringifying a number into valid JSON, then parsing the JSON string to a JavaScript value:
// const jsonNumber = JSON.stringify(4) // '4'
// JSON.parse(jsonNumber) // 4

// // Stringifying an array value into valid JSON, then parsing the JSON string to a JavaScript value:
// const jsonArray = JSON.stringify([1, 2, 3]) // '[1, 2, 3]'
// JSON.parse(jsonArray) // [1, 2, 3]

// // Stringifying an object  into valid JSON, then parsing the JSON string to a JavaScript value:
// const jsonArray = JSON.stringify({ name: "Lydia" }) // '{"name":"Lydia"}'
// JSON.parse(jsonArray) // { name: 'Lydia' }




// 111. What is the output ?

// let name = 'Lydia'

// function getName() {
//   console.log(name)
//   let name = 'Sarah'
// }

// getName()

// Explaination:
// Each function has its own execution context (or scope). The getName function first looks within its own context (scope) to see if 
// it contains the variable name we're trying to access. In this case, the getName function contains its own name variable: we declare 
// the variable name with the let keyword, and with the value of 'Sarah'.

// Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized. They are not accessible before the line 
// we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variables before they are declared, 
// JavaScript throws a ReferenceError.

// If we wouldn't have declared the name variable within the getName function, the javascript engine would've looked down the scope chain. 
// The outer scope has a variable called name with the value of Lydia. In that case, it would've logged Lydia.

// let name = 'Lydia'

// function getName() {
//   console.log(name)
// }

// getName() // Lydia




// 112. What is the output ?

// function* generatorOne() {
//   yield ['a', 'b', 'c'];
// }

// function* generatorTwo() {
//   yield* ['a', 'b', 'c'];
// }

// const one = generatorOne()
// const two = generatorTwo()

// console.log(one.next().value)
// console.log(two.next().value)

// Explaination:
// With the yield keyword, we yield values in a generator function. With the yield* keyword, we can yield values from another 
// generator function, or iterable object (for example an array).

// In generatorOne, we yield the entire array ['a', 'b', 'c'] using the yield keyword. The value of value property on the object 
// returned by the next method on one (one.next().value) is equal to the entire array ['a', 'b', 'c'].

// console.log(one.next().value) // ['a', 'b', 'c']
// console.log(one.next().value) // undefined
// In generatorTwo, we use the yield* keyword. This means that the first yielded value of two, is equal to the first yielded value 
// in the iterator. The iterator is the array ['a', 'b', 'c']. The first yielded value is a, so the first time we call two.next().value, 
// a is returned.

// console.log(two.next().value) // 'a'
// console.log(two.next().value) // 'b'
// console.log(two.next().value) // 'c'
// console.log(two.next().value) // undefined




// 113. What is the output ?

// console.log(`${(x => x)('I love')} to program`)

// Explaination:

// Expressions within template literals are evaluated first. This means that the string will contain the returned value of the expression, 
// the immediately invoked function (x => x)('I love') in this case. We pass the value 'I love' as an argument to the x => x arrow function. 
// x is equal to 'I love', which gets returned. This results in I love to program.




// 114. What will happen ?

// let config = {
//   alert: setInterval(() => {
//     console.log('Alert!')
//   }, 1000)
// }

// config = null

// Explaination:

// Normally when we set objects equal to null, those objects get garbage collected as there is no reference anymore to that object. 
// However, since the callback function within setInterval is an arrow function (thus bound to the config object), the callback function 
// still holds a reference to the config object. As long as there is a reference, the object won't get garbage collected. Since it's 
// not garbage collected, the setInterval callback function will still get invoked every 1000ms (1s).




// 115. Which method(s) will return the value 'Hello world!' ?

// const myMap = new Map()
// const myFunc = () => 'greeting'

// myMap.set(myFunc, 'Hello world!')

// //1
// myMap.get('greeting')
// //2
// myMap.get(myFunc)
// //3
// myMap.get(() => 'greeting')

// Explaination:
// When adding a key/value pair using the set method, the key will be the value of the first argument passed to the set function, 
// and the value will be the second argument passed to the set function. The key is the function () => 'greeting' in this case, 
// and the value 'Hello world'. myMap is now { () => 'greeting' => 'Hello world!' }.

// 1 is wrong, since the key is not 'greeting' but () => 'greeting'. 3 is wrong, since we're creating a new function by passing it 
// as a parameter to the get method. Object interact by reference. Functions are objects, which is why two functions are never strictly equal, 
// even if they are identical: they have a reference to a different spot in memory.




// 116. What is the output ?

// const person = {
//   name: "Lydia",
//   age: 21
// }

// const changeAge = (x = { ...person }) => x.age += 1
// const changeAgeAndName = (x = { ...person }) => {
//   x.age += 1
//   x.name = "Sarah"
// }

// changeAge(person)
// changeAgeAndName()

// console.log(person)

// Explaination:
// Both the changeAge and changeAgeAndName functions have a default parameter, namely a newly created object { ...person }. 
// This object has copies of all the key/values in the person object.

// First, we invoke the changeAge function and pass the person object as its argument. This function increases the value of the 
// age property by 1. person is now { name: "Lydia", age: 22 }.

// Then, we invoke the changeAgeAndName function, however we don't pass a parameter. Instead, the value of x is equal to a 
// new object: { ...person }. Since it's a new object, it doesn't affect the values of the properties on the person object. 
// person is still equal to { name: "Lydia", age: 22 }.




// 117. Which of the following options will return 6 ?

// function sumValues(x, y, z) {
// 	return x + y + z;
// }

// a. sumValues([...1,2,3])
// b. sumValues([...[1,2,3]])
// c. sumValues(...[1,2,3])
// d. sumValues([1,2,3])

// Explaination:
// With the spread operator ..., we can spread iterables to individual elements. The sumValues function receives 
// three arguments: x, y and z. ...[1, 2, 3] will result in 1, 2, 3, which we pass to the sumValues function.




// 118. What is the output ?

// let num = 1;
// const list = ["🥳", "🤠", "🥰", "🤪"];

// console.log(list[(num += 1)]);

// Explaination:
// With the += operand, we're incrementing the value of num by 1. num had the initial value 1, so 1 + 1 is 2. 
// The item on the second index in the list array is 🥰, console.log(list[2]) prints 🥰.



