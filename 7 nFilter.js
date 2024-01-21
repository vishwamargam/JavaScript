console.log("Filter even no.s")
let a=[2,3,4,5]
let r=a.filter((n) => n%2==0)
console.log(r)

console.log("Filter n%5 but not n%3 and <100")
let fun = (n) =>{
    if (n%5==0 && n%3!=0 && n<100){
        return true
    }
}
a=[5,10,15,120,35,45]
r=a.filter(fun)
console.log(r)