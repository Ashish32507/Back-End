// forEach Method

player=["Sachin","Virat","Rohit","Rinku"]

// player.forEach((element) => {
//     console.log(element)
// });


// Map Method - > Creation of new transformed array


// arr=[2,3,4,5,6,7,8]

// arr2 = arr.map((element)=>{
//     return element**3
// })

// console.log(arr2)



// Filter -> filter method is use to filter out the element


let arr=[2,3,4,5,6,7,8]

// let even = arr.filter((num)=>{
//     if(num%2==0)
//     {
//         return num
//     }
// })

// console.log(even)

let sum = arr.reduce((current,next)=>{
    return current+next
})

console.log(sum)
