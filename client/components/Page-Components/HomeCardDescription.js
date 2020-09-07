import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        backgroundColor: 'rgba(8, 56, 24, 0.9)',
        color: '#fff',
        bottom: 3,
        width: "100%",
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'center',
    }
});

export default function HomeCardDescription({title, description}){
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </div>
    );
};