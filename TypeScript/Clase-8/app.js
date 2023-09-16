"use strict";
function saludar(nombre) {
    // console.log(`Hola ${nombre}!`);
}
saludar("Mundo");
// -----------------------------
// 1. Variables y Tipos de datos:
let nombre = "Juan";
let edad = 25;
let esEtudiante = true;
// 2. Funciones:
function saludar1(nombre) {
    return `Hola, soy ${nombre}`; // return devuelve un valor a la funcion que lo llama
}
const saludo = saludar1("Juan");
const producto = {
    nombre: "Camiseta",
    precio: 40
};
// 4. Clase
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
const persona1 = new Persona("Juan", 30);
console.log(`Nombre: ${persona1.nombre}, Edad:${persona1.edad} `);
// 5. Arrgelo
let numeros = [1, 2, 3, 4, 5];
for (const numero of numeros) {
    console.log(numero);
}
