console.log("1 Boomarang")

let a = [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
for (let i = 0; i < a.length - 2; i++) {
    if (a[i] == a[i + 2]) {
        console.log(a.slice(i, i + 3))
    }
}

console.log("2 -ve No's")

a = [2, 3, 5, -5, -3, -2, 6, 9]
for (let i of a) {
    if (i < 0) {
        console.log(i)
    }
}

console.log("3 Unique No's")

a = [2, 3, 5, -5, -3, -2, 6, 9]
for (let i in a) {
    while (a.indexOf(a[i], i + 1) != -1) {
        a.splice(a.indexOf(a[i], i + 1), 1)
    }
}
console.log(a)

console.log("4 3rd prime of array")
a = [1, 2, 3, 4, 5, 67, 8, 9]
let b=[]
for (let i of a) {
    if (i != 1) {
        let f = true
        for (let j = 2; j < i; j++) {
            if (i % j == 0){
                f=false
                break
            }
        }
        if (f){
            b.push(i)
        }
    }
}
console.log(b)
if (b.length>=3){
    console.log(b[2])
}
else{
    console.log(-1)
}

console.log("5 div by 5 not by 3")
a=[5,10,15,25,30,35,40,3,5,56,6,3,4]
let c=0
for(let i of a){
    if( i<100 && i%5==0 && i%3!=0){
        c++
    }
}
console.log(c)

console.log("6 Switch")
a=15
b=20
c=0
let ch="*"
switch (ch){
    case "+":
        c=a+b
        break
    case "-":
        c=a-b
        break
    case "*":
        c=a*b
        break
    case "/":
        c=a/b
        break
    case "%":
        c=a%b
        break
    case "**":
        c=a**b
        break
    default:
        c="Invalid Operator"
}
console.log(c)
