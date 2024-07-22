export class Dog {
    constructor(vardas, kailioSpalva, amzius) {
        this.name = vardas;
        this.furColor = kailioSpalva;
        this.age = amzius;
        this.legsCount = 4;
        this.hasTail = true;

    }

    hi() {
        return 'Suo sako: au au!';
    }

    think() {
        return 'Suo galvoja: 🦴'
    }

    addNumbers(a, b) {
        if (a + b < 0) {
            return 'Suo liudnas, negali suskaiciuoti negatyvaus kaulu kiekio.';
        }
        if (a + b === 0) {
            return 'Keista suns reakcija.';
        }
        return `Suo suskaiciavo: ${a} + ${b} = ${'🦴'.repeat(a + b)}.`;
    }

    manyBones(count) {
        return `Many bones: ${'🦴'.repeat(count)}`;
    }

    lostLeg() {
        if (this.legsCount === 0) {
            return 'Suo jau turi 0 koju. Nera ko prarasti.'
        }
        this.legsCount--;
        return 'Suo prarado koja.';
    }

    birthday() {
        this.age++;
        return `Suns ${this.age} gimtadienis!`;
    }

}