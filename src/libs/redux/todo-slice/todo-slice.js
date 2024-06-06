import { createSlice } from "@reduxjs/toolkit"


export const TodoSlice = createSlice({
    name:"TodoList",
    initialState:{
        todos :[],
todoValue :"",
todo:[]
    },
    reducers:{
        changeValue : (state, {payload}) => {
           state.todoValue = payload
        },
        addTodo : (state , {payload}) =>{
            if(state.todoValue){
                let newTodo ={
                    title: state.todoValue,
                    id: Math.floor(Math.random()),
                    complete: false,
                    edith: false,

                };
                state.todos= [newTodo, ...state.todos]
                state.todoValue = ""
            }
        },
        deleteTodo : (state , {payload}) =>{
           state.todos = state.todos.filter((item) => item.id != payload)
        },
        isComplete :(state , {payload}) =>{
            state.todos.find((item) =>{
                if(item.id === payload){
                    item.complete = ! item.complete

                }
            })
        },
        isEdith :(state,{payload}) =>{
           const EditedTodo =  state.todos.map((item) =>{
                if(item.id === payload){
                    return {
                    ...item,
                    edith:true
                    }

                }
                return item
            })
            state.todos = EditedTodo

            const EditedTodoItem = state.todos.find((item) => item.id === payload);
            state.todo = EditedTodoItem;
            state.todoValue= EditedTodoItem?.title;
        }
    }

})

export const todoActions = {
    ...TodoSlice.actions
} 

export const todosReducer = TodoSlice.reducer