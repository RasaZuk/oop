import { Fish } from "./Fish.js";

export class Dolphin extends Fish {
    constructor(name) {
        super(name);
        this.animalType = 'dolphin';
        this.finCount = 5;
        this.sound = 'uiiiiiii';
        this.emoji = '🐬'
        this.emojiCount = 6;
    }


}