import './App.css'
import Cart from './Cart'
import React, { useEffect, useState } from 'react'
import UserContext from './UserContext'
import Gifts from './Gifts'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import axios from 'axios'


const App = () => {

const [user, setUser] = useState('')
const [showCart, setShowCart] = useState(false)
const [selectedItems, setSelectedItems] = useState([])
const [items, setItems] = useState()

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
    <Container>
         <Box>
      <h1>Gift Express</h1>

    <UserContext.Provider value={user} >
     {showCart && <Cart />}
    <Gifts items={items} />
     </UserContext.Provider>
     </Box>
     </Container>
  )
}

export default App
