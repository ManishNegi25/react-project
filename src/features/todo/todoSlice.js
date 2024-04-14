import { createSlice, nanoid } from '@reduxjs/toolkit'

const  initialState={
     todos:[
        {id:1,message:"hello manish"}
    ]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addToDo:(state,action)=>{
            const todo={
                id:nanoid(),
                message:action.payload
            }
            state.todos.push(todo)
        },

        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo:(state,action)=>{
            const { id, message } = action.payload;
            const todoIndex = state.todos.findIndex(todo => todo.id === id);
            if (todoIndex !== -1) {
              state.todos[todoIndex].message = message;
            }
        }
        
    }
})
export const {addToDo,deleteTodo,updateTodo}=todoSlice.actions

export default todoSlice.reducer