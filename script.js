const body = document.querySelector("body");
const botao = document.querySelector("button");
const colors = ["red", "blue", "orange", "violet", "green", "yellow", "black"];

body.style.backgroundColor = "violet";
botao.addEventListener("click", changebackground);

//Gerador de Cores aleatorias 
function changebackground() {
  const colorindex = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorindex];
}