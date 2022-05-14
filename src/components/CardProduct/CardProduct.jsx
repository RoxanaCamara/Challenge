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
      backgroundColor: '#EB5353',
      cursor: 'pointer',
    },
  },
  paper: {
    backgroundColor: '#EB5353',
    position: 'absolute',
    width: '120px',
    margin: '30px'
  }

}));

export default function MediaCard({ product,  pricePoints = 2000, pricePointsUser = 0 }) {

  const classes = useStyles();
  const [disable, setDisable] = useState({ disable: true, points: 0 })
  const [show, setShow] = useState(false)

  const cantBuyProduct = (p1, p2) => {
    let r = p1 - p2
    setDisable({ disable: (r >= 0), points: r })
  }

  const inOver = (e) => {
    console.log(e)
    setShow(show && disable.disable)
  }

  useEffect(() => {
    cantBuyProduct(pricePoints, pricePointsUser)
  }, [])

  return (
    <>
      <Card sx={{ maxWidth: 345 }} className={disable.disable ? classes.cardDisabled : classes.card} 
      onMouseOver={() => setShow(true)} onMouseOut={() => setShow(false)}>

        {show && disable.disable &&
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="body2" component="div" color="text.secondary">
              ups.. te faltan <b>{disable.points}</b> puntos para poder comparlo
            </Typography>
          </Paper>}
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
            Price $ <Chip label={product.cost} color="primary" />
          </Typography>
          <Typography variant="body2" component="div" color="text.secondary">
            Points Price <Chip label={pricePoints} color="success" variant="outlined" />
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="success" disabled={disable.disable}>
            Comprar ahora
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
