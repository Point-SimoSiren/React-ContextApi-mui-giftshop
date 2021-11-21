import './App.css'
import Cart from './Cart'
import React, { useEffect, useState } from 'react'
import UserContext from './Context/UserContext'
import ItemsContext from './Context/ItemsContext'
import CartItemsContext from './Context/CartItemsContext'
import Gifts from './Gifts'
import Container from '@mui/material/Container'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import axios from 'axios'


const App = () => {

const [user, setUser] = useState('')
const [show, setShow] = useState('products')
const [cartItems, setCartItems] = useState([])
const [items, setItems] = useState([])

useEffect(() => {
  setUser('Anna')
},[])

useEffect(() => {
  axios
    .get('http://localhost:3001/gifts')
    .then(response => {
      setItems(response.data)
    })
}, [])
  

  return (
    <div className="app">
    <Container>
         <Box>
      <h1>Gift Express</h1>

      <ButtonGroup id="navbuttons" color="secondary" aria-label="medium secondary button group">
          <Button onClick={() => setShow('products')}>Products</Button>
          <Button onClick={() => setShow('cart')}>Cart</Button>
          
      </ButtonGroup>

      <UserContext.Provider value={user} >

      {show === 'cart' && <Cart />}
     
      {show === 'products' && items && <Gifts items={items} />}

     </UserContext.Provider>
     </Box>
     </Container>
     
     </div>
  )
}

export default App
