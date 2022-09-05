//2 - Faça um programa em que o usuário digite o diâmetro de um círculo e calcule a área e o perímetro dele

const prompt = require ("prompt-sync")()
let pi = 3.14

let diametro = Number(prompt("Digite o diâmetro do círculo: "))

let raio = diametro / 2
let area = pi * (raio * raio)

console.log(`A área do círculo é: ${area}`)

let c = 2 * pi * raio

console.log(`A circunferência do círculo é: ${c}`)