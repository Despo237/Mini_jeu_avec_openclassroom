
    
    
     /****------------------Declaration de nos differents variables-----------------------****/

let listMots = ['Gratitude', 'Génériosité', 'Amour', 'Bienveillane', 'Respect', 'Bonheur'],
    listPhrases = ["Avant mes ", "25 ans, ", 'par la grace de', 'DIEU', 'je vais touché ', 'first MILLIONS'],
    choixUser;


/* Azerty est une mini appli de jeu qui propose des mots ou des phrases aux users en fonction de leurs choix
et mentionne ses propositions puis l'application affiche le résultat */



// Organisation et lisibilité du code grace aux fonctions

function AfficherResultat( score , nbreDeProposition) {
  // Afficher le score de l'utilidateur
  console.log("Vous aviez obtenu un score de " + score + '/' +nbreDeProposition);
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

function LancerJeu() {

  let choix = choisirPhrasesOuMots(), score = 0, nbreDeproposition = 0;

  if (choix === null) {
    return;
  }
 
  /*Maintenant en ce servant de la fonction LancerBoucleDeJeu() et en fonction du choix du User 
  on utilisera cette fonction pour proposée le contenue de son choix */

  if (choix === 'mots') {
    
    score = LancerBoucleDeJeu('le mot', listMots);
    // Dans ce cas la valeur de nbreDeProposition ne vaut plus ZERO (0)
    nbreDeproposition = listMots.length;
  } else {
    score = LancerBoucleDeJeu('La phrases', listPhrases);
     // Dans ce cas la valeur de nbreDeProposition ne vaut plus ZERO (0)
    nbreDeproposition = listPhrases.length;
  }

  AfficherResultat( score , nbreDeProposition)

}
   // appelle de notre fonction principale 

LancerJeu()   