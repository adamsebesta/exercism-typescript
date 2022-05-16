export class Allergies {
    allergenIndex;
    largest;
    static allergens = [
        "eggs",
        "peanuts",
        "shellfish",
        "strawberries",
        "tomatoes",
        "chocolate",
        "pollen",
        "cats",
    ];
    constructor(allergenIndex) {
        this.allergenIndex = allergenIndex;
        this.largest = this.getLargest();
    }
    list() {
        return Allergies.allergens.filter((v) => this.allergicTo(v));
    }
    allergicTo(allergen) {
        let index = this.allergenIndex;
        let score = this.value(allergen);
        if (index !== 0 && score) {
            if (this.allergenIndex === score || this.largest === allergen) {
                return true;
            }
            if (this.largest && index - this.value(this.largest) === score) {
                return true;
            }
        }
        return false;
    }
    getLargest() {
        let closest = undefined;
        let arr = Allergies.allergens;
        for (const [index, el] of arr.entries()) {
            if (this.value(el) > this.allergenIndex) {
                closest = arr[index - 1];
                break;
            }
        }
        return closest;
    }
    value(string) {
        return 2 ** Allergies.allergens.indexOf(string);
    }
}
console.log(new Allergies(5).allergicTo("eggs"));
console.log(new Allergies(5).allergicTo("shellfish"));
