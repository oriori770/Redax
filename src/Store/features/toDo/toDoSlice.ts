import { createSlice } from "@reduxjs/toolkit";

interface ToDoState {
    todos: ToDoMission[];
}
interface ToDoMission {
    id: number;
    name: string;
    description: string;
    completed: boolean;
}

const mockToDos: ToDoMission[] = [
    { id: 1, name: 'Task 1', description: 'Task 1 description', completed: false },
    { id: 2, name: 'Task 2', description: 'Task 2 description', completed: false },
    { id: 3, name: 'Task 3', description: 'Task 3 description', completed: false },
    { id: 4, name: 'Task 4', description: 'Task 4 description', completed: false },    
    { id: 5, name: 'Task 5', description: 'Task 5 description', completed: false }
  ];
const initialState: ToDoState = {
    todos: mockToDos,
};
export const toDoSlice = createSlice({
    name: 'toDo',
    initialState,
    reducers: {
        completed: (state, action) => {
            const index = state.todos.findIndex((todo) => todo.id === action.payload);
            state.todos[index].completed = !state.todos[index].completed;
        }
    }
})
export const { completed } = toDoSlice.actions
export default toDoSlice.reducer

