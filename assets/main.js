$(document).ready(function(){
	var prodDesc = $('.product__info-container .product__description');
	var prodDescTrigger = $('.product__info-container .product__description-trigger');

	$(prodDescTrigger).click(function () {
		$(prodDesc).toggleClass('product__description--open');
	});
	//$(prodDesc).css('height', '100px');
});