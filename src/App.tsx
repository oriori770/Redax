import { useState } from 'react'

import './App.css'
import Counter from './component/Counter'
import ToDo from './component/ToDo'
import ShoppingCart from './component/ShoppingCart'

function App() {


  return (
    <>
        <div>
            <h1>wellcome to my Counter</h1>
            <Counter />
            <ToDo />
            <ShoppingCart />
        </div>
    </>
  )
}

export default App
