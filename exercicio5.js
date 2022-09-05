/*Faça um programa que crie um vetor por leitura com 5 valores de pontuação de uma 
 atividade e o escreva em seguida. Encontre após a maior pontuação e a apresente.*/ 


let num[5]
let maior = String
	
for(let i = 0; i <= 4; i++){

    let idade = Number(prompt(`Digite a sua idade: ${num[i]}`))
    }

    maior = num[0]

    for(i=0; i <=4; i++){

        if(num[i] > maior){
            
            maior = num[i]
        }

        }
    
        console.log(`Maior vetor: ${maior}`)