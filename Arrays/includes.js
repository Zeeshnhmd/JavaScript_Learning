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
