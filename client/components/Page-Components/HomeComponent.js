import React from 'react';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import HomeCards from './HomeCards';

//data
import HomeData from '../../../models/HomeData';

export default function HomeComponent() {
    return (
        <>
            {HomeData.map((product) => {
            return(
                <>
                <Grid item xs={12} sm={6} md={4} lg={4} color="inherit">
                    <Link to={product.url} component={RouterLink} color="inherit">
                        <HomeCards image={product.image} title={product.title} description={product.description} />
                    </Link>
                </Grid>
                </>
            )
            })}
            <Grid item xs={12} sm={6} md={8} lg={8} xl={8}>
                <Link to="/contact" component={RouterLink} color="inherit">
                    <HomeCards image="http://localhost:3000/dist/about-home.jpg" title="CONTACT US"/>
                </Link>
            </Grid>
        </>
    );
};