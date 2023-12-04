// замыкание, лексическое окружение, рекурсия

// Лексическое окружение - это объект, к которому мы не имеем доступ, а доступ имеет сам скрипт, который содержит в себе 2 поля:
//     1) “environmentRecords” - туда записываются все переменные и функции, объявленные в этом лексическом окружении
//     2) “environmentReference” - записывает ссылку на scope(область видимости),
// стоящую выше и она равна null для globalLE или стоящую выше на 1 уровень, если внутри блока имеется локальная LE

// let globalLE = {
//     environmentRecords: {
//
//     },
//     environmentReference: null
// }

// globalLE -> null; null - потому что выше нашего глобального LE нет ничего
// localLE (в примерах startEngineLE) -> globalLE; Если нет локальной LE, то переменная будет искаться в globalLE

// let car; // globalLE{car: undefined} -> null
// car = "BMW" // globalLE{car: "BMW"} -> null, потом станет globalLE{car: "Opel"} -> null, из-за car = "Opel" ниже до вызова функции
// const startEngine = () => {
//     // startEngineLE -> globalLE
//     console.log(`Start ${car}`) // "Start Opel" - из-за того, что глобальная переменная car перезаписалась с "BMW" на "Opel"
// }
// car = "Opel"; // globalLE{car: "Opel"} -> null
// startEngine(); // "Start Opel"

// --------------------------------------------

// let car2; // global2LE{car2: undefined} -> null
// car2 = "BMW" // global2LE{car2: "BMW"} -> null
// const startEngine2 = () => {
//     // startEngine2LE -> global2LE
//     console.log(`Start ${car2}`)
// }
// startEngine2(); // "Start BMW" - из-за того, что глобальная переменная car осталась "BMW", и вызов функции произошёл до переопределения (глобально) этой переменной на "Opel"
// car2 = "Opel"; // global2LE{car: "Opel"} -> null
// startEngine2(); // "Start Opel" - так как переменная car2 глобально перезаписалась на "Opel"


// --------------------------------------------
// const startEngine3 = () => {
//     // startEngine3LE -> global3LE, но его нет
//     console.log(`Start ${car3}`)
// }
// startEngine3(); // Выдаст ошибку, т.к. переменная car3 ни в LE функции, ни глобально нигде не определена, по сути global3LE не существует

// --------------------------------------------

// let car4; // global4LE{car4: undefined} -> null
// car4 = "BMW" // global4LE{car4: "BMW"} -> null
// console.log(car4) // BMW, т.к.global4LE{car4: "BMW"} -> null
// const startEngine4 = () => {
//     // startEngine4LE
//     let car4 = "VW" // startEngine4LE{car4: "VW"} -> global4LE, но здесь нет необходимости в поиске global4LE, т.к. имеется startEngine4LE
//     console.log(`Start ${car4}`)
// }
// startEngine4(); // "Start VW", т.к. при запуске функции переменная car4 будет искаться в первую очередь в локальном лексическом окружении, и получится startEngine4LE{car4: "VW"}, а если бы не нашлось - то функция пошла бы выше и искала бы данную переменную в глобальном лексическом окружении
// car4 = "Opel"; // globalLE{car4: "Opel"} -> null
// startEngine4(); // "Start VW", то же самое, несмотря на переопределение глобально переменной car4 у функции есть такая переменная локально, поэтому именно она и будет использована в startEngine4LE{car4: "VW"}
// console.log(car4) // Opel, т.к. global4LE{car4: undefined} -> null

// --------------------------------------------

// let car5; // global5LE{car5: undefined} -> null
// car5 = "BMW" // global5LE{car5: "BMW"} -> null
// console.log(car5) // BMW, т.к.global5LE{car5: "BMW"} -> null
// const startEngine5 = () => {
//     // startEngine5LE
//     let car5 = "VW" // startEngine5LE{car5: "VW"} -> global5LE, но здесь нет необходимости в поиске global5LE, т.к. имеется startEngine5LE
//     const foo = () => {
//         //foo5LE -> startEngine5LE
//         const model = "Polo" // foo5LE{model: "Polo"} -> startEngine5LE
//         console.log(`${car5} ${model}`) // т.к. car5 в локальной LE не существует, поднимаемся выше и ищем его в startEngine5LE, а там как раз таки это значение находим и именно его и используем, если бы переменная в car5 была бы закомментирована в startEngine5LE, то наши консоли бы показали "BMW Polo" и "Opel Polo" соответственно
//
//     }
//     foo()
// }
// startEngine5(); // VW Polo
// car5 = "Opel"; // global5LE{car5: "Opel"} -> null
// startEngine5(); // VW Polo

