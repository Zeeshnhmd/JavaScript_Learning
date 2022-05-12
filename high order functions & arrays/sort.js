import { companies, ages } from './array.js';
// SORT METHOD

// short companies by start year
const shortedCompanies = companies.sort(function (a, b) {
	if (a.start > b.start) {
		return 1;
	} else {
		return -1;
	}
});
console.log(shortedCompanies);

// SHORT HAND METHOD
const shortedeasymethod = companies.sort((a, b) =>
	a.start > b.start ? 1 : -1
);
console.log(shortedeasymethod);

// ascending  order
const shortages = ages.sort((a, b) => a - b);
console.log(shortages);

// and for descending order
const sortdescending = ages.sort((a, b) => b - a);
console.log(sortdescending);
