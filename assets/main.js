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

	mImageHover();

	function mImageHover() {
		var main = $('#mImage-main');
		var currImg = $(main).attr('src');
		var listItem = $('.keyFeatures__list li');

		$(listItem).hover(function(){
			var targetImage = $(this).attr('data-img');
			//$(main).attr('src', targetImage);

			$(main).fadeOut('fast', function () {
				$(main).attr('src',targetImage);
			});
		});
	}
});