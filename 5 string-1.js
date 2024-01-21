let s='hello'
console.log(s)
console.log(s[1])
console.log(s.charAt(1))
console.log(s.charCodeAt(1))
console.log(s.length)

console.log("Palindrome or not")
s="madam"
f=true
for(let i=0,j=s.length-1; i<j; i++,j--){
    if(s[i]!=s[j]){
        f=false
        console.log("Not a palindrome")
        break
    }
}
if (f){
    console.log("Palindrome")
}

console.log("")

console.log("Split string")
s="hello to all "
console.log(s.split(""))
console.log(s.split(" "))

console.log("Join string")
x=s.split(" ")
console.log(x.join("-"))

console.log("searching a substring")
console.log(s.indexOf("ll"))
console.log(s.indexOf("ll",5))

console.log("Replace")
console.log(s.replace("ll","abc"))
console.log(s.replaceAll("ll","abc"))

console.log("Repeat string")
console.log(s.repeat(3))

console.log("")

console.log("Slice a string")
console.log(s.slice(3,7))
console.log(s.substring(3,7))
console.log(s.substr(3,5))

console.log("")

console.log("Trim")
s="   hello to all  "
console.log(s.trim())

console.log("")

console.log("Uppercase , Lowercase")
s="hello To all"
console.log(s.toLowerCase())
console.log(s.toUpperCase())

console.log("Convert objects to string")
s=[1,2,3,4]
console.log(s)
console.log(s.toString())