const affichage = document.querySelector('.affichage') ; 
const ajouterEtudiant = document.querySelector('.ajouter-etudiant');
const NumeroId = document.getElementById('NumeroId') ; 
const NiveauValeur = document.getElementById('Niveau-valeur') ; 
const NaissanceValeur = document.getElementById('Naissance-valeur') ; 
const MassarValeur = document.getElementById('Massar-valeur') ; 
const ImageValeur = document.getElementById('Image-valeur') ; 
const btnSubmit = document.querySelector('.btnModifier') ; 

const url = 'http://localhost:3000/slider' ;




window.addEventListener('load', () => {

    // Via Query parameters - GET
     const params = (new URL(document.location)).searchParams;
    const cardID = params.get('cardID');
   







 const afficherEtudiants =(data) => {
  for (var req in data) {

    if(data[req].id == cardID){
        resultat  = `
        <div class="row align-items-center">
        <div class="col-lg-6">
            <div class="main-banner-image-wrap">
                <img src="${data[req].photoEnfant}" alt="image" style="width:500px;height: 500px; border-radius: 50%;">


                <div class="banner-image-wrap-shape">
                    <img src="main-banner-shape-2.png" alt="image">
                  <div  style="font-size:28px;color:#fff;margin-top:40px">  ${data[req].NomEnfant}</div>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="main-banner-image-wrap">
                <img src=" ${data[req].photoPere}" alt="image" style="width:500px;height: 500px; border-radius: 50%;">
                <div  style="font-size:28px;color:#fff;margin-top:40px"> ${data[req].NomPere}</div>
               
                <div class="banner-image-wrap-shape">
                    <img src="main-banner-shape-2.png" alt="image">
                   
                </div>
            </div>
        </div>
    </div>

     
        ` ;
    }
    };
    affichage.innerHTML = resultat ;
}

//afficher les étudiants

fetch(url) 
.then(res => res.json()) 
.then(data => afficherEtudiants(data)) 
})