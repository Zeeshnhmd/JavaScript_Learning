const languages = ['javascript', 'c', 'java'];

/**
 * * push() method adds a new element to an array (at the end)
 */
languages.push('python');

/**
 * * pop() method removes the last element from an array
 */
languages.pop();

/**
 * * The shift() method removes the first array element and "shifts" all other elements to a lower index.
 */
languages.shift();

/**
 * * The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements.
 */
languages.unshift('dart');

/**
 * * changing element
 */
languages[0] = 'c++';
console.log(languages);

/**
 * * Javascript Array length
 * * The (length) property provides an easy way to append a new element to an array
 */
const fruits = ['banana', 'orange', 'Apple', 'Mango'];
fruits[fruits.length] = 'kiwi';
console.log(fruits);

/**
 * * Merging (Concatenating) Arrays
 */
const myGirls = ['jane', 'Doe'];
const myBoys = ['Jhon', 'Doe'];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

/**
 * * Merging Three Arrays
 */
const vegFood = ['salad', 'Paneer'];
const nonVegFood = ['chicken', 'Fish'];
const drink = ['orange juice'];

const foods = vegFood.concat(nonVegFood, drink);
document.getElementById('food').innerHTML = foods;

/**
 * * The concat() method can also take strings as arguments
 * * Merging an array with value
 */
const game = ['cricket', 'football', 'badminton'];
const outdoorGames = game.concat('tennis');
document.getElementById('games').innerHTML = outdoorGames;
