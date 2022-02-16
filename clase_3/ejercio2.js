// let redondeo = (numero) => Math.round(numero)
// redondeo = 3;
// for(let i=1; i<=5; i++) {
//   let numeroIngreado = parseFloat(prompt("Ingrese un numero decimal"));
//   console.log(redondeo(numeroIngreado));
// }

let cotizacionDolar = 212;
const cotizarDolar = (pesos) => pesos / cotizacionDolar;
const cotizarPesos = dolares => dolares * cotizacionDolar;

let tipoOperacion = prompt("Seleccionar tipo de operacion\n1. Dolares a Pesos\n2. Pesos a Dolares");

let montoACambiar = parseFloat(prompt("Cuánto desea cambiar?"));

switch (tipoOperacion) {
  case "1":
    alert("El monto en pesos es: " + cotizarPesos(montoACambiar))
    break;
  case "2":
    alert("El monto en dolares es: " + cotizarDolar(montoACambiar))
    break;

  default:
    alert("Operacion desconocida")
    break;
}