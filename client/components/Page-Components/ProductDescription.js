import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function ProductDescription({ name, price, unit }) {
  return (
    <>
      <Typography variant="h5" component="h2">
        {name} 
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        COP ${price} / {unit}
      </Typography>
    </>
  );
};