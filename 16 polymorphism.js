//method overloeading

class A{
    disp(a,b=0,c=0,d=0){
        console.log(a+b+c+d);
    }
}
let obj=new A()
obj.disp(4)
obj.disp(4,8)
obj.disp(4,8,12)
obj.disp(4,8,12,16)