import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link  from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import { Link as RouterLink } from 'react-router-dom';

//data
import  menuData from '../../models/MenuData';

const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: '#083818',
    minHeight: "100%",
    width: '100%',
    textAlign: 'center'
  },
  links: {
    lineHeight: 2
  },
  main: {
    paddingTop: 50,
    paddingBottom: 30,
    color: '#fff'
  },
  typography: {
    paddingTop: 10,
    paddingBottom: 10,
    color: '#fff',
    lineHeight: 2,
  }
}));

export default function Menu() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link to="/" component={RouterLink} color="inherit">
        <Typography variant="h5" component="h2" className={classes.main}>
          HOME
        </Typography>
      </Link>
      <Divider/>
      {menuData.map((data) => {
      return (
        <>
          <Typography className={classes.typography}>
            <Link component={RouterLink} to={data.url} className={classes.links}  color="inherit" variant="body2">
              {data.title}
            </Link>
          </Typography>
        </>
      )
      })}
    </div>
  );
};