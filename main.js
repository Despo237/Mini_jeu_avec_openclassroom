

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

  AfficherResultat(score, nbreDeproposition)

}