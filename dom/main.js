// Acessando elementos pelo ID
var tituloElemento = document.getElementById("titulo");
var paragrafoElemento = document.getElementById("paragrafo");
// Manipulando conteúdo
tituloElemento.innerHTML = "Manipulando o DOM!";
paragrafoElemento.style.color = "blue";
// Criando novos elementos
var novoParagrafo = document.createElement("p");
novoParagrafo.innerHTML = "Novo parágrafo adicionado dinamicamente.";
document.body.appendChild(novoParagrafo);

document.body.innerHTML += "<strong>Olá mundo</strong>"

const items = document.querySelectorAll(".item[data-item]");
// items[0].className = "ola"
items[0].classList.add("ola")
const item = document.querySelector(".item");
item.setAttribute("data-item", "5");
item.style.backgroundColor = "#cccccc";
item.style.fontSize = "24px";

for(let i = 0; i < items.length; i++) {
    console.log(items[i].getAttribute("data-item"));
}
