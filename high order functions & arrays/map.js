import { companies, ages } from './array.js';

// create array of company names
const companyNames = companies.map((company) => {
	return company.name;
});

console.log(companyNames);

// display company name and there dates

const testMap = companies.map((company) => {
	return `${company.name} [${company.start}-${company.end}]`;
});
console.log(testMap);

// short hand method

const test = companies.map(
	(company) => `${company.name} = [${company.start}- ${company.end}]`
);
console.log(test);

// agesSquare

const agesSquare = ages.map((age) => Math.sqrt(age));
console.log(agesSquare);

// multiply by two

const mb2 = ages.map((age) => age * 2);
console.log(mb2);

// using two maps
const twoMap = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
console.log(twoMap);
