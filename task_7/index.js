const Person = function(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
};

Person.prototype.methodSpeaking = function() {
    console.log(`${this.language} ${this.name}`);
};

const Ork = function(race, name, language, weapons) {
    Person.call(this, race, name, language);

    this.weapons = weapons;
};

Ork.prototype = Object.create(Person.prototype);
Ork.prototype.constructor = Ork;

Ork.prototype.hit = function() {
    console.log('ork hit');
};

const Elf = function(race, name, language, typeSpell) {
    Person.call(this, race, name, language);

    this.typeSpell = typeSpell;
};

Elf.prototype = Object.create(Person.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.addSpell = function() {
    console.log('elf add spell');
};

const ork = new Ork('ork', 'one', 'orklan', 'one');
ork.hit();
const elf = new Elf('elf', 'twoo', 'elflan', 'spell');
elf.addSpell();

