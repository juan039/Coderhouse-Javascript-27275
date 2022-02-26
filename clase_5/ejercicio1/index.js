const paises = ["Argentina", "Uruguay", "Brasil", "Chile", "Colombia", "Venezuela", "Mexico"]

let selectNew = document.createElement("select")
for (const pais of paises) {
  selectNew.innerHTML += `<option value="${pais}">${pais}</option>`
}
document.body.append(selectNew)