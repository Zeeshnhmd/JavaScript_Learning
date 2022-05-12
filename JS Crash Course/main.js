console.log('hello werold');

// => variables: Var, Let, Const

// 1. Let {in let we can resign the value}
let age = 15;
// age = 40;
console.log(age);

// 2. Const {in const we cannot resign the value and if we try to resign it will show error}
const salary = 40000;
// salary = 10000;
console.log(salary);

// => Datatypes (Primitive, Non primitives)
// Primitive (string, number, boolean, undefined, null, biglnt, symbol)
// Non Primitive(object)

// 1. String
const name = ' Zeeshan';
const language = 'JavaScript';
const channel = `hello form channel`;

// 2. Number
const total = 0;
const PI = 3.14;

// 3. Boolean
const isPrimaryNumber = true;
const isNewUser = false;

// 4. UnDefined
let result;
console.log(result);
const res = undefined;

// 5. null
const data = null;

// NonPremitive (object)
const person = {
	firstName: 'Zeeshan',
	lastName: 'Ahmad',
	age: 30,
};
console.log(person.firstName);

const oddNumbers = [1, 3, 5, 6, 7];
console.log(oddNumbers[0]);

// => operators (Assignment, Arithmetic, Comparison, Logical, String, Other)
// 1. Assignment Operators
// let x = 5;

// 2. Arithemtic Operators
let x = 10;
let y = 5;

// console.log(x + y); //(x-y), (x/y), (x*y), (x%y), (++x) (--x)

//3. Comparison
// console.log(x == y);
// console.log(x != y);

// 4. Logical Operators
const isValidNumber = x > 20 || 8 > y;
console.log(isValidNumber);

// 5. String Operator
console.log('zeeshan ' + 'Ahmad'); // (+) performs addition when use with number and performs concatination when use with strings

const isEven = 10 % 2 === 0 ? 'reminder is zero' : 'reminder is not zero';
console.log(isEven);

//Type Conversions

console.log(true + '3');
console.log('4' * '2'); //if we use numeric string with subtraction, division and multiplication javascript convert them into number and not in case of addition
console.log('5' - false); //so this case javascript consider {flase as 0} and {true as 1}

// 6. convert TYPES in javascript
console.log(parseFloat('3.14'));
console.log((500).toString());
console.log(Boolean(10)); // null undefined '' NaN will give FALSE and everything else will give TRUE

// 7. Equality
// Allows Coercion (==)
// Does not allow Coercion (===)

const var1 = 1;
const var2 = '1';

console.log(var1 == var2);
console.log(var1 === var2);

// 8. Conditional Statements (if, else, else if, switch)

const num = 0;
if (num > 0) {
	console.log('number is positive');
} else if (num < 0) {
	console.log('number is negative');
} else {
	console.log('number is Zero');
}

const color = '10';

switch (color) {
	case 'red':
		console.log('Color is red');
		break;
	case 'blue':
		console.log('Color is blue');
		break;
	case 'green':
		console.log('Color is green');
		break;
	default:
		console.log('Not a valid Number');
}

// 9. Looping (For loop, While loop, Do while loop, For of loop)

// => For loop
//for (initializer; Condition; final-expression){ code to run}

for (let i = 1; i <= 5; i++) {
	console.log('count ' + i);
}

// => While loop
// { initializer
// while (condition){
// code to run
// final-expression
// }

let i = 1;
while (i <= 5) {
	console.log('count ' + i);
	i++;
}

// => Do While Loop
//  {
// initializer
// do {
// 		code to run
// 	final expression
// 	} while (condition)
// }

let i = 1;
do {
	console.log('count ' + i);
	i++;
} while (i <= 5);

// => For of loop
// for (const item of array) {
// 	code to run
// }

const numArray = [1, 2, 3, 4, 5];

for (const num of numArray) {
	console.log('coooooount ' + num);
}

// 10. Functions
// => A JavaScript function is a block designed to perform a particular task
// ex: Add two numbers, multiply two number etc.
// => Functions are reusable as they can be defined once and can be called with different values resulting in different results
// => Functions help divide a complex problem into smaller chunks and makes your program east to understand and maintain

// function name(parameter1, parameter2, parameter3) {
// 	code to be executed
// }

function greet() {
	console.log('hii there');
}
greet();
greet();
greet();

// following code can change name dynamically

function greet(userName) {
	console.log('Good Morning ' + userName);
}
greet('zeeshan'); // string inside a function is called function argument
greet('Faizan');

// to add
function add(a, b) {
	return a + b;
}
const sum = add(25, 25);
const sums = add(5, 25);
console.log(sum, sums);

// Arrow Function
const arrowFunction = (c, d) => {
	return c + d;
};
const adds = arrowFunction(12, 12);
console.log(adds);

// 11. Scope (Block, Function, Global)
// Scope basically determines the accessibility or visibility of variables

const myNum = 120;
// => Block Scope
if (true) {
	const myName = 'Zeeshan';
	console.log(myName);
	console.log(myNum); //Global Scope
}

// => Function Scope
function testFn() {
	const myName = 'batman';
	console.log(myName);
	console.log(myNum); //Global Scope
}
testFn();
