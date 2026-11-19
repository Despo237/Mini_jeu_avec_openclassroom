const parametres = new URLSearchParams(window.location.search); // ED: lit les paramètres transmis dans l’adresse de la popup.
const score = parametres.get('score'); // ED: récupère la valeur du paramètre nommé « score ».
const affichageScore = document.getElementById('scorePartage'); // ED: récupère le paragraphe qui affichera le score.
const champScore = document.getElementById('scorePartageInput'); // ED: récupère le champ masqué envoyé avec le formulaire.

if (score !== null) { // ED: vérifie qu’un score a bien été transmis.
  affichageScore.textContent = `Votre score : ${score}`; // ED: affiche le score sous le titre de la popup.
  champScore.value = score; // ED: ajoute le score au formulaire de partage.
} else { // ED: traite le cas où aucun score n’a été transmis.
  affichageScore.textContent = 'Aucun score à partager pour le moment.'; // ED: informe l’utilisateur qu’aucun score n’est disponible.
} // ED: termine la vérification du paramètre score.