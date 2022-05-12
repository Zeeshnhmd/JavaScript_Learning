import { companies, ages } from './array.js';

const combined = ages
	.map((age) => age * 2)
	.filter((age) => age >= 40)
	.sort((a, b) => a - b)
	.reduce((a, b) => a + b, 0);

console.log(combined);
