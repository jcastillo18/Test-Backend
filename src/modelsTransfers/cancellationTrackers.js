import mongoose from 'mongoose';
import database from '../db_connection';



const cancellationtrackers = new mongoose.Schema({
    _id:{
        type:mongoose.Schema.Types.ObjectId
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId
    },
    departmentDirector:{
        type:String
    },
    accountManager:{
        type:String
    },
    fronter:{
        type:String
    },
    closer:{
        type:String
    },
    orderNumber:{
        type:String
    },
    bussinessName:{
        type:String
    },
    typeOfIndustry:{
        type:String
    },
    bussinessWebsite:{
        type:String
    },
    customerName:{
        type:String
    },
    clientEmail:{
        type:String
    },
    clientPhone:{
        type:String
    },
    typeOfService:{
        type:String
    },
    managementFee:{
        type:Number
    },
    clientBudget:{
        type:String
    },
    country:{
        type:String
    },
    state:{
        type:String
    },
    city:{
        type:String
    },
    
    daylyBudget:{
        type:Number
    },
    monthlyBudget:{
        type:Number
    },
    cancellationReason:{
        type:String
    },
    cancellationComment:{
        type:String
    }

},{
    timestamps:true
})

export default{
    model:mongoose.model('cancellationtrackers',cancellationtrackers)
}