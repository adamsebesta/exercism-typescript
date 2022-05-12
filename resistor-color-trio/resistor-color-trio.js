const colors = {
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
function convertToKiloohms(oohms) {
    if (oohms.length > 3) {
        return `${oohms.substring(0, oohms.length - 3)} kiloohms`;
    }
    return `${oohms} ohms`;
}
export function decodedResistorValue([band1, band2, band3]) {
    let full = `${colors[band1] * 10 + colors[band2]}${"0".repeat(colors[band3])}`;
    return `${convertToKiloohms(full)}`;
}
