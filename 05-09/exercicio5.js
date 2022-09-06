/*Faça um programa que crie um vetor por leitura com 5 valores de pontuação de uma 
 atividade e o escreva em seguida. Encontre após a maior pontuação e a apresente.*/ 

 const prompt = require ("prompt-sync")()

let num = [5]
let maior = 0
	
for(let i = 0; i <= 4; i++){

  num[i] = Number(prompt("Digite a sequência de 5 valores positivos: "))

    if (num[i] > maior)
    maior = num[i]
}
        console.table(num)
        console.log(`Maior valor digitado: ${maior}`)