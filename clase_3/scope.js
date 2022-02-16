let global = "Hola soy variable Global"

function mostrarGlobal () {
  global = "Fui modificada, sigo Global"
  console.log(global)
}

mostrarGlobal()
console.log(global)

// function suma (numero1, numero2) {
//   let resultado = numero1 + numero2;
//   return resultado
// }

// console.log(suma(5,8))
// console.log(resultado)

let nombre = "Alan"

function saludar () {
  let nombre = "Fernando"
  console.log(nombre)
}

console.log(nombre)
saludar()
const PI = "otro valor"
function mostrarValor () {
  alert('El numero pi es igual a '+ PI)
}
function areaCirculo (radio) {
  const PI = 3.1415
  return PI * (radio * radio)
}
function suma (numero1, numero2) {
  let resultado = numero1 + numero2;
  return resultado
}

function resta (numero1, numero2) {
  let resultado = numero1 - numero2;
  return resultado
}