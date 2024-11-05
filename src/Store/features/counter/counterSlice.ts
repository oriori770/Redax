import { createSlice } from "@reduxjs/toolkit";
interface CounterState {
  count: number;
}

const initialState: CounterState = {    
  count: 0,
};
export const counterSlice = createSlice({
  // שם ייחודי לזיהוי ה-slice

  name: "counter",
  initialState,
  reducers: {
    // הפונקציות שמשנות את ה-state

    increment: (state) => {
      state.count += 1;

      // Toolkit Redux מאפשר לנו "לשנות" את ה-state ישירות
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

// ייצוא ה-actions לשימוש בקומפוננטות

export const { increment, decrement } = counterSlice.actions;

// ייצוא ה-reducer לשימוש ב-store

export default counterSlice.reducer;
