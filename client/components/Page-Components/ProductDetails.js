import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import { readByProductId } from '../Api/api.product';
import Description from './ProductDescription';
import ProductButton from './ProductDetailsButton';

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
    spacing: {
        paddingBottom: 200
    }
});

export default function ProductDetails({id}) {
    const classes = useStyles();
    const [ details, setDetails] = useState([]);
    
    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        readByProductId({id}, signal).then((data) => {
            if (data && data.error) {
                console.log(data.error)
            } else {
                setDetails(data)
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
                        image={details.imageUrl}
                        title={details.name}
                    />
                    <CardContent className={classes.title}>
                       <Description name={details.name} price={details.price} unit={details.unit}/>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                            Details: {details.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <ProductButton />
                </CardActions>
            </Card>
        </div>
    );
};