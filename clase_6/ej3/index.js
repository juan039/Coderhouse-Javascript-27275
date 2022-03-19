let usuario;
let usuarioEnLS = (localStorage.getItem('usuario'))


if (usuarioEnLS) {
  usuario = usuarioEnLS
} else {
  usuario = prompt('ingrese su nombre de usuario')
  localStorage.setItem('usuario', usuario)
}

