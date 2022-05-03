import React, { useState, useEffect } from 'react';
import {Card, CardActions, CardContent, CardMedia, Chip, Button,Typography } from '@mui/material';

//* Cada producto debe tener un precio en puntos de manera visible.
//* Debería haber una manera clara para el usuario de ver que productos puede comprar y cuales no.
//* El botón de comprar debería estar disponible en los productos que el usuario tiene suficientes puntos para comprar.
//* Un botón de "comprar ahora" debería mostrarse cuando el usuario interactúa con un producto que puede comprar.
//* Cuando el usuario no puede comprar un producto, debería ver cuantos puntos le faltan para poder comprarlo.
//* Un usuario no debería poder comprar un producto del cual no tiene suficientes puntos para comprar.


export default function MediaCard ({ name = "Lorem impsum", price = 1000, pricePoints = 2000, pricePointsUser = 0 } ) {

  const [disable, setDisable] = useState({disable: true, points: 0})

  const cantBuyProduct = (p1, p2) => {
    let r = p1- p2
    setDisable({disable: (r >= 0), points: r} )
  } 

  useEffect(() => {
    cantBuyProduct( pricePoints, pricePointsUser)
  }, [])
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://cl-mycooktouch.group-taurus.com/image/recipe/545x395/arroz-blanco"
        alt="green iguana"
      />
      <CardContent>        
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" component="div" color="text.secondary">
          Price $ <Chip label={price} color="primary" />
        </Typography>
        <Typography variant="body2" component="div" color="text.secondary">
          Points Price <Chip label={pricePoints} color="success" variant="outlined" />
        </Typography>
        {
          disable.disable && 
          <Typography variant="body2" component="div" color="text.secondary">
            ups.. te faltan <b>{disable.points}</b> puntos para poder comparlo
        </Typography>
        }
      </CardContent>
      <CardActions>
        <Button variant="contained" color="success" disabled={disable.disable}>
        Comprar ahora
      </Button>
      </CardActions>
    </Card>
  );
}
