// Date min = aujourd'hui
document.getElementById("date").min = new Date().toISOString().split("T")[0];

// Formulaire
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  this.hidden = true;
  document.getElementById("success").hidden = false;
});
