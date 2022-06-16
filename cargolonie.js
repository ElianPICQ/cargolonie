"use strict";


const body = document.querySelector('body');

const loader = document.getElementById('loader-wrapper');
<<<<<<< HEAD
const spinningwheel = document.getElementById('wheelimg')
=======
//const spinningwheel = document.getElementById('wheelimg')
>>>>>>> 20f1bdc (first design - still in wip)

const header = document.getElementById('header');

const logo = document.getElementById('header-logo');
<<<<<<< HEAD
const cargoTitle = document.getElementById('cargolonie');
=======

const cargoTitle = document.getElementById('cargolonie');
const cargoTitleLa = document.getElementById('title-la');
>>>>>>> 20f1bdc (first design - still in wip)
const titleletters = document.getElementsByClassName('lettre');
const headertext = document.getElementById('header-text');


function	sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function closeLoader() {
<<<<<<< HEAD
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
=======
/*
    await sleep(2100);
*/


//    loader.style.display = 'none';
/*
	Array.prototype.forEach.call(titleletters, function(item) {
		item.classList.add("lettre");
	});
*/
	cargoTitle.classList.add('show-title');
	cargoTitleLa.classList.add('show-title-la')
//	logo.classList.add("shrink-logo");
	headertext.classList.add("show-header-p");
//	header.classList.add('shrink-header');

>>>>>>> 20f1bdc (first design - still in wip)
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
<<<<<<< HEAD
	rootMargin: "-320px 0px -320px 0px"
}
=======
	rootMargin: "-300px 0px -300px 0px"
};
>>>>>>> 20f1bdc (first design - still in wip)

const observer = new IntersectionObserver(function(entries, observer) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting)
<<<<<<< HEAD
			return

		if (entry.target.classList.contains("odd-article"))
			entry.target.classList.add("show-odd-article")

		if (entry.target.classList.contains("even-article"))
			entry.target.classList.add("show-even-article")
=======
		{
			if (entry.target.classList.contains("odd-article"))
				entry.target.classList.replace("show-odd-article", "hide-odd-article");

			if (entry.target.classList.contains("even-article"))
				entry.target.classList.replace("show-even-article", "hide-even-article");
			return
		}
		if (entry.target.classList.contains("odd-article") && entry.target.classList.contains("hide-odd-article"))
			entry.target.classList.replace("hide-odd-article", "show-odd-article");

		if (entry.target.classList.contains("even-article") && entry.target.classList.contains("hide-even-article"))
			entry.target.classList.replace("hide-even-article", "show-even-article");
>>>>>>> 20f1bdc (first design - still in wip)
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