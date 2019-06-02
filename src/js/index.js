// function findAncestor (el, cls) {
// 	while ((el = el.parentel) && !el.clsList.contains(cls));
// 	return el
// }
//
// function isElementInViewport (el) {
// 	let rect = el.getBoundingClientRect()
// 	return !(rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight)
// }

document.addEventListener('DOMContentLoaded', (e)=> {
	
	if (document.querySelector('.other_products-slider')) {
		let swiper = new Swiper('.other_products-slider', {
			slidesPerView: 'auto',
			simulateTouch: false,
			// autoHeight: true,
			navigation: {
			  nextEl: '.other_products-slider .controls .next',
			  prevEl: '.other_products-slider .controls .prev',
			},
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
		})
	}
	
	if (document.querySelector('.reviews .slider')) {
		let swiper = new Swiper('.reviews .slider', {
			slidesPerView: 'auto',
			simulateTouch: false,
			watchSlidesProgress: true,
			watchSlidesVisibility: true,
			// spaceBetween: 0,
			// autoHeight: true,
			navigation: {
			  nextEl: '.reviews .slider .controls .next',
			  prevEl: '.reviews .slider .controls .prev',
			},
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
		})
	}
	
})
