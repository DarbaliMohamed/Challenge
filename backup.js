const etudiantList = document.querySelector('.table-body') ; 
const ajouterEtudiant = document.querySelector('.ajouter-etudiant');
const NomValeur = document.getElementById('Nom-valeur') ; 
const NiveauValeur = document.getElementById('Niveau-valeur') ; 
const NaissanceValeur = document.getElementById('Naissance-valeur') ; 
const MassarValeur = document.getElementById('Massar-valeur') ; 
const ImageValeur = document.getElementById('Image-valeur') ; 



let resultat = '' ; 

const url = 'http://localhost:3000/etudiants' ;

const afficherEtudiants =(data) => {
    data.forEach(etudiants => {
        resultat += `
      

        <tbody>
          <tr >
            <td data-id=${etudiants.id}>${etudiants.id}</td>
            <td>${etudiants.Nom}</td>
            <td>${etudiants.Niveau}</td>
            <td>${etudiants.DateNaissance}</td>
            <td>${etudiants.CodeMassar}</td>
            <td><img width="80" height="80" src="${etudiants.Image}" alt=""></td>
            <td><button type="button" class="btn btn-primary btn-sm" id="modifier-etudient" >Modifier</button></td>
            <td><button type="button" class="btn btn-danger btn-sm" id="supprimer-etudient">Supprimer</button></td>
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

    console.log(e.target.parentElement.dataset.id);
    //supprimer un etudiant 

    if(suppButtonClick){
       fetch(`${url}/ededed`)
    }
} )


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