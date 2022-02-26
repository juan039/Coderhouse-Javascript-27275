const numeros = [1,2,3,4,5,6,7,8,9,10]

numeros.forEach((num) => {
  console.log(num)
})

const cursos = [
  {nombre: "Javascript", precio: 15000},
  {nombre: "ReactJS", precio: 22000},
  {nombre: "AngularJS", precio: 22000},
  {nombre: "Desarrollo Web", precio: 16000}
]

let resultado1 = cursos.find((el) => {
  return el.nombre === "ReactJS"
})
console.log(resultado1)
let resultado2 = cursos.find((el) => el.nombre === "VueJS")
console.log(resultado2)

let resultado3 = cursos.filter((el) => {
  return el.nombre.includes("JS")
})
console.log(resultado3)

let resultado4 = cursos.filter((el) => el.precio < 17000)
console.log(resultado4)


let precioCompra = 0;
class Carro {
  constructor(marca, modelo, anho, motor, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anho = anho;
    this.motor = motor;
    this.precio = precio;
    this.vendido = false;
    this.kilometraje = 0;
  }

  comprar () {
    if (!this.vendido) {
      this.vendido = true;
      precioCompra = precioCompra + this.precio
    }
  }

  realizarRecorrido (kilometros) {
    this.kilometraje = this.kilometraje + kilometros
  }
}

const carros = []
const carroCustom = {
  marca: "Renault",
  modelo: "Sandero",
}
carros.push(new Carro("Mazda","2", "2021", "1.4", 12000))
carros.push(new Carro("Ford","Fiesta", "2012", "1.6", 10000))
carros.push(new Carro("Volkwagen","Karmann Ghua", "1968", "1.4", 2000))
carros.push(new Carro("Ford","K", "2022", "1.6", 20000))

let resultado5 = carros.filter((el) => parseInt(el.anho) > 2020)
console.log(resultado5)

console.log(cursos.some((el) => el.nombre == "Desarrollo Web"))
console.log(cursos.some((el) => el.nombre == "VueJS"))

console.log(carros.some((el) => el.vendido == true))

const nombresCursos = cursos.map((el) => {
  return el.nombre
})
console.log(nombresCursos)

const cursosActualizados = cursos.map((el) => {
  return {
    nombre: el.nombre,
    precio: el.precio * 1.25
  }
})
// console.log(cu)

const carrito = [
  {nombre: "PS5", precio: 500},
  {nombre: "Horizon", precio: 60},
  {nombre: "Headphones", precio: 80},
  {nombre: "microfono", precio: 40 }
]

const total = carrito.reduce((acc, el) => {
  return acc + el.precio
}, 0)

const sumaNumeros = numeros.reduce((acc, el) => acc + el, 0)
console.log(sumaNumeros)

const numerosDesordenados = [40,5,87,100,10,1]
numerosDesordenados.sort((a,b) => b - a);

cursos.sort((a,b) => {
  if (a.nombre > b.nombre) {
    return 1
  }
  if (a.nombre < b.nombre) {
    return -1
  }

  return 0
})
cursos.sort((a,b) => {
  if (a.precio > b.precio) {
    return 1
  }
  if (a.precio < b.precio) {
    return -1
  }

  return 0
})
