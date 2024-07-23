import { Fish } from "./Fish.js";

export class GoldenFish extends Fish {
    constructor(name) {
        super(name);
        this.animalType = 'goldenFish';
        this.finCount = 7;
        this.sound = 'brrrr';
        this.emoji = '🐠'
        this.emojiCount = 3;
    }


}