document.forms[0].onsubmit=function(e){
    let nom = document.getElementById('nom').value;
    let Nom = /^[a-zA-Z]{1,30}$/;
    let prenom = document.getElementById('prenom').value;
    let telephone = document.getElementById('telephone').value;
    let Telephone=/^(05|06|07)\d{8}$/;
    let email = document.getElementById('email').value;
    let Email = /^[a-zA-Z0-9]+(.)+[a-zA-Z0-9]+@(ofppt)(.(ma))$/;
    let groupeList = document.getElementsByName('groupe') ;
    let i ; 
    let groupesValid = false ;
    let femme = document.getElementById('femme').checked;
    let homme = document.getElementById('homme').checked;
    let club = document.getElementById('clubs').value;
    let valider = true;

    if(!Nom.test(nom)){
        document.getElementById("nom").style.borderColor = "red";
        document.getElementById('nom-error').innerHTML = "Entrez votre nom et ne depassez pas 30 caractères"
        valider = false
    
    }
    else{
        document.getElementById("nom").style.borderColor = "green";
        document.getElementById('nom-error').innerHTML = ""
    }


    if(!Nom.test(prenom)){
        document.getElementById("prenom").style.borderColor = "red";
        document.getElementById('prenom-error').innerHTML = "Entrez votre prenom et ne depassez pas 30 caractères"
        valider = false
    }
    else{
        document.getElementById("prenom").style.borderColor = "green";
        document.getElementById('prenom-error').innerHTML = ""
    }

    if(!Telephone.test(telephone)){
        document.getElementById("telephone").style.borderColor = "red";
        document.getElementById('telephone-error').innerHTML = "Entrez votre telephone"
        valider = false
    }
    else{
        document.getElementById("telephone").style.borderColor = "green";
        document.getElementById('telephone-error').innerHTML = ""
    }

    if(!Email.test(email)){
        document.getElementById("email").style.borderColor = "red";
        document.getElementById('email-error').innerHTML = "Entrez votre email en forme de nom.prenom@ofppt.ma"
        valider = false
    }
    else{
        document.getElementById("email").style.borderColor = "green";
        document.getElementById('email-error').innerHTML = ""
    }

    if(femme == false && homme == false){
        document.getElementById('erreur').innerHTML = "choisissez votre genre "
        valider = false
    }
    else{
        document.getElementById('erreur').innerHTML = ""
    }

    for ( i=0 ; i < groupeList.length ; i++ ){

        if (groupeList[i].checked){
            groupesValid = true ;
            document.getElementById('error').innerHTML = "";
            break ;
        }
    }

    if(!groupesValid){
        document.getElementById('error').innerHTML = "choisissez votre groupe";
        valider = false
    }

    if(club == ""){
        document.getElementById('club').innerHTML = "choisissez un club"
        valider = false
    }
    else if(club.length<=3){
        document.getElementById('club').innerHTML = "vous avez le droit de choisir seulment 3 clubs"
        valider = false
    }
    else{
        document.getElementById('club').innerHTML = ""
    }

    if( valider === false ){
        e.preventDefault();
    }
    else{
        window.open("confirmation.html"); 
    }
}
