const Kelvin = 293;
const Celsius = Kelvin - 273;
let Newton = Celsius * (33 / 100);
Newton = Math.floor(Newton);

console.log(`The force applied is ${Newton} newton.`);
