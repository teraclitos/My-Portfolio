function greet (person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`)
}

greet('Maddison', new Date())
const arr = [0, 1, 2]

arr.push(4)
arr.unshift(-1)
console.log(arr)
