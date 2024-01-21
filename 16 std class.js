class Std{
    constructor(name,age,dept,marks){
        this.name=name
        this.age=age
        this.dept=dept
        this.marks=marks
    }
    disp(){
        console.log(this.name,this.age,this.dept,this.marks);
        console.log("hello");
        console.log("React");
        console.log();
    }
}
let obj=new Std("vi",22,'cs',89)
obj.disp()