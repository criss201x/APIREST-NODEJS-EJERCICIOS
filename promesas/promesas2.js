const { get } = require("../routers/car")

function getcar(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('obtenido carro 23 ')
            resolve({ id: 23, model: 'x3', company: 'bmw' })
        }, 4000)//tiempo de consuomo de la promesa 
    })
}

function getCarFeatures(model){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('obtenido modelo')
            resolve({ speed: 53, seat: 5, size: '4*5' })
        }, 4000)//tiempo de consuomo de la promesa 
    })
}
/*
promesa = getcar(23)
    //promesa.then(result => console.log(coche))//obtiene el resultado si fue resuelta 
    promesa
        .then(coche => getCarFeatures(coche.model))
        .then(model => console.log(model))
        .catch(err => console.log(err.message))
*/

async function showModel(){
    try{
        const car = await getcar(23)
        const model = await getCarFeaturesCar(car.speed)
        console.log(model)
    }catch(err){
        console.log(err.message)
    }
    
}



showModel()