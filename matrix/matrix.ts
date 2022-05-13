export class Matrix {
  rows: number[][];
  columns: number[][];

  constructor(code: string) {
    this.rows = code
      .split("\n")
      .map((row) => row.split(" ").map((num) => parseInt(num)));

    this.columns = this.rows.map((row, i) =>
      Array.from(
        { length: this.rows.length },
        (v, index) => this.rows[index][i]
      )
    );
  }
}
