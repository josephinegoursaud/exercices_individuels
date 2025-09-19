document.addEventListener("DOMContentLoaded", () => {
  const bouton = document.getElementById("interfaceCuisine");

  bouton.addEventListener("click", function () {
    // Redirection sur la page "vue cuisine"
    window.location.href = "http://127.0.0.1:5502/VUECUISINE/page2.html";
  });
});

