const suma = (a, b) => `La suma es: ${a} + ${b} = ${+a + +b}`;

const resta = (a, b) => `La resta es: ${a} - ${b} = ${a - b}`;

const multiplicación = (a, b) => `La multiplicacion es: ${a} x ${b} = ${a * b}`;

const division = (a, b) => `La division es: ${a} / ${b} = ${a / b}`;

module.exports = { suma, resta, multiplicación, division };
