//sort


// 1) Сортируем строки "по алфивиту" "из коробки", т.е. без доп. параметров
const names = ["Roma", "Bob", "Alex", "Donald"]
console.log(names.sort()) // [ 'Alex', 'Bob', 'Donald', 'Roma' ]

// 2) Сортирует строки по unidode "из коробки", т.е. без доп. параметров
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
const numbers = [100,9,22,777]
console.log(numbers.sort()) // [ 100, 22, 777, 9 ]

// 6) Для остальных случаев необходимо параметром передавать функцию сравнения
const compareFunction = (a,b) => {
    if(a <= b){
        return -1 // надо вернуть любое отрицательное число, если местами их менять НЕ надо
    } else {
        return 1 // надо вернуть любое положительное число, если местами их менять НАДО
    }
}
console.log(numbers.sort(compareFunction)) // [ 9, 22, 100, 777 ]

const shortCompareFunction = (a, b) => a - b
console.log(numbers.sort(shortCompareFunction)) // [ 9, 22, 100, 777 ]

