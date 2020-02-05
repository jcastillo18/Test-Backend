import mongoose from 'mongoose';
import database from '../db_connection';

database

const cancellationKpi = new mongoose.Schema({
    departament_director:{
        type:String
    },
    account_manager:{
        type:String
    },
    fronter:{
        type:String
    },
    closer:{
        type:String
    },
    order_number:{
        type:String
    },
    bussiness_name:{
        type:String
    },
    client_name:{
        type:String
    },
    bussiness_website:{
        type:String
    },
    client_phone:{
        type:String
    },
    client_email:{
        type:String
    },
    type_of_service:{
        type:String
    },
    management_fee:{
        type:Number
    },
    sales_date:{
        type:Date
    },
    collection_date:{
        type:Date
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
    client_budget:{
        type:String
    },
    dayly_budget:{
        type:Number
    },
    monthly_budget:{
        type:number
    },
    cancellation_reason:{
        type:String
    },
    industry_type:{
        type:String
    },
    cancellation_comment:{
        type:String
    }

},{
    timestamps:true
})

export default{
    model:database.model('cancellationKpi',cancellationKpi)
}