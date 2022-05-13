const letters = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
const numbers = Array.from("012345678910");
export class Robot {
    name;
    static releaseNamesOb = {};
    constructor() {
        this.name = this.getUniqueName();
        Robot.releaseNamesOb[this.name] = "active";
    }
    resetName() {
        Robot.releaseNamesOb[this.name] = "deactivated";
        this.name = this.getUniqueName();
    }
    static releaseNames() {
        return Robot.releaseNamesOb;
    }
    getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    getNewName() {
        return `${this.getRandomElement(letters)}${this.getRandomElement(letters)}${this.getRandomElement(numbers)}${this.getRandomElement(numbers)}${this.getRandomElement(numbers)}`;
    }
    getUniqueName() {
        let name = this.getNewName();
        while (Robot.releaseNamesOb[name]) {
            name = this.getNewName();
        }
        return name;
    }
}
console.log(new Robot().name);
