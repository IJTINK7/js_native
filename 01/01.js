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



// Работа с данными Мутабально и иммутабельно:

// 1) Мутабельно

const users = [
    {
        id: 1,
        name: "Anna",
        isStudent: true
    },
    {
        id: 2,
        name: "Alex",
        isStudent: false
    },
    {
        id: 3,
        name: "Donald",
        isStudent: true
    },
    {
        id: 4,
        name: "Mike",
        isStudent: false
    },
]

const newUser =  {
    id: 5,
    name: "Shon",
    isStudent: true
}

users.push(newUser) // мутабельно (поменяли изначальные данные)
console.log(users) // изначальный массив поменялся на:
// [
// { id: 1, name: 'Anna', isStudent: true },
// { id: 2, name: 'Alex', isStudent: false },
// { id: 3, name: 'Donald', isStudent: true },
// { id: 4, name: 'Mike', isStudent: false },
// { id: 5, name: 'Shon', isStudent: true }
// ]



// 2) Иммутабельно

//струкрута  => делаем копию => вносим изменения в копию => используем копию

const users2 = [
    {
        id: 1,
        name: "Anna",
        isStudent: true
    },
    {
        id: 2,
        name: "Alex",
        isStudent: false
    },
    {
        id: 3,
        name: "Donald",
        isStudent: true
    },
    {
        id: 4,
        name: "Mike",
        isStudent: false
    },
]

 // Данный вариант устарел
const copyUsers = [];
for (let i = 0; i < users2.length; i++){
    copyUsers.push(users2[i])
}
copyUsers.push(newUser)
console.log(copyUsers)

console.log(users2 === copyUsers) // false

// Поэтому используется spread оператор ...

const users3 = [
    {
        id: 1,
        name: "Anna",
        isStudent: true
    },
    {
        id: 2,
        name: "Alex",
        isStudent: false
    },
    {
        id: 3,
        name: "Donald",
        isStudent: true
    },
    {
        id: 4,
        name: "Mike",
        isStudent: false
    },
]

copyUsers2 = [...users3, newUser]
console.log(copyUsers)
console.log(users3 === copyUsers2) // false - разные массивы

const user4 = {
    name: 'John Doe',
    age: 30,
    isStudent: false,
    hobbies: ['reading', 'painting', 'swimming'],
    address: {
        street: '123 Main St',
        city: 'New York',
        country: 'USA'
    },
    education: {
        degree: 'Bachelor',
        major: 'Computer Science',
        university: {
            name: 'ABC University',
            location: 'XYZ City'
        }
    }
};
console.log(user4.education.university.location)
console.log(user4.hobbies[2])

console.log(user4.name)
console.log(user4["name"])

console.log(user4.address.city)

const copyUser4 = {...user4, age: 31, address: {...user4.address, street: '157 West St'}}
const copyUser5 = {...user4, education: {university: {...user4.education.university, location: 'EFG City'}}}
console.log(copyUser4)
console.log(user4.age === copyUser4.age)
console.log(copyUser5)


