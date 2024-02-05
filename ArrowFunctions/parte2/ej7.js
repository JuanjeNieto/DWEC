const calcularMedia = numeros => {
    const suma = numeros.reduce((total, numero) => total + numero, 0);
    return suma / numeros.length;
  };
  
const numerosArray = [11, 22, 33, 12, 8];
const media = calcularMedia(numerosArray);
  
console.log(`La media de los números es: ${media}`);
  