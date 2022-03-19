let inputText = document.querySelector('#todo')
let btn = document.querySelector('#btn')
let btnClear = document.querySelector('#clear')
let lista = document.querySelector('#lista')

btn.addEventListener('click', agregarItem)
btnClear.addEventListener('click', limpiarDatos)

function agregarItem() {
  let item = document.createElement('li')
  const todoItem = inputText.value
  item.innerText = todoItem
  lista.append(item)
  localStorage.setItem('todo', todoItem)
}

function leerLocalStorage() {
  let todoStored = localStorage.getItem('todo')
  if (todoStored !== null) {
    let item = document.createElement('li')
    item.innerText = todoStored
    lista.append(item)
  }
}
function limpiarDatos() {
  // localStorage.clear()
  localStorage.removeItem('todo')
  lista.innerHTML = ''
}

leerLocalStorage()