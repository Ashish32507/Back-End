
// async function getMessage(){
//     return "Hello Student"
// }

// // console.log(getMessage())

// getMessage().then(result=>console.log(result))



async function printHellworld(){
    console.log("First Line")
    let data = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello Ashish")
        },3000)
    })
    let result = await data
    console.log(result)
    console.log("Last Line")
}

printHellworld()