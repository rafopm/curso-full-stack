function saludar (nombre: string){
    // console.log(`Hola ${nombre}!`);
}

saludar("Mundo")

// -----------------------------
// 1. Variables y Tipos de datos:
let nombre: string = "Juan";
let edad: number = 25;
let esEtudiante: boolean = true;

// 2. Funciones:
function saludar1(nombre: string): string{
    return `Hola, soy ${nombre}`; // return devuelve un valor a la funcion que lo llama
}

const saludo: string = saludar1("Juan");
// console.log(saludo);

// 3. interfaces

interface Producto{
    nombre: String;
    precio: Number; 
}

const producto: Producto = {
    nombre: "Camiseta",
    precio:  40
}

// 4. Clase
class Persona{
    constructor(public nombre:string, public edad: number) {}
}

const persona1 = new Persona("Juan", 30)

console.log(`Nombre: ${persona1.nombre}, Edad:${persona1.edad} `)

// 5. Arrgelo
let numeros: number[] = [1,2,3,4,5]

for(const numero of numeros){
    console.log(numero)
}


