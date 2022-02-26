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


// for (const carro of carros) {
//   carro.comprar()
// }

// carros[2].realizarRecorrido(40)
// carros[3].realizarRecorrido(600)