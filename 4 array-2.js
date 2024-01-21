let a=[1,2,3,4,2,1,3,4,2,4,2,4,3]
console.log("Searching an element")
console.log(a.indexOf(4))
console.log(a.indexOf(4,4))
console.log(a.indexOf(4,8))

console.log("Sorting array")
a=[14,13,5,2,34,54]
a.sort()
console.log(a)
a.sort((a,b)=>a-b)
console.log(a)
a.sort((a,b)=>b-a)
console.log(a)

console.log("Updation")
a=[1,2,3,4,5]
a[3]=24
console.log(a)

console.log("Slicing")
console.log(a.slice(2))
console.log(a.slice(1,3))

console.log("Reversing array")
a.reverse()
console.log(a)

console.log("Displaying duplicate elements")
a=[2,3,5,6,7,3,2,2,4,5]
i=0
while(i<a.length){
    if(a.indexOf(a[i],i+1)==-1){
        a.splice(i,1)
    }
    else{
        while(a.indexOf(a[i],i+1)!=-1){
            a.splice(a.indexOf(a[i],i+1),1)
        }
        i++
    }
}
console.log(a)

console.log("Concatinating arrays")
a=[1,2,3,4,5]
b=[6,7,8,9]
let x=[...a,0,...b]
console.log(x)

console.log("Aliasing")
a=[1,2,3,4,5]
b=a
a[3]=8
console.log(a)
console.log(b)

console.log("Cloning")
a=[1,2,3,4,5]
b=[...a]
a[3]=8
console.log(a)
console.log(b)

let d=new Array(...a)
a[0]=9
console.log(a)
console.log(d)

console.log()

console.log("Nested Array")
a=[[1,2,3],[4,5,6],[7,8,9]]
console.log(a)
for(let i in a){
    for(let j in a[i]){
        console.log(a[i][j])
    }
}

console.log()

console.log("flat")
a=[[1,[2,[2.1,2.2]],3],[4,5,6],[7,8,9]]
console.log(a.flat())
console.log(a.flat(2))
console.log(a.flat(3))

console.log()

console.log("Min Max")
a=[1,2,3,4,5]
console.log(Math.min(...a))
console.log(Math.max(...a))


