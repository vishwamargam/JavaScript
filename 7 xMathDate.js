console.log("Math Functions")
console.log(Math.abs(-3))  //3
console.log(Math.floor(3.4)) //3
console.log(Math.ceil(3.4))  //4

console.log(Math.round(3.56)) // 4
console.log(Math.round(3.43)) //3

console.log(Math.sqrt(2)) //1.414

console.log(Math.random())  //0.23343757
console.log(Math.round(Math.random()*100000))  //2345 or 24253 etc
console.log(Math.round(Math.random()*9999+10000)) //34634 etc

console.log("")

console.log("Date Objects")

console.log(Date.now()) //1700760391931

let d= new Date()

console.log(d)          //Thu Nov 23 2023 22:59:14 GMT+0530 (India Standard Time)
console.log(d.getDate()) //23
console.log(d.getDay())  //4
console.log(d.getMonth()) //11
console.log(d.getFullYear()) //2023

console.log(d.getHours())     //22
console.log(d.getMinutes())   //59
console.log(d.getSeconds())   //14
console.log(d.getMilliseconds())  //974
console.log(d.toLocaleDateString())  //23/11/2023
console.log(d.toLocaleTimeString())  //11:01:27 pm

let d1=new Date('2020/12/12')  
let d2=new Date('2021/12/12')

console.log(d1)  //Sat Dec 12 2020 00:00:00 GMT+0530 (India Standard Time)
console.log(d1<d2) //true


