function verificar() {
  var data = new Date().getFullYear();
  var ano = document.querySelector("input#txtano");
  var res = document.querySelector("div#res");
  if (ano.value.length == 0 || ano.value > data) {
    res.innerHTML = "ERRO! Verifique o ano e tente novamente";
  } else {
    var sex = document.getElementsByName("radsex");
    var idade = data - Number(ano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (sex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade <= 3) {
        //bebe
        img.setAttribute(
          "src",
          "/cursojs/exercicios/aula12ex002/imagens/bebem.png",
        );
      } else if (idade > 3 && idade <= 10) {
        //criança
        img.setAttribute(
          "src",
          "/cursojs/exercicios/aula12ex002/imagens/criancam.png",
        );
      } else if (idade > 10 && idade <= 20) {
        //jovem
        img.setAttribute(
          "src",
          "/cursojs/exercicios/aula12ex002/imagens/adolescentem.png",
        );
      } else if (idade > 20 && idade <= 50) {
        //adulto
        img.setAttribute(
          "src",
          "/cursojs/exercicios/aula12ex002/imagens/adultom.png",
        );
      } else {
        //idoso
        img.setAttribute(
          "src",
          "/cursojs/exercicios/aula12ex002/imagens/idosom.png",
        );
      }
    } else if (sex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade <= 3) {
        //bebe
        img.setAttribute(
          "src",
          "/cursojs/exercicios/aula12ex002/imagens/bebef.png",
        );
      } else if (idade > 3 && idade <= 10) {
        //criança
        img.setAttribute(
          "src",
          "/cursojs/exercicios/aula12ex002/imagens/criancaf.png",
        );
      } else if (idade > 10 && idade <= 20) {
        //jovem
        img.setAttribute(
          "src",
          "/cursojs/exercicios/aula12ex002/imagens/adolescentef.png",
        );
      } else if (idade > 20 && idade <= 50) {
        //adulto
        img.setAttribute(
          "src",
          "/cursojs/exercicios/aula12ex002/imagens/adultof.png",
        );
      } else {
        //idoso
        img.setAttribute(
          "src",
          "/cursojs/exercicios/aula12ex002/imagens/idosof.png",
        );
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    res.appendChild(img);
  }
}
window.alert(
  '"Este aplicativo em JavaScript calcula a idade de uma pessoa com base no ano de nascimento e sexo informados. Utilizei manipulação do DOM, validação de dados e condicionais para criar uma interface interativa que exibe uma imagem correspondente à faixa etária e gênero."',
);
