import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import backdropImage from '../../dist/backdroplogo.jpg';

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        bottom: 3,
        width: "100%",
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
    },
    image: {
        minHeight: 240,
        maxHeight: 240,
        width: "100%"
    },
    wrapper: {
        position: 'relative',
        height: "100%",
        marginBottom: 60
    },
});

export default function CompanyTitle() {
    const classes = useStyles()
    return (
        <>
            <div className={classes.wrapper}>
                <img src={backdropImage} className={classes.image}/>
                <div className={classes.root}>
                    <Typography variant="h1" component="h2">
                        Grow Mzl
                    </Typography>
                    <Typography variant="h5">
                        Est. 2020
                    </Typography>
                </div>
            </div>
        </>
    );
};