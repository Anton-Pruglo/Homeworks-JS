const renderUserCard = (user) => {

};

const userCardImage = new Image();
userCardImage.addEventListener('load', ({currentTarget}) => {
	console.log(currentTarget);

	const imageWraper = document.querySelector('.image-wrapper');
	currentTarget.classList.add('image');
	imageWraper.innerHTML = '';
	imageWraper.appendChild(currentTarget);
});

const imgSrc = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500&quot";
 userCardImage.src = imgSrc;
