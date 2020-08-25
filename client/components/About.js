import React from 'react';
import Grid from '@material-ui/core/Grid';
import AddProduct from './AddProduct';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    grid:{
        paddingBottom: 200
    }
})

export default function About(){
    const classes = useStyles()
    return (
        <Grid container className="mainContainer" >
            <Grid item xs={12} sm={12} md={8} lg={8} xl={6} className={classes.grid}>
                <AddProduct/>
            </Grid>
        </Grid>
    )
};