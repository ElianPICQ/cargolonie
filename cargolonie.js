"use strict";


const body = document.querySelector('body');

const loader = document.getElementById('loader-wrapper');
const spinningwheel = document.getElementById('wheelimg')

const header = document.getElementById('header');

const logo = document.getElementById('header-logo');
const cargoTitle = document.getElementById('cargolonie');
const titleletters = document.getElementsByClassName('lettre');
const headertext = document.getElementById('header-text');


function	sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function closeLoader() {
    await sleep(1600);
    spinningwheel.classList.replace('wheel-rotate', 'wheel-stop');
    await sleep(2100);



    loader.style.display = 'none';
	body.style.overflow = "auto";  


//	logo.classList.add("shrink-logo");
	headertext.classList.add("show-header-p");
	header.classList.add('shrink-header');
	cargoTitle.classList.add('show-title-la')

	Array.prototype.forEach.call(titleletters, function(item) {
		item.classList.add("lettre");
	});
}

window.addEventListener("load", () => {
	closeLoader();
})


  /************************/
 /* WHAT WE DO - SECTION */
/************************/

const articles = document.querySelectorAll('.whatwedo-article');

const wwdOptions = {
	root: null,
	threshold: 0,
	rootMargin: "-320px 0px -320px 0px"
}

const observer = new IntersectionObserver(function(entries, observer) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting)
			return

		if (entry.target.classList.contains("odd-article"))
			entry.target.classList.add("show-odd-article")

		if (entry.target.classList.contains("even-article"))
			entry.target.classList.add("show-even-article")
	});
}, wwdOptions);


articles.forEach(article => {
	observer.observe(article)
});

/*
Array.prototype.forEach.call(articles, function(article) {
	observer.observe(article);
});
*/