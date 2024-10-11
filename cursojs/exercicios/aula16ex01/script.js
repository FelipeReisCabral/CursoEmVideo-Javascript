let num = document.querySelector("input#num");
let lista = document.querySelector("select#lista");
let res = document.querySelector("div#res");
let valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado`;
    lista.appendChild(item);
  } else {
    alert("[ERRO] - Valor inválido ou já adicionado.");
  }
  num.value = "";
  num.focus();
}

function menor() {
  let menor = valores[0];
  for (let pos in valores) {
    if (menor > valores[pos]) {
      menor = valores[pos];
    }
  }
  return menor;
}

function maior() {
  let maior = valores[0];
  for (let pos in valores) {
    if (maior < valores[pos]) {
      maior = valores[pos];
    }
  }
  return maior;
}

function soma() {
  let soma = 0;
  for (let pos in valores) {
    soma += valores[pos];
  }
  return soma;
}

function media() {
  return soma() / valores.length;
}

function finalizar() {
  if (valores.length == 0) {
    alert("[ERRO] - Nenhum valor digitado");
  } else {
    res.innerHTML = "";
    res.innerHTML += `<p>Foram digitados ao todo ${valores.length} valores</p>`;
    res.innerHTML += `<p>O menor valor digitado foi: ${menor()}</p>`;
    res.innerHTML += `<p>O maior valor digitado foi: ${maior()}</p>`;
    res.innerHTML += `<P>A soma do valores digitados é ${soma()}</P>`;
    res.innerHTML += `<p>A média dos valores digitados é: ${media().toFixed(2)}</p>`;
  }
}
window.alert(
  '"Este código JavaScript cria uma aplicação que permite ao usuário adicionar números a uma lista, validando os números para garantir que estejam entre 1 e 100 e que não sejam repetidos. Após adicionar os números, a aplicação calcula e exibe o menor valor, o maior valor, a soma e a média dos números adicionados."',
);
