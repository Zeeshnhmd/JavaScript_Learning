function Book() {
	console.log('Book Initialized');
}

// Instatiate an Object
const Book1 = new Book();
const Book2 = new Book();

// Making reusable function

function BookInfo(title, author, year) {
	this.title = title;
	this.author = author;
	this.year = year;
	this.getSummary = () => {
		return `${this.title} is written by ${this.author} in ${this.year}`;
	};
}
const bookInfo1 = new BookInfo('Book One', 'John Doe', '2013');
const bookInfo2 = new BookInfo('Book Two', 'Jane Doe', '2016');
console.log(bookInfo1.getSummary());

// dont forget to give brackets() after function name as it is a method
console.log(bookInfo2.getSummary());

// now when we will console this out we can see that console it showing it a getsummary as function so here we wil use (3_prototype.js)
console.log(bookInfo2);
