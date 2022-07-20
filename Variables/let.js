/**
 * * let are block scope
 * * we can also reassign its value
 */

let language = 'javascript';
console.log(language);

/**
 * * we can also do the above thing like this
 */

let codes;
codes = 'java';
console.log(codes);

/**
 * * block scope (meaning to say that we can only use it inside a block{} and not out side of it )
 */

function let() {
	let age = 23;
	console.log(age);
}
// console.log(age);
let();
