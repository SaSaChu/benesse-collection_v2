$(function() {

	if($('.age-swiper').length > 0) {
		let activeIndex = $('.age-swiper .swiper-slide:has(.age-item.active)').index();
		
		let ageSwiper = new Swiper('.age-swiper', {
				initialSlide: activeIndex,
				centeredSlides: true,
				slidesPerView: 3,
				spaceBetween: 16,
				loop: true,	
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				992: {
					centeredSlides: false,
					slidesPerView: 'auto',
					spaceBetween: 30,
					direction: 'horizontal',
					loop: false,
					navigation: {
						enabled: false
					},
				}
			},
		});
	}

	if($('.sidebar-swiper').length > 0) {
		// 若沒有 select-wrapper 則進行初始化，有 select-wrapper 則直接在該頁面ajax時處理
		if(!$('.select-wrapper').length) {
			let activeIndex = $('.sidebar-swiper .swiper-slide:has(.sidebar-item.active)').index();
			let slideCount = $('.sidebar-swiper .swiper-slide').length;
			let sidebarSwiper = new Swiper('.sidebar-swiper', {
				initialSlide: activeIndex,
				// centeredSlides: slideCount > 2.2 ? true : false,
				direction: 'horizontal',
				slidesPerView: 2.2,
				spaceBetween: 10,
				loop: false,
				breakpoints: {
					768: {
						slidesPerView: 3,
						spaceBetween: 15,
					},
					992: {
						centeredSlides: false,
						direction: 'vertical',
						slidesPerView: 'auto',
						loop: false,
					}
				},
			});
		}
	}

	if($('.sidebar04-swiper').length > 0) {
		let swiperWrapper = $('.sidebar04-swiper .swiper-wrapper');
			// 檢查是否有 swiper-slide，若無則抓取預設的第一個 accordion 內容
			if ($('.sidebar04-swiper .swiper-slide').length === 0) {
			
			let defaultItems = $('#accordionPanelsStayOpen').find('.show .sidebar-item');
			
			defaultItems.each(function() {
				let slide = $('<div>').addClass('swiper-slide');
				slide.append($(this).clone());
				swiperWrapper.append(slide);
			});
		}

		$('.select-wrapper .sidebar-select').on('click', function() {
			let target = $(this).data('target');
			let targetTitle = $(this).text();
			let sidebarItems = $(target).find('.sidebar-item');
			
			swiperWrapper.empty();
			sidebarItems.each(function() {
				let slide = $('<div>').addClass('swiper-slide');
				slide.append($(this).clone());
				swiperWrapper.append(slide);
			});

			$('.select-wrapper .dropdown-toggle').text(targetTitle);

			sidebar04Swiper.update();
		});

		let activeIndex = $('.sidebar04-swiper .swiper-slide:has(.sidebar-item.active)').index();
		let slideCount = $('.sidebar04-swiper .swiper-slide').length;
		let sidebar04Swiper = new Swiper('.sidebar04-swiper', {
			initialSlide: activeIndex,
			// centeredSlides: slideCount > 2.2 ? true : false,
			direction: 'horizontal',
			slidesPerView: 2.2,	
			spaceBetween: 10,
			loop: false,
			breakpoints: {
				768: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
			},
		});
	}
});