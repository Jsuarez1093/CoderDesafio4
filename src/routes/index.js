const express = require('express')
const router = express.Router()

const productsRouter = require('./products/products.router')

router.use('/products', productsRouter)

router.get('/health', (_req, res) => {
  res.status(200).json({
    success: true,
    status: 'up',
    environment: process.env.ENVIRONMENT || 'development',
  })
})

module.exports = router