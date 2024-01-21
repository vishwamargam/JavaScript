console.log("1-n numbers")
let n = 10
for (let i = 1; i <= n; i++) {
    console.log(i)
}
console.log()

console.log("more than one intialization")
for (let i = 1, j = n; i < j; i++, j--) {
    console.log(i, j)
}
console.log()

console.log("Factorial")
n = 5
let f = 1
for (let i = n; i > 0; i--) {
    f = f * i
}
console.log(f)
console.log()

console.log("Fibonacii")
n = 10
let a = -1
let b = 1
let c
for (let i = 0; i < n; i++) {
    c = a + b
    console.log(c)
    a = b
    b = c
}
console.log()

console.log("Prime Or Not")
n = 101
f = true
for (let i = 2; i < n; i++) {
    if (n % i == 0) {
        f = false
        console.log("Not a prime")
        break
    }
}
if (f) {
    console.log((n), "is Prime")
}
console.log()

console.log("Palindrome")
let rev = 0, t = n
for (; t != 0;) {
    rev = rev * 10 + t % 10
    n = parseInt(t / 10)
}
if (rev == n) {
    console.log("Palindrome")
}
else {
    console.log("Not a palindrome")
}
console.log()

console.log("Special Case of for;")
n = 10
let i
for (i = 1; i < n; i++);
{
    console.log(i)
}
console.log()
