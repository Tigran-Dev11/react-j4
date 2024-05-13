import  axios from 'axios'


export const todoServices = {
    getTodos: ()=> axios('https://jsonplaceholder.typicode.com/todos')  //replace to .env file
}