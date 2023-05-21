//1) Типы данных:
// I) Примитивы:
//     const string = '123';
//     const number = 123;
//     const bigInt = 10n;
//     const nullType = null;
//     const undefinedType = undefined;
//     const boolean = true;
//     // const symbol = symbol;
// // II) Объекты
//     const obj = {}
//
// // 2)typeof - возвращает тип данных в строком виде
// console.log(typeof nullType) // "object"
// console.log(typeof (typeof nullType)) // string

// 3) Операнды и операторы
// a) Унарные операторы (операнды- цифры)
// console.log(+3)
// console.log(-9)
// console.log(+7)
// console.log(-17)

// b) Бинарые операторы
// console.log(2+3)
// console.log(124-9)
// console.log(12+7)
// console.log(556-17)
// c) Тернарый оператор
// let a = 12;
// console.log(a > 17 ? true: false);

// 4) Инкремент и Декремент
// let index = 1;
// console.log(index++) // 1
// console.log(++index) // 3
// console.log(++index) // 4
// console.log(index++) // 4
// console.log(index) // 5
// console.log(index--) // 5
// console.log(--index) // 3
// console.log(index--) // 3
// console.log(index--) // 2
// console.log(index) // 1

// 5) Операторы сравнения == и ===

// console.log(1 == "1")  //сравниваются данные и идёт преобразование
// console.log(1 === "1") // учитывает тип данных при сравнении

// 6) falsy значения : 0 "" undefined null false

// Задачи на сравнение:

// console.log(5 == 5)
// console.log(5 == "5")
// console.log(5 === 5)
// console.log(5 === "5")
//
// console.log(5 > 5)
// console.log(5 < 5) // false
// console.log(5 >= 5)
// console.log(5 <= 5)
// console.log("5px" > 3) // false - Строку "5px" - пробразует в число - NaN
// console.log(Number("5px"))// NaN
// console.log("5px" < 10) // false
// console.log("A" > "a")
// console.log("B" < "b")

// 7) Логические операторы
// ! -  не (наивысший приоритет)
// && - и (ниже)
// || - или (низкий)

// console.log(10 && 2)
// console.log(0 && 1)
// console.log(23 || 7)
// console.log(0 || 9)
// console.log(0 || 1 && 4)
// console.log(0 && 2 || 8)

// let a = true;
// let b = true;
// console.log(a && b)
// console.log(!a && b)
// console.log(a && !b)
// console.log(!a && !b)
// console.log(!(a && b))
// console.log(!(!a && !b))

// let a = true;
// let b = true;
// console.log(a || b)
// console.log(!a || b)
// console.log(a || !b)
// console.log(!a || !b)
// console.log(!(a || b))
// console.log(!(a || !b))
// console.log(!(!a || !b))

// Задачи с переменными:
// let a = ""; // false !! - для быстрой конвертации примитива в boolean
// let b = 9; // true
// let c = null; // false
//
// console.log(!!(!a || !b && !c))
// console.log(!!(a || !b && !c))
// console.log(!!(a || !b || c))
// console.log(!!(!a && !b && !c))
// console.log(!!(!a || !b && !c))









