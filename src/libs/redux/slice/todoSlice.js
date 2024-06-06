import { createSlice } from "@reduxjs/toolkit";


export const TodoSlice = createSlice({
    name:"TodoList",
    initialState:{
        todos:[],
todoValue:"",
    },

    reducers:{

        getValue:(state,{payload}) =>{
          state.todoValue = payload

        },
        addTodo:(state) =>{
            if(state.todoValue){
                let newTodo={
                    title:state.todoValue,
                    id:Math.random(Math.floor()),
                    completed:false,
                    edith:false
                }

                state.todos = [newTodo , ...state.todos]
                localStorage.setItem("todos" , JSON.stringify(...state.todos))


               state.todoValue = ""

            }

        },
        deleteTodo:(state , {payload}) =>{
           state.todos = state.todos.filter((item) => item.id != payload)
      

        },

        isCompleted:(state,{payload}) =>{
          state.todos.filter((item)=>{
                if(item.id === payload){
                    item.completed = !item.completed
                }
            })
        }

    }

})

export const todosAction = {
    ...TodoSlice.actions
}

export const todoReducer = TodoSlice.reducer;