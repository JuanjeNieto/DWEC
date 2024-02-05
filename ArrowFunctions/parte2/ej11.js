const generarFibonacci = (cantidad) => {
    const fibonacciArray = [0, 1];
  
    for (let i = 2; i < cantidad; i++) {
      const nuevoNumero = fibonacciArray[i - 1] + fibonacciArray[i - 2];
      fibonacciArray.push(nuevoNumero);
    }

    return fibonacciArray;
  };
  
  const primerosDiezFibonacci = generarFibonacci(10);
 
  console.log("Los primeros 10 números de la serie Fibonacci son:", primerosDiezFibonacci);
  