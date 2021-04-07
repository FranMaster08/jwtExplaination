const express=require('express')
const route=express.Router()
const jwt=require('jsonwebtoken')

route.get('/',(req,res)=>{
    res.status(200).json({
        mensaje:'ok'
    })
})

route.get('/out',(req,res)=>{
   const token= jwt.sign(req.body,process.env.SECRETKEY)
    res.status(200).json({
        mensaje:'ok',
        token:token
    })
})

route.get('/privado',(req,res)=>{
    res.status(200).json({
        mensaje:'informacion de nuestra escapadas en vacaciones',
        files:1000
    })
})

route.post('/',(req,res)=>{
    res.status(200).json({
        mensaje:'ok soy un Post'
    })
})


module.exports=route