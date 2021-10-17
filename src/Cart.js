import './App.css'
import React, {useContext} from 'react'
import UserContext from './UserContext'


const Cart = () => {

  const user = useContext(UserContext)

  return (
    <div className="App">
     <p>This is cart</p>
     <p>{user}</p>
     
    </div>
  )
}

export default Cart
