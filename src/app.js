const express=require('express')
const app=express()

//configurar server para que lea Json
app.use(express.json())

//Crear Rutas
//[GET] http://localhost:7000/
app.use('/',require('./routes/userRoutes'))

module.exports=app


