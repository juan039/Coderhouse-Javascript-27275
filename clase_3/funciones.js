function ejemplo (funcion) {
  //hace algo con la funcion
  funcion()
}

// ejemplo(function (a, b) {return a + b})
ejemplo((a, b) => {return a + b})

const suma = function (a, b) {return a + b}
const resta = function (a, b) {return a - b}

console.log(suma(15,20))
console.log(resta(15,5))

const sumaFlecha = (a, b) => a + b
const restaFlecha = (a, b) => {
  return a - b
}
const iva = precio => precio * 0.21

let precioProducto = 500;
let descuento = 50;
function porcentaje (numero1, numero2) {
  return numero1 * (numero2 / 100)
}

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento)
let nuevoPrecioFlecha = restaFlecha(sumaFlecha(precioProducto, iva(precioProducto)), porcentaje(precioProducto, descuento))