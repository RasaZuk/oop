import { Pet } from "./Pet.js";

export class Cat extends Pet {
    //copy-paste PET{}
    //constructor() {}
    //intro() {}
    //voice() {}

    constructor(name) {
        super(name);
        this.animalType = 'cat';
        this.sound = 'miau';
        this.emoji = '🐱';
        this.emojiCount = 2;
    }

}