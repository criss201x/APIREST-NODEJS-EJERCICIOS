const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve({ id: 1, model: 'nose', company: 'see' })
        reject(new Error('se ha producido un error al leer la bd'))
    }, 4000)
})

promesa
    .then(result => console.log(result))//obtiene el resultado si fue resuelta 
    .catch(err => console.log(err.message))//cach si fue rechazada