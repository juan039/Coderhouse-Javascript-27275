let dinero = 1000;
let precioBanana = 25;
let precioFrutilla = 50;
let polo = {
  s: {
    precio: 50
  },
  m: {
    precio: 55
  },
  l: {
    precio: 60
  }
}

function comprar(valor) {
  // let valorProducto = 125;
  // let dineroRestante = dinero - valorProducto
  if (dinero >= valor) {
    dinero = dinero - valor;
  } else {
    alert('no tiene dinero suficiente')
  }
}


class Polo {
  constructor (precio, marca, color) {
    this.precio = precio;
    this.marca = marca;
    this.color = color;
  } 
}

let polo1 = new Polo(127, 'Zara', 'azul')
let polo2 = new Polo(500, 'Gucci', 'Roja')
let polo3 = new Polo(750, 'LV', 'Verde')

let productoSeleccionado = prompt('Escoger un prodcuto\n1. Zara\n2.Gucci\n3. LV')

switch (productoSeleccionado) {
  case '1':
    comprar(polo1.precio)
    break;
  case '2':
    comprar(polo2.precio)
    break;
  case '3':
    comprar(polo3.precio)
    break;
  default:
    alert('No tenemos dicho producto')
    break;
}