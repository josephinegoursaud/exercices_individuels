// Récupère le prénom depuis l'URL
const params = new URLSearchParams(window.location.search);
const prenom = params.get("prenom");

// Affiche "Bonjour [prenom]"
const bonjourEl = document.getElementById("bonjour");
if (bonjourEl && prenom) {
  bonjourEl.textContent = `Bonjour ${prenom}, voici nos menus :`;
}

async function fetchMenus() {
  try {
    const res = await fetch('http://localhost:3000/menus');
    const menus = await res.json();

    const container = document.getElementById('menu-container');
    if (!container) {
      console.error('⚠️ Élément #menu-container introuvable');
      return;
    }

    // Vider l'ancien contenu
    container.innerHTML = '';

    menus.forEach(menu => {
      const div = document.createElement('div');
      div.classList.add('menu-item');

      div.innerHTML = `
        <h2>${menu.nom} ${menu.image_emoji}</h2>
        <p>${menu.description}</p>
        <button class="commander-btn">Commander</button>
      `;

      // Gérer le clic sur "Commander"
      const button = div.querySelector(".commander-btn");
      button.addEventListener("click", () => {
        alert(`Merci pour votre commande, ${prenom} !\nMenu choisi : ${menu.nom}`);
      });

      container.appendChild(div);
    });

  } catch (err) {
    console.error("❌ Erreur lors de la récupération des menus :", err);
  }
}

fetchMenus();