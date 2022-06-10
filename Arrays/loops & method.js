const actors = [
	{
		name: 'actor 1',
		payment: 100,
	},
	{
		name: 'actor 2',
		payment: 200,
	},
	{
		name: 'actor 3',
		payment: 150,
	},
];
actors.push({ name: 'actor 4', payment: 300 });
/**
 * * using {for loop} for cutting the payment
 */
// for (i = 0; i < actors.length; i++) {
// 	actors[i].payment = actors[i].payment - 10;
// }
// console.log(actors);

/**
 * * using {foreach loop} for cutting the salary
 */
// actors.forEach((actor) => {
// 	actor.payment = actor.payment - 10;
// });
// console.log(actors);

/**
 * * using {forof loop} for cutting the salary
 */
for (let actor of actors) {
	actor.payment = actor.payment - 10;
}
console.log(actors);

/**
 * * using {filter()} method to get the student who get mark less than 45
 */
const students = [
	{
		name: 'Student 1',
		marks: 45,
	},
	{
		name: 'Student 2',
		marks: 65,
	},
	{
		name: 'Student 3',
		marks: 35,
	},
];
const failed = students.filter((student) => {
	if (student.marks < 45) {
		return true;
	} else {
		return false;
	}
});
console.log(failed);

/**
 * * we can also do the above thing in a easy way
 */

const fail = students.filter((student) => {
	return student.marks < 45;
});
console.log(fail);

/**
 * * lets do the above thing in one line
 */

const failedStudent = students.filter((student) => student.marks < 45);
console.log(failedStudent);

/**
 * * using {map()} method to get the users
 */

const users = [
	{
		firstname: 'Jhon',
		lastname: 'Doe',
	},
	{
		firstname: 'Jhan',
		lastname: 'Doe',
	},
];

const person = users.map((user) => {
	return {
		fullname: `${user.firstname} ` + `${user.lastname}`,
	};
});

console.log(person);

/**
 * * Reduce
 */

const movies = [
	{
		movie: 'Bhoot nath',
		budget: 200,
	},
	{
		movie: 'Bhoot nath',
		budget: 300,
	},
	{
		movie: 'Bhoot nath',
		budget: 100,
	},
];

const total = movies.reduce((acc, movie) => {
	acc += movie.budget;
	return acc;
}, 0);
console.log(total);

/**
 * * indexOf
 */

const array = [1, 2, 3, 4, 5];
const user = {
	name: 'abc',
	id: 4,
};
const loggedIn = array.indexOf(user.id) > -1;
console.log(loggedIn);

/**
 * * includes
 * * The includes() method returns true if a string contains a specified string.
 * * Otherwise it returns false.
 * * syntax ['string.includes(searchvalue, start)']
 */
const data = [1, 2, 3, 4, 5];
const people = {
	name: 'abc',
	id: 6,
};
const find = data.includes(people.id);
console.log(find);

/**
 * * find()
 */
const userss = [
	{
		name: 'abc',
		id: 1,
	},
	{
		name: 'xyz',
		id: 2,
	},
	{
		name: 'akesebc',
		id: 3,
	},
];

const zeeshan = userss.find((users) => {
	if (users.id === 2) {
		return true;
	} else {
		false;
	}
	// OR
	return users.id === 3;
});
console.log(zeeshan);

/**
 * * sort()
 * * The sort() method sorts an array alphabetically
 */

const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(fruits.sort());
