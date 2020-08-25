import React, {useState} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

import MenuFlex from '../core/MenuFlex';
import { create } from './api.product.js';
import Dialogue from './Dialogue';

const useStyles = makeStyles({
    card: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: 40,
        paddingBottom: 16
    },
    error: {
        verticalAlign: 'middle'
    },
    title: {
        marginTop: 16,
        textAlign: 'center',
        paddingBottom: 40,
        paddingTop: 40
    },
    submit: {
        margin: 'auto',
        marginBottom: 16
    },
    spacing: {
        paddingBottom: 250
    },
    formControl: {
        margin: 40,
        minWidth: 120
    },
});

export default function uploadProduct() {
    const classes = useStyles();
    const [values, setValues] = useState({
        name: '',
        description: '',
        category: '',
        price: '',
        unit: '',
        quantity: '',
        imageUrl: '',
        error: '',
        redirect: false
    });

    const handleChange = name => event => {
        setValues({...values, [name] : event.target.value });
    };

    const clickSubmit = () => {
        let newProduct = {
            name: values.name || undefined,
            description: values.description || undefined,
            category: values.category || undefined,
            price: values.price || undefined,
            unit: values.unit || undefined,
            quantity: values.quantity || undefined,
            imageUrl: values.imageUrl || undefined
        }
        console.log(newProduct)
        create(newProduct).then((data) => {
            if(data.error) {
                setValues({...values, error: data.error})
            } else {
                setValues({...values, error: '', redirect: true})
            }
        });
    };

    const message = `Product "${values.name}" was successfully created. Contact admin@growmzl.com for any questions. Thank you`;
    const title='Product was successfully created!';

    if (values.redirect) {
        return (
            <Dialogue message={message} title={title}/>
        )
    }
    return (
        <div className={classes.spacing}>
            <MenuFlex/>
            <Typography variant='h2' className={classes.title}>
                Add A New Product
            </Typography>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h6" className={classes.title}>
                        New Product
                    </Typography>
                    <br/>
                    <FormControl className={classes.formControl}>
                        <TextField 
                            id="name" 
                            label="Name" 
                            className={classes.textField} 
                            value={values.name} 
                            onChange={handleChange('name')}
                        />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="category">Category</InputLabel>
                        <Select
                            labelId="category"
                            id="category"
                            value={values.category}
                            onChange={handleChange('category')}
                        >
                            <MenuItem value={'Strawberry'}>Strawberry</MenuItem>
                            <MenuItem value={'Basil'}>Basil</MenuItem>
                            <MenuItem value={'Greens'}>Greens</MenuItem>
                        </Select>
                    </FormControl>
                    <br/>
                    <FormControl className={classes.formControl}>
                        <TextField
                            id="price"
                            label="Price"
                            className={classes.textField}
                            value={values.price}
                            onChange={handleChange('price')}
                            margin="normal"
                        />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="unit">Unit</InputLabel>
                        <Select
                            labelId="unit"
                            id="unit"
                            value={values.unit}
                            onChange={handleChange('unit')}
                        >
                            <MenuItem value={'Package'}>Package</MenuItem>
                            <MenuItem value={'Jar'}>Jar</MenuItem>
                            <MenuItem value={'Plant'}>Plant</MenuItem>
                            <MenuItem value={'Head'}>Head</MenuItem>
                        </Select>
                    </FormControl>
                    <br/>
                    <FormControl className={classes.formControl}>
                        <TextField
                            id="quantity"
                            label="Quantity"
                            className={classes.textField}
                            value={values.quantity}
                            onChange={handleChange('quantity')}
                            margin="normal"
                        />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField
                            id="imageUrl"
                            label="imageUrl"
                            className={classes.textField}
                            value={values.imageUrl}
                            onChange={handleChange('imageUrl')}
                            margin="normal"
                        />
                    </FormControl>
                    <br/>
                    <FormControl className={classes.formControl}>
                        <TextField 
                            id="description"
                            label="description"
                            value={values.description}
                            onChange={handleChange('description')}
                            className={classes.textField}
                            margin= "normal"
                        />
                    </FormControl>
                    {
                        values.error && (<Typography component="p" color="error">
                            <Icon color="error" className={classes.error}>Error</Icon>
                            {values.error}
                        </Typography>)
                    }
                </CardContent>
                <CardActions>
                    <Button color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>Submit</Button>
                    <RouterLink to='/' className={classes.submit}>
                        <Button variant="contained">Cancel</Button>
                    </RouterLink>
                </CardActions>
            </Card>
        </div>
    );
};