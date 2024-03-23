const mongoose = require('mongoose')
// const dataModel = require('./Models/Student.model')
const dataModel = require('./Models/student.model1');

// Write the code to connect connect mongodb

console.log("Hello ")
mongoose.connect('mongodb://127.0.0.1/newdb')

const db = mongoose.connection;

db.on("error",()=>{
    console.log("Error While Connecting DataBase")
})

db.once("open",()=>{
    console.log("Connected To MongoDB")
    

    // insert data 
    // init()


    // viewData
    dbquries()
})



// async function init(){
//     // Logic to Insert Data
//     const student = {
//         name:"Ashish Kumar",
//         age:20
//     } 
//    const std_obj = await dataModel.create(student)

//    console.log(std_obj)
// }




// async function init(){
//     const student = {
//         name:"Ashish Kumar",
//         age:20,
//         email:"ashishkumaryadavcse507@gmail.com",
//         subject:["Math","English"]
//     }

//      const std_obj = await dataModel.create(student)
//     console.log(std_obj)
// }





// Runing The Queries 

async function dbquries(){
    try{
        // const student = await dataModel.findById("65d4efc217774c4dcd79b0e6")

        const student = await dataModel.findOne({name:"Ashish"});
        console.log(student)
    }
    catch(e)
    {
        console.log("Error Occur")
    }
}


// console.log("Hello ")

// console.log(dataModel)