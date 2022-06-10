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
