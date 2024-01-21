console.log("Map function")
let a=[2,3,4,5]
let r=a.map((item)=>item+5)
console.log(a)

console.log("even index pos value need to *2")
a=[2,3,4,5]
r=a.map((item,index)=>{
    if (index%2==0){
        return item*2
    }
    else{
        return item
    }
})
console.log(r)

console.log("Factorial")
a=[2,3,4,5]
let fact = (n) => {
    let f=1
    for(let i=n; i>=1; i--){
        f=f*i
    }
    return f
}
r=a.map(fact)
console.log(r)