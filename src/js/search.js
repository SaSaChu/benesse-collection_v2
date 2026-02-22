$(function() {	
	// 月刊有書書
	if ($('.featured-book-swiper').length > 0) {
		let bookSwiper = new Swiper('.featured-book-swiper', {
			// autoplay: true,
	    	loop: true,
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 35,
			breakpoints: {
				768: {
					slidesPerView: 3,
					slidesPerGroup: 3,
				},
				1200: {
					slidesPerView: 4,
					slidesPerGroup: 4,
				},
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});
	}

	// 月刊學習影音
	if ($('.featured-video-swiper').length > 0) {
		let videoSwiper = new Swiper('.featured-video-swiper', {
			// autoplay: true,
			loop: true,
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 35,
			breakpoints: {
				768: {
					slidesPerView: 3,
					slidesPerGroup: 3,
				},
				1200: {
					slidesPerView: 4,
					slidesPerGroup: 4,
				},
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});
	}

	// 巧虎影音
	if ($('.tiger-swiper').length > 0) {
		let tigerSwiper = new Swiper('.tiger-swiper', {
			// autoplay: true,
			loop: true,
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 35,
			breakpoints: {
				768: {
					slidesPerView: 3,
					slidesPerGroup: 3,
				},
				1200: {
					slidesPerView: 4,
					slidesPerGroup: 4,
				},
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});
	}

	// 奇酷網影音
	if ($('.kid-school-swiper').length > 0) {
		let kidSchoolSwiper = new Swiper('.kid-school-swiper', {
			// autoplay: true,
			loop: true,
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 35,
			breakpoints: {
				768: {
					slidesPerView: 3,
					slidesPerGroup: 3,
				},
				1200: {
					slidesPerView: 4,
					slidesPerGroup: 4,
				},
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});
	}
});