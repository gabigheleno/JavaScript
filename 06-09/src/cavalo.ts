import { Animal } from "./animal";

export class Cavalo extends Animal{
    emitirSom(): void {
        console.log("Pocotó")
    }

    correr(): void {
        console.log(`Horse ${this.nome} correndo`)
    }
    
}