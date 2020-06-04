const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({
    })
    res.json(products)
  } catch (err) {
    next(err)
  }
})

router.get('/blends/:id', async (req, res, next) => {
  try {
    const product = await Product.findAll({
      where: { id: req.params.id }
    })
    res.json(product)
  } catch (err) {
    next(err)
  }
})

router.get('/teas/:id', async (req, res, next) => {
  try {
    const product = await Product.findAll({
      where: { id: req.params.id }
    })
    res.json(product)
  } catch (err) {
    next(err)
  }
})


router.get('/blends', async (req, res, next) => {
  try {
    const blends = await Product.findAll({
      where: { category: 'blends' }
    })
    res.json(blends)
  } catch (err) {
    next(err)
  }
})

router.get('/teas', async (req, res, next) => {
  try {
    const teas = await Product.findAll({
      where: { category: 'teas' }
    })
    res.json(teas)
  } catch (err) {
    next(err)
  }
})

