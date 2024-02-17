// const ashish = new Promise((resolve,reject)=>{
//     let parentDecision = false;
//     if(parentDecision)
//     {
//         resolve("Yayay ,ab Shadi ki Tyaru karo")
//     }
//     else
//     {
//         reject("Papa Nhi MAn Rhe Hai")
//     }
// });

// ashish.then((msg)=>{
//     console.log("Ashish Message",msg)
//     console.log("Let's Book the weding venue")
// }).catch((msg)=>{
//     console.log("Ashish Message",msg)
//     console.log("Tinder Kaha Ho Yaar")
// })



// const fr1Promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(Math.random()>0.5)
//         {
//             resolve("Friend 1: Hey I Am in for Goa")
//         }
//         else {
//             reject("Sorry mere pet mei dard ho rha hai")
//         }
//     },3000)
// })


// const fr2Promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(Math.random()>0.5)
//         {
//             resolve("Freind 2: Hey I Am in for Goa")
//         }
//         else {
//             reject("Sorry mai kahi ja rha hu")
//         }
//     },2000)
// })



// const fr3Promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(Math.random()>0.5)
//         {
//             resolve("Friend 3: Hey I Am in for Goa")
//         }
//         else {
//             reject("Sorry mujhe padhna hai ")
//         }
//     },4000)
// })




// Promise.all([fr1Promise,fr2Promise,fr3Promise]).then((msg)=>{
//     console.log(msg)
//     console.log("Yayy We Are Goining To Goa")
// }).catch((msg)=>{
//     console.log(msg)
//     console.log("Yarr band karo goa ka plan ")
// })




const gf1Promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5)
        {
            resolve("GF 1: Hey I Am Come For Dinner")
        }
        else {
            reject("Sorry mai nhi aa skti hu")
        }
    },3000)
})


const gf2Promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5)
        {
            resolve("GF 2: Hey I Am Come For Dinner")
        }
        else {
            reject("Sorry mai nhi aa skti hu")
        }
    },2000)
})



const gf3Promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5)
        {
            resolve("GF 3: Hey I Am Come For Dinner")
        }
        else {
            reject("Sorry Mai nhi aa skti hu ")
        }
    },4000)
})




Promise.any([gf1Promise,gf2Promise,gf3Promise]).then((msg)=>{
    console.log(msg)
    console.log("My Valentine is sucess")
}).catch((msg)=>{
    console.log(msg)
    console.log("I Join Bajrang dal")
})