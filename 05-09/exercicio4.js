/* Solicitar a idade de várias pessoas e imprimir: Total de pessoas com menos de 21 anos.
   Total de pessoas com mais de 50 anos. O programa termina quando idade for =-99. (WHILE) */

   const prompt = require ("prompt-sync")()
    
    let contMenos = 0;
    let contMais = 0

    while (true){
        let idade = Number(prompt(`Digite a sua idade: `))

     if(idade >=1, idade <21){
     contMenos++

    } else if (idade > 50) {
            contMais++
    }
        if (idade == -99) {
        break
    }

}
    console.log(`Idades <21: ${contMenos}`)
    console.log(`Idades >50: ${contMais}`)
