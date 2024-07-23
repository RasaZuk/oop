import { Dog } from "./inheritence/Dog.js";
import { Cat } from "./inheritence/Cat.js";
import { Hamster } from "./inheritence/Hamster.js";
import { Shark } from "./inheritence/Shark.js";
import { GoldenFish } from "./inheritence/GoldenFish.js";
import { Dolphin } from "./inheritence/Dolphin.js";
import { Eagle } from "./inheritence/Eagle.js";
import { Crane } from "./inheritence/Crane.js";
import { Pigeon } from "./inheritence/Pigeon.js";


const rexas = new Dog('Rex');
console.log(rexas.voice());

const brisius = new Dog('Brisius');
console.log(brisius.voice());

const rainis = new Cat('Rainis');
console.log(rainis.voice());

const tom = new Cat('Tom');
console.log(tom.voice());

const mikis = new Hamster('Mikis');
console.log(mikis.intro());

const litlis = new Hamster('Litlis');
console.log(litlis.voice());

const baby = new Shark('Baby');
console.log(baby.intro());

const nemo = new GoldenFish('Nemo');
console.log(nemo.voice());

const flipper = new Dolphin('Flipper');
console.log(flipper.intro());
console.log(flipper.voice());

const goldenEye = new Eagle('GoldenEye');
console.log(goldenEye.intro());
console.log(goldenEye.voice());

const blakie = new Crane('Blakie');
console.log(blakie.intro());
console.log(blakie.voice());

const piece = new Pigeon('Piece');
console.log(piece.intro());
console.log(piece.voice());