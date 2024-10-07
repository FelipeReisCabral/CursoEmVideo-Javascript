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
        "<p>Para passo 0, consideraremos o valor 1<br>Contando...</p>";
    }
    if (i > f) {
      for (var c = i; c >= f; c -= p) {
        res.innerHTML += `${c} ➔ `;
      }
    } else {
      for (var c = i; c <= f; c += p) {
        res.innerHTML += `${c} ➔ `;
      }
    }
    res.innerHTML += "FIM";
  }
}
