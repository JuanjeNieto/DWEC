const decimalToBinary = numero => {
    return numero.toString(2);
  };
  
const numeroDecimal = 2048;
const numeroBinario = decimalToBinary(numeroDecimal);
  
console.log(`${numeroDecimal} en decimal es ${numeroBinario} en binario.`);
  