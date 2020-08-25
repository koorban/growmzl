import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuFlex from '../core/MenuFlex';
import { listAllProducts } from './api.product';
import { ProductItem } from './ProductItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    spacing: {
        paddingBottom: 128,
        paddingLeft: '3em',
        paddingRight: '3em'
    },
    title: {
        textAlign: 'center',
        paddingTop: 40,
        paddingBottom: 40
    },
});

export default function Products(){
    const classes = useStyles();
    const [products, setProducts] = useState([]);
    
    useEffect(()=> {
        const abortController = new AbortController();
        const signal = abortController.signal;

        listAllProducts(signal).then((data) => {
            if (data && data.error) {
                console.log(data.error)
            } else {
                setProducts(data)
            }
        });
        return function cleanup(){
            abortController.abort();
        };
    }, []);

    return (
        <div className={classes.spacing}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <MenuFlex/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography variant="h1" component="h2" className={classes.title}>
                        All Items
                    </Typography>
                </Grid>

                {products.map((product) => {
                return(
                    <>
                    <Grid item xs={12} sm={4} md={4} lg={4} color="inherit">
                        <ProductItem name={product.name} image={product.imageUrl} price={product.price} unit={product.unit} id={product._id} />
                    </Grid>
                    </>
                )
                })}
            </Grid>
        </div>
    );
};