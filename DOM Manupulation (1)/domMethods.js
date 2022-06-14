/**
 * * DOM Manipulation Document Object Modal
 * * 1. getElementById
 * * 2. getElementsByTagName
 * * 3. getElementByClassName
 * * 4. querySelector
 * * 5. querySelectorAll
 */

// 1. getElementById
const getElementById = document.getElementById('getElementById');
console.log(getElementById);

// 2. getElementsByTagName
const span = document.getElementsByTagName('span');
/**
 * * To get the first element we will use the array
 */
console.log(span[0]);

// 3. getElementByClassName
const getElementByClassName = document.getElementsByClassName(
	'getElementByClassName'
);
console.log(getElementByClassName[0]);

// 4. querySelector
/**
 * * querySelector is more helpful
 * * we can select both id and class using this to select an id we use {#} and to select an class we use {.} just like css
 */
const querySelector = document.querySelector('.querySelector');
console.log(querySelector);

// 5. querySelectorAll
const querySelectorAll = document.querySelectorAll('.querySelectorAll');
console.log(querySelectorAll[2]);
