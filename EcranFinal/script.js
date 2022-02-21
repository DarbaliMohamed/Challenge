/**
 * Creator           : Coding's Time
 * Youtube Channel   : https://www.youtube.com/channel/UC6dnKqrImGWqMb9ty1n0Ziw
 * Github Profile    : https://github.com/codingstime
 */
 let at = [] ; 

 at[0] = document.querySelector(".at1");
 at[1] = document.querySelector(".at2");
 at[2] = document.querySelector(".at3");
 at[3] = document.querySelector(".at4");
 at[4] = document.querySelector(".at5");
 at[5] = document.querySelector(".at6");
 at[6] = document.querySelector(".at7");
 at[7] = document.querySelector(".at8");
 at[8] = document.querySelector(".at9");
 at[9] = document.querySelector(".at10");

 const pere_name1 = document.querySelector(".person_name1");
 const enfant_name2 = document.querySelector(".person_name2");

 let photoenfant = [] ; 
 let photoparent = [] ; 
 let nompere = [] ; 
 let nomenfant = [] ; 

 let resulPhotoEnfant = [] ;
 let resulPhotopere = [];

 var i = 0 , k = 0,s = 0; 

 const url = 'http://localhost:3000/slider' ;


 fetch(url)
 .then(res =>res.json())
 .then(data => {
     for(pic in data){
      photoenfant[i] = data[pic].photoEnfant ;
      photoparent[i] = data[pic].photoPere ;
      nompere[i] = data[pic].NomPere ; 
      nomenfant[i] = data[pic].NomEnfant ; 
         i++;
         
     };

     for(pic in data){
      resulPhotoEnfant[k] = ` <img src="${photoenfant[k]}" alt="" class="carousel_img rounded">` ;
      resulPhotopere[k] = ` <img src="${photoparent[k]}" alt="" class="carousel_img rounded">` ;
         k++;
         
     };


     
/*      const result = ` <img src="${photoenfant[0]}" alt="" class="carousel_img rounded">` ;
     const result2 = ` <img src="${photoparent[0]}" alt="" class="carousel_img rounded">` ;
     const na = ` <p class="alert alert-dark my-3">${nompere[0]}</p>` ;
     const nb = ` <p class="alert alert-dark my-3">${nomenfant[0]}</p>` ;
     const result3 = ` <img src="${photoenfant[1]}" alt="" class="carousel_img rounded">` ;
     const result4 = ` <img src="${photoparent[1]}" alt="" class="carousel_img rounded">` ; */
     /*      at[2].innerHTML = resulPhotoEnfant[1] ; 
     at[3].innerHTML = resulPhotopere[1] ; 
     at[4].innerHTML = resulPhotoEnfant[2] ; 
     at[5].innerHTML = resulPhotopere[2] ;  */


var p=0,l=0,h=0;

     for(pic in data){
      l = p+1 ;
     at[p].innerHTML = resulPhotoEnfant[h] ; 
     at[l].innerHTML = resulPhotopere[h] ; 

     p=p+2;l++;h++;
   }

 })


 window.addEventListener("load", () => {
   autoSlide();
})

function autoSlide() {
   setInterval(() => {
      slide(getItemActiveIndex() + 1);
   }, 6000); // slide speed = 3s
}

function slide(toIndex) {
   const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
   const itemActive = document.querySelector(".carousel_item__active");

   // check if toIndex exceeds the number of carousel items
   if (toIndex >= itemsArray.length) {
      toIndex = 0;
   }

   const newItemActive = itemsArray[toIndex];

   // start transition
   newItemActive.classList.add("carousel_item__pos_next");
   setTimeout(() => {
      newItemActive.classList.add("carousel_item__next");
      itemActive.classList.add("carousel_item__next");
   }, 20);

   // remove all transition class and switch active class
   newItemActive.addEventListener("transitionend", () => {
      itemActive.className = "carousel_item";
      newItemActive.className = "carousel_item carousel_item__active";
   }, {
      once: true
   });
}

function getItemActiveIndex() {
   const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
   const itemActive = document.querySelector(".carousel_item__active");
   const itemActiveIndex = itemsArray.indexOf(itemActive);
   return itemActiveIndex;
} 