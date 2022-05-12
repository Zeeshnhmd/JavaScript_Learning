// Get element by ID

var banner = document.getElementById('page-banner');
// console.log(banner);

// Get element by class or tag

// By className

var title = document.getElementsByClassName('title');
for (i = 0; i < title.length; i++) {
	// console.log(title[i]);
}

// By Tagname
var lis = document.getElementsByTagName('span');
// console.log(lis[1]);

for (i = 0; i < lis.length; i++) {
	// console.log(lis[i]);
}

// convert it to an array
Array.from(title).forEach(function (item) {
	// console.log(item);
});

// Query Selector
const wrapper = document.querySelector('#wrapper');
// console.log(wrapper);

// To select a Nth child we can use this method
const wrap = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wrap);

// To select the first one
const nam = document.querySelector('#book-list li .name');
// console.log(nam);

//To select all
var books = document.querySelectorAll('#book-list li .name');
// console.log(books);

Array.from(books).forEach(function (book) {
	console.log(book);
});
