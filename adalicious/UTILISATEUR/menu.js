async function fetchMenus() {
  try {
    const res = await fetch('http://localhost:3000/menu');
    const menus = await res.json();
    console.log(menus);

    const container = document.getElementById('menu-container');
    

    menus.forEach(menu => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h2>${menu.nom}</h2>
        <p>Prix : ${menu.prix} €</p>
        <p>Description : ${menu.description}</p>
        <hr>
      `;
      container.appendChild(div);
    });

  } catch (err) {
    console.error("Erreur :", err);
  }
}

fetchMenus();