export class Allergies {
  public allergenIndex: number;
  public allergens: { [key: string]: number } = {
    eggs: 1,
    peanuts: 2,
    shellfish: 4,
    strawberries: 8,
    tomatoes: 16,
    chocolate: 32,
    pollen: 64,
    cats: 128,
  };

  constructor(allergenIndex: number) {
    this.allergenIndex = allergenIndex;
  }
  public list(): string[] {
    return Object.keys(this.allergens).filter((a) => this.allergicTo(a));
  }
  public allergicTo(allergen: string): boolean {
    return (
      (this.allergenIndex & this.allergens[allergen]) ==
      this.allergens[allergen]
    );
  }
}
