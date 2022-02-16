function solicitarNombre () {
  let nombreIngrsado = prompt('Ingresar nombre');
  alert("El nombre ingresa es " + nombreIngrsado);
}


// let nombreIngrsado = prompt('Ingresar nombre');
// alert("El nombre ingresa es " + nombreIngrsado);
// let nombreIngrsado = prompt('Ingresar nombre');
// alert("El nombre ingresa es " + nombreIngrsado);
// let nombreIngrsado = prompt('Ingresar nombre');
// alert("El nombre ingresa es " + nombreIngrsado);
// let nombreIngrsado = prompt('Ingresar nombre');
// alert("El nombre ingresa es " + nombreIngrsado);


// solicitarNombre();
// solicitarNombre();
// solicitarNombre();
// solicitarNombre();

// for (let i=0; i <=3; i++) {
//   solicitarNombre();
// }

function conParametros (parametro1, parametro2) {
  console.log(parametro1 + " " + parametro2)
}

// conParametros("Hola", "Mundo!")
// conParametros("Hola", "Coder")
// conParametros("Cursando", "JS")


function suma (numero1, numero2) {
  return numero1 + numero2;
}

function mostrar (mensaje) {
  console.log(mensaje)
}


mostrar(suma(13,22))