import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles({
  image: {
    minHeight: 340,
    maxHeight: 340,
    width: "100%"
  },
  wrapper: {
    position: 'relative',
    height: "100%",
  },
  root: {
    position: 'absolute',
    bottom: 3,
    width: "100%",
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center'
  }
});

export function ProductItem(props) {
  const classes = useStyles()

  return (
    <div className={classes.wrapper} >
        <CardActionArea>
          <Link component={RouterLink} to={{ pathname: "/products/product/" + props.id, }}>
            <img src={props.image} alt="products" className={classes.image}/>
            <div className={classes.root}>
              <Typography variant="h6" component="h2">
                {props.name}
              </Typography>
              <Typography variant="body2" component="p">
                COP ${props.price} /  {props.unit}
              </Typography>
            </div>
          </Link>
        </CardActionArea>
    </div>
  );
};