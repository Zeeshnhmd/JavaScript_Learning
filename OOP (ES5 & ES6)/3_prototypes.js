function Book(title, author, year) {
	this.title = title;
	this.author = author;
	this.year = year;
}

// function using prototype
Book.prototype.getSummary = function () {
	return `${this.title} was written by ${this.author} in ${this.year}`;
};

const book1 = new Book('Book one', 'John Doe', '2013');

console.log(book1);

// we can also get age of book

Book.prototype.getAge = function () {
	const years = new Date().getFullYear() - this.year;
	return `${this.title} is ${years} years old.`;
};
console.log(book1.getAge());

// what if we want to revise the data (manipulating data)

Book.prototype.revise = function (newYear) {
	this.year = newYear;
	this.revised = true;
};

const book2 = new Book('Book Two', 'jane Doe', '2016');

console.log(book2);
book1.revise('2018');
console.log(book1);
