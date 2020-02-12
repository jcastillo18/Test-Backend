import mongoose from 'mongoose';
import database from '../db_connection';

database

const cancellationtrackers = new mongoose.Schema({
   
    // owner:{
    //     type:mongoose.Schema.Types.ObjectId
    // },
    // departmentDirector:{
    //     type:String
    // },
    // accountManager:{
    //     type:String
    // },
    // fronter:{
    //     type:String
    // },
    // closer:{
    //     type:String
    // },
    // orderNumber:{
    //     type:String
    // },
    // bussinessName:{
    //     type:String
    // },
    // clientName:{
    //     type:String
    // },
    // bussinessWebsite:{
    //     type:String
    // },
    // clientPhone:{
    //     type:String
    // },
    // clientEmail:{
    //     type:String
    // },
    // typeOfService:{
    //     type:String
    // },
    // managementFee:{
    //     type:Number
    // },
    // clientBudget:{
    //     type:String
    // },
    // country:{
    //     type:String
    // },
    // state:{
    //     type:String
    // },
    // city:{
    //     type:String
    // },
    
    // daylyBudget:{
    //     type:Number
    // },
    // monthlyBudget:{
    //     type:Number
    // },
    // cancellationReason:{
    //     type:String
    // },
    // cancellationComment:{
    //     type:String
    // }

},{
    timestamps:true
})

export default{
    model:database.model('cancellationtrackers',cancellationtrackers)
}