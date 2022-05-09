const express = require('express')
const router = express.Router()
const daoProductos = require('../daos/index').daoProductos

router.get('/productos', async (req, res) => {
  try {
    let resultado = await daoProductos.findAll()
    return res.json(resultado)
  } catch (error) {
    return res.status(500).send({ error: error.message })
  }
})

router.get('/productos/:id', async (req, res) => {
  try {
    let resultado = await daoProductos.findById(req.params.id)
    return res.json(resultado)
  } catch (error) {
    return res.status(500).send({ error: error.message })
  }
})

router.post('/productos', async (req, res) => {
  try {
    let resultado = await daoProductos.create(req.body)
    return res.json(resultado)
  } catch (error) {
    return res.status(500).send({ error: error.message })
  }
})

router.put('/productos/:id', async (req, res) => {
  try {
    let resultado = await daoProductos.update(req.params.id, req.body)
    return res.json(resultado)
  } catch (error) {
    return res.status(500).send({ error: error.message })
  }
})

router.delete('/productos/:id', async (req, res) => {
  try {
    let result = await daoProductos.delete(req.params.id)
    return res.json(result)
  } catch (error) {
    return res.status(500).send({ error: error.message })
  }
})

module.exports = router
