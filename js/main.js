// Date min = aujourd'hui
document.getElementById("date").min = new Date().toISOString().split("T")[0];

// Formulaire
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  this.hidden = true;
  document.getElementById("success").hidden = false;
});

// Effet navbar au scroll
const nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  nav.classList.toggle("scrolled", window.scrollY > 8);
});

// Animation d'apparition au scroll
const revealItems = document.querySelectorAll(
  ".about, .feature, .reservation, footer > div"
);

revealItems.forEach((item) => item.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

// Cartes features: flip au tap sur mobile/tablette
const isTouchLike = window.matchMedia("(hover: none), (pointer: coarse)").matches;
if (isTouchLike) {
  const featureCards = document.querySelectorAll(".feature");

  featureCards.forEach((feature) => {
    feature.addEventListener("click", function () {
      this.classList.toggle("is-flipped");
    });
  });
}
