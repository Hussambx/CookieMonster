const express = require('express')
const router = express.Router()
const Order = require('../models/Orderformat')

const {
  createOrder,
  getNew,
  getDone,
  getAll,
  updateOrder

}=require('../controllers/orderController')


//We will mainly be handling Adding new orders, getting orders and editing the status of an order 

//GET NEW ORDERS ONLY 
router.get('/NEW',getNew)

// GET DONE ORDERS ONLY 
router.get('/DONE',getDone)

  // GET ALL ORDERS REGARDLESS OF STATUS 
router.get('/ALL', getAll)

// Create a new order 
router.post('/', createOrder)


// UPDATE a Order (Update the order stauts from WIP to complete for exmaple)
router.patch('/:id', updateOrder)

module.exports = router