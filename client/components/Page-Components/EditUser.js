import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { updateUser } from '../Api/api.user';
import { removeUser } from '../Api/api.user'

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

export default function EditUser({ first_name, last_name, id, onClick }) {
    const classes = useStyles();

    const [ values, setValues ] = useState({
        first_name: '',
        last_name: '',
        email: '',
        error: '',
    });

    const handleChange = textField => event => {
        setValues({ ...values, [textField] : event.target.value })
    };

    const handleDelete = () => {
        removeUser({id}).then((data) => {
            if (data && data.error) {
                console.log(data.error)
            } else {
                onClick();
                alert('User Successfully deleted')
            }
        })
    };

    const handleSubmit = () => {
        let updatedUser = {
            first_name: values.first_name || undefined,
            last_name: values.last_name || undefined,
            email: values.email || undefined, 
        }
        updateUser({id}, updatedUser).then((data) => {
            if (data && data.error) {
                setValues({...values, error: data.error})
            } else {
                onClick()
                alert('User Successfully edited')
            }
        })
    };

    return (
        <TableRow key={id}>
        <TableCell component="th" scope="row" className={classes.font}>
            Edit {first_name} {last_name}
        </TableCell>
        <TableCell align="right">
            <TextField 
                label="First Name" 
                margin="normal"
                value={values.first_name}
                onChange={handleChange('first_name')}
            />
        </TableCell>
        <TableCell align="right">
            <TextField 
                label="Last Name" 
                margin="normal"
                value={values.last_name}
                onChange={handleChange('last_name')}
            />
        </TableCell>
        <TableCell align="right">
            <TextField 
                label="Email" 
                margin="normal"
                value={values.email}
                onChange={handleChange('email')}
            />
        </TableCell>
        <TableCell align="right">
            <Button onClick={handleSubmit} variant='contained' className={classes.button}>Confirm</Button>
        </TableCell>
        <TableCell align="right">
            <Button onClick={handleDelete} variant='contained' className={classes.button}>Delete</Button>
        </TableCell>
        </TableRow>
    );
};