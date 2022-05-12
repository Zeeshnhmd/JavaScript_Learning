// Object copying

let obj = {
	name: 'Spark18',
};

let user = obj;
user.name = 'arpit';
console.warn(obj);


// the above code is giving output 'arpit' because in javascript reference used to be copy [for example: file manager if you are saving the same file name in the same folder then the previous file will be replaced by the new file.]

// In object memory location is being copied.

// Variable

let x = 'Lalit';
let y = x;
y = 'Sunny';
console.log(x);

// now the above code is not changing value because in {Variable} value is copied.

