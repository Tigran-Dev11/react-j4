import  axios from 'axios'


export const todoServices = {
    getTodos: ()=> axios(process.env.TODOS_API_URL + "/todos") 
}