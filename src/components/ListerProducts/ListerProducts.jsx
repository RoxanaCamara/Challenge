import React, { useEffect, useState } from 'react'
import { Grid, Pagination } from '@mui/material';
import MediaCard from '../CardProduct/CardProduct';
import { SubNabigation } from '../SubNavigation/SubNabigation';
import { useProducts } from '../../hooks/useProducts';

export const ListerProducts = ({ points, productosCurrent }) => {    
  const [page, setPage] = useState({ currentPage: 1, totalPages: 1 })
  const { handlePage, handleBuyProduct } = useProducts(productosCurrent)

    useEffect(() => { 
        handlePage(1)
    }, [])


    

    return (
        <>
        <SubNabigation />
        <Grid container direction="row" style={{ padding: '30px 270px' }} columns={12}>
            {productosCurrent.map(function ene(p, i) {
                return (<Grid item key={i} xs={3} style={{ padding: '13px  7px' }}>
                    <MediaCard key={i} product={p} pricePoints={p.pricePoints} pricePointsUser={points} buyProduct={handleBuyProduct} />
                </Grid>)
            }
            )}
            <Grid item  xs={12}>
                <Pagination count={page.totalPages} page={page.currentPage} size="large" onChange={(event, value) => handlePage(value)}  />
            </Grid>
        </Grid>
        </>
    )
}
