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
 * * using {forof loop} for cutting the salary
 */
for (let actor of actors) {
	actor.payment = actor.payment - 10;
}
console.log(actors);
