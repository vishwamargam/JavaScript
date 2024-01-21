let i=1
while(i<=10){
    console.log(i)
    i++
}
console.log()

console.log("GCD")
let a=25, b=20,r
while(b!=0){
    r=a%b
    a=b
    b=r
}
console.log(a)
console.log()

console.log("Do while")
let l=[1,2,-2,-4,-3,4]
let pc=0,nc=0
i=0
do{
    if (l[i]>0){
        pc++
    }
    else if(l[i]<0){
        nc++
    }
    i++
}while(i<l.length)
console.log(nc,pc)
console.log()

console.log("for in")
a=[2,3,4,5,6]
for(let i in a){
    console.log(i,a[i])
}

a={name:'vi',age:22,id:'t2'}
for(let i in a){
    console.log(i,a[i])
}
console.log()

console.log("for of")
a=[1,2,3,4,4,5,]
for(let i of a){
    console.log(i)
}
