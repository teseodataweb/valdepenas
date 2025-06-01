document.addEventListener("DOMContentLoaded", function () {
  const mainBtn = document.getElementById("whatsapp-main-btn");
  const options = document.getElementById("whatsapp-options");
  const fab = document.getElementById("whatsapp-fab");

  mainBtn.addEventListener("click", function (e) {
    options.classList.toggle("hidden");
    e.stopPropagation();
  });

  document.addEventListener("click", function () {
    options.classList.add("hidden");
  });

  options.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  // Mostrar el botón con animación suave después de 2 segundos
  setTimeout(function() {
    fab.classList.add('visible');
  }, 3000);
});