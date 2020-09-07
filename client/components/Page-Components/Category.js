import React, { useState, useEffect } from 'react';
import { listByCategory } from '../Api/api.product';
import Grid from '@material-ui/core/Grid';
import ProductCard from '../Page-Components/ProductCard';

export default function Category({category}) {

    const [products, setProducts] = useState([]);

    useEffect(()=> {
        const abortController = new AbortController();
        const signal = abortController.signal;

        listByCategory({category}, signal).then((data) => {
            if (data && data.error) {
                console.log(data.error)
            } else {
                setProducts(data)
            }
        });
        return function cleanup(){
            abortController.abort();
        };
    }, [category]);

    return (
        <>
            {products.map((product => (
                <Grid item xs={12} sm={4} md={4} lg={3} color="inherit">
                    <ProductCard id={product._id} name={product.name} image={product.imageUrl} price={product.price} unit={product.unit}/>
                </Grid>
            )))} 
        </>
    )
}