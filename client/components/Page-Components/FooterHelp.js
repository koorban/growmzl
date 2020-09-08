import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        color: '#bfbfbf',
    },
});

export default function FooterHelp() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div style={{marginBottom: 10}}>
                <Typography variant='h4'>
                    NEED HELP?
                </Typography>
            </div>
            <div style={{marginBottom: 10}}>
                <Typography variant='body2'>
                    Browse our articles or <Link href="/contact" variant="body1">
                        Contact us
                    </Link>
                </Typography>
            </div>
            <div style={{marginBottom: 10}}>
                <Divider/>
            </div>
        </div>
    );
};