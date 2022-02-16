// let dato = prompt('Ingrese un dato');

// while (dato.toUpperCase() != 'ESC') {
//   alert("El dato ingresado es: " + dato)
//   dato = prompt('Ingrese un nuevo dato o ESC para salir');
// }

let numero = parseInt(prompt('Ingrese un número'))

// do {
//   numero = prompt("Ingrese un número");
//   console.log(numero);
// } while (parseInt(numero) > 0)
let i = 1;
// do {
//   let resultado = numero * i;
//   console.log(numero + " x " + i + " = " + resultado);
//   i++;
// } while(i <= 10)

while(i<= 10) {
  let resultado = numero * i;
  console.log(numero + " x " + i + " = " + resultado);
  i++;
}
