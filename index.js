const express = require('express')
const app = express()
const port = process.env.PORT || 3000

var coches = [
  {id: 0, company: 'bmw', modelo: 'x3', year: '2020' },
  {id: 1, company: 'audi', modelo: 'x3', year: '2021' },
  {id: 2, company: 'mercedes', modelo: 'clase a', year: '2022' }

]

 
//metodo get 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
// metodo get con ruta especificam
app.get('/api/cars/list', (req, res)=> {
    res.send(['asdad','cvbcb','werw','dfgdggg'])
})

app.get('/api/cars/id/:id', (req, res)=> {
    res.send(req.params.id)
})

app.get('/api/cars/:company/:model', (req, res)=> {
  res.send(req.params.model)
})

app.get('/api/cars/', (req, res)=> {
  res.send(coches)
})

app.get('/api/cars/:company', (req, res)=> {
  const coche = coches.find(coche => coche.company === req.params.company)  

  if(!coche){
    res.status(404).send('no encontrado')
  }else{
    res.send(coche)
  }



})


app.listen(port, ()=>{console.log('servidor funcionando en el puerto: ' + port)})

