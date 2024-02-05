const obtenerNumerosPares = (array) => {
    for (let i = 2; i <= 40; i += 2) {
        array.push(i);
    }
  };

const numerosParesArray = [];
obtenerNumerosPares(numerosParesArray);

console.log(numerosParesArray);
  