const etudiantList = document.querySelector('.slide-inside') ;  


let resultat = '' ; 

const url = 'http://localhost:3000/enDirect' ;

window.onload = function(){


const afficherEtudiants =(data) => {
    data .forEach(etudiants => {
        resultat += `
        <div class="slide">
            <img src="${etudiants.ImageEtudient}" alt="">
            <img src="${etudiants.ImageParent}" alt="">
        </div>     
        ` ;
    });
    etudiantList.innerHTML = resultat ;
}

fetch(url) 
.then(res => res.json()) 
.then(data => afficherEtudiants(data)) 


var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

	var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

	var index = 0, time = 5000;
	slides[index].classList.add('active');

	setInterval( () => {
		slides[index].classList.remove('active');
		
		index++;
		if (index === slides.length) index = 0;

		slides[index].classList.add('active');

	}, time);
}


}

