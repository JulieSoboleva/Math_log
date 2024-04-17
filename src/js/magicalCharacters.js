import Character from "./character";

export default class MagicalCharacters extends Character {
    constructor({ name, type, attack, stoned, distance }) {
        super({ name: name, type: type });
        this.attack = attack;
        this.stoned = stoned;
        this.distance = distance;
    }

    set attack(value) {
        this.mattack = value;
    }

    get attack() {
        let attack = this.mattack;

        attack -= attack * ((this.distance - 1) / 10);

        if (this.stoned) {
            attack -= Math.log2(this.distance) * 5;
        }

        return (attack > 0) ? Math.floor(attack) : 0;
    }
}