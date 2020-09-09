import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { listAllProducts } from '../Api/api.product';
import { readByProductId } from '../Api/api.product';
import Title from './Title';
import EditTable from './EditTable';

const useStyles = makeStyles({
  table: {
     minWidth: 650,
    },
  submit: {
        backgroundColor: '#083818',
        color: '#fff',
    },
  title: {
        marginTop: 16,
        textAlign: 'center',
        paddingBottom: 20,
        paddingTop: 20
    },
});

export default function EditProducts() {
    const classes = useStyles();
    const [ products, setProducts ] = useState([]);
    const [ display, setDisplay ] = useState({
        productId: '', 
    });

    
    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        listAllProducts(signal).then((data) => {
            if (data && data.error) {
                console.log(data.error)
            } else {
                setProducts(data)
            }
        })
        return function cleanup(){
            abortController.abort();
        };
    },[]);

    function clickSubmit(product) {
        setDisplay({ ...display, productId: product._id })
        console.log(display)
    };
    
    return (
        <div style={{paddingLeft: '3em', paddingRight: '3em'}}>
            <Title title={'Edit Products'}/>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell align="right">Price&nbsp;(COP)</TableCell>
                        <TableCell align="right">Unit</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Description</TableCell>
                        <TableCell align="right">Category</TableCell>
                        <TableCell align="right">Subcategory</TableCell>
                        <TableCell align="right">Image&nbsp;(URL)</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <>
                                <TableRow key={product.name}>
                                <TableCell component="th" scope="row">
                                    {product.name}
                                </TableCell>
                                <TableCell align="right">{product.price}</TableCell>
                                <TableCell align="right">{product.unit}</TableCell>
                                <TableCell align="right">{product.quantity}</TableCell>
                                <TableCell align="right">{product.description}</TableCell>
                                <TableCell align="right">{product.category}</TableCell>
                                <TableCell align="right">{product.subCategory}</TableCell>
                                <TableCell align="right">{product.imageUrl}</TableCell>
                                <TableCell align="right">
                                    <Button onClick={() => clickSubmit(product)} variant='contained' className={classes.submit}>Edit</Button>
                                </TableCell>
                                </TableRow>
                                {
                                  display.productId === product._id ? <EditTable name={product.name} id={product._id}/> : null
                                } 
                            </>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};