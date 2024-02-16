const ashish = new Promise((resolve,reject)=>{
    let parentDecision = false;
    if(parentDecision)
    {
        resolve("Yayay ,ab Shadi ki Tyaru karo")
    }
    else
    {
        reject("Papa Nhi MAn Rhe Hai")
    }
});

ashish.then((msg)=>{
    console.log("Ashish Message",msg)
    console.log("Let's Book the weding venue")
}).catch((msg)=>{
    console.log("Ashish Message",msg)
    console.log("Tinder Kaha Ho Yaar")
})