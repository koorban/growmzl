import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    links: {
        color: '#bfbfbf',
        marginRight: 20
    },
});

export default function FooterLinks() {
  const classes = useStyles();

  return (
        <>
            <Typography>
                <Link href="/contact" variant="body2" className={classes.links}>
                    Contact
                </Link>
                <Link href="/signup" variant='body2' className={classes.links}>
                    Sign Up
                </Link>
                <Link href="/contact" variant="body2" className={classes.links}>
                    Returns
                </Link>
                <Link href="/contact"  variant="body2" className={classes.links}>
                    Track Shipment
                </Link>
            </Typography>
        </>
    );
};