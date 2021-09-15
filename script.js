//alert("Hello world");
//will have a message Hello world in the pop up window

//------------------------------------

//A VARIABLE is a place in memory where we store a value that we can reuse or change later. Each variable has its own data type.

/*
//primitive types

let greeting = "Hello";  // text string (string)
let year = "2021";      // number as a string (string)
let age = 24;          // number (number)
let education = true;     // truth value (Boolean)
null and undefined are special types in primtive types




// object (object) - a value that is not a primitive type is an object

let person = {           
   name: "John",
   yearBorn: 1975,
   occupation: true
};


*/

//------------------------------------

//CONST and LET
/*
const - defines a constant reference to a value, reference cannot be changed, you cannot reassign a new value to it.
let - you can assign a new value to it.
*/

//EXAMPLE1:
//you cannot do this
/*
const a = 0
a = 1
*/

//but you can do this
/*
let a = 0
a = 1
*/

//const variables must be initialized at the declaration time, but let values can be initialized later.

//VAR was until 2015 the only way to declare variable, but the modern codebase use const or let.

//------------------------------------
//NAMING
/*
Using camelCase or one word. Be careful, Java Script is case sensitive so if you write "Javascript" is different than "javascript."
*/

//------------------------------------

//CONSOLE.LOG is writing us result to the console

//EXAMPLE1:
/*
console.log("message");

console.log("Welcome!"); //writes Welcome!

console.log("Eliska" + " " + "Adensamova" ); //writes Eliska Adensamova

console.log("10" + " + " + "10" + " = " + (10 + 10)); //writes 10 + 10 = 20
*/

//EXAMPLE2:
/*
let name = "eliska";
let age = "29";

console.log("My name is " + name + " and I am " + age + " old.")
*/

//EXAMPLE3:
/*
  let height = "164";
  let otherHeight = "175";

  console.log("sum of the heights is " + height + " + " + otherHeight)
*/

//EXAMPLE4:
/*
 let num1 = 164;
 let num2 = 175;

 let sum = num1 + num2;

 console.log("sum of heights: " + num1 + " and " + num2 + " is " + sum)
 */

//EXAMPLE5:
/*
 let firstName = "eliska";
 let lastName = "adensamova";
 let space = " "

 let wholeName = firstName + space + lastName

 console.log(wholeName)
 */

//EXAMPLE6:
//console.log("<" + "*" + ")" + ")" + ")" + ">" + "<")

//------------------------------------

//logical operators

//> more than
//< less than
//>= more than or equal
//<= less than or equal
//!== inequal
//=== equal

//EXAMPLE:
/*
let a = 3
a >= 1 
*/
//this is true

//------------------------------------

//Booleans:
//logical expressions

//a && b called AND
//a || b called OR
//!a called NOT

/*
const trueBooleaan = true;
const falseBoolean = false;
*/

/*
console.log(!true);
*/

//------------------------------------

//MATH LIBRARY is used for different tasks we need to do with numbers. For example Math.round() will round the value to the closest integer using half round up to break ties. Math.ceil() will round the value up and Math.floor() will round the value down.

//EXAMPLES:
/*
let a = Math.round(3.3);       // a is now 3  
let b = Math.round(3.7);       // b is now 4
let c = Math.round(3.5);       // c is now 4
*/

//Math.random() will return number between 0 and less than 1 = expected output: a number from 0 to <1

//EXAMPLE:
/*
let randomNum = Math.random();
Math.round(randomNum);
*/

//------------------------------------

//The prompt() method displays a dialog box that prompts the visitor for input. A prompt box is often used if you want the user to input a value before entering a page.

//prompt(message, default value);

//EXAMPLE1:
/*
prompt("write your name", "Eliska Adensamova");

let name = prompt("write your name", "Eliska Adensamova");
*/

//EXAMPLE2:
/*
 let value = Number(prompt("say a number and see what happens"));
 console.log(value * 2)
*/

//EXAMPLE3:
/*
 let value = Number(prompt("write decimal number"));
 console.log(Math.round(value));
*/

//EXAMPLE4:
/*
 let value = Number(prompt("say a number and see what happens"));
 console.log(Math.pow(value, 6));
 */

//EXAMPLE5:
/*
 let numberU = Number(prompt("write a number"));
 let result = Math.pow(numberU,6);
 console.log("power to six " + numberU + " is "+ result);
*/

