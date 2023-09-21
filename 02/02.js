const users = [
    {
        id: 1,
        name: "Anna",
        isStudent: true,
        scores: 17
    },
    {
        id: 2,
        name: "Alex",
        isStudent: false,
        scores: 80
    },
    {
        id: 3,
        name: "Donald",
        isStudent: true,
        scores: 77
    },
    {
        id: 4,
        name: "Mike",
        isStudent: false,
        scores: 83
    },
]


// // MAP
//
// // Custom "map" arrays method
// const getNames = (array) => {
//     const newArray = []
//     for (let i = 0; i < array.length; i++) {
//         newArray.push(array[i].name)
//     }
//     return newArray
// }
// console.log(getNames(users))
//
// const addScores = (array) => {
//     const result = []
//     const getNewScoresForResult = (el) => ({...el, scores: +el.scores + 5})
//     for (let i = 0; i < array.length; i++) {
//         result[i] = getNewScoresForResult(array[i])
//     }
//     return result
// }
// console.log(addScores(users))
//
// const getMappedArray = (array, mapFunction) => {
//     const result = []
//     for (let i = 0; i < array.length; i++) {
//         result[i] = mapFunction(array[i])
//     }
//     return result
// }
// console.log(getMappedArray(users, el => ({...el, isStudent: !el.isStudent})))
// console.log(getMappedArray(users, el => ({...el, scores: el.scores + 7})))
// console.log(getMappedArray(users, el => ({...el, name: "Name: " + el.name})))
//
// // using "map" arrays method
// console.log(users.map(el => ({...el, scores: el.scores + 7})))
//
//
// // FILTER
//
// const getFilteredArray = (array) => {
//     const result = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].scores > 80) {
//             result.push(array[i])
//         }
//     }
//     return result
// }
//
// console.log(getFilteredArray(users))
//
//
// const getFilteredArray2 = (array, filterFunction) => {
//     const result = []
//     for (let i = 0; i < array.length; i++) {
//         if (filterFunction(array[i]) === true) {
//             result.push(array[i])
//         }
//     }
//     return result
// }
// console.log(getFilteredArray2(users, el => el.scores > 30))
//
// // FIND
//
// const findElement = (array, findFunction) => {
//     for (let i = 0; i < array.length; i++) {
//         if (findFunction(array[i]) === true) {
//             return array[i]
//         }
//     }
//     return array
// }
//
// console.log(findElement(users, el => el.name === "Donald"))
// console.log(findElement(users, el => el.name === "Roma"))

// PUSH
//
// const createCustomPushMethod = (array, newItem) => {
//     array[array.length] = newItem
//     return array
// }
//
// console.log(createCustomPushMethod(users, {id: 5, name: "Roma", isStudent: false, scores: 99}))

// POP

// const createCustomPopMethod = (array) => {
//     array.length = array.length - 1
//     return array
// }
//
// console.log(createCustomPopMethod(users))

// UNSHIFT

// const createCustomUnshiftMethod = (array, newItem) => {
//     return [newItem, ...array]
// }
//
// console.log(createCustomUnshiftMethod(users, {id: 5, name: "Roma", isStudent: false, scores: 99}))
//


// SHIFT
// const createCustomShiftMethod = (array) => {
//     const newArray = []
//     for( let i = 0; i < array.length; i++){
//         if(i !== 0){
//             newArray.push(array[i])
//         }
//     }
//     return newArray
// }
// console.log(createCustomShiftMethod(users))

// // REVERSE
//
// const createCustomReverseMethod = (array) => {
//     const newArray = []
//     for( let i = array.length - 1; i >= 0; i--){
//         newArray.push(array[i]);
//     }
//     return newArray
// }
//
// console.log(createCustomReverseMethod(users))


// INCLUDES

const nums = [1,2,3,4,5]
const createCustomIncludesMethod = (array, el, startIndex = 0) => {
    const start = startIndex < 0 ? array.length + startIndex : startIndex
     for(let i = start; i < array.length; i++){
      if(el === array[i]){
          return true
      }
     }
     return false
}

console.log(createCustomIncludesMethod(nums, 3));
console.log(createCustomIncludesMethod(nums, 0));
console.log(createCustomIncludesMethod(nums, 1, -4))
console.log(createCustomIncludesMethod(nums, 2, -5))

// SLICE ???
// const nums = [1,2,3,4,5,6,7,8,9]
// const createCustomSliceMethod = (array, firstItem = 0, lastItem = array.length) => {
//     const newArray = []
//      for( let i = firstItem; i < lastItem; i++){
//         newArray[i - firstItem] = array[i];
//     }
//     return newArray
// }
//
// console.log(createCustomSliceMethod(nums, 3));
// console.log(createCustomSliceMethod(users, 3))
// console.log(createCustomSliceMethod(users, 3,4))

