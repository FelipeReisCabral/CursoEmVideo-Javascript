function contar() {
  var ini = document.querySelector("input#inicio");
  var fim = document.querySelector("input#fim");
  var pas = document.querySelector("input#passo");
  var res = document.querySelector("div#contagem");

  if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
    res.innerHTML = "Erro! Verifique os valores informados";
  } else {
    res.innerHTML = "<p>Contando...</p>";
    var i = Number(ini.value);
    var f = Number(fim.value);
    var p = Number(pas.value);

    if (p <= 0) {
      p = 1;
      res.innerHTML =
        "<p>Para passo 0, será utilizado valor 1<br>Contando...</p>";
    }
    if (i > f) {
      for (var c = i; c >= f; c -= p) {
        //contagem decrescente
        res.innerHTML += `${c} ➔ `;
      }
    } else {
      for (var c = i; c <= f; c += p) {
        //contagem crescente
        res.innerHTML += `${c} ➔ `;
      }
    }
    res.innerHTML += "FIM";
  }
}
window.alert(
  'Este código JavaScript cria um contador personalizado que permite ao usuário definir o valor inicial, final e o passo da contagem. A aplicação valida os dados de entrada e realiza a contagem de forma crescente ou decrescente, exibindo os resultados em um elemento HTML"',
);
