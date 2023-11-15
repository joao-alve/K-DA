 const botoes = document.querySelectorAll('.botao')
 const personagens = document.querySelectorAll(".personagem")
console.log(personagens);

 botoes.forEach((botao, indice) =>{
botao.addEventListener("click", () =>{
const botaoselecionado = document.querySelector(".botao.selecionado")
botaoselecionado.classList.remove("selecionado")
botao.classList.add("selecionado")
console.log(indice);
console.log(personagens[indice]);
const personagensselecionado = document.querySelector(".personagem.selecionado")
personagensselecionado.classList.remove("selecionado")

personagens[indice].classList.add("selecionado");
});
 })