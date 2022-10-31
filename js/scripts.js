$(document).ready(function()
{
	const parallax = $('.parallax');
	if(parallax)
	{
		const content = $('.parallax__container');
		const clouds = $('.images-parallax__clouds');
		const mountains = $('.images-parallax__mountains');
		const human = $('.images-parallax__human');

		//Odds
		const forClouds = 40;
		const forMountains = 20;
		const forHuman = 10;

		//animation speed
		const speed = 0.05;

		//for equation
		let positionX = 0, positionY = 0;
		let coordXprocent = 0, coordYprocent = 0;

		parallax.mousemove(function(e)
		{
			const parallaxWidth = parallax.width();
			const parallaxHeight = parallax.height();

			const coordX = e.pageX - parallaxWidth / 2;
			const coordY = e.pageY - parallaxHeight / 2;

			coordXprocent = coordX / parallaxWidth * 100;
			coordYprocent = coordY / parallaxHeight * 100;

			const distX = coordXprocent - positionX;
			const distY = coordYprocent - positionY;

			positionX += distX * speed;
			positionY += distY * speed;

			clouds.css('transform', `translate(${positionX / forClouds}%, ${positionY / forClouds}%)`);
			mountains.css('transform', `translate(${positionX / forMountains}%, ${positionY / forMountains}%)`);
			human.css('transform', `translate(${positionX / forHuman}%, ${positionY / forHuman}%)`);
		});
	}

	$('.dropdown-toggle').dropdown();

	$('.major_slider__wrapper').slick(
	{
		autoplay: true,
		accessibility: false,
		autoplaySpeed: 7000,
		speed: 1000,
		arrows: false,
		cssEase: 'ease-out'
	});

});