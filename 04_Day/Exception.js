/*
    Syntax Exception
*/

// console.log("Hello Ahjs"



/*
    Run Time Exception
*/

// let x =5
// console.log(x.toUpperCase)


/*
    Logical Exception
*/

// let num =5
// for(i=-3;i<3;i++)
// {
//     console.log(num%i)
// }


/*
    Hamdle the Exception or Error
    try{
            // block of code which throw the error
    }
    catch(e)
    {
        // Block Of Code Handle the error
    }
    finally{
        // Execute in every case
    }
*/



try{  
    let obj = undefined  
    console.log(obj.name)
}
catch(e)
{
    console.log("Exception :",e)
}
finally{
    console.log("Code Executed")
}

