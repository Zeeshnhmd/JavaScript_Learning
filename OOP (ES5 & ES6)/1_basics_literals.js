//Object literal

const book1 = {
	title: 'Book One',
	author: 'John Doe',
	year: '2013',
	getSummary: () => {
		return `${this.title} is written by ${this.title} in ${this.year}`;
	},
};
console.log(book1.getSummary());

// If we want to see the values we can use
console.log(Object.values(book1));

// If we want to see the keys then we can do this
console.log(Object.keys(book1));
