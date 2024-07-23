import { Pet } from "./Pet.js";

export class Hamster extends Pet {
    constructor(name) {
        super(name);
        this.animalType = 'hamster';
        this.sound = 'cyp';
        this.emoji = '🐹';
        this.emojiCount = 3;

    }
}