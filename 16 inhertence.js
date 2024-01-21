class A{
    constructor(a,b){
        this.a=a
        this.b=b
    }
    disp(){
        console.log(this.a,this.b)
    }
}
let obj1= new A(2,3)
obj1.disp()

class B extends A{
    constructor(a,b,c,d){
        super(a,b)
        this.c=c
        this.d=d
    }
    disp(){
        super.disp()
        console.log(this.c,this.d)

    }
}
let obj2= new B(2,3,4,5)
obj2.disp()