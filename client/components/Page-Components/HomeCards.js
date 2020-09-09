import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import Description from '../Page-Components/HomeCardDescription';

const useStyles = makeStyles({
  wrapper: {
    position: 'relative',
    height: "100%",
  },
  image: {
    maxHeight: 480,
    width: '100%'
  }
});

export default function HomeCards({image, title, description}) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper} >
      <CardActionArea>
        <img className={classes.image} src={image}/>
        <Description title={title} description={description}/>
      </CardActionArea>
    </div>
  );
};