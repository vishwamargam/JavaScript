try{
    console.log(a);
}
catch(err){
    console.log("a is not defined");
    console.log(err);
}
finally{
    console.log("finally block");
}
try{
    throw "userdefined error"
}
catch(err){
    console.log(err);
}
try{
    throw {"mag":"userdefined error"}
}
catch(err){
    console.log(err);
}