//EXAMPLE6:
/*
 let number1 = Number(prompt("write first number"));

 let number2 = Number(prompt("write second number"));

 let sum = number1 + number2
 let product = number1 * number2
 let divide = number1 / number2
 let difference = number1 - number2

 console.log(number1 + " + " + number2 + " = " + sum)
 console.log(number1 + " - " + number2 + " = " + difference)
 console.log(number1 + " / " + number2+ " = " + divide)
 console.log(number1 + " * " + number2 + " = " + product)

 console.log("sum: " + sum)
 console.log("product: " + product)
 console.log("divide: " + divide)
 console.log("difference: " + difference)
 */

//EXAMPLE7:
/*
 let numberOfUser1 = Number(prompt("write number 1"));
 let numberOfUser2 = Number(prompt("write number 2"));

 console.log(numberOfUser1 + " + " + numberOfUser2 + " = " + (numberOfUser1 + numberOfUser2))
 console.log(numberOfUser1 + " - " + numberOfUser2 + " = " + (numberOfUser1 - numberOfUser2))
 console.log(numberOfUser1 + " * " + numberOfUser2 + " = " + (numberOfUser1 * numberOfUser2))
 console.log(numberOfUser1 + " / " + numberOfUser2 + " = " + (numberOfUser1 / numberOfUser2))
*/

//------------------------------------

//ARRAY is a data structure used to store several different values. We can imagine it as a cabinet with shelves. Each shelf is used to store a value and has its own number, which we call an index. Using the index, we can then access directly the shelf (value) we want, without having to go through all the previous ones. It is important to keep in mind that in JS, fields are indexed (starting) from scratch (zero). An array in JavaScript can contain values with different data types.

//creating array
//let wardrobe = ["dress", "shirts", "pants", "jackets", "socks"];

// length of the array
//console.log(wardrobe.length)
// returns 5, because there are 5 items in the array

//console.log(wardrobe[0]);
// returns "dress, because they are on index 0 as a first item in the array

//console.log(wardrobe[2]);
// returns "pants"

//console.log(wardrobe[wardrobe.length - 1]);
//returns "socks", because on index 4 they are tha last item in the array (length - 1 => 5 - 1 => 4)

//wardrobe.pop();
//erase "socks" - the last item in the array
//and at the same time returns it to store from the variable
// ["dress", "shirts", "pants", "jackets"];

//wardrobe.shift()
// erase "dress" - the first item in the array
// and at the same time returns it to store from the variable
// [shirts", "pants", "jackets"];

//wardrobe.push("socks");
// insert "socks" at the end of the array
// [shirts", "pants", "jackets", "socks"];

//wardrobe.unshift("dress");
// insert "dress" at the beginning of the array
// ["dress", "shirts", "pants", "jackets", "socks"];

// Access to one element after another
/*
let wardrobe = ["dress", "shirts", "pants", "jackets", "socks"];

for (let i = 0; i < wardrobe.length; i++) {
   // Access to one element after another
   let actualItem = wardrobe[i];
}
*/

//------------------------------------

//An OBJECT is a data structure consisting of key-value pairs, which we call properties if they already have a value assigned, or methods if they contain functions. Using keys, we can access individual properties and methods of the object, call them, change them or even add new ones.

//To create an object, we need curly braces {} and separate individual properties and methods with a comma as in an array. We assign the value of a property or function to a method using a colon:, in contrast to the variables to which we assign using equals =.

// empty object
//let maria = {};

//We can imagine the properties of objects as variables belonging to the given object. They can contain values of all data types (numbers, text strings, truth values) as well as other data structures (fields, another object).

// object with multiple properties
/*
let maria = {
   name: "Maria",
   occupation: "Front-end developer",
   married: true,
   daughter: {
       name: "Sarah",
       yearBorn: "2008",
       hobies: ["reading", "tennis", "ceramics"]
   }
};

*/

//------------------------------------
//DATE AND TIME - It stores the date, time and provides methods for date/time management. We can use it to store creation/modification times, to measure time, or just to print out the current date.

//EXAMPLE1:
/*
let now = new Date();
alert(now); 
*/
// shows current date/time in the alert pop up




//------------------------------------
//Template literals are literals delimited with backticks (`), allowing embedded expressions called substitutions.

//EXAMPLE
//`string text ${expression} string text`