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

import { list } from '../Api/api.user';
import Title from './Title';
import EditUser from './EditUser';

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

export default function ListUsers() {
    const classes = useStyles();

    const [ users, setUsers ] = useState([]);
    const [ display, setDisplay ] = useState({ userId: '' });
    const [ refresh, setRefresh ] = useState(false)

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        list(signal).then((data) => {
            if (data && data.error) {
                console.log(err)
            } else {
                setUsers(data)
                console.log(users)
            }
        })
        return function cleanup(){
            abortController.abort();
        };  
    },[refresh]);

    function clickSubmit(user) {
        setDisplay({ ...display, userId: user._id })
        console.log(display)
    };

    return (
        <div style={{paddingLeft: '3em', paddingRight: '3em'}}>
            <Title title={'Users'}/>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Users</TableCell>
                        <TableCell align="right">First Name</TableCell>
                        <TableCell align="right">Last Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <>
                                <TableRow key={user.first_name}>
                                <TableCell component="th" scope="row">
                                    {user.first_name}
                                </TableCell>
                                <TableCell align="right">{user.first_name}</TableCell>
                                <TableCell align="right">{user.last_name}</TableCell>
                                <TableCell align="right">{user.email}</TableCell>
                                <TableCell align="right">
                                    <Button onClick={() => clickSubmit(user)} variant='contained' className={classes.submit}>Edit</Button>
                                </TableCell>
                                </TableRow>
                                {
                                    display.userId === user._id ? 
                                    <EditUser 
                                        onClick ={() => setRefresh(!refresh)}
                                        id={user._id} 
                                        first_name={user.first_name} 
                                        last_name={user.last_name}
                                    /> : null
                                }
                            </>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};