// --------------------------------------------

// hoisting (всплытие) различное при объявлении функций разными способами, т.е. в момент выполнения скрипта, функция объявленная ТОЛЬКО при помощи Function Declaration будет уже находиться в глобальной области видимости, поэтому можно данную функцию вызвать до её инициализации. При объявлении функций при помощи Function Expression или Arrow Function вызвать их не можем - ошибка:
//
// globalLE {foo3: Function}

// foo() // ReferenceError: Cannot access 'foo' before initialization
// foo2() // ReferenceError: Cannot access 'foo2' before initialization
// foo3() // "foo3"
//
// // globalLE{foo: Function}
// const foo = () => { // Arrow Function
//     console.log("foo")
// }
//
// // globalLE{foo: Function, foo2: Function }
// const foo2 = function () { // Function Expression
//     console.log("foo2")
// }
//
// // globalLE {foo3: Function}
// function foo3 () { // Function Declaration
//     console.log("foo3")
// }

// Всплытию также подлежат все переменные, созданные с помощью ключевого слова var:

// globalLE {foo3: Function, a: undefined}

// undefined в значении переменной a потому что движок ещё не знает какое у неё значение, но добавляет данную переменную в глобальную область видимости потому что данная переменная объявлена с помощью ключевого слова var. Так, когда движок дойдёт до того места, где данное значение определяется, то и заменит его уже с undefined на "a".

// // globalLE{foo: Function}
// const foo = () => { // Arrow Function
//     console.log("foo")
// }
//
// // globalLE{foo: Function, foo2: Function}
// const foo2 = function () { // Function Expression
//     console.log("foo2")
// }
//
// // globalLE {foo3: Function}
// function foo3 () { // Function Declaration
//     console.log("foo3")
// }

// console.log(a) // undefined
// console.log(b) // ReferenceError: Cannot access 'b' before initialization
// console.log(c) // ReferenceError: Cannot access 'c' before initialization


// var a = "a"; // globalLE {foo3: Function, a: "a"}
// let b = "b"; // globalLE{foo: Function, foo2: Function, b: "b"}
// const c = "c"; // globalLE{foo: Function, foo2: Function, b: "b", c: "c"}
//
// console.log(a) // "a"
// console.log(b) // "b"
// console.log(c) // "c"


// То же самое касается присвоения функции способом Function Expression при помощи ключевого слова var:

// globalLE {foo3: Function, a: undefined, someFunc: undefined}

// someFunc() // TypeError: someFunc is not a function
// var someFunc = function () {}

//global6LE: {startEngine6: undefined} - т.к. функция была объявлена при помощи
// Function Expression, то в глобальной области видимости уже будет находиться свойство
// startEngine6 со значением undefined, т.к. она ещё не была определена в самом начале


// --------------------------------------------

// Так, если мы объявляем функцию при помощи Function Declaration, необходимо помнить про всплытие, при этом, внутри локальной области видимости данной функции будет создана скрытая переменная [[Environment]], которая будет создана в момент инициализации(до вызова) и будет ссылкой  на глобальное лексическое окружение :

//global6LE: {startEngine6: undefined} - т.к. функция была объявлена при помощи
// Function Expression, то в глобальной области видимости уже будет находиться свойство
// startEngine6 со значением undefined, т.к. она ещё не была определена в самом начале

