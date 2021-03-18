//creación de promesas
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Primer promesa resuelta');
    resolve(10);
  }, 1000);

});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Segunda promesa NO resuelta');
    reject(20);
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Tercer promesa resuelta');
    resolve(30);
  }, 3000);
});

//Resolviendo varias promesas encadenadas con then

// p1.then(res1 => {

//   p2.then((res2) => {

//     p3.then(res3 => {

//       console.log(`Total: ${res1 + res2 + res3}`);

//     })

//   })

// })


// Resolviendo varias promesas con Promise.all

// Promise.all([p1, p2, p3])
//   .then(results => {
//     const total = results.reduce((p, c) => p + c);
//     console.log(`Resultados: ${results}`);
//     console.log(`Total: ${total}`);

//   })
//   .catch(console.log);
// ;

// Resolviendo varias promesas con async/await

// async function resolverPromesas() {
//   const res1= await p1
//   const res2= await p2
//   const res3 = await p3
//   console.log('res1: ', res1);
//   console.log('res2: ', res2);
//   console.log('res3: ', res3);

// }

// resolverPromesas()
