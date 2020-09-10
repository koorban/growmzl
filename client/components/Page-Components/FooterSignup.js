import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
        marginTop: 20,
        padding: 10
    },
    root: {
        textAlign: 'center',
        border: '3px solid',
        borderColor:'#bfbfbf',
        borderRadius: 10,
        padding: 15
    },
    button: {
        marginTop: 20,
        backgroundColor: '#bfbfbf'
    }
});

export default function FooterSignup() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h4">
                EMAIL SIGN UP
            </Typography>
            <Typography variant="body1">
                Be the first to hear about new updates and promotions
            </Typography>
            <Button  className={classes.button} variant="contained" href="/signup">
                Sign Up
            </Button>
        </div>
    );
};