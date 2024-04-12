/**
 * 
 * 
 * Define schema of student collection
 * to be store in database
 */


const mongoose = require("mongoose")

// schema

const StudentSchema = new mongoose.Schema({
    name:String,
    age:Number
})


// Go Ahead and creating corresponding collection in db

module.exports = mongoose.model("demoDb",StudentSchema)

