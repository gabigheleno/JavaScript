/*Faça um programa que crie um vetor por leitura com 5 valores de pontuação de uma 
 atividade e o escreva em seguida. Encontre após a maior pontuação e a apresente.*/ 

 const prompt = require ("prompt-sync")()

let num = [5]
let maior = num[i]
	
for(let i = 0; i <= 4; i++){

    let num = Number(prompt(`Digite o valor: `))
    }

    maior = num[0]

    for(i=0; i <=4; i++){

        if(num[i] > maior){
            
            maior = num[i]
        }

        }
    
        console.log(`Maior vetor: ${maior}`)