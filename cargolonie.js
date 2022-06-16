"use strict";


const body = document.querySelector('body');

const loader = document.getElementById('loader-wrapper');
//const spinningwheel = document.getElementById('wheelimg')

const header = document.getElementById('header');

const logo = document.getElementById('header-logo');

const cargoTitle = document.getElementById('cargolonie');
const cargoTitleLa = document.getElementById('title-la');
const titleletters = document.getElementsByClassName('lettre');
const headertext = document.getElementById('header-text');


function	sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function closeLoader() {
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
	rootMargin: "-300px 0px -300px 0px"
};

const observer = new IntersectionObserver(function(entries, observer) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting)
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