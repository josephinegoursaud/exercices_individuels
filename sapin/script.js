// function afficherPointeSapin(hauteur) {
//   // 1. Affiche la première ligne
//   console.log(" ".repeat(hauteur - 1) + "+");

//   // 2. Boucle pour les lignes suivantes, y compris la dernière avec le 'x'
//   for (let i = 1; i <= hauteur; i++) {
//     let nbEspaces = Math.max(hauteur - i - 1, 0); // empêche les valeurs négatives
//     let espaces = " ".repeat(nbEspaces);
//     let etoiles = "*".repeat(i);
//     let fin = (i === hauteur) ? "\\x" : "\\";  // si dernière ligne, on met \x
//     let ligne = espaces + "/" + etoiles + "|" + etoiles + fin;
//     console.log(ligne);
//   }
// }

// afficherPointeSapin(4);


// function afficherEtoiles(lignes) {
//   for (let i = 0; i < lignes.length; i++) {
//     console.log("*".repeat(lignes[i]));
//   }
// }

// afficherEtoiles([2, 5]);

// function afficherRectangle(hauteur, largeur) {
//   for (let i = 0; i < hauteur; i++) {
//     console.log("*".repeat(largeur));
//   }
// }

// afficherRectangle(5, 5);

// function afficherTriangleDroite(lignes) {
//  for (let i = 0; i < lignes; i++) {
//   console.log("*".repeat(i) + "\\");
// }
// }

// afficherTriangleDroite(5)

function afficherMotif(lignes) {
  for (let i = 1; i <= lignes; i++) {
    let espaces = " ".repeat(lignes - i);
    let etoiles = "*".repeat(i - 1);
    console.log(espaces + "/" + etoiles);
  }
}

afficherMotif(5);


    


