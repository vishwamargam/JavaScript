console.log("Anonymous functions")
let fun = function(a,b){
    console.log(a+b)
}
fun(3,4)

console.log("Area of  circle")
fun=(a,b)=>a+b
let area = (a,b) => a*b*0.5
console.log(fun(3,4))
console.log(area(3,4))

console.log("perfect squares in an array")
let sqrt = (n) => parseInt(n**0.5)
fun = (a) => {
    let c=0
    for(let e of a){
        if (sqrt(e)*sqrt(e)==e)
        {
            c++
        }
    }
    return c
}
let a=[2,3,4,5,6,7,8,9]
console.log(fun(a))

console.log("user defined Higher order function")
//Area of Circle
let aoc = (r) => 3.14*r*r
//Area of Square
let aos = (s) => s*s
//Volume of cube
let voc = (s) => s**3
//Square root
sqrt = (n) => n**0.5

let hof=(a,fun) =>{
    r=[]
    for(let i=0; i<a.length; i++){
        r.push(fun(a[i]))
    }
    return r
}

a=[1,2,3,4,5]
console.log("Area of circle: ",hof(a,aoc))
console.log("Area of Square: ",hof(a,aos))
console.log("Volume of cube: ",hof(a,voc))
console.log("Square root: ",hof(a,sqrt))
console.log("")

console.log("writing the same code  individually of circle")
//circle
a=[1,2,3,4,5]
r=[]
for(let i=0; i<a.length; i++){
    r.push(3.14*a[i]*a[i])
}
console.log(r)