import './App.css'
import React, {useContext} from 'react'
import UserContext from './Context/UserContext'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'


const Cart = () => {

  const user = useContext(UserContext)

  return (
    
      <Card>
          <CardHeader>
          <p>This is cart</p>
          </CardHeader>
          <CardContent>
          <p>This is cart</p>
          <p>{user}</p>
          <p>This is cart</p>
      </CardContent>
     </Card>
   
  )
}

export default Cart
