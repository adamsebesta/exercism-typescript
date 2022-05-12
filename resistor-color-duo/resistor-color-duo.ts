interface ColorMap {
  [key: string]: number;
}
const colors: ColorMap = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

export function decodedValue([band1, band2]: string[]): number {
  return colors[band1] * 10 + colors[band2];
}
