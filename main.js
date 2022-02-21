const etudiantList = document.querySelector('.table-body') ; 
const ajouterEtudiant = document.querySelector('.ajouter-etudiant');
const NomValeur = document.getElementById('Nom-valeur') ; 
const NiveauValeur = document.getElementById('Niveau-valeur') ; 
const NaissanceValeur = document.getElementById('Naissance-valeur') ; 
const MassarValeur = document.getElementById('Massar-valeur') ; 
const ImageValeur = document.getElementById('Image-valeur') ; 
const btnSubmit = document.querySelector('.btnModifier') ; 
 

let resultat = '' ; 

const url = 'http://localhost:3000/parents' ;




//hide ajoute espace 

const targetDiv = document.getElementById("ajouter-invisible-espace");
const btn = document.getElementById("toggle");
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};




//aficher les etudients

const afficherEtudiants =(data) => {
  for (var etudiants in data) {
        resultat += `
        <tbody>
          <tr >
            <td>${data[etudiants].id}</td>
            <td class="nomPrenom" >${data[etudiants].Nom}</td>
            <td class="niveau">${data[etudiants].Niveau}</td>
            <td class="dateNaissance">${data[etudiants].DateNaissance}</td>
            <td class="codeMassar">${data[etudiants].CodeMassar}</td>
            <td class="imageEtu"><img class="rounded imageEtu" width="80" height="80" src="${data[etudiants].Image}" alt=""></td>
            <td><button class="btnModifier btn btn-primary btn-sm" id="modifier-etudient" >Modifier</button></td>
            <td data-id=${data[etudiants].id}><button type="button" class="btn btn-danger btn-sm" id="supprimer-etudient">Supprimer</button></td>
          </tr>

        </tbody>
     
        ` ;
    };
    etudiantList.innerHTML = resultat ;
}

//afficher les étudiants

fetch(url) 
.then(res => res.json()) 
.then(data => afficherEtudiants(data)) 



function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.addEventListener(
      "load",
      function() {
        var avatarImg = new Image();
        var src = reader.result;
        avatarImg.src = src;
        document.getElementById("dataUrl").innerText = src;

        avatarImg.onload = function() {
          var c = document.getElementById("myCanvas");
          var ctx = c.getContext("2d");
          ctx.canvas.width = avatarImg.width;
          ctx.canvas.height = avatarImg.height;
          
          ctx.drawImage(avatarImg, 0, 0);
        };
      },
      false
    );

    reader.readAsDataURL(input.files[0]);
  }
}



//Delete  

etudiantList.addEventListener('click', (e)=>{
    e.preventDefault() ; 
    let suppButtonClick = e.target.id == 'supprimer-etudient' ;
    let modButtonClick = e.target.id == 'modifier-etudient' ; 

    let id = e.target.parentElement.dataset.id;
    //supprimer un etudiant 

    if(suppButtonClick){
       fetch(`${url}/${id}`,{
           method:'DELETE',

       })
       .then(res => res.json() )
       .then(() => location.reload())
    }

    if(modButtonClick) {
      const parent = e.target.parentElement.parentElement ; 


      let nomCont = parent.querySelector('.nomPrenom').textContent ;
      let niveauCont = parent.querySelector('.niveau').textContent ;
      let naissanceCont = parent.querySelector('.dateNaissance').textContent ;
      let massarCont = parent.querySelector('.codeMassar').textContent ;
      let imageCont = parent.querySelector('.imageEtu').textContent ;

      NomValeur.value = nomCont ; 
      NiveauValeur.value = niveauCont ; 
      NaissanceValeur.value = naissanceCont ; 
      MassarValeur.value = massarCont ; 
      ImageValeur.value = imageCont ; 
  }

    // mise a jour les info de etudiant 

    btnSubmit.addEventListener('click' , (e) => {
      e.preventDefault();
      console.log('updated') ; 


  })
} ) ;

//ajouter etudiant 
ajouterEtudiant.addEventListener('submit', () =>{
  

    fetch(url,{
        method:'POST',
        headers:{
           'Content-Type' : 'application/json' 
        },

     body:JSON.stringify({
            Nom:NomValeur.value,
            Niveau:NiveauValeur.value,
            DateNaissance:NaissanceValeur.value,
            CodeMassar:MassarValeur.value,
            Image:ImageValeur.value

        }) 

    })
    .then(res => res.json())
    .then(data => {
        const dataArr =[] ; 
        dataArr.push(data) ; 
        afficherEtudiants(data);
    })
    
})