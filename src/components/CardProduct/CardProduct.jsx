import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardContent, CardMedia, Chip, Button, Typography, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  card: {
    '&:hover': {
      backgroundColor: '#CCF3EE',
      cursor: 'pointer',
    },
  },
  cardDisabled: {
    '&:hover': {
      backgroundColor: '#7F8487',
      cursor: 'pointer',
    },
  },
  paper: {
    position: 'absolute',
    width: '120px',
    margin: '30px'
  }

}));

export default function MediaCard({ product, pricePointsUser, buyProduct }) {

  const classes = useStyles();
  const [disable, setDisable] = useState(true)
  const [show, setShow] = useState(false)

  
  const cantBuyProduct = (p1, p2) => {
    let result = (p1 -  p2) > 0
    setDisable( result)
  }

  const handleBuyProduct = () => {
    buyProduct(pricePointsUser - product.cost )
  }

  

  useEffect(() => {
    cantBuyProduct( product.cost, pricePointsUser)
  }, [])

  useEffect(() => {
    cantBuyProduct( product.cost, pricePointsUser)
  }, [pricePointsUser])

  return (
    <>
      <Card sx={{ maxWidth: 345 }} className={disable.disable ? classes.cardDisabled : classes.card} 
      onMouseOver={() => setShow(true)} onMouseOut={() => setShow(false)}>

        { show && disable &&
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="body2" component="div" color="text.secondary">
              te faltan <b>{product.cost - pricePointsUser}</b> puntos para poder comparlo
            </Typography>
          </Paper>
        }


        {
          show && (!disable)  &&
          <Button variant="contained" onClick={handleBuyProduct} color="success" className={classes.paper} disabled={disable}>
           Comprar ahora
         </Button>
        }

        <CardMedia
          component="img"
          height="140"
          image={product.img.url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" component="div" color="text.secondary">
            {product.category}
          </Typography>
          <Typography variant="body2" component="div" color="text.secondary">
            Points Price $ <Chip label={product.cost} color="primary" />
          </Typography>
        </CardContent>
        <CardActions>
         
        </CardActions>
      </Card>
    </>
  );
}
