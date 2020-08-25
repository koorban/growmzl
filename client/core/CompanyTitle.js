import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        borderRadius: 4,
        border: '2px solid black',
        paddingBottom: 10,
        paddingTop: 10,
        marginLeft: 80,
        marginRight: 80,
        marginBottom: 50,
        fontStyle: 'oblique',
        fontWeight: 'bold'
    }
});

export default function CompanyTitle() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography variant="h1" component="h2">
                Grow Mzl
            </Typography>
            <Typography variant="h5">
                Est. 2020
            </Typography>
        </div>
    );
};