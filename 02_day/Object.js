// Object

const obj1 = {
    name :"ashish",
    title:"Kumar",
    func:function(){
        console.log(this.name,this.title)
    }
}

// obj1.gender = "Male"
// obj1["country"]= "India"
// console.log(obj1)

// console.log(obj1.name)
// console.log(obj1.title)

// console.log(obj1.func())

// delete obj1["gender"]

// console.log(obj1)


// for(let key in obj1)
// {
//     console.log(key)
// }

// for(let key in obj1)
// {
//     console.log(key,"=>",obj1[key])
// }



// console.log(Object.entries(obj1))

// Cloning The Object

// const newObj2 = Object.assign({},obj1)

// console.log(newObj2)

// Destructuring 


const {name,title} = obj1;

console.log(name)
console.log(title)



