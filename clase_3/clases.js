// class Persona {
//     constructor(name, last_name, age, address) {
//         this.nombre = name;
//         this.apellido = last_name;
//         this.edad = age;
//         this.calle = address;
//         this.TC = ""
//         // this.mascota = mascota;
//         // this.nombreCompleto = () => this.nombre + " " + this.apellido;
//         // this.presentarse = function() { console.log("Hola me llamo " + this.nombre)}
//     }

//     nombreCompleto () {
//         return this.nombre + " " + this.apellido
//     }

//     presentarse () {
//         console.log("Hola me llamo " + this.nombre)
//     }
// }

// const persona1 = new Persona("Homero", "Simpson", 39, "Av. Siempreviva 742");


class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.precioConIva = parseFloat(precio);
        this.vendido = false;
    }

    sumaIva () {
        this.precioConIva = this.precio * 1.21;
    }
    vender () {
        this.vendido = true;
    }
}

const producto1 = new Producto("arroz", "125")
const producto2 = new Producto("maruchan", "250")
console.log(producto1.precio)
console.log(producto1.precioConIva)
producto1.sumaIva()
console.log(producto1.precio)
console.log(producto1.precioConIva)

