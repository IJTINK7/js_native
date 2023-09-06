// 1-st lesson
// I - Типы данных:
//  Примитивы:
//      1) number
//      2) string
//      3) boolean
//      4) BigInt
//      5) null
//      6) undefined
//      7) symbol
//  Ссылочный:
//      1) object (objects, arrays, functions, etc.)

const num = 3
const num2 = num
console.log(num) // 3
console.log(num2) // 3

const user = {
    name: "Bob"
}
const array = [
    user,
    {name: "Alex"}
]
console.log(array) // [ { name: 'Bob' }, { name: 'Alex' } ]

// C - Create
// R - Read
// U - Update
// D - Delete
