
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

