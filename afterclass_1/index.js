// Crear Script
// Preguntar ubicación de la persona o donde quiere el envio
// PReguntar Producto de una lista de opciones
// Preguntar tamaño de producto de una lista
// Preguntar cantidad de producto
// Arrojar precio TOTAL

let ubicacion = prompt('Por favor ingresar ciudad de destino')
let producto;
let tamano;
let cantidad;
let precioUnidad;
let volverAComprar;
if (ubicacion.toLowerCase() == "cordoba") {
  do {
    producto = prompt('Que producto desea?\n1. Taza\n2. Cuenco\n3. Mate');
    while (producto != 1 && producto != 2 && producto != 3 && producto.toLowerCase() != 'taza' && producto.toLowerCase() != 'cuenco' && producto.toLowerCase() != 'mate') {
      producto = prompt('Lo sentimos el producto que ingreso no está en invetario\nQué producto desea?\n1. Taza\n2. Cuenco\n3. Mate');
    }
    tamano = prompt('Que Tamaño desea su producto?\n1. Pequeño\n2. Mediano\n3. Grande');
    while (tamano != 1 && tamano != 2 && tamano != 3 && tamano.toLowerCase() != 'pequeño' && tamano.toLowerCase() != 'mediano' && tamano.toLowerCase() != 'grande') {
      tamano = prompt('Lo sentimos no tenemos el tamaño indicado\nQue Tamaño desea su producto?\n1. Pequeño\n2. Mediano\n3. Grande');
    }
    cantidad = parseInt(prompt('Cuántas unidades del producto desea?'));
  
    switch (producto){
      case 'Taza':
      case '1':
        precioUnidad = 100;
        producto = 'Taza'
        break;
      case 'Cuenco':
      case '2':
        precioUnidad = 200;
        producto = 'Cuenco'
        break;
      case 'Mate':
      case '3':
        precioUnidad = 300;
        producto = 'Mate'
        break;
    }
    
    switch (tamano){
      case 'Pequeño':
      case '1':
        precioUnidad = precioUnidad * 1;
        break;
      case 'Mediano':
      case '2':
        precioUnidad = precioUnidad * 1.5;
        break;
      case 'Grande':
      case '3':
        precioUnidad = precioUnidad * 2;
        break;
    }
  
    let precioTotal = precioUnidad * cantidad;
    // if (producto == 3) {
    //   producto = 'Mate'
    // } else if (producto == 2) {
    //   producto = 'Cuenco'
    // } else if (producto == 1) {
    //   producto = 'Taza'
    // }
    alert('El total de su compra es de $' + precioTotal + '\n'+ producto + " x " + cantidad + " unidades");
    volverAComprar = prompt('deseas volver a comprar? Y/N')
  } while (volverAComprar == 'Y')

} else {
  alert('Lo sentimos, no tenemos cobertura en dicha ciudad');
}