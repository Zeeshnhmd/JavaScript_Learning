/**
 * * const are (constant) if we have assigned something to it we cannot change its value
 * * const are block scope
 * * we can store (string, number, object, array, function) inside const.
 */
/**
 * * block scope (meaning to say that we can only use it inside a block{} and not out side of it )
 */

function ages() {
	const age = 23;
	console.log(age);
}
// console.log(age);
ages();
