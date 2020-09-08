import React , { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import MenuFlex from '../../core/MenuFlex';
import Title from '../Page-Components/Title';
import ProductDetails from '../Page-Components/ProductDetails';

export default function ProductInfoPage({ match }) {

    return (
        <Grid container style={{paddingLeft: '3em', paddingRight: '3em'}}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <MenuFlex/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Title title={'Item Details'}/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <ProductDetails id={match.params.productId}/>
            </Grid>
        </Grid>
    );
};