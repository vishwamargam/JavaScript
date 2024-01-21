/*......scope.....*/

let a=10
{
    let a=20
    console.log(a)
}
console.log(a)

/*......Hoisting.....*/

//var
console.log(b);
var b=20
console.log(b);

//let
//console.log(c)// error
let c=20
console.log(c);

//const
const d=[2,3,4]
d.push(10)
console.log(d); //[2,3,4,10]

const e=10
//e=50
//console.log(e) //error

/*........Closure...... */
function fun(){
    let a=20
    function nfun(){
        console.log(a)
    }
    nfun()
}
fun()

