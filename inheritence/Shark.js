import { Fish } from "./Fish.js";

export class Shark extends Fish {
    constructor(name) {
        super(name);
        this.animalType = 'shark';
        this.sound = 'kramst';
        this.emoji = '🦈';
        this.emojiCount = 2;
    }

}