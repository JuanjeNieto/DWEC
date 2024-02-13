const obtenerLetraDNI = (dni) => {
    
    const dniRegex = /^[0-9]{8}$/;
    if (!dniRegex.test(dni)) {
        return "DNI Erróneo";
    }

    const letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";
    const dniNumero = parseInt(dni, 10);
    const letra = letrasDNI.charAt(dniNumero % 23);
    
    return letra;
}

console.log(obtenerLetraDNI("00000000"))