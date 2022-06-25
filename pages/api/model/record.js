import mongoose from "mongoose";
const Schema = mongoose.Schema;

const RecordsSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    point:{
        type:Number,
        required:true
    }
},{timestamps:true})


module.exports = mongoose.models.record || mongoose.model('record', RecordsSchema)