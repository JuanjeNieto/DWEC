const generarNumeroAleatorio = (min = 1, max = 100) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(generarNumeroAleatorio())
console.log(generarNumeroAleatorio(5,15))