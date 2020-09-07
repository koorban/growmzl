import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import Description from '../Page-Components/HomeCardDescription';
import Image from '../Page-Components/Image';

const useStyles = makeStyles({
  wrapper: {
    position: 'relative',
    height: "100%",
  },
});

export default function HomeCards({image, title, description}) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper} >
      <CardActionArea>
        <Image image={image}/>
        <Description title={title} description={description}/>
      </CardActionArea>
    </div>
  );
};