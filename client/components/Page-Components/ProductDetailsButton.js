import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    submit: {
        margin: 'auto',
        backgroundColor: '#083818',
        color: '#fff'
    }
});

export default function ProductButton() {
    const classes = useStyles();

    return (
        <>
            <Button size="medium" variant="contained" className={classes.submit}>
                Add to Cart
            </Button>
            <Button size="medium" variant="contained" className={classes.submit}>
                Check Out Now
            </Button>
        </>
    );
};