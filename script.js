// ScrollReveal animações
ScrollReveal().reveal(".sr-fade", { duration: 1200, opacity: 0 });
ScrollReveal().reveal(".sr-up", {
  origin: "bottom",
  distance: "40px",
  duration: 1000,
});
document.getElementById("year").textContent = new Date().getFullYear();

ScrollReveal().reveal("main", {
  duration: 1200,
  distance: "60px",
  origin: "bottom",
  easing: "ease-out",
  reset: false,
});

ScrollReveal().reveal(".currency-box", {
  duration: 1000,
  distance: "50px",
  origin: "left",
  easing: "ease-out",
  interval: 150,
});

ScrollReveal().reveal(".arrow-img", {
  duration: 900,
  scale: 0.5,
  easing: "ease-in-out",
});

ScrollReveal().reveal(".botao-de-conversao-principal", {
  duration: 900,
  distance: "40px",
  origin: "top",
});
