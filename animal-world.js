import { Dog } from "./inheritence/Dog.js";
import { Cat } from "./inheritence/Cat.js";

const rexas = new Dog('Rex');
console.log(rexas.voice());

const brisius = new Dog('Brisius');
console.log(brisius.voice());

const rainis = new Cat('Rainis');
console.log(rainis.voice());

const tom = new Cat('Tom');
console.log(tom.voice());
