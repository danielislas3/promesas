// resolver la promesa con el metodo then manejando el error

function prepararDesayuno() {

  console.log('Hacer desayuno');
  console.log('Preapara ingredientes');
  comprarJamon().then((response) => {
    console.log(response);

    console.log('Picamos el jamón');
    console.log('Calentamos sarten');
    console.log('freimos jamón');
    console.log('Revolvemos');
    console.log('Emplatamos');
  }).catch((err) => {
    console.log(err);
    console.log('**Seguir con el día**');
  })



}


// resolver la promesa con async/await manejando el error

// async function prepararDesayuno() {

//   console.log('Hacer desayuno');
//   console.log('Preapara ingredientes');
//   console.log('Ups, no hay jamón');

//   try {

//     const response = await comprarJamon()

//     console.log(response);
//     console.log('Picamos el jamón');
//     console.log('Calentamos la sarten');
//     console.log('freimos el jamón');
//     console.log('Revolvemos');
//     console.log('Emplatamos');
//   } catch (error) {
//     console.log(error);
//   }
//   console.log('**Seguir con el día***');


// }

// Funcion que regresa una promesa

// funcion que retorna una promesa
function comprarJamon() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      console.log('*Salimos a la tienda*');

      let tiendaAbierta = true
      if (tiendaAbierta) {

        let vencido = true
        // si el jamon SI esta vencido la promesa no se cumple
        if (vencido) {
          reject('Jamon caducado');
        }
        // si el jamon no esta vencido resolvemos correctamente la promesa
        resolve('Regresar a casa con el jamón :D');

      } else {
        // si la tienda esta cerrada rechazamos la promesa

        reject('Regresar a casa, tristes D:');
      }
    }, 3000)

  })
}

prepararDesayuno()
