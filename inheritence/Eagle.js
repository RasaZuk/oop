import { Bird } from "./Bird.js";

export class Eagle extends Bird {
    constructor(name) {
        super(name);
        this.animalType = 'eagle';
        this.sound = 'vau vau';
        this.emoji = '🦅';
        this.emojiCount = 2;

    }
}