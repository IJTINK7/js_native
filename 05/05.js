//sort

const names = ["Roma", "Bob", "Alex", "Donald"]
console.log(names.sort()) // [ 'Alex', 'Bob', 'Donald', 'Roma' ]
// 1) Сортируем строки "по алфивиту" "из коробки", т.е. без доп. параметров
const names2 = ["Roma", "Bob", "Юрий", "bob", "alex", "Игорь", "Alex", "Donald", "1000"]
console.log(names2.sort()) // ['1000', 'Alex',   'Bob','Donald', 'Roma','alex','bob', 'Игорь',  'Юрий']
