console.log("If statement")
let a=15
let b=10
if(a>b){
    console.log(a)
}
console.log()

console.log("if-else")
if(a>b){
    console.log(a)
}
else{
    console.log(b)
}
console.log()

console.log("else if ladder")
let c=20
if(a>b && a>c){
    console.log(a)
}
else if(b>c){
    console.log(b)
}
else{
    console.log(c)
}
console.log()

console.log("Nested If Else")
if(a>b && a>c){
    if(b>c){
        console.log(c,b,a)
    }
    else{
        console.log(b,c,a)
    }
}
else if(b>c){
    if(a>c){
        console.log(c,a,b)
    }
    else{
        console.log(a,c,b)
    }
}
else{
    if(a>b){
        console.log(b,a,c)
    }
    else{
        console.log(a,b,c)
    }
}
console.log()

console.log("Switch")
a=10
b=5
c=0
let ch="+"
switch (ch){
    case "+":
        c=a+b
        break
    case "-":
        c=a-b
        break
    case "/":
        c=a/b
        break
    case "%":
        c=a%b
        break
    case "*":
        c=a*b
        break
    case "**":
        c=a**b
        break
    default:
        c="Invalid Operator"
}
console.log(c)