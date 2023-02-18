const express = require('express')
const router = express.Router()

//We will mainly be handling Adding new orders, getting orders and editing the status of an order 

//GET NEW ORDERS ONLY 
router.get('/NEW',(req,res)=>{
res.json({mssg: 'GET NEW ORDERS ONLY '})
})

// GET DONE ORDERS ONLY 
router.get('/DONE', (req, res) => {
    res.json({mssg: 'GET DONE ORDERS ONLY '})
  })

  // GET ALL ORDERS REGARDLESS OF STATUS 
router.get('/ALL', (req, res) => {
    res.json({mssg: 'GET ALL ORDERS REGARDLESS OF STATUS'})
  })

// Create a new order 
router.post('/', (req, res) => {
    res.json({mssg: 'Create a new order '})
  })


// UPDATE a Order (Update the order stauts from WIP to complete for exmaple)
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE order'})
  })

module.exports = router