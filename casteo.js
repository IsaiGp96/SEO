//1. Convertir la cadena a un número    
function convertirCadenaANumero(cadena) {
    let numero;
    numero = Number(cadena);
    return numero;
} 

//2. Convertir el número a cadena    
function convertirNumeroACadena(numero) {
    let cadena;
    cadena = String(numero);
    return cadena;
}
    
// 3. Convertir el booleano a cadena 
function convertirBooleanoACadena(booleano) {
    let cadena;
    cadena = String(booleano);
    return cadena;
}

//4. Convertir la cadena a booleano
function convertirCadenaABooleano(cadena) {
    let booleano; 
    booleano = cadena.toLowerCase() === 'true';
    return booleano;
}

//5. Convertir el número a booleano     
function convertirNumeroABooleano(numero) {
    let booleano;
    booleano = Boolean(numero);
    return booleano;
}
