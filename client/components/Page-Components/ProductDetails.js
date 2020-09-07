import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import { readByProductId } from '../Api/api.product';

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
      paddingTop: 80,
      paddingBottom: 80
    },
    description: {
        textAlign: 'center',
        paddingBottom: 25
    },
    submit: {
        margin: 'auto',
        backgroundColor: '#083818',
        color: '#fff'
    },
    spacing: {
        paddingBottom: 200
    }
});

export default function ProductDetails({id}) {
   
    const classes = useStyles();
    const [ product, setProduct] = useState([]);
    
    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        readByProductId({id}, signal).then((data) => {
            if (data && data.error) {
                console.log(data.error)
            } else {
                setProduct(data)
            }
            return function cleanUp() {
                abortController.abort();
            }
        });
    }, [])
    
    return (
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
                    <Button size="medium" variant="contained" className={classes.submit}>
                        Add to Cart
                    </Button>
                    <Button size="medium" variant="contained" className={classes.submit}>
                        Check Out Now
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};