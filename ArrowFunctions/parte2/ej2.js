const generarNumeroAleatorio = (maximo) => {
    return Math.floor(Math.random() * maximo) + 1;
  };
  
  const primerNumeroAleatorio = generarNumeroAleatorio(10); 
  const segundoNumeroAleatorio = generarNumeroAleatorio(5);  
  console.log(primerNumeroAleatorio);
  console.log(segundoNumeroAleatorio);
  