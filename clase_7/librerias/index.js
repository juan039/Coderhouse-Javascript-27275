let errorMessage = 'Todo puede malir sal'
// Swal.fire({
//   title: errorMessage,
//   text: 'Desea continuar?',
//   icon: 'error',
//   confirmButtonText: 'Cerrar'
// })

let btn = document.querySelector('#btn');
let btnSecondary = document.querySelector('#btn-secondary');
btn.addEventListener('click', () => {
  // Swal.fire({
  //   title: "Genial!",
  //   icon: 'info',
  //   confirmButtonText: 'Cool'
  // })
  // Swal.fire({
  //   position: 'top-end',
  //   icon: 'success',
  //   title: 'Su cumpra fue realizada con éxito!',
  //   showConfirmButton: false,
  //   timer: 1500
  // })
  // Swal.fire({
  //   title: 'Sweet',
  //   imageUrl: 'https://images.dog.ceo/breeds/mountain-swiss/n02107574_592.jpg',
  //   imageWidth: 200,
  //   imageHeight: 300
  // })
  Swal.fire({
    title: 'Está seguro?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí',
    cancelButtonText: 'No'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Borrado',
        icon: 'success',
        text: 'Ha sido borrado'
      })
    }
  })
})

let tiempo = 2500
btnSecondary.addEventListener('click', () => {
  Toastify({
    text: 'Prueba',
    duration: tiempo,
    gravity: "bottom",
    position: 'left',
    className: 'nuevo',
    // onClick: () => {
    //   Swal.fire({
    //     title: 'Click al toast',
    //     icon: 'success',
    //   })
    // }
    destination: 'https://getbootstrap.com/docs/5.1/getting-started/introduction/'
  }).showToast()
})


