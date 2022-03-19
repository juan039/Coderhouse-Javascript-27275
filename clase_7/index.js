const usuario =  {
  nombre: "Juan Perez",
  edad: 32,
  dni: '1246549',
  direccion: 'calle falsa 123',
  telefono: {
    cel: '310246498',
    casa: null,
    trabajo: '01800054648974'
  },
}

// let nombre1 = usuario.nombre
// let edad1 = usuario.edad

let {
  nombre: username,
  telefono: phoneBook, 
  telefono: {cel}
} = usuario
// let {cel} = telefono
// console.log(nombre1)
// console.log(edad1)
// console.log(nombre)
// console.log(edad)

console.log(username)
console.log(phoneBook)
console.log(cel)


const producto = {
  id: 10,
  nombre: 'curso de JS',
  precio: 12500
}
// Forma 1
const destructurar = ({id, nombre}) => {
  console.log(id, nombre)
}

destructurar(producto)

//Forma 2
// const {id, nombre} = producto
// const {id, nombre} = persona1
// const destructurar = (id, nombre) => {
//   console.log(id, nombre)
// }
// destructurar(id, nombre)


window.addEventListener('click', ({x, y}) => {
  console.log(x, y)
})


const nombres1 = ["Juan", "Julieta"]
const nombres2 = ["Carlos", "Mariela"]
const nombres3 = ["Wanda", "Vision"]

// const nombres = nombres1.concat(nombres2).concat(nombres3)
const nombres = ['Paola', 'Edward', ...nombres3, ...nombres2, ...nombres1]
console.log(nombres)

const nombresObj = {
  ...nombres
}

console.log(nombresObj)
console.log(nombresObj['0'])


const usuario1 = {
  nombre: "Juan",
  edad: 24,
  curso: "Javascript",
  dinero: 1000
}

const usuario2 = {
  ...usuario1,
  dinero: 1520
}
const usuario3 = {
  ...usuario1,
  curso: "ReactJS",
  email: 'juan@doe.com'
}
// const usuario2 = usuario1
// console.log(usuario2)
// usuario2.nombre = 'Pedro'
console.log(usuario1)
console.log(usuario2)
console.log(usuario3)

formulario = {
  nombre: "Juan Pablo",
  edad: 26
}

// usuario1.nombre = formulario.nombre
// usuario1.edad = formulario.edad


// usuario1 = {
//   ...usuario1,
//   ...formulario
// }

// console.log(usuario1)

function sumar(...numeros) {
  return numeros.reduce((acc, el) => acc + el, 0)
  // console.log(numeros)
}

console.log(sumar(2,5))
console.log(sumar(2,5,634,232,3))
console.log(sumar(2,5,634,4,22,3,7,7,31,212,563,322,2444,232,3))