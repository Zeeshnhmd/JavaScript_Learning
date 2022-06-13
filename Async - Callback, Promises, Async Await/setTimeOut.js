/**
 * * Aggenda
 *
 * * 1. Register
 * * 2. Send Welcome Email
 * * 3. Login
 * * 4. Get User Data
 * * 5. Display user data
 */

/**
 * * using setTimeOut to delay as we know that {setTimeOut} is a asynchronous function.
 */
const register = () => {
	setTimeout(() => {
		console.log('Register');
	}, 1000);
};
const sendWelcomeEmail = () => {
	setTimeout(() => {
		console.log('Send Welcome Email');
	}, 2000);
};
const login = () => {
	setTimeout(() => {
		console.log('Login');
	}, 3000);
};
const getUserData = () => {
	setTimeout(() => {
		console.log('Get User Data');
	}, 4000);
};
const displayUserData = () => {
	setTimeout(() => {
		console.log('Display user data');
	}, 5000);
};

register();
sendWelcomeEmail();
login();
getUserData();
displayUserData();

console.log('Other Application Work');
