import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Store/Store";
import { emptyTheCart,addOneToCart,removeOneFromCart } from "../Store/features/ShoppingCart/ShoppingCartSlice";

const ShoppingCart = () => {
    const { items, total} = useSelector((state: RootState) => state.ShoppingCart);
    const dispatch = useDispatch();
  return (
    <>
    <div>ShoppingCart</div>
    <h3>Total: {total}</h3>
    {items.map((item) => (
      <div key={item.id}>
        name:  {item.name} - quantity: {item.quantity} -price: {item.price}
        <button onClick={() => dispatch(removeOneFromCart(item))}>-</button>
        <button onClick={() => dispatch(addOneToCart(item))}>+</button>
      </div>
    ))}
    <button onClick={() => dispatch(emptyTheCart())}>Empty the cart</button>
    </>
  )
}

export default ShoppingCart