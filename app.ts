//Exercicio 01
const gato = new Animal('Gato', ['Carnívoro', 'Doméstico']);

gato.exibirAnimal(); // Imprime "Nome do animal: Gato"

gato.cadastrar('Silencioso');
gato.cadastrar('Caça à noite');

console.log(gato.exibirCaracteristica()); // Exibe uma característica aleatória do animal (por exemplo: "Silencioso")
console.log(gato.exibirCaracteristica()); // Exibe outra característica aleatória do animal (por exemplo: "Doméstico")

//Exercicio 02

const filhote = new Filhote(['branco', 'preto'], 10);

console.log(filhote.cores); // Imprime ["branco", "preto"]
console.log(filhote.pelagem); // Imprime 10
console.log(filhote.tutor); // Imprime undefined

filhote.adotar('João');

console.log(filhote.tutor); // Imprime "João"

//Exercicio 03

const meuFurao = new Furao();
const meuHamster = new Hamster();

console.log(meuFurao.especie); // Furão
console.log(meuHamster.especie); // Hamster

console.log(meuFurao.comer("frutas")); // false
console.log(meuHamster.comer("frutas")); // true

console.log(meuFurao.estaFeliz()); // false
console.log(meuHamster.estaFeliz()); // false

meuFurao.cavar();
console.log(meuFurao.estaFeliz()); // true

meuHamster.correr();
console.log(meuHamster.estaFeliz()); // true
