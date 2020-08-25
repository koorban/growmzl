import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import  menuData from '../../models/MenuData';
import Button from '@material-ui/core/Button';
import Link  from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: 4,
      },
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap'
    },
    
}));

export default function MenuFlex() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary">
          <Link to="/" component={RouterLink} color="inherit">
              HOME
          </Link>
      </Button>
      
      {menuData.map((data) => {
      return (
      <>
          <Button variant="contained" color="primary">
              <Link component={RouterLink} to={data.url} color="inherit">
                {data.title}
              </Link>
          </Button>
      </>
      )
      })}
    </div>
  );
};