// function mayorQue(n) {
//   return (m) => m > n
// }

// let mayorQueDiez = mayorQue(10)
// // let mayorQueDiez = (m) => m > 10

// console.log(mayorQueDiez(12))
// // (12) => 12 > 10
// // 12 > 10
// // true
// console.log(mayorQueDiez(1))

// let mayorQueCien = mayorQue(100)

// console.log(mayorQueCien(23))
// console.log(mayorQueCien(6643))

const numeros = [1,2,3,4,5,6,7,8]
const nombres = ["Alan", "Gabriel", "Norman", "Gaston", "Giorgina", "Guadalupe", "Mayra", "Nathaly"]

function porCadaUno(arr, fn) {
  for (const el of arr) {
    fn(el)
  }
}

let total = 0;

function acumular(num) {
  total += num
}

porCadaUno(numeros, acumular)

// for (const el of numeros) {
//   alert(el)
// }
// porCadaUno(nombres, console.log)
// porCadaUno(numeros, alert)
// for (const el of nombres) {
//   console.log(el)
// }


const duplicado = [];

porCadaUno(numeros, (el) => {
  duplicado.push(el * 2)
})







