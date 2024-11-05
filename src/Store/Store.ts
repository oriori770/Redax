import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter/counterSlice';
import toDoReducer from './features/toDo/toDoSlice';
import ShoppingCartReducer from "./features/ShoppingCart/ShoppingCartSlice";

export const store = configureStore({
reducer: {

        // כל reducer מייצג חלק שונה של ה-state
    counter: counterReducer,
    toDo: toDoReducer,
    ShoppingCart: ShoppingCartReducer
}
});

// נגדיר את הטיפוסים של ה-store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;//