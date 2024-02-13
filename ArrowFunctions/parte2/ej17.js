function generarNumerosAleatoriosUnicos() {
    let numeros = new Set();

    while (numeros.size < 100) {
        numeros.add(Math.floor(Math.random() * 1000) + 1);
    }

    return Array.from(numeros);
}

function mostrarNumerosPorPantalla() {
    const numerosAleatorios = generarNumerosAleatoriosUnicos();
    numerosAleatorios.forEach(numero => console.log(numero));
}

mostrarNumerosPorPantalla();
