/**
 * * using {filter()} method to get the student who get mark less than 45
 */
const students = [
	{
		name: 'Student 1',
		marks: 45,
	},
	{
		name: 'Student 2',
		marks: 65,
	},
	{
		name: 'Student 3',
		marks: 35,
	},
];
const failed = students.filter((student) => {
	if (student.marks < 45) {
		return true;
	} else {
		return false;
	}
});
console.log(failed);

/**
 * * we can also do the above thing in a easy way
 */

const fail = students.filter((student) => {
	return student.marks < 45;
});
console.log(fail);

/**
 * * lets do the above thing in one line
 */

const failedStudent = students.filter((student) => student.marks < 45);
console.log(failedStudent);