// let car6; // global6LE:{startEngine6: undefined, car6: undefined} -> null
// car6 = "BMW" // global6LE:{startEngine6: undefined, car6: "BMW"} -> null
// console.log(car6) // BMW, т.к.global6LE:{startEngine6: undefined, car6: "BMW"} -> null
//
// function startEngine6(){
//     // [[Environment]] -> global6LE // создается при инициализации функции, и останется
//     // startEngine6LE: {foo: Function} -> [[Environment]] // создается при вызове функции
//     // и удалится при отработке функции
//     let car6 = "VW" // startEngine6LE:{car6: "VW"} -> global6LE,
// // но здесь нет необходимости в поиске global6LE, т.к. имеется startEngine6LE
//     const foo = () => {
//         // [[Environment] -> startEngine6LE, удалится при отработке функции
//         //foo6LE -> [[Environment]], удалится при отработке функции
//         const model = "Polo" // foo6LE:{model: "Polo"} -> startEngine6LE
//         console.log(`${car6} ${model}`)
//     }
//     foo();
// }
// startEngine6(); // VW Polo
// car6 = "Opel"; // global6LE:{startEngine6: Function, car6: "Opel"} -> null
// startEngine6(); // VW Polo

// То есть, на момент инициализации создается скрытая переменная на внешнее лексическое окружение, которая будет существовать постоянно а объект лексического окружения создаётся на вызов функции, который удаляется при отработке этой функции!!!

// --------------------------------------------

// ЗАМЫКАНИЕ - это способность функции запоминать объекты лексического окружения,
// в котором она была проинициализирована(создана).

// Пример со счётчиком:

// globalLE: {} -> null, пустой объект, т.к. нет ничего, что подлежит всплытию, а когда дойдём до инициализации функции
// counterCreator, то станет globalLE: {counterCreator: Function}, после инициализируется переменная counter1 и получается globalLE: {counterCreator: Function, counter1: Function}


// const counterCreator = () => { // globalLE: {counterCreator: Function}
//     // [[Environment]] -> globalLE
//     // counterCreatorLE -> [[Environment]], при этом этот ОБЪЕКТ удаляться не будет и будет жить постоянно в глобальном лексическом окружении, так как
//     let count = 0; // counterCreatorLE:{count: 0} - это ОБЪЕКТ
//     return () => { // возвращается ФУНКЦИЯ, которая не вызывается
//         // [[Environment]] -> counterCreatorLE:{count: 0} - это ССЫЛКА
//         // counter1LE:{}
//
//         // ВНИМАНИЕ!!! Прочитай и разберись, понял, но можешь забыть!
//         // Эта ССЫЛКА также продолжает жить после своей отработки объекта counter1LE:{}.
//         // Итак, ПУСТОЙ объект counter1LE:{} СОЗДАЕТСЯ после первого вызова переменной counter1(), см. ниже.
//         // Так как переменной count в данной области видимости нет, она поднимается выше и берёт значение count из лексического окружения counterCreatorLE: {count:0}, и получает значение ноль - в связи с чем в первом console.log будет 0 + 1 -> число 1, а также меняется значение области видимости на counterCreatorLE: {count:1}. После отработки функции объект counter1LE:{} удаляется, а объект counterCreatorLE:{count: 1} не удаляется, так как ссылка [[Environment]] -> counterCreatorLE:{count: 1} на него сохраняется в переменной counter1.
//
//         // Далее, вызывается counter1() второй раз - создается ПУСТОЙ объект counter1LE:{} - и всё повторяется то же самое, только теперь из-за того что объект counterCreatorLE:{count: 1} будет 1 + 1 -> 2 -> далее объект counter1LE:{} удалится, и поменяется объект функции counterCreator на counterCreatorLE:{count: 2}
//
//         // Далее, вызывается counter1() третий раз - опять заново создается ПУСТОЙ объект counter1LE:{} - и всё повторяется вновь, только теперь из-за того что объект counterCreatorLE:{count: 2} будет 2 + 1 -> 3 -> далее объект counter1LE:{} удалится, и поменяется объект функции counterCreator на counterCreatorLE:{count: 3}
//
//         // Взрыв мозга!!!
//         console.log(++count)
//     }
// }
//
// const counter1 = counterCreator() // globalLE: {counterCreator: Function, counter1: Function}, из-за этой переменной не будут умирать объект counterCreatorLE и ссылка [[Environment]] -> counterCreatorLE:{count: 0}, т.к. данная переменная живёт в глобальном лексическом окружении
// counter1() // вызываем counter1 - в связи с чем создастся counter1LE
// counter1()
// counter1()


