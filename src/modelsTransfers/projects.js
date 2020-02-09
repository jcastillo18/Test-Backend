import mongoose from 'mongoose';
import database from '../db_connection';



const projects = new mongoose.Schema({
  

},{
    timestamps:true
})

export default{
    model:mongoose.model('projects',projects)
}