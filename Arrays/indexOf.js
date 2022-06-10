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
