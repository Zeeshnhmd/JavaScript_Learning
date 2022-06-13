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
 * * we are passing callback function inside the parameter we can name the parameter anything but we have call it callback just for the naming convention
 */
const register = (callback) => {
	setTimeout(() => {
		console.log('Register');
		// after setting parameter we called the function
		callback();
	}, 2000);
};
const sendWelcomeEmail = (callback) => {
	setTimeout(() => {
		console.log('Send Welcome Email');
		callback();
	}, 3000);
};
const login = (callback) => {
	setTimeout(() => {
		console.log('Login');
		callback();
	}, 4000);
};
const getUserData = (callback) => {
	setTimeout(() => {
		console.log('Get User Data');
		callback();
	}, 5000);
};
const displayUserData = () => {
	setTimeout(() => {
		console.log('Display user data');
	}, 1000);
};

/**
 * * as we have set callback function for register so we need to rap all the other function within the register function which need to be run after the register function
 * * and so on
 * * but this is not the correct way to {now a days we call this process callback hell} now in modern javascript we have introduces {promises}
 */
register(() => {
	sendWelcomeEmail(() => {
		login(() => {
			getUserData(() => {
				displayUserData();
			});
		});
	});
});

console.log('Other Application Work');
