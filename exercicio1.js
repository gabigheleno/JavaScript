/* 1 - O usuário digitará sua idade e o programa deverá printar o ano em que ele nasceu. */

const prompt = require ("prompt-sync")()

let idade = Number(prompt(`Digite a sua idade: `))

console.log(`O ano de nascimento é ${calcDataNasc(idade)}`)

function calcDataNasc(idade) {
  var anoAtual = new Date
  return anoAtual.getUTCFullYear() - idade
}

