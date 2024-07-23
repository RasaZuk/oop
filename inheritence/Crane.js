import { Bird } from "./Bird.js";

export class Crane extends Bird {
    constructor(name) {
        super(name);
        this.animalType = 'crane';
        this.sound = 'kar kar kar';
        this.emoji = '🐧';
        this.emojiCount = 1;

    }
}