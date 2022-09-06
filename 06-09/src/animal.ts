export abstract class Animal{
protected nome: string
private idade: number

constructor(
    nome: string,
    idade: number
){
    this.nome = nome
    this.idade = idade
}

abstract emitirSom(): void

correr(){
    console.log()
}

subirArvore(){
    console.log()
}

}