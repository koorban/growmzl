import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FooterSignup from '../components/Page-Components/FooterSignup';
import FooterLinks from '../components/Page-Components/FooterLinks';
import FooterHelp from '../components/Page-Components/FooterHelp';
import Socials from '../components/Page-Components/Socials';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(8, 56, 24, 0.9)',
    color: '#cccccc',
    minHeight: 500,
    alignItems: 'center'
  },
  signup: {
    marginTop: 30,
    marginBottom: 160
  },
  links: {
    marginBottom: 20
  }
}));

export default function ProminentAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <div className={classes.signup}>
        <FooterSignup/>
      </div>

      <div className={classes.links}>
        <FooterLinks/>
      </div>

      <div className={classes.item}>
        <FooterHelp/>
      </div>

      <div>
        <Socials/>
      </div>

    </div>
  );
};