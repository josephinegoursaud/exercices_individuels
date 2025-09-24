const params = new URLSearchParams(window.location.search);
const prenom = params.get("prenom")

// console.log("prenom", prenom)
document.getElementById("bonjour").textContent = `Bonjour ${prenom},`;




async function fetchMenus() {
  try {
    const res = await fetch('http://localhost:3000/menus');
    const menus = await res.json();
    console.log(menus);

    const container = document.getElementById('menu-container');
    

    menus.forEach(menu => {
      const div = document.createElement('div');
       div.classList.add('menu-item');
      div.innerHTML = `
        <h2>${menu.nom}</h2>
        <span> ${menu.image_emoji}</span>
        <p> ${menu.description}</p>
        <button> Commander </button>
        
      `;
      container.appendChild(div);
    });

  } catch (err) {
    console.error("Erreur :", err);
  }
}

fetchMenus();