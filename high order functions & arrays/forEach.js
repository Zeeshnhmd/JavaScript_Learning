import { companies, ages } from './array.js';

// for loop

for (let i = 0; i < companies.length; i++) {
	console.log(companies[i]);
}
console.log('hello world');

// forEach

companies.forEach(function (company) {
	console.log(company);
});
