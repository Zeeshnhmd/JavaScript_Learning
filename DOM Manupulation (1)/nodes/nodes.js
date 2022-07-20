/**
 * * 1. ParentNode :- Helps us to select the parentNode
 * * 2. ChildNodes :- Helps us to select the childNode
 * * 3. nextElementSibling :- Helps us to select the next element
 * * 4. previousElementSibling :- Helps us to select the previous element
 */

// parentNode

const heading = document.querySelector('.heading');
const parent = heading.parentNode;
console.log(parent);

// ChildNodes

const childNodes = document.querySelector('.childNode');
const child = childNodes.childNodes;
console.log(child);

// nextElementSibling

const nextElementSiblingh1 = document.querySelector('.nextElementSiblingh1');
// const nextElementSibling = nextElementSiblingh1.nextElementSibling;
console.log(nextElementSiblingh1.nextElementSibling);

// previousElementSibling

const previousElementSibling = document.querySelector(
	'.previousElementSiblingh1'
);
console.log(previousElementSibling.previousElementSibling);
