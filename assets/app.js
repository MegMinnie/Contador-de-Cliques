const botaoUm = document.querySelector(".botaoUm");
const botaoDois = document.querySelector(".botaoDois");
const botaoTres = document.querySelector(".botaoTres");
const paragrafo = document.querySelector("p");
let contador = 0;

botaoUm.addEventListener("click", function contar() {
  contador++;

  paragrafo.innerHTML = `${contador}`;
});

botaoDois.addEventListener("click", function zerar() {
  contador = 0;

  paragrafo.innerHTML = `${contador}`;
});

botaoTres.addEventListener("click", function diminuir() {
  contador--;

  paragrafo.innerHTML = `${contador}`;
});

botaoUm.style.backgroundColor = "#3a9635";
botaoDois.style.backgroundColor = "#882cb5";
botaoTres.style.backgroundColor = "#e9e952";
