// Declarando una funcion que calcule la distancia entre dos puntos
let calcularDistancia = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

// Llamar la funcion

let distancia = calcularDistancia(0,0,32,3)
console.log(`la distancia calculada fue ${distancia}`)