// ПРИ ЭТОМ!!!

// const counterCreator = () => {
//     let count = 0;
//     return () => {
//         let count = 0 // из-за того что в локальной области видимости есть значение 0,
//         // то нет необходимости подниматься выше, а значит переопределения с 0 на 1
//         // в переменной выше не будет
//         console.log(++count)
//     }
// }
//
// const counter1 = counterCreator()
// counter1() // 1
// counter1() // 1
// counter1() // 1

// И

// const counterCreator = () => {
//     let count = 0;
//     return () => {
//         console.log(++count)
//     }
// }
// counterCreator() // Мы вызываем функцию counterCreator, которая делает return функции () => {
//     //  console.log(++count)
//     //} и всё, мы с этой функцией ничего не делаем больше, а значит console.log(++count) мы вообще не увидим

// ИЛИ

// const counterCreator = () => {
//     let count = 0;
//     console.log(++count) // Вот какой console.log() мы видим
//     return () => {
//         console.log(++count)
//     }
// }
// counterCreator() // 1
// counterCreator() // 1
// counterCreator() // 1

// ИЛИ
// globalLE: {} -> null
// const counterCreator = () => { // globalLE: {counterCreator: Function} -> null
//     //  [[Environment]] -> globalLE: {counterCreator: Function}
//     //counterCreatorLE1:{}
//     //counterCreatorLE2:{}
//     let count = 0; counterCreatorLE1:{count: 0},counterCreatorLE2:{count: 0}
//     return () => {
//         // [[Environment]] -> counterCreatorLE1:{count: 0}
//         // [[Environment]] -> counterCreatorLE2:{count: 0}
//         console.log(++count)
//     }
// }
// const counter1 = counterCreator() // globalLE: {counterCreator: Function, counter1: Function} -> null
// const counter2 = counterCreator() // globalLE: {counterCreator: Function, counter2: Function} -> null
// counter1() // 1
// counter1() // 2
// counter1() // 3
// counter2() // 1
// counter2() // 2
// counter2() // 3


// ИЛИ

// let count = 0;
// const counterCreator = () => {
//     return () => {
//         console.log(++count)
//     }
// }
// const counter1 = counterCreator()
// const counter2 = counterCreator()
// counter1() // 1
// counter1() // 2
// counter1() // 3
// counter2() // 4
// counter2() // 5
// counter2() // 6
// --------------------------------------------






// 1) globalLE: {} -> null // 307-ая строка кода
//
// const counterCreator = () => { // 2) globalLE: {counterCreator: Function} -> null - это объект
//     // 3) [[Environment]] -> globalLE: {counterCreator: Function} -> null - это ссылка
//     // 5) counterCreatorLE:{} -> [[Environment]] - это объект,
//     let count = 0; // 6) counterCreatorLE:{count: 0} - это ОБЪЕКТ
//     return () => { // 7)
//         // 9), 10) [[Environment]] -> counterCreatorLE:{count: 0} - это ССЫЛКА
//         11) console.log(++count)
//     }
// }
//
// const 8) counter1 = 4) counterCreator() // globalLE: {counterCreator: Function, counter1: Function}
// 10) counter1()
// 12) counter1()

