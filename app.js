/* app.js - Para sa Home Page */
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	const scroll_position = window.scrollY;

	// Use #29323c when scrolled down,rgb(121, 127, 133) when at top
	if (scroll_position > 50) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'rgba(82, 84, 85, 0.8)';
	}
});
const projectButtons = document.querySelectorAll('.project-btn');



menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.remove('active');
		mobile_menu.classList.remove('active');
	});
});

