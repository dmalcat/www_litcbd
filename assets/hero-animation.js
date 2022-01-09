// Wrap every letter in a span
var textWrapper = document.querySelector('.banner__heading');
console.log(textWrapper);
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
	.add({
		targets: '.banner__heading .letter',
		opacity: [0,1],
		easing: "easeInOutQuad",
		duration: 1500,
		delay: (el, i) => 150 * (i+1)
	}).add({
	targets: '.banner__heading ',
	opacity: 0,
	duration: 1000,
	easing: "easeOutExpo",
	delay: 1000
});