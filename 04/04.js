const todolistId_1 = "24jh-672b-156b-009f"
const todolistId_2 = "11gb-322b-121b-223f"

const [todolists,setTodolists] = [
    {
        todolistId: todolistId_1,
        title: "What to learn",
        filter: "All",
    },
    {
        todolistId: todolistId_2  ,
        title: "What to buy",
        filter: "All",
    }
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

// Код ниже не будет работать из-за отсутствия подключенного useState c функцией setTasks

// const addTodolist = (newTitle) =>{
//     const todolistId = "1243-12-15-235-e3456-1214"
//     const newTodolist = {todolistId, title: newTitle, filter: "All"}
//     setTodolists([...todolists, newTodolist])
//     setTasks({...tasks, [todolistId]:[]})
// }
// const changeStatus = () => {
//     setTasks({...tasks, [todolistId_1]: tasks[todolistId_1].map(el => el.id === 3 ? {...el, isDone: false}: el )})
// }
//
// const deleteTask = (todoId, taskId) => {
//     const todoTasks = tasks[todoId]
//     const updatedTask = todoTasks.filter(el => el.id !== taskId )
//     const copyTasks = {...tasks, [todoId]: updatedTask}
// }
// const deleteTask2 = (todoId, taskId) => {
//     setTasks({...tasks, [todoId]: tasks[todoId].filter(el=>el.id !== taskId)})
// }