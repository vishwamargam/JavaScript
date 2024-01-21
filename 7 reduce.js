console.log("REDUCE")
let a=[2,3,4,5,6,7]
console.log(a.reduce((s,e)=>{
    console.log(s,e)
    return (s+e)
},10))

console.log("")

console.log("Every")
a=[2,3,4,5,6]
console.log(a.every((el)=>el>0)) //true
a=[2,3,-4,5,6,-5]
console.log(a.every((el)=> el>0)) //false

console.log("")

console.log("Some")
a=[2,3,4,-5,67,-7]
console.log(a.some((el)=>el>0)) //true
a=[-2,-3,-4,-5]
console.log(a.some((el)=>el>0)) //false

console.log('')

a=[2,3,4,5]
a.forEach((e)=>{console.log(e)})