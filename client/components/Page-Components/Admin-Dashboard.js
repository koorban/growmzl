import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Upload from '../Page-Components/Upload';
import EditProducts from '../Page-Components/EditProducts';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  root: {
        flexGrow: 1,
        marginBottom: 50
    },
    appbar: {
        backgroundColor: 'rgba(8, 56, 24, 0.9)',
    }
});

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Edit Products" {...a11yProps(0)} />
          <Tab label="Create New Product" {...a11yProps(1)} />
          <Tab label="Edit Users" {...a11yProps(2)} />
          <Tab label="Create New User" {...a11yProps(3)} />
          <Tab label="Log Out" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <EditProducts/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Upload/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Edit Users
      </TabPanel>
      <TabPanel value={value} index={3}>
        Create New User
      </TabPanel>
      <TabPanel value={value} index={4}>
        Log Out
      </TabPanel>
    </div>
  );
};