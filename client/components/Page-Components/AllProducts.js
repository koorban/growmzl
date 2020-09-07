import React, { useState, useEffect }  from 'react';
import Grid from '@material-ui/core/Grid';
import { listAllProducts } from '../Api/api.product';
import  ProductCard from './ProductCard';


export default function AllProducts() {

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
        <>
            {products.map((product) => {
                return(
                    <Grid item xs={12} sm={4} md={4} lg={4} color="inherit">
                        <ProductCard name={product.name} image={product.imageUrl} price={product.price} unit={product.unit} id={product._id} />
                    </Grid>
                )
            })}
        </>
    )
};