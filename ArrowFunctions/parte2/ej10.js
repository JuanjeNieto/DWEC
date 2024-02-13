const calcularTiempoRecorrido = (velocidad, distancia) => {
    const tiempo = distancia / velocidad;
    return tiempo;
};
  
const velocidadAutomovil = 73000; // en km/h
const distanciaRecorrida = 120;   // en km

const tiempoNecesario = calcularTiempoRecorrido(velocidadAutomovil, distanciaRecorrida);

console.log(`El tiempo necesario para recorrer ${distanciaRecorrida} km a ${velocidadAutomovil} km/h es de ${tiempoNecesario} horas.`);
