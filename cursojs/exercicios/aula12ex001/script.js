var agora = new Date().getHours();
var body = document.body;
var div2 = document.querySelector("div#foto");
var div1 = document.querySelector("div#hora");
div1.innerHTML = `<h3>Agora são ${agora} horas!</h3>`;
if (agora < 12) {
  body.style.background = "#c2a74e";
  div2.innerHTML =
    '<img src="/cursojs/exercicios/aula12ex001/imagens/manha.png" alt="manha" id="img">';
} else if (agora > 12 && agora < 18) {
  body.style.background = "#228B22";
  div2.innerHTML =
    '<img src="/cursojs/exercicios/aula12ex001/imagens/tarde.png" alt="tarde" id="img">';
} else {
  body.style.background = "#483D8B";
  div2.innerHTML =
    '<img src="/cursojs/exercicios/aula12ex001/imagens/noite.png" alt="noite" id="img">';
}
window.alert(
  '"Este código JavaScript demonstra a criação de uma interface dinâmica que se adapta à hora do dia. Através da manipulação do DOM e de condicionais, a página altera sua aparência visual, proporcionando uma experiência mais personalizada e envolvente para o usuário. Essa funcionalidade simples, porém eficaz, demonstra meu conhecimento em JavaScript e minha capacidade de criar interfaces interativas."',
);