// 1) В момент начала чтения скрипта создается глобальная область видимости с находящимся в ней пустым объектом, т.к. нет ничего, что подлежит всплытию,а null указывает на то, что больше некуда всплывать и искать переменные, по сути потому что выше нашей глобальной область видимости нет ничего;
// 2) В момент инициализации функции counterCreator на 309 строке в глобальной области видимости создаётся ключ
// counterCreator со значением Function;
// 3) А также создается ссылка(на внешнее(globalLE: {counterCreator: Function} -> null) лексическое окружение), которая помещается в скрытую переменную [[Environment]]  (строка 310), при этом по самой функции мы дальше не идём и ничего не выполняем, выходим и смотрим за пределы функции на момент её вызова;
// 4) Далее в переменную counter1 помещается результат выполнения функции counterCreator(), в связи с чем мы к ней обратно и возвращаемся;
// 5) B только тогда на 311 строке создастся объект counterCreatorLE:{} с пустым объектом внутри
// 6) И уже находясь на строке 312 в объекте counterCreatorLE:{} будет дополнено свойство "count" со значением 0 -> counterCreatorLE:{count: 0}
// 7) Возвращается ФУНКЦИЯ и записывается в переменную counter1, которая находится в глобальном лексическом окружении, и в момент возвращения функции происходит её инициализация (получается уже не в глобальной области видимости,а в области видимости counterCreatorLE)
// 8) Переменная  counter1 записывается в качестве свойства в глобальном лексическом окружении со значением Function
// 9) Продолжение пункта 7: А значит далее по аналогии с п.3, инициализируется возвращаемая после члова return функция и создается ссылка(на внешнее(counterCreatorLE:{count: 0}) лексическое окружение), которая помещается в скрытую переменную [[Environment]](строка 314)
// 10) Так как на объект counterCreatorLE:{count: 0} (п.6) есть ссылка [[Environment]] -> counterCreatorLE:{count: 0} (п.9), грубо говоря которая сидит в переменной counter1, то вышеуказанный объект не будет удаляться после отработки и будет жить, так как на него ссылается переменная counter1
// 11) А тем временем сработает тело возвращаемой функции и counterCreatorLE:{count: 0} заменится на counterCreatorLE:{count: 1}
// 12) Далее мы опять при помощи вызова переменной counter1() вызываем функцию (которая после return) и она при помощи ссылки (п.9) обращается к объекту (п. 6), при этом происходит изменение counterCreatorLE:{count: 1} на counterCreatorLE:{count: 2}


// В случае ниже суть таже самая, но при вызове counter2() будет создаваться counterCreatorLE2:{count: 0} уже по другой ссылке, не имеющей отношения к counterCreatorLE1:{count: 0}, а значит и получится 2 разных изменения на 1,2,3
// globalLE: {} -> null
// const counterCreator = () => { // globalLE: {counterCreator: Function} -> null
//     //  [[Environment]] -> globalLE: {counterCreator: Function}
//     //counterCreatorLE1:{}
//     //counterCreatorLE2:{}
//     let count = 0; counterCreatorLE1:{count: 0},counterCreatorLE2:{count: 0}
//     return () => {
//         // [[Environment]] -> counterCreatorLE1:{count: 0}
//         // [[Environment]] -> counterCreatorLE2:{count: 0}
//         console.log(++count)
//     }
// }
// const counter1 = counterCreator() // globalLE: {counterCreator: Function, counter1: Function} -> null
// const counter2 = counterCreator() // globalLE: {counterCreator: Function, counter2: Function} -> null
// counter1() // 1
// counter1() // 2
// counter1() // 3
// counter2() // 1
// counter2() // 2
// counter2() // 3


// // Рекурсия - это вызов функции из этой же самой функции.
// // 2**4 -> 2 * 2**3 -> 2 * 2 * 2**2 -> 2 * 2 * 2 * 2**1
// // 1) Выход из рекурсии, когда степень равна 1;
// // Функция может иметь доступ к самой себе, так как она лежит в globalLE.
// //  2) Шаг рекурсии (n-1);
// const pow = (x, n) => { // globalLE: {pow: Function}
//     if(n === 1){
//         return x
//     }else{
//         return x * pow(x, n-1)
//     }
// }
//
// console.log(pow(2, 6))
//
// // Структура данных “Стэк” (аналогия - наполнение стакана воды):
//
// let a = () => {
//     console.log("a")
// }
// let b = () => {
//     console.log("b")
//     a()
// }
// let c = () => {
//     console.log("c")
//     b()
// }
// c()
// // Не закончится выполнение функции c( ), пока не выполнится функция b( ), а последняя не выполнится пока не выполнится функция a( ).
// // В рекурсии используется принцип LIFO (Last In - First Out)
//
// // Структура данных “Очередь” (FIFO - First In First Out)

// Пример с факториалом
// const getFactorial = n => {
//     if(n === 1){
//         return n;
//     }else{
//         return n * getFactorial(n-1)
//     }
// }
// console.log(getFactorial(5)) // 5 * 4 * 3 * 2 * 1





