// const miArray = ["Marca", 3, "palabra",21,12,6567,34,435,346,6547,444,23,4234,36,55];

// // console.log(miArray.length)
// // console.log(miArray[miArray.length - 1])

// for (let index=0; index < miArray.length; index++) {
//   console.log(miArray[index])
// }

const listaDeCompras = ["Leche", "Pan", "huevos"];
// const numeros = [654,684,72,36,2]
// let mensaje = numeros.join(",")
// alert(mensaje)

// const mensajesNoLeidos = ["Gabriel", "Gaston", "Giogina", "Guadalupe"]

const perros = ["Fox", "Wilka", "Mavis"];
const gatos = ["Salem", "Henra", "Nieve"];
const mascotas = gatos.concat(perros).concat(listaDeCompras)

// console.log(mascotas)

const nombres = ["Alan", "Gabriel", "Norman", "Gaston", "Giorgina", "Guadalupe", "Mayra", "Nathaly"]
const masculino = nombres.slice(0,4)
const femenino = nombres.slice(4, nombres.length)
femenino.reverse()
const nombreMitadInvertido = masculino.concat(femenino)
console.log(nombreMitadInvertido)

// console.log(femenino)

// console.log(nombres.indexOf("Gabriel"))
// console.log(nombres.indexOf("Giorgina"))

// let nombreIngresado = prompt("Ingrese un nombre a la lista");

// if (!nombres.includes(nombreIngresado)) {
//   nombres.push(nombreIngresado)
// }


const productos = [
  {
    id:1,
    nombre: "Arroz"
  },
  {
    id:2,
    nombre: "Fideo"
  },
  {
    id:3,
    nombre: "Pan"
  },
  {
    id: 4,
    nombre: "Leche"
  }
];

for (const producto of productos) {
  console.log(producto.id)
  console.log(producto.nombre)
}
