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
/**
 * * using {for loop} for cutting the payment
 */
for (i = 0; i < actors.length; i++) {
	actors[i].payment = actors[i].payment - 10;
}
console.log(actors);
