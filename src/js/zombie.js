import Character from "./character";

export default class Zombie extends Character {
    constructor(name) {
        super({ name: name, type: "Zombie" });
        this.attack = 40;
        this.defence = 10;
    }
}
