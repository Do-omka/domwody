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
	
	// if (document.querySelector('.main_left')) {
	// 	let swiper = new Swiper('.main .container', {
	// 		slidesPerView: 'auto',
	// 		freemode: true,
	// 		// virtualTranslate: true,
	// 		// simulateTouch: false,
	// 	})
	// }
	
	
	
	document.querySelector('.main-content').addEventListener('touchstart', handleTouchStart, false);
	document.querySelector('.main-content').addEventListener('touchmove', handleTouchMove, false);
	
	var xDown = null;
	var yDown = null;
	
	function getTouches(evt) {
		return evt.touches ||             // browser API
		evt.originalEvent.touches; // jQuery
	}
	
	function handleTouchStart(evt) {
		const firstTouch = getTouches(evt)[0];
		xDown = firstTouch.clientX;
		yDown = firstTouch.clientY;
	};
	
	function handleTouchMove(evt) {
		if ( ! xDown || ! yDown ) {
			return;
		}
		
		var xUp = evt.touches[0].clientX;
		var yUp = evt.touches[0].clientY;
		
		var xDiff = xDown - xUp;
		var yDiff = yDown - yUp;
		
		if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
			if ( xDiff > 0 ) {
				document.querySelector('.main-content .main_left').classList.remove('active')
				/* left swipe */
			} else {
				document.querySelector('.main-content .main_left').classList.add('active')
				/* right swipe */
			}
		} else {
			if ( yDiff > 0 ) {
				/* up swipe */
			} else {
				/* down swipe */
			}
		}
		/* reset values */
		xDown = null;
		yDown = null;
	}
})
