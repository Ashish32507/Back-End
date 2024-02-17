// function hello(){
//     let name = "Ashish"
//     console.log(name)

// }

// hello()

// console.log(name)



// function outerFn()
// {
//     let outer = "I Am from Outer Fn"
//     function innerFn()
//     {
//         console.log(outer)
//     }

//     return innerFn;
// }

// let inn = outerFn()
// console.log(inn())


function customerCounter()
{
    let cont =0;
    return function()
    {
        cont++
        console.log(cont)
    }
}

let counter = customerCounter()
counter()
counter()
counter()
counter()
