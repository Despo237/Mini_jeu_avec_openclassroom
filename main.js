 
 
 function  AfficherProposition(proposition){
<<<<<<< HEAD
=======
        // Récuperation de ID ou sera afficher nos propositions
>>>>>>> 1e8ee3a0d6a4b5221bbd7e48f81c1057c3b62cca
    let zoneproposition = document.getElementById('ZoneText')
    zoneproposition.textContent = proposition
 }
 function verdictDuJeu(score, nombreDePropositions) {
  let span1 = document.querySelector('.span1');

  if (score > nombreDePropositions / 2) {
     span1.textContent = "Félicitations, test réussi !";
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
 }

  // Récuperation des elements de la pages

 let DataUser = document.getElementById('DataUser') , bouton = document.getElementById('bouton'),
ZoneText = document.querySelector('#ZoneText'), ScoreUser = document.querySelector('#ScoreUser');
 
<<<<<<< HEAD
let i = 0 , score = 0
let propositionsActuelles = listMots; // ED: conserve la liste correspondant au mode sélectionné.
let boutonsChoix = document.querySelectorAll('.div1 input[name="ChooseUser"]'); // ED: récupère les deux choix de mode.

let boutonPartage = document.getElementById('bouton1'); // ED: récupère uniquement le bouton « Partager ».
boutonPartage.addEventListener('click', () => { // ED: lance le code suivant uniquement au clic sur ce bouton.
  let scorePartage = `${score}/${propositionsActuelles.length}`; // ED: prépare le score avec le total de propositions du mode actif.
  let fenetrePartage = window.open( // ED: ouvre la page de partage dans une petite fenêtre.
    `Poppup.html?score=${encodeURIComponent(scorePartage)}`, // ED: transmet le score dans l’adresse en l’encodant correctement.
    'partagerScore', // ED: donne un nom à la fenêtre pour la réutiliser si elle est déjà ouverte.
    'popup=yes,width=700,height=500,resizable=yes,scrollbars=yes' // ED: demande une fenêtre popup de 700 × 700 pixels.
  ); // ED: termine l’appel à window.open.

  if (fenetrePartage === null) { // ED: vérifie si le navigateur a bloqué l’ouverture de la popup.
    alert('La fenêtre de partage a été bloquée. Autorisez les fenêtres pop-up pour ce site.'); // ED: explique à l’utilisateur comment autoriser la popup.
  } // ED: termine la vérification du blocage.
}); // ED: termine l’écouteur du clic sur le bouton.
=======
let i = 0 , score = 0 , listeProposition = listMots
>>>>>>> 1e8ee3a0d6a4b5221bbd7e48f81c1057c3b62cca

// On propose la première proposition avant que le user ne click sur le bouton valider

AfficherProposition(listeProposition[i]);

bouton.addEventListener('click', () => {

    // Comparaison entre la valeur de l'input du User et la valeur de la liste des mots ou de phrases
    if (DataUser.value.trim().toLowerCase() === listeProposition[i].trim().toLowerCase()) {
      score++
    }
    i++;
    AfficherResultat(score, listeProposition.length);
    DataUser.value = '';

    if (i === listeProposition.length) {
      // Si l'indice i vaut le nombre de proposition total alors :
      AfficherProposition('Le jeu est terminé !!');
      bouton.disabled = true;
      verdictDuJeu(score, listeProposition.length);
    } else {
      AfficherProposition(listeProposition[i]);
    }
  });

  AfficherResultat(score, listeProposition.length);

 // recuperation des bouton radios


<<<<<<< HEAD
function demarrerPartie(propositions) { // ED: initialise une nouvelle partie avec la liste choisie.
  propositionsActuelles = propositions; // ED: mémorise les propositions utilisées par la partie.
  i = 0; // ED: revient à la première proposition.
  score = 0; // ED: remet le score à zéro pour le nouveau mode.
  DataUser.value = ''; // ED: vide la saisie précédente.
  bouton.disabled = false; // ED: réactive le bouton si une partie précédente était terminée.
  document.querySelector('.span1').textContent = ''; // ED: efface le résultat de la partie précédente.
  AfficherProposition(propositionsActuelles[i]); // ED: affiche la première proposition de la liste choisie.
  AfficherResultat(score, propositionsActuelles.length); // ED: affiche le score initial avec le bon nombre de propositions.
} // ED: termine l’initialisation d’une partie.

demarrerPartie(listMots); // ED: démarre par défaut le mode « Mots ».

bouton.addEventListener('click', () => {

    // Comparaison entre la valeur de l'input et la valeur de la liste des mots
    if (DataUser.value.trim().toLowerCase() === propositionsActuelles[i].trim().toLowerCase()) { // ED: vérifie la réponse contre la proposition du mode actif.
      score++
    }
    i++;
    AfficherResultat(score, propositionsActuelles.length); // ED: met à jour le score avec le total du mode actif.
    DataUser.value = '';

    if (i === propositionsActuelles.length) { // ED: détecte la fin de la liste actuellement jouée.
      AfficherProposition('Le jeu est terminé !!');
      bouton.disabled = true;
      verdictDuJeu(score, propositionsActuelles.length); // ED: calcule le résultat avec le total du mode actif.
    } else {
      AfficherProposition(propositionsActuelles[i]); // ED: affiche la proposition suivante de la liste active.
    }
  });

  for (let choix of boutonsChoix) { // ED: ajoute un écouteur à chacun des deux boutons radio.
    choix.addEventListener('change', function() { // ED: réagit immédiatement au changement de mode.
      let nouvelleListe = this.value === 'RadioPhrases' ? listPhrases : listMots; // ED: sélectionne les phrases ou les mots.
      demarrerPartie(nouvelleListe); // ED: affiche le contenu du mode choisi et réinitialise la partie.
    }); // ED: termine l’écouteur du changement de mode.
  } // ED: termine l’installation des écouteurs radio.
=======
for (let index = 0; index < div1.length; index++) {
   // l'evenement CHANGE c'est pour savoir si quelque chose viens de changer dans nos case a cocher
  div1[index].addEventListener('change', function(event) {
    // event.target c'est savoir quel des case a cocher a déclencher notre événement change 
    choixRadio = event.target.value
    console.log("choix de l'utilisateur: " +choixRadio);
    /* étant donner que notre jeu ne propose que la liste de mots, si notre variable  choixRadio vaut l'une de value 
     des bouton radio alors :*/

    if (choixRadio === 'RadioMots') {
      // on fait appelle a la, liste de mots
        listeProposition = listMots
    } else {
     listeProposition = listPhrases
       
    } 
    AfficherProposition(listeProposition[i]);
  }) };

    
>>>>>>> 1e8ee3a0d6a4b5221bbd7e48f81c1057c3b62cca
