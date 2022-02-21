const etudiantList = document.querySelector('.table-body') ; 
const ajouterEtudiant = document.querySelector('.ajouter-etudiant');
const NomValeur = document.getElementById('Nom-valeur') ; 
const NiveauValeur = document.getElementById('Niveau-valeur') ; 
const NaissanceValeur = document.getElementById('Naissance-valeur') ; 
const MassarValeur = document.getElementById('Massar-valeur') ; 
const ImageValeur = document.getElementById('Image-valeur') ; 
const btnSubmit = document.querySelector('.btnModifier') ; 


let resultat = '' ; 

const url = 'http://localhost:3000/etudiants' ;

const afficherEtudiants =(data) => {
    data.forEach(etudiants => {
        resultat += `
      

        <tbody>
          <tr >
            <td>${etudiants.id}</td>
            <td class="nomPrenom" >${etudiants.Nom}</td>
            <td class="niveau">${etudiants.Niveau}</td>
            <td class="dateNaissance">${etudiants.DateNaissance}</td>
            <td class="codeMassar">${etudiants.CodeMassar}</td>
            <td class="imageEtu"><img class="rounded" width="80" height="80" src="${etudiants.Image}" alt=""></td>
            <td><button type="button" class=" btn btn-primary btn-sm" id="modifier-etudient" >Modifier</button></td>
            <td data-id=${etudiants.id}><button type="button" class="btn btn-danger btn-sm" id="supprimer-etudient">Supprimer</button></td>
          </tr>

        </tbody>
     
        ` ;
    });
    etudiantList.innerHTML = resultat ;
}

//afficher les étudiants

fetch(url) 
.then(res => res.json()) 
.then(data => afficherEtudiants(data)) 


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
    fetch(`${url}/${id}`,{
        method:'PATCH',
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

    .then(res => res.json() )
    .then(() => location.reload())

    })

} ) ;


//ajouter etudiant 
ajouterEtudiant.addEventListener('submit', (e) =>{
    e.preventDefault() ;

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