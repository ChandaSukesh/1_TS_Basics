import axios from 'axios'

const url= 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo{
    id:number,
    title:string,
    completed:boolean
}

axios.get(url).then((response)=>{
    const todo=response?.data as Todo
    //  below line, it throws error as Id is not present, it is id
    // const id=todo.Id
    const id=todo.id
    const title=todo.title
    const completed=todo.completed


    // TS throws an error, by changing the order of arguments it throws an error.
    // logTodo(id, completed,title)
    logTodo(id, title,completed)
   
})

const logTodo =(id: number, title:string,completed:boolean,)=>{
    console.log(`Hi ${id}, my name is ${title}, have you completed? ${completed}`)
}