console.log("FUNCTIONS")
function fun(a, b, c) {
    console.log(a + b + c)
}
fun(4, 5, 6)

console.log("prime")

function isprime(n) {
    if (n == 0 || n == 1) {
        return false
    }
    else {
        let f = true
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                f = false
                break
            }
        }
        return f
    }
}

console.log("sum of primes b/w given range")
let m = -30, n = -10
let s = 0
for (let i = m; i <= n; i++) {
    if (isprime(Math.abs(i))) {
        s = s + i
    }
}
console.log(s)

console.log("sum of min, max primes within given range")
m = -47, n = -38
let max, min
for (let i = m; i <= n; i++) {
    if (isprime(Math.abs(i))) {
        min = i
        break
    }
}
for (let i = n; i >= m; i--) {
    if (isprime(Math.abs(i))) {
        max = i
        break
    }
}
console.log(min, max)
console.log(min + max)
console.log("")

console.log("GCD funtion")
function gcd(a, b) {
    while (b != 0) {
        let r = a % b
        a = b
        b = r
    }
    return a
}
console.log(gcd(4, 38))
console.log("")

console.log("Passing object as an argument")
function fun(o1) {
    o1.x = 20
    return o1
    o1 = { ...o1, x: 20 }
    return o1
}
obj = { a: 10, b: 20, c: 30 }
console.log(fun(obj))
console.log(obj)
console.log("")

console.log("Passing array as an argument")
function fun(a) {
    a[2] = 30
    return a
}
let x = [1, 2, 3, 4, 5]
console.log(fun(x))
console.log(x)
console.log("")

console.log("Default Arguments")
function fun(a, b, c = 0, d = 5) {
    console.log(a, b, c, d)
}
fun(2, 3)
fun(2, 3, 4)
fun(10, 20, 30, 40)
console.log("")

console.log("REst operator/ Variable length arguments")
function fun(a, b, ...c) {
    console.log(a, b, c)
}
fun(3, 4)
fun(2, 3, 5)
fun(2, 4, 6, 8, 3)