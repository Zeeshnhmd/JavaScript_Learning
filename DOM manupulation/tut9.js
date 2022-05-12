// events

// to delete some thing
var btns = document.querySelectorAll('#book-list .delete');
btns.forEach(function (btn) {
	btn.addEventListener('click', function (e) {
		const li = e.target.parentElement;
		li.parentNode.removeChild(li);
	});
});

// prevent link to visit the site
const link = document.querySelector('#page-banner a');

link.addEventListener('click', function (e) {
	e.preventDefault();
	console.log('navigation to', e.target.textContent, 'was prevente');
});
