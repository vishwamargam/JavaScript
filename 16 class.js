class A {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    disp() {
        console.log(this.a, this.b)
    }
}
let obj1 = new A("hello", "world");
obj1.disp(); // hello world
let obj2 = new A(25, 30)
obj2.disp() // 25 30