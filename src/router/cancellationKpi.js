import cancellationtrackers from '../models/cancellationKpi';
import Users from '../modelsTransfers/users';
import express from 'express';
import mongoose from 'mongoose';
import cancellationKpi from '../models/cancellationKpi';
import projects from '../modelsTransfers/projects';
import cancellationTrackers from '../modelsTransfers/cancellationTrackers';


const api = express.Router();

export default api.post('/getdata', async(req, res)=>{
    try {
        await mongoose.connect(req.body.connectionString,{
        
        reconnectTries: 100,
        reconnectInterval: 500,
        autoReconnect: true,
        useNewUrlParser: true,
        // dbName: 'Casa-pellas-Dev',
        dbName:'TestCasaPellas',
        useUnifiedTopology: true,
        useFindAndModify: false
       });
       let data2 = await cancellationTrackers.model.find().exec();
       
       data2.forEach(element => {
        let ct = new cancellationKpi.model();
        // ct._id=element._id;
        // ct.owner=element.owner;
        // ct.departmentDirector=element.departmentDirector;
        // ct.accountManager=element.accountManager;
        // ct.fronter=element.fronter;
        // ct.closer=element.closer;
        // ct.orderNumber=element.orderNumber;
        // ct.businessName=element.businessName;
        // ct.typeOfIndustry=element.typeOfIndustry;
        // ct.businessWebsite=element.businessWebsite;
        // ct.customerName=element.customerName;
        // ct.clientEmail=element.clientEmail;
        // ct.clientPhone=element.clientPhone;
        // ct.typeOfService=element.typeOfService;
        // ct.managementFee=element.managementFee;
        // ct.clientBudget=element.clientBudget;
        // ct.country=element.country;
        // ct.state=element.state;
        // ct.city=element.city;
        // ct.dailyBudget=element.dailyBudget;
        // ct.monthlyBudget=element.monthlyBudget;
        // ct.cancellationReason=element.cancellationReason;
        // ct.cancelationComment=element.cancelationComment;
        const saveData = cancellationKpi.model.create(ct);
        console.log('Insertando Datos');
       });   
      
    } catch (error) {
        console.log(error);
    }
})
