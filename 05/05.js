//sort


// 1) Сортируем строки "по алфивиту" "из коробки", т.е. без доп. параметров
const names = ["Roma", "Bob", "Alex", "Donald"]
console.log(names.sort()) // [ 'Alex', 'Bob', 'Donald', 'Roma' ]

// 2) Сортирует строки по "unicode" "из коробки", т.е. без доп. параметров
// цифры
// лат алфавит (заглавные)
// лат алфавит (строчные)
// символы других алфавитов(заглавные - строчные)

const names2 = ["Roma", "Bob", "Юрий", "bob", "alex", "Игорь", "Alex", "Donald", "1000"]
console.log(names2.sort()) // ['1000', 'Alex', 'Bob','Donald', 'Roma','alex','bob', 'Игорь',  'Юрий']

// 3) Работает мутабельно (сортирует массив на меспе и меняет его)
console.log(names) // [ 'Alex', 'Bob', 'Donald', 'Roma' ]

// 4) Возвращает ссылку на исходный массив
console.log(names === names.sort()) // true

// 5) Числа без доп. параметров не сортирует, а воспринимает числа как строки и сортирует "по алфавиту"

// const numbers = [100,9,22,777]
// console.log(numbers.sort()) // [ 100, 22, 777, 9 ]

// 6) Для остальных случаев необходимо параметром передавать функцию сравнения
// const compareFunction = (a,b) => {
//     if(a <= b){
//         return -1 // надо вернуть любое отрицательное число, если местами их менять НЕ надо
//     } else {
//         return 1 // надо вернуть любое положительное число, если местами их менять НАДО
//     }
// }
// console.log(numbers.sort(compareFunction)) // [ 9, 22, 100, 777 ]

// const shortCompareFunction = (a, b) => a - b
// console.log(numbers.sort(shortCompareFunction)) // [ 9, 22, 100, 777 ]

// 7) Отсортировать массив в противоположном направлении
// console.log(numbers.reverse()) // [ 777, 100, 22, 9 ]

// 8) Сортировка массива по числовым значениям

const users = [
    {
        id: 1,
        name: "Anna",
        age: 22,
        isStudent: true,
        scores: 17
    },
    {
        id: 2,
        name: "Alex",
        age: 27,
        isStudent: false,
        scores: 80
    },
    {
        id: 3,
        name: "Donald",
        age: 20,
        isStudent: true,
        scores: 77
    },
    {
        id: 4,
        name: "Mike",
        age: 33,
        isStudent: false,
        scores: 83
    },
]

console.log(users.sort((a,b)=> a.age - b.age))
//[
//   { id: 3, name: 'Donald', age: 20, isStudent: true, scores: 77 },
//   { id: 1, name: 'Anna', age: 22, isStudent: true, scores: 17 },
//   { id: 2, name: 'Alex', age: 27, isStudent: false, scores: 80 },
//   { id: 4, name: 'Mike', age: 33, isStudent: false, scores: 83 }
// ]
// Возраст по порядку стоит


// 9) Сортировка массива объектов по строковым значениям
console.log(users.sort((a,b)=>a.name.localeCompare(b.name))) // Возвращает 1 или -1 в зависимости от большего значения сравниваемых символов
// При этом стоит учитывать, что функция localeCompare регистронезависимая
//[
//   { id: 2, name: 'Alex', age: 27, isStudent: false, scores: 80 },
//   { id: 1, name: 'Anna', age: 22, isStudent: true, scores: 17 },
//   { id: 3, name: 'Donald', age: 20, isStudent: true, scores: 77 },
//   { id: 4, name: 'Mike', age: 33, isStudent: false, scores: 83 }
// ]
const users2 = [
    { id: 1, name: 'Anna', age: 22, isStudent: true, scores: 17 },
    { id: 2, name: 'Alex', age: 27, isStudent: false, scores: 80 },
    { id: 3, name: 'AaDonald', age: 20, isStudent: true, scores: 77 },
    { id: 4, name: 'AMike', age: 33, isStudent: false, scores: 83 }
]
console.log(users2.sort((a,b)=>a.name.localeCompare(b.name))) // Первый объект с Аа, т.к. всё  один регистр приводится, к примеру АА... AL... AM... AN...
    // [
    //  { id: 3, name: 'AaDonald', age: 20, isStudent: true, scores: 77 },
    //  { id: 2, name: 'Alex', age: 27, isStudent: false, scores: 80 },
    //  { id: 4, name: 'AMike', age: 33, isStudent: false, scores: 83 },
    //  { id: 1, name: 'Anna', age: 22, isStudent: true, scores: 17 }
    // ]

// 10) Сортировка пузырьком

const numbers = [23,67,56,34,99,12,7,85,54,77,21,78] // По возрастанию
let count = 0;
for (let j = 0; j < numbers.length; j++) {
    count++
    // let isSorted = true
    for (let i = 0; i < numbers.length - 1; i++) {
        if(numbers[i] > numbers[i + 1]){
            // isSorted = false
            const temp = numbers[i]
            numbers[i] = numbers[i + 1]
            numbers[i + 1] = temp
        }
        count++
    }
    // if(isSorted)break
}
console.log(numbers)
console.log(count) // 144

