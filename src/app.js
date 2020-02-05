import express from 'express';


const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.use('/',(req, res)=>{
    res.status(200).json({message:'Bienvenido Radixhaven'})
})



module.exports=app