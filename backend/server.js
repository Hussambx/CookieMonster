require('dotenv').config()
const express =require('express');
const cors = require('cors')
const app = express()
const Routes = require('./routes/routes')
const mongoose = require('mongoose')

//Just Middleware this is needed to prevent IP Conflict Issues 
app.use(express.json())
app.use(cors({}))
app.use((req,res,next)=>{
    console.log(req.path)
    next()
})

//Routes 
app.use('/',Routes);

//Listen for requests, First connects to Mongo DB, then starts listening on PORT

mongoose.connect(process.env.MONG_URL)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Im listening fam")
        })
})
.catch((error)=>{
    console.log(error)
})

