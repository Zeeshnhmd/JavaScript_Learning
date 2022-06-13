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
 * * Here we are using {Promises} to show data in arrange manner
 */
const register = () => {
	// need to set promise like these this will take two parameter 1st one is resolve and 2nd one reject
	return new Promise((res, rej) => {
		setTimeout(() => {
			// setting error if there is a problem
			return rej('Error while Registering');
			console.log('Register');
			// after resolving the things we are calling resolve
			res();
		}, 5000);
	});
};
const sendWelcomeEmail = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			console.log('Send Welcome Email');
			res();
		}, 4000);
	});
};
const login = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			console.log('Login');
			res();
		}, 3000);
	});
};
const getUserData = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			console.log('Get User Data');
			res();
		}, 2000);
	});
};
const displayUserData = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			console.log('Display user data');
			res();
		}, 1000);
	});
};

/**
 * * here no need to call the function {.then} will call the function automatically
 */
register()
	.then(sendWelcomeEmail)
	.then(login)
	.then(getUserData)
	.then(displayUserData)
	/**
	 * * {catch()} helps us to display error
	 * * thing we pass inside {rej()} we can receive that in {catch()}
	 *  */
	.catch((err) => {
		console.log('Error:', err);
	});

console.log('Other Application Work');
