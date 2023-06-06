function scrollToSection() {
    // Obtener el elemento de la sección de destino
    var seccionDestino = document.getElementById("cta");
  
    // Hacer scroll suave hacia la sección de destino
    seccionDestino.scrollIntoView({ behavior: "smooth" });
  }