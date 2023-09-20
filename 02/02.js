const users = [
    {
        id: 1,
        name: "Anna",
        isStudent: true
    },
    {
        id: 2,
        name: "Alex",
        isStudent: false
    },
    {
        id: 3,
        name: "Donald",
        isStudent: true
    },
    {
        id: 4,
        name: "Mike",
        isStudent: false
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