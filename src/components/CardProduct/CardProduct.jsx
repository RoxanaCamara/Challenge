import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardContent, CardMedia, Chip, Button, Typography, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomizedDialogs from '../DialogBuy/DialogBuy';

const useStyles = makeStyles(theme => ({
  card: {
    height: 380,
    width: 190,
    '&:hover': {
      backgroundColor: '#F2FFE9',
    },
  },
  cardDisabled: {
    '&:hover': {
      backgroundColor: '#DDDDDD',
    },
  },
  paper: {
    position: 'absolute',
    width: '120px',
    margin: '30px',
    backgroundColor: '#DDDDDD',
    color: '#F1EEE9'
  },
  button: {
    position: 'absolute',
    width: '120px',
    margin: '30px'
  },
  img: {
    width: 200,
    height: 120    
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
    
      <Card sx={{ maxWidth: 345 }} className={disable ? classes.cardDisabled : classes.card} 
      onMouseOver={() => setShow(true)} onMouseOut={() => setShow(false)}>

        { show && disable &&
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="body2" component="div" color="text.secondary">
              te faltan <b>{product.cost - pricePointsUser}</b> puntos para poder comparlo
            </Typography>
          </Paper>
        }
        <CardMedia
         className={classes.img}
          component="img"
          image={product.img.url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" component="div" color="text.secondary">
            Points Price <Chip label={product.cost} color="primary" />            
          </Typography>
          <Typography variant="body2" component="div" color="text.secondary">
           <Chip label={product.category} color="primary" />
          </Typography>
          
        </CardContent>
        <CardActions>
        {
          show && 
         <CustomizedDialogs  disabled={disable} handleBuy={handleBuyProduct} product={product} />
        }
        
        </CardActions>
      </Card>
    </>
  );
}
