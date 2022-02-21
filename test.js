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
/*         
        
        let niveauCont = parent.querySelector('.niveau').textContent ;
        let naissanceCont = parent.querySelector('.dateNaissance').textContent ;
        let massarCont = parent.querySelector('.codeMassar').textContent ;
        let imageCont = parent.querySelector('.imageEtu').textContent ;

        NomValeur.value = nomCont ; 
        NiveauValeur.value = niveauCont ; 
        NaissanceValeur.value = naissanceCont ; 
        MassarValeur.value = massarCont ; 
        ImageValeur.value = imageCont ;  */
        const parent = e.target.parentElement.parentElement ; 
        let nomCont = parent.querySelector('.nomPrenom').textContent ;
        console.log(nomCont)


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
