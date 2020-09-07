import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MenuFlex from '../../core/MenuFlex';
import Title from '../Page-Components/Title';
import Category from '../Page-Components/Category';


const useStyles = makeStyles({
    spacing: {
        paddingBottom: 128,
        paddingLeft: '3em',
        paddingRight: '3em'
    },
});

export default function CategoryPage({ match }){
    const classes = useStyles();
    
    return (
        <div className={classes.spacing}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <MenuFlex/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Title title={match.params.category}/>
                </Grid>
                <Category category={match.params.category}/>
            </Grid>
        </div>
    );
};