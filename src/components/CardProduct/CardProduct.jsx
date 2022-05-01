import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//* Cada producto debe tener un precio en puntos de manera visible.
//* Debería haber una manera clara para el usuario de ver que productos puede comprar y cuales no.
//* El botón de comprar debería estar disponible en los productos que el usuario tiene suficientes puntos para comprar.
//* Un botón de "comprar ahora" debería mostrarse cuando el usuario interactúa con un producto que puede comprar.
//* Cuando el usuario no puede comprar un producto, debería ver cuantos puntos le faltan para poder comprarlo.
//* Un usuario no debería poder comprar un producto del cual no tiene suficientes puntos para comprar.


export default function MediaCard ({ name = "", price = 0, pricePoints = 0 } ) {
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
        <Typography variant="body2" color="text.secondary">
          Price $ {price} , Points Price {pricePoints}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
        <Button variant="contained" color="success">
        Comrar ahora
      </Button>
      </CardActions>
    </Card>
  );
}
