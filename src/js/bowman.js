import Character from "./character";

export default class Bowman extends Character {
    constructor(name) {
        super({ name: name, type: "Bowman" });
        this.attack = 25;
        this.defence = 25;
    }
}
