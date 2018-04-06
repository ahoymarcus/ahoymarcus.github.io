$(document).ready(() => {
	const $menuButton = $('#menu');
	const $dropDown = $('.dropdown');
	
	
	$menuButton.on('mouseenter', () => {
		$menuButton.siblings().css('text-shadow', '1px 1px 12px darkGray');
		$menuButton.siblings().animate( {fontSize: '1.2rem' }, 200);
	}).on('mouseleave', () => {
		$menuButton.siblings().css('text-shadow', '0 0 8px GoldenRod', '0 0 16px #ba613b');
		$menuButton.siblings().animate( {fontSize: '1rem'}, 200 );
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
		$(event.currentTarget).css('text-shadow', '0 0 8px GoldenRod', '0 0 16px #ba613b');
	});
	
	
	 
	
});