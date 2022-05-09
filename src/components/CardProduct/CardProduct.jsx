import React, { useState, useEffect } from 'react';
import {Card, CardActions, CardContent, CardMedia, Chip, Button,Typography, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  card: {
    '&:hover': {
      background: '#CCF3EE',
      cursor: 'pointer',
      '& $hide': {
        opacity: 1,
        transition: '0.6s',
      },
    },
  },
  cardDisabled: {
    '&:hover': {
      background: '#F9CEEE',
      cursor: 'pointer',
      '& $hide': {
        opacity: 1,
        transition: '0.6s',
      },
    },
  },
  paper: {
    position: 'absolute'
  }

}));

export default function MediaCard ({ name = "Lorem impsum", price = 1000, pricePoints = 2000, pricePointsUser = 0 } ) {

  const classes = useStyles();
  const [disable, setDisable] = useState({disable: true, points: 0})

  const cantBuyProduct = (p1, p2) => {
    let r = p1- p2
    setDisable({disable: (r >= 0), points: r} )
  } 

  useEffect(() => {
    cantBuyProduct( pricePoints, pricePointsUser)
  }, [])

  return (
    <>
              
    <Card sx={{ maxWidth: 345 }} className={ disable.disable ? classes.card : classes.cardDisabled}>

    <Paper elevation={3} className={classes.paper}>
          <Typography variant="body2" component="div" color="text.secondary">
              ups.. te faltan <b>{disable.points}</b> puntos para poder comparlo
          </Typography>
      </Paper>
      
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
