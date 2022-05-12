// 5. Changing Text and HTML content

// To get the text
const books = document.querySelectorAll('#book-list li .name');
Array.from(books).forEach(function (book) {
	console.log(book.textContent); // we are writing here textcontent because we want the text inside the name class
});

// To change the text

const textChange = document.querySelectorAll('#book-list li .name');
Array.from(textChange).forEach(function (text) {
	text.textContent = 'test';
});

// to append (adding more text)

const append = document.querySelectorAll('#book-list li .name');
Array.from(append).forEach(function (appen) {
	appen.textContent += ' (book title)';
});

// To change the innerHTML

const bookList = document.querySelector('#page-banner');
// bookList.innerHTML = '<h2> Hi there... </h2>';
bookList.innerHTML += '<p> this is how you change inner html</p>';
