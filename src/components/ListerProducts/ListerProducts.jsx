import { Grid } from '@mui/material';
import React from 'react'
import MediaCard from '../CardProduct/CardProduct';

export const ListerProducts = ({ productosCurrent, points, handleBuyProduct }) => {
    return (
        <Grid container direction="row" style={{ padding: '30px 70px' }} columns={12}>
            {productosCurrent.map(function ene(p, i) {
                return (<Grid item key={i} xs={3} style={{ padding: '13px  14px' }}>
                    <MediaCard key={i} product={p} pricePoints={p.pricePoints} pricePointsUser={points} buyProduct={handleBuyProduct} />
                </Grid>)
            }
            )}</Grid>
    )
}
