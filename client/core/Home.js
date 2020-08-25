import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

//components
import HomeCards from './HomeCards';
import ShopMenu from '../core/Menu';

//data
import HomeData from '../../models/HomeData';

const UseStyles = makeStyles({
  spacing: {
    paddingBottom: 128,
    paddingLeft: '3em',
    paddingRight: '3em'
  }
});

export default function Home(){
  const classes = UseStyles();
  return (
    <div className={classes.spacing}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <ShopMenu/>
        </Grid>

        {HomeData.map((product) => {
          return(
            <>
              <Grid item xs={12} sm={4} md={4} lg={4} color="inherit">
                <Link to={product.url} component={RouterLink} color="inherit">
                  <HomeCards image={product.image} title={product.title} description={product.description} />
                </Link>
              </Grid>
            </>
          )
        })}
        
        <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
          <Link to="/contact" component={RouterLink} color="inherit">
            <HomeCards image="http://localhost:3000/dist/about-home.jpg" title="CONTACT US"/>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};