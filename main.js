 
 
 function  AfficherProposition(proposition){
        // Récuperation de ID ou sera afficher nos propositions
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
 
let i = 0 , score = 0 , listeProposition = listMots

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

let div1 = document.querySelectorAll('.div1 input[name = ChooseUser]') , choixRadio;

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

    