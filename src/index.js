require('dotenv').config()
const app=require('./app')


app.listen(process.env.PORT,()=>{
    console.log(`Escuhando en el Puerto ${process.env.PORT}`);
})