import MagicalCharacters from "./magicalCharacters";

export default class Magician extends MagicalCharacters {
    constructor({ name, attack = 40, stoned = false, distance }) {
        super({ name: name, type: "Magician", attack: attack, stoned: stoned, distance: distance });
        this.defence = 10;
    }
}
