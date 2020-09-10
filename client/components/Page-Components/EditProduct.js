import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { updateProduct } from '../Api/api.product';
import { deleteProduct } from '../Api/api.product';

const useStyles = makeStyles({
    font: {
        fontWeight: 'bold',
        fontSize: '16px'
    },
    button: {
        backgroundColor: '#083818',
        color: '#fff'
    }
});

export default function EditProduct({ name, id, onClick }) {
    const classes = useStyles();

    const [ values, setValues ] = useState({
        price: '',
        unit: '',
        quantity: '',
        description: '',
        category: '',
        subCategory: '',
        imageURL: '',
    });

    const handleChange = textField => event => {
        setValues({ ...values, [textField] : event.target.value })
    };

    const handleSubmit = () => {
        let product = {
            price: values.price || undefined,
            unit: values.unit || undefined,
            quantity: values.quantity || undefined, 
            description: values.description || undefined,
            category: values.category || undefined, 
            subCategory: values.subCategory || undefined, 
            imageURL: values.imagesURL || undefined,
        }

        updateProduct({id}, product).then((data) => {
            if (data && data.error) {
                console.log(data.error)
            } else {
                onClick()
                alert('Product edit was successful')
            }
        })
    };

    const handleDelete = () => {
        deleteProduct({id}).then((data) => {
            if (data && data.error) {
                console.log(data.error)
            } else {
                onClick()
                alert("Product Successfully deleted")
            }
        })
    };

    return (
        <TableRow key={id}>
        <TableCell component="th" scope="row" className={classes.font}>
            Edit {name}
        </TableCell>
        <TableCell align="right">
            <TextField 
                label="Price" 
                margin="normal"
                value={values.price}
                onChange={handleChange('price')}
            />
        </TableCell>
        <TableCell align="right">
            <TextField 
                label="Unit" 
                margin="normal"
                value={values.unit}
                onChange={handleChange('unit')}
            />
        </TableCell>
        <TableCell align="right">
            <TextField 
                label="Quantity" 
                margin="normal"
                value={values.quantity}
                onChange={handleChange('quantity')}
            />
        </TableCell>
        <TableCell align="right">
            <TextField 
                label="Description" 
                margin="normal"
                value={values.description}
                onChange={handleChange('description')}
            />
        </TableCell>
        <TableCell align="right">
            <TextField 
                label="Category" 
                margin="normal"
                value={values.category}
                onChange={handleChange('category')}
            />
        </TableCell>
        <TableCell align="right">
            <TextField 
                label="Subcategory" 
                margin="normal"
                value={values.subCategory}
                onChange={handleChange('subCategory')}
            />
        </TableCell>
        <TableCell align="right">
            <TextField 
                label="ImageURL" 
                margin="normal"
                value={values.imageURL}
                onChange={handleChange('imageURL')}
            />
        </TableCell>
        <TableCell align="right">
            <Button onClick={handleDelete} variant='contained' className={classes.button}>Delete</Button>
        </TableCell>
        <TableCell align="right">
            <Button onClick={handleSubmit} variant='contained' className={classes.button}>Confirm</Button>
        </TableCell>
        </TableRow>
    );
};