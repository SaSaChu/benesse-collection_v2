$(function() {
	if($(window).width() <= 992) {
		const $cols = $('.category-section .category-col');
		let $activeCol = $cols.filter('.active');

		function updateOrder() {
			// active 項目永遠是 order: 3
			$activeCol.css('order', 3);
			
			const totalItems = $cols.length;
			$cols.not('.active').each(function() {
				
				let distance = $(this).index() - $activeCol.index();
				let newOrder;

				if(distance < 0) {
					// 前面的項目
					newOrder = 3 + distance;
					if(newOrder < 1) newOrder += totalItems;
				} else {
					// 後面的項目
					newOrder = 3 + distance;
					if(newOrder > totalItems) newOrder -= totalItems;
				}
				
				$(this).css('order', newOrder);
			});
		}

		// 點擊項目時更新順序
		// $cols.on('click', function() {
		// 	$cols.removeClass('active');
		// 	$(this).addClass('active');
		// 	$activeCol = $(this);
		// 	updateOrder();
		// });

		// 初始化順序
		if($activeCol.length !== 0) {
			updateOrder();
		}
	}

	// 密碼眼睛
	$(".checkEye").click(function () {
	  if($(this).hasClass('bi-eye-slash')){
	     $(".floatingPassword").attr('type', 'text');
	  }else{
	     $(".floatingPassword").attr('type', 'password');
	  }
	  $(this).toggleClass('bi-eye-slash').toggleClass('bi-eye');
	});

	$(".checkEye2").click(function () {
	  if($(this).hasClass('bi-eye-slash')){
	     $(".floatingPassword2").attr('type', 'text');
	  }else{
	     $(".floatingPassword2").attr('type', 'password');
	  }
	  $(this).toggleClass('bi-eye-slash').toggleClass('bi-eye');
	}); 

	 // 共用區域
  $("#page-header").load("page-header.html");
  $("#member-footer").load("member-footer.html");

});
