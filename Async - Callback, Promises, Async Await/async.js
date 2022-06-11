console.log('first');
/**
 * * settimeout is a asychronous function
 * * eventlistener are also asychronous functions
 * * for clear understanding visit:- http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ3N0YXJ0Jyk7CgpzZXRUaW1lb3V0KCgpPT4gewogICAgY29uc29sZS5sb2coJ0ltIGZvcm0gc2V0VGltZU91dCcpOwp9LCA0MDAwKTsKCmNvbnNvbGUubG9nKCdzZWNvbmQnKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
 */
setTimeout(() => {
	console.log('Im form setTimeout');
}, 4000);

console.log('second');
