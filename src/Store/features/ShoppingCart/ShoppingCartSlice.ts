import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  items:CartItem[];
  total: number;
}
interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }
const mockShoppingCart: CartItem[] = [
    {id: 1,name: 'Item 1',price: 10,quantity: 0,},  
    {id: 2,name: 'Item 2',price: 20,quantity: 0,},
    {id: 3,name: 'Item 3',price: 30,quantity: 0,},
    {id: 4,name: 'Item 4',price: 40,quantity: 0,},
    {id: 5,name: 'Item 5',price: 50,quantity: 0,},
]

const initialState: CartState = {
  items: mockShoppingCart,
  total: 0,
};
export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    // הפונקציות שמשנות את ה-state
    addOneToCart: (state, action) => {
        const item = action.payload;
        const cartItem = state.items.find((cartItem) => cartItem.id === item.id);
        cartItem!.quantity++;
        state.total += cartItem!.price;
    },
    removeOneFromCart: (state, action) => {
        const item = action.payload;
        const cartItem = state.items.find((cartItem) => cartItem.id === item.id);
        if (cartItem!.quantity > 0) {
          cartItem!.quantity--;
          state.total -= cartItem!.price;
        }
    },
    emptyTheCart: (state) => {
        state.items.map((item) => (item.quantity = 0));
        state.total = 0;
      }
  },
});
export const { addOneToCart, removeOneFromCart, emptyTheCart} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
  
