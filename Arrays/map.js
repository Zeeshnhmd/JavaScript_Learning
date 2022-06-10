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
