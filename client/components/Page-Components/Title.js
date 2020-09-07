import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    title: {
        textAlign: 'center',
        paddingTop: 40,
        paddingBottom: 40
    },
});

export default function Title({title}){
    const classes = useStyles();

    return (
        <Typography variant="h1" component="h2" className={classes.title}>
            {title}
         </Typography>
    )
};