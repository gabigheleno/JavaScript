import { Cachorro } from "./cachorro";
import { Cavalo } from "./cavalo";
import { Preguica } from "./preguica";

console.log("*Observe os animais deste Universo, seus nomes foram inspirados em Zelda*")

let dog1 = new Cachorro("Zelda", 3)

dog1.emitirSom()
dog1.correr()

let horse1 = new Cavalo("Épona", 5)

horse1.emitirSom()
horse1.correr()

let sloth1 = new Preguica("Link", 4)

sloth1.emitirSom()
sloth1.subirArvore()