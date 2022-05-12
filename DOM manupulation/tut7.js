// Traversing the DOM

const bookList = document.querySelector('#book-list');

console.log(bookList.parentNode);
console.log(bookList.parentElement);
// parentNode and parentElement does the same thing

// what if we want to go on level up of selected parent element
console.log(bookList.parentElement.parentElement);

// select all child nodes
console.log(bookList.childNodes); // (if we see 'text in console then it means their is line break)

// if we want only the childrens
console.log(bookList.children);

// to get the next sibling
console.log(bookList.nextElementSibling);

// to get the previous sibiling
console.log(bookList.previousElementSibling);

// to change the innerhtml
bookList.previousElementSibling.querySelector('p').innerHTML +=
	'<br/> Too cool for everyone';
