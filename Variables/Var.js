/**
 * * Var is function scope
 * * we can also reassign its value
 * * var are function scope (meaning to say we can access its value out the block{} )
 */

var language = 'javascript';

language = 'java';

console.log(language);

function vars() {
	age = 40;
}
vars();
console.log(age);
