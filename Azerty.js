


/* Azerty est une mini appli de jeu qui propose des mots ou des phrases aux users en fonction de leurs choix
et mentionne ses propositions puis l'application affiche le résultat */



// Organisation et lisibilité du code grace aux fonctions

function AfficherResultat( score , nbreDeProposition) {
  let ScoreUser = document.querySelector('#ScoreUser') , spanScore = document.querySelector('#ScoreUser span');
  // Afficher le score de l'utilidateur
  ScoreUser.innerHTML = `Votre score est de:${score}/${nbreDeProposition}`;
  if (score > nbreDeProposition/2) {
    
  } else {
    
  }
}

/* La fonction qui sert de choix entre listmots et listphrases */

function choisirPhrasesOuMots() {
  alert( "NB (Noté Bien:) \n\n Veuillez prendre en compte que la sensibilité à la casse n'est pas prise en compte dans le jeu.\n");

  let choixUser = prompt("Quel choix faites-vous entre: 'MOTS' ou 'PHRASES' \n\n");

  while (choixUser !== null && choixUser.trim().toLowerCase() !== 'mots' && choixUser.trim().toLowerCase() !== 'phrases') {
    choixUser = prompt("Quel choix faites-vous entre: 'MOTS' ou 'PHRASES'");
  }

  return choixUser === null ? null : choixUser.trim().toLowerCase();
}

/* La fontion qui afficher les proposition du jeu en fonction du choix 
/ du User entre listMots ou listphrases*/

function LancerBoucleDeJeu(type, listproposition) {
  let score = 0;

  for (let index = 0; index < listproposition.length; index++) {
    let DataUser = prompt("Veuillez mentionné " +type+ " numéro " + index + ' : ' +listproposition[index]);

    if (DataUser !== null && DataUser.trim().toLowerCase() === listproposition[index].trim().toLowerCase()) {
      score++;
    }
  }

  return score
}

// La fonction principal qui fait office d'appelle de tous les fonctions ci-dessous


   // appelle de notre fonction principale 

LancerJeu()   