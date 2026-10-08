class Person {
    constructor(race, name, language) {
        this.race = race;
        this.name = name;
        this.language = language;
    }

    methodSpeaking() {
        console.log(`${this.language} ${this.name}`);
    }
}

class Ork extends Person {
    constructor(race, name, language, weapons) {
        super(race, name, language);
        this.weapons = weapons;
    }

    methodSpeaking() {
        console.log(`${this.language} ${this.name} + weapons`);
    }

    hit() {
        console.log('ork hit');
    }
}

class Elf extends Person {
    constructor(race, name, language, typeSpell) {
        super(race, name, language);
        this.typeSpell = typeSpell;
    }

    methodSpeaking() {
        console.log(`${this.language} ${this.name} + spell`);
    }

    addSpell() {
        console.log('elf add spell');
    }
}

const ork = new Ork('ork', 'one', 'orklan', 'one');
ork.hit();
const elf = new Elf('elf', 'twoo', 'elflan', 'spell');
elf.addSpell();
