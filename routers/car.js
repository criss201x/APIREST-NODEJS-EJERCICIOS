const express = require('express')
//const app = express()
const router = express.Router()
const { check, validationResult } = require('express-validator');

var coches = [
    { id: 0, company: 'bmw', modelo: 'x3', year: '2020' },
    { id: 1, company: 'audi', modelo: 'x3', year: '2021' },
    { id: 2, company: 'mercedes', modelo: 'clase a', year: '2022' }
  
  ]
  

// metodo get con ruta especificam
router.get('/list', (req, res) => {
    res.send(['asdad', 'cvbcb', 'werw', 'dfgdggg'])
})

router.get('/id/:id', (req, res) => {
    res.send(req.params.id)
})

router.get('/:company/:model', (req, res) => {
    res.send(req.params.model)
})

router.get('/', (req, res) => {
    res.send(coches)
})

router.get('/:company', (req, res) => {
    const coche = coches.find(coche => coche.company === req.params.company)

    if (!coche) {
        res.status(404).send('no encontrado')
    } else {
        res.send(coche)
    }
})
router.post('/', (req, res) => {
    var carid = coches.length;
    var coche = {
        id: carid,
        company: req.body.company,
        model: req.body.model,
        year: req.body.year,
    }
    coches.push(coche)
    res.send(coche)
})

router.post('/3', [
    check('company').isLength({ min: 3 }),
    check('model').isLength({ min: 3 })
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    var carid = coches.length;
    var coche = {
        id: carid,
        company: req.body.company,
        model: req.body.model,
        year: req.body.year,
    }
    coches.push(coche)
    res.send(coche)
})

/*router.put('/api/cars/:id', [
  check('company').isLength({min: 3}),
  check('model').isLength({min: 3})  
],(req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const coche = coches.find(coche=> coche.id === parseInt(req.params.id))
  if(!coche){
    return res.status(404).send('no existe')
  }
*/

router.delete('/:id', (req, res) => {
    const coche = coches.find(coche => coche.id === parseInt(req.params.id))
    if (!coche) {
        return res.status(404).send('no existe')
    }

    const index = coches.indexOf(coche)
    coches.splice(index, 1)
    res.status(200).send('borrado...')
})


module.exports = router