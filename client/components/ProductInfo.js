import React, { useState, useEffect } from 'react';
import { readByProductId } from './api.product';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import MenuHorizontal from '../core/MenuFlex';

const useStyles = makeStyles({
  root: {
    maxWidth: 750,
    margin: 'auto',
  },
  media: {
    height: 300,
  },
  title: {
      textAlign: 'center',
      paddingTop: 40,
      paddingBottom: 40
    },
    description: {
        textAlign: 'center',
        paddingBottom: 25
    },
    button: {
        margin: 'auto'
    },
    spacing: {
        paddingBottom: 200
    },
});

export default function ProductInfo({match}) {
    const classes = useStyles();
    const [ product, setProduct] = useState([]);
    
    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        readByProductId({id : match.params.productId}, signal).then((data) => {
            if (data && data.error) {
                console.log(data.error)
            } else {
                setProduct(data)
            }
            return function cleanUp() {
                abortController.abort();
            }
        });
    }, [match.params.id])

    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <MenuHorizontal/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography variant="h1" component="h2" className={classes.title}>
                    More Info
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <div className={classes.spacing}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={product.imageUrl}
                                title={product.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="h2" className={classes.title}>
                                    {product.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                                    Details: {product.description}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                                    {product.price} COP / {product.unit}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="medium" color="primary" variant="contained" className={classes.button}>
                                Add to Cart
                            </Button>
                            <Button size="medium" color="primary" variant="contained" className={classes.button}>
                                Check Out Now
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </Grid>
        </Grid>
    );
};