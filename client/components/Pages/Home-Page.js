import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

//components
import ShopMenu from '../../core/Menu';
import HomeComponent from '../Page-Components/HomeComponent';

const UseStyles = makeStyles({
  spacing: {
    paddingBottom: 128,
  },
});

export default function Home(){
  const classes = UseStyles();
  return (
    <div className={classes.spacing}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <ShopMenu/>
        </Grid>
        <HomeComponent/>
      </Grid>
    </div>
  );
};