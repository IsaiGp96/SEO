//1.     
function convertirCadenaANumero(cadena) {
    let numero;
    // Convertir la cadena a un número 
    numero = Number(cadena);
    return numero;
}

 

//2.     
function convertirNumeroACadena(numero) {
    let cadena;
    // Convertir el número a cadena    
    cadena = String(numero);
    return cadena;
}


//3.     
function convertirBooleanoACadena(booleano) {
    let cadena;
    // Convertir el booleano a cadena 
    cadena = String(booleano);
    return cadena;
}


//4.     
function convertirCadenaABooleano(cadena) {
    let booleano;
    // Convertir la cadena a booleano 
    booleano = cadena.toLowerCase() === 'true';
    return booleano;
}


//5.     
function convertirNumeroABooleano(numero) {
    let booleano;
    // Convertir el número a booleano 
    booleano = Boolean(numero);
    return booleano;
}
