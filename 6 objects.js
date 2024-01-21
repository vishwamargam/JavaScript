console.log("OBJECTS")
console.log("creation and accessing of objets")
let obj = { name: 'abc', 'age': 22, dept: 'cse' }
console.log(obj)
console.log(obj.name)
console.log(obj['name'])
let x = 'age'
console.log(obj.x)
console.log(obj[x])
console.log(obj['x'])
for (let p in obj) {
    console.log(obj[p])
}

console.log("updating and adding new properties")
obj = { name: 'abc', 'age': 22, dept: 'cse' }
obj.addr = 'hyderabad'
obj['pincode'] = 500016
obj.name = 'vi'
console.log(obj)

console.log("")

console.log("updating properties in new objects")
let obj1 = { x: 10, y: 15, z: 20 }
obj1 = { ...obj1, a: 100 }
obj1 = { ...obj1, x: 200 }
console.log(obj1)
console.log("")

console.log("if property name is available in variale")
let p = 'z'
obj = { x: 10, y: 20, [p]: 30 }
let p1 = 'name'
obj = { ...obj, [p1]: 'abc' }
let p2 = 'age'
obj[p2] = 20
console.log(obj)
console.log("")

console.log("Deleting properties")
obj = { x: 10, y: 20, z: 30 }
delete obj['z']
delete obj.y
console.log(obj)
console.log("")

console.log("To know weather property is available in object or not")
obj = { x: 10, y: 20, z: 30 }
console.log('x' in obj)
console.log('a' in obj)
console.log(obj.age != undefined)
console.log(obj.x != undefined)
console.log("")