let num = [5, 8, 2, 9, 3];
console.log(`Nosso Vetor é ${num}`);
num[5] = 6;
console.log(`Nosso vetor agora é ${num}`);
num.push(4);
console.log(`Agora o vetor é ${num}`);
console.log(`O tamanho total do vetor é ${num.length}`);
console.log(`O primeiro valor do vetor é ${num[0]}`);
console.log(`o ultimo valor do vetor é ${num[num.length - 1]}`);
console.log(`colocando o vetor em ordem fica ${num.sort()}`);
let valor = num.indexOf(1);
if (valor != -1) {
  console.log(`O valor está na posição ${valor}`);
} else {
  console.log(`O valor não foi encontrado`);
}

//usando "for" normal
for (var i = 0; i < num.length; i++) {
  console.log(`${num[i]}`);
}

console.log("---");

//usando "for in" simplificando
for (let pos in num) {
  console.log(num[pos]);
}

console.log("---");
