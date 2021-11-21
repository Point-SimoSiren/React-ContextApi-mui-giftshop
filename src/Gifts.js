import './App.css'
import Cart from './Cart'
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'


const Gifts = ({items}) => {


  return (
    
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {items && items.map(i => (
             <Grid item xs={3} sm={3} md={3} lg={3} key={i.id}>
        
                 <Card>
                     <CardHeader title={i.name}>
                        
                    </CardHeader>
                    <CardContent>
                         {i.name}
                    </CardContent>
                </Card>
            </Grid> 
    ))
    }
    </Grid>
  )
}

export default Gifts