$(document).ready(() => {
	const $menuButton = $('#menu');
	const $dropDown = $('.dropdown');
	
	
	$menuButton.on('mouseenter', () => {
		$menuButton.css('text-shadow', '1px 1px 32px #660000');
		$menuButton.animate({fontSize: '1.2rem'}, 200);
	}).on('mouseleave', () => {
		$menuButton.css('text-shadow', 'none');
		$menuButton.animate({fontSize: '1rem'}, 200);
	});
	
	$menuButton.on('click', () => {
		$dropDown.toggle();
	});
	
	
	$('.menu-shadow').on('mouseenter', event => {
		$(event.currentTarget).css('text-shadow', 'none');
	}).on('mouseleave', event => {
		$(event.currentTarget).css('text-shadow', '0 0 4px lightsalmon');
	});
	
	
});