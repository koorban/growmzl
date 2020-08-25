import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: 40,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(3)
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: '#B0B0B0'
  }
}));

export default function ProminentAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="body2">
              © Copyright 2020
          </Typography>
          <Typography className={classes.title}>
              <FacebookIcon/>
          </Typography>
          <Typography className={classes.title}>
              <TwitterIcon/>
          </Typography>
          <Typography className={classes.title}>
              <InstagramIcon/>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};