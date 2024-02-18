// Read From External file

const fs = require('fs')

// console.log(typeof fs)



// Async awit read  way

// console.log("read Before")

// const content = fs.readFileSync("input.txt")
// console.log(content.toString())


// Reading Async way

// fs.readFile("input.txt",(err,content)=>{
//     if(err)
//     {
//         return console.log(err)
//     }
//     console.log(content.toString())
// })

// console.log('After Reading')



// Writing File System

console.log("Before")
// fs.writeFileSync("output.txt","Hello Ashish")

fs.writeFile("output.txt","Hello Ashish How Are You",err=>{
    if(err){
        return console.log(err)
    }
    console.log("Write Successfully")
})
console.log("After")