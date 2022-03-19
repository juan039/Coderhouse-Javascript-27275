// const productos = [
//   {id: 1, producto: "Arroz", precio: 125},
//   {id: 2, producto: "Fideo", precio: 70},
//   {id: 3, producto: "Pan", precio: 50},
//   {id: 4, producto: "Flan", precio: 100},
// ]

// const guardarLocal = (clave, valor) => {
//   localStorage.setItem(clave, valor)
// }

// for (const producto of productos) {
//   guardarLocal(producto.id, JSON.stringify(producto))
// }

// guardarLocal('ListaProductos', JSON.stringify(productos))

const contenedor = document.querySelector('.productos')
class Producto {
  constructor(obj) {
    this.nombre = obj.producto.toUpperCase();
    this.precio = parseFloat(obj.precio);
  }
  sumarIva() {
    this.precio = this.precio * 1.21;
  }
}
const almacenados = JSON.parse(localStorage.getItem('ListaProductos'))
const productos = []

for (const objeto of almacenados) {
  productos.push(new Producto(objeto))
}

for (const producto of productos) {
  producto.sumarIva()
}

function renderProductos() {
  for (const producto of productos) {
    let nuevoDiv = document.createElement('div')
    nuevoDiv.innerHTML = `
    <h2>${producto.nombre}</h2>
    <p>${producto.precio}</p>
    `
    // nuevoDiv.innerHTML = "<h2>"+producto.nombre+"</h2><p>"+producto.precio+"</p>"
    contenedor.append(nuevoDiv)
  }
}
renderProductos()



const paises = ['MX', 'CO', 'AR']
const estadosMX = ['Estado de Mexico', 'Jalisco', 'Quintana Roo']
const estadosCO = ['Estado de Mexico', 'Jalisco', 'Quintana Roo']