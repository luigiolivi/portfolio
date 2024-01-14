
document.addEventListener("DOMContentLoaded", function() {
    var containerElement = document.querySelector(".desenvolvedor-title");
    var textToType = ["DESENVOLVEDOR", "FULLSTACK_"]; // Texto para o efeito de máquina de escrever
    var typeInterval = 100; // Intervalo entre os caracteres (em milissegundos)

    function typeWriterEffect(wordIndex, charIndex) {
      if (wordIndex < textToType.length) {
        var spanElement = document.createElement("span");
        spanElement.style.display = "inline-block";
        containerElement.appendChild(spanElement);

        if (charIndex < textToType[wordIndex].length) {
          spanElement.textContent = textToType[wordIndex].charAt(charIndex);
          setTimeout(function() {
            typeWriterEffect(wordIndex, charIndex + 1);
          }, typeInterval);
        } else {
          containerElement.appendChild(document.createElement("br"));
          typeWriterEffect(wordIndex + 1, 0);
        }
      }
    }

    // Inicie o efeito de máquina de escrever após um pequeno atraso
    setTimeout(function () {
      containerElement.innerHTML = "";
      typeWriterEffect(0, 0);
    }, 500);
  });
