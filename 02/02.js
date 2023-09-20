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

const getMappedArray = (array, mapFunction) =>{
    const result = []
    for(let i = 0; i < array.length; i++){
        result[i] = mapFunction(array[i])
    }
    return result
}
console.log(getMappedArray(users, el=> ({...el, isStudent: !el.isStudent})))
console.log(getMappedArray(users, el=> ({...el, scores: el.scores + 7})))
console.log(getMappedArray(users, el=> ({...el, name: "Name: " + el.name})))

// using "map" arrays method
console.log(users.map(el=>({...el, scores: el.scores +7})))

const getFilteredArray = (array) =>{
    const result = []
    for(let i = 0; i < array.length; i++){
        if(array[i].scores > 80){
            result.push(array[i])
        }
    }
    return result
}

console.log(getFilteredArray(users))

const getFilteredArray2 = (array, filterFunction) =>{
    const result = []
    for(let i = 0; i < array.length; i++){
        if(filterFunction(array[i]) === true){
            result.push(array[i])
        }
    }
    return result
}
console.log(getFilteredArray2(users, el=> el.scores > 30))