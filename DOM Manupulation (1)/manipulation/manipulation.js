const remove = document.querySelector('.remove');

// Changing innerHTML
remove.innerHTML = 'web dev awesome';

// Removing class
remove.classList.remove('remove');

// Adding class
remove.classList.add('add');

// Adding style
remove.style.color = 'bisque';

// creating and append tags in HTML
const h1 = document.createElement('h1');
h1.classList.add('add');
h1.innerHTML = 'Javascript is awesome';

const parent = document.querySelector('.parent');
parent.appendChild(h1);
