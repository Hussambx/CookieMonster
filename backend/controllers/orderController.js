const Order = require('../models/Orderformat')
const mongoose= require('mongoose')
//get new orders only 
const getNew =async(req,res)=>{
    const orders = await Order.find({status:false}).sort({Createdat:-1});
    res.status(200).json(orders);
}


//get done orders only
const getDone=async(req,res)=>{
    const orders = await Order.find({status:true}).sort({Createdat:-1});
    res.status(200).json(orders);
}

//get all orders 
const getAll = async(req,res)=>{
    const orders = await Order.find({}).sort({Createdat:-1});
    res.status(200).json(orders);
}


//create a new order
const createOrder=async(req,res)=>{
    const{order,status,ordernum} = req.body;

    try{
    const neworder = await Order.create({order,status,ordernum})
    res.status(200).json(neworder)
    }catch (error){
        res.status(400).json({error:error.message})
    }

}



//update an existing order 
const updateOrder = async(req,res)=>{
    const{id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such order'})
    }

    const order = await Order.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!order){
        return res.status(404).json({error: 'No such contact'})
    }

    res.status(200).json(order)
}



module.exports={
    createOrder,
    getNew,
    getDone,
    getAll,
    updateOrder

}