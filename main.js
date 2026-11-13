

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

// Récuperation des elements de la pages

 let DataUser = document.getElementById('DataUser').value , bouton = document.getElementById('bouton'),
ZoneText = document.querySelector('#ZoneText'), ScoreUser = document.querySelector('#ScoreUser');
 
// Affichage des valeurs recuperer dans la page HTML
 console.log(`donnee User:${DataUser}\n bouton:${bouton} \n ZoneText:${ZoneText} \n ScoreUser:${ScoreUser}`);
 // recuperation des bouton radios


let div1 = document.querySelectorAll('.div1 input[name = ChooseUser]') , choixRadio;

for (let i = 0; i < div1.length; i++) {
  div1[i].addEventListener('change', function() {
    choixRadio = this.value;
    console.log("choix de l'utilisateur: " +choixRadio);
  }) };