import { Animal } from "./animal";

export class Cachorro extends Animal{

    emitirSom(): void {
        console.log("Auau");
    }

    correr(): void {
        console.log(`Dog ${this.nome} correndo`)
    }

}