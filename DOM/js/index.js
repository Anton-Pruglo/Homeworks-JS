window.addEventListener('load', () => {
	const left = document.querySelector('.left');
	const right = document.querySelector('.right');

	const slider = document.querySelector('.carusel-slide');
	const images = document.querySelectorAll('.carusel-slide img');
	let counter = 0;
	const stepSize = images[0].clientWidth;
	
	right.addEventListener('click', () => {
		(counter >= images.length -1) ? counter = -1 : null;
		slider.classList.add('animation');
		counter++;
		slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
	});
	left.addEventListener('click', () => {
		(counter <= 0) ? counter = images.length : null;
		slider.classList.add('animation');
		counter--;
		slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
	});


})