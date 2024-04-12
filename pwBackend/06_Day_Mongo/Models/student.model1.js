const mongoose = require('mongoose')

const studentModel1 = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        min:19
    },
    email:{
        type:String,
        required:true,
        lowecase:true,
        minlength:15
    }, 
    subject:[String],
    // createAt:{
    //     type:Date,
    //     immutable:true,
    //     default:()=>{
    //         return Date.now()
    //     }
    // }
},{timestamp:true})

module.exports = mongoose.model("demodb",studentModel1);