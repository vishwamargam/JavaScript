  let a=[1,2,3,4,5]
  for(let i=0;i<a.length;i++){
    console.log(a[i])
  }
  for(let i in a){
    console.log(a[i])
  }
  for(let i of a){
    console.log(i)
  }
  console.log()

  a=new Array(1,2,3,4,5)
  console.log(a)
  
  console.log("Adding element at end")
  a.push(6)
  console.log(a)

  console.log("Adding element at first")
  a.unshift(0)
  console.log(a)

  console.log("Insertion at specific pos")
  a.splice(3,0,7,8,9)
  console.log(a)

  console.log("Deletion at end")
  a.pop()
  console.log(a)

  console.log("Deletion at first")
  a.shift()
  console.log(a)

  console.log("Deletion at specific pos")
  a.splice(2,3)
  console.log(a)