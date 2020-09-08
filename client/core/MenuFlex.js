import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link  from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import  menuData from '../../models/MenuData';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: 3,
      },
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap'
    },
    button: {
      backgroundColor: '#083818',
    },
    link: {
      color: '#fff'
    }
}));

export default function MenuFlex() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" className={classes.button}>
          <Link to="/" component={RouterLink} className={classes.link}>
            HOME
          </Link>
      </Button>
      
      {menuData.map((data) => {
        return (
          <>
            <Button variant="contained" className={classes.button}>
              <Link component={RouterLink} to={data.url} className={classes.link}>
                {data.title}
              </Link>
            </Button>
          </>
        )
      })}
    </div>
  );
};