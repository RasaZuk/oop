import { Bird } from "./Bird.js";

export class Pigeon extends Bird {
    constructor(name) {
        super(name);
        this.animalType = 'pigeon';
        this.sound = 'ou ou';
        this.emoji = '🦢';
        this.emojiCount = 4;

    }
}