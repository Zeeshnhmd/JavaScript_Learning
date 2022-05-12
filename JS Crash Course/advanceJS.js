// 1. Nested function scope

// let a = 10;
// function outer() {
// 	let b = 20;
// 	function inner() {
// 		let c = 30;
// 		console.log(a, b, c);
// 	}
// 	inner();
// }
// outer();

function outer() {
	function inner() {
		let counter = 0;
		counter++;
		console.log(counter);
	}
	inner();
}
outer();
// 2. Closure :- A closure is the combination of a bundled together with references to its surrounding state. Closures are created every time a function is created, at function creation time.
