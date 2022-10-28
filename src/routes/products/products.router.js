const express = require('express')
const {
  ProductNotFoundException,
  ProductEmptyEntity,
} = require('../../exceptions')
const ProductService = require('../../services/products/products.service')

const router = express.Router()
const productService = new ProductService()
router.use((req, res, next) => {
  req.service = productService
  next()
})

router.get('/', (req, res) => {
  const data = req.service.getAll()
  res.status(200).json({ data })
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const product = req.service.getById(id)
  res.status(200).json({ data: product })
})

router.post('/', (req, res) => {
  const product = req.body
  if (Object.entries(product).length === 0)
    throw new ProductEmptyEntity()

  const created = req.service.create(product)

  res.status(201).json(created)
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  const changes = req.body
  if (Object.entries(changes).length === 0)
    throw new ProductEmptyEntity()

  req.service.putById(id, changes)
  // Devolvemos la respuesta satisfactoria
  res.status(204).send()
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  req.service.deleteById(id)
  res.status(204).send()
})

module.exports = router