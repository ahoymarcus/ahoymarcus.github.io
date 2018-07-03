$(document).ready(() => {
	const $menuButton = $('#menu');
	const $dropDown = $('.dropdown');
	
	
	$menuButton.on('mouseenter', () => {
		$menuButton.siblings().css('text-shadow', '1px 1px 12px aliceblue');
		$menuButton.siblings().animate({fontSize: '1.2rem'}, 200);
	}).on('mouseleave', () => {
		$menuButton.siblings().css('text-shadow', '0 0 4px lightsalmon');
		$menuButton.siblings().animate({fontSize: '1rem'}, 200);
	});
	
	$menuButton.on('click', () => {
		$dropDown.slideToggle('slow');
	});
	$menuButton.siblings().on('click', () => {
		$dropDown.slideToggle('slow');
	});
	
	
	$('.menu-shadow').on('mouseenter', event => {
		$(event.currentTarget).css('text-shadow', 'none');
	}).on('mouseleave', event => {
		$(event.currentTarget).css('text-shadow', '0 0 4px lightsalmon');
	});
	
});


var navCollapse = document.querySelectorAll('.nav-collapsible');
var k;

for (k=0; k<navCollapse.length; k++) {
	navCollapse[k].addEventListener('click', function() {
		this.classList.toggle('active');
		var content = this.nextElementSibling;
		if (content.style.display === 'block') {
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
	}); 
}



