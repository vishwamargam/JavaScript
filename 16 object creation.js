//constructor function

function fun(a,b){
    this.a=a
    this.b=b
    return {'a':this.a,'b':this.b}
}
let obj = new fun(5,6)
console.log(obj)
let obj2 = new fun(9,3)
console.log(obj2);

//object class

let obj3 = new Object()
obj3.name="vi"
obj3.age="22"
obj3.phno="3743289"
console.log(obj3);

//Immediate Invoke Function

(function fun(x,y){
    console.log(x,y);
})(4,5)
