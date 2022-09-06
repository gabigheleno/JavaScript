import { Animal } from "./animal";

export class Preguica extends Animal{
    emitirSom(): void {
        console.log("Pssss");
    }
    
    subirArvore(): void {
        console.log(`Preguiça ${this.nome} subindo na árvore`)
    }
}