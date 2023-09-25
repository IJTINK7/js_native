// function => handler(обработчик), listener(слушатель), subscriber (подписчик)
// При наступлении события:
// new Event() - объект, который содержит сведения о событии
// function(event) - вызов функции
// function(ev) - вызов функции
// function(e) - вызов функции
// event, ev,e === new Event()

// [] === new Array()
// {} === new Object()
// const map = new Map()
// const set = new Set()
//
// const small = document.getElementById("small")
// const medium = document.getElementById("medium")
// const big = document.getElementById("big")
// const getSmallHandler = () => {
//     alert("Small!")
// }
// const getMediumHandler = () => {
//     alert("Medium!")
// }
// const getBigHandler = (e) => {
//     console.log(e.target.id)
// }
// // const anonymous = () => getSmallHandler("Hello")
// // small.onclick = anonymous
// //
// // small.onclick = null
// small.addEventListener("click",getBigHandler)
// medium.addEventListener("click",getBigHandler)
// big.addEventListener("click",getBigHandler)

const small = document.getElementById("small")
const medium = document.getElementById("medium")
const big = document.getElementById("big")

const getSmallHandler = () => {
    alert("Small!")
}
const getMediumHandler = () => {
    alert("Medium!")
}
const getBigHandler = (e) => {
    if(e.target.tagName === "BUTTON"){
        console.log(e.target.id)
    }
}
// const anonymous = () => getSmallHandler("Hello")
// small.onclick = anonymous
//
// small.onclick = null
//
// small.addEventListener("click", getBigHandler, {capture: false})
// medium.addEventListener("click", getBigHandler, {capture: false})
// big.addEventListener("click", getBigHandler, {capture: false})

small.addEventListener("click", getBigHandler)
