const users = [
    {
        id: 1,
        name: "Anna",
        isStudent: true,
        scores: 85
    },
    {
        id: 2,
        name: "Alex",
        isStudent: false,
        scores: 90
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

// Custom "map" arrays method

const getNames = (array) => {
    const newArray = []
    for(let i = 0; i < array.length; i++){
        newArray.push(array[i].name)
    }
    return newArray
}
console.log(getNames(users))

const addScores = (array) =>{
    const result = []
    const getNewScoresForResult = (el)=>({...el, scores: + el.scores + 5 })
    for(let i = 0; i < array.length; i++){
        result[i] = getNewScoresForResult(array[i])
    }
    return result
}
console.log(addScores(users))