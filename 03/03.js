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

// const small = document.getElementById("small")
// const getSmallHandler = (text) => {
//     alert(text)
// }
// const anonymous = () => getSmallHandler("Hello")
// small.onclick = anonymous
//
// small.onclick = null