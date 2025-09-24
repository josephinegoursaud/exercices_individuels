// document.addEventListener("DOMContentLoaded", () => {
//   const bouton = document.getElementById("interfaceCuisine");

//   bouton.addEventListener("click", function () {
//     // Redirection sur la page "vue cuisine"
//     window.location.href = "http://127.0.0.1:5502/VUECUISINE/page2.html";
//   });
// });

//code pour rendre actif un bouton

// document.addEventListener("DOMContentLoaded", () => {
//   const button2 = document.getElementById("Valider");

//   if (button2) {
//     button2.addEventListener("click", function () {   // Si le bouton existe, on ajoute un écouteur de clic
//       window.location.href = "http://localhost:3000/menu";
//     });
//   } else {
//     console.error('Le bouton avec l\'ID "Valider" est introuvable.');
//   }
// }); 
document.getElementById("Valider").addEventListener("click", () => {
  const prenom = document.getElementById("checkbox").value.trim();
  if (prenom) {
    window.location.href = `http://127.0.0.1:5500/UTILISATEUR/menu.html?prenom=${encodeURIComponent(prenom)}`;
  }
});