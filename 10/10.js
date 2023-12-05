// Promises

// Promises (Промисы, обещания) - это

// Промисы решают проблему работы ассинхронного кода. Так как JS - однопоточный язык программирования и всё выполняется построчно одним потоком, и если произойдет остановка, обработка какого-либо запроса, то приложение зависнет не некоторое время, что будет отображено на UI.

// До промисов можно было работать ассинхронно с помощью callback-ов, но данный метод не используется и устарел, ниже просто пример:

// К примеру какая-либо библиотека предоставляла нам функцию для запросов на сервер:

// const fetch = (url, callback) => {
//     //  под копотом реализована логика запросов на сервер и извлечения данных,а когда функция их получила, то вызывыла callback
//     callback(err, data)
// }
//
// Ниже реализованы запросы на сервер - поиск страницы какой-то книги какого-то автора
//
// fetch("https://books.com/authors", (err, data)=> {
//     if(err){
//         console.log("Error")
//     }else{
//         fetch("https://books.com/authors/author-id-75", (err, data)=> {
//             if(err){
//                 console.log("Error")
//             }else{
//                 fetch("https://books.com/authors/author-id-75/books", (err, data)=> {
//                     if(err){
//                         console.log("Error")
//                     }else{
//                         fetch("https://books.com/authors/author-id-75/books/book-number102", (err, data)=> {
//                             if(err){
//                                 console.log("Error")
//                             }else{
//                                 fetch("https://books.com/authors/author-id-75/books/book-number102/page133", (err, data)=> {
//                                     if(err){
//                                         console.log("Error")
//                                     }else{
//                                         console.log(data)
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })

// Проблемы: 1) Читаемость кода усложняется, 2) Когда передавались колбэки в колбэки - код разрастался в правую сторону,
// данное явление назвали "callback hell" ("Ад колбеков")
//
// Именно для решения данной проблемы были придуманы промисы

// ==============================================================

// const server = {
//     getData(){
//         return new Promise((resolve, reject)=>{ // промис принимает 1 функцию-экзекьютер, в которую закидывает две
//             // свои функции resolve и reject
//             // После отработки класса "Promise"
//             // возвращается экземпляр данного класса (объект) - по сути это и есть создание промиса
//             // Promise {<pending>}
//             //     [[Prototype]]: Promise
//             //     [[PromiseState]]: "pending"
//             //     [[PromiseResult]]: undefined
//
//             setTimeout(()=>{
//                 resolve("Some data")
//             }, 3000) // Теперь через 3 секунды сработает внутренняя функция resolve в которую мы передали строку "Some data"
//                 // в связи с чем при логировании переменной promise получим результат:
//             // Promise {<fulfilled>: "Some data"}
//             //     [[Prototype]]: Promise
//             //     [[PromiseState]]: "fulfilled"
//             //     [[PromiseResult]]: "Some data"
//             // То есть, в скрытом поле [[PromiseState]] меняется состояние в зависимости от вызванной функции: resolve -> "fulfilled", rejected -> "rejected"
//             // Т.е. [[PromiseState]]: "fulfilled" или [[PromiseState]]: "rejected"
//             // А в скрытом поле [[PromiseResult]] будут указаны те данные, которые мы передали, в случае выше [[PromiseResult]]: "Some data"
//             setTimeout(()=>{
//                 reject("Some error")
//             }, 5000)
//             // При этом нельзя получить результат и resolve и reject вместе, т.к. если сработал resolve, то reject не сработает, и наоборот
//         })
//     }
// }
// const promise = server.getData();
// console.log(promise) // Promise { <pending> } возвращается данный объект:

// Promise {<pending>}
//     [[Prototype]]: Promise
//     [[PromiseState]]: "pending"
//     [[PromiseResult]]: undefined

// Промис может иметь 3 состояния ([[PromiseState]]):
// 1) "pending" ( Promise {<pending>} ) - В момент инициализации промиса до вызова функций resolve или reject, при этом пока промис в этом состоянии, скрытое поле [[PromiseResult]] будет равно undefined
//     2) "fulfilled" ( Promise {<fulfilled>: “Some data”} ) - При вызове функции resolve, скрытое поле [[PromiseResult]] будет равно тому значению(”Some data”), которое было передано в качестве параметра вышеуказанной функции
//         3) "rejected" ( Promise {<rejected>: “Some error”} ) - При вызове функции resolve, скрытое поле [[PromiseResult]] будет равно тому значению(“Some error”), которое было передано в качестве параметра вышеуказанной функции


// Своя реализация прописа:

// function newPromise(callback){
//     const resolve = (result) =>{
//         return {
//             state: "fulfilled",
//             result: result
//         }
//     }
//     const reject = (error) =>{
//         return {
//             state: "rejected",
//             result: error
//         }
//     }
//     callback(resolve, reject)
// }