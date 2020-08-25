import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Dialogue from './Dialogue';


// dont forget import api call and possibly import links

const UseStyles = makeStyles(theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: 72,
    },
    error: {
        verticalAlign: 'middle'
    },
    title: {
        marginTop: 25,
        marginBottom: 25,
        textAlign: 'center'
    },
    textField: {
        width: '25ch'
    },
    submit: {
        margin: 'auto',
        marginBottom: 16
    },
    formControl: {
        margin: 8,
        minWidth: 200
    },
    selectEmpty: {
        marginTop: 16
    },
    root: {
        display: 'flex'
    },
    margin: {
        margin: theme.spacing(1)
    }
}))

export default function AddProduct() {
    const classes = UseStyles();

    const [values, setValues] = useState({
        title: '',
        description: '',
        price: '',
        unit: '',
        category: '',
        quantity: '',
        error: '',
        redirect: false
    });

    const handleChange = textInput => event => {
        setValues({ ...values, [textInput]: event.target.value })
    };

    const message = `Product ${values.title} was successfully created. Contact admin@growmzl.com for any questions. Thank you`;
    const title='Product was successfully created!';

    if(values.redirect) {
        return (
            <Dialogue message={message} title={title}/>
        )
    }
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h6" className={classes.title}>
                    Add New Product
                </Typography>
                <TextField 
                  label="Title" 
                  className={classes.textField} 
                  value={values.title} 
                  onChange={handleChange('title')}
                  helperText="Please enter the products name or title"
                />
                <FormControl className={classes.formControl}>
                    <InputLabel id="Category">Category</InputLabel>
                    <Select
                      labelId="Category"
                      id="Category"
                      value={values.category}
                      onChange={handleChange('category')}
                    >
                        <MenuItem value={'Strawberry'}>Strawberry</MenuItem>
                        <MenuItem value={'Basil'}>Basil</MenuItem>
                        <MenuItem value={'Greens'}>Greens</MenuItem>
                    </Select>
                </FormControl>
                <TextField 
                  label="Price" 
                  className={classes.textField} 
                  value={values.price} 
                  onChange={handleChange('price')}
                
                />
                <FormControl className={classes.formControl}>
                    <InputLabel id="Unit Type">Unit</InputLabel>
                    <Select 
                      labelId="Unit Type"
                      id="Unit Type"
                      value={values.unit}
                      onChange={handleChange('unit')}
                    >
                      <MenuItem value={'Head'}>Head</MenuItem>
                      <MenuItem value={'Package'}>Package</MenuItem>
                      <MenuItem value={'Plant'}>Plant</MenuItem>
                      <MenuItem value={'Gram'}>Gram</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                  id="Description"
                  label="Description"
                  multiline
                  rowsMax={5} 
                  variant="outlined"
                  className={classes.textField} 
                  value={values.description} 
                  onChange={handleChange('description')}
                  helperText="Please provide a short product description"
                />
                <TextField 
                  label="Quantity" 
                  className={classes.textField} 
                  value={values.quantity} 
                  onChange={handleChange('quantity')}
                />
            </CardContent>
            <CardActions>
                <Button color="primary" variant="contained" className={classes.submit}>
                    Submit
                </Button>
            </CardActions>
        </Card>
    );
};