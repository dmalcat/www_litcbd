$(document).ready(function(){
	var prodDesc = $('.product__info-container .product__description');
	var prodDescTrigger = $('.product__info-container .product__description-trigger');

	$(prodDescTrigger).click(function () {
		if (prodDesc.hasClass('product__description--open')) {
			console.log('do');
		} else {
			console.log('dont');
		}

	});
	//$(prodDesc).css('height', '100px');
});