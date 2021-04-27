const user = [
	{
		firstName: "Test",
		lastName: "Testovich",
		image: null,
	},
	
	{
		firstName: "Ilon",
		lastName: "Mask",
		image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500&quot;,ttps://www.kp.ru/share/i/12/10604075/ttps://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500&quot",
	},
	{
		firstName: "Mirco",
		lastName: "Kropovich",
		image: null,
	},
	{
		firstName: "Jony",
		lastName: "Depp",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpo-Ymw6orpXA8AGXd2Mr2tJtphj5t4Uii6YbqIdsGkk8nOplRSFh_01xZ9H4uOEUHTqA&usqp=CAU",
	},
	{
		firstName: "Arnold",
		lastName: "Schwarzenegger",
		image: "https://images-na.ssl-images-amazon.com/images/I/61u07onB8yL._AC_SX466_.jpg",
	},
]
const arrImage = user.map(({firstName,lastName,image}) => image);
const arrFullName = user.map(({firstName,lastName,image}) => `${firstName} ${lastName}`);


const userContainer = document.querySelector('.users');
const template = document.querySelector('#clone-card');
const h1 = template.content.querySelector('h1');
const placeholder = template.content.querySelector('.image-placeholder');



for(let key of arrFullName) {
	h1.textContent = key;
	placeholder.textContent = key.split(" ").map((n)=>n[0]).join("");
	placeholder.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
	const copyCard = template.content.cloneNode(true);
	userContainer.append(copyCard);
	
	}
	
for(let key of arrImage) {
	const userCardImage = new Image();

	userCardImage.addEventListener('load', ({currentTarget}) => {
		const imageWrapper = document.querySelector('.image-wrapper');
		
		currentTarget.classList.add('image');
		imageWrapper.innerHTML = '';
		imageWrapper.appendChild(currentTarget);
		
	});
		
	const imgSrc = key;	
	userCardImage.src = imgSrc;	
}
	




