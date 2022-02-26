let boton = document.querySelector("#btnPrincipal")
let boton2 = document.querySelector("#btnSecundario")
let nodoMensaje = document.querySelector("#mensaje")
let nombreInput = document.querySelector("#nombre")
let parrafo = document.querySelector("#parrafo")
let edadInput = document.querySelector("#edad")
let formulario = document.querySelector("#formulario")

console.log("Inicio la pagina")

boton.addEventListener("click", saludar)
boton2.addEventListener("click", saludar)

// boton.addEventListener("mousemove", function () {
//   console.log('En movimiento')
// })
boton.addEventListener("mouseover", () => {
  parrafo.innerText = "Entro al boton"
})
boton.addEventListener("mouseout", () => {
  parrafo.innerText = ""
})

nombreInput.addEventListener("keyup", (e) => {
  // console.dir(e)
  // console.log(e.keyCode)
  // console.log("KeyUP")
  accionPorTecla(e.keyCode)

})
function accionPorTecla(params) {
  switch (params) {
    case 39:
      console.log("Derecha")
      break;
    case 40:
      console.log("Abajo")
      break;
    case 38:
      console.log("Arriba")
      break;
    case 37:
      console.log("Izquierda")
      break;
      
    default:
      console.log("No sé")
      break;
  }
}
nombreInput.addEventListener("input", () => {console.log(nombreInput.value)})
edadInput.addEventListener("keydown", () => {console.log("KeyDOWN")})

nombreInput.onchange = () => { console.log("Cambio el valor de nombre")}
edadInput.onchange = () => { console.log("Cambio el valor de edad")}

function saludar(e) {
  console.log(e.target.id)
  console.log("Click en boton")
  if (e.target.id == "btnPrincipal") {
    console.log("Bienvenido")
  } else {
    console.log("Buenas")
  }
}

const personas = []
formulario.addEventListener("submit", validarFormulario)
function validarFormulario(e) {
  e.preventDefault();
  console.log("Formulario enviado")
  let persona = new Persona(nombreInput.value, edadInput.value)
  personas.push(persona)
  nombreInput.value = ""
  edadInput.value = ""
}
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
  }
}
// boton.onclick = () => { console.log("Respuesta 2") }

// function respuestaClick() {
//   console.log("Respuesta evento 3!!")
// }