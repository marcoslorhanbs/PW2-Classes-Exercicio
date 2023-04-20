//Exercicio 01
class Animal {
  #nome: string;
  #caracteristicas: string[];

  constructor(nome: string, caracteristicas: string[]) {
    this.#nome = nome;
    this.#caracteristicas = caracteristicas;
  }

  exibirAnimal() {
    console.log(`Nome do animal: ${this.#nome}`);
  }

  cadastrar(caracteristica: string) {
    this.#caracteristicas.push(caracteristica);
  }

  exibirCaracteristica() {
    const index = Math.floor(Math.random() * this.#caracteristicas.length);
    return this.#caracteristicas[index];
  }
}

//Exercicio 02

interface FilhoteInterface {
    readonly cores: string[];
    readonly pelagem: number;
    readonly tutor?: string; 
  }
  
  class Filhote implements FilhoteInterface {
    readonly cores: string[];
    readonly pelagem: number;
    tutor?: string; //Com o readonly não é possivel alterar;
  
    constructor(cores: string[], pelagem: number) {
      this.cores = cores;
      this.pelagem = pelagem;
    }
  
    adotar(tutor: string) {
      this.tutor = tutor; // readonly problem
    }
  }
  
// Exercicio 03
type ComidaDePet = "insetos" | "frutas" | "plantas" | "sementes" | "vegetais";

abstract class PequenoRoedor {
  readonly especie: string;
  felicidade: number = 0;

  constructor(especie: string) {
    this.especie = especie;
  }

  abstract comer(comida: ComidaDePet): boolean;

  estaFeliz(): boolean {
    return this.felicidade > 0;
  }
}

class Furao extends PequenoRoedor {
  constructor() {
    super("Furão");
  }

  cavar() {
    this.felicidade++;
  }

  comer(comida: ComidaDePet): boolean {
    return ["insetos", "plantas", "sementes", "vegetais"].includes(comida);
  }
}

class Hamster extends PequenoRoedor {
  constructor() {
    super("Hamster");
  }

  correr() {
    this.felicidade++;
  }

  comer(comida: ComidaDePet): boolean {
    return true;
  }
}
