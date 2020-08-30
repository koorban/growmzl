import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles({
  image: {
    minHeight: 300,
    maxHeight: 480,
    width: "100%"
  },
  wrapper: {
    position: 'relative',
    height: "100%",
  },
  root: {
    position: 'absolute',
    backgroundColor: '#083818',
    color: '#fff',
    bottom: 3,
    width: "100%",
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center'
  }
});

export default function ProductsList(props) {
  const classes = useStyles()

  return (
    <div className={classes.wrapper} >
      <CardActionArea>
        <img src={props.image} alt="home-images" className={classes.image}/>
        <div className={classes.root}>
          <Typography variant="h6" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" component="p">
            {props.description}
          </Typography>
        </div>
      </CardActionArea>
    </div>
  );
};