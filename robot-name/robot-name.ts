interface ReleaseNames {
  [name: string]: string;
}

const letters = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
const numbers = Array.from("012345678910");
export class Robot {
  name: string;
  static releaseNamesOb: ReleaseNames = {};

  constructor() {
    this.name = this.getUniqueName();
    Robot.releaseNamesOb[this.name] = "active";
  }

  public resetName(): void {
    Robot.releaseNamesOb[this.name] = "deactivated";
    this.name = this.getUniqueName();
  }

  public static releaseNames(): ReleaseNames {
    return Robot.releaseNamesOb;
  }

  private getRandomElement(array: string[]): string {
    return array[Math.floor(Math.random() * array.length)];
  }
  private getNewName(): string {
    return `${this.getRandomElement(letters)}${this.getRandomElement(
      letters
    )}${this.getRandomElement(numbers)}${this.getRandomElement(
      numbers
    )}${this.getRandomElement(numbers)}`;
  }
  private getUniqueName(): string {
    let name = this.getNewName();
    while (Robot.releaseNamesOb[name]) {
      name = this.getNewName();
    }
    return name;
  }
}
