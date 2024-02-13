const celsiusToFahrenheit = gradosCelsius => (gradosCelsius * 9/5) + 32;
// buscando en google la formula es:  Grados Fahrenheit = (grados centígrados × 9/5) +32.

// Temperatura de Córdoba
const temperaturaCelsius = 45;
const temperaturaFahrenheit = celsiusToFahrenheit(temperaturaCelsius);

console.log(`En Córdoba, ${temperaturaCelsius} grados Celsius son ${temperaturaFahrenheit} grados Fahrenheit.`);
