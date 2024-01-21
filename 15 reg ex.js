let s='hello to all'
let reg=/all/
console.log(reg.test(s))
console.log(reg.exec(s))
console.log(s.match(reg))
let x=/ll/
console.log(s.match(x))
console.log(s.search(x))
x=/ll/g
console.log(s.match(x))
console.log(s.search(x))

console.log("Extract all the vowels from a given string")

s='hello to all'
reg=/[aeiou]/g
console.log(s.match(reg))

console.log("3 length sub strings starts with a")

s='abaabsbdjsjnababaosabab'
reg=/a\w{2}/g
console.log(s.match(reg))

console.log("Extract numerical data from given string")

s='ajsdt78f8asyfhui4hw8fhesuifh'
reg=/\d/g
console.log(s.match(reg))

reg=/\d{1,}/g
console.log(s.match(reg))

console.log('the given string starts with lowercase alphabet or not')

s='2eiwlfsjnfli'
reg=/^[a-z]/
console.log(reg.test(s))

s='aj34hif'
console.log(reg.test(s))

console.log('check the sting contains only alphabets or not')
s='sehf4H'
reg=/^[a-z]*$/
console.log(reg.test(s))

s='seteH'
console.log(reg.test(s))

s='sjdxsfn'
console.log(reg.test(s))

reg=/^[a-z]*$/i
s='sfJLIjldj'
console.log(reg.test(s))

reg=/[a-z]*/i
s='35u83wujfHs^&%j'
console.log(reg.test(s))

s='367&&*'
console.log(reg.test(s))

console.log("Given string contain atleast 1 alphabet and 1 digit or not")

s="6543%h^$s"

reg=/([a-z]+\w*\W*[0-9]+|[0-9]+\w*\W*[a-z]+)/
console.log(reg.test(s))

x=/[a-z]+/i
let y=/[0-9]+/
console.log(x.test(s)&&y.test(s))

console.log("the given string contain only alphabets or not, min length 5")

s="sjiJHjs"
reg=/^[a-z]{5,}$/i
console.log(reg.test(s))

s='sjdf'
console.log(reg.test(s))

s='sjndfi3j'
console.log(reg.test(s))

s='nds%fshd'
console.log(reg.test(s))



