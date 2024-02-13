const calcularPrecioConIVA = (precio, iva = 21) => {
    const precioConIVA = precio * (1 + iva / 100);
    return precioConIVA;
};
console.log(calcularPrecioConIVA(10))
console.log(calcularPrecioConIVA(100, 33))