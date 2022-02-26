// console.dir(document)
// console.log(document)
// console.dir(document.head)
// console.dir(document.body)

let div =  document.getElementById("app")
let parrafo = document.getElementById("parrafo1")

console.log(div.innerHTML)
console.log(parrafo.innerHTML)


let paises = document.getElementsByClassName("paises")
console.log(paises)
// console.log(paises[0].innerHTML)

for (const pais of paises) {
  console.log(pais.innerHTML)
  pais.className = pais.className + " otra"
}


let contenedores = document.getElementsByTagName("div")
console.log(contenedores)
console.log(contenedores[0].innerHTML)

for (const contenedor of contenedores) {
  console.log(contenedor.innerHTML)
}

let titulo = document.getElementById("titulo");
console.log(titulo.innerText)

titulo.innerText = "Texto que yo quiera"
console.log(titulo.innerText)

let contendor = document.getElementById("contendor")
contendor.innerHTML = "<h2>Hola mundo!</h2><p>Lorem ipsum</p>"

let nombre = document.getElementsByClassName("nombre")
console.log(nombre.className)
// nombre.className = nombre.className + " otra clase"
nombre[0].className = " otra clase"

let contendor2 = document.getElementById("contendor2")

let parrafoNuevo = document.createElement("p")
parrafoNuevo.innerHTML = "<h2>Hola Coder!</h2>"
contendor2.append(parrafoNuevo)

paises[0].remove()
contendor2.remove()

console.log(document.getElementById("nombreInput").value);
document.getElementById("edad").value = 39;

let contendorPersonas = document.getElementById("personas")

let personas = ["Homero", "Marge", "Bart", "Lisa", "Maggie"];

for (const persona of personas) {
  let li = document.createElement("li")
  li.innerText = persona
  contendorPersonas.append(li)
}

let producto = {
  id: 1,
  nombre: "Arroz",
  precio: 125
}

contendor.innerHTML = `
  <h3>ID: ${producto.id}</h3>
  <p>Producto: ${producto.nombre}</p>
  <b>$ ${producto.precio}</b>
`
let concatenado = "ID: " + producto.id + " - Prodcuto: " + producto.nombre + " $"+ producto.precio 

let plantilla = `ID: ${producto.id} - Producto: ${producto.nombre} $${producto.precio}`

console.log(concatenado)
console.log(plantilla)

const productos = [
  {
    id: 1,
    nombre: "Arroz",
    precio: 125
  },
  {
    id: 2,
    nombre: "Fideo",
    precio: 70
  },
  {
    id: 3,
    nombre: "Pan",
    precio: 50
  },
  {
    id: 4,
    nombre: "Flan",
    precio: 100
  }
]

for (const producto of productos) {
  let contendor = document.createElement("div");
  contendor.innerHTML = `
    <h3 class="titulo">ID: ${producto.id}</h3>
    <p>Producto: ${producto.nombre}</p>
    <b>$ ${producto.precio}</b>
  `;
  document.body.append(contendor)

}

let parrafoSelector = document.querySelector("#contendor p")
let contendorSelector = document.querySelector("#contendor")
// let contendorSelector = document.getElementById("contendor")

// parrafoSelector = document.querySelector(".texto")
console.log(parrafoSelector)
console.log(contendorSelector)

let usuarios = document.querySelectorAll(".usuario")
console.log(usuarios)