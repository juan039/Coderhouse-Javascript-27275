function suma (numero1, numero2) {
  return numero1 + numero2;
}
function resta (numero1, numero2) {
  return numero1 - numero2;
}
function multiplica (numero1, numero2) {
  return numero1 * numero2;
}
function divide (numero1, numero2) {
  return numero1 / numero2;
}
function porcentaje (numero1, numero2) {
  return numero1 * (numero2 / 100)
}

function calculadora(numero1, numero2, operacion) {
  switch (operacion) {
    case "+":
      return suma(numero1, numero2)
      break;
    case "-":
      return resta(numero1, numero2)
      break;
    case "*":
      return multiplica(numero1, numero2)
      break;
    case "/":
      return divide(numero1, numero2)
      break;
    case "%":
      return porcentaje(numero1, numero2)
      break;
    default:
      return 0;
      break;
  }
}

console.log(calculadora(25820, 10, "%"))
// console.log(calculadora(2, 2, "+"))
// console.log(calculadora(50, 0, "/"))
// console.log(calculadora(85, 15, "-"))