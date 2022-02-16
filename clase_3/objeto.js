// let nombreUsuario = "Homero"

// const persona1 = {
//   nombre: nombreUsuario,
//   edad: 39,
//   direccion: "Av. Siempreviva 742"
// }

// // console.log(persona1.nombre)
// // console.log(persona1.edad)
// // console.log(persona1.direccion)
// console.log(persona1["nombre"])
// console.log(persona1["edad"])
// console.log(persona1["direccion"])

function Persona(name, last_name, age, address, mascota) {
  this.nombre = name;
  this.apellido = last_name;
  this.edad = age;
  this.calle = address;
  this.mascota = mascota;
  this.nombreCompleto = () => this.nombre + " " + this.apellido;
  this.presentarse = function() { console.log("Hola me llamo " + this.nombre)}
}

// const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");

function Mascota(animal, nombre) {
  this.animal = animal,
  this.nombre = nombre
}

// let animalIngresado = prompt('Qué animal tienes de mascota?');
// let nombreIngresado = prompt('Cómo se llama tu mascota?')

let mascota1 = new Mascota('Perro', 'Ayudante de Santa')
const persona1 = new Persona("Homero", "Simpson", 39, "Av. Siempreviva 742", mascota1);


function Restaurante(nombre, tipo_comida) {
  this.nombre = nombre;
  this.tipo_comida = tipo_comida;
}

const restaurante1 = new Restaurante('Restaurante Moe', 'Americana');

for (const atributo in persona1) {
    console.log(atributo + ": " + persona1[atributo])
}

