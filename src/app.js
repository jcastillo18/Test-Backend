import express from 'express';


const app = express();

// Importando rutas
import cancellationKpi from './router/cancellationKpi';

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api', cancellationKpi);

app.use('/',(req, res)=>{
    res.status(200).json({message:'Bienvenido Radixhaven'})
})



module.exports=app