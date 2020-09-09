import React, {useState} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

import { create } from './../Api/api.product';
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
        paddingBottom: 20,
        paddingTop: 20
    },
    submit: {
        marginBottom: 16,
        backgroundColor: '#083818',
        color: '#fff',
        marginRight: 8
    },
    spacing: {
        paddingBottom: 150
    },
    formControl: {
        margin: 20,
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
        dialogueOpen: false
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
        create(newProduct).then((data) => {
            if(data.error) {
                setValues({...values, error: data.error})
            } else {
                setValues({...values, error: '', dialogueOpen: true})
            }
        });
    };

    const message = `Product "${values.name}" was successfully created. Contact admin@growmzl.com for any questions. Thank you`;
    const title='Product was successfully created!';

    if (values.dialogueOpen) {
        return (
            <Dialogue message={message} title={title}/>
        );
    }
    return (
        <div className={classes.spacing}>
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
                <CardActions style={{justifyContent: 'center'}}>
                    <Button variant="contained" onClick={clickSubmit} className={classes.submit}>Submit</Button>
                    <RouterLink to='/'>
                        <Button variant="contained" className={classes.submit}>Cancel</Button>
                    </RouterLink>
                </CardActions>
            </Card>
        </div>
    );
};