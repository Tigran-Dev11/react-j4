import { createSlice } from "@reduxjs/toolkit";

export const TodosSlice = createSlice({
    name:"Todolist",
    initialState:{
        todos:[
            {
                name:"Go Shopping",
                id:Math.random(),
                completed:false,
            },
            {
                name:"Go to Schooll",
                id:Math.random(),
                completed:false,
            },
            {
                name:"Go to Club",
                id:Math.random(),
                completed:false,
            },
        ],
        todo:[]
},
    reducers:{
        addTodo: (store,action ,e) =>{
            e.preventDefault();
            store.push({
                name:action.payload.name,
                id:action.payload.id,
                completed:false,
            })
        },
        deleteTodo:(store,action) =>{
            const todo =  store.find((todo) => todo.id != action.payload)
              todo.completed = !todo.completed

        },
        changeValue:(store,action,e) => {
            const value = (e.target.value);
            console.log(e.target.value);
          },
    }
})

export const todoActions = {
    ...TodosSlice.actions
  };

  export const todosReducer = TodosSlice.reducer;