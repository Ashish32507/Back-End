// under the pass another function as argument called higher order function

// function operation(operatorFn,a,b){
//     return operatorFn(a,b)
// }

// function operatorFn(a,b){
//     return a+b
// }

// console.log(operation(operatorFn,10,20))


function great(){
    return function(){
        console.log("Hello")
    }
}
var hello =great()
console.log(hello())