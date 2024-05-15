import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import EditTask from "../../../components/todo-edit";

export const TodosSlice = createSlice({
    name:"Todolist",
    initialState:{
        todos:[
            {
                title:"Go Shopping",
                id:uuid(),
                completed:false,
                edit:false,

            },
            {
                title:"Go to Schooll",
                id:uuid(),
                completed:false,
                edit:false,

            },
            {
                title:"Go to Club",
                id:uuid(),
                completed:false,
                edit:false,

            },
        ],
        todo:[]
},
    reducers:{
        addTodo: (state,{payload}) =>{
           if(state.todoValue){
            let newTodo = {
                title:state.todoValue,
                id:uuid(),
                completed:false,
                edit:false,
            }      
            state.todos = [newTodo, ...state.todos];
            state.todoValue = "";
        }
        },

        deleteTodo:(state,{payload}) =>{
            const filtered =   state.todos.filter((item) => item.id != payload)
            state.todos = filtered;
        },
        changeValue:(state,{payload}) => {
            state.todoValue = payload;
          },

          changeCompleted:(state,{payload}) => {    
             state.todos.find((item) => {
                if(item.id === payload) {
                    item.completed = !item.completed;
              
                }})   
          },
          editTodo:(state,{payload}) =>{
           const editedTodo =  state.todos.map((item) => {
                if(item.id === payload) {
                    item.edit = true;
           
             
                }})   

                state.todos = [...editedTodo];
          }
    }
})

export const todoActions = {
    ...TodosSlice.actions
  };

  export const todosReducer = TodosSlice.reducer;