import { companies, ages } from './array.js';

// using for loop

let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
	ageSum += ages[i];
}
console.log(ageSum);

// using function

const ageTotal = ages.reduce((total, age) => total + age, 0);
console.log(ageTotal);

// total years of companies
const totalYear = companies.reduce(
	(total, company) => total + (company.end - company.start),
	0
);
console.log(totalYear);
