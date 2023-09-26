const todolistId_1 = "24jh-672b-156b-009f"
const todolistId_2 = "11gb-322b-121b-223f"

const todolists = [
    {
        todolistId: todolistId_1,
        title: "What to learn",
        filter: "All",
    },
    {
        todolistId: todolistId_2  ,
        title: "What to buy",
        filter: "All",
    },
]
console.log(todolists[0].todolistId)
const tasks = {
    [todolistId_1] : [
        {taskId: 0, title: "HTML", isDone: false},
        {taskId: 1, title: "CSS", isDone: false},
        {taskId: 2, title: "JS", isDone: true},
        {taskId: 3, title: "TS", isDone: true},
        {taskId: 4, title: "React", isDone: true}
        ],
    [todolistId_2] : [
        {taskId: 5, title: "Milk", isDone: true},
        {taskId: 6, title: "Bread", isDone: true},
        {taskId: 7, title: "Eggs", isDone: false},
        {taskId: 8, title: "Water", isDone: false},
        {taskId: 9, title: "Nuts", isDone: false}
    ],
}
console.log(tasks[todolistId_1])
console.log(tasks["24jh-672b-156b-009f"])
console.log(tasks[todolists[0].todolistId])