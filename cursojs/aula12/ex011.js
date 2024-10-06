var idade = 19;
console.log(`Você tem ${idade} anos, com essa idade:`);
if (idade < 16) {
  console.log("Não vota");
} else if (idade < 18 || idade > 65) {
  console.log("Voto é Facultativo");
} else {
  console.log("Voto é Obrigatório");
}
