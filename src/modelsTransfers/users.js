import mongoose from 'mongoose';
import database from '../db_connection';

database

const Users = new mongoose.Schema({
   firstName:{
       type:String
   },
   lastName:{
       type:String
   },
   email:{
       type:String
   },
   password:{
       type:String
   }
},{
    timestamps:true
})

export default{
    model:mongoose.model('Users',Users)
}