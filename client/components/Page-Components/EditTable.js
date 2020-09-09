import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    font: {
        fontWeight: 'bold',
        fontSize: '16px'
    }
});

export default function EditTable({ name, id }) {
    const classes = useStyles();

    return (
        <TableRow key={id}>
        <TableCell component="th" scope="row" className={classes.font}>
            Edit {name}
        </TableCell>
        <TableCell align="right">
            <TextField label="Price" margin="normal"/>
        </TableCell>
        <TableCell align="right">
            <TextField label="Unit" margin="normal"/>
        </TableCell>
        <TableCell align="right">
            <TextField label="Quantity" margin="normal"/>
        </TableCell>
        <TableCell align="right">
            <TextField label="Description" margin="normal"/>
        </TableCell>
        <TableCell align="right">
            <TextField label="Category" margin="normal"/>
        </TableCell>
        <TableCell align="right">
            <TextField label="Subcategory" margin="normal"/>
        </TableCell>
        <TableCell align="right">
            <TextField label="ImageURL" margin="normal"/>
        </TableCell>
        </TableRow>
    );
};