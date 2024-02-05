const contarParametros = (...parametros) => parametros.length;
// Se ha usado el operador REST (...) que acepta un numero variable de parámetros

const cantidadDeParametros = contarParametros(1, 2, true, [3, 4], "luffy", 33);
console.log(`Se pasaron ${cantidadDeParametros} parámetros.`);
