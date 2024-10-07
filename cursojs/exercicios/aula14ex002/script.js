function calcular() {
  var num = document.querySelector("input#num");
  var tab = document.querySelector("select#tab");

  if (num.value.length == 0) {
    alert("Preencha um valor válido");
  } else {
    var n = Number(num.value);
    tab.innerHTML = "";
    for (var c = 0; c <= 10; c++) {
      var item = document.createElement("option");
      item.text = `${n} x ${c} = ${n * c}`;
      item.value = `tab${c}`;
      tab.appendChild(item);

      /* usando tabela
      var linha = tab.insertRow();
      var cel1 = linha.insertCell();
      var cel2 = linha.insertCell();
      var cel3 = linha.insertCell();
      var cel4 = linha.insertCell();
      cel1.textContent = n;
      cel2.textContent = " x ";
      cel3.textContent = c;
      cel4.textContent = " = " + c * n;
      */
    }
  }
}
