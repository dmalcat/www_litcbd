$(document).ready(function(){
	var prodDesc = $('.product__info-container .product__description');
	var prodDescTrigger = $('.product__info-container .product__description-trigger');

	$(prodDescTrigger).click(function () {
		if (prodDesc.hasClass('product__description--open')) {
			$(prodDesc).removeClass('product__description--open');
			$(prodDescTrigger).text('Více');
		} else {
			$(prodDesc).addClass('product__description--open');
			$(prodDescTrigger).text('Méně');
		}

	});
	//$(prodDesc).css('height', '100px');


	$('#switch').hover(function() {
		$(this).attr('src', imgArr[0]);
		var self = $(this);
		holder = setInterval(switchImages,1000);
	}, function() {
		clearInterval(holder)
	});

	mImageHover();

	function mImageHover() {
		var main = $('#keyFeatures-main');
		var listItem = $('.keyFeatures__list li');

		$(listItem).hover(function(){
			var targetImage = $(this).attr('data-img');
			$(main).fadeOut('fast', function () {
				$(main).attr('src',targetImage);
				$(main).fadeIn('fast');
			}, );
		});
	}
});