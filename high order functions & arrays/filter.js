import { companies, ages } from './array.js';

// get 21 and older

// for loop

// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
// 	if (ages[i] >= 21) {
// 		canDrink.push(ages[i]);
// 	}
// }

// filter

// const canDrink = ages.filter(function (age) {
// 	if (age >= 21) {
// 		return true;
// 	}
// });

// using arrow function

const canDrink = ages.filter((age) => age >= 21);
console.log(canDrink);

const cantDrink = ages.filter((age) => age <= 21);
console.log(cantDrink);

// filter the retail companies

// const retailCompanies = companies.filter((company) => {
// 	if (company.category === 'Retail') {
// 		return true;
// 	}
// });

// with arrow function

const retailCompanies = companies.filter(
	(company) => company.category === 'Retail'
);
console.log(retailCompanies);

// eighties company

const eightisCompany = companies.filter(
	(company) => company.start >= 1980 && company.start < 1990
);
console.log(eightisCompany);

// lasted ten years

const lastedTenYear = companies.filter(
	(company) => company.start - company.end >= 10
);
console.log(lastedTenYear);
