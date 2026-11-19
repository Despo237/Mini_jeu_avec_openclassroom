


/* Azerty est une mini appli de jeu qui propose des mots ou des phrases aux users en fonction de leurs choix
et mentionne ses propositions puis l'application affiche le résultat */



// Organisation et lisibilité du code grace aux fonctions

function AfficherResultat( score , nbreDeProposition) {
  let spanScore = document.querySelector('#ScoreUser span ') 
  // Afficher le score de l'utilidateur
  spanScore.textContent = `${score}/${nbreDeProposition}`;
   if (score > nbreDeProposition/2) {
    spanScore.style.color = 'green';
    spanScore.style.fontSize = '1.5rem';
    spanScore.style.fontFamily = 'cursive , lucida sans , arial';
   } else {
      spanScore.style.color = 'black';
    spanScore.style.fontSize = '1.5rem';
    spanScore.style.fontFamily = 'cursive , lucida sans , arial';
     
   }
}
/****---------------------------------------------------------------------------------** */
/* La fonction qui sert de choix entre listmots et listphrases */
 
/*
function choisirPhrasesOuMots() {
  alert( "NB (Noté Bien:) \n\n Veuillez prendre en compte que la sensibilité à la casse n'est pas prise en compte dans le jeu.\n");

  let choixUser = prompt("Quel choix faites-vous entre: 'MOTS' ou 'PHRASES' \n\n");

  while (choixUser !== null && choixUser.trim().toLowerCase() !== 'mots' && choixUser.trim().toLowerCase() !== 'phrases') {
    choixUser = prompt("Quel choix faites-vous entre: 'MOTS' ou 'PHRASES'");
  }

  return choixUser === null ? null : choixUser.trim().toLowerCase();
} 
  */

/* La fontion qui afficher les proposition du jeu en fonction du choix 
/ du User entre listMots ou listphrases*/

/*
function LancerBoucleDeJeu(type, listproposition) {
  let score = 0, span1 = document.querySelector('.span1');

  for (let index = 0; index < listproposition.length; index++) {
    let DataUser = prompt("Veuillez mentionné " +type+ " numéro " + index + ' : ' +listproposition[index]);

    if (DataUser !== null && DataUser.trim().toLowerCase() === listproposition[index].trim().toLowerCase()) {
      score++;
    }
  }
  if (score > listproposition.length/2) {
    span1.textContent = "Félicitation teste réussi avec succès"; ;
    span1.style.color = 'green';
    span1.style.fontSize = '1.5rem';
    span1.style.fontFamily = 'cursive , lucida sans , arial';
    span1.style.textAlign = 'center';
  } else {
    span1.textContent = "Dommage, vous avez échoué";
    span1.style.color = 'black';
    span1.style.fontSize = '1.5rem';
    span1.style.fontFamily = 'cursive , lucida sans , arial';
    span1.style.textAlign = 'center';
  }
  return score
}*/
/***---------------------------------------------------------------------------------** */

// La fonction principal qui fait office d'appelle de tous les fonctions ci-dessous


   // appelle de notre fonction principale 

 