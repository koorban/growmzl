import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    image: {
        
        maxHeight: 480,
        width: "100%"
      },
});

export default function Image({image}) {
    const classes = useStyles();
    return (
        <img src={image} alt="home-images" className={classes.image}/>
    );
};