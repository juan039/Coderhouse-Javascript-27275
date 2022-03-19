// const btn = document.querySelector("#mostrar-btn")
// const mensaje = document.querySelector('div')

// btn.addEventListener('click', () => {
  
//   setTimeout(() => {
//     mensaje.classList.add('activo')
//     // mensaje.classList.remove('activo')
//   }, 2500)
// })

// const eventoFuturo = (res) => {
//   return new Promise((resolve, reject) => {
//     //vamos a hacer algo
//     // if (res === true) {
//     //   resolve('Promesa Resuelta')
      
//     // } else {
//     //   reject('Promesa rechazada')
      
//     // }
//     setTimeout ( () => {
//       res ? resolve('Promesa Resuelta') : reject('Promesa Rechazada')

//     }, 2000)
//   })
// }

// console.log(eventoFuturo(true))
// eventoFuturo(true)
//   .then((resp) => {
//     console.log(resp)
//   })
//   .catch( (error) => {
//     console.log(error)
//   })
//   .finally( () => {
//     console.log('Termino el proceso')
//   })
// // console.log(eventoFuturo('string'))
// console.log(eventoFuturo(false))

// eventoFuturo(false)
//   .then((resp) => {
//     console.log(resp)
//   })
//   .catch( (error) => {
//     console.log(error)
//   })
//   .finally( () => {
//     console.log('Termino el proceso')
//   })


// const BD = [
//   {
//     id: 1,
//     nombre: "Arroz",
//     precio: 125
//   },
//   {
//     id: 2,
//     nombre: "Fideo",
//     precio: 70
//   },
//   {
//     id: 3,
//     nombre: "Pan",
//     precio: 50
//   },
//   {
//     id: 4,
//     nombre: "Flan",
//     precio: 100
//   }
// ]

// const pedirProductos = () => {
//   return new Promise((resolve,reject) => {
//     setTimeout(()=>{
//       resolve(BD)
//     }, 3000)
//   })
// }

let productos = []
const renderProductos = arr => {
  for (const el of arr) {
    let contendor = document.createElement("div");
    contendor.innerHTML = `
      <h3 class="titulo">ID: ${el.id}</h3>
      <p>Producto: ${el.nombre}</p>
      <b>$ ${el.precio}</b>
    `;
    document.body.append(contendor)
  }
}

// pedirProductos()
//   .then(data => {
//     productos = [...productos, ...data]
//     renderProductos(productos)
//   })
//   .catch( (error) => {
//     console.log(error)
//   })
const ul = document.querySelector('ul')
const renderPost = (el) => {
  const li = document.createElement('li')
  li.innerHTML = `
  <h4>${el.title}</h4>
  <p>${el.body}</p>
  `
  // console.log(data[0].title)
  // console.log(data[0].body)
  ul.appendChild(li)
}


fetch('https://jsonplaceholder.typicode.com/posts')
.then((resp)=> resp.json())
.then((data) => {
  // console.log(data)
  // for (let i = 0; i < 5; i++) {
  //   renderPost(data[i])
  // }
})
.catch( (error) => {
  console.log(error)
})

const title = document.querySelector('#title')
const body = document.querySelector('#body')
const postBtn = document.querySelector('#post-btn')



const publicar = () => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: title.value,
      body: body.value,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      renderPost(json)
      console.log(json)
    })
    .catch( (error) => {
      console.log(error)
    });
}

postBtn.addEventListener('click', publicar)


fetch('./data.json')
.then((response) => response.json())
.then((json) => {
  productos = [...productos, ...json]
  renderProductos(productos)
  console.log(json)
})
.catch( (error) => {
  console.log(error)
})


const pedirPost = async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await resp.json()
  for (let i = 0; i < 5; i++) {
    renderPost(data[i])
  }
  console.log(data)
}

