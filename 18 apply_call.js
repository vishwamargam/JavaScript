let person={
    "fname":"ramu",
    "lname":"z",
    "fullname":function(){
        return this.fname+" "+this.lname
    }
}
console.log(person.fullname());
let p1={
    "fullname":function(){
        return this.fname+" "+this.lname
    }
}

let perdet1={"fname":"abcd","lname":"XY"}
let perdet2={"fname":"efg", "lname":"ZX"}
console.log(p1.fullname.apply(perdet1));
console.log(p1.fullname.apply(perdet2));
console.log(p1.fullname.call(perdet1));
let p2={
    "fullname":function(addr,pincode){
        return this.fname +" "+this.lname+" "+addr+" "+pincode
    }
}
console.log(p2.fullname.apply(perdet1,["hyd",500016]));
console.log(p2.fullname.call(perdet2,"hyd",500027));
console.log(Math.min.apply("",[2,3,4,52,4]))